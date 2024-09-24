<template><div><h1 id="ab-manager-ofd-ofd文件显示" tabindex="-1"><a class="header-anchor" href="#ab-manager-ofd-ofd文件显示"><span>ab-manager-ofd@ofd文件显示</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>getOfdDocumentObj<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-ofd'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token function">getOfdDocumentObj</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>file<span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>screenWidth<span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>xxx <span class="token operator">=</span> res<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>error<span class="token punctuation">,</span><span class="token string">'error'</span><span class="token punctuation">)</span></span>
<span class="line">     <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>getOfdDocumentObj参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>file</td>
<td>所上传的文件</td>
<td>null</td>
</tr>
<tr>
<td>screenWidth</td>
<td>所展示区域的宽度</td>
<td>区域宽度</td>
</tr>
</tbody>
</table>
</div></template>


