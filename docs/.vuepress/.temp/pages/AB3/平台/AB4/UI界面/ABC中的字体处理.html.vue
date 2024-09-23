<template><div><h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h3>
<ol>
<li>ABC所封装的CEF自带的汉字字体不够美观,需要进行外部字体的引用.</li>
<li>输入域等字体大小需要提供选项让柜员进行选择.</li>
</ol>
<h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2.  问题分析</span></a></h3>
<ol>
<li>外部字体的引入可以使用css的@font-face的方式解决</li>
<li>需要标注出需要统一修改字体大小的h5元素:不考虑使用js去逐个修改,浪费性能且每个widget都需要新增api.以css的方式进行处理,在body上标注上代表对应字体font-size的class,然后利用子孙选择器让对应的h5元素进行font-size修改.</li>
</ol>
<h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3.  问题解决</span></a></h3>
<p><strong>1)  利用@font-face引用外部字体的实现:</strong>
<strong>1.1)css中外部字体的的引用方式说明</strong>
font-family的声明方式说明:
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/1.png" alt="图片描述">
声明好的font-family的使用方式说明:
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/2.png" alt="图片描述">
<strong>1.2)平台功能的实现</strong>
字体资源的管理:
字体资源存放在字体插件中,当引入时根据plugin id的prefix识别其为字体插件,并将对应目录下的字体资源拷贝入interface目录(和embed插件的driver目录下文件的拷贝方式类似),再在index.html中写入对应的css进行@font-face声明.
利用css声明影响范围:
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/3.png" alt="图片描述">
<strong>2)  特定域字体大小全局变更功能的实现:</strong>
<strong>2.1)在这body上添加相关class的api接口实现:</strong>
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/4.png" alt="图片描述">
<strong>2.2)标注需要生效的h5元素:</strong>
利用scss中的@mixin进行选择器的衍生:
输入输出举例说明(aaa为想要影响的h5元素的选择器):aaa =&gt; @mixin = body.fieldFontSize-12px aaa{font-size:12px;}
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/5.png" alt="图片描述">
@mixin的使用举例:
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/6.png" alt="图片描述">
功能为让Table widget中的元素响应全局font-size的变更.
编译出的css:
<img src="@source/AB3/images/平台/AB4/UI界面/ABC中的字体处理/7.png" alt="图片描述"></p>
<h3 id="_4、习题" tabindex="-1"><a class="header-anchor" href="#_4、习题"><span>4、习题</span></a></h3>
<p>利用@font-face引入的外部文件的后缀名是什么:</p>
</div></template>


