<template><div><h1 id="abx-env" tabindex="-1"><a class="header-anchor" href="#abx-env"><span>abx-env</span></a></h1>
<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用"><span>使用</span></a></h2>
<h3 id="abxload" tabindex="-1"><a class="header-anchor" href="#abxload"><span>__abxLoad___</span></a></h3>
<p>静态加载</p>
<p><strong>参数</strong></p>
<ol>
<li><em>moduleName(String)</em>: 交易模块的全路径</li>
<li><em>context(Object)</em>: 加载交易模块的上下文</li>
</ol>
<p><strong>返回</strong></p>
<p><em>(Object)</em>: 需要加载的交易模块</p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="requirejsasync" tabindex="-1"><a class="header-anchor" href="#requirejsasync"><span>__requireJSAsync__</span></a></h3>
<p><strong>参数</strong></p>
<p><em>moduleName(String)</em>: 交易模块的全路径</p>
<p><strong>返回</strong></p>
<p><em>(Promise)</em></p>
<p><strong>例子</strong></p>
<h3 id="getresource" tabindex="-1"><a class="header-anchor" href="#getresource"><span>__getResource__</span></a></h3>
<h3 id="loadresource" tabindex="-1"><a class="header-anchor" href="#loadresource"><span>__loadResource__</span></a></h3>
<h3 id="install" tabindex="-1"><a class="header-anchor" href="#install"><span>__install__</span></a></h3>
<p>请求资源</p>
<p><strong>参数</strong>
<strong>args(Object)</strong>:</p>
<h3 id="abximport" tabindex="-1"><a class="header-anchor" href="#abximport"><span>__abxImport__</span></a></h3>
<p>动态加载</p>
<p><strong>参数</strong></p>
<ol>
<li><em>moduleName(String)</em>: 交易模块的全路径</li>
<li><em>context(Object)</em>: 加载交易模块的上下文</li>
</ol>
<p><strong>返回</strong></p>
<p><em>(Object)</em>: 需要加载的交易模块</p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="getloader" tabindex="-1"><a class="header-anchor" href="#getloader"><span>__getLoader__</span></a></h3>
<p>返回loader</p>
<h3 id="register" tabindex="-1"><a class="header-anchor" href="#register"><span>__register__</span></a></h3>
<p>模块注册函数</p>
<h3 id="projectenvregister" tabindex="-1"><a class="header-anchor" href="#projectenvregister"><span>__projectEnvRegister__</span></a></h3>
<p>交易工程包含依赖，样式</p>
<h3 id="getargstype" tabindex="-1"><a class="header-anchor" href="#getargstype"><span>__getArgsType__</span></a></h3>
<p><strong>参数</strong></p>
<p><em>args(Object)</em>: 需要判断类型的参数</p>
<p><strong>返回</strong></p>
<p><em>(Number)</em>: 字符串：0 ，对象：1 ，错误： -1</p>
<h3 id="postasync" tabindex="-1"><a class="header-anchor" href="#postasync"><span>__postAsync__</span></a></h3>
<h3 id="getasync" tabindex="-1"><a class="header-anchor" href="#getasync"><span>__getAsync__</span></a></h3>
<h3 id="getjsondataasync" tabindex="-1"><a class="header-anchor" href="#getjsondataasync"><span>__getJsonDataAsync__</span></a></h3>
<p>获取Json文件数据</p>
<h3 id="abxdynimport" tabindex="-1"><a class="header-anchor" href="#abxdynimport"><span>__abxDynImport__</span></a></h3>
<p>动态加载</p>
<h3 id="mountedmodule" tabindex="-1"><a class="header-anchor" href="#mountedmodule"><span>__mountedModule__</span></a></h3>
<h3 id="resolveresourcepath" tabindex="-1"><a class="header-anchor" href="#resolveresourcepath"><span>__resolveResourcePath__</span></a></h3>
<h3 id="mixins" tabindex="-1"><a class="header-anchor" href="#mixins"><span>__mixins__</span></a></h3>
<p>混入动作</p>
<p><strong>参数</strong></p>
<ol>
<li><em>instance()</em>: 需要进行混入操作的实例</li>
<li><em>mixins(Object)</em>: 需要混入的对象</li>
</ol>
<p><strong>返回</strong></p>
<p><em>无返回值</em></p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="defaultmixins" tabindex="-1"><a class="header-anchor" href="#defaultmixins"><span>__defaultMixins__</span></a></h3>
<p>平台默认需要混入的部分</p>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回</strong></p>
<p><em>[Array]</em>: 返回平台默认需要混入的sdk</p>
<p><strong>例子</strong></p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"></div></div><h3 id="handlesocketmessage" tabindex="-1"><a class="header-anchor" href="#handlesocketmessage"><span>__handleSocketMessage__</span></a></h3>
<h3 id="gettrademoduleasync" tabindex="-1"><a class="header-anchor" href="#gettrademoduleasync"><span>__getTradeModuleAsync__</span></a></h3>
<h3 id="registerlauncherfn" tabindex="-1"><a class="header-anchor" href="#registerlauncherfn"><span>__registerLauncherFn__</span></a></h3>
<h3 id="devmode" tabindex="-1"><a class="header-anchor" href="#devmode"><span>__devMode__</span></a></h3>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回</strong></p>
<p><em>[Boolean]</em>:</p>
<h3 id="prodmode" tabindex="-1"><a class="header-anchor" href="#prodmode"><span>__prodMode__</span></a></h3>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回</strong></p>
<p><em>[Boolean]</em>:</p>
<h3 id="require" tabindex="-1"><a class="header-anchor" href="#require"><span>__require__</span></a></h3>
<h3 id="hotupdate" tabindex="-1"><a class="header-anchor" href="#hotupdate"><span>hotUpdate</span></a></h3>
<h3 id="genuuid" tabindex="-1"><a class="header-anchor" href="#genuuid"><span>__genUuid__</span></a></h3>
<p><strong>参数</strong></p>
<p><em>无参数</em></p>
<p><strong>返回</strong></p>
<p><em>(String)</em>:</p>
<p><strong>例子</strong></p>
</div></template>


