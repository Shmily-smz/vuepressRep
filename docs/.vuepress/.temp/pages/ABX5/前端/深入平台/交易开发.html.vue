<template><div><h1 id="交易开发-交易开发" tabindex="-1"><a class="header-anchor" href="#交易开发-交易开发"><span>交易开发 {#交易开发}</span></a></h1>
<p>介绍交易开发流程，以及过程中需要使用的<code v-pre>API</code></p>
<h2 id="创建交易" tabindex="-1"><a class="header-anchor" href="#创建交易"><span>创建交易</span></a></h2>
<blockquote>
<p>创建交易，更多使用方式参考 <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html">交易管理器</RouteLink></p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">"个人开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易标题</span></span>
<span class="line">    type<span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span> <span class="token comment">// 交易类型</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用名称</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token string">"scene/个人开卡/开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易技术维度的路径</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span> <span class="token comment">// 交易所属的工程信息</span></span>
<span class="line">    containerType<span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span> <span class="token comment">// 交易的展现类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  targetId<span class="token operator">:</span> <span class="token string">"trade_container_parcel"</span><span class="token punctuation">,</span> <span class="token comment">// 交易挂载的元素id</span></span>
<span class="line">  context<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="模版" tabindex="-1"><a class="header-anchor" href="#模版"><span>模版</span></a></h2>
<!-- > 交易由多个画面组成， -->
<!-- // 资源的引用方式还需要补充 -->
<!-- 设计说明； -->
<h2 id="渠道-渠道" tabindex="-1"><a class="header-anchor" href="#渠道-渠道"><span>渠道 {#渠道}</span></a></h2>
<blockquote>
<p>设置当前应用归属于哪个渠道，资源加载的后缀会根据此处的配置进行查找</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ChannelName</span> <span class="token operator">=</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ChannelManager</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">get</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ChannelName<span class="token punctuation">;</span> <span class="token comment">// 获取渠道号</span></span>
<span class="line">  <span class="token function-variable function">set</span><span class="token operator">:</span> <span class="token punctuation">(</span>channelName<span class="token operator">:</span> ChannelName<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 设置渠道号</span></span>
<span class="line">  <span class="token function-variable function">delete</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">void</span><span class="token punctuation">;</span> <span class="token comment">// 删除渠道号</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ChannelManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-channel"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">login</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      ChannelManager<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">"YG"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> channelName <span class="token operator">=</span> ChannelManager<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">      ChannelManager<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<ol>
<li><code v-pre>.vue</code>等资源查找优先级: <code v-pre>file.YG.vue</code> -&gt; <code v-pre>file.vue</code></li>
</ol>
<h2 id="回跳" tabindex="-1"><a class="header-anchor" href="#回跳"><span>回跳</span></a></h2>
<blockquote>
<p>流程交易可以配置是否回跳</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>默认允许回跳</li>
<li>配置不允许回跳则代表当前节点及以前均不可回跳</li>
</ol>
</div>
<!-- TODO:补充在IDE上如何操作 -->
<!-- TODO:补充对应的API调用 -->
<h2 id="回放" tabindex="-1"><a class="header-anchor" href="#回放"><span>回放</span></a></h2>
<blockquote>
<p>走过的<code v-pre>一级流程节点/泳道</code>是否允许回放</p>
</blockquote>
<p>回放的操作：鼠标右键</p>
<!-- TODO:补充在IDE上如何操作 -->
<h2 id="交易历史" tabindex="-1"><a class="header-anchor" href="#交易历史"><span>交易历史</span></a></h2>
<p>如何获取
如何设置</p>
<p>// defaultShow、defaultJump、defaultReset 交易工程内获取交易历史自行设置
// &quot;defaultReplay&quot;: false, 等待服务端字段
// &quot;defaultOpen&quot;: false, 等待服务端字段</p>
<p>bpmn 没有平铺模式暂时，除了交易还原（平铺）</p>
<p>// &quot;defaultPity&quot;: false,</p>
<!-- <abx-section></abx-section>的说明 -->
<!-- 1 需要编写交易开发目录，新手教程，按照目录划分
2 abx-core内的API需要编写文档
3 全局挂载的信息需要编写文档 -->
<!-- 静态资源必须写后缀 -->
<!-- 需要拿到现有的所有代码，跑一遍测试资源加载方式是否有遗漏


// 进行中：
1 动态路径，并且写文档
2 相对路径的引用，文档；


支持动态加载 -->
<!-- 交易开发区发开发以及生产模式，生产模式的js文件后缀会添加id，也需要写明两者的差异性 -->
</div></template>


