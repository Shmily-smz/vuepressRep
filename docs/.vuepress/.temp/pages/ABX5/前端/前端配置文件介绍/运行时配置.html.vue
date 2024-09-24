<template><div><h1 id="运行时配置" tabindex="-1"><a class="header-anchor" href="#运行时配置"><span>运行时配置</span></a></h1>
<p>对于壳子来说，废弃了请求直接请求远端的配置，采用使用壳子自身的配置。</p>
<p>对 web 环境来说，允许设置获取前段获取配置的路径通过请求的方式获取配置信息。</p>
<h2 id="abc-壳" tabindex="-1"><a class="header-anchor" href="#abc-壳"><span>abc 壳</span></a></h2>
<p>aui.properties</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">cn.com.agree.ab.a5.client.web/commitUrl = http://192.168.70.10/abxmlh/demo-</span>
<span class="line">cn.com.agree.ab.a5.client.web/resourceServiceEndPoint = http://localhost:9050</span>
<span class="line">cn.com.agree.ab.a5.client.web/messageUrl = ws://192.168.70.10/abxmlh/demo-message/message/websocket</span>
<span class="line">cn.com.agree.ab.a5.client.web/mode = production</span>
<span class="line">cn.com.agree.ab.a5.client.web/cellunit = ABX5</span>
<span class="line">cn.com.agree.ab.a5.client.web/localization = true</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>因为不需要从直接从远端获取配置，所以暂时废弃 mainAarmUrl 的配置( <code v-pre>cn.com.agree.ab.a5.client.communication/mainAarmUrl = http://192.168.71.115:8000/</code> )。</p>
<h2 id="web-环境" tabindex="-1"><a class="header-anchor" href="#web-环境"><span>web 环境</span></a></h2>
<p>web 环境的配置信息允许从远端获取，可以是本地启动的 mock ，也可以是某个服务，而获取配置信息的请求路径拼接方式为: <code v-pre>${devConfig.serviceEndPoint}getFrontEndConfig</code> ，其中 <code v-pre>devConfig.serviceEndPoint</code> 就是编译时提供的配置信息: <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/configJson.html">config.json</RouteLink> 文件中配置的</p>
<h2 id="pad" tabindex="-1"><a class="header-anchor" href="#pad"><span>pad</span></a></h2>
<p>manifest.json</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"abx5"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"resourceServiceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:53008"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"commitUrl"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"production"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"cellunit"</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"localization"</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"messageUrl"</span><span class="token operator">:</span> <span class="token string">"ws://192.168.70.10/abxmlh/demo-message/message/websocket"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"local"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"ABX5ModuleRootDir"</span><span class="token operator">:</span> <span class="token string">"/www/workspace/ABX"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"updateTradeResource"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"jsPluginsRootDir"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"ABX5HttpUrl"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"extensionFolders"</span><span class="token operator">:</span> <span class="token string">"/www/workspace/ABX"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"startCompatible"</span><span class="token operator">:</span> <span class="token string">"false"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"frontEndConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="配置字段信息说明" tabindex="-1"><a class="header-anchor" href="#配置字段信息说明"><span>配置字段信息说明</span></a></h2>
<h3 id="resourceserviceendpoint-resourceserviceendpoint" tabindex="-1"><a class="header-anchor" href="#resourceserviceendpoint-resourceserviceendpoint"><span>resourceServiceEndPoint {#resourceServiceEndPoint}</span></a></h3>
<blockquote>
<p>服务地址:资源加载地址</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  resourceServiceEndPoint: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"resourceServiceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-aarm/aarm"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>服务地址</li>
<li>为资源加载地址</li>
</ol>
<h3 id="messageurl-messageurl" tabindex="-1"><a class="header-anchor" href="#messageurl-messageurl"><span>messageUrl {#messageUrl}</span></a></h3>
<blockquote>
<p>建立长连接的地址</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  messageUrl: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"messageUrl"</span><span class="token operator">:</span> <span class="token string">"ws://192.168.70.10/abxmlh/demo-message/message/websocket"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>建立长连接的地址, <code v-pre>bpmn</code>类型交易用于接受<code v-pre>socket</code>消息时使用</li>
</ol>
<h3 id="commiturl-commiturl" tabindex="-1"><a class="header-anchor" href="#commiturl-commiturl"><span>commitUrl {#commitUrl}</span></a></h3>
<blockquote>
<p><code v-pre>bpmn</code>流程发送请求的<code v-pre>http</code>地址</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  commitUrl: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"commitUrl"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li><code v-pre>bpmn</code>流程发送请求的<code v-pre>http</code>地址</li>
</ol>
<h3 id="deployenv-deployenv" tabindex="-1"><a class="header-anchor" href="#deployenv-deployenv"><span>deployEnv {#deployEnv}</span></a></h3>
<blockquote>
<p>部署环境配置，默认是容器云</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> DeployEnv <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string">"vm"</span> <span class="token operator">=</span> <span class="token string">'vm'</span><span class="token punctuation">,</span> <span class="token comment">// 虚机部署</span></span>
<span class="line">  <span class="token string">"boyun"</span> <span class="token operator">=</span> <span class="token string">'boyun'</span><span class="token punctuation">,</span> <span class="token comment">// 博云环境部署</span></span>
<span class="line">  <span class="token string">"docker"</span> <span class="token operator">=</span> <span class="token string">"docker"</span><span class="token punctuation">,</span> <span class="token comment">// 容器化部署（默认）</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"deployEnv"</span><span class="token operator">:</span> <span class="token string">"vm"</span> <span class="token comment">// 博云环境部署</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>部署方式代表着不同的请求路径</p>
</div>
<ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li><code v-pre>vm</code>: 请求地址使用<code v-pre>commitUrl/url</code></li>
<li><code v-pre>boyun</code>:请求地址使用<code v-pre>commitUrl/url</code></li>
<li><code v-pre>docker</code>: 请求地址使用<code v-pre>commitUrl/moduleName-aase/aase/url</code></li>
</ol>
<h3 id="mode-mode" tabindex="-1"><a class="header-anchor" href="#mode-mode"><span>mode {#mode}</span></a></h3>
<blockquote>
<p>客户端运行时的模式</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">enum</span> Mode <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">DEV</span> <span class="token operator">=</span> <span class="token string">"dev"</span><span class="token punctuation">,</span> <span class="token comment">// 开发模式</span></span>
<span class="line">  <span class="token constant">PROD</span> <span class="token operator">=</span> <span class="token string">"prod"</span><span class="token punctuation">,</span> <span class="token comment">// 生产模式</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"dev"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li><code v-pre>dev</code>: 开发模式，日志输出到控制台，启动开发模式的热更新热更新</li>
<li><code v-pre>prod</code>: 生产模式，日志禁止输出到控制台，并将日志记录到日志文件，启动生产模式的热更新</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>开发以及生产模式的热更新区别请查看<a href="../%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%83%AD%E6%9B%B4%E6%96%B0">热更新</a></p>
</div>
<h3 id="localization-localization" tabindex="-1"><a class="header-anchor" href="#localization-localization"><span>localization {#localization}</span></a></h3>
<blockquote>
<p>是否本地加载</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  localization<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"localization"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>此参数用于配置资源的加载来源：如在壳子环境下，将资源下载到本地，则视为本地加载，为<code v-pre>true</code>；如果是直接加载服务器的资源，则认为是服务端加载,为<code v-pre>false</code></li>
<li>此参数决定加载资源的路径</li>
</ol>
</div></template>


