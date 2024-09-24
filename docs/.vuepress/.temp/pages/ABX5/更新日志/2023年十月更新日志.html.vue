<template><div><h1 id="更新日志-更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志-更新日志"><span>更新日志 {#更新日志}</span></a></h1>
<h2 id="_20231031-周二-17-47" tabindex="-1"><a class="header-anchor" href="#_20231031-周二-17-47"><span>20231031 周二 17:47 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">编译脚本更新<span class="token operator">:</span> scripts/build/build.trade.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>收集依赖信息时,舍弃@agree下的某个包中的 node_modules 的信息收集</li>
</ol>
</div>
<h2 id="_20231031-周二-14-46" tabindex="-1"><a class="header-anchor" href="#_20231031-周二-14-46"><span>20231031 周二 14:46 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-lifecycle@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复生命周期顺序异常问题：<code v-pre>mounted</code>比<code v-pre>_onBeforeMount</code>先执行 <code v-pre>路程-A4061</code> <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231031-周二-10-33" tabindex="-1"><a class="header-anchor" href="#_20231031-周二-10-33"><span>20231031 周二 10:33 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">17</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>dm数据下发时进行合并,以下发的数据为准</li>
</ol>
</div>
<h2 id="_20231030-周一-14-30" tabindex="-1"><a class="header-anchor" href="#_20231030-周一-14-30"><span>20231030 周一 14:30 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">17</span></span>
<span class="line">@agree/ab-html@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">@agree/x5-loader-plugin@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/ab-native-logger@<span class="token number">1.0</span>.<span class="token number">1</span></span>
<span class="line">编译脚本：scripts/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>编译: <code v-pre>trade-cache</code> 交易缓存修改-&gt; 读取 hash 前先判断文件最后修改时间是否发生变动,多一层判断条件提升性能 <Badge type="tip" text="马林" /></li>
<li>编译: 输出依赖信息文件 .abx 文件替换为 abx 文件 <Badge type="tip" text="马林" /></li>
<li>编译: vue 文件中 src 相对路径转换为工程名路径 <Badge type="tip" text="马林" /></li>
<li>编译: 编译时不对别名路径做转换,交给运行时处理 <Badge type="tip" text="马林" /></li>
<li>编译: 引入图片路径处理调整,移除公共路径拼接参数 <Badge type="tip" text="马林" /></li>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E5%A4%9A%E6%B8%A0%E9%81%93%E5%8A%A0%E8%BD%BD.html">支持多渠道资源加载</RouteLink> <Badge type="tip" text="陈光" /></li>
</ol>
</div>
<div class="hint-container warning">
<p class="hint-container-title">需要修改部分</p>
<ol>
<li><code v-pre>mock/index.js</code>内容修改: <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/deployconfig.html">配置详情</RouteLink></li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../dist/ABX/"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [!code --]</span></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span><span class="token string">"/"</span><span class="token punctuation">,</span> express<span class="token punctuation">.</span><span class="token function">static</span><span class="token punctuation">(</span>path<span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span>__dirname<span class="token punctuation">,</span> <span class="token string">"../dist/"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// [!code ++]</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// ...</span></span>
<span class="line"></span>
<span class="line">app<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">"/getFrontEndConfig"</span><span class="token punctuation">,</span> <span class="token punctuation">(</span>req<span class="token punctuation">,</span> res<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">const</span> args <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">    data<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      resourceServiceEndPoint<span class="token operator">:</span> <span class="token string">"http://192.168.71.115:8000"</span><span class="token punctuation">,</span></span>
<span class="line">      mode<span class="token operator">:</span> <span class="token string">"dev"</span><span class="token punctuation">,</span></span>
<span class="line">      localization<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span></span>
<span class="line">      messageUrl<span class="token operator">:</span> <span class="token string">"ws://127.0.0.1:8080/pushMsgToChannel"</span><span class="token punctuation">,</span></span>
<span class="line">      commitUrl<span class="token operator">:</span> <span class="token string">"http://192.168.71.115:40002/"</span><span class="token punctuation">,</span></span>
<span class="line">      manifestPath<span class="token operator">:</span> <span class="token string">"abx/dependencies.manifest.json"</span><span class="token punctuation">,</span></span>
<span class="line">      publicPath<span class="token operator">:</span> <span class="token string">"ABX"</span><span class="token punctuation">,</span></span>
<span class="line">      deployEnv<span class="token operator">:</span> <span class="token string">"vm"</span><span class="token punctuation">,</span> <span class="token comment">// 虚拟机部署，Acaas部署不需要传该属性</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    code<span class="token operator">:</span> <span class="token string">"200"</span><span class="token punctuation">,</span> <span class="token comment">// 成功</span></span>
<span class="line">    msg<span class="token operator">:</span> <span class="token string">"success"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line">  res<span class="token punctuation">.</span><span class="token function">send</span><span class="token punctuation">(</span><span class="token constant">JSON</span><span class="token punctuation">.</span><span class="token function">stringify</span><span class="token punctuation">(</span>args<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>修改<code v-pre>config.json</code>目录</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"devConfig"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"env"</span><span class="token operator">:</span> <span class="token string">"web"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"serviceEndPoint"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"resourcePath"</span><span class="token operator">:</span> <span class="token string">"http://localhost:9050/"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"publicPath"</span><span class="token operator">:</span> <span class="token string">"/ABX/"</span> <span class="token comment">// [!code ++]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>删除<code v-pre>dist</code>目录，重新编译</li>
<li>修改加载地址</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">cn<span class="token punctuation">.</span>com<span class="token punctuation">.</span>agree<span class="token punctuation">.</span>ab<span class="token punctuation">.</span>a5<span class="token punctuation">.</span>client<span class="token punctuation">.</span>gui<span class="token punctuation">.</span>aui<span class="token operator">/</span>defaultTradePath<span class="token operator">=</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span>localhost<span class="token operator">:</span><span class="token number">9050</span><span class="token operator">/</span><span class="token constant">ABX</span><span class="token operator">/</span>node_modules<span class="token operator">/</span><span class="token decorator"><span class="token at operator">@</span><span class="token function">agree</span></span><span class="token operator">/</span>ab<span class="token operator">-</span>micro<span class="token operator">-</span>main<span class="token operator">/</span>index<span class="token punctuation">.</span>html</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div></div>
<h2 id="_20231027-周五-17-28" tabindex="-1"><a class="header-anchor" href="#_20231027-周五-17-28"><span>20231027 周五 17:28 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">16</span></span>
<span class="line">@agree/ab-manager-burypoint@<span class="token number">2.0</span>.<span class="token number">8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>埋点信息更新;</li>
<li>bpmn 流程交易添加操作埋点信息。</li>
</ol>
</div>
<h2 id="_20231025-周三-14-23" tabindex="-1"><a class="header-anchor" href="#_20231025-周三-14-23"><span>20231025 周三 14:23 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">监听sdk <span class="token operator">:</span> app.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>监听文件变化时对改变的文件做 hash 留存，当二次编译时，判断文件 hash 是否发生改变，当未发生改变时不进行编译处理</li>
</ol>
</div>
<h2 id="_20231024-周二-08-45" tabindex="-1"><a class="header-anchor" href="#_20231024-周二-08-45"><span>20231024 周二 08:45 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">13</span></span>
<span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">4.5</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">16</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>完善交易历史流程记录 <Badge type="info" text="陈光" /></li>
<li>添加<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%8C%82%E8%B5%B7%E5%94%A4%E9%86%92.html">唤醒/挂起</RouteLink> <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231020-周五-16-46" tabindex="-1"><a class="header-anchor" href="#_20231020-周五-16-46"><span>20231020 周五 16:46 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">40</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">12</span></span>
<span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">4</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">15</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复回放异常问题；修复回放时显示的节点名称异常问题 <code v-pre>路程-A4061</code> <Badge type="info" text="陈光" /></li>
<li>新增<code v-pre>checkFirstVueStep</code>: 判断当前画面是否为当前<code v-pre>bpmn</code>交易的第一个<code v-pre>vue</code>画面 <code v-pre>路程-A4061</code> <Badge type="info" text="陈光" /></li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">type</span> <span class="token class-name">SocketArgs</span> <span class="token operator">=</span> <span class="token builtin">any</span><span class="token punctuation">;</span> <span class="token comment">// 服务端返回的socket消息</span></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">checkFirstVueStep</span><span class="token punctuation">(</span>args<span class="token operator">:</span> SocketArgs<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">checkFirstVueStep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token keyword">let</span> isFirstVueStep <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">checkFirstVueStep</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">.</span>args<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"是否为第一个vue画面"</span><span class="token punctuation">,</span> isFirstVueStep<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>优化获取的<code v-pre>bpmn</code>交易的历史数据量 <Badge type="info" text="陈光" /></li>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F">还原</RouteLink>、<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E5%9B%9E%E6%94%BE">回放</RouteLink>、<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E6%80%9C%E6%82%AF%E4%B9%8B%E5%BF%83">怜悯之心</RouteLink>、<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E5%85%B3%E9%94%AE%E5%AD%97%E7%9B%91%E5%90%AC">关键字</RouteLink>、<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E8%BF%98%E5%8E%9F.html#%E8%8A%82%E7%82%B9%E6%8F%92%E5%85%A5">插入节点用于还原</RouteLink>可以验证 <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231019-周四-11-25" tabindex="-1"><a class="header-anchor" href="#_20231019-周四-11-25"><span>20231019 周四 11:25 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-focus2@<span class="token number">2.1</span>.<span class="token number">23</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复页面重置时焦点报错问题</li>
</ol>
</div>
<h2 id="_20231019-周四-16-20" tabindex="-1"><a class="header-anchor" href="#_20231019-周四-16-20"><span>20231019 周四 16:20 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-burypoint@<span class="token number">2.0</span>.<span class="token number">8</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>更新埋点资源包，适配 x5</li>
</ol>
</div>
<h2 id="_20231019-周四-14-34" tabindex="-1"><a class="header-anchor" href="#_20231019-周四-14-34"><span>20231019 周四 14:34 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">14</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>解决 FlowRecorder is not constructor 报错问题 (更新资源包)</li>
</ol>
</div>
<h2 id="_20231019-周四-11-17" tabindex="-1"><a class="header-anchor" href="#_20231019-周四-11-17"><span>20231019 周四 11:17 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">11</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复埋点回调 sdm、dm 数据接收不到问题</li>
</ol>
</div>
<h2 id="_20231018-周三-10-15" tabindex="-1"><a class="header-anchor" href="#_20231018-周三-10-15"><span>20231018 周三 10:15 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">script 编译脚本： scripts/sdk/cache-sdk.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复注册函数第二个参数 target 值没有添加后缀导致运行时找不到的问题</li>
</ol>
</div>
<h2 id="_20231018-周二-09-54" tabindex="-1"><a class="header-anchor" href="#_20231018-周二-09-54"><span>20231018 周二 09:54 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">1.7</span>.<span class="token number">40</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>增加$emiter 调用方法是否为 promise 的兼容判断</li>
</ol>
</div>
<h2 id="_20231017-周二-17-25" tabindex="-1"><a class="header-anchor" href="#_20231017-周二-17-25"><span>20231017 周二 17:25 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">39</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">10</span></span>
<span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">14</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li><code v-pre>getSocketFlowMsg</code>: 获取<code v-pre>socket</code>信息, <code v-pre>bpmn</code>特有</li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function">_onMounted</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">      <span class="token keyword">let</span> flowSocketMsg <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getSocketFlowMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">      <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"flowSocketMsg"</span><span class="token punctuation">,</span> flowSocketMsg<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>修复上一步异常: 可以省略参数的传入 <code v-pre>路程-A4061</code></li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>
<span class="line">  methods<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">async</span> <span class="token function">onBack</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token comment">// 可以不传入参数</span></span>
<span class="line highlighted">      <span class="token keyword">try</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_back</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span> <span class="token keyword">catch</span> <span class="token punctuation">(</span>err<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"上一步异常"</span><span class="token punctuation">,</span> err<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line highlighted">      <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>修复<code v-pre>auf</code>右键回放异常问题</li>
<li>修复生命周期异常问题：<code v-pre>vue </code>低版本不兼容问题</li>
<li>修复略过接口异常问题</li>
</ol>
</div>
<h2 id="_20231013-周五-17-21" tabindex="-1"><a class="header-anchor" href="#_20231013-周五-17-21"><span>20231013 周五 17:21 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">script 编译脚本： scripts/sdk/cache-sdk.js</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>查找 sdk 单文件资源失败问题修复</li>
</ol>
</div>
<h2 id="_20231013-周五-16-06" tabindex="-1"><a class="header-anchor" href="#_20231013-周五-16-06"><span>20231013 周五 16:06 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">1.7</span>.<span class="token number">39</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复使用$emiter 的方法报错会被捕捉两次的问题</li>
</ol>
</div>
<h2 id="_20231012-周四-17-33" tabindex="-1"><a class="header-anchor" href="#_20231012-周四-17-33"><span>20231012 周四 17:33 <Badge type="info" text="马林" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/abx-share@<span class="token number">1.0</span>.<span class="token number">3</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">13</span></span>
<span class="line">@agree/ab-manager-lfc@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复在执行 lfc 文件时，executeAsync 方法中 this 实例缺失 _creatComponent 方法 <code v-pre>宋萍A10766</code></li>
</ol>
</div>
<h2 id="_20231010-周二-18-08" tabindex="-1"><a class="header-anchor" href="#_20231010-周二-18-08"><span>20231010 周二 18:08 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-ui-history@<span class="token number">1.0</span>.<span class="token number">2</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">12</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>回放时过滤插入的节点 <code v-pre>路程A4061</code></li>
<li>修复回放时节点异常问题</li>
</ol>
</div>
<h2 id="_20231010-周二-16-42" tabindex="-1"><a class="header-anchor" href="#_20231010-周二-16-42"><span>20231010 周二 16:42 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">9</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">11</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li><RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B.html#%E8%B7%B3%E8%BF%87">添加略过接口</RouteLink></li>
</ol>
</div>
<h2 id="_20231010-周二-09-55" tabindex="-1"><a class="header-anchor" href="#_20231010-周二-09-55"><span>20231010 周二 09:55 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">38</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>对未传入 getDomain 的情况做兼容处理</li>
</ol>
</div>
<h2 id="_20231009-周一-17-28" tabindex="-1"><a class="header-anchor" href="#_20231009-周一-17-28"><span>20231009 周一 17:28 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-client@<span class="token number">2.0</span>.<span class="token number">32</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>完善 ab-plugin-client 声明文件</li>
</ol>
</div>
<h2 id="_20231009-周一-16-55" tabindex="-1"><a class="header-anchor" href="#_20231009-周一-16-55"><span>20231009 周一 16:55 <Badge type="info" text="陈光" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-manager-auf@<span class="token number">2.0</span>.<span class="token number">37</span></span>
<span class="line">@agree/ab-manager-trade@<span class="token number">2.0</span>.<span class="token number">87</span></span>
<span class="line">@agree/ab-manager-trade2@<span class="token number">1.0</span>.<span class="token number">9</span></span>
<span class="line">@agree/abx-core@<span class="token number">1.0</span>.<span class="token number">10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>关闭交易时报错：由于关闭交易时产生错误，会弹出错误弹框，此时弹框为面板，面板归属于交易，但是交易正在销毁途中，不会因为错误提示中止关闭，所以此时面板有概率拿不到父级，可以修成打开单面板交易 <code v-pre>路程A4061</code> <Badge type="info" text="陈光" /></li>
</ol>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line"><span class="token comment">// BankModule/pages/app-loader.js</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ErrorManager<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token function-variable function">callback</span><span class="token operator">:</span> <span class="token keyword">function</span> <span class="token punctuation">(</span>e<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">        <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"异常抓取"</span><span class="token punctuation">,</span> e<span class="token punctuation">)</span></span>
<span class="line">        <span class="token keyword">if</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>fileParent <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>fileParent<span class="token punctuation">.</span>dm<span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">          <span class="token function">createPanelSync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// [!code --]</span></span>
<span class="line highlighted">          <span class="token function">createTradeAsync</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token comment">// [!code ++]</span></span>
<span class="line">            config<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              title<span class="token operator">:</span> <span class="token string">"异常上报"</span><span class="token punctuation">,</span> <span class="token comment">// ⾯板标题</span></span>
<span class="line">              type<span class="token operator">:</span> <span class="token string">"vue"</span><span class="token punctuation">,</span> <span class="token comment">// ⾯板类型</span></span>
<span class="line">              microName<span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span> <span class="token comment">// 微应⽤名称</span></span>
<span class="line">              panelName<span class="token operator">:</span> <span class="token string">"pages/common/share/error/ErrorCollect.vue"</span><span class="token punctuation">,</span> <span class="token comment">// [!code --]</span></span>
<span class="line">              tradeName<span class="token operator">:</span> <span class="token string">"pages/common/share/error/ErrorCollect.vue"</span><span class="token punctuation">,</span> <span class="token comment">// [!code ++]</span></span>
<span class="line">              moduleName<span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span> <span class="token comment">// ⾯板所属的⼯程信息</span></span>
<span class="line">              containerType<span class="token operator">:</span> <span class="token string">"dialog"</span><span class="token punctuation">,</span> <span class="token comment">// ⾯板的展现类型</span></span>
<span class="line highlighted">              containerOptions<span class="token operator">:</span> <span class="token punctuation">{</span> <span class="token comment">// [!code ++]</span></span>
<span class="line highlighted">                isModal<span class="token operator">:</span> <span class="token boolean">true</span>  <span class="token comment">// [!code ++]</span></span>
<span class="line highlighted">              <span class="token punctuation">}</span>  <span class="token comment">// [!code ++]</span></span>
<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            repeatable<span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>  <span class="token comment">// [!code ++]</span></span>
<span class="line">            importVar<span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">              file<span class="token operator">:</span> e<span class="token punctuation">.</span>file <span class="token operator">?</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name <span class="token operator">?</span> e<span class="token punctuation">.</span>file<span class="token punctuation">.</span>name <span class="token operator">:</span> <span class="token punctuation">(</span>e<span class="token punctuation">.</span>file<span class="token punctuation">.</span>dataModel <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">              message<span class="token operator">:</span> e<span class="token punctuation">.</span>message <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">              stack<span class="token operator">:</span> e<span class="token punctuation">.</span>stack <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">              errorCode<span class="token operator">:</span> e<span class="token punctuation">.</span>errorCode <span class="token operator">||</span> <span class="token string">""</span><span class="token punctuation">,</span></span>
<span class="line">              errorType<span class="token operator">:</span> <span class="token string">"code"</span></span>
<span class="line highlighted">            <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">            context<span class="token operator">:</span> e<span class="token punctuation">.</span>fileParent<span class="token punctuation">.</span>getContext <span class="token operator">&amp;&amp;</span> e<span class="token punctuation">.</span>fileParent<span class="token punctuation">.</span><span class="token function">getContext</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token comment">// [!code --]</span></span>
<span class="line">          <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">        <span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span></span>
<span class="line">          <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">"非Vue 或 祖辈未混入PanelMixn"</span><span class="token punctuation">)</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>交易关闭时报错未弹框：由于交易关闭后无 container，修复 container 查找失败的问题 <Badge type="info" text="陈光" /></li>
<li>修复关闭子面板异常 <Badge type="info" text="陈光" /></li>
</ol>
</div>
<h2 id="_20231009-周一-15-42" tabindex="-1"><a class="header-anchor" href="#_20231009-周一-15-42"><span>20231009 周一 15:42 <Badge type="info" text="解朝峥" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@abx-core@<span class="token number">1.0</span>.<span class="token number">10</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>bpmn 交易添加跳过、挂起、唤醒对应的 API</li>
</ol>
</div>
<h2 id="_20231008-周日-16-08" tabindex="-1"><a class="header-anchor" href="#_20231008-周日-16-08"><span>20231008 周日 16:08 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/ab-plugin-client@<span class="token number">2.0</span>.<span class="token number">31</span></span>
<span class="line">cn.com.agree.ab.a5.client.gui.aui.command.handler_5.<span class="token number">0.0</span>.<span class="token number">202310081603</span>.jar</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复两台电脑获取 mac 地址相同的问题，排除虚拟网卡影响</li>
</ol>
</div>
<h2 id="_20231007-周六-15-50" tabindex="-1"><a class="header-anchor" href="#_20231007-周六-15-50"><span>20231007 周六 15:50 <Badge type="info" text="夏海峰" /></span></a></h2>
<blockquote>
<p>本次更新版本记录</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line">@agree/aui-web@<span class="token number">1.7</span>.<span class="token number">38</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复 dialog 的遮罩层问题</li>
</ol>
</div>
</div></template>


