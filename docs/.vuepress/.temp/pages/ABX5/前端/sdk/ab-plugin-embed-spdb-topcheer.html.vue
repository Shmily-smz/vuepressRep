<template><div><h1 id="ab-plugin-embed-spdb-topcheer-前端嵌入控件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-spdb-topcheer-前端嵌入控件"><span>ab-plugin-embed-spdb-topcheer@前端嵌入控件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Topcheer<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-embed-spdb-topcheer'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-embed-发送内嵌请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-embed-发送内嵌请求初始化"><span>2.1 embed --发送内嵌请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"Topcheer"</span><span class="token punctuation">;</span> <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Topcheer<span class="token punctuation">.</span><span class="token function">embed</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>Topcheer窗体的句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.embed(id)</font></blockquote>
<hr>
<h3 id="_2-2-init-发送内嵌请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-2-init-发送内嵌请求初始化"><span>2.2 init --发送内嵌请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> initData <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span> <span class="token comment">//初始化信息</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Topcheer<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>initData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>initData</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>初始化信息</td>
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
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.init(id,initData)</font></blockquote>
<hr>
<h3 id="_2-3-submit-浏览器中提交表单" tabindex="-1"><a class="header-anchor" href="#_2-3-submit-浏览器中提交表单"><span>2.3 submit --浏览器中提交表单</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">//</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Topcheer<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.submit(id)</font></blockquote>
<hr>
<h3 id="_2-4-currentfocus" tabindex="-1"><a class="header-anchor" href="#_2-4-currentfocus"><span>2.4 currentFocus --</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Topcheer<span class="token punctuation">.</span><span class="token function">currentFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
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
<td>res.msg</td>
<td>string</td>
<td>返回的信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.currentFocus()</font></blockquote>
<hr>
<h3 id="_2-5-dispose-销毁" tabindex="-1"><a class="header-anchor" href="#_2-5-dispose-销毁"><span>2.5 dispose --销毁</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">//</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Topcheer<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Topcheer.dispose(id)</font></blockquote>
<hr>
</div></template>


