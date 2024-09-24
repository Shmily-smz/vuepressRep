<template><div><h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2>
<p>目前组件库和SDK都是基于Vue 2进行开发和适配的，项目中也都是使用的Vue 2，配套的是Vuex 3，Vue 3配套的是Vuex 4，而Pinia是既可以在Vue 2也可以在Vue 3中使用。
<img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/1.png" alt="vuex-and-pinin-support">
本文将说明 Pinia 与 Vuex 的功能点对比。</p>
<h2 id="功能点对比列举" tabindex="-1"><a class="header-anchor" href="#功能点对比列举"><span>功能点对比列举</span></a></h2>
<p>打开 Pinia 文档，首先便是下图中的6大特点：</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/2.png" alt="pinia-feature-en"></p>
<p>下面根据图中6点及其他8个功能点，共计14个功能点对 Pinia 和 Vuex 进行对比，后面会针对每个功能点进行详细介绍。</p>
<table>
<thead>
<tr>
<th style="text-align:left">功能点</th>
<th style="text-align:right">Pinia 2 (2.0.17)</th>
<th style="text-align:right">Vuex 3 (3.6.2)</th>
<th style="text-align:right">Vuex 4 (4.0.2)</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">体积</td>
<td style="text-align:right">29kb</td>
<td style="text-align:right">37kb/13kb</td>
<td style="text-align:right">43kb</td>
</tr>
<tr>
<td style="text-align:left">store编写</td>
<td style="text-align:right">更直观</td>
<td style="text-align:right">较直观</td>
<td style="text-align:right">较直观</td>
</tr>
<tr>
<td style="text-align:left">可扩展</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">模块化设计</td>
<td style="text-align:right">有</td>
<td style="text-align:right">无</td>
<td style="text-align:right">无</td>
</tr>
<tr>
<td style="text-align:left">DevTools</td>
<td style="text-align:right">有</td>
<td style="text-align:right">无</td>
<td style="text-align:right">无</td>
</tr>
<tr>
<td style="text-align:left">类型安全</td>
<td style="text-align:right">是</td>
<td style="text-align:right">否</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">States</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
</tr>
<tr>
<td style="text-align:left">Getters</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
</tr>
<tr>
<td style="text-align:left">Mutations</td>
<td style="text-align:right">无</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
</tr>
<tr>
<td style="text-align:left">Actions</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
</tr>
<tr>
<td style="text-align:left">Modules</td>
<td style="text-align:right">无</td>
<td style="text-align:right">有</td>
<td style="text-align:right">有</td>
</tr>
<tr>
<td style="text-align:left">Composition API 支持</td>
<td style="text-align:right">是</td>
<td style="text-align:right">否</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">TypeScript 支持</td>
<td style="text-align:right">是</td>
<td style="text-align:right">否</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">热更新支持</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">插件支持</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
<td style="text-align:right">是</td>
</tr>
<tr>
<td style="text-align:left">服务端渲染</td>
<td style="text-align:right">有</td>
<td style="text-align:right">无</td>
<td style="text-align:right">无</td>
</tr>
</tbody>
</table>
<h3 id="体积" tabindex="-1"><a class="header-anchor" href="#体积"><span>体积</span></a></h3>
<blockquote>
<p>Pinia weighs around 1kb, you will forget it's even there!</p>
</blockquote>
<p>官网号称 Pinia 的体积只有<code v-pre>1kb</code>，实际安装的包如上表中，整体压缩后的体积为<code v-pre>29kb</code>。由于<code v-pre>Tree-Shaking</code>的存在，可能在只使用核心较少功能时，打包后的体积会达到<code v-pre>1kb</code>；由此推算，在同样的项目中，Vuex 在打包后的体积可能不到<code v-pre>10kb</code>甚至<code v-pre>5kb</code>，在没有极致要求的情况下，影响可忽略。</p>
<h3 id="store编写" tabindex="-1"><a class="header-anchor" href="#store编写"><span>store编写</span></a></h3>
<blockquote>
<p>Stores are as familiar as components. API designed to let you write well organized stores.</p>
</blockquote>
<p>Pinia 中的store写法与 Vuex 的写法有所不同，与 Vue 3 中定义组件的方式有些相似，更好组织。</p>
<p><strong>Vuex 中定义store代码如下</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> Vuex <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>Vuex<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Pinia 中定义store代码如下</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'storeId'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>声明一个Vue组件代码如下</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  	<span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">		<span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">	<span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用上 Pinia 在 Vue 2 和 Vue 3 中使用有所不同，Vue2 中使用 Pinia 与 使用 Vuex 有些相似，Vue 3中使用 Pinia 有所不同。</p>
<p><strong>Vuex 使用store的方式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Pinia 在 Vue 2 中使用store的方式</strong></p>
<blockquote>
<p>需要额外安装<code v-pre>@vue/composition-api</code>包。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia<span class="token punctuation">,</span> PiniaVuePlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>PiniaVuePlugin<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  pinia</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Pinia 在 Vue 3 中使用store的方式</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineComponent <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@/stores/counter'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'HelloWorld'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 您可以返回整个 store 实例以在模板中使用它</span></span>
<span class="line">      store<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="扩展性" tabindex="-1"><a class="header-anchor" href="#扩展性"><span>扩展性</span></a></h3>
<blockquote>
<p>React to store changes to extend Pinia with transactions, local storage synchronization, etc.</p>
</blockquote>
<p>扩展性主要是通过 Plugin （插件）功能，无论是 Vuex 还是 Pinia 都支持编写 Plugin，但写法和功能上有所不同。</p>
<p>在 Vuex 的 Plugin 中，会暴露出每次修改<code v-pre>state</code>的<code v-pre>mutation</code>钩子，通过<code v-pre>subscribe</code>函数传入钩子回调。在 Plugin 中不能直接修改<code v-pre>state</code>，需要在内部提交<code v-pre>mutation</code>来修改，写法如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义一个插件</span></span>
<span class="line"><span class="token keyword">const</span> <span class="token function-variable function">myPlugin</span> <span class="token operator">=</span> <span class="token parameter">store</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  store<span class="token punctuation">.</span><span class="token function">subscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">mutation<span class="token punctuation">,</span> state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 每次 mutation 之后调用</span></span>
<span class="line">    <span class="token comment">// mutation 的格式为 { type, payload }</span></span>
<span class="line">	store<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'receive'</span><span class="token punctuation">,</span> <span class="token string">'hello'</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token comment">// 使用插件</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">plugins</span><span class="token operator">:</span> <span class="token punctuation">[</span>myPlugin<span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pinia 的 <a href="https://pinia.vuejs.org/core-concepts/plugins.html" target="_blank" rel="noopener noreferrer">Plugin</a> 能做的事情更多，操作更灵活，能做的操作有：</p>
<ul>
<li>向 Store 添加新属性</li>
<li>定义 Store 时添加新选项</li>
<li>为 Store 添加新方法</li>
<li>包装现有方法</li>
<li>更改甚至取消操作</li>
<li>实现本地存储等副作用</li>
<li><strong>仅</strong>适用于特定 Store</li>
</ul>
<p>其中**“实现本地存储等副作用”**在 Vuex 中也可以实现，下面是 Pinia 的 Plugin 写法示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPinia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 定义插件</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">MyPiniaPlugin</span><span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">/*</span>
<span class="line">   * context.pinia // 使用 `createPinia()` 创建的 pinia</span>
<span class="line">   * context.app // 使用 `createApp()` 创建的当前应用程序（仅限 Vue 3）</span>
<span class="line">   * context.store // 插件正在扩充的 store</span>
<span class="line">   * context.options // 定义存储的选项对象传递给`defineStore()`</span>
<span class="line">   */</span></span>
<span class="line">  context<span class="token punctuation">.</span>store<span class="token punctuation">.</span>hello <span class="token operator">=</span> <span class="token string">'world'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> pinia <span class="token operator">=</span> <span class="token function">createPinia</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 使用插件，将插件提供给 pinia</span></span>
<span class="line">pinia<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>MyPiniaPlugin<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="模块化设计" tabindex="-1"><a class="header-anchor" href="#模块化设计"><span>模块化设计</span></a></h3>
<blockquote>
<p>Build multiple stores and let your bundler code split them automatically.</p>
</blockquote>
<p>Pinia 对store有模块化的设计，而 Vuex 本身没有，模块化的设计从store的编写方式体现。</p>
<p>回顾一下在 Vuex 中的写法：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">el</span><span class="token operator">:</span> <span class="token string">'#app'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">store</span><span class="token operator">:</span> store<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在看下 Pinia 中的写法，可以单独导出不同的store，也可以分布在不同的文件中：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">user</span><span class="token operator">:</span> <span class="token string">'Jack'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useCounterStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'counterStore'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useSyetemStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'systemStore'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">time</span><span class="token operator">:</span> <span class="token number">1000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="⚙️-devtools" tabindex="-1"><a class="header-anchor" href="#⚙️-devtools"><span>⚙️ DevTools</span></a></h3>
<p>Pinia 与 Vue Devtools相结合，为开发和调试增加了遍历。</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/3.png" alt="pinia-in-vue-devtools"></p>
<p>Vuex 的 Timeline：
<img alt="vuex-devtools-mutation" src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/4.png" width="300"/> <img alt="vuex-devtools-action" src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/5.png" width="300"/></p>
<p>Pinia 的 Timeline：
<img alt="pinia-devtools-action" src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/6.png" width="300"/> <img alt="pinia-devtools-patch" src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/7.png" width="300"/></p>
<h3 id="类型安全" tabindex="-1"><a class="header-anchor" href="#类型安全"><span>类型安全</span></a></h3>
<blockquote>
<p>Types are inferred, which means stores provide you with autocompletion even in JavaScript!</p>
</blockquote>
<p>得益于对 TypeSctipt 的支持，Pinia 有着更好的类型检查（Vuex 4 也支持 TypeScript），同时 Pinia 的类型安全还包括，即使在<strong>使用 JavaScript 时</strong>也可以进行类型检查和自动补全。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> todos <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'todos'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token punctuation">{</span> text<span class="token operator">:</span> string<span class="token punctuation">,</span> id<span class="token operator">:</span> number<span class="token punctuation">,</span> isFinished<span class="token operator">:</span> boolean <span class="token punctuation">}</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span> */</span></span>
<span class="line">    <span class="token literal-property property">todos</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token doc-comment comment">/** <span class="token keyword">@type</span> <span class="token class-name"><span class="token punctuation">{</span><span class="token string">'all'</span> <span class="token operator">|</span> <span class="token string">'finished'</span> <span class="token operator">|</span> <span class="token string">'unfinished'</span><span class="token punctuation">}</span></span> */</span></span>
<span class="line">    <span class="token literal-property property">filter</span><span class="token operator">:</span> <span class="token string">'all'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// type 会自动推断为 number</span></span>
<span class="line">    <span class="token literal-property property">nextId</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">finishedTodos</span><span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 自动完成! ✨</span></span>
<span class="line">      <span class="token keyword">return</span> state<span class="token punctuation">.</span>todos<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">todo</span><span class="token punctuation">)</span> <span class="token operator">=></span> todo<span class="token punctuation">.</span>isFinished<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="核心概念" tabindex="-1"><a class="header-anchor" href="#核心概念"><span>核心概念</span></a></h3>
<p>Vue 的状态管理工具中，无论是 Vuex 还是 Pinia 都有一些核心概念，总体有一下几个：</p>
<ul>
<li>
<p><code v-pre>state</code>: Vuex 使用<a href="https://vuex.vuejs.org/zh/guide/state.html#%E5%8D%95%E4%B8%80%E7%8A%B6%E6%80%81%E6%A0%91" target="_blank" rel="noopener noreferrer">单一状态树</a>，应用全部的状态都保存在一个<code v-pre>store</code>里面，<code v-pre>state</code>就是定义这些状态数据的地方。</p>
</li>
<li>
<p><code v-pre>getters</code>: 用来从<code v-pre>state</code>中派生出一些状态，比如对数据进行过滤和计数。</p>
</li>
<li>
<p><code v-pre>mutations</code>: 更改 Vuex 的<code v-pre>store</code>中的状态的唯一方法，只能通过<code v-pre>mutation</code>修改状态，且<code v-pre>mutation</code>是同步的。</p>
</li>
<li>
<p><code v-pre>actions</code>: 异步操作写在<code v-pre>actions</code>中，但<code v-pre>action</code>不直接修改<code v-pre>state</code>，在<code v-pre>action</code>中提交的是<code v-pre>mutation</code>，也就是<code v-pre>action</code>是触发了<code v-pre>mutation</code>进而修改的<code v-pre>state</code>状态。</p>
</li>
<li>
<p><code v-pre>modules</code>: 由于项目的逐渐增大，<code v-pre>store</code>会越来越大，越臃肿且不易维护，所以允许应用定义不同的<code v-pre>module</code>，将状态分割，每个<code v-pre>module</code>中都有自己的<code v-pre>state</code>、<code v-pre>getters</code>、<code v-pre>mutations</code>和<code v-pre>actions</code>，并且还可以嵌套子模块，而且没个模块间的数据不用担心重名的问题。</p>
</li>
</ul>
<p>在 Pinia 中移除了<code v-pre>mutations</code>和<code v-pre>modules</code>，<code v-pre>mutations</code>被认为是冗长的，而<code v-pre>modules</code>得益于“模块化设计”，使得store都是扁平化的，所以不再需要<code v-pre>modules</code>的嵌套结构。</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/8.png" alt="modules-vs-pinia-store"></p>
<p>除了移除的特性外，已有的特性也有所不同，具体如下：</p>
<p><strong>state</strong>
Pinia 提供了重置 state 数据的方法<code v-pre>store.$reset()</code>，
可以直接通过<code v-pre>store.$patch()</code>方法修改 state 中的一个或多个条目，
另外还可以通过<code v-pre>store.$state = { counter: 666, name: 'Paimon' }</code>直接替换整个 state 的状态。</p>
<p><strong>getters</strong>
都支持参数传递，Pinia 由于是模块化设计，所以可以使用其他模块的 getters ，使用其他 getter 的功能写法有所不同。</p>
<p>getter 传参：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">getUserById</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">(</span><span class="token parameter">userId</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>users<span class="token punctuation">.</span><span class="token function">find</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">user</span><span class="token punctuation">)</span> <span class="token operator">=></span> user<span class="token punctuation">.</span>id <span class="token operator">===</span> userId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用其他 getter：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// Pinia</span></span>
<span class="line"><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">doubleCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>counter <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">doubleCountPlusOne</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>doubleCount <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// Vuex</span></span>
<span class="line"><span class="token literal-property property">getters</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">doubleCount</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token operator">=></span> state<span class="token punctuation">.</span>counter <span class="token operator">*</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">doubleCountPlusOne</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> getters</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> getters<span class="token punctuation">.</span>doubleCount <span class="token operator">+</span> <span class="token number">1</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>使用其他 store 的 getters：</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import { useOtherStore } from './other-store'</span>
<span class="line"></span>
<span class="line">export const useStore = defineStore('main', {</span>
<span class="line">  state: () => ({</span>
<span class="line">    // ...</span>
<span class="line">  }),</span>
<span class="line">  getters: {</span>
<span class="line">    otherGetter(state) {</span>
<span class="line">      const otherStore = useOtherStore()</span>
<span class="line">      return state.localData + otherStore.data</span>
<span class="line">    },</span>
<span class="line">  },</span>
<span class="line">})</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>actions</strong></p>
<p>Vuex 中 actions 不能直接修改 state，需要提交 mutation，图示和代码如下：</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/9.png" alt="vuex-action-flow"></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义 action</span></span>
<span class="line"><span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">state</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mutations</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">state</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      state<span class="token punctuation">.</span>count<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">increment</span> <span class="token punctuation">(</span><span class="token parameter">context</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      context<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 触发 action</span></span>
<span class="line">store<span class="token punctuation">.</span><span class="token function">dispatch</span><span class="token punctuation">(</span><span class="token string">'increment'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pinia 也支持访问其他 store 的 action，可以在 action 中直接修改 state，并且可以直接调用 action，代码如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义 action</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">const</span> useStore <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'main'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">state</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">counter</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">actions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">increment</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>counter<span class="token operator">++</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">randomizeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>counter <span class="token operator">=</span> Math<span class="token punctuation">.</span><span class="token function">round</span><span class="token punctuation">(</span><span class="token number">100</span> <span class="token operator">*</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 触发 action</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> main <span class="token operator">=</span> <span class="token function">useMainStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// actions 像 methods 一样被调用：</span></span>
<span class="line">    main<span class="token punctuation">.</span><span class="token function">randomizeCounter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pinia 新增了 action 订阅功能，允许通过<code v-pre>store.$onAction()</code>注册 action 的回调，回调会在 action 函数触发之前执行，同时可在回调用注册<code v-pre>after</code>和<code v-pre>onError</code>，<code v-pre>after</code>会在 action 完成后执行，<code v-pre>onError</code>会在抛出错误或者<code v-pre>reject</code>的时候执行。图示和代码如下：</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/10.png" alt="pinia-action-subscribe"></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> unsubscribe <span class="token operator">=</span> someStore<span class="token punctuation">.</span><span class="token function">$onAction</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    name<span class="token punctuation">,</span> <span class="token comment">// name of the action</span></span>
<span class="line">    store<span class="token punctuation">,</span> <span class="token comment">// store instance, same as `someStore`</span></span>
<span class="line">    args<span class="token punctuation">,</span> <span class="token comment">// array of parameters passed to the action</span></span>
<span class="line">    after<span class="token punctuation">,</span> <span class="token comment">// hook after the action returns or resolves</span></span>
<span class="line">    onError<span class="token punctuation">,</span> <span class="token comment">// hook if the action throws or rejects</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// a shared variable for this specific action call</span></span>
<span class="line">    <span class="token keyword">const</span> startTime <span class="token operator">=</span> Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// this will trigger before an action on `store` is executed</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Start "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" with params [</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>args<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">', '</span><span class="token punctuation">)</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">].</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// this will trigger if the action succeeds and after it has fully run.</span></span>
<span class="line">    <span class="token comment">// it waits for any returned promised</span></span>
<span class="line">    <span class="token function">after</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">result</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Finished "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">          Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime</span>
<span class="line">        <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.\nResult: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>result<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// this will trigger if the action throws or returns a promise that rejects</span></span>
<span class="line">    <span class="token function">onError</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">warn</span><span class="token punctuation">(</span></span>
<span class="line">        <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Failed "</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>name<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">" after </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>Date<span class="token punctuation">.</span><span class="token function">now</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> startTime<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">ms.\nError: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>error<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">      <span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// manually remove the listener</span></span>
<span class="line"><span class="token function">unsubscribe</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="composition-api-支持" tabindex="-1"><a class="header-anchor" href="#composition-api-支持"><span>Composition API 支持</span></a></h3>
<p>Composition API 是 Vue 3 的特性，所以只要支持 Vue 3 都支持 Composition API，所以 Vuex 4 和 Pinia 都支持，而 Vuex 3 不支持。Composition API 相关介绍，可查看<a href="https://vuejs.org/guide/extras/composition-api-faq.html" target="_blank" rel="noopener noreferrer">什么是 Composition API ?</a></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> computed <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> useStore <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setup</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> store <span class="token operator">=</span> <span class="token function">useStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 在 computed 函数中访问 state</span></span>
<span class="line">      <span class="token literal-property property">count</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>count<span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">      <span class="token comment">// 在 computed 函数中访问 getter</span></span>
<span class="line">      <span class="token literal-property property">double</span><span class="token operator">:</span> <span class="token function">computed</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> store<span class="token punctuation">.</span>getters<span class="token punctuation">.</span>double<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="typescript-支持" tabindex="-1"><a class="header-anchor" href="#typescript-支持"><span>TypeScript 支持</span></a></h3>
<p>Vuex 3 不支持 TypeScript，Vuex 4 和 Pinia 均支持 TypeScript。
不同的是，Vuex 虽然提供了类型声明，所以不需要特殊的 TypeScript 配置，但还需要按照一定的要求才能在使用 TypeScript 编写 Vue 组件时正确的为<code v-pre>store</code>提供类型声明。与<code v-pre>$router</code>相同，Vuex 也没有为<code v-pre>this.$store</code>  属性提供开箱即用的类型声明，所以需要先定义一个 Vue 的类型声明，如下：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// vuex.d.ts</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Store <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'vuex'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'@vue/runtime-core'</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 声明自己的 store state</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">State</span> <span class="token punctuation">{</span></span>
<span class="line">    count<span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 为 `this.$store` 提供类型声明</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">ComponentCustomProperties</span> <span class="token punctuation">{</span></span>
<span class="line">    $store<span class="token operator">:</span> Store<span class="token operator">&lt;</span>State<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>Pinia 由于不会使用 Vue 原型上的<code v-pre>$store</code>所以也需额外的类型声明。</p>
</blockquote>
<h3 id="热更新" tabindex="-1"><a class="header-anchor" href="#热更新"><span>热更新</span></a></h3>
<p>Vuex 和 Pinia 均支持热更新。
Vuex 使用的是webpack 的 <a href="https://webpack.js.org/guides/hot-module-replacement/" target="_blank" rel="noopener noreferrer">Hot Module Replacement API</a>，对于<code v-pre>mutation</code>和<code v-pre>module</code>需要调用<code v-pre>store.hotUpdate()</code>方法，如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span>module<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  module<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'./mutations'</span><span class="token punctuation">,</span> <span class="token string">'./modules/a'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 加载新模块</span></span>
<span class="line">    store<span class="token punctuation">.</span><span class="token function">hotUpdate</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">mutations</span><span class="token operator">:</span> newMutations<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">modules</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">a</span><span class="token operator">:</span> newModuleA</span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Pinia 的热更新需要使用官方的构建工具 <a href="https://vitejs.dev/" target="_blank" rel="noopener noreferrer">Vite</a>，以及任何实现了<code v-pre>import.meta.hot</code>的构建工具，写法大致如下：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineStore<span class="token punctuation">,</span> acceptHMRUpdate <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'pinia'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> useAuth <span class="token operator">=</span> <span class="token function">defineStore</span><span class="token punctuation">(</span><span class="token string">'auth'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// options...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">.</span><span class="token function">accept</span><span class="token punctuation">(</span><span class="token function">acceptHMRUpdate</span><span class="token punctuation">(</span>useAuth<span class="token punctuation">,</span> <span class="token keyword">import</span><span class="token punctuation">.</span>meta<span class="token punctuation">.</span>hot<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="服务端渲染-ssr" tabindex="-1"><a class="header-anchor" href="#服务端渲染-ssr"><span>服务端渲染（SSR）</span></a></h3>
<p>Vuex 不支持服务端渲染，Pinia支持服务端渲染。
Pinia 可以基于 Vite 手动在修改代码或者通过三方包实现SSR，或者通过 <a href="https://nuxtjs.org/" target="_blank" rel="noopener noreferrer">Nuxt.js</a>，因为 Nuxt.js 在服务端渲染方便做了一些事，所以使用起来会相对简单。</p>
<h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2>
<p>Pinia 于 Vuex 相比，官方是这样说的：</p>
<p><img src="@source/AB产品知识库/images/知识探索/前端/Vuex vs Pinia/11.png" alt="pinia-vs-vuex"></p>
<blockquote>
<p>官方的建议是，后续如果是新的项目，希望“毫不犹豫”的选择 Pinia。</p>
</blockquote>
<p>对于我们现有情况来说，由于没使用 Vue 3 所以项目中并未使用 Vuex 4，所以主要是 Vuex 3 和 Pinia 之间的比较。</p>
<p>相比于 Vuex 3，Pinia
新增了<strong>更直观的store编写</strong>、<strong>模块化的设计</strong>、<strong>JavaScript的类型安全和自动补全</strong>、<strong>支持 Composition API</strong>、<strong>支持 TypeScript</strong> 和<strong>服务端渲染</strong>；
优化了<strong>包体积</strong>、<strong>Vue DevTools的关联</strong>、<strong>更灵活的扩展方式</strong>和<strong>热更新方式</strong>；
移除了<strong>mutations</strong>和<strong>modules</strong>。</p>
<p>针对现状来看，如果将 Vuex 3 升级为 Pinia，由于新的功能点并未使用，所以主要的改动点在“移除了<strong>mutations</strong>和<strong>modules</strong>”，而且是比较常用的两个功能点，有一定的改造成本。当然，如果改造完成，后续可以享受 Pinia 的新功能，比如：<strong>模块化的设计</strong>、<strong>JavaScript的类型安全和自动补全</strong>和<strong>更灵活的扩展方式</strong>等。</p>
</div></template>


