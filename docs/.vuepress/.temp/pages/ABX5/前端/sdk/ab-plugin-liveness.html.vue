<template><div><h1 id="ab-plugin-liveness-活体检测插件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-liveness-活体检测插件"><span>ab-plugin-liveness 活体检测插件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Liveness <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-liveness'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-init-开启活体检测-检测完毕后可自动关闭" tabindex="-1"><a class="header-anchor" href="#_2-1-init-开启活体检测-检测完毕后可自动关闭"><span>2.1 init -- 开启活体检测.检测完毕后可自动关闭</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">isFullScreen</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">pointX</span><span class="token operator">:</span> <span class="token number">200</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">pointY</span><span class="token operator">:</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">frameWidth</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">frameHeight</span><span class="token operator">:</span> <span class="token number">300</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">volume</span><span class="token operator">:</span> <span class="token number">0.5</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Liveness<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>isFullScreen<span class="token punctuation">,</span>pointX<span class="token punctuation">,</span>pointY<span class="token punctuation">,</span>frameWidth<span class="token punctuation">,</span>frameHeight<span class="token punctuation">,</span>volume<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>isFullScreen</td>
<td>boolean</td>
<td>√</td>
<td>是否全屏</td>
</tr>
<tr>
<td>pointX</td>
<td>number</td>
<td>√</td>
<td>非全屏时,左上角坐标点</td>
</tr>
<tr>
<td>pointY</td>
<td>number</td>
<td>√</td>
<td>非全屏时,左上角坐标点</td>
</tr>
<tr>
<td>frameWidth</td>
<td>number</td>
<td>√</td>
<td>非全屏时的长宽</td>
</tr>
<tr>
<td>frameHeight</td>
<td>number</td>
<td>√</td>
<td>非全屏时的长宽</td>
</tr>
<tr>
<td>volume</td>
<td>number</td>
<td>√</td>
<td>语音音量 0~1</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>LivenessResult</code></li>
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
<td>res.path</td>
<td>string</td>
<td>活体识别的最佳图片路径</td>
</tr>
<tr>
<td>res.verificationDataPath</td>
<td>string</td>
<td>验证数据的文件路径</td>
</tr>
<tr>
<td>res.state</td>
<td>string</td>
<td>结果, 成功为success</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.olive.init()</font></blockquote>
<hr>
<h3 id="_2-2-remove-关闭活体检测" tabindex="-1"><a class="header-anchor" href="#_2-2-remove-关闭活体检测"><span>2.2 remove -- 关闭活体检测</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Liveness<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span>ret<span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 返回true</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>返回值: <code v-pre>boolean</code></li>
</ul>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.olive.remove()</font></blockquote>
<hr>
</div></template>


