<template><div><h1 id="更新日志-更新日志" tabindex="-1"><a class="header-anchor" href="#更新日志-更新日志"><span>更新日志 {#更新日志}</span></a></h1>
<h2 id="_20230828-周一" tabindex="-1"><a class="header-anchor" href="#_20230828-周一"><span>20230828 周一 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复重复打开交易失败问题</li>
</ol>
</div>
<h2 id="_20230822-周四" tabindex="-1"><a class="header-anchor" href="#_20230822-周四"><span>20230822 周四 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>支持<code v-pre>.swf</code>文件编译</li>
<li>修复<code v-pre>bpmn</code>类型交易由于<code v-pre>globalArgs</code>限制导致dm无法设置值问题</li>
</ol>
</div>
<h2 id="_20230822-周二" tabindex="-1"><a class="header-anchor" href="#_20230822-周二"><span>20230822 周二 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复<code v-pre>aft</code>编译失败问题</li>
<li><code v-pre>auf</code>类型交易传入交易路径支持<code v-pre>auf.json</code>，兼容<code v-pre>App.vue</code>，且需要更新<code v-pre>IDE</code></li>
<li>兼容<code v-pre>AB5</code>的<code v-pre>onClose</code>: 通过<code v-pre>页签的叉</code>进行关闭动作时会触发</li>
<li>兼容旧版<code v-pre>API</code>: <code v-pre>$addTradeExitCallback</code>、<code v-pre>$findPanelVm</code>、<code v-pre>$getPanelVm</code>、<code v-pre>$getPopupTarget</code></li>
</ol>
</div>
<h2 id="_20230816-周三" tabindex="-1"><a class="header-anchor" href="#_20230816-周三"><span>20230816 周三 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>完善错误钩子函数<code v-pre>_onErrorCaptured</code>的<code v-pre>this</code>指向，可以通过<code v-pre>this.$aui.$alert</code>方式获取提示弹框</li>
<li>优化加载速度</li>
<li><code v-pre>bpmn</code>长流程交易添加回放功能：鼠标<code v-pre>右键</code>在画面内点击回放</li>
</ol>
</div>
<h2 id="_20230808-周二" tabindex="-1"><a class="header-anchor" href="#_20230808-周二"><span>20230808 周二 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>支持<code v-pre>removeAll</code></li>
<li>创建交易/面本默认激活</li>
<li>兼容<code v-pre>$sendMessage</code></li>
</ol>
</div>
<h2 id="_20230807-周一" tabindex="-1"><a class="header-anchor" href="#_20230807-周一"><span>20230807 周一 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>微应用名称可以不传入，默认值<code v-pre>ABX5</code></li>
<li>关闭交易以及面板如果没有参数传入则默认为当前上下文交易</li>
</ol>
</div>
<h2 id="_20230804-周五" tabindex="-1"><a class="header-anchor" href="#_20230804-周五"><span>20230804 周五 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>修复交易内修改<code v-pre>dm</code>无法监听的问题</li>
<li><code v-pre>sdm</code>初始化数据允许使用 <code v-pre>sdm/adm</code> 文件进行初始化</li>
<li>修复<code v-pre>datamixin</code>中获取<code v-pre>tradeID</code>的问题</li>
<li>补充<code v-pre>IContext</code>的方法声明</li>
<li><code v-pre>isModal</code>参数放入<code v-pre>containOptions</code>内</li>
</ol>
</div>
<h2 id="_20230802-周三" tabindex="-1"><a class="header-anchor" href="#_20230802-周三"><span>20230802 周三 <Badge type="info" text="陈光" /></span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title"><Badge type="tip" text="前端平台" /></p>
<ol>
<li>新增关闭后钩子函数:<code v-pre>_onUnmountedTrade</code>、<code v-pre>_onUnmountedPanel</code>：注意：此时函数内的<code v-pre>this</code>无指向，请不要使用<code v-pre>vue</code>实例内的数据</li>
<li>新增钩子函数：<code v-pre>_onShow</code>、<code v-pre>_onHide</code>：交易显示/隐藏会触发</li>
<li><code v-pre>deployConfig.json</code>新增参数：<code v-pre>deployEnv</code>:区分不同的部署环境：容器云、博云、虚机</li>
</ol>
</div>
</div></template>


