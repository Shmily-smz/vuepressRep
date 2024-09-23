### 1、问题现象

温州银行 2020 年 11 月 28 日反馈在昨日上线后 abc 卡顿，间歇性报出重复提交、获取 oid 失败等问题

<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20201130134315.png"  />

当切换到另一台 abs 后，恢复正常，操作一段时间后，再次感觉卡顿，现场遂联系产品跟进该问题

### 2、问题分析

由于昨日刚部署资源，出现该问题后，先从以下几个方面考虑

1. 部署资源包是否过大，导致宽带不足
2. 新部署资源对程序进行修改，导致 abs 或交易运行异常
3. abs 端存在内存或线程问题，导致 abs 异常

沟通取相关数据

1. 与行里沟通出现问题时宽带情况
2. 排查更新的资源，看对应更新内容是否对该问题产生影响
3. 抓取线程 dump、内存 dump
4. 取操作卡顿时，abc 与 abs 的日志

下面就获取到的数据做对应分析

1. 此次上线资源在 15M 左右，行里柜在线柜员数 600 左右，带宽 10M，理论上不会出现带宽不足，行里监控未检测带宽情况。另外，此次问题出现的时间点是 9:30-12:00，此时 abc 启动更新高峰的时间点已经过去
2. 更新的资源由项目组排查问题相关性
3. 28 日当天，一台 abs 也出现了问题，先取下该服务器线程 dump，内存 dump
4. 日志拿了客户端日志与服务端柜员日志，未获取关键信息

**以下为线程 dump 的分析**

![image-20201130141442669](https://jihulab.com/413343176/image/raw/master/lisijia/20201130141442.png)

![image-20201130141525651](https://jihulab.com/413343176/image/raw/master/lisijia/20201130141525.png)

可以看到`handler3`线程接收排队机过来的消息，记录日志获取一把锁，卡住了`Acceptor0.Processor57.Worker60`线程，`Acceptor0.Processor57.Worker60`又堵住了其他 599 个 abc 上来的工作线程

**以下为线程 dump 的分析**

抓取 dump 时，现场配置 abs 的内存为 10G，抓取到的 dump 文件大小为 13G，传输过程经历了一番波折

![image-20201130141804303](https://jihulab.com/413343176/image/raw/master/lisijia/20201130141804.png)

![image-20201130141838937](https://jihulab.com/413343176/image/raw/master/lisijia/20201130141839.png)

mat 中内存调整到 15G，耗时 1 小时，打开该 dump 文件，发现内存已经快要爆掉，占用最高的几个地方为 abc 的 5 个工作线程

![image-20201130142056817](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142056.png)

打开第一个线程中，占用空间最大的是一个 List，为 List<Map<String,String>>结构，Map 的 key 固定是下面 5 个
serialno buscode idcode checkre checkrebuff，该 List 大小为 200 多万

![image-20201130142211685](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142211.png)

![image-20201130142235700](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142235.png)

![image-20201130142400292](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142400.png)

调用线程可以看到，此时在执行一个 sql，并且该表特别大，执行的条件未生效，导致从数据库中查出超过 200w 条记录，查看其他几个线程，也是同样情况。

![image-20201130142421149](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142421.png)

![image-20201130142819944](https://jihulab.com/413343176/image/raw/master/lisijia/20201130142820.png)

### 3、问题解决

经过上面分析可知，此次问题由于新上的交易中，存在查询大量数据的行为，导致 abs 端在服务 5 个左右 abc 时，便出现了内存不足，导致操作缓慢，进而出现线程卡住，abc 卡住的情况

### 4、FAQ

1. 内存 dump 中查看几个 abc 接入线程的数据，有的 200w，有的 300w，查询同一张表，为什么结果大小不一致
   ​ --线程都在运行过程中，有的只读取了 200w 条进行了存储，有的读了 300w 条正在存储

2. 内存 dump 为什么 13G 那么大
   ​ --abs 启动内存 10G 情况下，dump 为 13G，可以基本断定内存出现了过多对象无法回收的问题。不过不建议配置 4G 以上的内存，因为一旦 4G 的 jvm 内存出现了泄露，会达到 6G 左右，需要使用 8G 以上的电脑才能分析的出，当配置成 10G 以上时，基本上有些情况 16G 内存也不一定能打开此 dump 了。

3. 看代码可知，这个 list 是个局部变量，为什么在 dump 中可以看得到，不应该是无法被 gc 的对象才会在 dump 中出现么
   ​ --该方法正在运行中，由于数据量过大，一直未运行结束，所以 list 一直在使用过程中，当然没有被 gc，dump 也可以抓到

4. 这种问题从其他地方是否可以获取些信息
   ​ --如果配置了 gc 日志，可以从 gc 中看到频繁 gc 的痕迹
