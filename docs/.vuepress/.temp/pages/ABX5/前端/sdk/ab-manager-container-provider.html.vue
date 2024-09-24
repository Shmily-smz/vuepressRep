<template><div><h1 id="ab-manager-container-provider" tabindex="-1"><a class="header-anchor" href="#ab-manager-container-provider"><span>ab-manager-container-provider</span></a></h1>
<h2 id="_1-声明挂载的面板元素" tabindex="-1"><a class="header-anchor" href="#_1-声明挂载的面板元素"><span>1. 声明挂载的面板元素</span></a></h2>
<h3 id="_1-1兼容tradesdk的面板" tabindex="-1"><a class="header-anchor" href="#_1-1兼容tradesdk的面板"><span>1.1兼容tradeSDK的面板</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>book-panel</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>book-panel</span><span class="token punctuation">></span></span></span>
<span class="line"> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>multiple-panel</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>multiple-panel</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2使用div作为面板" tabindex="-1"><a class="header-anchor" href="#_1-2使用div作为面板"><span>1.2使用div作为面板</span></a></h3>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>test<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-配合打开交易相关逻辑使用" tabindex="-1"><a class="header-anchor" href="#_2-配合打开交易相关逻辑使用"><span>2. 配合打开交易相关逻辑使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">title</span><span class="token operator">:</span> <span class="token string">'个人开卡'</span><span class="token punctuation">,</span> <span class="token comment">// 交易标题</span></span>
<span class="line">    <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'bpmn'</span><span class="token punctuation">,</span> <span class="token comment">// 交易类型</span></span>
<span class="line">    <span class="token literal-property property">microName</span><span class="token operator">:</span> <span class="token string">'ABX5'</span><span class="token punctuation">,</span> <span class="token comment">// 微应用名称</span></span>
<span class="line">    <span class="token literal-property property">tradeName</span><span class="token operator">:</span> <span class="token string">'scene/个人开卡/开卡'</span><span class="token punctuation">,</span> <span class="token comment">// 交易技术维度的路径</span></span>
<span class="line">    <span class="token literal-property property">moduleName</span><span class="token operator">:</span> <span class="token string">'BankModule'</span><span class="token punctuation">,</span> <span class="token comment">// 交易所属的工程信息</span></span>
<span class="line">    <span class="token literal-property property">containerType</span><span class="token operator">:</span><span class="token string">'book'</span>  <span class="token comment">// 交易的展现类型</span></span>
<span class="line">    <span class="token literal-property property">containerOptions</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">activeBook</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">near</span><span class="token operator">:</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">showMax</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">showMinus</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">showClose</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">fullscreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">customStyle</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">maxTradeSize</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">      <span class="token function-variable function">change</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">.</span>detail<span class="token punctuation">.</span><span class="token function">getStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">targetId</span><span class="token operator">:</span><span class="token string">'test'</span> <span class="token comment">// 交易挂载的元素id</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="相关参数说明" tabindex="-1"><a class="header-anchor" href="#相关参数说明"><span>相关参数说明</span></a></h3>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>可选值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>containerType</td>
<td>string</td>
<td>['base','book','tab','dialog']</td>
<td>['基础面板','书签面板','多交易面板','弹窗面板']</td>
</tr>
<tr>
<td>activeBook</td>
<td>boolean</td>
<td>-</td>
<td>book面板特有,打开交易时是否立即显示，默认值为false</td>
</tr>
<tr>
<td>near</td>
<td>boolean</td>
<td>-</td>
<td>tab面板特有,打开交易的签页的位置，true为当前激活页面的签页的下一位,false为防止到所有签页的最后,默认值是false</td>
</tr>
<tr>
<td>showMax</td>
<td>boolean</td>
<td>-</td>
<td>window面板特有,展示最大化按钮</td>
</tr>
<tr>
<td>showMinus</td>
<td>boolean</td>
<td>-</td>
<td>window面板特有,展示最小化按钮</td>
</tr>
<tr>
<td>showClose</td>
<td>boolean</td>
<td>-</td>
<td>window面板和tab面板特有,展示关闭按钮</td>
</tr>
<tr>
<td>fullscreen</td>
<td>boolean</td>
<td>-</td>
<td>window面板特有,是否全屏</td>
</tr>
<tr>
<td>customStyle</td>
<td>Object</td>
<td>-</td>
<td>window面板特有,面板自定义样式</td>
</tr>
<tr>
<td>maxTradeSize</td>
<td>number</td>
<td>-</td>
<td>tab面板和book面板特有,最大打开交易数,默认值为20</td>
</tr>
<tr>
<td>change</td>
<td>Function</td>
<td>-</td>
<td>面板切换时触发的方法,可以通过e.detail.getStatus()获取当前面板的状态</td>
</tr>
<tr>
<td>targetId</td>
<td>string</td>
<td>-</td>
<td>挂载面板的id</td>
</tr>
</tbody>
</table>
<h2 id="_3-新增全局设置容器样式的方法" tabindex="-1"><a class="header-anchor" href="#_3-新增全局设置容器样式的方法"><span>3. 新增全局设置容器样式的方法</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span>  <span class="token punctuation">{</span>setContainerStyle<span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-container-provider'</span></span>
<span class="line"></span>
<span class="line"><span class="token function">setContainerStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token literal-property property">height</span><span class="token operator">:</span><span class="token string">'100vh'</span><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


