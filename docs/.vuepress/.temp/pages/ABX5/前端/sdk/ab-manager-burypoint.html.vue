<template><div><h1 id="ab-manager-burypoint-埋点调试" tabindex="-1"><a class="header-anchor" href="#ab-manager-burypoint-埋点调试"><span>ab-manager-burypoint@埋点调试</span></a></h1>
<p>用于调试交易、panel、lfc、aui组件、通讯的埋点数据。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BurypointManager<span class="token punctuation">,</span> event <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-burypoint"</span></span>
<span class="line"><span class="token keyword">let</span> burypointManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">BurypointManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>burypointManager<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-更新-设置callback" tabindex="-1"><a class="header-anchor" href="#_2-更新-设置callback"><span>2. 更新/设置callback：</span></a></h2>
<h3 id="_2-1-方式一" tabindex="-1"><a class="header-anchor" href="#_2-1-方式一"><span>2.1 方式一</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>burypointManager<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">callback</span><span class="token operator">:</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">//todo...</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-方式二" tabindex="-1"><a class="header-anchor" href="#_2-2-方式二"><span>2.2 方式二</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">// callbackRegister函数的参数为一个函数，成为新的回调函数</span></span>
<span class="line">  burypointManager<span class="token punctuation">.</span><span class="token function">callbackRegister</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//todo...</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-埋点标识" tabindex="-1"><a class="header-anchor" href="#_3-埋点标识"><span>3. 埋点标识</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">event<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">'burypoint'</span><span class="token punctuation">,</span><span class="token punctuation">{</span><span class="token literal-property property">type</span><span class="token operator">:</span><span class="token string">'OPENTRADE'</span><span class="token punctuation">,</span>url<span class="token punctuation">,</span>tradeId<span class="token punctuation">}</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-注意事项" tabindex="-1"><a class="header-anchor" href="#_4-注意事项"><span>4.注意事项</span></a></h2>
<blockquote>
<p>埋点记录auf交易,每一步的页面当作一个panel拆分开来记录(该功能仅在&gt;=<code v-pre>2.0.8</code>版本后适用)</p>
<p>如需使用@agree/ab-manager-burypoint &gt;= <code v-pre>2.0.8</code>的版本需要注意和下面这些包配套使用:</p>
<p>@agree/ab-manager-auf &gt;= <code v-pre>2.0.31</code></p>
<p>@agree/ab-manager-trade &gt;= <code v-pre>2.0.81</code></p>
<p>@agree/aui-web &gt;= <code v-pre>1.7.28</code></p>
<p>@agree/aui-m &gt;= <code v-pre>1.5.17</code></p>
<p>BREAKING CHANGE: 埋点返回的数据里,组件对应的数据里name字段改成了label字段</p>
</blockquote>
<h2 id="_5-参数" tabindex="-1"><a class="header-anchor" href="#_5-参数"><span>5. 参数</span></a></h2>
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
<td>url</td>
<td>string</td>
<td>路径</td>
</tr>
<tr>
<td>tradeId</td>
<td>string</td>
<td>交易id</td>
</tr>
</tbody>
</table>
<h2 id="_6-type-可选值" tabindex="-1"><a class="header-anchor" href="#_6-type-可选值"><span>6. type 可选值</span></a></h2>
<table>
<thead>
<tr>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>OPENTRADE</td>
<td>添加交易埋点</td>
</tr>
<tr>
<td>OPENPANEL</td>
<td>添加panel埋点</td>
</tr>
<tr>
<td>OPENLFC</td>
<td>添加LFC埋点</td>
</tr>
<tr>
<td>EXITTRADE</td>
<td>退出交易埋点</td>
</tr>
<tr>
<td>EXITPANEL</td>
<td>退出panel埋点</td>
</tr>
<tr>
<td>EXITLFC</td>
<td>退出LFC埋点</td>
</tr>
</tbody>
</table>
</div></template>


