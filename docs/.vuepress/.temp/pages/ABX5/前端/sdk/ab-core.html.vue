<template><div><h1 id="ab-core-事件总线" tabindex="-1"><a class="header-anchor" href="#ab-core-事件总线"><span>ab-core@事件总线</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> EventHub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-core'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-事件方法使用说明" tabindex="-1"><a class="header-anchor" href="#_2-事件方法使用说明"><span>2. 事件方法使用说明</span></a></h2>
<blockquote>
<p><strong>订阅事件方法</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> fun<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> topic <span class="token operator">=</span> <span class="token string">"testTopic"</span><span class="token punctuation">;</span> <span class="token comment">// 订阅/发布的标题</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">testFn</span> <span class="token operator">=</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">msg<span class="token punctuation">,</span> data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// 订阅事件方法的回调函数</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">,</span> <span class="token string">"hello "</span> <span class="token operator">+</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// "testTopic" "hello agree"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> testFn<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>发布事件方法</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span>topic<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 发布消息</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> topic <span class="token operator">=</span> <span class="token string">"testTopic"</span><span class="token punctuation">;</span> <span class="token comment">// 订阅/发布的标题</span></span>
<span class="line">    <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"agree"</span><span class="token punctuation">;</span> <span class="token comment">// 发布的内容</span></span>
<span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">publish</span><span class="token punctuation">(</span><span class="token string">"testTopic"</span><span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>取消订阅</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span>topic<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// topic为空取消所有订阅</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token string">"testTopic"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token punctuation">.</span><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-切换ab-core内部使用的端代码ts" tabindex="-1"><a class="header-anchor" href="#_3-切换ab-core内部使用的端代码ts"><span>3. 切换ab-core内部使用的端代码ts</span></a></h2>
<blockquote>
<p><strong>工程入口main.js配置端ts</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">AndroidEventHub</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> EventHub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-core'</span></span>
<span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> AndroidEventHub <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-core/lib/event-hub-android'</span></span>
<span class="line">    EventHub<span class="token punctuation">.</span>current<span class="token operator">=</span><span class="token keyword">new</span> <span class="token class-name">AndroidEventHub</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>subscribe</td>
<td style="text-align:center">订阅事件</td>
<td style="text-align:center">topic, fun</td>
</tr>
<tr>
<td>publish</td>
<td style="text-align:center">发布事件</td>
<td style="text-align:center">topic, data</td>
</tr>
<tr>
<td>unsubscribe</td>
<td style="text-align:center">取消订阅</td>
<td style="text-align:center">topic</td>
</tr>
</tbody>
</table>
<table>
<thead>
<tr>
<th>参数</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>topic</td>
<td style="text-align:center">string</td>
<td style="text-align:center">订阅/发布/取消的主题/标题</td>
</tr>
<tr>
<td>fun</td>
<td style="text-align:center">function</td>
<td style="text-align:center">订阅的回调方法,需要传入两个参数<br>msg:返回的订阅的标题<br>data:订阅拿到发布的内容</td>
</tr>
<tr>
<td>data</td>
<td style="text-align:center">-</td>
<td style="text-align:center">发布的内容信息</td>
</tr>
</tbody>
</table>
</div></template>


