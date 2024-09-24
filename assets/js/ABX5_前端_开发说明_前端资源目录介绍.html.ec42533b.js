"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[807],{4512:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>l,data:()=>c});var e=a(20641);const i={},l=(0,a(66262).A)(i,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="前端资源目录介绍-前端资源目录介绍" tabindex="-1"><a class="header-anchor" href="#前端资源目录介绍-前端资源目录介绍"><span>前端资源目录介绍 {#前端资源目录介绍}</span></a></h1><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">ABX5_workspace</span>\n<span class="line">├─ .metadata            # 服务端资源</span>\n<span class="line">├─ agreesdk             # 服务端资源</span>\n<span class="line">├─ BankModule           # 服务端资源</span>\n<span class="line">│  ├─ .metadata         # 服务端资源</span>\n<span class="line">│  ├─ .settings         # 服务端资源</span>\n<span class="line">│  ├─ .studio           # 服务端资源</span>\n<span class="line">│  ├─ @type             # 服务端资源</span>\n<span class="line">│  ├─ aft               # 服务端资源</span>\n<span class="line">│  ├─ BankModule        # 服务端资源</span>\n<span class="line">│  ├─ bin               # 服务端资源</span>\n<span class="line">│  ├─ config            # 服务端资源</span>\n<span class="line">│  ├─ data              # 服务端资源</span>\n<span class="line">│  │  └─ 交互数据.adm   # abc配置文件</span>\n<span class="line">│  ├─ lfc               # 服务端资源</span>\n<span class="line">│  ├─ lib               # 服务端资源</span>\n<span class="line">│  ├─ namespace         # 服务端资源</span>\n<span class="line">│  ├─ pages             # 服务端资源</span>\n<span class="line">│  ├─ processes         # 服务端资源</span>\n<span class="line">│  │  └─ 交互数据.adm   # abc配置文件</span>\n<span class="line">│  ├─ scene             # 服务端资源</span>\n<span class="line">│  ├─ src               # 服务端资源</span>\n<span class="line">│  ├─ .classpath        # 服务端资源</span>\n<span class="line">│  ├─ .comment          # 服务端资源</span>\n<span class="line">│  ├─ .eslintrc.js      # 服务端资源</span>\n<span class="line">│  ├─ .ignore           # 服务端资源</span>\n<span class="line">│  ├─ .project          # 服务端资源</span>\n<span class="line">│  ├─ .config.properties</span>\n<span class="line">│  ├─ package.json      # 服务端资源</span>\n<span class="line">│  └─ tsconfig.json     # 服务端资源</span>\n<span class="line">├─ BankServerModule     # 服务端资源</span>\n<span class="line">├─ BaseModule           # 服务端资源</span>\n<span class="line">├─ mock                 # 服务端资源</span>\n<span class="line">├─ node_modules         # 服务端资源</span>\n<span class="line">├─ scripts              # 服务端资源</span>\n<span class="line">├─ studio-workspace     # 服务端资源</span>\n<span class="line">├─ test                 # 服务端资源</span>\n<span class="line">├─ .eslintignore        # 服务端资源</span>\n<span class="line">├─ .selintrc            # 服务端资源</span>\n<span class="line">├─ .gitignore           # 服务端资源</span>\n<span class="line">├─ CHANGELOG.md         # 服务端资源</span>\n<span class="line">├─ config.json          # 服务端资源</span>\n<span class="line">├─ package-new.json     # 服务端资源</span>\n<span class="line">├─ package.json         # 服务端资源</span>\n<span class="line">├─ README.md            # 服务端资源</span>\n<span class="line">├─ tsconfig.json        # 服务端资源</span>\n<span class="line">└─ yarn.lock            # 服务端资源</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p>scene目录为交易目录，其中包括具体的交易目录，交易目录当中包含当前交易特色的通讯资源、页面资源、逻辑资源以及流程资源;</p></blockquote><blockquote><p>每个具体的交易目录下都会有且仅有一个index.flow..bpmn，其代表的是当前交易的业务流程定义</p></blockquote><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">.</span>\n<span class="line">├─ bin                                   </span>\n<span class="line">├─ data                          </span>\n<span class="line">├─ lfc                           </span>\n<span class="line">├─ lib</span>\n<span class="line">├─ package.json  //模块信息定义,模块名、作者、版本、依赖、扩展配置等.                         </span>\n<span class="line">├─ pages // pages目录为页面目录,其中包含以业务角度定义的模块中公共部分画面                         </span>\n<span class="line">│  ├─ index.js</span>\n<span class="line">│  ├─ index.scss                   </span>\n<span class="line">│  └─ 拍照</span>\n<span class="line">│     └─ 现场拍照.A.vue                       </span>\n<span class="line">├─ processes                           </span>\n<span class="line">├─ rcdx                           </span>\n<span class="line">├─ src</span>\n<span class="line">└─ scene           </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',5)]))}]]),c=JSON.parse('{"path":"/ABX5/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E8%AF%B4%E6%98%8E/%E5%89%8D%E7%AB%AF%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95%E4%BB%8B%E7%BB%8D.html","title":"前端资源目录介绍 {#前端资源目录介绍}","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"ABX5/前端/开发说明/前端资源目录介绍.md"}')}}]);