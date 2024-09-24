<template><div><h1 id="ab-plugin-codec-file-编解码类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-codec-file-编解码类组件"><span>ab-plugin-codec-file @编解码类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> CodecFile <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-codec-file'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-cryptohandler-crypto加密" tabindex="-1"><a class="header-anchor" href="#_2-1-cryptohandler-crypto加密"><span>2.1 cryptoHandler --crypto加密</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font><font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">"C://test.txt"</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">let</span> cryptoType <span class="token operator">=</span> <span class="token string">"SM3"</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> CodecFile<span class="token punctuation">.</span><span class="token function">cryptoHandler</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span>cryptoType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>路径</td>
</tr>
<tr>
<td>cryptoType</td>
<td>string</td>
<td>√</td>
<td>方式 &quot;SM3&quot; SM3方式加密 &quot;Md5&quot;获取文件md5</td>
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
<td>加密的结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.secure.encrypt 或 AgreeSDK.encryption.encrySM3File</font></blockquote>
<hr>
<h3 id="_2-2-clientfilebase64handler-文件转换base64" tabindex="-1"><a class="header-anchor" href="#_2-2-clientfilebase64handler-文件转换base64"><span>2.2 clientFileBase64Handler --文件转换base64</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font><font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">"D:/text.png"</span></span>
<span class="line"><span class="token keyword">let</span> transferType <span class="token operator">=</span>  <span class="token string">"encode"</span></span>
<span class="line">CodecFile<span class="token punctuation">.</span><span class="token function">clientFileBase64Handler</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>transferType<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">"D:/text.png"</span></span>
<span class="line"><span class="token keyword">let</span> transferType <span class="token operator">=</span>  <span class="token string">"decode"</span></span>
<span class="line"><span class="token keyword">let</span> base64String <span class="token operator">=</span> <span class="token string">"xxxx"</span></span>
<span class="line">CodecFile<span class="token punctuation">.</span><span class="token function">clientFileBase64Handler</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>transferType<span class="token punctuation">,</span>base64String<span class="token punctuation">)</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>路径</td>
</tr>
<tr>
<td>transferType</td>
<td>string</td>
<td>√</td>
<td>类型</td>
</tr>
<tr>
<td>base64String</td>
<td>string</td>
<td>√</td>
<td>base64字符串</td>
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
<td>转换的结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.file.fileToBase64 或 AgreeSDK.file.base64ToFile</font></blockquote>
</div></template>


