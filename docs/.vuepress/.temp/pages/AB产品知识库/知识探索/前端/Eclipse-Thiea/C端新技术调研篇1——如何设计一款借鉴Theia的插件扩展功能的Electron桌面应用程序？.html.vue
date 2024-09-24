<template><div><h2 id="electron-里为什么有必要进行插件扩展功能的设计" tabindex="-1"><a class="header-anchor" href="#electron-里为什么有必要进行插件扩展功能的设计"><span>Electron 里为什么有必要进行插件扩展功能的设计？🌔</span></a></h2>
<p>对于大型软件来说，能够将庞杂地业务处理逻辑通过插件的方式进行管理往往需要更清晰的架构分层，一般都会采用 npm 包的方式进行管理。但是如何能够借鉴 npm 包的管理方式进一步优化插件扩展功能呢？<a href="https://theia-ide.org/docs/authoring_plugins" target="_blank" rel="noopener noreferrer">Theia-Plugin</a>即是一个非常优秀地实现方式。</p>
<h2 id="theia-是啥" tabindex="-1"><a class="header-anchor" href="#theia-是啥"><span>Theia 是啥？🌓</span></a></h2>
<p>Eclipse Theia 是一个可扩展的平台，基于现代 Web 技术(TypeScript, CSS 和 HTML)实现，用于开发成熟的、多语言的云计算和桌面类的理想产品。</p>
<ul>
<li>官网：https://theia-ide.org</li>
<li>仓库：https://github.com/eclipse-theia/theia</li>
</ul>
<p>Theia 为开发浏览器和桌面 IDE 提供了可扩展的平台，主要特性：</p>
<ul>
<li><strong>Web AND desktop-based</strong>：提供 Cloud IDE 和 Desktop IDE 两种模式；</li>
<li><strong>Do not reinvent the wheel</strong>：不重复造轮子，Theia 复用其他框架、标准和技术，例如通过语言服务协议(LSP，Language Server Protocol) 和调试适配器协议 (DAP，Debug Adapter Protocols) 提供对多种语言的支持，支持 VS Code 拓展和 Git、终端等主流工具；</li>
<li><strong>For IDEs and domain-specific tools (not only code editors)</strong>：Theia 的目标不是成为一个简单的代码编辑器，而是成为一个支持创建特定领域工具套件和集成开发环境的基础平台；提供基本的工作台框架，包括菜单、状态栏、视图概念、部件布局、工作空间抽象等，工作台可以通过自定义 UI 扩展进行扩展，比如菜单项、自定义视图和自定义编辑器；</li>
<li><strong>Extension first</strong>：模块化扩展机制，允许以模块化、可重用和可组合的方式实现功能，这些扩展可以针对前端及后端，该扩展机制还允许用户安装新特性；Theia 所有东西都是扩展，甚至包括项目本身提供的核心特性，像 Eclipse rich-client-platform（RCP）一样，你可以在 Theia 中定制几乎所有的东西，甚至替换核心功能；本文，就是着重针对 Theia 对于插件的扩展进行了详细的梳理整合。</li>
<li><strong>Active community and vendor-neutrality</strong>：Theia 由 Eclipse 基金会托管，是一个与厂商无关的项目。</li>
</ul>
<p>目前 Theia 社区已经有一些产品基于 Theia 构建：</p>
<ul>
<li><a href="https://gitpod.io" target="_blank" rel="noopener noreferrer">Gitpod</a>
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/1.png" alt="gitpod.png"></li>
<li><a href="https://eclipsesource.com/blogs/2019/11/04/introducing-the-graphical-language-server-protocol-platform-eclipse-glsp" target="_blank" rel="noopener noreferrer">Grahical Language Server Platform (GLSP)</a> / <a href="https://eclipsesource.com/blogs/2019/12/16/introducing-emf-cloud/" target="_blank" rel="noopener noreferrer">EMF.cloud</a>
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/2.png" alt="EMF.png"></li>
</ul>
<h2 id="插件的优势是啥" tabindex="-1"><a class="header-anchor" href="#插件的优势是啥"><span>插件的优势是啥？🌑</span></a></h2>
<p>插件的概念浅显地应用和理解，可以参考 VS Code 开发一个 Extension 一样，允许开发人员基于 VS Code 基础平台的 API 补充额外的一些前后端功能，来用于补充额外的一些 VS Code 功能。
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/3.png" alt="xmind.png">
AB 的上几代系统客户端基座都是基于 OSGi 插件体系进行功能扩展，每个插件具备加载/卸载生命周期，插件之间有一定的依赖关系，通过插件的组装，构建出了庞大的平台功能。综合以上分析，由于公司所涉及的业务领域相对较庞大，为了更好地将 Electron 主程序内的各个插件模块清晰分层、彼此隔离、相对好地进行拓展，因此借鉴了 Theia 地插件扩展功能，并将其插件扩展模块清晰地进行了摘解，封装成了独立模块供 Electron 主进程进行使用。由此，插件扩展功能将会有以下的优势：</p>
<ol>
<li>清晰分层：可以更清晰地将 Electron 运行时与平台核心功能进行分层。</li>
<li>独立开发：插件的独立开发、灵活部署特性，可以更高效地快速增加平台的运行时能力。</li>
<li>运行时加载：插件可在运行时加载，不用再次全量编译平台代码，从而减少平台编译时间。</li>
<li>进程隔离：插件运行在独立进程中，插件调用造成进程级崩溃不会干扰主进程，更安全。</li>
<li>插件自治：插件可以打包到单个文件中，然后直接加载。无需从 NPM 库等获取依赖项。</li>
</ol>
<h2 id="为什么无法直接使用-theia-plugin-还需要进行哪些具体工作" tabindex="-1"><a class="header-anchor" href="#为什么无法直接使用-theia-plugin-还需要进行哪些具体工作"><span>为什么无法直接使用 Theia Plugin，还需要进行哪些具体工作？</span></a></h2>
<p>Theia 在技术架构上分成前端和后端两大部分，对于插件体系也是类似的，分为 Frontend plug-in 和  Backend plug-in。前端插件是工作在 Browser 的 UI 线程，因此无法直接打开或写入文件；后端插件的代码在服务器端以专用进程运行，后端插件调用 API 后，将在用户的浏览器 UI 上发送消息注册操作命令等，后端插件和 VS Code 的 Extensions 类似。</p>
<p>Theia 在前端框架选型中也采用了基于  <a href="https://phosphorjs.github.io/" target="_blank" rel="noopener noreferrer">PhosphorJS</a>  框架。 <a href="https://phosphorjs.github.io/" target="_blank" rel="noopener noreferrer">PhosphorJS</a> 提供了一组丰富的小部件，布局，事件和数据结构。</p>
<p>通过上述分析 Theia Plugin 的架构体系以及结合自身平台要求，我们发现完全采用 Theia-Plugin 的一套代码，不是特别符合需求。首先，自身平台只需要执行特定的后台服务逻辑，有点类似 Theia-Plugin 中的 backend-plugin，因此其前端插件功能，则可以摒弃掉。当然，前端插件的功能扩展，与后端较为一致，后续可以依照需求考虑迁移也不迟。第二，Theia-Plugin 中结合了较多 PhosphorJS 的控件用于在加载插件过程中调度视图 UI 层，此类功能也需要被摒弃掉。所以最终考虑，只迁移 Theia-Plugin 中关于插件子进程与主进程调度、插件扫描、插件管理等核心功能。让我们总结下最后我到底都干了啥：</p>
<ol>
<li>重新基于咱们自身需求进行架构分层，并对各层之间的调度时机进行调整</li>
<li>只摘取了 Theia 关于 backend 的插件调度机制，frontend 由于我们暂时不需要，所以先没做迁移</li>
<li>摒弃了 Theia 在插件调度过程中与 PhosphorJS（有点类似于 Java 中的 swt）的强关联性</li>
<li>重新稍微规划了一下插件模板工程，后续可以基于 cli 来搞。</li>
<li>重新规划 plugin 中对于实体类的绑定功能。</li>
</ol>
<h2 id="如何开发并且部署一个插件" tabindex="-1"><a class="header-anchor" href="#如何开发并且部署一个插件"><span>如何开发并且部署一个插件？🌘</span></a></h2>
<p>首先，我们需要创建一个插件工程，例如 ab-plugin-codec，目录结构如下：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/4.png" alt="ab-plugin-project.png">
插件工程基于 ts 编写，package.json 中需要通过配置 engine 字段指定当前插件的解析引擎为 AB 插件：<strong>ABPlugin</strong>
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/5.png" alt="ab-plugin-package.png">，
插件工程的 src 目录下 index.ts 入口文件内自动生成了生命周期函数<code v-pre>start()</code>和<code v-pre>stop()</code>，入参里传入了一个上下文<code v-pre>context</code>
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/6.png" alt="ab-plugin-start.png">
在这里，我们通过 context 中传递过来的 rpc 方法，new 一个<code v-pre>CodecHandler</code>实例。实例的具体实现如下：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/7.png" alt="ab-plugin-codec.png">。
通过<code v-pre>npm run compile</code>，对插件进行打包，放置在 electron 基座工程内。electron 基座工程写一个测试用例：渲染进程发起一个对于插件的调用：</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>sendMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>发送消息给插件<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>receiveMsg<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line">    <span class="token keyword">const</span> <span class="token punctuation">{</span> ipcRenderer <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">"electron"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"sendMsg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      ipcRenderer<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token string">"rpc-send-message"</span><span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    ipcRenderer<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"rpc-message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">event<span class="token punctuation">,</span> message</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"receiveMsg"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>innerHTML <span class="token operator">=</span> message<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  </span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>主进程接收渲染进程消息，发送给插件子进程进行调用:</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">ipcMain<span class="token punctuation">.</span><span class="token function">on</span><span class="token punctuation">(</span><span class="token string">"rpc-send-message"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> msg <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">123456</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">proxyId</span><span class="token operator">:</span> <span class="token string">"codec-plugin"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">method</span><span class="token operator">:</span> <span class="token string">"onCommand"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"aaa"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">  forkChildProcess<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>调用完成，看看效果：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/8.png" alt="效果.png">
以上，就是此次 POC 阶段对于开发一个后端插件的整体流程，那么下面让我们深入剖析一下，整个插件扩展机制的整体架构是什么样子的？</p>
<h2 id="插件扩展整体架构" tabindex="-1"><a class="header-anchor" href="#插件扩展整体架构"><span>插件扩展整体架构 🌗</span></a></h2>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/9.png" alt="整体架构.png">
我们对整体架构进行下分析，首先，Electron 主进程里专门需要提供一个特定主进程插件管理器，我们姑且称之为 hosted-plugin-manager，用于提供对于插件子进程的创建和销毁功能，并且接收来自渲染进程发送过来的消息、建立与插件子进程的消息通道，并基于 rpc 通讯功能来发送和接受消息。同时，hsoted-plugin-manager 里也应该提供一套对于 Electron 主进程与插件子进程消息报文组织和转发的功能。
当启动 Electron 客户端时，hosted-plugin-manager 会 fork 出插件子进程。并且初始化对应的子进程管控、插件调度、插件扫描部署和插件管理层。那么让我们看看这几层分别都有哪些功能。各个层的功能简要说明如上图所示。</p>
<h3 id="插件子进程管控层-process" tabindex="-1"><a class="header-anchor" href="#插件子进程管控层-process"><span>插件子进程管控层（process）</span></a></h3>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/10.png" alt="process.png">
插件子进程管控层主要对于主进程 fork 出来的整个插件子进程进行消息通道的建立/销毁，同时转发和接收来自主进程发送过来的消息。每当主进程发送一条消息时，需要对发送过来的消息进行处理转发。这里对于消息的<strong>订阅</strong>则交由一个<strong>RPCProtocol</strong>的具体实现类来实现。消息的转发和 RPCProtocol 对于消息的订阅，两者通过一种 EventEmitter 的事件订阅发布工具来进行绑定。</p>
<blockquote>
<p>Theia Plugin 中的 EventEmitter 本身设计的十分合理，其实现了 Iterable 的迭代器功能。定义<code v-pre>Symbol.iterator</code>的构造函数，每当主进程发送一则消息需要分发时，都会触发迭代器来遍历具体的订阅函数，触发对应的订阅方法。EventEmitter 的具体代码实现，我会专门写一篇文章来详细学习介绍一下。（<a href="https://www.tapd.cn/65362886/markdown_wikis/show/#1165362886001002252" target="_blank" rel="noopener noreferrer">文章地址</a>）</p>
</blockquote>
<p>RPCProtocol 实际上是对于某一类事件进行监听。彼时，在插件加载之后，RPCProtocol 则会传递给插件内部，其提供的<code v-pre>set</code>方法用于插件内部来注册(简单来讲，就是 new 一个插件实例）某个具体插件实例的 API。
<strong>class RPCProtocolImpl</strong>中<code v-pre>set</code>方法代码如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/process/rpc-protocol.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RPCProtocolImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Disposable</span><span class="token punctuation">,</span> RPCProtocol <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token generic-function"><span class="token function">set</span><span class="token generic class-name"><span class="token operator">&lt;</span><span class="token constant">T</span><span class="token punctuation">,</span> <span class="token constant">R</span> <span class="token keyword">extends</span> <span class="token constant">T</span><span class="token operator">></span></span></span><span class="token punctuation">(</span>identifier<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> instance<span class="token operator">:</span> <span class="token constant">R</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token constant">R</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>isDisposed<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> ConnectionClosedError<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">//TODO:id的变化 this.locals则用来维护所有插件的实例</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>locals<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>identifier<span class="token punctuation">,</span> instance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>Disposable<span class="token punctuation">.</span><span class="token keyword">is</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>toDispose<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>instance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>toDispose<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>Disposable<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">this</span><span class="token punctuation">.</span>locals<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>identifier<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> instance<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>插件中调用<code v-pre>set</code>方法代码如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">//ab-plugin-codec插件的index.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">start</span><span class="token punctuation">(</span>context<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"ab-electron-plugin-codec is active!"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  context<span class="token punctuation">.</span>rpc<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"codec-plugin"</span><span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">CodecHandler</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如上述代码所示，一旦某个插件调用了<code v-pre>set</code>方法，RPCProtocol 则会在内存中通过一个 Map<code v-pre>this.locals</code>存储对应插件的实例，通过调用<code v-pre>this.locals.set()</code>完成。</p>
<p>每当主进程发来一个事件请求时，其<code v-pre>doInvokeHandler</code>方法都会通过其维护的<code v-pre>this.locals</code>的 map 根据插件名称(<strong>proxyId</strong>)来 apply 调用某个插件的某个方法实现真正插件内部逻辑的调用。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/process/rpc-protocol.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">RPCProtocolImpl</span> <span class="token keyword">implements</span> <span class="token class-name">Disposable</span><span class="token punctuation">,</span> RPCProtocol <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token function">doInvokeHandler</span><span class="token punctuation">(</span>proxyId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> methodName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> args<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> actor <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>locals<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>proxyId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>actor<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Unknown actor '</span> <span class="token operator">+</span> proxyId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">const</span> method <span class="token operator">=</span> actor<span class="token punctuation">[</span>methodName<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">typeof</span> method <span class="token operator">!==</span> <span class="token string">'function'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'Unknown method '</span> <span class="token operator">+</span> methodName <span class="token operator">+</span> <span class="token string">' on actor '</span> <span class="token operator">+</span> proxyId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token keyword">return</span> <span class="token function">method</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span>actor<span class="token punctuation">,</span> args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>说完 RPCProtocol，我们把堆栈收一收，回到插件子进程管理层还干了啥。在整个插件子进程管理实现的最后，它还初始化了插件调度层<code v-pre>new PluginHostRPC(rpc)</code>，并且出发了插件调度层的<code v-pre>initialize()</code>和<code v-pre>start()</code>方法。然后插件子进程管理的工作结束。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/process/plugin-hosts.ts</span></span>
<span class="line"><span class="token keyword">const</span> pluginHostRPC <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PluginHostRPC</span><span class="token punctuation">(</span>rpc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">pluginHostRPC<span class="token punctuation">.</span><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">pluginHostRPC<span class="token punctuation">.</span><span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件调度层-dispatcher" tabindex="-1"><a class="header-anchor" href="#插件调度层-dispatcher"><span>插件调度层（dispatcher）</span></a></h3>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/11.png" alt="dispatcher.png">
插件调度层其最主要的工作是对插件扫描部署层、插件管理层进行调用和组织，<code v-pre>initialize()</code>、<code v-pre>start()</code>、<code v-pre>scannerPlugin()</code>三个关键<strong>function</strong>实现了对插件管理层的初始化、插件部署扫描层的初始化和插件管理层的启动操作。<strong>class PluginHostRPC</strong>代码如下</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/dispatcher/plugin-host-rpc.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PluginHostRPC</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token function">initialize</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> storageProxy <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyValueStorageProxy</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>rpc<span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//这玩意儿看起来像是为插件的存储创建了一个工作空间，每当加载一个插件的时候，会为其开辟一块存储插件相关信息的作用域，可以用来存储插件的全局数据。</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>pluginManager <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">createPluginManager</span><span class="token punctuation">(</span>storageProxy<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rpc<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>pluginManager<span class="token punctuation">.</span><span class="token function">$init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">start</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> plugins <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">scannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> activationEvents <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"*"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//activationEvents属于VS Code 的插件激活时机，例如："activationEvents": ["onLanguage:json"],表示当打开json文件时，激活该插件的生命周期`activate`方法，*则表示无限制，一启动就激活。VS Code 会在适当的时机回调插件中的  `activate`  钩子函数。VS Code 之所以这么设计，是为了节省资源开销，只在必要的时候才激活你的插件。当然如果你的插件非常重要，不希望在某个事件之后才被激活，你可以声明 Activation Events 为  `*`  这样 VS Code 就会在启动的时候就开始回调  `activate`  函数。</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>pluginManager<span class="token punctuation">.</span><span class="token function">$start</span><span class="token punctuation">(</span><span class="token punctuation">{</span> plugins<span class="token punctuation">,</span> activationEvents <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">scannerPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> pluginDeployer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PluginDeployer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">await</span> pluginDeployer<span class="token punctuation">.</span><span class="token function">dostart</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> pluginDeployer<span class="token punctuation">.</span>pluginsMetadata<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件扫描部署层-deploy" tabindex="-1"><a class="header-anchor" href="#插件扫描部署层-deploy"><span>插件扫描部署层（deploy）</span></a></h3>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/12.png" alt="deploy.png">
由于 Theia-plugin 中对于插件包的分类分为：<code v-pre>vscode-plugin</code>和<code v-pre>theia-plugin</code>，前者是对于 vscode 插件的继承，可以允许 vscode 插件在 Theia 中运行。后者则是 Theia 允许用户自定义拓展一些功能。Theia 定义了一个运行时 API，允许插件自定义 IDE 并将其行为添加到应用程序的各个方面。在 Theia 中，插件可以通过名为 theia 的对象访问 API，该对象在所有插件中都可用。Theia 可用的 API 使用文档：<a href="https://github.com/eclipse-theia/theia/blob/master/packages/plugin/README.md" target="_blank" rel="noopener noreferrer">@theia/plugin</a>，Theia API 兼容 VS Code API，API 覆盖率文档：<a href="https://che-incubator.github.io/vscode-theia-comparator/status.html" target="_blank" rel="noopener noreferrer">Compare Theia vs VS Code API</a>。因此对于插件包的基础信息，两者也有差异。（比如生命周期函数不一样。）
theia 的插件扫描方法提供了一套统一标准接口，<code v-pre>vscode-plugin</code>和<code v-pre>theia-plugin</code>分别对接口进行了实现，所以在扫描插件过程中，Theia 会根据<code v-pre>engine</code>的类型来选择是调用<code v-pre>vscode-plugin</code>的<code v-pre>scanner</code>还是<code v-pre>theia-plugin</code>的<code v-pre>scanner</code>。<strong>PluginScanner</strong>接口具体为：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/deploy/plugin-scanner.ts</span></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line"> * This scanner process package.json object and returns plugin metadata objects.</span>
<span class="line"> */</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">PluginScanner</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * The type of plugin's API (engine name)</span>
<span class="line">   */</span></span>
<span class="line">  apiType<span class="token operator">:</span> PluginEngine<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Creates plugin's model.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token punctuation">{</span>PluginPackage<span class="token punctuation">}</span> plugin</span>
<span class="line">   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>PluginModel<span class="token punctuation">}</span></span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">getModel</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> PluginPackage<span class="token punctuation">)</span><span class="token operator">:</span> PluginModel<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * Creates plugin's lifecycle.</span>
<span class="line">   *</span>
<span class="line">   * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>PluginLifecycle<span class="token punctuation">}</span></span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">getLifecycle</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> PluginPackage<span class="token punctuation">)</span><span class="token operator">:</span> PluginLifecycle<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">getContribution</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> PluginPackage<span class="token punctuation">)</span><span class="token operator">:</span> PluginContribution <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * A mapping between a dependency as its defined in package.json</span>
<span class="line">   * and its deployable form, e.g. `publisher.name` -> `vscode:extension/publisher.name`</span>
<span class="line">   */</span></span>
<span class="line">  <span class="token function">getDependencies</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> PluginPackage<span class="token punctuation">)</span><span class="token operator">:</span> Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">string</span><span class="token operator">></span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中包括了插件 package.json 中的元数据信息（<code v-pre>getMOdel</code>）、插件生命周期获取，插件依赖，插件的 contribution 等。因此，这部分接口的定义，我们也同步迁移了过来，并且基于接口提供了一个基类：<code v-pre>BasePluginScanner</code>，用来提供基本的插件扫描功能，而针对平台 AB 插件，我们也做了一部分改造，主要改造点为：</p>
<ul>
<li>指定了插件目录</li>
<li>扩展封装了对于<code v-pre>PluginScanner</code>的实现——<code v-pre>ABPluginScanner</code>，指定了读取<code v-pre>package.json</code>中的<code v-pre>engine</code>为<code v-pre>ABPlugin</code>~定义了 ABPlugin 的生命周期函数方法：<code v-pre>start（）</code>以及<code v-pre>stop()</code></li>
<li><code v-pre>ABPluginScanner</code>后续还可以根据插件<code v-pre>package.json</code>中定义的其他客户化要求进行定制扩展。
插件扫描时，会将每一个插件上述的基础信息封装成了一个<strong>bean</strong>，即<code v-pre>pluginMetadata</code>其中包裹着全部插件包 package.json 中的元数据信息和相关生命周期函数的定义。从而在插件调度层中可以被获取到。</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/deploy/hosted-plugin-deploy-handler.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PluginDeployer</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token function">deployPlugins</span><span class="token punctuation">(</span>entry<span class="token operator">:</span> PluginDeployerEntry<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> pluginPath <span class="token operator">=</span> entry<span class="token punctuation">.</span><span class="token function">path</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">const</span> entryPoint <span class="token operator">=</span> <span class="token string">'backend'</span></span>
<span class="line">        <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">const</span> manifest <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reader<span class="token punctuation">.</span><span class="token function">readPackage</span><span class="token punctuation">(</span>pluginPath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>manifest<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> metadata <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>reader<span class="token punctuation">.</span><span class="token function">readMetadata</span><span class="token punctuation">(</span>manifest<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> deployedLocations <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deployedLocations<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            deployedLocations<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>entry<span class="token punctuation">.</span>rootPath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>deployedLocations<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> deployedLocations<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">const</span> deployedPlugins <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>deployedBackendPlugins<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">if</span> <span class="token punctuation">(</span>deployedPlugins<span class="token punctuation">.</span><span class="token function">has</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">            <span class="token keyword">const</span> <span class="token punctuation">{</span> type <span class="token punctuation">}</span> <span class="token operator">=</span> entry<span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">const</span> deployed<span class="token operator">:</span> DeployedPlugin <span class="token operator">=</span> <span class="token punctuation">{</span> metadata<span class="token punctuation">,</span> type <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            deployedPlugins<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> deployed<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>pluginMetadata<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>deployed<span class="token punctuation">.</span>metadata<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Deploying </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entryPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> plugin "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">@</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>version<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" from "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>metadata<span class="token punctuation">.</span>model<span class="token punctuation">.</span>entryPoint<span class="token punctuation">[</span>entryPoint<span class="token punctuation">]</span> <span class="token operator">||</span> pluginPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">"</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed to deploy </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>entryPoint<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string"> plugin from '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>pluginPath<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' path</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">	<span class="token keyword">get</span> <span class="token function">pluginsMetadata</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>pluginMetadata</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="插件管理层-managerment" tabindex="-1"><a class="header-anchor" href="#插件管理层-managerment"><span>插件管理层（managerment）</span></a></h3>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/13.png" alt="management.png">
插件管理层主要提供了一个类：<code v-pre>PluginManagerExtImpl</code>，其提供了加载插件、初始化插件、启动插件、destroy 插件这几个生命周期流程的相应方法实现。由于 Theia 本身分为前端插件和后端插件，分别在 worker-main.ts 以及 plugin-host-rpc.ts 中进行调度，因此对于 Theia 来说，前端和后端插件在插件管理的实现有所区别，因此 PluginManagerExtImpl 等同于是一个泛泛的插件加载的流程调度，前后端插件加载的差异性需要在调度过程中区别对待：如 PluginMangagerExtImpl 中的<code v-pre>$start</code>方法中，有一条语句是<code v-pre>this.host.init()</code>，则是调度了前后端插件加载的自己的 init 方法。而后端插件的具体方法实现，是在调度层的<code v-pre>plugin-host-rpc</code>中创建插件管理层时直接实现的，具体可以结合下面代码：
<strong>PluginmanagerExtImpl.ts</strong></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/management/plugin-manager.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">class</span> <span class="token class-name">PluginManagerExtImpl</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token function">$start</span><span class="token punctuation">(</span>params<span class="token operator">:</span> PluginManagerStartParams<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">const</span> <span class="token punctuation">[</span>plugins<span class="token punctuation">,</span> foreignPlugins<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>host<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>params<span class="token punctuation">.</span>plugins<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token comment">// add foreign plugins</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> plugin <span class="token keyword">of</span> foreignPlugins<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token comment">// add own plugins, before initialization</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> plugin <span class="token keyword">of</span> plugins<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">registerPlugin</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">        <span class="token comment">// run eager plugins</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$activateByEvent</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> activationEvent <span class="token keyword">of</span> params<span class="token punctuation">.</span>activationEvents<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$activateByEvent</span><span class="token punctuation">(</span>activationEvent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>plugin-host-rpc.ts</strong></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">// src/plugin/dispatcher/plugin-host-rpc.ts</span>
<span class="line">export class PluginHostRPC {</span>
<span class="line">......</span>
<span class="line">createPluginManager(storageProxy: KeyValueStorageProxy, rpc: any): PluginManagerExtImpl {</span>
<span class="line">const pluginManager = new PluginManagerExtImpl({</span>
<span class="line">......</span>
<span class="line">async init(raw: PluginMetadata[]): Promise&lt;[Plugin[], Plugin[]]> {</span>
<span class="line">                const result: Plugin[] = [];</span>
<span class="line">                const foreign: Plugin[] = [];</span>
<span class="line">                for (const plg of raw) {</span>
<span class="line">                    try {</span>
<span class="line">                        const pluginModel = plg.model;</span>
<span class="line">                        const pluginLifecycle = plg.lifecycle;</span>
<span class="line"></span>
<span class="line">                        const rawModel = await loadManifest(pluginModel.packagePath);</span>
<span class="line">                        rawModel.packagePath = pluginModel.packagePath;</span>
<span class="line">                        if (pluginModel.entryPoint!.frontend) {</span>
<span class="line">                            foreign.push({</span>
<span class="line">                                pluginPath: pluginModel.entryPoint.frontend!,</span>
<span class="line">                                pluginFolder: pluginModel.packagePath,</span>
<span class="line">                                pluginUri: pluginModel.packageUri,</span>
<span class="line">                                model: pluginModel,</span>
<span class="line">                                lifecycle: pluginLifecycle,</span>
<span class="line">                                rawModel</span>
<span class="line">                            });</span>
<span class="line">                        } else {</span>
<span class="line">                            let backendInitPath = pluginLifecycle.backendInitPath;</span>
<span class="line">                            // if no init path, try to init as regular Theia plugin</span>
<span class="line">                            if (!backendInitPath) {</span>
<span class="line">                                backendInitPath = __dirname + '/scanners/backend-init-theia.js';</span>
<span class="line">                            }</span>
<span class="line"></span>
<span class="line">                            const plugin: Plugin = {</span>
<span class="line">                                pluginPath: pluginModel.entryPoint.backend!,</span>
<span class="line">                                pluginFolder: pluginModel.packagePath,</span>
<span class="line">                                pluginUri: pluginModel.packageUri,</span>
<span class="line">                                model: pluginModel,</span>
<span class="line">                                lifecycle: pluginLifecycle,</span>
<span class="line">                                rawModel</span>
<span class="line">                            };</span>
<span class="line">                            result.push(plugin);</span>
<span class="line">                        }</span>
<span class="line">                    } catch (e) {</span>
<span class="line">                        console.error(`Failed to initialize ${plg.model.id} plugin.`, e);</span>
<span class="line">                    }</span>
<span class="line">                }</span>
<span class="line">                return [result, foreign];</span>
<span class="line">            }</span>
<span class="line">        }</span>
<span class="line">......</span>
<span class="line">}</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因此，在我们平台当中，这部分功能，仅先迁移了后端插件具体实现的加载过程。后端插件加载过程主要分两步骤：第一，是先判断某个插件是否有依赖其他插件，如果有，则优先加载其他插件。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/management/plugin-manager.ts</span></span>
<span class="line"><span class="token keyword">protected</span> <span class="token keyword">async</span> <span class="token function">loadPlugin</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> Plugin<span class="token punctuation">,</span> visited <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Set<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token operator">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">boolean</span><span class="token operator">></span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>rawModel<span class="token punctuation">.</span>extensionDependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">const</span> dependencyId <span class="token keyword">of</span> plugin<span class="token punctuation">.</span>rawModel<span class="token punctuation">.</span>extensionDependencies<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                    <span class="token keyword">const</span> dependency <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>registry<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>dependencyId<span class="token punctuation">.</span><span class="token function">toLowerCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token keyword">if</span> <span class="token punctuation">(</span>dependency<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">const</span> loadedSuccessfully <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">loadPlugin</span><span class="token punctuation">(</span>dependency<span class="token punctuation">,</span> visited<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span>loadedSuccessfully<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">                            <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Dependent extension '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dependency<span class="token punctuation">.</span>model<span class="token punctuation">.</span>displayName <span class="token operator">||</span> dependency<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' failed to activate.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                        <span class="token punctuation">}</span></span>
<span class="line">                    <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">                        <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Dependent extension '</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>dependencyId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">' is not installed.</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">                    <span class="token punctuation">}</span></span>
<span class="line">                <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">            <span class="token keyword">let</span> pluginMain <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>host<span class="token punctuation">.</span><span class="token function">loadPlugin</span><span class="token punctuation">(</span>plugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第二，在插件加载过程中，会根据上述插件部署扫描层获取到的插件元数据信息，拿到具体每一个插件的入口文件，通过<code v-pre>require</code>的函数进行加载。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">// src/plugin/dispatcher/plugin-host-rpc.ts</span>
<span class="line">const pluginManager = new PluginManagerExtImpl({</span>
<span class="line">	loadPlugin(plugin: Plugin): any {</span>
<span class="line">	......</span>
<span class="line">	if (plugin.pluginPath) {</span>
<span class="line">                    return require(plugin.pluginPath);</span>
<span class="line">                }</span>
<span class="line">	......</span>
<span class="line">	}</span>
<span class="line">	......</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第三，则是进行了插件生命周期函数中生命周期启动方法（ABPlugin 为 start()方法）的调用。在调用过程中，可以将相关上下文传递给插件内部，也就是在这个关键点，我们将 RPCProtocol 作为上下文的一部分传递了进去。</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// src/plugin/management/plugin-manager.ts</span></span>
<span class="line"><span class="token keyword">private</span> <span class="token keyword">async</span> <span class="token function">startPlugin</span><span class="token punctuation">(</span>plugin<span class="token operator">:</span> Plugin<span class="token punctuation">,</span> pluginMain<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token keyword">const</span> pluginContext<span class="token operator">:</span> ab<span class="token punctuation">.</span>PluginContext <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            rpc<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>rpc<span class="token punctuation">,</span></span>
<span class="line">            extensionPath<span class="token operator">:</span> plugin<span class="token punctuation">.</span>pluginFolder<span class="token punctuation">,</span></span>
<span class="line">            extensionUri<span class="token operator">:</span> Uri<span class="token punctuation">.</span><span class="token function">file</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>pluginFolder<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            globalState<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storageProxy<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            workspaceState<span class="token operator">:</span> <span class="token keyword">new</span> <span class="token class-name">Memento</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>storageProxy<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">            subscriptions<span class="token operator">:</span> subscriptions<span class="token punctuation">,</span></span>
<span class="line">            asAbsolutePath<span class="token operator">:</span> asAbsolutePath</span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>pluginContextsMap<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> pluginContext<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token keyword">const</span> pluginExport <span class="token operator">=</span> <span class="token keyword">await</span> pluginMain<span class="token punctuation">[</span>plugin<span class="token punctuation">.</span>lifecycle<span class="token punctuation">.</span>startMethod<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">apply</span><span class="token punctuation">(</span><span class="token function">getGlobal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span>pluginContext<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>activatedPlugins<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span>plugin<span class="token punctuation">.</span>model<span class="token punctuation">.</span>id<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">ActivatedPlugin</span><span class="token punctuation">(</span>pluginContext<span class="token punctuation">,</span> pluginExport<span class="token punctuation">,</span> stopFn<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">...</span><span class="token operator">...</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这样，插件内部就可以拿到由子进程传递进来的上下文信息，进行相应的 API 调用和业务处理逻辑的绑定了。以上即为插件扩展的整体架构以及每一个具体功能的实现。</p>
<h2 id="插件的调用流程是什么呢" tabindex="-1"><a class="header-anchor" href="#插件的调用流程是什么呢"><span>插件的调用流程是什么呢？🌖</span></a></h2>
<p>我们先来观察一下 Theia 构建插件的流程。Theia 对于插件的开发，<a href="https://theia-ide.org/docs/authoring_plugins/" target="_blank" rel="noopener noreferrer">官方文档</a> 中写的较为详细。其提供了一套插件 CLI，用来拉取前/后端插件模板工程，该工程整体基于 TypeScript 编写，直接通过 tsc 进行编译：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/14.png" alt="theia-plugin-cli.png">
工程目录结构如下，其中有<code v-pre>tsfmt</code>（还未详细看是啥玩意儿。。），插件<code v-pre>src</code>以及<code v-pre>package.json</code>：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/15.png" alt="theia-plugin-project.png">
<code v-pre>package.json</code>中对于一个插件的<code v-pre>engine</code>和入口做了特殊定义：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/16.png" alt="theia-plugin-package.png">
同时，插件可以指定一个 extensionDependencies，如:<strong>&quot;extensionDependencies&quot;: [&quot;ms-vscode.node-debug2&quot;]</strong>
如上图所示，该插件是一个自定义拓展的 theia-plugin，如其入口指向编译后的<code v-pre>lib/test-plugin-backend.js</code>，源码为 src 下的<code v-pre>test-plugin-backend.ts</code>源码如下：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/17.png" alt="theia-plugin-start.png">
这里面综合考虑，结合<code v-pre>Theia-plugin</code>的插件工程，平台插件工程我们对<code v-pre>engines</code>和入口做了一些改动。指定了<code v-pre>engines</code>为<code v-pre>ABPlugin</code>，直接指定<code v-pre>main</code>属性作为插件入口。
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/18.png" alt="ab-plugin-package.png">
下一步，我们就可以直接在源码中书写插件的生命周期函数了。
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/19.png" alt="ab-plugin-start.png">
在这里，我们通过 context 中传递过来的 rpc 方法，new 一个<code v-pre>CodecHandler</code>实例。实例的具体实现如下：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/20.png" alt="ab-plugin-codec.png">。
那么，插件内的方法是如何调用的呢？
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/21.png" alt="plugin调用.png">
当<a href="https://www.tapd.cn/65362886/markdown_wikis/show/#1165362886001002251@toc3" target="_blank" rel="noopener noreferrer">插件子进程管控层</a> 接收到消息分发给<code v-pre>RPCProtocol</code>时，其内部会根据实例名查找到对应的实例，并根据方法名去进行<code v-pre>apply</code>的调用，从而实现了插件内方法的调度。最终会通过<code v-pre>process.send()</code>再次返回给 Electron 的主进程。
至此，插件内方法的调度完成。
话不多说，看看效果：
<img src="@source/AB产品知识库/images/知识探索/前端/Eclipse-Thiea/C端新技术调研篇1——如何设计一款借鉴Theia的插件扩展功能的Electron桌面应用程序？/22.png" alt="效果.png"></p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结 🌕</span></a></h2>
<p>本文主要研究了 Theia 的插件扩展机制，并结合实际情况将 Theia 的插件扩展功能进行了改造，以符合 Electron 业务系统插件拓展体系架构下的要求。并对整体的代码结构进行了分层设计和调整，目前只是一个初版，接下来还有很多详细的工作：</p>
<ul>
<li><code v-pre>hosted-plugin-manager</code>的进一步封装，应该对 Electron 主进程提供一整套相对完善的 API（包括自身对于进程的管理，如 killProcess 等）。其次，该 manager 本身的名字起的不太合理，需要重新考虑，和定义。</li>
<li>插件依赖尚未测试，需要验证下插件循环依赖会不会有啥问题。</li>
<li><code v-pre>event-emitter</code>其较好的设计是否可以迁移出来供<code v-pre>agree-sdk</code>使用或者供<code v-pre>Electron</code>主进程使用。</li>
<li>子进程内部模块间调用应优化为基于<code v-pre>DI</code>的方式，前期进行了一些学习探索，后续会详细写一篇文章</li>
<li>id 的生成和管理？？思考<code v-pre>CEF</code>对于<code v-pre>onQuery</code>的<code v-pre>id</code>生成规则和管理方式</li>
<li>插件卸载尚未测试且只部分实现，包括子进程的销毁，插件的销毁，内存中对实例对象的销毁</li>
<li>日志传递</li>
<li>代码优化，比如插件工程应该对<code v-pre>context</code>进行类型声明，需要引入<code v-pre>d.ts</code>。</li>
<li>整个插件扩展功能要做一下非功能性测试。</li>
<li>下一步着手扩展前端插件，深入调研前端插件的加载及扩展机制，由于 Theia 前端插件都是基于现有的 VSCode 对一些工具栏、菜单栏、视图区等扩展点(<a href="https://www.yuque.com/zhaomenghuan/theia/nvwnzh?inner=NTQLf" target="_blank" rel="noopener noreferrer">Contribution Points</a>)分类进行扩展，模块的种类比较清晰，思考如何扩展一个既能适用于 AB 产品也能适用于例如 AgreeStudio 的前端插件扩展点分类。</li>
</ul>
</div></template>


