<template><div><h1 id="app-loader模板文件" tabindex="-1"><a class="header-anchor" href="#app-loader模板文件"><span>app-loader模板文件</span></a></h1>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">/*</span>
<span class="line">* @FileDescription: 该文件的描述信息</span>
<span class="line">* @Author: 作者信息</span>
<span class="line">* @Date: 文件创建时间</span>
<span class="line">* @LastEditors: 最后更新作者</span>
<span class="line">* @LastEditTime 2023-07-13 09:50:29</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> preDataHandler <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-data2'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 仅对全局数据做限定</span></span>
<span class="line"><span class="token function">preDataHandler</span><span class="token punctuation">(</span><span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 声明后的数据名称</span></span>
<span class="line">    model<span class="token operator">:</span> <span class="token string">'全局数据'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 要初始化的数据模型</span></span>
<span class="line">    path<span class="token operator">:</span> <span class="token string">'全局数据.adm'</span><span class="token punctuation">,</span></span>
<span class="line">    context<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 工程名</span></span>
<span class="line">      moduleName<span class="token operator">:</span> <span class="token string">'DemoModule'</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">]</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化交易配置</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initTradeConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 可重复打开的交易列表</span></span>
<span class="line">  canRepeatList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// auf 交易的配置</span></span>
<span class="line">  auf<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//aufSDK具体参数可参考[ab-manager-auf文档](../../sdk/ab-manager-auf.md)</span></span>
<span class="line">    $aufAlias<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//auf需要的别名</span></span>
<span class="line">    $canRightClickDirective<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//控制右键菜单显示</span></span>
<span class="line">    $isConsoleLog<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//是否在控制台打印log,默认为true</span></span>
<span class="line">    <span class="token function-variable function">$callback</span><span class="token operator">:</span> <span class="token punctuation">(</span>log<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">//打印日志的回调函数,log为当前返回的信息</span></span>
<span class="line">    $stepTimeout<span class="token operator">:</span> <span class="token number">10000</span><span class="token punctuation">,</span> <span class="token comment">//步进式loadUId的timeout,不设置默认10000</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化 SDM、DM 数据配置</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initDataConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 数据大小限制</span></span>
<span class="line">  sizeLimit<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    sdm<span class="token operator">:</span> <span class="token number">2048000</span><span class="token punctuation">,</span></span>
<span class="line">    dm<span class="token operator">:</span> <span class="token number">4096000</span><span class="token punctuation">,</span></span>
<span class="line">    localData<span class="token operator">:</span> <span class="token number">3145728</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 共享数据模型</span></span>
<span class="line">  sharedDataModels<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// SDM 数据记录到 sessionStorage 的列表</span></span>
<span class="line">  SDMToSessionStorageList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// 数据初始话数据</span></span>
<span class="line">  dataInitialization<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 初始化 aui 组件库配置</span></span>
<span class="line">window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">initAuiConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// 引入的组件库类型 aui-web为柜面组件库 aui-m为移动组件库</span></span>
<span class="line">  name<span class="token operator">:</span> <span class="token string">'aui-web'</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


