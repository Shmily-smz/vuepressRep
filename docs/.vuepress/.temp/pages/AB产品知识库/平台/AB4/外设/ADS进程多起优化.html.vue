<template><div><h3 id="_1、问题描述" tabindex="-1"><a class="header-anchor" href="#_1、问题描述"><span>1、问题描述：</span></a></h3>
<p>1）市场出现30101端口被占用时导致无法通过默认配置调用ads服务
2）多abc运行已测试正常外设会出现报错现象</p>
<h3 id="_2、问题分析" tabindex="-1"><a class="header-anchor" href="#_2、问题分析"><span>2、问题分析：</span></a></h3>
<p>之前版本abc与ads是多对一的关系，即当终端中启动多个abc时只会保留最后一个abc启动的ads，基于这种设计存在以下问题：
1）ads启动默认以30101端口启动，abc通过配置配死30101端口导致如果30101端口被占用后无法正常使用ads。（问题描述1）
2）多个abc对应一个ads，且只有最后一个abc启动的ads存在，如个环境ads版本不一致，则存在其它环境abc调用这个ads报错问题。（问题描述2）
3）ads查看报错日志时难以定位，之前日志有可能存在abc2、abc3中，且需要测试人员确定最后一个ads目录查看日志
4）ads关闭通过TaskKill命令强杀导致ads无法正常运行关闭逻辑。</p>
<h3 id="_3、问题解决" tabindex="-1"><a class="header-anchor" href="#_3、问题解决"><span>3、问题解决</span></a></h3>
<p>abc与ads采用一对一方式，即启动一个abc则对应启动该abc下的一个ads，ads的生命周期谁启动谁维护。abc预启动首先创建一个与ads进行交互的socket服务端，之后进入ads启动流程，下面根据截图做逐一介绍：
<img src="@source/AB产品知识库/images/平台/AB4/外设/ADS进程多起优化/1.png" alt="图片描述">
1）尝试关闭上次未正常关闭ads。根据上次ads缓存端口判断socket是否存在；如存在则调用获取ads进程根目录判断是否为本abc的ads；校验成功调用Shutdown接口关闭。此处将通讯返回超时时间调整为3秒，如socket为其它进程或非新版本ads会3s后超时，平台默认不再进行关闭。正常调用ads接口失败会重复启动ads，此处调用ads校验启动接口如失败直接返回不再进行重启。
2）ads日志清理，此处可通过配置实现ads日志是否需要清理，清理可根据配置实现ads日志到达一定大小清理。平台默认是单个日志超过20M则清理。
3）ads更新，目前更新通过插件下载方式更新。插件更新完毕后将符合插件命名下的ads目录复制到根目录ads下，根据md5是否发生改变进行。此处复制忽略abc对ads的个性化外设配置文件的覆盖。
4）ads的启动，abc通过swt win32的方式启动ads并将之前启动的socket服务端口传给ads，ads通过这个端口异步返回ads启动port。此处ads为异步返回，可能出现abc启动完成调用外设ads还未返回port端口。为解决此问题平台提供以下方式解决：
（1）提供技术组件IsAdsConnect技术组件用于校验ads是否启动成功
（2）abc异步接收到ads端口号后如用户配置异步接收交易路径，abc会向此交易发送“AdsStartFinished”消息用于通知交易层ads启动完成
5）ads守护线程，默认一分钟检测一下ads是否存在，如检测失败则进行重启ads动作
<strong>通过以上实现可带来以下优势</strong> ：
1）abc配置ads时不采用配死端口号方式，而是启动完成ads后异步接收ads返回端口号，此端口号用于该abc调用ads端口号。
2）一对一关系保证了abc调用ads路径，方便查看日志排查问题，无需人工确认ads调用目录。
3）当多个环境ads版本不一致时，不会出现调用错乱问题，方便各环境版本测试使用。
目前ads关闭采用调用ads的Shutdown接口实现，去除强杀动作，方便ads维护关闭相关动作。</p>
<h3 id="_4、思考延伸" tabindex="-1"><a class="header-anchor" href="#_4、思考延伸"><span>4、思考延伸</span></a></h3>
<p>abc异常关闭导致ads未关闭，此ads在何时会被再次关闭？</p>
</div></template>


