<template><div><h1 id="ab-plugin-embed-xinwanjia-前端内嵌鑫万佳控件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-xinwanjia-前端内嵌鑫万佳控件"><span>ab-plugin-embed-xinwanjia@前端内嵌鑫万佳控件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> XinWanJia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-embed-xinwanjia'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-scannerinit-图像采集模块初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-scannerinit-图像采集模块初始化"><span>2.1 scannerInit --图像采集模块初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.res</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.handler</td>
<td>string</td>
<td>窗口句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-2-scannerfunbinaryimg-图像二值化处理-黑白图像" tabindex="-1"><a class="header-anchor" href="#_2-2-scannerfunbinaryimg-图像二值化处理-黑白图像"><span>2.2 scannerFunBinaryImg --图像二值化处理，黑白图像</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">SRCIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/12.jpg'</span><span class="token punctuation">,</span> <span class="token comment">// 未加密图片的原路径</span></span>
<span class="line">                <span class="token constant">DESIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/122222.jpg'</span><span class="token punctuation">,</span> <span class="token comment">//处理后的图像，与源图像一致时覆盖原来的图像</span></span>
<span class="line">                <span class="token constant">VALUE</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">,</span> <span class="token comment">//黑白阈值0-255，0使用默认</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunBinaryImg</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-3-scannerfunimgzomm-图片缩放" tabindex="-1"><a class="header-anchor" href="#_2-3-scannerfunimgzomm-图片缩放"><span>2.3 scannerFunImgZomm --图片缩放</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">SRCIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/12.jpg'</span><span class="token punctuation">,</span> <span class="token comment">//源图像</span></span>
<span class="line">                <span class="token constant">DESIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/12suofang.jpg'</span><span class="token punctuation">,</span> <span class="token comment">//处理后的图像。与源图像一致时覆盖原来的图像</span></span>
<span class="line">                <span class="token constant">SRCDPI</span><span class="token operator">:</span> <span class="token number">50</span><span class="token punctuation">,</span> <span class="token comment">//源图像dpi</span></span>
<span class="line">                <span class="token constant">DESDPI</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token comment">//缩放后图像dpi</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunImgZomm</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-4-scannerfunrotateimg-图像旋转" tabindex="-1"><a class="header-anchor" href="#_2-4-scannerfunrotateimg-图像旋转"><span>2.4 scannerFunRotateImg --图像旋转</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">SRCIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/12.jpg'</span><span class="token punctuation">,</span> <span class="token comment">//源图像</span></span>
<span class="line">                <span class="token constant">DESIMAGE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/12zhuan90.jpg'</span><span class="token punctuation">,</span> <span class="token comment">//处理后的图像。与源图像一致时覆盖原来的图像</span></span>
<span class="line">                <span class="token constant">ANGLE</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">//旋转角度，90、180、270</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunRotateImg</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-5-scannerfunscandlgcreatewnd-创建窗口" tabindex="-1"><a class="header-anchor" href="#_2-5-scannerfunscandlgcreatewnd-创建窗口"><span>2.5 scannerFunScanDlgCreateWnd --创建窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> inParam <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgCreateWnd</span><span class="token punctuation">(</span>inParam<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-6-scannerfunscandlgdestroywnd-销毁窗口" tabindex="-1"><a class="header-anchor" href="#_2-6-scannerfunscandlgdestroywnd-销毁窗口"><span>2.6 scannerFunScanDlgDestroyWnd -- 销毁窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgDestroyWnd</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-7-scannerfunscandlginitdev-选择采集设备" tabindex="-1"><a class="header-anchor" href="#_2-7-scannerfunscandlginitdev-选择采集设备"><span>2.7 scannerFunScanDlgInitDev --选择采集设备</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">DEVTYPE</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> inParam <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgInitDev</span><span class="token punctuation">(</span>inParam<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-8-scannerfunscandlgrotateimage-窗口上图像进行旋转" tabindex="-1"><a class="header-anchor" href="#_2-8-scannerfunscandlgrotateimage-窗口上图像进行旋转"><span>2.8 scannerFunScanDlgRotateImage --窗口上图像进行旋转</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">ANGLE</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">//90右， 180翻， 270左</span></span>
<span class="line">                <span class="token constant">ENCRYPT</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token constant">SRCFILE</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/1en.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgRotateImage</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-9-scannerfunscandlgstartpreview-鑫万佳设备打开预览" tabindex="-1"><a class="header-anchor" href="#_2-9-scannerfunscandlgstartpreview-鑫万佳设备打开预览"><span>2.9 scannerFunScanDlgStartPreview --鑫万佳设备打开预览</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgStartPreview</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-10-scannerfunscandlgstoppreview-鑫万佳设备关闭预览" tabindex="-1"><a class="header-anchor" href="#_2-10-scannerfunscandlgstoppreview-鑫万佳设备关闭预览"><span>2.10 scannerFunScanDlgStopPreview --鑫万佳设备关闭预览</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgStopPreview</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-11-scannerfunscandlgimgpick-采集图片" tabindex="-1"><a class="header-anchor" href="#_2-11-scannerfunscandlgimgpick-采集图片"><span>2.11 scannerFunScanDlgImgPick --采集图片</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> json <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token constant">IMGFULLPATH</span><span class="token operator">:</span> <span class="token string">'D:/abc_sit/sealImage/1en.jpg'</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token constant">ENCRYPT</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFunScanDlgImgPick</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>json<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-12-scannerfinish-图像采集模块销毁" tabindex="-1"><a class="header-anchor" href="#_2-12-scannerfinish-图像采集模块销毁"><span>2.12 scannerFinish --图像采集模块销毁</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">scannerFinish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>inParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>调用控件的参数</td>
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
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-13-xwjyanyininit-验印模块初始化" tabindex="-1"><a class="header-anchor" href="#_2-13-xwjyanyininit-验印模块初始化"><span>2.13 xwjYanyinInit --验印模块初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">xwjYanyinInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.res</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.handler</td>
<td>string</td>
<td>窗口句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-14-xwjautoverify-自动验印" tabindex="-1"><a class="header-anchor" href="#_2-14-xwjautoverify-自动验印"><span>2.14 xwjAutoVerify --自动验印</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> szAccNo <span class="token operator">=</span> <span class="token string">'100000220390010007'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szBrNo <span class="token operator">=</span> <span class="token string">'350100011'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szOpenBrNo <span class="token operator">=</span> <span class="token string">'350100011'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szOper <span class="token operator">=</span> <span class="token string">'031100'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouNo <span class="token operator">=</span> <span class="token string">'9999888877777141'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouType <span class="token operator">=</span> <span class="token string">'1002'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouDate <span class="token operator">=</span> <span class="token string">'20210729'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szImgPath <span class="token operator">=</span> <span class="token string">'D:/abc_sit/sealImage/1en.jpg'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> dVouAmt <span class="token operator">=</span> <span class="token string">'13123.00'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> nVerifyType <span class="token operator">=</span> <span class="token string">'3'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">xwjAutoVerify</span><span class="token punctuation">(</span></span>
<span class="line">                szAccNo<span class="token punctuation">,</span></span>
<span class="line">                szBrNo<span class="token punctuation">,</span></span>
<span class="line">                szOpenBrNo<span class="token punctuation">,</span></span>
<span class="line">                szOper<span class="token punctuation">,</span></span>
<span class="line">                szVouNo<span class="token punctuation">,</span></span>
<span class="line">                szVouType<span class="token punctuation">,</span></span>
<span class="line">                szVouDate<span class="token punctuation">,</span></span>
<span class="line">                szImgPath<span class="token punctuation">,</span></span>
<span class="line">                dVouAmt<span class="token punctuation">,</span></span>
<span class="line">                nVerifyType</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>szAccNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>账号</td>
</tr>
<tr>
<td>szBrNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易机构号</td>
</tr>
<tr>
<td>szOpenBrNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>开户机构</td>
</tr>
<tr>
<td>szOper</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>柜员号</td>
</tr>
<tr>
<td>szVouNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证号码</td>
</tr>
<tr>
<td>szVouType</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证类型</td>
</tr>
<tr>
<td>szVouDate</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证日期</td>
</tr>
<tr>
<td>szImgPath</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>全路径图像</td>
</tr>
<tr>
<td>dVouAmt</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>金额</td>
</tr>
<tr>
<td>nVerifyType</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>验印类型（0公章/1全图像 验印）</td>
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
<td>result.result</td>
<td>string</td>
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-15-xwjmanualverify-手动验印" tabindex="-1"><a class="header-anchor" href="#_2-15-xwjmanualverify-手动验印"><span>2.15 xwjManualVerify --手动验印</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> szAccNo <span class="token operator">=</span> <span class="token string">'100000220390010007'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szBrNo <span class="token operator">=</span> <span class="token string">'350100011'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szOpenBrNo <span class="token operator">=</span> <span class="token string">'350100011'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szOper <span class="token operator">=</span> <span class="token string">'031100'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouNo <span class="token operator">=</span> <span class="token string">'9999888877777141'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouType <span class="token operator">=</span> <span class="token string">'1002'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szVouDate <span class="token operator">=</span> <span class="token string">'20210729'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> szImgPath <span class="token operator">=</span> <span class="token string">'D:/abc_sit/sealImage/1en.jpg'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> dVouAmt <span class="token operator">=</span> <span class="token string">'13123.00'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> nVerifyType <span class="token operator">=</span> <span class="token string">'3'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">xwjManualVerify</span><span class="token punctuation">(</span></span>
<span class="line">                szAccNo<span class="token punctuation">,</span></span>
<span class="line">                szBrNo<span class="token punctuation">,</span></span>
<span class="line">                szOpenBrNo<span class="token punctuation">,</span></span>
<span class="line">                szOper<span class="token punctuation">,</span></span>
<span class="line">                szVouNo<span class="token punctuation">,</span></span>
<span class="line">                szVouType<span class="token punctuation">,</span></span>
<span class="line">                szVouDate<span class="token punctuation">,</span></span>
<span class="line">                szImgPath<span class="token punctuation">,</span></span>
<span class="line">                dVouAmt<span class="token punctuation">,</span></span>
<span class="line">                nVerifyType</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>szAccNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>账号</td>
</tr>
<tr>
<td>szBrNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易机构号</td>
</tr>
<tr>
<td>szOpenBrNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>开户机构</td>
</tr>
<tr>
<td>szOper</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>柜员号</td>
</tr>
<tr>
<td>szVouNo</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证号码</td>
</tr>
<tr>
<td>szVouType</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证类型</td>
</tr>
<tr>
<td>szVouDate</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>凭证日期</td>
</tr>
<tr>
<td>szImgPath</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>全路径图像</td>
</tr>
<tr>
<td>dVouAmt</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>金额</td>
</tr>
<tr>
<td>nVerifyType</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>验印类型（0公章/1全图像 验印）</td>
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
<td>result.result</td>
<td>string</td>
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SunYard_Exe.init(id)</font></blockquote>
<hr>
<h3 id="_2-16-checknetcallfile-检查abc根目录-driver-xwj集成环境目录下netcall-ini配置文件是否存在并根据参数修改配置的地址和端口是否正确" tabindex="-1"><a class="header-anchor" href="#_2-16-checknetcallfile-检查abc根目录-driver-xwj集成环境目录下netcall-ini配置文件是否存在并根据参数修改配置的地址和端口是否正确"><span>2.16 checkNetCallFile --检查ABC根目录/driver/xwj集成环境目录下netcall.ini配置文件是否存在并根据参数修改配置的地址和端口是否正确</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> ip <span class="token operator">=</span> <span class="token string">'10.136.7.16'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> port <span class="token operator">=</span> <span class="token string">'7710'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">checkNetCallFile</span><span class="token punctuation">(</span>ip<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>ip</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>IP地址</td>
</tr>
<tr>
<td>port</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>端口号</td>
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
<td>result.result</td>
<td>string</td>
<td>调用控件接口返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
<h3 id="_2-17-finish-验印模块销毁" tabindex="-1"><a class="header-anchor" href="#_2-17-finish-验印模块销毁"><span>2.17 finish --验印模块销毁</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> XinWanJia<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<font color ='red' style="font-weight:bold">无</font></blockquote>
<hr>
</div></template>


