<template><div><h1 id="abx-manager-watermark" tabindex="-1"><a class="header-anchor" href="#abx-manager-watermark"><span>abx-manager-watermark</span></a></h1>
<blockquote>
<p>abx 内给画面添加水印信息</p>
</blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> watermark <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"abx-manager-watermark"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-showwatermark" tabindex="-1"><a class="header-anchor" href="#_2-1-showwatermark"><span>2.1 showWatermark</span></a></h3>
<p>传入参数,控制水印生成的范围与水印的内容.</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>isShow(Boolean)</em>: 是否将水印进行显示,默认为 true.</li>
<li><em>fillStyle(String)</em>: 水印所显示的背景颜色,默认为 #ccc.</li>
<li><em>container(String)</em>: 挂载的元素 ID .</li>
<li><em>content(String)</em>: 水印内所显示的字体内容,默认Microsoft Yahei.</li>
<li><em>rotate(Number)</em>: 水印字体的旋转角度,默认45度.</li>
<li><em>width(String)</em>: 水印区域的宽度,默认150px.</li>
<li><em>height(String)</em>: 水印区域的高度,默认100px.</li>
<li><em>font(String)</em>: 水印内显示字体,默认.</li>
<li><em>opacity(Number)</em>: 水印显示的透明度,默认0.5.</li>
<li><em>zIndex(Number)</em>: 生成的水印区域所对应的 zIndex 值,默认9999.</li>
<li><em>textAlign(String)</em>: 水印内字体的对齐方式,默认为center.</li>
<li><em>fontSize(Number)</em>: 水印字体的大小,默认20px.</li>
</ol>
<p><strong>返回:</strong></p>
<p>无返回值</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">//展示水印</span></span>
<span class="line">  watermark<span class="token punctuation">.</span><span class="token function">showWatermark</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isShow</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">fillStyle</span><span class="token operator">:</span> <span class="token string">'#ccc'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">container</span><span class="token operator">:</span> id<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">"我是水印"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">rotate</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">'200px'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">'150px'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-clearwatermark" tabindex="-1"><a class="header-anchor" href="#_2-2-clearwatermark"><span>2.2 clearWatermark</span></a></h3>
<p>清楚所创建的水印信息</p>
<p><strong>参数:</strong></p>
<p>无入参</p>
<p><strong>返回:</strong></p>
<p>无返回值</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">//清除水印</span></span>
<span class="line">  watermark<span class="token punctuation">.</span><span class="token function">clearWatermark</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


