<template><div><h1 id="ab-plugin-customize-自定义组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-customize-自定义组件"><span>ab-plugin-customize 自定义组件</span></a></h1>
<p>自定义组件允许通过规范的参数, 调用任意原生端方法.</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  Customize<span class="token punctuation">,</span></span>
<span class="line">  RequestMsgBuilder<span class="token punctuation">,</span></span>
<span class="line">  RequestMsg<span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"../@agree/ab-sdk/ab-plugin-customize"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><code v-pre>Customize</code>: 组件调用接口</li>
<li><code v-pre>RequestMsg</code>: 组件接口的参数</li>
<li><code v-pre>RequestMsgBuilder</code>: 参数<code v-pre>RequestMsg</code>的建造者类</li>
</ul>
<h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-customize-callasync-以异步方式调用接口" tabindex="-1"><a class="header-anchor" href="#_2-1-customize-callasync-以异步方式调用接口"><span>2.1 Customize.callAsync -- 以异步方式调用接口</span></a></h3>
<h3 id="_2-2-customize-call-以同异步方式调用接口" tabindex="-1"><a class="header-anchor" href="#_2-2-customize-call-以同异步方式调用接口"><span>2.2 Customize.call -- 以同异步方式调用接口</span></a></h3>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font><font color ='red' style="font-weight:bold">支持柜面渠道.柜面端不区分同异步,对柜面端来说,两个方法完全等效</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">// 构造移动端参数</span></span>
<span class="line">    <span class="token keyword">let</span> mobileArgs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">groupID</span><span class="token operator">:</span> <span class="token string">"Device"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">functionID</span><span class="token operator">:</span> <span class="token string">"getDeviceInfo"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span> </span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 构造柜面端参数</span></span>
<span class="line">    <span class="token keyword">let</span> tellerArgs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">"GetClientIp"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">uuid</span><span class="token operator">:</span> StringManager<span class="token punctuation">.</span><span class="token function">createUUID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token string-property property">""</span> <span class="token operator">:</span> <span class="token string">""</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span> </span>
<span class="line">    </span>
<span class="line">    <span class="token comment">// 通过RequestMsgBuilder构建RequestMsg请求体</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token literal-property property">requestMsg</span><span class="token operator">:</span>RequestMsg <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RequestMsgBuilder</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">buildMobileArgs</span><span class="token punctuation">(</span>mobileArgs<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">buildTellerArgs</span><span class="token punctuation">(</span>tellerArgs<span class="token punctuation">)</span></span>
<span class="line">    <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 返回值处理函数</span></span>
<span class="line">    <span class="token keyword">let</span> <span class="token function-variable function">resolver</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span><span class="token operator">=></span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">return</span> OsManager<span class="token punctuation">.</span>isMobile<span class="token operator">?</span> res<span class="token punctuation">.</span>ipAddress <span class="token operator">:</span> res</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 发起参数调用  </span></span>
<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token function">Customize</span><span class="token punctuation">.</span><span class="token function">call</span><span class="token punctuation">(</span><span class="token string">""</span><span class="token punctuation">,</span> requestMsg <span class="token punctuation">,</span>resolver<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 输出本机IP 192.168.0.103</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
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
<td>eventType</td>
<td><code v-pre>string</code></td>
<td>√</td>
<td>方法调用的事件类型[柜面端有效]</td>
</tr>
<tr>
<td>requestMsg</td>
<td><code v-pre>RequestMsg</code></td>
<td>√</td>
<td>请求参数包装类</td>
</tr>
<tr>
<td>argResolver</td>
<td><code v-pre>Function</code></td>
<td>×</td>
<td>返回值处理器</td>
</tr>
</tbody>
</table>
<ul>
<li>
<p>RequestMsg: 请求参数包装类</p>
</li>
<li>
<p>RequestMsgBuilder: 请求参数建造者.</p>
</li>
</ul>
<ol>
<li><code v-pre>buildMobileArgs(obj:Object): RequestMsgBuilder</code> : 构造移动端参数,默认为空</li>
</ol>
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
<td>groupID</td>
<td><code v-pre>string</code></td>
<td>√</td>
<td>移动端方法组 (对应<code v-pre>feature name=&quot;Device&quot;</code>中name的值)</td>
</tr>
<tr>
<td>functionID</td>
<td><code v-pre>string</code></td>
<td>√</td>
<td>移动端方法,对应插件中java方法的方法名</td>
</tr>
<tr>
<td>args</td>
<td>Object / Array</td>
<td>×</td>
<td>方法参数</td>
</tr>
</tbody>
</table>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token comment">// 构造移动端Device模块下getDeviceInfo方法</span></span>
<span class="line">    <span class="token keyword">let</span> mobileArgs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">groupID</span><span class="token operator">:</span> <span class="token string">"Device"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">functionID</span><span class="token operator">:</span> <span class="token string">"getDeviceInfo"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span> </span>
<span class="line">    <span class="token function">buildMobileArgs</span><span class="token punctuation">(</span>mobileArgs<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>buildTellerArgs(obj:Object): RequestMsgBuilder</code> : 构造柜面端参数,默认为空</li>
</ol>
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
<td>type</td>
<td><code v-pre>string</code></td>
<td>√</td>
<td>柜面方法的方法名</td>
</tr>
<tr>
<td>uuid</td>
<td><code v-pre>string</code></td>
<td>√</td>
<td>方法UUID ,随机生成</td>
</tr>
<tr>
<td>?</td>
<td>any</td>
<td>×</td>
<td>方法的剩余参数</td>
</tr>
</tbody>
</table>
<ol start="3">
<li><code v-pre>build(): RequestMsg</code> 完成RequestMsg的构造</li>
</ol>
<hr>
</div></template>


