<template><div><h1 id="提供给ide的模版清单" tabindex="-1"><a class="header-anchor" href="#提供给ide的模版清单"><span>提供给ide的模版清单</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">Module</span>
<span class="line">├─ @types                          # 工程的 ts 声明文件</span>
<span class="line">|  ├─ agree.d.ts                   # 平台相关的 ts 声明</span>
<span class="line">│  └─ Module.d.ts                  # 工程相关的 ts 声明</span>
<span class="line">├─ aft</span>
<span class="line">├─ bin</span>
<span class="line">├─ config</span>
<span class="line">│  └─ TradeMenu.json               # 生成交易列表文件,新建交易支持向内进行添加(也支持手动添加)</span>
<span class="line">├─ data</span>
<span class="line">│  └─ 全局数据.adm                  # 交易默认初始化的数据模型</span>
<span class="line">├─ lfc</span>
<span class="line">├─ lib</span>
<span class="line">├─ namespace</span>
<span class="line">├─ pages</span>
<span class="line">|  ├─ app-loader.ts                # 工程初始化入口模板</span>
<span class="line">|  ├─ index.ts                     # 工程全局函数定义模板</span>
<span class="line">|  ├─ App.vue                      # 工程初始化页面模板</span>
<span class="line">|  ├─ Home.vue                     # 简单的交易列表展示页</span>
<span class="line">|  ├─ Login.vue                    # 简单的登录页面</span>
<span class="line">|  ├─ HttpDialog.vue               # 基础的请求遮罩</span>
<span class="line">│  └─ index.scss                   # 工程全局样式模板</span>
<span class="line">├─ processes</span>
<span class="line">├─ scene</span>
<span class="line">|  ├─ 单画面交易</span>
<span class="line">|  |  └─ 单画面交易模板             # 单画面交易的画面模板</span>
<span class="line">|  ├─ auf 交易</span>
<span class="line">|  |  ├─ App.vue                   # auf 交易入口 App 模板</span>
<span class="line">|  |  ├─ auf_demo.vue              # auf 交易的 ui 画面模板</span>
<span class="line">|  |  ├─ auf交易模板.auf.json       # auf 交易的 json 模板</span>
<span class="line">|  |  └─ demo.lfc.ts               # auf 交易内的 lfc 模板</span>
<span class="line">|  └─ bpmn 交易</span>
<span class="line">|     ├─ bpmn_demo.vue             # bpmn 交易内的画面模板</span>
<span class="line">|     └─ focus/blur.ts(js)         # bpmn 交易内的 ts/js 逻辑模板</span>
<span class="line">├─ src</span>
<span class="line">├─ .classpath</span>
<span class="line">├─ .comment</span>
<span class="line">├─ .eslintrc.js                    # eslint配置文件</span>
<span class="line">├─ .eslintignore                   # eslint 需要排除的文件/文件夹</span>
<span class="line">├─ .ignore</span>
<span class="line">├─ .project</span>
<span class="line">├─ .config.properties</span>
<span class="line">├─ package.json                    # 工程的配置文件</span>
<span class="line">└─ tsconfig.json                   # 工程 typescript 配置文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h2>
<ol>
<li>scene 内新建的交易需要注册信息到 <code v-pre>config/TradeMenu.json</code> 内,信息如下:</li>
</ol>
<blockquote>
<p>交易菜单先不进行添加</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// title: 交易名称</span></span>
<span class="line">    <span class="token property">"title"</span><span class="token operator">:</span> <span class="token string">"ABX5-AUF交易"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// type: 根据创建的交易类型区分 auf - auf 交易, vue - 单画面交易, bpmn - bpmn 流程交易</span></span>
<span class="line">    <span class="token property">"type"</span><span class="token operator">:</span> <span class="token string">"auf"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 所属微应用</span></span>
<span class="line">    <span class="token property">"microName"</span><span class="token operator">:</span> <span class="token string">"ABX5"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 交易路径 auf/单画面交易 - 相对于工程的全路径(DemoModule/scene/auf交易模板/App.vue), bpmn 交易 - scene/bpmn交易模板(交易所在的文件夹)</span></span>
<span class="line">    <span class="token property">"tradeName"</span><span class="token operator">:</span> <span class="token string">"DemoModule/scene/auf交易模板/App.vue"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 工程名称</span></span>
<span class="line">    <span class="token property">"moduleName"</span><span class="token operator">:</span> <span class="token string">"DemoModule"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// containerType: 交易所处容器 tab - 交易面板, dialog - 弹窗打开</span></span>
<span class="line">    <span class="token property">"containerType"</span><span class="token operator">:</span> <span class="token string">"tab"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li><code v-pre>package.json</code> 内的 dependencies 可以进行手动选择,IDE访问服务端的接口请求到可用依赖及版本,</li>
</ol>
<blockquote>
<p>生成当前依赖的版本信息,IDE读取后添加指定版本的依赖信息</p>
</blockquote>
<ol start="3">
<li>
<p>生成 <code v-pre>data/全局数据.adm</code> 用以初始化数据模型</p>
</li>
<li>
<p>新建 @types 且携带声明文件 <code v-pre>agree.d.ts</code> 与 <code v-pre>Module.d.ts</code></p>
</li>
<li>
<p>bpmn 交易的 frame 模板</p>
</li>
</ol>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<pre><code>- 添加一个 基础布局.vue

- 新建 bpmn 交易时,可以选择是否新建/选择已有的 frame 面板. 
  **新建**: 选择 frame 存放地址;生成对应的 frame.vue
  **选择**: 可选择 scene/pages 下的 vue 画面
  **交易画面**: 该交易下的交易画面新建时会携带 frame 属性,值为新建交易时新建/选择的 frame 模板
</code></pre>
</div>
</div></template>


