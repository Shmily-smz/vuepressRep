<template><div><h3 id="_1-需求分析" tabindex="-1"><a class="header-anchor" href="#_1-需求分析"><span>1：需求分析</span></a></h3>
<pre><code>徽商银行要求每个季度都对AB进行一次巡检。接到这个任务后，考虑的第一件事是，需要对AB的哪些内容进行巡检，以及如何巡检。为此，专门列出了两份清单，包括ABS巡检清单和ABC巡检清单。
</code></pre>
<p>ABS 巡检清单 1
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/1.png" alt="图片描述">
ABS 巡检清单 2
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/2.png" alt="图片描述">
ABS 巡检清单 3
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/3.png" alt="图片描述">
ABC 巡检清单 1
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/4.png" alt="图片描述">
ABC 巡检清单 2
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/5.png" alt="图片描述">
可以看到，要想收集服务端，需要执行的命令很多，为此，专门编写一个脚本来收集服务端信息。
ABS 信息收集脚本 1
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/6.png" alt="图片描述">
ABS 信息收集脚本 2
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/7.png" alt="图片描述">
ABS 信息收集脚本 3
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/8.png" alt="图片描述">
ABS 信息收集脚本 4
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/9.png" alt="图片描述">
ABS 信息收集脚本 5
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/10.png" alt="图片描述">
ABS 信息收集脚本 6
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/11.png" alt="图片描述">
脚本使用说明
A) 命令格式：
sh ABinfocheck_for_huishang.sh <code v-pre>&lt;ABS 绝对路径&gt;</code> &lt;脚本后缀名&gt; &lt;是否获取 ABS 的 javacore&gt; &lt;是否获取 ABS 的 heapdump&gt;
参数说明:
<code v-pre>&lt;ABS 绝对路径&gt;</code>:告诉脚本到哪个目录下去取 ABS 的相关配置、日志、启动和关闭 ABS 的脚本
&lt;脚本后缀名&gt;:实际生产上应该不止一个 ABS 实例，为了后续对收集到的 tar 来自哪个 ABS 实例，因此添加此参数。
&lt;是否获取 ABS 的 javacore&gt;:主要是针对不想获得或无法获取 javacore 的情况。
&lt;是否获取 ABS 的 heapdump&gt;:生产环境上获取 heapdump 要特别注意，业务忙时，最好不要取 heapdump，等到业务闲时再取。
B) 根据 abs 环境的不同运行 shell 的时候需要等候的时间有区别。特别是日志文件太多或太大时，时间会有点长。
C) 请先在与生产相同的测试环境下，测试该脚本是否有问题。
D) 运行的时候 会有下列提示信息，不影响程序运行
例：1、tar: ./log/communication.log: file changed as we read it
2、如果./log/目录下没有 jvm.log 在运行 shell 时会提示&quot;jvm.log 未生成&quot;
E) 运行说明
1、在运行 shell 时会提示输入 abs 的安装路径，需要正确输入
2、shell 会产生一个总的 tar 包(ABinfocheckResult_xxx.tar) ，里面包含：
a、ABinfoCheckResult.txt 该文件记录了服务器的各种信息(cpu、Mem...)及 abs 的部分说明。
b、configuration.tar 该 tar 包是 abs 目录下 configuration 文件夹的全部普通文件(除子文件夹)
c、收集日志，log 目录下: error.log、server.log、communication.log、monitor.log、trade.log、resource.log、metadata.log、aim.log、plugins_status、gc_xxx.log、jvm.log
d、preferenceServer 目录下：所有文件及子文件夹
e、abs 目录下：ABS 启动、关闭等脚本
f、根据脚本参数，也可能会有 javacore.txt、也可能会有 heapdump</p>
<p>这里简单说一下，jstack 命令是取线程 dump，即当前时刻进程中的所有线程的快照。可以看到当前有哪些线程，以及线程在干什么。比如出现 ABC 卡死时，应该取线程 dump。jmap 命令是取内存 dump，即当前时刻的内存快照。可以看到内存中有什么数据。比如出现 OOM 时，应该取内存 dump。
徽商银行有 12 台服务器，由于日志太多，逐一地查看每个日志文件几乎不可能。我们可以根据之前其他市场发生的问题的关键字进行搜索排查，比如” 找不到对应 Context”、” DataModel 未创建”、”Exception”等等。
其他市场出现过的问题，要重点关注。比如，集群消息导致线程增多、AIM 线程数量太多等等。
注：以上截图的内容都会以文档的形式提交到 master 的 Doc 下。</p>
<h3 id="_2-执行巡检" tabindex="-1"><a class="header-anchor" href="#_2-执行巡检"><span>2：执行巡检</span></a></h3>
<ol>
<li>早晨（柜员还没上班前）获取一次 heapdump。上传 nmon 工具和收集信息的脚本。</li>
<li>上午（业务忙时），运行 nmon 半小时，执行收集信息脚本获取到 ABS 服务器信息。（nmon 工具主要是用来监控 Linux 上的 cpu、内存、Network I/O 等性能指标的变化的一款工具。nmon 工具的具体使用可以参见 Git 下的：“Doc\AB4.x 压力测试相关资源\Linux&amp;Aix 系统资源监控工具 nmon”目录文件说明。）</li>
<li>下载收集到的信息。对 ABC 进行巡检。</li>
<li>晚上（柜员下班），再获取一次 heapdump。有条件的话，可以再运行半小时的 nmon。</li>
</ol>
<h3 id="_3-巡检问题分析" tabindex="-1"><a class="header-anchor" href="#_3-巡检问题分析"><span>3：巡检问题分析</span></a></h3>
<p>一、jstack 命令和 jmap 命令报错
徽商银行有 12 台服务器，其中有 11 台服务器在执行 jstack 或 jmap 命令时，报如下的错误，有 1 台服务器执行正常。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/12.png" alt="图片描述">
于是添加-F 参数后，再执行这个命令，会发现这个命令执行的很慢。
对比正常的服务器发现，报错的服务器上缺少如下文件：
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/13.png" alt="图片描述">
它正是一个 socket 文件。虽然该文件的大小为 0，但是我们新建一个.java_pid<code v-pre>&lt;pid&gt;</code>文件只是一个普通文件。因此手动新建此文件的话，再次执行 jstack 命令时，报如下的错：
<code v-pre>&lt;pid&gt;</code>: well-known file is not secure</p>
<p>也怀疑过 ABS 进程的线程太多，因此使用了 top –Hp <code v-pre>&lt;pid&gt;</code>命令查看有 400 多线程，不算太多。
因此怀疑是服务器可能有个定时清理/tmp 目录的功能，还在验证中。如果确实是定时清理导致的话，我们可以在定时清理功能中添加白名单。</p>
<p>二、heapdump 分析 1.对早晨取到的 heapdump 进行分析，未发现有泄漏的问题。 2.对晚上取到的 heapdump 进行分析
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/14.png" alt="图片描述">
发现 Context 占了 1GB
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/15.png" alt="图片描述">
发现已经被 disposed 的 SessionContext 有 265 个
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/16.png" alt="图片描述">
由于超时时间未到，未 disposed 的 SessionContext 有 269 个。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/17.png" alt="图片描述">
所有的 SubSessionContext 有 4699 个。
这里怀疑 SubSessionContext 有泄漏。当然 SubSessionContext 泄漏只是暂时的，因为在 SessionContext 超时后，它的所有 SubSessionContext 也会被清理。</p>
<p>源码分析
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/18.png" alt="图片描述">
上图可以看到，在服务端处理 invoke 请求时，可能存在创建多个 SubSessionContext 的情况。
这里举个交易场景的例子来说明一下：
在多交面板中，打开了 A 交易，A 交易初始化等产生的 invoke 都已经结束。这时 A 交易的一个事件，该事件的执行逻辑中有同步打开的方式打开 B 交易，并且该事件没有产生 invoke，只是在本地执行了一些客户端的平台技术组件，然后，B 交易发起 invoke 调用时，它就会出现创建两个 SubSessionContext 的情况。这种情况下，这两个 SubSessionContext 中的父 SubSessionContext 是没有机会 dispose 的。这样就产生了这种暂时性泄漏。
下图可能就是这种场景的一个真实写照
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/19.png" alt="图片描述"></p>
<p>三、javacore 分析
通过分析 javacore 文件，发现 process reaper 线程有 27 个之多
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/20.png" alt="图片描述">
初步怀疑是东方通的功能导致的。后续通过多次取 javacore 进行分析。
四、日志分析
在 errorLog.log 日志中，发现记录了大量的 F5 探测报文的日志，将日志记录由 error 改为 debug 即可。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/AB4.0巡检-徽商银行/21.png" alt="图片描述"></p>
<h3 id="_4-习题" tabindex="-1"><a class="header-anchor" href="#_4-习题"><span>4：习题</span></a></h3>
<p>jstack 命令以及 jmap 命令，哪个命令是取线程 dump，哪个命令是取内存 dump？</p>
</div></template>


