<template><div><h1 id="编写文档说明" tabindex="-1"><a class="header-anchor" href="#编写文档说明"><span>编写文档说明</span></a></h1>
<p>ABX5平台文档包括前端、服务端、IDE以及客户端四项，接下来介绍编写文档及配置相关的知识</p>
<h2 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏"><span>导航栏</span></a></h2>
<p>可以定义选项并配置路径</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/导航栏.png" alt="导航栏" title="导航栏"></p>
<blockquote>
<p>如上图所示，四项已在导航栏配置好，接下来演示如何在选项中创建目录和文件</p>
</blockquote>
 <!-- ## 新建目录及文件

 在docs目录下新建文件夹及文件
 > 新建名为“菜单”的目录和test文件，文件内输入内容方便查看页面效果

 ![新建导航](./编写文档说明/新建导航.png "新建导航")

 ## 配置

打开vitepress目录下的config.ts文件，配置导航栏在nav中进行配置

![配置导航](./编写文档说明/配置导航.png "配置导航")

> 如果要自定义要匹配的路径，请将属性和正则表达式定义为字符串值。activeMatch

::: tip

activeMatch应为正则表达式字符串，但必须将其定义为字符串。我们不能在这里使用实际的 RegExp 对象，因为它在构建时不可序列化
:::

## 页面展示

![页面展示](./编写文档说明/页面展示.png "页面展示")
## 设置下拉菜单

如果包含多项的话，可以做成下拉菜单，继续进行配置

![下拉菜单](./编写文档说明/下拉菜单.png "下拉菜单")

**页面展示**

![下拉菜单展示](./编写文档说明/下拉菜单展示.png "下拉菜单展示") -->
<h2 id="侧边栏" tabindex="-1"><a class="header-anchor" href="#侧边栏"><span>侧边栏</span></a></h2>
<p>如图所示，当我们点击导航栏中的前端选项，会出现侧边栏目录及对应文档</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/点击选项.png" alt="点击选项" title="点击选项"></p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/侧边栏.png" alt="侧边栏" title="侧边栏"></p>
<p>意味着导航栏每个选项下的文档均以这种形式展现，接下来做演示</p>
<h3 id="新建目录及文档" tabindex="-1"><a class="header-anchor" href="#新建目录及文档"><span>新建目录及文档</span></a></h3>
<p>在前端目录下创建一个名为测试的目录，在该目录下创建相关文档</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/测试.png" alt="测试" title="测试"></p>
<h3 id="配置" tabindex="-1"><a class="header-anchor" href="#配置"><span>配置</span></a></h3>
<p>打开vitepress目录下的config.ts文件，在sidebarGuide函数中配置</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/侧边栏配置.png" alt="侧边栏配置" title="侧边栏展配置"></p>
<h3 id="页面展示" tabindex="-1"><a class="header-anchor" href="#页面展示"><span>页面展示</span></a></h3>
<p>页面中可以看到我们刚才创建的目录及文档</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/侧边栏展示.png" alt="侧边栏展示" title="侧边栏展示"></p>
<h2 id="安装依赖和运行" tabindex="-1"><a class="header-anchor" href="#安装依赖和运行"><span>安装依赖和运行</span></a></h2>
<p>在docs目录下执行 <code v-pre>pnpm install</code> 后,执行 <code v-pre>pnpm docs:dev</code></p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/运行.png" alt="运行" title="运行"></p>
<p>复制链接在浏览器打开，进入ABX5平台文档</p>
<p><img src="@source/ABX5/前端/开发说明/img/编写文档说明/打开页面.png" alt="打开页面" title="打开页面"></p>
<ul>
<li>
<p>文档配置参考<a href="https://vitepress.dev/" target="_blank" rel="noopener noreferrer">vitepress官网</a></p>
</li>
<li>
<p>文档书写规范参考<a href="https://markdown.com.cn/" target="_blank" rel="noopener noreferrer">Markdown官方教程</a></p>
</li>
</ul>
</div></template>


