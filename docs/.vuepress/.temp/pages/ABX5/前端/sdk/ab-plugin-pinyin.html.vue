<template><div><h1 id="ab-plugin-pinyin-拼音相关内容" tabindex="-1"><a class="header-anchor" href="#ab-plugin-pinyin-拼音相关内容"><span>ab-plugin-pinyin @拼音相关内容</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Pinyin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-pinyin'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-stringtopinyin-汉字到字母转换" tabindex="-1"><a class="header-anchor" href="#_2-1-stringtopinyin-汉字到字母转换"><span>2.1 stringToPinYin --汉字到字母转换</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font><font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> input <span class="token operator">=</span> <span class="token string">"赞同科技"</span><span class="token punctuation">;</span>  </span>
<span class="line"><span class="token keyword">let</span> type <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> separator <span class="token operator">=</span> <span class="token string">"-"</span><span class="token punctuation">;</span> </span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Pinyin<span class="token punctuation">.</span><span class="token function">stringToPinYin</span><span class="token punctuation">(</span>input<span class="token punctuation">,</span> type<span class="token punctuation">,</span> separator<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>input</td>
<td>string</td>
<td>√</td>
<td>汉字内容</td>
</tr>
<tr>
<td>type</td>
<td>number</td>
<td>√</td>
<td>0--小写全拼 1--小写首字母 2--首字母大写 3--全拼字母大写</td>
</tr>
<tr>
<td>separator</td>
<td>string</td>
<td>√</td>
<td>分隔符</td>
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
<td>转换的结果</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='green' style="font-weight:bold">对应移动原SDK: AgreeSDK.moneynameconvert.name2Pinyin()</font></blockquote>
<hr>
</div></template>


