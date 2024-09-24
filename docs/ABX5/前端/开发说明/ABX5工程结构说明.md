# ABX5工程结构说明 {#ABX5工程结构说明}

ABX5工程有BaseModule(平台级方案工程)、BankModule(银行应用工程)、BankServerModule(银行应用服务工程)，三个工程下的目录是一致的。不同的工程模块内目录使用的偏重也不同。

以下是不同工程内的目录说明:


## BaseModule - 平台级方案工程 {BaseModule平台级方案工程}

```
BaseModule
├─ pages                          # 页面 
│  ├─ mt                          # 移动渠道，目录同PC
│  ├─ pc                          # 传统柜面渠道、云端A端等
│  │  ├─ frame                    # 主框架，包括登录、锁屏、工作台、客户视图、内部试图等
│  │  ├─ share                    # 公共的一些页面、逻辑等
│  │  ├─ components               # fc-aui-web/fc-aui-m/TEClient的技术组件在BaseModule,业务组件在BankModule
│  │  ├─ impls                    # 实现类目录
│  │  └─ styles                   # 样式目录
│  ├─ static                      # 存放图片、音频等静态文件、不需要编译的
│  ├─ common                      # 公共依赖模块
│  │  ├─ constants                # 常量、枚举目录
│  │  ├─ container-modules        # 加载不同渠道端接口实现类的
│  │  ├─ entities                 # 实体类目录
│  │  ├─ manager                  # 状态管理类目录
│  │  ├─ components               # 基于fc组件封装的全渠道通用组件
│  │  ├─ mixins                   # 公共混入
│  │  └─ utils                    # 公共方法
│  └─ ...其他目录            
├─ scene                          # 场景
├─ processes                      # 公共流程
├─ aft                            # 打印文件，现在是aarm提供服务解析
├─ lfc                            # 存放方案级公共的逻辑文件
│  ├─ tcpt                        # 方案级通用的技术组件
│  └─ bcpt                        # 方案级通用的业务组件
├─ lib                            # java的第三方依赖
├─ data                           # 数据模型
│   ├─ adt                        # 枚举文件
│   └─ adm                        # 数据结构
└─ namespace                      # 命名空间
```


## BankModule - 银行应用工程 {#BankModule银行应用工程}


```
BankModule                        # 银行应用工程
├─ pages                          # 页面
│  ├─ mt                          # 移动渠道，目录同PC
│  ├─ pc                          # 传统柜面渠道、云端A端等
│  │  ├─ frame                    # 非特殊情况使用BaseModule的资源
│  │  ├─ share                    # 非特殊情况使用BaseModule的资源
│  │  ├─ components               # 非特殊情况使用BaseModule的资源
│  │  ├─ impls                    # 非特殊情况使用BaseModule的资源
│  │  └─ styles                   # 非特殊情况使用BaseModule的资源
│  ├─ static                      # 存放图片、音频等静态文件、不需要编译的
│  ├─ common                      # 公共依赖模块
│  │  ├─ constants                # 常量、枚举目录
│  │  ├─ container-modules        # 加载不同渠道端接口实现类的
│  │  ├─ entities                 # 实体类目录
│  │  ├─ manager                  # 状态管理类目录
│  │  ├─ components               # 基于fc组件封装的全渠道通用组件
│  │  ├─ mixins                   # 公共混入
│  │  └─ utils                    # 公共方法
│  ├─ index.html                  # 入口文件
│  ├─ app-loader.js               # 入口文件
│  └─ App.vue                     # 入口文件
├─ scene                          # 场景目录 可以新建单页面交易、auf交易、云柜bpmn交易
│  └─ .../.../../
│     ├─ 云柜bpmn交易             # 交易场景
│     │  ├─ lfc                   # 虚拟目录
│     │  ├─ namespace             # 虚拟目录
│     │  ├─ processes             # 虚拟目录
│     │  ├─ pages                 # 虚拟目录
│     │  ├─ other                 # 虚拟目录
│     │  └─ index.flow.bpmn       # 入口
│     ├─ 柜面单页面交易            # 交易场景
│     │  └─ App.vue               # 入口
│     └─ 柜面Auf交易              # 交易场景
│        ├─ App.vue               # 入口
│        ├─ xxx.auf.json          # auf流程文件
│        ├─ xxx.lfc.ts            # 逻辑lfc
│        └─ stepX.vue             # UI页面
├─ processes                      # 公共流程
├─ aft                            # 打印文件，现在是aarm提供服务解析
├─ lfc                            # 存放市场项目公共的流程逻辑文件
│  ├─ tcpt                        # 公共技术组件
│  └─ bcpt                        # 公共业务组件
├─ lib                            # java的第三方依赖
├─ data                           # 数据模型
│   ├─ adt                        # 枚举文件
│   └─ adm                        # 数据结构
├─ namespace                      # 命名空间               
├─ config                         # 配置文件
└─ package.json                   # 模块配置
```


## BankServerModule - 银行应用服务工程 {#BankServerModule银行应用服务工程}


```
BankServerModule                   # 银行应用服务工程
├─ pages                           # 页面
├─ scene                           # 场景目录 可以新建服务
│  ├─ 服务1                        # 服务定义目录
│  ├─ 服务2                        # 服务定义目录
│  │  ├─ apis
│  │  │  ├─ api1                   # 虚拟目录
│  │  │  ├─ api2                   # 虚拟目录
│  │  │  │  ├─ csd                 # 服务描述文件目录
│  │  │  │  └─ lfc                 # 服务描述文件目录
│  │  │  └─ ...api                 # 虚拟目录
│  │  ├─ tcpt                      # 服务内技术组件
│  │  ├─ bcpt                      # 服务内业务组件
│  │  ├─ config                    # 服务内配置
│  │  │   ├─ rcd                   # 报文格式
│  │  │   ├─ mybatis               # 数据库
│  │  │   └─ custom                # 服务私有配置
│  │  └─ xxx.csp                   # 服务描述文件
│  └─ ...服务                      # 服务定义目录
├─ processes                       # 公共流程
├─ aft                             # 打印文件，现在是aarm提供服务解析
├─ lfc                             # 公共逻辑文件
│  ├─ tcpt                         # 跨服务通用的技术组件
│  └─ bcpt                         # 跨服务通用的业务组件
├─ lib                             # java的第三方依赖
├─ data                            # 数据模型
│   ├─ adt                         # 枚举文件
│   └─ adm                         # 数据结构
├─ namespace                       # 命名空间               
├─ config                          # 配置文件
└─ package.json                    # 模块配置
```
