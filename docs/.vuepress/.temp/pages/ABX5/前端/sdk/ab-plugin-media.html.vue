<template><div><h1 id="ab-plugin-media-多媒体组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-media-多媒体组件"><span>ab-plugin-media 多媒体组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Media <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-media'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-recordvideo-录制视频" tabindex="-1"><a class="header-anchor" href="#_2-1-recordvideo-录制视频"><span>2.1 recordVideo -- 录制视频</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">640</span><span class="token punctuation">,</span> <span class="token comment">// 设置视频宽</span></span>
<span class="line">     <span class="token literal-property property">height</span><span class="token operator">:</span><span class="token number">480</span><span class="token punctuation">,</span> <span class="token comment">// 设置视频高</span></span>
<span class="line">     <span class="token literal-property property">frameRate</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span> <span class="token comment">// 视频帧率</span></span>
<span class="line">     <span class="token literal-property property">encodingBitRate</span><span class="token operator">:</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">1024</span> <span class="token operator">*</span> <span class="token number">1024</span><span class="token punctuation">,</span> <span class="token comment">// 视频码率</span></span>
<span class="line">     <span class="token literal-property property">maxDuration</span><span class="token operator">:</span> <span class="token number">6000</span><span class="token punctuation">,</span> <span class="token comment">// 视频录制最大时长,单位秒</span></span>
<span class="line">   <span class="token punctuation">}</span></span>
<span class="line">    <span class="token comment">// let res = await Media.recordVideo(); // 可不传参 有默认值</span></span>
<span class="line">    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">recordVideo</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>width</td>
<td>number</td>
<td>×</td>
<td>640</td>
<td>最大宽度</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>×</td>
<td>480</td>
<td>最大高度</td>
</tr>
<tr>
<td>frameRate</td>
<td>number</td>
<td>×</td>
<td>30</td>
<td>视频帧率</td>
</tr>
<tr>
<td>encodingBitRate</td>
<td>number</td>
<td>×</td>
<td>3 * 1024 * 1024</td>
<td>视频码率</td>
</tr>
<tr>
<td>maxDuration</td>
<td>number</td>
<td>×</td>
<td>6000</td>
<td>视频录制最大时长,单位秒</td>
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
<td>res</td>
<td>array</td>
<td>录像视频结果路径数组</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">[</span></span>
<span class="line">  agree<span class="token operator">:</span><span class="token comment">///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.component.camera/files/video/20220506/1651832979040.mp4,</span></span>
<span class="line">  agree<span class="token operator">:</span><span class="token comment">///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.component.camera/files/video/20220506/1651832984252.mp4</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-captureimage-拍照" tabindex="-1"><a class="header-anchor" href="#_2-2-captureimage-拍照"><span>2.2 captureImage -- 拍照</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> maxWidth <span class="token operator">=</span> <span class="token number">700</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> maxHeight <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> isFront <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> encrypt <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">"photo"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">captureImage</span><span class="token punctuation">(</span>maxWidth<span class="token punctuation">,</span>maxHeight<span class="token punctuation">,</span>isFront<span class="token punctuation">,</span>encrypt<span class="token punctuation">,</span>fileName<span class="token punctuation">)</span></span>
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
<td>maxWidth</td>
<td>number</td>
<td>×</td>
<td>0</td>
<td>最大宽度</td>
</tr>
<tr>
<td>maxHeight</td>
<td>number</td>
<td>×</td>
<td>0</td>
<td>最大高度</td>
</tr>
<tr>
<td>isFront</td>
<td>boolean</td>
<td>×</td>
<td>false</td>
<td>是否使用前置摄像头</td>
</tr>
<tr>
<td>encrypt</td>
<td>boolean</td>
<td>×</td>
<td>false</td>
<td>是否加密</td>
</tr>
<tr>
<td>fileName</td>
<td>String</td>
<td>×</td>
<td>时间戳</td>
<td>照片名称</td>
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
<td>拍照结果路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.captureImage()</font></blockquote>
<hr>
<h3 id="_2-3-barcodescan-二维码扫描识别" tabindex="-1"><a class="header-anchor" href="#_2-3-barcodescan-二维码扫描识别"><span>2.3 barcodeScan -- 二维码扫描识别</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">barcodeScan</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>返回值:<code v-pre>Object</code></li>
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
<td>二维码内容</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.barcode.scan()</font></blockquote>
<hr>
<h3 id="_2-4-barcodeencode-生成二维码" tabindex="-1"><a class="header-anchor" href="#_2-4-barcodeencode-生成二维码"><span>2.4 barcodeEncode -- 生成二维码</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">"hello wolrd , AB"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token number">450</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> title <span class="token operator">=</span> <span class="token string">"条码标题"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> description <span class="token operator">=</span> <span class="token string">"下部描述"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> logoName <span class="token operator">=</span> <span class="token string">"/storage/emulated/0/xxxx"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">barcodeEncode</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span>size<span class="token punctuation">,</span>title<span class="token punctuation">,</span>description<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>data</td>
<td>string</td>
<td>√</td>
<td>编码内容</td>
</tr>
<tr>
<td>size</td>
<td>number</td>
<td>√</td>
<td>二维码尺寸</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>×</td>
<td>条码标题，可选参数</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>×</td>
<td>条码下部描述，可选参数</td>
</tr>
<tr>
<td>logoName</td>
<td>string</td>
<td>×</td>
<td>条码中间Logo图标路径，可选参数，指向前端工程静态资源下的目录</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值:<code v-pre>Object</code></li>
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
<td>二维码的base64</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.barcode.encode()</font></blockquote>
<hr>
<h3 id="_2-5-capturevideo-录制视频" tabindex="-1"><a class="header-anchor" href="#_2-5-capturevideo-录制视频"><span>2.5 captureVideo -- 录制视频</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">captureVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>videoBitrate</td>
<td>number</td>
<td>×</td>
<td>600000</td>
<td>视频的比特率</td>
</tr>
<tr>
<td>recordTimeMax</td>
<td>number</td>
<td>×</td>
<td>60000</td>
<td>视频录制最长时间 , 单位毫秒</td>
</tr>
<tr>
<td>maxFrameRate</td>
<td>number</td>
<td>×</td>
<td>20</td>
<td>最大帧率</td>
</tr>
<tr>
<td>minFrameRate</td>
<td>number</td>
<td>×</td>
<td>8</td>
<td>最小帧率</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值:<code v-pre>Object</code></li>
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
<td>生成视频路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.video.captureVideo()</font></blockquote>
<hr>
<h3 id="_2-6-base64toimage-base64转图片" tabindex="-1"><a class="header-anchor" href="#_2-6-base64toimage-base64转图片"><span>2.6 base64ToImage -- base64转图片</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> base64Str <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">"ren.jpg"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> encrypt <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">base64ToImage</span><span class="token punctuation">(</span>base64Str<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> encrypt<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">)</span></span>
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
<td>base64Str</td>
<td>String</td>
<td>√</td>
<td></td>
<td>不带前缀的base64字符串</td>
</tr>
<tr>
<td>fileName</td>
<td>String</td>
<td>√</td>
<td></td>
<td>文件名称</td>
</tr>
<tr>
<td>encrypt</td>
<td>boolean</td>
<td>×</td>
<td>false</td>
<td>是否将base64存储成密文格式的文件，密文格式文件为.agree</td>
</tr>
<tr>
<td>width</td>
<td>number</td>
<td>×</td>
<td>300</td>
<td>图片宽度</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>×</td>
<td>300</td>
<td>图片高度</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.base64ToImage()</font></blockquote>
<hr>
<h3 id="_2-7-chooseimage-选择图片" tabindex="-1"><a class="header-anchor" href="#_2-7-chooseimage-选择图片"><span>2.7 chooseImage -- 选择图片</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">chooseImage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.chooseImage()</font></blockquote>
<hr>
<h3 id="_2-8-choosevideo-选择视频" tabindex="-1"><a class="header-anchor" href="#_2-8-choosevideo-选择视频"><span>2.8 chooseVideo -- 选择视频</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">chooseVideo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
<td>视频路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.video.chooseVideo()</font></blockquote>
<hr>
<h3 id="_2-9-convertimg-图片格式转换" tabindex="-1"><a class="header-anchor" href="#_2-9-convertimg-图片格式转换"><span>2.9 convertImg -- 图片格式转换</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> target<span class="token operator">=</span> <span class="token string">"workspace@www:///static/dust/test.png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> format<span class="token operator">=</span> <span class="token string">"jpeg"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">convertImg</span><span class="token punctuation">(</span>target<span class="token punctuation">,</span> format<span class="token punctuation">)</span></span>
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
<td>target</td>
<td>String</td>
<td>√</td>
<td></td>
<td>图片路径</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>√</td>
<td></td>
<td>转换后的格式</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.convertImg()</font></blockquote>
<hr>
<h3 id="_2-10-imagetobase64-图片转base64" tabindex="-1"><a class="header-anchor" href="#_2-10-imagetobase64-图片转base64"><span>2.10 imageToBase64 -- 图片转base64</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> fileName<span class="token operator">=</span> <span class="token string">"workspace@www:///static/dust/test.png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> format<span class="token operator">=</span> <span class="token string">"png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> decrypt<span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">imageToBase64</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> decrypt<span class="token punctuation">,</span> format<span class="token punctuation">)</span></span>
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
<td>fileName</td>
<td>String</td>
<td>√</td>
<td></td>
<td>图片路径</td>
</tr>
<tr>
<td>decrypt</td>
<td>Boolean</td>
<td>√</td>
<td></td>
<td>是否为.agree格式的图片</td>
</tr>
<tr>
<td>format</td>
<td>String</td>
<td>√</td>
<td></td>
<td>格式</td>
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
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.imageToBase64()</font></blockquote>
<hr>
<h3 id="_2-11-scaleimage-图片缩放" tabindex="-1"><a class="header-anchor" href="#_2-11-scaleimage-图片缩放"><span>2.11 scaleImage -- 图片缩放</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> fileName<span class="token operator">=</span> <span class="token string">"workspace@www:///static/dust/test.png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> width<span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> height<span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> scaleType<span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> isCover<span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> quality<span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">scaleImage</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> scaleType<span class="token punctuation">,</span> isCover<span class="token punctuation">,</span> quality<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>fileName</td>
<td>String</td>
<td>√</td>
<td></td>
<td>图片路径</td>
</tr>
<tr>
<td>width</td>
<td>number</td>
<td>√</td>
<td></td>
<td>缩放宽</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>√</td>
<td></td>
<td>缩放高</td>
</tr>
<tr>
<td>scaleType</td>
<td>number</td>
<td>×</td>
<td>0</td>
<td>1以高为标准按比例缩放，2以宽为标准按比例缩放，3为宽高不变按照质量压缩，0按照指定宽高缩放，默认0</td>
</tr>
<tr>
<td>isCover</td>
<td>Boolean</td>
<td>×</td>
<td>false</td>
<td>是否覆盖原文件，默认false</td>
</tr>
<tr>
<td>quality</td>
<td>number</td>
<td>×</td>
<td>100</td>
<td>图片质量，100为不压缩，越低压缩率越高，范围0-100</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.scaleImage()</font></blockquote>
<hr>
<h3 id="_2-12-cropimage-图片裁剪" tabindex="-1"><a class="header-anchor" href="#_2-12-cropimage-图片裁剪"><span>2.12 cropImage -- 图片裁剪</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token string">"workspace@www:///static/dust/test.png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> outputX<span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> outputY<span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">cropImage</span><span class="token punctuation">(</span>src<span class="token punctuation">,</span> outputX<span class="token punctuation">,</span> outputY<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>src</td>
<td>String</td>
<td>√</td>
<td></td>
<td>输入文件路径</td>
</tr>
<tr>
<td>outputX</td>
<td>number</td>
<td>√</td>
<td></td>
<td>裁剪后生成图片的大小</td>
</tr>
<tr>
<td>outputY</td>
<td>number</td>
<td>√</td>
<td></td>
<td>裁剪后生成图片的大小</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.cropImage()</font></blockquote>
<hr>
<h3 id="_2-13-synthesisidcard-身份证合成" tabindex="-1"><a class="header-anchor" href="#_2-13-synthesisidcard-身份证合成"><span>2.13 synthesisIDCard -- 身份证合成</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token string">"total"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> cType <span class="token operator">=</span> <span class="token string">"IDC"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> orientation <span class="token operator">=</span> <span class="token string">"vertical"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> position <span class="token operator">=</span> <span class="token string">"front"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> width <span class="token operator">=</span> <span class="token number">445</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> height <span class="token operator">=</span> <span class="token number">445</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> data <span class="token operator">=</span>  <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"372928199112123910"</span><span class="token punctuation">,</span> <span class="token comment">// 身份证号码</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"张含韵"</span><span class="token punctuation">,</span>            <span class="token comment">// 姓名</span></span>
<span class="line">        <span class="token literal-property property">sex</span><span class="token operator">:</span> <span class="token string">"女"</span><span class="token punctuation">,</span>                <span class="token comment">// 性别</span></span>
<span class="line">        <span class="token literal-property property">nation</span><span class="token operator">:</span> <span class="token string">"汉"</span><span class="token punctuation">,</span>             <span class="token comment">// 民族</span></span>
<span class="line">        <span class="token literal-property property">birthday</span><span class="token operator">:</span> <span class="token string">"19911212"</span><span class="token punctuation">,</span>     <span class="token comment">// 出生日期</span></span>
<span class="line">        <span class="token literal-property property">portrait</span><span class="token operator">:</span> <span class="token string">"apps/agreesdk/static/idcard_portrait.png"</span><span class="token punctuation">,</span> <span class="token comment">// 头像</span></span>
<span class="line">        <span class="token literal-property property">address</span><span class="token operator">:</span> <span class="token string">"北京市朝阳区望京西花家地北里北区9号楼1单元"</span><span class="token punctuation">,</span><span class="token comment">// 居住地址</span></span>
<span class="line">        <span class="token literal-property property">issuingAuthority</span><span class="token operator">:</span> <span class="token string">"北京市朝阳区公安局"</span><span class="token punctuation">,</span>               <span class="token comment">// 签发机关</span></span>
<span class="line">        <span class="token literal-property property">issuingCount</span><span class="token operator">:</span> <span class="token string">"01"</span><span class="token punctuation">,</span>                                   <span class="token comment">// 签发次数,港澳台身份证时需加上该字段</span></span>
<span class="line">        <span class="token literal-property property">validityTerm</span><span class="token operator">:</span> <span class="token string">"2013.01.01-2023.01.01"</span>                 <span class="token comment">// 有效期限</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">synthesisIDCard</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> cType<span class="token punctuation">,</span> orientation<span class="token punctuation">,</span> position<span class="token punctuation">,</span> width<span class="token punctuation">,</span> height<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>type</td>
<td>String</td>
<td>√</td>
<td></td>
<td>合成证件正反面类型，可选：front(国徽页)、back(人像页)、total(合成两张)</td>
</tr>
<tr>
<td>cType</td>
<td>String</td>
<td>√</td>
<td></td>
<td>合成证件类型，IDC 身份证， HMTC港澳台居住证 FC外国人永久居住证</td>
</tr>
<tr>
<td>orientation</td>
<td>String</td>
<td>√</td>
<td></td>
<td>证件合成方向，horizontal，两张图片并列横向,vertical两张图片并列竖向，可选</td>
</tr>
<tr>
<td>position</td>
<td>String</td>
<td>√</td>
<td></td>
<td>证件图片方向，front代表国徽页在前，back代表人像页在前</td>
</tr>
<tr>
<td>width</td>
<td>String</td>
<td>√</td>
<td></td>
<td>合成图片长度</td>
</tr>
<tr>
<td>height</td>
<td>number</td>
<td>√</td>
<td></td>
<td>合成图片高度</td>
</tr>
<tr>
<td>data</td>
<td>Object</td>
<td>√</td>
<td></td>
<td>合成证件信息</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.synthesisIDCard()</font></blockquote>
<hr>
<h3 id="_2-14-imagesynthesis-图片合成" tabindex="-1"><a class="header-anchor" href="#_2-14-imagesynthesis-图片合成"><span>2.14 imageSynthesis--图片合成</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> savePath <span class="token operator">=</span> <span class="token string">"image.png"</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> imageList <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">     </span>
<span class="line">               <span class="token punctuation">{</span></span>
<span class="line">                   <span class="token literal-property property">content</span><span class="token operator">:</span><span class="token string">"agree:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime/files/picture/20220225/ren.jpg"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">interval</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line"> <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">synthesisIDCard</span><span class="token punctuation">(</span>imageList<span class="token punctuation">,</span>type<span class="token punctuation">,</span>imageList<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>type</td>
<td>String</td>
<td></td>
<td>0</td>
<td>合成类型，0为纵向，1为横向，默认为0</td>
</tr>
<tr>
<td>savePath</td>
<td>String</td>
<td></td>
<td>当前时间戳.png</td>
<td>保存路径，将合成图片放在工作空间下，只需 <code v-pre>文件名称.后缀</code>，默认 <code v-pre>当前时间戳.png</code></td>
</tr>
<tr>
<td>imageList</td>
<td>String</td>
<td>√</td>
<td></td>
<td>合成图片列表</td>
</tr>
</tbody>
</table>
<ul>
<li>imageList:</li>
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
<td>content</td>
<td>String</td>
<td>√</td>
<td></td>
<td>图片内容，可以为图片路径，也可以是图片base64信息</td>
</tr>
<tr>
<td>interval</td>
<td>String</td>
<td>√</td>
<td></td>
<td>图片间隔，当type为0时横向两张图片间隔，为1时是两张图片纵向间隔</td>
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
<td>图片路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.image.imageSynthesis()</font></blockquote>
<hr>
<h3 id="_2-15-savebmp-图片转1位bmp" tabindex="-1"><a class="header-anchor" href="#_2-15-savebmp-图片转1位bmp"><span>2.15 saveBmp --图片转1位bmp</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持Android渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        srcPath<span class="token operator">:</span> <span class="token string">"/sdcard/test.png"</span><span class="token punctuation">,</span> <span class="token comment">// 文件路径</span></span>
<span class="line">        fileName<span class="token operator">:</span><span class="token string">'test.bmp'</span><span class="token comment">//后缀名 为bmp</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Media<span class="token punctuation">.</span><span class="token function">saveBmp</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>srcPath</td>
<td>String</td>
<td>√</td>
<td>源文件路径</td>
</tr>
<tr>
<td>fileName</td>
<td>String</td>
<td>X</td>
<td>保存后的文件名称</td>
</tr>
</tbody>
</table>
<p>移动端返回结果：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">	<span class="token literal-property property">filePath</span><span class="token operator">:</span><span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">base64</span><span class="token operator">:</span><span class="token string">''</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>filePath</td>
<td>String</td>
<td>直接返回文件路径</td>
</tr>
<tr>
<td>base64</td>
<td>String</td>
<td>文件 base64</td>
</tr>
</tbody>
</table>
<hr>
</div></template>


