<template><div><h1 id="ab-plugin-yanyin-验印组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-yanyin-验印组件"><span>ab-plugin-yanyin 验印组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> YanYin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-yanyin'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-callyanyin-调用打开验印组件" tabindex="-1"><a class="header-anchor" href="#_2-1-callyanyin-调用打开验印组件"><span>2.1 callYanYin -- 调用打开验印组件</span></a></h3>
<!-- > <font color ='green' style="font-weight:bold">支持柜面渠道</font> -->
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span> <span class="token comment">// 调用验印组件传入的参数</span></span>
<span class="line">    <span class="token keyword">let</span> generatePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 验印结果生成路径</span></span>
<span class="line">    <span class="token keyword">let</span> exePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 验印应用路径</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> ret <span class="token operator">=</span> YanYin<span class="token punctuation">.</span><span class="token function">callYanYin</span><span class="token punctuation">(</span>message<span class="token punctuation">,</span> generatePath<span class="token punctuation">,</span> exePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>message</td>
<td>string</td>
<td>√</td>
<td>调用验印组件传入的参数</td>
</tr>
<tr>
<td>generatePath</td>
<td>string</td>
<td>√</td>
<td>验印结果生成路径</td>
</tr>
<tr>
<td>exePath</td>
<td>string</td>
<td>√</td>
<td>验印应用路径</td>
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
<td>验印组件是否打开成功</td>
</tr>
</tbody>
</table>
<hr>
</div></template>


