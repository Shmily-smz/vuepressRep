<template><div><h1 id="ab-plugin-embed-yinzhijie-前端内嵌银之杰控件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-yinzhijie-前端内嵌银之杰控件"><span>ab-plugin-embed-yinzhijie@前端内嵌银之杰控件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> YinZhiJie <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-embed-yinzhijie'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-yzjyanyininit-验印模块初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-yzjyanyininit-验印模块初始化"><span>2.1 yzjYanyinInit --验印模块初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">'yzj'</span><span class="token punctuation">;</span> <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> YinZhiJie<span class="token punctuation">.</span><span class="token function">yzjYanyinInit</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>当前内嵌组件 id</td>
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
<td>id</td>
<td>string</td>
<td>当前内嵌组件 id</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>窗口句柄信息</td>
</tr>
<tr>
<td>result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-2-yzjyanyinfinish-验印模块销毁" tabindex="-1"><a class="header-anchor" href="#_2-2-yzjyanyinfinish-验印模块销毁"><span>2.2 yzjYanyinFinish --验印模块销毁</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">'yzj'</span><span class="token punctuation">;</span> <span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> YinZhiJie<span class="token punctuation">.</span><span class="token function">yzjYanyinFinish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>当前内嵌组件 id</td>
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
<td>id</td>
<td>string</td>
<td>当前内嵌组件 id</td>
</tr>
<tr>
<td>msg</td>
<td>string</td>
<td>操作状态信息</td>
</tr>
<tr>
<td>result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-3-yzjyanyininvoke-验印内部指令调用" tabindex="-1"><a class="header-anchor" href="#_2-3-yzjyanyininvoke-验印内部指令调用"><span>2.3 yzjYanyinInvoke --验印内部指令调用</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">'yzj'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">'{"CMD":"Close","Params":""}'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> YinZhiJie<span class="token punctuation">.</span><span class="token function">yzjYanyinInvoke</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>当前内嵌组件 id</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>报文信息</td>
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
<td>result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
</div></template>


