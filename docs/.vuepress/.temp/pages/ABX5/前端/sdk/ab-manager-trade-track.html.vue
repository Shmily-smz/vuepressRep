<template><div><h1 id="ab-manager-trade-track-交易链路追踪" tabindex="-1"><a class="header-anchor" href="#ab-manager-trade-track-交易链路追踪"><span>ab-manager-trade-track@交易链路追踪</span></a></h1>
<p>交易链路追踪管理器，根据不同渠道进行交易的链路追踪管理。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> TradeTrack <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade-track"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-事件方法的使用" tabindex="-1"><a class="header-anchor" href="#_2-事件方法的使用"><span>2. 事件方法的使用</span></a></h2>
<blockquote>
<p><strong>申请traceId</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> channelId <span class="token operator">=</span> <span class="token string">"01"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> TradeTrack<span class="token punctuation">.</span><span class="token function">getTraceId</span><span class="token punctuation">(</span>channelId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>channelId</code>用来设置渠道标识，需要在申请traceId时传入，例如：</p>
<p><strong>渠道标识编号</strong></p>
<table>
<thead>
<tr>
<th>channelId</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">平台</th>
</tr>
</thead>
<tbody>
<tr>
<td>01</td>
<td style="text-align:center">柜面渠道</td>
<td style="text-align:center">Java-PC</td>
</tr>
<tr>
<td>02</td>
<td style="text-align:center">自助渠道</td>
<td style="text-align:center">.net-PC</td>
</tr>
<tr>
<td>03</td>
<td style="text-align:center">厅堂渠道</td>
<td style="text-align:center">移动</td>
</tr>
<tr>
<td>04</td>
<td style="text-align:center">管理V端渠道</td>
<td style="text-align:center">Web-PC</td>
</tr>
</tbody>
</table>
</div></template>


