<template><div><h1 id="生命周期-生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期-生命周期"><span>生命周期 {#生命周期}</span></a></h1>
<p>一套符合全面、简洁、便于理解原则的生命周期定义规范</p>
<h2 id="规范原则-规范原则" tabindex="-1"><a class="header-anchor" href="#规范原则-规范原则"><span>规范原则 {#规范原则}</span></a></h2>
<blockquote>
<p>全面、简洁、便于理解、层次分明</p>
</blockquote>
<h2 id="规范定义范围-规范定义范围" tabindex="-1"><a class="header-anchor" href="#规范定义范围-规范定义范围"><span>规范定义范围 {#规范定义范围}</span></a></h2>
<blockquote>
<p>规范定义范围划分：画面级、交易级、全局级</p>
</blockquote>
<blockquote>
<p>规范作用于：画面、面板、交易</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">范围\ 概念</th>
<th style="text-align:center">page</th>
<th style="text-align:center">panel</th>
<th style="text-align:center">trade</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">画面级</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td style="text-align:center">交易级</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
<tr>
<td style="text-align:center">全局级</td>
<td style="text-align:center">❌</td>
<td style="text-align:center">✅</td>
<td style="text-align:center">✅</td>
</tr>
</tbody>
</table>
<h2 id="使用-使用" tabindex="-1"><a class="header-anchor" href="#使用-使用"><span>使用 {#使用}</span></a></h2>
<ul>
<li><strong>示例</strong></li>
</ul>
<blockquote>
<p><code v-pre>BPMN</code>示例交易</p>
</blockquote>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"在组件被挂载之前调用 - 画面级"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>abx-page</span> <span class="token attr-name">:getBeforeMountArgs</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>getBeforeMountArgs<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>abx-page</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line highlighted"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的模版：基础布局</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'基础布局 - 在组件被挂载之前调用 - 画面级'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>交易模版的使用参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E6%A8%A1%E7%89%88.html">模版</RouteLink></p>
</div>
<h2 id="画面-画面" tabindex="-1"><a class="header-anchor" href="#画面-画面"><span>画面 {#画面}</span></a></h2>
<blockquote>
<p>画面（frame、page）</p>
</blockquote>
<blockquote>
<p>组成面板或者交易的<code v-pre>.vue</code>均可被理解为<code v-pre>画面</code>，</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">number</th>
<th style="text-align:left">hookName</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">_onBeforeMount</td>
<td style="text-align:left">在组件被挂载之前调用，异步</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">_onMounted</td>
<td style="text-align:left">组件挂载完成后执行，异步</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">_onBeforeUnmount</td>
<td style="text-align:left">在组件实例被卸载之前调用，异步</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">_onUnmounted</td>
<td style="text-align:left">组件实例被卸载之后调用，异步</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">_onMessage</td>
<td style="text-align:left">消息接收函数</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left">_onBeforeUnmountTrade</td>
<td style="text-align:left">销毁交易前调用，可以取消销毁动作；统一交易结束与交易中止，均为交易销毁</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left">_onUnmountedTrade</td>
<td style="text-align:left">销毁交易后调用</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:left">_onActived</td>
<td style="text-align:left">组件被激活，挂载（auf 特有，keep-alive）</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:left">_onDeactived</td>
<td style="text-align:left">组件被卸载，进入缓存，DOM 被移除（auf 特有，keep-alive）</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:left">_onErrorCaptured</td>
<td style="text-align:left">错误处理函数</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:left">_onBeforeUnmountPanel</td>
<td style="text-align:left">销毁面板前调用,可以取消销毁动作</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:left">_onUnmountedPanel</td>
<td style="text-align:left">销毁面板后调用</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:left">_onShow</td>
<td style="text-align:left">交易是否显示</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:left">_onHide</td>
<td style="text-align:left">交易是否隐藏</td>
</tr>
</tbody>
</table>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>以上四种钩子函数在任意的<code v-pre>.vue</code>文件中都可使用</p>
<p>原理：全局混入</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如恰好当前<code v-pre>.vue</code>属于交易或者面板的画面，那么函数会有参数传入</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span></span>
<span class="line">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span>
<span class="line"></span>
<span class="line">export default {</span>
<span class="line">  methods: {</span>
<span class="line">    _onBeforeMount(e) {</span>
<span class="line">      console.log('在组件被挂载之前调用 - 画面级', e)</span>
<span class="line">    },</span>
<span class="line">    _onMounted() {</span>
<span class="line">      console.log('在组件被挂载之后调用 - 画面级')</span>
<span class="line">    },</span>
<span class="line">    _onBeforeUnmount() {</span>
<span class="line">      console.log('在组件实例被卸载之前调用 - 画面级')</span>
<span class="line">    },</span>
<span class="line">    _onUnmounted() {</span>
<span class="line">      console.log('在组件实例被卸载之后调用 - 画面级')</span>
<span class="line">    }</span>
<span class="line">  }</span>
<span class="line">}</span>
<span class="line">&lt;/></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>ILifecycleArgs</code>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%85%A5%E5%8F%82">钩子函数入参</RouteLink></p>
</div>
<h3 id="onbeforemount" tabindex="-1"><a class="header-anchor" href="#onbeforemount"><span>_onBeforeMount</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件被挂载之前调用 - 画面级'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = {}</li>
<li>BPMN 交易：e.detail = 服务端下发的页面消息，参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E6%9C%8D%E5%8A%A1%E7%AB%AF%E4%B8%8B%E5%8F%91%E7%9A%84%E4%BA%A4%E6%98%93%E6%B6%88%E6%81%AF%E7%BB%93%E6%9E%84">服务端下发的交易消息结构</RouteLink></li>
<li>AUF 交易：e.detail = {}</li>
<li>面板：e.detail = {}</li>
</ol>
</div>
<h3 id="onmounted" tabindex="-1"><a class="header-anchor" href="#onmounted"><span>_onMounted</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onMounted</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件被挂载之后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = {}</li>
<li>BPMN 交易：e.detail = {}</li>
<li>AUF 交易：e.detail = {}</li>
<li>面板：e.detail = {}</li>
</ol>
</div>
<h3 id="onbeforeunmount" tabindex="-1"><a class="header-anchor" href="#onbeforeunmount"><span>_onBeforeUnmount</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeUnmount</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件实例被卸载之前调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = {}</li>
<li>BPMN 交易：e.detail = {}</li>
<li>AUF 交易：e.detail = {}</li>
<li>面板：e.detail = {}</li>
</ol>
</div>
<h3 id="onunmounted" tabindex="-1"><a class="header-anchor" href="#onunmounted"><span>_onUnmounted</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onUnmounted</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件实例被卸载之后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = {}</li>
<li>BPMN 交易：e.detail = {}</li>
<li>AUF 交易：e.detail = {}</li>
<li>面板：e.detail = {}</li>
</ol>
</div>
<h3 id="onmessage-消息处理钩子函数" tabindex="-1"><a class="header-anchor" href="#onmessage-消息处理钩子函数"><span>_onMessage {#消息处理钩子函数}</span></a></h3>
<p>消息钩子函数，参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E6%B6%88%E6%81%AF%E4%BC%A0%E9%80%92.html#%E6%8E%A5%E6%94%B6%E6%B6%88%E6%81%AF">接收消息</RouteLink></p>
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
<h3 id="onbeforeunmounttrade-onbeforeunmounttrade" tabindex="-1"><a class="header-anchor" href="#onbeforeunmounttrade-onbeforeunmounttrade"><span>_onBeforeUnmountTrade {#onBeforeUnmountTrade}</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeUnmountTrade</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = <code v-pre>{tradeId:string; exitType: ExitType}</code></li>
<li>BPMN 交易：e.detail = <code v-pre>{tradeId:string; exitType: ExitType}</code></li>
<li>AUF 交易：e.detail = <code v-pre>{tradeId:string; exitType: ExitType}</code></li>
</ol>
</div>
<h3 id="onunmountedtrade" tabindex="-1"><a class="header-anchor" href="#onunmountedtrade"><span>_onUnmountedTrade</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onUnmountedTrade</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li>BPMN 交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li>AUF 交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li><code v-pre>e.detail.getExportVar()</code>用于获取交易出参，同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%87%BA%E5%8F%82">交易出参</RouteLink></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>关闭后钩子函数虽然可以在交易内的页面注册，但是执行时交易已经被销毁，所以此刻的<code v-pre>this</code>已经不再指向画面实例，而是<code v-pre>window</code>,如果想传递参数，请使用<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setTradeExportVar">setTradeExportVar</RouteLink></p>
</div>
<h3 id="onactived" tabindex="-1"><a class="header-anchor" href="#onactived"><span>_onActived</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>AUF</code>类型交易特有，仅在画面内生效</p>
</div>
<ul>
<li><strong>类型</strong></li>
<li><strong>示例</strong></li>
<li><strong>详细信息</strong></li>
</ul>
<h3 id="ondeactived" tabindex="-1"><a class="header-anchor" href="#ondeactived"><span>_onDeactived</span></a></h3>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>AUF</code>类型交易特有，仅在画面内生效</p>
</div>
<ul>
<li><strong>类型</strong></li>
<li><strong>示例</strong></li>
<li><strong>详细信息</strong></li>
</ul>
<h3 id="onerrorcaptured-错误处理钩子函数" tabindex="-1"><a class="header-anchor" href="#onerrorcaptured-错误处理钩子函数"><span>_onErrorCaptured {#错误处理钩子函数}</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">Error</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  details<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line">  message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span></span>
<span class="line">  err<span class="token operator">:</span> Error<span class="token punctuation">,</span></span>
<span class="line">  vm<span class="token operator">:</span> VueInstance<span class="token punctuation">,</span></span>
<span class="line">  info<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">  e<span class="token operator">:</span> ILifecycleArgs</span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'错误捕捉 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'错误捕捉 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'错误捕捉 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token comment">// this.$aui.alert.show() // 弹框提示错误</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onErrorCaptured</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
<li>错误捕捉指<code v-pre>流程类错误</code>，其他语法等错误不会被此函数捕捉到</li>
<li>弹框可以通过<code v-pre>this.$aui</code>获取到</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = <code v-pre>{tradeId:string}</code></li>
<li>BPMN 交易：e.detail = <code v-pre>{tradeId:string, args:SocketArgs}</code></li>
<li>AUF 交易：e.detail = <code v-pre>{tradeId:string}</code></li>
<li>面板：e.detail = <code v-pre>{tradeId:string}</code></li>
</ol>
</div>
<h3 id="onbeforeunmountpanel" tabindex="-1"><a class="header-anchor" href="#onbeforeunmountpanel"><span>_onBeforeUnmountPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// filePath:BankModule/面板/panel.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用 - 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeUnmountPanel</code>被分别注册在画面级、面板级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 面板级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>e.detail = <code v-pre>{panelId:string}</code></p>
</div>
<h3 id="onunmountedpanel" tabindex="-1"><a class="header-anchor" href="#onunmountedpanel"><span>_onUnmountedPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// filePath:BankModule/面板/panel.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">     <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板后调用 - 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onUnmountedPanel</code>被分别注册在画面级、面板级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 面板级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>e.detail = <code v-pre>{panelId:string, getExportVar: ()=&gt;any}</code></li>
<li><code v-pre>e.detail.getExportVar()</code>用于获取面板出参，同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E9%9D%A2%E6%9D%BF%E5%87%BA%E5%8F%82">面板出参</RouteLink></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>关闭后钩子函数虽然可以在面板内的页面注册，但是执行时面板已经被销毁，所以此刻的<code v-pre>this</code>已经不再指向画面实例，而是<code v-pre>window</code>,如果想传递参数，请使用<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setPanelExportVar">setPanelExportVar</RouteLink></p>
</div>
<h3 id="onshow-onshow" tabindex="-1"><a class="header-anchor" href="#onshow-onshow"><span>_onShow {#onShow}</span></a></h3>
<p><code v-pre>交易/面板</code>是否隐藏</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li><code v-pre>作用域为交易/面板</code>，<code v-pre>交易/面板</code>相互切换时会触发显示隐藏，<code v-pre>交易/面板</code>内的页面之间上一步下一步相互切换不会触发</li>
<li>面板内的使用方式同交易一致</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p><code v-pre>创建以及销毁</code> <code v-pre>交易/面板</code>时会触发一次<code v-pre>显示/隐藏</code></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onShow</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onShow</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易显示 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onShow</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易显示 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onShow</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易显示 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onShow</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>e.detail = <code v-pre>{tradeId:string}</code></li>
</ol>
</div>
<h3 id="onhide-onhide" tabindex="-1"><a class="header-anchor" href="#onhide-onhide"><span>_onHide {#onHide}</span></a></h3>
<p><code v-pre>交易/面板</code>是否隐藏</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li><code v-pre>作用域为交易/面板</code>，<code v-pre>交易/面板</code>相互切换时会触发显示隐藏，<code v-pre>交易/面板</code>内的页面之间上一步下一步相互切换不会触发</li>
<li>面板内的使用方式同交易一致</li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p><code v-pre>创建以及销毁</code> <code v-pre>交易/面板</code>时会触发一次<code v-pre>显示/隐藏</code></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onHide</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onHide</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易隐藏 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onHide</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易隐藏 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onHide</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易隐藏 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onShow</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>e.detail = <code v-pre>{tradeId:string}</code></li>
</ol>
</div>
<h2 id="面板-面板" tabindex="-1"><a class="header-anchor" href="#面板-面板"><span>面板 {#面板}</span></a></h2>
<blockquote>
<p>面板：属于交易的一部分，无法独立存在</p>
</blockquote>
<blockquote>
<p>和交易使用同一份数据</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">number</th>
<th style="text-align:left">hookName</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">_onBeforeMountPanel</td>
<td style="text-align:left">创建面板前调用</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">_onMountedPanel</td>
<td style="text-align:left">创建面板后调用</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">_onBeforeUnmountPanel</td>
<td style="text-align:left">销毁面板前调用</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">_onUnmountedPanel</td>
<td style="text-align:left">销毁面板后调用</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">_onErrorCaptured</td>
<td style="text-align:left">错误处理函数</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left">_onMessage</td>
<td style="text-align:left">消息接收函数</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left">_setDefaultClosing</td>
<td style="text-align:left">设置关闭提示</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:left">_onShow</td>
<td style="text-align:left">面板是否显示</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:left">_onHide</td>
<td style="text-align:left">面板是否隐藏</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:left">_setDefaultLoading</td>
<td style="text-align:left">设置加载面板默认页</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:left">_setSyncLoading</td>
<td style="text-align:left">设置交易内打开同步交易的遮照</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeMountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建面板前 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onMountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建面板后 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁面板前 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁面板后 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"错误处理函数 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"消息接收函数 - 面板级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onbeforemountpanel" tabindex="-1"><a class="header-anchor" href="#onbeforemountpanel"><span>_onBeforeMountPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeMountPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeMountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建面板前- 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeMountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建面板前 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeMountPanel</code>被分别注册在交易级、全局级，则会按照执行链<code v-pre>交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{panelId:string}</code></li>
</ol>
</div>
<h3 id="onmountedpanel" tabindex="-1"><a class="header-anchor" href="#onmountedpanel"><span>_onMountedPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onMountedPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onMountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建面板后- 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onMountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建面板后 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onMountedPanel</code>被分别注册在交易级、全局级，则会按照执行链<code v-pre>交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{panelId:string}</code></li>
</ol>
</div>
<h3 id="onbeforeunmountpanel-1" tabindex="-1"><a class="header-anchor" href="#onbeforeunmountpanel-1"><span>_onBeforeUnmountPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// panel.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用- 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板前调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeUnmountPanel</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{panelId:string}</code></li>
</ol>
</div>
<h3 id="onunmountedpanel-1" tabindex="-1"><a class="header-anchor" href="#onunmountedpanel-1"><span>_onUnmountedPanel</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// panel.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板后调用- 面板级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁面板后调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onUnmountedPanel</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{panelId:string, getExportVar: ()=&gt;any}</code></li>
<li><code v-pre>e.detail.getExportVar()</code>用于获取面板出参，同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E9%9D%A2%E6%9D%BF%E5%87%BA%E5%8F%82">面板出参</RouteLink></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>关闭后钩子函数虽然可以在面板内的页面注册，但是执行时面板已经被销毁，所以此刻的<code v-pre>this</code>已经不再指向画面实例，而是<code v-pre>window</code>,如果想传递参数，请使用<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setPanelExportVar">setPanelExportVar</RouteLink></p>
</div>
<h3 id="onerrorcaptured" tabindex="-1"><a class="header-anchor" href="#onerrorcaptured"><span>_onErrorCaptured</span></a></h3>
<p>错误捕捉函数</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">_onErrorCaptured</RouteLink></p>
</blockquote>
<h3 id="onmessage" tabindex="-1"><a class="header-anchor" href="#onmessage"><span>_onMessage</span></a></h3>
<p>消息处理函数</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E6%B6%88%E6%81%AF%E5%A4%84%E7%90%86%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">_onMessage</RouteLink></p>
</blockquote>
<h3 id="setdefaultclosing" tabindex="-1"><a class="header-anchor" href="#setdefaultclosing"><span>_setDefaultClosing</span></a></h3>
<p>设置关闭提示</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E8%AE%BE%E7%BD%AE%E5%85%B3%E9%97%AD%E6%8F%90%E7%A4%BA">_setDefaultClosing</RouteLink></p>
</blockquote>
<h3 id="onshow" tabindex="-1"><a class="header-anchor" href="#onshow"><span>_onShow</span></a></h3>
<p><code v-pre>交易/面板</code>是否显示</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onShow">_onShow</RouteLink></p>
</blockquote>
<h3 id="onhide" tabindex="-1"><a class="header-anchor" href="#onhide"><span>_onHide</span></a></h3>
<p><code v-pre>交易/面板</code>是否隐藏</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onHide">_onHide</RouteLink></p>
</blockquote>
<h3 id="setdefaultloading" tabindex="-1"><a class="header-anchor" href="#setdefaultloading"><span>_setDefaultLoading</span></a></h3>
<p>设置加载画面默认页</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#setDefaultLoading">_setDefaultLoading</RouteLink></p>
</blockquote>
<h3 id="setsyncloading" tabindex="-1"><a class="header-anchor" href="#setsyncloading"><span>_setSyncLoading</span></a></h3>
<p>设置交易内打开同步交易的遮照</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#setSyncLoading">_setSyncLoading</RouteLink></p>
</blockquote>
<h2 id="交易-交易" tabindex="-1"><a class="header-anchor" href="#交易-交易"><span>交易 {#交易}</span></a></h2>
<blockquote>
<p>在调用创建交易时定义</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">number</th>
<th style="text-align:left">hookName</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">_onBeforeMountTrade</td>
<td style="text-align:left">创建交易前调用</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">_onMountedTrade</td>
<td style="text-align:left">创建交易后调用</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">_onBeforeUnmountTrade</td>
<td style="text-align:left">销毁交易前调用</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">_onUnmountedTrade</td>
<td style="text-align:left">销毁交易后调用</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">_onErrorCaptured</td>
<td style="text-align:left">错误处理函数</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left">_onMessage</td>
<td style="text-align:left">消息接收函数</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left">_onShow</td>
<td style="text-align:left">交易被显示，例如页签的切换</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:left">_onHide</td>
<td style="text-align:left">交易被隐藏，例如页签的切换</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:left">_setDefaultClosing</td>
<td style="text-align:left">设置关闭提示</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:left">_setDefaultLoading</td>
<td style="text-align:left">设置加载画面默认页</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:left">_setSyncLoading</td>
<td style="text-align:left">设置交易内打开同步交易的遮照</td>
</tr>
</tbody>
</table>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建交易前 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建交易后 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁交易前 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁交易后 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"错误处理函数 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"消息接收函数 - 交易级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="onbeforemounttrade" tabindex="-1"><a class="header-anchor" href="#onbeforemounttrade"><span>_onBeforeMountTrade</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建交易前调用- 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建交易前调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeMountTrade</code>被分别注册在交易级、全局级，则会按照执行链<code v-pre>交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{tradeId:string}</code></li>
</ol>
</div>
<h3 id="onmountedtrade" tabindex="-1"><a class="header-anchor" href="#onmountedtrade"><span>_onMountedTrade</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建交易后调用- 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建交易后调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onMountedTrade</code>被分别注册在交易级、全局级，则会按照执行链<code v-pre>交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{tradeId:string}</code></li>
</ol>
</div>
<h3 id="onbeforeunmounttrade" tabindex="-1"><a class="header-anchor" href="#onbeforeunmounttrade"><span>_onBeforeUnmountTrade</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用- 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易前调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onBeforeUnmountTrade</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>面板：e.detail = <code v-pre>{tradeId:string; exitType: ExitType}</code></li>
</ol>
</div>
<h3 id="onunmountedtrade-1" tabindex="-1"><a class="header-anchor" href="#onunmountedtrade-1"><span>_onUnmountedTrade</span></a></h3>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 画面级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用- 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'销毁交易后调用 - 全局级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易出参'</span><span class="token punctuation">,</span> tradeExportVar<span class="token punctuation">)</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>上述示例中，<code v-pre>_onUnmountedTrade</code>被分别注册在画面级、交易级、全局级，则会按照执行链<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>调用</li>
<li>入参<code v-pre>e.detail</code>的结构根据不同类型的交易，结构有所不同</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>单画面交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li>BPMN 交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li>AUF 交易：e.detail = <code v-pre>{tradeId:string, getExportVar: ()=&gt;any}</code></li>
<li>面板：e.detail = <code v-pre>{panelId:string, getExportVar: ()=&gt;any}</code></li>
<li><code v-pre>e.detail.getExportVar()</code>用于获取交易出参，同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%87%BA%E5%8F%82">交易出参</RouteLink></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>关闭后钩子函数虽然可以在交易内的页面注册，但是执行时交易已经被销毁，所以此刻的<code v-pre>this</code>已经不再指向画面实例，而是<code v-pre>window</code>,如果想传递参数，请使用<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setTradeExportVar">setTradeExportVar</RouteLink></p>
</div>
<h3 id="onerrorcaptured-1" tabindex="-1"><a class="header-anchor" href="#onerrorcaptured-1"><span>_onErrorCaptured</span></a></h3>
<p>错误捕捉函数</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">_onErrorCaptured</RouteLink></p>
</blockquote>
<h3 id="onmessage-1" tabindex="-1"><a class="header-anchor" href="#onmessage-1"><span>_onMessage</span></a></h3>
<p>消息处理函数</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E6%B6%88%E6%81%AF%E5%A4%84%E7%90%86%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">_onMessage</RouteLink></p>
</blockquote>
<h3 id="setdefaultclosing-设置关闭提示" tabindex="-1"><a class="header-anchor" href="#setdefaultclosing-设置关闭提示"><span>_setDefaultClosing {#设置关闭提示}</span></a></h3>
<p>设置关闭提示</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>此方法可以自定义关闭提示、选择开启或关闭提示</p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> DialogResult <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">CANCEL</span><span class="token punctuation">,</span> <span class="token comment">// 取消</span></span>
<span class="line">  <span class="token constant">CONFIRM</span><span class="token punctuation">,</span> <span class="token comment">// 确认</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">IClosingResult</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> DialogResult</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_setDefaultClosing</span><span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span><span class="token operator">:</span> IClosingResult</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">_onMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDefaultClosing</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line highlighted">         <span class="token comment">// return false // 取消默认关闭提示</span></span>
<span class="line highlighted">         <span class="token comment">// return true // 开启默认关闭提示</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">         <span class="token comment">// 自定义关闭提示</span></span>
<span class="line highlighted">         <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'finish'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token comment">// 交易完成提示信息</span></span>
<span class="line highlighted">         <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'pending'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token comment">// 交易挂起提示信息</span></span>
<span class="line highlighted">         <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token comment">// 交易中途退出提示信息</span></span>
<span class="line highlighted">         <span class="token punctuation">}</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">         <span class="token comment">// return e.DialogResult.CANCEL // 取消关闭动作</span></span>
<span class="line highlighted">         <span class="token keyword">return</span> e<span class="token punctuation">.</span>DialogResult<span class="token punctuation">.</span><span class="token constant">CONFIRM</span> <span class="token comment">// 关闭</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_setDefaultClosing</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token comment">// return false // 取消默认关闭提示</span></span>
<span class="line highlighted">      <span class="token comment">// return true // 开启默认关闭提示</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// 自定义关闭提示</span></span>
<span class="line highlighted">      <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'finish'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易完成提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'pending'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易挂起提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易中途退出提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// return e.DialogResult.CANCEL // 取消关闭动作</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> e<span class="token punctuation">.</span>DialogResult<span class="token punctuation">.</span><span class="token constant">CONFIRM</span> <span class="token comment">// 关闭</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">   <span class="token function">_setDefaultClosing</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token comment">// return false // 取消默认关闭提示</span></span>
<span class="line highlighted">      <span class="token comment">// return true // 开启默认关闭提示</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// 自定义关闭提示</span></span>
<span class="line highlighted">      <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'finish'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易完成提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType <span class="token operator">===</span> <span class="token string">'pending'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易挂起提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// 交易中途退出提示信息</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// return e.DialogResult.CANCEL // 取消关闭动作</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> e<span class="token punctuation">.</span>DialogResult<span class="token punctuation">.</span><span class="token constant">CONFIRM</span> <span class="token comment">// 关闭</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>默认禁用关闭提示</li>
<li>返回值有两种：<code v-pre>boolean</code>则代表开启或禁用关闭提示；<code v-pre>DialogResult</code>代表自定义关闭提示后，需要明确用户的操作结果</li>
<li>如果在<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>均设置，仅优先执行最后注册的，即执行优先级最高的，其余均忽略</li>
<li>可根据<code v-pre>e.detail.exitType</code>获取交易退出类型，做不同提示信息处理</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">优先级</p>
<p>从高到低： <code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code></p>
<p>执行优先级最高的，其余均忽略</p>
</div>
<h3 id="onshow-1" tabindex="-1"><a class="header-anchor" href="#onshow-1"><span>_onShow</span></a></h3>
<p><code v-pre>交易/面板</code>是否显示</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onShow">_onShow</RouteLink></p>
</blockquote>
<h3 id="onhide-1" tabindex="-1"><a class="header-anchor" href="#onhide-1"><span>_onHide</span></a></h3>
<p><code v-pre>交易/面板</code>是否隐藏</p>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onHide">_onHide</RouteLink></p>
</blockquote>
<h3 id="setdefaultloading-setdefaultloading" tabindex="-1"><a class="header-anchor" href="#setdefaultloading-setdefaultloading"><span>_setDefaultLoading {#setDefaultLoading}</span></a></h3>
<blockquote>
<p>设置加载画面默认页</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>支持<code v-pre>bpmn</code>、<code v-pre>单画面</code>、<code v-pre>面板</code></p>
<p><code v-pre>auf</code>通过<code v-pre>AufPanel</code>设置</p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">DefaultLoadingPagePath</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_setDefaultLoading</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DefaultLoadingPagePath<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_setDefaultLoading</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> <span class="token string">"BankModule/pages/common/DefaultLoadingPage"</span></span>
<span class="line highlighted">      <span class="token comment">// return false // 表示去掉默认页</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">   <span class="token function">_setDefaultLoading</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> <span class="token string">"BankModule/pages/common/DefaultLoadingPage"</span></span>
<span class="line highlighted">      <span class="token comment">// return false // 表示去掉默认页</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<ol>
<li>此函数归属于<code v-pre>交易/面板</code>级别，<code v-pre>无法在画面内设置</code></li>
<li>平台默认带有默认页</li>
<li>如果在<code v-pre>交易级 -&gt; 全局级</code>均设置，仅优先执行最后注册的，即执行优先级最高的，其余均忽略</li>
<li>如果返回值为<code v-pre>false</code>代表去掉平台默认的加载页</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">优先级</p>
<p>从高到低： <code v-pre>交易级 -&gt; 全局级</code></p>
<p>执行优先级最高的，其余均忽略</p>
</div>
<ul>
<li><strong>平台默认效果图</strong>
<img src="@source/ABX5/前端/深入平台/img/默认加载页.jpg" alt="平台默认页效果图" title="平台默认页效果图"></li>
</ul>
<h3 id="setsyncloading-setsyncloading" tabindex="-1"><a class="header-anchor" href="#setsyncloading-setsyncloading"><span>_setSyncLoading {#setSyncLoading}</span></a></h3>
<blockquote>
<p>设置交易内打开同步交易的遮照</p>
</blockquote>
<div class="hint-container warning">
<p class="hint-container-title">适用场景</p>
<ol>
<li>支持<code v-pre>bpmn</code>、<code v-pre>auf</code>、<code v-pre>单画面</code>、<code v-pre>面板</code></li>
<li>此遮照仅在打开的容器类型为<code v-pre>tab</code>时生效，如果是<code v-pre>dialog</code>类型则不会有作用</li>
<li>交易内打开同步交易<code v-pre>tab</code>、交易内打开同步面板<code v-pre>tab</code>、面板内同步打开交易<code v-pre>tab</code>、面板内同步打开面板<code v-pre>tab</code></li>
</ol>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">TargetId</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 遮照需要挂载的domId</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">SubTabOfId</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 同步打开的tab所属的id</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">GetSubTabOfId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> SubTabOfId<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">SyncLoading</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 隐藏遮照</span></span>
<span class="line">  <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 显示遮照</span></span>
<span class="line">  <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 销毁遮照</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">SyncLoadingResult</span> <span class="token operator">=</span> SyncLoading <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">_setSyncLoading</span><span class="token punctuation">(</span></span>
<span class="line">  targetId<span class="token operator">:</span> TargetId<span class="token punctuation">,</span></span>
<span class="line">  getSubTabOfId<span class="token operator">:</span> GetSubTabOfId<span class="token punctuation">,</span></span>
<span class="line">  e<span class="token operator">:</span> ILifecycleArgs</span>
<span class="line"><span class="token punctuation">)</span><span class="token operator">:</span> SyncLoadingResult<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_setSyncLoading</span><span class="token punctuation">(</span>targetId<span class="token punctuation">,</span> getSubTabOfId<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">       <span class="token keyword">let</span> syncLoading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$aui<span class="token punctuation">.</span>loading<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        component<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$createElement</span><span class="token punctuation">(</span></span>
<span class="line highlighted">          <span class="token string">"aui-button"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token punctuation">{</span></span>
<span class="line highlighted">            on<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">              <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"跳转"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">switchTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tradeId<span class="token operator">:</span> <span class="token function">getSubTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line highlighted">              <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span></span>
<span class="line highlighted">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token string">"跳转"</span></span>
<span class="line highlighted">        <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        target<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>targetId<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        background<span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.7)'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// 表示采用自定义的遮照</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          syncLoading<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        close<span class="token operator">:</span> syncLoading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>syncLoading<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          syncLoading<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// return false // 表示去掉平台默认的遮照</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">   <span class="token function">_setDefaultLoading</span><span class="token punctuation">(</span>targetId<span class="token punctuation">,</span> getSubTabOfId<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">     <span class="token keyword">let</span> syncLoading <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$aui<span class="token punctuation">.</span>loading<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        component<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$createElement</span><span class="token punctuation">(</span></span>
<span class="line highlighted">          <span class="token string">"aui-button"</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token punctuation">{</span></span>
<span class="line highlighted">            on<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">              <span class="token function-variable function">click</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">                <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"跳转"</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">switchTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span> tradeId<span class="token operator">:</span> <span class="token function">getSubTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line highlighted">              <span class="token punctuation">}</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span></span>
<span class="line highlighted">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">          <span class="token string">"跳转"</span></span>
<span class="line highlighted">        <span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        target<span class="token operator">:</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span>targetId<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        background<span class="token operator">:</span> <span class="token string">'rgba(0, 0, 0, 0.7)'</span><span class="token punctuation">,</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// 表示采用自定义的遮照</span></span>
<span class="line highlighted">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          syncLoading<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">false</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        close<span class="token operator">:</span> syncLoading<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">.</span><span class="token function">bind</span><span class="token punctuation">(</span>syncLoading<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          syncLoading<span class="token punctuation">.</span>visible <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token comment">// return false // 表示去掉平台默认的遮照</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<ol>
<li>此函数归属于<code v-pre>交易/面板</code>级别，<code v-pre>无法在画面内设置</code></li>
<li>平台默认带有默认遮照</li>
<li>如果在<code v-pre>交易级 -&gt; 全局级</code>均设置，仅优先执行最后注册的，即执行优先级最高的，其余均忽略</li>
<li>如果返回值为<code v-pre>false</code>代表去掉平台默认的遮照</li>
<li>如果返回值为<code v-pre>true|undefined</code>代表使用平台默认的遮照</li>
<li>如果返回值为<code v-pre>SyncLoading</code>代表自定义，自定义请符合规范</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">优先级</p>
<p>从高到低： <code v-pre>交易级 -&gt; 全局级</code></p>
<p>执行优先级最高的，其余均忽略</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<ol>
<li>如果返回值为<code v-pre>SyncLoading</code>代表自定义，自定义请符合规范</li>
<li><code v-pre>show/hide</code>仅作用在视觉上，<code v-pre>close</code>在销毁交易时调用代表真实销毁</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">SyncLoading</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">hide</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 隐藏遮照</span></span>
<span class="line">  <span class="token function-variable function">show</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 显示遮照</span></span>
<span class="line">  <span class="token function-variable function">close</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">;</span> <span class="token comment">// 销毁遮照</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<ul>
<li><strong>平台默认效果图</strong>
<img src="@source/ABX5/前端/深入平台/img/平台默认遮照效果图.jpg" alt="平台默认遮照效果图" title="平台默认遮照效果图"></li>
</ul>
<h2 id="画面级-画面级" tabindex="-1"><a class="header-anchor" href="#画面级-画面级"><span>画面级 {#画面级}</span></a></h2>
<blockquote>
<p>一般指组成交易或者面板的<code v-pre>.vue</code></p>
</blockquote>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">   <span class="token keyword">async</span>  <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>示例中的文件<code v-pre>BankModule/个人开卡/开卡 的一个画面：卡种选择</code>就是<code v-pre>画面</code></p>
</div>
<h2 id="退出类型-退出类型" tabindex="-1"><a class="header-anchor" href="#退出类型-退出类型"><span>退出类型 {#退出类型}</span></a></h2>
<blockquote>
<p>退出交易的方式：中止/完成</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ExitType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  Abort <span class="token operator">=</span> <span class="token string">'abort'</span> <span class="token comment">// 中止退出</span></span>
<span class="line">  Finish <span class="token operator">=</span> <span class="token string">'finish'</span> <span class="token comment">// 完成退出</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交易级-交易级" tabindex="-1"><a class="header-anchor" href="#交易级-交易级"><span>交易级 {#交易级}</span></a></h2>
<blockquote>
<p>一般在创建交易时使用钩子函数</p>
</blockquote>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line highlighted">  hooks<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'创建交易前 - 交易级'</span><span class="token punctuation">)</span></span>
<span class="line highlighted">    <span class="token punctuation">}</span></span>
<span class="line highlighted">    <span class="token comment">// ...</span></span>
<span class="line highlighted">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>上述示例中，在创建交易时传入的钩子函数，就是<code v-pre>交易级</code></p>
</div>
<h2 id="全局级-全局级" tabindex="-1"><a class="header-anchor" href="#全局级-全局级"><span>全局级 {#全局级}</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>全局级的钩子函数请定义在<code v-pre>moduleName/pages/index.[js|ts]</code>内</p>
</div>
<blockquote>
<p>具体使用参考<a href="./%E5%85%A8%E5%B1%80%E5%87%BD%E6%95%B0%E5%AE%9A%E4%B9%89%E8%A7%84%E8%8C%83">全局函数定义规范</a></p>
</blockquote>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// filePath = 'BankModule/pages/index.ts'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建交易前 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"创建交易后 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁交易前 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"销毁交易后 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"错误处理函数 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"消息接收函数 - 全局级"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="钩子函数入参" tabindex="-1"><a class="header-anchor" href="#钩子函数入参"><span>钩子函数入参</span></a></h2>
<blockquote>
<p>部分钩子函数会有参数，用于创建交易或者面板时使用，其他场景下参数为空</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ILifecycleArgs</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span>stop<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">captured</span><span class="token operator">:</span> <span class="token punctuation">(</span>captured<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line">  detail<span class="token operator">:</span> IArguments<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="detail" tabindex="-1"><a class="header-anchor" href="#detail"><span>detail</span></a></h3>
<p>数据主体</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">detail</span> <span class="token operator">=</span> IArguments<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><code v-pre>IArguments</code>具体结构请参考对应的钩子函数的<code v-pre>详细信息</code></p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件被挂载之前调用 - 画面级'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> detail <span class="token operator">=</span> e<span class="token punctuation">.</span>detail</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>数据主体</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>不同级别的钩子函数的参数不一致，请具体查看</p>
</div>
<h3 id="captured" tabindex="-1"><a class="header-anchor" href="#captured"><span>captured</span></a></h3>
<p>改变钩子函数的执行阶段</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function-variable function">captured</span><span class="token operator">:</span> <span class="token punctuation">(</span>captured<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token keyword">void</span><span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">async</span>  <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件被挂载之前调用 - 画面级'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token keyword">await</span> e<span class="token punctuation">.</span><span class="token function">captured</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>钩子函数执行阶段分为：阶段一冒泡，阶段二捕获，改变执行阶段即指将阶段一的函数放到阶段二执行</li>
<li>需要<code v-pre>await</code></li>
</ol>
</li>
</ul>
<h3 id="stop" tabindex="-1"><a class="header-anchor" href="#stop"><span>stop</span></a></h3>
<pre><code>阻止后钩子函数执行
</code></pre>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function-variable function">stop</span><span class="token operator">:</span> <span class="token punctuation">(</span>stop<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// TradeType: BPMN、BankModule/个人开卡/开卡 的一个画面：卡种选择</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">   <span class="token keyword">async</span>  <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'在组件被挂载之前调用 - 画面级'</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line highlighted">      e<span class="token punctuation">.</span><span class="token function">stop</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>阻止后续钩子函数执行</li>
<li><code v-pre>captured</code>阶段的也会取消执行</li>
</ol>
</li>
</ul>
<h2 id="钩子函数出参-钩子函数出参" tabindex="-1"><a class="header-anchor" href="#钩子函数出参-钩子函数出参"><span>钩子函数出参 {#钩子函数出参}</span></a></h2>
<blockquote>
<p>钩子函数无出参</p>
</blockquote>
<h2 id="执行阶段" tabindex="-1"><a class="header-anchor" href="#执行阶段"><span>执行阶段</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<blockquote>
<p>钩子函数的调用为一条链式调用，注册在链上的同一钩子函数会按照某种执行顺序调用</p>
</blockquote>
</div>
<blockquote>
<p>通过<code v-pre>stop</code>以及<code v-pre>captured</code>可以改变原有的执行顺序以及执行阶段</p>
</blockquote>
<blockquote>
<p>钩子函数的执行阶段分为:<code v-pre>阶段一（冒泡）</code>,<code v-pre>阶段二（捕获）</code></p>
</blockquote>
<blockquote>
<p>如若不添加干扰，则同一钩子函数的调用链按照默认的执行顺序在阶段一执行</p>
</blockquote>
<p>
  <img src="@source/ABX5/前端/深入平台/img/生命周期/执行阶段.jpg" alt="vitepress init screenshot" style="border-radius:8px">
</p>
<h2 id="执行顺序-执行顺序" tabindex="-1"><a class="header-anchor" href="#执行顺序-执行顺序"><span>执行顺序 {#执行顺序}</span></a></h2>
<blockquote>
<p>执行顺序分为三种：顺序，逆序，中止</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>通过<code v-pre>stop</code>可以中断执行链</li>
<li>通过<code v-pre>captured</code>可以改变执行阶段从而实现改变执行顺序</li>
</ol>
</div>
<blockquote>
<p>生命周期函数分为两种：一种是固定执行顺序无法更改，一种是执行顺序可以更改</p>
</blockquote>
<h3 id="无法修改执行顺序的钩子函数" tabindex="-1"><a class="header-anchor" href="#无法修改执行顺序的钩子函数"><span>无法修改执行顺序的钩子函数</span></a></h3>
<blockquote>
<p>均为画面内的钩子函数</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">number</th>
<th style="text-align:left">hookName</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">_onBeforeMount</td>
<td style="text-align:left">在组件被挂载之前调用，异步</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">_onMounted</td>
<td style="text-align:left">组件挂载完成后执行，异步</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">_onBeforeUnmount</td>
<td style="text-align:left">在组件实例被卸载之前调用，异步</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">_onUnmounted</td>
<td style="text-align:left">组件实例被卸载之后调用，异步</td>
</tr>
</tbody>
</table>
<h3 id="可以更改执行顺序的钩子函数" tabindex="-1"><a class="header-anchor" href="#可以更改执行顺序的钩子函数"><span>可以更改执行顺序的钩子函数</span></a></h3>
<blockquote>
<ol>
<li>画面: _onErrorCaptured、_onMessage、_onBeforeUnmountTrade</li>
<li>面板: _onBeforeMountPanel、_onMountedPanel、_onBeforeUnmountPanel、_onUnmountedPanel、_onErrorCaptured、_onMessage</li>
<li>交易: _onBeforeMountTrade、_onMountedTrade、_onBeforeUnmountTrade、_onUnmountedTrade、_onErrorCaptured、_onMessage</li>
</ol>
</blockquote>
<h3 id="创建顺序" tabindex="-1"><a class="header-anchor" href="#创建顺序"><span>创建顺序</span></a></h3>
<blockquote>
<p>创建交易前 -&gt; 创建画面前 -&gt; 创建画面后 -&gt; 创建交易后</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>创建交易前/创建交易后：交易级、全局级</p>
<p>执行顺序有可能从内到外或者从外到内，可能被阻止也可能不被阻止</p>
</div>
<h3 id="销毁顺序" tabindex="-1"><a class="header-anchor" href="#销毁顺序"><span>销毁顺序</span></a></h3>
<blockquote>
<p>销毁交易易前 -&gt; 销毁页面前-&gt; 销毁页面后 -&gt; 销毁交易后</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>销毁交易前/销毁交易后：画面级、交易级、全局级</p>
<p>执行顺序有可能从内到外或者从外到内，可能被阻止也可能不被阻止</p>
</div>
<h3 id="执行链过程中出现异常" tabindex="-1"><a class="header-anchor" href="#执行链过程中出现异常"><span>执行链过程中出现异常</span></a></h3>
<blockquote>
<p>执行过程中暴露的钩子函数如果报错，则将错误记录下来，<code v-pre>不可中断执行链</code></p>
</blockquote>
<h2 id="服务端下发的交易消息结构-服务端下发的交易消息结构" tabindex="-1"><a class="header-anchor" href="#服务端下发的交易消息结构-服务端下发的交易消息结构"><span>服务端下发的交易消息结构 {#服务端下发的交易消息结构}</span></a></h2>
<blockquote>
<p><code v-pre>BPMN</code>交易每个页面的信息由服务端通过<code v-pre>socket</code>方式下发</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"isPageInsideMsg"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否是页面内的消息</span></span>
<span class="line">  <span class="token property">"data"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"router"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 当前步骤信息</span></span>
<span class="line">      <span class="token property">"commitTerminal"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token comment">// 提交端</span></span>
<span class="line">      <span class="token property">"processTerminal"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span> <span class="token comment">// 处理端</span></span>
<span class="line">      <span class="token property">"resetFlag"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否允许重置</span></span>
<span class="line">      <span class="token property">"skipFlag"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否略过</span></span>
<span class="line">      <span class="token property">"stepKey"</span><span class="token operator">:</span> <span class="token string">"获取身份证信息"</span><span class="token punctuation">,</span> <span class="token comment">// 当前步骤id</span></span>
<span class="line">      <span class="token property">"stepName"</span><span class="token operator">:</span> <span class="token string">"获取身份证信息"</span> <span class="token comment">// 当前步骤名</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"meta"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"branchNum"</span><span class="token operator">:</span> <span class="token string">"0000"</span><span class="token punctuation">,</span> <span class="token comment">// 机构号</span></span>
<span class="line">      <span class="token property">"checkOidFlag"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 是否检测oid</span></span>
<span class="line">      <span class="token property">"currentDefinitionKey"</span><span class="token operator">:</span> <span class="token string">"BankModule:scene/云柜交易/个人业务/测试交易"</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易名</span></span>
<span class="line">      <span class="token property">"end"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易是否结束</span></span>
<span class="line">      <span class="token property">"jumpFlag"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否允许回跳</span></span>
<span class="line">      <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span> <span class="token comment">// 所属工程名</span></span>
<span class="line">      <span class="token comment">// 下一步骤信息</span></span>
<span class="line">      <span class="token property">"nextStep"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"commitTerminal"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"processTerminal"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"resetFlag"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"skipFlag"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"stepKey"</span><span class="token operator">:</span> <span class="token string">"获取身份证信息"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"stepName"</span><span class="token operator">:</span> <span class="token string">"获取身份证信息"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"retryStepFlag"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否重试</span></span>
<span class="line">      <span class="token property">"sessionID"</span><span class="token operator">:</span> <span class="token string">"21effa7b-259e-4431-b883-6f162ad0c3a2"</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易sessionid</span></span>
<span class="line">      <span class="token property">"stepKey"</span><span class="token operator">:</span> <span class="token string">"获取身份证信息"</span><span class="token punctuation">,</span> <span class="token comment">// 当前步骤id</span></span>
<span class="line">      <span class="token property">"taskId"</span><span class="token operator">:</span> <span class="token string">"15"</span><span class="token punctuation">,</span> <span class="token comment">// 当前步骤taskid</span></span>
<span class="line">      <span class="token property">"taskKey"</span><span class="token operator">:</span> <span class="token string">"BankModule:scene/云柜交易/个人业务/测试交易/测试节点1"</span><span class="token punctuation">,</span> <span class="token comment">// 当前二级流程节点id</span></span>
<span class="line">      <span class="token property">"tradeMember"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">""</span><span class="token operator">:</span> <span class="token string">"A"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易成员</span></span>
<span class="line">      <span class="token property">"tradeName"</span><span class="token operator">:</span> <span class="token string">"scene/云柜交易/个人业务/测试交易"</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易名</span></span>
<span class="line">      <span class="token property">"tradeTitle"</span><span class="token operator">:</span> <span class="token string">"云柜交易/个人业务/测试交易"</span><span class="token punctuation">,</span> <span class="token comment">// 标题</span></span>
<span class="line">      <span class="token property">"userNum"</span><span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span> <span class="token comment">// 柜员号</span></span>
<span class="line">      <span class="token property">"variableJson"</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token comment">// 流程数据</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"context"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span> <span class="token comment">// 交易adm</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"scope"</span><span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span> <span class="token comment">// 分发类型</span></span>
<span class="line">  <span class="token comment">// 未来步骤数据</span></span>
<span class="line">  <span class="token property">"pathInfoList"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"pathTaskKey"</span><span class="token operator">:</span> <span class="token string">"测试节点1"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"pathTaskName"</span><span class="token operator">:</span> <span class="token string">"测试节点1"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"pathTaskKey"</span><span class="token operator">:</span> <span class="token string">"测试节点2"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"pathTaskName"</span><span class="token operator">:</span> <span class="token string">"测试节点2"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"aaseMessageId"</span><span class="token operator">:</span> <span class="token string">"57eed2f7-5340-4841-b478-8d69bc003842"</span><span class="token punctuation">,</span> <span class="token comment">// messageId</span></span>
<span class="line">  <span class="token property">"reqUniqueId"</span><span class="token operator">:</span> <span class="token string">"parcel-2"</span><span class="token punctuation">,</span> <span class="token comment">// 当前请求的唯一id</span></span>
<span class="line">  <span class="token property">"cellUnit"</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 消息类型，区分abx和ab5</span></span>
<span class="line">  <span class="token property">"id"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 注册id</span></span>
<span class="line">  <span class="token comment">// 推送消息是否成功信息</span></span>
<span class="line">  <span class="token property">"sessionErrorInfo"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"errorHandleWay"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"退出"</span><span class="token operator">:</span> <span class="token string">"/exitProcess"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"errorCode"</span><span class="token operator">:</span> <span class="token string">"0000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"errorMsg"</span><span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"isSuccess"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"wspush"</span> <span class="token comment">// 推送消息类型</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


