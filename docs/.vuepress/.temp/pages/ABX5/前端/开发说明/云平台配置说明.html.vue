<template><div><h1 id="云平台配置说明" tabindex="-1"><a class="header-anchor" href="#云平台配置说明"><span>云平台配置说明</span></a></h1>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>文档内相关配置及操作基于 Accas 云平台，其他云平台可参考使用</p>
</div>
<h2 id="文件分发、过滤配置" tabindex="-1"><a class="header-anchor" href="#文件分发、过滤配置"><span>文件分发、过滤配置</span></a></h2>
<div class="hint-container tip">
<p class="hint-container-title">Tips</p>
<p>IDE 进行打包部署(全量、差量部署)之后,将交易包发送到<code v-pre>abm</code>服务内,进行分发处理</p>
<p><code v-pre>abm</code>会匹配配置内配置的文件类型,将交易包分发到对应的服务内,如包内存在<code v-pre>vue</code>文件,即向<code v-pre>aarm</code>服务发送交易包</p>
<p><code v-pre>aarm</code>会将交易包内未配置的文件类型过滤筛除,如包内存在<code v-pre>.ns</code>文件,配置内不存在,即该文件将从<code v-pre>aarm</code>服务内删除</p>
</div>
<h3 id="abm-配置文件查看" tabindex="-1"><a class="header-anchor" href="#abm-配置文件查看"><span>abm 配置文件查看</span></a></h3>
<ul>
<li><strong>配置文件</strong>:</li>
</ul>
<blockquote>
<p>abm 服务交易包分发配置,配置路径: <code v-pre>/aase/config/application-abm.yml</code></p>
</blockquote>
<p><strong>配置文件查看</strong>:</p>
<ol>
<li>查看 abm 服务是否外挂配置
<img src="@source/ABX5/前端/开发说明/img/Accas_abm_config1.png" alt="配置查看1" title="配置查看1"></li>
<li>查看 abm 外挂配置文件
<img src="@source/ABX5/前端/开发说明/img/Accas_abm_config2.png" alt="配置查看2" title="配置查看2"></li>
<li>查看与修改 abm 配置文件
<img src="@source/ABX5/前端/开发说明/img/Accas_abm_config3.png" alt="配置查看3" title="配置查看3"></li>
</ol>
<ul>
<li><strong>application-abm.yml 前端配置说明</strong>:</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">aarm</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token key atrule">enable</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line">  <span class="token comment"># IDE 部署的交易包内若包含 suffix 内对应的文件类型,就会向 aarm 发送交易包</span></span>
<span class="line">  <span class="token comment"># aarm 服务内的文件类型如果添加,应同步更新 suffix 的内容</span></span>
<span class="line">  <span class="token key atrule">suffix</span><span class="token punctuation">:</span> vue<span class="token punctuation">,</span>js<span class="token punctuation">,</span>json<span class="token punctuation">,</span>css<span class="token punctuation">,</span>scss<span class="token punctuation">,</span>sass<span class="token punctuation">,</span>png<span class="token punctuation">,</span>pdf<span class="token punctuation">,</span>gif<span class="token punctuation">,</span>jpg<span class="token punctuation">,</span>adt<span class="token punctuation">,</span>ts<span class="token punctuation">,</span>aft<span class="token punctuation">,</span>dat</span>
<span class="line">  <span class="token key atrule">nums</span><span class="token punctuation">:</span> <span class="token number">1</span></span>
<span class="line">  <span class="token key atrule">url</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//%s<span class="token punctuation">:</span>%s/compileUpload</span>
<span class="line">  <span class="token key atrule">targetpath</span><span class="token punctuation">:</span> /aarm/compile<span class="token punctuation">-</span>script</span>
<span class="line">  <span class="token key atrule">ip</span><span class="token punctuation">:</span> http<span class="token punctuation">:</span>//%s/%s/%s/aarm</span>
<span class="line">  <span class="token key atrule">image</span><span class="token punctuation">:</span> 192.168.70.11<span class="token punctuation">:</span>9980/abxmlh/aarm<span class="token punctuation">:</span>v20230214<span class="token punctuation">-</span>mal.1</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="aarm-配置文件查看" tabindex="-1"><a class="header-anchor" href="#aarm-配置文件查看"><span>aarm 配置文件查看</span></a></h3>
<ul>
<li><strong>配置文件</strong>: 参考 <a href="#abm-%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E6%9F%A5%E7%9C%8B">abm 配置文件查看</a></li>
</ul>
<blockquote>
<p>aarm 服务过滤文件配置,配置文件路径: <code v-pre>/aarm/config/application.yml</code></p>
</blockquote>
<p>配置文件内容:
<img src="@source/ABX5/前端/开发说明/img/Accas_aarm_config.png" alt="aarm配置查看" title="aarm配置查看"></p>
<ul>
<li><strong>application.yml 前端配置说明</strong>:</li>
</ul>
<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre v-pre><code><span class="line"><span class="token key atrule">aarm</span><span class="token punctuation">:</span>  </span>
<span class="line">  compile<span class="token punctuation">:</span></span>
<span class="line">    <span class="token comment"># 修改编译命令</span></span>
<span class="line">    parameter<span class="token punctuation">:</span> build <span class="token punctuation">-</span><span class="token punctuation">-</span>nominimize <span class="token comment"># 编译命令使用 yarn dev ...</span></span>
<span class="line"></span>
<span class="line"><span class="token key atrule">resource</span><span class="token punctuation">:</span></span>
<span class="line">  <span class="token comment"># pattern 内存在的文件类型会被保留在 aarm 服务内,其他类型文件会被过滤</span></span>
<span class="line">  <span class="token key atrule">pattern</span><span class="token punctuation">:</span> vue<span class="token punctuation">,</span>js<span class="token punctuation">,</span>json<span class="token punctuation">,</span>css<span class="token punctuation">,</span>scss<span class="token punctuation">,</span>sass<span class="token punctuation">,</span>png<span class="token punctuation">,</span>pdf<span class="token punctuation">,</span>gif<span class="token punctuation">,</span>jpg<span class="token punctuation">,</span>adt<span class="token punctuation">,</span>ts<span class="token punctuation">,</span>aft<span class="token punctuation">,</span>dat<span class="token punctuation">,</span>less<span class="token punctuation">,</span>adm<span class="token punctuation">,</span>adt<span class="token punctuation">,</span>pt<span class="token punctuation">,</span>fl<span class="token punctuation">,</span>mp4<span class="token punctuation">,</span>webm<span class="token punctuation">,</span>ogg<span class="token punctuation">,</span>mp3<span class="token punctuation">,</span>wav<span class="token punctuation">,</span>flac<span class="token punctuation">,</span>aac<span class="token punctuation">,</span>svg<span class="token punctuation">,</span>jpeg<span class="token punctuation">,</span>woff<span class="token punctuation">,</span>woff2<span class="token punctuation">,</span>eot<span class="token punctuation">,</span>ttf<span class="token punctuation">,</span>otf</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="preference-properties" tabindex="-1"><a class="header-anchor" href="#preference-properties"><span>preference.properties</span></a></h3>
<blockquote>
<p>ABX5 客户端配置文件,文件路径: <code v-pre>/aarm/clientWorkspace/default/preferenceServer/preference.properties</code></p>
</blockquote>
<p><strong>文件内容</strong>:
详细内容请参考 <RouteLink to="/ABX5/%E5%89%8D%E7%AB%AF/%E5%89%8D%E7%AB%AF%E9%85%8D%E7%BD%AE%E6%96%87%E4%BB%B6%E4%BB%8B%E7%BB%8D/preference.html">preference.properties 介绍</RouteLink></p>
</div></template>


