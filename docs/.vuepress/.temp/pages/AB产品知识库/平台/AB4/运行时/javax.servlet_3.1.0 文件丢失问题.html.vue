<template><div><h4 id="问题背景" tabindex="-1"><a class="header-anchor" href="#问题背景"><span>问题背景</span></a></h4>
<p>eclipse 运行一段时间后，经常出现 javax.servlet_3.1.0 插件找不到问题，现象为 plugin 配置页面出现了 out of sync 的提示</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090447.png" alt="Image"></p>
<p>查看 eclipse 本地文件，发现 3.1 的文件丢失</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090507.png" alt="Image"></p>
<p>但此文件在新下载的 eclipse 中是存在的</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090518.png" alt="Image"></p>
<h4 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h4>
<p>之前一直怀疑是 eclipse 在后台自动更新时，导致了该问题，遂把更新关掉，但后续该问题依旧存在</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090541.png" alt="Image"></p>
<p>联想到 abc 在关闭时，会清理本地插件，猜测是否会清理时删除的，便在清理时增记录，日志显示，确实为 abc 关闭时清理导致</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090552.png" alt="Image"></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090557.png" alt="Image"></p>
<p>发现清理时，使用的路径，使用 Platform.<em>getInstallLocation</em>() 方式获取，这种方式由于在 eclipse 中运行时，未进行配置，指向的为 eclipse 根目录，导致后续问题</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090607.png" alt="Image"></p>
<h4 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h4>
<p>把代码修改为通过工作路径获取方式，问题解决
siteDir = new File(Platform.getInstanceLocation().getURL().getFile()).getParentFile();
abcRootDir = new File(Platform.getInstanceLocation().getURL().getFile()).getParentFile();</p>
<h4 id="问题扩展" tabindex="-1"><a class="header-anchor" href="#问题扩展"><span>问题扩展</span></a></h4>
<p>以下为在 eclipse 中源码运行时，获取路径的两种关系</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090627.png" alt="Image"></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210615090630.png" alt="Image"></p>
</div></template>


