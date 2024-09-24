<template><div><h1 id="abx-launcher-平台启动器" tabindex="-1"><a class="header-anchor" href="#abx-launcher-平台启动器"><span>abx-launcher 平台启动器</span></a></h1>
<h2 id="平台启动器提供以下方法" tabindex="-1"><a class="header-anchor" href="#平台启动器提供以下方法"><span>平台启动器提供以下方法：</span></a></h2>
<p>注:以下方法只在交易工程中的入口文件（package中配置的launcherEntry字段的文件）中使用生效</p>
<h3 id="_1-初始化交易相关参数" tabindex="-1"><a class="header-anchor" href="#_1-初始化交易相关参数"><span>1.初始化交易相关参数</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"canRepeatList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// tradeSDK配置可重复打开的交易列表</span></span>
<span class="line">  <span class="token string-property property">"auf"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//aufSDK具体参数可参考[ab-manager-auf文档](../../sdk/ab-manager-auf.md)</span></span>
<span class="line">    <span class="token string-property property">"$aufAlias"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//auf需要的别名</span></span>
<span class="line">    <span class="token string-property property">"$canRightClickDirective"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制右键菜单显示</span></span>
<span class="line">    <span class="token string-property property">"$isConsoleLog"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否在控制台打印log,默认为true</span></span>
<span class="line">    <span class="token string-property property">"$callback"</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//打印日志的回调函数,log为当前返回的信息</span></span>
<span class="line">    <span class="token string-property property">"$stepTimeout"</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token comment">////步进式loadUId的timeout,不设置默认10000</span></span>
<span class="line">    <span class="token comment">//……</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-初始化数据相关参数" tabindex="-1"><a class="header-anchor" href="#_2-初始化数据相关参数"><span>2.初始化数据相关参数</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initDataConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"sizeLimit"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"sdm"</span><span class="token operator">:</span> <span class="token number">2048000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"dm"</span><span class="token operator">:</span> <span class="token number">4096000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"localData"</span><span class="token operator">:</span> <span class="token number">3145728</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// sdm,dm,localData的大小限制</span></span>
<span class="line">  <span class="token string-property property">"sharedDataModels"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'TellerInfo'</span><span class="token punctuation">,</span> <span class="token string">'CustomerInfo'</span><span class="token punctuation">,</span> <span class="token string">'AgentInfo'</span><span class="token punctuation">,</span> <span class="token string">'TransactorInfo'</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//初始化的SDM</span></span>
<span class="line">  <span class="token string-property property">"SDMToSessionStorageList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//需要同步session的sdm  </span></span>
<span class="line">   <span class="token string-property property">"dataInitialization"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">//初始化的sdm数据</span></span>
<span class="line">    <span class="token comment">// 例：dataInitialization：[</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'UserInfo',</span></span>
<span class="line">    <span class="token comment">//   data:{</span></span>
<span class="line">    <span class="token comment">//     name:'xiaoming'</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'CustomerInfo',</span></span>
<span class="line">    <span class="token comment">//   data:new CustomerInfo(),</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// }]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-初始化组件库" tabindex="-1"><a class="header-anchor" href="#_3-初始化组件库"><span>3.初始化组件库</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initAuiConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">'aui-web'</span><span class="token punctuation">,</span> <span class="token comment">// 引入的组件库类型 aui-web为柜面组件库 aui-m为移动组件库</span></span>
<span class="line">    <span class="token string-property property">"throttleButton"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">//按钮的防抖时间</span></span>
<span class="line">    <span class="token string-property property">"showDefaultPlaceholder"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//展示默认的占位文字</span></span>
<span class="line">    <span class="token string-property property">"selectedWhenFocus"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 焦点进入后全选</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-全局初始化" tabindex="-1"><a class="header-anchor" href="#_4-全局初始化"><span>4.全局初始化</span></a></h3>
<p>可以使用此方法对以上所有SDK进行初始化</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"tradeManager"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"canRepeatList"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//配置可重复打开的交易</span></span>
<span class="line">    <span class="token string-property property">"auf"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">"$aufAlias"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//auf需要的别名</span></span>
<span class="line">      <span class="token string-property property">"$canRightClickDirective"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制右键菜单显示</span></span>
<span class="line">      <span class="token string-property property">"$isConsoleLog"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否在控制台打印log,默认为true</span></span>
<span class="line">      <span class="token string-property property">"$callback"</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//打印日志的回调函数,log为当前返回的信息</span></span>
<span class="line">      <span class="token string-property property">"$stepTimeout"</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token comment">////步进式loadUId的timeout,不设置默认10000</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"dataManager"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"sizeLimit"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">       <span class="token string-property property">"sdm"</span><span class="token operator">:</span> <span class="token number">2048000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"dm"</span><span class="token operator">:</span> <span class="token number">4096000</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"localData"</span><span class="token operator">:</span> <span class="token number">3145728</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// sdm,dm,localData的大小限制</span></span>
<span class="line">    <span class="token string-property property">"sharedDataModels"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token comment">//初始化的SDM</span></span>
<span class="line">    <span class="token string-property property">"SDMToSessionStorageList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">//需要同步session的sdm    </span></span>
<span class="line">    <span class="token string-property property">"dataInitialization"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token comment">//初始化的数据</span></span>
<span class="line">    <span class="token comment">// 例：dataInitialization：[</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'UserInfo',</span></span>
<span class="line">    <span class="token comment">//   data:{</span></span>
<span class="line">    <span class="token comment">//     name:'xiaoming'</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'CustomerInfo',</span></span>
<span class="line">    <span class="token comment">//   data:new CustomerInfo(),</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// }]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"aui"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"aui-web"</span><span class="token punctuation">,</span> <span class="token comment">//引入的组件库类型</span></span>
<span class="line">    <span class="token string-property property">"throttleButton"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">//按钮的防抖时间</span></span>
<span class="line">    <span class="token string-property property">"showDefaultPlaceholder"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//展示默认的占位文字</span></span>
<span class="line">    <span class="token string-property property">"selectedWhenFocus"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 焦点进入后全选</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-其他相关参数" tabindex="-1"><a class="header-anchor" href="#_5-其他相关参数"><span>5.其他相关参数</span></a></h3>
<p>标题,入口等相关配置见<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/packageJson%E4%BB%8B%E7%BB%8D.html">packageJson介绍</RouteLink></p>
</div></template>


