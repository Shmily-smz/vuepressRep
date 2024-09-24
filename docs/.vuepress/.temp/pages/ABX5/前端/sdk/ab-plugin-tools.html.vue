<template><div><h1 id="ab-plugin-tools-工具类" tabindex="-1"><a class="header-anchor" href="#ab-plugin-tools-工具类"><span>ab-plugin-tools@工具类</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Tools <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-tools"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-cutfilereadline-截取正文内容读取文件" tabindex="-1"><a class="header-anchor" href="#_2-1-cutfilereadline-截取正文内容读取文件"><span>2.1 cutFileReadLine --截取正文内容读取文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath<span class="token operator">=</span><span class="token string">"d://a.txt"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">cutFileReadLine</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
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
<td>res.result</td>
<td>string</td>
<td>读取的内容信息</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-2-opencal-柜面自有-扩展工具-打开计算器" tabindex="-1"><a class="header-anchor" href="#_2-2-opencal-柜面自有-扩展工具-打开计算器"><span>2.2 openCal --柜面自有：扩展工具（打开计算器）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">openCal</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>&quot;true&quot;:成功</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-3-startscreencap-开始录屏" tabindex="-1"><a class="header-anchor" href="#_2-3-startscreencap-开始录屏"><span>2.3 startScreenCap --开始录屏</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> videoName<span class="token operator">=</span><span class="token string">"luping"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> filePath<span class="token operator">=</span><span class="token string">"d://"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">startScreenCap</span><span class="token punctuation">(</span>videoName<span class="token punctuation">,</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>videoName</td>
<td>string</td>
<td>√</td>
<td>生成视频的名称</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>生成视频的保存路径</td>
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
<td>返回信息:&quot;交易开始被记录!!!,录屏已经开始.&quot;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-4-stopscreencap-停止录屏" tabindex="-1"><a class="header-anchor" href="#_2-4-stopscreencap-停止录屏"><span>2.4 stopScreenCap --停止录屏</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">stopScreenCap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>返回信息:filepath(成功);&quot;错误操作！！！&quot;(失败)</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-5-catchscreen-截屏" tabindex="-1"><a class="header-anchor" href="#_2-5-catchscreen-截屏"><span>2.5 catchScreen --截屏</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath<span class="token operator">=</span><span class="token string">"d://a.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">catchScreen</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>生成图片路径</td>
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
<td>&quot;true&quot;:截图成功</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-6-csvtomap-csvtomap" tabindex="-1"><a class="header-anchor" href="#_2-6-csvtomap-csvtomap"><span>2.6 csvToMap --CsvToMap</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> csv<span class="token operator">=</span><span class="token string">"d://a.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">csvToMap</span><span class="token punctuation">(</span>csv<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>csv</td>
<td>string</td>
<td>√</td>
<td>需要转化得csv</td>
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
<td>转化的结果</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-7-maptocsv-maptocsv" tabindex="-1"><a class="header-anchor" href="#_2-7-maptocsv-maptocsv"><span>2.7 mapToCsv --mapToCsv</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> map<span class="token operator">=</span><span class="token string">"d://a.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">mapToCsv</span><span class="token punctuation">(</span>map<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>map</td>
<td>string</td>
<td>√</td>
<td>需要转化得map</td>
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
<td>转化的结果</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-8-addbordertoimg-addbordertoimg" tabindex="-1"><a class="header-anchor" href="#_2-8-addbordertoimg-addbordertoimg"><span>2.8 addBorderToImg --addBorderToImg</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> borderPara<span class="token operator">=</span><span class="token string">"d://a.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> imgPath<span class="token operator">=</span><span class="token string">"d://a.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">addBorderToImg</span><span class="token punctuation">(</span>para<span class="token punctuation">,</span>imgpath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>borderPara</td>
<td>string</td>
<td>√</td>
<td>圈化参数</td>
</tr>
<tr>
<td>imgPath</td>
<td>string</td>
<td>√</td>
<td>图片路径</td>
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
<td>新路径</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-9-getehcache-获取缓存" tabindex="-1"><a class="header-anchor" href="#_2-9-getehcache-获取缓存"><span>2.9 getEhcache --获取缓存</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> key<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> childkey<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> locale<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">getEhcache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> childkey<span class="token punctuation">,</span> locale<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>key</td>
<td>string</td>
<td>√</td>
<td>缓存key</td>
</tr>
<tr>
<td>childkey</td>
<td>string</td>
<td>√</td>
<td>缓存</td>
</tr>
<tr>
<td>locale</td>
<td>string</td>
<td>√</td>
<td>locale</td>
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
<hr>
<h3 id="_2-10-setehcache-设置缓存" tabindex="-1"><a class="header-anchor" href="#_2-10-setehcache-设置缓存"><span>2.10 setEhcache --设置缓存</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> key<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> value<span class="token operator">=</span><span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">setEhcache</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>key</td>
<td>string</td>
<td>√</td>
<td>缓存key</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>√</td>
<td>缓缓存value存</td>
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
<td>&quot;true&quot;:成功</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-11-creategif-创建gif" tabindex="-1"><a class="header-anchor" href="#_2-11-creategif-创建gif"><span>2.11 createGif --创建gif</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> gifId <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Date</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">"_test"</span><span class="token punctuation">;</span> <span class="token comment">//gifId</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>gifId <span class="token operator">=</span> gifId<span class="token punctuation">;</span> <span class="token comment">//id号</span></span>
<span class="line"><span class="token keyword">let</span> delay <span class="token operator">=</span> <span class="token number">2000</span><span class="token punctuation">;</span> <span class="token comment">// 每一帧延迟</span></span>
<span class="line"><span class="token keyword">let</span> quality <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">// 总质量</span></span>
<span class="line"><span class="token keyword">let</span> repeat<span class="token operator">=</span><span class="token number">1</span><span class="token punctuation">;</span><span class="token comment">//播放次数，0为循环播放，默认1</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// let res = await Tools.createGif(gifId, delay, quality,repeat);</span></span>
<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">createGif</span><span class="token punctuation">(</span>gifId<span class="token punctuation">,</span> delay<span class="token punctuation">,</span> quality<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>gifId</td>
<td>string</td>
<td>√</td>
<td>gifId</td>
</tr>
<tr>
<td>delay</td>
<td>int</td>
<td>√</td>
<td>每一帧显示时间ms 默认2000</td>
</tr>
<tr>
<td>quality</td>
<td>int</td>
<td>√</td>
<td>生成质量1-100,越小越好 默认100</td>
</tr>
<tr>
<td>repeat</td>
<td>int</td>
<td>X</td>
<td>播放次数，0为循环播放，默认1</td>
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
<td>gifId</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-12-addframegif-addframegif" tabindex="-1"><a class="header-anchor" href="#_2-12-addframegif-addframegif"><span>2.12 addFrameGif --addFrameGif</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> gifId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gifId<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 这一帧的base64图片，如果没有就截屏且其他参数无效</span></span>
<span class="line"><span class="token keyword">let</span> scale <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span> <span class="token comment">// 缩放，0-1 默认0.8</span></span>
<span class="line"><span class="token keyword">let</span> quality <span class="token operator">=</span> <span class="token number">0.8</span><span class="token punctuation">;</span> <span class="token comment">// 质量，0-1 默认1.0</span></span>
<span class="line"><span class="token keyword">let</span> x <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//位置信息，x,y,height,width，不传默认截全屏</span></span>
<span class="line"><span class="token keyword">let</span> y <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//</span></span>
<span class="line"><span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//</span></span>
<span class="line"><span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token keyword">undefined</span><span class="token punctuation">;</span> <span class="token comment">//</span></span>
<span class="line"><span class="token keyword">let</span> frameId <span class="token operator">=</span> <span class="token number">123456</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">addFrameGif</span><span class="token punctuation">(</span></span>
<span class="line">    gifId<span class="token punctuation">,</span></span>
<span class="line">    data<span class="token punctuation">,</span></span>
<span class="line">    scale<span class="token punctuation">,</span></span>
<span class="line">    quality<span class="token punctuation">,</span></span>
<span class="line">    x<span class="token punctuation">,</span></span>
<span class="line">    y<span class="token punctuation">,</span></span>
<span class="line">    height<span class="token punctuation">,</span></span>
<span class="line">    width<span class="token punctuation">,</span></span>
<span class="line">    frameId</span>
<span class="line">  <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>gifId</td>
<td>string</td>
<td>√</td>
<td>gifId</td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>√</td>
<td>data</td>
</tr>
<tr>
<td>scale</td>
<td>string</td>
<td>√</td>
<td>缩放大小，0-1 默认0.8</td>
</tr>
<tr>
<td>quality</td>
<td>double</td>
<td>√</td>
<td>生成质量 0-1 默认 1</td>
</tr>
<tr>
<td>position</td>
<td>int</td>
<td>√</td>
<td>位置信息 {x,y,width,height} 均为整数，x,y相对于abc左上角位置</td>
</tr>
<tr>
<td>frameId</td>
<td>number</td>
<td>√</td>
<td>frameId信息(2.0.18版本新增参数)</td>
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
<td>&quot;true&quot;:成功</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-13-getgif-getgif" tabindex="-1"><a class="header-anchor" href="#_2-13-getgif-getgif"><span>2.13 getGif --getGif</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> gifId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gifId<span class="token punctuation">;</span> <span class="token comment">//gifId</span></span>
<span class="line"><span class="token keyword">let</span> gifFilePath<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">if</span><span class="token punctuation">(</span>OsManager<span class="token punctuation">.</span>android<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    gifFilePath <span class="token operator">=</span> <span class="token string">"test4.gif"</span><span class="token punctuation">;</span> <span class="token comment">// android传带后缀的文件名称</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">    gifFilePath <span class="token operator">=</span> <span class="token string">"test4.gif"</span><span class="token punctuation">;</span> <span class="token comment">// 文件保存路径,从abc根路径开始</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">getGif</span><span class="token punctuation">(</span>gifId<span class="token punctuation">,</span> gifFilePath<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// this.img = "data:image/gif;base64," + res.result;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>gifId</td>
<td>string</td>
<td>√</td>
<td>gifId</td>
</tr>
<tr>
<td>gifFilePath</td>
<td>string</td>
<td>√</td>
<td>路径</td>
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
<td>base64字符串</td>
</tr>
<tr>
<td>res.path</td>
<td>string</td>
<td>gif存储地址</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-14-deletegif-deletegif" tabindex="-1"><a class="header-anchor" href="#_2-14-deletegif-deletegif"><span>2.14 deleteGif --deleteGif</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> gifId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>gifId<span class="token punctuation">;</span> <span class="token comment">//gifId</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">deleteGif</span><span class="token punctuation">(</span>gifId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>gifId</td>
<td>string</td>
<td>√</td>
<td>gifId</td>
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
<td>&quot;true&quot;:成功删除</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-15-taskclientcache-定时任务加载缓存" tabindex="-1"><a class="header-anchor" href="#_2-15-taskclientcache-定时任务加载缓存"><span>2.15 taskClientCache --定时任务加载缓存</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">taskClientCache</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>res.result</td>
<td>string</td>
<td>&quot;true&quot;:成功</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-16-filetozip1-压缩文件夹为zip文件" tabindex="-1"><a class="header-anchor" href="#_2-16-filetozip1-压缩文件夹为zip文件"><span>2.16 fileToZip1 --压缩文件夹为zip文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> srcDir <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> outDir <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">fileToZip1</span><span class="token punctuation">(</span>srcDir<span class="token punctuation">,</span>outDir<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-17-filetozip2-压缩文件列表为zip文件" tabindex="-1"><a class="header-anchor" href="#_2-17-filetozip2-压缩文件列表为zip文件"><span>2.17 fileToZip2 --压缩文件列表为zip文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePaths <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> outDir <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">fileToZip2</span><span class="token punctuation">(</span>filePaths<span class="token punctuation">,</span>outDir<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-18-ziptofile-解压zip文件到指定目录" tabindex="-1"><a class="header-anchor" href="#_2-18-ziptofile-解压zip文件到指定目录"><span>2.18 zipToFile --解压zip文件到指定目录</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> zipFile <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> outDir <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">zipToFile</span><span class="token punctuation">(</span>zipFil<span class="token punctuation">,</span>outDir<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-19-startupexe-启动本地的exe程序" tabindex="-1"><a class="header-anchor" href="#_2-19-startupexe-启动本地的exe程序"><span>2.19 startUpExe --启动本地的exe程序</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> exePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">startUpExe</span><span class="token punctuation">(</span>exePath<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
</table>
<hr>
<h3 id="_2-20-startupexe-导出abc当前页面为pdf文件" tabindex="-1"><a class="header-anchor" href="#_2-20-startupexe-导出abc当前页面为pdf文件"><span>2.20 startUpExe --导出ABC当前页面为PDF文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> pdfPath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> landscape <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">capturePDF</span><span class="token punctuation">(</span>exePath<span class="token punctuation">,</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
</table>
<hr>
<h3 id="_2-21-imagecompress-图片压缩" tabindex="-1"><a class="header-anchor" href="#_2-21-imagecompress-图片压缩"><span>2.21 imageCompress --图片压缩</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> sourcefilePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> targetfilePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> compressScale <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">imageCompress</span><span class="token punctuation">(</span></span>
<span class="line">  sourcefilePath<span class="token punctuation">,</span></span>
<span class="line">  targetfilePath<span class="token punctuation">,</span></span>
<span class="line">  compressScale</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>sourcefilePath</td>
<td>string</td>
<td>源文件路径</td>
</tr>
<tr>
<td>targetfilePath</td>
<td>string</td>
<td>目标文件路径</td>
</tr>
<tr>
<td>compressScale</td>
<td>string</td>
<td>压缩比例</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-22-stringtopicture-根据字符串生成指定的防伪图片" tabindex="-1"><a class="header-anchor" href="#_2-22-stringtopicture-根据字符串生成指定的防伪图片"><span>2.22 stringToPicture --根据字符串生成指定的防伪图片</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token string">"130"</span><span class="token punctuation">;</span> <span class="token comment">// 图片宽</span></span>
<span class="line"><span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token string">"85"</span><span class="token punctuation">;</span> <span class="token comment">// 图片高</span></span>
<span class="line"><span class="token keyword">let</span> fontStr <span class="token operator">=</span> <span class="token string">"黑体"</span><span class="token punctuation">;</span> <span class="token comment">// 字体</span></span>
<span class="line"><span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token string">"35"</span><span class="token punctuation">;</span> <span class="token comment">// 字体大小</span></span>
<span class="line"><span class="token keyword">let</span> isChangeLine <span class="token operator">=</span> <span class="token string">"true"</span><span class="token punctuation">;</span><span class="token comment">// 是否换行</span></span>
<span class="line"><span class="token keyword">let</span> num <span class="token operator">=</span> <span class="token string">"5"</span><span class="token punctuation">;</span> <span class="token comment">// 每行几个字符</span></span>
<span class="line"><span class="token keyword">let</span> rate <span class="token operator">=</span> <span class="token string">"1.5"</span><span class="token punctuation">;</span> <span class="token comment">// 字符间距（倍）</span></span>
<span class="line"><span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">"0123456789"</span><span class="token punctuation">;</span> <span class="token comment">// 字符内容</span></span>
<span class="line"><span class="token keyword">let</span> outFile <span class="token operator">=</span> <span class="token string">"D:\\test\\6.png"</span><span class="token punctuation">;</span> <span class="token comment">// 输出路径</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">stringToPicture</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span>height<span class="token punctuation">,</span>fontStr<span class="token punctuation">,</span>size<span class="token punctuation">,</span>isChangeLine<span class="token punctuation">,</span>num<span class="token punctuation">,</span>rate<span class="token punctuation">,</span>content<span class="token punctuation">,</span>outFile<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>result</td>
<td>string</td>
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-23-playwav-播放提示音" tabindex="-1"><a class="header-anchor" href="#_2-23-playwav-播放提示音"><span>2.23 playWav --播放提示音</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">playWav</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>result</td>
<td>string</td>
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-24-generateqrcodeimage-根据字符串生成二维码" tabindex="-1"><a class="header-anchor" href="#_2-24-generateqrcodeimage-根据字符串生成二维码"><span>2.24 generateQRCodeImage --根据字符串生成二维码</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> text <span class="token operator">=</span> <span class="token string">"www.baidu.com"</span><span class="token punctuation">;</span> <span class="token comment">// 将转成二维码图片的内容,字符串</span></span>
<span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">"C://abc/abc.jpg"</span><span class="token punctuation">;</span> <span class="token comment">// 二维码图片存放的绝对路径</span></span>
<span class="line"><span class="token keyword">let</span> format <span class="token operator">=</span> <span class="token string">"jpg"</span><span class="token punctuation">;</span> <span class="token comment">// 图片格式 jpg,png,gif,bmp.jpeg.pnm，和imgName的后缀要一致</span></span>
<span class="line"><span class="token keyword">let</span> logoPath <span class="token operator">=</span> <span class="token string">"C://abc/logo"</span><span class="token punctuation">;</span> <span class="token comment">//  需要加入的logo存放的绝对路径 </span></span>
<span class="line"><span class="token keyword">let</span> imgName <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">;</span><span class="token comment">// 生成的二维码文件名</span></span>
<span class="line"><span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">//  生成图片的高度,整型,单位:像素</span></span>
<span class="line"><span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token number">50</span><span class="token punctuation">;</span> <span class="token comment">//  生成图片的宽度,整型,单位:像素</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">generateQRCodeImage</span><span class="token punctuation">(</span>text<span class="token punctuation">,</span> path<span class="token punctuation">,</span> format<span class="token punctuation">,</span> logoPath<span class="token punctuation">,</span> imgName<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>text</td>
<td>string</td>
<td>√</td>
<td>将转成二维码图片的内容,字符串</td>
</tr>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>二维码图片存放的绝对路径</td>
</tr>
<tr>
<td>format</td>
<td>string</td>
<td>√</td>
<td>图片格式 jpg,png,gif,bmp.jpeg.pnm，和imgName的后缀要一致</td>
</tr>
<tr>
<td>logoPath</td>
<td>string</td>
<td>√</td>
<td>需要加入的logo存放的绝对路径</td>
</tr>
<tr>
<td>imgName</td>
<td>string</td>
<td>√</td>
<td>生成的二维码文件名</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>√</td>
<td>生成图片的高度,整型,单位:像素</td>
</tr>
<tr>
<td>width</td>
<td>number</td>
<td>√</td>
<td>生成图片的宽度,整型,单位:像素</td>
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
<td>result</td>
<td>string</td>
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-25-stringbase64encode-字符串base64编码" tabindex="-1"><a class="header-anchor" href="#_2-25-stringbase64encode-字符串base64编码"><span>2.25 stringBase64Encode --字符串Base64编码</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token string">"测试"</span><span class="token punctuation">;</span> <span class="token comment">// 源字符串</span></span>
<span class="line"><span class="token keyword">let</span> codeset <span class="token operator">=</span> <span class="token string">"GBK"</span><span class="token punctuation">;</span> <span class="token comment">// 编码集（默认：UTF-8）</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">stringBase64Encode</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> codeset<span class="token punctuation">)</span></span>
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
<td>source</td>
<td>string</td>
<td>√</td>
<td>源字符串</td>
</tr>
<tr>
<td>codeset</td>
<td>string</td>
<td>×</td>
<td>自定义编码集（默认：UTF-8）</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>String</code></li>
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
<td>res</td>
<td>string</td>
<td>编码后字符串</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-26-stringbase64decode-字符串base64解码" tabindex="-1"><a class="header-anchor" href="#_2-26-stringbase64decode-字符串base64解码"><span>2.26 stringBase64Decode --字符串Base64解码</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> source <span class="token operator">=</span> <span class="token string">"suLK1A=="</span><span class="token punctuation">;</span> <span class="token comment">// 源字符串</span></span>
<span class="line"><span class="token keyword">let</span> codeset <span class="token operator">=</span> <span class="token string">"GBK"</span><span class="token punctuation">;</span> <span class="token comment">// 编码集（默认：UTF-8）</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Tools<span class="token punctuation">.</span><span class="token function">stringBase64Decode</span><span class="token punctuation">(</span>source<span class="token punctuation">,</span> codeset<span class="token punctuation">)</span></span>
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
<td>source</td>
<td>string</td>
<td>√</td>
<td>源字符串</td>
</tr>
<tr>
<td>codeset</td>
<td>string</td>
<td>×</td>
<td>自定义编码集（默认：UTF-8）</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>String</code></li>
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
<td>res</td>
<td>string</td>
<td>解码后字符串</td>
</tr>
</tbody>
</table>
</div></template>


