<template><div><h1 id="ab-plugin-message-消息管理类" tabindex="-1"><a class="header-anchor" href="#ab-plugin-message-消息管理类"><span>ab-plugin-message @消息管理类</span></a></h1>
<h2 id="_0-说明" tabindex="-1"><a class="header-anchor" href="#_0-说明"><span>0. 说明</span></a></h2>
<p>该组件封装发送消息功能，主要为使用websocket与服务端通讯，接收服务端推送的消息。
组件中会在打开连接后先进行register，注册成功后再进行updateInfo。</p>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font><font color ='red' style="font-weight:bold">支持柜面渠道</font><font color ='red' style="font-weight:bold">支持浏览器环境</font></blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MessageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-message'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<p><strong>创建消息通信</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> <span class="token function-variable function">onMessage</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>msg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> <span class="token function-variable function">onException</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">e</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> options <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">reconnectTimeOut</span><span class="token operator">:</span> <span class="token number">5000</span><span class="token punctuation">,</span> <span class="token comment">// 重连间隔时间, 单位毫秒</span></span>
<span class="line">    <span class="token literal-property property">reconnectFrequency</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span> <span class="token comment">// 重连尝试次数</span></span>
<span class="line">    <span class="token literal-property property">pingTimeOut</span><span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">// 心跳间隔时间, 单位毫秒</span></span>
<span class="line">    <span class="token literal-property property">pingMsg</span><span class="token operator">:</span> <span class="token string">"heartbeat"</span>    <span class="token comment">//心跳消息内容</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>webSocket <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">MessageManager</span><span class="token punctuation">(</span><span class="token string">"ws://192.9.200.101:44004/websocket"</span><span class="token punctuation">,</span> <span class="token string">"000038"</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">app</span><span class="token operator">:</span> <span class="token string">"TE"</span><span class="token punctuation">,</span> <span class="token literal-property property">branch</span><span class="token operator">:</span> <span class="token string">"2039"</span><span class="token punctuation">,</span> <span class="token literal-property property">corporation</span><span class="token operator">:</span> <span class="token string">"1011"</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">,</span> onMessage<span class="token punctuation">,</span> onException<span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">,</span> options<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>关闭通信</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>webSocket<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><ul>
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
<td>url</td>
<td>string</td>
<td>true</td>
<td></td>
<td>连接websocket地址，使用壳子链接传空</td>
</tr>
<tr>
<td>tellerId</td>
<td>string</td>
<td>true</td>
<td></td>
<td>登陆柜员号</td>
</tr>
<tr>
<td>clientMap</td>
<td>map</td>
<td>true</td>
<td></td>
<td>登陆柜员对应的信息</td>
</tr>
<tr>
<td>onMessage</td>
<td>function</td>
<td>true</td>
<td></td>
<td>消息回调</td>
</tr>
<tr>
<td>onEception</td>
<td>function</td>
<td>true</td>
<td></td>
<td>异常回调</td>
</tr>
<tr>
<td>forceCreateWebsocket</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td>强制使用js websocket，默认为false</td>
</tr>
<tr>
<td>options</td>
<td>object</td>
<td>false</td>
<td>false</td>
<td>额外定义的操作属性，默认可不传</td>
</tr>
</tbody>
</table>
<ul>
<li>options参数列表:</li>
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
<td>reconnectTimeOut</td>
<td>number</td>
<td>5000</td>
<td></td>
<td>重连间隔时间，单位毫秒</td>
</tr>
<tr>
<td>reconnectFrequency</td>
<td>number</td>
<td>5</td>
<td></td>
<td>重连尝试次数</td>
</tr>
<tr>
<td>pingTimeOut</td>
<td>number</td>
<td>false</td>
<td>10000</td>
<td>心跳间隔时间, 单位毫秒</td>
</tr>
<tr>
<td>pongTimeOut</td>
<td>number</td>
<td>false</td>
<td>10000</td>
<td>当reconnetWhenstopHeart为true时生效, 判断网络连接中断的心跳超时时间, 单位毫秒</td>
</tr>
<tr>
<td>reconnetWhenstopHeart</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td>当pongTimeOut时间内心跳未返回则认为网络中断,重新连接</td>
</tr>
<tr>
<td>pingMsg</td>
<td>string</td>
<td>false</td>
<td>heartbeat</td>
<td>心跳消息内容</td>
</tr>
</tbody>
</table>
<ul>
<li>MessageManager 方法</li>
</ul>
<table>
<thead>
<tr>
<th>方法名</th>
<th>参数类型</th>
<th>返回值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>close</td>
<td></td>
<td>无</td>
<td>关闭连接，使用壳子的模式下是退出柜员</td>
</tr>
<tr>
<td>updateInfo</td>
<td>map</td>
<td>无</td>
<td>更新柜员对应信息</td>
</tr>
<tr>
<td>send</td>
<td>any</td>
<td>无</td>
<td>发送消息</td>
</tr>
<tr>
<td>register</td>
<td></td>
<td>无</td>
<td>根据客户信息注册到abs</td>
</tr>
</tbody>
</table>
<h2 id="_3-ab-plugin-message-适配abx5新增功能" tabindex="-1"><a class="header-anchor" href="#_3-ab-plugin-message-适配abx5新增功能"><span>3. ab-plugin-message 适配ABX5新增功能</span></a></h2>
<h3 id="_3-1-引入" tabindex="-1"><a class="header-anchor" href="#_3-1-引入"><span>3.1 引入</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> MessageManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-message'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_3-2-方法说明" tabindex="-1"><a class="header-anchor" href="#_3-2-方法说明"><span>3.2 方法说明</span></a></h3>
<h4 id="_3-2-1-初始化" tabindex="-1"><a class="header-anchor" href="#_3-2-1-初始化"><span>3.2.1 初始化</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">MessageManager<span class="token punctuation">.</span><span class="token function">init</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'ws://192.168.70.10:30896/websocket'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token string">''</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数列表:</p>
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
<td>url</td>
<td>string</td>
<td>true</td>
<td></td>
<td>连接 websocket 地址</td>
</tr>
<tr>
<td>tellerId</td>
<td>string</td>
<td>true</td>
<td></td>
<td>登陆柜员号</td>
</tr>
<tr>
<td>clientMap</td>
<td>map</td>
<td>true</td>
<td></td>
<td>登陆柜员对应的信息</td>
</tr>
<tr>
<td>onMessage</td>
<td>function</td>
<td>true</td>
<td></td>
<td>默认时消息回调</td>
</tr>
<tr>
<td>onEception</td>
<td>function</td>
<td>true</td>
<td></td>
<td>默认时异常回调</td>
</tr>
<tr>
<td>forceCreateWebsocket</td>
<td>boolean</td>
<td>false</td>
<td>false</td>
<td>true 为使用 js websocket，false 为使用壳子的 websocket</td>
</tr>
<tr>
<td>options</td>
<td>object</td>
<td>false</td>
<td>false</td>
<td>额外定义的操作属性，默认可不传</td>
</tr>
</tbody>
</table>
<p>注:使用壳子的ws时,通过<code v-pre>configuration/aui.properties</code>配置ws地址<code v-pre>cn.com.agree.ab.a5.client.communication/parentMsgUrl = ws://192.168.70.10:30896/websocket</code></p>
<h4 id="_3-2-2-获取-ws-实例" tabindex="-1"><a class="header-anchor" href="#_3-2-2-获取-ws-实例"><span>3.2.2 获取 ws 实例</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">MessageManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_3-2-3-注册渠道回调" tabindex="-1"><a class="header-anchor" href="#_3-2-3-注册渠道回调"><span>3.2.3 注册渠道回调</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">MessageManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">registerCellunit</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'ABX'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abxMsg'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">(</span><span class="token parameter">msg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">'abxError'</span><span class="token punctuation">,</span> msg<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数列表:</p>
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
<td>cellUnit</td>
<td>string</td>
<td>渠道名称</td>
</tr>
<tr>
<td>onMessage</td>
<td>function</td>
<td>渠道消息回调</td>
</tr>
<tr>
<td>onEception</td>
<td>function</td>
<td>渠道异常回调</td>
</tr>
</tbody>
</table>
<h4 id="_3-2-4-注销渠道" tabindex="-1"><a class="header-anchor" href="#_3-2-4-注销渠道"><span>3.2.4 注销渠道</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">MessageManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">unRegisterCellunit</span><span class="token punctuation">(</span></span>
<span class="line">  <span class="token string">'ABX'</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>参数列表:</p>
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
<td>cellUnit</td>
<td>string</td>
<td>渠道名称</td>
</tr>
</tbody>
</table>
<h4 id="_3-2-5-获取oid" tabindex="-1"><a class="header-anchor" href="#_3-2-5-获取oid"><span>3.2.5 获取oid</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> MessageManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getOid</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h4 id="_3-2-6-获取websocketstate" tabindex="-1"><a class="header-anchor" href="#_3-2-6-获取websocketstate"><span>3.2.6 获取websocketState</span></a></h4>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">await</span> MessageManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getWebsocketState</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>注: 返回类型为<code v-pre>FAILED</code>,<code v-pre>STARTING</code>,<code v-pre>STARTED</code>,<code v-pre>STOPPING</code>,<code v-pre>STOPPED</code></p>
</div></template>


