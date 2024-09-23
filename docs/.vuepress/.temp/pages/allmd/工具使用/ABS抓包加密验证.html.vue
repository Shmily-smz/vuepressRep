<template><div><h2 id="abs-抓包加密验证" tabindex="-1"><a class="header-anchor" href="#abs-抓包加密验证"><span>ABS 抓包加密验证</span></a></h2>
<h3 id="抓包过程" tabindex="-1"><a class="header-anchor" href="#抓包过程"><span>抓包过程</span></a></h3>
<p>在 abs_share.properties 中配置 abs 通讯加密方式，支持 NO、SSL、SM（NO 为无加密）。
      启动 Wireshark，选择需要抓网络包的网卡。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/1.jpg" alt="图片描述"></p>
<p>添加过滤条件，此处过滤条件为 tcp.port==50001（abs 通讯端口为 50001，实际根据本地配置）。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/2.jpg" alt="图片描述"></p>
<p>开始抓包。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/3.jpg" alt="图片描述"></p>
<p>ABC 向 ABS 发送请求。
      此时抓包界面会出现最新的请求信息，点击选中，右键点击追踪流，即可查看本次请求或响应的相关数据。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/4.jpg" alt="图片描述"></p>
<h3 id="不加密-国密抓包数据对比" tabindex="-1"><a class="header-anchor" href="#不加密-国密抓包数据对比"><span>不加密/国密抓包数据对比</span></a></h3>
<h4 id="不加密" tabindex="-1"><a class="header-anchor" href="#不加密"><span>不加密</span></a></h4>
<p>在 abs_share.properties 中配置 abs 通讯加密方式为 NO。</p>
<p>cn.com.agree.ab.a4.pub.communication.cipher/cipherType = NO</p>
<p>ABC 向 ABS 发送请求，并追踪请求数据流（操作过程如上）。</p>
<p>如下图所示，请求/响应信息均可直接查看（此处蓝色部分为服务响应信息，红色部分为客户端发送信息）。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/5.jpg" alt="图片描述"></p>
<h4 id="国密" tabindex="-1"><a class="header-anchor" href="#国密"><span>国密</span></a></h4>
<p>配置服务端和客户端国密。（配置过程详见 AB4.0 平台通讯加密配置说明.doc 和 AB 平台通讯国密加密方案(20171121).doc）
      在 abs_share.properties 中配置 abs 通讯加密方式为 SM。</p>
<p>cn.com.agree.ab.a4.pub.communication.cipher/cipherType = SM</p>
<p>ABC 向 ABS 发送请求，并追踪请求数据流。</p>
<p>如下图所示，请求/响应的相关信息均被加密，无法直接查看。
<img src="@source/allmd/images/工具使用/ABS抓包加密验证/6.jpg" alt="图片描述"></p>
</div></template>


