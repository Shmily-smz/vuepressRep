<template><div><p>基于Eclipse Theia架构实现方式，探索5.0是否可以借鉴该IDE架构上的优点。</p>
<h3 id="一、theia是什么" tabindex="-1"><a class="header-anchor" href="#一、theia是什么"><span>一、theia是什么</span></a></h3>
<p>官网是这么介绍的</p>
<blockquote>
<p>Eclipse Theia is an extensible platform to develop multi-language Cloud &amp; Desktop IDEs with state-of-the-art web technologies.
翻译过来就是Theia是一个用于开发多种编程语言，兼容云与桌面运行环境，使用先进web技术（TypeScript、HTML 和 CSS）开发的可扩展的平台</p>
</blockquote>
<p>这样一个工具平台，有三个目标</p>
<ol>
<li>提供通用的功能</li>
<li>提供一套扩展机制</li>
<li>同套代码，在桌面与web中都能运行</li>
</ol>
<p>为了实现这些目标，theia提供了以下功能</p>
<ol>
<li>基本工作台框架，包括菜单、状态栏、视图、工作区等，并可以扩展</li>
<li>常见的可以复用的工具，例如支持 LSP的代码编辑器，Git支持，终端等</li>
<li>模块化的扩展机制</li>
<li>为了第三个目标，在桌面上和作为 Web 应用程序运行工具的能力——Theia 由两个部分组成：客户端（UI）和服务器。在本地桌面方案中，服务器部件部署在本地。Theia 在 Typescript、CSS 和 HTML 中实现。在桌面上运行基于 Theia 的工具时，Electron 将用作浏览器的本地替换。</li>
</ol>
<p>相关链接
https://theia-ide.org/
https://eclipsesource.com/blogs/2018/06/20/welcome-at-eclipse-theia/</p>
<h3 id="二、theia与vscode的异同" tabindex="-1"><a class="header-anchor" href="#二、theia与vscode的异同"><span>二、theia与vscode的异同</span></a></h3>
<p>VS Code 是一个现成的产品，用户可以下载和扩展，并且已经非常普遍地使用。Eclipse Theia 是一个框架，允许创建完全自定义和白标的产品。</p>
<ol>
<li>Theia 的架构更加模块化，并允许进行更多自定义</li>
<li>Theia是从开始就设计为在桌面和云上运行</li>
<li>Theia是在供应商中立的开源基金会下开发的</li>
</ol>
<h3 id="三、theia的组成" tabindex="-1"><a class="header-anchor" href="#三、theia的组成"><span>三、theia的组成</span></a></h3>
<ol>
<li>分为Front-End与Back-End两端组成</li>
<li>通讯协议与报文使用WebSockets/JSON-RPC、HTTP/REST API</li>
</ol>
<h3 id="四、theia涉及的技术" tabindex="-1"><a class="header-anchor" href="#四、theia涉及的技术"><span>四、theia涉及的技术</span></a></h3>
<ol>
<li>前端显示TypeScript、HTML 和 CSS</li>
<li>后端TypeScript</li>
<li>使用InversifyJS实现依赖注入。</li>
</ol>
<blockquote>
<p>If you are familiar with the Eclipse Platform, inversify replaces extension points and OSGi declarative services.
Spring 很多特性在 Inversify 中可以找到，如果你的项目规模比较大，可以采用 monorepo 多包结构来构建项目。每一个包（模块）包含一个 ContainerModule 容器管理本模块依赖，然后在项目入口对所有的模块容器进行统一加载。</p>
</blockquote>
<ol start="4">
<li>Monaco editor</li>
<li>monorepo、lerna管理模块</li>
</ol>
<p>https://eclipsesource.com/blogs/2018/11/28/how-to-inversify-in-eclipse-theia/</p>
<h3 id="五、theia架构" tabindex="-1"><a class="header-anchor" href="#五、theia架构"><span>五、theia架构</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/知识探索/前端/Eclipse-Thiea/探索Eclipse Theia架构实现方式(主要看插件扩展方式和依赖注入方式)/1.png" alt="enter image description here"></p>
<h3 id="六、启动theia的方式" tabindex="-1"><a class="header-anchor" href="#六、启动theia的方式"><span>六、启动theia的方式</span></a></h3>
<blockquote>
<p>安装theia相关的npm依赖包时，需要c与c++编译环境，在windows上需要依赖VS2017，在linux比较简单</p>
</blockquote>
<ol>
<li>使用package.json启动。官网package.json，例子扩展</li>
<li>使用theia源码启动</li>
<li>使用docker启动</li>
</ol>
<p>https://theia-ide.org/docs/composing_applications/
https://theia-ide.org/docs/authoring_extensions/
https://gitee.com/mirrors/theia</p>
<h3 id="七、theia的扩展与插件" tabindex="-1"><a class="header-anchor" href="#七、theia的扩展与插件"><span>七、theia的扩展与插件</span></a></h3>
<p>两大区别</p>
<ol>
<li>加载时机</li>
<li>独立进程</li>
</ol>
<h4 id="extension" tabindex="-1"><a class="header-anchor" href="#extension"><span>extension</span></a></h4>
<ol>
<li>theia的第一个可用机制，编辑器，基础组件都是通过extension实现</li>
<li>extension通过依赖注入衔接目标针对&quot;构建时间扩展性&quot;，不适合在运行时安装/添加，它们打算在生成时添加</li>
<li>不是&quot;隔离的&quot;，既不是从 API 的角度来看，也不是在单独的进程中运行。</li>
<li>扩展最初也设计为允许在运行时扩展，而 Eclipse Theia 中曾经有一个&quot;扩展管理器&quot;，这是一种在运行时管理扩展的 UI。但是，这种方法已被弃用，转而使用插件。</li>
</ol>
<p>package.json中两个关键配置</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">"keywords": [</span>
<span class="line">    "theia-extension"</span>
<span class="line">  ],</span>
<span class="line">"theiaExtensions": [</span>
<span class="line">    {</span>
<span class="line">  "frontend": "lib/browser/hello-world-frontend-module"</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="plugin" tabindex="-1"><a class="header-anchor" href="#plugin"><span>plugin</span></a></h4>
<ol>
<li>使用一个独立的 plugin extension管理，定义了plugin API，此 API 是&quot;受限&quot;的，这意味着它只提供选定的功能。此外，它是&quot;分离的&quot;，所以插件可以运行在那里自己的进程，甚至容器。theia可以使用部分vscode插件。</li>
</ol>
<p>package.json中两个关键配置</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">"keywords": [</span>
<span class="line">        "theia-plugin"</span>
<span class="line">      ],</span>
<span class="line">"theiaPlugin": {</span>
<span class="line">        "backend": "lib/theia-hello-world-plugin-backend-plugin.js"</span>
<span class="line">      }</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/AB产品知识库20240403/images/知识探索/前端/Eclipse-Thiea/探索Eclipse Theia架构实现方式(主要看插件扩展方式和依赖注入方式)/2.png" alt="enter image description here">
<img src="@source/AB产品知识库20240403/images/知识探索/前端/Eclipse-Thiea/探索Eclipse Theia架构实现方式(主要看插件扩展方式和依赖注入方式)/3.png" alt="enter image description here"></p>
<p>https://eclipsesource.com/blogs/2019/10/10/eclipse-theia-extensions-vs-plugins-vs-che-theia-plugins/
https://eclipsesource.com/blogs/2019/11/21/how-to-create-develop-an-eclipse-theia-ide-extension/
https://eclipsesource.com/blogs/2019/10/17/how-to-add-extensions-and-plugins-to-eclipse-theia</p>
<h3 id="八、theia扩展分析" tabindex="-1"><a class="header-anchor" href="#八、theia扩展分析"><span>八、theia扩展分析</span></a></h3>
<h4 id="theia-hello-world-extension扩展" tabindex="-1"><a class="header-anchor" href="#theia-hello-world-extension扩展"><span>theia-hello-world-extension扩展</span></a></h4>
<ol>
<li>功能实现 hello-world-extension-contribution.ts</li>
<li>模块注册 hello-world-extension-frontend-module.ts</li>
<li>引入配置package.json</li>
<li>monorepo风格组织</li>
<li>theia cli编译（转换时）把扩展写入到index.js中</li>
</ol>
<p>其他模块同理
<img src="@source/AB产品知识库20240403/images/知识探索/前端/Eclipse-Thiea/探索Eclipse Theia架构实现方式(主要看插件扩展方式和依赖注入方式)/4.png" alt="图片描述"></p>
<h4 id="扩展加载-通过theia-cli方式提前组织" tabindex="-1"><a class="header-anchor" href="#扩展加载-通过theia-cli方式提前组织"><span>扩展加载，通过theia cli方式提前组织</span></a></h4>
<p>npm-registry.ts--&gt;NodePackage存在keywords等属性，搜索NodePackage引用，可以看到加载package.json位置
FrontendGenerator--&gt;调用this.pck.targetFrontendModules --&gt;生成index.html与index.js
application-package.ts--&gt;targetFrontendModules()--&gt;frontendModules()--&gt;computeModules()--&gt;extensionPackages()由本身的pck收集到所有依赖的pck
ExtensionPackageCollector.ts--&gt;collect()--&gt;collectPackages()--&gt;collectPackage()解析依赖模块</p>
<h4 id="插件加载-独立的插件扩展来加载" tabindex="-1"><a class="header-anchor" href="#插件加载-独立的插件扩展来加载"><span>插件加载，独立的插件扩展来加载</span></a></h4>
<p>plugin-ext-backend-module.ts 用于关于插件
plugin-deployer-impl.ts 中 doStart()加载插件
plugin-deployer-impl.ts  doStart()  解析&quot;theia start --plugins=local-dir:plugins&quot;命令</p>
<h3 id="九、用途思考" tabindex="-1"><a class="header-anchor" href="#九、用途思考"><span>九、用途思考</span></a></h3>
<p>1、大的产品，如abs、abc整个产品组织
2、cli启发，ab cli提供一些转换，动态生成功能(js工程分小模块，cli中组织)
<a href="https://kdocs.cn/l/cl8hK8irsN7Y" target="_blank" rel="noopener noreferrer">AB4中模块化--https://kdocs.cn/l/cl8hK8irsN7Y</a></p>
<h3 id="十、其他相关参考" tabindex="-1"><a class="header-anchor" href="#十、其他相关参考"><span>十、其他相关参考</span></a></h3>
<p>https://www.yuque.com/zhaomenghuan/theia  赵梦欢theia博客</p>
<p>https://my.oschina.net/u/1773694/blog/3220784   Windows下运行Eclipse Theia源码指南</p>
<p>https://github.com/theia-ide/theia-apps  构建theia-docker与theia-electron</p>
<p>https://opendocs.alipay.com/mini/ide/component-panel  支付宝小程序定制</p>
</div></template>


