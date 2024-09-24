<template><div><h1 id="ab-plugin-notificaiton-提醒模块" tabindex="-1"><a class="header-anchor" href="#ab-plugin-notificaiton-提醒模块"><span>ab-plugin-notificaiton 提醒模块</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Notification <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-notificaiton'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-beep-设备响铃" tabindex="-1"><a class="header-anchor" href="#_2-1-beep-设备响铃"><span>2.1 beep -- 设备响铃</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> times<span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span></span>
<span class="line">Notification<span class="token punctuation">.</span><span class="token function">beep</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td>times</td>
<td>number</td>
<td>√</td>
<td>蜂鸣次数</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.beep()</font></blockquote>
<hr>
<h3 id="_2-2-vibrate-设备震动" tabindex="-1"><a class="header-anchor" href="#_2-2-vibrate-设备震动"><span>2.2 vibrate -- 设备震动</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> time<span class="token operator">=</span> <span class="token number">3</span><span class="token operator">*</span><span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">Notification<span class="token punctuation">.</span><span class="token function">vibrate</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td>time</td>
<td>number</td>
<td>√</td>
<td>震动毫秒数</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.vibrate()</font></blockquote>
<hr>
<h3 id="_2-3-cancelvibration-取消震动" tabindex="-1"><a class="header-anchor" href="#_2-3-cancelvibration-取消震动"><span>2.3 cancelVibration -- 取消震动</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">Notification<span class="token punctuation">.</span><span class="token function">cancelVibration</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.cancelVibration()</font></blockquote>
<hr>
<h3 id="_2-4-createmessage-创建通知栏消息" tabindex="-1"><a class="header-anchor" href="#_2-4-createmessage-创建通知栏消息"><span>2.4 createMessage -- 创建通知栏消息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token string">"标题"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">"内容"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> progress <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"push"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"https://www.baidu.com"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">Notification<span class="token punctuation">.</span><span class="token function">createMessage</span><span class="token punctuation">(</span>title<span class="token punctuation">,</span> content<span class="token punctuation">,</span>progress<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.notification.createMessage()</font></blockquote>
<hr>
</div></template>


