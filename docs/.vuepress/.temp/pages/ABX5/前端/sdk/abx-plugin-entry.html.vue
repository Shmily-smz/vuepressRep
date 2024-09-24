<template><div><h1 id="abx-plugin-entry" tabindex="-1"><a class="header-anchor" href="#abx-plugin-entry"><span>abx-plugin-entry</span></a></h1>
<blockquote>
<p>根据当前端标志,选择所需要执行的入口方法,调用宿主端暴露出的方法.</p>
</blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> EntryPlugin<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"abx-plugin-entry"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-ab4entryasync" tabindex="-1"><a class="header-anchor" href="#_2-1-ab4entryasync"><span>2.1 ab4EntryAsync</span></a></h3>
<p><strong>参数</strong></p>
<ol>
<li><em>type(String)</em>: 组件名称</li>
<li><em>type(Object)</em>: 组件执行所需的参数</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">EntryPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ab4EntryAsync</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| type | 组件名称 | string |
| options | 组件执行所需的参数 | object | --></div></template>


