"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[8168],{1538:(s,e,a)=>{a.r(e),a.d(e,{comp:()=>A,data:()=>_});var t=a(20641);const n=a.p+"assets/img/1.e63e58b4.png",i=a.p+"assets/img/2.322879ef.png",l=a.p+"assets/img/3.a99da7b2.png",r=a.p+"assets/img/4.21d71fd9.png",p=a.p+"assets/img/5.eeeb7519.png",c=a.p+"assets/img/6.58cae7c9.png",g=a.p+"assets/img/7.5662e699.png",m=a.p+"assets/img/8.881b2171.png",h=a.p+"assets/img/9.449e764b.png",d=a.p+"assets/img/10.deb9a1b3.png",o=a.p+"assets/img/11.4a51e4c5.png",E={},A=(0,a(66262).A)(E,[["render",function(s,e){return(0,t.uX)(),(0,t.CE)("div",null,e[0]||(e[0]=[(0,t.Fv)('<h3 id="_1-问题描述" tabindex="-1"><a class="header-anchor" href="#_1-问题描述"><span>1. 问题描述</span></a></h3><p>目前市场开发交易中，会用到循环门来处理后台数据，但是在处理到一些较大的数据时，因为数量较多，导致循环次数过多，效率降低，处理时间大大增加，同时也存在一些开发时造成的死循环，因为没有错误报出，开发人员无法直观判断是因为死循环还是在等待后台返回，同时也会造成应用程序崩溃等问题，所以为了提高用户体验，保证平台不会被错误交易搞死，强化平台自我保护机制，从平台层增加了流程节点执行次数的控制。</p><h3 id="_2-问题分析" tabindex="-1"><a class="header-anchor" href="#_2-问题分析"><span>2.问题分析</span></a></h3><p><strong>2.1 设计思路</strong> 针对这个问题，我们考虑从平台增加限制，以交易中的一次事件为单位，对节点执行次数增加限制，在超过一定数量时抛出异常，方便交易开发人员定位问题。所以，我们应该在每个节点执行时或执行前，进行判断，若没有超过次数，则加 1，如果执行次数已经超过设置的最大数，则停止交易执行，抛出异常。由交易人员决定简化逻辑还是改用银行技术组件来进行数据处理等。 <strong>2.2 代码实现</strong> 因为要对事件中的所有节点进行计数，而 lfc 中每个节点的执行都会经过 lfc 的运行时中的 createNodeRunnable 方法，通过查看调用关系，决定在执行片段，即 ProcessInstanceThreadSegment.java 类中的 stepNodeIn()方法进行计数和判断（在执行片段里增加判断逻辑，保证了运行时代码的整洁），且增加了警告和禁止运行两个等级，如下图： <img src="'+n+'" alt="图片描述"> 以一次事件为单位的话，就需要考虑到 lfc 中嵌套子 lfc 的情况，所以用来计数的对象需要跨 lfc，且在流程执行时，该对象一直存在。所以，pits 不合适，我们采用 pits 的生成类，ProcessInstanceThread.java 来做这个对象，代码中可以看出，一个 pit 在一个 lr 中仅存在唯一一个，所以在交易中也是唯一存在的。对于子 lfc 中的节点不会重新计数。所以，我们增加节点执行数和获取方法。 <img src="'+i+'" alt="图片描述"><img src="'+l+'" alt="图片描述"> 接下来，需要在事件（任务）构建或执行时，将节点执行次数重置为 0 并开始计数。 客户端开始考虑在 FlowMission.java 等 Mission 任务中的执行时添加这段逻辑，但是这样需要处理的地方不止一处，还需要 FlowEndMission.java 等。所以，我们把这段逻辑加到 BusyPhase 中，因为事件在执行前，是在这封装成 lrt，并加入到队列的。 <img src="'+r+'" alt="图片描述"><img src="'+p+'" alt="图片描述"> 现在没有将服务端和客户端运行的数量进行合并，只是做了单独的计数，所以在服务端需要执行逻辑前，将节点执行次数重置为 0，如下图： <img src="'+c+'" alt="图片描述"><img src="'+g+'" alt="图片描述"><img src="'+m+'" alt="图片描述"></p><h3 id="_3-问题解决" tabindex="-1"><a class="header-anchor" href="#_3-问题解决"><span>3. 问题解决</span></a></h3><p>更新代码后，经过交易测试，在节点执行超过指定次数（默认 10000 次）时，交易抛出异常。 <img src="'+h+'" alt="图片描述"><img src="'+d+'" alt="图片描述"> 并且在执行次数超过我们设置的警告次数时，在日志中也会打印警告日志。 <img src="'+o+'" alt="图片描述"></p><h3 id="_4-习题" tabindex="-1"><a class="header-anchor" href="#_4-习题"><span>4. 习题</span></a></h3><p>为什么记录流程节点执行次数的参数不能声明在 ProcessInstanceThreadSegment.java 中？</p>',8)]))}]]),_=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%B9%B3%E5%8F%B0/AB4/%E8%BF%90%E8%A1%8C%E6%97%B6/AB4.X%E6%8E%A7%E5%88%B6%E6%B5%81%E7%A8%8B%E8%8A%82%E7%82%B9%E6%89%A7%E8%A1%8C%E6%AC%A1%E6%95%B0.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"1. 问题描述","slug":"_1-问题描述","link":"#_1-问题描述","children":[]},{"level":3,"title":"2.问题分析","slug":"_2-问题分析","link":"#_2-问题分析","children":[]},{"level":3,"title":"3. 问题解决","slug":"_3-问题解决","link":"#_3-问题解决","children":[]},{"level":3,"title":"4. 习题","slug":"_4-习题","link":"#_4-习题","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/平台/AB4/运行时/AB4.X控制流程节点执行次数.md"}')}}]);