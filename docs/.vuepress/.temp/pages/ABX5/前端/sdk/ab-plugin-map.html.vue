<template><div><h1 id="ab-plugin-media-多媒体组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-media-多媒体组件"><span>ab-plugin-media 多媒体组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MapManage <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-map'</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-getcurrentposition-获取当前定位信息" tabindex="-1"><a class="header-anchor" href="#_2-1-getcurrentposition-获取当前定位信息"><span>2.1 getCurrentPosition -- 获取当前定位信息</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"> <span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> MapManage<span class="token punctuation">.</span><span class="token function">getCurrentPosition</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
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
<tbody>
<tr>
<td>provider</td>
<td>string</td>
<td>×</td>
<td></td>
<td>定位选择：原生，高德，百度；为空时则为当前集成的定位</td>
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
<td>当前位置信息</td>
</tr>
</tbody>
</table>
</div></template>


