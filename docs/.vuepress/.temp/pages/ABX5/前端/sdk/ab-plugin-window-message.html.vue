<template><div><h1 id="ab-plugin-window-message-窗口定时消息" tabindex="-1"><a class="header-anchor" href="#ab-plugin-window-message-窗口定时消息"><span>ab-plugin-window-message 窗口定时消息</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> WindowMessenger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-window-message'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-sendwindowmessagedelay-定时发送窗口消息" tabindex="-1"><a class="header-anchor" href="#_2-1-sendwindowmessagedelay-定时发送窗口消息"><span>2.1 sendWindowMessageDelay -- 定时发送窗口消息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> jtname <span class="token operator">=</span> <span class="token string">"mySDK"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">sendWindowMessageDelay</span><span class="token punctuation">(</span>timeout<span class="token punctuation">,</span> jtname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>number</td>
<td>√</td>
<td>定时时间,单位毫秒</td>
</tr>
<tr>
<td>jtname</td>
<td>string</td>
<td>√</td>
<td>消息体</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值:</li>
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
<td>加入定时队列是否成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.sendWindowMessageDelay()</font></blockquote>
<hr>
<h3 id="_2-2-pausewindowmessagedelay-暂停定时" tabindex="-1"><a class="header-anchor" href="#_2-2-pausewindowmessagedelay-暂停定时"><span>2.2 pauseWindowMessageDelay -- 暂停定时</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">pauseWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回值:</li>
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
<td>是否暂停成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.pauseWindowMessageDelay()</font></blockquote>
<hr>
<h3 id="_2-3-startwindowmessagedelay-暂停后重新开始定时" tabindex="-1"><a class="header-anchor" href="#_2-3-startwindowmessagedelay-暂停后重新开始定时"><span>2.3 startWindowMessageDelay -- 暂停后重新开始定时</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">startWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回值:</li>
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
<td>是否重新计时成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.startWindowMessageDelay()</font></blockquote>
<hr>
<h3 id="_2-4-cancelwindowmessagedelay-取消定时" tabindex="-1"><a class="header-anchor" href="#_2-4-cancelwindowmessagedelay-取消定时"><span>2.4 cancelWindowMessageDelay -- 取消定时</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">cancelWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回值:</li>
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
<td>取消定时是否成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.cancelWindowMessageDelay()</font></blockquote>
<hr>
<h3 id="_2-5-getgeofenceinfo-获取地理位置" tabindex="-1"><a class="header-anchor" href="#_2-5-getgeofenceinfo-获取地理位置"><span>2.5 getGeoFenceInfo -- 获取地理位置</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">getGeoFenceInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
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
<td>result.longitude</td>
<td>number</td>
<td>经度</td>
</tr>
<tr>
<td>result.latitude</td>
<td>number</td>
<td>纬度</td>
</tr>
<tr>
<td>result.isGeoFenceMatch</td>
<td>boolean</td>
<td>是否匹配地理围栏</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.windowmessage.getGeoFenceInfo()</font></blockquote>
<hr>
</div></template>


