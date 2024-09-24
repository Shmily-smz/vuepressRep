<template><div><h1 id="sdk-package-json说明" tabindex="-1"><a class="header-anchor" href="#sdk-package-json说明"><span>SDK package.json说明</span></a></h1>
<h2 id="属性说明" tabindex="-1"><a class="header-anchor" href="#属性说明"><span>属性说明</span></a></h2>
<table>
<thead>
<tr>
<th>字段名</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>name</td>
<td>string</td>
<td>包名</td>
</tr>
<tr>
<td>author</td>
<td>string</td>
<td>作者名</td>
</tr>
<tr>
<td>version</td>
<td>string</td>
<td>版本号</td>
</tr>
<tr>
<td>description</td>
<td>string</td>
<td>包描述</td>
</tr>
<tr>
<td>company</td>
<td>string</td>
<td>版权所属</td>
</tr>
<tr>
<td>copyright</td>
<td>string</td>
<td>版权所属</td>
</tr>
<tr>
<td>main</td>
<td>string</td>
<td>入口文件</td>
</tr>
<tr>
<td>types</td>
<td>string</td>
<td>声明文件</td>
</tr>
<tr>
<td>license</td>
<td>string</td>
<td>开源许可证</td>
</tr>
<tr>
<td>files</td>
<td>Array</td>
<td>指定的发布内容</td>
</tr>
<tr>
<td>keywords</td>
<td>Array</td>
<td>技术关键词</td>
</tr>
<tr>
<td>style</td>
<td>Array</td>
<td>内样式依赖文件</td>
</tr>
<tr>
<td>dependencies</td>
<td>Object</td>
<td>运行时所依赖的工具包</td>
</tr>
<tr>
<td>devDependencies</td>
<td>Object</td>
<td>开发时所依赖的工具包</td>
</tr>
</tbody>
</table>
<h2 id="示例" tabindex="-1"><a class="header-anchor" href="#示例"><span>示例</span></a></h2>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 包名 如: @agree/ab-manager-*</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 作者</span></span>
<span class="line">  <span class="token property">"author"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 版本号</span></span>
<span class="line">  <span class="token property">"version"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 描述</span></span>
<span class="line">  <span class="token property">"description"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 版权所属</span></span>
<span class="line">  <span class="token property">"company"</span><span class="token operator">:</span> <span class="token string">"赞同科技股份有限公司"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"copyright"</span><span class="token operator">:</span> <span class="token string">"Copyright © 赞同科技股份有限公司 2023"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 入口文件</span></span>
<span class="line">  <span class="token property">"main"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 声明文件</span></span>
<span class="line">  <span class="token property">"types"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 开源许可证</span></span>
<span class="line">  <span class="token property">"license"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 指定的发布内容</span></span>
<span class="line">  <span class="token property">"files"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 技术关键词</span></span>
<span class="line">  <span class="token property">"keywords"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 内的样式依赖</span></span>
<span class="line">  <span class="token property">"style"</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 运行时所依赖的工具包</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 开发时所依赖的工具包</span></span>
<span class="line">  <span class="token property">"devDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


