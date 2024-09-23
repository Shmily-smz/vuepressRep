<template><div><h3 id="_1、问题描述" tabindex="-1"><a class="header-anchor" href="#_1、问题描述"><span>1、问题描述</span></a></h3>
<p>辽宁农信测试环境反映部署200个数据字典后不生效，徽商也在反应同样问题。梳理逻辑，ade资源在更新时，grm改变后会触发update方法，保证ade为最新状态。
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/1.png" alt="图片描述">
但交易中偶发还会报出如下错误
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/2.png" alt="图片描述"></p>
<p>恰好解决方案有环境可以重现， <strong>每次加载完缓存后，有一定概率</strong> 可以出现该问题，那么就从该环境着手跟踪分析下该问题。</p>
<h3 id="_2、问题分析" tabindex="-1"><a class="header-anchor" href="#_2、问题分析"><span>2、问题分析</span></a></h3>
<p>既然update方式正常，那么先打印出来ADERegistry在前后两次是否为同一个对象呢，添加日志，得到如下结果，发现对象果然发生了改变
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/3.png" alt="图片描述">
那么在ADERegistry的构造方法中，增加调用堆栈打印，看新对象是怎么产生的
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/4.png" alt="图片描述"></p>
<p>通过日志可以看到，新对象是在从context中获取ADERegistry时被实例化出来的
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/5.png" alt="图片描述"></p>
<p>跟踪下相关实例化条件代码
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/6.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/7.png" alt="图片描述">
可以看到有两个疑点，1、GRM对象发生改变后，会触发ADERegistry构造新对象。2、AbstractContextFunction中用到了WeakHashMap与WeakReference。
梳理GRM代码，服务端只会有一个，并且一直被update，不会被重新实例化。那么问题可能就在WeakReference这了，翻看api，可以看到这种对象可以在gc时被回收。联想到这个问题重现之前必须要做加载缓存动作，极大可能是由于缓存文件较大，触发了gc，然后把WeakReference对象做了回收。
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/8.png" alt="图片描述"></p>
<p>为了验证想法是否正确。调小内存大小，gc增加时间打印。
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/9.png" alt="图片描述"></p>
<p>重现问题，取到ADERegistry被重新实例化的时间点与gc回收的时间点，可以看到gc时间点在重新实例化之前，恰巧说明了gc把ADERegistry对象当做垃圾回收，交易使用时，再重新创建该对象。并且，在修改JVM参数之后，重现问题的概率大大增加，之前操作十来次才会重现，现在一两个次就能重现。
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/10.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/11.png" alt="图片描述">
但既然这样，重新实例化的ADERegistry与被update之后的ADERegistry应该一致才对。为了查证问题，继续增加日志，把实例化后与更新后ADERegistry中包含的所有ade打印出来，发现更新后是有新的ade值，而新实例化的没有新值。</p>
<p><img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/12.png" alt="图片描述"><img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/13.png" alt="图片描述">
既然这样再继续看一下新实例化的ade数据来源，通过下面代码可以看出，数据来源于GRM中的pathToChildren中保存。至此，基本可以看出是ade部署后，检测到资源发生改变，ADERegistry可以进行更新，但GRM中的pathToChildren中存储的值没有更新，导致后续新实例化的ADERegistry还是旧的数据。</p>
<p><img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/14.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/15.png" alt="图片描述"></p>
<p>跟踪pathToChildren中数据更新位置，查看GRM中文件发生改变后，是否往pathToChildren中更新，从下面代码中可以看到，在update(files)时，确实没有往pathToChildren中放置新的数据，至此找到问题根源。
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/16.png" alt="图片描述">
<img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/17.png" alt="图片描述"></p>
<h3 id="_3、问题解决" tabindex="-1"><a class="header-anchor" href="#_3、问题解决"><span>3、问题解决</span></a></h3>
<p>在GRM文件更新时，调用下registerPath方法，更新下pathToChildren，放到测试环境，测试可用，问题没有重现。发往市场进行测试，查看效果。</p>
<p><img src="@source/AB5/images/平台/AB4/运行时/记一次数据字典部署后不生效问题排查过程/18.png" alt="图片描述">
至此，虽说问题已经解决，但ADERegistry放入WeakHashMap中进行缓存，这种方式真的正确么。ADERegistry在服务运行的整个周期内都需要，而WeakHashMap会跟着gc可能被多次回收，那么ADERegistry这么重的一个对象就伴随着不断销毁，重建的过程。</p>
<h3 id="_4、思考延伸" tabindex="-1"><a class="header-anchor" href="#_4、思考延伸"><span>4、思考延伸</span></a></h3>
<p>测试时为什么把jvm内存调小</p>
</div></template>


