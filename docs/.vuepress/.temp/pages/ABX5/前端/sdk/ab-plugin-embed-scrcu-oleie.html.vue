<template><div><h1 id="ab-plugin-embed-scrcu-oleie-前端内嵌捷oleie" tabindex="-1"><a class="header-anchor" href="#ab-plugin-embed-scrcu-oleie-前端内嵌捷oleie"><span>ab-plugin-embed-scrcu-oleie@前端内嵌捷oleie</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ScrcuOleIe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-embed-scrcu-oleie"</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-init-发送内嵌请求初始化" tabindex="-1"><a class="header-anchor" href="#_2-1-init-发送内嵌请求初始化"><span>2.1 init --发送内嵌请求初始化</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//当前内嵌组件id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
<td>OieIE窗体的句柄值</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.init(id)</font></blockquote>
<hr>
<h3 id="_2-2-seturl-设置ie浏览器地址" tabindex="-1"><a class="header-anchor" href="#_2-2-seturl-设置ie浏览器地址"><span>2.2 setUrl --设置ie浏览器地址</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> url<span class="token operator">=</span><span class="token string">'http://www.baidu.com/'</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">setUrl</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>要设置的url</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.setUrl(id,url)</font></blockquote>
<hr>
<h3 id="_2-3-execute-执行浏览器脚本" tabindex="-1"><a class="header-anchor" href="#_2-3-execute-执行浏览器脚本"><span>2.3 execute --执行浏览器脚本</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> script <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">document.getElementById('username').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>username</span>
<span class="line">            <span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';document.getElementById('userTypePwd').value='</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>password<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">';</span><span class="token template-punctuation string">`</span></span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">execute</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>script<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>script</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>脚本字符串命令</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.execute(id,script)</font></blockquote>
<hr>
<h3 id="_2-4-finish-执行销毁浏览器-注意-不允许在vue-beforedestroy中使用" tabindex="-1"><a class="header-anchor" href="#_2-4-finish-执行销毁浏览器-注意-不允许在vue-beforedestroy中使用"><span>2.4 finish --执行销毁浏览器 注意：不允许在vue beforeDestroy中使用</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">finish</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.finish(id)</font></blockquote>
<hr>
<h3 id="_2-5-delayfinish-延时执行销毁浏览器-注意-不允许在vue-beforedestroy中使用" tabindex="-1"><a class="header-anchor" href="#_2-5-delayfinish-延时执行销毁浏览器-注意-不允许在vue-beforedestroy中使用"><span>2.5 delayFinish -- 延时执行销毁浏览器 注意：不允许在vue beforeDestroy中使用</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> delayTime<span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span><span class="token comment">//延时时间(毫秒)</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">delayFinish</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>delayTime<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>delayTime</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>延时时间(毫秒)</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.delayFinish(id,delayTime)</font></blockquote>
<hr>
<h3 id="_2-6-setvalue-为浏览器中某个dom对象设置值" tabindex="-1"><a class="header-anchor" href="#_2-6-setvalue-为浏览器中某个dom对象设置值"><span>2.6 setValue --为浏览器中某个dom对象设置值</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> componentId <span class="token operator">=</span> <span class="token string">'input_name'</span><span class="token punctuation">;</span><span class="token comment">//浏览器内操作dom元素的id</span></span>
<span class="line"><span class="token keyword">let</span> value <span class="token operator">=</span> <span class="token string">'huangguan'</span><span class="token punctuation">;</span><span class="token comment">//浏览器内操作dom元素的value值</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">setValue</span><span class="token punctuation">(</span>componentId<span class="token punctuation">,</span>id<span class="token punctuation">,</span>value<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>componentId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作dom元素的id</td>
</tr>
<tr>
<td>id</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>value</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作dom元素的value值</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.setValue(componentId,id,value)</font></blockquote>
<hr>
<h3 id="_2-7-submit-浏览器中提交表单" tabindex="-1"><a class="header-anchor" href="#_2-7-submit-浏览器中提交表单"><span>2.7 submit --浏览器中提交表单</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> formName<span class="token operator">=</span><span class="token string">"login"</span><span class="token punctuation">;</span><span class="token comment">//浏览器内操作表单的dom元素名称</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formName<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>formName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素名称</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.submit(id,formName)</font></blockquote>
<hr>
<h3 id="_2-8-submitbyid-根据浏览器中提交表单提交按钮dom-id来触发表单提交" tabindex="-1"><a class="header-anchor" href="#_2-8-submitbyid-根据浏览器中提交表单提交按钮dom-id来触发表单提交"><span>2.8 submitById --根据浏览器中提交表单提交按钮dom-id来触发表单提交</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> formId<span class="token operator">=</span><span class="token string">"button_login"</span><span class="token punctuation">;</span><span class="token comment">//浏览器内操作表单的dom元素Id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">submitById</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>formId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>formId</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>浏览器内操作表单的dom元素Id</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.submitById(id,formId)</font></blockquote>
<hr>
<h3 id="_2-9-dologin-触发浏览器登陆操作" tabindex="-1"><a class="header-anchor" href="#_2-9-dologin-触发浏览器登陆操作"><span>2.9 doLogin -- 触发浏览器登陆操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> url<span class="token operator">=</span><span class="token string">"https://mail.agree.com.cn"</span><span class="token punctuation">;</span><span class="token comment">//登录url地址</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">doLogin</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>登录url地址</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.doLogin(id,url)</font></blockquote>
<hr>
<h3 id="_2-10-dologout-触发浏览器登出操作" tabindex="-1"><a class="header-anchor" href="#_2-10-dologout-触发浏览器登出操作"><span>2.10 doLogout --触发浏览器登出操作</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> url<span class="token operator">=</span><span class="token string">"https://mail.agree.com.cn"</span><span class="token punctuation">;</span><span class="token comment">//登录url地址</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">doLogout</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span>url<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>登录url地址</td>
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
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.doLogout(id,url)</font></blockquote>
<hr>
<h3 id="_2-11-gethtml-获取某个指定内嵌浏览器的全部html-返回的为html的base64串" tabindex="-1"><a class="header-anchor" href="#_2-11-gethtml-获取某个指定内嵌浏览器的全部html-返回的为html的base64串"><span>2.11 getHtml --获取某个指定内嵌浏览器的全部html(返回的为html的Base64串)</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> id<span class="token operator">=</span><span class="token string">"oleie"</span><span class="token punctuation">;</span><span class="token comment">//id</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> ScrcuOleIe<span class="token punctuation">.</span><span class="token function">getHtml</span><span class="token punctuation">(</span>id<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
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
<td>当前内嵌组件id</td>
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
<td>res.htmlScript</td>
<td>string</td>
<td>html的Base64字符串</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原SDK: SCRCU_OLE_IE.getHtml(id)</font></blockquote>
<hr>
</div></template>


