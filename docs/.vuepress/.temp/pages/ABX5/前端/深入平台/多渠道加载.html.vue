<template><div><h1 id="多渠道加载-多渠道加载" tabindex="-1"><a class="header-anchor" href="#多渠道加载-多渠道加载"><span>多渠道加载 {#多渠道加载}</span></a></h1>
<blockquote>
<p>运行时支持不同渠道的资源加载</p>
</blockquote>
<h2 id="渠道设置-渠道设置" tabindex="-1"><a class="header-anchor" href="#渠道设置-渠道设置"><span>渠道设置 {#渠道设置}</span></a></h2>
<blockquote>
<p>通过渠道管理器<code v-pre>ChannelManager</code>进行渠道号的设置</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ChannelName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ChannelManager</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">set</span><span class="token punctuation">(</span>channelName<span class="token operator">:</span> ChannelName<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 设置渠道号</span></span>
<span class="line">  <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ChannelName<span class="token punctuation">;</span> <span class="token comment">// 获取渠道号</span></span>
<span class="line">  <span class="token keyword">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 删除渠道号</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ChannelManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-channel"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      ChannelManager<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"YG"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="渠道文件命名规范-渠道文件命名规范" tabindex="-1"><a class="header-anchor" href="#渠道文件命名规范-渠道文件命名规范"><span>渠道文件命名规范 {#渠道文件命名规范}</span></a></h2>
<blockquote>
<p>渠道号文件命名需要遵守规范</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">渠道号区分大小写</p>
<p>渠道号区分大小写:<code v-pre>YG</code>!=<code v-pre>Yg</code>!=<code v-pre>yg</code>!=<code v-pre>yG</code></p>
<p><code v-pre>拍照.yg.vue</code>和<code v-pre>拍照.YG.vue</code>认为不是同一个文件</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">文件命名规范</p>
<ol>
<li>渠道号区分大小写</li>
</ol>
</div>
<h2 id="加载原则" tabindex="-1"><a class="header-anchor" href="#加载原则"><span>加载原则</span></a></h2>
<blockquote>
<p>遵守<code v-pre>渠道优先级最高</code>的原则查找加载资源</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>以下原则的渠道号假设为<code v-pre>YG</code></p>
</div>
<ul>
<li><strong>原则一</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Photo <span class="token keyword">from</span> <span class="token string">"./拍照"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>查找<code v-pre>拍照.YG.vue</code></li>
<li>查找<code v-pre>拍照.vue</code></li>
</ol>
<ul>
<li><strong>原则二</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Photo <span class="token keyword">from</span> <span class="token string">"./拍照.YG.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>查找<code v-pre>拍照.YG.vue</code></li>
<li>查找不到则不会继续查找</li>
</ol>
<ul>
<li><strong>原则三</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Photo <span class="token keyword">from</span> <span class="token string">"./拍照.vue"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>查找<code v-pre>拍照.YG.vue</code></li>
<li>查找<code v-pre>拍照.vue</code></li>
</ol>
<ul>
<li><strong>原则四</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Photo <span class="token keyword">from</span> <span class="token string">"./拍照.YG"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol>
<li>查找<code v-pre>拍照.YG.vue</code></li>
<li>查找不到则不会继续查找</li>
</ol>
</div></template>


