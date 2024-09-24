<template><div><h1 id="ab-manager-page-页面管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-page-页面管理"><span>ab-manager-page@页面管理</span></a></h1>
<p>对交易页面进行管理。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-page'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> pages <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Step1'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">'FCClient/modules/T10001/Step1.vue'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Step2'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">page</span><span class="token operator">:</span> <span class="token string">'FCClient/modules/T10001/Step2.vue'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> pageManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PageManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span> pages <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-获取页面" tabindex="-1"><a class="header-anchor" href="#_2-获取页面"><span>2. 获取页面</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> page <span class="token operator">=</span> <span class="token keyword">await</span> pageManager<span class="token punctuation">.</span><span class="token function">getPage</span><span class="token punctuation">(</span><span class="token string">'Step1'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p>PageManager Events</p>
</blockquote>
<table>
<thead>
<tr>
<th>事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>getPage</td>
<td style="text-align:center">获取页面的路径</td>
<td style="text-align:center">每个页面的name值</td>
</tr>
</tbody>
</table>
</div></template>


