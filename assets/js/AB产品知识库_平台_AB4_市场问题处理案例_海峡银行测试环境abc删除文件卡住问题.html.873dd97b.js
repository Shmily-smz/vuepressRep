"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[4115],{55852:(e,a,s)=>{s.r(a),s.d(a,{comp:()=>c,data:()=>E});var n=s(20641);const t=s.p+"assets/img/1.919bdbe8.png",i=s.p+"assets/img/2.6f40faf0.png",r=s.p+"assets/img/3.3bdfba3c.png",l={},c=(0,s(66262).A)(l,[["render",function(e,a){return(0,n.uX)(),(0,n.CE)("div",null,a[0]||(a[0]=[(0,n.Fv)('<h3 id="问题现象" tabindex="-1"><a class="header-anchor" href="#问题现象"><span>问题现象</span></a></h3><p><strong>海峡银行测试环境abc卡死问题，经确认现象为</strong>： 云桌面有四台电脑只要更新插件就会关不掉，插件更新能成功只是卡到重启这一步，只有重启电脑才能关掉abc，uat的物理机没有出现这种情况</p><h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h3><p>抓取abc卡住时的线程堆栈，可以看出两个卡住的客户端都卡在<code>WinNTFileSystem.delete0()</code>方法 <img src="'+t+'" alt="enter image description here"><img src="'+i+'" alt="enter image description here"> 查看jdk源码，发现这是个native方法，而且此方法在java中使用频率非常高。猜测很可能是系统文件系统出现了问题 <img src="'+r+'" alt="enter image description here"></p><h3 id="问题解决" tabindex="-1"><a class="header-anchor" href="#问题解决"><span>问题解决</span></a></h3><p>针对该问题与行里进行了沟通，发现这几台机器上存在杀毒软件，停用后恢复正常</p><h3 id="问题延伸" tabindex="-1"><a class="header-anchor" href="#问题延伸"><span>问题延伸</span></a></h3><p>abc所在机器上存在安全管控软件时，一定要做兼容性测试，尽量把abc下文件设置成白名单，否则可能会导致<strong>文件操作</strong>问题，<strong>abc启动缓慢</strong>问题</p>',8)]))}]]),E=JSON.parse('{"path":"/AB%E4%BA%A7%E5%93%81%E7%9F%A5%E8%AF%86%E5%BA%93/%E5%B9%B3%E5%8F%B0/AB4/%E5%B8%82%E5%9C%BA%E9%97%AE%E9%A2%98%E5%A4%84%E7%90%86%E6%A1%88%E4%BE%8B/%E6%B5%B7%E5%B3%A1%E9%93%B6%E8%A1%8C%E6%B5%8B%E8%AF%95%E7%8E%AF%E5%A2%83abc%E5%88%A0%E9%99%A4%E6%96%87%E4%BB%B6%E5%8D%A1%E4%BD%8F%E9%97%AE%E9%A2%98.html","title":"","lang":"en-US","frontmatter":{},"headers":[{"level":3,"title":"问题现象","slug":"问题现象","link":"#问题现象","children":[]},{"level":3,"title":"问题分析","slug":"问题分析","link":"#问题分析","children":[]},{"level":3,"title":"问题解决","slug":"问题解决","link":"#问题解决","children":[]},{"level":3,"title":"问题延伸","slug":"问题延伸","link":"#问题延伸","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"AB产品知识库/平台/AB4/市场问题处理案例/海峡银行测试环境abc删除文件卡住问题.md"}')}}]);