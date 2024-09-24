<template><div><h1 id="ab-manager-watermark-增加水印" tabindex="-1"><a class="header-anchor" href="#ab-manager-watermark-增加水印"><span>ab-manager-watermark@增加水印</span></a></h1>
<p>用于给页面增加水印信息</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> watermarkManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-watermark"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">//展示水印</span></span>
<span class="line">  watermarkManager<span class="token punctuation">.</span><span class="token function">showWatermark</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">transparency</span><span class="token operator">:</span><span class="token number">0.5</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">fontSize</span><span class="token operator">:</span><span class="token number">14</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">text</span><span class="token operator">:</span><span class="token string">'测试信息'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">el</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el</span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">//清除水印</span></span>
<span class="line">  watermarkManager<span class="token punctuation">.</span><span class="token function">clearWatermark</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$el<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-参数" tabindex="-1"><a class="header-anchor" href="#_3-参数"><span>3. 参数</span></a></h2>
<h3 id="_3-1-showwatermark方法参数" tabindex="-1"><a class="header-anchor" href="#_3-1-showwatermark方法参数"><span>3.1 showWatermark方法参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>transparency</td>
<td>number</td>
<td>水印透明度</td>
<td>0.5</td>
</tr>
<tr>
<td>fontSize</td>
<td>number</td>
<td>水印字体大小</td>
<td>14</td>
</tr>
<tr>
<td>text</td>
<td>string</td>
<td>水印内容(可以通过&lt;br&gt;对内容进行换行)</td>
<td>水印测试</td>
</tr>
<tr>
<td>el</td>
<td>HTMLElement</td>
<td>展示水印的区域</td>
<td>document.body</td>
</tr>
<tr>
<td>width</td>
<td>number</td>
<td>水印展示区域宽</td>
<td>-</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>水印展示区域高</td>
<td>-</td>
</tr>
</tbody>
</table>
<h3 id="_3-2-clearwatermark方法参数" tabindex="-1"><a class="header-anchor" href="#_3-2-clearwatermark方法参数"><span>3.2 clearWatermark方法参数</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>el</td>
<td>HTMLElement</td>
<td>清除水印的区域</td>
<td>document.body</td>
</tr>
</tbody>
</table>
</div></template>


