<template><div><h1 id="ab-manager-error-异常处理插件" tabindex="-1"><a class="header-anchor" href="#ab-manager-error-异常处理插件"><span>ab-manager-error@异常处理插件</span></a></h1>
<p>用于上报异常信息到服务器的插件</p>
<h2 id="引入" tabindex="-1"><a class="header-anchor" href="#引入"><span>引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>ErrorManager<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-error"</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ErrorManager<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">isUpLoadError</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">//可选，默认为true,</span></span>
<span class="line">  <span class="token function-variable function">cb</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 上传到服务器的代码</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">isUpLoadError</td>
<td style="text-align:left">是否开启上报异常</td>
<td style="text-align:left">可选</td>
<td style="text-align:left">Boolean</td>
<td style="text-align:left">true</td>
</tr>
<tr>
<td style="text-align:left">cb</td>
<td style="text-align:left">错误发生时的回调函数</td>
<td style="text-align:left">可选</td>
<td style="text-align:left">function</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
</div></template>


