<template><div><h1 id="ab-manager-storage-全局缓存数据" tabindex="-1"><a class="header-anchor" href="#ab-manager-storage-全局缓存数据"><span>ab-manager-storage@全局缓存数据</span></a></h1>
<p>调用外设</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// main.js</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StorageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-storage"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> StorageNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">,</span> <span class="token string">'tellerNum'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> storageManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">all</span><span class="token operator">:</span> StorageNames</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">storageManager<span class="token punctuation">.</span><span class="token function">setStore</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>例：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 设置数据（设置前需要先将变量设为可修改）</span></span>
<span class="line">storageManager<span class="token punctuation">.</span><span class="token function">setStore</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">,</span> <span class="token string">"daiqiang"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 获取数据</span></span>
<span class="line"><span class="token keyword">let</span> username <span class="token operator">=</span> storageManager<span class="token punctuation">.</span><span class="token function">getStore</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 移除数据</span></span>
<span class="line">storageManager<span class="token punctuation">.</span><span class="token function">removeStore</span><span class="token punctuation">(</span><span class="token string">"name"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 移除全部数据</span></span>
<span class="line">storageManager<span class="token punctuation">.</span><span class="token function">removeStore</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-设置可修改数据" tabindex="-1"><a class="header-anchor" href="#_3-设置可修改数据"><span>3. 设置可修改数据</span></a></h2>
<p>默认全局的数据不可修改，如需修改则需要将'要修改的变量名'设置为可修改。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">storageManager<span class="token punctuation">.</span><span class="token function">setAble</span><span class="token punctuation">(</span>ableArray<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 例</span></span>
<span class="line">storageManager<span class="token punctuation">.</span><span class="token function">setAble</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">'tellerNum'</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以在初始化的时候设置可修改变量，如：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> StorageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ab-manager-storage"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> StorageNames <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token string">'age'</span><span class="token punctuation">,</span> <span class="token string">'height'</span><span class="token punctuation">,</span> <span class="token string">'tellerNum'</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> storageManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">StorageManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">all</span><span class="token operator">:</span> StorageNames<span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">able</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'tellerNum'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>ableArray</td>
<td>array</td>
<td>可修改的数据列表</td>
<td>-</td>
</tr>
</tbody>
</table>
<p><strong>StorageManager Events</strong></p>
<table>
<thead>
<tr>
<th style="text-align:center">事件</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">setStore</td>
<td style="text-align:center">存储数据</td>
<td style="text-align:center">key:保存的变量名;value:需要保存的数据</td>
</tr>
<tr>
<td style="text-align:center">getStore</td>
<td style="text-align:center">获取已经存储的数据</td>
<td style="text-align:center">key:保存的变量名</td>
</tr>
<tr>
<td style="text-align:center">removeStore</td>
<td style="text-align:center">清空存储的数据</td>
<td style="text-align:center">key:保存的变量名;不传参数则清空所有已保存的数据</td>
</tr>
</tbody>
</table>
</div></template>


