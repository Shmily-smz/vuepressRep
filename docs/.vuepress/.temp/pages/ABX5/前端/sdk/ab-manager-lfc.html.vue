<template><div><h1 id="ab-manager-lfc" tabindex="-1"><a class="header-anchor" href="#ab-manager-lfc"><span>ab-manager-lfc</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<p>注：此文档为auf交易中的lfc页面文档</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Lfc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-lfc"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-lfc文件格式示例" tabindex="-1"><a class="header-anchor" href="#_2-lfc文件格式示例"><span>2. lfc文件格式示例</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">class</span> <span class="token class-name">XXX</span> <span class="token keyword">extends</span> <span class="token class-name">Lfc</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">$options</span><span class="token operator">:</span> Options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">metadata</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">caption</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 功能描述</span></span>
<span class="line">      <span class="token literal-property property">globalArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 可操作的dm数据声明</span></span>
<span class="line">        <span class="token constant">USERNAME</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">outlets</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token string">'正常'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">close</span><span class="token operator">:</span> <span class="token string">'关闭'</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 出口声明</span></span>
<span class="line">      <span class="token literal-property property">inArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>  <span class="token comment">// 入参描述</span></span>
<span class="line">      <span class="token literal-property property">outArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>  <span class="token comment">// 出参描述</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token function">constructor</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">tradeId</span><span class="token operator">:</span> string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">super</span><span class="token punctuation">(</span>tradeId<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token function">run</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">App</span><span class="token operator">:</span> Vue</span><span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token comment">// lfc文件的执行方法,入参为上一个页面的vue实例</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">output</span><span class="token operator">:</span> <span class="token string">'normal'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">outArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span> </span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-lfc的编写规则" tabindex="-1"><a class="header-anchor" href="#_3-lfc的编写规则"><span>3. LFC的编写规则</span></a></h2>
<h3 id="_3-1-lfc相关" tabindex="-1"><a class="header-anchor" href="#_3-1-lfc相关"><span>3.1 lfc相关</span></a></h3>
<ol>
<li>
<p>lfc文件中必须定义$options属性、配置方式与vue UI页面中metadata完全一致（相关用法参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/sdk/ab-manager-auf.html">ab-manager-auf文档</RouteLink>）</p>
</li>
<li>
<p>构造函数必写</p>
</li>
<li>
<p>run方法为auf实际调用的方法。该方法有一个入参，为上一个vue界面的vue实例</p>
</li>
</ol>
</div></template>


