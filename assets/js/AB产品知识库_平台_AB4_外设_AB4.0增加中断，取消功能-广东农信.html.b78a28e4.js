"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[4911],{61082:(a,s,e)=>{e.r(s),e.d(s,{comp:()=>f,data:()=>B});var t=e(20641);const n=e.p+"assets/img/1.5e50987d.png",i=e.p+"assets/img/2.e7a1ae3e.png",c=e.p+"assets/img/3.86ed96c8.png",g=e.p+"assets/img/4.1f82f3f9.png",l=e.p+"assets/img/5.01e23786.png",p=e.p+"assets/img/6.7be93a8b.png",r=e.p+"assets/img/7.ffbd0f1e.png",d=e.p+"assets/img/8.78db5673.png",m=e.p+"assets/img/9.0fe6c913.png",u=e.p+"assets/img/10.344b58a9.png",o=e.p+"assets/img/11.f47a3b32.png",h=e.p+"assets/img/12.cd7aa3a1.png",A=e.p+"assets/img/13.755acd95.png",E=e.p+"assets/img/14.8127cd3a.png",b={},f=(0,e(66262).A)(b,[["render",function(a,s){return(0,t.uX)(),(0,t.CE)("div",null,s[0]||(s[0]=[(0,t.Fv)('<h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1：问题描述</span></a></h3><p>广东农信要求对磁条卡实现中断，取消的功能。目前的市场的磁条卡外设调用都是同步的，即不支持中断，取消。这个功能需要实现的大概场景是，调用读卡器时，用户既可以在超时时间内刷卡，读卡器正常读到数据，又可以在不刷卡时，支持快捷键中断刷卡的操作，即取消读卡器的调用，又或者读卡器调用时间超时，自动取消。针对这个需求，abc和ads都增加了对应的代码来实现。</p><h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2：问题分析</span></a></h3><p><strong>2.1：abc的实现</strong> 一． 设计思路 为了兼容设备的新旧调用方式，在ads返回给abc的第一次报文段中，如果报文段中含有“async”关键字，则会执行新的调用方式（支持中断的调用），如果不含有“async”关键字，则直接把ads返回的结果传给交易。 在走新的调用方法时，abc至少还需要2次向ads发送请求。 第一次请求是向ads取值，如果这个时候用户还未做刷卡操作（此处ads没有值），abc第一次没有从abs拿到值，则继续发起请求向ads取值。设计一个while循环，在与ads通讯不超时，用户不做中断操作时，abc会一直向abs做取值操作，直到取到值或者设备超时才跳出循环。 Abc最后一次向ads发起请求，是请求ads释放DLL资源。 二． 代码实现 （1） ADS第一次返回的报文： <img src="'+n+'" alt="图片描述"> 在ads返回的第一次报文中，结果集里如果包含async关键字，且async的值为1时，才走设备支持中断的调用方式。代码里用成员变量pauseFlag来标识是否中断，默认值为false。在弹出的对话框加入一个点击事件，当点击窗口的中断按钮或按下热键F7（默认为F7，可在preference.properties配置文件中cn.com.agree.ab.a4.client.device/pauseHotKey 处修改热键值），更改pauseFlag的值为true。 <img src="'+i+'" alt="图片描述"><img src="'+c+'" alt="图片描述"> （2） ADS第二次返回的报文如下： <img src="'+g+'" alt="图片描述"> 在第二次向ads发送报文才是取值的操作。While循环中只有满足以下条件才会跳出： ①pauseFlag的值为false时。 ②与ADS信息交互通讯超时。 ③从ADS成功拿到了返回值。 从ADS拿到的报文中，关键字“Num”表示返回的结果条数（即我们真正想要的数据），如果返回条数大于等于1条，只需取第一条返回的结果数据即可。 <img src="'+l+'" alt="图片描述"><img src="'+p+'" alt="图片描述"> 跳出while循环，则关闭窗口，并第三次向ADS发送报文，请求释放掉DLL资源。 （3） ADS第三次返回的报文： <img src="'+r+'" alt="图片描述"> 返回的结果集里面，Code的值为0，则表明 ADS释放DLL资源成功。 三． 流程图 <img src="'+d+'" alt="图片描述"> 四． 例子 ① 在流程图中，添加组件 “外设操作类组件”，入参和出参的配置如下图： <img src="'+m+'" alt="图片描述"><img src="'+u+'" alt="图片描述"> 在交易页面中，通过点击按钮来执行此lfc流程。 ② 部署更新资源，在ABC客户端点击按钮，弹出对话框。如图： <img src="'+o+'" alt="图片描述"> ③ 调用外设，在一定时间内不做刷卡操作，返回的最终结果如下： <img src="'+h+'" alt="图片描述"> ④ 调用外设，在外设的超时时间内，做刷卡操作，返回的最终结果如下： <img src="'+A+'" alt="图片描述"> 调用外设，按中断热键或Enter键，执行操作操作，返回的最终结果如下： <img src="'+E+'" alt="图片描述"><strong>2.2：ads的实现</strong> 一． 分析 为了兼容以前的版本，所以这次新功能的增加也是基于现在的ads增加。兼容，意味着返回的报文不能变，那怎样判断是同步调用还是异步调用成为第一个要解决的问题。 目前ads调用外设返回的报文格式，固定为 { &quot;Code&quot;: &quot;&quot;, &quot;ResMsg&quot;: &quot;&quot;, &quot;ErrMsg&quot;: ””, ”Key”: ”” } 不能增加字段，只能把这个异步中断标志放在某个标签了。根据固定报文代表的意义，放在了ResMsg里面。形式是 { “ResMsg”:{“async”:”1”} } ,async为1表示异步，为0或没有这个标签则表同步。 二． 具体实现 因为考虑到发起调用外设后，外设执行结果可能比返回async要快，导致ads的回调函数收到结果后，不知道是哪个外设的，所以在发起外设调用的时候，加锁，等待async返回后再解锁。Ads的回调函数接收到消息的时候，加锁，把接收到的消息放入链表后缓存起来，再解锁。保证收到的回调信息都是这个外设的且没有漏收。 abc过来取结果，则会把回调函数里面收到的所有结果返回给abc。格式是 { &quot;Info1&quot;:&quot;Message&quot;, &quot;Num&quot;:1 } Num,代表接回调函数收到的消息条数，为0则是没有收到。如果abc拿到结果为0，有可能是外设还没有执行完，结果还未返回，应该再次过来拿。Info1则存储收到的第一条信息。</p><h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3: 问题解决</span></a></h3><p>更新代码和ads，做好相关配置后，拿刷卡器进行测试，进行正常刷卡测试、中断测试、超时测试。测试结果为：abc拿到的返回结果都符合预期。</p><h3 id="_4-习题" tabindex="-1"><a class="header-anchor" href="#_4-习题"><span>4：习题</span></a></h3><p>在第二次向ADS发送报文并成功取得返回值，在判断返回结果的条数（resultCount）是否大于等于1时，为什么还要再一次判断pauseFlag的值？</p>',8)]))}]]),B=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%B9%B3%E5%8F%B0/AB4/%E5%A4%96%E8%AE%BE/AB4.0%E5%A2%9E%E5%8A%A0%E4%B8%AD%E6%96%AD%EF%BC%8C%E5%8F%96%E6%B6%88%E5%8A%9F%E8%83%BD-%E5%B9%BF%E4%B8%9C%E5%86%9C%E4%BF%A1.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1：问题描述","slug":"_1-问题描述","link":"#_1-问题描述","children":[]},{"level":3,"title":"2：问题分析","slug":"_2-问题分析","link":"#_2-问题分析","children":[]},{"level":3,"title":"3: 问题解决","slug":"_3-问题解决","link":"#_3-问题解决","children":[]},{"level":3,"title":"4：习题","slug":"_4-习题","link":"#_4-习题","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/平台/AB4/外设/AB4.0增加中断，取消功能-广东农信.md"}')}}]);