<template><div><h1 id="市场源码提供方式" tabindex="-1"><a class="header-anchor" href="#市场源码提供方式"><span><strong>市场源码提供方式</strong></span></a></h1>
<h2 id="_1、背景" tabindex="-1"><a class="header-anchor" href="#_1、背景"><span>1、<strong>背景</strong></span></a></h2>
<p>柜面系统上线后，行方一般会按照合同申请源码，申请流程完成后，研究院应打包好对应源码，传到内部网盘，由公司项目管理人员制作成 U 盘或者光盘，邮寄给行方。</p>
<h2 id="_2、原则" tabindex="-1"><a class="header-anchor" href="#_2、原则"><span>2、<strong>原则</strong></span></a></h2>
<p>提供源码应具备以下原则
<strong>1、提供的源码为平铺方式</strong>
<strong>2、同时提供源码需要的工具</strong>
<strong>3、源码可以编译导出 jar，但不能运行产品（不具备 launch 与 product 文件）</strong>
<strong>4、源码命名一定要规范，如《吉林农信 AB4.x 平台源码.zip》</strong>
<strong>5、源码处理完成后，一定要再次检查，保证邮寄给行方的内容准确、正式</strong>
<strong>6、源码提供过程中要全程保密，传输使用内网网盘，不能经过区域交付或他人之手</strong></p>
<h2 id="_3、制作过程" tabindex="-1"><a class="header-anchor" href="#_3、制作过程"><span>3、<strong>制作过程</strong></span></a></h2>
<h2 id="" tabindex="-1"><a class="header-anchor" href="#"><span><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104153027.png" alt="img"></span></a></h2>
<p>1、运行 Export.java
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104152904.jpg" alt="img">
源码文件原目录一般包含 AB_Client、AB_Public、AB_Server、Dep、adore、对应市场目录(此处以吉林农信为例))
兼容环境下 包含 3.0 源码需要手动增加 3.0 目录
adore2 和 其他文件夹下用到的少量 jar 手动导出即可
以上文件夹 可能包含生产上没有用到的 jar 需要删除
2、删除不必要的文件(运行 export.java 后会自动删除)
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104152910.jpg" alt="img">cn.com.agree.ab.a4.client、cn.com.agree.ab.a4.client.gui.adore、cn.com.agree.ab.a4.server 等文件夹下的 .product 文件删除 (兼容环境 3.0 的 .product 文件也需要删除)
源码 git 信息删除
Doc 文档删除
导出后自动压缩，比较检查后上传源码</p>
<h2 id="_4、检查工作" tabindex="-1"><a class="header-anchor" href="#_4、检查工作"><span><strong>4、检查工作</strong></span></a></h2>
<p>至少包含以下检查
1、检查上步制作的源码文件夹中都有源码存在，并且格式正确
2、检查插件列表与生产上插件的数量与名称保持一致</p>
<h2 id="_4、上传到网盘并通知领导" tabindex="-1"><a class="header-anchor" href="#_4、上传到网盘并通知领导"><span>4、<strong>上传到网盘并通知领导</strong></span></a></h2>
<p>源码可以直接上传到以下链接，<strong>上传完成后通知领导</strong>
http://192.9.200.29:8001/u/d/9869f6252cf84b51b289/
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104152914.jpg" alt="img">
除源码外的其他工具与文件《AB4.x 源码工具_eclipse_jdk_node.zip》已上传在
http://192.9.200.29:8001/f/fd9937e474f5473a98f7/
也可以登录网盘，通过以下位置查看(若无权限，联系各自组长添加)
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104152918.jpg" alt="img">
压缩包中包含以下附件
<img src="https://jihulab.com/413343176/image/raw/master/lisijia/20211104152925.jpg" alt="img"></p>
</div></template>


