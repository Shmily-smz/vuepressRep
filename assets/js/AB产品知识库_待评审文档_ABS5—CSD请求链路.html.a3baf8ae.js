"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[7734],{468:(e,a,l)=>{l.r(a),l.d(a,{comp:()=>c,data:()=>o});var i=l(20641);const n=l.p+"assets/img/1.a3f12c90.png",s=l.p+"assets/img/2.0e13f67f.png",r=l.p+"assets/img/3.9adebdda.png",t=l.p+"assets/img/4.ae766eb1.png",h=l.p+"assets/img/5.167c4101.png",p=l.p+"assets/img/6.311f8289.png",d={},c=(0,l(66262).A)(d,[["render",function(e,a){return(0,i.uX)(),(0,i.CE)("div",null,a[0]||(a[0]=[(0,i.Fv)('<p>AB5.0 平台服务的开发与组织形式通过 Cloud Service Definition（以下简称 CSD）完成，它提供了描述服务或一组功能相近服务的能力。</p><h2 id="工程介绍" tabindex="-1"><a class="header-anchor" href="#工程介绍"><span>工程介绍</span></a></h2><p>ABS_5 作为服务端分为<strong>aarm、aase、common、message</strong> 4 个工程。</p><ul><li>aarm: 资源微产品。提供多版本资源管理、差量更新的能力。管理的是 abc 使用到的资源、配置和插件等内容。</li><li>aase: 渠道服务微产品。基于 SpringBoot 框架，自研流程驱动引擎，提供功能管控、服务编排的能力。包含 CSD 服务操作，逻辑元件，启动类 ，定时器、数据库等配置。</li><li>common:公共的服务中心，如 Eureka 注册中心、Nacos 配置中心。</li><li>message:消息推送微产品，支持容器化部署下的跨服务器消息推送能力，实现消息通讯。</li></ul><h3 id="整体框架" tabindex="-1"><a class="header-anchor" href="#整体框架"><span>整体框架</span></a></h3><p><img src="'+n+'" alt="ABS5.jpg"></p><hr><h2 id="ab5-ide" tabindex="-1"><a class="header-anchor" href="#ab5-ide"><span>AB5_IDE</span></a></h2><h3 id="文件类型" tabindex="-1"><a class="header-anchor" href="#文件类型"><span>文件类型</span></a></h3><ul><li>ADE：数据字典，定义数据报文字段</li><li>XM： 数据报文的封装和抽象，可封装 ADE 和 XM，从而生成有结构的 JSON 形式请求或响应报文数据接口规范</li><li>CSD：请求/响应体，设置请求响应具体结构，绑定 LFC 链路</li><li>LFC：描述了服务功能的实现逻辑</li><li>CSP：服务发布描述文件，服务开发完成后通过 AgreeStudio 发布到 ACaaS 平台，文件描述了已发布服务的服务名、版本号、服务内网和外网访问地址、请求和响应报文接口等</li></ul><h3 id="上传服务流程" tabindex="-1"><a class="header-anchor" href="#上传服务流程"><span>上传服务流程</span></a></h3><p><img src="'+s+'" alt="ABIDE.png"></p><hr><h2 id="过滤器" tabindex="-1"><a class="header-anchor" href="#过滤器"><span>过滤器</span></a></h2><p>能够对目标资源的请求和响应进行截取过滤。</p><h3 id="过滤流程" tabindex="-1"><a class="header-anchor" href="#过滤流程"><span>过滤流程</span></a></h3><p><img src="'+r+'" alt="Filter过滤流程.png"></p><h3 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h3><p>在程序启动的时候，加载配置(FilterConfig)会构建一个过滤器的实例。 <strong>初始化</strong> ​ 调用 init 方法，方法参数中包含了一个 FilterConfig 的引用。 <strong>过滤</strong> ​ 调用 doFilter 方法，过滤器处理请求和响应之后，传递给链中的下一个对象(过滤器或 servlet)。 <strong>销毁</strong> ​ 容器紧跟在 GC 之前调用 destroy 方法。</p><h3 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h3><blockquote><p><a href="https://blog.csdn.net/yuzhiqiang_1993/article/details/81288912" target="_blank" rel="noopener noreferrer">Java Web之过滤器（Filter）_喻志强的博客-CSDN博客_java过滤器</a></p></blockquote><hr><h2 id="csd-链路追踪流程" tabindex="-1"><a class="header-anchor" href="#csd-链路追踪流程"><span>CSD 链路追踪流程</span></a></h2><h3 id="api-过滤检测流程" tabindex="-1"><a class="header-anchor" href="#api-过滤检测流程"><span>API 过滤检测流程</span></a></h3><p><img src="'+t+'" alt="API过滤检测流程.jpg"></p><h3 id="controller-层-获取参数、发送请求、获取结果-流程" tabindex="-1"><a class="header-anchor" href="#controller-层-获取参数、发送请求、获取结果-流程"><span>Controller 层(获取参数、发送请求、获取结果)流程</span></a></h3><p><img src="'+h+'" alt="Controller层(获取参数、发送请求、获取结果)流程.jpg"></p><h3 id="任务执行流程" tabindex="-1"><a class="header-anchor" href="#任务执行流程"><span>任务执行流程</span></a></h3><p><img src="'+p+'" alt="任务执行流程.png"></p><hr><p><strong><em>以上是对 ABS5 的 CSD 请求链路的分享，仅供参考。如有不对的地方欢迎大家指正。</em></strong></p>',31)]))}]]),o=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%BE%85%E8%AF%84%E5%AE%A1%E6%96%87%E6%A1%A3/ABS5%E2%80%94CSD%E8%AF%B7%E6%B1%82%E9%93%BE%E8%B7%AF.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"工程介绍","slug":"工程介绍","link":"#工程介绍","children":[{"level":3,"title":"整体框架","slug":"整体框架","link":"#整体框架","children":[]}]},{"level":2,"title":"AB5_IDE","slug":"ab5-ide","link":"#ab5-ide","children":[{"level":3,"title":"文件类型","slug":"文件类型","link":"#文件类型","children":[]},{"level":3,"title":"上传服务流程","slug":"上传服务流程","link":"#上传服务流程","children":[]}]},{"level":2,"title":"过滤器","slug":"过滤器","link":"#过滤器","children":[{"level":3,"title":"过滤流程","slug":"过滤流程","link":"#过滤流程","children":[]},{"level":3,"title":"生命周期","slug":"生命周期","link":"#生命周期","children":[]},{"level":3,"title":"引用","slug":"引用","link":"#引用","children":[]}]},{"level":2,"title":"CSD 链路追踪流程","slug":"csd-链路追踪流程","link":"#csd-链路追踪流程","children":[{"level":3,"title":"API 过滤检测流程","slug":"api-过滤检测流程","link":"#api-过滤检测流程","children":[]},{"level":3,"title":"Controller 层(获取参数、发送请求、获取结果)流程","slug":"controller-层-获取参数、发送请求、获取结果-流程","link":"#controller-层-获取参数、发送请求、获取结果-流程","children":[]},{"level":3,"title":"任务执行流程","slug":"任务执行流程","link":"#任务执行流程","children":[]}]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/待评审文档/ABS5—CSD请求链路.md"}')}}]);