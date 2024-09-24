<template><div><h1 id="ab-plugin-device-外设操作类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-device-外设操作类组件"><span>ab-plugin-device @外设操作类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> DeviceSetting <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-device"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-setadspreference-设置外设ads链接url" tabindex="-1"><a class="header-anchor" href="#_2-1-setadspreference-设置外设ads链接url"><span>2.1 setAdsPreference --设置外设ads链接url</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> adsUrl<span class="token operator">=</span><span class="token string">"http://127.0.0.1:3306"</span><span class="token punctuation">;</span>  <span class="token comment">//ads的链接url</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">setAdsPreference</span><span class="token punctuation">(</span>adsUrl<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>adsUrl</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>ads的链接url</td>
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
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.setAdsPreference(adsUrl)</font></blockquote>
<hr>
<h3 id="_2-2-getdevicelist-获取外设列表" tabindex="-1"><a class="header-anchor" href="#_2-2-getdevicelist-获取外设列表"><span>2.2 getDeviceList --获取外设列表</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">getDeviceList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>外设列表</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getDeviceList()</font></blockquote>
<hr>
<h3 id="_2-3-setdevicelist-设置外设配置信息" tabindex="-1"><a class="header-anchor" href="#_2-3-setdevicelist-设置外设配置信息"><span>2.3 setDeviceList --设置外设配置信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> setting <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>   <span class="token comment">//配置的json字符串</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">setDeviceList</span><span class="token punctuation">(</span>setting<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>setting</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>配置的json字符串</td>
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
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.setDeviceList(setting)</font></blockquote>
<hr>
<h3 id="_2-4-cleardevicelist-清空外设配置信息" tabindex="-1"><a class="header-anchor" href="#_2-4-cleardevicelist-清空外设配置信息"><span>2.4 clearDeviceList --清空外设配置信息</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">clearDeviceList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.clearDeviceList()</font></blockquote>
<hr>
<h3 id="_2-5-getabcsocketport-获取abc监听adssocket端口" tabindex="-1"><a class="header-anchor" href="#_2-5-getabcsocketport-获取abc监听adssocket端口"><span>2.5 getAbcSocketPort --获取abc监听adssocket端口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">getAbcSocketPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>abc监听adssocket端口</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getAbcSocketPort()</font></blockquote>
<hr>
<h3 id="_2-6-getdevicesocketport-获取adssocket端口" tabindex="-1"><a class="header-anchor" href="#_2-6-getdevicesocketport-获取adssocket端口"><span>2.6 getDeviceSocketPort --获取adssocket端口</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">getDeviceSocketPort</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>adssocket端口</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getDeviceSocketPort()</font></blockquote>
<hr>
<h3 id="_2-7-isadsconnect-判断ads是否启动成功" tabindex="-1"><a class="header-anchor" href="#_2-7-isadsconnect-判断ads是否启动成功"><span>2.7 isAdsConnect --判断ads是否启动成功</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">isAdsConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>&quot;true&quot;或&quot;false&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.isAdsConnect()</font></blockquote>
<hr>
<h3 id="_2-8-getonetypedeviceconfig-根据传入外设类型获取外设配置-壳子中无对应实现-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-8-getonetypedeviceconfig-根据传入外设类型获取外设配置-壳子中无对应实现-勿调用"><span>2.8 getOneTypeDeviceConfig --根据传入外设类型获取外设配置(壳子中无对应实现，勿调用！)</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道(壳子中无对应实现，勿调用！)</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> adsType <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span> <span class="token comment">//外设类型</span></span>
<span class="line"><span class="token keyword">let</span> adsQuery <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>  <span class="token comment">//是否从ads获取外设配置信息</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">getOneTypeDeviceConfig</span><span class="token punctuation">(</span>adsType<span class="token punctuation">,</span>adsQuery<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>adsType</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>外设类型</td>
</tr>
<tr>
<td>adsQuery</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>是否从ads获取外设配置信息</td>
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
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.getOneTypeDeviceConfig(adsType,adsQuery)</font></blockquote>
<hr>
<h3 id="_2-9-jssubscribeready-js消息订阅完成" tabindex="-1"><a class="header-anchor" href="#_2-9-jssubscribeready-js消息订阅完成"><span>2.9 jsSubscribeReady --js消息订阅完成</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> DeviceSetting<span class="token punctuation">.</span><span class="token function">jsSubscribeReady</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
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
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: DeviceSetting.jsSubscribeReady()</font></blockquote>
<hr>
</div></template>


