<template><div><h1 id="ab-plugin-gpy-高拍仪组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-gpy-高拍仪组件"><span>ab-plugin-gpy 高拍仪组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">GPY</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-gpy'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-open-打开高拍仪" tabindex="-1"><a class="header-anchor" href="#_2-1-open-打开高拍仪"><span>2.1 open -- 打开高拍仪</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> wifiName <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> dpi <span class="token operator">=</span> <span class="token string">"200"</span><span class="token punctuation">;</span><span class="token comment">// 默认200 可不传</span></span>
<span class="line">    <span class="token comment">// GPY.open(wifiName);</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token constant">GPY</span><span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>wifiName<span class="token punctuation">,</span> dpi<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入参</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>wifiName</td>
<td>string</td>
<td>√</td>
<td>打开高拍仪wifi名称</td>
</tr>
<tr>
<td>dpi</td>
<td>string</td>
<td>x</td>
<td>高拍仪的分辨率</td>
</tr>
</tbody>
</table>
<p><strong>返回值</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ret</td>
<td>string</td>
<td>返回文件路径</td>
</tr>
</tbody>
</table>
<hr>
</div></template>


