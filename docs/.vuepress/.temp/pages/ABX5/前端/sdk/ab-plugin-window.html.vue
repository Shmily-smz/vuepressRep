<template><div><h1 id="ab-plugin-window-多窗口组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-window-多窗口组件"><span>ab-plugin-window 多窗口组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> WindowPage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-window'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-open-以新窗口的方式打开目标url" tabindex="-1"><a class="header-anchor" href="#_2-1-open-以新窗口的方式打开目标url"><span>2.1 open -- 以新窗口的方式打开目标URL</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://192.168.31.204:8080/#/"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"mySDK"</span><span class="token punctuation">;</span></span>
<span class="line">    WindowPage<span class="token punctuation">.</span><span class="token function">open</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td>url</td>
<td>string</td>
<td>√</td>
<td>新窗口加载的网页内容,可以在本地地址,如index.html</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>√</td>
<td>新窗口的窗口名</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.open()</font></blockquote>
<hr>
<h3 id="_2-2-pop-关闭顶层窗口" tabindex="-1"><a class="header-anchor" href="#_2-2-pop-关闭顶层窗口"><span>2.2 pop -- 关闭顶层窗口</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WindowPage<span class="token punctuation">.</span><span class="token function">pop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.pop()</font></blockquote>
<hr>
<h3 id="_2-3-sendmessage-向指定窗口发送自定义消息" tabindex="-1"><a class="header-anchor" href="#_2-3-sendmessage-向指定窗口发送自定义消息"><span>2.3 sendMessage -- 向指定窗口发送自定义消息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">"mySDK"</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token keyword">let</span> message <span class="token operator">=</span> <span class="token string">"hello AB"</span><span class="token punctuation">;</span> </span>
<span class="line">    WindowPage<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span> name <span class="token punctuation">,</span> message <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td>name</td>
<td>string</td>
<td>√</td>
<td>目标窗口的窗口名</td>
</tr>
<tr>
<td>message</td>
<td>string</td>
<td>√</td>
<td>向目标窗口要发送的消息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.sendMessage()</font></blockquote>
<hr>
<h3 id="_2-4-getwindowstacksize-获取当前窗口栈的栈深度" tabindex="-1"><a class="header-anchor" href="#_2-4-getwindowstacksize-获取当前窗口栈的栈深度"><span>2.4 getWindowStackSize -- 获取当前窗口栈的栈深度</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token keyword">await</span> WindowPage<span class="token punctuation">.</span><span class="token function">getWindowStackSize</span><span class="token punctuation">(</span> <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>number</code></li>
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
<td>size</td>
<td>number</td>
<td>当前窗口栈的深度</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.getWindowStackSize()</font></blockquote>
<hr>
<h3 id="_2-5-getcurrentwindow-获取当前窗口信息" tabindex="-1"><a class="header-anchor" href="#_2-5-getcurrentwindow-获取当前窗口信息"><span>2.5 getCurrentWindow -- 获取当前窗口信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> currentWindow <span class="token operator">=</span> <span class="token keyword">await</span> WindowPage<span class="token punctuation">.</span><span class="token function">getCurrentWindow</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>Object</code></li>
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
<td>currentWindow.name</td>
<td>string</td>
<td>窗口名</td>
</tr>
<tr>
<td>currentWindow.url</td>
<td>string</td>
<td>窗口装载的url</td>
</tr>
<tr>
<td>currentWindow.style</td>
<td>object</td>
<td>缺省</td>
</tr>
<tr>
<td>currentWindow.extras</td>
<td>object</td>
<td>当前窗口接收的参数</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.getCurrentWindow()</font></blockquote>
<hr>
<h3 id="_2-6-closewindow-关闭指定窗口" tabindex="-1"><a class="header-anchor" href="#_2-6-closewindow-关闭指定窗口"><span>2.6 closeWindow -- 关闭指定窗口</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> windowName <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">    WindowPage<span class="token punctuation">.</span><span class="token function">closeWindow</span><span class="token punctuation">(</span> windowName <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>windowName</td>
<td>string</td>
<td>√</td>
<td>指定窗口的窗口名</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.window.closeWindow()</font></blockquote>
<hr>
</div></template>


