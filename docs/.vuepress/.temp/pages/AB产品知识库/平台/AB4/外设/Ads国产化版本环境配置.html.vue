<template><div><h2 id="环境描述" tabindex="-1"><a class="header-anchor" href="#环境描述"><span>环境描述</span></a></h2>
<p>基于当前国产化版本推广，客户端 需要迁移到linux上运行。需要修改部分的功能实现以兼容linux系统。Ads作为客户端对接外设的主要渠道，提供了一版基于linux系统的可执行文件</p>
<h2 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h2>
<h4 id="_1-按原有ads启动方式无法启动" tabindex="-1"><a class="header-anchor" href="#_1-按原有ads启动方式无法启动"><span>1.按原有ads启动方式无法启动:</span></a></h4>
<p>SwtExec.launch(exePath, installPath, String.valueOf(DeviceSocketServer.getPort()));</p>
<h4 id="_2-单独运行ads会报出如下异常" tabindex="-1"><a class="header-anchor" href="#_2-单独运行ads会报出如下异常"><span>2.单独运行ads会报出如下异常:</span></a></h4>
<p>error while loading shared libraries: liblog4cplus-1.2.so.5: cannot open shared object file: No such file or directory<img src="@source/AB产品知识库/images/平台/AB4/外设/Ads国产化版本环境配置/1.png" alt="enter image description here"></p>
<h4 id="_3-权限问题" tabindex="-1"><a class="header-anchor" href="#_3-权限问题"><span>3.权限问题:</span></a></h4>
<p><img src="@source/AB产品知识库/images/平台/AB4/外设/Ads国产化版本环境配置/2.png" alt="VirtualBox_QtCreat_03_06_2021_17_07_23.png"></p>
<h2 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h2>
<h4 id="_1-swt是基于win32的api-现在更改为如下方式" tabindex="-1"><a class="header-anchor" href="#_1-swt是基于win32的api-现在更改为如下方式"><span>1.swt是基于win32的api，现在更改为如下方式：</span></a></h4>
<p>List<code v-pre>&lt;String&gt;</code> command = new ArrayList&lt;&gt;();
command.add(exePath );
command.add(String.valueOf(DeviceSocketServer.getPort()));
logger.info(&quot;启动ads的命令为:&quot; + String.join(&quot; &quot;, command));
ProcessBuilder pb = new ProcessBuilder(command);
pb.start();</p>
<h4 id="_2-基于linux通过ldd命令查看ads的相关依赖" tabindex="-1"><a class="header-anchor" href="#_2-基于linux通过ldd命令查看ads的相关依赖"><span>2.基于linux通过ldd命令查看ads的相关依赖</span></a></h4>
<p>ldd Ads
<img src="@source/AB产品知识库/images/平台/AB4/外设/Ads国产化版本环境配置/3.png" alt="VirtualBox_QtCreat_04_06_2021_15_19_50.png">
其中有三个so库为相对路径；libProtocol，libConfigUtils，liblog4cplus-1.2.so
我们在启动的时候一般使用的是绝对路径，所以需要在指定LD_LIBRARY_PATH
abcDir= <code v-pre>pwd</code>
export LD_LIBRARY_PATH=$abcDir/ads</p>
<h4 id="_3-ads由插件下发" tabindex="-1"><a class="header-anchor" href="#_3-ads由插件下发"><span>3.ads由插件下发</span></a></h4>
<p>从插件拷贝到现有环境时，ads并没有可执行权限，这时候需要先才cd到客户端根路径执行命令
chmod -R 777 ads</p>
<h2 id="衍生问题" tabindex="-1"><a class="header-anchor" href="#衍生问题"><span>衍生问题</span></a></h2>
<h4 id="_1-windows版本ads外设动态库如何查看依赖是否缺少" tabindex="-1"><a class="header-anchor" href="#_1-windows版本ads外设动态库如何查看依赖是否缺少"><span>1.windows版本ads外设动态库如何查看依赖是否缺少？</span></a></h4>
<p>Dependency Walker是一个免费的实用程序，它可以扫描任何32位或64位Windows模块（exe、dll、ocx、sys等），并构建所有依赖模块的层次树图。对于找到的每个模块，它列出了该模块导出的所有函数，以及其他模块实际调用的那些函数。另一个视图显示所需文件的最小集，以及有关每个文件的详细信息，包括文件的完整路径、基址、版本号、计算机类型、调试信息等。
<img src="@source/AB产品知识库/images/平台/AB4/外设/Ads国产化版本环境配置/4.png" alt="enter image description here"></p>
<h4 id="_2-ads能否在拷贝出来时就是可执行文件" tabindex="-1"><a class="header-anchor" href="#_2-ads能否在拷贝出来时就是可执行文件"><span>2.ads能否在拷贝出来时就是可执行文件？</span></a></h4>
<p>压缩打包插件前，先给ads赋予执行权限</p>
</div></template>


