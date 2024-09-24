<template><div><h1 id="ab-manager-data-交易数据模型" tabindex="-1"><a class="header-anchor" href="#ab-manager-data-交易数据模型"><span>ab-manager-data@交易数据模型</span></a></h1>
<h2 id="_0-依赖" tabindex="-1"><a class="header-anchor" href="#_0-依赖"><span>0. 依赖</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token string-property property">"vuex"</span><span class="token operator">:</span> <span class="token string">"^3.2.0"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string-property property">"@agree/ab-manager-database"</span><span class="token operator">:</span> <span class="token string">"^2.0.0"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token string-property property">"@agree/ab-manager-context"</span><span class="token operator">:</span> <span class="token string">"^2.0.0"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    VuexManager<span class="token punctuation">,</span></span>
<span class="line">    DataManager<span class="token punctuation">,</span></span>
<span class="line">    DataMixin</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-data'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-初始化"><span>2.1 初始化</span></a></h3>
<h4 id="_2-1-1-使用vuex" tabindex="-1"><a class="header-anchor" href="#_2-1-1-使用vuex"><span>2.1.1 使用vuex</span></a></h4>
<p>ab-manager-data管理的数据储存在vuex中，如果项目使用了vuex并创建了store，需要将store设置到VuexManager中。</p>
<p><strong>该操作必须在<code v-pre>Vue.use(DataManager,options)</code>之前。</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">strict</span><span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">//store不推荐使用strict模式</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">VuexManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-2-使用datamanager" tabindex="-1"><a class="header-anchor" href="#_2-1-2-使用datamanager"><span>2.1.2 使用DataManager</span></a></h4>
<p>调用<code v-pre>Vue.use(DataManager,options)</code>使用DataManager。
DataManager此时会做初始化相关操作，分为以下几个步骤</p>
<ul>
<li>初始化DataModel</li>
</ul>
<p>DataModel会在当前VuexManager管理的store中注册模块<code v-pre>_dataModels</code></p>
<ul>
<li>初始化SharedDataModel</li>
</ul>
<p>SharedDataModel会在当前VuexManager管理的store中注册模块<code v-pre>_sharedDataModels</code>并注册配置中配置的sharedDataModels。例如_sharedDataModel.AdvertInfo</p>
<ul>
<li>初始化LocalData</li>
</ul>
<p>LocalData在IndexDB中创建数据库<code v-pre>LocalData</code>，数据表<code v-pre>localData</code></p>
<ul>
<li>挂载metadata合并策略</li>
</ul>
<p>配置Vue.config.optionMergeStrategies.metadata 合并mixin中的metadata</p>
<h4 id="_2-1-3-datamanager-options配置" tabindex="-1"><a class="header-anchor" href="#_2-1-3-datamanager-options配置"><span>2.1.3 DataManager options配置</span></a></h4>
<ul>
<li><strong>sizeLimit</strong></li>
</ul>
<p>每次设值数据大小限制，例如当使用<code v-pre>this.dm.testKey = {a:&quot;1&quot;}</code>设置数据时，会估算设置的对象大小。当大小超过配置的值时，<strong>不允许设值</strong>并在控制台报<strong>警告</strong>。
sizelimit中sdm指SharedDataModel，dm指DataModel。单位是字节。默认为1024字节也就是1k</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sdm</span><span class="token operator">:</span> <span class="token number">2048</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dm</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">localData</span><span class="token operator">:</span> <span class="token number">2400000</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>sharedDataModels</strong></li>
</ul>
<p>配置SharedDataModel中key值，<strong>不允许</strong>在交易中使用this.sdm.xxx来添加一个key值，需要提前配置好所有需要的key。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">sharedDataModels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AdvertInfo'</span><span class="token punctuation">,</span> <span class="token string">'AppInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">,</span> <span class="token string">'DeviceInfo'</span><span class="token punctuation">,</span> <span class="token string">'LegalInfo'</span><span class="token punctuation">,</span> <span class="token string">'MenuInfo'</span><span class="token punctuation">,</span> <span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'VirtualTellerInfo'</span><span class="token punctuation">,</span> <span class="token string">'QueueInfo'</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>SDMToSessionStorageList</strong></li>
</ul>
<p>sdm可以配置将某些key储存的对象储存在SessionStorage中，来保证刷新页面不会丢失数据。配置的key必须在<code v-pre>sharedDataModels</code>中存在</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">SDMToSessionStorageList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//初始化DataManager示例代码</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DataManager<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sdm</span><span class="token operator">:</span> <span class="token number">2048</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dm</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">localData</span><span class="token operator">:</span> <span class="token number">2400000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sharedDataModels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AdvertInfo'</span><span class="token punctuation">,</span> <span class="token string">'AppInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">,</span> <span class="token string">'DeviceInfo'</span><span class="token punctuation">,</span> <span class="token string">'LegalInfo'</span><span class="token punctuation">,</span> <span class="token string">'MenuInfo'</span><span class="token punctuation">,</span> <span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'VirtualTellerInfo'</span><span class="token punctuation">,</span> <span class="token string">'QueueInfo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">SDMToSessionStorageList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-4-shareddatamodel初始化赋值" tabindex="-1"><a class="header-anchor" href="#_2-1-4-shareddatamodel初始化赋值"><span>2.1.4 SharedDataModel初始化赋值</span></a></h4>
<p>sdm规定需要初始化各个key中的字段。在运行时<strong>不允许</strong>设置未初始化的值，即不允许添加、删除key中的字段。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//实体类初始化sdm</span></span>
<span class="line"><span class="token keyword">let</span> advertInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdvertInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">DataManager<span class="token punctuation">.</span><span class="token function">initSharedDataModel</span><span class="token punctuation">(</span><span class="token string">"AdvertInfo"</span><span class="token punctuation">,</span> advertInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-1-5-初始化完整实例代码" tabindex="-1"><a class="header-anchor" href="#_2-1-5-初始化完整实例代码"><span>2.1.5 初始化完整实例代码</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  VuexManager<span class="token punctuation">,</span></span>
<span class="line">  DataManager</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-data'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> store <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vuex<span class="token punctuation">.</span>Store</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">VuexManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setStore</span><span class="token punctuation">(</span>store<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>DataManager<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">sizeLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">sdm</span><span class="token operator">:</span> <span class="token number">2048</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">dm</span><span class="token operator">:</span> <span class="token number">4096</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">localData</span><span class="token operator">:</span> <span class="token number">2400000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">sharedDataModels</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'AdvertInfo'</span><span class="token punctuation">,</span> <span class="token string">'AppInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">,</span> <span class="token string">'DeviceInfo'</span><span class="token punctuation">,</span> <span class="token string">'LegalInfo'</span><span class="token punctuation">,</span> <span class="token string">'MenuInfo'</span><span class="token punctuation">,</span> <span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'VirtualTellerInfo'</span><span class="token punctuation">,</span> <span class="token string">'QueueInfo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">SDMToSessionStorageList</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'BranchInfo'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token comment">//简单对象初始化sdm</span></span>
<span class="line">DataManager<span class="token punctuation">.</span><span class="token function">initSharedDataModel</span><span class="token punctuation">(</span><span class="token string">'AdvertInfo'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"lihua"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">srr</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">no</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-交易中使用" tabindex="-1"><a class="header-anchor" href="#_2-2-交易中使用"><span>2.2 交易中使用</span></a></h3>
<h4 id="_2-2-1-交易vue页面" tabindex="-1"><a class="header-anchor" href="#_2-2-1-交易vue页面"><span>2.2.1 交易Vue页面</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">    DataMixin</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-data'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>交易Vue页面引入并混入<code v-pre>DataMixin</code></p>
<h4 id="_2-2-2-datamodel" tabindex="-1"><a class="header-anchor" href="#_2-2-2-datamodel"><span>2.2.2 DataModel</span></a></h4>
<p>DataModel指在交易中共享的数据，可以跨多个vue页面来访问同一个响应式数据。这些数据区使用_tradeId来标识。vue中可以通过访问Vuex的方式来查看所有数据：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>_dataModels<span class="token punctuation">.</span>$<span class="token punctuation">{</span>_tradeId<span class="token punctuation">}</span><span class="token punctuation">.</span>_data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以通过this.dm获取_data对象</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span><span class="token function">getDataModelObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Vue实例中访问DataModel的方式为<code v-pre>this.dm</code>，该属性是<code v-pre>DataMixin</code>在<code v-pre>beforeMount</code>生命周期挂载到vue的this上的。</p>
<h5 id="_2-2-2-1-权限控制" tabindex="-1"><a class="header-anchor" href="#_2-2-2-1-权限控制"><span>2.2.2.1 权限控制</span></a></h5>
<p>DataModel使用vue对象中定义的<code v-pre>metadata</code>来做权限控制，只有在该对象中定义的key才能被赋值到DataModel中，但是不影响读取dm中的值。例如</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">metadata</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">globalArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">isLimitAge</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"是否年龄限制"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">ageLimit</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"年龄限制"</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"16"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">IfContinue</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"客户信息不存在是否继续办理"</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">AllowAgent</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"是否允许代理"</span><span class="token punctuation">,</span> <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"1"</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>其中<code v-pre>metadata:{globalArgs:{}}</code>为固定结构。globalArgs中定义的key指可用来赋值的key。如果key对应的value中配置了default字段，则对应DataModel中该字段使用该值作为<strong>默认值</strong>。</p>
<p>如果设置了未在metadata中定义的值，则<strong>控制台会报出警告</strong>，且<strong>赋值失败</strong></p>
<h5 id="_2-2-2-2-取值-赋值" tabindex="-1"><a class="header-anchor" href="#_2-2-2-2-取值-赋值"><span>2.2.2.2 取值/赋值</span></a></h5>
<p>直接使用this.dm.xxx来取值，例如上面的例子</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>ageLimit<span class="token punctuation">)</span> <span class="token comment">// 16</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以绑定到dom中</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>fc<span class="token operator">-</span>input label<span class="token operator">=</span><span class="token string">"年龄限制"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"dm.ageLimit"</span> ref<span class="token operator">=</span><span class="token string">"custom-input_ctfNum"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>fc<span class="token operator">-</span>input<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>直接赋值</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>ageLimit <span class="token operator">=</span> <span class="token string">"22"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p>当value为对象时，例如</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>info<span class="token operator">=</span><span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span><span class="token string">"abc"</span><span class="token punctuation">,</span><span class="token literal-property property">age</span><span class="token operator">:</span><span class="token string">"22"</span> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时对dm.info赋值没有问题，但是这种情况时</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>info<span class="token punctuation">.</span>age <span class="token operator">=</span> <span class="token string">"21"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时如果vuex创建的store 严格模式开启的情况下会报错，因为这相当于直接修改了vuex的值。并不是vuex推荐的使用commit来修改值</p>
<h5 id="_2-2-2-3-删除key" tabindex="-1"><a class="header-anchor" href="#_2-2-2-3-删除key"><span>2.2.2.3 删除key</span></a></h5>
<p>dm不允许删除存在的key，但是可以将该key设置为undefined，这样当下一次页面初始化时，会将metadata中定义默认值赋到该key上</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>info <span class="token operator">=</span> <span class="token keyword">undefined</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_2-2-3-shareddatamodel" tabindex="-1"><a class="header-anchor" href="#_2-2-3-shareddatamodel"><span>2.2.3 SharedDataModel</span></a></h4>
<p>SharedDataModel指在应用中共享的数据，可以跨多个vue页面来访问同一个响应式数据。所有Vue页面公用一个数据区。可以通过vuex的方式来访问</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$store<span class="token punctuation">.</span>state<span class="token punctuation">.</span>_sharedDataModel<span class="token punctuation">.</span>$<span class="token punctuation">{</span>sdmKey<span class="token punctuation">}</span><span class="token punctuation">.</span>_data</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>Vue实例中访问SharedDataModel的方式为<code v-pre>this.sdm</code>，该属性是<code v-pre>DataMixin</code>在<code v-pre>beforeMount</code>生命周期挂载到vue的this上的。</p>
<h5 id="_2-2-3-1-权限控制" tabindex="-1"><a class="header-anchor" href="#_2-2-3-1-权限控制"><span>2.2.3.1 权限控制</span></a></h5>
<p>在Vue页面中，使用该Vue页面的dm值<code v-pre>canSetSDM</code>来判断是否可以赋值。只有在该值为true时才可以进行sdm赋值。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>dm<span class="token punctuation">.</span>canSetSDM <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//设置canSetSDM</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意canSetSDM不需要在metadata中定义，可以直接修改。dm不关心该字段的权限</strong></p>
<h5 id="_2-2-3-2-取值赋值" tabindex="-1"><a class="header-anchor" href="#_2-2-3-2-取值赋值"><span>2.2.3.2 取值赋值</span></a></h5>
<p>直接使用this.sdm取值。例如初始化时定义的sdm</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>sdm<span class="token punctuation">.</span>AdvertInfo<span class="token punctuation">.</span>name<span class="token punctuation">)</span> <span class="token comment">//lihua</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>也可以绑定到dom中</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>fc<span class="token operator">-</span>input label<span class="token operator">=</span><span class="token string">"名称"</span> v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"sdm.AdvertInfo.name"</span> <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>fc<span class="token operator">-</span>input<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>注意</strong></p>
<p>当sdm.sdmKey为对象时，例如</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>sdm<span class="token punctuation">.</span>AdvertInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">no</span><span class="token operator">:</span> <span class="token string">"1"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">add</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line"> <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>此时对sdm.AdvertInfo赋值没有问题，但是这种情况时</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>sdm<span class="token punctuation">.</span>AdvertInfo<span class="token punctuation">.</span>add <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>此时如果vuex创建的store 严格模式开启的情况下会报错，因为这相当于直接修改了vuex的值。并不是vuex推荐的使用commit来修改值</p>
<h5 id="_2-2-3-3-删除" tabindex="-1"><a class="header-anchor" href="#_2-2-3-3-删除"><span>2.2.3.3 删除</span></a></h5>
<p>sdm不允许删除某值，如果需要清空sdm，可以找到对应的实体类进行重新赋值，例如</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//实体类初始化sdm</span></span>
<span class="line"><span class="token keyword">let</span> advertInfo <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdvertInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>sdm<span class="token punctuation">.</span>AdvertInfo <span class="token operator">=</span> advertInfo<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_2-2-3-4-重置sdm" tabindex="-1"><a class="header-anchor" href="#_2-2-3-4-重置sdm"><span>2.2.3.4 重置SDM</span></a></h5>
<p>可以通过$resetSDM重置某个已经存在的sdm,例如</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$resetSDM</span><span class="token punctuation">(</span><span class="token string">"AdvertInfo"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>该方法会将AdvertInfo中所有key对应的value设置为undefined。
如果需要重新初始化默认值，可以通过</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$resetSDM</span><span class="token punctuation">(</span><span class="token string">"AdvertInfo"</span><span class="token punctuation">,</span><span class="token keyword">new</span> <span class="token class-name">AdvertInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>该方法会将AdvertInfo中所有的key、value覆盖为传入的第二个参数对象</p>
<h5 id="_2-2-3-5-同步sessionstorage" tabindex="-1"><a class="header-anchor" href="#_2-2-3-5-同步sessionstorage"><span>2.2.3.5 同步SessionStorage</span></a></h5>
<p>sdm支持将某些sdmkey同步到SessionStorage中。通过<strong>SDMToSessionStorageList</strong>进行配置。</p>
<p>当向sdm赋值时，如果该sdmKey配置了需要同步SessionStorage，则同时会向SessionStorage同步一下数据。</p>
<p>在SharedDataModel初始化时，会先检查SessionStorage是否保存了对应sdmkey的数据，如果保存了数据，则从SessionStorage同步回sdm，即vuex。</p>
<p>此时后续的初始化操作<strong>不会生效且会报警告</strong>该sdmkey已经被初始化。</p>
<h4 id="_2-2-4-localdata" tabindex="-1"><a class="header-anchor" href="#_2-2-4-localdata"><span>2.2.4 LocalData</span></a></h4>
<p>LocalData指存储在IndexDB中的数据，当使用LocalData存储时，所有的数据都存储在IndexDB中，可以通过调式工具查看。</p>
<p><strong>取值赋值</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>localData<span class="token punctuation">.</span>abc <span class="token operator">=</span> <span class="token string">"123"</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>localData<span class="token punctuation">.</span>abc<span class="token punctuation">)</span> <span class="token comment">// "123"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_2-2-5-ab-manager-data对交易的定义" tabindex="-1"><a class="header-anchor" href="#_2-2-5-ab-manager-data对交易的定义"><span>2.2.5 ab-manager-data对交易的定义</span></a></h4>
<p>当Vue页面混入<code v-pre>DataMixin</code>后，DataMixin在<code v-pre>beforeMount</code>生命周期首先判断该实例是否存在<code v-pre>this._tradeId</code>，</p>
<ul>
<li>
<p>如果<code v-pre>this._tradeId</code>不存在</p>
<p>不存在<code v-pre>this._tradeId</code>则认为该Vue为新的交易，创建新的tardeId并赋值到<code v-pre>this._tradeId</code>。创建新的dm区域来存放交易数据。</p>
</li>
<li>
<p>如果<code v-pre>this._tradeId</code>存在</p>
<p>存在<code v-pre>this._tradeId</code>则认为该Vue不是新交易，不需要创建新的dm区域，使用<code v-pre>this._tradeId</code>对应的dm区域来共享交易数据。</p>
</li>
</ul>
<p>交易子页面或子组件想要使用<code v-pre>this.dm</code>等数据共享时</p>
<ol>
<li>子页面或子组件先引入<code v-pre>DataMixin</code></li>
<li>通过传值方式将<code v-pre>_tradeId</code>传递给子页面或子组件，用于标识属于同一只交易</li>
<li>在子页面或子组件上挂载<code v-pre>this._tradeId</code></li>
<li>子页面或子页面即可使用<code v-pre>this.dm</code>、<code v-pre>this.sdm</code>访问对应数据</li>
</ol>
<blockquote>
<p>柜面上独有交易的开发，由于使用了ab-manager-trade，不需要关心_tradeId传递的问题</p>
</blockquote>
<h2 id="_3-datamixin-api" tabindex="-1"><a class="header-anchor" href="#_3-datamixin-api"><span>3. DataMixin API</span></a></h2>
<table>
<thead>
<tr>
<th>api</th>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>$removeLocalData</td>
<td>key: String 必传</td>
<td>根据入参key删除对应的localdata</td>
</tr>
<tr>
<td>$resetSDM</td>
<td>key: String 必传<br />data: any 可选</td>
<td>重置key对应的sdm，当不传data时，将对应sdm所有值设置为undefined，当传data时，将对应sdm设置为data</td>
</tr>
<tr>
<td>$getDmKey</td>
<td></td>
<td>获取当前vue对应dm的所有key</td>
</tr>
<tr>
<td>$getDmObject</td>
<td></td>
<td>获取当前vue对应dm对象的复制对象</td>
</tr>
<tr>
<td>$getSdmObject</td>
<td>key: String 必传</td>
<td>获取key对应的sdm对象的复制对象</td>
</tr>
<tr>
<td>$createShadowSDM</td>
<td></td>
<td>创建sdm数据隔离区，该交易所有vue访问的sdm都指向该区域</td>
</tr>
<tr>
<td>$initShadowSDM</td>
<td>sdmKey: string 必传<br />data: any 可选</td>
<td>初始化sdm隔离区数据，与普通sdm初始化相同</td>
</tr>
<tr>
<td>$deleteShadowSDM</td>
<td></td>
<td>删除sdm数据隔离区，DataMixin destroyed生命周期调用</td>
</tr>
</tbody>
</table>
</div></template>


