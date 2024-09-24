<template><div><h1 id="前端常见问题记录-前端常见问题记录" tabindex="-1"><a class="header-anchor" href="#前端常见问题记录-前端常见问题记录"><span>前端常见问题记录 {#前端常见问题记录}</span></a></h1>
<blockquote>
<p>收录开发过程中常见问题</p>
</blockquote>
<h2 id="json-文件内容读取失败-json-文件内容读取失败" tabindex="-1"><a class="header-anchor" href="#json-文件内容读取失败-json-文件内容读取失败"><span>json 文件内容读取失败 {#json-文件内容读取失败}</span></a></h2>
<ul>
<li>
<p><strong>错误截图</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/json文件查找失败.png" alt="json-文件内容读取失败" title="json-文件内容读取失败"></p>
</li>
<li>
<p><strong>错误原因</strong></p>
</li>
</ul>
<blockquote>
<p><code v-pre>.json</code>文件不可以添加注释，会导致解析失败</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"客户地址"</span><span class="token operator">:</span> <span class="token string">"北京市朝阳区中兴街花园一区蜜蜂办事处"</span> <span class="token comment">// 客户地址</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li><strong>错误修复</strong>
<blockquote>
<p>去掉注释即可</p>
</blockquote>
</li>
</ul>
<h2 id="undefall-is-not-defined-undefall-is-not-defined" tabindex="-1"><a class="header-anchor" href="#undefall-is-not-defined-undefall-is-not-defined"><span>undefAll is not defined {#undefAll-is-not-defined}</span></a></h2>
<ul>
<li>
<p><strong>错误截图</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/undefAll.png" alt="undefAll-is-not-defined" title="undefAll-is-not-defined"></p>
</li>
<li>
<p><strong>错误原因</strong></p>
<blockquote>
<p>初始化资源未加载完成就收到来自<code v-pre>客户端</code>发送的执行逻辑导致此错误</p>
</blockquote>
</li>
<li>
<p><strong>错误修复</strong></p>
<blockquote>
<p>偶发，一般不需要处理</p>
</blockquote>
</li>
</ul>
<h2 id="镜像更新" tabindex="-1"><a class="header-anchor" href="#镜像更新"><span>镜像更新</span></a></h2>
<blockquote>
<ol>
<li>镜像更新后需要全量部署交易工程</li>
<li>部署交易工程前需要部署依赖工程</li>
</ol>
</blockquote>
<h2 id="依赖工程" tabindex="-1"><a class="header-anchor" href="#依赖工程"><span>依赖工程</span></a></h2>
<blockquote>
<p>模块工程内引用别的模块工程的资源文件时，则被认为是依赖工程</p>
</blockquote>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// BankModule</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"moduleDependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"BaseModule"</span><span class="token operator">:</span> <span class="token string">"1.0.0"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>依赖工程名称，区分大小写</p>
</div>
<h2 id="交易模块工程在打包部署时需要注意服务组" tabindex="-1"><a class="header-anchor" href="#交易模块工程在打包部署时需要注意服务组"><span>交易模块工程在打包部署时需要注意服务组</span></a></h2>
<blockquote>
<p>交易模块工程在打包部署时需要注意服务组,一般有配置默认值，也可自定义</p>
</blockquote>
<p><img src="@source/ABX5/常见问题/前端常见问题资源/服务组.png" alt="服务组" title="服务组"></p>
<h2 id="新增依赖包编译失败" tabindex="-1"><a class="header-anchor" href="#新增依赖包编译失败"><span>新增依赖包编译失败</span></a></h2>
<blockquote>
<p>新增第三方依赖包，运行时报错查找模块失败</p>
</blockquote>
<ul>
<li>
<p><strong>错误截图</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/依赖包未注册.png" alt="依赖包未注册" title="依赖包未注册"></p>
</li>
<li>
<p><strong>错误原因</strong></p>
<blockquote>
<ol>
<li>没有将依赖名称添加到工程的<code v-pre>package.json</code>的<code v-pre>dependencies</code>字段</li>
</ol>
</blockquote>
</li>
</ul>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// BankModule/package.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"name"</span><span class="token operator">:</span> <span class="token string">"BankModule"</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token property">"dependencies"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line highlighted">    <span class="token property">"vue-quill-editor"</span><span class="token operator">:</span> <span class="token string">"^3.0.6"</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="资源文件内容为空" tabindex="-1"><a class="header-anchor" href="#资源文件内容为空"><span>资源文件内容为空</span></a></h2>
<ul>
<li>
<p><strong>问题描述</strong></p>
<blockquote>
<p>文件通过<code v-pre>IDE</code>打包部署后在加载时发现内容未成功加载</p>
</blockquote>
</li>
<li>
<p><strong>问题定位</strong></p>
<blockquote>
<ol>
<li>解压<code v-pre>IDE</code>目录下的<code v-pre>[projectName].tar.gz</code>看文件内容是否为空</li>
<li>解压服务端<code v-pre>[服务组名称]-aarm/aarm/compile-script/</code>目录下的<code v-pre>[projectName].tar.gz</code>看文件内容是否为空</li>
<li>查看部署到服务端上的文件<code v-pre>[服务组名称]-aarm/aarm/compile-script/...</code>内容是否为空</li>
</ol>
</blockquote>
</li>
<li>
<p><strong>问题修复</strong></p>
<blockquote>
<p>查看部署文件的配置是否正确，不能有重复配置
<img src="@source/ABX5/常见问题/前端常见问题资源/adt配置不能冗余.jpg" alt="不能有重复配置" title="不能有重复配置"></p>
</blockquote>
<blockquote>
<p>查看<code v-pre>.jar</code>版本是否异常，且可联系服务端相关同事咨询</p>
</blockquote>
</li>
</ul>
<h2 id="查看当前工程部署地址-查看当前工程部署的地址" tabindex="-1"><a class="header-anchor" href="#查看当前工程部署地址-查看当前工程部署的地址"><span>查看当前工程部署地址 {#查看当前工程部署的地址}</span></a></h2>
<blockquote>
<p>通过<code v-pre>ABM</code>可查看</p>
</blockquote>
<ul>
<li><strong>查看流程</strong>
<blockquote>
<ol>
<li>通过 <code v-pre>管理中心/应用-服务</code>找到<code v-pre>abm</code></li>
<li>点击<code v-pre>abm</code>服务</li>
</ol>
</blockquote>
</li>
</ul>
<p><img src="@source/ABX5/常见问题/前端常见问题资源/abm信息查看.png" alt="abm信息查看" title="abm信息查看">
<img src="@source/ABX5/常见问题/前端常见问题资源/部署地址.png" alt="部署地址" title="部署地址"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>由上图可知部署地址: <code v-pre>http://192.168.70.10:30887/IDE/交易部署</code></li>
<li>如果部署失败，请确认<RouteLink to="/ABX5/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98/%E5%89%8D%E7%AB%AF%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98.html#%E4%BA%A4%E6%98%93%E6%A8%A1%E5%9D%97%E5%B7%A5%E7%A8%8B%E5%9C%A8%E6%89%93%E5%8C%85%E9%83%A8%E7%BD%B2%E6%97%B6%E9%9C%80%E8%A6%81%E6%B3%A8%E6%84%8F%E6%9C%8D%E5%8A%A1%E7%BB%84">服务组是否正确填写</RouteLink></li>
</ol>
</div>
<h2 id="循环依赖警告" tabindex="-1"><a class="header-anchor" href="#循环依赖警告"><span>循环依赖警告</span></a></h2>
<blockquote>
<p>如果在工程内有<code v-pre>a-&gt;b-&gt;a</code>类似的循环引用，会有循环依赖的警告</p>
</blockquote>
<p><img src="@source/ABX5/常见问题/前端常见问题资源/循环依赖警告.png" alt="循环依赖警告" title="循环依赖警告"></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<ol>
<li>不建议出现资源间循环依赖</li>
<li>如果必须有循环依赖，除非引用立即执行，否则不会导致错误</li>
</ol>
</div>
<h2 id="模块查找失败-请检查是否注册成功-模块查找失败-请检查是否注册成功" tabindex="-1"><a class="header-anchor" href="#模块查找失败-请检查是否注册成功-模块查找失败-请检查是否注册成功"><span>模块查找失败，请检查是否注册成功 {#模块查找失败，请检查是否注册成功}</span></a></h2>
<ul>
<li>
<p><strong>错误截图</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/模块查找失败.png" alt="模块查找失败" title="模块查找失败"></p>
</li>
<li>
<p><strong>问题定位流程</strong></p>
</li>
</ul>
<ol>
<li>请确认引用的资源<code v-pre>路径是否正确</code></li>
<li>请确认引用的<code v-pre>资源是否存在</code></li>
<li>请确认引用的<code v-pre>资源编译是否报错</code></li>
<li>请确认资源的<code v-pre>别名是否配置</code></li>
<li>请查看依赖信息文件<code v-pre>/ABX/abx/dependencies.manifest.json</code>内引用此模块的<code v-pre>deps</code>是否包含此依赖</li>
</ol>
<div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre v-pre><code><span class="line"><span class="token comment">// /ABX/abx/dependencies.manifest.json</span></span>
<span class="line"><span class="token punctuation">{</span></span>
<span class="line">  <span class="token property">"BankModule/pages/主框架/app-loader.ts"</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token property">"target"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/主框架/app-loader.ts.js"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"source"</span><span class="token operator">:</span> <span class="token string">"BankModule/pages/主框架/app-loader.ts"</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"isPackage"</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token property">"deps"</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">//   {</span></span>
<span class="line">      <span class="token comment">//     "importPath": "BankModule/pages/主框架/a.js" // 此处如果缺失，则会导致模块查找失败</span></span>
<span class="line">      <span class="token comment">//   }</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果以上步骤均正确无误，请联系前端同事解决问题</p>
</div>
<h2 id="执行页面出错-执行页面出错" tabindex="-1"><a class="header-anchor" href="#执行页面出错-执行页面出错"><span>执行页面出错 {#执行页面出错}</span></a></h2>
<ul>
<li>
<p><strong>错误截图</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/执行页面出错.png" alt="执行页面出错" title="执行页面出错"></p>
</li>
<li>
<p><strong>错误原因</strong></p>
<blockquote>
<p>请确认此文件编译是否报错</p>
</blockquote>
</li>
</ul>
<h2 id="部署方式" tabindex="-1"><a class="header-anchor" href="#部署方式"><span>部署方式</span></a></h2>
<blockquote>
<p>现有部署方式两种: 博云、虚机，参考<RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%BC%80%E5%8F%91%E8%AF%B4%E6%98%8E/%E4%BA%91%E5%B9%B3%E5%8F%B0%E9%85%8D%E7%BD%AE%E8%AF%B4%E6%98%8E.html#deployEnv">deployEnv</RouteLink></p>
</blockquote>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>如果<code v-pre>bpmn</code>类型交易的提交地址需要修改，则说明需要修改部署方式</p>
<div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre v-pre><code><span class="line">博云<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.71</span><span class="token number">.115</span><span class="token operator">:</span><span class="token number">30002</span><span class="token operator">/</span>bankmodule<span class="token operator">-</span>aase<span class="token operator">/</span>aase<span class="token operator">/</span>openTrade</span>
<span class="line">虚机<span class="token operator">:</span> http<span class="token operator">:</span><span class="token operator">/</span><span class="token operator">/</span><span class="token number">192.168</span><span class="token number">.71</span><span class="token number">.115</span><span class="token operator">:</span><span class="token number">30002</span><span class="token operator">/</span>openTrade</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div></div>
<h2 id="编译卡住-无报错也未中止-现象是卡住在编译进程中" tabindex="-1"><a class="header-anchor" href="#编译卡住-无报错也未中止-现象是卡住在编译进程中"><span>编译卡住，无报错也未中止，现象是卡住在编译进程中</span></a></h2>
<ul>
<li>
<p><strong>问题描述</strong></p>
<blockquote>
<p>编译卡住，无报错也未中止，现象是卡住在编译进程中</p>
</blockquote>
</li>
<li>
<p><strong>错误示例</strong></p>
</li>
</ul>
<div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre v-pre><code><span class="line highlighted"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">></span></span></span>
<span class="line">  dhfkssndkjfhs vnsjdfhhdjbasfdj</span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span></span>
<span class="line">    <span class="token comment">&lt;!-- ... --></span></span>
<span class="line">  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span></span>
<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">></span></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>
<p><strong>错误原因</strong></p>
<blockquote>
<ol>
<li><code v-pre>.vue</code>文件中的<code v-pre>template</code>写法有问题，正常情况会报错，但是当文件的换行符格式为<code v-pre>CRLF</code>时，<code v-pre>vue-loader</code>内部会有死循环，导致编译进程卡住</li>
</ol>
</blockquote>
</li>
<li>
<p><strong>问题修复</strong></p>
<blockquote>
<ol>
<li>可修改文件换行符的格式为<code v-pre>LF</code>，也可不修改</li>
<li>找到对应<code v-pre>.vue</code>文件修复问题</li>
</ol>
</blockquote>
</li>
</ul>
<h2 id="浏览器报文中文乱码" tabindex="-1"><a class="header-anchor" href="#浏览器报文中文乱码"><span>浏览器报文中文乱码</span></a></h2>
<ul>
<li>
<p><strong>问题描述</strong></p>
<blockquote>
<p>在请求<code v-pre>.rcd</code>等文件时，返回的报文中文乱码</p>
</blockquote>
</li>
<li>
<p><strong>错误示例</strong>
<img src="@source/ABX5/常见问题/前端常见问题资源/rcd文件中文乱码.jpg" alt="中文乱码" title="中文乱码"></p>
</li>
<li>
<p><strong>错误原因</strong></p>
<blockquote>
<ol>
<li>由于返回的自定义类型文件浏览器不识别，所以当做二进制文件处理，导致中文乱码</li>
</ol>
</blockquote>
</li>
<li>
<p><strong>问题修复</strong></p>
<blockquote>
<ol>
<li>仅在查看时会乱码，在获取时无影响</li>
<li>此处由于浏览器本身设置导致</li>
<li>也可设置<code v-pre>content-type: application/json</code></li>
<li>可查看浏览器中的<code v-pre>Response</code></li>
</ol>
</blockquote>
<p><img src="@source/ABX5/常见问题/前端常见问题资源/浏览器查看response.jpg" alt="Response" title="Response"></p>
</li>
</ul>
</div></template>


