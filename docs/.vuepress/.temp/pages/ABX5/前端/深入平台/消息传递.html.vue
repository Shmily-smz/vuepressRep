<template><div><h1 id="消息传递-消息传递" tabindex="-1"><a class="header-anchor" href="#消息传递-消息传递"><span>消息传递 {#消息传递}</span></a></h1>
<blockquote>
<p>交易、面板、页面之间相互传递消息</p>
</blockquote>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="发送" tabindex="-1"><a class="header-anchor" href="#发送"><span>发送</span></a></h3>
<blockquote>
<p>使用方式有两种，但是原理一致</p>
</blockquote>
<ul>
<li><strong>上下文引用</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">        <span class="token comment">// 指定给`Home.vue`传递消息</span></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">receiver</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/pc/frame/Home.vue"</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"传递消息"</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>资源包引用</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line highlighted"><span class="token keyword">import</span> <span class="token punctuation">{</span> MessageTransmitter<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-page-message'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">        <span class="token comment">// 指定给接收`TurningBook`事件方传递消息</span></span>
<span class="line highlighted">      MessageTransmitter<span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">receiver</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token literal-property property">eventName</span><span class="token operator">:</span> <span class="token string">"TurningBook"</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">            <span class="token string-property property">"msg"</span><span class="token operator">:</span> <span class="token string">"传递事件"</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="接收" tabindex="-1"><a class="header-anchor" href="#接收"><span>接收</span></a></h3>
<blockquote>
<p>仅支持在<code v-pre>.vue</code>内使用</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onMessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        e<span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'TurningBook'</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">        <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span>eventName <span class="token operator">==</span> <span class="token string">'TurningBook'</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'接收事件 TurningBook'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="dispatchmessage-dispatchmessage" tabindex="-1"><a class="header-anchor" href="#dispatchmessage-dispatchmessage"><span>dispatchMessage {#dispatchMessage}</span></a></h2>
<blockquote>
<p>支持页面、交易、面板间相互传递消息</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> MessageType <span class="token punctuation">{</span></span>
<span class="line">  Websocket <span class="token operator">=</span> <span class="token string">"websocket"</span><span class="token punctuation">,</span></span>
<span class="line">  Event <span class="token operator">=</span> <span class="token string">"event"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageReceiver</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  eventName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageScope</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> MessageType<span class="token punctuation">;</span> <span class="token comment">// 消息类型</span></span>
<span class="line">  receiver<span class="token operator">:</span> MessageReceiver<span class="token punctuation">;</span> <span class="token comment">// 接收者</span></span>
<span class="line">  scope<span class="token operator">?</span><span class="token operator">:</span> MessageScope<span class="token punctuation">;</span> <span class="token comment">// 作用域</span></span>
<span class="line">  cacheable<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span> <span class="token comment">// 是否缓存</span></span>
<span class="line">  data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 数据</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">dispatchMessage</span><span class="token punctuation">(</span>messageArgs<span class="token operator">:</span> MessageArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h3>
<blockquote>
<p>消息类型，一般不用设置，默认是<code v-pre>MessageType.Event</code></p>
</blockquote>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h3>
<blockquote>
<p>数据</p>
</blockquote>
<h3 id="receiver" tabindex="-1"><a class="header-anchor" href="#receiver"><span>receiver</span></a></h3>
<blockquote>
<p>接收者</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageReceiver</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  path<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  eventName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>两个参数不能同时使用</li>
<li><code v-pre>path</code>代表给某个页面发送消息，指定接收者</li>
<li><code v-pre>eventName</code>代表广播事件，具体的接收者并不关心</li>
</ol>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<ol>
<li><code v-pre>path</code>:给页面发送消息，表明对某个文件发送消息，指定接收者</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 给 BankModule/pages/pc/frame/Home.vue 发送消息</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  receiver<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">"BankModule/pages/pc/frame/Home.vue"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    msg<span class="token operator">:</span> <span class="token string">"传递消息"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>eventName</code>:广播事件，不关心接收者，如果某个页面想接收，需要自行指定接收的事件</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 广播事件 TurningBook</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  receiver<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    eventName<span class="token operator">:</span> <span class="token string">"TurningBook"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    msg<span class="token operator">:</span> <span class="token string">"传递消息"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="scope" tabindex="-1"><a class="header-anchor" href="#scope"><span>scope</span></a></h3>
<blockquote>
<p>作用域</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageScope</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>参数不能同时使用,仅传入一个</li>
<li><code v-pre>tradeId</code>: 约束只有此交易内的画面才会接收到消息</li>
<li><code v-pre>panelId</code>: 约束只有此面板内的画面才会接收到消息</li>
<li><code v-pre>tradePath</code>: 约束只有此交易内的画面才会接收到消息</li>
<li><code v-pre>panelPath</code>: 约束只有此卖难内的画面才会接收到消息</li>
</ol>
</div>
<ul>
<li><strong>使用场景</strong></li>
</ul>
<ol>
<li>某个文件如果归属于通用模块，那么有被多次使用的情况，假设被多次使用在不同的交易内，并且交易同时打开，那么实际上在空间内存在多份此文件的实例；此刻发送消息就会被多个实例接收，如果只想给某个交易内的此文件发送消息，则可以指定作用域</li>
<li>广播事件也同上述，事件被多个交易画面监听，如果只想某个交易接收消息，则可以指定作用域</li>
</ol>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 广播事件 TurningBook，指定只用"BankModule/scene/开卡/个人开卡"交易接收</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">dispatchMessage</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  receiver<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    eventName<span class="token operator">:</span> <span class="token string">"TurningBook"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    msg<span class="token operator">:</span> <span class="token string">"传递消息"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  scope<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    tradePath<span class="token operator">:</span> <span class="token string">"BankModule/scene/开卡/个人开卡"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="cacheable-cacheable" tabindex="-1"><a class="header-anchor" href="#cacheable-cacheable"><span>cacheable{#cacheable}</span></a></h3>
<blockquote>
<p>消息是否缓存：默认不缓存；如果发送消息时接收方不在，则缓存，等接收方出现后在传递</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<ol>
<li>消息在缓存时不做过滤处理，即如果使用者多次触发消息发送，不会叠加成一次，请在使用时注意</li>
<li>消息一旦有接收方接收后，则被认为处理了，后面再出现的接收方无法获取</li>
</ol>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">cacheable</span> <span class="token operator">=</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="接收消息-接收消息" tabindex="-1"><a class="header-anchor" href="#接收消息-接收消息"><span>接收消息 {#接收消息}</span></a></h2>
<blockquote>
<p>仅支持在<code v-pre>.vue</code>内使用</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">EventName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">MessageOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token function-variable function">registerEvent</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span>args<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>EventName<span class="token operator">></span><span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span></span>
<span class="line">   detail<span class="token operator">:</span> MessageArgs</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token operator">:</span>MessageOptions<span class="token punctuation">)</span><span class="token operator">:</span><span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>e.detail</code>的类型即传递消息时传入的参数<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E6%B6%88%E6%81%AF%E4%BC%A0%E9%80%92.html#dispatchMessage">MessageArgs</RouteLink></p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onMessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        e<span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token comment">// [!code  warning]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li><code v-pre>registerEvent</code>：需要监听的事件列表</li>
</ol>
</li>
</ul>
<div class="hint-container caution">
<p class="hint-container-title">Caution</p>
<p><code v-pre>registerEvent</code>: 必须被调用，如果没有监听的事件，请注册为<code v-pre>[]</code></p>
</div>
</div></template>


