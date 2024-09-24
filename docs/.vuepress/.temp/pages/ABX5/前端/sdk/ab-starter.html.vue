<template><div><h1 id="abc-starter" tabindex="-1"><a class="header-anchor" href="#abc-starter"><span>abc-starter</span></a></h1>
<p>提供模块扫描,执行js文件等API功能</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">'vue'</span></span>
<span class="line"><span class="token keyword">import</span> starter <span class="token keyword">from</span> <span class="token string">'abc-starter'</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>starter<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-api用法说明" tabindex="-1"><a class="header-anchor" href="#_2-api用法说明"><span>2. API用法说明</span></a></h2>
<p>注:以下API方法均可以使用<code v-pre>window.abc.starter.***</code> 或者 <code v-pre>Vue.prototype.starter.***</code> 进行调用</p>
<h3 id="_2-1-扫描模块" tabindex="-1"><a class="header-anchor" href="#_2-1-扫描模块"><span>2.1 扫描模块</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">await</span> window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$extensionsScan</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注:extensionFolders可以通过<code v-pre>configuration/aui.properties</code>配置</p>
<pre><code>cn.com.agree.ab.a5.client.web/extensionFolders =  jsPlugins,workspace/www/ABX5
,前后不要有空格
</code></pre>
<h3 id="_2-2-获取模块的扩展信息" tabindex="-1"><a class="header-anchor" href="#_2-2-获取模块的扩展信息"><span>2.2 获取模块的扩展信息</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$getExtensions</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注：在执行$getExtensions方法前需要执行过$extensionsScan方法</p>
<ul>
<li>参数列表:</li>
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
<td>type</td>
<td>string</td>
<td>扩展点名</td>
</tr>
</tbody>
</table>
<h3 id="_2-3-拼接路径" tabindex="-1"><a class="header-anchor" href="#_2-3-拼接路径"><span>2.3 拼接路径</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">resolveX5ResourcePath</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span>type<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
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
<td>path</td>
<td>string</td>
<td>需要拼接的路径</td>
</tr>
</tbody>
</table>
<p>注:ABX5模块放置路径和远程路径可以通过<code v-pre>configuration/aui.properties</code>配置</p>
<pre><code>cn.com.agree.ab.a5.client.web/ABX5ModuleRootDir = workspace/www/ABX5
cn.com.agree.ab.a5.client.web/ABX5HttpUrl = http://***.***.*.*
</code></pre>
<h3 id="_2-4-执行js" tabindex="-1"><a class="header-anchor" href="#_2-4-执行js"><span>2.4 执行js</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">await</span> window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$jsExecuter</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
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
<td>path</td>
<td>string</td>
<td>执行的js文件路径</td>
</tr>
</tbody>
</table>
<h3 id="_2-5-获取模块的moduledependencies" tabindex="-1"><a class="header-anchor" href="#_2-5-获取模块的moduledependencies"><span>2.5 获取模块的moduleDependencies</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$getModuleDependencies</span><span class="token punctuation">(</span>moduleName<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-6-获取配置信息" tabindex="-1"><a class="header-anchor" href="#_2-6-获取配置信息"><span>2.6 获取配置信息</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$getOption</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
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
<td>type</td>
<td>string</td>
<td>可选参数:'alias'(别名信息),'serviceEndPoint'(aarm地址),'channel'(渠道信息),'resource'(资源加载模式),'timeout'(requirejs加载超时时间),'startCompatible'(是否开启兼容AB4)</td>
</tr>
</tbody>
</table>
<p>注:aarm地址和资源加载模式可以通过<code v-pre>configuration/aui.properties</code>配置</p>
<pre><code>cn.com.agree.ab.a5.client.communication/mainAarmUrl =  http://192.168.71.111:58273/

cn.com.agree.ab.a5.client.web/resource = remote
</code></pre>
<h3 id="_2-7-获取客户端根路径" tabindex="-1"><a class="header-anchor" href="#_2-7-获取客户端根路径"><span>2.7 获取客户端根路径</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">  <span class="token keyword">let</span> res <span class="token operator">=</span> window<span class="token punctuation">.</span>abc<span class="token punctuation">.</span>starter<span class="token punctuation">.</span><span class="token function">$syncGetClientRootPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注：在执行$syncGetClientRootPath方法前需要执行过$extensionsScan方法</p>
</div></template>


