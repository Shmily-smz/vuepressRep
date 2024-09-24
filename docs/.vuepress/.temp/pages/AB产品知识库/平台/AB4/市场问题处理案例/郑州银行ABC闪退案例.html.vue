<template><div><h3 id="_1、问题描述" tabindex="-1"><a class="header-anchor" href="#_1、问题描述"><span>1、问题描述：</span></a></h3>
<p>郑州市场，柜员在在录取指纹成功后，指纹窗口关闭时ABC突然闪退，偶发，只有个别柜员闪退，频率1~4次/天，ABC闪退时没有windows窗口提示，Windows无系统和应用事件，任务管理器显示adore.exe、jcef_helper.exe进程都存在。</p>
<h3 id="_2、问题分析" tabindex="-1"><a class="header-anchor" href="#_2、问题分析"><span>2、问题分析：</span></a></h3>
<p>通过结合郑州银行上线出现过的闪退和查询相关资料，分析柜面闪退可能为以下原因：
（1）内存问题：
内存问题闪退，常见有内存不足，其有多种表现形式，如弹出adore.exe已停止工作、蓝屏、内存不能读取、exe崩溃此类提示。是否也存在系统直接杀掉了adore.exe没有弹框提示的形式，不能完全确定。但内存不足问题，之前已通过打开虚拟内存解决，内存不足导致可能性较小，但不能完全排除。
（2）兼容性和数据执行保护（DEP）：
兼容性是win7出生时即带的问题“大多数早期版本的 Windows 创建的程序可在此版本的 Windows 中运行，但某些旧版程序可能无法正常运行或根本无法运行”（from 微软官网），柜面系统调用了多方的dll和exe，中间编译的时候是否都考虑到了兼容性，不确定，因此不能排除兼容性问题；
操作系统的内存管理是通过页面（page）存储方式来实现的，数据执行保护（DEP）将系统或应用程序的数据页面，标注上NX（not execution)位，NX位置1的情况下这个页面的内容是不能被执行的，否则会发生异常。数据执行保护通过监控应用使用内存来针对溢出攻击的本源，完善了内存管理机制，但或造成一些软件的不正常运行。如内嵌验印dzyy.exe停止工作，事件类型为BEX，关闭数据执行保护便可以解决。因只有个别柜员调用指纹认证的dll时闪退，不能排除数据执行保护问题。
（3）指纹dll和柜面应用可能存在未发现Bug：
（1）指纹dll可能存在Bug：如关闭弹框时关闭了柜面的画面，是否为指纹关闭时，发送消息，误将adore.exe窗口关闭；对此需利用spy++抓取adore.exe接收到的窗口信息。
（2）柜面adore.exe存在Bug：目前调用调用外设dll，是adore发报文，请求ads.exe,ads.exe 去调用外设dll，然后收到ads.exe返回报文，之后处理数据，返回的报文数据处理时导致adore.exe的崩溃，可能性很小，当然也需要验证排查下。
3、问题解决
（1）通过利用cmd.exe、jconsole.exe、Process Explorer 查看和检测闪退时的进程和线程信息
闪退发生时，利用管理员打开cmd，执行jstack、jmap命令抓取堆栈信息，发现adore.exe线程拒绝访问；jconsole.exe 断开连接，且断开前内存和线程均无异常（图中时间闪退时刻11:49分）；Process Explorer能查看ABC的运行进程，但无法导出dump信息，同时尝试导出时，adore.exe消亡。
但从Jconsole检测的内存和线程信息看出，基本可以排除内存不足导致柜面闪退的推断。
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/1.png" alt="图片描述">
Jconsole检测内存信息
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/2.png" alt="图片描述">
Jconsole检测线程信息
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/3.png" alt="图片描述">
Process Explorer检测ABC信息
（2）进行了spy++的信息抓取
闪退时，对ABC主窗口利用spy++抓取信息，筛选完之后有以下指令：
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/4.png" alt="图片描述">
Spy++ 监控adore.exe主窗口接收到信息</p>
<p>WM_MOUSEWHEEL    ——鼠标滑轮滚动消息
——自绘窗口边框和标题栏消息
——当窗口背景必须被擦除时发送消息
WM_IME_SETCONTEXT ——文本框激活后输入法上下文激活的消息</p>
<p>WM_IME_NOTIFY       ——输入法发送通知消息
WM_SETFOCUS         ——Windows窗口切换时设置焦点消息
WM_KILLFOCUS        ——Windows窗口切换时失去焦点消息</p>
<p><strong>可以发现并没有关闭ABC主界面窗口的消息，排除指纹窗口关闭时，误关闭柜面</strong>  <strong>窗口</strong>  <strong>的可能。</strong>
（3）进一步综合分析ABC闪退日志
由于之前没想到是JVM的问题，当打开jvm.log时，发现了问题的根源。
① Jvm.log 日志显示：
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/5.png" alt="图片描述">
文件头中信息，“ ”意味着Java应用Crash的时候，正在运行JVM自己的代码，而不是外部的Java代码或其他类库代码。这种情况很可能是JVM的Bug，但也可能是外部程序不合理调用导致JVM崩溃，看到这里我们知道我报错时正在运行JVM自己的代码，而不是外部的Java代码或其他类库代码，问题不存在AB平台上面。
② 另外一个有用的JVM崩溃信息就是：
<strong>Problematic frame: C [PicFace.dll+0xdb9b]</strong>
它说明Crash的时候，JVM正在从哪个库文件执行代码。除了“C”以外，还有可能是“V”、“j”、“v”、“J”。具体的表示意思如下：
FrameType Description：<br>
C: Native C frame<br>
j: Interpreted Java frame
V: VMframe<br>
v: VMgenerated stub frame
J: Other frame types, including compiled Java frames<br>
（*<em><strong><strong><strong><strong>看到这里我们知道我报错时是C: Native C frame这种情况</strong></strong></strong></strong></em>）
“Problematic frame: C  [PicFace.dll+0xdb9b]”的信息，意味着这是正在运行Java程序过程中，输入法调用了PicFace.dll (从日志上可以看出，这里是搜狗输入法的dll)。
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/6.png" alt="图片描述">
同时，ABC闪退时SPY++监听到输入法消息也恰好验证了闪退时调用了搜狗输入法：
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/7.png" alt="图片描述">
③ 进一步统计了，异常日志中JVM崩溃时间和闪退时间，恰好吻合
如20180728 11:49:53
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/8.png" alt="图片描述">
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/9.png" alt="图片描述">
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/10.png" alt="图片描述"></p>
<p>到此，可以完全确定，柜员从指纹录入结束，切换至柜面窗口时，Windows通过自身输入法管理器（IMM）调用输入法编辑器（WM_IME）时，调用了搜狗PicFace.dll（搜狗拼音输入法 图片表情）时导致异常访问冲突），此报错意味着这是在JVM内部在调用自己的代码的过程中，致使JVM Crash，柜面进程消亡，jconsole、Process Explorer提取不到adore.exe进程堆栈信息也恰好说明JVM出现问题，无法访问。</p>
<p>④ 其他案例
Ⅰ、同业案例：
广发银行，使用紫光拼音、搜狗输入法录入数据时，个别柜员在使用时出现前端系统突然关闭问题，经分析后发现是输入法导致jvm崩溃导致，更换系统自带五笔输入法后解决。</p>
<p>广州工行，使用搜狗拼音录入数据时，若干分行个别柜员在使用时出现前端系统突然关闭问题，经分析后发现是输入法导致jvm崩溃导致，更换百度拼音输入法后解决。
Ⅱ、非同业案例
搜狗输入法出现过导致jvm崩溃案例，无官方回复。
链接：http://pinyin.sogou.com/bbs/forum.php?mod=viewthread&amp;tid=137597
http://ie.sogou.com/bbs/forum.php?mod=viewthread&amp;tid=140603</p>
<p>相关截图：
<img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/11.png" alt="图片描述"><img src="@source/AB产品知识库/images/平台/AB4/市场问题处理案例/郑州银行ABC闪退案例/12.png" alt="图片描述"></p>
<p>Ⅲ、相关问题oracle处理方式
在jdk1.4时期，有人曾向oracle提出了中文输入法导致jvm崩溃问题，oracle给出了如下答复
The same crash can be reproduced with the sample (IMEApps) in the Microsoft Visual Studio 6.0.  The sample crashes with the Intelligent ABC IME when the user types 'a' for 24 times.
So this is not a JRE problem, but a pr·oblem in the Intelligent ABC IME
大意为：相同的输入法冲突也会造成其他软件崩溃（举了个例子，在VS6里面用智能ABC输入法连敲24个‘a’），因此造成JVM崩溃的是智能ABC输入法的问题，并非JRE的问题。
链接：http://bugs.java.com/bugdatabase/view_bug.do?bug_id=4919138
（4）解决方案：
① 更改输入法解决，查看输入法版本为7.7.0.6361 当前最新版本为9.0，可尝试更改输入法版本观察或直接使用百度拼音输入法
② 关闭数据执行保护解决，从关闭数据执行保护的结果来看，对处理输入法导致JVM崩溃的问题目前来看是有效可行的，目前在进一步观察中。
4、思考延伸
（1）JVM报出EXCEPTION_ACCESS_VIOLATION（异常访问冲突）时，Jconsole是否能够继续监视应用线程信息？</p>
</div></template>


