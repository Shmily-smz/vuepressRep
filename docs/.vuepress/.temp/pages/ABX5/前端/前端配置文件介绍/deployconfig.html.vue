<template><div><h1 id="deployconfig-deployconfig" tabindex="-1"><a class="header-anchor" href="#deployconfig-deployconfig"><span>deployconfig {#deployconfig}</span></a></h1>
<blockquote>
<p>用于配置客户端运行时所需要的配置</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>客户端通过接口<code v-pre>getFrontEndConfig</code>访问此配置</li>
<li>路径 <code v-pre>/aarm/config/deployconfig.json</code></li>
</ol>
</div>
<h2 id="配置说明-配置说明" tabindex="-1"><a class="header-anchor" href="#配置说明-配置说明"><span>配置说明 {#配置说明}</span></a></h2>
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
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#resourceServiceEndPoint">resourceServiceEndPoint</RouteLink></td>
<td>string</td>
<td>服务地址</td>
<td>false</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#messageUrl">messageUrl</RouteLink></td>
<td>string</td>
<td>建立长连接的地址</td>
<td>true</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#commitUrl">commitUrl</RouteLink></td>
<td>string</td>
<td><code v-pre>bpmn</code>流程发送请求的<code v-pre>http</code>地址</td>
<td>true</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#deployEnv">deployEnv</RouteLink></td>
<td>DeployEnv</td>
<td>部署环境</td>
<td>false</td>
<td><Badge type="danger" text="默认容器化部署" /></td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#publicPath">publicPath</RouteLink></td>
<td>string</td>
<td>资源加载时的<code v-pre>baseUrl</code></td>
<td>true</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#manifestPath">manifestPath</RouteLink></td>
<td>string</td>
<td>依赖信息文件保存地址</td>
<td>true</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#mode">mode</RouteLink></td>
<td>string</td>
<td>运行模式</td>
<td>true</td>
<td>无</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#consolelog">consolelog</RouteLink></td>
<td>boolean</td>
<td>是否在控制台内记录日志</td>
<td>false</td>
<td>无配置情况下和 mode 相关</td>
</tr>
<tr>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html#localization">localization</RouteLink></td>
<td>boolean</td>
<td>是否本地加载 <Badge type="danger" text="废弃" /></td>
<td>false</td>
<td>false</td>
</tr>
<tr>
<td>terminalType</td>
<td>string</td>
<td>渠道 <Badge type="danger" text="废弃" /></td>
<td>false</td>
<td>无</td>
</tr>
<tr>
<td>resolve</td>
<td>any</td>
<td>路径解析 <Badge type="danger" text="废弃" /></td>
<td>false</td>
<td>无</td>
</tr>
<tr>
<td>suffixCollectionWithFileContent</td>
<td>any</td>
<td>资源后缀<Badge type="danger" text="废弃" /></td>
<td>false</td>
<td>无</td>
</tr>
</tbody>
</table>
<p><strong>deployconfig.json 示例</strong></p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"resourceServiceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-aarm/aarm"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"messageUrl"</span><span class="token operator">:</span> <span class="token string">"ws://192.168.70.10/abxmlh/demo-message/message/websocket"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"commitUrl"</span><span class="token operator">:</span> <span class="token string">"http://192.168.70.10/abxmlh/demo-"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"ABX"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"manifestPath"</span><span class="token operator">:</span> <span class="token string">"abx/dependencies.manifest.json"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"mode"</span><span class="token operator">:</span> <span class="token string">"dev"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="resourceserviceendpoint-resourceserviceendpoint" tabindex="-1"><a class="header-anchor" href="#resourceserviceendpoint-resourceserviceendpoint"><span>resourceServiceEndPoint {#resourceServiceEndPoint}</span></a></h3>
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
<h3 id="publicpath-publicpath" tabindex="-1"><a class="header-anchor" href="#publicpath-publicpath"><span>publicPath {#publicPath}</span></a></h3>
<blockquote>
<p>资源加载时的<code v-pre>baseUrl</code></p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  publicPath: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"ABX"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>加载资源时会拼接<code v-pre>publicPath</code>: <code v-pre>root/publicPath/filePath</code></li>
</ol>
<h3 id="manifestpath-manifestpath" tabindex="-1"><a class="header-anchor" href="#manifestpath-manifestpath"><span>manifestPath {#manifestPath}</span></a></h3>
<blockquote>
<p>加载依赖信息表的路径</p>
</blockquote>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">{</span>
<span class="line">  manifestPath: string;</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"manifestPath"</span><span class="token operator">:</span> <span class="token string">"abx/dependencies.manifest.json"</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>加载依赖信息表的路径</li>
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
<h3 id="consolelog-consolelog" tabindex="-1"><a class="header-anchor" href="#consolelog-consolelog"><span>consolelog {#consolelog}</span></a></h3>
<blockquote>
<p>是否输出日志到控制台</p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>由于生产模式禁止输出日志到控制台，不便于调试，此时可以用此参数在准生产环境调试</p>
</div>
<ul>
<li><strong>类型</strong></li>
</ul>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  consolelog<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>示例</strong></li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"consolelog"</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>详细说明</strong></li>
</ul>
<ol>
<li>无配置情况下和 <code v-pre>mode</code> 相关</li>
</ol>
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


