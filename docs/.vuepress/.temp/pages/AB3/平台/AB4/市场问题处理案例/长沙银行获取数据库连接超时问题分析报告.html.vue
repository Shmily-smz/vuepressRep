<template><div><p>[html]</p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">问题描述</span><span style=""><span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">2020年9月16日收到现场项目组同事反馈综合前端系统在办理业务过程中出现获取数据库连接超时问题，已经严重影响业务办理。<span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">问题分析</span><span style=""><span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">赞同科技北方研发中心研发五部在收到反馈后立即组织人员针对本次问题进行了分析，经过9月16日到9月30日的多次多部门联合排查中确认了重现及优化建议。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">2020年10月9日北方研发中心研发五部谢平到现场配合排查问题，经过分析现场获取的日志信息分析发现在出现问题时数据库连接池已占满。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/1.jpg" width="553.4000244140625" height="482.1300048828125"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">此时分析应用线程快照信息发现应用对于数据库操作的线程都在等待从网络流中读取数据。</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:left;
text-align:left"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/2.jpg" width="552.9299926757812" height="408.4700012207031"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:center;
text-align:center"><span style="">（图-1）</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">进一步分析9月23日10:14-11:05分析抓取的4个线程快照中发现有38个相同ID的线程一直在执行类似的代码，调用栈基本同上图中的从网络流中读取数据，说明这些对于数据库的操作一直没有返回，而通过排查数据库层面并未发现有锁表及SQL执行耗时超长的情况，说明并不是因为锁表或SQL执行耗时长导致的线程等待，因此有可能是由于网络中某个节点未正常返回数据导致。此时一旦有并发的数据库操作，因为数据库连接池配置的最大连接数为40，而当时已经有38个连接一直在等待返回，因此会有大量的客户端因为无法从数据库连接池中获取到连接会报出获取连接超时异常。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/3.jpg" width="552.9299926757812" height="414.7300109863281"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><o:p>&nbsp;</o:p></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">经过分析相关日志发现如下SQL执行时会出现一直等待的情况。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/4.jpg" width="552.9299926757812" height="311.07000732421875"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">此时通过如下SQL，查询数据中SQL执行状态，发现数据库中相关SQL均为INACTIVE状态，说明都已执行完毕并返回。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">select a.username, a.sid, b.SQL_FULLTEXT, a.status from v$session a, v$sqlarea b&nbsp;where a.sql_address = b.address</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/5.jpg" width="552.9299926757812" height="311.07000732421875"  /></span><span style=""><span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">问题总结<span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">根据以上分析得出如下结果：<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
mso-list:l1 level1 lfo1;
margin-left:0.0pt;
text-indent:21.0pt"><!--[if !supportLists]--><span style="">1.<span style="font:7.0pt Times New Roman"></span></span><span style="">应用数据库连接池中的大部份连接在等待读取网络流中的数据，说明有可能为链路中的其他节点未及时返回数据导致线程等待，建议排查链路中的相关节点；<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
mso-list:l1 level1 lfo1;
margin-left:0.0pt;
text-indent:21.0pt"><!--[if !supportLists]--><span style="">2.<span style="font:7.0pt Times New Roman"></span></span><span style="">应用数据库连接池中的连接在读取数据时，如遇不返回的情况会一直等待，应增加超时配置，避免将数据库连接池占满。</span><span style=""><span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">应用优化方案<span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
margin-left:0.0pt;
text-indent:21.0pt"><span style="">针对问题2，本次应用增加超时配置，解决连接一直等待返回问题，具体修改如下图：<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/6.jpg" width="553.2000122070312" height="108.19999694824219"  /></span><span style=""><span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">优化方案验证</span><span style=""><span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">因开发测试环境未能重现问题，为验证优化方案是否生效，本次通过锁表来模拟不返回数据的情况，以验证超时参数的有效性。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">在增加超时参数前，将一张表锁住，通过JDBC连接数据库操作同一张表时，该JDBC操作一直处于执行状态，执行堆栈同 图-1，说明此时连接一直等待返回，也从另一个方面重现了生产的问题。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">在增加超时参数后，同样的操作，后者会在设置的 oracle.jdbc.ReadTimeout 时间之后抛出Socket read timeout异常并释放连接，如下图：</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/7.jpg" width="552.9299926757812" height="248.8000030517578"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">通过上述验证，说明本次优化增加的参数已经生效。<span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">同业案例<span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">某股份制银行2019年4月份也出现类似问题，当时通过分析线程调用堆栈发现出现问题时也是有大量线程在等待从网络流中读取数据。导致连接池被占满的情况。由于该行使用的oracle jdbc版本为ojdbc6，其内部使用的nio进行通讯，而长沙银行oracle jdbc版本较低，内部仍使用bio进行通讯。因此调用线程堆栈略有差异，但都属于从网络流中读取数据。调用线程如下图：</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph"><span style=""><img src="@source/AB3/images/平台/AB4/市场问题处理案例/长沙银行获取数据库连接超时问题分析报告/8.jpg" width="553.7333374023438" height="520.1300048828125"  /></span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">最终在经过应用、网络及DBA的共同排查发现是由于SRX防火墙中开启了SQL_ALG功能导致部分操作不返回的情况，调整网络策略之后应用恢复正常。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">juniper官方对于SQL_ALG功能导致通讯失败的描述如下链接：</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><a href="https://kb.juniper.net/InfoCenter/index?page=content&id=KB30326" target="_blank"><span style="">https://kb.juniper.net/InfoCenter/index?page=content&id=KB30326</span></a><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">大致意思是开启SQL_ALG功能后其中的部分检查策略可能导致TNS报文解析失败，从而出现不返回数据的情况。</span><span style=""><span><o:p></o:p></span></span></p>
<h2 style="text-align:justify;
text-justify:inter-ideograph;
direction:ltr"><span style="">排查建议<span><o:p></o:p></span></span></h2>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
text-indent:21.0pt"><span style="">在该股份制银行排查问题过程中，由于开发测试环境也未能重现，为了排除应用本身的问题在应用服务器上分别进行了以下方式验证，均出现读取数据返回时堵住的情况。<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
mso-list:l0 level1 lfo1;
margin-left:0.0pt;
text-indent:21.0pt"><!--[if !supportLists]--><span style="">1.<span style="font:7.0pt Times New Roman"></span></span><span style="">通过简单的JDBC程序来循环执行某一数据库查询操作（select 1 from dual）；<span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
mso-list:l0 level1 lfo1;
margin-left:0.0pt;
text-indent:21.0pt"><!--[if !supportLists]--><span style="">2.<span style="font:7.0pt Times New Roman"></span></span><span style="">通过脚本循环通过SQLDeveloper执行某一数据查询操作；</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
mso-list:l0 level1 lfo1;
margin-left:0.0pt;
text-indent:21.0pt"><!--[if !supportLists]--><span style="">3.<span style="font:7.0pt Times New Roman"></span></span><span style="">监听应用及数据库两端交互报文看两端数据是否会出现丢包等情况。</span><span style=""><span><o:p></o:p></span></span></p>
<p class="MsoNormal" style="text-align:justify;
text-justify:inter-ideograph;
margin-left:0.0pt;
text-indent:21.0pt"><span style="">建议在不影响正常业务（可选择夜间无业务时间段）的情况下通过上述方式验证排除应用本身问题，由于行内目前工作重心为数据中心迁移，可能暂时不能执行建议3，但如出现SQL_ALG功能关闭后仍有收不到数据库返回问题，可执行此项，进行进一步分析。</span><a name="_GoBack" target="_blank"></a><span style=""><span><o:p></o:p></span></span></p>
[/html]
</div></template>


