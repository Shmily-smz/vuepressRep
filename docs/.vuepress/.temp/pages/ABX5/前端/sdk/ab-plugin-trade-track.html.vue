<template><div><h1 id="ab-plugin-trade-track-日志链路追踪" tabindex="-1"><a class="header-anchor" href="#ab-plugin-trade-track-日志链路追踪"><span>ab-plugin-trade-track@日志链路追踪</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TradeTrack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-trade-track"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-事件方法的使用" tabindex="-1"><a class="header-anchor" href="#_2-事件方法的使用"><span>2. 事件方法的使用</span></a></h2>
<h3 id="_2-1-gettradeid-申请tradeid" tabindex="-1"><a class="header-anchor" href="#_2-1-gettradeid-申请tradeid"><span>2.1 getTradeId --申请tradeId</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> TradeTrack<span class="token punctuation">.</span><span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token string">"T1001"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>tradeId1 <span class="token operator">=</span> result<span class="token punctuation">.</span>tradeId<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> childResult <span class="token operator">=</span> <span class="token keyword">await</span> TradeTrack<span class="token punctuation">.</span><span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token string">"T1001"</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>tradeId1<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>childTradeId <span class="token operator">=</span> childResult<span class="token punctuation">.</span>tradeId</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>tradeId</td>
<td>string</td>
<td>x</td>
<td>x</td>
<td>交易ID</td>
</tr>
<tr>
<td>tradeName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易名称</td>
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
<td>返回的交易ID</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.getTradeId(tradeName,tradeId)</font></blockquote>
<hr>
<h3 id="_2-2-getrequestid-根据tradeid申请requestid" tabindex="-1"><a class="header-anchor" href="#_2-2-getrequestid-根据tradeid申请requestid"><span>2.2 getRequestId --根据tradeId申请requestId</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> TradeTrack<span class="token punctuation">.</span><span class="token function">getRequestId</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tradeId1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>requestId1 <span class="token operator">=</span> result1<span class="token punctuation">.</span>requestId<span class="token punctuation">;</span></span>
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
<td>tradeId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易ID</td>
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
<td>返回对应ID</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.getRequestId(tradeId)</font></blockquote>
<hr>
<h3 id="_2-3-sremove-清除tradeid" tabindex="-1"><a class="header-anchor" href="#_2-3-sremove-清除tradeid"><span>2.3 sremove --清除tradeId</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> TradeTrack<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tradeId1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<tbody>
<tr>
<td>tradeId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易ID</td>
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
<td>success,代表删除成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: TradeTrack.remove(tradeId)</font></blockquote>
<hr>
</div></template>


