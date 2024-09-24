<template><div><h1 id="ab-plugin-burypoint-前端burypoint-埋点信息收集-类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-burypoint-前端burypoint-埋点信息收集-类组件"><span>ab-plugin-burypoint @前端BuryPoint(埋点信息收集)类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BuryPoint <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-burypoint'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-record-埋点信息收集组件" tabindex="-1"><a class="header-anchor" href="#_2-1-record-埋点信息收集组件"><span>2.1 record --埋点信息收集组件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">{demo}</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>  <span class="token comment">//字符串入参</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> BuryPoint<span class="token punctuation">.</span><span class="token function">record</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>message</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>字符串入参</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
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
<td>res.result</td>
<td>string</td>
<td>成功的标识</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: 无</font></blockquote>
<hr>
</div></template>


