<template><div><h1 id="交易还原-交易还原" tabindex="-1"><a class="header-anchor" href="#交易还原-交易还原"><span>交易还原 {#交易还原}</span></a></h1>
<blockquote>
<p>用于展示操作过的交易流程画面</p>
</blockquote>
<h2 id="还原类型" tabindex="-1"><a class="header-anchor" href="#还原类型"><span>还原类型</span></a></h2>
<p>按照<code v-pre>业务场景</code>划分不同还原类型</p>
<table>
<thead>
<tr>
<th style="text-align:left">类型</th>
<th style="text-align:center">auf</th>
<th style="text-align:center">bpmn</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">授权</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td style="text-align:left">复合</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td style="text-align:left">购物车</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">❌</td>
</tr>
</tbody>
</table>
<h2 id="还原参数" tabindex="-1"><a class="header-anchor" href="#还原参数"><span>还原参数</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> RecoverType <span class="token punctuation">{</span></span>
<span class="line">  Authorized <span class="token operator">=</span> <span class="token string">"authorized"</span><span class="token punctuation">,</span> <span class="token comment">// 授权</span></span>
<span class="line">  Composite <span class="token operator">=</span> <span class="token string">"composite"</span><span class="token punctuation">,</span> <span class="token comment">// 复合</span></span>
<span class="line">  Cart <span class="token operator">=</span> <span class="token string">"cart"</span><span class="token punctuation">,</span> <span class="token comment">// 购物车</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">TradeDataHistory</span> <span class="token operator">=</span> AufTradeDataHistory <span class="token operator">|</span> BpmnTradeDataHistory<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">DmDataHistory</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">enum</span> showType <span class="token punctuation">{</span></span>
<span class="line">  Tile <span class="token operator">=</span> <span class="token string">"tile"</span><span class="token punctuation">,</span> <span class="token comment">// 平铺</span></span>
<span class="line">  Step <span class="token operator">=</span> <span class="token string">"step"</span><span class="token punctuation">,</span> <span class="token comment">// 步骤</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">VueRef</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">CompositeElements</span> <span class="token operator">=</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span>VueRef<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">PlaybackArgs</span> <span class="token punctuation">{</span></span>
<span class="line">  recoverType<span class="token operator">:</span> RecoverType<span class="token punctuation">;</span></span>
<span class="line">  showType<span class="token operator">:</span> ShowType<span class="token punctuation">;</span></span>
<span class="line">  data<span class="token operator">:</span> TradeDataHistory<span class="token punctuation">;</span></span>
<span class="line">  dmObject<span class="token operator">:</span> DmDataHistory<span class="token punctuation">;</span></span>
<span class="line">  compositeData<span class="token operator">?</span><span class="token operator">:</span> CompositeElements<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="recovertype" tabindex="-1"><a class="header-anchor" href="#recovertype"><span>recoverType</span></a></h3>
<blockquote>
<p><code v-pre>RecoverType</code></p>
</blockquote>
<p>还原类型：授权、复合、购物车</p>
<h3 id="showtype" tabindex="-1"><a class="header-anchor" href="#showtype"><span>showType</span></a></h3>
<blockquote>
<p><code v-pre>ShowType</code></p>
</blockquote>
<p>还原交易的展示方式，分为两种：1 平铺，将所有画面全部展示；2 流程，需要点击上一步下一步切换；</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>bpmn</code>暂时不支持<code v-pre>step</code>类型</p>
</div>
<h3 id="data" tabindex="-1"><a class="header-anchor" href="#data"><span>data</span></a></h3>
<blockquote>
<p><code v-pre>TradeDataHistory</code></p>
</blockquote>
<p>还原需要的流程历史，画面信息</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>auf</code>和<code v-pre>bpmn</code>的数据结构并不一致，所以获取的结果请注意区分不同交易类型</p>
</div>
<ul>
<li><strong>获取 data 的方式</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="dmobject" tabindex="-1"><a class="header-anchor" href="#dmobject"><span>dmObject</span></a></h3>
<blockquote>
<p><code v-pre>dmObject</code></p>
</blockquote>
<p>还原需要的画面数据信息</p>
<ul>
<li><strong>获取 dm 的方式</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> dmDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDmObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<h3 id="compositedata" tabindex="-1"><a class="header-anchor" href="#compositedata"><span>compositeData</span></a></h3>
<blockquote>
<p><code v-pre>CompositeElements</code></p>
</blockquote>
<p>复合还原时使用，传入的参数代表此元素不被禁用</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>InputComposite<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> compositeData <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">"InputComposite"</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="还原示例" tabindex="-1"><a class="header-anchor" href="#还原示例"><span>还原示例</span></a></h2>
<h3 id="授权" tabindex="-1"><a class="header-anchor" href="#授权"><span>授权</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>InputComposite<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">authorization</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> tradeOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"授权还原"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">microName</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">"BankModule/个人开卡/开卡"</span><span class="token punctuation">,</span> <span class="token comment">// path</span></span>
<span class="line">          <span class="token literal-property property">containerType</span><span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">targetId</span><span class="token operator">:</span> <span class="token string">"trade_container_parcel"</span><span class="token punctuation">,</span> <span class="token comment">// internalPanel</span></span>
<span class="line highlighted">        <span class="token literal-property property">importVar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">recoverType</span><span class="token operator">:</span> <span class="token string">"authorized"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">dmObject</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDmObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">showType</span><span class="token operator">:</span> <span class="token string">"tile"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="复合" tabindex="-1"><a class="header-anchor" href="#复合"><span>复合</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>InputComposite<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">composite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> tradeOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"复合还原"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">microName</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">"BankModule/个人开卡/开卡"</span><span class="token punctuation">,</span> <span class="token comment">// path</span></span>
<span class="line">          <span class="token literal-property property">containerType</span><span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">targetId</span><span class="token operator">:</span> <span class="token string">"trade_container_parcel"</span><span class="token punctuation">,</span> <span class="token comment">// internalPanel</span></span>
<span class="line highlighted">        <span class="token literal-property property">importVar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">recoverType</span><span class="token operator">:</span> <span class="token string">"composite"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">dmObject</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDmObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">showType</span><span class="token operator">:</span> <span class="token string">"tile"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">compositeData</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"InputComposite"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="购物车" tabindex="-1"><a class="header-anchor" href="#购物车"><span>购物车</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>bpmn</code>暂时不支持购物车还原模式</p>
</div>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>InputComposite<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">cart</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> tradeOptions <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">"购物车还原"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"auf"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">microName</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">"BankModule/个人开卡/开卡/App.vue"</span><span class="token punctuation">,</span> <span class="token comment">// path</span></span>
<span class="line">          <span class="token literal-property property">containerType</span><span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">targetId</span><span class="token operator">:</span> <span class="token string">"trade_container_parcel"</span><span class="token punctuation">,</span> <span class="token comment">// internalPanel</span></span>
<span class="line highlighted">        <span class="token literal-property property">importVar</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">recoverType</span><span class="token operator">:</span> <span class="token string">"cart"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">dmObject</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getDmObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token literal-property property">showType</span><span class="token operator">:</span> <span class="token string">"step"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="怜悯之心-怜悯之心" tabindex="-1"><a class="header-anchor" href="#怜悯之心-怜悯之心"><span>怜悯之心 {#怜悯之心}</span></a></h2>
<blockquote>
<p>是否保留页面数据</p>
</blockquote>
<h2 id="获取交易历史数据" tabindex="-1"><a class="header-anchor" href="#获取交易历史数据"><span>获取交易历史数据</span></a></h2>
<blockquote>
<p>支持获取<code v-pre>auf/bpmn</code>类型交易历史数据</p>
</blockquote>
<h3 id="gettradedatahistory-gettradedatahistory" tabindex="-1"><a class="header-anchor" href="#gettradedatahistory-gettradedatahistory"><span>getTradeDataHistory {#getTradeDataHistory}</span></a></h3>
<blockquote>
<p>获取<code v-pre>bpmn</code>交易历史数据</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>此方法仅支持<code v-pre>bpmn</code>类型交易，如果想在 auf 交易中使用: <code v-pre>getTradeDataHistory(this)</code>;<code v-pre>$getTradeData</code>方法<code v-pre>auf</code>以及<code v-pre>bpmn</code>均支持</li>
<li>除方法名称不一致，使用方式均一致</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>程序媛正在奋力兼容中...</p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// _context:用于兼容auf交易，传入当前vue中的this</span></span>
<span class="line"><span class="token comment">// 获取当前交易的历史数据</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span>_context<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> TradeDataHistory<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> tradeDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前交易历史数据'</span><span class="token punctuation">,</span> tradeDataHistory<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="gettradedata" tabindex="-1"><a class="header-anchor" href="#gettradedata"><span>$getTradeData</span></a></h3>
<blockquote>
<p>用于兼容 AB5 原有的使用,除方法名称不一致，使用方式均一致,详情参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#getTradeDataHistory">getTradeDataHistory</RouteLink></p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 获取当前交易的历史数据</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> TradeDataHistory<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> tradeDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'当前交易历史数据'</span><span class="token punctuation">,</span> tradeDataHistory<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="节点插入-节点插入" tabindex="-1"><a class="header-anchor" href="#节点插入-节点插入"><span>节点插入 {#节点插入}</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>仅支持节点，不支持步骤</li>
<li>仅支持<code v-pre>bpmn</code>类型</li>
</ol>
</div>
<blockquote>
<p>支持插入历史节点，用于<code v-pre>回放</code>、<code v-pre>还原</code></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>回放会略过插入的节点</p>
</div>
<ol>
<li>需要将插入的历史节点获取保留</li>
<li>需要将保留的历史节点插入</li>
</ol>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getNodeHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> nodeName <span class="token operator">=</span> <span class="token string">"证件/证件选择"</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> tradeDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一般是从数据库中读取</span></span>
<span class="line">    <span class="token keyword">let</span> nodeHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getNodeHistory</span><span class="token punctuation">(</span></span>
<span class="line">      nodeName<span class="token punctuation">,</span></span>
<span class="line">      tradeDataHistory</span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token function">insertHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertNodeHistory</span><span class="token punctuation">(</span></span>
<span class="line">      nodeName<span class="token punctuation">,</span> <span class="token comment">// 节点名称</span></span>
<span class="line">      nodeHistory<span class="token punctuation">,</span> <span class="token comment">// 节点历史</span></span>
<span class="line">      nodePosition <span class="token comment">// 节点位置</span></span>
<span class="line">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getnodehistory-getnodehistory" tabindex="-1"><a class="header-anchor" href="#getnodehistory-getnodehistory"><span>getNodeHistory {#getNodeHistory}</span></a></h3>
<blockquote>
<p>用于获取节点历史，可将节点历史保存</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">NodeName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 节点名称</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NodeHistory</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  flowHistory<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line">  uiDataHistory<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getNodeHistory</span><span class="token punctuation">(</span></span>
<span class="line">  nodeName<span class="token operator">:</span> NodeName<span class="token punctuation">,</span></span>
<span class="line">  tradeDataHistory<span class="token operator">?</span><span class="token operator">:</span> TradeDataHistory</span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> NodeHistory<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">getNodeHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> nodeName <span class="token operator">=</span> <span class="token string">"证件/证件选择"</span><span class="token punctuation">;</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> tradeDataHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeDataHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 一般是从数据库中读取</span></span>
<span class="line">    <span class="token keyword">let</span> nodeHistory <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getNodeHistory</span><span class="token punctuation">(</span>nodeName<span class="token punctuation">,</span> tradeDataHistory<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="insertnodehistory-insertnodehistory" tabindex="-1"><a class="header-anchor" href="#insertnodehistory-insertnodehistory"><span>insertNodeHistory {#insertNodeHistory}</span></a></h3>
<blockquote>
<p>将保留的节点历史插入</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">NodeName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 节点名称</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NodeHistory</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  flowHistory<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line">  uiDataHistory<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">NodePosition</span> <span class="token operator">=</span> <span class="token builtin">number</span><span class="token punctuation">;</span> <span class="token comment">// 节点插入的位置</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">insertNodeHistory</span><span class="token punctuation">(</span></span>
<span class="line">  nodeName<span class="token operator">:</span> NodeName<span class="token punctuation">,</span></span>
<span class="line">  nodeHistory<span class="token operator">:</span> NodeHistory<span class="token punctuation">,</span></span>
<span class="line">  nodePosition<span class="token operator">:</span> NodePosition</span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">insertHistory</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">insertNodeHistory</span><span class="token punctuation">(</span></span>
<span class="line highlighted">      nodeName<span class="token punctuation">,</span> <span class="token comment">// 节点名称</span></span>
<span class="line highlighted">      nodeHistory<span class="token punctuation">,</span> <span class="token comment">// 节点历史</span></span>
<span class="line highlighted">      nodePosition <span class="token comment">// 节点位置</span></span>
<span class="line highlighted">    <span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li><code v-pre>NodePosition</code>:代表节点要插入的位置，如节点应为流程中的第三个节点，那么<code v-pre>nodePosition = 3</code>, 不代表要插入到第三个节点的前/后</li>
</ol>
</div>
<h2 id="关键字监听-关键字监听" tabindex="-1"><a class="header-anchor" href="#关键字监听-关键字监听"><span>关键字监听 {#关键字监听}</span></a></h2>
<blockquote>
<p>支持通过 IDE 配置关键字监听，用于怜悯之心</p>
</blockquote>
<h2 id="回放-回放" tabindex="-1"><a class="header-anchor" href="#回放-回放"><span>回放 {#回放}</span></a></h2>
<p>支持鼠标右键选择回放的节点</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>回放的是节点，节点内的步骤属于同一个回放进程</p>
</div>
</div></template>


