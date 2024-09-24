<template><div><h1 id="ab-manager-websocket-websocket连接" tabindex="-1"><a class="header-anchor" href="#ab-manager-websocket-websocket连接"><span>ab-manager-websocket@websocket连接</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> WebsocketManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-websocket'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-事件使用说明" tabindex="-1"><a class="header-anchor" href="#_2-事件使用说明"><span>2. 事件使用说明</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    <span class="token keyword">let</span> WebsocketManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebsocketManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">"ws:xxxx"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"oid_1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">branch</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">corporation</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>连接建立时触发</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function-variable function">onopen</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// todo</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>通信发生错误时触发</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function-variable function">onerror</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">onerror: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>客户端接收服务端数据时触发</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function-variable function">onmessage</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">onmessage: </span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>e<span class="token punctuation">.</span>data<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>连接关闭时触发</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function-variable function">onclose</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'close...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>发生重连触发</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function-variable function">onreconnect</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'reconnecting...'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-方法使用说明" tabindex="-1"><a class="header-anchor" href="#_3-方法使用说明"><span>3. 方法使用说明</span></a></h2>
<blockquote>
<p>send 发送消息</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">scope</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">destId</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">branch</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">content</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>close 关闭连接</p>
</blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">    WebsocketManager<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token string">'hello server'</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_4-使用案例" tabindex="-1"><a class="header-anchor" href="#_4-使用案例"><span>4. 使用案例</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> WebsocketManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"ab-manager-websocket"</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line"><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"HelloWorld"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">ws</span><span class="token operator">:</span> <span class="token keyword">undefined</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span>ws <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">WebsocketManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span><span class="token string">"ws://127.0.0.1:50010/ws/broadcast"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">id</span><span class="token operator">:</span> <span class="token string">"oid_1"</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">'app1'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">branch</span><span class="token operator">:</span> <span class="token string">'boss1'</span><span class="token punctuation">,</span></span>
<span class="line">            <span class="token literal-property property">corporation</span><span class="token operator">:</span> <span class="token string">'agree'</span> <span class="token comment">// 法人</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p><strong>WebsocketManager Attributes</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>参数</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">类型</th>
<th style="text-align:center">默认值</th>
<th style="text-align:center">可选值</th>
</tr>
</thead>
<tbody>
<tr>
<td>url</td>
<td style="text-align:center">websocket服务端接口</td>
<td style="text-align:center">string</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>id</td>
<td style="text-align:center">websocket连接唯一标识</td>
<td style="text-align:center">string/number</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>pingTimeOut</td>
<td style="text-align:center">每隔15秒发送一次心跳请求</td>
<td style="text-align:center">number</td>
<td style="text-align:center">15000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>pongTimeOut</td>
<td style="text-align:center">10秒内没收到后端消息便会认为连接断开</td>
<td style="text-align:center">number</td>
<td style="text-align:center">10000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>reconnectTimeOut</td>
<td style="text-align:center">尝试重连的间隔时间</td>
<td style="text-align:center">number</td>
<td style="text-align:center">2000</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>pingMsg</td>
<td style="text-align:center">ping消息内容</td>
<td style="text-align:center">string</td>
<td style="text-align:center">&quot;heartbeat&quot;</td>
<td style="text-align:center">&quot;heartbeat&quot;</td>
</tr>
<tr>
<td>forbidReconnect</td>
<td style="text-align:center">是否禁止重连操作</td>
<td style="text-align:center">boolean</td>
<td style="text-align:center">true</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>data</td>
<td style="text-align:center">消息</td>
<td style="text-align:center">DataObj</td>
<td style="text-align:center">-</td>
<td style="text-align:center">-</td>
</tr>
<tr>
<td>reconnectFrequency</td>
<td style="text-align:center">重连次数</td>
<td style="text-align:center">number</td>
<td style="text-align:center">5</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>WebsocketManager Events</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>事件名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>onopen</td>
<td style="text-align:center">连接建立时触发</td>
<td style="text-align:center">event</td>
</tr>
<tr>
<td>onerror</td>
<td style="text-align:center">通信发生错误时触发</td>
<td style="text-align:center">event</td>
</tr>
<tr>
<td>onmessage</td>
<td style="text-align:center">客户端接收服务端数据时触发</td>
<td style="text-align:center">event</td>
</tr>
<tr>
<td>onclose</td>
<td style="text-align:center">连接关闭时触发</td>
<td style="text-align:center">event</td>
</tr>
<tr>
<td>onreconnect</td>
<td style="text-align:center">发生重连触发</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>WebsocketManager Methods</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>方法名</th>
<th style="text-align:center">说明</th>
<th style="text-align:center">参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>send</td>
<td style="text-align:center">发送消息</td>
<td style="text-align:center">消息的内容</td>
</tr>
<tr>
<td>close</td>
<td style="text-align:center">关闭连接</td>
<td style="text-align:center">-</td>
</tr>
</tbody>
</table>
<blockquote>
<p><strong>DataObj</strong></p>
</blockquote>
<table>
<thead>
<tr>
<th>属性名</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>app</td>
<td>-</td>
</tr>
<tr>
<td>branch</td>
<td>-</td>
</tr>
<tr>
<td>corporation</td>
<td>-</td>
</tr>
<tr>
<td>[key:string]</td>
<td>-</td>
</tr>
</tbody>
</table>
</div></template>


