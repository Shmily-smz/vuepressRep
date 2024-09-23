<template><div><h3 id="背景" tabindex="-1"><a class="header-anchor" href="#背景"><span>背景</span></a></h3>
<h5 id="markdown是一门易于上手能帮助作者专心写作的文档编辑语言-它的好处太多了-建议想自己动手做笔记写博客的朋友都可以学一学-10-分钟上手-目前目前知识库-tad-中任务-都使用-markdown-格式编写" tabindex="-1"><a class="header-anchor" href="#markdown是一门易于上手能帮助作者专心写作的文档编辑语言-它的好处太多了-建议想自己动手做笔记写博客的朋友都可以学一学-10-分钟上手-目前目前知识库-tad-中任务-都使用-markdown-格式编写"><span><a href="https://links.jianshu.com/go?to=https%3A%2F%2Fbaike.baidu.com%2Fitem%2Fmarkdown%2F3245829%3Ffr%3Daladdin" target="_blank" rel="noopener noreferrer">markdown</a>是一门易于上手能帮助作者专心写作的文档编辑语言，它的好处太多了，建议想自己动手做笔记写博客的朋友都可以学一学，10 分钟上手，目前目前<a href="https://www.tapd.cn/65362886" target="_blank" rel="noopener noreferrer">知识库</a>，<a href="https://www.tapd.cn/31035323/prong/stories/stories_list" target="_blank" rel="noopener noreferrer">tad 中任务</a>，都使用 MarkDown 格式编写</span></a></h5>
<h5 id="tpyora是一款优雅的-markdown-编辑器-也推荐给大家-至于安装和配置-比安装-word-还简单-就不赘述了" tabindex="-1"><a class="header-anchor" href="#tpyora是一款优雅的-markdown-编辑器-也推荐给大家-至于安装和配置-比安装-word-还简单-就不赘述了"><span><a href="https://links.jianshu.com/go?to=https%3A%2F%2Fwww.typora.io%2F" target="_blank" rel="noopener noreferrer">Tpyora</a>是一款优雅的 markdown 编辑器，也推荐给大家，至于安装和配置，比安装 word 还简单，就不赘述了</span></a></h5>
<p>但是，这都不是重点，重点是咱们写文章的时候，总是需要<strong>插入图片</strong>的，图片存在本地的话上传到网站去就没法显示了，就算一个图一个图的复制粘贴上去，想移植到其他的网站，图就会失效，我们就需要图床</p>
<blockquote>
<p>图床是干什么的？ 图床就是一个便于在博文中插入在线图片连接的个人图片仓库。设置图床之后，在自己文章中插入的图片链接就可以随时随地在线预览了，并且不会因为任何意外原因无法查看，除非自己亲自删除。</p>
</blockquote>
<h5 id="神奇的-picgo-就是为了解决这个问题诞生的-它可以将图片上传到指定的图床上-然后返回-markdown-链接-直接粘贴到你的文档中-就搞定啦" tabindex="-1"><a class="header-anchor" href="#神奇的-picgo-就是为了解决这个问题诞生的-它可以将图片上传到指定的图床上-然后返回-markdown-链接-直接粘贴到你的文档中-就搞定啦"><span>神奇的 PicGo 就是为了解决这个问题诞生的，它可以将图片上传到指定的图床上，然后返回 markdown 链接，直接粘贴到你的文档中，就搞定啦</span></a></h5>
<p>2022 年 3 月 Gitee 给图片添加了 <strong>防盗链</strong>，故选择使用 GitLab ，详见以下连接</p>
<p>https://blog.csdn.net/weixin_41701290/article/details/123755118</p>
<h4 id="以下开始使用-typora-picgo-gitlab来实现-markdown-图床与编写" tabindex="-1"><a class="header-anchor" href="#以下开始使用-typora-picgo-gitlab来实现-markdown-图床与编写"><span>以下开始使用 Typora + PicGo + GitLab来实现 markdown 图床与编写</span></a></h4>
<p>参考链接</p>
<p><a href="https://www.jianshu.com/p/b69950a49ae2" target="_blank" rel="noopener noreferrer">PicGo + Gitee(码云)实现 markdown 图床 - 简书 (jianshu.com)</a></p>
<p><a href="https://www.jianshu.com/p/4cd14d4ceb1d" target="_blank" rel="noopener noreferrer">手把手教你用 Typora 自动上传到 picgo 图床【教程与排坑】 - 简书 (jianshu.com)</a></p>
<h3 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h3>
<h4 id="_1、软件安装" tabindex="-1"><a class="header-anchor" href="#_1、软件安装"><span>1、软件安装</span></a></h4>
<p>typora 0.9.84 版本以上 <a href="http://192.9.200.29:8001/d/f80f5fdbafec458384cb/" target="_blank" rel="noopener noreferrer">下载链接-R105 内网网盘</a></p>
<p>PicGo 2.1.2 版本以上 <a href="http://192.9.200.29:8001/d/f80f5fdbafec458384cb/" target="_blank" rel="noopener noreferrer">下载链接-R105 内网网盘</a></p>
<p>GitLab-files 1.1.5 见下图</p>
<p>node.js 10 以上 自行下载</p>
<h4 id="_2、picgo-配置" tabindex="-1"><a class="header-anchor" href="#_2、picgo-配置"><span>2、PicGO 配置</span></a></h4>
<h5 id="_2-1-来到-gitlab注册账户与仓库" tabindex="-1"><a class="header-anchor" href="#_2-1-来到-gitlab注册账户与仓库"><span>2.1 来到 GitLab注册账户与仓库</span></a></h5>
<p>创建用户，绑定公钥（建议使用国内速度更快的极狐 https://GitLab.cn/）</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/1.png" alt="image-20220608214403473"></p>
<p>然后创建 token</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/2.png" alt="image-20220608214607751"></p>
<p>创建仓库</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/3.png" alt="image-20220608214846409"></p>
<h5 id="_2-2-picgo-上安装配置gitlab-插件" tabindex="-1"><a class="header-anchor" href="#_2-2-picgo-上安装配置gitlab-插件"><span>2.2 picgo 上安装配置GitLab 插件</span></a></h5>
<p>PicGo 安装完成后，选择插件，输入GitLab，选择<strong>右边的 GitLab-files 1.1.5</strong>安装</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/4.png" alt=""></p>
<p>安装完成后，设置只显示<strong>GitLab 图床</strong>，<strong>时间戳重名名</strong></p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/5.png" alt="image-20201113090455087"></p>
<p>此时选择上传区，即可以上传图片，上传完成后，会自动把 url 复制到粘贴板，然后再 MD 中粘贴即可</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/6.png" alt="image-20220608215325753"></p>
<p>进入设置，填入对应信息，id 见项目首页</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/7.png" alt="image-20220608215350774"></p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/8.png" alt="image-20220608215418819"></p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/9.png" alt="image-20201113090852725"></p>
<h4 id="" tabindex="-1"><a class="header-anchor" href="#"><span></span></a></h4>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/10.png" alt="image-20201113091206522"></p>
<h4 id="_3、typora-配置" tabindex="-1"><a class="header-anchor" href="#_3、typora-配置"><span>3、Typora 配置</span></a></h4>
<p>Typora 中选择 <code v-pre>文件-偏好设置-图像</code>，设置为<code v-pre>插入图片时，自动上传</code>，配置好<code v-pre>PicGo</code>路径，并点击<code v-pre>验证图片上传选项</code>上传成功</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/11.png" alt="image-20201113091632423"></p>
<p>使用时也很简单，<code v-pre>拖动图片到Typora</code>，或者<code v-pre>截图工具截图后，直接粘贴</code>即可完成自动上传，也可以鼠标右键，选择<code v-pre>上传图片</code>手动上传</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/12.gif" alt="img"></p>
<p>还可以在<code v-pre>格式-图像-上传所有图片</code></p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/13.png" alt="img"></p>
<h5 id="至此-工具使用已说明完成" tabindex="-1"><a class="header-anchor" href="#至此-工具使用已说明完成"><span>至此，工具使用已说明完成</span></a></h5>
<h4 id="_4、常用排错" tabindex="-1"><a class="header-anchor" href="#_4、常用排错"><span>4、常用排错</span></a></h4>
<h5 id="_4-1-错误一-failed-to-fetch" tabindex="-1"><a class="header-anchor" href="#_4-1-错误一-failed-to-fetch"><span>4.1 错误一：Failed to fetch</span></a></h5>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/14.png" alt="image-20200318140841085"></p>
<p>这个错误一般是由<strong>端口设置错误</strong>造成的。打开 picgo 的 log 文件。错误提示是端口繁忙。</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/15.png" alt="img"></p>
<p><code v-pre>解决方法</code>：打开 picgo 设置，点击设置 Server 选项，<strong>将端口改为 36677 端口</strong>，这是 picgo 推荐的默认端口号，然后保存，成功。</p>
<p>不过有的时候，我们的老朋友 Failed to fetch 还是如约而至，打开端口设置一看，怎么变成了 366771？？？？</p>
<p>问题在于端口冲突，如果你打开了多个 picgo 程序，就会端口冲突，<strong>picgo 自动帮你把 36677 端口改为 366771 端口</strong>，导致错误。log 文件里也写得很清楚。</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/16.png" alt="img"></p>
<p><code v-pre>解决方法</code>：<strong>先把 picgo 中的端口设置改回 36677，然后退出所有 picgo 程序</strong>，再使用 typora 上传功能（会自动启动 picgo 程序）</p>
<h5 id="_4-2-错误二-success-false" tabindex="-1"><a class="header-anchor" href="#_4-2-错误二-success-false"><span>4.2 错误二：{“success”,false}</span></a></h5>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/17.png" alt="img"></p>
<p>这个错误相信也有很多小伙伴遇到了，原因是<strong>文件名冲突</strong>了，如果你上传过一张 image1.jpg 的图片，再上传名称一样的图片就会失败，康康 log 文件(感谢日志！)里也写到了。</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/18.png" alt="img"></p>
<p>办法也很简单，打开 picgo 设置，将**【时间戳重命名】打开**。如图所示：</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/19.png" alt="img"></p>
<p>再次上传文件，上传成功~</p>
<p><strong>授人以鱼不如授人以渔</strong>，上面的三种情况解决方法教给大家了，但是错误总是千奇百怪层出不穷的，如果下次出现上传错误的提示，请大家找到 picgo 的 log 文件，自己查看问题的原因嗷</p>
<p><img src="@source/AB5/images/工具使用/Typora + PicGo + Gitlab实现MarkDown编写与markdown图床/20.png" alt="img"></p>
</div></template>


