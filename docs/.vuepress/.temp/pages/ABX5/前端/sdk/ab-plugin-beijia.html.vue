<template><div><h1 id="ab-plugin-beijia-背夹组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-beijia-背夹组件"><span>ab-plugin-beijia 背夹组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> BeiJia <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-beijia"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h2 id="_3-蓝牙和其他" tabindex="-1"><a class="header-anchor" href="#_3-蓝牙和其他"><span>3. 蓝牙和其他</span></a></h2>
<h3 id="_3-1-openbluetooth-打开蓝牙" tabindex="-1"><a class="header-anchor" href="#_3-1-openbluetooth-打开蓝牙"><span>3.1 openBluetooth --打开蓝牙</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">openBluetooth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回参数列表:</li>
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
<td>code</td>
<td>int</td>
<td>0 打开成功，-1 打开失败</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>错误信息，成功时无返回值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.openBluetooth</font></blockquote>
<hr>
<h3 id="_3-2-closebluetooth-关闭蓝牙" tabindex="-1"><a class="header-anchor" href="#_3-2-closebluetooth-关闭蓝牙"><span>3.2 closeBluetooth --关闭蓝牙</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">closeBluetooth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回参数列表:</li>
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
<td>code</td>
<td>int</td>
<td>0 关闭成功，-1 关闭失败</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>错误信息，成功时无返回值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeBluetooth</font></blockquote>
<hr>
<h3 id="_3-3-searchdevice-搜索蓝牙设备-获取附近蓝牙-包括配对和不配对的" tabindex="-1"><a class="header-anchor" href="#_3-3-searchdevice-搜索蓝牙设备-获取附近蓝牙-包括配对和不配对的"><span>3.3 searchDevice --搜索蓝牙设备，获取附近蓝牙，包括配对和不配对的</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">searchDevice</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>10</td>
<td>应用Id，对应apps目录下的子应用目录名称</td>
</tr>
</tbody>
</table>
<ul>
<li>success 返回参数列表:</li>
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
<td>address</td>
<td>String</td>
<td>蓝牙 Mac 地址</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>蓝牙名称，这个名称可能不存在</td>
</tr>
</tbody>
</table>
<ul>
<li>fail 返回参数列表:</li>
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
<td>code</td>
<td>String</td>
<td>错误码</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>错误信息，蓝牙未开启</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.searchDevice</font></blockquote>
<hr>
<h3 id="_3-4-stopsearchdevice-停止搜索蓝牙设备" tabindex="-1"><a class="header-anchor" href="#_3-4-stopsearchdevice-停止搜索蓝牙设备"><span>3.4 stopSearchDevice --停止搜索蓝牙设备</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">stopSearchDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>success 返回参数列表:</li>
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
<td>code</td>
<td>String</td>
<td>0</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>-</td>
</tr>
</tbody>
</table>
<ul>
<li>fail 返回参数列表:</li>
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
<td>code</td>
<td>String</td>
<td>错误码</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>错误信息，蓝牙未开启</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.stopSearchDevice</font></blockquote>
<hr>
<h3 id="_3-5-getcurrentdevice-获取匹配的蓝牙" tabindex="-1"><a class="header-anchor" href="#_3-5-getcurrentdevice-获取匹配的蓝牙"><span>3.5 getCurrentDevice --获取匹配的蓝牙</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getCurrentDevice</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>success 返回参数列表:</li>
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
<td>address</td>
<td>String</td>
<td>蓝牙 Mac 地址</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>蓝牙名称，这个名称可能不存在</td>
</tr>
</tbody>
</table>
<ul>
<li>fail 返回参数列表:</li>
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
<td>code</td>
<td>String</td>
<td>错误码</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>错误信息，蓝牙未开启</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getCurrentDevice</font></blockquote>
<hr>
<h3 id="_3-6-getbluetoothstatus-查询蓝牙连接状态" tabindex="-1"><a class="header-anchor" href="#_3-6-getbluetoothstatus-查询蓝牙连接状态"><span>3.6 getBluetoothStatus --查询蓝牙连接状态</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getBluetoothStatus</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>success 返回参数列表:</li>
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
<td>code</td>
<td>int</td>
<td>1：蓝牙开 0：蓝牙关闭</td>
</tr>
</tbody>
</table>
<ul>
<li>fail 返回参数列表:</li>
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
<td>code</td>
<td>String</td>
<td>错误码</td>
</tr>
<tr>
<td>message</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getBluetoothStatus</font></blockquote>
<hr>
<h2 id="_4-基础接口" tabindex="-1"><a class="header-anchor" href="#_4-基础接口"><span>4. 基础接口</span></a></h2>
<h3 id="_4-1-opendevice-连接背夹设备" tabindex="-1"><a class="header-anchor" href="#_4-1-opendevice-连接背夹设备"><span>4.1 openDevice --连接背夹设备</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">     <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span> </span>
<span class="line">     <span class="token literal-property property">device</span><span class="token operator">:</span> <span class="token string">"huaxin"</span><span class="token punctuation">,</span> <span class="token comment">// 厂商名称,需要根据蓝牙名称判断</span></span>
<span class="line">     <span class="token literal-property property">mac</span><span class="token operator">:</span> <span class="token string">""</span> <span class="token comment">// 背夹的mac地址</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">openDevice</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>type</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>连接方式：0-USB 连接，1-蓝牙连接</td>
</tr>
<tr>
<td>name</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>同时支持蓝牙名称或者mac</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.openDevice</font></blockquote>
<hr>
<h3 id="_4-2-closedevice-关闭设备连接" tabindex="-1"><a class="header-anchor" href="#_4-2-closedevice-关闭设备连接"><span>4.2 closeDevice --关闭设备连接</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">closeDevice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeDevice</font></blockquote>
<hr>
<h3 id="_4-3-getbatteryinfo-获取电池信息" tabindex="-1"><a class="header-anchor" href="#_4-3-getbatteryinfo-获取电池信息"><span>4.3 getBatteryInfo --获取电池信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getBatteryInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>isBatteryExist</td>
<td>int</td>
<td>有无电池：0-无电池，1-有电池</td>
</tr>
<tr>
<td>direction</td>
<td>int</td>
<td>电池电流方向：0-放电，1-充电</td>
</tr>
<tr>
<td>electricity</td>
<td>String</td>
<td>电量百分比</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getBatteryInfo</font></blockquote>
<hr>
<h3 id="_4-4-getdeviceserialid-获取设备序列号" tabindex="-1"><a class="header-anchor" href="#_4-4-getdeviceserialid-获取设备序列号"><span>4.4 getDeviceSerialID --获取设备序列号</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getDeviceSerialID</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>sn</td>
<td>String</td>
<td>各厂商自定义的设备序列号。该序列号应该同设备外观上注明的设备编号相同</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceSerialID</font></blockquote>
<hr>
<h3 id="_4-5-isconnect-设备是否连接" tabindex="-1"><a class="header-anchor" href="#_4-5-isconnect-设备是否连接"><span>4.5 isConnect --设备是否连接</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">isConnect</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.isConnect</font></blockquote>
<hr>
<h3 id="_4-6-getdevicestate-检测设备模块信息" tabindex="-1"><a class="header-anchor" href="#_4-6-getdevicestate-检测设备模块信息"><span>4.6 getDeviceState --检测设备模块信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">moduleName</span><span class="token operator">:</span> <span class="token string">"SR,FR"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getDeviceState</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>入参列表</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
<tr>
<td>moduleName</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>模块名称（如需查询多个模块，以逗号分隔），读卡器：CR （所有读卡器的总称，如需查询指定读卡器，请填写具体读卡器模块名称 ），非接触式身份证读卡器：IDC，非接触式IC卡读卡器：ICC，接触式IC卡读卡器：ICCX，指纹仪：FR，签名版：SR，磁条卡：MR，密码键盘：PR</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>模块名（SR/MR等）</td>
<td>int</td>
<td>状态码（0，-1）</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceState</font></blockquote>
<hr>
<h3 id="_4-7-getdeviceversion-获取外设版本" tabindex="-1"><a class="header-anchor" href="#_4-7-getdeviceversion-获取外设版本"><span>4.7 getDeviceVersion --获取外设版本</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getDeviceVersion</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>成功返回 0，失败返回错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>version</td>
<td>String</td>
<td>版本信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getDeviceVersion</font></blockquote>
<hr>
<h3 id="_4-8-updatedevice-更新外设" tabindex="-1"><a class="header-anchor" href="#_4-8-updatedevice-更新外设"><span>4.8 updateDevice --更新外设</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">osPath</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">updateDevice</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>osPath</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>背夹的系统文件</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>成功返回 0，失败返回错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.updateDevice</font></blockquote>
<hr>
<h2 id="_5-身份证" tabindex="-1"><a class="header-anchor" href="#_5-身份证"><span>5. 身份证</span></a></h2>
<h3 id="_5-1-getidcardinfo-获取身份证信息" tabindex="-1"><a class="header-anchor" href="#_5-1-getidcardinfo-获取身份证信息"><span>5.1 getIDCardInfo --获取身份证信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getIDCardInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>返回对应错误码，若成功，该值为 0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>cardType</td>
<td>int</td>
<td>0：大陆居民 1：外国剧名，2：港澳台居民</td>
</tr>
<tr>
<td>chineseName</td>
<td>String</td>
<td>中文姓名</td>
</tr>
<tr>
<td>englishName</td>
<td>String</td>
<td>英文名</td>
</tr>
<tr>
<td>sex</td>
<td>String</td>
<td>性别: 男 ，女</td>
</tr>
<tr>
<td>nationality</td>
<td>String</td>
<td>民族</td>
</tr>
<tr>
<td>birthday</td>
<td>String</td>
<td>出生日期（YYYYMMDD）</td>
</tr>
<tr>
<td>address</td>
<td>String</td>
<td>住址</td>
</tr>
<tr>
<td>idcardNO</td>
<td>String</td>
<td>身份证号码（通行证号码）</td>
</tr>
<tr>
<td>passportNO</td>
<td>String</td>
<td>签证版本号（外国人身份证信息才有此属性）</td>
</tr>
<tr>
<td>organizationCode</td>
<td>String</td>
<td>签发机关</td>
</tr>
<tr>
<td>expiryDate</td>
<td>String</td>
<td>有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)</td>
</tr>
<tr>
<td>idPhoto</td>
<td>JSON</td>
<td>身份证照片(本地存储路径)</td>
</tr>
<tr>
<td>fpld</td>
<td>String</td>
<td>身份证指纹仪信息（1024 字节指纹信息 base64 编码）</td>
</tr>
</tbody>
</table>
<ul>
<li>idPhoto参数列表</li>
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
<td>frontImagePath</td>
<td>String</td>
<td>正面照片路径</td>
</tr>
<tr>
<td>backImagePath</td>
<td>String</td>
<td>背面照片路径</td>
</tr>
<tr>
<td>mergeImagePath</td>
<td>String</td>
<td>合成照片路径</td>
</tr>
<tr>
<td>avatarImagePath</td>
<td>String</td>
<td>裁剪后头像照片路径</td>
</tr>
<tr>
<td>frontImageBase64</td>
<td>String</td>
<td>正面照片base64编码</td>
</tr>
<tr>
<td>backImageBase64</td>
<td>String</td>
<td>背面照片base64编码</td>
</tr>
<tr>
<td>mergeImageBase64</td>
<td>String</td>
<td>合成照片base64编码</td>
</tr>
<tr>
<td>avatarImageBase64</td>
<td>String</td>
<td>裁剪后头像照片base64编码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font></blockquote>
<hr>
<h3 id="_5-2-getidcardinfo-读取港澳台居民居住证信息" tabindex="-1"><a class="header-anchor" href="#_5-2-getidcardinfo-读取港澳台居民居住证信息"><span>5.2 getIDCardInfo --读取港澳台居民居住证信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getIDCardInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间，单位（S）</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>返回对应错误码，若成功，该值为 0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>chineseName</td>
<td>String</td>
<td>中文姓名</td>
</tr>
<tr>
<td>sex</td>
<td>String</td>
<td>性别: 男 ，女</td>
</tr>
<tr>
<td>idcardNO</td>
<td>String</td>
<td>身份证号码（通行证号码）</td>
</tr>
<tr>
<td>birthday</td>
<td>String</td>
<td>出生日期（YYYYMMDD）</td>
</tr>
<tr>
<td>organizationCode</td>
<td>String</td>
<td>签发机关</td>
</tr>
<tr>
<td>address</td>
<td>String</td>
<td>居住地址</td>
</tr>
<tr>
<td>expiryDate</td>
<td>String</td>
<td>有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)</td>
</tr>
<tr>
<td>passCheck</td>
<td>-</td>
<td>通行证号</td>
</tr>
<tr>
<td>checkTimes</td>
<td>-</td>
<td>签发次数</td>
</tr>
<tr>
<td>idPhoto</td>
<td>JSON</td>
<td>身份证照片(本地存储路径)</td>
</tr>
<tr>
<td>fpld</td>
<td>String</td>
<td>身份证指纹仪信息（1024 字节指纹信息 base64 编码）</td>
</tr>
<tr>
<td>cardType</td>
<td>int</td>
<td>0：大陆居民 1：外国剧名，2：港澳台居民</td>
</tr>
</tbody>
</table>
<ul>
<li>idPhoto参数列表</li>
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
<td>frontImagePath</td>
<td>String</td>
<td>正面照片路径</td>
</tr>
<tr>
<td>backImagePath</td>
<td>String</td>
<td>背面照片路径</td>
</tr>
<tr>
<td>mergeImagePath</td>
<td>String</td>
<td>合成照片路径</td>
</tr>
<tr>
<td>avatarImagePath</td>
<td>String</td>
<td>裁剪后头像照片路径</td>
</tr>
<tr>
<td>frontImageBase64</td>
<td>String</td>
<td>正面照片base64编码</td>
</tr>
<tr>
<td>backImageBase64</td>
<td>String</td>
<td>背面照片base64编码</td>
</tr>
<tr>
<td>mergeImageBase64</td>
<td>String</td>
<td>合成照片base64编码</td>
</tr>
<tr>
<td>avatarImageBase64</td>
<td>String</td>
<td>裁剪后头像照片base64编码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font></blockquote>
<hr>
<h3 id="_5-3-getidcardinfo-读取外国人永久居留身份证信息" tabindex="-1"><a class="header-anchor" href="#_5-3-getidcardinfo-读取外国人永久居留身份证信息"><span>5.3 getIDCardInfo --读取外国人永久居留身份证信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getIDCardInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间，单位（S）</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>返回对应错误码，若成功，该值为 0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>chineseName</td>
<td>String</td>
<td>中文姓名</td>
</tr>
<tr>
<td>sex</td>
<td>String</td>
<td>性别: 男 ，女</td>
</tr>
<tr>
<td>idcardNO</td>
<td>-</td>
<td>身份证号码（通行证号码）</td>
</tr>
<tr>
<td>birthday</td>
<td>-</td>
<td>出生日期（YYYYMMDD）</td>
</tr>
<tr>
<td>organizationCode</td>
<td>-</td>
<td>签发机关</td>
</tr>
<tr>
<td>areaNO</td>
<td>-</td>
<td>国籍或所在地区代码</td>
</tr>
<tr>
<td>expiryDate</td>
<td>String</td>
<td>有效期限，（格式：YYYYMMDD-YYYYMMDD或 YYYYMMDD-长期)</td>
</tr>
<tr>
<td>cardVersion</td>
<td>int</td>
<td>证件版本</td>
</tr>
<tr>
<td>idPhoto</td>
<td>JSON</td>
<td>身份证照片(本地存储路径)</td>
</tr>
<tr>
<td>fpld</td>
<td>String</td>
<td>身份证指纹仪信息（1024 字节指纹信息 base64 编码）</td>
</tr>
<tr>
<td>cardType</td>
<td>int</td>
<td>0：大陆居民 1：外国剧名，2：港澳台居民</td>
</tr>
</tbody>
</table>
<ul>
<li>idPhoto参数列表</li>
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
<td>frontImagePath</td>
<td>String</td>
<td>正面照片路径</td>
</tr>
<tr>
<td>backImagePath</td>
<td>String</td>
<td>背面照片路径</td>
</tr>
<tr>
<td>mergeImagePath</td>
<td>String</td>
<td>合成照片路径</td>
</tr>
<tr>
<td>avatarImagePath</td>
<td>String</td>
<td>裁剪后头像照片路径</td>
</tr>
<tr>
<td>frontImageBase64</td>
<td>String</td>
<td>正面照片base64编码</td>
</tr>
<tr>
<td>backImageBase64</td>
<td>String</td>
<td>背面照片base64编码</td>
</tr>
<tr>
<td>mergeImageBase64</td>
<td>String</td>
<td>合成照片base64编码</td>
</tr>
<tr>
<td>avatarImageBase64</td>
<td>String</td>
<td>裁剪后头像照片base64编码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getIDCardInfo</font></blockquote>
<hr>
<h3 id="_5-4-cancelreadidcard-取消读身份证" tabindex="-1"><a class="header-anchor" href="#_5-4-cancelreadidcard-取消读身份证"><span>5.4 cancelReadIDCard --取消读身份证</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">cancelReadIDCard</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadIDCard</font></blockquote>
<hr>
<h2 id="_6-ic卡" tabindex="-1"><a class="header-anchor" href="#_6-ic卡"><span>6. IC卡</span></a></h2>
<h3 id="_6-1-geticcardinfo-ic卡读取基本信息" tabindex="-1"><a class="header-anchor" href="#_6-1-geticcardinfo-ic卡读取基本信息"><span>6.1 getICCardInfo --IC卡读取基本信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aidList</span><span class="token operator">:</span> <span class="token string">"A000000333010101|A000000333010102|A000000333010103|A000000333010106"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tagList</span><span class="token operator">:</span> <span class="token string">"AB"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getICCardInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>请求超时时间</td>
</tr>
<tr>
<td>ictype</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>IC卡类型，1接触，2非接，3自动</td>
</tr>
<tr>
<td>aidList</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>值为金融IC卡的应用列表，借记卡为“A000000333010101”，贷记卡为“A000000333010102”，也可以传入空，NULL或“”。</td>
</tr>
<tr>
<td>tagList</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>要读取的信息标签，例:”A” 详细标签及其说明见统一规范文档</td>
</tr>
</tbody>
</table>
<ul>
<li>tagList标签列表:</li>
</ul>
<table>
<thead>
<tr>
<th>数据元</th>
<th>来自IC卡的数据</th>
<th>标签</th>
<th>标签ASCII码</th>
</tr>
</thead>
<tbody>
<tr>
<td>卡号</td>
<td></td>
<td>0x41</td>
<td>A</td>
</tr>
<tr>
<td>姓名</td>
<td></td>
<td>0x42</td>
<td>B</td>
</tr>
<tr>
<td>证件类型</td>
<td>HEX值: 00-身份证 01-军官证 02-护照 03-入境证 04-临时身份证 05-其它</td>
<td>0x43</td>
<td>C</td>
</tr>
<tr>
<td>证件号码</td>
<td>0x44</td>
<td>D</td>
<td></td>
</tr>
<tr>
<td>余额</td>
<td>不带小数点</td>
<td>0x45</td>
<td>E</td>
</tr>
<tr>
<td>余额上限</td>
<td>不带小数点</td>
<td>0x46</td>
<td>F</td>
</tr>
<tr>
<td>单笔交易限额</td>
<td></td>
<td>0x47</td>
<td>G</td>
</tr>
<tr>
<td>交易货币代码</td>
<td></td>
<td>0x48</td>
<td>H</td>
</tr>
<tr>
<td>失效日期</td>
<td></td>
<td>0x49</td>
<td>I</td>
</tr>
<tr>
<td>IC卡序列号</td>
<td></td>
<td>0x4A</td>
<td>J</td>
</tr>
<tr>
<td>二磁道信息</td>
<td></td>
<td>0x4B</td>
<td>K</td>
</tr>
<tr>
<td>一磁道信息</td>
<td></td>
<td>0x4C</td>
<td>L</td>
</tr>
<tr>
<td>返回所有信息</td>
<td></td>
<td></td>
<td>ALL</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>是否刷卡成功，成功为 0，失败为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>A</td>
<td>String</td>
<td>格式：标签（1个字节）+ 十进制长度（3个字节）+数据（N字节）</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCardInfo</font></blockquote>
<hr>
<h3 id="_6-2-iccpoweron-ic卡上电" tabindex="-1"><a class="header-anchor" href="#_6-2-iccpoweron-ic卡上电"><span>6.2 iccPowerOn --IC卡上电</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">iccPowerOn</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间</td>
</tr>
<tr>
<td>icType</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>IC卡类型，1 接触，2 非接，3 自动识别</td>
</tr>
</tbody>
</table>
<ul>
<li>返回参数列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>string</td>
<td>错误信息</td>
</tr>
<tr>
<td>attrs</td>
<td>string</td>
<td>Attrs 数据 hex string</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.iccPowerOn</font></blockquote>
<hr>
<h3 id="_6-3-iccpoweroff-ic卡下电" tabindex="-1"><a class="header-anchor" href="#_6-3-iccpoweroff-ic卡下电"><span>6.3 iccPowerOff --IC卡下电</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">iccPowerOff</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icType</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>IC卡类型，1 接触，2 非接，3 自动识别</td>
</tr>
</tbody>
</table>
<ul>
<li>返回参数列表:</li>
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
<td>code</td>
<td>int</td>
<td>0 打开成功，-1 打开失败</td>
</tr>
<tr>
<td>errMsg</td>
<td>string</td>
<td>错误信息，成功时无返回值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.iccPowerOff</font></blockquote>
<hr>
<h3 id="_6-4-geticcarqc-ic卡读取arqc" tabindex="-1"><a class="header-anchor" href="#_6-4-geticcarqc-ic卡读取arqc"><span>6.4 getICCARQC --IC卡读取ARQC</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tradeData</span><span class="token operator">:</span><span class="token string">"A000000333010101|A000000333010102"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aidList</span><span class="token operator">:</span><span class="token string">"AB"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getICCARQC</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>IC卡类型，1 接触，2 非接，3 自动识别</td>
</tr>
<tr>
<td>aidList</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>值为金融 IC 卡的应用列表，借记卡为“A000000333010101”，贷记卡为“A000000333010102”，也可以传入空，NULL 或“”。</td>
</tr>
<tr>
<td>tradeData</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>交易数据，产生ARQC的数据，包含多个标签变量，参考下面标签列表</td>
</tr>
</tbody>
</table>
<ul>
<li>tradeData标签列表:</li>
</ul>
<table>
<thead>
<tr>
<th>数据元</th>
<th>来自终端的数据</th>
<th>标签</th>
<th>标签ASCII码</th>
</tr>
</thead>
<tbody>
<tr>
<td>授权金额</td>
<td>不带小数点，单位为分</td>
<td>0x50</td>
<td>P</td>
</tr>
<tr>
<td>其它金额</td>
<td>不带小数点，单位为分</td>
<td>0x51</td>
<td>Q</td>
</tr>
<tr>
<td>交易货币代码</td>
<td>0x0156 (人民币 CNY )</td>
<td>0x52</td>
<td>R</td>
</tr>
<tr>
<td>交易日期</td>
<td>YYMMDD</td>
<td>0x53</td>
<td>S</td>
</tr>
<tr>
<td>交易类型</td>
<td>《中国银联银行卡联网联合技术规范V2.1 第2部分 报文接口规范.pdf》6.4 域3 交易处理码</td>
<td>0x54</td>
<td>T</td>
</tr>
<tr>
<td>交易时间</td>
<td>时分秒中间无分隔符 如：“110530”</td>
<td>0x55</td>
<td>U</td>
</tr>
<tr>
<td>商户名称</td>
<td></td>
<td>0x57</td>
<td>W</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>成功返回 0，失败返回错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>ARQC</td>
<td>String</td>
<td>授权请求密文及其相关数据，按银联规范中 55 域的数据, ASCII 码的形式</td>
</tr>
<tr>
<td>tradeAppData</td>
<td>String</td>
<td>交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K字节</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCARQC</font></blockquote>
<hr>
<h3 id="_6-5-geticctradedetail-ic-卡读取交易明细" tabindex="-1"><a class="header-anchor" href="#_6-5-geticctradedetail-ic-卡读取交易明细"><span>6.5 getICCTradeDetail --IC 卡读取交易明细</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aidList</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getICCTradeDetail</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icType</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>IC卡类型，0接触，1非接</td>
</tr>
<tr>
<td>aidList</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>值为金融IC卡的应用列表，借记卡为&quot;A000000333010101&quot;，贷记卡为&quot;A000000333010102&quot;也可以传入空，NULL或“”</td>
</tr>
</tbody>
</table>
<ul>
<li>tradeDetail标签列表:</li>
</ul>
<table>
<thead>
<tr>
<th>数据元</th>
<th>来自终端的数据</th>
<th>标签</th>
<th>标签ASCII码</th>
</tr>
</thead>
<tbody>
<tr>
<td>授权金额</td>
<td>不带小数点,单位为分</td>
<td>0x50</td>
<td>P</td>
</tr>
<tr>
<td>其它金额</td>
<td>不带小数点,单位为分</td>
<td>0x51</td>
<td>Q</td>
</tr>
<tr>
<td>交易货币代码</td>
<td>0x52</td>
<td>R</td>
<td></td>
</tr>
<tr>
<td>交易日期</td>
<td>YYMMDD</td>
<td>0x53</td>
<td>S</td>
</tr>
<tr>
<td>交易类型</td>
<td>2字节</td>
<td>0x54</td>
<td>T</td>
</tr>
<tr>
<td>交易时间</td>
<td>HHMMSPDB</td>
<td>0x55</td>
<td>U</td>
</tr>
<tr>
<td>终端国家代码</td>
<td></td>
<td>0x56</td>
<td>V</td>
</tr>
<tr>
<td>商户名称</td>
<td></td>
<td>0x57</td>
<td>W</td>
</tr>
<tr>
<td>应用交易计数器（ATC）</td>
<td>按十进制输出</td>
<td>0x58</td>
<td>X</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>成功返回 0，失败返回错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>tradeDetail</td>
<td>-</td>
<td>返回的交易日志，每条日志数据包含多个标签变量。数据组合形式为：明细条数（2 位）+明细总长度（3 位）+各条明细数据。各条明细数据组合形式为：标签（1 位）+长度（3 位）+数据</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCTradeDetail</font></blockquote>
<hr>
<h3 id="_6-6-geticcardinfoandarqc-ic-卡读取全部信息" tabindex="-1"><a class="header-anchor" href="#_6-6-geticcardinfoandarqc-ic-卡读取全部信息"><span>6.6 getICCardInfoAndARQC --IC 卡读取全部信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">icType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">aidList</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tagList</span><span class="token operator">:</span><span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tradeData</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getICCardInfoAndARQC</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>icType</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>IC卡类型，1 接触，2 非接，3 自动识别</td>
</tr>
<tr>
<td>aidList</td>
<td>String</td>
<td>√</td>
<td>&quot;&quot;</td>
<td>值为金融 IC 卡的应用列表，借记卡为&quot;A000000333010101&quot;，贷记卡&quot;A000000333010102&quot;，也可以传入空，NULL 或&quot;&quot;。</td>
</tr>
<tr>
<td>tagList</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>要读取的信息标签，例:”A”</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间，单位（S）</td>
</tr>
<tr>
<td>tradeData</td>
<td>String</td>
<td>√</td>
<td>&quot;&quot;</td>
<td>交易数据，产生ARQC的数据，包含多个标签变量，参考下面标签列表</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>ARQC</td>
<td>String</td>
<td>授权请求密文及其相关数据，按银联规范中 55 域的数据, ASCII 码的形式</td>
</tr>
<tr>
<td>tradeAppData</td>
<td>-</td>
<td>交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K 字节</td>
</tr>
<tr>
<td>A</td>
<td>String</td>
<td>“A”: “0196228231825021494762” ，格式：标签（1个字节）+ 十进制长度（3个字节）+数据（N字节），（标签为A，长度为019，内容为6228231825021494762）</td>
</tr>
<tr>
<td>55field</td>
<td>String</td>
<td>字符串&quot;arqc_9F26&quot;：55field格式为键值对格式</td>
</tr>
</tbody>
</table>
<ul>
<li>55域JSON对象:</li>
</ul>
<table>
<thead>
<tr>
<th>返回值</th>
<th>返回值说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>arqc_9F26</td>
<td>应用密文</td>
</tr>
<tr>
<td>arqc_9F27</td>
<td>密文信息数据</td>
</tr>
<tr>
<td>arqc_9F10</td>
<td>发卡行应用数据</td>
</tr>
<tr>
<td>arqc_9F37</td>
<td>随机数(4 字节)</td>
</tr>
<tr>
<td>arqc_9F36</td>
<td>ATC</td>
</tr>
<tr>
<td>arqc_95</td>
<td>终端验证结果</td>
</tr>
<tr>
<td>arqc_9A</td>
<td>终端验证结果</td>
</tr>
<tr>
<td>arqc_9C</td>
<td>交易类型</td>
</tr>
<tr>
<td>arqc_9F02</td>
<td>授权金额</td>
</tr>
<tr>
<td>arqc_5F2A</td>
<td>交易货币代码</td>
</tr>
<tr>
<td>arqc_82</td>
<td>应用交互特征</td>
</tr>
<tr>
<td>arqc_9F1A</td>
<td>终端国家代码</td>
</tr>
<tr>
<td>arqc_9F03</td>
<td>其它金额</td>
</tr>
<tr>
<td>arqc_9F33</td>
<td>终端性能</td>
</tr>
<tr>
<td>arqc_9F13</td>
<td>上次联机应用交易计数器寄存器</td>
</tr>
<tr>
<td>arqc_5A</td>
<td>应用主账号</td>
</tr>
<tr>
<td>arqc_5F34</td>
<td>应用 PAN 序列号</td>
</tr>
<tr>
<td>arqc_CVR</td>
<td>卡片验证结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getICCardInfoAndARQC</font></blockquote>
<hr>
<h3 id="_6-7-cancelreadiccard-取消读ic卡" tabindex="-1"><a class="header-anchor" href="#_6-7-cancelreadiccard-取消读ic卡"><span>6.7 cancelReadICCard --取消读IC卡</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">cancelReadICCard</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadICCard</font></blockquote>
<hr>
<h3 id="_6-8-writearpcexeicscript-向ic卡发送arpc-发送写卡脚本" tabindex="-1"><a class="header-anchor" href="#_6-8-writearpcexeicscript-向ic卡发送arpc-发送写卡脚本"><span>6.8 writeARPCExeICScript --向IC卡发送ARPC，发送写卡脚本</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">strTxData</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">strARPC</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">CDol2</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">writeARPCExeICScript</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>strTxData</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>交易数据，与ARQC交易数据相同</td>
</tr>
<tr>
<td>strARPC</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>授权响应密文，后台返回的银联规范的55域数据，ASCII码的形式。若执行脚本需在后面添加脚本域数据</td>
</tr>
<tr>
<td>CDol2</td>
<td>String</td>
<td>√</td>
<td>-</td>
<td>交易应用数据，在取ARQC时输出的交易应用数据</td>
</tr>
<tr>
<td>timeout</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>scriptReslut</td>
<td>-</td>
<td>交易应用数据，将在检验 ARQC 时作为传入的数据。长度大于5K 字节</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.writeARPCExeICScript</font></blockquote>
<hr>
<h2 id="_7-磁条卡" tabindex="-1"><a class="header-anchor" href="#_7-磁条卡"><span>7. 磁条卡</span></a></h2>
<h3 id="_7-1-getmccardinfo-获取mc磁条卡信息" tabindex="-1"><a class="header-anchor" href="#_7-1-getmccardinfo-获取mc磁条卡信息"><span>7.1 getMCCardInfo --获取MC磁条卡信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">tracks</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getMCCardInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>tracks</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>1：读取1磁道，2：读取2磁道， 3：读取三磁道， 23：读取23磁道</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>是否刷卡成功，成功为0，失败为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>pan</td>
<td>String</td>
<td>主账号（卡号）</td>
</tr>
<tr>
<td>track1</td>
<td>String</td>
<td>磁道1数据</td>
</tr>
<tr>
<td>track2</td>
<td>String</td>
<td>磁道2数据</td>
</tr>
<tr>
<td>track3</td>
<td>String</td>
<td>磁道3数据</td>
</tr>
<tr>
<td>expiredDate</td>
<td>String</td>
<td>卡片有效期(yyMM)</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getMCCardInfo</font></blockquote>
<hr>
<h3 id="_7-2-cancelreadmccard-取消读mc卡" tabindex="-1"><a class="header-anchor" href="#_7-2-cancelreadmccard-取消读mc卡"><span>7.2 cancelReadMCCard --取消读MC卡</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">cancelReadMCCard</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadMCCard</font></blockquote>
<hr>
<h2 id="_8-指纹" tabindex="-1"><a class="header-anchor" href="#_8-指纹"><span>8. 指纹</span></a></h2>
<h3 id="_8-1-getfpbuffer-获取上传指纹状态" tabindex="-1"><a class="header-anchor" href="#_8-1-getfpbuffer-获取上传指纹状态"><span>8.1 getFpBuffer --获取上传指纹状态</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getFpBuffer</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getFpBuffer</font></blockquote>
<hr>
<h3 id="_8-2-getfpinfo-获取指纹信息" tabindex="-1"><a class="header-anchor" href="#_8-2-getfpinfo-获取指纹信息"><span>8.2 getFpInfo --获取指纹信息</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getFpInfo</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>Number</td>
<td>√</td>
<td>-</td>
<td>请求超时时间</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>picture</td>
<td>String</td>
<td>指纹特征图片储存路径</td>
</tr>
<tr>
<td>pictureBase64</td>
<td>String</td>
<td>指纹特征图片Base64</td>
</tr>
<tr>
<td>fpld</td>
<td>-</td>
<td>指纹特征值</td>
</tr>
<tr>
<td>factory</td>
<td>-</td>
<td>厂商代码，tc: 天成   zz:中正</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getFpInfo</font></blockquote>
<hr>
<h3 id="_8-3-cancelreadfp-取消读指纹卡" tabindex="-1"><a class="header-anchor" href="#_8-3-cancelreadfp-取消读指纹卡"><span>8.3 cancelReadFp --取消读指纹卡</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">cancelReadFp</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>成功返回 0，失败返回错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadFp</font></blockquote>
<hr>
<h2 id="_9-密码键盘" tabindex="-1"><a class="header-anchor" href="#_9-密码键盘"><span>9. 密码键盘</span></a></h2>
<h3 id="_9-1-resetkeys-重置密码键盘" tabindex="-1"><a class="header-anchor" href="#_9-1-resetkeys-重置密码键盘"><span>9.1 resetKeys --重置密码键盘</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">resetKeys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>Number</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.resetKeys</font></blockquote>
<hr>
<h3 id="_9-2-resetinitkeys-重置密码键盘-金华" tabindex="-1"><a class="header-anchor" href="#_9-2-resetinitkeys-重置密码键盘-金华"><span>9.2 resetInitKeys --重置密码键盘(金华)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    strInitKey<span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">resetInitKeys</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>strInitKey</td>
<td>String</td>
<td>Y</td>
<td>-</td>
<td>key1 初始密钥</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.resetInitKeys</font></blockquote>
<hr>
<h3 id="_9-3-updatetmk-柜外清方式更新主秘钥" tabindex="-1"><a class="header-anchor" href="#_9-3-updatetmk-柜外清方式更新主秘钥"><span>9.3 updateTMK --柜外清方式更新主秘钥</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">keyType</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">TMKIndex</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mKey</span> <span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">updateTMK</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4</td>
</tr>
<tr>
<td>TMKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引 0-7</td>
</tr>
<tr>
<td>mKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>主密钥</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>checkValue</td>
<td>-</td>
<td>校验值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.updateTMK</font></blockquote>
<hr>
<h3 id="_9-4-downloadtmk-柜外清方式下载主秘钥" tabindex="-1"><a class="header-anchor" href="#_9-4-downloadtmk-柜外清方式下载主秘钥"><span>9.4 downloadTMK --柜外清方式下载主秘钥</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">keyType</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">TMKIndex</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">mKey</span> <span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">downloadTMK</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4</td>
</tr>
<tr>
<td>TMKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引 0-7</td>
</tr>
<tr>
<td>mKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>主密钥</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>checkValue</td>
<td>-</td>
<td>校验值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadTMK</font></blockquote>
<hr>
<h3 id="_9-5-downloadmasterkey-下载主密钥-金华银行新增" tabindex="-1"><a class="header-anchor" href="#_9-5-downloadmasterkey-下载主密钥-金华银行新增"><span>9.5 downloadMasterKey --下载主密钥 (金华银行新增)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    keyType <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    TMKIndex <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    strKey <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">strHex</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">downloadMasterKey</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4</td>
</tr>
<tr>
<td>TMKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引 0-7</td>
</tr>
<tr>
<td>strKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>主密钥</td>
</tr>
<tr>
<td>strHex</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>校验值</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadMasterKey</font></blockquote>
<hr>
<h3 id="_9-6-downloadtpk-柜外清方式下载工作秘钥" tabindex="-1"><a class="header-anchor" href="#_9-6-downloadtpk-柜外清方式下载工作秘钥"><span>9.6 downloadTPK --柜外清方式下载工作秘钥</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">keyType</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">TMKIndex</span> <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">TPKIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">wKey</span> <span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">downloadTPK</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4</td>
</tr>
<tr>
<td>TMKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引 0-7</td>
</tr>
<tr>
<td>TPKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引 0-7</td>
</tr>
<tr>
<td>wKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>工作密钥密文</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>checkValue</td>
<td>-</td>
<td>校验值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadTPK</font></blockquote>
<hr>
<h3 id="_9-7-downloadworkkey-下载工作密钥-金华银行新增" tabindex="-1"><a class="header-anchor" href="#_9-7-downloadworkkey-下载工作密钥-金华银行新增"><span>9.7 downloadWorkKey --下载工作密钥 (金华银行新增)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    keyType <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    TMKIndex <span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    TPKIndex<span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    wKey <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">	<span class="token literal-property property">strHex</span><span class="token operator">:</span><span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">downloadWorkKey</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>keyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥类型：1-DES 单倍长 2-DES 双倍长 3-DES 三倍长 4-SM4</td>
</tr>
<tr>
<td>TMKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引 0-7</td>
</tr>
<tr>
<td>TPKIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引 0-7</td>
</tr>
<tr>
<td>wKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>工作密钥密文</td>
</tr>
<tr>
<td>strHex</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>校验值</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.downloadWorkKey</font></blockquote>
<hr>
<h3 id="_9-8-getsessionkey-读取会话密钥" tabindex="-1"><a class="header-anchor" href="#_9-8-getsessionkey-读取会话密钥"><span>9.8 getSessionKey --读取会话密钥</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">pubKeyType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">sessionKeyType</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">pubKey</span> <span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getSessionKey</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>pubKeyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>公钥类型 0--RSA， 1--SM2</td>
</tr>
<tr>
<td>sessionKeyType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>生成的会话密钥类型，1—DES 单倍长，2-DES 双倍长，3—DES 三倍长，4-SM4</td>
</tr>
<tr>
<td>pubKey</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>公钥</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若成功，该值为 0，若失败，该值为对应错误码</td>
</tr>
<tr>
<td>data</td>
<td>String</td>
<td>会话密钥</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getSessionKey</font></blockquote>
<hr>
<h3 id="_9-9-getpassword-获取密码键盘输入信息-读取密码" tabindex="-1"><a class="header-anchor" href="#_9-9-getpassword-获取密码键盘输入信息-读取密码"><span>9.9 getPassword --获取密码键盘输入信息(读取密码)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">"000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">wKeyIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">encryptType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">times</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间(秒)</td>
</tr>
<tr>
<td>account</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>账号</td>
</tr>
<tr>
<td>wKeyIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引 (DES--0，SM4--1)</td>
</tr>
<tr>
<td>encryptType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>加密类型：0-不加密，1-DES 加密，2-SM4 加密</td>
</tr>
<tr>
<td>times</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>可输入的次数</td>
</tr>
<tr>
<td>minLength</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>密码最小长度</td>
</tr>
<tr>
<td>maxLength</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>密码最大长度</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>若成功，返回加密后的密码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getPassword</font></blockquote>
<hr>
<h3 id="_9-10-getpassword-读取带校验弱密码的密码-读取密码" tabindex="-1"><a class="header-anchor" href="#_9-10-getpassword-读取带校验弱密码的密码-读取密码"><span>9.10 getPassword --读取带校验弱密码的密码(读取密码)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">"000"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">wKeyIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">encryptType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">times</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">minLength</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">maxLength</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">validate</span><span class="token operator">:</span> <span class="token boolean">false</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getPassword</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>√</td>
<td>-</td>
<td>超时时间(秒)</td>
</tr>
<tr>
<td>account</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>账号</td>
</tr>
<tr>
<td>wKeyIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引 (DES--0，SM4--1)</td>
</tr>
<tr>
<td>encryptType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>加密类型：0-不加密，1-DES 加密，2-SM4 加密</td>
</tr>
<tr>
<td>times</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>可输入的次数</td>
</tr>
<tr>
<td>minLength</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>密码最小长度</td>
</tr>
<tr>
<td>maxLength</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>密码最大长度</td>
</tr>
<tr>
<td>validate</td>
<td>Boolean</td>
<td>-</td>
<td>-</td>
<td>是否对弱密码进行校验</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>若成功，返回加密后的密码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getPassword</font></blockquote>
<hr>
<h3 id="_9-11-cancelreadpin-取消键盘输入" tabindex="-1"><a class="header-anchor" href="#_9-11-cancelreadpin-取消键盘输入"><span>9.11 cancelReadPin --取消键盘输入</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">cancelReadPin</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.cancelReadPin</font></blockquote>
<hr>
<h3 id="_9-12-calcmac-计算mac" tabindex="-1"><a class="header-anchor" href="#_9-12-calcmac-计算mac"><span>9.12 calcMac --计算MAC</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">nAlgType</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">zakIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">src</span><span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">calcMac</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>nAlgType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>1国际，2国密</td>
</tr>
<tr>
<td>zakIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>MAC密钥索引，即工作密钥索引，上层在下载工作密钥接口根据工作密钥索引管理对应密钥的类型（包括密码加密密钥、Mac密钥），对应索引一般是固定即可</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
<tr>
<td>src</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>数据源</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>data</td>
<td>String</td>
<td>Mac数据</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.calcMac</font></blockquote>
<hr>
<h3 id="_9-13-getkeypadusealgorithm-获取密钥加密方式" tabindex="-1"><a class="header-anchor" href="#_9-13-getkeypadusealgorithm-获取密钥加密方式"><span>9.13 getKeypadUseAlgorithm --获取密钥加密方式</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getKeypadUseAlgorithm</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>algorithm</td>
<td>int</td>
<td>加密类型, 0 为 DES，1 为 SM4</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeypadUseAlgorithm</font></blockquote>
<hr>
<h3 id="_9-14-getkeypadid-获取密钥安全节点" tabindex="-1"><a class="header-anchor" href="#_9-14-getkeypadid-获取密钥安全节点"><span>9.14 getKeypadID --获取密钥安全节点</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getKeypadID</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>当等于 0 时表示返回正确，其他情况用错误码表示</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>UID</td>
<td>String</td>
<td>序列号</td>
</tr>
<tr>
<td>companyID</td>
<td>String</td>
<td>厂商名称</td>
</tr>
<tr>
<td>SN</td>
<td>-</td>
<td>设备编号</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeypadID</font></blockquote>
<hr>
<h3 id="_9-15-encryptpin-明文转密文" tabindex="-1"><a class="header-anchor" href="#_9-15-encryptpin-明文转密文"><span>9.15 encryptPin --明文转密文</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">wKeyIndex</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">"11"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">password</span><span class="token operator">:</span> <span class="token string">"11"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">encryptPin</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>password</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>明文密码</td>
</tr>
<tr>
<td>account</td>
<td>String</td>
<td>-</td>
<td>-</td>
<td>账号</td>
</tr>
<tr>
<td>wKeyIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>加密后的密码</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.encryptPin</font></blockquote>
<hr>
<h3 id="_9-16-getkeysstatus-获取密钥下载状态" tabindex="-1"><a class="header-anchor" href="#_9-16-getkeysstatus-获取密钥下载状态"><span>9.16 getKeysStatus --获取密钥下载状态</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">mKeyIndex</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">wKeyIndex</span> <span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getKeysStatus</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>mKeyIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>主密钥索引，预留值为 0</td>
</tr>
<tr>
<td>wKeyIndex</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>工作密钥索引，预留值为 0</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>initKey</td>
<td>int</td>
<td>1&lt;存在&gt;，0&lt;不存在&gt;</td>
</tr>
<tr>
<td>ZMK</td>
<td>int</td>
<td>1&lt;存在&gt;，0&lt;不存在&gt;</td>
</tr>
<tr>
<td>ZPK</td>
<td>int</td>
<td>1&lt;存在&gt;，0&lt;不存在&gt;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getKeysStatus</font></blockquote>
<hr>
<h3 id="_9-17-getverification-读取验证码-不发声" tabindex="-1"><a class="header-anchor" href="#_9-17-getverification-读取验证码-不发声"><span>9.17 getVerification --读取验证码(不发声)</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">length</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getVerification</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>超时时间(秒)</td>
</tr>
<tr>
<td>length</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>可输入长度</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>password</td>
<td>String</td>
<td>结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getVerification</font></blockquote>
<hr>
<h2 id="_10-电子签名" tabindex="-1"><a class="header-anchor" href="#_10-电子签名"><span>10. 电子签名</span></a></h2>
<h3 id="_10-1-starthwscreen-启动手写屏" tabindex="-1"><a class="header-anchor" href="#_10-1-starthwscreen-启动手写屏"><span>10.1 startHWScreen --启动手写屏</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">startHWScreen</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.startHWScreen</font></blockquote>
<hr>
<h3 id="_10-2-gethwscreendata-获取屏幕签名信息-手写屏数据" tabindex="-1"><a class="header-anchor" href="#_10-2-gethwscreendata-获取屏幕签名信息-手写屏数据"><span>10.2 getHWScreenData --获取屏幕签名信息（手写屏数据）</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">20</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">getHWScreenData</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>通讯超时时间,单位:秒，范围0~100</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
<tr>
<td>picture</td>
<td>-</td>
<td>返回储存到本地的签名图片路径，需要保存到应用沙箱中</td>
</tr>
<tr>
<td>pictureBase64</td>
<td>-</td>
<td>签名图片对应的Base64数据</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.getHWScreenData</font></blockquote>
<hr>
<h3 id="_10-3-closehwscreen-关闭手写屏" tabindex="-1"><a class="header-anchor" href="#_10-3-closehwscreen-关闭手写屏"><span>10.3 closeHWScreen --关闭手写屏</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">closeHWScreen</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.closeHWScreen</font></blockquote>
<hr>
<h2 id="_11-声音和灯控" tabindex="-1"><a class="header-anchor" href="#_11-声音和灯控"><span>11. 声音和灯控</span></a></h2>
<h3 id="_11-1-makevoice-发起语音" tabindex="-1"><a class="header-anchor" href="#_11-1-makevoice-发起语音"><span>11.1 makeVoice --发起语音</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">voiceType</span> <span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">makeVoice</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>voiceType</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>声音类型，0：请输入密码，1：请再次输入密码，2：密码错误，请重新输入密码，3：请放置身份证，4：请放置IC卡，5：请插入IC卡，6：请刷磁条卡，7：请签字，8：请录入指纹，9：请重新录入指纹，a：操作成功</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.makeVoice</font></blockquote>
<hr>
<h3 id="_11-2-makebeep-发起蜂鸣" tabindex="-1"><a class="header-anchor" href="#_11-2-makebeep-发起蜂鸣"><span>11.2 makeBeep --发起蜂鸣</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">times</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span> <span class="token operator">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">makeBeep</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>times</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>次数</td>
</tr>
<tr>
<td>timeout</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>蜂鸣时间,100毫秒的倍数</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.makeBeep</font></blockquote>
<hr>
<h3 id="_11-3-ledonoroff-led灯控制" tabindex="-1"><a class="header-anchor" href="#_11-3-ledonoroff-led灯控制"><span>11.3 ledOnOrOff --LED灯控制</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>示例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span> </span>
<span class="line">    <span class="token literal-property property">ledNo</span> <span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">onOrOff</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">color</span> <span class="token operator">:</span> <span class="token number">0</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> BeiJia<span class="token punctuation">.</span><span class="token function">ledOnOrOff</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>入参列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>ledNo</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>IC灯0；磁条卡灯1；身份证灯2；指纹灯3</td>
</tr>
<tr>
<td>onOrOff</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>亮灭：亮1；灭2</td>
</tr>
<tr>
<td>color</td>
<td>int</td>
<td>-</td>
<td>-</td>
<td>0</td>
</tr>
</tbody>
</table>
<ul>
<li>出参列表:</li>
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
<td>code</td>
<td>int</td>
<td>若失败，返回对应错误码，若成功，该值为0</td>
</tr>
<tr>
<td>errMsg</td>
<td>String</td>
<td>错误信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原 SDK: AgreeSDK.extdevice.ledOnOrOff</font></blockquote>
<hr>
<h2 id="_12-错误码" tabindex="-1"><a class="header-anchor" href="#_12-错误码"><span>12. 错误码</span></a></h2>
<table>
<thead>
<tr>
<th>错误代码</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>0</td>
<td>操作成功</td>
</tr>
<tr>
<td>-1</td>
<td>参数异常</td>
</tr>
<tr>
<td>-2</td>
<td>超时异常</td>
</tr>
<tr>
<td>-3</td>
<td>读卡异常</td>
</tr>
<tr>
<td>-4</td>
<td>连接异常</td>
</tr>
<tr>
<td>-5</td>
<td>密钥未下发</td>
</tr>
<tr>
<td>-6</td>
<td>密码键盘用户取消输入</td>
</tr>
<tr>
<td>-7</td>
<td>两次录入密码不一致</td>
</tr>
<tr>
<td>-8</td>
<td>未进行配置远程设备蓝牙地址，android设置配对列表中也没有找到已配对设备</td>
</tr>
<tr>
<td>-9</td>
<td>配对失败</td>
</tr>
<tr>
<td>-10</td>
<td>写报文失败</td>
</tr>
<tr>
<td>-11</td>
<td>读报文失败</td>
</tr>
<tr>
<td>-12</td>
<td>读报文被取消</td>
</tr>
<tr>
<td>-13</td>
<td>枚举USB设备失败</td>
</tr>
<tr>
<td>-14</td>
<td>未找到USB接口</td>
</tr>
<tr>
<td>-15</td>
<td>未找到USB通讯端点</td>
</tr>
<tr>
<td>-16</td>
<td>USB授权失败</td>
</tr>
<tr>
<td>-17</td>
<td>厂商内部缓冲区不足</td>
</tr>
<tr>
<td>-18</td>
<td>启动签名失败</td>
</tr>
<tr>
<td>-19</td>
<td>客户未签名</td>
</tr>
<tr>
<td>-20</td>
<td>操作被取消</td>
</tr>
<tr>
<td>-21</td>
<td>操作失败</td>
</tr>
<tr>
<td>-22</td>
<td>从设备获取文件的信息失败</td>
</tr>
<tr>
<td>-23</td>
<td>md5 校 验失败</td>
</tr>
<tr>
<td>-24</td>
<td>开卡机动画失败</td>
</tr>
<tr>
<td>-25</td>
<td>读磁卡失败</td>
</tr>
<tr>
<td>-26</td>
<td>3个磁道都没有数据</td>
</tr>
<tr>
<td>-27</td>
<td>未知错误，刷卡超时</td>
</tr>
<tr>
<td>-28</td>
<td>下载文件失败</td>
</tr>
<tr>
<td>-29</td>
<td>继续执行这条指令</td>
</tr>
<tr>
<td>-30</td>
<td>指纹仪连接异常或配置指纹仪驱动异常</td>
</tr>
<tr>
<td>-31</td>
<td>不支持接触用户卡</td>
</tr>
<tr>
<td>-32</td>
<td>接触用户卡未插到位</td>
</tr>
<tr>
<td>-33</td>
<td>接触用户卡上电失败</td>
</tr>
<tr>
<td>-34</td>
<td>不支持 PSAM 卡</td>
</tr>
<tr>
<td>-35</td>
<td>PSAM 卡上电失败</td>
</tr>
<tr>
<td>-36</td>
<td>不支持非接触用户卡</td>
</tr>
<tr>
<td>-37</td>
<td>非接触用户卡激活失败</td>
</tr>
<tr>
<td>-38</td>
<td>等待卡进入感应区超时</td>
</tr>
<tr>
<td>-39</td>
<td>有多张卡在感应区</td>
</tr>
<tr>
<td>-40</td>
<td>读取身份证信息失败</td>
</tr>
<tr>
<td>-41</td>
<td>启 动升级失败</td>
</tr>
<tr>
<td>-42</td>
<td>删除文件失败</td>
</tr>
<tr>
<td>-43</td>
<td>厂商驱动内部调用发生异常，异常将写入log文件</td>
</tr>
<tr>
<td>-45</td>
<td>身份证信息解析错误</td>
</tr>
<tr>
<td>-46</td>
<td>身份证信息解析错误</td>
</tr>
<tr>
<td>-47</td>
<td>找卡失败</td>
</tr>
<tr>
<td>-48</td>
<td>IC卡未找到短文件</td>
</tr>
<tr>
<td>-49</td>
<td>IC卡短文件读取失败</td>
</tr>
<tr>
<td>-50</td>
<td>so申请空间失败</td>
</tr>
<tr>
<td>-51</td>
<td>IC卡未找到DOL文件</td>
</tr>
<tr>
<td>-52</td>
<td>IC卡未找到DOL文件</td>
</tr>
<tr>
<td>-53</td>
<td>IC卡没有DOL数据</td>
</tr>
<tr>
<td>-54</td>
<td>IC应用初始化失败</td>
</tr>
<tr>
<td>-55</td>
<td>IC卡没有交易日志</td>
</tr>
<tr>
<td>-56</td>
<td>IC卡没有记录</td>
</tr>
<tr>
<td>-57</td>
<td>IC卡GAC失败</td>
</tr>
<tr>
<td>-58</td>
<td>IC卡命令交互失败</td>
</tr>
<tr>
<td>-59</td>
<td>IC卡GAC无响应</td>
</tr>
<tr>
<td>-60</td>
<td>IC卡认证信息读取失败</td>
</tr>
<tr>
<td>-61</td>
<td>IC卡交易信息读取失败</td>
</tr>
<tr>
<td>-62</td>
<td>IC卡卡号读取失败</td>
</tr>
<tr>
<td>-63</td>
<td>写IC卡失败</td>
</tr>
<tr>
<td>-64</td>
<td>IC卡指令执行失败</td>
</tr>
<tr>
<td>-65</td>
<td>主密钥未下发</td>
</tr>
<tr>
<td>-66</td>
<td>工作密钥未下发</td>
</tr>
<tr>
<td>-67</td>
<td>MAC密钥未下发</td>
</tr>
<tr>
<td>-68</td>
<td>初始密钥未下发</td>
</tr>
<tr>
<td>-69</td>
<td>获取设备序列号失败</td>
</tr>
<tr>
<td>-70</td>
<td>找到磁卡</td>
</tr>
<tr>
<td>-71</td>
<td>报文校验失败</td>
</tr>
<tr>
<td>-72</td>
<td>密钥校验失败</td>
</tr>
<tr>
<td>-73</td>
<td>打开吸入式身份证阅读器失败</td>
</tr>
<tr>
<td>-74</td>
<td>需要采集的指纹仪与背夹连接的指纹仪不匹配</td>
</tr>
<tr>
<td>-75</td>
<td>合成正反面照错误</td>
</tr>
<tr>
<td>-76</td>
<td>设置不支持蓝牙</td>
</tr>
<tr>
<td>-77</td>
<td>缓冲区不足</td>
</tr>
<tr>
<td>-78</td>
<td>读卡失败</td>
</tr>
<tr>
<td>-80</td>
<td>解密失败</td>
</tr>
<tr>
<td>-81</td>
<td>验签失败</td>
</tr>
<tr>
<td>-82</td>
<td>数据源编码错误</td>
</tr>
<tr>
<td>-83</td>
<td>密钥自加密失败</td>
</tr>
<tr>
<td>-84</td>
<td>证件错误</td>
</tr>
<tr>
<td>-85</td>
<td>指令校验错误</td>
</tr>
<tr>
<td>-86</td>
<td>公钥不存在</td>
</tr>
<tr>
<td>-87</td>
<td>播报内容转换失败</td>
</tr>
<tr>
<td>-88</td>
<td>轨迹下发失败</td>
</tr>
<tr>
<td>-89</td>
<td>轨迹格式校验失败</td>
</tr>
<tr>
<td>-90</td>
<td>当前无执行任务</td>
</tr>
<tr>
<td>-91</td>
<td>指纹仪采集失败</td>
</tr>
<tr>
<td>-92</td>
<td>加密芯片自毁，通讯密钥丢失</td>
</tr>
<tr>
<td>-93</td>
<td>蓝牙加密通讯密钥库加解密失败</td>
</tr>
<tr>
<td>-94</td>
<td>生成失败</td>
</tr>
<tr>
<td>-100</td>
<td>主密钥不存在</td>
</tr>
<tr>
<td>-101</td>
<td>工作密钥不存在</td>
</tr>
<tr>
<td>-103</td>
<td>enc密钥不存在</td>
</tr>
<tr>
<td>-104</td>
<td>密钥id不正确</td>
</tr>
<tr>
<td>-105</td>
<td>MAC密钥不存在</td>
</tr>
<tr>
<td>-308</td>
<td>未检测到PSAM卡</td>
</tr>
<tr>
<td>-997</td>
<td>蓝牙使能失败</td>
</tr>
<tr>
<td>-998</td>
<td>设备忙</td>
</tr>
<tr>
<td>-999</td>
<td>调用模块外设异常</td>
</tr>
</tbody>
</table>
</div></template>


