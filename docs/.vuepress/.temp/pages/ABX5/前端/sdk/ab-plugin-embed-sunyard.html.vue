<template><div><h1 id="ab-plugin-embed-sunyard-前端内嵌信雅达影像控件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-sunyard-前端内嵌信雅达影像控件"><span>ab-plugin-embed-sunyard@前端内嵌信雅达影像控件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> SunYard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed-sunyard"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-sunyardinit-内嵌请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-sunyardinit-内嵌请求初始化"><span>2.1 sunYardInit --内嵌请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardInit</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>窗口句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.init(id)</font></blockquote>
<hr>
<h3 id="_2-2-sunyardfinish-关闭信雅达控件" tabindex="-1"><a class="header-anchor" href="#_2-2-sunyardfinish-关闭信雅达控件"><span>2.2 sunYardFinish --关闭信雅达控件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardFinish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.finish(id)</font></blockquote>
<hr>
<h3 id="_2-3-sunyardactiveabcshell-信雅达窗口置顶" tabindex="-1"><a class="header-anchor" href="#_2-3-sunyardactiveabcshell-信雅达窗口置顶"><span>2.3 sunYardActiveAbcShell --信雅达窗口置顶</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardActiveAbcShell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.activeShell()</font></blockquote>
<hr>
<h3 id="_2-4-sunyardaddlistener-启动信雅达控件主动发送报文的监听器" tabindex="-1"><a class="header-anchor" href="#_2-4-sunyardaddlistener-启动信雅达控件主动发送报文的监听器"><span>2.4 sunYardAddListener --启动信雅达控件主动发送报文的监听器</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardAddListener</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>返回的结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.addListener(id)</font></blockquote>
<hr>
<h3 id="_2-5-sunyardcommocxfunction-调用ocx控件提供的接口" tabindex="-1"><a class="header-anchor" href="#_2-5-sunyardcommocxfunction-调用ocx控件提供的接口"><span>2.5 sunYardCommOcxFunction -- 调用ocx控件提供的接口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> value<span class="token operator">=</span> <span class="token string">""</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardCommOcxFunction</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>value</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>查看信雅达的接口文档</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.commOcxFunction(id,value)</font></blockquote>
<hr>
<h3 id="_2-6-sunyardcreatesunscan-发送内嵌请求初始化-业务参数" tabindex="-1"><a class="header-anchor" href="#_2-6-sunyardcreatesunscan-发送内嵌请求初始化-业务参数"><span>2.6 sunYardCreateSunScan --发送内嵌请求初始化:业务参数</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> appId <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardCreateSunScan</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>appId<span class="token punctuation">,</span>tradeId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>appId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>应用号</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>tradeId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>业务号</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.createSunScan(id,appId,tradeId)</font></blockquote>
<hr>
<h3 id="_2-7-sunyarddeactiveabcshell-取消窗口置顶" tabindex="-1"><a class="header-anchor" href="#_2-7-sunyarddeactiveabcshell-取消窗口置顶"><span>2.7 sunYardDeactiveAbcShell --取消窗口置顶</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardDeactiveAbcShell</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.deactiveShell()</font></blockquote>
<hr>
<h3 id="_2-8-sunyardfindsunyard-查询存活信雅达控件id" tabindex="-1"><a class="header-anchor" href="#_2-8-sunyardfindsunyard-查询存活信雅达控件id"><span>2.8 sunYardFindSunYard --查询存活信雅达控件id</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardFindSunYard</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.findSunYard()</font></blockquote>
<hr>
<h3 id="_2-9-sunyardremovelistener-关闭信雅达控件主动发送报文的监听器" tabindex="-1"><a class="header-anchor" href="#_2-9-sunyardremovelistener-关闭信雅达控件主动发送报文的监听器"><span>2.9 sunYardRemoveListener -- 关闭信雅达控件主动发送报文的监听器</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardRemoveListener</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.removeListener(id)</font></blockquote>
<hr>
<h3 id="_2-10-sunyardsettimeout-设置信雅达控件进程的超时时间" tabindex="-1"><a class="header-anchor" href="#_2-10-sunyardsettimeout-设置信雅达控件进程的超时时间"><span>2.10 sunYardSetTimeout --设置信雅达控件进程的超时时间</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> connectTimeout <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardSetTimeout</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>connectTimeout<span class="token punctuation">,</span> timeout<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>connectTimeout</td>
<td>number</td>
<td>√</td>
<td>x</td>
<td>socket连接超时时间</td>
</tr>
<tr>
<td>timeout</td>
<td>number</td>
<td>√</td>
<td>x</td>
<td>通讯超时时间</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.setTimeout(id,connectTimeout，timeout)</font></blockquote>
<hr>
<h3 id="_2-11-sunyardshowsunscan-操作控件-主要动作为新增修改查询" tabindex="-1"><a class="header-anchor" href="#_2-11-sunyardshowsunscan-操作控件-主要动作为新增修改查询"><span>2.11 sunYardShowSunScan --操作控件,主要动作为新增修改查询</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"sunyard"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> tradeInfo <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> treeInfo <span class="token operator">=</span> <span class="token string">''</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardShowSunScan</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>tradeInfo<span class="token punctuation">,</span>treeInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>tradeInfo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>业务信息</td>
</tr>
<tr>
<td>treeInfo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>目录树信息</td>
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
<td>返回的结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.showSunScan(id, tradeInfo, treeInfo)</font></blockquote>
<hr>
</div></template>


