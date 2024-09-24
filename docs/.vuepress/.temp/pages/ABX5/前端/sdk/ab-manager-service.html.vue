<template><div><h1 id="ab-manager-service-服务管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-service-服务管理"><span>ab-manager-service@服务管理</span></a></h1>
<p>管理页面调用的服务，包括向服务器发送请求以及外设调用。</p>
<h2 id="_1-引入并初始化" tabindex="-1"><a class="header-anchor" href="#_1-引入并初始化"><span>1. 引入并初始化</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-service'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> services <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'登录请求'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://187.0.0.1:8087'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">customData</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> args<span class="token punctuation">,</span></span>
<span class="line">        <span class="token function-variable function">customConfig</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token operator">...</span>args</span><span class="token punctuation">)</span> <span class="token operator">=></span> args</span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'关于'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'about'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/about'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">errorHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://127.0.0.1:8087'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token literal-property property">atoken</span><span class="token operator">:</span> <span class="token string">'sdklglglknlnlmd='</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> serviceManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServiceManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span> services<span class="token punctuation">,</span> errorHandle<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-发送请求" tabindex="-1"><a class="header-anchor" href="#_2-发送请求"><span>2. 发送请求</span></a></h2>
<h3 id="_2-1-方法1" tabindex="-1"><a class="header-anchor" href="#_2-1-方法1"><span>2.1 方法1</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span>serviceName<span class="token punctuation">[</span><span class="token punctuation">,</span> parameter<span class="token punctuation">,</span> config<span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 回调函数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>数组中参数可省略，当 <code v-pre>customData</code> 和 <code v-pre>customConfig</code> 不存在时，传递的参数就是最终的传参结果。当 <code v-pre>customData</code> 和 <code v-pre>customConfig</code> 存在时，两个参数分别对应 <code v-pre>customData</code> 和 <code v-pre>customConfig</code> 中自定的方法的入参，最终传参结果为两个自定义函数的返回值</p>
</blockquote>
<h3 id="_2-2-方法2" tabindex="-1"><a class="header-anchor" href="#_2-2-方法2"><span>2.2 方法2</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> response <span class="token operator">=</span>  <span class="token keyword">await</span> serviceManager<span class="token punctuation">.</span><span class="token function">post</span><span class="token punctuation">(</span>serviceItem<span class="token punctuation">,</span><span class="token punctuation">{</span> data<span class="token punctuation">,</span> config<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> response <span class="token operator">=</span>  <span class="token keyword">await</span> serviceManager<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>serviceItem<span class="token punctuation">,</span> <span class="token punctuation">{</span> data<span class="token punctuation">,</span> config<span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>| 参数 | 类型 | 说明 | 默认值
|-------|-------|-------|
| serviceItem | service 对象(见参数结构中service 对象)| 服务描述 | --- |
| data | — | 请求中的参数 | --- |
| config | — | 服务配置 | --- |</p>
<blockquote>
<p>config参数中可以配置inherit参数, true的话继承初始化时全局配置的参数, 默认为true</p>
</blockquote>
<blockquote>
<p>serviceItem参数中的<code v-pre>customData</code> 和 <code v-pre>customConfig</code> 为function类型</p>
</blockquote>
<h2 id="_3-自定义形式" tabindex="-1"><a class="header-anchor" href="#_3-自定义形式"><span>3. 自定义形式</span></a></h2>
<blockquote>
<p>如果配置config属性，config中的baseURL会覆盖原有的baseURL。baseURL 的优先级是 config 参数的 baseURL &gt; 单个 service 的 baseURL &gt; new 时传递的总的 baseURL</p>
</blockquote>
<h3 id="_3-1-自定义参数形式-customdata" tabindex="-1"><a class="header-anchor" href="#_3-1-自定义参数形式-customdata"><span>3.1 自定义参数形式(customData)</span></a></h3>
<p>如果设置customData属性，表示自定义参数形式，最终的参数类型就是customData函数的返回值。</p>
<p>例3 —— 自定义参数形式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 回调函数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function-variable function">customData</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">param</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    param<span class="token punctuation">.</span>height <span class="token operator">=</span> <span class="token number">180</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> param<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终传参为：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"Jack"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">height</span><span class="token operator">:</span> <span class="token number">180</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_3-2-自定义config形式-customconfig" tabindex="-1"><a class="header-anchor" href="#_3-2-自定义config形式-customconfig"><span>3.2 自定义config形式(customConfig)</span></a></h3>
<p>如果设置customConfig属性，表示自定义config形式，最终的config类型就是customConfig函数的返回值。</p>
<p>例3 —— 自定义config形式：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">getService</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'Jack'</span><span class="token punctuation">,</span> <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token number">20</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token literal-property property">headers</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token string-property property">"X-AmebaCloud-Token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">res</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 回调函数</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token function-variable function">customConfig</span><span class="token operator">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">config</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    config<span class="token punctuation">.</span>timeout <span class="token operator">=</span> <span class="token number">15000</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token keyword">return</span> config<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>最终传参为：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">headers</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token string-property property">"X-AmebaCloud-Token"</span><span class="token operator">:</span><span class="token string">""</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">15000</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-错误处理" tabindex="-1"><a class="header-anchor" href="#_4-错误处理"><span>4. 错误处理</span></a></h2>
<p>errorHandle 参数接收一个错误处理函数，请求失败时会被调用。也可以在拦截器里处理。</p>
<h2 id="_5-拦截器" tabindex="-1"><a class="header-anchor" href="#_5-拦截器"><span>5. 拦截器</span></a></h2>
<p>可定义请求/响应拦截器</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 注册请求拦截器</span></span>
<span class="line">serviceManager<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span><span class="token function">request</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">'success'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// do something</span></span>
<span class="line">        <span class="token keyword">return</span> arg<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">'error'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// do something</span></span>
<span class="line">        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 注册响应拦截器</span></span>
<span class="line">serviceManager<span class="token punctuation">.</span>interceptors<span class="token punctuation">.</span><span class="token function">response</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token parameter">state<span class="token punctuation">,</span> arg</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">'success'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// do something</span></span>
<span class="line">        <span class="token keyword">return</span> arg<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    <span class="token keyword">if</span><span class="token punctuation">(</span>state <span class="token operator">===</span> <span class="token string">'error'</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// do something</span></span>
<span class="line">        <span class="token keyword">return</span> Promise<span class="token punctuation">.</span><span class="token function">reject</span><span class="token punctuation">(</span>arg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-开启一机一密" tabindex="-1"><a class="header-anchor" href="#_6-开启一机一密"><span>6. 开启一机一密</span></a></h2>
<p>通过参数设置是否开启一机一密</p>
<p><strong>一机一密在&gt;=2.0.12的版本中将SM2加密顺序配合服务端改为C1C3C2，之前是C1C2C3</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-service'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> services <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">errorHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://127.0.0.1:8087'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">isOpenEncrypt</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//true表示开启一机一密</span></span>
<span class="line">        <span class="token literal-property property">encryptUrlMsg</span><span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">//开启一机一密需要配置 获取SM2公钥和上送SM4key的服务地址</span></span>
<span class="line">            <span class="token literal-property property">pubkey</span><span class="token operator">:</span> <span class="token string">'/abs/getPublicKey'</span><span class="token punctuation">,</span>  <span class="token comment">//获取SM2公钥的服务地址</span></span>
<span class="line">            <span class="token literal-property property">postPrivateKey</span><span class="token operator">:</span> <span class="token string">'/abs/negotiationKey'</span> <span class="token comment">//上送SM4key的服务地址</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> serviceManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServiceManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span> services<span class="token punctuation">,</span> errorHandle<span class="token punctuation">,</span> config <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-初始化完成的回调" tabindex="-1"><a class="header-anchor" href="#_7-初始化完成的回调"><span>7. 初始化完成的回调</span></a></h2>
<p>可以传入一个初始化的回调，在初始化完成后会调用这个回调。例如在开启一机一密后，可以在初始化结束后再去进行之后的请求。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ServiceManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-service'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> services <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token function-variable function">errorHandle</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token parameter">error</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    config <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://127.0.0.1:8087'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">isOpenEncrypt</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//true表示开启一机一密</span></span>
<span class="line">        <span class="token literal-property property">encryptUrlMsg</span><span class="token operator">:</span> <span class="token punctuation">{</span>     <span class="token comment">//开启一机一密需要配置 获取SM2公钥和上送SM4key的服务地址</span></span>
<span class="line">            <span class="token literal-property property">pubkey</span><span class="token operator">:</span> <span class="token string">'/abs/getPublicKey'</span><span class="token punctuation">,</span>  <span class="token comment">//获取SM2公钥的服务地址</span></span>
<span class="line">            <span class="token literal-property property">postPrivateKey</span><span class="token operator">:</span> <span class="token string">'/abs/negotiationKey'</span> <span class="token comment">//上送SM4key的服务地址</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    hooks <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function-variable function">init</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">                <span class="token comment">//do something</span></span>
<span class="line">            <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">let</span> serviceManager <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ServiceManager</span><span class="token punctuation">(</span><span class="token punctuation">{</span> services<span class="token punctuation">,</span> errorHandle<span class="token punctuation">,</span> config<span class="token punctuation">,</span> hooks <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-方法" tabindex="-1"><a class="header-anchor" href="#_8-方法"><span>8. 方法</span></a></h2>
<h3 id="_8-1-getservicelist-获取服务列表" tabindex="-1"><a class="header-anchor" href="#_8-1-getservicelist-获取服务列表"><span>8.1 getServiceList 获取服务列表</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> serviceManager<span class="token punctuation">.</span><span class="token function">getServiceList</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_8-2-addservice-新增服务" tabindex="-1"><a class="header-anchor" href="#_8-2-addservice-新增服务"><span>8.2 addService 新增服务</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">addService</span><span class="token punctuation">(</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">desc</span><span class="token operator">:</span> <span class="token string">'登录请求'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'login'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">'/login'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">'http://187.0.0.1:8087'</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">'post'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>services</td>
<td>service</td>
<td>服务描述对象</td>
</tr>
</tbody>
</table>
<h3 id="_8-3-deleteservice-删除服务" tabindex="-1"><a class="header-anchor" href="#_8-3-deleteservice-删除服务"><span>8.3 deleteService 删除服务</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">deleteService</span><span class="token punctuation">(</span><span class="token string">'login'</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>serviceName</td>
<td>string</td>
<td>服务名</td>
</tr>
</tbody>
</table>
<h3 id="_8-4-setservicetimeout-设置超时时间" tabindex="-1"><a class="header-anchor" href="#_8-4-setservicetimeout-设置超时时间"><span>8.4 setServiceTimeout 设置超时时间</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line">serviceManager<span class="token punctuation">.</span><span class="token function">setServiceTimeout</span><span class="token punctuation">(</span><span class="token number">1000</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>timeout</td>
<td>Number</td>
<td>超时时间</td>
</tr>
</tbody>
</table>
<h3 id="_8-5-getservicetimeout-获取超时时间" tabindex="-1"><a class="header-anchor" href="#_8-5-getservicetimeout-获取超时时间"><span>8.5 getServiceTimeout 获取超时时间</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> serviceManager<span class="token punctuation">.</span><span class="token function">getServiceTimeout</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="_8-6-getinstance-获取服务管理器实例" tabindex="-1"><a class="header-anchor" href="#_8-6-getinstance-获取服务管理器实例"><span>8.6 getInstance 获取服务管理器实例</span></a></h3>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> serviceManager<span class="token punctuation">.</span><span class="token function">getInstance</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_9-参数结构" tabindex="-1"><a class="header-anchor" href="#_9-参数结构"><span>9. 参数结构</span></a></h2>
<p><strong>构造函数参数对象</strong></p>
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
<td>services</td>
<td>Array</td>
<td>服务描述对象数组</td>
</tr>
<tr>
<td>errorHandle</td>
<td>Function</td>
<td>错误处理函数</td>
</tr>
<tr>
<td>config</td>
<td>Object</td>
<td>配置信息</td>
</tr>
</tbody>
</table>
<p><strong>service 对象</strong></p>
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
<td>desc</td>
<td>string</td>
<td>请求描述</td>
</tr>
<tr>
<td>type</td>
<td>string</td>
<td>请求类型</td>
</tr>
<tr>
<td>name</td>
<td>string</td>
<td>定义的服务名称</td>
</tr>
<tr>
<td>url</td>
<td>string</td>
<td>请求路径</td>
</tr>
<tr>
<td>baseURL(可选)</td>
<td>string</td>
<td>请求路径的 baseURL</td>
</tr>
<tr>
<td>customData(可选)</td>
<td>function</td>
<td>自定义参数的方法</td>
</tr>
<tr>
<td>customConfig(可选)</td>
<td>function</td>
<td>自定义配置的方法</td>
</tr>
</tbody>
</table>
<p><strong>getService参数</strong></p>
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
<td>serviceName</td>
<td>string</td>
<td>服务名称</td>
</tr>
<tr>
<td>parameter</td>
<td>—</td>
<td>请求中的参数</td>
</tr>
<tr>
<td>config</td>
<td>—</td>
<td>服务配置</td>
</tr>
</tbody>
</table>
<p><strong>interceptors参数</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>可选值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>state</td>
<td>string</td>
<td>'error','success'</td>
<td>当前拦截器所在操作状态</td>
</tr>
<tr>
<td>arg</td>
<td>—</td>
<td>—</td>
<td>state为success时，request拦截器为其配置，response拦截器为相应结果 \n state为error时，表示错误信息</td>
</tr>
</tbody>
</table>
<h2 id="_10-常见问题" tabindex="-1"><a class="header-anchor" href="#_10-常见问题"><span>10. 常见问题</span></a></h2>
<p><strong>1. 缺少 @agree/ab-manager-codec、uuid 之类的包依赖报错</strong></p>
<p>报错内容：<br>
<code v-pre>Uncaught Error: Script error for &quot;uuid&quot;, needed by: @agree/ab-manager-service/dist/lib/utils</code><br>
<code v-pre>Uncaught Error: Script error for &quot;@agree/ab-manager-codec&quot;, needed by: @agree/ab-manager-service/dist/lib/service-manager</code></p>
<p>解决办法：<br>
安装 <code v-pre>@agree/ab-manager-codec</code>、<code v-pre>uuid</code> 即可。版本即为ab-manager-service/package.json里面dependencies写的对应版本</p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token function">npm</span> i @agree/ab-manager-codec@2.0.3</span>
<span class="line"><span class="token function">npm</span> i uuid@8.3.2</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><p>安装后如果还报错请检查工程TEClient下package.json里面的dependencies里是否有对应依赖的配置，如没有，则需要配置。如果配置了之后还报依赖uuid找不到需要去工程TEClient根目录下script文件夹下修改两个文件(如script下没有这两个文件，则代表已经配置好了)，具体为：<br>
<code v-pre>TEClient/script/build/settings/template-setting/require-config-setting/packages-setting.js</code> 里的<code v-pre>packagesSetting</code>中添加：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">"uuid"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">main</span><span class="token operator">:</span> <span class="token string">'dist/umd/uuid.min'</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>TEClient/script/build/settings/template-setting/require-config-setting/paths-setting.js</code>里的<code v-pre>modulesPathsSetting</code>中添加：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token string-property property">'uuid'</span><span class="token operator">:</span> <span class="token string">'../node_modules/uuid'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div></template>


