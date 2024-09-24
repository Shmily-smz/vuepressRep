<template><div><h1 id="ab-manager-adaas" tabindex="-1"><a class="header-anchor" href="#ab-manager-adaas"><span>ab-manager-adaas</span></a></h1>
<p>和adaas进行交互,调用外设。</p>
<h2 id="_1-引入并初始化" tabindex="-1"><a class="header-anchor" href="#_1-引入并初始化"><span>1. 引入并初始化</span></a></h2>
<CodeGroup>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> getAdaasManager <span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-adaas'</span></span>
<span class="line"><span class="token comment">// 根据客户端的 Adaas 配置来进行管理</span></span>
<span class="line"><span class="token keyword">let</span> adaasManager <span class="token operator">=</span> getAdaasManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> AdaasManager <span class="token punctuation">}</span>  <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-adaas'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 传入自定义的 Adaas 配置来进行管理</span></span>
<span class="line"><span class="token keyword">let</span> adaasManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">AdaasManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">grant_type</span><span class="token operator">:</span> <span class="token string">'client_credentials'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">'device'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">client_id</span><span class="token operator">:</span> <span class="token string">'client_credentials'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">client_secret</span><span class="token operator">:</span> <span class="token string">'123456'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">deviceURL</span><span class="token operator">:</span> <span class="token string">'https://192.9.210.7:30000'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">tokenURL</span><span class="token operator">:</span> <span class="token string">'https://192.9.210.7:30007'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></CodeGroup>
<p><strong>Adaas 配置项说明</strong></p>
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
<td>grant_type</td>
<td>String</td>
<td>授权类型</td>
</tr>
<tr>
<td>scope</td>
<td>String</td>
<td>范围</td>
</tr>
<tr>
<td>client_id</td>
<td>String</td>
<td>客户端ID</td>
</tr>
<tr>
<td>client_secret</td>
<td>String</td>
<td>客户端密码</td>
</tr>
<tr>
<td>deviceURL</td>
<td>String</td>
<td>调用外设的服务地址</td>
</tr>
<tr>
<td>tokenURL</td>
<td>String</td>
<td>获取token的服务地址</td>
</tr>
</tbody>
</table>
<h2 id="_2-方法" tabindex="-1"><a class="header-anchor" href="#_2-方法"><span>2. 方法</span></a></h2>
<table>
<thead>
<tr>
<th>方法名</th>
<th>传参</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>readIdr</td>
<td>-</td>
<td>-</td>
<td>读身份证</td>
</tr>
<tr>
<td>readMsf</td>
<td>-</td>
<td>-</td>
<td>读刷卡器MSF</td>
</tr>
<tr>
<td>readFic</td>
<td>-</td>
<td>-</td>
<td>读刷卡器FIC</td>
</tr>
<tr>
<td>evaluator</td>
<td>调用该方法时的vue实例</td>
<td>无</td>
<td>评价器</td>
</tr>
<tr>
<td>readPin</td>
<td>Time(String)</td>
<td>无</td>
<td>读密码键盘</td>
</tr>
<tr>
<td>print</td>
<td>xml,要打印的 aft 内容</td>
<td>无</td>
<td>打印</td>
</tr>
<tr>
<td>printImg</td>
<td>base64,要打印图片的 base64 码</td>
<td>无</td>
<td>打印图片</td>
</tr>
<tr>
<td>frontCamera</td>
<td>type</td>
<td>-</td>
<td>前置摄像头拍照</td>
</tr>
<tr>
<td>backCamera</td>
<td>type</td>
<td>-</td>
<td>后置摄像头拍照</td>
</tr>
<tr>
<td>sign</td>
<td>pdfPath,要签字的 pdf 文件路径</td>
<td>无</td>
<td>pdf加签</td>
</tr>
<tr>
<td>uploadFile</td>
<td>base64,上传文件的 base64</td>
<td>-</td>
<td>上传</td>
</tr>
</tbody>
</table>
<h3 id="readidr" tabindex="-1"><a class="header-anchor" href="#readidr"><span>readIdr</span></a></h3>
<blockquote>
<p>读身份证</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">readIdr</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="readmsf" tabindex="-1"><a class="header-anchor" href="#readmsf"><span>readMsf</span></a></h3>
<blockquote>
<p>读刷卡器MSF</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">readMsf</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="readfic" tabindex="-1"><a class="header-anchor" href="#readfic"><span>readFic</span></a></h3>
<blockquote>
<p>读刷卡器FIC</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">readFic</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="evaluator" tabindex="-1"><a class="header-anchor" href="#evaluator"><span>evaluator</span></a></h3>
<blockquote>
<p>评价器</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// this 为当前 vue 实例</span></span>
<span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">evaluator</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="readpin" tabindex="-1"><a class="header-anchor" href="#readpin"><span>readPin</span></a></h3>
<blockquote>
<p>读密码键盘</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">readPin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="print" tabindex="-1"><a class="header-anchor" href="#print"><span>print</span></a></h3>
<blockquote>
<p>打印</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">print</span><span class="token punctuation">(</span><span class="token string">"&lt;?xml version='1.0' encoding='UTF-8' standalone='yes'?>&lt;Root caption='test'>&lt;Setting>&lt;Page name='A4(210*297)'>&lt;ColInterval>1.84&lt;/ColInterval>&lt;LineInterval>5.14&lt;/LineInterval>&lt;PrintBackgroundImage/>&lt;CodeTitleFile>DG_convert.dat&lt;/CodeTitleFile>&lt;/Page>&lt;/Setting>&lt;Content>&lt;Constant Width='29.9' Height='5.03' Left='10.0' Top='20.0' TextAlign='Align_Left' VerticalAlign='Align_Middle' LineSeparate='5.14' Pos='Absolute'>交易日期&lt;/Constant>&lt;/Content>&lt;/Root>"</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="printimg" tabindex="-1"><a class="header-anchor" href="#printimg"><span>printImg</span></a></h3>
<blockquote>
<p>打印图片</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">readPin</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="frontcamera" tabindex="-1"><a class="header-anchor" href="#frontcamera"><span>frontCamera</span></a></h3>
<blockquote>
<p>前置摄像头拍照</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">frontCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="backcamera" tabindex="-1"><a class="header-anchor" href="#backcamera"><span>backCamera</span></a></h3>
<blockquote>
<p>后置摄像头拍照</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">backCamera</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="sign" tabindex="-1"><a class="header-anchor" href="#sign"><span>sign</span></a></h3>
<blockquote>
<p>pdf加签</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">sign</span><span class="token punctuation">(</span>pdfPath<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="uploadfile" tabindex="-1"><a class="header-anchor" href="#uploadfile"><span>uploadFile</span></a></h3>
<blockquote>
<p>上传</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">adaasManager<span class="token punctuation">.</span><span class="token function">uploadFile</span><span class="token punctuation">(</span>base64<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><!-- > **调用读卡器**

