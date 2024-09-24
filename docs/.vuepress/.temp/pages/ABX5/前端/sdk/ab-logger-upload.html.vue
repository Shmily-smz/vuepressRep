<template><div><h1 id="ab-logger-upload-前端logupload" tabindex="-1"><a class="header-anchor" href="#ab-logger-upload-前端logupload"><span>ab-logger-upload @前端LogUpload</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LogUpload <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-logger-upload'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-zipuploadlog-日志打包上传" tabindex="-1"><a class="header-anchor" href="#_2-1-zipuploadlog-日志打包上传"><span>2.1 zipUploadLog --日志打包上传</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<p>1.abc日志上传，上传log/目录下的所有日志</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> LogUpload<span class="token punctuation">.</span><span class="token function">zipUploadLog</span><span class="token punctuation">(</span><span class="token string">"./uploadClientLog"</span><span class="token punctuation">,</span><span class="token string">"abc"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.ads日志上传，上传ads/logs目录下所有日志</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> LogUpload<span class="token punctuation">.</span><span class="token function">zipUploadLog</span><span class="token punctuation">(</span><span class="token string">"./uploadClientLog"</span><span class="token punctuation">,</span><span class="token string">"ads"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>3.evs日志上传，上传evs/log目录下所有日志</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> LogUpload<span class="token punctuation">.</span><span class="token function">zipUploadLog</span><span class="token punctuation">(</span><span class="token string">"./uploadClientLog"</span><span class="token punctuation">,</span><span class="token string">"evs"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>4.fileList，上传由localPathList指定的所有日志，路径为相对于客户端根路径</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> LogUpload<span class="token punctuation">.</span><span class="token function">zipUploadLog</span><span class="token punctuation">(</span><span class="token string">"./uploadClientLog"</span><span class="token punctuation">,</span><span class="token string">"fileList"</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">"log/client.log"</span><span class="token punctuation">,</span><span class="token string">"log/aui.log"</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>日志上传文件名 命名为${logType}-20211125160223.zip</p>
<ul>
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
<td>remotePath</td>
<td>string</td>
<td>true</td>
<td></td>
<td>远程文件路径存放目录，可以为相对路径或绝对路径，相对路径相对于服务端根路径</td>
</tr>
<tr>
<td>logType</td>
<td>string</td>
<td>true</td>
<td></td>
<td>日志类型，支持abc、ads、evs、fileList日志</td>
</tr>
<tr>
<td>localPathList</td>
<td>string[]</td>
<td>false</td>
<td></td>
<td>当logType为fileList时，用于指定上传那些文件日志</td>
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
<tr>
<td>res.zipFileName</td>
<td>string</td>
<td>上传文件名</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: 无</font></blockquote>
</div></template>


