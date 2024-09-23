<template><div><h3 id="常见崩溃类型" tabindex="-1"><a class="header-anchor" href="#常见崩溃类型"><span>常见崩溃类型：</span></a></h3>
<p>1、外设驱动导致的崩溃
2、内嵌ocx控件导致的崩溃
3、输入法导致的崩溃
4、jvm配置的内存不足导致的崩溃
5、管控软件导致的崩溃
6、内嵌浏览器引擎CEF导致的崩溃（AB4以上版本）</p>
<h3 id="排查方式" tabindex="-1"><a class="header-anchor" href="#排查方式"><span>排查方式</span></a></h3>
<p>1、首先查看客户端根目录下hs__error.log日志，与log目录下jvm.log日志，查看是否有当次崩溃信息
2、根据崩溃情况，总结规律，比如在调用密码键盘时会崩溃，根据崩溃现象缩小范围，查看崩溃原因
3、浏览器引擎CEF崩溃的情况，可以首先从windows上查看事件管理器-应用程序，查看崩溃信息
4、排查崩溃集中出现的时间，是否跟最近上线内容，更新的外设，更新的ocx控件或其他策略有关系</p>
<h3 id="排查策略" tabindex="-1"><a class="header-anchor" href="#排查策略"><span>排查策略</span></a></h3>
<p>1、安排专人总结崩溃规律，收集崩溃日志，并能把信息准确反馈给后方
2、后方协同做好数据与日志分析工作
3、根据崩溃原因，商议应对策略</p>
<p>输入法崩溃参考：
https://www.tapd.cn/65362886/documents/show/1165362886001011230</p>
</div></template>


