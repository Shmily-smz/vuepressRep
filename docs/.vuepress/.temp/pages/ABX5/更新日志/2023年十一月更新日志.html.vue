<template><div><h1 id="更新日志-更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志-更新日志"><span>更新日志 {#更新日志}</span></a></h1>
<h2 id="_20231130-周四-10-29" tabindex="-1"><a class="header-anchor" href="#_20231130-周四-10-29"><span>20231130 周四 10:29 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-container-provider@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p>1.增加了交易页内标题属性 titleInPage</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">config</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">containerOptions</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">titleInPage</span><span class="token operator">:</span> <span class="token string">"页面标题"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">targetId</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span> <span class="token comment">// 交易挂载的元素id</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.增加了设置全局页内标题区域样式的方法</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> setTitleInPageStyle <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-container-provider"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token function">setTitleInPageStyle</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">"border-bottom"</span><span class="token operator">:</span> <span class="token string">"solid"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="_20231128-周二-10-38" tabindex="-1"><a class="header-anchor" href="#_20231128-周二-10-38"><span>20231128 周二 10:38 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-container-provider@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p>1 新增<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E7%AE%A1%E7%90%86%E5%99%A8.html#tabContainerSwitchToNext">tabContainerSwitchToNext</RouteLink>: 页签切换</p>
</div>
<h2 id="_20231127-周一-16-30" tabindex="-1"><a class="header-anchor" href="#_20231127-周一-16-30"><span>20231127 周一 16:30 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p>1.增加了不允许输入的字符的全局配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token constant">AUI</span> <span class="token keyword">from</span> <span class="token string">"@agree/aui-web"</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token constant">AUI</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">inputIgnoreChar</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2.增加了表格操作按钮颜色的配置</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-table</span></span>
<span class="line">  <span class="token attr-name">:head-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headData<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token attr-name">:btnGroup</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btnGroup<span class="token punctuation">"</span></span></span>
<span class="line"><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">btnGroup</span><span class="token operator">:</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'edit'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'编辑'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">color</span><span class="token operator">:</span> <span class="token string">'red'</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">'delete'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">'删除'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="btn-group" tabindex="-1"><a class="header-anchor" href="#btn-group"><span>Btn-Group</span></a></h3>
<table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>label</td>
<td>String</td>
<td>按钮的标识符</td>
</tr>
<tr>
<td>value</td>
<td>String</td>
<td>按钮显示的文本</td>
</tr>
<tr>
<td>color</td>
<td>String</td>
<td>按钮颜色</td>
</tr>
</tbody>
</table>
<p>3.增加了表格滚动的效果</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-table</span> <span class="token attr-name">:head-data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>headData<span class="token punctuation">"</span></span> <span class="token attr-name">:data</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tableData<span class="token punctuation">"</span></span> <span class="token attr-name">:scroll</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-table</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>属性</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>scroll</td>
<td>boolean</td>
<td>是否启动滚动效果</td>
<td>false</td>
</tr>
</tbody>
</table>
</div>
<h2 id="_20231127-周一-14-44" tabindex="-1"><a class="header-anchor" href="#_20231127-周一-14-44"><span>20231127 周一 14:44 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/cli-bundless@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复编译报错：uglifycss: unable to press no such file or deirectory.</li>
<li>取消 config.json 配置默认参数</li>
</ol>
</div>
<h2 id="_20231124-周五-10-33" tabindex="-1"><a class="header-anchor" href="#_20231124-周五-10-33"><span>20231124 周五 10:33 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-core@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-plugin-client@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-plugin-message@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-starter@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/abx-core@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/abx-startup@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>pad 端适配:socket 采用壳子创建、提供一个资源请求根路径配置 resourcePath</li>
</ol>
</div>
<h2 id="_20231116-周四-14-38" tabindex="-1"><a class="header-anchor" href="#_20231116-周四-14-38"><span>20231116 周四 14:38 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-message@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-html@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>统一<code v-pre>socket</code>的使用方式 <Badge type="info" text="陈光" /></li>
<li>修改<code v-pre>ab-html</code>里资源的加载路径 <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231115-周三-14-25" tabindex="-1"><a class="header-anchor" href="#_20231115-周三-14-25"><span>20231115 周三 14:25 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>将所有包版本统一为<code v-pre>5.0.0</code></p>
</blockquote>
<h2 id="_20231107-周二-17-11" tabindex="-1"><a class="header-anchor" href="#_20231107-周二-17-11"><span>20231107 周二 17:11 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">14</span></span>
<span class="line">@agree/ab-manager-hooks-executer@<span class="token number">1.0</span>.<span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#setSyncLoading">可自定义设置交易内打开同步交易的遮照</RouteLink> <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231106-周一-10-31" tabindex="-1"><a class="header-anchor" href="#_20231106-周一-10-31"><span>20231106 周一 10:31 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-burypoint@<span class="token number">2.0</span>.<span class="token number">10</span></span>
<span class="line">@agree/ab-manager-focus2@<span class="token number">2.1</span>.<span class="token number">25</span></span>
<span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">91</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">18</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">1.0</span>.<span class="token number">4</span></span>
<span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>完善怜悯之心、完善重置</li>
</ol>
</div>
</div></template>


