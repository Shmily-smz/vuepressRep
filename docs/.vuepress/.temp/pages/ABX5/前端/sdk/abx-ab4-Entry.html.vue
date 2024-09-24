<template><div><h1 id="abx-ab4entry" tabindex="-1"><a class="header-anchor" href="#abx-ab4entry"><span>abx-ab4Entry</span></a></h1>
<blockquote>
<p>abx 内调用 ab4 客户端技术组件入口</p>
</blockquote>
<hr>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ab4Entry <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'abx-ab4Entry'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<blockquote>
<p>调用 ab 技术组件的统一入口方法</p>
</blockquote>
<p><strong>参数:</strong>
1. <em>type(String)</em>: 调用的技术组件名称
2. <em>options(Object)</em>: 技术组件执行所需的参数</p>
<p><strong>返回</strong></p>
<pre><code>*(Object)*: 返回带有组件结果与错误码的对象
</code></pre>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">ab4Entry</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">// result 内存在校验码判断是否成功</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


