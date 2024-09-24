<template><div><h1 id="ab-plugin-crash-崩溃日志组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-crash-崩溃日志组件"><span>ab-plugin-crash 崩溃日志组件</span></a></h1>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>客户端崩溃日志组件。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>Crash<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-crash'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>打包壳添加插件配置</p>
<p>config.xml中添加配置：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line">    <span class="token comment">&lt;!--崩溃日志组件--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feature</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>AGCrash<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android-package<span class="token punctuation">"</span></span> <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.com.agree.abc.sdk.api.crash.CrashFeatureImpl<span class="token punctuation">"</span></span><span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feature</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-switch-崩溃日志开关" tabindex="-1"><a class="header-anchor" href="#_2-1-switch-崩溃日志开关"><span>2.1 switch -- 崩溃日志开关</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> flag <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">Crash<span class="token punctuation">.</span><span class="token function">switch</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入参</strong></p>
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
<td>flag</td>
<td>bool</td>
<td>√</td>
<td>默认true，true表示启用组件，false表示停用组件</td>
</tr>
</tbody>
</table>
<p><strong>出参</strong></p>
<p>设置为false之后，后面的所有接口调用都会报如下错：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span><span class="token number">-1</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"ACrash开关未打开!"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-defaultconfig-使用壳子默认设置-推荐使用" tabindex="-1"><a class="header-anchor" href="#_2-2-defaultconfig-使用壳子默认设置-推荐使用"><span>2.2 defaultConfig -- 使用壳子默认设置(推荐使用)</span></a></h3>
<p>会自动检测崩溃文件，自动上传服务端，自动删除已上传的崩溃文件</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://192.9.200.101:60000/alog/crash/upload"</span><span class="token punctuation">;</span> <span class="token comment">// 上传的服务地址</span></span>
<span class="line">    <span class="token keyword">let</span> unionId <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span> <span class="token comment">// 用户名或用户ID</span></span>
<span class="line">    <span class="token keyword">let</span> isDelete <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span> <span class="token comment">// 表示是否上传完就删除该文件，一般要删除，测试的时候别删除</span></span>
<span class="line">    <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 请求头，可选</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-Token"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span> <span class="token comment">// 设置token</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-RandomNumber"</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置随机数</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-VerifyTime"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">defaultConfig</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> unionId<span class="token punctuation">,</span> isDelete<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入参</strong></p>
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
<td>上传的服务地址</td>
</tr>
<tr>
<td>unionId</td>
<td>string</td>
<td>X</td>
<td>用户名或用户ID</td>
</tr>
<tr>
<td>isDelete</td>
<td>bool</td>
<td>X</td>
<td>表示是否上传完就删除该文件，一般要删除，测试的时候别删除</td>
</tr>
<tr>
<td>headers</td>
<td>object</td>
<td>X</td>
<td>请求头，可选，可以使用该参数与服务端配合定制额外功能</td>
</tr>
</tbody>
</table>
<p><strong>出参</strong></p>
<p>上传成功</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"ResponseResult"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"code"</span><span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"msg"</span><span class="token operator">:</span> <span class="token string">"文件上传成功：storeFile = /home/abs/abs_ocu_master/aarm/alog/c0d4b482f379442ebf3f43c3ef4e78bb/cn.com.agree.sdk.runtime.component.crash/crash/tombstone_00001674025870609000_1.0.0__cn.com.agree.sdk.runtime.component.crash.java.xcrash"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上传失败</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"code"</span><span class="token operator">:</span><span class="token string">"-1"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"message"</span><span class="token operator">:</span><span class="token string">"cn.com.agree.sdk.request.exception.HttpException: network error! http response code is 404 or 5xx!"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-check-检测是否有崩溃文件" tabindex="-1"><a class="header-anchor" href="#_2-3-check-检测是否有崩溃文件"><span>2.3 check -- 检测是否有崩溃文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">check</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回崩溃文件数量 1</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>出参</strong></p>
<p>返回崩溃文件的数量</p>
<h3 id="_2-4-getfilelist-获取崩溃文件列表" tabindex="-1"><a class="header-anchor" href="#_2-4-getfilelist-获取崩溃文件列表"><span>2.4 getFileList -- 获取崩溃文件列表</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token string">"java"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">//let ret = await Crash.getFileList(type);</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入参</strong></p>
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
<td>type</td>
<td>string</td>
<td>X</td>
<td>崩溃类型：java、anr、native，默认全部</td>
</tr>
</tbody>
</table>
<p><strong>出参</strong></p>
<p>返回崩溃文件路径数组</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token string">"/data/user/0/cn.com.agree.sdk.runtime.component.crash/files/tombstones/tombstone_00001674025870609000_1.0.0__cn.com.agree.sdk.runtime.component.crash.java.xcrash"</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-5-deletefiles-删除崩溃文件" tabindex="-1"><a class="header-anchor" href="#_2-5-deletefiles-删除崩溃文件"><span>2.5 deleteFiles -- 删除崩溃文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> crashFileList <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">deleteFiles</span><span class="token punctuation">(</span>crashFileList<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>入参</strong></p>
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
<td>crashFileList</td>
<td>array</td>
<td>√</td>
<td>删除的崩溃日志列表</td>
</tr>
</tbody>
</table>
<p><strong>出参</strong></p>
<p>返回删除成功的文件路径列表</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">[</span><span class="token string">"/data/user/0/cn.com.agree.s….agree.sdk.runtime.component.crash.java.xcrash"</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-6-upload-上传崩溃文件" tabindex="-1"><a class="header-anchor" href="#_2-6-upload-上传崩溃文件"><span>2.6 upload -- 上传崩溃文件</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://192.9.200.101:60000/alog/crash/upload"</span><span class="token punctuation">;</span> <span class="token comment">// 上传的服务地址</span></span>
<span class="line">    <span class="token keyword">let</span> unionId <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span> <span class="token comment">// 用户名或用户ID</span></span>
<span class="line">    <span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 文件路径</span></span>
<span class="line">    <span class="token keyword">let</span> isDelete <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 表示是否上传完就删除该文件，一般要删除，测试的时候别删除</span></span>
<span class="line">    <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 请求头，可选</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-Token"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span> <span class="token comment">// 设置token</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-RandomNumber"</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置随机数</span></span>
<span class="line">        <span class="token string-property property">"X-AmebaCloud-VerifyTime"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> unionId<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> isDelete<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>params入参</strong></p>
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
<td>上传的服务地址</td>
</tr>
<tr>
<td>unionId</td>
<td>string</td>
<td>√</td>
<td>用户名或用户ID</td>
</tr>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>遍历出的文件路径</td>
</tr>
<tr>
<td>isDelete</td>
<td>bool</td>
<td>√</td>
<td>表示是否上传完就删除该文件，一般要删除，测试的时候别删除</td>
</tr>
<tr>
<td>headers</td>
<td>object</td>
<td>X</td>
<td>请求头，可选，可以使用该参数与服务端配合定制额外功能</td>
</tr>
</tbody>
</table>
<p>接口推荐使用defaultConfig接口，壳子会做默认处理，也可以前端自定义业务功能，例如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 1. 先获取崩溃日志数组</span></span>
<span class="line">    <span class="token keyword">let</span> fileArr <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">getFileList</span><span class="token punctuation">(</span><span class="token string">"java"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 如果返回结果数组长度大于0，表示有崩溃日志</span></span>
<span class="line">    <span class="token keyword">if</span> <span class="token punctuation">(</span>fileArr <span class="token operator">&amp;&amp;</span> fileArr<span class="token punctuation">.</span>length<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 2、遍历每一个崩溃文件</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">let</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> fileArr<span class="token punctuation">.</span>length<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">let</span> file <span class="token operator">=</span> fileArr<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> url <span class="token operator">=</span> <span class="token string">"http://192.9.200.101:60000/alog/crash/upload"</span><span class="token punctuation">;</span> <span class="token comment">// 上传的服务地址</span></span>
<span class="line">            <span class="token keyword">let</span> unionId <span class="token operator">=</span> <span class="token string">"admin"</span><span class="token punctuation">;</span> <span class="token comment">// 用户名或用户ID</span></span>
<span class="line">            <span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> isDelete <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span> <span class="token comment">// 表示是否上传完就删除该文件，一般要删除，测试的时候别删除</span></span>
<span class="line">            <span class="token keyword">let</span> headers <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token comment">// 请求头，可选</span></span>
<span class="line">                <span class="token string-property property">"X-AmebaCloud-Token"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span> <span class="token comment">// 设置token</span></span>
<span class="line">                <span class="token string-property property">"X-AmebaCloud-RandomNumber"</span><span class="token operator">:</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">toString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// 设置随机数</span></span>
<span class="line">                <span class="token string-property property">"X-AmebaCloud-VerifyTime"</span><span class="token operator">:</span> <span class="token string">"12345678"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">            <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Crash<span class="token punctuation">.</span><span class="token function">upload</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> unionId<span class="token punctuation">,</span> filePath<span class="token punctuation">,</span> isDelete<span class="token punctuation">,</span> headers<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
</div></template>


