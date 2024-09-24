<template><div><h1 id="ab-plugin-file-文件操作类" tabindex="-1"><a class="header-anchor" href="#ab-plugin-file-文件操作类"><span>ab-plugin-file@文件操作类</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> File <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-file'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-获取客户端跟路径" tabindex="-1"><a class="header-anchor" href="#_2-1-获取客户端跟路径"><span>2.1 获取客户端跟路径</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 外置存储卡的根路径  file:///storage/emulated/0</span></span>
<span class="line"><span class="token keyword">let</span> externalRootDirectory <span class="token operator">=</span> File<span class="token punctuation">.</span>externalRootDirectory</span>
<span class="line"></span>
<span class="line"><span class="token comment">// app缓存路径 file:///storage/emulated/0/Android/data/&lt;appId>/cache</span></span>
<span class="line"><span class="token keyword">let</span> cacheDirectory <span class="token operator">=</span> File<span class="token punctuation">.</span>cacheDirectory</span>
<span class="line"></span>
<span class="line"><span class="token comment">// app私有目录路径 file:///storage/emulated/0/Android/data/&lt;appId>/files</span></span>
<span class="line"><span class="token keyword">let</span> workspaceDirectory <span class="token operator">=</span> File<span class="token punctuation">.</span>workspaceDirectory</span>
<span class="line"></span>
<span class="line"><span class="token comment">// app资产目录路径(只读)  file:///android_asset/</span></span>
<span class="line"><span class="token keyword">let</span> assetsDirectory <span class="token operator">=</span> File<span class="token punctuation">.</span>assetsDirectory</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android)原SDK:AgreeSDK.file.xxx</font></blockquote>
<hr>
<h3 id="_2-2-readclientfile-读取客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-2-readclientfile-读取客户端文件"><span>2.2 readClientFile --读取客户端文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> encoding <span class="token operator">=</span> <span class="token string">'gbk'</span></span>
<span class="line"><span class="token keyword">let</span> offset <span class="token operator">=</span> <span class="token number">0</span></span>
<span class="line"><span class="token keyword">let</span> size <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">readClientFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> offset<span class="token punctuation">,</span> size<span class="token punctuation">)</span></span>
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
<th>参数差异</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>-----</td>
<td>文件路径</td>
</tr>
<tr>
<td>encoding</td>
<td>boolstringean</td>
<td>√</td>
<td>-----</td>
<td>例&quot;gbk&quot;</td>
</tr>
<tr>
<td>offset</td>
<td>number</td>
<td>√</td>
<td><font color='green'>移动端可缺省</font></td>
<td>偏移量 0(不偏移)</td>
</tr>
<tr>
<td>size</td>
<td>number</td>
<td>√</td>
<td><font color='green'>移动端可缺省</font></td>
<td>读取量 -1(全部读取)</td>
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
<td>读取结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原SDK:let fileReader = new AgreeSDK.file.FileReader(); fileReader.readAsText()</font></blockquote>
<hr>
<h3 id="_2-3-clientdircreate-创建深度遍历客户端文件夹" tabindex="-1"><a class="header-anchor" href="#_2-3-clientdircreate-创建深度遍历客户端文件夹"><span>2.3 clientDirCreate --创建深度遍历客户端文件夹</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientDirCreate</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
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
<td>文件夹绝对路径</td>
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
<td>'true':创建成功;'false':创建失败</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.mkdirSync()</font></blockquote>
<hr>
<h3 id="_2-4-clientfilecreate-创建客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-4-clientfilecreate-创建客户端文件"><span>2.4 clientFileCreate --创建客户端文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileCreate</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
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
<td>clientFileCreate</td>
<td>boolean</td>
<td>true:创建成功;false:创建失败</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.createFile() </font></blockquote>
<hr>
<h3 id="_2-5-clientfiledelete-删除客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-5-clientfiledelete-删除客户端文件"><span>2.5 clientFileDelete --删除客户端文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileDelete</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
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
<td>clientFileDelete</td>
<td>boolean</td>
<td>true:删除成功;false:删除失败</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.deleteFile()</font></blockquote>
<hr>
<h3 id="_2-6-isfileexist-文件是否存在" tabindex="-1"><a class="header-anchor" href="#_2-6-isfileexist-文件是否存在"><span>2.6 isFileExist --文件是否存在</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">isFileExist</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
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
<td>path</td>
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
<td>clientFileExist</td>
<td>object</td>
<td>文件是否存在结果对象</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.isFileExist</font></blockquote>
<hr>
<h3 id="_2-7-clientfileisdir-判断当前路径是否为文件夹" tabindex="-1"><a class="header-anchor" href="#_2-7-clientfileisdir-判断当前路径是否为文件夹"><span>2.7 clientFileIsDir -- 判断当前路径是否为文件夹</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileIsDir</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
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
<td>&quot;true&quot;:是;&quot;false&quot;:否</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-8-getfilelength-获取文件大小" tabindex="-1"><a class="header-anchor" href="#_2-8-getfilelength-获取文件大小"><span>2.8 getFileLength -- 获取文件大小</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> unitType <span class="token operator">=</span> <span class="token string">'M'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">getFileLength</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> unitType<span class="token punctuation">)</span></span>
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
<th>参数差异</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>---</td>
<td>文件路径</td>
</tr>
<tr>
<td>unitType</td>
<td>string</td>
<td>√</td>
<td><font color='green'>移动端不支持</font></td>
<td>类型</td>
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
<td>res.size</td>
<td>string</td>
<td>&quot;0.0&quot;(文件大小结果)</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.getFileInfo</font></blockquote>
<hr>
<h3 id="_2-9-clientfilereadlines-柜面自有-按行读取客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-9-clientfilereadlines-柜面自有-按行读取客户端文件"><span>2.9 clientFileReadLines --柜面自有：按行读取客户端文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> startLines <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">let</span> endLines <span class="token operator">=</span> <span class="token number">2</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileReadLines</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> startLines<span class="token punctuation">,</span> endLines<span class="token punctuation">)</span></span>
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
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>文件路径</td>
</tr>
<tr>
<td>startLines</td>
<td>int</td>
<td>√</td>
<td>首行行数</td>
</tr>
<tr>
<td>endLines</td>
<td>int</td>
<td>√</td>
<td>最后一行行数</td>
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
<td>res.clientFileCreate</td>
<td>string</td>
<td>读取结果</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-10-clientfilerename-客户端文件重命名" tabindex="-1"><a class="header-anchor" href="#_2-10-clientfilerename-客户端文件重命名"><span>2.10 clientFileRename --客户端文件重命名</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> oldName <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> newName <span class="token operator">=</span> <span class="token string">'d://b.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileRename</span><span class="token punctuation">(</span>oldName<span class="token punctuation">,</span> newName<span class="token punctuation">)</span></span>
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
<td>oldName</td>
<td>string</td>
<td>√</td>
<td>旧客户端文件全路径</td>
</tr>
<tr>
<td>newName</td>
<td>string</td>
<td>√</td>
<td>新客户端文件全路径</td>
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
<td>res.clientFileRename</td>
<td>boolean</td>
<td>true:成功;false:失败</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.rename()</font></blockquote>
<hr>
<h3 id="_2-11-clientfilesgetlist-获取文件列表" tabindex="-1"><a class="header-anchor" href="#_2-11-clientfilesgetlist-获取文件列表"><span>2.11 clientFilesGetList --获取文件列表</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'d://a.txt'</span></span>
<span class="line"><span class="token keyword">let</span> fileTypes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'.3gp'</span><span class="token punctuation">,</span> <span class="token string">'.mp4'</span><span class="token punctuation">,</span> <span class="token string">'.txt'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFilesGetList</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> fileTypes<span class="token punctuation">)</span></span>
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
<td>文件路径</td>
</tr>
<tr>
<td>fileTypes</td>
<td>string</td>
<td>√</td>
<td>获取文件格式</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>list</code></li>
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
<td>obj</td>
<td>object</td>
<td>例:{&quot;name&quot;:&quot;XXX&quot;,&quot;size&quot;:176,&quot;path&quot;:&quot;XXXX&quot;}</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.getFilesFromDirectory()</font></blockquote>
<hr>
<h3 id="_2-12-downloadfile-文件下载" tabindex="-1"><a class="header-anchor" href="#_2-12-downloadfile-文件下载"><span>2.12 downloadFile --文件下载</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<p><strong>文件下载调用示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span></span>
<span class="line"><span class="token function">downloadFile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> serviceName <span class="token operator">=</span> <span class="token string">'/downService/downloadFile'</span></span>
<span class="line">  <span class="token comment">// android端传整个url</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>OsManager<span class="token punctuation">.</span>android<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 该接口连公司内网可以测试使用</span></span>
<span class="line">    serviceName <span class="token operator">=</span> <span class="token string">'http://192.9.200.101:50002/downService/downloadFile'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> remotePath <span class="token operator">=</span> <span class="token string">'/aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">'aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> localPath <span class="token operator">=</span> <span class="token string">'D:\\test\\b'</span> <span class="token comment">// 下载保存的本地目录，移动端不需要</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">downloadFile</span><span class="token punctuation">(</span>remotePath<span class="token punctuation">,</span> localPath<span class="token punctuation">,</span> serviceName<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 下载成功信息</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'文件下载：'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 下载错误信息</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件下载成功返回结果</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"downloadFile"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">"file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211009/aarm.zip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<td>remotePath</td>
<td>string</td>
<td>√</td>
<td>服务端文件地址</td>
</tr>
<tr>
<td>localPath</td>
<td>string</td>
<td>√</td>
<td>本地文件地址(移动端不起作用)</td>
</tr>
<tr>
<td>fileName</td>
<td>string</td>
<td>√</td>
<td>文件名称</td>
</tr>
<tr>
<td>serviceName</td>
<td>string</td>
<td>√</td>
<td>服务端名称 (移动端需传完整的 url)</td>
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
<td>downloadFile</td>
<td>boolean</td>
<td>是否下载成功</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>下载后文件存储路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: api-file-transfer-1.0.1-2: AgreeSDK.ft.downloadFile() </font></blockquote>
<hr>
<h3 id="_2-13-downloadfilenormal-文件下载标准接口" tabindex="-1"><a class="header-anchor" href="#_2-13-downloadfilenormal-文件下载标准接口"><span>2.13 downloadFileNormal --文件下载标准接口</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<p>downloadFileNormal 和 downloadFile 接口调用的是同一个服务的接口，但是 downloadFileNormal 同时支持多种下载方式和传参方式，更强大、更灵活。</p>
<p><strong>文件下载调用示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span></span>
<span class="line"><span class="token function">downloadFileNormal</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> serviceName <span class="token operator">=</span> <span class="token string">'/downService/downloadFile'</span></span>
<span class="line">  <span class="token comment">// android端传参</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>OsManager<span class="token punctuation">.</span>android<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// serviceName = "http://192.9.200.101:50002/downService/downloadFile";</span></span>
<span class="line">    serviceName <span class="token operator">=</span> <span class="token string">'http://192.9.200.136:59102/downloadFile?isAbsolutePath=true&amp;filePath=mp/ad/version/IDE/IDE/source/static/weather/207.png'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> remotePath <span class="token operator">=</span> <span class="token string">'/aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">'aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> localPath <span class="token operator">=</span> <span class="token string">'image/2021'</span> <span class="token comment">// 下载保存的本地目录，移动端传沙箱内的相对路径，/appId/files/下路径</span></span>
<span class="line">  <span class="token keyword">let</span> isAbsolutePath <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 完整的下载参数</span></span>
<span class="line">    <span class="token comment">// let res = await File.downloadFileNormal(serviceName, localPath, fileName, remotePath, isAbsolutePath, params, headers);</span></span>
<span class="line">    <span class="token comment">// 通过url下载文件，文件名是url结尾的文件命名，并指定保存路径</span></span>
<span class="line">    <span class="token comment">//let res = await File.downloadFileNormal(serviceName, localPath);</span></span>
<span class="line">    <span class="token comment">// 通过url下载文件，文件名是url结尾的文件命名，保存路径是默认的download/日期下</span></span>
<span class="line">    <span class="token comment">// let res = await File.downloadFileNormal(serviceName);</span></span>
<span class="line">    <span class="token comment">// 通过url下载文件，并保存自定义相对路径，并重命名下载文件的名称</span></span>
<span class="line">    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">downloadFileNormal</span><span class="token punctuation">(</span>serviceName<span class="token punctuation">,</span> localPath<span class="token punctuation">,</span> fileName<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'通过url下载：'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>文件下载成功返回结果</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"downloadFile"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"filePath"</span><span class="token operator">:</span> <span class="token string">"file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211009/aarm.zip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<td>serviceName</td>
<td>string</td>
<td>√</td>
<td>服务端名称 (移动端需传完整的 url)</td>
</tr>
<tr>
<td>localPath</td>
<td>string</td>
<td>X</td>
<td>本地文件地址</td>
</tr>
<tr>
<td>fileName</td>
<td>string</td>
<td>X</td>
<td>文件名称</td>
</tr>
<tr>
<td>remotePath</td>
<td>string</td>
<td>X</td>
<td>服务端文件地址</td>
</tr>
<tr>
<td>isAbsolutePath</td>
<td>boolean</td>
<td>X</td>
<td>是否是绝对路径</td>
</tr>
<tr>
<td>params</td>
<td>object</td>
<td>X</td>
<td>其他参数</td>
</tr>
<tr>
<td>headers</td>
<td>object</td>
<td>X</td>
<td>请求头</td>
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
<td>downloadFile</td>
<td>boolean</td>
<td>是否下载成功</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>下载后文件存储路径</td>
</tr>
</tbody>
</table>
<h3 id="_2-14-getclientfileassavepath-柜面自有-获取客户端打开文件路径" tabindex="-1"><a class="header-anchor" href="#_2-14-getclientfileassavepath-柜面自有-获取客户端打开文件路径"><span>2.14 getClientFileAsSavePath --柜面自有:获取客户端打开文件路径</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> fileTypesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'*.jpeg'</span><span class="token punctuation">,</span> <span class="token string">'*.txt'</span><span class="token punctuation">,</span> <span class="token string">'*.doc'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> behavior <span class="token operator">=</span> <span class="token string">'open'</span></span>
<span class="line"><span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">'test.txt'</span></span>
<span class="line"><span class="token keyword">let</span> filterPath <span class="token operator">=</span> <span class="token string">'D://'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">getClientFileAsSavePath</span><span class="token punctuation">(</span>fileTypesList<span class="token punctuation">,</span> behavior<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> filterPath<span class="token punctuation">)</span></span>
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
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fileTypesList</td>
<td>list</td>
<td>√</td>
<td>支持打开文件的类型 默认不传值可以打开全部类型文件</td>
</tr>
<tr>
<td>behavior</td>
<td>string</td>
<td>√</td>
<td>模态对话框打开样式 默认为 open</td>
</tr>
<tr>
<td>fileName</td>
<td>string</td>
<td>√</td>
<td>文件名称</td>
</tr>
<tr>
<td>filterPath</td>
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
<td>res.path</td>
<td>string</td>
<td>路径结果</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-15-listtoexcel-柜面自有-导出表格" tabindex="-1"><a class="header-anchor" href="#_2-15-listtoexcel-柜面自有-导出表格"><span>2.15 listToExcel -- 柜面自有：导出表格</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'sexual'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'huangguan'</span><span class="token punctuation">,</span> <span class="token string">'male'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'liudexin'</span><span class="token punctuation">,</span> <span class="token string">'male'</span><span class="token punctuation">,</span> <span class="token string">'29'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> excelFilePath <span class="token operator">=</span> <span class="token string">'D://test.xls'</span></span>
<span class="line"><span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line"><span class="token keyword">let</span> sheetName <span class="token operator">=</span> <span class="token string">'sheet1'</span></span>
<span class="line"><span class="token keyword">let</span> fontSize <span class="token operator">=</span> <span class="token number">10</span></span>
<span class="line"><span class="token keyword">let</span> fontName <span class="token operator">=</span> <span class="token string">'宋体'</span></span>
<span class="line"><span class="token keyword">let</span> FontColor <span class="token operator">=</span> <span class="token string">'black'</span></span>
<span class="line"><span class="token keyword">let</span> backgroundColor <span class="token operator">=</span> <span class="token operator">-</span><span class="token number">1</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">listToExcel</span><span class="token punctuation">(</span>data<span class="token punctuation">,</span> excelFilePath<span class="token punctuation">,</span> head<span class="token punctuation">,</span> sheetName<span class="token punctuation">,</span> fontSize<span class="token punctuation">,</span> fontName<span class="token punctuation">,</span> FontColor<span class="token punctuation">,</span> backgroundColor<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>list</td>
<td>√</td>
<td>list 格式 data</td>
</tr>
<tr>
<td>excelFilePath</td>
<td>string</td>
<td>√</td>
<td>excel 导出文件路径</td>
</tr>
<tr>
<td>head</td>
<td>string</td>
<td>√</td>
<td>头部</td>
</tr>
<tr>
<td>sheetName</td>
<td>string</td>
<td>x</td>
<td>内部 sheet 名称,非必输</td>
</tr>
<tr>
<td>fontSize</td>
<td>number</td>
<td>x</td>
<td>字体大小,非必输</td>
</tr>
<tr>
<td>fontName</td>
<td>string</td>
<td>x</td>
<td>字体名称,非必输</td>
</tr>
<tr>
<td>FontColor</td>
<td>string</td>
<td>x</td>
<td>FontColor,非必输</td>
</tr>
<tr>
<td>backgroundColor</td>
<td>string</td>
<td>x</td>
<td>背景颜色,非必输</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: ``</li>
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
<h3 id="_2-16-pdftotxt-pdf-转-txt" tabindex="-1"><a class="header-anchor" href="#_2-16-pdftotxt-pdf-转-txt"><span>2.16 pdfToTxt -- pdf 转 txt</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> pdfPath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.pdf'</span></span>
<span class="line"><span class="token keyword">let</span> txtPath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.txt'</span></span>
<span class="line"><span class="token keyword">let</span> encoding <span class="token operator">=</span> <span class="token string">'UTF-8'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">pdfToTxt</span><span class="token punctuation">(</span>pdfPath<span class="token punctuation">,</span> txtPath<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span></span>
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
<td>pdfPath</td>
<td>string</td>
<td>√</td>
<td>pdf 文件绝对路径</td>
</tr>
<tr>
<td>txtPath</td>
<td>string</td>
<td>√</td>
<td>txt 文件绝对路径</td>
</tr>
<tr>
<td>encoding</td>
<td>string</td>
<td>√</td>
<td>编码，默认为 UTF-8</td>
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
<h3 id="_2-17-readclientexcel-读取客户端-excel" tabindex="-1"><a class="header-anchor" href="#_2-17-readclientexcel-读取客户端-excel"><span>2.17 readClientExcel -- 读取客户端 excel</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> excelPath <span class="token operator">=</span> <span class="token string">'C:/a.xls'</span></span>
<span class="line"><span class="token keyword">let</span> index <span class="token operator">=</span> <span class="token number">1</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">readClientExcel</span><span class="token punctuation">(</span>excelPath<span class="token punctuation">,</span> index<span class="token punctuation">)</span></span>
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
<td>excelPath</td>
<td>string</td>
<td>√</td>
<td>excel 文件绝对路径</td>
</tr>
<tr>
<td>index</td>
<td>number</td>
<td>√</td>
<td>sheet index(例:index=1 从 1 开始)</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: ``</li>
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
<h3 id="_2-18-readclientfilebase64-读取客户端文件-返回-base64-字符串" tabindex="-1"><a class="header-anchor" href="#_2-18-readclientfilebase64-读取客户端文件-返回-base64-字符串"><span>2.18 readClientFileBase64 -- 读取客户端文件，返回 base64 字符串</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'C:/test.log'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">readClientFileBase64</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
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
<td>res.Base64Str</td>
<td>string</td>
<td>例&quot;MjEzMzMzMzMzMzMz&quot;(base64 字符串)</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.fileToBase64</font></blockquote>
<hr>
<h3 id="_2-19-uploadfile-上传文件" tabindex="-1"><a class="header-anchor" href="#_2-19-uploadfile-上传文件"><span>2.19 uploadFile -- 上传文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font><p>目前新版 ABS 支持两种上传方式，之前支持的是通过将参数拼接到 url 上进行上传，后来新增了表单形式的文件上传。
推荐使用表单形式。</p>
</blockquote>
<p><strong>1、url 拼接参数上传(不推荐)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> localPath <span class="token operator">=</span> <span class="token string">'file:///storage/emulated/0/download/demo.jpg'</span></span>
<span class="line"><span class="token keyword">let</span> remotePath <span class="token operator">=</span> <span class="token string">'/home/pad/abs/workspace'</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'http://192.9.200.101:51002/upService/uploadFile'</span></span>
<span class="line"><span class="token comment">// url形式传参-老版功能支持</span></span>
<span class="line"><span class="token keyword">let</span> urlOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 自定义参数，移动端支持，柜面不支持，可不传</span></span>
<span class="line">  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// url形式上传需要将参数拼接到params上</span></span>
<span class="line">    <span class="token literal-property property">isAbsolutePath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否是绝对路径</span></span>
<span class="line">    <span class="token literal-property property">override</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否覆盖原文件</span></span>
<span class="line">    <span class="token literal-property property">filePath</span><span class="token operator">:</span> <span class="token string">'/home/pad/abs/workspace'</span> <span class="token comment">// 服务端保存的地址</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 自定义参数</span></span>
<span class="line">  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//自定义请求头</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 柜面端的options参数不生效，只有移动端有效</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span>localPath<span class="token punctuation">,</span> remotePath<span class="token punctuation">,</span> url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>2、表单形式文件上传(推荐使用)</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 1、表单形式，推荐使用</span></span>
<span class="line"><span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'http://192.9.200.101:51002/upService/uploadFileForm'</span></span>
<span class="line"><span class="token keyword">let</span> localPath <span class="token operator">=</span> <span class="token string">'file:///storage/emulated/0/download/demo.jpg'</span></span>
<span class="line"><span class="token keyword">let</span> remotePath <span class="token operator">=</span> <span class="token string">'/home/pad/abs/workspace'</span></span>
<span class="line"><span class="token comment">// 表单形式传参-新版abs支持，推荐</span></span>
<span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 自定义参数，移动端支持，柜面不支持，可不传</span></span>
<span class="line">  <span class="token literal-property property">isAbsolutePath</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否绝对路径</span></span>
<span class="line">  <span class="token literal-property property">override</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否覆盖已存在文件</span></span>
<span class="line">  <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 自定义参数</span></span>
<span class="line">  <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">//自定义请求头</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 柜面端的options参数不生效，只有移动端有效</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span>localPath<span class="token punctuation">,</span> remotePath<span class="token punctuation">,</span> url<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>成功返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"res"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"ResponseResult"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"文件上传成功！文件名:demo.jpg,文件类型:multipart/form-data,文件大小:35406 Bytes"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>失败返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"-1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span> <span class="token string">"java.net.ConnectException: Failed to connect to /192.9.200.101:50002"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<td>localPath</td>
<td>string</td>
<td>√</td>
<td>本地文件路径</td>
</tr>
<tr>
<td>remotePath</td>
<td>string</td>
<td>√</td>
<td>保存到服务端路径</td>
</tr>
<tr>
<td>serviceName</td>
<td>string</td>
<td>√</td>
<td>服务器接口地址</td>
</tr>
<tr>
<td>options</td>
<td>object</td>
<td>X</td>
<td>自定义参数（目前仅移动渠道需要）</td>
</tr>
</tbody>
</table>
<ul>
<li>Options 参数列表:</li>
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
<td>isAbsolutePath</td>
<td>boolean</td>
<td>X</td>
<td>是否保存到绝对路径，默认 true（仅移动渠道需要）</td>
</tr>
<tr>
<td>override</td>
<td>boolean</td>
<td>X</td>
<td>是否覆盖已有文件，默认 true（仅移动渠道需要）</td>
</tr>
<tr>
<td>params</td>
<td>object</td>
<td>X</td>
<td>自定义额外参数，选填，如果是 url 传参方式接口，则需要使用该参数，默认{}</td>
</tr>
<tr>
<td>headers</td>
<td>object</td>
<td>X</td>
<td>自定义请求头，选填, 默认{}</td>
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
<td>是否更新成功</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.ft.uploadFile</font></blockquote>
<hr>
<h3 id="_2-20-wordtotxt-word-转-txt" tabindex="-1"><a class="header-anchor" href="#_2-20-wordtotxt-word-转-txt"><span>2.20 wordToTxt -- word 转 txt</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> wordPath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.doc'</span></span>
<span class="line"><span class="token keyword">let</span> txtPath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.txt'</span></span>
<span class="line"><span class="token keyword">let</span> encoding <span class="token operator">=</span> <span class="token string">'UTF-8'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">wordToTxt</span><span class="token punctuation">(</span>wordPath<span class="token punctuation">,</span> txtPath<span class="token punctuation">,</span> encoding<span class="token punctuation">)</span></span>
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
<td>wordPath</td>
<td>string</td>
<td>√</td>
<td>word 文件绝对路径</td>
</tr>
<tr>
<td>txtPath</td>
<td>string</td>
<td>√</td>
<td>txt 文件绝对路径</td>
</tr>
<tr>
<td>encoding</td>
<td>string</td>
<td>√</td>
<td>编码，默认为 UTF-8</td>
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
<td>文本内容</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-21-writeclientfile-写客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-21-writeclientfile-写客户端文件"><span>2.21 writeClientFile -- 写客户端文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.doc'</span></span>
<span class="line"><span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">'hello'</span></span>
<span class="line"><span class="token keyword">let</span> append <span class="token operator">=</span> <span class="token string">'true'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">writeClientFile</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> content<span class="token punctuation">,</span> append<span class="token punctuation">)</span></span>
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
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>文件路径</td>
</tr>
<tr>
<td>content</td>
<td>string</td>
<td>√</td>
<td>写入文件的内容</td>
</tr>
<tr>
<td>append</td>
<td>string</td>
<td>√</td>
<td>是否追加写入</td>
</tr>
<tr>
<td>encoding</td>
<td>string</td>
<td>-</td>
<td>编码格式</td>
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
<td>res.clientFileWrite</td>
<td>boolean</td>
<td>写入结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.createFile()</font></blockquote>
<hr>
<h3 id="_2-22-clientfilecopy-复制客户端文件" tabindex="-1"><a class="header-anchor" href="#_2-22-clientfilecopy-复制客户端文件"><span>2.22 clientFileCopy -- 复制客户端文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> sourceFile <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.doc'</span></span>
<span class="line"><span class="token keyword">let</span> destinationFile <span class="token operator">=</span> <span class="token string">'D:\\dq\\test.doc'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">clientFileCopy</span><span class="token punctuation">(</span>sourceFile<span class="token punctuation">,</span> destinationFile<span class="token punctuation">)</span></span>
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
<td>sourceFile</td>
<td>string</td>
<td>√</td>
<td>原文件全路径</td>
</tr>
<tr>
<td>destinationFile</td>
<td>string</td>
<td>√</td>
<td>文件全路径</td>
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
<td>复制结果(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.copyFile() </font></blockquote>
<hr>
<h3 id="_2-23-文件断点下载" tabindex="-1"><a class="header-anchor" href="#_2-23-文件断点下载"><span>2.23 文件断点下载</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<p><strong>创建下载器</strong></p>
<p><code v-pre>File.createDownloader</code></p>
<p>创建下载器会初始化入参，当下载成功后，会返回下载文件信息。</p>
<p><strong>示例</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 断点下载方法，目前仅android支持</span></span>
<span class="line"><span class="token keyword">async</span></span>
<span class="line"><span class="token function">createDownloader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">'http://192.9.200.101:50002/downService/downloadFile'</span></span>
<span class="line">  <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">'aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'/aarm.zip'</span></span>
<span class="line">  <span class="token keyword">let</span> priority <span class="token operator">=</span> <span class="token number">1</span> <span class="token comment">// 优先级</span></span>
<span class="line">  <span class="token keyword">let</span> poolSize <span class="token operator">=</span> <span class="token number">3</span> <span class="token comment">// 同时下载的任务数</span></span>
<span class="line">  <span class="token keyword">this</span><span class="token punctuation">.</span>tag <span class="token operator">=</span> url <span class="token operator">+</span> filePath <span class="token comment">// tag是每一个下载任务的唯一标志</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">isBreakpoint</span><span class="token operator">:</span> <span class="token string">'true'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">isAbsolutePath</span><span class="token operator">:</span> <span class="token string">'false'</span><span class="token punctuation">,</span></span>
<span class="line">    filePath</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">createDownloader</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> priority<span class="token punctuation">,</span> poolSize<span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">,</span> fileName<span class="token punctuation">,</span> headers<span class="token punctuation">,</span> params<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'下载返回:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下载完成返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"downloadedSize"</span><span class="token operator">:</span> <span class="token number">25485464</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"totalSize"</span><span class="token operator">:</span> <span class="token number">25485464</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"progress"</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"http://192.9.200.101:50002/downService/downloadFile/aarm.zip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<td>url</td>
<td>string</td>
<td>√</td>
<td>服务器下载接口</td>
</tr>
<tr>
<td>priority</td>
<td>string</td>
<td>√</td>
<td>下载优先级</td>
</tr>
<tr>
<td>poolSize</td>
<td>string</td>
<td>√</td>
<td>线程池同时下载任务数量</td>
</tr>
<tr>
<td>tag</td>
<td>string</td>
<td>√</td>
<td>下载任务的唯一识别标识</td>
</tr>
<tr>
<td>fileName</td>
<td>string</td>
<td>√</td>
<td>下载后文件存储的名称</td>
</tr>
<tr>
<td>headers</td>
<td>object</td>
<td>√</td>
<td>请求头信息</td>
</tr>
<tr>
<td>params</td>
<td>object</td>
<td>√</td>
<td>需要传的参数</td>
</tr>
</tbody>
</table>
<p>abs 接口需要传递的参数 params 字段</p>
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
<td>isBreakpoint</td>
<td>string</td>
<td>√</td>
<td>是否是断点下载</td>
</tr>
<tr>
<td>isAbsolutePath</td>
<td>string</td>
<td>√</td>
<td>是否是绝对路径</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>文件的路径，根据是否是绝对路径来传对应的参数</td>
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
<td>path</td>
<td>string</td>
<td>文件下载后保存的路径</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>文件名称</td>
</tr>
<tr>
<td>downloadedSize</td>
<td>string</td>
<td>已下载文件大小</td>
</tr>
<tr>
<td>totalSize</td>
<td>string</td>
<td>文件总大小</td>
</tr>
<tr>
<td>progress</td>
<td>string</td>
<td>当前下载进度</td>
</tr>
<tr>
<td>tag</td>
<td>string</td>
<td>当前下载任务唯一标识</td>
</tr>
</tbody>
</table>
<p><strong>开始下载</strong></p>
<p>开始下载也就是继续下载，在开始下载之前必须先调用<code v-pre>File.createDownloader</code>接口。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">File<span class="token punctuation">.</span><span class="token function">startDownload</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>暂停下载</strong></p>
<p>暂停下载，会停止当前下载任务，本地会记录当前下载任务进度信息，如需继续下载，调用<code v-pre>File.startDownload</code>即可。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">File<span class="token punctuation">.</span><span class="token function">pauseDownload</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>移除下载</strong></p>
<p>移除当前下载任务，移除后，将不存在断点下载信息。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">File<span class="token punctuation">.</span><span class="token function">removeDownload</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>获取下载信息</strong></p>
<p>返回指定 tag 的下载任务信息，便于展示下载 UI 信息，比如初始化进度信息。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">getDownloaderInfo</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>tag<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取下载信息:'</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"downloadedSize"</span><span class="token operator">:</span> <span class="token number">3861408</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"totalSize"</span><span class="token operator">:</span> <span class="token number">25485464</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"progress"</span><span class="token operator">:</span> <span class="token number">0.12894001603126526</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"http://192.9.200.101:50002/downService/downloadFile/aarm.zip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注册监听</strong></p>
<ul>
<li>
<p>onFileBreakDownloadProgress 文件断点下载的进度监听，能够返回文件下载进度和下载信息。如果前端需要动态显示下载进度，可以在该监听方法里写进度 UI 展示。</p>
</li>
<li>
<p>onFileBreakDownloadRemove 文件断点下载任务被移除时的监听，当调用移除下载方法时，监听会被触发。</p>
</li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 断点下载文件进度监听</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">'onFileBreakDownloadProgress'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onFileBreakDownloadProgress=='</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data</span>
<span class="line">      <span class="token keyword">let</span> tag <span class="token operator">=</span> data<span class="token punctuation">.</span>tag</span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'tag1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 展示tag1进度UI</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'tag2'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 展示tag2进度UI</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 断点下载文件移除任务监听</span></span>
<span class="line">  document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token string">'onFileBreakDownloadRemove'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onFileBreakDownloadRemove=='</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>res<span class="token punctuation">.</span>data<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data</span>
<span class="line">      <span class="token keyword">let</span> tag <span class="token operator">=</span> data<span class="token punctuation">.</span>tag</span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'tag1'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 触发tag1移除监听</span></span>
<span class="line">      <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token keyword">if</span> <span class="token punctuation">(</span>tag <span class="token operator">===</span> <span class="token string">'tag2'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 触发tag2移除监听</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>监听返回结果</strong></p>
<p>获取 res.data 的值，返回结果如下：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"file:///storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.ext/files/download/20211011/aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"aarm.zip"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"downloadedSize"</span><span class="token operator">:</span> <span class="token number">3861408</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"totalSize"</span><span class="token operator">:</span> <span class="token number">25485464</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"progress"</span><span class="token operator">:</span> <span class="token number">0.12894001603126526</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"tag"</span><span class="token operator">:</span> <span class="token string">"http://192.9.200.101:50002/downService/downloadFile/aarm.zip"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-24-获取文件-md5-getclientfilemd5" tabindex="-1"><a class="header-anchor" href="#_2-24-获取文件-md5-getclientfilemd5"><span>2.24 获取文件 MD5-getClientFileMD5</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<p>接口调用：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">File<span class="token punctuation">.</span><span class="token function">getClientFileMD5</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> resultType<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">async</span></span>
<span class="line"><span class="token function">getClientFileMD5</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line">  <span class="token keyword">let</span> resultType <span class="token operator">=</span> <span class="token string">'MD5String'</span></span>
<span class="line">  <span class="token keyword">if</span> <span class="token punctuation">(</span>OsManager<span class="token punctuation">.</span>android<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    filePath <span class="token operator">=</span> <span class="token string">'file:///storage/emulated/0/download/demo.jpg'</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 第二个参数是返回值类型，可以返回字符串类型的MD5/字节类型的MD5/Base64类型的MD5</span></span>
<span class="line">    <span class="token comment">// let ret = await File.getClientFileMD5(filePath, resultType);</span></span>
<span class="line">    <span class="token comment">// 默认是返回字符串类型的md5，可以不传第二个参数</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">getClientFileMD5</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 返回值： { result: "f1802c81c98e3f2a3cb258be17ee989c"}</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取文件MD5:'</span> <span class="token operator">+</span> ret<span class="token punctuation">.</span>result<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"result"</span><span class="token operator">:</span> <span class="token string">"f1802c81c98e3f2a3cb258be17ee989c"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
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
<td>文件的绝对路径</td>
</tr>
<tr>
<td>resultType</td>
<td>string</td>
<td>X</td>
<td>返回值类型：MD5String(字符串类型), Md5Byte(字节类型), Md5Base64(base64 类型)</td>
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
<td>文件的 md5 值</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-25-downgrmfiles-下载指定文件夹-aarm-资源" tabindex="-1"><a class="header-anchor" href="#_2-25-downgrmfiles-下载指定文件夹-aarm-资源"><span>2.25 downGrmFiles -- 下载指定文件夹 aarm 资源</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> relativeDirPath <span class="token operator">=</span> <span class="token string">'/www/TEClient/TEClientFM/static/'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">downGrmFiles</span><span class="token punctuation">(</span>relativeDirPath<span class="token punctuation">)</span></span>
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
<td>relativeDirPath</td>
<td>string</td>
<td>√</td>
<td>文件夹相对路径，相对于 workspace</td>
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
<td>boolean</td>
<td>下载结果</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-26-readjsonfile-读取指定-json-文件返回-json-对象" tabindex="-1"><a class="header-anchor" href="#_2-26-readjsonfile-读取指定-json-文件返回-json-对象"><span>2.26 readJsonFile -- 读取指定 JSON 文件返回 JSON 对象</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'D:\\a\\1.json'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">readJsonFile</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>json 文件的绝地路径</td>
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
<td>object</td>
<td>JSON 对象</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-27-readfolderlist-读取指定目录返回文件列表" tabindex="-1"><a class="header-anchor" href="#_2-27-readfolderlist-读取指定目录返回文件列表"><span>2.27 readFolderList -- 读取指定目录返回文件列表</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'D:\\a\\b'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">readFolderList</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
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
<td>path</td>
<td>string</td>
<td>√</td>
<td>文件夹绝对路径</td>
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
<td>JSONArray</td>
<td>文件列表</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-28-checkanddownload-判断资源是否需要更新的方法" tabindex="-1"><a class="header-anchor" href="#_2-28-checkanddownload-判断资源是否需要更新的方法"><span>2.28 CheckAndDownload -- 判断资源是否需要更新的方法</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.25 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> paths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'www/index.html'</span><span class="token punctuation">,</span> <span class="token string">'www/main.js'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">CheckAndDownload</span><span class="token punctuation">(</span>paths<span class="token punctuation">)</span></span>
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
<td>paths</td>
<td>array</td>
<td>√</td>
<td>需要判断的资源路径数组</td>
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
<td>res.downloadKeys</td>
<td>Array</td>
<td>需要更新的资源路径数组</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-29-openfile-打开文件" tabindex="-1"><a class="header-anchor" href="#_2-29-openfile-打开文件"><span>2.29 openFile -- 打开文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.31 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token string">"word"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">let</span> fileName <span class="token operator">=</span> <span class="token string">"file:///www/static/test.doc"</span></span>
<span class="line">    <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">openFile</span><span class="token punctuation">(</span>fileName<span class="token punctuation">,</span> type<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token keyword">catch</span><span class="token punctuation">(</span>err<span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line"></span>
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
<td>fileName</td>
<td>string</td>
<td>√</td>
<td>文件的绝对路径</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>X</td>
<td>type 打开文档类型，可选参数包括：word,excel,ppt,txt,pdf,image</td>
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
<td>打开结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.openFile() </font></blockquote>
<hr>
<h3 id="_2-30-createimgbybase64-根据-base64-生成-img" tabindex="-1"><a class="header-anchor" href="#_2-30-createimgbybase64-根据-base64-生成-img"><span>2.30 CreateImgByBase64 -- 根据 base64 生成 img</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">2.0.28 版本后支持</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'C:\\Users\\Desktop\\test.png'</span></span>
<span class="line">  <span class="token keyword">let</span> base64Str <span class="token operator">=</span> <span class="token string">'iVBORw0KGgoAAAANSUhEUgAAAwMAAAO9CAIAAABRgCxxAAAAAXNSR0IArs4c6……'</span></span>
<span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">CreateImgByBase64</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> base64Str<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
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
<tr>
<td>base64Str</td>
<td>string</td>
<td>√</td>
<td>base64 值</td>
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
<td>boolean</td>
<td>结果</td>
</tr>
</tbody>
</table>
<h3 id="_2-31-writefiletouploadtask-写埋点日志上传文件" tabindex="-1"><a class="header-anchor" href="#_2-31-writefiletouploadtask-写埋点日志上传文件"><span>2.31 writeFileToUploadTask -- 写埋点日志上传文件</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">2.0.30 版本后支持</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'D:\\dq\\hg.doc'</span></span>
<span class="line"><span class="token keyword">let</span> content <span class="token operator">=</span> <span class="token string">'hello'</span></span>
<span class="line"><span class="token keyword">let</span> append <span class="token operator">=</span> <span class="token string">'true'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> File<span class="token punctuation">.</span><span class="token function">writeFileToUploadTask</span><span class="token punctuation">(</span>filePath<span class="token punctuation">,</span> content<span class="token punctuation">,</span> append<span class="token punctuation">)</span></span>
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
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>文件路径</td>
</tr>
<tr>
<td>content</td>
<td>string</td>
<td>√</td>
<td>写入文件的内容</td>
</tr>
<tr>
<td>append</td>
<td>string</td>
<td>√</td>
<td>是否追加写入</td>
</tr>
<tr>
<td>encoding</td>
<td>string</td>
<td>-</td>
<td>编码格式</td>
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
<td>boolean</td>
<td>结果</td>
</tr>
</tbody>
</table>
</div></template>


