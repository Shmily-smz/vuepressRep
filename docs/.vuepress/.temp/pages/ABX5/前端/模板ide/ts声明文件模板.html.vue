<template><div><h1 id="ts-声明文件模板" tabindex="-1"><a class="header-anchor" href="#ts-声明文件模板"><span>ts 声明文件模板</span></a></h1>
<h2 id="平台声明文件" tabindex="-1"><a class="header-anchor" href="#平台声明文件"><span>平台声明文件</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FocusManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-focus2'</span></span>
<span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> <span class="token constant">DM</span><span class="token punctuation">,</span> <span class="token constant">SDM</span> <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'./Module'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"vue/types/vue"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Vue</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token comment">//平台级</span></span>
<span class="line">    focusManager<span class="token operator">:</span> <span class="token keyword">typeof</span> FocusManager</span>
<span class="line">    <span class="token function">_activeFocus</span><span class="token punctuation">(</span>arg<span class="token operator">?</span><span class="token operator">:</span> object<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    $aui<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 发送消息</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$sendMessage</span><span class="token punctuation">(</span>tranPath<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> isCache<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token punctuation">{</span> result<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> msg<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token punctuation">}</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>:获取交易入参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getTradeImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置交易出参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> exportVar 交易出参对象</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$putTradeExportVar</span><span class="token punctuation">(</span>exportVar<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 获取页面入参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getPanelImportVar</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置页面出参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$putPanelExportVar</span><span class="token punctuation">(</span>exportVar<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 获取当前交易打开targetId</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getTargetId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 获取sdm对象</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getSdmObject</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 获取dm对象</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getDmObject</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 交易数据区</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    dm<span class="token operator">:</span> <span class="token constant">DM</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 共享数据</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> name  共享数据分区名</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    sdm<span class="token operator">:</span> <span class="token constant">SDM</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 持久化数据</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    localData<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 重置sdm的值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$resetSDM</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 删除localData</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$removeLocalData</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 同步打开交易</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> url 交易vue路径,例'@/module/trade/test/test01.vue'</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> title 交易签页名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> targetId  交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> importVar 交易入参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> exportVar 交易出参</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$syncOpenTrade</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> targetId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> importVar<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> exportVar<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 异步打开交易</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> url 交易vue路径,例'@/module/trade/test/test01.vue'</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> title 交易签页名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> targetId  交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> importVar 交易入参</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$asyncOpenTrade</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> targetId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> importVar<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 异步打开交易</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> url 交易vue路径,例'@/module/trade/test/test01.vue'</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> title 交易签页名称</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> targetId 交易打开位置 customerPanel：对客视图 internalPanel：对内视图 window：弹窗</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> importVar 交易入参</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> options 画面参数</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$openPanel</span><span class="token punctuation">(</span>url<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> targetId<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> importVar<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> options<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 退出交易</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$exitTrade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 关闭画面</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$exitPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 获取一个traceId</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getTraceId</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>:</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">$getDomainPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span> debug方式输出日志</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">     * <span class="token keyword">@throws</span> 无</span>
<span class="line">     * <span class="token keyword">@returns</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">_debug</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> info方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_info</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> warn方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_warn</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> error方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_error</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> 获取交易数据</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">key</span></span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_getModel</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> 设置交易数据</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">key</span> val</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_setModel</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> 获取全局数据</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">key</span></span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_getGlobalModel</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> 设置全局数据</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">key</span> val</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">_setGlobalModel</span><span class="token punctuation">(</span>key<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue/types/options'</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">ComponentOptions<span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> Vue<span class="token operator">></span></span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 数据字典声明选项</span>
<span class="line">     */</span></span>
<span class="line">    metadata<span class="token operator">?</span><span class="token operator">:</span> <span class="token constant">METADATA</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 组件标签</span>
<span class="line">     */</span></span>
<span class="line">    _componentTag<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">METADATA</span></span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  caption<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">  globalArgs<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span></span>
<span class="line">  inArgs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  outArgs<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  outlets<span class="token operator">?</span><span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> global</span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Window</span></span>
<span class="line">  <span class="token punctuation">{</span></span>
<span class="line">    abx<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      Store<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      i18n<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      registry<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">        frameRegistry<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        tradeRegistry<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          tradesQueue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">          frameQueues<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">          destroyQueues<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        requiredResource<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        globalResource<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        preResource<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        modules<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">          trade<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">            __type__<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">            deps<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        externals<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">          __type__<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        resolver<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        rejecter<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        mountedModule<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">        loadedModule<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">        initializedProject<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">        notNeedCacheModule<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">      hooks<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      externalHooks<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      logModules<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">      interceptors<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      createTrade<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createPanel<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createNoFlowTradeAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createMultiTradeAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getTrade<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      destroyTrade<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      runtimeInitialize<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      setGlobalData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getGlobalData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      setTradeData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getTradeData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      loadAssets<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      convertGlobalData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      pageMixins<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      destroyAdjust<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getFileContentAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      interceptorsRequest<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      interceptorsResponse<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createFrame<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      registryEvent<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      removeEvent<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      registryEventCallback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      removeEventCallback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      dispatchCustomEvent<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      eventCallbackQueue<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      eventListenerQueue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">      eventCallback<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      openFrame<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createSubTradeAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      createSubTrade<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      destroySubTrade<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      subTradeQueue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">      dialogQueue<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span><span class="token punctuation">,</span></span>
<span class="line">      handleVue<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      flowSocket<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      platformError<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">        errorExecLogic<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        setErrorExecLogic<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">        getErrorExecLogic<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      getModuleEntryPath<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      mode<span class="token operator">:</span> String<span class="token punctuation">,</span></span>
<span class="line">      publicData<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      abxLoad<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      requirejs<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getResource<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      loadResource<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      abxInstall<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      abxImport<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getLoader<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      register<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      projectEnvRegister<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getArgsType<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      postAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getJsonDataAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      abxDynImport<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      mountedModule<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      resolveResourcePath<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      mixins<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      defaultMixins<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      handleSocketMessage<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getTradeModuleAsync<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      manifest<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">        dynParseRecords<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">        dependencies<span class="token operator">:</span> Object<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      devMode<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      prodMode<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      getAlias<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      getModuleName<span class="token operator">:</span> <span class="token builtin">Function</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">    loadPage<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">    loadPageData<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">    x5<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      launcher<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">        registerLauncherFn<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">        launcherFn<span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      getTradeModuleAsync<span class="token operator">:</span> <span class="token builtin">Function</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    utils<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">      getAbsolutePath<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">      isRelativePath<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">require</span><span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">    undefAll<span class="token operator">:</span> <span class="token builtin">Function</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="工程-ts-声明文件模板" tabindex="-1"><a class="header-anchor" href="#工程-ts-声明文件模板"><span>工程 ts 声明文件模板</span></a></h2>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">"vue"</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span></span>
<span class="line">  flowInterfaces<span class="token punctuation">,</span> ResultInfo<span class="token punctuation">,</span> AppInfo<span class="token punctuation">,</span> DeviceInfo<span class="token punctuation">,</span> LegalInfo</span>
<span class="line"><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'agree-public-client'</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 由开发人员自定义工程内的 info 接口实例</span></span>
<span class="line"><span class="token comment">// import { CommunResult } from "@Bank/pages/common/entities/commun-result"</span></span>
<span class="line"><span class="token comment">// import { UserInfo } from "@Bank/pages/common/entities/user-info"</span></span>
<span class="line"><span class="token comment">// import { BranchInfo } from '@Bank/pages/common/entities/branch-info'</span></span>
<span class="line"><span class="token comment">// import { CustomerInfo, AgentInfo } from '@Bank/pages/common/entities/customer-info'</span></span>
<span class="line"><span class="token comment">// import { QueueInfo } from "@Bank/pages/common/entities/queue-info"</span></span>
<span class="line"><span class="token comment">// import { MediaInfo } from '@Bank/pages/common/entities/media-info'</span></span>
<span class="line"><span class="token comment">// import { CurrentTrade } from "@Bank/pages/common/entities/current-trade"</span></span>
<span class="line"><span class="token comment">// import { AuthInfo } from "@Bank/pages/common/entities/auth-info"</span></span>
<span class="line"><span class="token comment">// import { CheckInfo } from "@Bank/pages/common/entities/check-info"</span></span>
<span class="line"><span class="token comment">// import { TradeRuleCodeInfo } from "@Bank/pages/common/entities/trade-rulecode-info"</span></span>
<span class="line"><span class="token comment">// import { CstCheckInfo, AgentCheckInfo } from "@Bank/pages/common/entities/cst-check-info"</span></span>
<span class="line"><span class="token comment">// import { DgCustomerInfo } from "@Bank/pages/common/entities/dg-customer-info"</span></span>
<span class="line"><span class="token comment">// import { TradeInfo, TradeSerialInfo } from '@BankUtil/trade-info'</span></span>
<span class="line"><span class="token comment">// import { DevGwqInfo } from '@Bank/pages/common/entities/dev-gwq-info'</span></span>
<span class="line"><span class="token comment">// import { EsbResult } from "@BankUtil/comm-utils"</span></span>
<span class="line"><span class="token comment">// import { UserHabit } from '@BankUtil/instance/instance'</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">type</span> <span class="token class-name">ShowType</span> <span class="token operator">=</span> <span class="token string">"success"</span> <span class="token operator">|</span> <span class="token string">"warning"</span> <span class="token operator">|</span> <span class="token string">"info"</span> <span class="token operator">|</span> <span class="token string">"error"</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">AlertParam</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">  * <span class="token keyword">@description</span>: 消息类型，用于显示图标</span>
<span class="line">  */</span></span>
<span class="line">  type<span class="token operator">?</span><span class="token operator">:</span> ShowType</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">  * <span class="token keyword">@description</span>: MessageBox 标题</span>
<span class="line">  */</span></span>
<span class="line">  title<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: MessageBox 是否显示右上角关闭按钮</span>
<span class="line">   */</span></span>
<span class="line">  showClose<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line"> * <span class="token keyword">@description</span>:是否可拖动（拖动触发在头部）</span>
<span class="line"> */</span></span>
<span class="line">  drag<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">  * <span class="token keyword">@description</span>:确认按钮文字</span>
<span class="line">  */</span></span>
<span class="line">  confirmButtonText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 是否将 content 属性作为 HTML 片段处理</span>
<span class="line">   */</span></span>
<span class="line">  dangerouslyUseHTMLString<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 是否可通过点击遮罩关闭 MessageBox</span>
<span class="line">   */</span></span>
<span class="line">  closeOnClickModal<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 是否在 hashchange 时关闭 MessageBox</span>
<span class="line">   */</span></span>
<span class="line">  closeOnHashChange<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>:是否可通过按下 ESC 键关闭 MessageBox</span>
<span class="line">   */</span></span>
<span class="line">  closeOnPressEscape<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token doc-comment comment">/**</span>
<span class="line">* <span class="token keyword">@description</span>: 轻提示以及侧边通知的参数</span>
<span class="line">*/</span></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">MessageParam</span> <span class="token punctuation">{</span></span>
<span class="line">  customClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 自定义图标的类名</span>
<span class="line">   */</span></span>
<span class="line">  iconClass<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>:  是否显示关闭按钮</span>
<span class="line">   */</span></span>
<span class="line">  showClose<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 是否将 content 属性作为 HTML 片段处理</span>
<span class="line">   */</span></span>
<span class="line">  dangerouslyUseHTMLString<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 显示时间, 毫秒。设为 0 则不会自动关闭</span>
<span class="line">   */</span></span>
<span class="line">  duration<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 文字是否居中</span>
<span class="line">   */</span></span>
<span class="line">  center<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 关闭时的回调函数</span>
<span class="line">   */</span></span>
<span class="line">  onClose<span class="token operator">?</span><span class="token operator">:</span> object</span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 距离窗口顶部的偏移量</span>
<span class="line">   */</span></span>
<span class="line">  offset<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">number</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">interface</span> <span class="token class-name">LoadParam</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 同 v-loading 指令中的 lock 修饰符</span>
<span class="line">   */</span></span>
<span class="line">  lock<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 显示在加载图标下方的加载文案</span>
<span class="line">   */</span></span>
<span class="line">  text<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 自定义加载图标类名</span>
<span class="line">   */</span></span>
<span class="line">  spinner<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: 遮罩背景色</span>
<span class="line">   */</span></span>
<span class="line">  background<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span></span>
<span class="line">  <span class="token doc-comment comment">/**</span>
<span class="line">   * <span class="token keyword">@description</span>: Loading 需要覆盖的 DOM 节点</span>
<span class="line">   */</span></span>
<span class="line">  target<span class="token operator">?</span><span class="token operator">:</span> HTMLElement <span class="token operator">|</span> <span class="token keyword">null</span> <span class="token operator">|</span> <span class="token keyword">undefined</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">"vue/types/vue"</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Vue</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">debug</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> info方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">info</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> warn方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">warn</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> error方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">error</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span> fatal方式输出日志</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token parameter">message</span> 输入的日志信息;自助系统中message[0] - 日志类型(流程、管理层、业务、硬件、通讯、交易)</span>
<span class="line">    * <span class="token keyword">@throws</span> 无</span>
<span class="line">    * <span class="token keyword">@returns</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">fatal</span><span class="token punctuation">(</span><span class="token operator">...</span>message<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token function">pushInfo</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> params<span class="token operator">?</span><span class="token operator">:</span> AlertParam<span class="token punctuation">,</span> <span class="token operator">...</span>i18nParam<span class="token operator">:</span> <span class="token punctuation">(</span><span class="token builtin">string</span> <span class="token operator">|</span> <span class="token keyword">undefined</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 双按钮弹出确认框</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> message</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> confirmButtonText</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> cancelButtonText</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>array<span class="token punctuation">}</span> param 弹窗参数</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>array<span class="token punctuation">}</span> i18nParam 国际化参数</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">pushConfirm</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> confirmButtonText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> cancelButtonText<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> param<span class="token operator">?</span><span class="token operator">:</span> AlertParam<span class="token punctuation">,</span> <span class="token operator">...</span>i18nParam<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 关闭弹窗提示</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Vue<span class="token punctuation">}</span> trade vue对象</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>Vue<span class="token punctuation">}</span> target 弹窗容器</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">hideMsgBox</span><span class="token punctuation">(</span>target<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 消息弹出框</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ShowType<span class="token punctuation">}</span> type 消息类型 "success"|"warning"|"info"|"error";</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> message 提示信息</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>MessageParm<span class="token punctuation">}</span> param 提示消息参数</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>array<span class="token punctuation">}</span> i18nParam 国际化参数</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">showMessage</span><span class="token punctuation">(</span>type<span class="token operator">:</span> ShowType<span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> param<span class="token operator">?</span><span class="token operator">:</span> MessageParam<span class="token punctuation">,</span> <span class="token operator">...</span>i18nParam<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 隐藏弹框</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> message 轻提示实例</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">hideMessage</span><span class="token punctuation">(</span>message<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * 多按钮提示框</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">message</span> 提示信息</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token parameter">btns</span> 按钮</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">pushMutiBtnInfo</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> btns<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">number</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 消息弹出框</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ShowType<span class="token punctuation">}</span> type 消息类型 "success"|"warning"|"info"|"error";</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ShowType<span class="token punctuation">}</span> title 标题</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> message 提示信息</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>MessageParm<span class="token punctuation">}</span> param 提示消息参数</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>array<span class="token punctuation">}</span> i18nParam 国际化参数</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">showNotification</span><span class="token punctuation">(</span>type<span class="token operator">:</span> ShowType<span class="token punctuation">,</span> title<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> param<span class="token operator">?</span><span class="token operator">:</span> MessageParam<span class="token punctuation">,</span> <span class="token operator">...</span>i18nParam<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line"></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 关闭侧边通知</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>ShowType<span class="token punctuation">}</span> notification 侧边通知实例</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">closeNotification</span><span class="token punctuation">(</span>notification<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 展示loading框</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>LoadParam<span class="token punctuation">}</span> param loading参数</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">showLoading</span><span class="token punctuation">(</span>param<span class="token operator">?</span><span class="token operator">:</span> LoadParam<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 隐藏Loading框</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">hideLoading</span><span class="token punctuation">(</span>loading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 无按钮提示框</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> message</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">pushInfoWithoutButton</span><span class="token punctuation">(</span>message<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 服务请求</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> serviceName 服务名称</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> data 请求数据</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowError 是否展示错误信息</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowLoading 是否展示loading</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>Promise&lt;CommunResult&lt;any>><span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">communication</span><span class="token punctuation">(</span>serviceName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> data<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> isShowError<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> isShowLoading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: esb服务请求</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> sendData 发送报文体</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> mapping 映射到报文体数据</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isAutoParseDm 映射到报文体数据</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowError 是否显示错误提示</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowLoading 是否显示loading</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">esbComm</span><span class="token punctuation">(</span>sendData<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> mapping<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> isAutoParseDm<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> isShowError<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> isShowLoading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: esb服务请求</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>any<span class="token punctuation">}</span> sendData 发送报文体</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> consmServCd afa服务码</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> consmSceneCd afa场景码</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowError 是否显示错误提示</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> isShowLoading 是否显示loading</span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">afaComm</span><span class="token punctuation">(</span>sendData<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span> consmServCd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> consmSceneCd<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> isShowError<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">,</span> isShowLoading<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置控件可用状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref 控件ref值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> val true/false</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setDisabled</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置控件可见状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref 控件ref值</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> val true/false</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setVisible</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 设置控件只读状态</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref 控件ref值</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> val true/false</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">setReadonly</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 设置控件必输状态</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref 控件ref值</span>
<span class="line">    * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean<span class="token punctuation">}</span> val true/false</span>
<span class="line">    * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">    */</span></span>
<span class="line">    <span class="token function">setRequisite</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量设置设置控件可用状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> refs 控件ref集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean | boolean[]<span class="token punctuation">}</span> val</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchSetDisabled</span><span class="token punctuation">(</span>refs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量设置设置控件可见状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> refs 控件ref集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean | boolean[]<span class="token punctuation">}</span> val</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchSetVisible</span><span class="token punctuation">(</span>refs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量设置设置控件必输状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> refs 控件ref集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean | boolean[]<span class="token punctuation">}</span> val</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchSetRequisite</span><span class="token punctuation">(</span>refs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量设置设置控件只读状态</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> refs 控件ref集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean | boolean[]<span class="token punctuation">}</span> val</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchSetReadonly</span><span class="token punctuation">(</span>refs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">|</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量执行控件方法</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> refs 控件ref集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> methods 控件方法集合</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>boolean[]<span class="token punctuation">}</span> val 控件状态值集合</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchExecutionControlMethod</span><span class="token punctuation">(</span>refs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> methods<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> val<span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 批量清空表达式 只适用于字符串类型</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string[]<span class="token punctuation">}</span> exprs 表达式数组 ['dm.xx1','dm.xxx2','pp']</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">batchClearValue</span><span class="token punctuation">(</span>exprs<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 移动焦点</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref  焦点ref</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> childRef?  子组件获取焦点ref</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setFocus</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> childRef<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置贪婪焦点</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> ref  焦点ref</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> childRef?  子组件贪婪焦点ref</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setGreedy</span><span class="token punctuation">(</span>ref<span class="token operator">:</span> <span class="token builtin">string</span> <span class="token operator">|</span> <span class="token builtin">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> childRef<span class="token operator">?</span><span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 判断运行环境</span>
<span class="line">     * <span class="token keyword">@param</span> <span class="token punctuation">{</span>string<span class="token punctuation">}</span> true:柜面/新创/移动柜面柜面模式 false:移动柜面调试 pad</span>
<span class="line">     * <span class="token keyword">@return</span> <span class="token punctuation">{</span>*<span class="token punctuation">}</span></span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">getEnvironment</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">    * <span class="token keyword">@description</span>: 交易流程</span>
<span class="line">    */</span></span>
<span class="line">    Trade<span class="token operator">:</span> flowInterfaces<span class="token punctuation">.</span>Trade</span>
<span class="line">    <span class="token function">tradeInit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span></span>
<span class="line">    <span class="token function">tradePreSubmit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResultInfo<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">>></span></span>
<span class="line">    <span class="token function">tradeComm</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResultInfo<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">>></span></span>
<span class="line">    <span class="token function">tradeAfterPrint</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResultInfo<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">>></span></span>
<span class="line">    <span class="token function">tradePreQuery</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Promise</span><span class="token operator">&lt;</span>ResultInfo<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">>></span></span>
<span class="line">    <span class="token function">getTradeQueryCondData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token function">openSelectTableColExport</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token function">getPrintData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token function">_getTradeData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token function">batchGetInputData</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">Array</span><span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">></span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">Element</span> <span class="token punctuation">{</span></span>
<span class="line">    style<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">;</span></span>
<span class="line">    cloneNode<span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 设置悬浮提示</span>
<span class="line">     * <span class="token keyword">@type</span>:</span>
<span class="line">     */</span></span>
<span class="line">    <span class="token function">setPopover</span><span class="token punctuation">(</span>popoverTitle<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span> popoverContent<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">declare</span> <span class="token keyword">module</span> <span class="token string">'vue/types/options'</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">interface</span> <span class="token class-name">ComponentOptions<span class="token operator">&lt;</span><span class="token constant">V</span> <span class="token keyword">extends</span> Vue<span class="token operator">></span></span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token doc-comment comment">/**</span>
<span class="line">     * <span class="token keyword">@description</span>: 组件类型 项目级组件使用此选项 part:片段级组件(多输入域组件基于原子组件和fc组件封装) atom:原子组件(单输入域组件基于fc封装)</span>
<span class="line">     */</span></span>
<span class="line">    type<span class="token operator">?</span><span class="token operator">:</span> <span class="token string">'part'</span> <span class="token operator">|</span> <span class="token string">'atom'</span> <span class="token operator">|</span> <span class="token string">'container'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">SDM</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>propname<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span></span>
<span class="line">  AppInfo<span class="token operator">:</span> AppInfo</span>
<span class="line">  <span class="token comment">// BranchInfo: BranchInfo</span></span>
<span class="line">  DeviceInfo<span class="token operator">:</span> DeviceInfo</span>
<span class="line">  LegalInfo<span class="token operator">:</span> LegalInfo</span>
<span class="line">  <span class="token comment">// UserInfo: UserInfo</span></span>
<span class="line">  <span class="token comment">// QueueInfo: QueueInfo,</span></span>
<span class="line">  <span class="token comment">// AgentInfo: AgentInfo,</span></span>
<span class="line">  <span class="token comment">// CustomerInfo: CustomerInfo,</span></span>
<span class="line">  <span class="token comment">// DgCustomerInfo: DgCustomerInfo,</span></span>
<span class="line">  <span class="token comment">// MediaInfo: MediaInfo,</span></span>
<span class="line">  <span class="token comment">// CurrentTrade: CurrentTrade,</span></span>
<span class="line">  <span class="token comment">// TradeSerialInfo: TradeSerialInfo,</span></span>
<span class="line">  <span class="token comment">// CstCheckInfo: CstCheckInfo,</span></span>
<span class="line">  <span class="token comment">// AgentCheckInfo: AgentCheckInfo,</span></span>
<span class="line">  <span class="token comment">// TransferCheckInfo: TransferCheckInfo,</span></span>
<span class="line">  <span class="token comment">// OtherCheckInfo: OtherCheckInfo,</span></span>
<span class="line">  <span class="token comment">// DevGwqInfo: DevGwqInfo,</span></span>
<span class="line">  <span class="token comment">// UserHabit: UserHabit,</span></span>
<span class="line">  <span class="token comment">// TradeInfo: TradeInfo</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name"><span class="token constant">DM</span></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token punctuation">[</span>propName<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">]</span><span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">  __OpenType__<span class="token operator">:</span> <span class="token builtin">string</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">// __TradeInfo__: TradeInfo,</span></span>
<span class="line">  <span class="token comment">// __TradeSerialInfo__: TradeSerialInfo,</span></span>
<span class="line">  <span class="token comment">// __CheckInfo__: CheckInfo,</span></span>
<span class="line">  <span class="token comment">// __AuthInfo__: AuthInfo,</span></span>
<span class="line">  __ScreenShow__<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">  __TaskInfo__<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">  __PubDataMapping__<span class="token operator">:</span> <span class="token builtin">any</span><span class="token punctuation">,</span></span>
<span class="line">  canSetSDM<span class="token operator">:</span> <span class="token builtin">boolean</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


