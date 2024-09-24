<template><div><h1 id="新手简介-新手简介" tabindex="-1"><a class="header-anchor" href="#新手简介-新手简介"><span>新手简介 {#新手简介}</span></a></h1>
<p>介绍工程目录以及使用ide开发交易流程</p>
<h2 id="abx5开发特性-abx5开发特性" tabindex="-1"><a class="header-anchor" href="#abx5开发特性-abx5开发特性"><span>ABX5开发特性 {#ABX5开发特性}</span></a></h2>
<ul>
<li><strong>一体化</strong></li>
</ul>
<blockquote>
<p>站在业务的角度，所有技术围绕业务组合在一起。</p>
</blockquote>
<ul>
<li><strong>模块化</strong></li>
</ul>
<blockquote>
<p>支持跨团队的协作，能够体现在模块形态的解耦上，通过模块引用的方式扩展定制，既可以保护版本，又方便收集积累。</p>
</blockquote>
<ul>
<li><strong>定制复用</strong></li>
</ul>
<blockquote>
<p>复用资源与定制资源两者需要有天然的结合的方式，而不应该依赖繁冗的配置。</p>
</blockquote>
<ul>
<li><strong>层层深入的应用框架</strong></li>
</ul>
<blockquote>
<p>在业务层面，业务通过流程表达，流程由任务节点组合而成，在技术设计层面，任务可以通过就将可复用定制的步骤以流程的方式组合，在技术实现层面步骤由各端的页面交互、逻辑处理、后台通讯等实现。</p>
</blockquote>
<ul>
<li><strong>模型化数据字典</strong></li>
</ul>
<blockquote>
<p>可复用定制的步骤 vs 层出不穷的特定交易，原子步骤使用标准数据，会话数据形成标准数据总线。避免集中定义带来的数据映射。</p>
</blockquote>
<h2 id="ide简介-ide简介" tabindex="-1"><a class="header-anchor" href="#ide简介-ide简介"><span>ide简介 {#ide简介}</span></a></h2>
<h3 id="导航栏" tabindex="-1"><a class="header-anchor" href="#导航栏"><span>导航栏</span></a></h3>
<ol>
<li>导航页面
下载最新版的AgreeStudio然后打开进入导航页面，如图所示</li>
</ol>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/导航页面.png" alt="导航页面" title="导航页面"></p>
<ol start="2">
<li>工程</li>
</ol>
<p>点击工程有创建工程、导入工程、资源构建以及清空工程信息四个选项</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/工程.png" alt="工程" title="工程"></p>
<p>工程需要引入依赖工程和交易工程</p>
<h3 id="工程目录说明" tabindex="-1"><a class="header-anchor" href="#工程目录说明"><span>工程目录说明</span></a></h3>
<blockquote>
<p>依赖工程和交易工程目录完全一致,以交易工程目录为例,简单介绍一下目录</p>
</blockquote>
<p><strong>1. aft：保留的是打印相关的aft文件,主要是小票之类的,可以编辑新建</strong></p>
<p><strong>2. config：交易相关的相关配置文件,可以创建客户端服务端的配置文件</strong></p>
<p><strong>3. data：数据模型,可以添加字段,采用中文命名的方式,可观察性更高,提高开发效率</strong></p>
<p><strong>4. lfc：存放java文件,更加灵活,通过简单逻辑实现需求</strong></p>
<p><strong>5. lib：存放的是引入的第三方java包</strong></p>
<p><strong>6. namespace：字段映射的文件</strong></p>
<p><strong>7. pages：存放前端的资源文件,包括vue画面和js文件，abx5的前端资源存放在服务端编译,将开发好的工程打包部署到,由服务端进行编译,编译好之后下发至客户端</strong></p>
<p><strong>8. processes：存放流程文件</strong></p>
<p><strong>9. rcdx：通讯文件,调用第三方的一些文件,abx5提供图形化开发的模式,可以进行高效率开发一些外围通讯的服务文件,由服务端进行解析调用,主要包含数据库,第三方接口</strong></p>
<p><strong>10. trade(现为scene)：可以新建交易,根据业务场景分为对公业务、个人业务、结束业务</strong></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/工程目录.png" alt="工程目录" title="工程目录">
3. 视图</p>
<p>点击视图有切换左侧视图、右侧视图、下方视图和组件库资源展示四个选项</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/视图.png" alt="视图" title="视图"></p>
<ol start="4">
<li>组件</li>
</ol>
<p>点击组件有同步前端技术组件、同步前端sdk组件、同步服务技术组件以及刷新服务技术组件</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/组件.png" alt="组件" title="组件"></p>
<ol start="5">
<li>辅助</li>
</ol>
<p>点击辅助有调试工具、首选项、设置、打开用户配置目录</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/辅助.png" alt="辅助" title="辅助"></p>
<ol start="6">
<li>帮助</li>
</ol>
<p>点击帮助有检查更新、版本回退、更新日志以及关于四个选项</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/帮助.png" alt="帮助" title="帮助"></p>
<h2 id="创建工程" tabindex="-1"><a class="header-anchor" href="#创建工程"><span>创建工程</span></a></h2>
<ul>
<li>首先点击工程 - 导入一个依赖工程BaseModule，创建一个交易工程,点击创建工程 - 选择ABX应用,</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建工程.png" alt="创建工程" title="创建工程"></p>
<ul>
<li>给创建工程命名，地址不可更改</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/名称.png" alt="工程命名" title="名称"></p>
<h2 id="创建交易" tabindex="-1"><a class="header-anchor" href="#创建交易"><span>创建交易</span></a></h2>
<p>本次交易开发以个人开卡业务为例</p>
<h3 id="新建交易" tabindex="-1"><a class="header-anchor" href="#新建交易"><span>新建交易</span></a></h3>
<ul>
<li>右键点击scene[场景] - 新建 - 交易</li>
</ul>
<blockquote>
<p>这里以bpmn交易为例</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建交易.png" alt="创建交易" title="创建交易"></p>
<ul>
<li>新建交易名称中输入“个人业务/开卡”</li>
</ul>
<blockquote>
<p>命名支持层级目录创建，用'/'或者'.'隔开</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/个人开卡.png" alt="个人开卡" title="个人开卡"></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/个人开卡1.png" alt="个人开卡1" title="个人开卡1"></p>
<ul>
<li>开卡下也包含了lfc、namespace等目录</li>
</ul>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>这些目录的功能：在实际开发中，ABX5本身支持资源查找的三层解析功能，查找同一个资源文件首先在当前交易资源文件目录下查找，如果查找不到，在当前工程下查找；如果在当前工程中也查找不到，就去当前依赖工程下查找，这样可以解决一些资源查找相关的问题。</p>
</div>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/目录.png" alt="目录" title="目录"></p>
<h3 id="package-json配置" tabindex="-1"><a class="header-anchor" href="#package-json配置"><span>package.json配置</span></a></h3>
<p>在package.json文件中找到&quot;moduleDependencies&quot;字段,添加依赖工程</p>
<p>引用方式通过<code v-pre>key:value</code>形式引入</p>
<blockquote>
<p>key是依赖工程名称，value是依赖工程的版本</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/配置.png" alt="配置" title="配置"></p>
<p>在依赖工程中查看名称和版本</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/key.png" alt="key" title="key"></p>
<p>然后返回当前工程中添加依赖工程的名称和版本号</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/添加.png" alt="添加" title="添加"></p>
<h3 id="交易流程文件" tabindex="-1"><a class="header-anchor" href="#交易流程文件"><span>交易流程文件</span></a></h3>
<p>自动生成该交易的一级流程文件index.flow.bpmn</p>
<p>打开文件我们可以看到图中有<code v-pre>start</code>和<code v-pre>end</code>两个图元</p>
<blockquote>
<p>整个交易就是从start开始，到end结束，在中间开发交易流程</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/交易流程文件.png" alt="交易流程文件" title="交易流程文件"></p>
<p>侧边栏有一级流程、二级流程和网关</p>
<table>
<thead>
<tr>
<th>图元</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>一级流程</td>
<td style="text-align:left">可以关联一级流程.flow.bpmn文件(<code v-pre>静态子流程</code>)/.process.json文件 (<code v-pre>动态子流程</code>)</td>
</tr>
<tr>
<td>二级流程</td>
<td style="text-align:left">可以关联一个二级流程.task.bpmn文件</td>
</tr>
<tr>
<td>网关</td>
<td style="text-align:left">网关图元主要用于逻辑判断，可以根据不同的入参执行不同的流程</td>
</tr>
</tbody>
</table>
<ul>
<li>静态子流程：直接去执行该一级流程</li>
<li>动态子流程： 需要一个动态子流程的配置文件，根据不同的参数配置来执行对应的子流程</li>
</ul>
<p>在start下有名称和变量表</p>
<blockquote>
<p>变量表：如果交易流程有网关，需要在变量表中配置网关字段的表达式，通过引用adm以及给该表达式的字段赋值在网关上进行配置</p>
</blockquote>
<p>左侧侧边栏有一级流程、二级流程和网关，其中一级流程是业务流程，二级流程是技术流程</p>
<blockquote>
<p>在一支交易我们可以通过业务流程来定义该交易的执行过程，技术流程就是当前业务流程中包含了哪些技术流程</p>
</blockquote>
<h2 id="开发交易流程" tabindex="-1"><a class="header-anchor" href="#开发交易流程"><span>开发交易流程</span></a></h2>
<h3 id="创建一级流程" tabindex="-1"><a class="header-anchor" href="#创建一级流程"><span>创建一级流程</span></a></h3>
<p><strong>创建第一个一级流程</strong></p>
<ul>
<li>
<p><strong>在start中拖拽一级流程并命名,下面属性中的name会自动保持一致，同时指定id</strong></p>
<ol>
<li>id是唯一的，在此做演示，name和id保持一致</li>
<li>交易属性 - 初始数据，是在交易开启之前需要添加的数据，源ADM会将值赋给目标ADM,目标数据可以在当前一级流程内使用</li>
</ol>
<blockquote>
<p>即生命周期只在当前一级流程内生效，除了当前一级流程，其他均不生效</p>
</blockquote>
<ol start="3">
<li>固定值：区别于默认值，不管流程中是否有该数据，都以固定值为该目标数据的值</li>
</ol>
</li>
<li>
<p><strong>点击一级流程会显示以下图标</strong></p>
</li>
</ul>
<table>
<thead>
<tr>
<th>图标</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>删除</td>
<td style="text-align:left">可以删除流程</td>
</tr>
<tr>
<td>连线</td>
<td style="text-align:left">可以手动连线，也可以直接点击图标进行流程之间的连线</td>
</tr>
<tr>
<td>选择并填入</td>
<td style="text-align:left">如果流程文件已经存在，可以通过选择并填入来关联到该流程</td>
</tr>
<tr>
<td>创建并绑定</td>
<td style="text-align:left">如果流程文件不存在，可以点击该图标创建文件，默认绑定到该流程</td>
</tr>
<tr>
<td>创建任务</td>
<td style="text-align:left">点击该图标可以直接在该流程后面创建一个一级流程，也可以从左侧侧边栏中手动拖拽</td>
</tr>
<tr>
<td>创建子流程</td>
<td style="text-align:left">创建该流程的实现</td>
</tr>
<tr>
<td>创建网关</td>
<td style="text-align:left">需要逻辑判断时创建</td>
</tr>
</tbody>
</table>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/first-process.png" alt="first-process" title="first-process"></p>
<p><strong>继续创建流程</strong></p>
<ol>
<li>在第一个流程后通过拖拽的方式创建密码/设置密码的流程，多了一项节点回跳的配置</li>
</ol>
<blockquote>
<p>在整个交易执行过程中，如果在某个交易流程出现了问题，是否可以跳回之前的步骤</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/二级流程.png" alt="二级流程" title="二级流程"></p>
<ul>
<li><strong>事件属性</strong></li>
</ul>
<p>focus 事前 ：在当前流程具体实现之前需要执行某个步骤，在此进行配置</p>
<p>blur 事后 ：在当前流程具体实现之后需要执行某个步骤，在此进行配置</p>
<blockquote>
<p>一般在二级流程之前，执行js做一个初始化数据</p>
</blockquote>
<p>点击添加配置，选择一个前端的实现方式来添加对应的js文件</p>
<blockquote>
<p>本次交易不需要进行该配置</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/focus配置.png" alt="focus配置" title="focus配置"></p>
<ul>
<li><strong>初始化数据</strong></li>
</ul>
<p>初始化数据：指的是在当前二级流程中需要使用的数据，整个生命周期也只在当前二级流程中生效，除此之外该字段在业务流程中不能获取
<img src="@source/ABX5/前端/开发说明/img/新手简介/初始化数据.png" alt="初始化数据" title="初始化数据"></p>
<ol start="2">
<li>继续在密码后创建开卡/坐席补录的流程，修改id</li>
</ol>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/开卡.png" alt="开卡" title="开卡"></p>
<p>一级流程到此结束，接下来是流程的具体实现</p>
<h3 id="创建二级流程" tabindex="-1"><a class="header-anchor" href="#创建二级流程"><span>创建二级流程</span></a></h3>
<p>首先是公共/新核身流程/一级流程，点击创建并绑定</p>
<blockquote>
<p>在此为了展示，使用范围选择当前工程，类型选择动态子流程</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建并绑定.png" alt="创建并绑定" title="创建并绑定"></p>
<p>依次绑定密码/设置密码与开卡/坐席补录</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建并绑定-密码.png" alt="创建并绑定-密码" title="创建并绑定-密码">
<img src="@source/ABX5/前端/开发说明/img/新手简介/创建并绑定-开卡.png" alt="创建并绑定-开卡" title="创建并绑定-开卡"></p>
<blockquote>
<p>创建文件存在的情况下，无法再次创建</p>
</blockquote>
<h4 id="公共-新核身流程-一级流程" tabindex="-1"><a class="header-anchor" href="#公共-新核身流程-一级流程"><span>公共/新核身流程/一级流程</span></a></h4>
<ul>
<li><strong>点击跳转进入创建好的配置文件中</strong></li>
</ul>
<p>values定义了两个参数，两个参数代表的具体字段分别是渠道号和代理标志</p>
<blockquote>
<p>在开启交易的时候，客户端需要上送出渠道号和代理标志给这两个参数赋值，在&quot;keyExpression&quot;通过&quot;-&quot;的形式进行拼接，拼接完成后根据拼接的值来匹配对应的流程，</p>
</blockquote>
<ul>
<li>如果渠道号是&quot;C001-0&quot;，执行新核身流程1</li>
<li>如果渠道号是&quot;C001-1&quot;，执行新核身流程2</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/一级流程配置.png" alt="一级流程配置" title="一级流程配置"></p>
<ul>
<li><strong>接下来创建对应的流程文件</strong></li>
</ul>
<blockquote>
<p>两个图标分别为创建、跳转</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建新核身流程1.png" alt="创建新核身流程1" title="创建新核身流程1"></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建新核身流程1.1.png" alt="创建新核身流程1.1" title="创建新核身流程1.1"></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/创建新核身流程2.png" alt="创建新核身流程2" title="创建新核身流程2"></p>
<ul>
<li><strong>接下来在流程文件中实现具体的业务实现</strong></li>
</ul>
<blockquote>
<p>在这里方便演示，只演示新核身流程1</p>
</blockquote>
<ul>
<li>首先证件/证件选择 -&gt; 设置一个网关,分别设置为本人开卡和代理人开卡 -&gt; 协议/协议确认</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/新核身流程1-二级流程.png" alt="新核身流程1-二级流程" title="新核身流程1-二级流程"></p>
<ul>
<li>其次配置网关,需要在start中配置</li>
</ul>
<p>expression所关联的数据来自adm,在data[数据模型]中新建adm文件,命名为&quot;用户信息&quot;</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/adm文件.png" alt="adm文件" title="adm文件"></p>
<p>在创建好的adm文件中新增字段&quot;证件类型&quot;</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/adm-证件类型.png" alt="adm-证件类型" title="adm-证件类型"></p>
<p>返回start,在expression中进行配置,</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/expression.png" alt="expression" title="expression"></p>
<p>这样会把用户信息/证件类型的值赋给IDTYPE,拿到IDTYPE后,在网关上进行配置</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/配置网关.png" alt="配置网关" title="配置网关"></p>
<blockquote>
<p>网关配置完毕</p>
</blockquote>
<ul>
<li>给当前各个流程配置对应的二级流程</li>
</ul>
<blockquote>
<p>例如</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/证件选择-二级流程.png" alt="证件选择-二级流程" title="证件选择-二级流程"></p>
<ul>
<li>依次对每个二级流程进行技术实现</li>
</ul>
<h4 id="证件-证件选择-证件选择" tabindex="-1"><a class="header-anchor" href="#证件-证件选择-证件选择"><span>证件/证件选择{#证件选择}</span></a></h4>
<ul>
<li>首先是证件/证件选择,点击跳转进入对应的二级流程,拖拽一个“证件选择”步骤</li>
<li>继续拖拽一个步骤“逻辑服务/校验类/是否满16周岁”</li>
</ul>
<blockquote>
<p>这个步骤实现方式为java服务处理时，绑定lfc服务，白名单需依情况配置请求数据和返回数据，
这里仅作演示，新手开发时可忽略不写逻辑服务步骤</p>
</blockquote>
<p><strong>证件选择</strong>
<img src="@source/ABX5/前端/开发说明/img/新手简介/证件选择流程.png" alt="证件选择流程" title="证件选择流程"></p>
<ul>
<li><strong>表单属性包括实现方式、交互方式、略过标志、重置标志和页面提交数据</strong></li>
</ul>
<table>
<thead>
<tr>
<th>属性</th>
<th style="text-align:left">描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>实现方式</td>
<td style="text-align:left">当前步骤由前端实现/一个通讯步骤/java逻辑服务处理的一个步骤</td>
</tr>
<tr>
<td>交互方式</td>
<td style="text-align:left">A/C处理A提交指画面由A和C展示，由A来提交；仅A端指仅由A端展示并由A端提交</td>
</tr>
<tr>
<td>略过标志</td>
<td style="text-align:left">该步骤是否可以略过</td>
</tr>
<tr>
<td>重置标志</td>
<td style="text-align:left">该步骤是否可以重置</td>
</tr>
<tr>
<td>页面提交数据</td>
<td style="text-align:left">使整个交易的数据有传递性，在前面执行的结果在后面也可以取到，这样不用提交已经存在的数据。有源数据、克隆目标、固定值和必输</td>
</tr>
</tbody>
</table>
<ul>
<li>源数据,是客户端请求端的数据,赋给克隆目标</li>
<li>克隆目标:克隆目标中的数据将会在整个交易中被使用</li>
<li>必输: 在请求报文中是否必须携带该字段,否则平台将以异常的形式通知给客户端</li>
</ul>
<p>如果源数据为&quot;交互数据&quot;中的证件类型，需要创建一个名为&quot;交互数据&quot;的adm文件，然后在adm文件中定义字段</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/交互数据.png" alt="交互数据" title="交互数据"></p>
<p>同理，在&quot;用户数据&quot;文件中也添加对应的字段</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/用户年龄.png" alt="用户年龄" title="用户年龄"></p>
<p>然后输入相关内容，这样克隆目标中的值在下一个步骤也可以获取</p>
<blockquote>
<p>为演示使用,固定值为'01'和 '20'</p>
</blockquote>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/页面提交数据.png" alt="页面提交数据" title="页面提交数据"></p>
<p><strong>逻辑服务/校验类/是否满16周岁</strong></p>
<p>&quot;是否年满16周岁&quot;需要逻辑处理，在实现方式中勾选“java服务处理”</p>
<p>属性中有请求数据、返回数据和异常交互</p>
<ol>
<li>
<p>请求数据：把用户信息字段中的证件类型下传递给某个字段，比如传递给交互数据的证件类型，这样做的含义，请求数据中的请求字段只在当前步骤有用，除了这个步骤之外其他无用，这样可以避免一些冗余字段，生命周期也只在当前步骤生效</p>
</li>
<li>
<p>返回数据：经过一段处理后，有些数据要放到永久数据中，这样在后面逻辑处理中不需要用客户端上送，源数据和克隆目标变成整个交易的会话数据</p>
</li>
</ol>
<ul>
<li>这个步骤只需要判断年龄，而年龄的判断在上一个步骤中已经放到永久数据中，不需要再配置</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/逻辑服务.png" alt="逻辑服务" title="逻辑服务"></p>
<h4 id="本人开卡-卡种选择-卡种选择" tabindex="-1"><a class="header-anchor" href="#本人开卡-卡种选择-卡种选择"><span>本人开卡/卡种选择{#卡种选择}</span></a></h4>
<p>点击跳转进入对应的二级流程,拖拽一个步骤输入&quot;开卡/卡种选择&quot;并修改id</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/卡种选择-二级流程.png" alt="卡种选择-二级流程" title="卡种选择-二级流程"></p>
<h4 id="协议-协议确认-协议确认" tabindex="-1"><a class="header-anchor" href="#协议-协议确认-协议确认"><span>协议/协议确认{#协议确认}</span></a></h4>
<p>点击跳转进入对应的二级流程,拖拽一个步骤输入&quot;协议/协议确认&quot;并修改id</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/协议确认-二级流程.png" alt="协议确认-二级流程" title="协议确认-二级流程"></p>
<h4 id="密码-设置密码-设置密码" tabindex="-1"><a class="header-anchor" href="#密码-设置密码-设置密码"><span>密码/设置密码{#设置密码}</span></a></h4>
<p>返回index.flow.bpmn文件,点击密码/设置密码进行跳转</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/设置密码-二级流程.png" alt="设置密码-二级流程" title="设置密码-二级流程"></p>
<h4 id="开卡-坐席补录-坐席补录" tabindex="-1"><a class="header-anchor" href="#开卡-坐席补录-坐席补录"><span>开卡/坐席补录{#坐席补录}</span></a></h4>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/坐席补录-二级流程.png" alt="坐席补录-二级流程" title="协议确认-二级流程"></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/提交前确认.png" alt="提交前确认" title="提交前确认"></p>
<blockquote>
<p>开卡的业务流程开发完毕</p>
</blockquote>
<h4 id="小结" tabindex="-1"><a class="header-anchor" href="#小结"><span>小结</span></a></h4>
<ol>
<li>
<p>新核身流程,流程通过上送的渠道号和代理标志确定执行流程1还是流程2</p>
</li>
<li>
<p>在流程中首先是证件/证件选择,由客户来选择证件类型,根据选择的证件类型判断是本人开卡还是代理人开卡,然后是协议确认</p>
</li>
<li>
<p>新核身流程执行完毕,用户密码/设置密码,然后是坐席补录</p>
</li>
</ol>
<p>步骤：</p>
<p><a href="#%E8%AF%81%E4%BB%B6%E9%80%89%E6%8B%A9">证件/证件选择</a> -&gt; <a href="#%E5%8D%A1%E7%A7%8D%E9%80%89%E6%8B%A9">本人开卡/卡种选择</a> -&gt; <a href="#%E5%8D%8F%E8%AE%AE%E7%A1%AE%E8%AE%A4">协议/协议确认</a> -&gt; <a href="#%E8%AE%BE%E7%BD%AE%E5%AF%86%E7%A0%81">密码/设置密码</a> -&gt; <a href="#%E5%9D%90%E5%B8%AD%E8%A1%A5%E5%BD%95">开卡/坐席补录</a></p>
<h3 id="开发交易页面" tabindex="-1"><a class="header-anchor" href="#开发交易页面"><span>开发交易页面</span></a></h3>
<p>点击证件选择，选择创建并绑定创建交易页面</p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/证件选择.png" alt="证件选择" title="证件选择"></p>
<p>点击跳转图标跳转到vue界面，有template、script、style三部分</p>
<ul>
<li>template：里边是用来写dom元素的，也就是页面展示出来的内容</li>
<li>script：里边一般用来引入一些基础组件和数据方法等，当前页面的基础数据也需要在export default里边进行初始化，还有一些方法和生命周期也在这个里边</li>
<li>style：用来书写页面样式，必须加上scoped属性，使样式私有化，防止污染全局样式</li>
</ul>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/证件选择页面.png" alt="证件选择页面" title="证件选择页面"></p>
<h4 id="页面主体" tabindex="-1"><a class="header-anchor" href="#页面主体"><span>页面主体</span></a></h4>
<p>页面主体分为三部分，分别为头部-步骤条、主体内容、尾部-流程按钮（上一步、下一步、退出）</p>
<blockquote>
<p>相关的组件可以从公司组件库获取</p>
</blockquote>
<h4 id="生命周期" tabindex="-1"><a class="header-anchor" href="#生命周期"><span>生命周期</span></a></h4>
<p>平台常用的生命周期参考<a href="../%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F#%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F">生命周期</a></p>
<h4 id="退出、上一步、下一步" tabindex="-1"><a class="header-anchor" href="#退出、上一步、下一步"><span>退出、上一步、下一步</span></a></h4>
<ul>
<li>_jump:流程跳转请求</li>
<li>_next():流程下一步提交请求</li>
<li>_this.getContext().destroy():关闭当前交易，发送交易结束请求</li>
</ul>
<blockquote>
<p>详情查看<a href="../%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B#%E6%B5%81%E7%A8%8B%E6%93%8D%E4%BD%9Capi">交易流程/流程操作API</a></p>
</blockquote>
<h4 id="页面提取公共部分" tabindex="-1"><a class="header-anchor" href="#页面提取公共部分"><span>页面提取公共部分</span></a></h4>
<p>在开发过程中，我们发现每个页面都存在重复的代码部分</p>
<blockquote>
<p>比如：头部-步骤条、尾部-流程按钮和相同的逻辑</p>
</blockquote>
<p>这样我们可以把重复的部分提取到一个文件中</p>
<ol>
<li>在pages目录新建文件，命名为“基础布局”</li>
<li>在基础布局文件中没有主体内容，在头部和尾部的代码中间插入<code v-pre>&lt;abx-page&gt;&lt;/abx-page&gt;</code>
<img src="@source/ABX5/前端/开发说明/img/新手简介/基础布局.png" alt="基础布局" title="基础布局"></li>
<li>在export default中通过frame引入基础布局
<img src="@source/ABX5/前端/开发说明/img/新手简介/frame.png" alt="frame" title="frame"></li>
</ol>
<blockquote>
<p>详情查看<a href="../%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E4%BA%A4%E6%98%93%E6%B5%81%E7%A8%8B#frame">交易流程/frame</a></p>
</blockquote>
<p>接下来依次创建绑定相关页面，完成交易页面的开发</p>
<h3 id="打包部署" tabindex="-1"><a class="header-anchor" href="#打包部署"><span>打包部署</span></a></h3>
<p>右击工程，选择打包部署
<img src="@source/ABX5/前端/开发说明/img/新手简介/打包部署.png" alt="打包部署" title="打包部署"></p>
<p><img src="@source/ABX5/前端/开发说明/img/新手简介/部署信息.png" alt="部署信息" title="部署信息"></p>
<!-- <div style="position:fixed;right:190px;bottom:60px;">
<a href="#新手简介">回到顶部</a>
</div> --></div></template>


