<template><div><h1 id="abx-logger" tabindex="-1"><a class="header-anchor" href="#abx-logger"><span>abx-logger</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TradeLog <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"abx-logger"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-info" tabindex="-1"><a class="header-anchor" href="#_2-1-info"><span>2.1 info</span></a></h3>
<p>提示信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 信息</li>
<li><em>exception(LogException)</em>: 异常对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">TradeLog<span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> exception<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-warn" tabindex="-1"><a class="header-anchor" href="#_2-2-warn"><span>2.2 warn</span></a></h3>
<p>警告信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 信息</li>
<li><em>exception(LogException)</em>: 异常对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">TradeLog<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> exception<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3-debug" tabindex="-1"><a class="header-anchor" href="#_2-3-debug"><span>2.3 debug</span></a></h3>
<p>调试信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 信息</li>
<li><em>exception(LogException)</em>: 异常对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">TradeLog<span class="token punctuation">.</span><span class="token function">debug</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> exception<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-4-error" tabindex="-1"><a class="header-anchor" href="#_2-4-error"><span>2.4 error</span></a></h3>
<p>错误信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 信息</li>
<li><em>exception(LogException)</em>: 异常对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">TradeLog<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> exception<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-5-fatal" tabindex="-1"><a class="header-anchor" href="#_2-5-fatal"><span>2.5 fatal</span></a></h3>
<p>致命信息</p>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 信息</li>
<li><em>exception(LogException)</em>: 异常对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">TradeLog<span class="token punctuation">.</span><span class="token function">fatal</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> exception<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


