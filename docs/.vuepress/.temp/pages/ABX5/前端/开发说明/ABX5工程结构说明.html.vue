<template><div><h1 id="abx5工程结构说明-abx5工程结构说明" tabindex="-1"><a class="header-anchor" href="#abx5工程结构说明-abx5工程结构说明"><span>ABX5工程结构说明 {#ABX5工程结构说明}</span></a></h1>
<p>ABX5工程有BaseModule(平台级方案工程)、BankModule(银行应用工程)、BankServerModule(银行应用服务工程)，三个工程下的目录是一致的。不同的工程模块内目录使用的偏重也不同。</p>
<p>以下是不同工程内的目录说明:</p>
<h2 id="basemodule-平台级方案工程-basemodule平台级方案工程" tabindex="-1"><a class="header-anchor" href="#basemodule-平台级方案工程-basemodule平台级方案工程"><span>BaseModule - 平台级方案工程 {BaseModule平台级方案工程}</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">BaseModule</span>
<span class="line">├─ pages                          # 页面 </span>
<span class="line">│  ├─ mt                          # 移动渠道，目录同PC</span>
<span class="line">│  ├─ pc                          # 传统柜面渠道、云端A端等</span>
<span class="line">│  │  ├─ frame                    # 主框架，包括登录、锁屏、工作台、客户视图、内部试图等</span>
<span class="line">│  │  ├─ share                    # 公共的一些页面、逻辑等</span>
<span class="line">│  │  ├─ components               # fc-aui-web/fc-aui-m/TEClient的技术组件在BaseModule,业务组件在BankModule</span>
<span class="line">│  │  ├─ impls                    # 实现类目录</span>
<span class="line">│  │  └─ styles                   # 样式目录</span>
<span class="line">│  ├─ static                      # 存放图片、音频等静态文件、不需要编译的</span>
<span class="line">│  ├─ common                      # 公共依赖模块</span>
<span class="line">│  │  ├─ constants                # 常量、枚举目录</span>
<span class="line">│  │  ├─ container-modules        # 加载不同渠道端接口实现类的</span>
<span class="line">│  │  ├─ entities                 # 实体类目录</span>
<span class="line">│  │  ├─ manager                  # 状态管理类目录</span>
<span class="line">│  │  ├─ components               # 基于fc组件封装的全渠道通用组件</span>
<span class="line">│  │  ├─ mixins                   # 公共混入</span>
<span class="line">│  │  └─ utils                    # 公共方法</span>
<span class="line">│  └─ ...其他目录            </span>
<span class="line">├─ scene                          # 场景</span>
<span class="line">├─ processes                      # 公共流程</span>
<span class="line">├─ aft                            # 打印文件，现在是aarm提供服务解析</span>
<span class="line">├─ lfc                            # 存放方案级公共的逻辑文件</span>
<span class="line">│  ├─ tcpt                        # 方案级通用的技术组件</span>
<span class="line">│  └─ bcpt                        # 方案级通用的业务组件</span>
<span class="line">├─ lib                            # java的第三方依赖</span>
<span class="line">├─ data                           # 数据模型</span>
<span class="line">│   ├─ adt                        # 枚举文件</span>
<span class="line">│   └─ adm                        # 数据结构</span>
<span class="line">└─ namespace                      # 命名空间</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bankmodule-银行应用工程-bankmodule银行应用工程" tabindex="-1"><a class="header-anchor" href="#bankmodule-银行应用工程-bankmodule银行应用工程"><span>BankModule - 银行应用工程 {#BankModule银行应用工程}</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">BankModule                        # 银行应用工程</span>
<span class="line">├─ pages                          # 页面</span>
<span class="line">│  ├─ mt                          # 移动渠道，目录同PC</span>
<span class="line">│  ├─ pc                          # 传统柜面渠道、云端A端等</span>
<span class="line">│  │  ├─ frame                    # 非特殊情况使用BaseModule的资源</span>
<span class="line">│  │  ├─ share                    # 非特殊情况使用BaseModule的资源</span>
<span class="line">│  │  ├─ components               # 非特殊情况使用BaseModule的资源</span>
<span class="line">│  │  ├─ impls                    # 非特殊情况使用BaseModule的资源</span>
<span class="line">│  │  └─ styles                   # 非特殊情况使用BaseModule的资源</span>
<span class="line">│  ├─ static                      # 存放图片、音频等静态文件、不需要编译的</span>
<span class="line">│  ├─ common                      # 公共依赖模块</span>
<span class="line">│  │  ├─ constants                # 常量、枚举目录</span>
<span class="line">│  │  ├─ container-modules        # 加载不同渠道端接口实现类的</span>
<span class="line">│  │  ├─ entities                 # 实体类目录</span>
<span class="line">│  │  ├─ manager                  # 状态管理类目录</span>
<span class="line">│  │  ├─ components               # 基于fc组件封装的全渠道通用组件</span>
<span class="line">│  │  ├─ mixins                   # 公共混入</span>
<span class="line">│  │  └─ utils                    # 公共方法</span>
<span class="line">│  ├─ index.html                  # 入口文件</span>
<span class="line">│  ├─ app-loader.js               # 入口文件</span>
<span class="line">│  └─ App.vue                     # 入口文件</span>
<span class="line">├─ scene                          # 场景目录 可以新建单页面交易、auf交易、云柜bpmn交易</span>
<span class="line">│  └─ .../.../../</span>
<span class="line">│     ├─ 云柜bpmn交易             # 交易场景</span>
<span class="line">│     │  ├─ lfc                   # 虚拟目录</span>
<span class="line">│     │  ├─ namespace             # 虚拟目录</span>
<span class="line">│     │  ├─ processes             # 虚拟目录</span>
<span class="line">│     │  ├─ pages                 # 虚拟目录</span>
<span class="line">│     │  ├─ other                 # 虚拟目录</span>
<span class="line">│     │  └─ index.flow.bpmn       # 入口</span>
<span class="line">│     ├─ 柜面单页面交易            # 交易场景</span>
<span class="line">│     │  └─ App.vue               # 入口</span>
<span class="line">│     └─ 柜面Auf交易              # 交易场景</span>
<span class="line">│        ├─ App.vue               # 入口</span>
<span class="line">│        ├─ xxx.auf.json          # auf流程文件</span>
<span class="line">│        ├─ xxx.lfc.ts            # 逻辑lfc</span>
<span class="line">│        └─ stepX.vue             # UI页面</span>
<span class="line">├─ processes                      # 公共流程</span>
<span class="line">├─ aft                            # 打印文件，现在是aarm提供服务解析</span>
<span class="line">├─ lfc                            # 存放市场项目公共的流程逻辑文件</span>
<span class="line">│  ├─ tcpt                        # 公共技术组件</span>
<span class="line">│  └─ bcpt                        # 公共业务组件</span>
<span class="line">├─ lib                            # java的第三方依赖</span>
<span class="line">├─ data                           # 数据模型</span>
<span class="line">│   ├─ adt                        # 枚举文件</span>
<span class="line">│   └─ adm                        # 数据结构</span>
<span class="line">├─ namespace                      # 命名空间               </span>
<span class="line">├─ config                         # 配置文件</span>
<span class="line">└─ package.json                   # 模块配置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="bankservermodule-银行应用服务工程-bankservermodule银行应用服务工程" tabindex="-1"><a class="header-anchor" href="#bankservermodule-银行应用服务工程-bankservermodule银行应用服务工程"><span>BankServerModule - 银行应用服务工程 {#BankServerModule银行应用服务工程}</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">BankServerModule                   # 银行应用服务工程</span>
<span class="line">├─ pages                           # 页面</span>
<span class="line">├─ scene                           # 场景目录 可以新建服务</span>
<span class="line">│  ├─ 服务1                        # 服务定义目录</span>
<span class="line">│  ├─ 服务2                        # 服务定义目录</span>
<span class="line">│  │  ├─ apis</span>
<span class="line">│  │  │  ├─ api1                   # 虚拟目录</span>
<span class="line">│  │  │  ├─ api2                   # 虚拟目录</span>
<span class="line">│  │  │  │  ├─ csd                 # 服务描述文件目录</span>
<span class="line">│  │  │  │  └─ lfc                 # 服务描述文件目录</span>
<span class="line">│  │  │  └─ ...api                 # 虚拟目录</span>
<span class="line">│  │  ├─ tcpt                      # 服务内技术组件</span>
<span class="line">│  │  ├─ bcpt                      # 服务内业务组件</span>
<span class="line">│  │  ├─ config                    # 服务内配置</span>
<span class="line">│  │  │   ├─ rcd                   # 报文格式</span>
<span class="line">│  │  │   ├─ mybatis               # 数据库</span>
<span class="line">│  │  │   └─ custom                # 服务私有配置</span>
<span class="line">│  │  └─ xxx.csp                   # 服务描述文件</span>
<span class="line">│  └─ ...服务                      # 服务定义目录</span>
<span class="line">├─ processes                       # 公共流程</span>
<span class="line">├─ aft                             # 打印文件，现在是aarm提供服务解析</span>
<span class="line">├─ lfc                             # 公共逻辑文件</span>
<span class="line">│  ├─ tcpt                         # 跨服务通用的技术组件</span>
<span class="line">│  └─ bcpt                         # 跨服务通用的业务组件</span>
<span class="line">├─ lib                             # java的第三方依赖</span>
<span class="line">├─ data                            # 数据模型</span>
<span class="line">│   ├─ adt                         # 枚举文件</span>
<span class="line">│   └─ adm                         # 数据结构</span>
<span class="line">├─ namespace                       # 命名空间               </span>
<span class="line">├─ config                          # 配置文件</span>
<span class="line">└─ package.json                    # 模块配置</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


