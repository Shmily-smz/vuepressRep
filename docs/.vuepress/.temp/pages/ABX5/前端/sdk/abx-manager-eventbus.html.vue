<template><div><h1 id="abx-manager-eventbus" tabindex="-1"><a class="header-anchor" href="#abx-manager-eventbus"><span>abx-manager-eventbus</span></a></h1>
<blockquote>
<p>abx 事件总线. 画面间事件的注册、触发、监听、销毁.</p>
</blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> EventBus <span class="token keyword">from</span> <span class="token string">"abx-manager-eventbus"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-emit" tabindex="-1"><a class="header-anchor" href="#_2-1-emit"><span>2.1 $emit</span></a></h3>
<p>触发事件并传入需要传递的参数</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>name(String)</em>: 注册时的事件名称</li>
<li><em>data(Any)</em>: 事件触发时,需要传递给回调函数的参数</li>
</ol>
<p><strong>返回:</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">EventBus<span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_2-2-on" tabindex="-1"><a class="header-anchor" href="#_2-2-on"><span>2.2 $on</span></a></h3>
<p>注册事件及对应回调函数</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>name(String)</em>: 注册时的事件名称</li>
<li><em>fn(Function)</em>: 事件触发时需要执行的回调函数</li>
</ol>
<p><strong>返回:</strong></p>
<p><em>(Object)</em>: 注册成功后的事件对象</p>
<p><strong>例子:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 不查看返回值,可直接使用 EventBus.$on(name, fn)</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> EventBus<span class="token punctuation">.</span><span class="token function">$on</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-off" tabindex="-1"><a class="header-anchor" href="#_2-3-off"><span>2.3 $off</span></a></h3>
<p>销毁已注册事件及对应回调函数</p>
<p><strong>参数:</strong></p>
<ol>
<li><em>name(String)</em>: 注册时的事件名称</li>
<li><em>fn(Function)</em>: 事件触发时需要执行的回调函数</li>
</ol>
<p><strong>返回:</strong></p>
<p><em>(Array)</em>: 销毁指定事件后，剩余的事件数组</p>
<p><strong>例子:</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> EventBus<span class="token punctuation">.</span><span class="token function">$off</span><span class="token punctuation">(</span>name<span class="token punctuation">,</span> fn<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


