<template><div><h1 id="abx-plugin-keyboard" tabindex="-1"><a class="header-anchor" href="#abx-plugin-keyboard"><span>abx-plugin-keyboard</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> KeyboardPlugin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/abx-plugin-keyboard'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> keyboard <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">KeyboardPlugin</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-verifyid" tabindex="-1"><a class="header-anchor" href="#_2-1-verifyid"><span>2.1 verifyId</span></a></h3>
<h3 id="_2-2-getelementid" tabindex="-1"><a class="header-anchor" href="#_2-2-getelementid"><span>2.2 getElementId</span></a></h3>
<h3 id="_2-3-bindkeyboard" tabindex="-1"><a class="header-anchor" href="#_2-3-bindkeyboard"><span>2.3 bindKeyboard</span></a></h3>
<h3 id="_2-4-setproperty" tabindex="-1"><a class="header-anchor" href="#_2-4-setproperty"><span>2.4 setProperty</span></a></h3>
<h3 id="_2-5-getproperty" tabindex="-1"><a class="header-anchor" href="#_2-5-getproperty"><span>2.5 getProperty</span></a></h3>
<h3 id="_2-6-showkeyboard" tabindex="-1"><a class="header-anchor" href="#_2-6-showkeyboard"><span>2.6 showKeyboard</span></a></h3>
<h3 id="_2-7-getvalue" tabindex="-1"><a class="header-anchor" href="#_2-7-getvalue"><span>2.7 getValue</span></a></h3>
<p>获得密文</p>
<p><strong>参数</strong></p>
<ol>
<li><em>id(String)</em>: 密文<code v-pre>id</code></li>
<li><em>timestamp(String)</em>: 时间戳，毫秒</li>
<li><em>callback(Function)</em>: 回调函数</li>
</ol>
<p><strong>返回</strong></p>
<ol>
<li>**</li>
</ol>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">keyboard<span class="token punctuation">.</span><span class="token function">getValue</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-8-getpinvalue" tabindex="-1"><a class="header-anchor" href="#_2-8-getpinvalue"><span>2.8 getPinValue</span></a></h3>
<p>获得PIN密文</p>
<p><strong>参数</strong></p>
<ol>
<li><em>id(String)</em>: 密文<code v-pre>id</code></li>
<li><em>timestamp(String)</em>: 时间戳，毫秒</li>
</ol>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">keyboard<span class="token punctuation">.</span><span class="token function">getPinValue</span><span class="token punctuation">(</span>id<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-9-hidekeyboard" tabindex="-1"><a class="header-anchor" href="#_2-9-hidekeyboard"><span>2.9 hideKeyboard</span></a></h3>
<h3 id="_2-10-publicmodulus" tabindex="-1"><a class="header-anchor" href="#_2-10-publicmodulus"><span>2.10 publicModulus</span></a></h3>
<h3 id="_2-11-publicappmodulus" tabindex="-1"><a class="header-anchor" href="#_2-11-publicappmodulus"><span>2.11 publicAppModulus</span></a></h3>
<h3 id="_2-12-publickeyecc" tabindex="-1"><a class="header-anchor" href="#_2-12-publickeyecc"><span>2.12 publicKeyECC</span></a></h3>
<h3 id="_2-13-passwordisequal" tabindex="-1"><a class="header-anchor" href="#_2-13-passwordisequal"><span>2.13 passwordIsEqual</span></a></h3>
<h3 id="_2-14-verify" tabindex="-1"><a class="header-anchor" href="#_2-14-verify"><span>2.14 verify</span></a></h3>
<h3 id="_2-15-getlength" tabindex="-1"><a class="header-anchor" href="#_2-15-getlength"><span>2.15 getLength</span></a></h3>
<h3 id="_2-16-getdegree" tabindex="-1"><a class="header-anchor" href="#_2-16-getdegree"><span>2.16 getDegree</span></a></h3>
<h3 id="_2-17-lasterror" tabindex="-1"><a class="header-anchor" href="#_2-17-lasterror"><span>2.17 lastError</span></a></h3>
<h3 id="_2-18-clear" tabindex="-1"><a class="header-anchor" href="#_2-18-clear"><span>2.18 clear</span></a></h3>
<h3 id="_2-19-onkeyboardheightchanged" tabindex="-1"><a class="header-anchor" href="#_2-19-onkeyboardheightchanged"><span>2.19 onKeyboardHeightChanged</span></a></h3>
<h3 id="_2-20-onpasswordchanged" tabindex="-1"><a class="header-anchor" href="#_2-20-onpasswordchanged"><span>2.20 onPasswordChanged</span></a></h3>
<h3 id="_2-21-paypublicappmodulus" tabindex="-1"><a class="header-anchor" href="#_2-21-paypublicappmodulus"><span>2.21 payPublicAppModulus</span></a></h3>
<h3 id="_2-22-paypublicmodulus" tabindex="-1"><a class="header-anchor" href="#_2-22-paypublicmodulus"><span>2.22 payPublicModulus</span></a></h3>
<h3 id="_2-23-paypublickeyecc" tabindex="-1"><a class="header-anchor" href="#_2-23-paypublickeyecc"><span>2.23 payPublicKeyECC</span></a></h3>
<h3 id="_2-24-showpaykeyboard" tabindex="-1"><a class="header-anchor" href="#_2-24-showpaykeyboard"><span>2.24 showPayKeyboard</span></a></h3>
<p>显示支付密码界面</p>
<p><strong>参数</strong></p>
<ol>
<li><em>kbdParam(Object)</em>: 密码键盘</li>
<li><em>payInfo</em>: 支付内容，包括转入方姓名，转账金额，收款银行，收款账号，业务类型以及手续费</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> kbdParam <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token string-property property">'KEYBOARD_TYPE'</span><span class="token operator">:</span> <span class="token string">'1'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">let</span> payInfo <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">PayeeName</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 转入方姓名</span></span>
<span class="line">    <span class="token literal-property property">TransPrice</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 转账金额</span></span>
<span class="line">    <span class="token literal-property property">BankName</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 收款银行</span></span>
<span class="line">    <span class="token literal-property property">PayeeAcNo</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 收款账号</span></span>
<span class="line">    <span class="token literal-property property">PayeeType</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 业务类型，'0' - 转账，'1' - 支付， '2' - 圈存</span></span>
<span class="line">    <span class="token literal-property property">PayeeCost</span><span class="token operator">:</span> <span class="token string">''</span><span class="token punctuation">,</span> <span class="token comment">// 手续费，PayeeType为0时使用</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line">keyboard<span class="token punctuation">.</span><span class="token function">showKeyboard</span><span class="token punctuation">(</span>kbdParam<span class="token punctuation">,</span> payInfo<span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-25-getpayvalue" tabindex="-1"><a class="header-anchor" href="#_2-25-getpayvalue"><span>2.25 getPayValue</span></a></h3>
<p>获得支付密文</p>
<p><strong>参数</strong></p>
<p><em>timestamp(String)</em>: 时间戳，毫秒</p>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">keyboard<span class="token punctuation">.</span><span class="token function">getPayValue</span><span class="token punctuation">(</span>timestamp<span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-26-getciphertext" tabindex="-1"><a class="header-anchor" href="#_2-26-getciphertext"><span>2.26 getCipherText</span></a></h3>
<p>对json字符串加密， 两个公钥按照算法设置，如果已经内容，传入为&quot;&quot;即可。</p>
<p><strong>参数</strong></p>
<ol>
<li><em>appPubKey(String)</em>: 应用平台公钥， 如果是rsa，使用公钥模数</li>
<li><em>encPubKey(String)</em>: 加密平台公钥， 如果是rsa，使用公钥模数, 如果是国密，使用&quot;eccX,eccY&quot;, 逗号分隔</li>
<li><em>timestamp(String)</em>: 时间戳，毫秒</li>
<li><em>jsonStr(String)</em>: 必须<code v-pre>json</code>字符串</li>
</ol>
<p><strong>返回</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">keyboard<span class="token punctuation">.</span><span class="token function">getCipherText</span><span class="token punctuation">(</span>appPubKey<span class="token punctuation">,</span> encPubKey<span class="token punctuation">,</span> timestamp<span class="token punctuation">,</span> jsonStr<span class="token punctuation">,</span> callback<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


