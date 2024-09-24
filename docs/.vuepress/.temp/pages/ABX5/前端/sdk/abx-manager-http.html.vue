<template><div><h1 id="abx-manager-http" tabindex="-1"><a class="header-anchor" href="#abx-manager-http"><span>abx-manager-http</span></a></h1>
<blockquote>
<p>abx 内请求方法封装.</p>
</blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> HttpManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"abx-manager-http"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-postasync" tabindex="-1"><a class="header-anchor" href="#_2-1-postasync"><span>2.1 postAsync</span></a></h3>
<p>封装 post 方法</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>url(String)</em>: 请求的地址</li>
<li><em>data(Object)</em>: 用户自定义的请求体信息</li>
<li><em>header(Object)</em>: 用户自定义的请求头信息</li>
</ol>
<p><strong>返回:</strong></p>
<p><em>(Object)</em>: 请求返回的响应</p>
<p><strong>例子:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> HttpManager<span class="token punctuation">.</span><span class="token function">postAsync</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> data<span class="token punctuation">,</span> header<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-getasync" tabindex="-1"><a class="header-anchor" href="#_2-2-getasync"><span>2.2 getAsync</span></a></h3>
<p>封装 post 方法</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>url(String)</em>: 请求的地址</li>
<li><em>params(Object)</em>: 用户自定义的请求体信息</li>
<li><em>header(Object)</em>: 用户自定义的请求头信息</li>
</ol>
<p><strong>返回:</strong></p>
<p><em>(Object)</em>: 请求返回的响应</p>
<p><strong>例子:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> response <span class="token operator">=</span> <span class="token keyword">await</span> HttpManager<span class="token punctuation">.</span><span class="token function">getAsync</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> params<span class="token punctuation">,</span> header<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


