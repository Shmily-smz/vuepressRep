<template><div><p>AB5.0 平台服务的开发与组织形式通过 Cloud Service Definition（以下简称 CSD）完成，它提供了描述服务或一组功能相近服务的能力。</p>
<h2 id="工程介绍" tabindex="-1"><a class="header-anchor" href="#工程介绍"><span>工程介绍</span></a></h2>
<p>ABS_5 作为服务端分为<strong>aarm、aase、common、message</strong> 4 个工程。</p>
<ul>
<li>aarm: 资源微产品。提供多版本资源管理、差量更新的能力。管理的是 abc 使用到的资源、配置和插件等内容。</li>
<li>aase: 渠道服务微产品。基于 SpringBoot 框架，自研流程驱动引擎，提供功能管控、服务编排的能力。包含 CSD 服务操作，逻辑元件，启动类 ，定时器、数据库等配置。</li>
<li>common:公共的服务中心，如 Eureka 注册中心、Nacos 配置中心。</li>
<li>message:消息推送微产品，支持容器化部署下的跨服务器消息推送能力，实现消息通讯。</li>
</ul>
<h3 id="整体框架" tabindex="-1"><a class="header-anchor" href="#整体框架"><span>整体框架</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/1.png" alt="ABS5.jpg"></p>
<hr>
<h2 id="ab5-ide" tabindex="-1"><a class="header-anchor" href="#ab5-ide"><span>AB5_IDE</span></a></h2>
<h3 id="文件类型" tabindex="-1"><a class="header-anchor" href="#文件类型"><span>文件类型</span></a></h3>
<ul>
<li>ADE：数据字典，定义数据报文字段</li>
<li>XM： 数据报文的封装和抽象，可封装 ADE 和 XM，从而生成有结构的 JSON 形式请求或响应报文数据接口规范</li>
<li>CSD：请求/响应体，设置请求响应具体结构，绑定 LFC 链路</li>
<li>LFC：描述了服务功能的实现逻辑</li>
<li>CSP：服务发布描述文件，服务开发完成后通过 AgreeStudio 发布到 ACaaS 平台，文件描述了已发布服务的服务名、版本号、服务内网和外网访问地址、请求和响应报文接口等</li>
</ul>
<h3 id="上传服务流程" tabindex="-1"><a class="header-anchor" href="#上传服务流程"><span>上传服务流程</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/2.png" alt="ABIDE.png"></p>
<hr>
<h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器"><span>过滤器</span></a></h2>
<p>能够对目标资源的请求和响应进行截取过滤。</p>
<h3 id="过滤流程" tabindex="-1"><a class="header-anchor" href="#过滤流程"><span>过滤流程</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/3.png" alt="Filter过滤流程.png"></p>
<h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3>
<p>在程序启动的时候，加载配置(FilterConfig)会构建一个过滤器的实例。
<strong>初始化</strong>
​ 调用 init 方法，方法参数中包含了一个 FilterConfig 的引用。
<strong>过滤</strong>
​ 调用 doFilter 方法，过滤器处理请求和响应之后，传递给链中的下一个对象(过滤器或 servlet)。
<strong>销毁</strong>
​ 容器紧跟在 GC 之前调用 destroy 方法。</p>
<h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h3>
<blockquote>
<p><a href="https://blog.csdn.net/yuzhiqiang_1993/article/details/81288912" target="_blank" rel="noopener noreferrer">Java Web之过滤器（Filter）_喻志强的博客-CSDN博客_java过滤器</a></p>
</blockquote>
<hr>
<h2 id="csd-链路追踪流程" tabindex="-1"><a class="header-anchor" href="#csd-链路追踪流程"><span>CSD 链路追踪流程</span></a></h2>
<h3 id="api-过滤检测流程" tabindex="-1"><a class="header-anchor" href="#api-过滤检测流程"><span>API 过滤检测流程</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/4.png" alt="API过滤检测流程.jpg"></p>
<h3 id="controller-层-获取参数、发送请求、获取结果-流程" tabindex="-1"><a class="header-anchor" href="#controller-层-获取参数、发送请求、获取结果-流程"><span>Controller 层(获取参数、发送请求、获取结果)流程</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/5.png" alt="Controller层(获取参数、发送请求、获取结果)流程.jpg"></p>
<h3 id="任务执行流程" tabindex="-1"><a class="header-anchor" href="#任务执行流程"><span>任务执行流程</span></a></h3>
<p><img src="@source/AB产品知识库20240403/images/待评审文档/ABS5—CSD请求链路/6.png" alt="任务执行流程.png"></p>
<hr>
<p><strong><em>以上是对 ABS5 的 CSD 请求链路的分享，仅供参考。如有不对的地方欢迎大家指正。</em></strong></p>
</div></template>


