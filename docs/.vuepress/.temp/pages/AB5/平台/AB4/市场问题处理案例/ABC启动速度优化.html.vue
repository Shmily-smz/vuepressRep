<template><div><h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1：问题描述</span></a></h3>
<p>辽宁农信反映abc启动速度太慢，影响使用体验。现场选取一台配置一般的终端机，增加日志记录启动时间。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/1.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/2.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/3.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/4.png" alt="图片描述">
选取几次稳定运行的数据，可以看到abc在这台终端机上启动花了将近15s
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/5.png" alt="图片描述"></p>
<h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2：问题分析</span></a></h3>
<p>祭出神器jvisualvm，装上 visual GC插件，查看下jvm的内存状态
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/6.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/7.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/8.png" alt="图片描述">
可以看出compile花费了2s，class loader花费了11s，gc花费了1s。compile会加速java程序的运行，不可以禁用，class loader目前来看只能通过减少class的数量缓解，gc可以通过参数调整。</p>
<p>那么现在问题解决方式已经明确
1、调整abc.ini中启动参数
2、去除无用插件
3、剖析程序中其他耗时，并针对耗时点进行优化</p>
<h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3：问题解决</span></a></h3>
<p>第一步：调整启动参数
把git上Doc工程下面的abc.ini放到该abc下，再次运行，可以看到整体有2s左右的提升，特别是osgi加载耗时与gc耗时方面的提升比较明显。
这里提下-Xverify:none，此参数表示禁用字节码验证。abc下面使用的插件是由eclipse导出的，我们可以认为编译的代码是可靠的。加入这个参数后，JDK类加载速度会有所提高。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/9.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/10.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/11.png" alt="图片描述">
第二步：去除无用插件
翻看abc下面所有插件，可以看到jetty、Lucene相关插件基本无用，梳理好依赖关系后删除这些插件。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/12.png" alt="图片描述">
删除后可以看到类加载数量与加载时间都有相应的减少</p>
<p>去除无用插件的过程中，可以用到eclipse Debug Configurations中的Validate Plug-ins功能，在Plug-ins中取消勾选需要去除的无用插件，点击Validate Plug-ins可以查看出现问题的插件，这些插件有很大可能是依赖了刚刚取消勾选的插件。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/13.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/14.png" alt="图片描述">
第三步：剖析程序中其他耗时，并针对耗时点进行优化
1)日志中可以看到，不管有无插件下载，客户端每次都会计算插件间的依赖关系，此处会消耗一定时间
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/15.png" alt="图片描述">
插件下载中增加判断，如果没有插件更新，不再继续校验依赖关系。但此处修改后会导致一个新问题，若服务器没有插件更新，只是删除了个别插件，客户端不会进行删除，只有在有更新时才会删除。权衡利弊后，决定为了速度，放弃这项功能。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/16.png" alt="图片描述"></p>
<p>2)日志中也可以看到GuiView中initFeature之后会消耗一定时间
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/17.png" alt="图片描述">
增加日志查看耗时点，发现导出xml会消耗一定时间，xml是为了ide可以随时拿到最新的ui组件方法，方便开发，生产环境中直接去除该功能。获取mac地址功能会调用windows命令行，耗费一些时间，把该功能移到独立线程中运行。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/18.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/19.png" alt="图片描述">
更改后
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/20.png" alt="图片描述">
3)日志中还可以看到很多Prerequisite依赖插件更新，实际运行时，插件更新后会重启abc，重启之前插件肯定是旧的，而重启后插件肯定是新的。这些启动项依赖插件更新意义不大，反而必须要插件更新逻辑走完之后才会运行其他逻辑，耗费一定的时间。整理启动项，去除不必要的依赖。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/21.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/22.png" alt="图片描述"></p>
<p>整理完成后，大部分Prerequisite只依赖启动配置客户端。
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/23.png" alt="图片描述">
经过上面几点优化，最终结果如下所示
<img src="@source/AB5/images/平台/AB4/市场问题处理案例/ABC启动速度优化/24.png" alt="图片描述"></p>
<h3 id="_4-习题" tabindex="-1"><a class="header-anchor" href="#_4-习题"><span>4：习题</span></a></h3>
<p>abc启动参数中增加-Xverify:none参数，是否可以加快abc启动速度。</p>
</div></template>


