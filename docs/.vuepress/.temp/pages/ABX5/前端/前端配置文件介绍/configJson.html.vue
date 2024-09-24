<template><div><h1 id="config-json-config-json" tabindex="-1"><a class="header-anchor" href="#config-json-config-json"><span>config.json {#config.json}</span></a></h1>
<blockquote>
<p>用于编译时的配置</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>文件地址：与交易工程同级</li>
</ol>
</div>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"serviceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"resourcePath"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"ABX"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"requireContextSyntax"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BaseModule/pages/test/index.js"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置参数" tabindex="-1"><a class="header-anchor" href="#配置参数"><span>配置参数</span></a></h2>
<h3 id="devconfig" tabindex="-1"><a class="header-anchor" href="#devconfig"><span>devConfig</span></a></h3>
<p>开发时配置</p>
<h4 id="devconfig-env" tabindex="-1"><a class="header-anchor" href="#devconfig-env"><span>devConfig.env</span></a></h4>
<p>配置环境，可选参数: <code v-pre>web</code> ｜ <code v-pre>abc</code></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"web"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="devconfig-serviceendpoint" tabindex="-1"><a class="header-anchor" href="#devconfig-serviceendpoint"><span>devConfig.serviceEndPoint</span></a></h4>
<p>获取服务端 getFrontEndConfig 配置信息路径</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"serviceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="devconfig-resourcepath" tabindex="-1"><a class="header-anchor" href="#devconfig-resourcepath"><span>devConfig.resourcePath</span></a></h4>
<p>获取资源路径配置</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"resourcePath"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="devconfig-publicpath" tabindex="-1"><a class="header-anchor" href="#devconfig-publicpath"><span>devConfig.publicPath</span></a></h4>
<p>资源公共路径配置</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"ABX"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requirecontextsyntax" tabindex="-1"><a class="header-anchor" href="#requirecontextsyntax"><span>requireContextSyntax</span></a></h3>
<p>webpack require.context 语法兼容。对于 js 文件来说，x5采用 swc 编译，如果使用 require.context 语法，指定该文件路径</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"requireContextSyntax"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BaseModule/pages/test/index.js"</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


