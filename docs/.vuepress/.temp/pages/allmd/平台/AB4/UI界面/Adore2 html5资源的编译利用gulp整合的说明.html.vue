<template><div><h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1：问题描述</span></a></h3>
<p>之前的adore.scss结构可视作:
adore.scss-[
@import basicStyle(基础样板,所有市场公用)
@import cdnsStyle(成都农商样板,不引用基础样板中的某些样式)
@import gdrcuStyle(广东农信样板,引用所基础样板,成都农商部分样式,自身市场添加的组件样式)</p>
<p>执行gulp默认命令编译css时,无法根据市场进行分流,且存在Not import的现象,可见已无法通过单一的adore.scss文件进行样式维护.
<strong>需求简述:</strong>
(1) 以单一文件的形式记录市场的样式引用选择.
(2) 提供简单有效的市场样式选择性编译方案.</p>
<h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2：问题分析</span></a></h3>
<p>不分析.</p>
<h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3: 问题解决</span></a></h3>
<p><strong>(1) 需求1的满足:</strong>
scss文件的拆分,adore.scss根据其他市场有可能不需要引用的样式(need/switchable)拆分成adore-basic.scss和adore-switchable.scss两个文件.
之后的三主要引入的scss文件的结构:
adore.scss-[
@import adore-basic.scss
@import adore-switchable.scss
cdns.scss-[
@import adore-basic.scss(这里没引入可进行替换的样式)
selfStyle...
gdrcu-scss-[
@import adore-basic.scss
@import adore-switchable.scss
selfStyle...
so,每个市场的样式整理成由其自身scss进行维护.
<strong>(2) 需求2的满足:</strong>
通过gulp command分流执行对应的scss编译
<img src="@source/allmd/images/平台/AB4/UI界面/Adore2 html5资源的编译利用gulp整合的说明/1.png" alt="图片描述">
对比原css编译任务,可见新增的css-cdns只是指定了另一目标对象(src中指定)并进行了重命名而已.
<img src="@source/allmd/images/平台/AB4/UI界面/Adore2 html5资源的编译利用gulp整合的说明/2.png" alt="图片描述"></p>
<p>最后将ts和css编译打包成单个命令cdns,cmd执行gulp cdns即可编译成都农商的html5资源.(广东农信同理)</p>
<p><strong>ps:</strong>
大致讲下使用gulp的前提条件:
node.js:javascript运行环境,类似于jvm.gulp,typescript等流行module需要在此运行环境上跑.安装方式,官网下exe安装.安装完成后cmd下npm命令即可使用.
yarn:进行项目所引用的module的维护,需要node.js运行环境.yarn解析的是git/adore/package.json文件(看引入的package就好).安装方式:cmd下执行npm -g install yarn.安装不成功的boy可以google\百度下cnpm.安装完后在对应文件夹下cmd执行yarn install即会根据package.json中引入的package进行安装.
gulp:yarn中的package中有进行相关gulp资源的引用声明,执行yarn时即已在对应文件夹中安装了gulp.当然也可以npm install -g gulp进行全局安装.gulpfile.js的编写和各个module(gulp-typescript和gulp-sass等)的使用见官网和module介绍.</p>
<h3 id="_4-习题" tabindex="-1"><a class="header-anchor" href="#_4-习题"><span>4:习题_</span></a></h3>
<p>gulp脚本是用什么语言写的？</p>
</div></template>


