<template><div><h1 id="preference-properties" tabindex="-1"><a class="header-anchor" href="#preference-properties"><span>preference.properties</span></a></h1>
<p>说明:</p>
<ol>
<li>preference.properties 是在服务端 aarm 中, 地址: /aarm/clientWorkspace/default/preferenceServer</li>
<li>壳子中的 config/aui.properties 是本地的配置, 配置是以服务端配置为主的</li>
</ol>
<p>主要配置如下列表:</p>
<table>
<thead>
<tr>
<th>配置</th>
<th>介绍</th>
<th>备注</th>
</tr>
</thead>
<tbody>
<tr>
<td>cn.com.agree.ab.a5.client.communication/name =</td>
<td>AB内部通讯节点名称（可不填）</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.communication/mainAarmUrl = http://192.9.200.111:53122/</td>
<td>abc连接aarm地址</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui/enableDevTools</td>
<td>是否启用chrome调试工具</td>
<td>chrome调试工具</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui/defaultTradePath</td>
<td>默认打开交易,与workspace相对路径</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.communication/parentMsgUrl</td>
<td>abc连接message地址</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.communication/fileHttpUrl</td>
<td>文件上传下载配置</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.communication/parentHttpUrl</td>
<td>JS直连AASE地址</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.communication/reconnCount</td>
<td>壳子websocket断线重连尝试次数</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.aft/useSimplifiedYuan</td>
<td>false为圆,true为元 默认为false</td>
<td>AFT数据字典解析时用到</td>
</tr>
<tr>
<td>cn.com.agree.commons.logging/desensitization</td>
<td>是否对交易日志进行脱敏</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.commons.logging/params</td>
<td>需要脱敏的参数</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.commons.logging/maxLength</td>
<td>每条交易日志的最大长度；</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui/enableRefreshBrowser</td>
<td>是否启用F5浏览器刷新</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.cocktail/maximized</td>
<td>客户端窗口是否为最大化</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.cocktail/windowTitle</td>
<td>设置ABC窗口名称</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui.log.upload/autoUploadLog</td>
<td>是否开启旁路日志上传</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui.command.handler/uploadFile</td>
<td>日志上产用的服务端接口</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui.log.upload/uploadLogInterval</td>
<td>旁路上传的间隔频率,单位秒</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui.log.upload/remotePath</td>
<td>日志上传到服务端的相对路径</td>
<td></td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.gui.aui.log.upload/localLogPath</td>
<td>需要旁路上传的日志文件；</td>
<td>日志旁路上传有五条相关的配置</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.resource/earlyDownResource</td>
<td>是否全量更新客户端资源,默认false</td>
<td>非默认配置项</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.resource/deleteExtraResource</td>
<td>是否删除多余文件,默认false</td>
<td>非默认配置项</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.resource/deleteExtraGrmFiles</td>
<td>是否清理多余的grmFiles,默认false</td>
<td>非默认配置项</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.resource/ignoreDirs</td>
<td>设置需要忽略的目录</td>
<td>非默认配置项</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.resource/scanIgnoreDirChildren</td>
<td>设置需要忽略目录下需要管理文件夹</td>
<td>非默认配置项</td>
</tr>
<tr>
<td>cn.com.agree.ab.a5.client.web/port</td>
<td>客户端本地服务的端口值</td>
<td>PDF预览框架；AFT打印预览展示；</td>
</tr>
</tbody>
</table>
<p><strong>preference.properties 示例</strong>:</p>
<div class="language-properties line-numbers-mode" data-highlighter="prismjs" data-ext="properties" data-title="properties"><pre v-pre><code><span class="line"><span class="token comment">#默认打开交易,与workspace相对路径</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.gui.aui/defaultTradePath = /ABX/node_modules/@agree/ab-micro-main/index.html</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否启用chrome调试工具</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui/enableDevTools</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#abc连接message地址</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.communication/parentMsgUrl</span> <span class="token punctuation">=</span> <span class="token value attr-value">ws://192.168.70.10/abxadmin/zngt-message/message/websocket</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#JS直连AASE地址</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.communication/parentHttpUrl</span><span class="token punctuation">=</span><span class="token value attr-value">http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#资源热部署断线重连尝试次数</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.communication/reconnCount</span> <span class="token punctuation">=</span> <span class="token value attr-value">3</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#false为圆,true为元 默认为false</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.aft/useSimplifiedYuan</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#是否对交易日志进行脱敏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.commons.logging/desensitization</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#需要脱敏的参数</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.commons.logging/params</span> <span class="token punctuation">=</span> <span class="token value attr-value">UserName:1,symbolicName:6,SA_ACCT_NAME:1,SA_DRW_QYRQ:6</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#每条交易日志的最大长度</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.commons.logging/maxLength</span> <span class="token punctuation">=</span> <span class="token value attr-value">10000</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#--------------RCP配置----------------------</span></span>
<span class="line"><span class="token comment"># 是否启用F5浏览器刷新</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui/enableRefreshBrowser</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#是否记录cef框架日志</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui/enableCefLog</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#cef框架日志级别：LOGSEVERITY_DEFAULT/LOGSEVERITY_VERBOSE/LOGSEVERITY_INFO/LOGSEVERITY_WARNING/LOGSEVERITY_ERROR</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui/cefLogServerity</span> <span class="token punctuation">=</span> <span class="token value attr-value">LOGSEVERITY_INFO;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#是否启用强制关闭客户端shell功能</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/forceClosable</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化窗口隐藏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showShell</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 初始化窗口大小</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/initialSize</span> <span class="token punctuation">=</span> <span class="token value attr-value">1920,1080</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示标题栏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showCaption</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># shell窗口是否可以关闭</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/shellClosable</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否为最大化</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/maximized</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># shell窗口大小是否可调节</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/shellResize</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># shell窗口大小��否可调节</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/shellResizable</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示进度栏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showProgressIndicator</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示快速视图</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showFastView</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示状态栏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showStatus</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示工具栏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showCoolBar</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 工具栏是否显示提示文字</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/toolbarShowText</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否显示菜单栏</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/showMenuBar</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 窗口名称</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.cocktail/windowTitle</span> <span class="token punctuation">=</span> <span class="token value attr-value">X5</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 日志上传</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.log.upload/logupload</span> <span class="token punctuation">=</span> <span class="token value attr-value">http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/upService/uploadFile</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#****************************具体需求开启或平台默认配置**************************</span></span>
<span class="line"><span class="token comment">#法人行aarm地址,多个可以逗号分隔,多法人需求配置</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.communication/otherAarmUrls= </span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC托盘web server监听静态工程名称,平台默认webcontext,不需要配置</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.web/defaultDist = webcontext</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#注册表注册开机启动,平台默认为true</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client/register</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#cef浏览器内存大小设置,单位(M),平台默认1024</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.gui.aui/cefMaxSpace = 2048</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ADS链接地址 让应用申请端口号</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.ads/adsUrl = http://127.0.0.1:3306</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC 进行文件传输发送请求http地址</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.communication/fileHttpUrl</span><span class="token punctuation">=</span><span class="token value attr-value">http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC 上传服务</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.command.handler/uploadFile</span><span class="token punctuation">=</span><span class="token value attr-value">upService/uploadFile</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC 下载服务  上传下载走网关 配合application-file里的映射实现</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.command.handler/downloadFile</span><span class="token punctuation">=</span><span class="token value attr-value">downService/downloadFile</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC 前端js http请求最大重连次数</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.communication/maxCount = 0</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 访问 aase https web端口</span></span>
<span class="line"><span class="token comment">#cn.com.agree.ab.a5.client.webSsl/port = 7688</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#是否开启自动上传日志功能</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.log.upload/autoUploadLog</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#日志上传间隔时间,单位为秒。</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.log.upload/uploadLogInterval</span><span class="token punctuation">=</span><span class="token value attr-value">60</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#服务端储存客户端日志的文件夹,相对路径或绝对路径都可以,相对路径为相对于服务端aase根路径。上传的日志会在该目录下创建日期/oid文件夹来存放上传的日志文件。该日期为上传文件时的日期</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.log.upload/remotePath</span><span class="token punctuation">=</span><span class="token value attr-value">./uploadClientLog/</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#要自动上传的日志列表,以英文逗号分割。其中${date}会被替换为当天日期文件夹</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui.log.upload/localLogPath</span><span class="token punctuation">=</span><span class="token value attr-value">log/${date}/console.log,log/${date}/js-frame.log,log/${date}/js-trade.log,log/client.log,log/gui.log,log/error.log,log/communication.log,log/resource.log</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">#是否强制缩放</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.gui.aui/forceScale</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.web/ABX5ModuleRootDir</span> <span class="token punctuation">=</span> <span class="token value attr-value">workspace/ABX</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.web/extensionFolders</span> <span class="token punctuation">=</span> <span class="token value attr-value">workspace/ABX</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.web/resource</span> <span class="token punctuation">=</span> <span class="token value attr-value">local</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client/connectServer</span> <span class="token punctuation">=</span> <span class="token value attr-value">true</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.update.plugin/updatePlugin</span><span class="token punctuation">=</span><span class="token value attr-value">true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 下载前端资源</span></span>
<span class="line"><span class="token comment"># cn.com.agree.ab.a5.client.resource/updateTradeResource = true</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否全量更新客户端资源,默认false</span></span>
<span class="line"><span class="token comment"># cn.com.agree.ab.a5.client.resource/earlyDownResource = false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否删除多余文件,默认false</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.resource/deleteExtraResource</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 是否清理多余的grmFiles,默认false</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.resource/deleteExtraGrmFiles</span> <span class="token punctuation">=</span> <span class="token value attr-value">false</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 设置需要忽略的目录</span></span>
<span class="line"><span class="token comment"># cn.com.agree.ab.a5.client.resource/ignoreDirs = </span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># 兼容ab4</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.compatible.ab4/startCompatible</span><span class="token punctuation">=</span><span class="token value attr-value">false</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.compatible.ab4/abcPath</span><span class="token punctuation">=</span><span class="token value attr-value">\\ab4\\abc.exe</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.compatible.ab4/updateLtsPluginUrls</span><span class="token punctuation">=</span><span class="token value attr-value">http://172.16.225.90:50002</span></span>
<span class="line"></span>
<span class="line"><span class="token comment"># ABC托盘http web server监听端口 平台默认8080</span></span>
<span class="line"><span class="token key attr-name">cn.com.agree.ab.a5.client.web/port</span> <span class="token punctuation">=</span> <span class="token value attr-value">55055</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


