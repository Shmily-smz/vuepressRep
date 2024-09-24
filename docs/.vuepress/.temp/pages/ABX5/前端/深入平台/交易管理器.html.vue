<template><div><h1 id="交易管理器-交易管理器" tabindex="-1"><a class="header-anchor" href="#交易管理器-交易管理器"><span>交易管理器 {#交易管理器}</span></a></h1>
<p>创建，销毁，管理交易以及面板</p>
<div class="hint-container tip">
<p class="hint-container-title">`概念`</p>
<p>概念一: 同步为阻塞，需要等待返回；异步非阻塞，无需等待返回；</p>
<p>概念二: <code v-pre>有关联</code>意为交易之间有父子关系,即父交易被销毁时子交易会先被销毁,否则无关联</p>
</div>
<div class="hint-container warning">
<p class="hint-container-title">`结论`</p>
<p>结论一: 交易 A 使用<code v-pre>同步方法</code>打开交易 B,认为是<code v-pre>有关联</code>则交易 A 是交易 B 的父交易，当交易 A 关闭时会先关闭交易 B;同步交易会有等待提示框，可自定义</p>
<p>结论二: 交易 A 使用<code v-pre>异步方法</code>打开交易 B,认为<code v-pre>无关联</code>;</p>
<p>结论三: 交易逻辑上无关联，物理逻辑上<code v-pre>dom</code>结构属于嵌套，则在关闭时依然会均关闭;</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">`结论三解释`</p>
<p>交易 A 异步打开交易 B,则交易 A 与交易 B 在逻辑上无关联，但是物理逻辑上<code v-pre>dom</code>结构属于嵌套</p>
<p>如下示例，那么在关闭交易 A 时依然会关闭交易 B</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeB<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<div class="hint-container warning">
<p class="hint-container-title">`结论`</p>
<p>结论四: 面板不可独立存在，不论是同步或异步的面板均归属于交易，创建面板必须在交易的上下文内，且当交易关闭时面板也一定会关闭</p>
<p>结论五: 面板 A 内<code v-pre>同步</code>打开面板 B，面板 B 的父级是面板 A，此时关闭面板 A 则会连带关闭面板 B</p>
<p>结论六: 面板 A 内<code v-pre>异步</code>打开面板 B，面板 B 的父级是交易，此时关闭面板 A 但是不会影响到面板 B</p>
<p>结论七: 面板 A 内<code v-pre>同步</code>打开交易 C，则认为交易 C 的父级是面板 A，此时关闭面板 A 则会连带关闭交易 C</p>
<p>结论八: 面板 A 内<code v-pre>异步</code>打开交易 C，则认为交易 C 是独立的存在，<code v-pre>无关联</code>，此时关闭面板 A 不会影响到交易 C</p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">`原则`</p>
<p>原则一：A 同步打开 B，则认为 A 在等待 B 返回，那么此时 A 会弹出一个阻塞的弹框等待 B 返回，此弹框可自定义，参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setSyncLoading">自定义同步提示</RouteLink></p>
</div>
<div class="hint-container tip">
<p class="hint-container-title">`弹框类型`交易/面板</p>
<ol>
<li>弹框类型容器选择挂载目标很重要，请不要随意挂载，并且务必清楚与选择挂载到的元素之间的关联</li>
<li>如果<code v-pre>targetId</code>在某个交易下，那么此交易被销毁时，<code v-pre>targetId</code>下的交易也会被销毁</li>
<li>如果某个弹框交易想存活时间更长，可以选择挂载在类似<code v-pre>Home.vue</code>上，这样只有在签退后才会被销毁</li>
<li>弹框类型的面板，即使不是挂载到交易的 dom 下，交易被销毁时，面板也会被销毁，且不论同异步，原因是因为面板是归属于交易</li>
<li>如果某个画面保留周期较长，请务必选择交易而不是面板</li>
</ol>
</div>
<div class="hint-container tip">
<p class="hint-container-title">显示/隐藏</p>
<ol>
<li>显示/隐藏对应的是状态的切换</li>
<li><code v-pre>tab</code>嵌套:从<code v-pre>tabB</code>切换到<code v-pre>tabA</code>时，<code v-pre>tradeA</code>交易会触发<code v-pre>_onShow</code>、且<code v-pre>tradeA1</code>也会触发<code v-pre>_onShow</code></li>
</ol>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeA<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabA1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeA1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>show<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeA2<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeB<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>hide<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tabB<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="快速查询-快速查询" tabindex="-1"><a class="header-anchor" href="#快速查询-快速查询"><span>快速查询 {#快速查询}</span></a></h2>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">createTradeSync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createTradeSync">创建同步交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">createTradeAsync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createTradeAsync">创建异步交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">createPanelSync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createPanelSync">创建同步面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">createPanelAsync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createPanelAsync">创建异步面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyTradeSync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTradeSync">销毁同步交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyTradeAsync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTradeAsync">销毁异步交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyPanelSync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyPanelSync">销毁同步面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyPanelAsync</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyPanelAsync">销毁异步面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getParcelName</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getParcelName">获取 parcel 的 name</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getContainerId</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getContainerId">获取容器的 id</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTargetId</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTargetId">获取挂载元素的 id</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getContainer</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getContainer">获取容器</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getDepartment</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getDepartment">是交易还是面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getParentContext</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getParentContext">获取父级上下文</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradeContext</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeContext">获取交易上下文</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyTrade</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTrade">销毁交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroyPanel</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyPanel">销毁面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">destroy</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroy">销毁</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">setPanelExportVar</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setPanelExportVar">设置面板出参</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getPanelImportVar</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelImportVar">获取面板入参</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">setTradeExportVar</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setTradeExportVar">设置交易出参</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradeImportVar</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeImportVar">获取交易入参</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">switchTrade</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#switchTrade">切换交易</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">switchPanel</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#switchPanel">切换面板</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradeId</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeId">获取交易 id</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getPanelId</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelId">获取面板 id</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">dispatchMessage</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#dispatchMessage">发送消息</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradeList</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeList">获取交易列表</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getPanelList</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelList">获取面板列表</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradeConfig</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeConfig">获取交易配置信息</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getTradePath</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradePath">获取交易路径</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getPanelConfig</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelConfig">获取面板配置信息</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">getPanelPath</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelPath">获取面板路径</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">setDefaultClosing</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setDefaultClosing">设置关闭提示（画面级)</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">wasTradeCreated</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E5%88%A4%E6%96%AD%E4%BA%A4%E6%98%93%E6%98%AF%E5%90%A6%E5%88%9B%E5%BB%BA">判断交易是否创建</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">wasPanelCreated</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E5%88%A4%E6%96%AD%E9%9D%A2%E6%9D%BF%E6%98%AF%E5%90%A6%E5%88%9B%E5%BB%BA">判断面板是否创建</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">turningTrade</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#turningTrade">book 类型交易翻页</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">turningPanel</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#turningPanel">book 类型面板翻页</RouteLink></td>
</tr>
<tr>
<td style="text-align:left">setSyncLoading</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#setSyncLoading">自定义同步打开时的 loading</RouteLink></td>
</tr>
</tbody>
</table>
<h2 id="概念" tabindex="-1"><a class="header-anchor" href="#概念"><span>概念</span></a></h2>
<ul>
<li><strong>交易</strong></li>
</ul>
<p>交易指具备完善独立业务能力，由一个或者多个画面组成的用于帮助用户解决问题的工具</p>
<ul>
<li><strong>面板</strong></li>
</ul>
<p>面板由一个画面组成，无法独立，归属于交易内，当交易销毁后，面板也会被销毁</p>
<ul>
<li><strong>画面</strong></li>
</ul>
<p>技术维度，当前可看作<code v-pre>.vue</code></p>
<h2 id="引用" tabindex="-1"><a class="header-anchor" href="#引用"><span>引用</span></a></h2>
<p>每个 <code v-pre>交易</code> 都是通过 <code v-pre>createTrade</code> 创建一个新的 交易实例：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync<span class="token punctuation">,</span> createPanelAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">"个人开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易标题</span></span>
<span class="line">    type<span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span> <span class="token comment">// 交易类型</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用名称,可以不传入，默认为'ABX5'</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token string">"scene/个人开卡/开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易技术维度的路径</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span> <span class="token comment">// 交易所属的工程信息</span></span>
<span class="line">    containerType<span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span> <span class="token comment">// 交易的展现类型</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  targetId<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 交易挂载的元素id</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>使用交易管理器有两种方式：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 1. 引用：</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 2. 直接使用全局API</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="交易类型-交易类型" tabindex="-1"><a class="header-anchor" href="#交易类型-交易类型"><span>交易类型 {#交易类型}</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> TradeType <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">BPMN</span> <span class="token operator">=</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span> <span class="token comment">// 多端协同流程交易</span></span>
<span class="line">  <span class="token constant">AUF</span> <span class="token operator">=</span> <span class="token string">"auf"</span><span class="token punctuation">,</span> <span class="token comment">// 单端画面流交易</span></span>
<span class="line">  <span class="token constant">VUE</span> <span class="token operator">=</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token comment">// 单画面交易</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="交易入参-交易入参" tabindex="-1"><a class="header-anchor" href="#交易入参-交易入参"><span>交易入参 {#交易入参}</span></a></h2>
<blockquote>
<p>创建交易的入参介绍</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:center">required</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">config</td>
<td style="text-align:center">true</td>
<td style="text-align:left">交易信息</td>
</tr>
<tr>
<td style="text-align:left">targetId</td>
<td style="text-align:center">true</td>
<td style="text-align:left">交易挂载的元素 id</td>
</tr>
<tr>
<td style="text-align:left">importVar</td>
<td style="text-align:center">false</td>
<td style="text-align:left">入参</td>
</tr>
<tr>
<td style="text-align:left">repeatable</td>
<td style="text-align:center">false</td>
<td style="text-align:left">是否可重复创建</td>
</tr>
<tr>
<td style="text-align:left">setDefaultFrame</td>
<td style="text-align:center">false</td>
<td style="text-align:left">设置交易模版</td>
</tr>
<tr>
<td style="text-align:left">hooks</td>
<td style="text-align:center">false</td>
<td style="text-align:left">钩子函数</td>
</tr>
<tr>
<td style="text-align:left">context</td>
<td style="text-align:center">false</td>
<td style="text-align:left">父级上下文</td>
</tr>
</tbody>
</table>
<h3 id="config-tradeconfig" tabindex="-1"><a class="header-anchor" href="#config-tradeconfig"><span>config {#tradeConfig}</span></a></h3>
<p>交易信息</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<CodeGroup>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  showMax<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  showMinus<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  showClose<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  fullscreen<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line">  customStyle<span class="token operator">:</span> Object<span class="token punctuation">;</span></span>
<span class="line">  customClass<span class="token operator">:</span> String <span class="token operator">|</span> <span class="token builtin">Array</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 交易标题</span></span>
<span class="line">    type<span class="token operator">:</span> TradeType<span class="token punctuation">;</span> <span class="token comment">// 交易类型</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 微应用名称</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 交易技术维度的路径</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 交易所属的工程信息</span></span>
<span class="line">    containerType<span class="token operator">:</span> ContainerType<span class="token punctuation">;</span> <span class="token comment">// 交易的展现类型</span></span>
<span class="line">    containerOptions<span class="token operator">?</span><span class="token operator">:</span> ContainerOptions<span class="token punctuation">;</span> <span class="token comment">// 容器的配置</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> TradeType <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">BPMN</span> <span class="token operator">=</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span> <span class="token comment">// 多端协同流程交易</span></span>
<span class="line">  <span class="token constant">AUF</span> <span class="token operator">=</span> <span class="token string">"auf"</span><span class="token punctuation">,</span> <span class="token comment">// 单端画面流交易</span></span>
<span class="line">  <span class="token constant">VUE</span> <span class="token operator">=</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token comment">// 单画面交易</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> ContainerType <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">TAB</span> <span class="token operator">=</span> <span class="token string">"tab"</span><span class="token punctuation">,</span> <span class="token comment">// 页签</span></span>
<span class="line">  <span class="token constant">WINDOW</span> <span class="token operator">=</span> <span class="token string">"dialog"</span><span class="token punctuation">,</span> <span class="token comment">// 弹框</span></span>
<span class="line">  <span class="token constant">BOOK</span> <span class="token operator">=</span> <span class="token string">"book"</span><span class="token punctuation">,</span> <span class="token comment">// book</span></span>
<span class="line">  <span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token string">"base"</span><span class="token punctuation">,</span> <span class="token comment">// 无类型</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroup>
<ul>
<li><strong>详细信息</strong></li>
</ul>
<p><code v-pre>type</code> 表示交易的类型，参考 <a href="./%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8#%E4%BA%A4%E6%98%93%E7%B1%BB%E5%9E%8B">交易类型</a></p>
<p><code v-pre>microName</code> 表示当前微应用的名称，参考<a href="./%E5%BE%AE%E5%BA%94%E7%94%A8">微应用</a></p>
<div class="hint-container tip">
<p class="hint-container-title">microName</p>
<p>微应用名称可以不传入，默认值<code v-pre>ABX5</code></p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">"个人开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易标题</span></span>
<span class="line">    type<span class="token operator">:</span> <span class="token string">"bpmn"</span><span class="token punctuation">,</span> <span class="token comment">// 交易类型</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 微应用名称</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token string">"scene/个人开卡/开卡"</span><span class="token punctuation">,</span> <span class="token comment">// 交易技术维度的路径</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span> <span class="token comment">// 交易所属的工程信息</span></span>
<span class="line">    containerType<span class="token operator">:</span> <span class="token string">"tab"</span><span class="token punctuation">,</span> <span class="token comment">// 交易的展现类型</span></span>
<span class="line">    containerOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// dialog类型的容器的配置参数</span></span>
<span class="line">      customStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        width<span class="token operator">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span></span>
<span class="line">        height<span class="token operator">:</span> <span class="token string">"200px"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      showClose<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="targetid" tabindex="-1"><a class="header-anchor" href="#targetid"><span>targetId</span></a></h3>
<p>交易挂载的元素 id</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  targetId<span class="token operator">:</span> Element<span class="token punctuation">.</span>id<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> targetId <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"trade-container"</span><span class="token punctuation">)</span><span class="token punctuation">.</span>id<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="importvar" tabindex="-1"><a class="header-anchor" href="#importvar"><span>importVar</span></a></h3>
<p>入参，可在画面内拿到</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ImportVar</span>  <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  importVar<span class="token operator">?</span><span class="token operator">:</span> ImportVar</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<CodeGroup>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 获取交易入参</span></span>
<span class="line"><span class="token keyword">const</span> tradeImportVar <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// 获取面板入参</span></span>
<span class="line"><span class="token keyword">const</span> panelImportVar <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPanelImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroup>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  importVar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    hostTradeData<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      交易请求体<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"渠道/渠道信息"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          渠道号<span class="token operator">:</span> <span class="token string">"C001"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">"代理/代理信息"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          代理标志<span class="token operator">:</span> <span class="token string">"0"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      BranchNum<span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span></span>
<span class="line">      UserNum<span class="token operator">:</span> <span class="token string">"rose"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="repeatable" tabindex="-1"><a class="header-anchor" href="#repeatable"><span>repeatable</span></a></h3>
<p>是否可重复创建交易</p>
<p>默认<code v-pre>不可重复创建</code></p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">RepeatableFn</span> <span class="token operator">=</span> <span class="token punctuation">(</span>config<span class="token operator">:</span> TradeArgsConfig<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">Repeatable</span> <span class="token operator">=</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> RepeatableFn</span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  repeatable<span class="token operator">?</span><span class="token operator">:</span> Repeatable</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  repeatable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">// 可重复创建</span></span>
<span class="line">  <span class="token function-variable function">repeatable</span><span class="token operator">:</span> <span class="token punctuation">(</span>config<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">.</span>tradeName <span class="token operator">==</span> <span class="token string">"scene/个人开卡/开卡"</span> <span class="token operator">?</span> <span class="token boolean">false</span> <span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="setdefaultframe" tabindex="-1"><a class="header-anchor" href="#setdefaultframe"><span>setDefaultFrame</span></a></h3>
<p>设置交易模版</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  setDefaultFrame<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  setDefaultFrame<span class="token operator">:</span>  <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token string">"ProjectName/pages/frame/基础布局"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>设置交易模版，仅针对<code v-pre>BPMN类型</code>交易</li>
<li>如果在创建交易时设置，将会覆盖全局设置</li>
<li>如果交易内的画面也有设置模版，将会覆盖交易时的设置</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>global -&gt; trade -&gt; page</p>
</div>
</li>
</ul>
<h3 id="hooks" tabindex="-1"><a class="header-anchor" href="#hooks"><span>hooks</span></a></h3>
<p>设置钩子函数</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span><span class="token punctuation">{</span></span>
<span class="line">    hooks<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onBeforeUnmountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onUnmountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onBeforeMountTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onMountedTrade</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html">生命周期</RouteLink></p>
<h3 id="context" tabindex="-1"><a class="header-anchor" href="#context"><span>context</span></a></h3>
<p>设置父级上下文</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ITradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  context<span class="token operator">?</span><span class="token operator">:</span> TradeContext <span class="token operator">|</span> PanelContext<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  context<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>getContext <span class="token operator">&amp;&amp;</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>如果交易内创建子交易，则表明两者存在<code v-pre>父子</code>关系，则需要传入参数<code v-pre>context</code></li>
</ol>
</li>
</ul>
<h2 id="交易出参-交易出参" tabindex="-1"><a class="header-anchor" href="#交易出参-交易出参"><span>交易出参 {#交易出参}</span></a></h2>
<blockquote>
<p><code v-pre>异步</code>打开的交易<code v-pre>无返回值</code></p>
</blockquote>
<blockquote>
<p><code v-pre>同步</code>打开的交易需要<code v-pre>await</code>, <code v-pre>有返回值</code></p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> IDestroyStatus <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">UNMOUNTED</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTED"</span><span class="token punctuation">,</span> <span class="token comment">// 销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTABORT</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTABORT"</span><span class="token punctuation">,</span> <span class="token comment">// 取消销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED_ERROR</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTED_ERROR"</span><span class="token punctuation">,</span> <span class="token comment">// 销毁报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IExportVar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IResult</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getStatus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IDestroyStatus<span class="token punctuation">;</span> <span class="token comment">// 获取销毁状态</span></span>
<span class="line">  <span class="token function-variable function">getExportVar</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IExportVar<span class="token punctuation">;</span> <span class="token comment">// 获取出参</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span>tradeOptions<span class="token operator">:</span> ITradeOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IResult<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">let</span> tradeResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token comment">// ...</span></span>
<span class="line highlighted"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易销毁的状态</span></span>
<span class="line highlighted"><span class="token keyword">let</span> tradeStatus <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易的出参</span></span>
<span class="line highlighted"><span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>只有<code v-pre>同步</code>创建的交易<code v-pre>有返回值</code></p>
</div>
<h2 id="面板入参-面板入参" tabindex="-1"><a class="header-anchor" href="#面板入参-面板入参"><span>面板入参 {#面板入参}</span></a></h2>
<blockquote>
<p>创建面板的入参介绍</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">name</th>
<th style="text-align:center">required</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">config</td>
<td style="text-align:center">true</td>
<td style="text-align:left">面板信息</td>
</tr>
<tr>
<td style="text-align:left">targetId</td>
<td style="text-align:center">true</td>
<td style="text-align:left">面板挂载的元素 id</td>
</tr>
<tr>
<td style="text-align:left">importVar</td>
<td style="text-align:center">false</td>
<td style="text-align:left">入参</td>
</tr>
<tr>
<td style="text-align:left">repeatable</td>
<td style="text-align:center">false</td>
<td style="text-align:left">是否可重复创建</td>
</tr>
<tr>
<td style="text-align:left">hooks</td>
<td style="text-align:center">false</td>
<td style="text-align:left">钩子函数</td>
</tr>
<tr>
<td style="text-align:left">context</td>
<td style="text-align:center">false</td>
<td style="text-align:left">父级上下文</td>
</tr>
</tbody>
</table>
<h3 id="config-panelconfig" tabindex="-1"><a class="header-anchor" href="#config-panelconfig"><span>config {#panelConfig}</span></a></h3>
<p>面板信息</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IPanelOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 面板标题</span></span>
<span class="line">    type<span class="token operator">:</span> TradeType<span class="token punctuation">;</span> <span class="token comment">// 面板类型</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 微应用名称</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// [!code  --] 交易技术维度的路径</span></span>
<span class="line">    panelName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// [!code  ++] 面板技术维度的路径</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 面板所属的工程信息</span></span>
<span class="line">    containerType<span class="token operator">:</span> ContainerType<span class="token punctuation">;</span> <span class="token comment">// 面板的展现类型</span></span>
<span class="line">    containerOptions<span class="token operator">?</span><span class="token operator">:</span> ContainerOptions<span class="token punctuation">;</span> <span class="token comment">// 容器的配置</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果是面板，参数<code v-pre>config.tradeName</code>需要修改成<code v-pre>config.panelName</code></p>
<p>其余使用方式请参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参/config</RouteLink></p>
</div>
<h3 id="targetid-1" tabindex="-1"><a class="header-anchor" href="#targetid-1"><span>targetId</span></a></h3>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参/targetId</RouteLink></p>
<h3 id="importvar-1" tabindex="-1"><a class="header-anchor" href="#importvar-1"><span>importVar</span></a></h3>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参/importVar</RouteLink></p>
<h3 id="repeatable-1" tabindex="-1"><a class="header-anchor" href="#repeatable-1"><span>repeatable</span></a></h3>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参/repeatable</RouteLink></p>
<h3 id="hooks-1" tabindex="-1"><a class="header-anchor" href="#hooks-1"><span>hooks</span></a></h3>
<p>设置钩子函数</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IPanelOptions</span><span class="token punctuation">{</span></span>
<span class="line">    hooks<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span>err<span class="token punctuation">,</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onMessage</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onBeforeUnmountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onUnmountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onBeforeMountPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function">_onMountedPanel</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html">生命周期</RouteLink></p>
<h3 id="context-1" tabindex="-1"><a class="header-anchor" href="#context-1"><span>context</span></a></h3>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参/context</RouteLink></p>
<h2 id="面板出参-面板出参" tabindex="-1"><a class="header-anchor" href="#面板出参-面板出参"><span>面板出参 {#面板出参}</span></a></h2>
<blockquote>
<p><code v-pre>异步</code>打开的面板<code v-pre>无返回值</code></p>
</blockquote>
<blockquote>
<p><code v-pre>同步</code>打开的面板需要<code v-pre>await</code>, <code v-pre>有返回值</code></p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> IDestroyStatus <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">UNMOUNTED</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTED"</span><span class="token punctuation">,</span> <span class="token comment">// 销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTABORT</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTABORT"</span><span class="token punctuation">,</span> <span class="token comment">// 取消销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED_ERROR</span> <span class="token operator">=</span> <span class="token string">"UNMOUNTED_ERROR"</span><span class="token punctuation">,</span> <span class="token comment">// 销毁报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IExportVar</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IResult</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getStatus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IDestroyStatus<span class="token punctuation">;</span> <span class="token comment">// 获取销毁状态</span></span>
<span class="line">  <span class="token function-variable function">getExportVar</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> IExportVar<span class="token punctuation">;</span> <span class="token comment">// 获取出参</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span>panelOptions<span class="token operator">:</span> IPanelOptions<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>IResult<span class="token operator">></span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-trade2'</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">let</span> panelResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token comment">// ...</span></span>
<span class="line highlighted"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取面板销毁的状态</span></span>
<span class="line highlighted"><span class="token keyword">let</span> panelStatus <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取面板的出参</span></span>
<span class="line highlighted"><span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>只有<code v-pre>同步</code>创建的面板<code v-pre>有返回值</code></p>
</div>
<h2 id="设置交易出入参数据-设置交易出入参数据" tabindex="-1"><a class="header-anchor" href="#设置交易出入参数据-设置交易出入参数据"><span>设置交易出入参数据 {#设置交易出入参数据}</span></a></h2>
<blockquote>
<p>交易(面板)有两组 API，分为入参，出参的设置以及获取</p>
</blockquote>
<blockquote>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%B8%8A%E4%B8%8B%E6%96%87">上下文</RouteLink></p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">setPanelExportVar</td>
<td style="text-align:left">设置面板出参</td>
</tr>
<tr>
<td style="text-align:left">getPanelImportVar</td>
<td style="text-align:left">获取面板入参</td>
</tr>
<tr>
<td style="text-align:left">setTradeExportVar</td>
<td style="text-align:left">设置交易出参</td>
</tr>
<tr>
<td style="text-align:left">getTradeImportVar</td>
<td style="text-align:left">获取交易入参</td>
</tr>
</tbody>
</table>
<h3 id="设置入参" tabindex="-1"><a class="header-anchor" href="#设置入参"><span>设置入参</span></a></h3>
<p>在创建面板或者交易时通过<code v-pre>importVar</code>设置入参,参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%85%A5%E5%8F%82">交易入参</RouteLink></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line highlighted">  importVar<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="获取出参" tabindex="-1"><a class="header-anchor" href="#获取出参"><span>获取出参</span></a></h3>
<p>交易或者面板关闭后返回，可获取出参参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E4%BA%A4%E6%98%93%E5%87%BA%E5%8F%82">交易出参</RouteLink></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">let</span> panelResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted"><span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板的出参'</span><span class="token punctuation">,</span> panelExportVar<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>必须<code v-pre>await</code>的才可以获取出参，即必须调用同步的<code v-pre>API</code></p>
</div>
<h2 id="创建交易-创建交易" tabindex="-1"><a class="header-anchor" href="#创建交易-创建交易"><span>创建交易 {#创建交易}</span></a></h2>
<blockquote>
<p>同步：指只有当前交易被销毁后才会返回，一般场景是需要得到交易返回的出参进行后续的逻辑</p>
</blockquote>
<blockquote>
<p>异步：交易创建后直接返回，不关心是否销毁，一般交易间没有相互关系时使用</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">createTradeSync</td>
<td style="text-align:center">创建同步交易</td>
</tr>
<tr>
<td style="text-align:left">createTradeAsync</td>
<td style="text-align:center">创建异步交易</td>
</tr>
</tbody>
</table>
<h3 id="createtradesync-createtradesync" tabindex="-1"><a class="header-anchor" href="#createtradesync-createtradesync"><span>createTradeSync {#createTradeSync}</span></a></h3>
<p>创建同步交易</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> DestroyStatus <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">UNMOUNTABORT</span><span class="token punctuation">,</span> <span class="token comment">// 取消销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED</span><span class="token punctuation">,</span> <span class="token comment">// 完成销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED_ERROR</span><span class="token punctuation">,</span> <span class="token comment">// 销毁报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ExportVar</span> <span class="token operator">=</span> TradeExportVar <span class="token operator">|</span> PanelExportVar<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IResult</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getStatus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> DestroyStatus<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">getExportVar</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ExportVar<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span>tradeOptions<span class="token operator">:</span> ITradeOptions<span class="token punctuation">)</span><span class="token operator">:</span> IResult<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> tradeResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易销毁的状态</span></span>
<span class="line"><span class="token keyword">let</span> tradeStatus <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易的出参</span></span>
<span class="line"><span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>同步创建交易，只有当交易销毁后才会返回结果，需要<code v-pre>await</code></li>
</ol>
</li>
</ul>
<h3 id="createtradeasync-createtradeasync" tabindex="-1"><a class="header-anchor" href="#createtradeasync-createtradeasync"><span>createTradeAsync {#createTradeAsync}</span></a></h3>
<p>创建异步交易</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createTradeAsync</span><span class="token punctuation">(</span>tradeOptions<span class="token operator">:</span> ITradeOptions<span class="token punctuation">)</span><span class="token operator">:</span> ITrade<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> trade <span class="token operator">=</span> <span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 如果希望外部销毁，可以按照如下调用</span></span>
<span class="line">trade<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>创建异步交易，不需要<code v-pre>await</code>, 但是无法获取交易的销毁状态</li>
</ol>
</li>
</ul>
<h2 id="销毁交易-销毁交易" tabindex="-1"><a class="header-anchor" href="#销毁交易-销毁交易"><span>销毁交易 {#销毁交易}</span></a></h2>
<blockquote>
<p>同步：指销毁后，等待返回结果，一般应用于需要得知销毁结果以及获取交易出参的场景</p>
</blockquote>
<blockquote>
<p>异步：调用销毁，无需<code v-pre>await</code>，无法得知销毁的情况</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">destroyTradeSync</td>
<td style="text-align:center">销毁同步交易</td>
</tr>
<tr>
<td style="text-align:left">destroyTradeAsync</td>
<td style="text-align:center">销毁异步交易</td>
</tr>
</tbody>
</table>
<h3 id="destroytradesync-destroytradesync" tabindex="-1"><a class="header-anchor" href="#destroytradesync-destroytradesync"><span>destroyTradeSync {#destroyTradeSync}</span></a></h3>
<p>销毁交易，同步</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IDestroyTradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradeName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">destroyTradeSync</span><span class="token punctuation">(</span>destroyTradeOptions<span class="token operator">:</span> IDestroyTradeOptions<span class="token punctuation">)</span><span class="token operator">:</span> ITrade<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> destroyTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> tradeResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">destroyTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// tradeOptions.config.moduleName + tradeOptions.config.tradeName</span></span>
<span class="line">  tradeName<span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// tradeId: this.getContext().getTradeId(),</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易销毁的状态</span></span>
<span class="line"><span class="token keyword">let</span> tradeStatus <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易的出参</span></span>
<span class="line"><span class="token keyword">let</span> tradeExportVar <span class="token operator">=</span> tradeResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li><code v-pre>tradeId</code>:一般应用于能获取交易<code v-pre>id</code>且交易重复创建的场景</li>
<li><code v-pre>tradeName</code>: 一般应用于可以获取<code v-pre>tradeName</code>的场景</li>
</ol>
</li>
</ul>
<h3 id="destroytradeasync-destroytradeasync" tabindex="-1"><a class="header-anchor" href="#destroytradeasync-destroytradeasync"><span>destroyTradeAsync {#destroyTradeAsync}</span></a></h3>
<p>销毁交易，异步</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IDestroyTradeOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradeName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">destroyTradeAsync</span><span class="token punctuation">(</span>destroyTradeOptions<span class="token operator">:</span> IDestroyTradeOptions<span class="token punctuation">)</span><span class="token operator">:</span> ITrade<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> destroyTradeAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">destroyTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// tradeOptions.config.moduleName + tradeOptions.config.tradeName</span></span>
<span class="line">  tradeName<span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// tradeId: this.getContext().getTradeId(),</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>销毁交易异步，一般应用于需要在某种特殊场景下手动销毁交易</li>
</ol>
</li>
</ul>
<h2 id="创建面板-创建面板" tabindex="-1"><a class="header-anchor" href="#创建面板-创建面板"><span>创建面板 {#创建面板}</span></a></h2>
<blockquote>
<p>同步：指只有当前面板被销毁后才会返回，一般场景是需要得到面板返回的出参进行后续的逻辑</p>
</blockquote>
<blockquote>
<p>异步：面板创建后直接返回，无需<code v-pre>await</code></p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">createPanelSync</td>
<td style="text-align:center">创建同步面板</td>
</tr>
<tr>
<td style="text-align:left">createPanelAsync</td>
<td style="text-align:center">创建异步面板</td>
</tr>
</tbody>
</table>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>面板无法独立存在，一般在<code v-pre>trade</code>内创建<code v-pre>面板</code>，所以创建面板请务必传入<code v-pre>context</code>！！！</p>
</div>
<h3 id="createpanelsync-createpanelsync" tabindex="-1"><a class="header-anchor" href="#createpanelsync-createpanelsync"><span>createPanelSync {#createPanelSync}</span></a></h3>
<p>创建面板，同步</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> DestroyStatus <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">UNMOUNTABORT</span><span class="token punctuation">,</span> <span class="token comment">// 取消销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED</span><span class="token punctuation">,</span> <span class="token comment">// 完成销毁</span></span>
<span class="line">  <span class="token constant">UNMOUNTED_ERROR</span><span class="token punctuation">,</span> <span class="token comment">// 销毁报错</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ExportVar</span> <span class="token operator">=</span> TradeExportVar <span class="token operator">|</span> PanelExportVar<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IResult</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function-variable function">getStatus</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> DestroyStatus<span class="token punctuation">;</span></span>
<span class="line">  <span class="token function-variable function">getExportVar</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> ExportVar<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span>PanelOptions<span class="token operator">:</span> IPanelOptions<span class="token punctuation">)</span><span class="token operator">:</span> IResult<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> panelResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    panelName<span class="token operator">:</span> <span class="token string">"scene/panel/面板.vue"</span><span class="token punctuation">,</span></span>
<span class="line">    microName<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">    title<span class="token operator">:</span> <span class="token string">"面板同步"</span><span class="token punctuation">,</span></span>
<span class="line">    containerType<span class="token operator">:</span> <span class="token string">"dialog"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  targetId<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContainerId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  context<span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">  importVar<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  repeatable<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
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
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取面板销毁的状态</span></span>
<span class="line"><span class="token keyword">let</span> panelStatus <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取面板的出参</span></span>
<span class="line"><span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>同步创建面板，只有当面板销毁后才会返回结果，需要<code v-pre>await</code></li>
</ol>
</li>
</ul>
<h3 id="createpanelasync-createpanelasync" tabindex="-1"><a class="header-anchor" href="#createpanelasync-createpanelasync"><span>createPanelAsync {#createPanelAsync}</span></a></h3>
<p>创建异步面板</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createPanelAsync</span><span class="token punctuation">(</span>panelOptions<span class="token operator">:</span> IPanelOptions<span class="token punctuation">)</span><span class="token operator">:</span> IPanel<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createPanelAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> panel <span class="token operator">=</span> <span class="token function">createPanelAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 如果希望外部销毁，可以按照如下调用</span></span>
<span class="line">panel<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>创建异步面板，不需要<code v-pre>await</code>, 但是无法获取面板的销毁状态以及出参</li>
</ol>
</li>
</ul>
<h2 id="销毁面板-销毁面板" tabindex="-1"><a class="header-anchor" href="#销毁面板-销毁面板"><span>销毁面板 {#销毁面板}</span></a></h2>
<blockquote>
<p>同步：指销毁后，等待返回结果，一般应用于需要得知销毁结果以及获取面板出参的场景</p>
</blockquote>
<blockquote>
<p>异步：调用销毁，无需<code v-pre>await</code>，无法得知销毁的情况</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">destroyPanelSync</td>
<td style="text-align:center">销毁同步面板</td>
</tr>
<tr>
<td style="text-align:left">destroyPanelAsync</td>
<td style="text-align:center">销毁异步面板</td>
</tr>
</tbody>
</table>
<h3 id="destroypanelsync-destroypanelsync" tabindex="-1"><a class="header-anchor" href="#destroypanelsync-destroypanelsync"><span>destroyPanelSync {#destroyPanelSync}</span></a></h3>
<p>销毁面板，同步</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IDestroyPanelOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">destroyPanelSync</span><span class="token punctuation">(</span>destroyPanelOptions<span class="token operator">:</span> IDestroyPanelOptions<span class="token punctuation">)</span><span class="token operator">:</span> IPanel<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> destroyPanelSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> panelResult <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">destroyPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// panelOptions.config.moduleName + panelOptions.config.panelName</span></span>
<span class="line">  panelName<span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡/开卡.vue"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// panelId: this.getContext().getPanelId(),</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易销毁的状态</span></span>
<span class="line"><span class="token keyword">let</span> panelStatus <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 获取交易的出参</span></span>
<span class="line"><span class="token keyword">let</span> panelExportVar <span class="token operator">=</span> panelResult<span class="token punctuation">.</span><span class="token function">getExportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li><code v-pre>panelId</code>:一般应用于能获取交易<code v-pre>id</code>且可重复创建的场景</li>
<li><code v-pre>panelName</code>: 一般应用于可以获取<code v-pre>panelName</code>的场景</li>
</ol>
</li>
</ul>
<h3 id="destroypanelasync-destroypanelasync" tabindex="-1"><a class="header-anchor" href="#destroypanelasync-destroypanelasync"><span>destroyPanelAsync {#destroyPanelAsync}</span></a></h3>
<p>销毁面板，异步</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">IDestroyPanelOptions</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelName<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">destroyPanelAsync</span><span class="token punctuation">(</span>destroyPanelOptions<span class="token operator">:</span> IDestroyPanelOptions<span class="token punctuation">)</span><span class="token operator">:</span> IPanel<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> destroyPanelAsync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">destroyPanelAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// panelOptions.config.moduleName + panelOptions.config.panelName</span></span>
<span class="line">  panelName<span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡/开卡.vue"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// panelId: this.getContext().getPanelId(),</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>销毁面板异步，一般应用于需要在某种特殊场景下手动销毁面板</li>
</ol>
</li>
</ul>
<h2 id="判断是否创建" tabindex="-1"><a class="header-anchor" href="#判断是否创建"><span>判断是否创建</span></a></h2>
<blockquote>
<p>判断交易或者面板是否创建</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:center">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">wasTradeCreated</td>
<td style="text-align:center">判断交易是否创建</td>
</tr>
<tr>
<td style="text-align:left">wasPanelCreated</td>
<td style="text-align:center">判断面板是否创建</td>
</tr>
</tbody>
</table>
<h3 id="wastradecreated-wastradecreated" tabindex="-1"><a class="header-anchor" href="#wastradecreated-wastradecreated"><span>wasTradeCreated {#wasTradeCreated}</span></a></h3>
<p>判断交易是否创建</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>此方法同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E5%88%A4%E6%96%AD%E4%BA%A4%E6%98%93%E6%98%AF%E5%90%A6%E5%88%9B%E5%BB%BA">this.getContext().wasTradeCreated</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WasTradeCreatedArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span>args<span class="token operator">:</span> WasTradeCreatedArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>tradeId</code> 或者 <code v-pre>tradePath</code> 至少传入一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> wasPanelCreated<span class="token punctuation">,</span> wasTradeCreated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradePath <span class="token operator">=</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> wasCreated <span class="token operator">=</span> <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">tradePath</span><span class="token operator">:</span> tradePath<span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token comment">// tradeId: ""</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易是否创建'</span><span class="token punctuation">,</span> tradePath<span class="token punctuation">,</span> wasCreated<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>交易如果未创建则返回<code v-pre>false</code></li>
</ol>
</li>
</ul>
<h3 id="waspanelcreated-waspanelcreated" tabindex="-1"><a class="header-anchor" href="#waspanelcreated-waspanelcreated"><span>wasPanelCreated {#wasPanelCreated}</span></a></h3>
<p>判断面板是否创建</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>此方法同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#%E5%88%A4%E6%96%AD%E9%9D%A2%E6%9D%BF%E6%98%AF%E5%90%A6%E5%88%9B%E5%BB%BA">this.getContext().wasPanelCreated</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WasPanelCreatedArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">wasPanelCreated</span><span class="token punctuation">(</span>args<span class="token operator">:</span> WasPanelCreatedArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>panelId</code> 或者 <code v-pre>panelPath</code> 至少传入一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> wasPanelCreated<span class="token punctuation">,</span> wasTradeCreated <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelPath <span class="token operator">=</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> wasCreated <span class="token operator">=</span> <span class="token function">wasPanelCreated</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">panelPath</span><span class="token operator">:</span> panelPath<span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token comment">// panelId: ""</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板是否创建'</span><span class="token punctuation">,</span> panelPath<span class="token punctuation">,</span> wasCreated<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>面板如果未创建则返回<code v-pre>false</code></li>
</ol>
</li>
</ul>
<h2 id="上下文-上下文" tabindex="-1"><a class="header-anchor" href="#上下文-上下文"><span>上下文 {#上下文}</span></a></h2>
<blockquote>
<p>交易或者面板的上下文，其提供一些便捷 <code v-pre>API</code>，便于交易过程中使用</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:left">API</th>
<th style="text-align:left">description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">getParcelName</td>
<td style="text-align:left">获取 parcel 的 name</td>
</tr>
<tr>
<td style="text-align:left">getContainerId</td>
<td style="text-align:left">获取容器的 id</td>
</tr>
<tr>
<td style="text-align:left">getTargetId</td>
<td style="text-align:left">获取挂载元素的 id</td>
</tr>
<tr>
<td style="text-align:left">getContainer</td>
<td style="text-align:left">获取容器</td>
</tr>
<tr>
<td style="text-align:left">getDepartment</td>
<td style="text-align:left">是交易还是面板</td>
</tr>
<tr>
<td style="text-align:left">getParentContext</td>
<td style="text-align:left">获取父级上下文</td>
</tr>
<tr>
<td style="text-align:left">getTradeContext</td>
<td style="text-align:left">获取交易上下文</td>
</tr>
<tr>
<td style="text-align:left">destroyTrade</td>
<td style="text-align:left">销毁交易</td>
</tr>
<tr>
<td style="text-align:left">destroyPanel</td>
<td style="text-align:left">销毁面板</td>
</tr>
<tr>
<td style="text-align:left">destroy</td>
<td style="text-align:left">销毁</td>
</tr>
<tr>
<td style="text-align:left">setPanelExportVar</td>
<td style="text-align:left">设置面板出参</td>
</tr>
<tr>
<td style="text-align:left">getPanelImportVar</td>
<td style="text-align:left">获取面板入参</td>
</tr>
<tr>
<td style="text-align:left">setTradeExportVar</td>
<td style="text-align:left">设置交易出参</td>
</tr>
<tr>
<td style="text-align:left">getTradeImportVar</td>
<td style="text-align:left">获取交易入参</td>
</tr>
<tr>
<td style="text-align:left">switchTrade</td>
<td style="text-align:left">切换交易</td>
</tr>
<tr>
<td style="text-align:left">switchPanel</td>
<td style="text-align:left">切换面板</td>
</tr>
<tr>
<td style="text-align:left">getTradeId</td>
<td style="text-align:left">获取交易 id</td>
</tr>
<tr>
<td style="text-align:left">getPanelId</td>
<td style="text-align:left">获取面板 id</td>
</tr>
<tr>
<td style="text-align:left">dispatchMessage</td>
<td style="text-align:left">发送消息</td>
</tr>
<tr>
<td style="text-align:left">getTradeList</td>
<td style="text-align:left">获取交易列表</td>
</tr>
<tr>
<td style="text-align:left">getPanelList</td>
<td style="text-align:left">获取面板列表</td>
</tr>
<tr>
<td style="text-align:left">getTradeConfig</td>
<td style="text-align:left">获取交易配置信息</td>
</tr>
<tr>
<td style="text-align:left">getTradePath</td>
<td style="text-align:left">获取交易路径</td>
</tr>
<tr>
<td style="text-align:left">getPanelConfig</td>
<td style="text-align:left">获取面板配置信息</td>
</tr>
<tr>
<td style="text-align:left">getPanelPath</td>
<td style="text-align:left">获取面板路径</td>
</tr>
<tr>
<td style="text-align:left">setDefaultClosing</td>
<td style="text-align:left">设置关闭提示（画面级）</td>
</tr>
<tr>
<td style="text-align:left">wasTradeCreated</td>
<td style="text-align:left">判断交易是否创建</td>
</tr>
<tr>
<td style="text-align:left">wasPanelCreated</td>
<td style="text-align:left">判断面板是否创建</td>
</tr>
<tr>
<td style="text-align:left">turningTrade</td>
<td style="text-align:left">book 类型交易翻页</td>
</tr>
<tr>
<td style="text-align:left">turningPanel</td>
<td style="text-align:left">book 类型面板翻页</td>
</tr>
<tr>
<td style="text-align:left">setSyncLoading</td>
<td style="text-align:left">自定义同步打开时的 loading</td>
</tr>
<tr>
<td style="text-align:left">createTradeSync</td>
<td style="text-align:left">创建交易同步</td>
</tr>
<tr>
<td style="text-align:left">createTradeAsync</td>
<td style="text-align:left">创建交易异步</td>
</tr>
<tr>
<td style="text-align:left">createPanelSync</td>
<td style="text-align:left">创建面板同步</td>
</tr>
<tr>
<td style="text-align:left">createPanelAsync</td>
<td style="text-align:left">创建面板异步</td>
</tr>
<tr>
<td style="text-align:left">destroyTradeSync</td>
<td style="text-align:left">销毁交易同步</td>
</tr>
<tr>
<td style="text-align:left">destroyTradeAsync</td>
<td style="text-align:left">销毁交易异步</td>
</tr>
<tr>
<td style="text-align:left">destroyPanelSync</td>
<td style="text-align:left">销毁面板同步</td>
</tr>
<tr>
<td style="text-align:left">destroyPanelAsync</td>
<td style="text-align:left">销毁面板异步</td>
</tr>
<tr>
<td style="text-align:left">tabContainerSwitchToNext</td>
<td style="text-align:left"><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#tabContainerSwitchToNext">页签切换</RouteLink></td>
</tr>
</tbody>
</table>
<h3 id="获取上下文" tabindex="-1"><a class="header-anchor" href="#获取上下文"><span>获取上下文</span></a></h3>
<ol>
<li>创建交易</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> createTradeSync <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade2"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    tradeName<span class="token operator">:</span> <span class="token string">"scene/个人开卡/开卡"</span><span class="token punctuation">,</span></span>
<span class="line">    moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ...</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>交易画面内使用<code v-pre>context</code></li>
</ol>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// filePath: BankModule/scene/个人开卡/开卡/证件选择.vue</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// [!code  focus]</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取交易id'</span><span class="token punctuation">,</span> tradeId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="getparcelname-getparcelname" tabindex="-1"><a class="header-anchor" href="#getparcelname-getparcelname"><span>getParcelName {#getParcelName}</span></a></h3>
<p>获取 parcel 的 name</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> parcelName <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取parcelName'</span><span class="token punctuation">,</span> parcelName<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>交易是通过微应用提供的<code v-pre>parcel</code>方式打开，所以会有<code v-pre>parcelName</code>，一般<code v-pre>同交易id</code></li>
</ol>
</li>
</ul>
<h3 id="getcontainerid-getcontainerid" tabindex="-1"><a class="header-anchor" href="#getcontainerid-getcontainerid"><span>getContainerId {#getContainerId}</span></a></h3>
<p>获取容器的 id</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getContainerId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> containerId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContainerId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取容器的id'</span><span class="token punctuation">,</span> containerId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>交易(面板)的创建方式是通过的<code v-pre>target</code>，创建容器，创建交易，然后将交易挂载到容器，再将容器挂载到<code v-pre>target</code></li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>container</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trade</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trade</span><span class="token punctuation">></span></span></span>
<span class="line highlighted">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>container</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="gettargetid-gettargetid" tabindex="-1"><a class="header-anchor" href="#gettargetid-gettargetid"><span>getTargetId {#getTargetId}</span></a></h3>
<p>获取挂载元素的 id</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> targetId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取targetId'</span><span class="token punctuation">,</span> targetId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>multiple-panel</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trade_container_parcel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>multiple-panel</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取交易挂载到元素的<code v-pre>id</code></li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line highlighted"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>target</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>container</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>trade</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>trade</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>container</span><span class="token punctuation">></span></span></span>
<span class="line highlighted"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>target</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h3 id="getcontainer-getcontainer" tabindex="-1"><a class="header-anchor" href="#getcontainer-getcontainer"><span>getContainer {#getContainer}</span></a></h3>
<p>获取容器</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> DOMElement<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> container <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getContainer</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取 container'</span><span class="token punctuation">,</span> container<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取<code v-pre>container</code></li>
</ol>
</li>
</ul>
<h3 id="getdepartment-getdepartment" tabindex="-1"><a class="header-anchor" href="#getdepartment-getdepartment"><span>getDepartment {#getDepartment}</span></a></h3>
<p>是交易还是面板</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> ParcelType <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  Trade<span class="token punctuation">,</span></span>
<span class="line">  Panel</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span>ParcelType<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> department <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getDepartment</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取 department'</span><span class="token punctuation">,</span> department<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取当前是交易或者面板</li>
</ol>
</li>
</ul>
<h3 id="getparentcontext-getparentcontext" tabindex="-1"><a class="header-anchor" href="#getparentcontext-getparentcontext"><span>getParentContext {#getParentContext}</span></a></h3>
<p>获取父级上下文</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">IContext</span> <span class="token operator">=</span> ITradeContext <span class="token operator">|</span> IPanelContext<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">getParentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> parentContext <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getParentContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取父级上下文'</span><span class="token punctuation">,</span> parentContext<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>如果交易内打开子交易或面板，则<code v-pre>parentContext</code>是<code v-pre>ITradeContext</code></li>
<li>如果交易内打开面板，面板内再打开面板，则<code v-pre>parentContext</code>是<code v-pre>IPanelContext</code></li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>trade -&gt; trade: parentContext = trade</li>
<li>trade -&gt; panel: parentContext = trade</li>
<li>panel -&gt; panel: parentContext = panel</li>
</ol>
</div>
<h3 id="gettradecontext-gettradecontext" tabindex="-1"><a class="header-anchor" href="#gettradecontext-gettradecontext"><span>getTradeContext {#getTradeContext}</span></a></h3>
<p>获取交易上下文</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTradeContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ITradeContext<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeContext <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'获取交易上下文'</span><span class="token punctuation">,</span> tradeContext<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>交易内打开交易，<code v-pre>tradeContext</code>是交易</li>
<li>面板内打开面板，<code v-pre>tradeContext</code>也是交易</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>trade -&gt; trade: tradeContext = trade</li>
<li>trade -&gt; panel: tradeContext = trade</li>
<li>panel -&gt; panel: tradeContext = trade</li>
</ol>
</div>
<h3 id="destroytrade-destroytrade" tabindex="-1"><a class="header-anchor" href="#destroytrade-destroytrade"><span>destroyTrade {#destroyTrade}</span></a></h3>
<p>销毁交易</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ExitType</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  Abort <span class="token operator">=</span> <span class="token string">'abort'</span> <span class="token comment">// 中止退出</span></span>
<span class="line">  Finish <span class="token operator">=</span> <span class="token string">'finish'</span> <span class="token comment">// 完成退出</span></span>
<span class="line">  Pending <span class="token operator">=</span> <span class="token string">'pending'</span> <span class="token comment">// 挂起退出</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">IDestroyArgs</span> <span class="token punctuation">{</span></span>
<span class="line">  exitType<span class="token operator">?</span><span class="token operator">:</span> ExitType</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">destroyTrade</span><span class="token punctuation">(</span>destroyArgs<span class="token operator">:</span> IDestroyArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token comment">// this.getContext().destroyTrade()  // [!code  focus]</span></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroyTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">exitType</span><span class="token operator">:</span> <span class="token string">'finish'</span><span class="token punctuation">}</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>只有创建的是交易时，才可以在画面内调用<code v-pre>destroyTrade</code></li>
<li>默认不传入参数时是<code v-pre>Abort</code>退出，即中止退出</li>
</ol>
</li>
</ul>
<h3 id="destroypanel-destroypanel" tabindex="-1"><a class="header-anchor" href="#destroypanel-destroypanel"><span>destroyPanel {#destroyPanel}</span></a></h3>
<p>销毁面板</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">destroyPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroyPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment">// [!code  focus]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>销毁面板,只能在创建面板的画面内调用</li>
</ol>
</li>
</ul>
<h3 id="destroy-destroy" tabindex="-1"><a class="header-anchor" href="#destroy-destroy"><span>destroy {#destroy}</span></a></h3>
<p>销毁，即可以销毁交易，也可以销毁面板</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>用法同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTrade">destroyPanel</RouteLink>/<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTrade">destroyTrade</RouteLink></li>
<li>参数也保持一致</li>
<li>建议采用此<code v-pre>API</code></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>如果是交易/面板内部关闭自己，建议采用异步方式</p>
</div>
<ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>销毁，创建的交易还是面板<code v-pre>均可</code>使用</li>
</ol>
</li>
</ul>
<h3 id="setpanelexportvar-setpanelexportvar" tabindex="-1"><a class="header-anchor" href="#setpanelexportvar-setpanelexportvar"><span>setPanelExportVar {#setPanelExportVar}</span></a></h3>
<p>设置面板出参</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">setPanelExportVar</span><span class="token punctuation">(</span>exportVar<span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setPanelExportVar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"面板的出参设置"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>设置面板出参</li>
</ol>
</li>
</ul>
<h3 id="getpanelimportvar-getpanelimportvar" tabindex="-1"><a class="header-anchor" href="#getpanelimportvar-getpanelimportvar"><span>getPanelImportVar {#getPanelImportVar}</span></a></h3>
<p>获取面板入参</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getPanelImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelImportVar <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPanelImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板入参'</span><span class="token punctuation">,</span> panelImportVar<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong></li>
</ul>
<h3 id="settradeexportvar-settradeexportvar" tabindex="-1"><a class="header-anchor" href="#settradeexportvar-settradeexportvar"><span>setTradeExportVar {#setTradeExportVar}</span></a></h3>
<p>设置交易出参</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">setTradeExportVar</span><span class="token punctuation">(</span>exportVar<span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setTradeExportVar</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">msg</span><span class="token operator">:</span> <span class="token string">"交易出参"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>设置交易出参</li>
</ol>
</li>
</ul>
<h3 id="gettradeimportvar-gettradeimportvar" tabindex="-1"><a class="header-anchor" href="#gettradeimportvar-gettradeimportvar"><span>getTradeImportVar {#getTradeImportVar}</span></a></h3>
<p>获取交易入参</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTradeImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeImportVar <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易入参'</span><span class="token punctuation">,</span> tradeImportVar<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取交易入参</li>
</ol>
</li>
</ul>
<h3 id="switchtrade-switchtrade" tabindex="-1"><a class="header-anchor" href="#switchtrade-switchtrade"><span>switchTrade {#switchTrade}</span></a></h3>
<p>切换交易</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">SwitchTradeArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">switchTrade</span><span class="token punctuation">(</span>args<span class="token operator">:</span> SwitchTradeArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">switchTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// tradeId:this.getContext().getTradeId(),</span></span>
<span class="line highlighted">        <span class="token literal-property property">tradePath</span><span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>切换交易，一般应用于<code v-pre>tab</code>页签打开方式的交易，相当于切换页签操作</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数<code v-pre>tradeId</code>或者<code v-pre>tradePath</code>至少传入一个，否则报错</p>
</div>
<h3 id="switchpanel-switchpanel" tabindex="-1"><a class="header-anchor" href="#switchpanel-switchpanel"><span>switchPanel {#switchPanel}</span></a></h3>
<p>切换面板</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">SwitchPanelArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">switchPanel</span><span class="token punctuation">(</span>args<span class="token operator">:</span> SwitchPanelArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">switchPanel</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token comment">// panelId:this.getContext().getPanelId(),</span></span>
<span class="line highlighted">        <span class="token literal-property property">panelPath</span><span class="token operator">:</span> <span class="token string">"BankModule/scene/个人开卡/开卡/面板.vue"</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>切换面板，一般应用于<code v-pre>tab</code>页签打开方式的面板，相当于切换页签操作</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数<code v-pre>panelId</code>或者<code v-pre>panelPath</code>至少传入一个，否则报错</p>
</div>
<h3 id="gettradeid-gettradeid" tabindex="-1"><a class="header-anchor" href="#gettradeid-gettradeid"><span>getTradeId {#getTradeId}</span></a></h3>
<p>获取交易 id</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeId</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易id'</span><span class="token punctuation">,</span> tradeId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取交易唯一标识，不会重复</li>
</ol>
</li>
</ul>
<h3 id="getpanelid-getpanelid" tabindex="-1"><a class="header-anchor" href="#getpanelid-getpanelid"><span>getPanelId {#getPanelId}</span></a></h3>
<p>获取面板 id</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getPanelId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getParcelName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPanelId</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板id'</span><span class="token punctuation">,</span> panelId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>获取面板唯一标识，不会重复</li>
</ol>
</li>
</ul>
<h3 id="dispatchmessage-dispatchmessage" tabindex="-1"><a class="header-anchor" href="#dispatchmessage-dispatchmessage"><span>dispatchMessage {#dispatchMessage}</span></a></h3>
<p>发送消息</p>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E6%B6%88%E6%81%AF%E4%BC%A0%E9%80%92.html#dispatchMessage">dispatchMessage</RouteLink></p>
<h3 id="gettradelist-gettradelist" tabindex="-1"><a class="header-anchor" href="#gettradelist-gettradelist"><span>getTradeList {#getTradeList}</span></a></h3>
<p>获取交易列表</p>
<p><code v-pre>开发中...</code></p>
<h3 id="getpanellist-getpanellist" tabindex="-1"><a class="header-anchor" href="#getpanellist-getpanellist"><span>getPanelList {#getPanelList}</span></a></h3>
<p>获取面板列表</p>
<p><code v-pre>开发中...</code></p>
<h3 id="gettradeconfig-gettradeconfig" tabindex="-1"><a class="header-anchor" href="#gettradeconfig-gettradeconfig"><span>getTradeConfig {#getTradeConfig}</span></a></h3>
<p>获取交易配置信息</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> ITradeConfig<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradeConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易配置信息'</span><span class="token punctuation">,</span> tradeConfig<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>此处的<code v-pre>tradeConfig</code>指的就是在创建交易时传入的<code v-pre>ITradeOptions.config</code>,参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#tradeConfig">config</RouteLink></li>
</ol>
</li>
</ul>
<h3 id="gettradepath-gettradepath" tabindex="-1"><a class="header-anchor" href="#gettradepath-gettradepath"><span>getTradePath {#getTradePath}</span></a></h3>
<p>获取交易路径</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getTradePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getTradePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradePath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getTradePath</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易路径'</span><span class="token punctuation">,</span> tradePath<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>此处的<code v-pre>tradePath</code>的获取原理是通过<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getTradeConfig">getTradeConfig</RouteLink>内的<code v-pre>moduleName?+tradeName</code>拼接得到</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果<code v-pre>moduleName</code>未配置，直接返回<code v-pre>tradeName</code></p>
</div>
<h3 id="getpanelconfig-getpanelconfig" tabindex="-1"><a class="header-anchor" href="#getpanelconfig-getpanelconfig"><span>getPanelConfig {#getPanelConfig}</span></a></h3>
<p>获取面板配置信息</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getPanelConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> IPanelConfig<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getPanelConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelConfig <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPanelConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板配置信息'</span><span class="token punctuation">,</span> panelConfig<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>此处的<code v-pre>panelConfig</code>指的就是在创建面板时传入的<code v-pre>IPanelOptions.config</code>,参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#panelConfig">config</RouteLink></li>
</ol>
</li>
</ul>
<h3 id="getpanelpath-getpanelpath" tabindex="-1"><a class="header-anchor" href="#getpanelpath-getpanelpath"><span>getPanelPath {#getPanelPath}</span></a></h3>
<p>获取面板路径</p>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">getPanelPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">getPanelPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelPath <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getPanelPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板路径'</span><span class="token punctuation">,</span> panelPath<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>此处的<code v-pre>panelPath</code>的获取原理是通过<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#getPanelConfig">getPanelConfig</RouteLink>内的<code v-pre>moduleName?+PanelName</code>拼接得到</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果<code v-pre>moduleName</code>未配置，直接返回<code v-pre>PanelName</code></p>
</div>
<h3 id="setdefaultclosing-setdefaultclosing" tabindex="-1"><a class="header-anchor" href="#setdefaultclosing-setdefaultclosing"><span>setDefaultClosing {#setDefaultClosing}</span></a></h3>
<p>设置关闭提示（画面级）</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>此方法可以自定义关闭提示、选择开启或关闭提示</p>
<p>此处仅为画面级，如果想设置交易以及全局级，请参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E8%AE%BE%E7%BD%AE%E5%85%B3%E9%97%AD%E6%8F%90%E7%A4%BA">设置关闭提示</RouteLink></p>
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
<span class="line"><span class="token keyword">type</span> <span class="token class-name">IDefaultClosingCb</span> <span class="token operator">=</span> <span class="token punctuation">(</span>e<span class="token operator">:</span> ILifecycleArgs<span class="token punctuation">)</span> <span class="token operator">=></span> IClosingResult</span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">setDefaultClosing</span><span class="token punctuation">(</span>callback<span class="token operator">:</span> IDefaultClosingCb<span class="token punctuation">,</span> _this<span class="token operator">?</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E9%92%A9%E5%AD%90%E5%87%BD%E6%95%B0%E5%85%A5%E5%8F%82">ILifecycleArgs</RouteLink></p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">       <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">setDefaultClosing</span><span class="token punctuation">(</span><span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line highlighted">         <span class="token comment">// return false // 取消默认关闭提示</span></span>
<span class="line highlighted">         <span class="token comment">// return true // 开启默认关闭提示</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">         <span class="token comment">// 自定义关闭提示</span></span>
<span class="line highlighted">         <span class="token comment">// ...</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">         <span class="token comment">// return e.DialogResult.CANCEL // 取消关闭动作</span></span>
<span class="line highlighted">         <span class="token keyword">return</span> e<span class="token punctuation">.</span>DialogResult<span class="token punctuation">.</span><span class="token constant">CONFIRM</span> <span class="token comment">// 关闭</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>默认开启关闭提示</li>
<li>返回值有两种：<code v-pre>boolean</code>则代表开启或禁用关闭提示；<code v-pre>DialogResult</code>代表自定义关闭提示后，需要明确用户的操作结果</li>
<li>此处为<code v-pre>画面级</code>设置，还可以在<code v-pre>交易级</code>以及<code v-pre>全局级</code>设置，具体参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#%E8%AE%BE%E7%BD%AE%E5%85%B3%E9%97%AD%E6%8F%90%E7%A4%BA">_setDefaultClosing</RouteLink></li>
<li>如果在<code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code>均设置，仅优先执行最后注册的，即执行优先级最高的，其余均忽略</li>
</ol>
</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">优先级</p>
<p>从高到低： <code v-pre>画面级 -&gt; 交易级 -&gt; 全局级</code></p>
<p>执行优先级最高的，其余均忽略</p>
</div>
<h3 id="wastradecreated-判断交易是否创建" tabindex="-1"><a class="header-anchor" href="#wastradecreated-判断交易是否创建"><span>wasTradeCreated {#判断交易是否创建}</span></a></h3>
<p>判断交易是否创建</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>基本使用同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#wasTradeCreated">wasTradeCreated</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WasTradeCreatedArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span>args<span class="token operator">:</span> WasTradeCreatedArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>tradeId</code> 或者 <code v-pre>tradePath</code> 至少传入一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> tradePath <span class="token operator">=</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> wasCreated <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">tradePath</span><span class="token operator">:</span> tradePath<span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token comment">// tradeId: ""</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'交易是否创建'</span><span class="token punctuation">,</span> tradePath<span class="token punctuation">,</span> wasCreated<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>交易如果未创建则返回<code v-pre>false</code></li>
</ol>
</li>
</ul>
<h3 id="waspanelcreated-判断面板是否创建" tabindex="-1"><a class="header-anchor" href="#waspanelcreated-判断面板是否创建"><span>wasPanelCreated {#判断面板是否创建}</span></a></h3>
<p>判断面板是否创建</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>基本使用同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#wasPanelCreated">wasPanelCreated</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">WasPanelCreatedArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">wasPanelCreated</span><span class="token punctuation">(</span>args<span class="token operator">:</span> WasPanelCreatedArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>panelId</code> 或者 <code v-pre>panelPath</code> 至少传入一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wasTradeCreated</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token keyword">let</span> panelPath <span class="token operator">=</span> <span class="token string">"BankModule/scene/个人开卡/开卡"</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> wasCreated <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">wasPanelCreated</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token literal-property property">panelPath</span><span class="token operator">:</span> panelPath<span class="token punctuation">,</span></span>
<span class="line highlighted">        <span class="token comment">// panelId: ""</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'面板是否创建'</span><span class="token punctuation">,</span> panelPath<span class="token punctuation">,</span> wasCreated<span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>面板如果未创建则返回<code v-pre>false</code></li>
</ol>
</li>
</ul>
<h3 id="turningtrade-turningtrade" tabindex="-1"><a class="header-anchor" href="#turningtrade-turningtrade"><span>turningTrade {#turningTrade}</span></a></h3>
<p><code v-pre>book</code> 类型交易翻页</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>仅支持<code v-pre>book</code>类型容器打开的交易翻页,参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#book">book</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">TurningTradeArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  tradeId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  tradePath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">turningTrade</span><span class="token punctuation">(</span>args<span class="token operator">:</span> TurningTradeArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>tradeId</code> 或者 <code v-pre>tradePath</code> 只能选择一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// Home.vue</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onMessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      e<span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"TurningBook"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span>eventName <span class="token operator">===</span> <span class="token string">"TurningBook"</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">turningTrade</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">tradePath</span><span class="token operator">:</span> <span class="token string">'BankModule/pages/pc/frame/InternalServiceView.vue'</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>仅适用于<code v-pre>book</code>类型容器的交易</li>
</ol>
</li>
</ul>
<h3 id="turningpanel-turningpanel" tabindex="-1"><a class="header-anchor" href="#turningpanel-turningpanel"><span>turningPanel {#turningPanel}</span></a></h3>
<p><code v-pre>book</code> 类型面板翻页</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>仅支持<code v-pre>book</code>类型容器打开的面板翻页,参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#book">book</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">TurningPanelArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  panelId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  panelPath<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">turningPanel</span><span class="token punctuation">(</span>args<span class="token operator">:</span> TurningPanelArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>参数 <code v-pre>panelId</code> 或者 <code v-pre>panelPath</code> 只能选择一个，否则报错</p>
</div>
<ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line">// Home.vue</span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onMessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      e<span class="token punctuation">.</span><span class="token function">registerEvent</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">"TurningBook"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line highlighted"></span>
<span class="line highlighted">      <span class="token keyword">if</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span>receiver<span class="token punctuation">.</span>eventName <span class="token operator">===</span> <span class="token string">"TurningBook"</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">turningPanel</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token literal-property property">panelPath</span><span class="token operator">:</span> <span class="token string">'BankModule/pages/pc/frame/panel1.vue'</span></span>
<span class="line highlighted">        <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>仅适用于<code v-pre>book</code>类型容器的面板</li>
</ol>
</li>
</ul>
<h3 id="setsyncloading-setsyncloading" tabindex="-1"><a class="header-anchor" href="#setsyncloading-setsyncloading"><span>setSyncLoading {#setSyncLoading}</span></a></h3>
<p>定义<code v-pre>同步</code>打开时的提示信息</p>
<div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>仅同步打开，即调用的 API 有后缀<code v-pre>Sync</code></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<p>开发中...</p>
<ul>
<li>
<p><strong>示例</strong></p>
</li>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>默认自带阻塞弹框</li>
<li>可自定义</li>
<li>仅在<code v-pre>同步情况</code>下使用</li>
</ol>
</li>
</ul>
<h3 id="createtradesync" tabindex="-1"><a class="header-anchor" href="#createtradesync"><span>createTradeSync</span></a></h3>
<p>创建交易同步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createTradeSync">创建同步交易</RouteLink></li>
<li>此处可省略<code v-pre>context</code>，此时<code v-pre>context</code>为当前交易的上下文</li>
</ol>
</div>
<h3 id="createtradeasync" tabindex="-1"><a class="header-anchor" href="#createtradeasync"><span>createTradeAsync</span></a></h3>
<p>创建交易异步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createTradeAsync">创建异步交易</RouteLink></li>
</ol>
</div>
<h3 id="createpanelsync" tabindex="-1"><a class="header-anchor" href="#createpanelsync"><span>createPanelSync</span></a></h3>
<p>创建面板同步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createPanelSync">创建同步面板</RouteLink></li>
<li>此处可省略<code v-pre>context</code>，此时<code v-pre>context</code>为当前面板的上下文</li>
</ol>
</div>
<h3 id="createpanelasync" tabindex="-1"><a class="header-anchor" href="#createpanelasync"><span>createPanelAsync</span></a></h3>
<p>创建面板异步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#createPanelAsync">创建异步面板</RouteLink></li>
</ol>
</div>
<h3 id="destroytradesync" tabindex="-1"><a class="header-anchor" href="#destroytradesync"><span>destroyTradeSync</span></a></h3>
<p>销毁交易同步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTradeSync">销毁同步交易</RouteLink></li>
<li>如果没有传入<code v-pre>tradeId</code>则默认为当前上下文交易</li>
</ol>
</div>
<h3 id="destroytradeasync" tabindex="-1"><a class="header-anchor" href="#destroytradeasync"><span>destroyTradeAsync</span></a></h3>
<p>销毁交易同步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyTradeAsync">销毁异步交易</RouteLink></li>
<li>如果没有传入<code v-pre>tradeId</code>则默认为当前上下文交易</li>
</ol>
</div>
<h3 id="destroypanelsync" tabindex="-1"><a class="header-anchor" href="#destroypanelsync"><span>destroyPanelSync</span></a></h3>
<p>销毁面板同步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyPanelSync">销毁同步面板</RouteLink></li>
<li>如果没有传入<code v-pre>panelId</code>则默认为当前上下文面板</li>
</ol>
</div>
<h3 id="destroypanelasync" tabindex="-1"><a class="header-anchor" href="#destroypanelasync"><span>destroyPanelAsync</span></a></h3>
<p>销毁面板异步</p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>同<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#destroyPanelAsync">销毁异步面板</RouteLink></li>
<li>如果没有传入<code v-pre>panelId</code>则默认为当前上下文面板</li>
</ol>
</div>
<h3 id="tabcontainerswitchtonext-tabcontainerswitchtonext" tabindex="-1"><a class="header-anchor" href="#tabcontainerswitchtonext-tabcontainerswitchtonext"><span>tabContainerSwitchToNext {#tabContainerSwitchToNext}</span></a></h3>
<blockquote>
<p>页签切换，用于容器为<code v-pre>tab</code>类型</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">SwitchArgs</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  targetId<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span> <span class="token comment">// 指定某个为tab类型容器的进行页签切换动作</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">tabContainerSwitchToNext</span><span class="token punctuation">(</span>args<span class="token operator">:</span> SwitchArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>internal-service<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trade-panel-inner-service trade-panel<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line highlighted">			<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>multiple-panel</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trade_container_parcel<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>trade-panel_inner<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>multiple-panel</span><span class="token punctuation">></span></span></span>
<span class="line">		<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">	<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">tabContainerSwitchToNext</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>getContext<span class="token punctuation">)</span> <span class="token keyword">throw</span> <span class="token keyword">new</span> <span class="token class-name">Error</span><span class="token punctuation">(</span><span class="token string">'画面内缺失context'</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token comment">// 方式一：新版使用方式，建议使用</span></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">tabContainerSwitchToNext</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">targetId</span><span class="token operator">:</span> <span class="token string">"trade_container_parcel"</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line highlighted">      <span class="token comment">// 方式二：用于兼容AB5原有使用方式</span></span>
<span class="line highlighted">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$mutiPanelNextTab</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">"trade-panel_inner"</span><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line highlighted">      <span class="token comment">// this.$refs["trade-panel_inner"].mutiPanelNextTab()</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>详细信息</strong></p>
<ol>
<li>参数<code v-pre>targetId</code>可以不传入，此时默认查找当前交易所属的<code v-pre>targetId</code>,一般应用于创建于页签内的交易</li>
</ol>
</li>
</ul>
<h2 id="容器" tabindex="-1"><a class="header-anchor" href="#容器"><span>容器</span></a></h2>
<blockquote>
<p>交易管理器自带的容器，共有四种类型，也支持用户自定义</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>更多参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/sdk/ab-manager-container-provider.html">容器</RouteLink></p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">enum</span> ContainerType <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">TAB</span> <span class="token operator">=</span> <span class="token string">"tab"</span><span class="token punctuation">,</span> <span class="token comment">// 页签</span></span>
<span class="line">  <span class="token constant">WINDOW</span> <span class="token operator">=</span> <span class="token string">"dialog"</span><span class="token punctuation">,</span> <span class="token comment">// 弹框</span></span>
<span class="line">  <span class="token constant">BOOK</span> <span class="token operator">=</span> <span class="token string">"book"</span><span class="token punctuation">,</span> <span class="token comment">// book</span></span>
<span class="line">  <span class="token constant">BASE</span> <span class="token operator">=</span> <span class="token string">"base"</span><span class="token punctuation">,</span> <span class="token comment">// 无类型</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>使用</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// ..</span></span>
<span class="line">    containerType<span class="token operator">:</span> <span class="token string">'book'</span></span>
<span class="line">    containerOptions<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      bookActive<span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="tab" tabindex="-1"><a class="header-anchor" href="#tab"><span>tab</span></a></h3>
<blockquote>
<p>页签类型</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果打开的交易希望可以同时查看互不影响，则可以使用此类型</p>
</div>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token builtin">never</span><span class="token punctuation">;</span> <span class="token comment">// 无参数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="dialog" tabindex="-1"><a class="header-anchor" href="#dialog"><span>dialog</span></a></h3>
<blockquote>
<p>弹框类型</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果打开的交易为弹框展示，一般应用于查询类，通知类</p>
</div>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  customStyle<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    width<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">    height<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  showClose<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li>待补充</li>
</ol>
<!-- TODO:  -->
</li>
</ul>
<h3 id="book-book" tabindex="-1"><a class="header-anchor" href="#book-book"><span>book {#book}</span></a></h3>
<blockquote>
<p>书签面板</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果打开的交易希望叠加在一起，相互切换显示类似于翻书则可以使用此类型</p>
</div>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  activeBook<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细信息</strong>
<ol>
<li><code v-pre>activeBook</code>默认为<code v-pre>false</code>：表示书页被创建后是否显示</li>
</ol>
</li>
</ul>
<h3 id="base" tabindex="-1"><a class="header-anchor" href="#base"><span>base</span></a></h3>
<blockquote>
<p>无类型</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果打开的交易直接挂载到目标元素，不需要容器则使用此类型</p>
</div>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">ContainerOptions</span> <span class="token operator">=</span> <span class="token builtin">never</span><span class="token punctuation">;</span> <span class="token comment">// 无参数</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="自定义容器" tabindex="-1"><a class="header-anchor" href="#自定义容器"><span>自定义容器</span></a></h3>
<blockquote>
<p>如果当前提供容器类型不满足使用，可自定义</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token function">createTradeSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  containerProvider<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">provide</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 创建容器</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        domElement<span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// ... 事件</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">recycle</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 销毁</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


