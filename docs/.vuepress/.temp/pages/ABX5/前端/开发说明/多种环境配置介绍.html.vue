<template><div><h1 id="多种执行环境配置介绍-多种执行环境配置介绍" tabindex="-1"><a class="header-anchor" href="#多种执行环境配置介绍-多种执行环境配置介绍"><span>多种执行环境配置介绍 {#多种执行环境配置介绍}</span></a></h1>
<h2 id="资源加载-资源加载" tabindex="-1"><a class="header-anchor" href="#资源加载-资源加载"><span>资源加载 {#资源加载}</span></a></h2>
<p>资源加载方式分为两种：远端加载、本地加载</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">enum</span> ResourceLoadedType <span class="token punctuation">{</span></span>
<span class="line">    Remote <span class="token operator">=</span> <span class="token string">'remote'</span><span class="token punctuation">,</span> <span class="token comment">// http://</span></span>
<span class="line">    Local <span class="token operator">=</span> <span class="token string">'local'</span><span class="token punctuation">,</span> <span class="token comment">// file://</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="环境介绍-环境介绍" tabindex="-1"><a class="header-anchor" href="#环境介绍-环境介绍"><span>环境介绍 {#环境介绍}</span></a></h2>
<p>运行环境分为三种：浏览器、壳子<code v-pre>abc</code>、壳子<code v-pre>aep</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">enum</span> <span class="token constant">ENV</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">ABC</span> <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">WEB</span> <span class="token operator">=</span> <span class="token string">'web'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token constant">AEP</span> <span class="token operator">=</span> <span class="token string">'aep'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>浏览器</strong>
通过浏览器加载资源，此时资源的加载方式一般是将本地资源静态托管，一般采用通过<code v-pre>mock</code>命令</li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">cd mock</span>
<span class="line">node index<span class="token punctuation">.</span>js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用方式：打开chrome浏览器，访问网址<a>http://localhost:9050/node_modules/@agree/ab-micro-main/index.html</a>即可打开，开启测试之旅</p>
<ul>
<li><strong>abc</strong>
通过壳子加载资源，此时的资源加载方式分为三种：</li>
</ul>
<p>1.壳子作为运行环境，资源的加载方式为静态托管<code v-pre>mock</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">cn<span class="token punctuation">.</span>com<span class="token punctuation">.</span>agree<span class="token punctuation">.</span>ab<span class="token punctuation">.</span>a5<span class="token punctuation">.</span>client<span class="token punctuation">.</span>gui<span class="token punctuation">.</span>aui<span class="token operator">/</span>defaultTradePath <span class="token operator">=</span> </span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://localhost:9050/ABX/node_modules/@agree/ab-micro-main/index.html</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>2.壳子作为运行环境，远端加载资源</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">cn<span class="token punctuation">.</span>com<span class="token punctuation">.</span>agree<span class="token punctuation">.</span>ab<span class="token punctuation">.</span>a5<span class="token punctuation">.</span>client<span class="token punctuation">.</span>gui<span class="token punctuation">.</span>aui<span class="token operator">/</span>defaultTradePath <span class="token operator">=</span> </span>
<span class="line"><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">http://192.168.70.10/abxmlh/abx5-aarm/aarm/ABX/node_modules/@agree/ab-micro-main/index.html</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>3.壳子作为运行环境，本地加载资源：即将服务端资源通过壳子的热更新能力下载到本地，然后采用<code v-pre>file://</code>加载资源</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">cn<span class="token punctuation">.</span>com<span class="token punctuation">.</span>agree<span class="token punctuation">.</span>ab<span class="token punctuation">.</span>a5<span class="token punctuation">.</span>client<span class="token punctuation">.</span>gui<span class="token punctuation">.</span>aui<span class="token operator">/</span>defaultTradePath <span class="token operator">=</span> </span>
<span class="line"><span class="token operator">/</span><span class="token constant">ABX</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">agree</span></span><span class="token operator">/</span>ab<span class="token operator">-</span>micro<span class="token operator">-</span>main<span class="token operator">/</span>index<span class="token punctuation">.</span>html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>aep</strong></li>
</ul>
<h2 id="编译命令-编译命令" tabindex="-1"><a class="header-anchor" href="#编译命令-编译命令"><span>编译命令 {#编译命令}</span></a></h2>
<p>编译分为两种模式：<code v-pre>dev</code>,<code v-pre>build</code></p>
<p>区别：a.配置不同 b.压缩混淆方式不同</p>
<ul>
<li><strong>dev</strong></li>
</ul>
<p>如果希望在浏览器环境运行，请使用如下命令：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">yarn dev <span class="token comment">// npm run dev</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li><strong>build</strong></li>
</ul>
<p>如果希望在壳子环境运行，请使用如下命令：</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">yarn build <span class="token comment">// npm run build</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="config-json-config-json" tabindex="-1"><a class="header-anchor" href="#config-json-config-json"><span>config.json {#config.json}</span></a></h2>
<p>工作空间<code v-pre>workspace</code>的根目录有个<code v-pre>config.json</code>文件，此文件一般在开发环境下用于配置编译相关</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"env"</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span> <span class="token comment">// 运行环境</span></span>
<span class="line">        <span class="token string-property property">"serviceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span> <span class="token comment">// 服务端配置文件，此处配置为本地，所以需要mock接口:/getFrontEndConfig</span></span>
<span class="line">        <span class="token string-property property">"resourcePath"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span> <span class="token comment">// 加载的资源地址</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="mock-mock" tabindex="-1"><a class="header-anchor" href="#mock-mock"><span>mock {#mock}</span></a></h2>
<p>此文件可用于开发时的资源静态托管：<code v-pre>workspace/mock/index.js</code></p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> express <span class="token operator">=</span> <span class="token keyword">require</span><span class="token punctuation">(</span><span class="token string">'express'</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> app <span class="token operator">=</span> <span class="token function">express</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">const</span> port <span class="token operator">=</span> <span class="token number">9050</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'../dist/ABX'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">'/'</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span><span class="token string">'./Main/'</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">listen</span><span class="token punctuation">(</span>port<span class="token punctuation">,</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'server is start,port is'</span><span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'/getFrontEndConfig'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token string-property property">"resourceServiceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-aarm/aarm"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"terminalType"</span><span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"mode"</span><span class="token operator">:</span> <span class="token string">"dev"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"consolelog"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"localization"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"messageUrl"</span><span class="token operator">:</span> <span class="token string">"ws://192.168.70.10/abxmlh/demo-message/message/websocket"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"commitUrl"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"manifestPath"</span><span class="token operator">:</span> <span class="token string">"abx/dependencies.manifest.json"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"ABX"</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"resolve"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token string-property property">"extensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"json"</span><span class="token punctuation">,</span> <span class="token string">"adt"</span><span class="token punctuation">,</span> <span class="token string">"pt"</span><span class="token punctuation">,</span> <span class="token string">"fl"</span><span class="token punctuation">,</span> <span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token string">"gif"</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">                <span class="token string-property property">"existDepModuleExtensions"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"js"</span><span class="token punctuation">]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token string-property property">"suffixCollectionWithFileContent"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">"js"</span><span class="token punctuation">,</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token string">"ts"</span><span class="token punctuation">,</span> <span class="token string">"json"</span><span class="token punctuation">,</span> <span class="token string">"fl"</span><span class="token punctuation">,</span> <span class="token string">"pt"</span><span class="token punctuation">,</span> <span class="token string">"adt"</span><span class="token punctuation">,</span> <span class="token string">"css"</span><span class="token punctuation">,</span> <span class="token string">"gif"</span><span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        code<span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span> <span class="token comment">// 成功</span></span>
<span class="line">        msg<span class="token operator">:</span> <span class="token string">"success"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


