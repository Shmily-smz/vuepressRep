<template><div><h1 id="交易流程-交易流程" tabindex="-1"><a class="header-anchor" href="#交易流程-交易流程"><span>交易流程 {#交易流程}</span></a></h1>
<p>介绍交易流程及涉及到的<code v-pre>API</code>使用方式</p>
<h2 id="流程上下文" tabindex="-1"><a class="header-anchor" href="#流程上下文"><span>流程上下文</span></a></h2>
<ul>
<li>bpmn 交易</li>
</ul>
<p><code v-pre>bpmn</code> 交易的流程上下文是当前交易每进行一步时,服务端推送的 <code v-pre>socket</code> 消息,该消息包含:</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">const</span> socketArgs <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  isPageInsideMsg<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否为页面内消息</span></span>
<span class="line">  data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    router<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      commitTerminal<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">      pity<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      processTerminal<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">      resetFlag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      skipFlag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      stepKey<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">      stepName<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token constant">ID</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        pageId<span class="token operator">:</span> <span class="token string">"/BankModule/scene/bpmn交易/测试交易三/步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">        moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">        tradeName<span class="token operator">:</span> <span class="token string">"scene/bpmn交易/测试交易三"</span><span class="token punctuation">,</span></span>
<span class="line">        stepKey<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">        terminal<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    meta<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      branchNum<span class="token operator">:</span> <span class="token string">"0000"</span><span class="token punctuation">,</span></span>
<span class="line">      checkOidFlag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      currentDefinitionKey<span class="token operator">:</span> <span class="token string">"BankModule:scene/bpmn交易/测试交易三"</span><span class="token punctuation">,</span></span>
<span class="line">      end<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否完成</span></span>
<span class="line">      jumpFlag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">      nextStep<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        commitTerminal<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">        pity<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        processTerminal<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">        resetFlag<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">        skipFlag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">        stepKey<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">        stepName<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      oid<span class="token operator">:</span> <span class="token string">"MMS_Oid_chen2222"</span><span class="token punctuation">,</span></span>
<span class="line">      replay<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      retryStepFlag<span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">      sessionID<span class="token operator">:</span> <span class="token string">"ba0bbb0c-bc86-4cac-bcfe-6ef1db33d218"</span><span class="token punctuation">,</span></span>
<span class="line">      stepKey<span class="token operator">:</span> <span class="token string">"步骤一_focus"</span><span class="token punctuation">,</span></span>
<span class="line">      taskId<span class="token operator">:</span> <span class="token string">"4707"</span><span class="token punctuation">,</span></span>
<span class="line">      taskKey<span class="token operator">:</span> <span class="token string">"BankModule:scene/bpmn交易/测试交易三/步骤一"</span><span class="token punctuation">,</span></span>
<span class="line">      taskName<span class="token operator">:</span> <span class="token string">"步骤一"</span><span class="token punctuation">,</span></span>
<span class="line">      tradeMember<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token string-property property">"1111"</span><span class="token operator">:</span> <span class="token string">"C"</span><span class="token punctuation">,</span></span>
<span class="line">        MMS_Oid_chen2222<span class="token operator">:</span> <span class="token string">"A"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      tradeName<span class="token operator">:</span> <span class="token string">"scene/bpmn交易/测试交易三"</span><span class="token punctuation">,</span></span>
<span class="line">      tradeTitle<span class="token operator">:</span> <span class="token string">"bpmn交易/测试交易三"</span><span class="token punctuation">,</span></span>
<span class="line">      userNum<span class="token operator">:</span> <span class="token string">"000000"</span><span class="token punctuation">,</span></span>
<span class="line">      variableJson<span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    context<span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易的交易数据</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  pathInfoList<span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token comment">// 当前交易内所有的流程节点</span></span>
<span class="line">  aaseMessageId<span class="token operator">:</span> <span class="token string">"27cb0bdb-0783-4620-a2f4-8b25ddf00d30"</span><span class="token punctuation">,</span></span>
<span class="line">  reqUniqueId<span class="token operator">:</span> <span class="token string">"parcel-5"</span><span class="token punctuation">,</span> <span class="token comment">// 保证交易唯一的 ID</span></span>
<span class="line">  cellUnit<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 当前的客户端标识</span></span>
<span class="line">  sessionErrorInfo<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 当前步骤的错误信息</span></span>
<span class="line">    errorHandleWay<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      退出<span class="token operator">:</span> <span class="token string">"/exitProcess"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    errorCode<span class="token operator">:</span> <span class="token string">"0000"</span><span class="token punctuation">,</span></span>
<span class="line">    errorMsg<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">    isSuccess<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  type<span class="token operator">:</span> <span class="token string">"wspush"</span><span class="token punctuation">,</span> <span class="token comment">// 消息类型</span></span>
<span class="line">  msgId<span class="token operator">:</span> <span class="token string">"ec25859e-9976-42f2-b590-f9a357974d00"</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%A8%A1%E6%9D%BFide/bpmn%E4%BA%A4%E6%98%93%E7%9B%B8%E5%85%B3%E6%A8%A1%E6%9D%BF.html#frame%E8%AF%B4%E6%98%8E"><code v-pre>frame模板说明</code></RouteLink>内已表明 <code v-pre>frame</code> 用以串联 <code v-pre>bpmn</code> 交易流程,则在 <code v-pre>frame</code> 内需要对当前交易的流程上下文进行处理。
<code v-pre>bpmn</code> 交易的流程上下文可以在声明周期函数 <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F.html#_onbeforemount"><code v-pre>_onBeforeMount</code></RouteLink> 内获取并处理。</p>
<p>示例: <code v-pre>lifecycleArgs</code> 为 <code v-pre>bpmn</code> 交易的流程上下文</p>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">lifecycleArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> lifecycleArgs<span class="token punctuation">.</span>detail<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div>
<ul>
<li>
<p><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/sdk/ab-manager-auf.html">auf 交易(查看 auf 说明文档)</RouteLink></p>
</li>
<li>
<p>单画面交易</p>
<blockquote>
<p>单画面交易暂无流程上下文</p>
</blockquote>
</li>
</ul>
<h2 id="流程操作-api-流程操作-api" tabindex="-1"><a class="header-anchor" href="#流程操作-api-流程操作-api"><span>流程操作 API{#流程操作 api}</span></a></h2>
<h3 id="bpmn-流程操作-api-汇总" tabindex="-1"><a class="header-anchor" href="#bpmn-流程操作-api-汇总"><span>bpmn 流程操作 API 汇总</span></a></h3>
<table>
<thead>  <tr>
    <th>API</th>
    <th>option</th>
    <th>Description</th>
  </tr></thead>
<tbody>  <tr>
    <td>_next</td>
    <td>
      {<br>
      &emsp;data?: any <br>
      }<br>
      <code>data</code> 是下一步请求的请求体,默认值是当前 bpmn 交易的 _pageData,也可以组装数据作为请求体提交
    </td>
    <td><a href="#BPMN下一步">下一步</a></td>
  </tr>
  <tr><td>_back</td><td>-</td><td><a href="#BPMN上一步">上一步</a></td></tr>
  <tr><td>this.getContext().destroy()</td><td>-</td><td><a href="#BPMN退出交易">退出交易</a></td></tr>
  <tr>
    <td>_jump</td>
    <td>
      {<br>
        &emsp;taskKey, 需要重置/跳转的步骤的 pathTaskKey<br>
        &emsp;taskId, 当前步骤的 taskId<br>
      }
    </td>
    <td><a href="#BPMN跳转">跳转</a></td>
  </tr>
  <tr>
    <td>_reset</td>
    <td>
      {<br>
        &emsp;taskKey, 需要重置/跳转的步骤的 pathTaskKey<br>
        &emsp;taskId, 当前步骤的 taskId<br>
      }
    </td>
    <td><a href="#BPMN重置">重置</a></td>
  </tr>
  <tr><td>_retry</td><td>-</td><td><a href="#BPMN重试">重试</a></td></tr>
  <tr><td>_skip</td><td>-</td><td><a href="#BPMN跳过">跳过</a></td></tr>
  <!-- <tr><td>_pending</td><td>-</td><td><a href="#BPMN挂起">挂起</a></td></tr>
  <tr>
    <td>_wakeup</td>
    <td>{<br>
      &emsp;data: {<br>
      &emsp;&emsp;"X-ABX-SessionID": string(require)<br> 
      &emsp;} <br>
    }</td>
    <td><a href="#BPMN唤醒">唤醒</a></td>
  </tr> --></tbody>
</table>
<hr>
<h3 id="auf-流程操作-api-汇总" tabindex="-1"><a class="header-anchor" href="#auf-流程操作-api-汇总"><span>auf 流程操作 API 汇总</span></a></h3>
<table>
<thead>
<tr>
<th>API</th>
<th>option</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr>
<td><code v-pre>_next()</code></td>
<td>-</td>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#AUF%E4%B8%8B%E4%B8%80%E6%AD%A5">下一步</RouteLink></td>
</tr>
<tr>
<td><code v-pre>_back()</code></td>
<td>-</td>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#AUF%E4%B8%8A%E4%B8%80%E6%AD%A5">上一步</RouteLink></td>
</tr>
<tr>
<td><code v-pre>this.getContext().destroy()</code></td>
<td>-</td>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#AUF%E9%80%80%E5%87%BA%E4%BA%A4%E6%98%93">退出交易</RouteLink></td>
</tr>
<tr>
<td><code v-pre>_jump</code></td>
<td><code v-pre>laneID(泳道ID)</code></td>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#AUF%E8%B7%B3%E8%BD%AC">跳转</RouteLink></td>
</tr>
<tr>
<td><code v-pre>_reset</code></td>
<td>-</td>
<td><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#AUF%E9%87%8D%E7%BD%AE">重置</RouteLink></td>
</tr>
</tbody>
</table>
<hr>
<h3 id="bpmn-交易-api" tabindex="-1"><a class="header-anchor" href="#bpmn-交易-api"><span>bpmn 交易 API</span></a></h3>
<h4 id="next-bpmn下一步" tabindex="-1"><a class="header-anchor" href="#next-bpmn下一步"><span><code v-pre>_next()</code> {#BPMN下一步}</span></a></h4>
<p>流程提交,流转至下一节点</p>
<ul>
<li>
<p>参数: <code v-pre>Object</code>,包含以下内容:</p>
<p><code v-pre>data</code>?: <code v-pre>any</code>, 下一步请求的请求体,默认值是当前 bpmn 交易的 _pageData,也可以组装数据作为请求体提交</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-row</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>-180px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-col</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-row</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token comment">// 下一步前提交的交易数据</span></span>
<span class="line">      <span class="token keyword">const</span> commitData <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_getModel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">const</span> response <span class="token operator">=</span> <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_next</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> commitData<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="back-bpmn上一步" tabindex="-1"><a class="header-anchor" href="#back-bpmn上一步"><span><code v-pre>_back()</code> {#BPMN上一步}</span></a></h4>
<p><code v-pre>bpmn</code> 交易流程返回上一节点</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-row</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>-180px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-col</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-row</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">lifecycleArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// abpm 生成的流程节点 id</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> lifecycleArgs<span class="token punctuation">.</span>detail<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="this-getcontext-destroy-bpmn退出交易" tabindex="-1"><a class="header-anchor" href="#this-getcontext-destroy-bpmn退出交易"><span><code v-pre>this.getContext().destroy()</code> {#BPMN退出交易}</span></a></h4>
<p><code v-pre>bpmn</code> 交易退出交易流程</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值:</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-row</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>-180px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>abort<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出交易<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-col</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-row</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jump-bpmn跳转" tabindex="-1"><a class="header-anchor" href="#jump-bpmn跳转"><span><code v-pre>_jump()</code> {#BPMN跳转}</span></a></h4>
<p><code v-pre>bpmn</code> 交易内跳转至指定节点</p>
<ul>
<li>
<p>参数: <code v-pre>Object</code>,包含以下内容:</p>
<ol>
<li>taskKey, 需要跳转的步骤对应的 pathTaskKey</li>
<li>taskId, 当前步骤的 taskId</li>
</ol>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-step</span></span>
<span class="line">      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section_step<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isActiveStep<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">finish-status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">align-center</span></span>
<span class="line">      <span class="token attr-name">:flat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-step-item</span></span>
<span class="line">        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in setpsQueue<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>attachTitle(item)<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doJump(index)<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-step-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-step</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">curStepNumber</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">taskId</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cumputed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 计算当前活跃的节点</span></span>
<span class="line">    <span class="token literal-property property">isActiveStep</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>curStepNumber<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span></span>
<span class="line">          curStepIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">          curStepIndex <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">          curStepIndex<span class="token operator">++</span></span>
<span class="line">        <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span></span>
<span class="line">              <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">[</span>curStepIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>pathTaskKey</span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>curStepNumber <span class="token operator">=</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">lifecycleArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> lifecycleArgs<span class="token punctuation">.</span>detail<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// abpm 生成的流程步骤 id</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>taskId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>data<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>taskId<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 当前交易流程所处步骤的 taskKey ,用于更新步骤条信息</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey <span class="token operator">=</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>data<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>taskKey<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.*:</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">doJump</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>isActiveStep<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 获取当前点击的步骤对应的 pathTaskKey</span></span>
<span class="line">      <span class="token keyword">let</span> curStepsKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>pathTaskKey<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 需要重置/跳转的步骤的 pathTaskKey</span></span>
<span class="line">        <span class="token literal-property property">taskKey</span><span class="token operator">:</span> curStepsKey<span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 当前步骤的 taskId</span></span>
<span class="line">        <span class="token literal-property property">taskId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>taskId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">!=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isActiveStep<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_jump</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reset-bpmn重置" tabindex="-1"><a class="header-anchor" href="#reset-bpmn重置"><span><code v-pre>_reset()</code> {#BPMN重置}</span></a></h4>
<p><code v-pre>bpmn</code> 交易内重置当前节点</p>
<ul>
<li>
<p>参数: <code v-pre>Object</code>,包含以下内容:</p>
<ol>
<li>taskKey, 需要重置的步骤对应的 pathTaskKey</li>
<li>taskId, 当前步骤的 taskId</li>
</ol>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-step</span></span>
<span class="line">      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>section_step<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">:active</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>isActiveStep<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">finish-status</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>success<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token attr-name">align-center</span></span>
<span class="line">      <span class="token attr-name">:flat</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>true<span class="token punctuation">"</span></span></span>
<span class="line">    <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-step-item</span></span>
<span class="line">        <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(item, index) in setpsQueue<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>index<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">:title</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>attachTitle(item)<span class="token punctuation">"</span></span></span>
<span class="line">        <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>doJump(index)<span class="token punctuation">"</span></span></span>
<span class="line">      <span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-step-item</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-step</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">curStepNumber</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">args</span><span class="token operator">:</span> <span class="token keyword">null</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">taskId</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">cumputed</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 计算当前活跃的节点</span></span>
<span class="line">    <span class="token literal-property property">isActiveStep</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function">get</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList <span class="token operator">||</span> <span class="token operator">!</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">.</span>length<span class="token punctuation">)</span></span>
<span class="line">          <span class="token keyword">return</span> <span class="token keyword">this</span><span class="token punctuation">.</span>curStepNumber<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">let</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">for</span> <span class="token punctuation">(</span></span>
<span class="line">          curStepIndex <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span></span>
<span class="line">          curStepIndex <span class="token operator">&lt;</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">.</span>length<span class="token punctuation">;</span></span>
<span class="line">          curStepIndex<span class="token operator">++</span></span>
<span class="line">        <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">if</span> <span class="token punctuation">(</span></span>
<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey<span class="token punctuation">.</span><span class="token function">endsWith</span><span class="token punctuation">(</span></span>
<span class="line">              <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">[</span>curStepIndex<span class="token punctuation">]</span><span class="token punctuation">.</span>pathTaskKey</span>
<span class="line">            <span class="token punctuation">)</span></span>
<span class="line">          <span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">            <span class="token keyword">break</span><span class="token punctuation">;</span></span>
<span class="line">          <span class="token punctuation">}</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>curStepNumber <span class="token operator">=</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">        <span class="token keyword">return</span> curStepIndex<span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">_onBeforeMount</span><span class="token punctuation">(</span><span class="token parameter">lifecycleArgs</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>args <span class="token operator">=</span> lifecycleArgs<span class="token punctuation">.</span>detail<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// abpm 生成的流程步骤 id</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>taskId <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>data<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>taskId<span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 当前交易流程所处步骤的 taskKey ,用于更新步骤条信息</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey <span class="token operator">=</span></span>
<span class="line">        <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>data<span class="token punctuation">.</span>meta<span class="token punctuation">.</span>taskKey<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^.*:</span><span class="token regex-delimiter">/</span></span><span class="token punctuation">,</span> <span class="token string">""</span><span class="token punctuation">)</span> <span class="token operator">||</span> <span class="token keyword">this</span><span class="token punctuation">.</span>taskKey<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">doJump</span><span class="token punctuation">(</span><span class="token parameter">index</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">></span> <span class="token keyword">this</span><span class="token punctuation">.</span>isActiveStep<span class="token punctuation">)</span> <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token comment">// 获取当前点击的步骤对应的 pathTaskKey</span></span>
<span class="line">      <span class="token keyword">let</span> curStepsKey <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">.</span>pathInfoList<span class="token punctuation">[</span>index<span class="token punctuation">]</span><span class="token punctuation">.</span>pathTaskKey<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">      <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token comment">// 需要重置/跳转的步骤的 pathTaskKey</span></span>
<span class="line">        <span class="token literal-property property">taskKey</span><span class="token operator">:</span> curStepsKey<span class="token punctuation">,</span></span>
<span class="line">        <span class="token comment">// 当前步骤的 taskId</span></span>
<span class="line">        <span class="token literal-property property">taskId</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>taskId<span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">==</span> <span class="token keyword">this</span><span class="token punctuation">.</span>isActiveStep<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reset</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="retry-bpmn重试" tabindex="-1"><a class="header-anchor" href="#retry-bpmn重试"><span><code v-pre>_retry()</code> {#BPMN重试}</span></a></h4>
<p><code v-pre>bpmn</code> 交易流程提交错误后,重新尝试提交</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>retry<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>retry<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>重试<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">retry</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_retry</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="skip-bpmn跳过" tabindex="-1"><a class="header-anchor" href="#skip-bpmn跳过"><span><code v-pre>_skip()</code> {#BPMN跳过}</span></a></h4>
<p><code v-pre>bpmn</code> 交易流程中服务端报错后,跳过出现的错误,流程向后执行</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">_onErrorCaptured</span><span class="token punctuation">(</span><span class="token parameter">err<span class="token punctuation">,</span> args</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_skip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">return</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="pending-bpmn挂起" tabindex="-1"><a class="header-anchor" href="#pending-bpmn挂起"><span><code v-pre>_pending()</code> {#BPMN挂起}</span></a></h4>
<p><code v-pre>bpmn</code> 交易内挂起进行中的交易 (仅 bpmn 交易)</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pending<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>pending<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>跳过<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">pending</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_pending</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="wakeup-bpmn唤醒" tabindex="-1"><a class="header-anchor" href="#wakeup-bpmn唤醒"><span><code v-pre>_wakeup()</code> {#BPMN唤醒}</span></a></h4>
<p><code v-pre>bpmn</code> 交易内唤醒已挂起的交易 (仅 bpmn 交易)</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 请求成功,返回响应内容;请求失败,抛出错误 <code v-pre>TradeError</code>.</p>
</li>
<li>
<p>示例:</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wakeup<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>wakeup<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>唤醒<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">wakeup</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> args <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token string-property property">"X-ABX-SessionID"</span><span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span> <span class="token comment">// 必传参数,类型: string ,要唤醒交易的sessionID</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_wakeup</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="auf-交易流程-api" tabindex="-1"><a class="header-anchor" href="#auf-交易流程-api"><span>auf 交易流程 API</span></a></h3>
<h4 id="next-auf下一步" tabindex="-1"><a class="header-anchor" href="#next-auf下一步"><span><code v-pre>_next()</code> {#AUF下一步}</span></a></h4>
<p><code v-pre>auf</code> 交易提交当前节点,跳至下一节点</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 无</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>next<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>下一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">next</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_next</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="back-auf上一步" tabindex="-1"><a class="header-anchor" href="#back-auf上一步"><span><code v-pre>_back()</code> {#AUF上一步}</span></a></h4>
<p><code v-pre>auf</code> 交易返回上一步节点</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 无</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>back<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>上一步<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">back</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="this-getcontext-destroy-auf退出交易" tabindex="-1"><a class="header-anchor" href="#this-getcontext-destroy-auf退出交易"><span><code v-pre>this.getContext().destroy()</code> {#AUF退出交易}</span></a></h4>
<p><code v-pre>auf</code> 交易退出当前交易</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值:</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-row</span> <span class="token special-attr"><span class="token attr-name">style</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span><span class="token value css language-css"><span class="token property">margin-left</span><span class="token punctuation">:</span>-180px<span class="token punctuation">;</span></span><span class="token punctuation">"</span></span></span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-col</span> <span class="token attr-name">:span</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>3<span class="token punctuation">"</span></span> <span class="token attr-name">:offset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>4<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></span>
<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>btn<span class="token punctuation">"</span></span> <span class="token attr-name">plain</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>abort<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>退出交易<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-col</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-row</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">// ...</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">abort</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// ...</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">destroy</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="jump-auf跳转" tabindex="-1"><a class="header-anchor" href="#jump-auf跳转"><span><code v-pre>_jump()</code> {#AUF跳转}</span></a></h4>
<p><code v-pre>auf</code> 交易跳转到指定节点</p>
<ul>
<li>
<p>参数: <code v-pre>laneId</code>, auf.json 中对应节点配置的泳道 id</p>
</li>
<li>
<p>返回值: 要跳转的节点信息</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jump<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>jump<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>回跳<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">jump</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> laneId <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span> <span class="token comment">// auf.json中配置的泳道id</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_jump</span><span class="token punctuation">(</span>laneId<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// auf交易中右键可弹出重置和回跳选项,具体说明和配置详见ab-manager-auf文档</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="reset-auf重置" tabindex="-1"><a class="header-anchor" href="#reset-auf重置"><span><code v-pre>_reset()</code> {#AUF重置}</span></a></h4>
<p><code v-pre>auf</code> 交易重置当前节点</p>
<ul>
<li>
<p>参数: 无参数</p>
</li>
<li>
<p>返回值: 无</p>
</li>
<li>
<p>示例</p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>reset<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>重置<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">></span></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">></span></span><span class="token script"><span class="token language-javascript"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_reset</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// auf交易中右键可弹出重置和回跳选项,具体说明和配置详见ab-manager-auf文档</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


