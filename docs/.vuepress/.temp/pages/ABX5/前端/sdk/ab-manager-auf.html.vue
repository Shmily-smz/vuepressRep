<template><div><h1 id="ab-manager-auf-轻量级画面流管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-auf-轻量级画面流管理"><span>ab-manager-auf@轻量级画面流管理</span></a></h1>
<h2 id="_1-使用" tabindex="-1"><a class="header-anchor" href="#_1-使用"><span>1. 使用</span></a></h2>
<p><strong>需要手动引入注册的部分</strong></p>
<blockquote>
<p>在app-loaderjs里面</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">//ab-manager-auf</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@agree/ab-manager-auf/dist/auf-panel/index.css'</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AufPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-auf"</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>AufPlugin<span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">$aufAlias</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 项目中的别名</span></span>
<span class="line">    <span class="token string-property property">'@FM'</span><span class="token operator">:</span> <span class="token string">'TEClientFM'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'@TETrade'</span><span class="token operator">:</span> <span class="token string">'TEClientTrade'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'@Trade'</span><span class="token operator">:</span> <span class="token string">'TEClientTrade'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'@METrade'</span><span class="token operator">:</span> <span class="token string">'MEClientTrade'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'@SSTrade'</span><span class="token operator">:</span> <span class="token string">'SSClientTrade'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token string-property property">'@Project'</span><span class="token operator">:</span> <span class="token string">'TEProject'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//gulp打包需要添加此方法</span></span>
<span class="line">  <span class="token function">$loadAuf</span><span class="token punctuation">(</span><span class="token parameter">path</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">resolve<span class="token punctuation">,</span>reject</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">json!@/</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>path<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">.auf.json</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token parameter">module</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">resolve</span><span class="token punctuation">(</span>module<span class="token punctuation">)</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//控制右键菜单显示，默认为true</span></span>
<span class="line">  <span class="token literal-property property">$canRightClickDirective</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//是否在控制台打印log,默认为true</span></span>
<span class="line">  <span class="token literal-property property">$isConsoleLog</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//打印日志的回调函数,log为当前返回的信息</span></span>
<span class="line">  <span class="token function-variable function">$callback</span><span class="token operator">:</span><span class="token punctuation">(</span><span class="token parameter">log</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//XXX:对当前返回信息的处理</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//步进式loadUId的timeout,不设置默认10000</span></span>
<span class="line">  <span class="token literal-property property">$stepTimeout</span><span class="token operator">:</span><span class="token number">10000</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//过滤属性不克隆(循环引用的对象) </span></span>
<span class="line">  <span class="token literal-property property">$aufNotCopyKeys</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-创建一个xxx-auf-json" tabindex="-1"><a class="header-anchor" href="#_1-1-创建一个xxx-auf-json"><span>1.1 创建一个<code v-pre>xxx.auf.json</code></span></a></h3>
<blockquote>
<p><a href="#aufjson-%E6%96%87%E4%BB%B6%E7%9A%84%E8%AF%B4%E6%98%8E">具体json格式说明在后面会有详细介绍</a></p>
</blockquote>
<h3 id="_1-2-在主交易中使用如下" tabindex="-1"><a class="header-anchor" href="#_1-2-在主交易中使用如下"><span>1.2 在主交易中使用如下</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>auf-panel</span></span>
<span class="line">    <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>auf-panel<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:_tradeId</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>tradeId<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token attr-name">:getDomain</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>aufData<span class="token punctuation">"</span></span></span>
<span class="line">  <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>auf-panel</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">import</span> <span class="token constant">AUF</span> <span class="token keyword">from</span> <span class="token string">"xxx.auf.json"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">tradeId</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">aufData</span><span class="token operator">:</span> <span class="token keyword">null</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>$refs<span class="token punctuation">[</span><span class="token string">"auf-panel"</span><span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token function">_initAuf</span><span class="token punctuation">(</span><span class="token constant">AUF</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">closeFunction</span><span class="token operator">:</span><span class="token keyword">this</span><span class="token punctuation">.</span>close<span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">isShowAll</span><span class="token operator">:</span><span class="token boolean">true</span><span class="token operator">||</span><span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">initVarMap</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">initArgs</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">UserName</span><span class="token operator">:</span><span class="token string">'张三'</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-创建ui节点" tabindex="-1"><a class="header-anchor" href="#_1-3-创建ui节点"><span>1.3 创建<code v-pre>UI</code>节点</span></a></h3>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- 交易开发部分 TODO --></span></span>
<span class="line">    <span class="token comment">&lt;!-- 交易尾部 --></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section_footer<span class="token punctuation">"</span></span> <span class="token attr-name">v-if</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>$showType == 'step'<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>exit<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"SelectService"</span><span class="token punctuation">,</span> <span class="token comment">// UI 节点必须有 name 名</span></span>
<span class="line">  <span class="token literal-property property">metadata</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// 声明全局数据,且对全局数据做权限管理</span></span>
<span class="line">    <span class="token literal-property property">globalArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">SeviceType</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">"业务类型"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">inArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">arg1</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'入参1'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token keyword">default</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">outArgs</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">outlets</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">normal</span><span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">close</span><span class="token operator">:</span> <span class="token string">"关闭"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-创建lfc节点" tabindex="-1"><a class="header-anchor" href="#_1-4-创建lfc节点"><span>1.4 创建<code v-pre>LFC</code>节点</span></a></h3>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Lfc <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-auf"</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">class</span> <span class="token class-name">TestLfc</span> <span class="token keyword">extends</span> <span class="token class-name">Lfc</span> <span class="token punctuation">{</span></span>
<span class="line">    $options<span class="token operator">:</span> Options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">      metadata<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        caption<span class="token operator">:</span> <span class="token string">"是否需要身份核查"</span><span class="token punctuation">,</span></span>
<span class="line">        globalArgs<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        outlets<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          normal<span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">          close<span class="token operator">:</span> <span class="token string">"关闭"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        inArgs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        outArgs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line"></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token function">constructor</span><span class="token punctuation">(</span>tradeId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">super</span><span class="token punctuation">(</span>tradeId<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token function">run</span><span class="token punctuation">(</span>App<span class="token operator">:</span> Vue<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">//todo:此处output为lfc的出口名称</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          output<span class="token operator">:</span> <span class="token string">'normal'</span><span class="token punctuation">,</span></span>
<span class="line">          outArgs<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">          dm<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token punctuation">{</span> TestLfc <span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-5-创建auf节点" tabindex="-1"><a class="header-anchor" href="#_1-5-创建auf节点"><span>1.5 创建<code v-pre>AUF</code>节点</span></a></h3>
<ul>
<li>创建auf节点即创建一个新的auf交易，path绑定新auf交易的json文件</li>
</ul>
<h3 id="_1-6-auf-json-文件的说明" tabindex="-1"><a class="header-anchor" href="#_1-6-auf-json-文件的说明"><span>1.6 <code v-pre>AUF.JSON</code> 文件的说明</span></a></h3>
<ul>
<li>结构如下</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"start"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">70</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">60</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"lane"</span><span class="token operator">:</span> <span class="token number">2</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"nodes"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">19</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"One"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"One"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/auf-demo/One"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"arg1"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"normal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">18</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"close"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"关闭"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">330</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">18</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"提交测试页面"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"One"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/One"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"dm.Amount"</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"normal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"LFC"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">14</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"close"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">390</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"AUF"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"画面流程"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"test"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/test/test"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"normal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">15</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"close"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"关闭"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"异常"</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">520</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">480</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"CheckId"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"CheckId"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/auf-demo/CheckId"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"arg1"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"normal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"AUF"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"close"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"关闭"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">510</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">350</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">14</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"LFC"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"是否需要身份核查"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"TestLfc"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/auf-demo/TestLfc"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"Currency"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"Amount"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"CNYThreshold"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"FCThreshold"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"ver"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"需要核查"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">16</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"noVer"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"无需核查"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">15</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">18</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">510</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">15</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"UI"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"finished"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"cname"</span><span class="token operator">:</span> <span class="token string">"finished"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"alias"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"path"</span><span class="token operator">:</span> <span class="token string">"@TETrade/modules/demo/auf-demo/finished"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"arg1"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mapping"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"output"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"normal"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"正常"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"next"</span><span class="token operator">:</span> <span class="token string">"normal"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"close"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">"关闭"</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"error"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">730</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">440</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">140</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"lanes"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"第一步"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultOpen"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultJump"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReset"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultPity"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReplay"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"contains"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token number">19</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">280</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"第二步"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultOpen"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultJump"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReset"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultPity"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReplay"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"contains"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token number">18</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">280</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"第三步"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultOpen"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultJump"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReset"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultPity"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReplay"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"contains"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">16</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token number">14</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">480</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">200</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"泳道"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultShow"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultOpen"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultJump"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReset"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultPity"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"defaultReplay"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"contains"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token number">15</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">680</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">900</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">210</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"end"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"id"</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"geometry"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"x"</span><span class="token operator">:</span> <span class="token number">760</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"y"</span><span class="token operator">:</span> <span class="token number">580</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"width"</span><span class="token operator">:</span> <span class="token number">120</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"height"</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"lane"</span><span class="token operator">:</span> <span class="token number">5</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"globalArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"inArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"PWD"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"desc"</span><span class="token operator">:</span> <span class="token string">"密码"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"default"</span><span class="token operator">:</span> <span class="token string">"038432"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"outArgs"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"outlets"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><code v-pre>start</code></p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td>交易的第一个节点<code v-pre>ID</code></td>
</tr>
<tr>
<td><code v-pre>geometry</code></td>
<td>配合<code v-pre>IDE</code>使用时,泳道展示的坐标</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>end</code></p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td>交易的结束节点<code v-pre>ID</code> 为 <code v-pre>1001</code></td>
</tr>
<tr>
<td><code v-pre>geometry</code></td>
<td>配合<code v-pre>IDE</code>使用时,泳道展示的坐标</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>nodes</code></p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>id</code></td>
<td>节点唯一标志</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>type</code></td>
<td>节点的类型(<code v-pre>UI</code></td>
<td><code v-pre>LFC</code></td>
</tr>
<tr>
<td><code v-pre>name</code></td>
<td>节点名称</td>
<td>文件名,不可修改</td>
</tr>
<tr>
<td><code v-pre>cname</code></td>
<td>文件夹名</td>
<td>文件名,不可修改</td>
</tr>
<tr>
<td><code v-pre>alias</code></td>
<td>节点的别名</td>
<td>默认是文件名,可修改</td>
</tr>
<tr>
<td><code v-pre>path</code></td>
<td>节点的路径</td>
<td>-</td>
</tr>
<tr>
<td><code v-pre>defaultShow</code></td>
<td>节点默认是否显示</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>keywords</td>
<td>关键字</td>
<td>-</td>
</tr>
<tr>
<td>inArgs</td>
<td>入参</td>
<td>-</td>
</tr>
<tr>
<td>outArgs</td>
<td>出参</td>
<td>-</td>
</tr>
<tr>
<td>mapping</td>
<td>全局数据的映射</td>
<td>-</td>
</tr>
<tr>
<td>output</td>
<td>出口</td>
<td>-</td>
</tr>
<tr>
<td>geometry</td>
<td>配合<code v-pre>IDE</code>使用时,节点展示的坐标</td>
<td>-</td>
</tr>
</tbody>
</table>
</li>
<li>
<p><code v-pre>lanes</code></p>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>泳道的唯一标志</td>
<td>-</td>
</tr>
<tr>
<td>name</td>
<td>泳道的title</td>
<td>-</td>
</tr>
<tr>
<td>description</td>
<td>描述</td>
<td>-</td>
</tr>
<tr>
<td>defaultShow</td>
<td>是否显示</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>defaultOpen</td>
<td>是否展开</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>defaultJump</td>
<td>是否可回跳</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>defaultReset</td>
<td>是否可重置</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>defaultPity</td>
<td>是否可触发怜悯之心【缓存输入的数据】</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>defaultReplay</td>
<td>是否可回放</td>
<td><code v-pre>true</code></td>
</tr>
<tr>
<td>contains</td>
<td>泳道展示节点的数组</td>
<td>-</td>
</tr>
<tr>
<td>geometry</td>
<td>配合<code v-pre>IDE</code>使用时,泳道展示的坐标</td>
<td>-</td>
</tr>
</tbody>
</table>
</li>
</ul>
<h3 id="_1-7-ui节点的注意事项" tabindex="-1"><a class="header-anchor" href="#_1-7-ui节点的注意事项"><span>1.7 <code v-pre>UI</code>节点的注意事项</span></a></h3>
<blockquote>
<p>确保节点都有 <code v-pre>name</code> 属性</p>
<p>当前节点只能修改 <code v-pre>metadata</code>  中声明的全局数据</p>
</blockquote>
<h3 id="_1-8-lfc-节点的说明" tabindex="-1"><a class="header-anchor" href="#_1-8-lfc-节点的说明"><span>1.8 <code v-pre>LFC</code> 节点的说明</span></a></h3>
<blockquote>
<p><code v-pre>lfc</code>的逻辑写在<code v-pre>run</code>函数内,且都保证都有<code v-pre>return</code>返回值</p>
<p><code v-pre>lfc</code>的返回值格式如下</p>
</blockquote>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>output</code></td>
<td>节点出口</td>
</tr>
<tr>
<td><code v-pre>outArgs</code></td>
<td>向下个节点传递的出参</td>
</tr>
</tbody>
</table>
<h2 id="_2-节点中可使用的方法" tabindex="-1"><a class="header-anchor" href="#_2-节点中可使用的方法"><span>2. 节点中可使用的方法</span></a></h2>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>_next</td>
<td>跳转下一个</td>
<td>节点出口的名字</td>
</tr>
<tr>
<td>_back</td>
<td>回到上一个</td>
<td>-</td>
</tr>
<tr>
<td>$setKeyWords</td>
<td>设置关键字</td>
<td>data包含的属性</td>
</tr>
<tr>
<td>$setIsReset</td>
<td>设置是否可重置</td>
<td>val : boolean<br />laneName: 泳道名</td>
</tr>
<tr>
<td>$setIsReplay</td>
<td>设置是否可回放</td>
<td>val : boolean<br />laneName: 泳道名</td>
</tr>
<tr>
<td>$setIsPity</td>
<td>设置是否触发怜悯之心【缓存输入的数据】</td>
<td>val : boolean<br />laneName: 泳道名</td>
</tr>
<tr>
<td>$setIsJump</td>
<td>设置是否可以回跳</td>
<td>val : boolean<br />laneName: 泳道名</td>
</tr>
</tbody>
</table>
<h2 id="_3-节点中可以使用的属性" tabindex="-1"><a class="header-anchor" href="#_3-节点中可以使用的属性"><span>3. 节点中可以使用的属性</span></a></h2>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>$showType</td>
<td>交易展示的类型(平铺|泳道)</td>
<td></td>
</tr>
<tr>
<td>$isFirstUI</td>
<td>第一个UI节点</td>
<td></td>
</tr>
<tr>
<td>$isLastUI</td>
<td>有可能是最后一个UI节点</td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


