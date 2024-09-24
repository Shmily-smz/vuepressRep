<template><div><h1 id="ab-logger-日志管理" tabindex="-1"><a class="header-anchor" href="#ab-logger-日志管理"><span>ab-logger@日志管理</span></a></h1>
<h2 id="_1-日志级别" tabindex="-1"><a class="header-anchor" href="#_1-日志级别"><span>1. 日志级别</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>silence</td>
<td>禁用所有信息，仅仅用于控制台的输出控制(v2.0.14新增),仅禁用调用loggerSDK输出的信息，原生console方法未禁用</td>
</tr>
<tr>
<td>error</td>
<td>错误信息</td>
</tr>
<tr>
<td>warn</td>
<td>警告信息</td>
</tr>
<tr>
<td>info</td>
<td>普通信息</td>
</tr>
<tr>
<td>debug</td>
<td>调试信息</td>
</tr>
</tbody>
</table>
<h2 id="_2-使用说明" tabindex="-1"><a class="header-anchor" href="#_2-使用说明"><span>2. 使用说明</span></a></h2>
<h3 id="_2-1-引入依赖" tabindex="-1"><a class="header-anchor" href="#_2-1-引入依赖"><span>2.1 引入依赖</span></a></h3>
<p>① 前端引入相应依赖</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-logger"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>② 移动基座引入相应插件</p>
<p><a href="http://192.168.180.26:50150/third-api/alog.html" target="_blank" rel="noopener noreferrer">点击查看引入文档</a></p>
<h2 id="_3-接口调用" tabindex="-1"><a class="header-anchor" href="#_3-接口调用"><span>3. 接口调用</span></a></h2>
<p>日志格式示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">[20210408 10:37:40.010][C][12345678][0000][00]INFO Thread-38 ConsoleNativeLogger:write - register finish</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>格式</strong>：
<code v-pre>[时间][C][tradeId][serviceId][stepId]日志级别 线程名 业务类型:执行动作 - 日志内容</code></p>
<p><code v-pre>[20210408 10:37:40.010]</code>：时间，21位，格式按照yyyyMMdd HH:mm:ss.SSS格式；</p>
<p><code v-pre>[C]</code>：端标识，1位，C端使用<code v-pre>[C]</code>，S端使用<code v-pre>[S]</code>；</p>
<p><code v-pre>[tradeId]</code>：16位（暂定），交易id，正常情况下由C端生成。消息推送等S端发起的场景由S端生成，不重复；</p>
<p><code v-pre>[serviceId]</code>：4位，通讯id，每个交易从0开始，客户端每次发送通讯时加1，收到响应当次id按服务端返回的报文中id记录到日志；</p>
<p><code v-pre>[stepId]</code>：2位，客户端每次发送通讯时从0开始，服务端每跳转一个节点加1，如abc调用abs1，abs1调用abs2，则abc发送时为00，收到时为02。</p>
<h3 id="_3-1-写入info信息或者-debug-warn信息" tabindex="-1"><a class="header-anchor" href="#_3-1-写入info信息或者-debug-warn信息"><span>3.1 写入info信息或者/debug/warn信息</span></a></h3>
<p><strong>logger.info(message, args1, args2);</strong></p>
<ul>
<li>message: 日志的相关描述信息，例如上面的示例：<code v-pre>[tradeId][serviceId][stepId]</code>表示这部分内容，会写入到日志文件对应的格式中;</li>
<li>args1：表示日志的真正内容，会写到每一条日志的末尾;</li>
<li>args2：多参数设定，通args1一样。</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token function">logInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"测试1"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token string">"测试2"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> demo <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token literal-property property">head</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">"liming"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token literal-property property">info</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">detail</span><span class="token operator">:</span> <span class="token string">"liming"</span> <span class="token punctuation">}</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      args<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>demo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">"[12345678][0000][00]"</span><span class="token punctuation">;</span></span>
<span class="line">      logger<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token string">"1433223"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      logger<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token string">"1433223"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      logger<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> args<span class="token punctuation">,</span> <span class="token string">"1433223"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-写入error信息" tabindex="-1"><a class="header-anchor" href="#_3-2-写入error信息"><span>3.2 写入error信息</span></a></h3>
<p>接口说明：</p>
<p>logger.error(message, args1, args2);</p>
<p>参数说明同info接口。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">"[12345678][0000][00]"</span><span class="token punctuation">;</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token string">"this is error"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">"this is error"</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">"1433223"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-刷新日志-移动端调用-可正常调用-pc端为空实现" tabindex="-1"><a class="header-anchor" href="#_3-3-刷新日志-移动端调用-可正常调用-pc端为空实现"><span>3.3 刷新日志（移动端调用，可正常调用，PC端为空实现）</span></a></h3>
<p>将缓存中的日志内容刷新到日志文件中。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">logger<span class="token punctuation">.</span><span class="token function">flush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-4-发送日志到服务端-目前只移动端支持-包版本-2-0-11" tabindex="-1"><a class="header-anchor" href="#_3-4-发送日志到服务端-目前只移动端支持-包版本-2-0-11"><span>3.4 发送日志到服务端(目前只移动端支持,包版本&gt;=2.0.11)</span></a></h3>
<p>logger.send(url, unionId, date, headers);</p>
<ul>
<li>url: 上传的文件接口</li>
<li>unionId: 用户ID</li>
<li>date对应的日志文件日期，格式<code v-pre>yyyy-MM-dd</code></li>
<li>headers发送的自定义请求头，与服务端对应</li>
</ul>
<p><a href="http://192.168.180.26:50150/third-api/alog.html#%E7%89%88%E6%9C%AC%E7%AE%A1%E7%90%86" target="_blank" rel="noopener noreferrer">点击查看详细说明</a></p>
<p>示例如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span> <span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://192.168.187.136:50002/alog/native/create"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> unionId <span class="token operator">=</span> <span class="token string">"tellerR100"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token string">"2021-08-05"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> branchId <span class="token operator">=</span> <span class="token string">"AgreeR100"</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"branchId"</span><span class="token operator">:</span><span class="token string">"AgreeR100"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"relativePath"</span><span class="token operator">:</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>branchId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>unionId<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>date<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span> <span class="token comment">// 定义相对路径，/home/abs/relativePath/20210805152530.log, /home/abs/AgreeR100/tellerR100/20210805152530.log</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> logger<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> unionId<span class="token punctuation">,</span> date<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"上传成功："</span><span class="token operator">+</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"上传失败："</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-5-设置输出日志级别-仅在-2-0-14-版本后适用" tabindex="-1"><a class="header-anchor" href="#_3-5-设置输出日志级别-仅在-2-0-14-版本后适用"><span>3.5 设置输出日志级别(仅在 &gt;=2.0.14 版本后适用)</span></a></h3>
<p>调用 logger 的所有信息都会发送到壳子进行记录，也会传递过去信息的级别。下列设置不影响壳子的记录。</p>
<p>在开发过程中，可以通过参数配置，设置是否在控制台输出信息，输出哪些信息。</p>
<p><strong>生产环境请设置输出日志级别为silence</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-logger"</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出 error / warn / info / debug 级别的信息</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'debug'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出 error / warn / info 级别的信息</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'info'</span> <span class="token comment">// 默认</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 输出 error / warn 级别的信息 </span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'warn'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 仅输出 error 级别的信息 </span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'error'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 不显示任何输出</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">'silence'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-6-设置日志输出环境" tabindex="-1"><a class="header-anchor" href="#_3-6-设置日志输出环境"><span>3.6 设置日志输出环境</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//开发环境,控制台打印日志</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'development'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//生产环境,控制台不打印日志</span></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mode</span><span class="token operator">:</span> <span class="token string">'production'</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-废弃说明" tabindex="-1"><a class="header-anchor" href="#_4-废弃说明"><span>4. 废弃说明</span></a></h2>
<p>以下导出或 api 已被废弃</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FrameLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-logger"</span>  <span class="token comment">// 已废弃</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TradeLogger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-logger"</span> <span class="token comment">// 已废弃</span></span>
<span class="line"></span>
<span class="line">logger<span class="token punctuation">.</span><span class="token function">fatal</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">// 已废弃</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-abx5新增" tabindex="-1"><a class="header-anchor" href="#_5-abx5新增"><span>5. abx5新增</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LogMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-logger'</span></span>
<span class="line"></span>
<span class="line"><span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>LogMixin<span class="token punctuation">]</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_info</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_debug</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_warn</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_error</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


