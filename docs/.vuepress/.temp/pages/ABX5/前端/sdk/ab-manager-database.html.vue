<template><div><h1 id="ab-manager-database-结构化数据存取" tabindex="-1"><a class="header-anchor" href="#ab-manager-database-结构化数据存取"><span>ab-manager-database@结构化数据存取</span></a></h1>
<p>用于客户端存储大量结构化数据(包括，文件 / blobs)</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> IndexedDBManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-database'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-初始化" tabindex="-1"><a class="header-anchor" href="#_2-初始化"><span>2. 初始化</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> db <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexedDBManager</span><span class="token punctuation">(</span><span class="token string">'test'</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><blockquote>
<p><code v-pre>options</code>：初始化数据库时对数据表和索引的配置（可选）</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">// 作为对象传入</span>
<span class="line">{</span>
<span class="line">  name: 'store',               // 表名（必填）</span>
<span class="line">  keyPath: 'id',               // 主键（可选，默认主键自增）</span>
<span class="line">  indexes: [                   // 索引（可选）</span>
<span class="line">    {</span>
<span class="line">      name: 'nameIndex',       // 索引名（必填）</span>
<span class="line">      key: 'name',             // 表中对应属性名（必填）</span>
<span class="line">      unique: false            // 是否唯一（可选，默认false）</span>
<span class="line">    },</span>
<span class="line">    {</span>
<span class="line">      name: 'age',</span>
<span class="line">      key: 'age',</span>
<span class="line">      unique: true</span>
<span class="line">    }</span>
<span class="line">  ]</span>
<span class="line">}</span>
<span class="line"></span>
<span class="line">// 作为数组传入</span>
<span class="line">[</span>
<span class="line">  {</span>
<span class="line">    name: 'store1',</span>
<span class="line">    indexes: [</span>
<span class="line">      {</span>
<span class="line">        name: 'name',</span>
<span class="line">        key: 'name',</span>
<span class="line">        unique: false </span>
<span class="line">      },</span>
<span class="line">      {</span>
<span class="line">        name: 'age',</span>
<span class="line">        key: 'age',</span>
<span class="line">        unique: true</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  },</span>
<span class="line">  {</span>
<span class="line">    name: 'store2',</span>
<span class="line">    keyPath: 'id',</span>
<span class="line">    indexes: [</span>
<span class="line">      {</span>
<span class="line">        name: 'name',</span>
<span class="line">        key: 'name',</span>
<span class="line">        unique: false</span>
<span class="line">      }</span>
<span class="line">    ]</span>
<span class="line">  }</span>
<span class="line">]</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-新建数据表" tabindex="-1"><a class="header-anchor" href="#_3-新建数据表"><span>3. 新建数据表</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">addStore</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">主键(不传该参数时，默认生成自增主键)</td>
<td style="text-align:left">否</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_4-删除数据表" tabindex="-1"><a class="header-anchor" href="#_4-删除数据表"><span>4. 删除数据表</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">deleteStore</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:center">说明</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">store</td>
<td style="text-align:center">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_5-清空数据表" tabindex="-1"><a class="header-anchor" href="#_5-清空数据表"><span>5. 清空数据表</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">clearStore</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_6-新建索引" tabindex="-1"><a class="header-anchor" href="#_6-新建索引"><span>6. 新建索引</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> index <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>       <span class="token comment">// 索引名（必填）</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span>        <span class="token comment">// 表中对应属性名（必填）</span></span>
<span class="line">    <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">false</span>       <span class="token comment">// 是否唯一（可选，默认false）</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">key</span><span class="token operator">:</span> <span class="token string">'age'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">unique</span><span class="token operator">:</span> <span class="token boolean">true</span> </span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">addIndex</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">index</td>
<td style="text-align:left">索引配置项</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Array / Object</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_7-删除索引" tabindex="-1"><a class="header-anchor" href="#_7-删除索引"><span>7. 删除索引</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">deleteIndex</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token string">'name'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">index</td>
<td style="text-align:left">索引名</td>
<td style="text-align:left">否</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_8-新增-修改数据" tabindex="-1"><a class="header-anchor" href="#_8-新增-修改数据"><span>8. 新增/修改数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'zz'</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">22</span><span class="token punctuation">,</span> </span>
<span class="line">  <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'2418184580@qq.com'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> data<span class="token punctuation">,</span> <span class="token string">'id'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/** user表    Key(Key path: "id")</span>
<span class="line"><span class="token punctuation">{</span>id: 1001, name: 'aa', age: 25, email: 'aa@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>id: 1002, name: 'bb', age: 22, email: 'bb@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>id: 1003, name: 'cc', age: 26, email: 'cc@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>id: 1004, name: 'dd', age: 21, email: 'dd@example.com'<span class="token punctuation">}</span></span>
<span class="line">**/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 向表中添加一条数据</span></span>
<span class="line"><span class="token keyword">const</span> data1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1005</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ee'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'ee@example.com'</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 将id为1001的数据中email的值修改为'1001@example.com'</span></span>
<span class="line"><span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token number">1001</span><span class="token punctuation">,</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'1001@example.com'</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> data2<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token doc-comment comment">/** user表    Key(autoIncrement: true)</span>
<span class="line"><span class="token punctuation">{</span>name: 'aa', age: 25, email: 'aa@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>name: 'bb', age: 22, email: 'bb@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>name: 'cc', age: 26, email: 'cc@example.com'<span class="token punctuation">}</span>，</span>
<span class="line"><span class="token punctuation">{</span>name: 'dd', age: 21, email: 'dd@example.com'<span class="token punctuation">}</span></span>
<span class="line">**/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 向表中添加一条数据，主键自增1</span></span>
<span class="line"><span class="token keyword">const</span> data1 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ee'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">23</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'ee@example.com'</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> data1<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 将Key为1的数据中email的值修改为'1001@example.com'</span></span>
<span class="line"><span class="token keyword">const</span> data2 <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">25</span><span class="token punctuation">,</span> <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token string">'1001@example.com'</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">set</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> data2<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">data</td>
<td style="text-align:left">数据对象</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Object</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">主键的值（不传该参数时，数据对象中必须包含key）</td>
<td style="text-align:left">否</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_9-根据主键获取数据" tabindex="-1"><a class="header-anchor" href="#_9-根据主键获取数据"><span>9. 根据主键获取数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 主键为id，获取id=1001的数据</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">主键的值</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_10-根据主键移除数据" tabindex="-1"><a class="header-anchor" href="#_10-根据主键移除数据"><span>10. 根据主键移除数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token number">1001</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    <span class="token comment">// 主键为id，移除id=1001的数据</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">key</td>
<td style="text-align:left">主键的值</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Any</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<h2 id="_11-获取游标范围内数据" tabindex="-1"><a class="header-anchor" href="#_11-获取游标范围内数据"><span>11. 获取游标范围内数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 检索"aa"和"bb"之间的数据（包括"aa"和"dd"），结果按Key值升序排列</span></span>
<span class="line"><span class="token keyword">let</span> data1 <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">'dd'</span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token string">'next'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检索"aa"之后的所有数据（包括"aa"），并过滤掉重复数据，结果按Key值降序排列</span></span>
<span class="line"><span class="token keyword">let</span> data2 <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">'aa'</span><span class="token punctuation">,</span> <span class="token literal-property property">direction</span><span class="token operator">:</span> <span class="token string">'prevunique'</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检索"dd"之前的所有数据（包括"aa"），结果按Key值升序排列</span></span>
<span class="line"><span class="token keyword">let</span> data3 <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">'dd'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 检索Key值为"cc"的数据</span></span>
<span class="line"><span class="token keyword">let</span> data3 <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span> <span class="token literal-property property">index</span><span class="token operator">:</span> <span class="token string">'name'</span><span class="token punctuation">,</span> <span class="token literal-property property">start</span><span class="token operator">:</span> <span class="token string">'cc'</span><span class="token punctuation">,</span> <span class="token literal-property property">end</span><span class="token operator">:</span> <span class="token string">'cc'</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">opt</td>
<td style="text-align:left">检索条件配置项</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Object</td>
<td style="text-align:left"><code v-pre>{ index: undefined, start: undefined, end: undefined, direction: 'next' }</code></td>
</tr>
</tbody>
</table>
<p><code v-pre>opt</code>属性：</p>
<table>
<thead>
<tr>
<th style="text-align:left">属性名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">必填</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
<th style="text-align:left">可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">index</td>
<td style="text-align:left">索引名（不设置该属性时 ，在数据表中检索；设置该属性时，在对应索引表中检索）</td>
<td style="text-align:left">否</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code v-pre>undefined</code></td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">start</td>
<td style="text-align:left">游标开始位置</td>
<td style="text-align:left">否</td>
<td style="text-align:left">Any</td>
<td style="text-align:left"><code v-pre>undefined</code></td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">end</td>
<td style="text-align:left">游标结束位置</td>
<td style="text-align:left">否</td>
<td style="text-align:left">Any</td>
<td style="text-align:left"><code v-pre>undefined</code></td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">direction</td>
<td style="text-align:left">游标移动方向</td>
<td style="text-align:left">否</td>
<td style="text-align:left">String</td>
<td style="text-align:left"><code v-pre>'next'</code></td>
<td style="text-align:left"><code v-pre>next</code>：游标中的数据按Key值升序排列，Key值相等的数据都被读取<br><code v-pre>nextunique</code>：游标中的数据按Key值升序排列，Key值相等只读取第一条数据<br><code v-pre>prev</code>：游标中的数据按Key值降序排列，Key值相等的数据都被读取<br><code v-pre>prevunique</code>：游标中的数据按Key值降序排列，Key值相等只读取第一条数据</td>
</tr>
</tbody>
</table>
<blockquote>
<p><em>注：只有在索引表中检索，并且索引的<code v-pre>unique</code>为<code v-pre>false</code>时，才可能出现<code v-pre>Key</code>值相等的数据</em></p>
</blockquote>
<h2 id="_12-导出数据库中的数据" tabindex="-1"><a class="header-anchor" href="#_12-导出数据库中的数据"><span>12. 导出数据库中的数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">exportData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/** data中的数据结构</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  dbName: "test",              // 数据库名</span>
<span class="line">  stores: [<span class="token punctuation">{</span>                   // 数据表项</span>
<span class="line">    name: "store1",            // 表名</span>
<span class="line">    keyPath: "id",             // 主键</span>
<span class="line">    indexes: [<span class="token punctuation">{</span>name: "age",key: "age",unique: false<span class="token punctuation">}</span>],                // 索引项</span>
<span class="line">    data: [<span class="token punctuation">{</span>name:"zz","age":22,"email":"1@qq.com","remark":"qwq"<span class="token punctuation">}</span>]    // 数据项</span>
<span class="line">  <span class="token punctuation">}</span>]</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">**/</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_13-向数据库导入数据" tabindex="-1"><a class="header-anchor" href="#_13-向数据库导入数据"><span>13. 向数据库导入数据</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// const data = await db.exportData();</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">const</span> db1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IndexedDBManager</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>dbName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">db1<span class="token punctuation">.</span><span class="token function">importData</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_14-自定义多条件精准筛选" tabindex="-1"><a class="header-anchor" href="#_14-自定义多条件精准筛选"><span>14. 自定义多条件精准筛选</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> db<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span><span class="token string">'user'</span><span class="token punctuation">,</span><span class="token string">'custom_index1'</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token string">'id'</span><span class="token punctuation">,</span><span class="token string">'age'</span><span class="token punctuation">]</span><span class="token punctuation">,</span><span class="token punctuation">[</span><span class="token number">1005</span><span class="token punctuation">,</span><span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">)</span>    <span class="token comment">// 筛选多条件总索引为'custom_index1'，筛选条件id=1005 &amp;&amp; age=23的数据，如筛选索引更改时则需delete database 重新筛选；</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
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
<td style="text-align:left">store</td>
<td style="text-align:left">表名</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">filter_index</td>
<td style="text-align:left">自定义筛选条件总索引名称</td>
<td style="text-align:left">是</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">opt_key</td>
<td style="text-align:left">自定义筛选条件索引数组</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Array</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">opt_value</td>
<td style="text-align:left">自定义筛选条件值数组</td>
<td style="text-align:left">是</td>
<td style="text-align:left">Array</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<p><strong>IndexedDBManager Attributes</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">参数</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">类型</th>
<th style="text-align:left">默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">dbName</td>
<td style="text-align:left">数据库名称</td>
<td style="text-align:left">String</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">options</td>
<td style="text-align:left">初始化配置项</td>
<td style="text-align:left">Array / Object</td>
<td style="text-align:left">-</td>
</tr>
</tbody>
</table>
<p><strong>IndexedDBManager Methods</strong></p>
<table>
<thead>
<tr>
<th style="text-align:left">方法名</th>
<th style="text-align:left">说明</th>
<th style="text-align:left">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left">addStore</td>
<td style="text-align:left">新建数据表</td>
<td style="text-align:left">store：表名<br>key：主键</td>
</tr>
<tr>
<td style="text-align:left">deleteStore</td>
<td style="text-align:left">删除数据表</td>
<td style="text-align:left">store：表名</td>
</tr>
<tr>
<td style="text-align:left">clearStore</td>
<td style="text-align:left">清空数据表</td>
<td style="text-align:left">store：表名</td>
</tr>
<tr>
<td style="text-align:left">addIndex</td>
<td style="text-align:left">新建索引</td>
<td style="text-align:left">store：表名<br>index：索引配置项</td>
</tr>
<tr>
<td style="text-align:left">deleteIndex</td>
<td style="text-align:left">删除索引</td>
<td style="text-align:left">store：表名<br>index：索引名</td>
</tr>
<tr>
<td style="text-align:left">get</td>
<td style="text-align:left">根据主键获取数据</td>
<td style="text-align:left">store：表名<br>key：主键的值</td>
</tr>
<tr>
<td style="text-align:left">set</td>
<td style="text-align:left">新增/修改数据</td>
<td style="text-align:left">store：表名<br>data：数据对象<br>key：主键的值</td>
</tr>
<tr>
<td style="text-align:left">remove</td>
<td style="text-align:left">根据主键移除数据</td>
<td style="text-align:left">store：表名<br>key：主键的值</td>
</tr>
<tr>
<td style="text-align:left">query</td>
<td style="text-align:left">获取游标范围内数据</td>
<td style="text-align:left">store：表名<br>opt：检索条件配置项</td>
</tr>
<tr>
<td style="text-align:left">close</td>
<td style="text-align:left">关闭数据库</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">delete</td>
<td style="text-align:left">删除数据库</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">exportData</td>
<td style="text-align:left">导出数据库</td>
<td style="text-align:left">-</td>
</tr>
<tr>
<td style="text-align:left">importData</td>
<td style="text-align:left">导入数据库</td>
<td style="text-align:left">data：备份的数据库</td>
</tr>
<tr>
<td style="text-align:left">filter</td>
<td style="text-align:left">自定义多条件精准筛选</td>
<td style="text-align:left">store：表名<br>filter_index：自定义筛选条件总索引名称<br>opt_key：自定义筛选条件索引数组<br> opt_value：自定义筛选条件值数组</td>
</tr>
</tbody>
</table>
</div></template>


