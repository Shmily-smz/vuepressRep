<template><div><h1 id="package-json-说明介绍" tabindex="-1"><a class="header-anchor" href="#package-json-说明介绍"><span>package.json 说明介绍</span></a></h1>
<h2 id="name" tabindex="-1"><a class="header-anchor" href="#name"><span>name</span></a></h2>
<p>当前工程名称, <code v-pre>String</code></p>
<h2 id="author" tabindex="-1"><a class="header-anchor" href="#author"><span>author</span></a></h2>
<p>当前工程作者, <code v-pre>String</code></p>
<h2 id="version" tabindex="-1"><a class="header-anchor" href="#version"><span>version</span></a></h2>
<p>当前工程版本, <code v-pre>String</code></p>
<h2 id="type" tabindex="-1"><a class="header-anchor" href="#type"><span>type</span></a></h2>
<p>当前工程类型(Module 为交易模块), <code v-pre>String</code></p>
<h2 id="style" tabindex="-1"><a class="header-anchor" href="#style"><span>style</span></a></h2>
<p>描述当前工程需要加载的样式文件, <code v-pre>Array</code></p>
<h2 id="moduledependencies" tabindex="-1"><a class="header-anchor" href="#moduledependencies"><span>moduleDependencies</span></a></h2>
<p>描述当前工程的依赖工程, <code v-pre>Object</code></p>
<p><strong>示例:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"moduleDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"BaseModule"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="channels" tabindex="-1"><a class="header-anchor" href="#channels"><span>channels</span></a></h2>
<blockquote>
<p>工程内多渠道配置说明</p>
</blockquote>
<ul>
<li>
<p><strong>字段类型:</strong> <code v-pre>Object</code> ,默认为{}</p>
</li>
<li>
<p><strong>详细信息:</strong></p>
<p>工程编译时,不同渠道端所包含的文件(仅匹配当前工程下的渠道端文件)</p>
<ol>
<li>柜面端(te)</li>
</ol>
<ul>
<li>include: <code v-pre>Array</code> ,一组匹配所要包含文件的匹配规则</li>
<li>exclude: <code v-pre>Array</code> ,一组匹配需排除文件的匹配规则</li>
</ul>
<ol start="2">
<li>移动端(mt) (同上)</li>
</ol>
<p>结合 include 与 exclude 内的文件匹配规则，匹配到当前渠道端所属文件进行编译.</p>
</li>
<li>
<p><strong>示例:</strong></p>
</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">  <span class="token property">"channels"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 柜面端</span></span>
<span class="line">    <span class="token property">"te"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 包含文件的匹配规则</span></span>
<span class="line">      <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"BankModule/**/*"</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token comment">// 排除文件的匹配规则</span></span>
<span class="line">      <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"BankModule/pages/mt/**/*"</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 移动端</span></span>
<span class="line">    <span class="token property">"mt"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"include"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token string">"BankModule/pages/mt/**/*"</span></span>
<span class="line">      <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"exclude"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="extensions" tabindex="-1"><a class="header-anchor" href="#extensions"><span>extensions</span></a></h2>
<blockquote>
<p>工程的扩展项说明</p>
</blockquote>
<hr>
<h3 id="launcher" tabindex="-1"><a class="header-anchor" href="#launcher"><span>launcher</span></a></h3>
<ul>
<li><strong>字段类型:</strong> <code v-pre>Object</code> ,默认为{}</li>
<li><strong>详细信息:</strong>
<ol>
<li>appEntry, <code v-pre>String</code> ,工程加载主画面文件路径.</li>
<li>launcherEntry, <code v-pre>String</code> ,工程加载的主入口文件路径.</li>
</ol>
</li>
<li><strong>示例:</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"launcher"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// path:// + 主入口画面在工程内的相对路径</span></span>
<span class="line">  <span class="token property">"appEntry"</span><span class="token operator">:</span> <span class="token string">"path://BankModule/pages/主框架/App.vue"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// path:// + 主入口文件在工程内的相对路径</span></span>
<span class="line">  <span class="token property">"launcherEntry"</span><span class="token operator">:</span> <span class="token string">"path://BankModule/pages/主框架/app-loader.ts"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="htmlconfig" tabindex="-1"><a class="header-anchor" href="#htmlconfig"><span>htmlConfig</span></a></h3>
<blockquote>
<p><code v-pre>index.html</code>属性配置，非必需配置，默认{}</p>
</blockquote>
<h4 id="字段类型" tabindex="-1"><a class="header-anchor" href="#字段类型"><span>字段类型</span></a></h4>
<table>
<thead>
<tr>
<th>name</th>
<th>类型</th>
<th>说明</th>
<th>required</th>
<th>default</th>
</tr>
</thead>
<tbody>
<tr>
<td>title</td>
<td>string</td>
<td><code v-pre>&lt;title&gt;{title}&lt;/title&gt;</code></td>
<td>false</td>
<td>赞同科技智能柜台</td>
</tr>
<tr>
<td>loading</td>
<td>object</td>
<td>加载时启动画面</td>
<td>false</td>
<td>{}</td>
</tr>
<tr>
<td>links</td>
<td>array</td>
<td>需要全局加载的 <code v-pre>css</code> 资源文件</td>
<td>false</td>
<td>[]</td>
</tr>
<tr>
<td>scripts</td>
<td>array</td>
<td>需要全局加载的 <code v-pre>js</code> 资源文件</td>
<td>false</td>
<td>[]</td>
</tr>
</tbody>
</table>
<h4 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h4>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// BankModule/package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"htmlConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"赞同科技智能柜台"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"loading"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"backgroundUrl"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/static/img/login/登陆页.png"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"BankModule/pages/index.css"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"node_modules/rrweb/index.js"</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token property">"global"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string">"BankModule/pages/common/constants/soft-algorithm-min.js"</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="title" tabindex="-1"><a class="header-anchor" href="#title"><span>title</span></a></h4>
<blockquote>
<p>即<code v-pre>html</code>内的标签<code v-pre>title</code></p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>UTF-8<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line highlighted">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>{title}<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="loading" tabindex="-1"><a class="header-anchor" href="#loading"><span>loading</span></a></h4>
<blockquote>
<p>配置初始化资源时的<code v-pre>图片</code>，防止出现白屏，需要手动销毁</p>
</blockquote>
<table>
<thead>
<tr>
<th>name</th>
<th>类型</th>
<th>说明</th>
<th>required</th>
<th>default</th>
</tr>
</thead>
<tbody>
<tr>
<td>backgroundUrl</td>
<td>string</td>
<td>图片路径</td>
<td>false</td>
<td>&quot;&quot;</td>
</tr>
<tr>
<td>time</td>
<td>number</td>
<td>销毁时的动画时长</td>
<td>false</td>
<td>1.5s</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"htmlConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"loading"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"backgroundUrl"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/static/img/login/登陆页.png"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"time"</span><span class="token operator">:</span> <span class="token number">1.5</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container warning">
<p class="hint-container-title">Warning</p>
<p>初始化防白屏动画需要手动销毁，请在合适时机调用，例如登录页初始化前</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">window<span class="token punctuation">.</span>x5<span class="token punctuation">.</span>loading<span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<h4 id="links" tabindex="-1"><a class="header-anchor" href="#links"><span>links</span></a></h4>
<blockquote>
<p>需要全局加载的 <code v-pre>css</code> 资源文件</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"htmlConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"links"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"node_modules/rrweb-player/dist/style.css"</span><span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="scripts-htmlconfig-scripts" tabindex="-1"><a class="header-anchor" href="#scripts-htmlconfig-scripts"><span>scripts {#htmlConfig-scripts}</span></a></h4>
<blockquote>
<p>需要全局加载的 <code v-pre>js</code> 资源文件</p>
</blockquote>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">interface</span> <span class="token class-name">ScriptItem</span><span class="token punctuation">{</span></span>
<span class="line">  src<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">;</span></span>
<span class="line">  global<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ScriptOptions</span> <span class="token operator">=</span> <span class="token builtin">string</span> <span class="token operator">|</span> ScriptItem</span>
<span class="line"></span>
<span class="line">htmlConfig<span class="token punctuation">.</span>scripts<span class="token operator">:</span> ScriptOptions<span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>name</th>
<th>类型</th>
<th>说明</th>
<th>required</th>
<th>default</th>
</tr>
</thead>
<tbody>
<tr>
<td>src</td>
<td>string</td>
<td><code v-pre>js</code>资源路径</td>
<td>true</td>
<td></td>
</tr>
<tr>
<td>global</td>
<td>number</td>
<td>加载的资源文件是否定义了<code v-pre>全局变量</code></td>
<td>false</td>
<td>false</td>
</tr>
</tbody>
</table>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"htmlConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"scripts"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token property">"src"</span><span class="token operator">:</span> <span class="token string">"node_modules/rrweb/index.js"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token property">"global"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">"BankModule/pages/common/constants/soft-algorithm-min.js"</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>global 说明</strong></li>
</ul>
<p>如果引用的某资源文件内容结构如下,则说明此资源的使用方式为调用全局变量<code v-pre>window.rrweb</code></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> rrrweb <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">exports</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">return</span> exports<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol>
<li>出现上述类似的资源，则需要配置<code v-pre>global</code>参数为<code v-pre>true</code><!-- FIXME:编译需要额外的配置文件，让用户可配置 -->
<!-- 2. 编译需要配置参数`externalsRegistryPackage: ['rrweb']` -->
</li>
</ol>
<h3 id="pluginconfig" tabindex="-1"><a class="header-anchor" href="#pluginconfig"><span>pluginConfig</span></a></h3>
<ul>
<li><strong>字段类型:</strong> <code v-pre>Object</code> ,默认为{}</li>
<li><strong>详细信息:</strong>
<ol>
<li>所需配置的插件名称,如: <code v-pre>postcss-px-to-viewport</code>.</li>
<li>根据不同渠道端设置不同的配置项(选填,根据所需添加配置项,其余配置项会走默认的配置).</li>
<li>某一渠道端若不需要添加插件，则将其删除即可(赋空对象仍会根据插件默认配置进行编译).</li>
</ol>
</li>
<li><strong>示例:</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"pluginConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 插件名称</span></span>
<span class="line">  <span class="token property">"postcss-px-to-viewport"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 柜面端 pxToVw 配置项 (不需要时,全部删除)</span></span>
<span class="line">    <span class="token comment">// "te": {</span></span>
<span class="line">    <span class="token comment">//   "viewportWidth": 1920,</span></span>
<span class="line">    <span class="token comment">//   "viewportHeight": 1080,</span></span>
<span class="line">    <span class="token comment">//   "unitPrecision": 3</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">    <span class="token comment">// 移动端 pxToVw 配置项</span></span>
<span class="line">    <span class="token property">"mt"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"viewportWidth"</span><span class="token operator">:</span> <span class="token number">2560</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"viewportHeight"</span><span class="token operator">:</span> <span class="token number">1600</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h3 id="工程名-package-name-alias" tabindex="-1"><a class="header-anchor" href="#工程名-package-name-alias"><span>工程名.package-name-alias</span></a></h3>
<ul>
<li><strong>字段类型:</strong> <code v-pre>Array</code>,默认为[]</li>
<li><strong>详细信息:</strong>
配置工程内所用的别名、别名所对应的目录</li>
<li><strong>示例:</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"BankModule.package-name-alias"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@Base"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BaseModule"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@/@Bank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"注释"</span><span class="token operator">:</span><span class="token string">"为了auf使用，auf的路径原来是有@/"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@Bank"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@Msg"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/common/message"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BankUtil"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/common/utils"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BaseUtil"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BaseModule/pages/common/utils"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BankMixin"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/common/mixins"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BaseMixin"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BaseModule/pages/common/mixins"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BankStatic"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/static"</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"from"</span><span class="token operator">:</span> <span class="token string">"@BaseStatic"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"to"</span><span class="token operator">:</span> <span class="token string">"BaseModule/pages/static"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><hr>
<h2 id="dependencies" tabindex="-1"><a class="header-anchor" href="#dependencies"><span>dependencies</span></a></h2>
<p>描述当前工程依赖的第三方 sdk, <code v-pre>Object</code></p>
<p><strong>示例:</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"agree-public-client"</span><span class="token operator">:</span><span class="token string">"^2.0.2"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"@agree/ab-manager-codec"</span><span class="token operator">:</span><span class="token string">"^2.0.3"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"@agree/ab-plugin-device"</span><span class="token operator">:</span><span class="token string">"^2.0.8"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"@agree/ab-manager-service"</span><span class="token operator">:</span><span class="token string">"^2.0.12"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"vue-i18n"</span><span class="token operator">:</span><span class="token string">"8.27.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"@agree/aui-m"</span><span class="token operator">:</span><span class="token string">"^1.5.20"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"vuedraggable"</span><span class="token operator">:</span><span class="token string">"2.24.3"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


