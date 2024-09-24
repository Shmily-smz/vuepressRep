<template><div><h1 id="ab-manager-validator-校验管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-validator-校验管理"><span>ab-manager-validator@校验管理</span></a></h1>
<p>输入校验，对输入的内容进行验证。</p>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ValidatorManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-validator"</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-基本用法" tabindex="-1"><a class="header-anchor" href="#_2-基本用法"><span>2. 基本用法</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>valid<span class="token operator">-</span>template property<span class="token operator">=</span><span class="token string">"phone"</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>input v<span class="token operator">-</span>model<span class="token operator">=</span><span class="token string">"phone"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>valid<span class="token operator">-</span>template<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span>
<span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> ValidatorManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-validator"</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">mixins</span><span class="token operator">:</span> <span class="token punctuation">[</span>ValidatorManager<span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">validators</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">"required"</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">^((13[0-9])|(14[5|7])|(15([0-3]|[5-9]))|(18[0,5-9]))\d{8}$</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">"请输入正确的手机号类型"</span></span>
<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">{</span></span>
<span class="line">        <span class="token function">test</span><span class="token punctuation">(</span><span class="token parameter">val</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>
<span class="line">          <span class="token keyword">return</span> val<span class="token punctuation">.</span>length <span class="token operator">===</span> <span class="token number">11</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">errorMsg</span><span class="token operator">:</span> <span class="token string">"手机位数为11位"</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token function">data</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">return</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">phone</span><span class="token operator">:</span> <span class="token string">''</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-修改校验规则" tabindex="-1"><a class="header-anchor" href="#_3-修改校验规则"><span>3. 修改校验规则</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$setValidate</span><span class="token punctuation">(</span>validateName<span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">rules</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">return</span> newRules<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p><strong>例：</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>script<span class="token operator">></span></span>
<span class="line"><span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token function">setValidate</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$setValidate</span><span class="token punctuation">(</span><span class="token string">'phone'</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token parameter">rules</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">      console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>rules<span class="token punctuation">)</span></span>
<span class="line">      <span class="token keyword">return</span> rules<span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-设置默认校验规则" tabindex="-1"><a class="header-anchor" href="#_4-设置默认校验规则"><span>4. 设置默认校验规则</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token comment">// 定义规则</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Rules <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-manager-validator'</span></span>
<span class="line"><span class="token keyword">let</span> defaultRules <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">idCard</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'required'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">test</span><span class="token operator">:</span> <span class="token regex"><span class="token regex-delimiter">/</span><span class="token regex-source language-regex">.+@.+\..+</span><span class="token regex-delimiter">/</span><span class="token regex-flags">g</span></span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">errMsg</span><span class="token operator">:</span> <span class="token string">'请输入正确的邮箱类型'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//增加规则</span></span>
<span class="line">Rules<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>defaultRules<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//使用规则</span></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">validators</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token literal-property property">idCard</span><span class="token operator">:</span> Rules<span class="token punctuation">.</span>idCard<span class="token punctuation">,</span></span>
<span class="line">        <span class="token literal-property property">email</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">          <span class="token string">'required'</span><span class="token punctuation">,</span></span>
<span class="line">          Rules<span class="token punctuation">.</span>email</span>
<span class="line">        <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-事件" tabindex="-1"><a class="header-anchor" href="#_5-事件"><span>5. 事件</span></a></h2>
<table>
<thead>
<tr>
<th>事件</th>
<th>说明</th>
<th>参数</th>
</tr>
</thead>
<tbody>
<tr>
<td>$validateUnit</td>
<td>校验单个输入框</td>
<td>validateName</td>
</tr>
<tr>
<td>$validate</td>
<td>校验多个输入框，不传参数则为校验所有</td>
<td>validateName[] / 空</td>
</tr>
<tr>
<td>$clearUnitValidation</td>
<td>清除单个输入框的错误信息</td>
<td>validateName</td>
</tr>
<tr>
<td>$clearValidation</td>
<td>清除多个输入框的错误信息，不传参数则清除所有</td>
<td>validateName[] / 空</td>
</tr>
<tr>
<td>$resetUnitValidation</td>
<td>重置单个输入内容（清空内容和错误信息）</td>
<td>validateName</td>
</tr>
<tr>
<td>$resetValidation</td>
<td>重置单个输入内容（清空内容和错误信息），不传参数则重置所有</td>
<td>validateName[] / 空</td>
</tr>
<tr>
<td>$setValidate</td>
<td>修改校验规则</td>
<td>(validateName, (rules) =&gt; return newRules)</td>
</tr>
</tbody>
</table>
<h2 id="_6-参数" tabindex="-1"><a class="header-anchor" href="#_6-参数"><span>6. 参数</span></a></h2>
<p><strong>Validators 选项中的内容</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>&quot;required&quot;(可选)</td>
<td>string</td>
<td>只能是&quot;required&quot;，表示“必输”，不设置表示“不必输”</td>
<td>—</td>
</tr>
<tr>
<td>test(可选)</td>
<td>regex</td>
<td>正则表达式，表示验证规则</td>
<td>—</td>
</tr>
<tr>
<td>errorMsg(可选)</td>
<td>string</td>
<td>不满足验证提示的错误信息</td>
<td>&quot;必输项&quot;</td>
</tr>
</tbody>
</table>
<p><strong>参数<code v-pre>validateRule</code>中的字段：</strong></p>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
<th>默认值</th>
</tr>
</thead>
<tbody>
<tr>
<td>required</td>
<td>boolean</td>
<td>是否必输</td>
<td>—</td>
</tr>
<tr>
<td>test</td>
<td>regexp / function</td>
<td>校验规则</td>
<td>—</td>
</tr>
<tr>
<td>errorMsg</td>
<td>string</td>
<td>错误提示信息</td>
<td>—</td>
</tr>
</tbody>
</table>
</div></template>


