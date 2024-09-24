<template><div><h1 id="上海银行-上海银行" tabindex="-1"><a class="header-anchor" href="#上海银行-上海银行"><span>上海银行 {#上海银行}</span></a></h1>
<h2 id="环境需求" tabindex="-1"><a class="header-anchor" href="#环境需求"><span>环境需求</span></a></h2>
<ul>
<li>
<ol>
<li><code v-pre>Nodejs</code>版本：16.19.1</li>
</ol>
</li>
<li>
<ol start="2">
<li>编译命令：<code v-pre>npm run build outDir=/aarm/clientWorkspace/default/workspace/</code></li>
</ol>
</li>
<li>
<ol start="3">
<li>修改<code v-pre>deploy.config.json</code>的配置，用于配置运行时的参数</li>
</ol>
</li>
<li>
<ol start="4">
<li>上海银行行内操作系统为<code v-pre>win7</code>，<code v-pre>node</code>高版本会有警告：<code v-pre>set NODE_SKIP_PLATFORM_CHECK=1</code>，可直接设置环境变量</li>
</ol>
</li>
</ul>
<h2 id="资源清单" tabindex="-1"><a class="header-anchor" href="#资源清单"><span>资源清单</span></a></h2>
<blockquote>
<p>前端提供的<code v-pre>sdk</code>清单信息</p>
</blockquote>
<table>
<thead>
<tr>
<th style="text-align:center">number</th>
<th style="text-align:left">packageName</th>
<th style="text-align:left">version</th>
<th>description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:center">1</td>
<td style="text-align:left">@agree/ab-micro-main</td>
<td style="text-align:left">5.0.1</td>
<td>主应用</td>
</tr>
<tr>
<td style="text-align:center">2</td>
<td style="text-align:left">@agree/ab-html</td>
<td style="text-align:left">5.0.3</td>
<td>应用入口</td>
</tr>
<tr>
<td style="text-align:center">3</td>
<td style="text-align:left">@agree/x5-loader-plugin</td>
<td style="text-align:left">5.0.4</td>
<td>模块加载器</td>
</tr>
<tr>
<td style="text-align:center">4</td>
<td style="text-align:left">@agree/ab-core</td>
<td style="text-align:left">5.0.3</td>
<td>事件消息总线(TS 版)</td>
</tr>
<tr>
<td style="text-align:center">5</td>
<td style="text-align:left">@agree/abx-core</td>
<td style="text-align:left">5.0.5</td>
<td>长流程引擎</td>
</tr>
<tr>
<td style="text-align:center">6</td>
<td style="text-align:left">@agree/ab-core-util</td>
<td style="text-align:left">5.0.0</td>
<td>插件工具类</td>
</tr>
<tr>
<td style="text-align:center">7</td>
<td style="text-align:left">@agree/ab-plugin-peer</td>
<td style="text-align:left">5.0.0</td>
<td>通讯组件</td>
</tr>
<tr>
<td style="text-align:center">8</td>
<td style="text-align:left">@agree/ab-manager-eventbus</td>
<td style="text-align:left">5.0.0</td>
<td>事件总线</td>
</tr>
<tr>
<td style="text-align:center">9</td>
<td style="text-align:left">@agree/ab-manager-data2</td>
<td style="text-align:left">5.0.0</td>
<td>数据模型管理(新版)</td>
</tr>
<tr>
<td style="text-align:center">10</td>
<td style="text-align:left">@agree/ab-shared</td>
<td style="text-align:left">5.0.1</td>
<td>公共 API</td>
</tr>
<tr>
<td style="text-align:center">11</td>
<td style="text-align:left">@agree/ab-manager-hooks-executer</td>
<td style="text-align:left">5.0.0</td>
<td>钩子函数执行器</td>
</tr>
<tr>
<td style="text-align:center">12</td>
<td style="text-align:left">@agree/ab-manager-lfc</td>
<td style="text-align:left">5.0.0</td>
<td>LFC 执行器</td>
</tr>
<tr>
<td style="text-align:center">13</td>
<td style="text-align:left">@agree/ab-manager-focus2</td>
<td style="text-align:left">5.0.3</td>
<td>焦点控制</td>
</tr>
<tr>
<td style="text-align:center">14</td>
<td style="text-align:left">@agree/ab-plugin-gpy</td>
<td style="text-align:left">5.0.0</td>
<td>高拍仪操作类</td>
</tr>
<tr>
<td style="text-align:center">15</td>
<td style="text-align:left">@agree/ab-manager-watermark</td>
<td style="text-align:left">5.0.0</td>
<td>水印管理</td>
</tr>
<tr>
<td style="text-align:center">16</td>
<td style="text-align:left">@agree/ab-plugin-map</td>
<td style="text-align:left">5.0.0</td>
<td>地图组件</td>
</tr>
<tr>
<td style="text-align:center">17</td>
<td style="text-align:left">@agree/ab-logger-upload</td>
<td style="text-align:left">5.0.0</td>
<td>日志上传工具</td>
</tr>
<tr>
<td style="text-align:center">18</td>
<td style="text-align:left">@agree/ab-plugin-embed-xinwanjia</td>
<td style="text-align:left">5.0.0</td>
<td>前端内嵌鑫万佳控件</td>
</tr>
<tr>
<td style="text-align:center">19</td>
<td style="text-align:left">@agree/ab-manager-websocket</td>
<td style="text-align:left">5.0.0</td>
<td>Socket 链接器</td>
</tr>
<tr>
<td style="text-align:center">20</td>
<td style="text-align:left">@agree/ab-plugin-beijia</td>
<td style="text-align:left">5.0.0</td>
<td>移动背夹(TS 版)</td>
</tr>
<tr>
<td style="text-align:center">21</td>
<td style="text-align:left">@agree/ab-plugin-tools</td>
<td style="text-align:left">5.0.0</td>
<td>tools 工具类</td>
</tr>
<tr>
<td style="text-align:center">22</td>
<td style="text-align:left">@agree/ab-plugin-media</td>
<td style="text-align:left">5.0.0</td>
<td>多媒体工具类</td>
</tr>
<tr>
<td style="text-align:center">23</td>
<td style="text-align:left">@agree/ab-plugin-liveness</td>
<td style="text-align:left">5.0.0</td>
<td>活体检测</td>
</tr>
<tr>
<td style="text-align:center">24</td>
<td style="text-align:left">@agree/ab-plugin-aft</td>
<td style="text-align:left">5.0.0</td>
<td>AFT(TS 版)</td>
</tr>
<tr>
<td style="text-align:center">25</td>
<td style="text-align:left">agree-public-client</td>
<td style="text-align:left">1.0.131</td>
<td>线下渠道应用公共工程</td>
</tr>
<tr>
<td style="text-align:center">26</td>
<td style="text-align:left">@agree/ab-plugin-device</td>
<td style="text-align:left">5.0.0</td>
<td>外设操作类组件</td>
</tr>
<tr>
<td style="text-align:center">27</td>
<td style="text-align:left">@agree/ab-plugin-embed</td>
<td style="text-align:left">5.0.0</td>
<td>前端内嵌类组件</td>
</tr>
<tr>
<td style="text-align:center">28</td>
<td style="text-align:left">@agree/ab-plugin-trade</td>
<td style="text-align:left">5.0.5</td>
<td>ab5 内嵌 ab3 交易专属</td>
</tr>
<tr>
<td style="text-align:center">29</td>
<td style="text-align:left">@agree/ab-plugin-embed-panel</td>
<td style="text-align:left">5.0.0</td>
<td>前端内嵌组件桥接面板</td>
</tr>
<tr>
<td style="text-align:center">30</td>
<td style="text-align:left">@agree/ab-plugin-file</td>
<td style="text-align:left">5.0.1</td>
<td>文件操作类</td>
</tr>
<tr>
<td style="text-align:center">31</td>
<td style="text-align:left">@agree/ab-plugin-evs</td>
<td style="text-align:left">5.0.0</td>
<td>无纸化操作类</td>
</tr>
<tr>
<td style="text-align:center">32</td>
<td style="text-align:left">@agree/ab-plugin-codec-file</td>
<td style="text-align:left">5.0.0</td>
<td>编解码类组件</td>
</tr>
<tr>
<td style="text-align:center">33</td>
<td style="text-align:left">@agree/ab-manager-device</td>
<td style="text-align:left">5.0.0</td>
<td>外设调用</td>
</tr>
<tr>
<td style="text-align:center">34</td>
<td style="text-align:left">@agree/ab-manager-channel</td>
<td style="text-align:left">5.0.0</td>
<td>渠道号管理器</td>
</tr>
<tr>
<td style="text-align:center">35</td>
<td style="text-align:left">@agree/ab-plugin-burypoint</td>
<td style="text-align:left">5.0.0</td>
<td>埋点调试组件</td>
</tr>
<tr>
<td style="text-align:center">36</td>
<td style="text-align:left">@agree/picture</td>
<td style="text-align:left">5.0.0</td>
<td>格式化处理表达式</td>
</tr>
<tr>
<td style="text-align:center">37</td>
<td style="text-align:left">@agree/ab-manager-validator</td>
<td style="text-align:left">5.0.0</td>
<td>校验管理</td>
</tr>
<tr>
<td style="text-align:center">38</td>
<td style="text-align:left">@agree/aui-web</td>
<td style="text-align:left">5.0.9</td>
<td>柜面端组件库</td>
</tr>
<tr>
<td style="text-align:center">39</td>
<td style="text-align:left">@agree/aui-m</td>
<td style="text-align:left">5.0.4</td>
<td>移动端组件库</td>
</tr>
<tr>
<td style="text-align:center">40</td>
<td style="text-align:left">@agree/ab-manager-ui-history</td>
<td style="text-align:left">5.0.1</td>
<td>交易历史记录器</td>
</tr>
<tr>
<td style="text-align:center">41</td>
<td style="text-align:left">@agree/ab-manager-service</td>
<td style="text-align:left">5.0.1</td>
<td>通讯管理器</td>
</tr>
<tr>
<td style="text-align:center">42</td>
<td style="text-align:left">@agree/ab-manager-codec</td>
<td style="text-align:left">5.0.0</td>
<td>加密/解密/编码/解码插件</td>
</tr>
<tr>
<td style="text-align:center">43</td>
<td style="text-align:left">@agree/ab-manager-data</td>
<td style="text-align:left">5.0.3</td>
<td>数据模型管理</td>
</tr>
<tr>
<td style="text-align:center">44</td>
<td style="text-align:left">@agree/ab-manager-database</td>
<td style="text-align:left">5.0.0</td>
<td>结构化数据存取</td>
</tr>
<tr>
<td style="text-align:center">45</td>
<td style="text-align:left">@agree/ab-manager-context</td>
<td style="text-align:left">5.0.0</td>
<td>交易上下文管理器</td>
</tr>
<tr>
<td style="text-align:center">46</td>
<td style="text-align:left">@agree/abx-manager-websocket</td>
<td style="text-align:left">5.0.0</td>
<td>websocket 连接</td>
</tr>
<tr>
<td style="text-align:center">47</td>
<td style="text-align:left">@agree/abx-manager-http</td>
<td style="text-align:left">5.0.0</td>
<td>请求操作类</td>
</tr>
<tr>
<td style="text-align:center">48</td>
<td style="text-align:left">@agree/ab-logger</td>
<td style="text-align:left">5.0.0</td>
<td>日志记录器</td>
</tr>
<tr>
<td style="text-align:center">49</td>
<td style="text-align:left">@agree/ab-manager-default-loading-page</td>
<td style="text-align:left">5.0.0</td>
<td>默认加载页</td>
</tr>
<tr>
<td style="text-align:center">50</td>
<td style="text-align:left">@agree/ab-launcher</td>
<td style="text-align:left">5.0.1</td>
<td>启动器</td>
</tr>
<tr>
<td style="text-align:center">51</td>
<td style="text-align:left">@agree/ab-plugin-client</td>
<td style="text-align:left">5.0.2</td>
<td>客户端配置项</td>
</tr>
<tr>
<td style="text-align:center">52</td>
<td style="text-align:left">@agree/ab-manager-trade2</td>
<td style="text-align:left">5.0.3</td>
<td>交易管理器</td>
</tr>
<tr>
<td style="text-align:center">53</td>
<td style="text-align:left">@agree/ab-manager-hotkey</td>
<td style="text-align:left">5.0.0</td>
<td>热键管理器</td>
</tr>
<tr>
<td style="text-align:center">54</td>
<td style="text-align:left">@agree/ab-manager-auf</td>
<td style="text-align:left">5.0.1</td>
<td>短流程引擎</td>
</tr>
<tr>
<td style="text-align:center">55</td>
<td style="text-align:left">@agree/ab-plugin-message</td>
<td style="text-align:left">5.0.4</td>
<td>消息管理类</td>
</tr>
<tr>
<td style="text-align:center">56</td>
<td style="text-align:left">@agree/ab-manager-lifecycle</td>
<td style="text-align:left">5.0.0</td>
<td>生命周期管理器</td>
</tr>
<tr>
<td style="text-align:center">57</td>
<td style="text-align:left">@agree/ab-manager-container-provider</td>
<td style="text-align:left">5.0.3</td>
<td>创建多种类型容器</td>
</tr>
<tr>
<td style="text-align:center">58</td>
<td style="text-align:left">@agree/ab-manager-page-message</td>
<td style="text-align:left">5.0.0</td>
<td>画面消息传递器</td>
</tr>
<tr>
<td style="text-align:center">59</td>
<td style="text-align:left">@agree/abx-plugin-file</td>
<td style="text-align:left">5.0.0</td>
<td>长流程文件操作类</td>
</tr>
<tr>
<td style="text-align:center">60</td>
<td style="text-align:left">@agree/ab-manager-trade</td>
<td style="text-align:left">5.0.3</td>
<td>交易管理器(新版)</td>
</tr>
<tr>
<td style="text-align:center">61</td>
<td style="text-align:left">@agree/cli-bundless</td>
<td style="text-align:left">5.0.9</td>
<td>编译工具</td>
</tr>
<tr>
<td style="text-align:center">62</td>
<td style="text-align:left">@agree/ab-plugin-yanyin</td>
<td style="text-align:left">5.0.1</td>
<td>验印</td>
</tr>
</tbody>
</table>
</div></template>


