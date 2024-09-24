<template><div><h1 id="ab-launcher" tabindex="-1"><a class="header-anchor" href="#ab-launcher"><span>ab-launcher</span></a></h1>
<h2 id="_1-平台引入的sdk" tabindex="-1"><a class="header-anchor" href="#_1-平台引入的sdk"><span>1. 平台引入的sdk</span></a></h2>
<p>@agree/ab-manager-data  @agree/ab-plugin-message @agree/ab-manager-auf @agree/ab-manager-trade</p>
<h2 id="_2-使用方法" tabindex="-1"><a class="header-anchor" href="#_2-使用方法"><span>2. 使用方法</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"tradeManager"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"canRepeatList"</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment">//配置可重复打开的交易</span></span>
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
<span class="line">    <span class="token comment">//  {</span></span>
<span class="line">    <span class="token comment">//   model:'全局数据',</span></span>
<span class="line">    <span class="token comment">//   path:'全局数据.adm',</span></span>
<span class="line">    <span class="token comment">//   context:{</span></span>
<span class="line">    <span class="token comment">//     moduleName:'BankModule'</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'UserInfo',</span></span>
<span class="line">    <span class="token comment">//   data:{</span></span>
<span class="line">    <span class="token comment">//     name:'xiaoming'</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'TellerInfo',</span></span>
<span class="line">    <span class="token comment">//   data:new TellerInfo(),</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// {</span></span>
<span class="line">    <span class="token comment">//   model:'CustomerInfo',</span></span>
<span class="line">    <span class="token comment">//   data:new CustomerInfo(),</span></span>
<span class="line">    <span class="token comment">//   sdm:true</span></span>
<span class="line">    <span class="token comment">// }]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"aufManager"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"$aufAlias"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//auf需要的别名</span></span>
<span class="line">    <span class="token string-property property">"$canRightClickDirective"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制右键菜单显示</span></span>
<span class="line">    <span class="token string-property property">"$isConsoleLog"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//是否在控制台打印log,默认为true</span></span>
<span class="line">    <span class="token string-property property">"$callback"</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//打印日志的回调函数,log为当前返回的信息</span></span>
<span class="line">    <span class="token string-property property">"$stepTimeout"</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span><span class="token comment">////步进式loadUId的timeout,不设置默认10000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"messageManager"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"parentMsgUrl"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">,</span><span class="token comment">//ws地址</span></span>
<span class="line">    <span class="token string-property property">"tellerId"</span><span class="token operator">:</span><span class="token number">00001</span><span class="token punctuation">,</span> <span class="token comment">//柜员号</span></span>
<span class="line">    <span class="token string-property property">"clientMap"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//登陆柜员对应的信息 </span></span>
<span class="line">    <span class="token string-property property">"onMessage"</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//默认时消息回调 </span></span>
<span class="line">    <span class="token string-property property">"onException"</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//默认时异常回调 </span></span>
<span class="line">    <span class="token string-property property">"forceCreateWebsocket"</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token comment">//true 为使用 js websocket，false 为使用壳子的 websocket</span></span>
<span class="line">    <span class="token string-property property">"options"</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token comment">//额外定义的操作属性</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"aui"</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">"aui-web"</span><span class="token punctuation">,</span> <span class="token comment">//引入的组件库类型</span></span>
<span class="line">    <span class="token string-property property">"throttleButton"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span> <span class="token comment">//按钮的防抖时间</span></span>
<span class="line">    <span class="token string-property property">"showDefaultPlaceholder"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//展示默认的占位文字</span></span>
<span class="line">    <span class="token string-property property">"selectedWhenFocus"</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// 焦点进入后全选</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"canRepeatList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initDataConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"sizeLimit"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"sdm"</span><span class="token operator">:</span> <span class="token number">2048000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"dm"</span><span class="token operator">:</span> <span class="token number">4096000</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"localData"</span><span class="token operator">:</span> <span class="token number">3145728</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"sharedDataModels"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'UserInfo'</span><span class="token punctuation">,</span> <span class="token string">'TellerInfo'</span><span class="token punctuation">,</span> <span class="token string">'CustomerInfo'</span><span class="token punctuation">,</span> <span class="token string">'AgentInfo'</span><span class="token punctuation">,</span> <span class="token string">'TransactorInfo'</span><span class="token punctuation">,</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"SDMToSessionStorageList"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initAufConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"$aufAlias"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"$aufVisibleRefs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">"aufPathPublicPath"</span><span class="token operator">:</span> <span class="token string">"@"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initAuiConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"name"</span><span class="token operator">:</span><span class="token string">'aui-web'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"throttleButton"</span><span class="token operator">:</span> <span class="token number">500</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">"showDefaultPlaceholder"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> </span>
<span class="line">    <span class="token string-property property">"selectedWhenFocus"</span><span class="token operator">:</span> <span class="token boolean">true</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


