<template><div><h1 id="ab-manager-device-外设调用及配置" tabindex="-1"><a class="header-anchor" href="#ab-manager-device-外设调用及配置"><span>ab-manager-device@外设调用及配置</span></a></h1>
<p><em><em>注: 文档中的出现的</em><code v-pre>URL</code><em>接口都为demo测试地址,使用时请根据市场<code v-pre>ADS</code>服务接口自行替换</em></em></p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> DeviceManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-device"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<blockquote>
<p><strong>获取外设配置信息</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">getDeviceList</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devicelist"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>获取全部设备配置</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">getAllDevConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devallconfig"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>保存全部设备配置</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">saveAllDevConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devallconfig"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token string">"外设的配置数据"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>获取指定设备配置</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">getDevConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devconfig"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token string">"指定的设备名称"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>保存指定设备配置</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">saveDevConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devconfig"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token string">"指定的设备配置数据"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>获取系统硬件端口</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">getAllHardWare</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/hardware"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>关闭外设服务</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">shutDown</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/shutDown"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>解除设备占用</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">deoccupy</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/deoccupy"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">params</span><span class="token operator">:</span> <span class="token string">"设备名称"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>获取设备状态</strong></p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    DeviceManager<span class="token punctuation">.</span><span class="token function">getAllDevStatus</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/config/devstatus"</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">//todo</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>调用外设</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">DeviceManager<span class="token punctuation">.</span><span class="token function">getDevice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"http://ip:port/req/"</span></span>
<span class="line">    <span class="token literal-property property">devType</span><span class="token operator">:</span> <span class="token string">"外设类型"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">printArg</span><span class="token operator">:</span> <span class="token string">"打印的数据"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">devParams</span><span class="token operator">:</span> <span class="token string">"ADS外设调用的参数"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// todo</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>全屏打印</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 全屏打印 没有回调方法</span></span>
<span class="line">DeviceManager<span class="token punctuation">.</span><span class="token function">getDevice</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">devType</span><span class="token operator">:</span> <span class="token string">"printTradePage"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>DeviceManager Methods</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>方法名</th>
<th>说明</th>
<th>参数</th>
<th>参数类型</th>
</tr>
</thead>
<tbody>
<tr>
<td>pushDeviceTypes</td>
<td>新增外设类型</td>
<td>默认值:<code v-pre>[&quot;Id&quot;, &quot;Msf&quot;, &quot;Ic&quot;, &quot;Ic_iccall&quot;, &quot;Fp&quot;, &quot;Pin&quot;, &quot;PinEncrypt&quot;, &quot;USBKey&quot;, &quot;Gwq&quot;, &quot;Scan&quot;, &quot;Print&quot;, &quot;Prt&quot;, &quot;Deoccupy&quot;,&quot;Ykj&quot;,&quot;Aqd&quot;,&quot;ZP&quot;]</code></td>
<td><code v-pre>string |string[]</code></td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>DeviceManager Events</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>事件</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
<th style="text-align:center">返回值参数</th>
<th style="text-align:center">返回值类型</th>
<th style="text-align:center">返回值说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>getDeviceList</td>
<td style="text-align:center">获取外设列表</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devicelist</code></td>
<td style="text-align:center">res.data</td>
<td style="text-align:center">object</td>
<td style="text-align:center">例:<code v-pre>{外设名称BackClip:[{Name:&quot;BackClip&quot;,CN:&quot;移动背夹&quot;,Kind:[{Factory:&quot;ZJYL&quot;,CN:&quot;中金银利&quot;,LoadPath:&quot;dll/BJYL/BackClip/YL_BackClip.dll&quot;}]}</code>]}</td>
</tr>
<tr>
<td>getAllDevConfig</td>
<td style="text-align:center">获取全部设备配置</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devallconfig</code></td>
<td style="text-align:center">res.data</td>
<td style="text-align:center">object</td>
<td style="text-align:center">例:<code v-pre>{外设名称BackClip:{Factory:&quot;&quot;,Port:&quot;&quot;,ExtPort:&quot;&quot;}}</code></td>
</tr>
<tr>
<td>saveAllDevConfig</td>
<td style="text-align:center">保存全部设备配置</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devallconfig</code></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>getDevConfig</td>
<td style="text-align:center">获取指定设备配置</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devconfig</code>,params:指定的设备</td>
<td style="text-align:center">例:<code v-pre>设备名称BackClip: &quot;{&quot;Factory&quot;:&quot;&quot;,&quot;Port&quot;:&quot;&quot;,&quot;ExtPort&quot;:&quot;&quot;}&quot;</code></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>saveDevConfig</td>
<td style="text-align:center">保存指定设备配置</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devconfig</code>,params:指定的设备配置</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>getAllHardWare</td>
<td style="text-align:center">获取系统硬件端口</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/hardware</code></td>
<td style="text-align:center">res.data</td>
<td style="text-align:center">object</td>
<td style="text-align:center">例:<code v-pre>端口类型:{USB,HTTP://127.0.0.1:30102,FILE}</code></td>
</tr>
<tr>
<td>shutDown</td>
<td style="text-align:center">关闭外设服务</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/shutdown</code></td>
<td style="text-align:center">res.date</td>
<td style="text-align:center">string</td>
<td style="text-align:center">例:&quot;ok&quot;</td>
</tr>
<tr>
<td>deoccupy</td>
<td style="text-align:center">解除设备占用</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/deoccupy</code>,params:不传解除所有外设,传值-&gt;解除指定外设</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>getAllDevStatus</td>
<td style="text-align:center">获取设备状态</td>
<td style="text-align:center">url:<code v-pre>http://ip:port/config/devstatus</code></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>getDevice</td>
<td style="text-align:center">调用外设</td>
<td style="text-align:center">devType:设备类型;printArg:调用打印外设所需参数,icParam:调用刷卡器所需参数</td>
<td style="text-align:center">res.data</td>
<td style="text-align:center">object</td>
<td style="text-align:center"></td>
</tr>
<tr>
<td>pushDeviceTypes</td>
<td style="text-align:center">新增外设类型</td>
<td style="text-align:center">res.data</td>
<td style="text-align:center">object</td>
<td style="text-align:center"></td>
<td style="text-align:center"></td>
</tr>
</tbody>
</table>
<p>getDevice 参数说明</p>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
<th>默认</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td>调用外设的 URL <strong>http://ip:port/req</strong>/</td>
<td>null</td>
</tr>
<tr>
<td>devType</td>
<td>外设列表中name字段的值，(特殊全屏打印为printTradePage)</td>
<td>-</td>
</tr>
<tr>
<td>printArg</td>
<td>xml字符串，打印数据</td>
<td>-</td>
</tr>
<tr>
<td>devParams</td>
<td>ads 外设调用的配置(具体的查看ads的外设配置)</td>
<td><code v-pre>{Id: &quot;&quot;, Method: &quot;Test&quot;, Args: &quot;{}&quot;, ReadTimeout: 20, WriteTimeout: 20, Key: &quot;&quot;, IsOccupy: &quot;0&quot;, ListenPort: &quot;&quot;}</code></td>
</tr>
</tbody>
</table>
</div></template>


