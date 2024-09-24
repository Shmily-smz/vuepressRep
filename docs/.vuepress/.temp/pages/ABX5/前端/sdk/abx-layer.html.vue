<template><div><h1 id="abx-layer" tabindex="-1"><a class="header-anchor" href="#abx-layer"><span>abx-layer</span></a></h1>
<blockquote>
<p>abx 内各处需要显示信息的弹窗处理</p>
</blockquote>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 若已加载 abx 资源,则无需引入,直接使用即可.</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'abx-layer'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-showerror" tabindex="-1"><a class="header-anchor" href="#_2-1-showerror"><span>2.1 showError</span></a></h3>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 错误信息</li>
<li><em>retry(Function)</em>: 重试所执行的方法</li>
<li><em>cancel(Function)</em>: 关闭所执行的方法</li>
<li><em>cancelText(String)</em>: 关闭按钮内的文字</li>
<li><em>retryText(String)</em>: 重试按钮内的文字</li>
<li><em>titleText(String)</em>: 弹窗主题内容</li>
<li><em>id(String)</em>: 唯一的<code v-pre>id</code></li>
<li><em>updatedCallback(Boolean)</em>: 是否更新按钮绑定事件</li>
</ol>
<p><strong>返回值</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接通过 window.abx.layer 来进行调用</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">showError</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">  message<span class="token punctuation">,</span> </span>
<span class="line">  retry<span class="token punctuation">,</span> </span>
<span class="line">  cancel<span class="token punctuation">,</span> </span>
<span class="line">  cancelText<span class="token punctuation">,</span> </span>
<span class="line">  retryText<span class="token punctuation">,</span> </span>
<span class="line">  titleText<span class="token punctuation">,</span> </span>
<span class="line">  id<span class="token punctuation">,</span> </span>
<span class="line">  updatedCallback<span class="token punctuation">,</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-2-showerrormobile" tabindex="-1"><a class="header-anchor" href="#_2-2-showerrormobile"><span>2.2 showErrorMobile</span></a></h3>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 错误信息</li>
<li><em>retry(Function)</em>: 重试所执行的方法</li>
<li><em>cancel(Function)</em>: 关闭所执行的方法</li>
<li><em>cancelText(String)</em>: 关闭按钮内的文字</li>
<li><em>retryText(String)</em>: 重试按钮内的文字</li>
<li><em>titleText(String)</em>: 弹窗主题内容</li>
<li><em>id(String)</em>: 唯一的<code v-pre>id</code></li>
<li><em>updatedCallback(Boolean)</em>: 是否更新按钮绑定事件</li>
</ol>
<p><strong>返回值</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接通过 window.abx.layer 来进行调用</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">showErrorMobile</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">  message<span class="token punctuation">,</span> </span>
<span class="line">  retry<span class="token punctuation">,</span> </span>
<span class="line">  cancel<span class="token punctuation">,</span> </span>
<span class="line">  cancelText<span class="token punctuation">,</span> </span>
<span class="line">  retryText<span class="token punctuation">,</span> </span>
<span class="line">  titleText<span class="token punctuation">,</span> </span>
<span class="line">  id<span class="token punctuation">,</span> </span>
<span class="line">  updatedCallback<span class="token punctuation">,</span> </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| message | 错误信息 | string |
| retry | 重试所执行的方法 | function |
| cancel | 关闭所执行的方法 | function |
| cancelText | 关闭按钮内的文字 | string |
| retryText | 重试按钮内的文字 | string |
| titleText | 弹窗主题内容 | string |
| id | 唯一的 id | string |
| updatedCallback | 是否更新按钮绑定事件 | boolean | -->
<h3 id="_2-3-tipinfo" tabindex="-1"><a class="header-anchor" href="#_2-3-tipinfo"><span>2.3 tipInfo</span></a></h3>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 提示信息</li>
<li><em>close(Function)</em>: 关闭弹窗时执行的方法</li>
<li><em>buttonText(String)</em>: 按钮内的文字</li>
<li><em>titleText(String)</em>: 弹窗主题内容</li>
<li><em>id(String)</em>: 唯一的<code v-pre>id</code></li>
</ol>
<p><strong>返回值</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接通过 window.abx.layer 来进行调用</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">tipInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">  message<span class="token punctuation">,</span> </span>
<span class="line">  close<span class="token punctuation">,</span> </span>
<span class="line">  buttonText<span class="token punctuation">,</span> </span>
<span class="line">  titleText<span class="token punctuation">,</span> </span>
<span class="line">  id </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-4-tipinfomobile" tabindex="-1"><a class="header-anchor" href="#_2-4-tipinfomobile"><span>2.4 tipInfoMobile</span></a></h3>
<p><strong>参数</strong></p>
<ol>
<li><em>message(String)</em>: 提示信息</li>
<li><em>close(Function)</em>: 关闭弹窗时执行的方法</li>
<li><em>buttonText(String)</em>: 按钮内的文字</li>
<li><em>titleText(String)</em>: 弹窗主题内容</li>
<li><em>id(String)</em>: 唯一的<code v-pre>id</code></li>
</ol>
<p><strong>返回值</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接通过 window.abx.layer 来进行调用</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">tipInfo</span><span class="token punctuation">(</span><span class="token punctuation">{</span> </span>
<span class="line">  message<span class="token punctuation">,</span> </span>
<span class="line">  close<span class="token punctuation">,</span> </span>
<span class="line">  buttonText<span class="token punctuation">,</span> </span>
<span class="line">  titleText<span class="token punctuation">,</span> </span>
<span class="line">  id </span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><!-- | 参数 | 说明 | 类型 |
| --- | --- | --- |
| message | 提示信息 | string |
| close | 关闭弹窗时执行的方法 | function |
| buttonText | 按钮内的文字 | string |
| titleText | 弹窗主题内容 | string |
| id | 唯一的 id | string | -->
<h3 id="_2-5-loadingmobile" tabindex="-1"><a class="header-anchor" href="#_2-5-loadingmobile"><span>2.5 loadingMobile</span></a></h3>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回值</strong></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 直接通过 window.abx.layer 来进行调用</span></span>
<span class="line"><span class="token comment">// 移动端加载中弹窗</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span>layer<span class="token punctuation">.</span><span class="token function">loadingMobile</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


