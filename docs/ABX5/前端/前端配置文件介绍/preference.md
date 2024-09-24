# preference.properties

说明: 
1. preference.properties 是在服务端 aarm 中, 地址: /aarm/clientWorkspace/default/preferenceServer
2. 壳子中的 config/aui.properties 是本地的配置, 配置是以服务端配置为主的

主要配置如下列表: 


| 配置 | 介绍 | 备注 |
| ---- | ---- | ---- |
| cn.com.agree.ab.a5.client.communication/name = | AB内部通讯节点名称（可不填） |   |
| cn.com.agree.ab.a5.client.communication/mainAarmUrl = http://192.9.200.111:53122/  | abc连接aarm地址  |   |
| cn.com.agree.ab.a5.client.gui.aui/enableDevTools  |  是否启用chrome调试工具 | chrome调试工具  |
| cn.com.agree.ab.a5.client.gui.aui/defaultTradePath | 默认打开交易,与workspace相对路径 |   |
| cn.com.agree.ab.a5.client.communication/parentMsgUrl | abc连接message地址 |  |
| cn.com.agree.ab.a5.client.communication/fileHttpUrl | 文件上传下载配置 |  |
| cn.com.agree.ab.a5.client.communication/parentHttpUrl | JS直连AASE地址 |  |
| cn.com.agree.ab.a5.client.communication/reconnCount | 壳子websocket断线重连尝试次数 |  |
| cn.com.agree.ab.a5.client.aft/useSimplifiedYuan | false为圆,true为元 默认为false | AFT数据字典解析时用到 |
| cn.com.agree.commons.logging/desensitization | 是否对交易日志进行脱敏 |  |
| cn.com.agree.commons.logging/params | 需要脱敏的参数 |  |
| cn.com.agree.commons.logging/maxLength | 每条交易日志的最大长度； |  |
| cn.com.agree.ab.a5.client.gui.aui/enableRefreshBrowser | 是否启用F5浏览器刷新 |  |
| cn.com.agree.cocktail/maximized | 客户端窗口是否为最大化 |  |
| cn.com.agree.cocktail/windowTitle | 设置ABC窗口名称 |  |
| cn.com.agree.ab.a5.client.gui.aui.log.upload/autoUploadLog | 是否开启旁路日志上传 |  |
| cn.com.agree.ab.a5.client.gui.aui.command.handler/uploadFile | 日志上产用的服务端接口 |  |
| cn.com.agree.ab.a5.client.gui.aui.log.upload/uploadLogInterval | 旁路上传的间隔频率,单位秒 |  |
| cn.com.agree.ab.a5.client.gui.aui.log.upload/remotePath | 日志上传到服务端的相对路径 |  |
| cn.com.agree.ab.a5.client.gui.aui.log.upload/localLogPath | 需要旁路上传的日志文件； | 日志旁路上传有五条相关的配置 |
| cn.com.agree.ab.a5.client.resource/earlyDownResource | 是否全量更新客户端资源,默认false | 非默认配置项 |
| cn.com.agree.ab.a5.client.resource/deleteExtraResource | 是否删除多余文件,默认false | 非默认配置项 |
| cn.com.agree.ab.a5.client.resource/deleteExtraGrmFiles | 是否清理多余的grmFiles,默认false | 非默认配置项 |
| cn.com.agree.ab.a5.client.resource/ignoreDirs  | 设置需要忽略的目录 | 非默认配置项 |
| cn.com.agree.ab.a5.client.resource/scanIgnoreDirChildren | 设置需要忽略目录下需要管理文件夹 | 非默认配置项 |
| cn.com.agree.ab.a5.client.web/port | 客户端本地服务的端口值 | PDF预览框架；AFT打印预览展示； |

