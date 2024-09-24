<template><div><h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h3>
<p>AB 通过快捷键提交方式提交时会跳过输入框等控件的逻辑事件直接提交，而行里强硬要求按快捷键提交时，校验执行从当前光标到提交按钮中间的所有组件的 onfocus、onblur 及 onchange 等事件。过去对于 ab 3.5 系统，交易开发人员可以在 java 交易资源中可以直接进行控制处理（代码可见附件一），而 4.0 对于这问题的控制则需要提供相关的平台技术组件在热键提交触发的 lfc 进行提交前校验执行从当前光标到提交按钮中间的所有组件的逻辑事件。</p>
<p>附件一：
<img src="@source/AB产品知识库/images/平台/AB4/运行时/快捷键提交事件校验执行/1.png" alt="图片描述"></p>
<h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2.问题分析</span></a></h3>
<p>昆山市场部分交易内有许多框体在初始时会被设置为非必输状态，在后续逻辑中根据业务流程不同而决定是否为必输或非必输，因此快捷键能够直接跳过这类控件。
交易进行时若控件为必输状态那么快捷键提交时会被拦截并将焦点定位到必输的控件上，但是有时候也会出现在焦点逆向移动后能跳过必输控件的情况。
在 3.x 版本的客户端，行方采取的方案是扫描当前画面的所有事件，当提交时还存在未触发的事件时，中断提交行为。而对于新客户端，行方的要求是在快捷提交时，直接触发剩余事件。
针对以上需求，交易开发人员要求平台这边提供以下平台技术组件：
1、GetFocusControlId 组件，用于获取当前组件光标状态
入参 focusType，可以选择是 focusingId 还是 focusedId<br>
focusingId--将要获取焦点的组件（事件执行完成后会跳转到该组件）,focusedId--已经获取焦点的组件
2、GetAllControlId 组件，用于获取当前面板组件，按光标执行顺序(ide 中大纲顺序)返回
入参 current，可以输入 true，false
true--获取当前画面中没被遮挡的组件，只显示 bookcomposite 与 tab 当前选中的页，以及其他所有组件(visiable 为 false 也获取)
false--获取 abf4a 在 ide 中绘制的所有组件。
<img src="@source/AB产品知识库/images/平台/AB4/运行时/快捷键提交事件校验执行/2.png" alt="图片描述"></p>
<p>3、GetControllerEventPath 组件，用于获取组件相关的事件
4、ChangeFocusedID，手动设置 focusedId 的值，需要提供这个组件的原因是昆山定制的定点移动焦点组件（PointFocus）只会设置 focusingId 的值而并不会重新设置一遍 focusedId 的值。
<img src="@source/AB产品知识库/images/平台/AB4/运行时/快捷键提交事件校验执行/3.png" alt="图片描述">
这样会导致定点移动焦点后调用 GetFocusControlId 获取到的是上一个控件，多次调用获取到的依然是第一个控件。
5、GetStatusByControlID，判断控件是否可用可见，由于相关交易部分控件的状态会被交易过程中的执行事件给更改，因此需要这样的一个组件去动态判断。</p>
<h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3. 问题解决</span></a></h3>
<p>交易处理步骤（交易 Demo 见附件二）
1、调用 GetAllControlId，获取没被遮挡的组件
2、从当前光标组件开始，调用 GetControllerEventPath 获取组件 onblur 及 onchange 事件，通过动态变量路径 lfc 方式，执行 onblur 及 onchange 事件。动态调用 lfc 方式如下：
<img src="@source/AB产品知识库/images/平台/AB4/运行时/快捷键提交事件校验执行/4.png" alt="图片描述">
3、调用 GetFocusControlId，获取当前光标状态，若光标被设置停留在当前栏位，则 onblur 或 onchange 事件执行失败，中断执行，若光标没被设置，则继续执行
4、获取下个组件的状态，如果可见，可用，则可以执行 onfocus 事件
5、调用 GetControllerEventPath 获取组件 onfocus 事件，通过动态变量路径 lfc 方式，执行 onfocus 事件
6、若 onfous 里面调用定向移动焦点，则不执行此事件的 onblur 和 onchange 事件
7、判断必输状态，如果可用，已输，则可以执行 onblur 和 onchange 事件
8、调用 GetControllerEventPath 获取组件 onblur 和 onchange 事件，通过动态变量路径 lfc 方式，执行 onblur 和 onchange 事件。
9、后续事件依次执行
10、所有组件执行完成后，执行提交按钮逻辑，所有逻辑执行完成
附件二：
<img src="@source/AB产品知识库/images/平台/AB4/运行时/快捷键提交事件校验执行/5.png" alt="图片描述"></p>
<p>存在的问题：
1、由于执行过程中，光标没有实际跳转，必输场、adr 等平台自触发的规则不会执行
2、交易编写需要符合统一规则，如事件执行失败，光标停留在当前栏位
3、事件中把光标停留在当前栏位后，终止事件，但此时会跳光标，导致第一个栏位事件执行二次。
4、各项目组对可见组件，可执行事件组件定义不一致。</p>
<h3 id="_4-思考延伸" tabindex="-1"><a class="header-anchor" href="#_4-思考延伸"><span>4.思考延伸</span></a></h3>
<p>1、 DomainPanel 中 focusingID 跟 focuedID 所代表的意义有什么区别？
2、 执行控件的 onchange 或 onblur 事件前需要判断当前光标有没有被设置停留在当前栏位，那么 lfc 里怎么进行判断？</p>
</div></template>


