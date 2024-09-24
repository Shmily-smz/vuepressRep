<template><div><h1 id="交易挂起唤醒" tabindex="-1"><a class="header-anchor" href="#交易挂起唤醒"><span>交易挂起唤醒</span></a></h1>
<blockquote>
<p>交易唤醒同创建交易，仅创建类型不同</p>
</blockquote>
<blockquote>
<p>交易挂起同销毁交易，仅销毁方式不同</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>仅支持<code v-pre>bpmn</code>类型交易</p>
</div>
<h2 id="交易挂起" tabindex="-1"><a class="header-anchor" href="#交易挂起"><span>交易挂起</span></a></h2>
<blockquote>
<p>交易挂起同销毁交易，需要在关闭时设置关闭的方式</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">交易关闭三种场景</p>
<ol>
<li>中途退出：交易在中途直接关闭，无法唤醒</li>
<li>完成退出：交易流程结束</li>
<li>挂起退出：交易也在中途退出，但是可再次唤醒继续进行操作</li>
</ol>
</div>
<ul>
<li><strong>示例一：关闭前钩子函数设置关闭方式</strong></li>
</ul>
<blockquote>
<p>适合统一设置时使用</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath: ModuleName/pages/index.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">async</span> <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> pendingTradeResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$aui<span class="token punctuation">.</span>confirm<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token string">"是否挂起交易"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"提示"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          type<span class="token operator">:</span> <span class="token string">"info"</span><span class="token punctuation">,</span></span>
<span class="line">          confirmButtonText<span class="token operator">:</span> <span class="token string">"确定"</span><span class="token punctuation">,</span></span>
<span class="line">          cancelButtonText<span class="token operator">:</span> <span class="token string">"取消"</span><span class="token punctuation">,</span></span>
<span class="line">          closeOnClickModal<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          showClose<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">          drag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>pendingTradeResult <span class="token operator">==</span> <span class="token string">"confirm"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 在关闭交易前设置关闭交易的方式</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setExitType</span><span class="token punctuation">(</span><span class="token string">"pending"</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [!code hl]</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"中途退出"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例二：关闭时直接传入关闭方式</strong></li>
</ul>
<blockquote>
<p>适合某个特殊场景设置</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">closeTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroyTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span> exitType<span class="token operator">:</span> <span class="token string">"pending"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [!code hl]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<ol>
<li>使用设置交易关闭方式来选择是否挂起交易</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ExitType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  Abort <span class="token operator">=</span> <span class="token string">'abort'</span><span class="token punctuation">,</span> <span class="token comment">// 中止退出</span></span>
<span class="line">  Finish <span class="token operator">=</span> <span class="token string">'finish'</span><span class="token punctuation">,</span> <span class="token comment">// 完成退出</span></span>
<span class="line">  Pending <span class="token operator">=</span> <span class="token string">'pending'</span><span class="token punctuation">,</span> <span class="token comment">// 挂起退出</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">setExitType</span><span class="token punctuation">(</span>exitType<span class="token operator">:</span> ExitType<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交易唤醒" tabindex="-1"><a class="header-anchor" href="#交易唤醒"><span>交易唤醒</span></a></h2>
<blockquote>
<p>交易唤醒同创建交易，需要参数设置是否为唤醒</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>创建交易时设置参数<code v-pre>createConfig</code>用于表明是否为唤醒</li>
</ol>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> CreateType <span class="token punctuation">{</span></span>
<span class="line">    Open <span class="token operator">=</span> <span class="token string">'open'</span><span class="token punctuation">,</span> <span class="token comment">// 打开交易，默认</span></span>
<span class="line">    Wakeup <span class="token operator">=</span> <span class="token string">'wakeup'</span><span class="token punctuation">,</span> <span class="token comment">// 唤醒交易</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">CreateConfig</span> <span class="token punctuation">{</span></span>
<span class="line">    type<span class="token operator">:</span> CreateType<span class="token punctuation">;</span> <span class="token comment">// 创建时交易的类型,正常创建可不传入</span></span>
<span class="line">    options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 唤醒交易时可通过此传入数据</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">    createConfig<span class="token operator">?</span><span class="token operator">:</span> CreateConfig <span class="token comment">// 此参数可仅在唤醒时传入</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeAsync<span class="token punctuation">,</span> createTradeSync<span class="token punctuation">,</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">            config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                tradeName<span class="token operator">:</span> <span class="token string">"scene/个人开卡/开卡"</span><span class="token punctuation">,</span></span>
<span class="line">                moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">                title<span class="token operator">:</span> <span class="token string">"开卡"</span><span class="token punctuation">,</span></span>
<span class="line">                containerType<span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span></span>
<span class="line">				type<span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            targetId<span class="token operator">:</span> <span class="token string">"TragetId"</span><span class="token punctuation">,</span></span>
<span class="line">            createConfig<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                type<span class="token operator">:</span> <span class="token string">"wakeup"</span><span class="token punctuation">,</span> <span class="token comment">// 唤醒交易</span></span>
<span class="line">                options<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                    test<span class="token operator">:</span> <span class="token string">"test"</span> <span class="token comment">// 唤醒数据</span></span>
<span class="line">                 <span class="token punctuation">}</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="参数说明" tabindex="-1"><a class="header-anchor" href="#参数说明"><span>参数说明</span></a></h3>
<blockquote>
<p>唤醒时会发送<code v-pre>http</code>请求，设置请求体有两种方式</p>
</blockquote>
<ul>
<li><strong>设置请求体方式一</strong></li>
</ul>
<blockquote>
<p>使用<code v-pre>options</code>设置请求体，<code v-pre>优先级高</code></p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"createConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"wakeup"</span><span class="token punctuation">,</span> <span class="token comment">// 唤醒交易</span></span>
<span class="line highlighted">    <span class="token property">"options"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token property">"test"</span><span class="token operator">:</span> <span class="token string">"test"</span> <span class="token comment">// 唤醒数据</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>设置请求体方式二</strong></li>
</ul>
<blockquote>
<p>使用<code v-pre>handleHostTradeData</code>设置请求体，<code v-pre>优先级低</code></p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath: ModuleName/pages/index.ts</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handleHostTradeData</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span> hostTradeData<span class="token punctuation">,</span> setTradeData<span class="token punctuation">,</span> setTradeHeader <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span> createType <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建的交易类型"</span><span class="token punctuation">,</span> createType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 设置传入的交易数据</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>hostTradeData<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 设置交易流程请求中的请求体内容</span></span>
<span class="line">    <span class="token function">setTradeData</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>交易请求体<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 设置交易流程请求中的请求头内容</span></span>
<span class="line">    <span class="token function">setTradeHeader</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>交易请求头<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果方式一以及方式二均设置，方式一会将方式二的数据覆盖，方式一优先级较方式二更高</p>
</div>
</div></template>


