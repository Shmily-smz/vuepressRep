<template><div><h1 id="abx-core-log" tabindex="-1"><a class="header-anchor" href="#abx-core-log"><span>abx-core-log</span></a></h1>
<blockquote>
<p>abx 日志封装插件,控制并记录平台运行时日志.</p>
</blockquote>
<hr>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="list" tabindex="-1"><a class="header-anchor" href="#list"><span>list</span></a></h3>
<p>列举当前支持的日志开关.</p>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">list</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="open" tabindex="-1"><a class="header-anchor" href="#open"><span>open</span></a></h3>
<p>打开日志开关</p>
<p><strong>参数</strong></p>
<p><em>logModules(String|Array)</em>: 需要打开的日志模块</p>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>logModules<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="openall" tabindex="-1"><a class="header-anchor" href="#openall"><span>openAll</span></a></h3>
<p>打开所有的日志开关</p>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">openAll</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="writelog" tabindex="-1"><a class="header-anchor" href="#writelog"><span>writeLog</span></a></h3>
<p>写入日志信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>logType(String)</em>: 日志级别</li>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">writeLog</span><span class="token punctuation">(</span>logType<span class="token punctuation">,</span> logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="info" tabindex="-1"><a class="header-anchor" href="#info"><span>info</span></a></h3>
<p>info 级别日志记录</p>
<p><strong>参数</strong></p>
<ol>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="error" tabindex="-1"><a class="header-anchor" href="#error"><span>error</span></a></h3>
<p>error 级别日志记录
<strong>参数</strong></p>
<ol>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="warn" tabindex="-1"><a class="header-anchor" href="#warn"><span>warn</span></a></h3>
<p>warn 级别日志记录</p>
<p><strong>参数</strong></p>
<ol>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="debug" tabindex="-1"><a class="header-anchor" href="#debug"><span>debug</span></a></h3>
<p>debug 级别日志记录</p>
<p><strong>参数</strong></p>
<ol>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="fatal" tabindex="-1"><a class="header-anchor" href="#fatal"><span>fatal</span></a></h3>
<p>fatal 级别日志记录</p>
<p><strong>参数</strong></p>
<ol>
<li><em>logModule(String)</em>: 所属日志模块</li>
<li><em>message(String)</em>: 记录的日志信息</li>
</ol>
<p><strong>返回值</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">log<span class="token punctuation">.</span><span class="token function">fatal</span><span class="token punctuation">(</span>logModule<span class="token punctuation">,</span> message<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="日志级别" tabindex="-1"><a class="header-anchor" href="#日志级别"><span>日志级别</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">日志级别</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">info</td>
<td style="text-align:left">提示</td>
</tr>
<tr>
<td style="text-align:left">warn</td>
<td style="text-align:left">警告</td>
</tr>
<tr>
<td style="text-align:left">error</td>
<td style="text-align:left">错误</td>
</tr>
<tr>
<td style="text-align:left">debug</td>
<td style="text-align:left">调试</td>
</tr>
<tr>
<td style="text-align:left">fatal</td>
<td style="text-align:left">致命</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="日志模块" tabindex="-1"><a class="header-anchor" href="#日志模块"><span>日志模块</span></a></h3>
<table>
<thead>
<tr>
<th style="text-align:left">日志模块</th>
<th style="text-align:left">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">initialize</td>
<td style="text-align:left">资源初始化</td>
</tr>
<tr>
<td style="text-align:left">LoadSource</td>
<td style="text-align:left">加载资源</td>
</tr>
<tr>
<td style="text-align:left">runtimeLoad</td>
<td style="text-align:left">资源初始化</td>
</tr>
<tr>
<td style="text-align:left">createTrade</td>
<td style="text-align:left">打开交易</td>
</tr>
<tr>
<td style="text-align:left">closeTrade</td>
<td style="text-align:left">关闭交易</td>
</tr>
<tr>
<td style="text-align:left">abortTrade</td>
<td style="text-align:left">终止交易</td>
</tr>
<tr>
<td style="text-align:left">createSubTrade</td>
<td style="text-align:left">打开子交易</td>
</tr>
<tr>
<td style="text-align:left">closeSubTrade</td>
<td style="text-align:left">关闭子交易</td>
</tr>
<tr>
<td style="text-align:left">communicate</td>
<td style="text-align:left">通讯</td>
</tr>
<tr>
<td style="text-align:left">renderPage</td>
<td style="text-align:left">渲染画面</td>
</tr>
<tr>
<td style="text-align:left">hooks</td>
<td style="text-align:left">生命周期</td>
</tr>
<tr>
<td style="text-align:left">tradeProcess</td>
<td style="text-align:left">交易过程</td>
</tr>
<tr>
<td style="text-align:left">tradeFlow</td>
<td style="text-align:left">交易流程</td>
</tr>
<tr>
<td style="text-align:left">flowError</td>
<td style="text-align:left">流程异常</td>
</tr>
<tr>
<td style="text-align:left">hotUpdate</td>
<td style="text-align:left">流程异常</td>
</tr>
<tr>
<td style="text-align:left">unknown</td>
<td style="text-align:left">未知</td>
</tr>
</tbody>
</table>
</div></template>


