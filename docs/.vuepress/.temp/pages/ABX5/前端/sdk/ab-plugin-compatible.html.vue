<template><div><h1 id="ab-plugin-compatible-兼容操作类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-compatible-兼容操作类组件"><span>ab-plugin-compatible @兼容操作类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Compatible <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-compatible"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-compatiblecreatecomposite-兼容模式下创建交易复合容器" tabindex="-1"><a class="header-anchor" href="#_2-1-compatiblecreatecomposite-兼容模式下创建交易复合容器"><span>2.1 compatibleCreateComposite--兼容模式下创建交易复合容器</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span>  <span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleCreateComposite</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">return</span> res<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>true代表创建复合容器成功false代表创建复合容器失败</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-2-compatibleupdateviewfocus-刷新焦点-在兼容模式下交易切换使用" tabindex="-1"><a class="header-anchor" href="#_2-2-compatibleupdateviewfocus-刷新焦点-在兼容模式下交易切换使用"><span>2.2 compatibleUpdateViewFocus--刷新焦点（在兼容模式下交易切换使用）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span>  <span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleCreateComposite</span><span class="token punctuation">(</span>trade<span class="token punctuation">,</span>tradeCode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trade</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易</td>
</tr>
<tr>
<td>tradeCode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易路径</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-3-compatibleopentrade-兼容打开交易" tabindex="-1"><a class="header-anchor" href="#_2-3-compatibleopentrade-兼容打开交易"><span>2.3 compatibleOpenTrade--兼容打开交易</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path  <span class="token operator">=</span> <span class="token string">"EMBED"</span><span class="token punctuation">;</span>  <span class="token comment">//标识ID</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Embed<span class="token punctuation">.</span><span class="token function">embeddedDestroy</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trade</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易对象</td>
</tr>
<tr>
<td>handle</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>返回3.0交易的关键要素</td>
</tr>
<tr>
<td>tradeCode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易码</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易标题</td>
</tr>
<tr>
<td>importVarsJson</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易入参</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-4-compatibleclosetrade-兼容关闭交易" tabindex="-1"><a class="header-anchor" href="#_2-4-compatibleclosetrade-兼容关闭交易"><span>2.4 compatibleCloseTrade--兼容关闭交易</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleCloseTrade</span><span class="token punctuation">(</span>trade<span class="token punctuation">,</span>tradeCode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trade</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易对象</td>
</tr>
<tr>
<td>tradeCode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易码</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-5-compatibleupdatetellerinfo-兼容修改柜员信息" tabindex="-1"><a class="header-anchor" href="#_2-5-compatibleupdatetellerinfo-兼容修改柜员信息"><span>2.5 compatibleUpdateTellerInfo--兼容修改柜员信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleUpdateTellerInfo</span><span class="token punctuation">(</span>tellerInfo<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tellerInfo</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>柜员信息</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-6-compatibleopen3xconfig-打开3-0外设配置" tabindex="-1"><a class="header-anchor" href="#_2-6-compatibleopen3xconfig-打开3-0外设配置"><span>2.6 compatibleOpen3xConfig--打开3.0外设配置</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleOpen3xConfig</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="_2-7-compatiblesendmessage-给3-0发送消息" tabindex="-1"><a class="header-anchor" href="#_2-7-compatiblesendmessage-给3-0发送消息"><span>2.7 compatibleSendMessage--给3.0发送消息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleSendMessage</span><span class="token punctuation">(</span>destinationUnitOid<span class="token punctuation">,</span>props<span class="token punctuation">,</span>app<span class="token punctuation">,</span>content<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>destinationUnitOid</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>老oid</td>
</tr>
<tr>
<td>props</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>消息入参</td>
</tr>
<tr>
<td>app</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>消息类型</td>
</tr>
<tr>
<td>content</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>消息内容</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-8-compatiblegetltsoid-兼容获取老oid" tabindex="-1"><a class="header-anchor" href="#_2-8-compatiblegetltsoid-兼容获取老oid"><span>2.8 compatibleGetLtsOid--兼容获取老oid</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleGetLtsOid</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="_2-9-compatiblecleartellerinfo-清空3-0tellerinfo信息" tabindex="-1"><a class="header-anchor" href="#_2-9-compatiblecleartellerinfo-清空3-0tellerinfo信息"><span>2.9 compatibleClearTellerInfo --清空3.0tellerinfo信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleClearTellerInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
<h3 id="_2-10-compatiblehidedomaindialog-兼容隐藏弹窗" tabindex="-1"><a class="header-anchor" href="#_2-10-compatiblehidedomaindialog-兼容隐藏弹窗"><span>2.10 compatibleHideDomainDialog --兼容隐藏弹窗</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleHideDomainDialog</span><span class="token punctuation">(</span>trade<span class="token punctuation">,</span>visible<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>trade</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易对象</td>
</tr>
<tr>
<td>visible</td>
<td>boolean</td>
<td>√</td>
<td>x</td>
<td>是否可见</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-11-compatibleopentradewindow-以windows方式打开兼容交易" tabindex="-1"><a class="header-anchor" href="#_2-11-compatibleopentradewindow-以windows方式打开兼容交易"><span>2.11 compatibleOpenTradeWindow --以windows方式打开兼容交易</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleOpenTradeWindow</span><span class="token punctuation">(</span>tradeCode<span class="token punctuation">,</span>title<span class="token punctuation">,</span>importVars<span class="token punctuation">,</span>style<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tradeCode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>交易码</td>
</tr>
<tr>
<td>title</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>标题</td>
</tr>
<tr>
<td>importVars</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>交易入参</td>
</tr>
<tr>
<td>style</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>风格</td>
</tr>
</tbody>
</table>
<hr>
<h3 id="_2-12-compatiblegetltsstarted-兼容获取老客户端启动状态" tabindex="-1"><a class="header-anchor" href="#_2-12-compatiblegetltsstarted-兼容获取老客户端启动状态"><span>2.12 compatibleGetLtsStarted--兼容获取老客户端启动状态</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span><span class="token keyword">await</span> Compatible<span class="token punctuation">.</span><span class="token function">compatibleGetLtsStarted</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><hr>
</div></template>


