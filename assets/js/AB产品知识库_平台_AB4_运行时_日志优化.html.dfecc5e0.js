"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[7787],{92768:(e,s,a)=>{a.r(s),a.d(s,{comp:()=>u,data:()=>o});var i=a(20641);const t=a.p+"assets/img/1.72f1d1b2.png",n=a.p+"assets/img/2.6b2e8e49.png",l=a.p+"assets/img/3.0a9b04f4.png",p=a.p+"assets/img/4.534bd308.png",r=a.p+"assets/img/5.ed8e3ba9.png",g=a.p+"assets/img/6.ceff322d.png",c=a.p+"assets/img/7.d2a1a499.png",m=a.p+"assets/img/8.189bfc72.png",d=a.p+"assets/img/9.edb7036a.png",h=a.p+"assets/img/10.f74c755d.png",_={},u=(0,a(66262).A)(_,[["render",function(e,s){return(0,i.uX)(),(0,i.CE)("div",null,s[0]||(s[0]=[(0,i.Fv)('<h3 id="_1、问题描述" tabindex="-1"><a class="header-anchor" href="#_1、问题描述"><span>1、问题描述</span></a></h3><p>1）流程异常不弹框提示 2）异常日志重复打印多次 3）客户端服务端日志不能互传 4）异常堆栈打印不完整 5）根据报错的异常信息无法确认客户端还是服务端流程报错 6）交易打开与关闭、画面打开与关闭、用户触发事件、热键日志不完整</p><h3 id="_2、问题分析" tabindex="-1"><a class="header-anchor" href="#_2、问题分析"><span>2、问题分析</span></a></h3><p>1）流程异常不弹框提示，原因是错误日志未正常包装处理导致（包括mpt未绑定、出入参异常等）。 2）异常日志重复打印，原因是目前代码未统一处理，存在PITS、LRT及Domain等相关类中都有日志打印，一个异常堆栈打印多次。 3）客户端服务端日志交互，目前客户端invoke到服务端后出现异常，及服务端issue到客户端后出现异常，未将异常相传。 4）异常堆栈打印不完整导致场景为调用嵌套逻辑时由于异常未正常传递导致打印的只是最上层流程堆栈异常，真实异常丢失。 5）根据报错的异常信息无法确认客户端还是服务端流程报错，导致排查问题时首先需要查看日志确认异常报错端，目前根据流程执行端添加错误标识。 6）依次添加交易打开与关闭、画面打开与关闭、用户触发事件及键盘按下相关日志，使日志趋于完整。</p><h3 id="_3、问题解决" tabindex="-1"><a class="header-anchor" href="#_3、问题解决"><span>3、问题解决</span></a></h3><p>1）流程异常未正常弹框提示问题，添加对未包装异常处理 <img src="'+t+'" alt="图片描述"> 2）日志重复打印问题，统一日志打印位置，分画面级日志及交易级日志，删除多余日志打印 <img src="'+n+'" alt="图片描述"> 删除多余日志打印 <img src="'+l+'" alt="图片描述"> 画面级日志打印及报错提示 <img src="'+p+'" alt="图片描述"> 交易级日志打印 3）客户端服务端日志交互 <img src="'+r+'" alt="图片描述"> 客户端执行issue报错信息传回服务端 <img src="'+g+'" alt="图片描述"> 服务端执行invoke报错信息传回客户端 4）异常打印堆栈不完整，需要保存最底层报错异常及使用最底层完整堆栈进行传递 <img src="'+c+'" alt="图片描述"> 5）添加标识客户端服务端异常报错前缀 <img src="'+m+'" alt="图片描述"> 6）添加交易、画面打开关闭、键盘按下相关日志 <img src="'+d+'" alt="图片描述"><img src="'+h+'" alt="图片描述"></p><h3 id="_4、思考延伸" tabindex="-1"><a class="header-anchor" href="#_4、思考延伸"><span>4、思考延伸</span></a></h3><p>客户端与服务端报错日志传递有几种？分别是什么？</p>',8)]))}]]),o=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%B9%B3%E5%8F%B0/AB4/%E8%BF%90%E8%A1%8C%E6%97%B6/%E6%97%A5%E5%BF%97%E4%BC%98%E5%8C%96.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1、问题描述","slug":"_1、问题描述","link":"#_1、问题描述","children":[]},{"level":3,"title":"2、问题分析","slug":"_2、问题分析","link":"#_2、问题分析","children":[]},{"level":3,"title":"3、问题解决","slug":"_3、问题解决","link":"#_3、问题解决","children":[]},{"level":3,"title":"4、思考延伸","slug":"_4、思考延伸","link":"#_4、思考延伸","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/平台/AB4/运行时/日志优化.md"}')}}]);