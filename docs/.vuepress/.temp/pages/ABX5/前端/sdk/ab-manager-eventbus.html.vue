<template><div><h1 id="ab-manager-eventbus-事件总线" tabindex="-1"><a class="header-anchor" href="#ab-manager-eventbus-事件总线"><span>ab-manager-eventbus@事件总线</span></a></h1>
<p>事件总线插件，用于发布、订阅、取消事件。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> EventBus <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-eventbus"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-触发事件-发布" tabindex="-1"><a class="header-anchor" href="#_2-触发事件-发布"><span>2. 触发事件（发布）</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span><span class="token punctuation">{</span> <span class="token literal-property property">param</span><span class="token operator">:</span> <span class="token string">"test-param"</span> <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-绑定事件-订阅" tabindex="-1"><a class="header-anchor" href="#_3-绑定事件-订阅"><span>3. 绑定事件（订阅）</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-删除事件" tabindex="-1"><a class="header-anchor" href="#_4-删除事件"><span>4. 删除事件</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">EventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span><span class="token string">"test"</span><span class="token punctuation">,</span>fn<span class="token punctuation">)</span> </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_5-参数" tabindex="-1"><a class="header-anchor" href="#_5-参数"><span>5. 参数</span></a></h2>
<table>
<thead>
<tr>
<th>参数</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>$emit</td>
<td>触发事件（发布）</td>
</tr>
<tr>
<td>$on</td>
<td>绑定事件（订阅）</td>
</tr>
<tr>
<td>$off</td>
<td>删除事件,fn可选，不传则删除全部该事件，传入fn则删除该事件下指定fn</td>
</tr>
</tbody>
</table>
</div></template>


