<template><div><h1 id="ab-plugin-client-客户端类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-client-客户端类组件"><span>ab-plugin-client @客户端类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Client <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-client'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-getappversionname-获取应用版本名" tabindex="-1"><a class="header-anchor" href="#_2-1-getappversionname-获取应用版本名"><span>2.1 getAppVersionName --获取应用版本名</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getAppVersionName</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出参示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token number">1.0</span><span class="token number">.0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-getappversioncode-获取应用版本号" tabindex="-1"><a class="header-anchor" href="#_2-2-getappversioncode-获取应用版本号"><span>2.2 getAppVersionCode --获取应用版本号</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getAppVersionCode</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>出参示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3-openclient-打开客户端子应用" tabindex="-1"><a class="header-anchor" href="#_2-3-openclient-打开客户端子应用"><span>2.3 openClient --打开客户端子应用</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> appId <span class="token operator">=</span> <span class="token string">'ydzy'</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">openClient</span><span class="token punctuation">(</span>appId<span class="token punctuation">)</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>appId</td>
<td>string</td>
<td>√</td>
<td>应用 Id，对应 apps 目录下的子应用目录名称</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>x</td>
<td>应用 Id，对应 apps 目录下的子应用目录名称</td>
</tr>
<tr>
<td>orientation</td>
<td>string</td>
<td>x</td>
<td>Activity 的横屏和竖屏,PORTRAIT 为竖屏，LANDSCAPE 为横屏（默认横屏）</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.openChildApp</font></blockquote>
<h3 id="_2-4-closeclient-关闭客户端" tabindex="-1"><a class="header-anchor" href="#_2-4-closeclient-关闭客户端"><span>2.4 closeClient --关闭客户端</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> isFinish <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">closeClient</span><span class="token punctuation">(</span>isFinish<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>isFinish</td>
<td>boolean</td>
<td>x</td>
<td>是否关闭</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.app.quitApp(isFinish)</font></blockquote>
<h3 id="_2-5-postvalue-向子应用传值" tabindex="-1"><a class="header-anchor" href="#_2-5-postvalue-向子应用传值"><span>2.5 postValue --向子应用传值</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">'key_app1'</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">'value_app222'</span></span>
<span class="line">Client<span class="token punctuation">.</span><span class="token function">postValue</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>key</td>
<td>string</td>
<td>√</td>
<td>要传的值的唯一识别键</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>√</td>
<td>要传的值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.postValue(key, value);</font></blockquote>
<h3 id="_2-6-getvalue-获取子应用传的值" tabindex="-1"><a class="header-anchor" href="#_2-6-getvalue-获取子应用传的值"><span>2.6 getValue --获取子应用传的值</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">'key_app1'</span></span>
<span class="line"><span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>key<span class="token punctuation">)</span></span>
<span class="line">console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'getValue='</span> <span class="token operator">+</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>key</td>
<td>string</td>
<td>√</td>
<td>要获取的值的键</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android)原 SDK: AgreeSDK.app.getValue(key);</font></blockquote>
<h3 id="_2-7-getoid-获取客户端-oid" tabindex="-1"><a class="header-anchor" href="#_2-7-getoid-获取客户端-oid"><span>2.7 getOid --获取客户端 oid</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getOid</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>获取到的 oid</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>获取到的 oid</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font></blockquote>
<h3 id="_2-8-getclientip-获取客户端-ip-地址" tabindex="-1"><a class="header-anchor" href="#_2-8-getclientip-获取客户端-ip-地址"><span>2.8 getClientIp --获取客户端 ip 地址</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>获取到的客户端 ip</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>获取到的客户端 ip</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font></blockquote>
<h3 id="_2-9-getappid-获取客户端应用唯一标识" tabindex="-1"><a class="header-anchor" href="#_2-9-getappid-获取客户端应用唯一标识"><span>2.9 getAppID --获取客户端应用唯一标识</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> clientIp <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getAppID</span><span class="token punctuation">(</span>clientIp<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>参数差异</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>clientIp</td>
<td>string</td>
<td>√</td>
<td><font color='green'> 移动端可缺省</font></td>
<td>客户端 ip 地址</td>
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
<td>res.result</td>
<td>string</td>
<td>获取到的 appId</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.app.getAppId </font></blockquote>
<h3 id="_2-10-getmac-获取客户端-mac-地址" tabindex="-1"><a class="header-anchor" href="#_2-10-getmac-获取客户端-mac-地址"><span>2.10 getMac --获取客户端 Mac 地址</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> clientIp <span class="token operator">=</span> <span class="token string">''</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getMac</span><span class="token punctuation">(</span>clientIp<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>参数差异</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>clientIp</td>
<td>string</td>
<td>√</td>
<td><font color='green'> 移动端可缺省</font></td>
<td>客户端 ip 地址</td>
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
<td>res.result</td>
<td>string</td>
<td>获取到的 mac 地址</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font></blockquote>
<h3 id="_2-11-getclientrootpath-获取客户端根路径" tabindex="-1"><a class="header-anchor" href="#_2-11-getclientrootpath-获取客户端根路径"><span>2.11 getClientRootPath --获取客户端根路径</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientRootPath</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
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
<td>res.result</td>
<td>string</td>
<td>获取到的客户端根路径</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.file.workspaceDirectory</font></blockquote>
<h3 id="_2-12-getclientosname-获取客户端操作系统名称" tabindex="-1"><a class="header-anchor" href="#_2-12-getclientosname-获取客户端操作系统名称"><span>2.12 getClientOSName --获取客户端操作系统名称</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientOSName</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
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
<td>res.result</td>
<td>string</td>
<td>获取到的客户端操作系统名称</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动(Android/iOS)原 SDK: AgreeSDK.device.getInfo()</font></blockquote>
<h3 id="_2-13-setthemepreference-设置主题" tabindex="-1"><a class="header-anchor" href="#_2-13-setthemepreference-设置主题"><span>2.13 setThemePreference -- 设置主题</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> theme <span class="token operator">=</span> <span class="token string">'#FFF'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setThemePreference</span><span class="token punctuation">(</span>theme<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>theme</td>
<td>string</td>
<td>√</td>
<td>主题颜色</td>
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
<td>res.result</td>
<td>string</td>
<td>是否设置成功(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<h3 id="_2-14-setlegalnum-设置柜面渠道法人号" tabindex="-1"><a class="header-anchor" href="#_2-14-setlegalnum-设置柜面渠道法人号"><span>2.14 setLegalNum --设置柜面渠道法人号</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> legalNum <span class="token operator">=</span> <span class="token string">'0010'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setLegalNum</span><span class="token punctuation">(</span>legalNum<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>legalNum</td>
<td>string</td>
<td>√</td>
<td>柜面渠道法人号</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>是否设置成功(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<h3 id="_2-15-setmina-设置是否与服务端通讯" tabindex="-1"><a class="header-anchor" href="#_2-15-setmina-设置是否与服务端通讯"><span>2.15 setMina --设置是否与服务端通讯</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token constant">MINA</span> <span class="token operator">=</span> <span class="token string">'true'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setMina</span><span class="token punctuation">(</span><span class="token constant">MINA</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>MINA</td>
<td>string</td>
<td>√</td>
<td>是否与服务端通讯</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>是否设置成功(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<h3 id="_2-16-setmode-设置连接服务端环境" tabindex="-1"><a class="header-anchor" href="#_2-16-setmode-设置连接服务端环境"><span>2.16 setMode --设置连接服务端环境</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token constant">MODE</span> <span class="token operator">=</span> <span class="token string">'dev'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setMode</span><span class="token punctuation">(</span><span class="token constant">MODE</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>MODE</td>
<td>string</td>
<td>√</td>
<td>设置连接服务端环境</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>是否设置成功(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<h3 id="_2-17-setcommpreference-设置通讯配置" tabindex="-1"><a class="header-anchor" href="#_2-17-setcommpreference-设置通讯配置"><span>2.17 setCommPreference --设置通讯配置</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> name <span class="token operator">=</span> <span class="token string">'hg'</span></span>
<span class="line"><span class="token keyword">let</span> httpUrlList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'http://3.1.11.76:8867'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> aarmUrlList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'ws://127.0.0.1:51003/websocket'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> msgUrlList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'ws://127.0.0.1:51004/websocket'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setCommPreference</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> httpUrlList<span class="token punctuation">,</span> aarmUrlList<span class="token punctuation">,</span> msgUrlList<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>string</td>
<td>√</td>
<td>oid 名称</td>
</tr>
<tr>
<td>httpUrlList</td>
<td>string</td>
<td>√</td>
<td>aase 的 http 的 url</td>
</tr>
<tr>
<td>aarmUrlList</td>
<td>List</td>
<td>√</td>
<td>aarm 的 websocket 资源更新 url</td>
</tr>
<tr>
<td>msgUrlList</td>
<td>List</td>
<td>√</td>
<td>amessage 的 websocket 消息推送 url</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>是否设置成功(&quot;true&quot;:成功;&quot;false&quot;:失败)</td>
</tr>
</tbody>
</table>
<h3 id="_2-18-getproperties-读取客户端配置" tabindex="-1"><a class="header-anchor" href="#_2-18-getproperties-读取客户端配置"><span>2.18 getProperties --读取客户端配置</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> qualifier <span class="token operator">=</span> <span class="token string">'cn.com.agree.ab.a4.client.web'</span></span>
<span class="line"><span class="token keyword">let</span> key <span class="token operator">=</span> <span class="token string">'port'</span></span>
<span class="line"><span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token string">'String'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getProperties</span><span class="token punctuation">(</span>qualifier<span class="token punctuation">,</span> key<span class="token punctuation">,</span> type<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>qualifier</td>
<td>string</td>
<td>√</td>
<td>插件标识前缀</td>
</tr>
<tr>
<td>key</td>
<td>string</td>
<td>√</td>
<td>配置名称</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>√</td>
<td>类型:Boolean,String,int,double,float,long</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
<li>安卓渠道修改配置方式：请修改 manifest.json 中 preference/abx5 下的相关配置
例如：</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">//www/manifest.json</span></span>
<span class="line">...</span>
<span class="line">  <span class="token property">"preference"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"abx5"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token property">"ABX5ModuleRootDir"</span><span class="token operator">:</span> <span class="token string">"www/ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"ABX5HttpUrl"</span><span class="token operator">:</span> <span class="token string">"http://***.***.*.*"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"jsPluginsRootDir"</span><span class="token operator">:</span> <span class="token string">"www/jsPlugins"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"extensionFolders"</span><span class="token operator">:</span> <span class="token string">"www/jsPlugins,www/ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"mainAarmUrl"</span><span class="token operator">:</span> <span class="token string">"http://192.168.71.111:58273/"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token property">"resource"</span><span class="token operator">:</span> <span class="token string">"local"</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    ...</span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">...</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td></td>
<td>读取到的内容</td>
</tr>
</tbody>
</table>
<h3 id="_2-19-closesubscribe-关闭客户端事件订阅" tabindex="-1"><a class="header-anchor" href="#_2-19-closesubscribe-关闭客户端事件订阅"><span>2.19 closeSubscribe --关闭客户端事件订阅</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">closeSubscribe</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token constant">TODO</span><span class="token operator">:</span><span class="token keyword">do</span> something to clean the cache</span>
<span class="line">    Client<span class="token punctuation">.</span><span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fun</td>
<td>function</td>
<td>√</td>
<td>关闭客户端方法(可以添加其他方法,例如清楚缓存)</td>
</tr>
</tbody>
</table>
<h3 id="_2-20-setminimized-最小化客户端" tabindex="-1"><a class="header-anchor" href="#_2-20-setminimized-最小化客户端"><span>2.20 setMinimized --最小化客户端</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setMinimized</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-21-setmaxmized-最大化客户端" tabindex="-1"><a class="header-anchor" href="#_2-21-setmaxmized-最大化客户端"><span>2.21 setMaxmized --最大化客户端</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setMaxmized</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-22-closesystem-关机操作" tabindex="-1"><a class="header-anchor" href="#_2-22-closesystem-关机操作"><span>2.22 closeSystem --关机操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">closeSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-23-restartsystem-重启操作" tabindex="-1"><a class="header-anchor" href="#_2-23-restartsystem-重启操作"><span>2.23 restartSystem --重启操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">restartSystem</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-24-getclientnowsystemtime-获取客户端当前系统时间" tabindex="-1"><a class="header-anchor" href="#_2-24-getclientnowsystemtime-获取客户端当前系统时间"><span>2.24 getClientNowSystemTime --获取客户端当前系统时间</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动(Android/iOS)渠道</font> > <font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> format <span class="token operator">=</span> <span class="token string">'yyyy-MM-dd'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientNowSystemTime</span><span class="token punctuation">(</span>format<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>format</td>
<td>string</td>
<td>√</td>
<td>时间格式</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td></td>
<td>获取的时间</td>
</tr>
</tbody>
</table>
<h3 id="_2-25-getclientfilelastmodified-获取客户端文件最后修改时间" tabindex="-1"><a class="header-anchor" href="#_2-25-getclientfilelastmodified-获取客户端文件最后修改时间"><span>2.25 getClientFileLastModified --获取客户端文件最后修改时间</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> filePath <span class="token operator">=</span> <span class="token string">'D:\\test.txt'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientFileLastModified</span><span class="token punctuation">(</span>filePath<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>filePath</td>
<td>string</td>
<td>√</td>
<td>客户端文件地址</td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td></td>
<td>获取的时间</td>
</tr>
</tbody>
</table>
<h3 id="_2-26-opensyspage-打开客户端系统配置页面" tabindex="-1"><a class="header-anchor" href="#_2-26-opensyspage-打开客户端系统配置页面"><span>2.26 openSysPage --打开客户端系统配置页面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">openSysPage</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-27-setshellclosable-窗口关闭按钮是否可以关闭" tabindex="-1"><a class="header-anchor" href="#_2-27-setshellclosable-窗口关闭按钮是否可以关闭"><span>2.27 setShellClosable --窗口关闭按钮是否可以关闭</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> ifClose <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setShellClosable</span><span class="token punctuation">(</span>ifClose<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ifClose</td>
<td>boolean</td>
<td>√</td>
<td>是否关闭变量:true 可以关闭，false 不允许关闭</td>
</tr>
</tbody>
</table>
<h3 id="_2-28-startlockscreen-一段时间不操作界面跳转锁屏界面" tabindex="-1"><a class="header-anchor" href="#_2-28-startlockscreen-一段时间不操作界面跳转锁屏界面"><span>2.28 startLockScreen --一段时间不操作界面跳转锁屏界面</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token number">3</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">startLockScreen</span><span class="token punctuation">(</span>time<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>time</td>
<td>int</td>
<td>√</td>
<td>单位：秒</td>
</tr>
</tbody>
</table>
<h3 id="_2-29-stoplockscreen-停止锁屏计时" tabindex="-1"><a class="header-anchor" href="#_2-29-stoplockscreen-停止锁屏计时"><span>2.29 stopLockScreen --停止锁屏计时</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">stopLockScreen</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-30-clienttotop-霸屏" tabindex="-1"><a class="header-anchor" href="#_2-30-clienttotop-霸屏"><span>2.30 clientToTop --霸屏</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> keepInTop <span class="token operator">=</span> <span class="token string">'true'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">clientToTop</span><span class="token punctuation">(</span>keepInTop<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keepInTop</td>
<td>string</td>
<td>√</td>
<td>是否霸屏 true 为霸屏 false 为结束霸屏</td>
</tr>
</tbody>
</table>
<h3 id="_2-31-setsystemdate-设置系统时间" tabindex="-1"><a class="header-anchor" href="#_2-31-setsystemdate-设置系统时间"><span>2.31 setSystemDate --设置系统时间</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> date <span class="token operator">=</span> <span class="token string">'2021-01-01'</span></span>
<span class="line"><span class="token keyword">let</span> time <span class="token operator">=</span> <span class="token string">'12:00:00'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setSystemDate</span><span class="token punctuation">(</span>date<span class="token punctuation">,</span> time<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>date</td>
<td>string</td>
<td>√</td>
<td>日期，日期格式 2021-03-08</td>
</tr>
<tr>
<td>time</td>
<td>string</td>
<td>√</td>
<td>时间，时间格式 12:00:00</td>
</tr>
</tbody>
</table>
<h3 id="_2-32-getmultiproperties-获取多个配置" tabindex="-1"><a class="header-anchor" href="#_2-32-getmultiproperties-获取多个配置"><span>2.32 getMultiProperties --获取多个配置</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> defaultTradePath <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cn.com.agree.ab.a5.client.gui.aui/defaultTradePath/String</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token keyword">let</span> parentMsgUrl <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cn.com.agree.ab.a5.client.communication/parentMsgUrl/String</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token keyword">let</span> accessKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cn.com.agree.ab.a5.client.communication/accessKey/String</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token keyword">let</span> secretKey <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">cn.com.agree.ab.a5.client.communication/secretKey/String</span><span class="token template-punctuation string">`</span></span></span>
<span class="line"><span class="token keyword">let</span> mode <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">Platform,MODE,String</span><span class="token template-punctuation string">`</span></span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>defaultTradePath<span class="token punctuation">)</span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>parentMsgUrl<span class="token punctuation">)</span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>accessKey<span class="token punctuation">)</span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>secretKey<span class="token punctuation">)</span></span>
<span class="line">list<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>mode<span class="token punctuation">)</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getMultiProperties</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>list</td>
<td>array[string]</td>
<td>√</td>
<td></td>
</tr>
</tbody>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res</td>
<td>promise</td>
<td>返回的多个配置</td>
</tr>
</tbody>
</table>
<h3 id="_2-33-getwindowinfo-获取设备屏幕的高度和宽度-abc-窗口的高度和宽度方法" tabindex="-1"><a class="header-anchor" href="#_2-33-getwindowinfo-获取设备屏幕的高度和宽度-abc-窗口的高度和宽度方法"><span>2.33 getWindowInfo --获取设备屏幕的高度和宽度，ABC 窗口的高度和宽度方法</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font> > <font color ='red' style="font-weight:bold">支持移动渠道基座 1.7.7 以上版本</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getWindowInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>移动端返回结果：</p>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"screenWidth"</span><span class="token operator">:</span> <span class="token number">533</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"screenHeight"</span><span class="token operator">:</span> <span class="token number">853</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"windowWidth"</span><span class="token operator">:</span> <span class="token number">533</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"windowHeight"</span><span class="token operator">:</span> <span class="token number">829</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pixelRatio"</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pixelWidth"</span><span class="token operator">:</span> <span class="token number">1600</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"pixelHeight"</span><span class="token operator">:</span> <span class="token number">2560</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusBarHeight"</span><span class="token operator">:</span> <span class="token number">24</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"statusBarPixelHeight"</span><span class="token operator">:</span> <span class="token number">72</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"navigateBarHeight"</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"navigateBarPixelHeight"</span><span class="token operator">:</span> <span class="token number">108</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>Object</code></li>
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
<td>screenWidth</td>
<td>number</td>
<td>屏幕物理宽度,这个是约数值</td>
</tr>
<tr>
<td>screenHeight</td>
<td>number</td>
<td>屏幕物理高度,这个是约数值</td>
</tr>
<tr>
<td>windowWidth</td>
<td>number</td>
<td>窗口可用宽度,这个是约数值</td>
</tr>
<tr>
<td>windowHeight</td>
<td>number</td>
<td>窗口可用高度 ,这个是约数值</td>
</tr>
<tr>
<td>pixelRatio</td>
<td>number</td>
<td>设备像素比(每英寸长度能够排列的像素数)</td>
</tr>
<tr>
<td>pixelWidth</td>
<td>number</td>
<td>设备逻辑像素宽度</td>
</tr>
<tr>
<td>pixelHeight</td>
<td>number</td>
<td>设备逻辑像素高度</td>
</tr>
<tr>
<td>statusBarHeight</td>
<td>number</td>
<td>状态栏物理高度</td>
</tr>
<tr>
<td>statusBarPixelHeight</td>
<td>number</td>
<td>状态栏逻辑像素高度</td>
</tr>
<tr>
<td>navigateBarHeight</td>
<td>number</td>
<td>导航栏物理高度</td>
</tr>
<tr>
<td>navigateBarPixelHeight</td>
<td>number</td>
<td>导航栏逻辑像素高度</td>
</tr>
</tbody>
</table>
<h3 id="_2-33-catchscopescreen-截取区域屏幕接口" tabindex="-1"><a class="header-anchor" href="#_2-33-catchscopescreen-截取区域屏幕接口"><span>2.33 catchScopeScreen --截取区域屏幕接口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">fileName</span><span class="token operator">:</span> <span class="token string">'111'</span><span class="token punctuation">,</span> <span class="token comment">// 文件名称，可选，默认是时间戳，不需要带后缀名</span></span>
<span class="line">    <span class="token literal-property property">imageType</span><span class="token operator">:</span> <span class="token string">'jpg'</span><span class="token punctuation">,</span> <span class="token comment">// png jpg/jpeg 默认jpg</span></span>
<span class="line">    <span class="token literal-property property">quality</span><span class="token operator">:</span> <span class="token number">90</span><span class="token punctuation">,</span> <span class="token comment">// 图片质量，质量越高，图片越大</span></span>
<span class="line">    <span class="token literal-property property">newWidth</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">,</span> <span class="token comment">// 自定义宽度, 默认不处理，可选</span></span>
<span class="line">    <span class="token literal-property property">newHeight</span><span class="token operator">:</span> <span class="token number">400</span><span class="token punctuation">,</span> <span class="token comment">// 自定义高度, 默认不处理，可选</span></span>
<span class="line">    <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">200</span> <span class="token comment">// 宽高不能超过200,按比例缩放, 默认不处理，可选</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token comment">// 带参数</span></span>
<span class="line">  <span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">catchScopeScreen</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span></span>
<span class="line">  <span class="token comment">// 不带参数</span></span>
<span class="line">  <span class="token comment">// let path = await Client.catchScopeScreen();</span></span>
<span class="line">  <span class="token comment">// 返回截图图片的路径</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>fileName</td>
<td>String</td>
<td>X</td>
<td>保存后的文件名称，可选，默认是时间戳，不需要带后缀名</td>
</tr>
<tr>
<td>imageType</td>
<td>String</td>
<td>X</td>
<td>图片类型 png jpg/jpeg 可选，默认 jpg</td>
</tr>
<tr>
<td>quality</td>
<td>Number</td>
<td>X</td>
<td>图片质量，质量越高，图片越大 范围 1-100 可选，默认 100</td>
</tr>
<tr>
<td>newWidth</td>
<td>Number</td>
<td>X</td>
<td>自定义宽度, 默认不处理，可选</td>
</tr>
<tr>
<td>newHeight</td>
<td>Number</td>
<td>X</td>
<td>自定义高度, 默认不处理，可选</td>
</tr>
<tr>
<td>maxLength</td>
<td>Number</td>
<td>X</td>
<td>宽高不能超过 200,按比例缩放, 默认不处理，可选</td>
</tr>
</tbody>
</table>
<p>移动端返回结果：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">file</span><span class="token operator">:</span><span class="token operator">/</span><span class="token comment">//storage/emulated/0/Android/data/cn.com.agree.sdk.runtime.apps/files/image/20221011/111.jpg"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>移动渠道返回值: <code v-pre>Object</code></li>
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
<td>String</td>
<td>直接返回截图文件路径</td>
</tr>
</tbody>
</table>
<h3 id="_2-34-getcommandlineargs-获取启动客户端命令中的参数" tabindex="-1"><a class="header-anchor" href="#_2-34-getcommandlineargs-获取启动客户端命令中的参数"><span>2.34 getCommandLineArgs --获取启动客户端命令中的参数</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getCommandLineArgs</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>result</td>
<td>list</td>
<td>返回启动客户端脚本中传入的参数</td>
</tr>
</tbody>
</table>
<h3 id="_2-35-toppingabcshell-置顶-abc-窗口" tabindex="-1"><a class="header-anchor" href="#_2-35-toppingabcshell-置顶-abc-窗口"><span>2.35 toppingAbcShell --置顶 ABC 窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">toppingAbcShell</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<h3 id="_2-36-deactivetoppingabcshell-取消置顶-abc-窗口" tabindex="-1"><a class="header-anchor" href="#_2-36-deactivetoppingabcshell-取消置顶-abc-窗口"><span>2.36 deactiveToppingAbcShell --取消置顶 ABC 窗口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">deactiveToppingAbcShell</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
</table>
<ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>result</td>
<td>string</td>
<td>&quot;success&quot;</td>
</tr>
</tbody>
</table>
<h3 id="_2-37-enablescreenshot-是否关闭截屏功能" tabindex="-1"><a class="header-anchor" href="#_2-37-enablescreenshot-是否关闭截屏功能"><span>2.37 enableScreenshot --是否关闭截屏功能</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持 Android 渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> enable <span class="token operator">=</span> <span class="token boolean">true</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">enableScreenshot</span><span class="token punctuation">(</span>enable<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>enable</td>
<td>boolean</td>
<td>√</td>
<td>是否关闭</td>
</tr>
</tbody>
</table>
<h3 id="_2-38-getdockstatus-获取-pad-在-adaas-基座上的状态" tabindex="-1"><a class="header-anchor" href="#_2-38-getdockstatus-获取-pad-在-adaas-基座上的状态"><span>2.38 getDockStatus --  获取 pad 在 adaas 基座上的状态</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持 Android 渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getDockStatus</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-39-startdockobserver-开启-dock-监听-监听-pad-在-adaas-上的状态" tabindex="-1"><a class="header-anchor" href="#_2-39-startdockobserver-开启-dock-监听-监听-pad-在-adaas-上的状态"><span>2.39 startDockObserver --   开启 dock 监听，监听 pad 在 adaas 上的状态</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持 Android 渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'onDockStatus'</span><span class="token punctuation">,</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">data</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//获取监听状态</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">startDockObserver</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-40-restartapp-重启-app" tabindex="-1"><a class="header-anchor" href="#_2-40-restartapp-重启-app"><span>2.40 restartApp --   重启 app</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持 Android 渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">restartApp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-41-geteth0mac-有线网卡的-mac-地址" tabindex="-1"><a class="header-anchor" href="#_2-41-geteth0mac-有线网卡的-mac-地址"><span>2.41 geteth0Mac --   有线网卡的 mac 地址</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持 Android 渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">geteth0Mac</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-42-getresourcerequestheader-获取资源下载-header-信息" tabindex="-1"><a class="header-anchor" href="#_2-42-getresourcerequestheader-获取资源下载-header-信息"><span>2.42 getResourceRequestHeader -- 获取资源下载 header 信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getResourceRequestHeader</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-43-setresourcerequestheader-设置资源下载-header-信息" tabindex="-1"><a class="header-anchor" href="#_2-43-setresourcerequestheader-设置资源下载-header-信息"><span>2.43 setResourceRequestHeader -- 设置资源下载 header 信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> headerMap <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">XXX</span><span class="token operator">:</span> <span class="token constant">XXX</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">setResourceRequestHeader</span><span class="token punctuation">(</span>headerMap<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>headerMap</td>
<td>Object</td>
<td>√</td>
<td>自定义 header 信息</td>
</tr>
</tbody>
</table>
<h3 id="_2-44-getclientgrmversion-获取-grm-版本信息" tabindex="-1"><a class="header-anchor" href="#_2-44-getclientgrmversion-获取-grm-版本信息"><span>2.44 getClientGrmVersion -- 获取 GRM 版本信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.28 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getClientGrmVersion</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>encoding</td>
<td>string</td>
<td>×</td>
<td>编码格式</td>
</tr>
</tbody>
</table>
<h3 id="_2-45-zipuploadlog-打包上传客户端日志" tabindex="-1"><a class="header-anchor" href="#_2-45-zipuploadlog-打包上传客户端日志"><span>2.45 zipUploadLog -- 打包上传客户端日志</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.29 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> remotePath <span class="token operator">=</span> <span class="token string">"./uploadLog"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token keyword">let</span> logType <span class="token operator">=</span> <span class="token string">"abc"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">zipUploadLog</span><span class="token punctuation">(</span>remotePath<span class="token punctuation">,</span> logType<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>remotePath</td>
<td>string</td>
<td>√</td>
<td>指定上传到服务端的目录</td>
</tr>
<tr>
<td>logType</td>
<td>string</td>
<td>√</td>
<td>指定打包模式，支持字段 abc、evs、ads、fileList</td>
</tr>
<tr>
<td>fileList</td>
<td>list</td>
<td>×</td>
<td>当打包模式为 fileList 时，需要指定需要打包的日志，例如[&quot;log/client.log&quot;,&quot;log/communication.log&quot;]</td>
</tr>
</tbody>
</table>
<h3 id="_2-46-getrealclientip-获取客户端-ip-地址" tabindex="-1"><a class="header-anchor" href="#_2-46-getrealclientip-获取客户端-ip-地址"><span>2.46 getRealClientIp --获取客户端 ip 地址</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（v2.0.31 新增）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Client<span class="token punctuation">.</span><span class="token function">getRealClientIp</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
<li>柜面渠道返回值: <code v-pre>Object</code></li>
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
<td>res.result</td>
<td>string</td>
<td>获取到的客户端 ip (排除虚拟网卡影响)</td>
</tr>
</tbody>
</table>
</div></template>


