<template><div><h1 id="单画面交易模板" tabindex="-1"><a class="header-anchor" href="#单画面交易模板"><span>单画面交易模板</span></a></h1>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token comment">&lt;!--</span>
<span class="line">* @FileDescription: 该文件的描述信息</span>
<span class="line">* @Author: 作者信息</span>
<span class="line">* @Date: 文件创建时间</span>
<span class="line">* @LastEditors: 最后更新作者</span>
<span class="line">* @LastEditTime 2023-07-13 10:49:51</span>
<span class="line">--></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>app<span class="token punctuation">"</span></span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>div_1<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token comment">// 数据管理</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> DataManagerMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-data2'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'单文件交易模板'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'getContext'</span><span class="token punctuation">,</span> <span class="token string">'_parcelProps'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>DataManagerMixin<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span><span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 元素挂载前钩子函数</span></span>
<span class="line">    <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 元素挂载后钩子函数</span></span>
<span class="line">    <span class="token function">_onMounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// // 获取当前交易的 tradeId</span></span>
<span class="line">      <span class="token comment">// const tradeId = this.getContext().getTradeId();</span></span>
<span class="line">      <span class="token comment">// // 获取当前交易打开时所传入的参数</span></span>
<span class="line">      <span class="token comment">// const tradeImportVar = this.getContext().getTradeImportVar();</span></span>
<span class="line">      <span class="token comment">// // 设置当前交易关闭时的出参</span></span>
<span class="line">      <span class="token comment">// const tradeExportVar = this.getContext().setTradeExportVar({</span></span>
<span class="line">      <span class="token comment">//   data: '交易出参',</span></span>
<span class="line">      <span class="token comment">// });</span></span>
<span class="line">      <span class="token comment">// // 获取交易数据</span></span>
<span class="line">      <span class="token comment">// this._getModel('key');</span></span>
<span class="line">      <span class="token comment">// // 设置交易数据</span></span>
<span class="line">      <span class="token comment">// this._setModel('key', 'value');</span></span>
<span class="line">      <span class="token comment">// // 获取全局数据</span></span>
<span class="line">      <span class="token comment">// this._getGlobalModel('key');</span></span>
<span class="line">      <span class="token comment">// // 设置全局数据</span></span>
<span class="line">      <span class="token comment">// this._setGlobalModel('key', 'value');</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// 根据实际需求选择对应的函数进行处理</span></span>
<span class="line">    <span class="token comment">// // 页面销毁前钩子函数</span></span>
<span class="line">    <span class="token comment">// _onBeforeUnmount() {},</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// // 页面销毁后钩子函数</span></span>
<span class="line">    <span class="token comment">// _onUnmounted() {},</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// // 关闭交易前的钩子函数</span></span>
<span class="line">    <span class="token comment">// _onBeforeUnmountTrade() {},</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// // 关闭交易后的钩子函数</span></span>
<span class="line">    <span class="token comment">// _onUnmountedTrade() {},</span></span>
<span class="line"></span>
<span class="line">    <span class="token comment">// // 捕获交易内报错时,用户可对错误进行展示,err为错误对象</span></span>
<span class="line">    <span class="token comment">// _onErrorCaptured(err) {</span></span>
<span class="line">    <span class="token comment">//   console.log("err", err)</span></span>
<span class="line">    <span class="token comment">// },</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


