<template><div><h1 id="picture" tabindex="-1"><a class="header-anchor" href="#picture"><span>Picture</span></a></h1>
<h2 id="基本使用" tabindex="-1"><a class="header-anchor" href="#基本使用"><span>基本使用</span></a></h2>
<p><code v-pre>Picture.validate(value, picture)</code> 判断一个值是否符合 picture 规则。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Picture <span class="token keyword">from</span> <span class="token string">'@agree/picture'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'5"9"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">,</span> <span class="token string">'5"9"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123a'</span><span class="token punctuation">,</span> <span class="token string">'5"9"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'5"0"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123a'</span><span class="token punctuation">,</span> <span class="token string">'5"0"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'123456'</span><span class="token punctuation">,</span> <span class="token string">'5"0"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// false</span></span>
<span class="line"></span>
<span class="line">Picture<span class="token punctuation">.</span><span class="token function">validate</span><span class="token punctuation">(</span><span class="token string">'12345'</span><span class="token punctuation">,</span> <span class="token string">'5"0"'</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


