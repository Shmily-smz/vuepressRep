<template><div><h1 id="ab-plugin-vt-vt组件桥接器" tabindex="-1"><a class="header-anchor" href="#ab-plugin-vt-vt组件桥接器"><span>ab-plugin-vt@VT组件桥接器</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Vt <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-vt"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-init-初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-init-初始化"><span>2.1 init --初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"vt"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Vt<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>Vt组件id</td>
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
<td>res.msg</td>
<td>string</td>
<td>handle,句柄</td>
</tr>
<tr>
<td>res.result</td>
<td>string</td>
<td>成功的标识</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: VT.init(id)</font></blockquote>
<hr>
<h3 id="_2-2-dispose-销毁" tabindex="-1"><a class="header-anchor" href="#_2-2-dispose-销毁"><span>2.2 dispose --销毁</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"vt"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Vt<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>Vt组件的id</td>
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
<td>无</td>
<td>无</td>
<td>无</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: VT.dispose(id)</font></blockquote>
<hr>
<h3 id="_2-3-sendmessagetriggerbykeywords-根据屏幕关键字发送对应消息" tabindex="-1"><a class="header-anchor" href="#_2-3-sendmessagetriggerbykeywords-根据屏幕关键字发送对应消息"><span>2.3 sendMessageTriggerByKeywords --根据屏幕关键字发送对应消息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> keywords<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> messageKey<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Vt<span class="token punctuation">.</span><span class="token function">sendMessageTriggerByKeywords</span><span class="token punctuation">(</span>keywords<span class="token punctuation">,</span>messageKey<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>keywords</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>监听关键字</td>
</tr>
<tr>
<td>messageKey</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>发送给交易的key值</td>
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
<td>预览页面的url</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: VT.sendMessageTriggerByKeywords(keywords,messageKey)</font></blockquote>
<hr>
<h3 id="_2-4-disconnect-与vt断开连接" tabindex="-1"><a class="header-anchor" href="#_2-4-disconnect-与vt断开连接"><span>2.4 disconnect --与vt断开连接</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Vt<span class="token punctuation">.</span><span class="token function">disconnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>无</td>
<td>无</td>
<td>x</td>
<td>x</td>
<td>无</td>
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
<td>无</td>
<td>无</td>
<td>无</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: VT.disconnect()</font></blockquote>
<hr>
<h3 id="_2-5-sendcommand-给vt发送指令" tabindex="-1"><a class="header-anchor" href="#_2-5-sendcommand-给vt发送指令"><span>2.5 sendCommand --给vt发送指令</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> command<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Vt<span class="token punctuation">.</span><span class="token function">sendCommand</span><span class="token punctuation">(</span>command<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>command</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>vt指令</td>
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
<td>无</td>
<td>无</td>
<td>无</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: VT.sendCommand(command)</font></blockquote>
<hr>
</div></template>


