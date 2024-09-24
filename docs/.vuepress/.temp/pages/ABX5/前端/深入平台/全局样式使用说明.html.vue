<template><div><h1 id="全局样式使用说明" tabindex="-1"><a class="header-anchor" href="#全局样式使用说明"><span>全局样式使用说明</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>工程内 <code v-pre>package.json</code> 内添加style配置后,工程加载时会默认加载配置的样式文件</p>
<p>工程默认的全局样式文件:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">BankModule</span>
<span class="line">└─ pages</span>
<span class="line">   └─ index(css/scss/less/sass)</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="配置-style" tabindex="-1"><a class="header-anchor" href="#配置-style"><span>配置 style</span></a></h2>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"Module"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 配置全局样式,工程加载时即加载</span></span>
<span class="line">  <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token string">"pages/index"</span></span>
<span class="line">  <span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


