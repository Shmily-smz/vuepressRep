<template><div><h2 id="相关知识" tabindex="-1"><a class="header-anchor" href="#相关知识"><span>相关知识</span></a></h2>
<p><a href="https://www.tapd.cn/65362886/markdown_wikis/show/#1165362886001002684" target="_blank" rel="noopener noreferrer">内存术语（译）</a>
<a href="https://www.tapd.cn/65362886/markdown_wikis/show/#1165362886001002685" target="_blank" rel="noopener noreferrer">修复内存问题（译）</a>
<a href="https://www.tapd.cn/65362886/markdown_wikis/show/#1165362886001002687" target="_blank" rel="noopener noreferrer">录制内存快照（译）</a></p>
<h2 id="出现内内存泄漏的情况" tabindex="-1"><a class="header-anchor" href="#出现内内存泄漏的情况"><span>出现内内存泄漏的情况</span></a></h2>
<h3 id="console-log" tabindex="-1"><a class="header-anchor" href="#console-log"><span>console.log</span></a></h3>
<p>看下面代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> template <span class="token operator">=</span> <span class="token string">'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint animi cumque perspiciatis deserunt quam exercitationem unde tenetur debitis veritatis suscipit, dolorem veniam sequi rerum nisi, repudiandae qui ea dolor. Laboriosam?'</span><span class="token punctuation">,</span></span>
<span class="line">    count <span class="token operator">=</span> <span class="token number">100</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">for</span><span class="token punctuation">(</span><span class="token keyword">let</span> i<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">;</span> i<span class="token operator">&lt;</span>count<span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token template-string"><span class="token template-punctuation string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">-</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span>template<span class="token interpolation-punctuation punctuation">}</span></span><span class="token template-punctuation string">`</span></span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>结果如下图：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/1.png" alt="console log leak"></p>
<h3 id="事件监听" tabindex="-1"><a class="header-anchor" href="#事件监听"><span>事件监听</span></a></h3>
<p>这里有两种，一种我们直接使用<code v-pre>addEventListener</code>进行事件监听，另一种是vue提供的事件监听机制。</p>
<p><strong>原生的addEventListener</strong></p>
<p>通过分析下列内存截图：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/2.png" alt="leak component"></p>
<p>跳转到对应的视图：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/3.png" alt="leak component bound fn"></p>
<p>可以通过鼠标hover查看当前组件的信息：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/4.png" alt="leak component bound this"></p>
<p>通过上述分析，找到对应文件，发现对应代码。原因是使用了<code v-pre>addEventListener</code>但未在组件销毁时进行移除操作。</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/5.png" alt="leak component popover on"></p>
<p><strong>vue @event</strong></p>
<p>在看下面一个内存截图：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/6.png" alt="vue on leak"></p>
<p>通过右键跳转到对应的位置：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/7.png" alt="vue on native bind"></p>
<p>根据分析找到对应代码。</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/8.png" alt="vue-on-input"></p>
<p>该问题为vue本身问题，由于使用<code v-pre>v2.6.14</code>版本并未修复，已有<a href="https://github.com/vuejs/vue/pull/10085" target="_blank" rel="noopener noreferrer">PR</a>计划在<code v-pre>v2.6.15</code>版本修复，却迟迟没有发布，但在<code v-pre>v2.7</code>版本中已经修复了。</p>
<p>解决方案如下：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/9.png" alt="vue on resolve"></p>
<h3 id="mutationobserver" tabindex="-1"><a class="header-anchor" href="#mutationobserver"><span>MutationObserver</span></a></h3>
<p>这是一种新的内存泄漏问题，如下图：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/10.png" alt="select mutationobserver leak"></p>
<p>通过分析找到源码位置：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/11.png" alt="select mutationobserver source"></p>
<p>解决方案如下：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/12.png" alt="select mutationobserver resolve"></p>
<h3 id="msgbox-inject" tabindex="-1"><a class="header-anchor" href="#msgbox-inject"><span>msgbox inject</span></a></h3>
<p>但是还没有完，解决了上面的问题内存快照变成这样了：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/13.png" alt="inject component"></p>
<p>通过鼠标悬浮查看当前组件的信息：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/14.png" alt="inject component msgbox"></p>
<p>定位源码位置：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/15.png" alt="inject component msgboxinject"></p>
<h3 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h3>
<p>到这里基本组件库的问题已经处理大部分了，但是路还很长。因为实际的工程中还有fc组件库，还有我们的SDK，还有交易代码，这些都可能造成内存泄漏。</p>
<h3 id="开始新的探索" tabindex="-1"><a class="header-anchor" href="#开始新的探索"><span>开始新的探索</span></a></h3>
<p><strong><strong>auf_menu_cb</strong></strong></p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/16.png" alt="leak auf"></p>
<p><strong>compareData</strong></p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/17.png" alt="leak compare 1"></p>
<p>根据上面的经验，查看这个<code v-pre>native_bind</code>的信息：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/18.png" alt="leak compare 2"></p>
<p><strong>Trade</strong></p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/19.png" alt="leak Trade"></p>
<p><strong>listeners</strong></p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/20.png" alt="leak listeners 1"></p>
<p>查看这个<code v-pre>listeners</code>所在的对象：</p>
<p><img src="@source/AB5/images/知识探索/前端/内存/内存泄漏梳理/21.png" alt="leak listeners 2"></p>
<h3 id="and-so-on" tabindex="-1"><a class="header-anchor" href="#and-so-on"><span>AND SO ON</span></a></h3>
</div></template>


