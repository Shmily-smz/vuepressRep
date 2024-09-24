<template><div><h1 id="全局文件模板" tabindex="-1"><a class="header-anchor" href="#全局文件模板"><span>全局文件模板</span></a></h1>
<h2 id="全局函数模板-index-js" tabindex="-1"><a class="header-anchor" href="#全局函数模板-index-js"><span>全局函数模板(index.js)</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">* @FileDescription: 该文件的描述信息</span>
<span class="line">* @Author: 作者信息</span>
<span class="line">* @Date: 文件创建时间</span>
<span class="line">* @LastEditors: 最后更新作者</span>
<span class="line">* @LastEditTime 2023-07-13 10:49:08</span>
<span class="line">*/</span></span>
<span class="line"><span class="token comment">// 工程自定义的请求中遮罩</span></span>
<span class="line"><span class="token comment">// import HttpDialog from 'DemoModule/pages/HttpDialog.vue'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">handleHostGlobalData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostGlobalData<span class="token punctuation">,</span> setGlobalData<span class="token punctuation">,</span> setResponseMask<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 设置请求遮罩</span></span>
<span class="line">    <span class="token comment">// setResponseMask({</span></span>
<span class="line">    <span class="token comment">//   isCreateMask: true,</span></span>
<span class="line">    <span class="token comment">//   // 发送http请求时,打开http遮罩</span></span>
<span class="line">    <span class="token comment">//   openHTTPMask: function (elementID:string) {</span></span>
<span class="line">    <span class="token comment">//     const h = this.$createElement</span></span>
<span class="line">    <span class="token comment">//     const target = document.getElementById(elementID)</span></span>
<span class="line">    <span class="token comment">//     const loading = this.$aui.loading.show({</span></span>
<span class="line">    <span class="token comment">//       background: 'rgba(255, 255, 255, 0)',</span></span>
<span class="line">    <span class="token comment">//       instance: this,</span></span>
<span class="line">    <span class="token comment">//       // HttpDialog 即工程自定义的请求中遮罩</span></span>
<span class="line">    <span class="token comment">//       component: h(window.abx.handleVue(HttpDialog, this, {</span></span>
<span class="line">    <span class="token comment">//         classify: 'http',</span></span>
<span class="line">    <span class="token comment">//       })),</span></span>
<span class="line">    <span class="token comment">//       target,</span></span>
<span class="line">    <span class="token comment">//     })</span></span>
<span class="line">    <span class="token comment">//     return loading</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   // 请求完成后,关闭http遮罩</span></span>
<span class="line">    <span class="token comment">//   closeHTTPMask: function (loading:any) {</span></span>
<span class="line">    <span class="token comment">//     loading.close()</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   // 发送bpmn流程请求时,打开message遮罩</span></span>
<span class="line">    <span class="token comment">//   openMessageMask: function (elementID:string, exist:boolean, timeoutCallback:Function, timeout:number) {</span></span>
<span class="line">    <span class="token comment">//     const h = this.$createElement</span></span>
<span class="line">    <span class="token comment">//     const target = document.getElementById(elementID)</span></span>
<span class="line">    <span class="token comment">//     const loading = this.$aui.loading.show({</span></span>
<span class="line">    <span class="token comment">//       background: 'rgba(255, 255, 255, 0)',</span></span>
<span class="line">    <span class="token comment">//       instance: this,</span></span>
<span class="line">    <span class="token comment">//       // HttpDialog 即工程自定义的请求中遮罩</span></span>
<span class="line">    <span class="token comment">//       component: h(</span></span>
<span class="line">    <span class="token comment">//         window.abx.handleVue(HttpDialog, this, {</span></span>
<span class="line">    <span class="token comment">//           classify: 'message',</span></span>
<span class="line">    <span class="token comment">//           _exist: exist,</span></span>
<span class="line">    <span class="token comment">//           _timeoutCallback: timeoutCallback,</span></span>
<span class="line">    <span class="token comment">//           _elementID: elementID,</span></span>
<span class="line">    <span class="token comment">//           _timeout: timeout,</span></span>
<span class="line">    <span class="token comment">//         })</span></span>
<span class="line">    <span class="token comment">//       ),</span></span>
<span class="line">    <span class="token comment">//       target,</span></span>
<span class="line">    <span class="token comment">//     })</span></span>
<span class="line">    <span class="token comment">//     return loading</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">//   // 服务端推送bpmn流程数据后,关闭message遮罩</span></span>
<span class="line">    <span class="token comment">//   closeMessageMask: function (loading) {</span></span>
<span class="line">    <span class="token comment">//     loading.close()</span></span>
<span class="line">    <span class="token comment">//   },</span></span>
<span class="line">    <span class="token comment">// })</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 允许开发人员对打开交易的数据进行其他操作</span></span>
<span class="line">  <span class="token function">handleHostTradeData</span><span class="token punctuation">(</span><span class="token punctuation">{</span> hostTradeData<span class="token punctuation">,</span> setTradeData<span class="token punctuation">,</span> setTradeHeader<span class="token punctuation">,</span> setRequestInfo<span class="token punctuation">,</span> <span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">const</span> data <span class="token operator">=</span> <span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">parse</span><span class="token punctuation">(</span>hostTradeData<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 设置交易请求体</span></span>
<span class="line">    <span class="token function">setTradeData</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>交易请求体<span class="token punctuation">)</span></span>
<span class="line">    <span class="token comment">// 设置交易请求头</span></span>
<span class="line">    <span class="token function">setTradeHeader</span><span class="token punctuation">(</span>data<span class="token punctuation">.</span>交易请求头<span class="token punctuation">)</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// 根据实际需求选择对应的函数进行处理</span></span>
<span class="line">  <span class="token comment">// // 重置默认的关闭提示框</span></span>
<span class="line">  <span class="token comment">// defaultClosingTip() {},</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 重置默认的遮照提示</span></span>
<span class="line">  <span class="token comment">// defaultMaskTip() {},</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 设置 bpmn 交易的全局模版</span></span>
<span class="line">  <span class="token comment">// setDefaultFrame() {</span></span>
<span class="line">  <span class="token comment">//   // 返回全局模板相对路径,如: "BankModule/pages/基础布局.vue"</span></span>
<span class="line">  <span class="token comment">//   return ""</span></span>
<span class="line">  <span class="token comment">// },</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 执行出错后由开发人员对错误进行处理</span></span>
<span class="line">  <span class="token comment">// _onErrorCaptured(err) {</span></span>
<span class="line">  <span class="token comment">//   console.log(`err: ${err}`)</span></span>
<span class="line">  <span class="token comment">// },</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 交易打开前的钩子函数</span></span>
<span class="line">  <span class="token comment">// _onBeforeMountTrade(args) {},</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 交易打开后的钩子函数</span></span>
<span class="line">  <span class="token comment">// _onMountedTrade(args) {},</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 交易销毁前的钩子函数</span></span>
<span class="line">  <span class="token comment">// _onBeforeUnmountTrade(args) {},</span></span>
<span class="line"></span>
<span class="line">  <span class="token comment">// // 交易销毁后的钩子函数</span></span>
<span class="line">  <span class="token comment">// _onUnmountedTrade(args) {},</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="index-scss-文件" tabindex="-1"><a class="header-anchor" href="#index-scss-文件"><span>index.scss 文件</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div></div></template>