**preference.properties 示例**:
``` properties
#默认打开交易,与workspace相对路径
#cn.com.agree.ab.a5.client.gui.aui/defaultTradePath = /ABX/node_modules/@agree/ab-micro-main/index.html

# 是否启用chrome调试工具
cn.com.agree.ab.a5.client.gui.aui/enableDevTools = false

#abc连接message地址
cn.com.agree.ab.a5.client.communication/parentMsgUrl = ws://192.168.70.10/abxadmin/zngt-message/message/websocket

#JS直连AASE地址
cn.com.agree.ab.a5.client.communication/parentHttpUrl=http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/

#资源热部署断线重连尝试次数
cn.com.agree.ab.a5.client.communication/reconnCount = 3

#false为圆,true为元 默认为false
cn.com.agree.ab.a5.client.aft/useSimplifiedYuan = false

#是否对交易日志进行脱敏
cn.com.agree.commons.logging/desensitization = true

#需要脱敏的参数
cn.com.agree.commons.logging/params = UserName:1,symbolicName:6,SA_ACCT_NAME:1,SA_DRW_QYRQ:6

#每条交易日志的最大长度
cn.com.agree.commons.logging/maxLength = 10000

#--------------RCP配置----------------------
# 是否启用F5浏览器刷新
cn.com.agree.ab.a5.client.gui.aui/enableRefreshBrowser = true

#是否记录cef框架日志
cn.com.agree.ab.a5.client.gui.aui/enableCefLog = false

#cef框架日志级别：LOGSEVERITY_DEFAULT/LOGSEVERITY_VERBOSE/LOGSEVERITY_INFO/LOGSEVERITY_WARNING/LOGSEVERITY_ERROR
cn.com.agree.ab.a5.client.gui.aui/cefLogServerity = LOGSEVERITY_INFO;

#是否启用强制关闭客户端shell功能
cn.com.agree.cocktail/forceClosable = true

# 初始化窗口隐藏
cn.com.agree.cocktail/showShell = true

# 初始化窗口大小
cn.com.agree.cocktail/initialSize = 1920,1080

# 是否显示标题栏
cn.com.agree.cocktail/showCaption = true

# shell窗口是否可以关闭
cn.com.agree.cocktail/shellClosable = true

# 是否为最大化
cn.com.agree.cocktail/maximized = false

# shell窗口大小是否可调节
cn.com.agree.cocktail/shellResize = true

# shell窗口大小��否可调节
cn.com.agree.cocktail/shellResizable = true

# 是否显示进度栏
cn.com.agree.cocktail/showProgressIndicator = false

# 是否显示快速视图
cn.com.agree.cocktail/showFastView = false

# 是否显示状态栏
cn.com.agree.cocktail/showStatus = false

# 是否显示工具栏
cn.com.agree.cocktail/showCoolBar = true

# 工具栏是否显示提示文字
cn.com.agree.cocktail/toolbarShowText = false

# 是否显示菜单栏
cn.com.agree.cocktail/showMenuBar = true

# 窗口名称
cn.com.agree.cocktail/windowTitle = X5

# 日志上传
cn.com.agree.ab.a5.client.gui.aui.log.upload/logupload = http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/upService/uploadFile

#****************************具体需求开启或平台默认配置**************************
#法人行aarm地址,多个可以逗号分隔,多法人需求配置
#cn.com.agree.ab.a5.client.communication/otherAarmUrls= 

# ABC托盘web server监听静态工程名称,平台默认webcontext,不需要配置
#cn.com.agree.ab.a5.client.web/defaultDist = webcontext

#注册表注册开机启动,平台默认为true
cn.com.agree.ab.a5.client/register = false

#cef浏览器内存大小设置,单位(M),平台默认1024
#cn.com.agree.ab.a5.client.gui.aui/cefMaxSpace = 2048

# ADS链接地址 让应用申请端口号
#cn.com.agree.ab.a5.client.ads/adsUrl = http://127.0.0.1:3306

# ABC 进行文件传输发送请求http地址
cn.com.agree.ab.a5.client.communication/fileHttpUrl=http://192.168.70.10/abxadmin/zngt-bankservermodule-aase/aase/

# ABC 上传服务
cn.com.agree.ab.a5.client.gui.aui.command.handler/uploadFile=upService/uploadFile

# ABC 下载服务  上传下载走网关 配合application-file里的映射实现
cn.com.agree.ab.a5.client.gui.aui.command.handler/downloadFile=downService/downloadFile

# ABC 前端js http请求最大重连次数
#cn.com.agree.ab.a5.client.communication/maxCount = 0

# 访问 aase https web端口
#cn.com.agree.ab.a5.client.webSsl/port = 7688

#是否开启自动上传日志功能
cn.com.agree.ab.a5.client.gui.aui.log.upload/autoUploadLog=true

#日志上传间隔时间,单位为秒。
cn.com.agree.ab.a5.client.gui.aui.log.upload/uploadLogInterval=60

#服务端储存客户端日志的文件夹,相对路径或绝对路径都可以,相对路径为相对于服务端aase根路径。上传的日志会在该目录下创建日期/oid文件夹来存放上传的日志文件。该日期为上传文件时的日期
cn.com.agree.ab.a5.client.gui.aui.log.upload/remotePath=./uploadClientLog/

#要自动上传的日志列表,以英文逗号分割。其中${date}会被替换为当天日期文件夹
cn.com.agree.ab.a5.client.gui.aui.log.upload/localLogPath=log/${date}/console.log,log/${date}/js-frame.log,log/${date}/js-trade.log,log/client.log,log/gui.log,log/error.log,log/communication.log,log/resource.log

#是否强制缩放
cn.com.agree.ab.a5.client.gui.aui/forceScale = true
cn.com.agree.ab.a5.client.web/ABX5ModuleRootDir = workspace/ABX
cn.com.agree.ab.a5.client.web/extensionFolders = workspace/ABX
cn.com.agree.ab.a5.client.web/resource = local
cn.com.agree.ab.a5.client/connectServer = true
cn.com.agree.ab.a5.client.update.plugin/updatePlugin=true

# 下载前端资源
# cn.com.agree.ab.a5.client.resource/updateTradeResource = true

# 是否全量更新客户端资源,默认false
# cn.com.agree.ab.a5.client.resource/earlyDownResource = false

# 是否删除多余文件,默认false
cn.com.agree.ab.a5.client.resource/deleteExtraResource = false

# 是否清理多余的grmFiles,默认false
cn.com.agree.ab.a5.client.resource/deleteExtraGrmFiles = false

# 设置需要忽略的目录
# cn.com.agree.ab.a5.client.resource/ignoreDirs = 

# 兼容ab4
cn.com.agree.ab.a5.client.compatible.ab4/startCompatible=false
cn.com.agree.ab.a5.client.compatible.ab4/abcPath=\\ab4\\abc.exe
cn.com.agree.ab.a5.client.compatible.ab4/updateLtsPluginUrls=http://172.16.225.90:50002

# ABC托盘http web server监听端口 平台默认8080
cn.com.agree.ab.a5.client.web/port = 55055
```