<template><div><h1 id="abx-plugin-file" tabindex="-1"><a class="header-anchor" href="#abx-plugin-file"><span>abx-plugin-file</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FileManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'abx-plugin-file'</span></span>
<span class="line"><span class="token keyword">let</span> FileManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">FileManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-getinstallpathasync" tabindex="-1"><a class="header-anchor" href="#_2-1-getinstallpathasync"><span>2.1 getInstallPathAsync</span></a></h3>
<p>获取客户端根路径</p>
<p><strong>返回：</strong></p>
<p><em>(object)</em>:</p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">getInstallPathAsync</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-getfilemd5async" tabindex="-1"><a class="header-anchor" href="#_2-2-getfilemd5async"><span>2.2 getFileMD5Async</span></a></h3>
<p>获取客户端文件的md5值</p>
<p><strong>参数：</strong></p>
<p><em>options(Object)</em>: 初始化获取客户端文件 md5 值的参数，包括技术组件，客户端文件路径，所需的 md5 值类型</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件路径</span></span>
<span class="line">  <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 所需的 md5 值类型</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">getFileMD5Async</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-uploadabxfileasync" tabindex="-1"><a class="header-anchor" href="#_2-3-uploadabxfileasync"><span>2.3 uploadABXFileAsync</span></a></h3>
<p>上传文件至 abx 内 aase 服务器</p>
<p><strong>参数:</strong></p>
<p><em>options(Object)</em>: 初始化向 abx 内的 aase 服务器文件上传所需的参数，包括服务全路径，服务端文件存储路径，客户端文件存储路径</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">serverPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务全路径</span></span>
<span class="line">  <span class="token literal-property property">remotePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">localPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件存储路径</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">uploadABXFileAsync</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-downloadabxfileasync" tabindex="-1"><a class="header-anchor" href="#_2-4-downloadabxfileasync"><span>2.4 downloadABXFileAsync</span></a></h3>
<p>下载 abx 内 aase 服务器上的文件</p>
<p><strong>参数:</strong></p>
<p><em>options(Object)</em>: 初始化向 abx 内的 aase 服务器下载文件所需的参数，包括服务全路径，服务端文件存储路径，客户端文件存储路径</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">serverPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务全路径</span></span>
<span class="line">  <span class="token literal-property property">remotePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">localPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件存储路径</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">downloadABXFileAsync</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-5-uploadabsfileasync" tabindex="-1"><a class="header-anchor" href="#_2-5-uploadabsfileasync"><span>2.5 uploadABSFileAsync</span></a></h3>
<p>上传文件至 abs 服务器</p>
<p><strong>参数</strong></p>
<p><em>options(Object)</em>: 初始化向 ab5 服务器上传文件所需的参数，包括服务端文件存储路径，客户端文件存储路径</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">remotePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">localPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件存储路径</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">uploadABSFileAsync</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-6-downloadabsfileasync" tabindex="-1"><a class="header-anchor" href="#_2-6-downloadabsfileasync"><span>2.6 downloadABSFileAsync</span></a></h3>
<p>下载 abs 服务器上的文件</p>
<p><strong>参数</strong></p>
<p><em>options(Object)</em>: 初始化向 ab5 服务器下载文件所需的参数，包括服务端文件存储路径，客户端文件存储路径</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">remotePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">localPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件存储路径</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">downloadABSFileAsync</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-7-downloadabxaarmfileasync" tabindex="-1"><a class="header-anchor" href="#_2-7-downloadabxaarmfileasync"><span>2.7 downloadABXAARMFileAsync</span></a></h3>
<p>下载 abx 内 aarm 服务器上的文件</p>
<p><strong>参数</strong></p>
<p><em>options(Object)</em>: 初始化向 abx 内的 aarm 服务器下载文件所需的参数，包括服务器全路径，服务端文件存储路径，客户端文件存储路径，是否为服务器绝对路径，下载完成后是否需要删除文件</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">serverPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务器全路径</span></span>
<span class="line">  <span class="token literal-property property">remotePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 服务端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">localPath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 客户端文件存储路径</span></span>
<span class="line">  <span class="token literal-property property">isAbsolutePath</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 是否为服务器绝对路径</span></span>
<span class="line">  <span class="token literal-property property">isDelete</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 下载完成后是否需要删除文件</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">const</span> result <span class="token operator">=</span> FileManager<span class="token punctuation">.</span><span class="token function">downloadABSFileAsync</span><span class="token punctuation">(</span>options<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


