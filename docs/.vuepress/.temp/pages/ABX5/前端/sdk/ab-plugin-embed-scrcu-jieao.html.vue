<template><div><h1 id="ab-plugin-embed-scrcu-jieao-前端内嵌捷奥影像控件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-scrcu-jieao-前端内嵌捷奥影像控件"><span>ab-plugin-embed-scrcu-jieao@前端内嵌捷奥影像控件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> JieaoExe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed-scrcu-jieao"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-init-发送内嵌请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-init-发送内嵌请求初始化"><span>2.1 init --发送内嵌请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> initJson <span class="token operator">=</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">id</span><span class="token operator">:</span><span class="token string">"JieaoExe"</span><span class="token punctuation">,</span>  <span class="token comment">//对应组件id</span></span>
<span class="line">    <span class="token literal-property property">displayMode</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">poolName</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">treeId</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">bizId</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">path</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">width</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tellerNum</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">branchNum</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">tellerName</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">branchName</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>initJson<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>initJson</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>杰奥初始化参数</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>杰奥窗体的句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.init(initJson)</font></blockquote>
<hr>
<h3 id="_2-2-show-发送内嵌请求初始化显示界面-在init之后立刻执行" tabindex="-1"><a class="header-anchor" href="#_2-2-show-发送内嵌请求初始化显示界面-在init之后立刻执行"><span>2.2 show --发送内嵌请求初始化显示界面，在init之后立刻执行</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"JieaoExe"</span><span class="token punctuation">;</span>  <span class="token comment">//对应组件id</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>&quot;showFinish&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.show(id)</font></blockquote>
<hr>
<h3 id="_2-3-commit-提交" tabindex="-1"><a class="header-anchor" href="#_2-3-commit-提交"><span>2.3 commit --提交</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> param <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> bizid <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">commit</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> param<span class="token punctuation">,</span> bizid<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>id</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
</tr>
<tr>
<td>param</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>bizid</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.commit(id, param, bizid)</font></blockquote>
<hr>
<h3 id="_2-4-showimage-影像调阅" tabindex="-1"><a class="header-anchor" href="#_2-4-showimage-影像调阅"><span>2.4 showImage --影像调阅</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"JieaoExe"</span><span class="token punctuation">;</span>  <span class="token comment">//对应组件id</span></span>
<span class="line"><span class="token keyword">let</span> paramJson <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">showImage</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>paramJson<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
</tr>
<tr>
<td>paramJson</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.showImage(id,paramJson)</font></blockquote>
<hr>
<h3 id="_2-5-finish-执行销毁捷奥影像exe-关闭窗体" tabindex="-1"><a class="header-anchor" href="#_2-5-finish-执行销毁捷奥影像exe-关闭窗体"><span>2.5 finish --执行销毁捷奥影像exe，关闭窗体</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"JieaoExe"</span><span class="token punctuation">;</span>  <span class="token comment">//对应组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.finish(id)</font></blockquote>
<hr>
<h3 id="_2-6-base64encode-对字符串以base64编码" tabindex="-1"><a class="header-anchor" href="#_2-6-base64encode-对字符串以base64编码"><span>2.6 base64encode --对字符串以Base64编码</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>  <span class="token comment">//字符串</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">base64encode</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>src</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>字符串</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.base64encode(src)</font></blockquote>
<hr>
<h3 id="_2-7-base64decode-解码base64字符串" tabindex="-1"><a class="header-anchor" href="#_2-7-base64decode-解码base64字符串"><span>2.7 base64decode --解码Base64字符串</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> src <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span>  <span class="token comment">//字符串</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">base64decode</span><span class="token punctuation">(</span>src<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>src</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>字符串</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.base64decode(src)</font></blockquote>
<hr>
<h3 id="_2-8-bizcopy-批次拷贝" tabindex="-1"><a class="header-anchor" href="#_2-8-bizcopy-批次拷贝"><span>2.8 bizCopy --批次拷贝</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"JieaoExe"</span><span class="token punctuation">;</span>  <span class="token comment">////对应组件id</span></span>
<span class="line"><span class="token keyword">let</span> srcbizid <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> srccode <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> destbizid <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> destcode <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">bizCopy</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> srcbizid<span class="token punctuation">,</span> srccode<span class="token punctuation">,</span> destbizid<span class="token punctuation">,</span> destcode<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
</tr>
<tr>
<td>srcbizid</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>srccode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>destbizid</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>destcode</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.bizCopy(id, srcbizid, srccode, destbizid, destcode)</font></blockquote>
<hr>
<h3 id="_2-9-extrafile-添加图片" tabindex="-1"><a class="header-anchor" href="#_2-9-extrafile-添加图片"><span>2.9 extrafile --添加图片</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id <span class="token operator">=</span> <span class="token string">"JieaoExe"</span><span class="token punctuation">;</span>  <span class="token comment">////对应组件id</span></span>
<span class="line"><span class="token keyword">let</span> bizid <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> code <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> Type <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">""</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> JieaoExe<span class="token punctuation">.</span><span class="token function">extrafile</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> bizid<span class="token punctuation">,</span> code<span class="token punctuation">,</span> Type<span class="token punctuation">,</span> data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
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
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>对应组件id</td>
</tr>
<tr>
<td>bizid</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>code</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>Type</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>杰奥参数</td>
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
<td>&quot;success&quot;</td>
</tr>
<tr>
<td>res.msg</td>
<td>string</td>
<td>返回信息</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: Jieao_Exe.extrafile(id, bizid, code, Type, data)</font></blockquote>
<hr>
</div></template>


