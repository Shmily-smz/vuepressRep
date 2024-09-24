<template><div><h1 id="更新日志-更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志-更新日志"><span>更新日志 {#更新日志}</span></a></h1>
<h2 id="_20230928-周四-16-19" tabindex="-1"><a class="header-anchor" href="#_20230928-周四-16-19"><span>20230928 周四 16:19 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">36</span></span>
<span class="line">@agree/ab-manager-lfc@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">8</span></span>
<span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">9</span></span>
<span class="line">@agree/abx-shared@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E8%8A%82%E7%82%B9%E6%8F%92%E5%85%A5">添加插入历史节点功能用于回放、还原</RouteLink></li>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E5%85%B3%E9%94%AE%E5%AD%97%E7%9B%91%E5%90%AC">添加关键字监听</RouteLink></li>
<li>添加<code v-pre>getPageInstance</code>用于在模版画面获取到页面的实例 <code v-pre>路程A4061</code>
<img src="@source/ABX5/更新日志/2023年九月资源/获取page实例.pic.jpg" alt="用于在模版画面获取到页面的实例" title="用于在模版画面获取到页面的实例"></li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// filePath: BankModule/pages/common/基础布局.vue `frame`</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> pageInstance <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPageInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"pageInstance"</span><span class="token punctuation">,</span> pageInstance<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4">
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onbeforemounttrade">_onBeforeMountTrade</RouteLink>: 添加参数<code v-pre>e.detail.options</code> <code v-pre>吕佳鑫A14969</code></li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token comment">// options为创建交易时传入的参数</span></span>
<span class="line highlighted">    <span class="token keyword">let</span> options <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>options<span class="token punctuation">;</span></span>
<span class="line highlighted">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"options"</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5">
<li><code v-pre>lfc</code>上添加<code v-pre>this._createComponent</code>用于回显区展示
<blockquote>
<p>仅在<code v-pre>bpmn</code>交易类型使用</p>
</blockquote>
</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">LfcName</span> <span class="token keyword">extends</span> <span class="token class-name"><span class="token constant">LFC</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">run</span><span class="token punctuation">(</span>context<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        label<span class="token operator">:</span> <span class="token string">"回显信息"</span><span class="token punctuation">,</span></span>
<span class="line">        type<span class="token operator">:</span> <span class="token string">"text"</span><span class="token punctuation">,</span></span>
<span class="line">        value<span class="token operator">:</span> <span class="token string">"回显信息显示"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line highlighted">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_createComponent</span><span class="token punctuation">(</span><span class="token punctuation">{</span> args<span class="token punctuation">,</span> tradeModuleID<span class="token operator">:</span> context<span class="token punctuation">.</span>tradeID <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      output<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      outArgs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        name<span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="6">
<li>修复<code v-pre>bpmn</code>交易数据<code v-pre>context</code>无法获取展示问题 <code v-pre>钟家虎A3629</code></li>
</ol>
</div>
<h2 id="_20230926-周二-10-39" tabindex="-1"><a class="header-anchor" href="#_20230926-周二-10-39"><span>20230926 周二 10:39 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">8</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">7</span></span>
<span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">86</span></span>
<span class="line">@agree/ab-manager-lifecycle@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复 bpmn 交易混入 panelMixins 报错的问题 <code v-pre>钟家虎A3629</code> <Badge type="info" text="陈光" />
<img src="@source/ABX5/更新日志/2023年九月资源/bpmn混入AB5资源报错.pic.jpg" alt="修复bpmn交易混入panelMixins报错的问题" title="修复bpmn交易混入panelMixins报错的问题"></li>
</ol>
</div>
<h2 id="_20230925-周一-16-20" tabindex="-1"><a class="header-anchor" href="#_20230925-周一-16-20"><span>20230925 周一 16:20 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">7</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复<code v-pre>bpmn</code>交易画面内无法接收到 soxket 消息的问题<Badge type="info" text="陈光" /></li>
</ol>
<blockquote>
<p>注: 如果当前画面内有面板并且处于打开状态，则均会触发<code v-pre>onSocketMessage</code></p>
</blockquote>
</div>
<h2 id="_20230922-周五-14-30" tabindex="-1"><a class="header-anchor" href="#_20230922-周五-14-30"><span>20230922 周五 14:30 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">5</span></span>
<span class="line">@agree/ab-manager-hooks-executer@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>添加<code v-pre>上一步</code>、<code v-pre>重置</code>、<code v-pre>回跳</code>的怜悯之心（默认怜悯）<Badge type="info" text="陈光" /></li>
<li>关闭前交易前可使用钩子函数<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#onBeforeUnmountTrade">_onBeforeUnmountTrade</RouteLink> <code v-pre>钟家虎A3629</code> <Badge type="info" text="陈光" /></li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ExitType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  Abort <span class="token operator">=</span> <span class="token string">'abort'</span> <span class="token comment">// 中止退出</span></span>
<span class="line">  Finish <span class="token operator">=</span> <span class="token string">'finish'</span> <span class="token comment">// 完成退出</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 退出方式</span></span>
<span class="line">      <span class="token keyword">let</span> exitType <span class="token operator">=</span> e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>exitType<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="_20230921-周四-09-06" tabindex="-1"><a class="header-anchor" href="#_20230921-周四-09-06"><span>20230921 周四 09:06 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">4</span></span>
<span class="line">@agree/ab-manager-container-provider@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复同步打开时没有遮罩层的问题</li>
<li>打开面板时设置默认 target 为交易容器</li>
</ol>
</div>
<h2 id="_20230920-周三-11-42" tabindex="-1"><a class="header-anchor" href="#_20230920-周三-11-42"><span>20230920 周三 11:42 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-channel@<span class="token number">1.0</span>.<span class="token number">0</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">5</span></span>
<span class="line">@agree/abx-launcher@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复微应用销毁后再次打开画面无法渲染问题 <code v-pre>晁中原-A6825</code> <Badge type="info" text="陈光" /></li>
<li>添加渠道设置<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E5%BC%80%E5%8F%91.html#%E6%B8%A0%E9%81%93">@agree/ab-manager-channel</RouteLink></li>
</ol>
</div>
<h2 id="_20230919-周二-17-05" tabindex="-1"><a class="header-anchor" href="#_20230919-周二-17-05"><span>20230919 周二 17:05 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">85</span></span>
<span class="line">@agree/aui-web@<span class="token number">1.7</span>.<span class="token number">37</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增获取交易面板上打开交易的集合的方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">"trade-panel_inner"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">getExistTradePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ol start="2">
<li>修复面板的 change 方法打开交易时不触发的问题</li>
</ol>
</div>
<h2 id="_20230915-周五-17-52" tabindex="-1"><a class="header-anchor" href="#_20230915-周五-17-52"><span>20230915 周五 17:52 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">84</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增获取交易面板上是否还有交易的方法</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">"trade-panel_inner"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">existTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>this.$refs['trade-panel_inner']为面板的 vue 实例, 返回值为 boolean 类型,面板上是否存在打开的交易</p>
</div>
<h2 id="_20230915-周五-15-43" tabindex="-1"><a class="header-anchor" href="#_20230915-周五-15-43"><span>20230915 周五 15:43 <Badge type="info" text="夏海峰" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">35</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-container-provider@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">83</span></span>
<span class="line">@agree/aui-web@<span class="token number">1.7</span>.<span class="token number">36</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>修复嵌套 auf 交易关闭时查找路径报错的问题</li>
<li>根据交易类型不同为容器增加不同类名</li>
<li>弹窗的 target 声明不全的问题</li>
<li>修复 abx5 交易中切换面板 change 事件不触发问题</li>
</ol>
</div>
<h2 id="_20230915-周五-15-24" tabindex="-1"><a class="header-anchor" href="#_20230915-周五-15-24"><span>20230915 周五 15:24 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复交易创建后时机问题<code v-pre>@agree/ab-manager-trade2@1.0.2</code> <code v-pre>邢高双-A18017</code><Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20230915-周五-11-21" tabindex="-1"><a class="header-anchor" href="#_20230915-周五-11-21"><span>20230915 周五 11:21 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>添加交易历史记录器<code v-pre>@agree/ab-manager-ui-history@1.0.0</code><Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20230914-周四" tabindex="-1"><a class="header-anchor" href="#_20230914-周四"><span>20230914 周四 <Badge type="info" text="解朝峥" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p>检查所有 sdk 内的<code v-pre>package.json</code>,修改如下:</p>
<ol>
<li>package.json 内字段<code v-pre>styles</code>更换为<code v-pre>style</code></li>
<li><code v-pre>x5-loader-plugin</code>、<code v-pre>ab-manager-trade2</code>、<code v-pre>ab-manager-lfc</code>、<code v-pre>abx-launcher</code>下<code v-pre>package.json</code>依赖信息完善</li>
<li>添加<code v-pre>@agree/ab-manager-ui-history</code>下的<code v-pre>package.json</code></li>
</ol>
</div>
<h2 id="_20230913-周三" tabindex="-1"><a class="header-anchor" href="#_20230913-周三"><span>20230913 周三 <Badge type="info" text="陈光/夏海峰/马林" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-message@<span class="token number">2.0</span>.<span class="token number">9</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-default-loading-page@<span class="token number">1.0</span>.<span class="token number">0</span></span>
<span class="line">@agree/ab-manager-hooks-executer@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/abx-shared@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">4</span></span>
<span class="line">@agree/ab-manager-page@<span class="token number">2.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-lfc@<span class="token number">1.0</span>.<span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>优化扫描模块的速度<Badge type="info" text="夏海峰" /></li>
<li>清除缓存时增加是否为开发模式的判断<Badge type="info" text="夏海峰" /></li>
<li><code v-pre>@agree/ab-plugin-message@2.0.9</code>: 新增配置 <code v-pre>reconnetWhenstopHeart</code>,当若干时间内心跳未返回则判断网络连接中断重新连接<Badge type="info" text="夏海峰" /></li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">pongTimeOut</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 当reconnetWhenstopHeart为true时生效, 判断网络连接中断的心跳超时时间, 单位毫秒</span></span>
<span class="line">  <span class="token literal-property property">reconnetWhenstopHeart</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 当pongTimeOut时间内心跳未返回则认为网络中断,重新连接</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>webSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageManager</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">"XXXXXX"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  options</span>
<span class="line"><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：当使用 <code v-pre>js</code> 的 <code v-pre>webscoket</code> 连接时此参数生效，使用壳子的 <code v-pre>webscoket</code> 连接时此功能仍在开发中</p>
</blockquote>
<ol start="4">
<li><code v-pre>@agree/abx-core@1.0.4</code>:<code v-pre>bpmn</code>类型交易流程操作添加 <code v-pre>socket</code> 是否断开连接的判断,<code v-pre>socket</code> 断开时不予发送请求<Badge type="info" text="马林" /></li>
<li><code v-pre>@agree/abx-shared@1.0.1</code>:<code v-pre>bpmn</code>类型交易流程操作时新增默认遮罩 <code v-pre>钟家虎A3629</code> <Badge type="info" text="马林" /></li>
<li><code v-pre>@agree/abx-manager-page@2.0.1</code>: 弃用 <code v-pre>require</code>,采用 <code v-pre>abxImport</code><Badge type="info" text="马林" /></li>
<li>编译时: 修复 <code v-pre>vue-quill-editor</code> 包编译失败问题<Badge type="info" text="马林" /></li>
<li>编译时: 新增配置 <code v-pre>sdk</code> 收集依赖项时允许排除 <code v-pre>sdk</code> 依赖项收集<Badge type="info" text="马林" /></li>
<li>编译时: 修复循环引用资源获取失败问题<Badge type="info" text="马林" /></li>
<li><code v-pre>deployConfig.json</code>新增参数<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E8%AF%B4%E6%98%8E/%E4%BA%91%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.html#deployEnv">deployEnv</RouteLink>:区分不同的部署环境：容器云、博云、虚机 <code v-pre>吕佳鑫A14969</code> <Badge type="info" text="陈光" /></li>
<li>修复点击叉关闭交易无法触发 <code v-pre>onClose</code> 问题:<code v-pre>路程A4061</code> <code v-pre>@agree/ab-manager-trade2@1.0.1</code><Badge type="info" text="陈光" /></li>
<li>修复错误钩子函数的参数 <code v-pre>e.details</code> 缺失数据问题: <code v-pre>钟家虎A3629</code> <code v-pre>@agree/abx-core@1.0.4</code><Badge type="info" text="陈光" /></li>
<li>添加默认页，在画面未加载前展示 <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#setDefaultLoading">loading</RouteLink><code v-pre>@agree/ab-manager-default-loading-page@1.0.0</code> <code v-pre>@agree/ab-manager-hooks-executer@1.0.2</code><Badge type="info" text="陈光" /></li>
<li>优化更新速度<code v-pre>@agree/x5-loader-plugin@1.0.1</code><Badge type="info" text="陈光" />
:::</li>
</ol>
<h2 id="_20230908-周五" tabindex="-1"><a class="header-anchor" href="#_20230908-周五"><span>20230908 周五 <Badge type="info" text="解朝峥" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p><strong>整理以下 sdk 内声明文件:</strong></p>
<ol>
<li><code v-pre>@agree/ab-manager-auf@2.0.34</code></li>
<li><code v-pre>@agree/ab-manager-trade@2.0.82</code></li>
<li><code v-pre>@agree/ab-manager-ofd@2.0.1</code></li>
</ol>
</div>
</div>
<h2 id="_20230906-周三" tabindex="-1"><a class="header-anchor" href="#_20230906-周三"><span>20230906 周三 <Badge type="info" text="解朝峥" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>完善错误钩子函数<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E9%94%99%E8%AF%AF%E5%A4%84%E7%90%86%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0">_onErrorCaptured</RouteLink>的参数：</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token operator">:</span> Error<span class="token punctuation">,</span> vm<span class="token operator">:</span> VueInstance<span class="token punctuation">,</span> info<span class="token operator">:</span><span class="token builtin">string</span><span class="token punctuation">,</span> e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<h2 id="_20230904-周一" tabindex="-1"><a class="header-anchor" href="#_20230904-周一"><span>20230904 周一 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li><code v-pre>bpmn</code>支持交易还原，可查看<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html">交易还原文档</RouteLink></li>
<li>修复<code v-pre>memerbOIDs</code>设置失败问题</li>
<li>支持<code v-pre>.rcd</code>的编译与加载</li>
</ol>
</div>
</div></template>