```js

adaasManager.readMsf('ReadSecondTrace')

```

**参数说明**
| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| Trace | String | ReadSecondTrace\|ReadThirdTrace\|ReadSecondAndThirdTrace |  读磁道 2\|读磁道 3\|读磁道 23|

> **调用密码键盘**

```js

adaasManager.readPin('ReadOnce')

```

**参数说明**
| 参数 | 类型 | 可选值 | 说明 |
|-------|-------|-------|-------|
| Time | String | ReadOnce\|ReadTwice |  第一次读密码\|第二次读密码|


> **调用打印**

```js

adaasManager.print("<?xml version='1.0' encoding='UTF-8' standalone='yes'?><Root caption='test'><Setting><Page name='A4(210*297)'><ColInterval>1.84</ColInterval><LineInterval>5.14</LineInterval><PrintBackgroundImage/><CodeTitleFile>DG_convert.dat</CodeTitleFile></Page></Setting><Content><Constant Width='29.9' Height='5.03' Left='10.0' Top='20.0' TextAlign='Align_Left' VerticalAlign='Align_Middle' LineSeparate='5.14' Pos='Absolute'>交易日期</Constant></Content></Root>")

```

**参数说明**
| 参数 | 类型 | 说明 |
|-------|-------|-------|
| aftContent | String | 打印的内容 | -->
</div></template>


