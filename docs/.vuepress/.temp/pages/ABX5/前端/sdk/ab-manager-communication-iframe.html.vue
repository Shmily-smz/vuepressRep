<template><div><h1 id="ab-manager-communication-iframe-父窗口与交易iframe之间通讯" tabindex="-1"><a class="header-anchor" href="#ab-manager-communication-iframe-父窗口与交易iframe之间通讯"><span>ab-manager-communication-iframe@父窗口与交易iframe之间通讯</span></a></h1>
<p>父页面与iframe之间传递消息。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">import</span> <span class="token punctuation">{</span> CommunicationIframe <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-communication-iframe'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-父页面向子页面发送消息" tabindex="-1"><a class="header-anchor" href="#_2-父页面向子页面发送消息"><span>2. 父页面向子页面发送消息</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    CommunicationIframe<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>iframeName<span class="token punctuation">,</span> msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>iframe页面</strong>(例)</p>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>T10001<span class="token punctuation">"</span></span> <span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line">        CommunicationIframe<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span><span class="token string">'T10001'</span><span class="token punctuation">,</span> <span class="token string">'向T10001发送的消息'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>注：切换交易存在焦点重置问题，由父元素向指定交易iframe发送消息重置焦点，传递的参数必须为<code v-pre>reset</code>。</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    CommunicationIframe<span class="token punctuation">.</span><span class="token function">sendMessage</span><span class="token punctuation">(</span>iframeName<span class="token punctuation">,</span> <span class="token string">"reset"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_3-子页面向父页面发送消息" tabindex="-1"><a class="header-anchor" href="#_3-子页面向父页面发送消息"><span>3. 子页面向父页面发送消息</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">// 子页面 发送消息</span></span>
<span class="line">    CommunicationIframe<span class="token punctuation">.</span><span class="token function">popupMessage</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token comment">// 父页面 需要建立监听子页面请求 getMessage:接受消息的回调函数 接受一个参数为子页面发送的消息内容msg</span></span>
<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">getMessage</span><span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">            <span class="token comment">// 接受消息的回调函数</span></span>
<span class="line">            <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    CommunicationIframe<span class="token punctuation">.</span><span class="token function">unityMessage</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>getMessage<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>由于只有一个父元素，所以不用指定<code v-pre>name</code>，直接传递数据(msg)即可。</p>
</blockquote>
<blockquote>
<p><strong>CommunicationIframe Events</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>事件</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>sendMessage</td>
<td style="text-align:center">iframe页面向子页面发送消息</td>
<td style="text-align:center">iframeName(发送消息的iframe的name),<br>msg(发送的消息内容,<br>由父元素向指定交易iframe发送消息重置焦点,传递的参数必须为<code v-pre>reset</code>)</td>
</tr>
<tr>
<td>popupMessage</td>
<td style="text-align:center">子页面向iframe页面发送消息</td>
<td style="text-align:center">msg(发送的消息内容)</td>
</tr>
<tr>
<td>unityMessage</td>
<td style="text-align:center">iframe页面监听子页面的消息内容</td>
<td style="text-align:center">callbackFun(接收消息的回调函数)</td>
</tr>
</tbody>
</table>
</div></template>


