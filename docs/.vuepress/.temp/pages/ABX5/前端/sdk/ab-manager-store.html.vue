<template><div><h1 id="ab-manager-store-数据管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-store-数据管理"><span>ab-manager-store@数据管理</span></a></h1>
<h2 id="_1-初始化-storemanager" tabindex="-1"><a class="header-anchor" href="#_1-初始化-storemanager"><span>1. 初始化 storeManager</span></a></h2>
<h3 id="_1-1-store-js-例" tabindex="-1"><a class="header-anchor" href="#_1-1-store-js-例"><span>1.1 <strong>store.js</strong>（例）</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">  <span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">currentTrade</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 打开的交易信息</span></span>
<span class="line">        <span class="token literal-property property">a</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">b</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">getCurrentTrade</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">.</span>currentTrade<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setCurrentTrade</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> tradeInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>currentTrade <span class="token operator">=</span> tradeInfo<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> store  <span class="token keyword">from</span> <span class="token string">'./store'</span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span>storeManager<span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-store'</span></span>
<span class="line">  storeManager<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-交易页面-操作使用方法" tabindex="-1"><a class="header-anchor" href="#_1-2-交易页面-操作使用方法"><span>1.2 <strong>交易页面</strong> 操作使用方法：</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span>storeManager<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-store"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//dispatch 操作主状态库</span></span>
<span class="line">  storeManager<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span>type<span class="token punctuation">,</span> name<span class="token punctuation">,</span> arg<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">//resetStates 重置 store 状态</span></span>
<span class="line">  storeManager<span class="token punctuation">.</span><span class="token function">resetStates</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>storeManager</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>事件名称</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>init</td>
<td style="text-align:center">初始化Store</td>
<td style="text-align:center">store:Vuex.store的实例</td>
</tr>
<tr>
<td>resetStates</td>
<td style="text-align:center">重置store状态</td>
<td style="text-align:center">不传参数: 重置所有store状态; <code v-pre>paths:string[]</code>: 如：<code v-pre>[&quot;a.b&quot;]</code></td>
</tr>
<tr>
<td>dispatch</td>
<td style="text-align:center">操作主状态库</td>
<td style="text-align:center">type, name, arg</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>dispatch Attributes</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>参数</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td style="text-align:center">操作状态的方法</td>
<td style="text-align:center"><code v-pre>string</code></td>
<td style="text-align:center"><code v-pre>states</code> | <code v-pre>getters</code> | <code v-pre>actions</code> | <code v-pre>mutations</code></td>
</tr>
<tr>
<td>name</td>
<td style="text-align:center">状态的key或操作方法的函数名</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>arg</td>
<td style="text-align:center">mutation/action操作的参数</td>
<td style="text-align:center">*</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<h2 id="_2-vuex-的缓存-state-插件" tabindex="-1"><a class="header-anchor" href="#_2-vuex-的缓存-state-插件"><span>2. vuex 的缓存 state 插件</span></a></h2>
<h3 id="_2-1-store-js-引入并使用" tabindex="-1"><a class="header-anchor" href="#_2-1-store-js-引入并使用"><span>2.1 <strong>store.js</strong> 引入并使用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line">  <span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line">  <span class="token keyword">import</span> persistedState <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-store'</span></span>
<span class="line">  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">state</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">currentTrade</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 打开的交易信息</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">getCurrentTrade</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> state<span class="token punctuation">.</span>currentTrade<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">setCurrentTrade</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> tradeInfo</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        state<span class="token punctuation">.</span>currentTrade <span class="token operator">=</span> tradeInfo<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token function">persistedState</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...options</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token keyword">export</span> <span class="token keyword">default</span> store<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>persistedState</strong> 参数</p>
</blockquote>
<table>
<thead>
<tr>
<th>参数</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>key?</td>
<td style="text-align:center">缓存的 KEY 值</td>
<td style="text-align:center">string</td>
<td style="text-align:center">默认:<code v-pre>persistedStates</code></td>
</tr>
<tr>
<td>paths?</td>
<td style="text-align:center">缓存的属性名</td>
<td style="text-align:center">Path[]</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>storage?</td>
<td style="text-align:center">缓存对象</td>
<td style="text-align:center">Storage</td>
<td style="text-align:center">默认:<code v-pre>sessionStorage</code></td>
</tr>
<tr>
<td>resetMutationType?</td>
<td style="text-align:center">重置方法</td>
<td style="text-align:center">string</td>
<td style="text-align:center">默认：<code v-pre>resetStates</code>,需要在 <code v-pre>mutations</code> 声明</td>
</tr>
<tr>
<td>getStateAft?</td>
<td style="text-align:center">获取缓存后公共处理方法</td>
<td style="text-align:center">(value: string) =&gt; any</td>
<td style="text-align:center">对数据进行解密操作或获取数据后的公共操作</td>
</tr>
<tr>
<td>setStatePre?</td>
<td style="text-align:center">设置缓存前公共处理方法</td>
<td style="text-align:center">(value: any) =&gt; string</td>
<td style="text-align:center">对数据进行加密操作或获取设置数据前的公共操作</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>Path</strong> <strong>Path[]</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>storage</strong>?</td>
<td>Storage</td>
<td>storage</td>
</tr>
<tr>
<td><strong>key</strong>?</td>
<td>string</td>
<td>key</td>
</tr>
<tr>
<td><strong>paths</strong></td>
<td>string[]</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>


