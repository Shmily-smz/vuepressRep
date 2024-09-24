<template><div><h1 id="ab-plugin-embed-panel-前端内嵌组件桥接面板sdk" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-panel-前端内嵌组件桥接面板sdk"><span>ab-plugin-embed-panel@前端内嵌组件桥接面板sdk</span></a></h1>
<p>直接使用原始内嵌有太多需要交易自己处理的场景。比如位置刷新、遮挡弹窗、不支持垂直滚动等等。交易处理的场景太过繁琐庞杂。所以封装了 <code v-pre>embedpanel</code> 组件，帮助交易处理这些场景。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EmbedPanels <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed-panel"</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>EmbedPanels<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-属性-方法" tabindex="-1"><a class="header-anchor" href="#_2-属性-方法"><span>2. 属性 / 方法</span></a></h2>
<h3 id="_2-1-属性" tabindex="-1"><a class="header-anchor" href="#_2-1-属性"><span>2.1 属性</span></a></h3>
<table>
<thead>
<tr>
<th>属性名</th>
<th>描述</th>
<th>类型</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>addMask</td>
<td>是否添加蒙板。截图时置灰，并添加播放键图示。</td>
<td>boolean</td>
<td>true</td>
</tr>
<tr>
<td>eventAntiShakeTime</td>
<td>发消息显示内嵌的防抖时间间隔。（避免频繁调用截图方法导致卡顿或卡死）如果调用显示后，在此间隔时间内，再次触发隐藏则不进行显示。</td>
<td>number</td>
<td>300</td>
</tr>
<tr>
<td>width</td>
<td>内嵌组件宽度。</td>
<td>string</td>
<td>&quot;100%&quot;</td>
</tr>
<tr>
<td>height</td>
<td>内嵌组件高度。</td>
<td>string</td>
<td>&quot;650px&quot;</td>
</tr>
</tbody>
</table>
<h3 id="_2-2-函数" tabindex="-1"><a class="header-anchor" href="#_2-2-函数"><span>2.2 函数</span></a></h3>
<table>
<thead>
<tr>
<th>方法名</th>
<th>描述</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>createEmbedFrame</td>
<td>初始化内嵌窗口</td>
<td>handle：所内嵌的元素的句柄</td>
</tr>
<tr>
<td>embeddedDestroy</td>
<td>销毁当前内嵌窗口</td>
<td>—</td>
</tr>
</tbody>
</table>
<h2 id="_3-使用" tabindex="-1"><a class="header-anchor" href="#_3-使用"><span>3. 使用</span></a></h2>
<h3 id="_3-1-初始化" tabindex="-1"><a class="header-anchor" href="#_3-1-初始化"><span>3.1 初始化</span></a></h3>
<p><code v-pre>embed-panel</code> 初始化，通过 <code v-pre>createEmbedFrame()</code> 创建内嵌面板，需要一个参数：第三方控件的句柄。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>embed<span class="token operator">-</span>panel ref<span class="token operator">=</span><span class="token string">"embed"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>embed<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">/* 初始化。 以第三方影像控件为例。*/</span></span>
<span class="line"><span class="token keyword">async</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">	<span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"sunyard"</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">	<span class="token keyword">let</span> appId <span class="token operator">=</span> <span class="token string">"Y002"</span></span>
<span class="line">	<span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token string">"JKDS"</span></span>
<span class="line">  <span class="token comment">// 1. 调用第三方影像控件的初始化函数，获取句柄。</span></span>
<span class="line">  <span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardInit</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> hwnd <span class="token operator">=</span> result1<span class="token punctuation">.</span>msg <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 句柄。</span></span>
<span class="line">  <span class="token comment">// 2. 调用 embedpanel 的 createEmbedFrame() 初始化内嵌窗口，参数是句柄。</span></span>
<span class="line">  <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>embed<span class="token punctuation">.</span><span class="token function">createEmbedFrame</span><span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token comment">// 3. 内嵌成功，调用影像控件的方法进行显示。</span></span>
<span class="line">  <span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardCreateSunScan</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> appId<span class="token punctuation">,</span> tradeId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-销毁" tabindex="-1"><a class="header-anchor" href="#_3-2-销毁"><span>3.2 销毁</span></a></h3>
<p><code v-pre>&lt;embed-panel&gt;</code> 组件不能重复初始化。再次初始化前需要先通过 <code v-pre>embeddedDestroy()</code> 销毁。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>embed<span class="token operator">-</span>panel ref<span class="token operator">=</span><span class="token string">"embed"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>embed<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 销毁 embedpanel。</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>embed<span class="token punctuation">.</span><span class="token function">embeddedDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-3-完整示例" tabindex="-1"><a class="header-anchor" href="#_3-3-完整示例"><span>3.3 完整示例</span></a></h3>
<ol>
<li>在<code v-pre>&lt;template&gt;</code>中加入<code v-pre>&lt;embed-panel&gt;</code></li>
<li>创建初始化方法，调用<code v-pre>embed-panel</code>组件的<code v-pre>createEmbedFrame</code>方法传入第三方控件的句柄。</li>
<li>创建内嵌窗口销毁方法。</li>
</ol>
<p><strong>注意：不能重复初始化。如果需要重新初始化，需要先将前面初始化的内嵌窗口销毁，否则会同时出现两个内嵌组件并且其中一个不受控制。</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>embed<span class="token operator">-</span>panel</span>
<span class="line">    ref<span class="token operator">=</span><span class="token string">"embed"</span></span>
<span class="line">    <span class="token operator">:</span>height<span class="token operator">=</span><span class="token string">"height"</span></span>
<span class="line">    <span class="token operator">:</span>width<span class="token operator">=</span><span class="token string">"width"</span></span>
<span class="line">    <span class="token operator">:</span>addMask<span class="token operator">=</span><span class="token string">"addMask"</span></span>
<span class="line">  <span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>embed<span class="token operator">-</span>panel<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> SunYard <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed-sunyard"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"100%"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">"300px"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">addMask</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">default</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">type</span><span class="token operator">:</span> Boolean<span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/** 初始化 */</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"sunyard"</span> <span class="token operator">+</span> Math<span class="token punctuation">.</span><span class="token function">random</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> appId <span class="token operator">=</span> <span class="token string">"Y002"</span></span>
<span class="line">      <span class="token keyword">let</span> tradeId <span class="token operator">=</span> <span class="token string">"JKDS"</span></span>
<span class="line">      <span class="token comment">// 1. 调用影像控件的初始化函数，获取句柄。</span></span>
<span class="line">      <span class="token keyword">let</span> result1 <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardInit</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> hwnd <span class="token operator">=</span> result1<span class="token punctuation">.</span>msg <span class="token operator">+</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">// 句柄。</span></span>
<span class="line">      <span class="token comment">// 2. 调用 embedpanel 的 createEmbedFrame() 初始化内嵌窗口，参数是句柄。</span></span>
<span class="line">      <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>embed<span class="token punctuation">.</span><span class="token function">createEmbedFrame</span><span class="token punctuation">(</span>hwnd<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 3. 内嵌成功，调用影像控件的方法进行显示。</span></span>
<span class="line">      <span class="token keyword">let</span> result2 <span class="token operator">=</span> <span class="token keyword">await</span> SunYard<span class="token punctuation">.</span><span class="token function">sunYardCreateSunScan</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> appId<span class="token punctuation">,</span> tradeId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token doc-comment comment">/** 关闭影像控件 */</span></span>
<span class="line">    <span class="token function">sunYardFinish</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      SunYard<span class="token punctuation">.</span><span class="token function">sunYardFinish</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 销毁 embedpanel。</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>embed<span class="token punctuation">.</span><span class="token function">embeddedDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">info</span><span class="token punctuation">(</span><span class="token string">"销毁影像控件： "</span><span class="token punctuation">,</span> <span class="token keyword">this</span><span class="token punctuation">.</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token doc-comment comment">/** 其他影像控件私有接口…… */</span></span>
<span class="line">    <span class="token doc-comment comment">/** 影像控件提交 */</span></span>
<span class="line">    <span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span> reject</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">        SunYard<span class="token punctuation">.</span><span class="token function">sunYardCommOcxFunction</span><span class="token punctuation">(</span></span>
<span class="line">          <span class="token keyword">this</span><span class="token punctuation">.</span>id</span>
<span class="line">          <span class="token comment">// 其他参数</span></span>
<span class="line">          <span class="token comment">// new OnlyTradecode("td0003").sendData</span></span>
<span class="line">        <span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// TODO</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">.</span><span class="token function">catch</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// TODO</span></span>
<span class="line">            <span class="token function">resolve</span><span class="token punctuation">(</span>ResultInfo<span class="token punctuation">.</span><span class="token function">failResult</span><span class="token punctuation">(</span><span class="token string">"TEC001"</span><span class="token punctuation">,</span> <span class="token string">"提交异常"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// ……</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">beforeDestroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">sunYardFinish</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>style<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>封装好影像控件后，就可以在交易中引用并使用了。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>aui<span class="token operator">-</span>row<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>aui<span class="token operator">-</span>col <span class="token operator">:</span>span<span class="token operator">=</span><span class="token string">"24"</span> <span class="token operator">:</span>offset<span class="token operator">=</span><span class="token string">"0"</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>sun<span class="token operator">-</span>yard ref<span class="token operator">=</span><span class="token string">"sunyard"</span> height<span class="token operator">=</span><span class="token string">"600px"</span><span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>sun<span class="token operator">-</span>yard<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>aui<span class="token operator">-</span>col<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>aui<span class="token operator">-</span>row<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> SunYard <span class="token keyword">from</span> <span class="token string">"@Project/components/technology/sunyard/Sunyard.vue"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">components</span><span class="token operator">:</span> <span class="token punctuation">{</span> SunYard <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 初始化 Sunyard</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">.</span>sunyard<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>style<span class="token operator">></span><span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-内嵌遮挡处理" tabindex="-1"><a class="header-anchor" href="#_4-内嵌遮挡处理"><span>4.内嵌遮挡处理</span></a></h2>
<p>由于内嵌是漂浮在abc之上的，所以会出现内嵌组件遮挡到abc内一些其他组件的场景。对于一些场景aui-web组件库已经做了相应处理，比如<code v-pre>aui-search</code>、<code v-pre>messagebox</code>、<code v-pre>menu</code>、<code v-pre>loading</code>、<code v-pre>aui-cascader</code> 等。</p>
<p>对于其他组件，没有在组件内部做相应处理。此时需要在交易中手动隐藏、显示内嵌组件。如 <code v-pre>aui-popover</code> 。</p>
<p>以<code v-pre>aui-popover</code>为例：</p>
<p>当打开<code v-pre>aui-popover</code>并被遮挡时，需要在交易中调用 <code v-pre>EventBus</code> 发送消息截图并隐藏内嵌组件，</p>
<p>当关闭时，再发送消息通知展示内嵌组件。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>aui<span class="token operator">-</span>popover</span>
<span class="line">  ref<span class="token operator">=</span><span class="token string">"popover1"</span></span>
<span class="line">  title<span class="token operator">=</span><span class="token string">"标题"</span></span>
<span class="line">  content<span class="token operator">=</span><span class="token string">"这是一段内容,这是一段内容,这是一段内容,这是一段内容。"</span></span>
<span class="line">	@show<span class="token operator">=</span><span class="token string">'show'</span></span>
<span class="line">	@hide<span class="token operator">=</span><span class="token string">'hide'</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>aui<span class="token operator">-</span>popover<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 引用 EventBus</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-eventbus'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">show</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 通知截图、隐藏内嵌。</span></span>
<span class="line">			EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"event-popup"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"xxx"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function">hide</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 通知显示内嵌。</span></span>
<span class="line">			EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"event-popup"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">active</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"xxx"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// source表示消息来源，由什么组件发送。</span></span>
<span class="line"><span class="token comment">// 发送消息要一一对应。只发送 { active: true } ,不发送与之对应的 { active: false } 可能会导致判定错误，无法显示。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了上述消息场景外，还有个消息类型处理：<code v-pre>hotkey</code>。<code v-pre>embedpanel</code>接收到这个消息类型时，会直接切换当前的内嵌组件的显示和隐藏状态。</p>
<p>主要用于加在热键上，在出现内嵌遮挡时，可以通过热键发送消息，来实现应急性处理，去隐藏内嵌控件。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 引用 EventBus</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-eventbus'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//注册全局热键</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$setHotkey</span><span class="token punctuation">(</span><span class="token string">'global'</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token string">'ctrl+m'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">  	EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"event-popup"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">source</span><span class="token operator">:</span> <span class="token string">"hotkey"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注意不要重复注册。并且退出登录时要删除热键。</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-使用原则" tabindex="-1"><a class="header-anchor" href="#_5-使用原则"><span>5.使用原则</span></a></h2>
<ol>
<li>同一个交易面板内只能使用一个内嵌组件。</li>
<li>垂直滚动只支持在有内嵌组件所在的面板上产生滚动条的场景。其他特殊场景不支持。（比如：交易A中加入single-panel展示子交易B，交易B中有内嵌，滚动条在交易A。此种场景垂直滚动不支持。）</li>
<li>如果有滚动条，只有在滚动条在最上方时才能正常使用，否则只是图片。</li>
<li>内嵌被截图替换时，点击图片可以切换回内嵌组件，并且滚动条会移动到最上方。</li>
<li>不得重复初始化。重新初始化前需要先销毁原先的。</li>
</ol>
</div></template>


