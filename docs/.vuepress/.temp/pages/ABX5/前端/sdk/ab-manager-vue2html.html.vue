<template><div><h1 id="ab-manager-vue2html-vue转html功能" tabindex="-1"><a class="header-anchor" href="#ab-manager-vue2html-vue转html功能"><span>ab-manager-vue2html@vue转html功能</span></a></h1>
<p>用于交易还原vue转html功能，将带有数据的html字符串、style标签内css样式、以及link外联css文件路径组装成新html文件内容返回。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Vue2htmlManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-vue2html'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> vue2html <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue2htmlManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-获取交易内信息" tabindex="-1"><a class="header-anchor" href="#_2-获取交易内信息"><span>2. 获取交易内信息</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> <span class="token punctuation">{</span> html <span class="token punctuation">}</span> <span class="token operator">=</span> vue2html<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span>vm<span class="token punctuation">,</span> htmlTitle<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-1-例如vue文件内调用" tabindex="-1"><a class="header-anchor" href="#_2-1-例如vue文件内调用"><span>2.1 例如vue文件内调用</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token comment">//this为当前交易的VueComponent</span></span>
<span class="line">  <span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div<span class="token operator">></span></span>
<span class="line">      <span class="token operator">&lt;</span>p <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"test"</span><span class="token operator">></span></span>
<span class="line">        test<span class="token operator">-</span>demo ab<span class="token operator">-</span>manager<span class="token operator">-</span>vue2html<span class="token punctuation">.</span> hello world <span class="token operator">!</span> </span>
<span class="line">      <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">  <span class="token keyword">import</span> <span class="token punctuation">{</span> Vue2htmlManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-vue2html'</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> vue2html <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue2htmlManager</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">mounted</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">let</span> <span class="token punctuation">{</span> html <span class="token punctuation">}</span> <span class="token operator">=</span> vue2html<span class="token punctuation">.</span><span class="token function">resolve</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">,</span> <span class="token string">"new-title"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token comment">// 此时打印html为生成的html文件代码字符串</span></span>
<span class="line">        <span class="token comment">//console.log(html)</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span>
<span class="line">  <span class="token operator">&lt;</span>style lang<span class="token operator">=</span><span class="token string">"scss"</span> scoped<span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">.</span>test<span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span><span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span>500px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token literal-property property">background</span><span class="token operator">:</span>#add8e6<span class="token punctuation">;</span></span>
<span class="line">    text<span class="token operator">-</span>align<span class="token operator">:</span>center<span class="token punctuation">;</span></span>
<span class="line">    line<span class="token operator">-</span>height<span class="token operator">:</span>500px<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-生成html文件代码字符串" tabindex="-1"><a class="header-anchor" href="#_2-2-生成html文件代码字符串"><span>2.2 生成html文件代码字符串：</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span><span class="token operator">!</span><span class="token constant">DOCTYPE</span> html<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>html lang<span class="token operator">=</span><span class="token string">"en"</span><span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>head<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>meta charset<span class="token operator">=</span><span class="token string">"UTF-8"</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>meta name<span class="token operator">=</span><span class="token string">"viewport"</span> content<span class="token operator">=</span><span class="token string">"width=device-width, initial-scale=1.0"</span><span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>title<span class="token operator">></span><span class="token keyword">new</span><span class="token operator">-</span>title<span class="token operator">&lt;</span><span class="token operator">/</span>title<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>style type<span class="token operator">=</span><span class="token string">"text/css"</span><span class="token operator">></span></span>
<span class="line">    <span class="token punctuation">.</span>test<span class="token punctuation">[</span>data<span class="token operator">-</span>v<span class="token operator">-</span>f064c7fe<span class="token punctuation">]</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">      <span class="token literal-property property">background</span><span class="token operator">:</span> <span class="token function">rgb</span><span class="token punctuation">(</span><span class="token number">173</span><span class="token punctuation">,</span> <span class="token number">216</span><span class="token punctuation">,</span> <span class="token number">230</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      text<span class="token operator">-</span>align<span class="token operator">:</span> center<span class="token punctuation">;</span></span>
<span class="line">      line<span class="token operator">-</span>height<span class="token operator">:</span> 500px<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">.</span>restore<span class="token operator">-</span>view <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">100</span><span class="token operator">%</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token literal-property property">overflow</span><span class="token operator">:</span> hidden<span class="token punctuation">;</span></span>
<span class="line">      overflow<span class="token operator">-</span>y<span class="token operator">:</span> scroll<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>head<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span>body<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span>div <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"restore-view"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>p data<span class="token operator">-</span>v<span class="token operator">-</span>f064c7fe<span class="token operator">=</span><span class="token string">""</span> <span class="token keyword">class</span><span class="token operator">=</span><span class="token string">"test"</span><span class="token operator">></span></span>
<span class="line">      test<span class="token operator">-</span>demo ab<span class="token operator">-</span>manager<span class="token operator">-</span>vue2html<span class="token punctuation">.</span> hello world <span class="token operator">!</span> </span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span></span>
<span class="line">  <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>body<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>html<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数:</li>
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
<td>htmlTitle</td>
<td>string</td>
<td>还原html文件标题</td>
</tr>
<tr>
<td>vm</td>
<td>VueComponent</td>
<td>当前交易的VueComponent</td>
</tr>
</tbody>
</table>
<ul>
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
<td>html</td>
<td>string</td>
<td>html文件内容字符串</td>
</tr>
</tbody>
</table>
</div></template>


