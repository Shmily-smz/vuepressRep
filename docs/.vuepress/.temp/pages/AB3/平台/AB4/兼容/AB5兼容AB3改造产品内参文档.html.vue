<template><div><h3 id="待完善的点" tabindex="-1"><a class="header-anchor" href="#待完善的点"><span>待完善的点</span></a></h3>
<p>代码优化 尽量少改 ab3 代码</p>
<p>1、GuiTradeIssueListener、DomainDelegator 拦截放在最开始</p>
<p>2、Domain、ExteriorView 暴露的接口采用反射方式</p>
<p>3、扩展点与类名去除 adore 相关</p>
<p>4、三峡银行 git 库内容移动到 Client 文件夹中</p>
<p>兼容概要设计文档
兼容产品内部参考文档 怎么修改 什么思路 几种打开交易，分别怎么实现 发消息 常见问题处理</p>
<h3 id="一、前期准备" tabindex="-1"><a class="header-anchor" href="#一、前期准备"><span>一、前期准备</span></a></h3>
<p>1、AB3 市场与生产版本一致的源码</p>
<blockquote>
<p>如需要做宁波银行 AB5 兼容 AB3，需先提供一份与宁波银行生产一致的 AB3 源码，并能在 eclipse 中正常运行 abs、abc</p>
</blockquote>
<p>2、AB3 市场一份可以运行的 abs 与 abc 产品</p>
<blockquote>
<p>一方面由于 abs3 基本不做修改，可以使用产品的方式运行</p>
<p>另一方面用于确认 abc3 插件列表
必须拿一份市场的生产版本客户端插件，防止市场源码插件与生产插件不一致</p>
</blockquote>
<p>3、一份可以参考的其他兼容市场的源码</p>
<blockquote>
<p>AB5 兼容 AB3 的参考北京银行</p>
</blockquote>
<h3 id="二、git-库维护方式" tabindex="-1"><a class="header-anchor" href="#二、git-库维护方式"><span>二、git 库维护方式</span></a></h3>
<p>1、原有 AB3 一个 git 库：维护 AB3 客户端和服务端所有插件资源，源码可单独运行 abc 和 abs</p>
<p>2、ABC5 一个 git 库：默认是使用 ABC5 的主分支 AB5.1ReProject</p>
<p>3、兼容部分 ABC3 一个 git 库</p>
<blockquote>
<p>1、此库中插件与生产上兼容 abc3 插件保持一致</p>
<p>2、所有市场的兼容代码在同一库中，使用分支方式存储</p>
</blockquote>
<p>上面 3 个库的使用方式</p>
<blockquote>
<p>原有 AB3 的 git 库使用一个 eclipse 打开</p>
<p>ABC5 与兼容的 ABC3 两个 git 库使用一个 eclipse 打开(用于导出兼容客户端)</p>
</blockquote>
<p><strong>例子代码，以三峡银行为基板，原有 AB3 使用 eclipse3.7.2（indigo-SR2）</strong></p>
<div class="language-bash line-numbers-mode" data-highlighter="prismjs" data-ext="sh" data-title="sh"><pre v-pre><code><span class="line"><span class="token comment">#原有AB3库</span></span>
<span class="line">ssh://git@192.9.200.184:22/ab-old  分支SanXiaYinHang</span>
<span class="line"><span class="token comment">#兼容ABC3库</span></span>
<span class="line">git@192.9.200.187:abc-platform/ab5_ab3_compatible.git  分支SanXiaYinHang</span>
<span class="line"><span class="token comment">#ABC5库</span></span>
<span class="line">git@192.9.200.187:abc-platform/abc5.0-teller.git   分支AB5.1ReProject</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="三、修改步骤" tabindex="-1"><a class="header-anchor" href="#三、修改步骤"><span>三、修改步骤</span></a></h3>
<ol>
<li>修改插件编码，维护代码到 git 上面</li>
</ol>
<blockquote>
<p>AB3 插件一般为 GBK 编码、新版 eclipse4.7 默认为 UTF8 编码，需要指定工程为 GBK</p>
</blockquote>
<blockquote>
<p>gitignore 文件等也需要配置</p>
</blockquote>
<ol start="2">
<li>修改 eclipse 升级与 jdk 升级带来的匹配问题</li>
</ol>
<blockquote>
<p>ftp,hotkey,vt 打印等</p>
</blockquote>
<ol start="3">
<li>增加兼容插件，暴露原有 AB3 接口</li>
</ol>
<blockquote>
<p>增加三个兼容插件，AB3 原有客户端暴露相关接口，如 Domain、ExteriorView、GuiTradeIssueListener、DomainDelegator 等</p>
</blockquote>
<ol start="4">
<li>联调交易打开功能</li>
</ol>
<blockquote>
<p>梳理 product、launch 配置文件，其他各 properties 配置文件，运行 abc</p>
<p>验证 AB5 异步打开 AB3，AB3 同步/异步打开 AB3 等交易打开功能</p>
</blockquote>
<ol start="5">
<li>联调 tellerinfo 同步，消息发送等其他功能</li>
</ol>
<blockquote>
<p>tellerinfo、消息发送</p>
</blockquote>
<ol start="6">
<li>联调交易参数传递，参数回传等功能</li>
</ol>
<blockquote>
<p>AB5 与 AB3 交易的出入参</p>
</blockquote>
<ol start="7">
<li>联调 tellerinfo 同步，消息发送等功能，tellerinfo，消息转发需要原 AB3 服务端增加兼容插件</li>
</ol>
<blockquote>
<p>tellerinfo 同步、AB5 发送消息到 AB3 集群这两个功能需要再</p>
</blockquote>
<ol start="8">
<li>导出产品包，用于开发环境使用</li>
</ol>
<blockquote>
<p>维护导出的产品包</p>
</blockquote>
<h3 id="四、实现思路" tabindex="-1"><a class="header-anchor" href="#四、实现思路"><span>四、实现思路</span></a></h3>
<p>整体架构为：
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211117171036.png" alt="image-20211117171036444#300px">
<strong>列举关键功能的实现思路</strong>
1、服务启动之间的关系</p>
<blockquote>
<p>在兼容插件中添加 LTSClientPrerequisite 预启动，用于在 AB5.0UI 启动后再启动 lts 服务</p>
</blockquote>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211117171049.png" alt="image-20211117171049554#300px">
2、几种打开交易方式，分别怎么实现，代码怎么调用</p>
<blockquote>
<p>1）5.0 打开异步打开 3.x 交易：5.0 调用 CompatibleCreateComposite 组件获取 handle 并将 handle 内嵌到 5.0，然后再调用 CompatibleOpenTrade 打开 3.x 交易</p>
<p>2）5.0 弹框打开 3.x 交易：调用 CompatibleOpenTradeWindow 组件的 sdk 打开</p>
<p>3）3.x 同步打开 3.x 交易：平台将 3.x 的 GuiTradeIssueListener.openTrade()方法代理到 LtsSyncOpenAdoreFilter 类，该类缓存 handle、parentDomain、hook、exportVar 等信息，通过 pubsub 通知 js 层根据传入参数 handle 调用 CompatibleOpenTrade 打开。另外退出并打开交易、挂起并打开交易都是通过和 LtsSyncOpenAdoreFilter 在一个包内的 filter 对应实现</p>
</blockquote>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211117171054.png" alt="image-20211117171054535#300px">
3、各配置文件怎么存放</p>
<blockquote>
<p>1）log4j.properties：统一维护。5.0 日志存放在客户端根目录的 configuration 目录下，3.x 的日志配置在各个插件中，兼容环境下将 3.x 各个插件中的配置文件整合到 5.0 的 log4j.properties 配置文件中统一下发管理</p>
<p>2）preference.properties：各自维护。目前 5.0 的配置文件派出 cocktail 相关配置都包含 a5 的字段，所以 5.0 的配置正常不会和 3.x 配置冲突，所以配置还是采用各自维护的方式，都通过各自的 abs 进行下发，由于 cocktail 相关配置冲突，所以修改 3.x 配置跟新类 PreferenceClient 过滤 cocktail 相关配置</p>
<p>3）theme 主题配置文件：各自维护。5.0 主题维护在应用的 workspace 目录下，3.x 的主题配置文件维护在 abc/configuration/theme 目录下，所以并不冲突，同时 3.x 主题维护在 cn.com.agree.ab.exterior 插件中，所以主题这块正常不需要修改，只需要验证是否可配置成功</p>
</blockquote>
<p>4、插件及资源怎么更新</p>
<blockquote>
<p>1）客户端插件：3.x 的插件由 5.0 统一更新下发，原 3.x 服务端 abs 的插件不做更改；所以兼容客户端 5.0+3.x+compatible 插件统一从 5.0 的 abs 上下发</p>
<p>2）交易资源：交易资源各自维护各自的资源下载，由于 5.0 资源采用 grm 管理所以需要将 3.x 的 workspace 下的资源文件夹配置到 5.0 配置中防止 grm 误删操作，配置为</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">cn.com.agree.ab.a5.client.resource/ignoreDirs = /www/node_modules,compatible</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>3）其它：要确定 3.x 交易中是否存在临时生成的文件存放到 workspace 下，同时查看 3.x 的 workspace 下的所有资源文件夹是否存在客户端未配置误删问题！！！！！！</p>
</blockquote>
<p>5、消息怎么发送</p>
<blockquote>
<p>1）5.0 发送消息给 3.x：调用 sdk 的 CompatibleSendMessage 组件实现，原理：市场兼容时需要将 cn.com.agree.ab.server.compatible 服务端插件上到所有 AB3 原有的 ABS 服务器上，该插件一个功能便是接收 CompatibleSendMessage 发送的消息，并将消息按照 3.x 以前的消息转发方式进行转发</p>
<p>2）3.x 发送消息给 5.0：原则上并没有 3.x 交易直接发送给 5.0 交易的场景！！！但由于兼容改造将以前 3.x 的主界面换成了 5.0 的主界面，之前 3.x 通过发消息给 3.x 主界面的功能需要转给 5.0 的主界面，为满足此功能，平台做了一个自动转发机制，配置为</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">cn.com.agree.ab.a5.client.compatible/trademapping = 3.xPath,5.0Path\n3.xPath,5.0Path</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>平台会将发给 3.xPath 的消息转发 js 层应用层，应用根据具体交易 path 进行处理，转发参考：MessageReDirector.redirectSendMap()方法调用者</p>
</blockquote>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211117171104.png" alt="image-20211117171104380#300px">
6、tellerinfo 怎么同步</p>
<blockquote>
<p>1）5.0 同步柜员信息到 3.x：调用 sdk 的 CompatibleUpdateTellerInfo 组件实现</p>
<p>2）3.x 同步柜员信息到 5.0：可查看 UpdateAmebaTellerInfo5.action()方法的调用查看，原理：通过代理 DomainDelegator 中的 setTellerInfo 命令将柜员信息同步到 5.0 中，同步到 5.0 中的方式依旧采用 pubsub 通知应用层，应用层做柜员信息同步</p>
</blockquote>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211117171059.png" alt="image-20211117171059295#300px">
6、日志查看方式</p>
<blockquote>
<p>1）日志配置文件由 5.0 统一管理，存放位置还是在 abc/log/目录下，只是 3.x 的日志文件名统一添加了 lts_前缀，比如以前 3.x 的 client.log 兼容环境下改为了 lts_client.log</p>
</blockquote>
<p>7、断线重连的方式</p>
<blockquote>
<p>1）5.0 和 3.x 的断线重连规则目前还是各自维护，目前只是在创建 3.x 父面板的时候校验了 3.x 是否启动成功来校验打开交易是否合法，如果使用过程中断线，3.x 交易打开会报交易超时异常，并未针对 3.x 断线做特殊处理</p>
</blockquote>
<p>8、热键支持的程度</p>
<blockquote>
<p>1）交易热键：3.x 原有注册的交易热键现在继续支持</p>
<p>2）应用级热键：由于升级时将 3.x 的主界面换成 5.0 主界面且 5.0 的展示采用 html5 热键维护在 js 层，所以之前 3.x 中注册的应用级热键不再支持出发(可翻写到 5.0 中)，要触法被翻写的应用级热键只能通过将焦点切换到 5.0 主界面或 5.0 交易中触法应用级热键</p>
</blockquote>
<h3 id="五、常见问题处理" tabindex="-1"><a class="header-anchor" href="#五、常见问题处理"><span>五、常见问题处理</span></a></h3>
<p>1、AB3 父子交易传值方式</p>
<div class="language-java line-numbers-mode" data-highlighter="prismjs" data-ext="java" data-title="java"><pre v-pre><code><span class="line"><span class="token comment">//父交易放置importVar方式</span></span>
<span class="line"><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span> importVar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span><span class="token class-name">String</span><span class="token punctuation">></span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">importVar<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">"#accno"</span><span class="token punctuation">,</span> <span class="token string">"9999"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//子交易中取importVar方式</span></span>
<span class="line"><span class="token class-name">String</span> accno <span class="token operator">=</span> <span class="token function">getStoreData</span><span class="token punctuation">(</span><span class="token string">"accno"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//父交易中定义回传方式</span></span>
<span class="line"><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> exportNames <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">"#MyName"</span> <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//子交易中设置回传值方式</span></span>
<span class="line"><span class="token function">putStoreData</span><span class="token punctuation">(</span><span class="token string">"MyName"</span><span class="token punctuation">,</span> <span class="token string">"中国"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、注意事项重申" tabindex="-1"><a class="header-anchor" href="#六、注意事项重申"><span>六、注意事项重申</span></a></h3>
<p>1、源码提交以功能修改进行提交，不能统一提交</p>
<p>2、上线客户端插件整理规则；根据提交历史整理出来兼容修改插件列表，改动的插件重新导出（要改一下版本号改成 qualifier 的形式），没有修改的插件以原 3.5 客户端插件为准</p>
<p>3、兼容客户端导出方式：差量导出 3.x 插件放到 5.x 的客户端下，验证启动成功就好</p>
<p>4、现场处理：拿一个现场的生产客户端版本 和源码进行比对（个数），如果不一致需要找对应源码</p>
<p>5、生产版本比对：凡是咱们修改的 3.x 的插件，必须和生产上正在用的插件做一个反编译对比（原因：现有 3.x 的市场有可能还在做业务改造，中间给出的源码和现有源码不一致了）</p>
<p>6、3.x 测试环境的插件和生产插件也是不一致，到现场做兼容的时候要求重新按照生产插件部署一个环境</p>
<p>7、js 调用组件的规则：在调用兼容技术组件的时候必须调用一个判断 3.x 客户端是否启动成功的插件,组件名称：CompatibleGetLtsStarted</p>
<p>8、同步 tellerInfo 需要按照市场 tellerInfo 管理方式进行管理</p>
<h3 id="七、后期要改造的点" tabindex="-1"><a class="header-anchor" href="#七、后期要改造的点"><span>七、后期要改造的点</span></a></h3>
<p>1、类重命名
2、与信创接口统一
3、使用 bytebuddy 动态修改类</p>
</div></template>


