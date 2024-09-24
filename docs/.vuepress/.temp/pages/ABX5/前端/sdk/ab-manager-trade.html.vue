<template><div><h1 id="ab-manager-trade-交易管理-柜面特有" tabindex="-1"><a class="header-anchor" href="#ab-manager-trade-交易管理-柜面特有"><span>ab-manager-trade@交易管理--柜面特有</span></a></h1>
<p>交易注入平台方法，</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">import {</span>
<span class="line">  TradeManager,</span>
<span class="line">  Panel</span>
<span class="line">} from "@agree/ab-manager-trade"</span>
<span class="line">Vue.use(TradeManager);</span>
<span class="line"></span>
<span class="line">new Vue({</span>
<span class="line">    el: "#app",</span>
<span class="line">    store: store,</span>
<span class="line">    render: h => h(TradeManager.createApp(App), {</span>
<span class="line">        props: {</span>
<span class="line">            _panel: new Panel('App',undefined),</span>
<span class="line">            panelActive: true</span>
<span class="line">        }</span>
<span class="line">    }),</span>
<span class="line">});</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-方法" tabindex="-1"><a class="header-anchor" href="#_2-方法"><span>2. 方法</span></a></h2>
<table>
<thead>
<tr>
<th>方法</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>$getTradeImportVar</td>
<td style="text-align:center">获取交易入参</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$putTradeExportVar</td>
<td style="text-align:center">设置交易出参</td>
<td style="text-align:center">exportVar:any 交易出参对象</td>
</tr>
<tr>
<td>$getPanelImportVar</td>
<td style="text-align:center">获取画面入参</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$putPanelExportVar</td>
<td style="text-align:center">设置画面出参</td>
<td style="text-align:center">exportVar:any 交易出参对象</td>
</tr>
<tr>
<td>$getTargetId</td>
<td style="text-align:center">获取当前交易打开targetId</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$dm</td>
<td style="text-align:center">交易数据区</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$syncOpenTrade</td>
<td style="text-align:center">同步打开交易</td>
<td style="text-align:center">url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 交易签页名称, targetId:string 交易打开位置, importVar:any 交易入参, exportVar:any 交易出参</td>
</tr>
<tr>
<td>$asyncOpenTrade</td>
<td style="text-align:center">异步打开交易</td>
<td style="text-align:center">url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 交易签页名称, targetId:string 交易打开位置, importVar:any 交易入参</td>
</tr>
<tr>
<td>$openPanel</td>
<td style="text-align:center">打开画面</td>
<td style="text-align:center">url:string 交易vue路径,例'@/module/trade/test/test01.vue', title:string 画面签页名称, targetId:string 画面打开位置</td>
</tr>
<tr>
<td>$exitTrade</td>
<td style="text-align:center">退出交易</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$exitPanel</td>
<td style="text-align:center">退出面板</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>$sendMessage</td>
<td style="text-align:center">发送消息</td>
<td style="text-align:center">path：string 交易画面路径，data:any 消息对象</td>
</tr>
<tr>
<td>$mutiPanelNextTab</td>
<td style="text-align:center">多交易面板切换交易</td>
<td style="text-align:center">vm:多交易面板实例</td>
</tr>
<tr>
<td>$mutiPanelActiveGetFocus</td>
<td style="text-align:center">多交易面板当前展示交易获得焦点</td>
<td style="text-align:center">vm:多交易面板实例</td>
</tr>
</tbody>
</table>
<h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用"><span>3. 使用</span></a></h2>
<h3 id="_3-1-panel" tabindex="-1"><a class="header-anchor" href="#_3-1-panel"><span>3.1 Panel</span></a></h3>
<hr>
<p>Panel是展示交易的主要容器，需要初始化获取Id，用于后面打开交易时确定交易展示位置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* 	<span class="token keyword">@param</span> <span class="token parameter">host</span> 交易根对象，可通过this.getHost()或this.$a.guiView获取</span>
<span class="line">* 	<span class="token keyword">@param</span> <span class="token parameter">name</span> string 该panel的自定义名称</span>
<span class="line">* 	<span class="token keyword">@returns</span> <span class="token class-name"><span class="token punctuation">{</span>panelId<span class="token operator">:</span> string<span class="token punctuation">}</span></span></span>
<span class="line">*/</span></span>
<span class="line">panel<span class="token punctuation">.</span><span class="token function">initTarget</span><span class="token punctuation">(</span>host<span class="token punctuation">,</span>name<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token number">1</span>、如果指定了name，则panelId与name相同</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-1-1-multiplepanel" tabindex="-1"><a class="header-anchor" href="#_3-1-1-multiplepanel"><span>3.1.1 MultiplePanel</span></a></h4>
<p>多面板容器。封装tabs组件，通过签页的方式打开或关闭交易</p>
<ul>
<li>
<p>初始化</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>multiple<span class="token operator">-</span>panel ref<span class="token operator">=</span><span class="token string">"multiple-panel"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>multiple<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>panelId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'multiple-panel'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">initTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">"myMultiplePanel"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>关闭交易</p>
<p>点击签页上的<code v-pre>x</code>关闭签页时，会通知交易。交易在vue中定义<code v-pre>onClose</code>方法，当该方法返回<code v-pre>true</code>时，交易关闭。否则不做操作。</p>
</li>
</ul>
<h4 id="_3-1-2-bookpanel" tabindex="-1"><a class="header-anchor" href="#_3-1-2-bookpanel"><span>3.1.2 BookPanel</span></a></h4>
<p>多面板容器，与MultiPlePanel相比没有签页栏。
<strong>BookPanel</strong>打开交易后不会自动切换显示，需要打开交易后changePanel</p>
<ul>
<li>
<p>初始化</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>book<span class="token operator">-</span>panel ref<span class="token operator">=</span><span class="token string">"bookPanel"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>book<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>bookPanel <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>bookPanel<span class="token punctuation">.</span><span class="token function">initTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'bookPanel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
<li>
<p>切换显示交易</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//此处title为打开交易时的title</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>bookPanel<span class="token punctuation">.</span><span class="token function">changePanel</span><span class="token punctuation">(</span>title<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_3-1-3-singlepanel" tabindex="-1"><a class="header-anchor" href="#_3-1-3-singlepanel"><span>3.1.3 SinglePanel</span></a></h4>
<p>单面板容器，没有签页栏，没有切换交易操作</p>
<ul>
<li>
<p>初始化</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>single<span class="token operator">-</span>panel ref<span class="token operator">=</span><span class="token string">"singlePanel"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>single<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>singlePanel<span class="token punctuation">.</span><span class="token function">initTarget</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getHost</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token string">'singlePanel'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h4 id="_3-1-4-windowpanel" tabindex="-1"><a class="header-anchor" href="#_3-1-4-windowpanel"><span>3.1.4 WindowPanel</span></a></h4>
<ul>
<li>
<p>初始化</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//注册WindowPanel的panelId为'window'</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$a<span class="token punctuation">.</span>guiView<span class="token punctuation">.</span><span class="token function">putTradePanel</span><span class="token punctuation">(</span><span class="token string">'window'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>$windowPanel<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></li>
</ul>
<h3 id="_3-2-交易操作" tabindex="-1"><a class="header-anchor" href="#_3-2-交易操作"><span>3.2 交易操作</span></a></h3>
<hr>
<h4 id="_3-2-1-打开交易" tabindex="-1"><a class="header-anchor" href="#_3-2-1-打开交易"><span>3.2.1 打开交易</span></a></h4>
<h5 id="_3-2-1-1-异步打开交易" tabindex="-1"><a class="header-anchor" href="#_3-2-1-1-异步打开交易"><span>3.2.1.1 异步打开交易</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* </span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">url</span> 交易vue路径</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">title</span> 交易签页标题</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">targetId</span> 交易打开位置</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">importVar</span> 交易入参</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">options</span> 交易可配属性</span>
<span class="line">	<span class="token punctuation">{</span>showClose: <span class="token punctuation">{</span></span>
<span class="line">      type: Boolean,</span>
<span class="line">      default: true,</span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    showMinus: <span class="token punctuation">{</span></span>
<span class="line">      type: Boolean,</span>
<span class="line">      default: true,</span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    showMax: <span class="token punctuation">{</span></span>
<span class="line">      type: Boolean,</span>
<span class="line">      default: true,</span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    width:<span class="token punctuation">{</span></span>
<span class="line">      type: String</span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    height:<span class="token punctuation">{</span></span>
<span class="line">      type: String</span>
<span class="line">    <span class="token punctuation">}</span>,</span>
<span class="line">    fullscreen:<span class="token punctuation">{</span></span>
<span class="line">      type: Boolean</span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">*            </span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$asyncOpenTrade</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> title<span class="token punctuation">,</span> targetId<span class="token punctuation">,</span> importVar<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$asyncOpenTrade</span><span class="token punctuation">(</span><span class="token string">"@/components/bank/basic/trade-panel/InternalService.vue"</span><span class="token punctuation">,</span><span class="token string">'internal-service'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span>panelId<span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">'imputTest'</span><span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">showClose</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-1-2-同步打开交易" tabindex="-1"><a class="header-anchor" href="#_3-2-1-2-同步打开交易"><span>3.2.1.2 同步打开交易</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* </span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">url</span> 交易vue路径</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">title</span> 交易签页标题</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">targetId</span> 交易打开位置</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">importVar</span> 交易入参</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">options</span> 交易可配属性</span>
<span class="line">* <span class="token keyword">@return</span> promise 交易返回出参  </span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$syncOpenTrade</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> title<span class="token punctuation">,</span> targetId<span class="token punctuation">,</span> importVar<span class="token punctuation">,</span> options<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例子</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$syncOpenTrade</span><span class="token punctuation">(</span><span class="token string">'@/modules/Test/Test02.vue'</span><span class="token punctuation">,</span><span class="token string">'test02'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">'test02'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>、$syncOpenTrade返回promise对象，当同步打开的交易结束并关闭后，返回交易出参。</span>
<span class="line"><span class="token number">2</span>、同步打开的交易使用<span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">this.$putExportVar({'result':'Test02_success'})</span><span class="token template-punctuation string">`</span></span>设置交易出参</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-1-3-打开面板" tabindex="-1"><a class="header-anchor" href="#_3-2-1-3-打开面板"><span>3.2.1.3 打开面板</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* </span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">url</span> 交易vue路径</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">title</span> 交易签页标题</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">targetId</span> 交易打开位置</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">options</span> 交易可配属性</span>
<span class="line"> * <span class="token keyword">@param</span> <span class="token parameter">importVar</span> 画面入参</span>
<span class="line">* <span class="token keyword">@return</span> promise 交易返回出参  </span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$openPanel</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> title<span class="token punctuation">,</span> targetId<span class="token punctuation">,</span> importVar<span class="token punctuation">,</span> options<span class="token punctuation">)</span> </span>
<span class="line"></span>
<span class="line"><span class="token comment">//例子</span></span>
<span class="line"><span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$openPanel</span><span class="token punctuation">(</span><span class="token string">'@/modules/Test/Test02.vue'</span><span class="token punctuation">,</span> <span class="token string">'test02'</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token number">1</span>、打开面板与打开交易不同在于被打开的面板与打开的交易公用数据区</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-1-4-打开交易在windowpanel上" tabindex="-1"><a class="header-anchor" href="#_3-2-1-4-打开交易在windowpanel上"><span>3.2.1.4 打开交易在WindowPanel上</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//例子</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$syncOpenTrade</span><span class="token punctuation">(</span><span class="token string">'@/modules/Test/Test02.vue'</span><span class="token punctuation">,</span><span class="token string">'test02'</span><span class="token punctuation">,</span><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">'test02'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token keyword">null</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">showClose</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span><span class="token literal-property property">showMinus</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-2-退出交易" tabindex="-1"><a class="header-anchor" href="#_3-2-2-退出交易"><span>3.2.2 退出交易</span></a></h4>
<h5 id="_3-2-2-1-退出交易" tabindex="-1"><a class="header-anchor" href="#_3-2-2-1-退出交易"><span>3.2.2.1 退出交易</span></a></h5>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">$exitTrade()</span>
<span class="line"></span>
<span class="line">//例</span>
<span class="line">this.$exitTrade();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-2-2-退出画面" tabindex="-1"><a class="header-anchor" href="#_3-2-2-2-退出画面"><span>3.2.2.2 退出画面</span></a></h5>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">// 入参panel可不传，默认为退出当前画面，退出其他画面需要指定DomainPanel</span>
<span class="line">$exitPanel(panel)</span>
<span class="line"></span>
<span class="line">//例</span>
<span class="line">this.$exitPanel();</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_3-2-3-消息" tabindex="-1"><a class="header-anchor" href="#_3-2-3-消息"><span>3.2.3 消息</span></a></h4>
<h5 id="_3-2-3-1-发送消息" tabindex="-1"><a class="header-anchor" href="#_3-2-3-1-发送消息"><span>3.2.3.1 发送消息</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">url</span> vue路径</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">message</span> 消息</span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$sendMessage</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span>message<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$sendMessage</span><span class="token punctuation">(</span><span class="token string">'@/modules/Test/Test02.vue'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">message</span><span class="token operator">:</span><span class="token string">"test message"</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-3-2-接收消息" tabindex="-1"><a class="header-anchor" href="#_3-2-3-2-接收消息"><span>3.2.3.2 接收消息</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">交易在vue中定义方法</span>
<span class="line"><span class="token function">onCommonMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"><span class="token function">onMessage</span><span class="token punctuation">(</span>message<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例</span></span>
<span class="line"><span class="token function">onCommonMessage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onCommonMessage'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token function">onMessage</span><span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span><span class="token punctuation">{</span>console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'onMessage'</span><span class="token punctuation">,</span>data<span class="token punctuation">)</span><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-3-3-多交易面板切换交易" tabindex="-1"><a class="header-anchor" href="#_3-2-3-3-多交易面板切换交易"><span>3.2.3.3 多交易面板切换交易</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">vm</span> 多交易面板实例</span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$mutiPanelNextTab</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$mutiPanelNextTab</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'customServicePanel'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 作用等价于以下语句</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'customServicePanel'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">mutiPanelNextTab</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="_3-2-3-4-多交易面板焦点进入当前展示交易" tabindex="-1"><a class="header-anchor" href="#_3-2-3-4-多交易面板焦点进入当前展示交易"><span>3.2.3.4 多交易面板焦点进入当前展示交易</span></a></h5>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* <span class="token keyword">@param</span> <span class="token parameter">vm</span> 多交易面板实例</span>
<span class="line">*/</span></span>
<span class="line"><span class="token function">$mutiPanelActiveGetFocus</span><span class="token punctuation">(</span>vm<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//例</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$mutiPanelActiveGetFocus</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'customServicePanel'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//作用等价于以下语句</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">'customServicePanel'</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">mutiPanelActiveGetFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


