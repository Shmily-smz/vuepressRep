<template><div><h1 id="abx-core" tabindex="-1"><a class="header-anchor" href="#abx-core"><span>abx-core</span></a></h1>
<h2 id="_1-生命周期函数" tabindex="-1"><a class="header-anchor" href="#_1-生命周期函数"><span>1. 生命周期函数</span></a></h2>
<p>全局级
模块级别
交易级
画面级</p>
<p>onGlobalMessage</p>
<p>// C 端
beforeClosePage
afterClosedPage</p>
<p>isPageInsideMsg:此字段为服务端返回，用来区分下发的 socket 消息是属于渲染画面的，还是仅仅是交易内部的一段数据；此字段的应用仅在交易级别</p>
<p>onSocketMessage：
executeAsync：.js/.ts 文件，如果服务端返回的为逻辑文件，则会默认查找当前文件的 executeAsync 方法，传入参数并执行</p>
<p>// 梳理执行顺序</p>
<h3 id="_1-1-创建" tabindex="-1"><a class="header-anchor" href="#_1-1-创建"><span>1.1 创建</span></a></h3>
<p>[hooks][globalhooks][beforeUpdatePage][hooks] [TradeHooks][beforeupdatepage]</p>
<p>[hooks][basicpage][beforeCreateFrame][hooks] [GlobalFrameHooks][beforecreateframe] // 此处的执行顺序有问题</p>
<p>[hooks][basicpage][onCreated][hooks] [BasicPage][aftercreatedframe]</p>
<p>[hooks][globalframehooks][afterCreatedFrame][hooks] [BasicPage][beforemountframe]</p>
<p>[hooks][globalframehooks][beforeMountFrame][hooks] [BasicPage][beforecreatepage]
[hooks][globalpagehooks][beforeCreatePage]</p>
<p>[hooks][basicpage][onCreated][hooks] [FramePageHooks][basicpage][onCreated][hooks] [BasicPage][aftercreatedpage]
[hooks][basicpage][afterCreatedPage][hooks] [BasicPage][beforemountpage]
[hooks][globalpagehooks][beforeMountPage][hooks] [BasicPage][onmounted]</p>
<p>[hooks][basicpage][afterMountedPage][hooks] [GlobalPageHooks][aftermountedpage]
[hooks][basicpage][onMounted][模板][onMounted][hooks] [BasicPage][aftermountedframe]
[hooks][globalframehooks][afterMountedFrame][hooks] [TradeHooks][afterupdatedpage]
[hooks][globalhooks][afterUpdatedPage]</p>
<h3 id="_1-2-销毁" tabindex="-1"><a class="header-anchor" href="#_1-2-销毁"><span>1.2 销毁</span></a></h3>
<p>[hooks][basicpage][beforeDestroyFrame][hooks] [GlobalFrameHooks][beforedestroyframe]
[hooks][basicpage][beforeDestroyPage][hooks] [GlobalPageHooks][beforedestroypage]
[hooks][basicpage][onDestroy][hooks] [FramePageHooks][basicpage][onDestroy][hooks] [BasicPage][afterdestroyedpage]
[hooks][globalpagehooks][afterDestroyedPage][hooks] [BasicPage][ondestroy]
[模板][页面销毁]
[hooks][basicpage][afterDestroyedFrame][hooks] [GlobalFrameHooks][afterdestroyedframe]
[afterAbortedTrade][frame]</p>
<p>所以钩子函数的执行是异步，到达某个时机就会触发，即使上一个钩子函数没有完成也不关系，只关心当前的时机要确保钩子函数被执行即可</p>
<p>// onCreated onMounted : page frame 以及 vue 原本的
1 先看下 vue 本身的执行顺序是否异步 // 异步
2 frame 和 page 的顺序：这个顺序不可以修改，确定后就要按照平台提供的顺序执行</p>
<p>frame:onCreated:args: 服务端的参数
page:onCreated: args: 服务端的参数
page:onMounted
frame:onMounted
onDestroy： 先执行 page 然后执行 frame</p>
<p>和 vue 原生的周期函数相比，执行顺序:
mixins 优先执行
// 钩子函数需要的参数
// 平台的默认处理: 不需要处理
错误处理：不用处理，用户自行处理，只需要进行记录即可</p>
<h2 id="_2-callpredopost" tabindex="-1"><a class="header-anchor" href="#_2-callpredopost"><span>2. callPreDoPost</span></a></h2>
<blockquote>
<p>触发事件，并执行交易画面或框架画面内对应的事件方法。</p>
</blockquote>
<h3 id="_2-1-参数" tabindex="-1"><a class="header-anchor" href="#_2-1-参数"><span>2.1 <strong>参数:</strong></span></a></h3>
<ul>
<li>{string} name，触发的事件名称</li>
<li>{any} task，需要传递给 do 方法的参数</li>
</ul>
<h3 id="_2-2-示例" tabindex="-1"><a class="header-anchor" href="#_2-2-示例"><span>2.2 <strong>示例:</strong></span></a></h3>
<blockquote>
<p>事件对应的 pre、post 及 onError 方法非必须方法，根据需求进行添加。</p>
</blockquote>
<div class="language-html line-numbers-mode" data-highlighter="prismjs" data-ext="html" data-title="html"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>callPreDoPost('commit', task)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>提交<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">preCommit</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[当前执行方法为][preCommit]"</span><span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">preCommitRes</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">task</span> > callPreDoPost('commit', task) 调用时的第二个参数 task</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">preRes</span> > preCommit 方法执行完成后的返回值</span>
<span class="line">  */</span></span>
<span class="line">  <span class="token function">doCommit</span><span class="token punctuation">(</span><span class="token parameter">task<span class="token punctuation">,</span> preRes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[当前执行方法为][doCommit]"</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[doCommit][task]"</span><span class="token punctuation">,</span> task<span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[doCommit][preRes]"</span><span class="token punctuation">,</span> preRes<span class="token punctuation">)</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">doCommitRes</span><span class="token operator">:</span> <span class="token boolean">true</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@param</span> <span class="token class-name"><span class="token punctuation">{</span>any<span class="token punctuation">}</span></span> <span class="token parameter">doRes</span> > doCommit 方法执行完成后的返回值</span>
<span class="line">  */</span></span>
<span class="line">  <span class="token function">postCommit</span><span class="token punctuation">(</span><span class="token parameter">doRes</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[当前执行方法为][postCommit]"</span><span class="token punctuation">)</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[postCommit][doRes]"</span><span class="token punctuation">,</span> doRes<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">onCommitError</span><span class="token punctuation">(</span><span class="token parameter">err</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"[callPreDoPost][onCommitError]"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_2-3-返回值" tabindex="-1"><a class="header-anchor" href="#_2-3-返回值"><span>2.3 <strong>返回值:</strong></span></a></h3>
<p>无</p>
</div></template>


