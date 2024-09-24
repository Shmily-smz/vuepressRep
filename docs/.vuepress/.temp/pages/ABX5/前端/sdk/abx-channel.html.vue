<template><div><h1 id="abx-channel" tabindex="-1"><a class="header-anchor" href="#abx-channel"><span>abx-channel</span></a></h1>
<blockquote>
<p>abx 根据传入的参数不同,将其所对应的 channel 值进行保存,以便调用其他 sdk.
需要在其他 sdk 内对其进行引入及继承.</p>
</blockquote>
<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Channel <span class="token keyword">from</span> <span class="token string">'abx-channel'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> 对象名 <span class="token keyword">extends</span> <span class="token class-name">Channel</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">channel</span><span class="token operator">:</span> string<span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 根据 this.channel 区分不同的端,并进行当前端sdk调用</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


