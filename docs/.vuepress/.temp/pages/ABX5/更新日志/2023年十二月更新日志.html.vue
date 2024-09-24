<template><div><h1 id="更新日志-更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志-更新日志"><span>更新日志 {#更新日志}</span></a></h1>
<h2 id="_20231225-周一-16-23" tabindex="-1"><a class="header-anchor" href="#_20231225-周一-16-23"><span>20231225 周一 16:23 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-focus@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/aui-web@<span class="token number">5.0</span>.<span class="token number">7</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增变量允许自定义事件的挂载</li>
<li>表格操作列的展示修改</li>
</ol>
</div>
<h2 id="_20231220-周三-17-22" tabindex="-1"><a class="header-anchor" href="#_20231220-周三-17-22"><span>20231220 周三 17:22 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade@<span class="token number">5.0</span>.<span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增$getComponentStateAndValue 方法获取页面上组件的状态和值</li>
</ol>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PanelMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-manager-trade"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$getComponentStateAndValue</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="_20231214-周四-14-27" tabindex="-1"><a class="header-anchor" href="#_20231214-周四-14-27"><span>20231214 周四 14:27 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-service@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>修复通讯设置<code v-pre>headers</code>为<code v-pre>class实例</code>类型时合并异常问题</li>
</ol>
</div>
<h2 id="_20231213-周三-14-34" tabindex="-1"><a class="header-anchor" href="#_20231213-周三-14-34"><span>20231213 周三 14:34 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade@<span class="token number">5.0</span>.<span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复<code v-pre>multiple-panel</code>组件<code v-pre>change</code>事件获取参数异常问题</li>
</ol>
</div>
<h2 id="_20231212-周二-15-30" tabindex="-1"><a class="header-anchor" href="#_20231212-周二-15-30"><span>20231212 周二 15:30 <Badge type="info" text="解朝峥" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-core@<span class="token number">5.0</span>.<span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复 EvevtHub 订阅事件后无法触发回调的问题</li>
</ol>
</div>
<h2 id="_20231208-周五-16-55" tabindex="-1"><a class="header-anchor" href="#_20231208-周五-16-55"><span>20231208 周五 16:55 <Badge type="info" text="解朝峥" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-yanyin@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复调用验印组件报错的问题</li>
</ol>
</div>
<h2 id="_20231208-周五-15-49" tabindex="-1"><a class="header-anchor" href="#_20231208-周五-15-49"><span>20231208 周五 15:49 <Badge type="info" text="解朝峥" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-yanyin@<span class="token number">5.0</span>.<span class="token number">0</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增 SDK: ab-plugin-yanyin</li>
</ol>
</div>
<h2 id="_20231208-周五-10-25" tabindex="-1"><a class="header-anchor" href="#_20231208-周五-10-25"><span>20231208 周五 10:25 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">5.0</span>.<span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复了表格销毁时报错的问题</li>
<li>修复了 menu 报错的问题</li>
</ol>
</div>
<h2 id="_20231207-周四-19-36" tabindex="-1"><a class="header-anchor" href="#_20231207-周四-19-36"><span>20231207 周四 19:36 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/x5-loader-plugin@<span class="token number">5.0</span>.<span class="token number">4</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>默认遮罩添加超时关闭逻辑</li>
</ol>
</div>
<h2 id="_20231207-周四-16-22" tabindex="-1"><a class="header-anchor" href="#_20231207-周四-16-22"><span>20231207 周四 16:22 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-core@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-manager-auf@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-focus2@<span class="token number">5.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/ab-manager-trade@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-plugin-client@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-starter@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/abx-core@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>部分包资源未压缩</li>
<li>默认遮罩添加超时关闭逻辑 <Badge type="info" text="马林" /></li>
</ol>
</div>
<h2 id="_20231207-周四-10-09" tabindex="-1"><a class="header-anchor" href="#_20231207-周四-10-09"><span>20231207 周四 10:09 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/x5-loader-plugin@<span class="token number">5.0</span>.<span class="token number">3</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>兼容移动端低版本语法不识别问题<code v-pre>promise.allSettled</code>,机型：TCL-chrome:74-android:10</li>
</ol>
</div>
<h2 id="_20231206-周三-14-58" tabindex="-1"><a class="header-anchor" href="#_20231206-周三-14-58"><span>20231206 周三 14:58 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/cli-bundless@<span class="token number">5.0</span>.<span class="token number">6</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>config.json 配置文件中 devConfig 的配置允许不注入到 ab-html 文件，新增编译添加命令 --onInject</li>
</ol>
</div>
<h2 id="_20231206-周三-10-00" tabindex="-1"><a class="header-anchor" href="#_20231206-周三-10-00"><span>20231206 周三 10:00 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<p>1.修复了 loading 滚动时重新加载 style 导致弹窗被覆盖的问题</p>
</div>
<h2 id="_20231202-周六-11-03" tabindex="-1"><a class="header-anchor" href="#_20231202-周六-11-03"><span>20231202 周六 11:03 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-message@<span class="token number">5.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-manager-container-provider@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/ab-html@<span class="token number">5.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复移动端获取 resourcePath 失败问题 <Badge type="info" text="马林" /></li>
<li>对 MessageManager 类参数 options 做兼容操作: options = options || {} <Badge type="info" text="马林" /></li>
<li>在使用<code v-pre>swc</code>编译<code v-pre>ts/js</code>文件时保证运行时兼容<code v-pre>require([], function(){})</code>的用法</li>
<li>完善动态加载运行时的处理</li>
</ol>
</div>
<h2 id="_20231201-周五-17-25" tabindex="-1"><a class="header-anchor" href="#_20231201-周五-17-25"><span>20231201 周五 17:25 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/cli-bundless@<span class="token number">5.0</span>.<span class="token number">5</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>编译完成后对 js、ts、vue 文件内部写入 hash 值注释</li>
<li>添加 --id 命令，允许编译完成后对更新的文件拷贝到指定 id 文件下</li>
<li>新增配置 requireContextSyntax 指定文件编译 require.context 语法</li>
</ol>
</div>
</div></template>


