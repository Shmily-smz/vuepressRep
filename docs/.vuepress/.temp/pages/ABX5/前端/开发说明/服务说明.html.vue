<template><div><h1 id="abx5-服务说明" tabindex="-1"><a class="header-anchor" href="#abx5-服务说明"><span>ABX5 服务说明</span></a></h1>
<table>
<thead>
<tr>
<th style="text-align:center">服务名</th>
<th>服务简介</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">abm</td>
<td>管理台,打包部署的服务入口,分发交易包、部署运行定时任务.</td>
</tr>
<tr>
<td style="text-align:center">aarm</td>
<td>ABX5 前端资源服务,存放前端资源文件、客户端插件、客户端配置文件</td>
</tr>
<tr>
<td style="text-align:center">aase</td>
<td>ABX5 服务入口,执行交易逻辑及管理交易相关数据</td>
</tr>
<tr>
<td style="text-align:center">abpm</td>
<td>ABX5 流程引擎服务,管理 bpmn 交易的流程数据</td>
</tr>
<tr>
<td style="text-align:center">message</td>
<td>ABX5 消息服务,服务向客户端发送消息、服务间发送消息</td>
</tr>
</tbody>
</table>
<h2 id="abm-服务" tabindex="-1"><a class="header-anchor" href="#abm-服务"><span>abm 服务</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">aase</span>
<span class="line">├─ log</span>
<span class="line">|  ├─ yyyyMMdd                  // 最新时间的交易日志</span>
<span class="line">|  |  └─ 0000                   // 机构号目录,默认0000</span>
<span class="line">|  |     └─ 000000              // 柜员号目录,默认000000</span>
<span class="line">|  |        ├─ business         // 交易日志</span>
<span class="line">|  |        |  └─ invokeLog.log </span>
<span class="line">|  |        └─ platform         // 交易内调用平台组件记录的日志</span>
<span class="line">|  |           └─ 0000.log      </span>
<span class="line">|  ├─ agree-runtime.log         // aase 服务运行时的日志文件</span>
<span class="line">|  ├─ agree-runtime-rollback    // agree-runtime.log 文件被回滚掉的日志</span>
<span class="line">|  └─ systemError               // aase 服务运行时错误记录文件夹</span>
<span class="line">|     └─ systemErrorLog.log     // aase 服务运行时错误记录文件</span>
<span class="line">├─ resource                     // 依赖工程资源存放目录</span>
<span class="line">├─ trade                        // 打包部署的交易目录</span>
<span class="line">|  └─ demo                      // 对应的服务组目录,现服务组为 demo</span>
<span class="line">|     └─ BankModule             // 交易目录</span>
<span class="line">└─ config                       // abm 服务配置目录</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="abm-管理台浏览器" tabindex="-1"><a class="header-anchor" href="#abm-管理台浏览器"><span>abm 管理台浏览器</span></a></h3>
<blockquote>
<p>路径: <code v-pre>http://192.168.70.10:30887/static/public/index.html#/</code></p>
<p><code v-pre>http://192.168.70.10:30887</code>是abm服务暴露的外网访问地址</p>
</blockquote>
<ol>
<li>
<p><strong>登录</strong>: <code v-pre>admin/admin</code>
<img src="@source/ABX5/前端/开发说明/img/abm/abm.png" alt="abm管理台"></p>
</li>
<li>
<p><strong>功能说明</strong>:
<img src="@source/ABX5/前端/开发说明/img/abm/abm_manager.png" alt="abm管理台-首页"></p>
</li>
</ol>
<h2 id="aarm-资源服务" tabindex="-1"><a class="header-anchor" href="#aarm-资源服务"><span>aarm 资源服务</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">aarm</span>
<span class="line">├─ log</span>
<span class="line">|  ├─ aarm.log                    // aarm 运行时资源加载、grm 更新、接口日志</span>
<span class="line">|  └─ error.log                   // 运行时错误日志</span>
<span class="line">├─ compile-script                 // ABX5 资源编译目录</span>
<span class="line">│  ├─ log</span>
<span class="line">│  |  └─ yyyyMMdd.log             // 当天所有的编译日志</span>
<span class="line">|  └─ version.txt                 // 当前服务内前端资源的版本信息</span>
<span class="line">├─ clientWorkspace</span>
<span class="line">│  └─ default</span>
<span class="line">│     ├─ preferenceServer</span>
<span class="line">│     |  └─ preference.properties // ABX5客户端的远端配置文件</span>
<span class="line">|     ├─ update</span>
<span class="line">|     |  └─ plugins               // ABX5 客户端所用最新插件</span>
<span class="line">|     └─ workspace                // ABX5 资源目录</span>
<span class="line">├─ config</span>
<span class="line">|  ├─ agree_ab5.0.lic             // license 使用授权文件</span>
<span class="line">|  ├─ application_health.yml      // 服务健康检查相关配置</span>
<span class="line">|  ├─ deployconfig.json           // ABX5 运行时配置文件</span>
<span class="line">|  └─ application.yml             // aarm 服务配置文件</span>
<span class="line">└─ version.txt                    // aarm 服务端产品包版本信息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="aase" tabindex="-1"><a class="header-anchor" href="#aase"><span>aase</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">aase</span>
<span class="line">├─ log</span>
<span class="line">|  ├─ yyyyMMdd                  // 最新时间的交易日志</span>
<span class="line">|  |  └─ 0000                   // 机构号目录,默认0000</span>
<span class="line">|  |     └─ 000000              // 柜员号目录,默认000000</span>
<span class="line">|  |        ├─ business         // 交易日志</span>
<span class="line">|  |        |  └─ invokeLog.log </span>
<span class="line">|  |        └─ platform         // 交易内调用平台组件记录的日志</span>
<span class="line">|  |           └─ 0000.log      </span>
<span class="line">|  ├─ agree-runtime.log         // aase 服务运行时的日志文件</span>
<span class="line">|  ├─ agree-runtime-rollback    // agree-runtime.log 文件被回滚掉的日志</span>
<span class="line">|  └─ systemError               // aase 服务运行时错误记录文件夹</span>
<span class="line">|     └─ systemErrorLog.log     // aase 服务运行时错误记录文件</span>
<span class="line">├─ workspace</span>
<span class="line">│  ├─ thirdLib                  // 交易工程所用第三方 jar 包</span>
<span class="line">│  └─ BankModule                // 交易工程目录,现工程名为 BankModule</span>
<span class="line">├─ config                       // aase 服务配置目录</span>
<span class="line">└─ version.txt                  // aase 服务端产品包版本信息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="abpm-流程服务" tabindex="-1"><a class="header-anchor" href="#abpm-流程服务"><span>abpm 流程服务</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">abpm</span>
<span class="line">├─ log                          // abpm 服务运行时日志记录文件夹</span>
<span class="line">├─ catchs                       // abpm 交易工程存放目录</span>
<span class="line">├─ config                       // abpm 服务配置目录</span>
<span class="line">├─ application.properties       // abpm 服务配置</span>
<span class="line">└─ version.txt                  // abpm 服务端产品包版本信息</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="message-消息服务" tabindex="-1"><a class="header-anchor" href="#message-消息服务"><span>message 消息服务</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">message</span>
<span class="line">├─ log</span>
<span class="line">|  ├─ error.log                 // message 服务运行时错误记录文件</span>
<span class="line">|  ├─ message.log               // message 服务运行时的日志文件</span>
<span class="line">|  ├─ trade.log                 // message 服务运行时的日志文件</span>
<span class="line">|  ├─ message-rollback          // message.log 文件被回滚掉的日志</span>
<span class="line">|  └─ trade-rollback            // trade.log 服务运行时错误记录文件夹</span>
<span class="line">└─ config                       // message 服务配置目录</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


