<template><div><h1 id="ab-plugin-lockview-手势图案解锁组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-lockview-手势图案解锁组件"><span>ab-plugin-lockview 手势图案解锁组件</span></a></h1>
<blockquote>
<font color ='green' style="font-weight:bold">支持移动渠道</font></blockquote>
<p>九宫格手势图案解锁组件，该组件属于定制组件，样式需要在原生层修改。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> LockView <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-lockview'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>集成aar</p>
<p><a href="http://192.168.180.26:50151/agreesdk/android/lockview/" target="_blank" rel="noopener noreferrer">api-gesture-lock-view-1.0.0-1.aar</a>
<a href="http://192.168.180.26:50151/agreesdk/android/lockview/" target="_blank" rel="noopener noreferrer">lib-gesture-lock-view-1.0.0-1.aar</a></p>
<p>添加插件配置</p>
<p>config.xml中添加配置：</p>
<div class="language-xml line-numbers-mode" data-highlighter="prismjs" data-ext="xml" data-title="xml"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>feature</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>LockView<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>param</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>android-package<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">value</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>cn.com.agree.abc.sdk.api.lockview.LockViewFeatureImpl<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>feature</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-show-显示手势图案弹框" tabindex="-1"><a class="header-anchor" href="#_2-1-show-显示手势图案弹框"><span>2.1 show -- 显示手势图案弹框</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">LockView<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>params入参</strong></p>
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
<td>status</td>
<td>number</td>
<td>√</td>
<td>0表示还未设置，3表示需要验证</td>
</tr>
</tbody>
</table>
<h3 id="_2-2-dismiss-关闭手势图案弹框" tabindex="-1"><a class="header-anchor" href="#_2-2-dismiss-关闭手势图案弹框"><span>2.2 dismiss -- 关闭手势图案弹框</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">LockView<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-3-setmessage-设置提示信息" tabindex="-1"><a class="header-anchor" href="#_2-3-setmessage-设置提示信息"><span>2.3 setMessage -- 设置提示信息</span></a></h3>
<p>当绘制手势密码错误时，会提示该信息。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">LockView<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">"手势密码错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-4-监听手势" tabindex="-1"><a class="header-anchor" href="#_2-4-监听手势"><span>2.4 监听手势</span></a></h3>
<p>需要在mounted生命周期函数里添加代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"onLockView"</span><span class="token punctuation">,</span> <span class="token keyword">async</span> <span class="token punctuation">(</span><span class="token parameter">res</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> data <span class="token operator">=</span> res<span class="token punctuation">.</span>data<span class="token punctuation">;</span></span>
<span class="line">      data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> type <span class="token operator">=</span> data<span class="token punctuation">.</span>type<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">let</span> password <span class="token operator">=</span> data<span class="token punctuation">.</span>password<span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">switch</span> <span class="token punctuation">(</span>type<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">"onEdit"</span><span class="token operator">:</span> <span class="token comment">// 点击修改手势密码按钮，会弹出一个H5的输入框，输入柜员密码</span></span>
<span class="line">          LockView<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"修改手势密码，验证服务端密码"</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token keyword">let</span> params <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">status</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          LockView<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span>params<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">"onConfirm"</span><span class="token operator">:</span> <span class="token comment">// 表示新设置或者修改后点击确认按钮，前端会获取该密码上传到服务端存储</span></span>
<span class="line">          <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"确认修改手势密码"</span><span class="token punctuation">)</span></span>
<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">case</span> <span class="token string">"onCheck"</span><span class="token operator">:</span> <span class="token comment">// 表示校验密码，如果绘制的密码跟服务器密码一致，则关闭手势密码弹框</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span>password <span class="token operator">===</span> <span class="token string">"0125"</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> LockView<span class="token punctuation">.</span><span class="token function">dismiss</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">await</span> LockView<span class="token punctuation">.</span><span class="token function">setMessage</span><span class="token punctuation">(</span><span class="token string">"手势密码错误，请重试"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">          <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>onEdit</li>
</ul>
<p>该监听表示点击了修改手势密码按钮。
前端业务层会弹出一个H5的输入框，输入柜员密码，密码校验通过后，再显示手势图案解锁弹框。</p>
<ul>
<li>onConfirm</li>
</ul>
<p>表示新设置或者修改后点击确认按钮，前端会获取该密码上传到服务端存储</p>
<ul>
<li>onCheck</li>
</ul>
<p>表示校验密码，如果绘制的密码跟服务器密码一致，则关闭手势密码弹框</p>
<hr>
</div></template>


