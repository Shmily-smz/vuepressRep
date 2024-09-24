<template><div><h1 id="ab-plugin-embed-前端内嵌类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-前端内嵌类组件"><span>ab-plugin-embed @前端内嵌类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CefBrowser <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MfcIe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> OleIe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> OleFrame <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MfcOcx <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Embed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h2 id="embed" tabindex="-1"><a class="header-anchor" href="#embed"><span>Embed</span></a></h2>
<h3 id="_2-1-creatembedframe-76版创建内嵌画面" tabindex="-1"><a class="header-anchor" href="#_2-1-creatembedframe-76版创建内嵌画面"><span>2.1 creatEmbedFrame --76版创建内嵌画面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">''</span><span class="token operator">+</span><span class="token keyword">this</span><span class="token punctuation">.</span>pub<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> intersectionSize <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">500</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> actualSize <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">500</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> actualSize2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>actualSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> intersectionSize2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>intersectionSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">creatEmbedFrame</span><span class="token punctuation">(</span>handle<span class="token punctuation">,</span>path<span class="token punctuation">,</span>intersectionSize2<span class="token punctuation">,</span>actualSize2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>intersectionSize</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌形成的外围画布的坐标和大小</td>
</tr>
<tr>
<td>actualSize</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌的窗体的坐标和大小</td>
</tr>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
</tr>
<tr>
<td>handle</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>需要内嵌的窗口的句柄</td>
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
<td>true代表内嵌成功false代表内嵌失败</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.creatEmbedFrame(handle,path,intersectionSize2,actualSize2)</font></blockquote>
<hr>
<h3 id="_2-2-embeddedrefresh-刷新内嵌画面的大小和位置" tabindex="-1"><a class="header-anchor" href="#_2-2-embeddedrefresh-刷新内嵌画面的大小和位置"><span>2.2 embeddedRefresh --刷新内嵌画面的大小和位置</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> intersectionSize <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">500</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> actualSize <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">        <span class="token literal-property property">x</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">y</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">w</span><span class="token operator">:</span> <span class="token number">1500</span><span class="token punctuation">,</span> </span>
<span class="line">        <span class="token literal-property property">h</span><span class="token operator">:</span> <span class="token number">500</span> </span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> actualSize2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>actualSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> intersectionSize2 <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>intersectionSize<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">embeddedRefresh</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>intersectionSize2<span class="token punctuation">,</span>actualSize2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>intersectionSize</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌形成的外围画布的坐标和大小</td>
</tr>
<tr>
<td>actualSize</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌的窗体的坐标和大小</td>
</tr>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
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
<td>内嵌画面刷新的返回值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedRefresh(path,intersectionSize2,actualSize2)</font></blockquote>
<hr>
<h3 id="_2-3-embeddeddestroy-销毁指定的内嵌画面" tabindex="-1"><a class="header-anchor" href="#_2-3-embeddeddestroy-销毁指定的内嵌画面"><span>2.3 embeddedDestroy --销毁指定的内嵌画面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span>  <span class="token comment">//标识ID</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">embeddedDestroy</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
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
<td>success代表销毁成功，fail代表销毁失败。</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedDestroy(path)</font></blockquote>
<hr>
<h3 id="_2-4-embeddedvisible-显示指定内嵌画面" tabindex="-1"><a class="header-anchor" href="#_2-4-embeddedvisible-显示指定内嵌画面"><span>2.4 embeddedVisible --显示指定内嵌画面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">embeddedVisible</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
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
<td>显示内嵌画面的返回值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embeddedVisible(path)</font></blockquote>
<hr>
<h3 id="_2-5-embedvisiblescreenshot-隐藏对应的内嵌画面" tabindex="-1"><a class="header-anchor" href="#_2-5-embedvisiblescreenshot-隐藏对应的内嵌画面"><span>2.5 embedVisibleScreenshot --隐藏对应的内嵌画面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">let</span> visible <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">embedVisibleScreenshot</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>visible<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
</tr>
<tr>
<td>visible</td>
<td>Boolean</td>
<td>√</td>
<td>x</td>
<td>是否需要返回内嵌画面截图的base64字符串</td>
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
<td>执行结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: EMBED.embedVisibleScreenshot(path,visible)</font></blockquote>
<hr>
<h3 id="_2-6-getvisiblestatus-获取内嵌窗体的状态" tabindex="-1"><a class="header-anchor" href="#_2-6-getvisiblestatus-获取内嵌窗体的状态"><span>2.6 getVisibleStatus --获取内嵌窗体的状态</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span>  <span class="token comment">//标识ID</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">getVisibleStatus</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>内嵌对象的标识ID</td>
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
<td>执行结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK:EMBED.getVisibleStatus(path)</font></blockquote>
<hr>
<h3 id="_2-7-hidewindow-隐藏传入句柄对应的窗口" tabindex="-1"><a class="header-anchor" href="#_2-7-hidewindow-隐藏传入句柄对应的窗口"><span>2.7 HideWindow --隐藏传入句柄对应的窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle  <span class="token operator">=</span> <span class="token string">"00020808"</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">HideWindow</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>窗口的句柄</td>
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
<td>执行结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK:  EMBED.HideWindow(handle)</font></blockquote>
<hr>
<h3 id="_2-8-screenshoot-内嵌截图" tabindex="-1"><a class="header-anchor" href="#_2-8-screenshoot-内嵌截图"><span>2.8 screenShoot --内嵌截图</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span>  <span class="token comment">//内嵌对象的标识ID</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">screenShoot</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>内嵌对象的标识ID</td>
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
<td>执行结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK:  EMBED.screenShoot(id)</font></blockquote>
<hr>
<p>MfcIe</p>
<h3 id="_2-9-init-发送请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-9-init-发送请求初始化"><span>2.9 init --发送请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">initMfcIE</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<td>成功标识</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回句柄</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.initMfcIE(id)</font></blockquote>
<hr>
<h3 id="_2-10-refreshurl-网页刷新" tabindex="-1"><a class="header-anchor" href="#_2-10-refreshurl-网页刷新"><span>2.10 refreshUrl --网页刷新</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">refreshUrl</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.refreshUrl(id)</font></blockquote>
<hr>
<h3 id="_2-11-getlocationurl-获取当前浏览器url地址" tabindex="-1"><a class="header-anchor" href="#_2-11-getlocationurl-获取当前浏览器url地址"><span>2.11 getLocationURL --获取当前浏览器url地址</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">getLocationURL</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<td>成功标识</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回url地址</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.getLocationURL(id)</font></blockquote>
<hr>
<h3 id="_2-12-setsilent-设置ie是否禁用警告窗口" tabindex="-1"><a class="header-anchor" href="#_2-12-setsilent-设置ie是否禁用警告窗口"><span>2.12 setSilent --设置ie是否禁用警告窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> silent <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>  <span class="token comment">//是否禁用标识S</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">setSilent</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>silent<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>silent</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>是否禁用标识S</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK:MFC_IE.setSilent(id,silent)</font></blockquote>
<hr>
<h3 id="_2-13-seturl-设置ie浏览器地址" tabindex="-1"><a class="header-anchor" href="#_2-13-seturl-设置ie浏览器地址"><span>2.13 setUrl --设置ie浏览器地址</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://www.baidu.com/"</span><span class="token punctuation">;</span>  <span class="token comment">//访问地址</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>访问地址</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.setUrl(id,url)</font></blockquote>
<hr>
<h3 id="_2-14-execute-执行浏览器脚本" tabindex="-1"><a class="header-anchor" href="#_2-14-execute-执行浏览器脚本"><span>2.14 execute --执行浏览器脚本</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById('username').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';document.getElementById('userTypePwd').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span>   <span class="token comment">//执行script脚本</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>script</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>执行script脚本</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.execute(id,script)</font></blockquote>
<hr>
<h3 id="_2-15-finish-执行销毁浏览器-注意-不允许在vue-beforedestroy中使用" tabindex="-1"><a class="header-anchor" href="#_2-15-finish-执行销毁浏览器-注意-不允许在vue-beforedestroy中使用"><span>2.15 finish --执行销毁浏览器 注意：不允许在vue beforeDestroy中使用</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.finish(id)</font></blockquote>
<hr>
<h3 id="_2-16-delay-finish-延迟执行销毁浏览器-注意-不允许在vue-beforedestroy中使用" tabindex="-1"><a class="header-anchor" href="#_2-16-delay-finish-延迟执行销毁浏览器-注意-不允许在vue-beforedestroy中使用"><span>2.16 delay_finish --延迟执行销毁浏览器 注意：不允许在vue beforeDestroy中使用</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> delayTime <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">//延时时间(毫秒)</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">delay_finish</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>delayTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>delayTime</td>
<td>int</td>
<td>√</td>
<td>x</td>
<td>延时时间(毫秒)</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.delay_finish(id,delayTime)</font></blockquote>
<hr>
<h3 id="_2-17-setvalue-为浏览器中某个dom对象设置值" tabindex="-1"><a class="header-anchor" href="#_2-17-setvalue-为浏览器中某个dom对象设置值"><span>2.17 setValue --为浏览器中某个dom对象设置值</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> componentId <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"username"</span><span class="token punctuation">;</span> <span class="token comment">//浏览器内操作dom元素的id</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span><span class="token string">"wang"</span><span class="token punctuation">;</span>  <span class="token comment">//浏览器内操作dom元素的value值</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>componentId<span class="token punctuation">,</span>id<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>浏览器内操作dom元素的id</td>
</tr>
<tr>
<td>componentId</td>
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
<td>浏览器内操作dom元素的value值</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.setValue(componentId,id,value)</font></blockquote>
<hr>
<h3 id="_2-18-submit-浏览器中提交表单" tabindex="-1"><a class="header-anchor" href="#_2-18-submit-浏览器中提交表单"><span>2.18 submit --浏览器中提交表单</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> formName <span class="token operator">=</span> <span class="token string">"login"</span><span class="token punctuation">;</span>  <span class="token comment">//浏览器内操作表单的dom元素名称</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span>  MfcIe<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>formName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素名称</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.submit(id,formName)</font></blockquote>
<hr>
<h3 id="_2-19-submitbyid-根据浏览器中提交表单提交按钮dom-id来触发表单提交" tabindex="-1"><a class="header-anchor" href="#_2-19-submitbyid-根据浏览器中提交表单提交按钮dom-id来触发表单提交"><span>2.19 submitById --根据浏览器中提交表单提交按钮dom-id来触发表单提交</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> formId <span class="token operator">=</span> <span class="token string">"test"</span><span class="token punctuation">;</span>  <span class="token comment">//浏览器内操作表单的dom元素Id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span>  MfcIe<span class="token punctuation">.</span><span class="token function">submitById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>formId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素Id</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.submitById(id,formId)</font></blockquote>
<hr>
<h3 id="_2-20-gethtml-获取某个指定内嵌浏览器的全部html-返回的为html的base64串" tabindex="-1"><a class="header-anchor" href="#_2-20-gethtml-获取某个指定内嵌浏览器的全部html-返回的为html的base64串"><span>2.20 getHtml --获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcIe<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<td>success成功标识</td>
</tr>
<tr>
<td>res.htmlScript</td>
<td>string</td>
<td>html的base64字符串</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_IE.getHtml(id)</font></blockquote>
<hr>
<p>OleIe</p>
<h3 id="_2-21-init-ole-ie初始化" tabindex="-1"><a class="header-anchor" href="#_2-21-init-ole-ie初始化"><span>2.21 init --OLE_IE初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
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
<td>获取到的handle</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.init(id)</font></blockquote>
<hr>
<h3 id="_2-22-seturl-给浏览器设置url地址" tabindex="-1"><a class="header-anchor" href="#_2-22-seturl-给浏览器设置url地址"><span>2.22 setUrl --给浏览器设置url地址</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://www.baidu.com/"</span> <span class="token comment">//url地址</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>设置的网址</td>
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
<td>成功的标识true字符串</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.setUrl(id,url)</font></blockquote>
<hr>
<h3 id="_2-23-execute-ole-ie执行浏览器脚本" tabindex="-1"><a class="header-anchor" href="#_2-23-execute-ole-ie执行浏览器脚本"><span>2.23 execute --OLE_IE执行浏览器脚本</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById('username').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>username<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';document.getElementById('userTypePwd').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>script</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>脚本命令</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.execute(id,script)</font></blockquote>
<hr>
<h3 id="_2-24-finish-ole-ie执行销毁浏览器" tabindex="-1"><a class="header-anchor" href="#_2-24-finish-ole-ie执行销毁浏览器"><span>2.24 finish --OLE_IE执行销毁浏览器</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.finish(id)</font></blockquote>
<hr>
<h3 id="_2-25-delay-finish-ole-ie延迟执行销毁浏览器" tabindex="-1"><a class="header-anchor" href="#_2-25-delay-finish-ole-ie延迟执行销毁浏览器"><span>2.25 delay_finish --OLE_IE延迟执行销毁浏览器</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> delayTime <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span> <span class="token comment">//延时时间(毫秒)</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">delay_finish</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>delayTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>delayTime</td>
<td>int</td>
<td>√</td>
<td>x</td>
<td>延迟时间</td>
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
<td>成功的标识true或false</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.delay_finish(id,delayTime)</font></blockquote>
<hr>
<h3 id="_2-26-setvalue-ole-ie为浏览器中某个dom对象设置值" tabindex="-1"><a class="header-anchor" href="#_2-26-setvalue-ole-ie为浏览器中某个dom对象设置值"><span>2.26 setValue --OLE_IE为浏览器中某个dom对象设置值</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> componentId <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"username"</span><span class="token punctuation">;</span> <span class="token comment">//浏览器内操作dom元素的id</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span><span class="token string">"wang"</span><span class="token punctuation">;</span>  <span class="token comment">//浏览器内操作dom元素的value值</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>componentId<span class="token punctuation">,</span>id<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>componentId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>电脑标识ID</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>value值</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.setValue(componentId,id,value)</font></blockquote>
<hr>
<h3 id="_2-27-submit-ole-ie浏览器中提交表单" tabindex="-1"><a class="header-anchor" href="#_2-27-submit-ole-ie浏览器中提交表单"><span>2.27 submit --OLE_IE浏览器中提交表单</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> formName <span class="token operator">=</span> <span class="token string">"login"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>formName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素名称</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.submit(id,formName)</font></blockquote>
<hr>
<h3 id="_2-28-submitbyid-ole-ie根据浏览器中提交表单提交按钮dom-id来触发表单提交" tabindex="-1"><a class="header-anchor" href="#_2-28-submitbyid-ole-ie根据浏览器中提交表单提交按钮dom-id来触发表单提交"><span>2.28 submitById --OLE_IE根据浏览器中提交表单提交按钮dom-id来触发表单提交</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> formId <span class="token operator">=</span> <span class="token string">"test"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">submitById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>formId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素Id</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.submitById(id,formId)</font></blockquote>
<hr>
<h3 id="_2-29-dologin-ole-ie浏览器登录操作" tabindex="-1"><a class="header-anchor" href="#_2-29-dologin-ole-ie浏览器登录操作"><span>2.29 doLogin --OLE_IE浏览器登录操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"mail.agree.com.cn"</span><span class="token punctuation">;</span> <span class="token comment">//登录url路径</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">doLogin</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>设置的网址</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.doLogin(id,url)</font></blockquote>
<hr>
<h3 id="_2-30-dologout-ole-ie浏览器登出操作" tabindex="-1"><a class="header-anchor" href="#_2-30-dologout-ole-ie浏览器登出操作"><span>2.30 doLogout --OLE_IE浏览器登出操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"mail.agree.com.cn"</span><span class="token punctuation">;</span> <span class="token comment">//退出url路径</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">doLogout</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>设置的网址</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.doLogout(id,url)</font></blockquote>
<hr>
<h3 id="_2-31-gethtml-ole-ie获取某个指定内嵌浏览器的全部html-返回的为html的base64串" tabindex="-1"><a class="header-anchor" href="#_2-31-gethtml-ole-ie获取某个指定内嵌浏览器的全部html-返回的为html的base64串"><span>2.31 getHtml --OLE_IE获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_IE"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleIe<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识ID</td>
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
<td>成功标识</td>
</tr>
<tr>
<td>res.htmlScript</td>
<td>string</td>
<td>html脚本</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_IE.getHtml(id)</font></blockquote>
<hr>
<p>OleFrame</p>
<h3 id="_2-32-init-oleframe初始化操作" tabindex="-1"><a class="header-anchor" href="#_2-32-init-oleframe初始化操作"><span>2.32 init --oleFrame初始化操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_Frame"</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleFrame<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<td>获取到的handle</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.init(id)</font></blockquote>
<hr>
<h3 id="_2-33-dispose-oleframe销毁操作" tabindex="-1"><a class="header-anchor" href="#_2-33-dispose-oleframe销毁操作"><span>2.33 dispose --oleFrame销毁操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_Frame"</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleFrame<span class="token punctuation">.</span><span class="token function">dispose</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.dispose(id)</font></blockquote>
<hr>
<h3 id="_2-34-openfile-打开文件" tabindex="-1"><a class="header-anchor" href="#_2-34-openfile-打开文件"><span>2.34 openFile --打开文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_Frame"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'C:/Users/CrownHwang/Desktop/test.docx'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleFrame<span class="token punctuation">.</span><span class="token function">openFile</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>文件路径</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.openFile</font></blockquote>
<hr>
<h3 id="_2-35-searchwords-查找文字" tabindex="-1"><a class="header-anchor" href="#_2-35-searchwords-查找文字"><span>2.35 searchWords --查找文字</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"OLE_Frame"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> words <span class="token operator">=</span> <span class="token string">'hello'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> OleFrame<span class="token punctuation">.</span><span class="token function">searchWords</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>words<span class="token punctuation">)</span></span>
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
<td>标识id</td>
</tr>
<tr>
<td>words</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>查找的文字</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: OLE_Frame.searchWords</font></blockquote>
<hr>
<p>MfcOcx</p>
<h3 id="_2-36-init-mfc-ocx初始化操作" tabindex="-1"><a class="header-anchor" href="#_2-36-init-mfc-ocx初始化操作"><span>2.36 init --MFC_OCX初始化操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"MFC_OCX"</span><span class="token punctuation">;</span>  <span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcOcx<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>String</td>
<td>√</td>
<td>x</td>
<td>标识ID</td>
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
<td>返回handle结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.init(id)</font></blockquote>
<hr>
<h3 id="_2-37-finish-mfc-ocx销毁操作" tabindex="-1"><a class="header-anchor" href="#_2-37-finish-mfc-ocx销毁操作"><span>2.37 finish --MFC_OCX销毁操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcOcx<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.finish()</font></blockquote>
<hr>
<h3 id="_2-38-retmsg-有返回值-发送信息。" tabindex="-1"><a class="header-anchor" href="#_2-38-retmsg-有返回值-发送信息。"><span>2.38 retMsg --有返回值，发送信息。</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> param <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>  <span class="token comment">//对应的参数</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcOcx<span class="token punctuation">.</span><span class="token function">retMsg</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>param</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>请求参数</td>
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
<td>执行结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.retMsg(param)</font></blockquote>
<hr>
<h3 id="_2-39-noretmsg-无返回值-发送信息。" tabindex="-1"><a class="header-anchor" href="#_2-39-noretmsg-无返回值-发送信息。"><span>2.39 noRetMsg --无返回值，发送信息。</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> param <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>  <span class="token comment">//对应的参数</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MfcOcx<span class="token punctuation">.</span><span class="token function">noRetMsg</span><span class="token punctuation">(</span>param<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>param</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>请求参数</td>
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
<font color ='red' style="font-weight:bold">对应柜面原SDK: MFC_OCX.noRetMsg(param)</font></blockquote>
<hr>
<p>CefBrowser</p>
<h3 id="_2-40-createcefbrowserhandle-创建cef并返回句柄" tabindex="-1"><a class="header-anchor" href="#_2-40-createcefbrowserhandle-创建cef并返回句柄"><span>2.40 createCefBrowserHandle --创建cef并返回句柄</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 标识ID</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">createCefBrowserHandle</span><span class="token punctuation">(</span>tradeId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>String</td>
<td>x</td>
<td>x</td>
<td>标识ID</td>
</tr>
<tr>
<td>isLstOpen</td>
<td>String</td>
<td>x</td>
<td>x</td>
<td>是否监听url的打开和关闭</td>
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
<td>返回handle结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.createCefBrowserHandle(tradeId)</font></blockquote>
<hr>
<h3 id="_2-41-cefbrowserseturl-设置cef打开的url" tabindex="-1"><a class="header-anchor" href="#_2-41-cefbrowserseturl-设置cef打开的url"><span>2.41 cefBrowserSetUrl --设置cef打开的url</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>  <span class="token comment">// 句柄</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'https://www.baidu.com/'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">cefBrowserSetUrl</span><span class="token punctuation">(</span>handle<span class="token punctuation">,</span> url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要设置的窗口的句柄</td>
</tr>
<tr>
<td>url</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要设置的url</td>
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
<td>返回结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserSetUrl(handle, url)</font></blockquote>
<hr>
<h3 id="_2-42-cefbrowsergeturl-获取cef打开的url" tabindex="-1"><a class="header-anchor" href="#_2-42-cefbrowsergeturl-获取cef打开的url"><span>2.42 cefBrowserGetUrl --获取cef打开的url</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>  <span class="token comment">// 句柄</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">cefBrowserGetUrl</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要获取url的窗口的句柄</td>
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
<td>返回url结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserGetUrl(handle)</font></blockquote>
<hr>
<h3 id="_2-43-cefbrowserclose-关闭cef" tabindex="-1"><a class="header-anchor" href="#_2-43-cefbrowserclose-关闭cef"><span>2.43 cefBrowserClose --关闭cef</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>  <span class="token comment">// 句柄</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">cefBrowserClose</span><span class="token punctuation">(</span>handle<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要关闭的窗口的句柄</td>
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
<td>返回结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserClose(handle)</font></blockquote>
<hr>
<h3 id="_2-44-cefbrowsersyncexecutescript-cef执行脚本" tabindex="-1"><a class="header-anchor" href="#_2-44-cefbrowsersyncexecutescript-cef执行脚本"><span>2.44 cefBrowserSyncExecuteScript --cef执行脚本</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>  <span class="token comment">// 句柄</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token string">'window.open("https://www.baidu.com/")'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">cefBrowserSyncExecuteScript</span><span class="token punctuation">(</span>handle<span class="token punctuation">,</span> script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要执行脚本的窗口的句柄</td>
</tr>
<tr>
<td>script</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>执行的脚本内容</td>
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
<td>返回结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserSyncExecuteScript(handle, script)</font></blockquote>
<hr>
<h3 id="_2-45-cefbrowserasyncexecutescript-cef执行脚本" tabindex="-1"><a class="header-anchor" href="#_2-45-cefbrowserasyncexecutescript-cef执行脚本"><span>2.45 cefBrowserAsyncExecuteScript --cef执行脚本</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> handle <span class="token operator">=</span> <span class="token string">'123'</span><span class="token punctuation">;</span>  <span class="token comment">// 句柄</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token string">'window.open("https://www.baidu.com/")'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CefBrowser<span class="token punctuation">.</span><span class="token function">cefBrowserAsyncExecuteScript</span><span class="token punctuation">(</span>handle<span class="token punctuation">,</span> script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>handle</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>需要执行脚本的窗口的句柄</td>
</tr>
<tr>
<td>script</td>
<td>String</td>
<td>✔</td>
<td>x</td>
<td>执行的脚本内容</td>
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
<td>返回结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: CefBrowser.cefBrowserAsyncExecuteScript(handle, script)</font></blockquote>
<hr>
</div></template>


