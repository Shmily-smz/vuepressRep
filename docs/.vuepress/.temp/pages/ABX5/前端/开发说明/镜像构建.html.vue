<template><div><h1 id="镜像构建介绍-镜像构建介绍" tabindex="-1"><a class="header-anchor" href="#镜像构建介绍-镜像构建介绍"><span>镜像构建介绍 {#镜像构建介绍}</span></a></h1>
<h2 id="镜像包目录简介-镜像包目录简介" tabindex="-1"><a class="header-anchor" href="#镜像包目录简介-镜像包目录简介"><span>镜像包目录简介 {#镜像包目录简介}</span></a></h2>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">aarm</span>
<span class="line">├─ clientWorkspace             </span>
<span class="line">│  └─ default</span>
<span class="line">│     ├─ preferenceServer</span>
<span class="line">│     │  └─ preference.properties  # abc配置文件</span>
<span class="line">│     ├─ update</span>
<span class="line">│     │  └─ plugins                # abc插件</span>
<span class="line">│     └─ workspace                 # 前端资源编译后的输出路径    </span>
<span class="line">├─ compile-script                  # 前端资源</span>
<span class="line">├─ config                          # 服务端资源</span>
<span class="line">├─ https                           # 服务端资源</span>
<span class="line">├─ log                             # 服务端资源</span>
<span class="line">├─ version.txt                     # 服务端资源</span>
<span class="line">├─ startup.bat                     # 服务端资源</span>
<span class="line">├─ startup.sh                      # 服务端资源</span>
<span class="line">├─ shutdown.sh                     # 服务端资源</span>
<span class="line">├─ refreshserver.sh                # 服务端资源</span>
<span class="line">├─ acaas-startup.sh                # 服务端资源</span>
<span class="line">└─ aarm-5.0.0.jar                  # 服务端资源</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="镜像包构建版本-镜像包构建版本" tabindex="-1"><a class="header-anchor" href="#镜像包构建版本-镜像包构建版本"><span>镜像包构建版本 {#镜像包构建版本}</span></a></h2>
<p>镜像包分为两个部分：服务端资源，前端资源</p>
<ul>
<li><strong>服务端资源</strong></li>
</ul>
<p>服务端资源包含服务端需要的资源，具体介绍请查看<a href="./%E6%9C%8D%E5%8A%A1%E7%AB%AF%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95%E4%BB%8B%E7%BB%8D">服务端资源目录介绍</a></p>
<ul>
<li><strong>前端资源</strong></li>
</ul>
<p>1.前端资源包含脚本，依赖库以及配置文件等，具体介绍请查看<a href="./%E5%89%8D%E7%AB%AF%E8%B5%84%E6%BA%90%E7%9B%AE%E5%BD%95%E4%BB%8B%E7%BB%8D">前端资源目录介绍</a></p>
<p>2.服务端资源需要服务端提供</p>
<p>前端资源需要前端提供，并放置到<code v-pre>compile-script</code>目录，并且更新目录下的版本信息</p>
<p>3.使用压缩工具或者执行压缩命令，生成<code v-pre>aarm.tar.gz</code></p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">tar -jcvf aarm.tar.gz ./aarm</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="镜像构建-镜像构建" tabindex="-1"><a class="header-anchor" href="#镜像构建-镜像构建"><span>镜像构建 {#镜像构建}</span></a></h2>
<ul>
<li><strong>管理端</strong></li>
</ul>
<p>镜像构建方式需要在<code v-pre>管理端</code>进行</p>
<p>1.管理端地址</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">http://192.168.70.10:21980/dist/#/</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><p>2.账号需要由相关人员提供</p>
<ul>
<li><strong>构建步骤</strong></li>
</ul>
<h5 id="部署" tabindex="-1"><a class="header-anchor" href="#部署"><span>部署</span></a></h5>
<p>适用于未部署过的镜像，如果已经部署过应用，可以忽略此步骤</p>
<ol>
<li><strong>选择部署 -&gt; 部署应用</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app1.png" alt="部署应用" title="部署应用"></li>
<li><strong>镜像选择</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app2.png" alt="镜像选择" title="镜像选择"></li>
<li><strong>填入应用信息</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app3.png" alt="填入应用信息" title="填入应用信息"></li>
<li><strong>修改基础配置</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app4.png" alt="修改基础配置" title="修改基础配置"></li>
<li><strong>修改高级配置</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app5.png" alt="修改高级配置" title="修改高级配置"></li>
<li><strong>确认应用信息</strong>:
<img src="@source/ABX5/前端/开发说明/img/Accas_deploy_app6.png" alt="确认应用信息" title="确认应用信息"></li>
</ol>
<h5 id="镜像构建" tabindex="-1"><a class="header-anchor" href="#镜像构建"><span>镜像构建</span></a></h5>
<p>1.上传镜像源文件：将刚刚压缩好的<code v-pre>aarm.tar.gz</code>上传</p>
<p>2.模板选择：模板主要是提供在镜像构建过程中的脚本，也可以自定义</p>
<!-- 待完善说明 -->
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">FROM 192.168.70.11:9980/abxadmin/jdk-node:latest</span>
<span class="line">ENV LANG zh_CN.UTF-8</span>
<span class="line">ADD aarm.tar.gz /</span>
<span class="line">ENV TZ Asia/Shanghai</span>
<span class="line">WORKDIR /aarm/</span>
<span class="line">RUN yarn --cwd /aarm/compile-script/ build --outDir /aarm/clientWorkspace/default/workspace --log res > /dev/null 2>&amp;1</span>
<span class="line">EXPOSE 8000</span>
<span class="line">CMD sh startup.sh</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>3.自定义镜像信息</p>
<p>镜像名称（必填）:<code v-pre>aarm</code></p>
<p>版本（必填）：<code v-pre>20230621-1</code></p>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>镜像名仅支持小写字母、数字及中，下划线，最少输入3个字符，必须以字母为开头，不能以中划线为结尾</p>
<p>版本仅支持小写字母，数字,中划线,下划线和小数点，且不能以特殊字符开头和结尾,例：&quot;v1.3.0-beta.1&quot;</p>
</div>
<p>4.点击<code v-pre>确认构建镜像</code></p>
<p>
  <img src="@source/ABX5/前端/开发说明/img/镜像构建.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>
<p>5.确认镜像构建完成后，需要升级镜像</p>
<p>在<code v-pre>应用-服务</code>列表中查找到服务名称，点击<code v-pre>多选框</code>选择，在本行后面有个<code v-pre>升级</code>图标，点击<code v-pre>更新应用</code></p>
<p>
  <img src="@source/ABX5/前端/开发说明/img/镜像升级.png" alt="vitepress init screenshot" style="border-radius:8px">
</p>
<p>6.镜像升级结束后，需重新部署交易</p>
<!-- 待完善，需要选中刚才上传的版本，然后开始升级，完成的标志 -->
</div></template>


