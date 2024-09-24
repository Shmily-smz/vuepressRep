<template><div><h1 id="前端资源目录介绍-前端资源目录介绍" tabindex="-1"><a class="header-anchor" href="#前端资源目录介绍-前端资源目录介绍"><span>前端资源目录介绍 {#前端资源目录介绍}</span></a></h1>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">ABX5_workspace</span>
<span class="line">├─ .metadata            # 服务端资源</span>
<span class="line">├─ agreesdk             # 服务端资源</span>
<span class="line">├─ BankModule           # 服务端资源</span>
<span class="line">│  ├─ .metadata         # 服务端资源</span>
<span class="line">│  ├─ .settings         # 服务端资源</span>
<span class="line">│  ├─ .studio           # 服务端资源</span>
<span class="line">│  ├─ @type             # 服务端资源</span>
<span class="line">│  ├─ aft               # 服务端资源</span>
<span class="line">│  ├─ BankModule        # 服务端资源</span>
<span class="line">│  ├─ bin               # 服务端资源</span>
<span class="line">│  ├─ config            # 服务端资源</span>
<span class="line">│  ├─ data              # 服务端资源</span>
<span class="line">│  │  └─ 交互数据.adm   # abc配置文件</span>
<span class="line">│  ├─ lfc               # 服务端资源</span>
<span class="line">│  ├─ lib               # 服务端资源</span>
<span class="line">│  ├─ namespace         # 服务端资源</span>
<span class="line">│  ├─ pages             # 服务端资源</span>
<span class="line">│  ├─ processes         # 服务端资源</span>
<span class="line">│  │  └─ 交互数据.adm   # abc配置文件</span>
<span class="line">│  ├─ scene             # 服务端资源</span>
<span class="line">│  ├─ src               # 服务端资源</span>
<span class="line">│  ├─ .classpath        # 服务端资源</span>
<span class="line">│  ├─ .comment          # 服务端资源</span>
<span class="line">│  ├─ .eslintrc.js      # 服务端资源</span>
<span class="line">│  ├─ .ignore           # 服务端资源</span>
<span class="line">│  ├─ .project          # 服务端资源</span>
<span class="line">│  ├─ .config.properties</span>
<span class="line">│  ├─ package.json      # 服务端资源</span>
<span class="line">│  └─ tsconfig.json     # 服务端资源</span>
<span class="line">├─ BankServerModule     # 服务端资源</span>
<span class="line">├─ BaseModule           # 服务端资源</span>
<span class="line">├─ mock                 # 服务端资源</span>
<span class="line">├─ node_modules         # 服务端资源</span>
<span class="line">├─ scripts              # 服务端资源</span>
<span class="line">├─ studio-workspace     # 服务端资源</span>
<span class="line">├─ test                 # 服务端资源</span>
<span class="line">├─ .eslintignore        # 服务端资源</span>
<span class="line">├─ .selintrc            # 服务端资源</span>
<span class="line">├─ .gitignore           # 服务端资源</span>
<span class="line">├─ CHANGELOG.md         # 服务端资源</span>
<span class="line">├─ config.json          # 服务端资源</span>
<span class="line">├─ package-new.json     # 服务端资源</span>
<span class="line">├─ package.json         # 服务端资源</span>
<span class="line">├─ README.md            # 服务端资源</span>
<span class="line">├─ tsconfig.json        # 服务端资源</span>
<span class="line">└─ yarn.lock            # 服务端资源</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote>
<p>scene目录为交易目录，其中包括具体的交易目录，交易目录当中包含当前交易特色的通讯资源、页面资源、逻辑资源以及流程资源;</p>
</blockquote>
<blockquote>
<p>每个具体的交易目录下都会有且仅有一个index.flow..bpmn，其代表的是当前交易的业务流程定义</p>
</blockquote>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">.</span>
<span class="line">├─ bin                                   </span>
<span class="line">├─ data                          </span>
<span class="line">├─ lfc                           </span>
<span class="line">├─ lib</span>
<span class="line">├─ package.json  //模块信息定义,模块名、作者、版本、依赖、扩展配置等.                         </span>
<span class="line">├─ pages // pages目录为页面目录,其中包含以业务角度定义的模块中公共部分画面                         </span>
<span class="line">│  ├─ index.js</span>
<span class="line">│  ├─ index.scss                   </span>
<span class="line">│  └─ 拍照</span>
<span class="line">│     └─ 现场拍照.A.vue                       </span>
<span class="line">├─ processes                           </span>
<span class="line">├─ rcdx                           </span>
<span class="line">├─ src</span>
<span class="line">└─ scene           </span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


