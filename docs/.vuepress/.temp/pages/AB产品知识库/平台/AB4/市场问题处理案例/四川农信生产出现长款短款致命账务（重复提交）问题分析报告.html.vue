<template><div><h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h3>
<p>2021.5.30日，有柜员反应存款1600元，前端正常交易完成后，后台记了两笔存款1600元的账务，引发柜面短款。</p>
<p>经多方核实，确认现在我们柜面确实存在客户端通讯重复发送了两次，且仅接受第二次的返回信息导致了此问题发生。</p>
<p>同时，我们发现5.28日有一笔取款交易发生了同样的情况，取款金额为：20000.00，第一笔交易成功后客户端未收到服务端响应结果，客户端接收到第二笔交易的结果,但因客户余额不足导致交易失败，引发柜面长款。</p>
<h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h3>
<p>1、总结整个网络部署架构图：</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607141117.jpg" alt="img"></p>
<p>​												    图1、网络部署架构图</p>
<p>2、根据上图的网络架构，依次从后到前拿到现场日志，首先发现abs日志未开启，只有afa日志，分析两次请求的afa日志是否完全一致，结论为两次服务端日志比对完全一致。</p>
<p>3、观察业务网关日志，发现两笔请求间隔19s，无任何其他信息。</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607143903.png" alt="image-20210607143903810"></p>
<p>​														图2、API网关日志截图</p>
<p>4、观察反向代理服务器日志，发现两笔请求之间都存在websocket尝试重新握手重连的情况：</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607143922.png" alt="image-20210607143922648"></p>
<p>​												图3、反向代理服务器日志截图</p>
<p>该日志反映出上下两笔相同的POST请求，中间出现了网络断开的情况，因此导致了websocket进行了重连。</p>
<p>5、观察客户端日志，的确出现了网络断开情况，websocket尝试重连，并在后续重连成功。</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607143946.png" alt="image-20210607143946416"></p>
<p>​															图4、客户端日志截图</p>
<p>6、从上图此时排查客户端日志，发现客户端日志在发起通讯请求日志后，未接收到任何http异常日志记录，仅有websocket异常日志记录，从客户端视角看，只是发了一次请求，过了19s后收到200响应状态码。</p>
<p>**综上问题分析：**我们发现客户端应用层只发起了一次http请求，此时网络出现波动，反向代理服务器记录客户端发起了两笔http请求，中间夹杂着一次websocket重连，ABS虽然无日志，但AFA也是收到两笔请求，因此下一步需要排查客户端与反向代理服务器之前到底因为什么原因导致了问题出现。</p>
<h3 id="场景重现" tabindex="-1"><a class="header-anchor" href="#场景重现"><span>场景重现</span></a></h3>
<p>1、到底在<strong>客户端与反向代理服务器之间</strong>是谁进行了重发，导致了这次问题呢</p>
<p>2、首选怀疑的是nginx的重发机制，可以看到nginx在出现异常时，会重新请求后台服务</p>
<p><a href="https://www.cnblogs.com/yxy-linux/p/8744837.html" target="_blank" rel="noopener noreferrer">nginx 重发机制 - yxy_linux - 博客园 (cnblogs.com)</a></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607151038.png" alt="image-20210607151038235"></p>
<p>根据一开始说明的架构，对ngnix参数进行修改，测试时确实出现了重发，但网关日志中记录了一条，<strong>与本次现象不符</strong></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607151146.jpeg" alt="img"></p>
<p>3、再次怀疑的是axios重发，在github上也见到相关的帖子，有人反馈过使用axios导致重复提交问题，不过由于缺少重现场景，问题关闭</p>
<p><a href="https://github.com/axios/axios/issues/2825" target="_blank" rel="noopener noreferrer">Axios send the same request twice and ignore the first response, only receives the second response. · Issue #2825 · axios/axios · GitHub</a></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607151357.png" alt="image-20210607150558614"></p>
<p>查看axios源码发现，axios底层发送也是使用XMLHttpRequest实现，从axios过程来看，不存在重发代码处理</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607150737.png" alt="image-20210607150737505"></p>
<p>4、随着上面nginx与axios机制排除后，把目光转向了Http协议，网上搜索发现http对重发有处理，可以看到网页说明跟这次现象很像，都是中途出现了<strong>断网</strong></p>
<p><a href="https://segmentfault.com/a/1190000005894812" target="_blank" rel="noopener noreferrer">HTTP请求重发 - SegmentFault 思否</a></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607150433.png" alt="image-20210607150433402"></p>
<p>根据上述场景，对问题复现。</p>
<p><strong>断掉客户端网络</strong>，尝试重现。本地两台PC机，一台模拟客户端，一台模拟服务端，两台PC机通过路由器相连，客户端使用axios直接发post请求，服务端接收请求会睡眠几秒模拟处理业务流程再返回，使用wireshark抓包观察客户端服务端发包情况，尝试问题复现。</p>
<p>客户端点击按钮发送post请求，立即拔开网线，等待几秒后把网线插回，客户端立刻收到了Disconnect异常，生产环境未出现此类异常，因此此<strong>场景不正确</strong>。</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607144152.jpg" alt="img"></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607144851.png" alt=""></p>
<p>​														图5、浏览器测试截图</p>
<p><strong>断掉服务端网络</strong>，尝试重现。客户端点击按钮发送post请求，服务端收到请求后立即拔网线，等待几秒后把网线插回，观察客户端Network情况及抓包数据：</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607144942.jpg" alt="img"></p>
<p>客户端Network显示发送了两次请求，一次为OPTION请求，页面显示为Preflight请求，一次为正常POST请求。几毫秒后Preflight的OPTION请求返回，POST请求一直处于pending状态。（图6）</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145004.png" alt="image-20210607145004468"></p>
<p>​														图6、浏览器测试截图</p>
<p>之后观察wireshark日志，发现在拔开服务端网线，等待一段时间，再插回网线的一小段时间后，客户端会再次发起一次请求，且此时客户端无感知，Network一直显示pending状态，之后服务端处理完第二次请求后返回给客户端，客户端接收到服务端正常响应报文，状态码200。该场景与生产完全一致，复现完成，<strong>100%可以复现</strong>。（图7、8）</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145133.png" alt="image-20210607145133194"></p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607152349.png" alt="image-20210604142557725"></p>
<p>​															图7、Wireshark测试截图</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145232.png" alt="image-20210607145232776"></p>
<p>​														图8、浏览器测试截图</p>
<h3 id="问题结论" tabindex="-1"><a class="header-anchor" href="#问题结论"><span>问题结论：</span></a></h3>
<p>1、综上排查分析，是客户端浏览器发起了HTTP1.1协议的请求，在服务端的网络出现异常断开的情况下，给浏览器发送了一个RESET指令，浏览器自发地发起了第二笔请求，且对应用层无感知。下一步就需要思考为什么浏览器会自发地发起了第二笔请求，且对应用层无感知，导致应用层视角看是发起了一笔请求，接收到了第二笔的响应结果。</p>
<p>2、首先，平台使用的76版本的Chromium内核浏览器默认现在都使用了HTTP1.1协议，其中的连接方式为：Connection:Keep-Alive,此种连接方式可以改善这种状态，即在一次TCP连接中只进行一次握手阶段（如图7wireshark所示），后续可以持续发送多份数据而不会断开连接。通过使用keep-alive机制，可以减少tcp连接建立次数，也意味着可以减少TIME_WAIT状态连接，以此提高性能和提高httpd服务器的吞吐率(更少的tcp连接意味着更少的系统内核调用,socket的accept()和close()调用)。那么，是否可以通过关闭KeepAlive解决该问题？</p>
<p>3、Connection:Keep-Alive属于浏览器不允许修改协议头（https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name），那么除了Keep-Alive以外，还有哪些情况会导致重复链接呢？通过观察wireshark和浏览器的Network，发现正常的POST请求前会发送一次OPTIONS请求，该请求的目的是：浏览器会首先使用 OPTIONS 方法发起一个预请求，判断接口是否能够正常通讯，如果不能就不会发送真正的请求过来，如果测试通讯正常，则开始真正的请求。因此，会不会是OPTIONS请求产生了一些影响？</p>
<p>4、从这一角度出发，我们先思考和查证了一下，什么Content-Type类型会导致发送OPTIONS请求。通过写一个简单的XmlHttpRequest发送POST请求给服务端，wireshark抓包发现，简单的XmlHttpRequest在服务端网络断开的情况下，重连后也不会发送第二笔请求，只有axios才会发送第二笔，那么需要对两种情况的抓包分析报文头进行比对。</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145334.png" alt="image-20210607145334642"></p>
<p>​																			图9、Wireshark测试截图</p>
<p>5、通过比对两种请求的发包情况（图9），XmlHttpRequest发送的content-type为：text/plain，而axios发送的content-type为：application/json。那么下一步，我们手动将axios默认的application/json的content-type改成text/plain，发现再次断开服务端网络重连后，浏览器不会再次自动发送第二笔请求了（图10、图11）。</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145444.png" alt="image-20210607145444390"></p>
<p>​																		图10、Wireshark测试截图</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145509.png" alt="image-20210607145509716"></p>
<p>​																		图11、浏览器测试截图</p>
<p>6因此，导致此次反向代理服务器之后整个链路收到两笔请求的最根本原因，就是<strong>content-type:application/json内容类型，浏览器判定会在服务端网络恢复后自动重发请求，且对应用层无感知。</strong></p>
<h3 id="解决思路" tabindex="-1"><a class="header-anchor" href="#解决思路"><span>解决思路：</span></a></h3>
<p>那么content-type到底有哪些种类？是否有一些定义和归类？通过查找发现：HTTP请求分为简单请求与复杂请求，简单请求不会发送OPTIONS预请求，简单请求需要满足以下条件：</p>
<p><img src="https://jihulab.com/413343176/image/raw/master/lisijia/20210607145721.png" alt="image-20210604164331872"></p>
<p>所以，简单请求的content-type一般为：text/plain，multipart/form-data，application/x-www-form-urlencoded。</p>
<p>经过我们多次使用各种content-type类型与不同种类浏览器（chrome与firefox）验证，总结了几种情况如下：</p>
<table>
<thead>
<tr>
<th>Content-type</th>
<th>chrome是否会默认重发第二次</th>
<th>firefox是否会默认重发第二次</th>
</tr>
</thead>
<tbody>
<tr>
<td>application/json</td>
<td>会</td>
<td>会</td>
</tr>
<tr>
<td>text/plain</td>
<td>否</td>
<td>会</td>
</tr>
<tr>
<td>application/x-www-form-urlencoded。</td>
<td>否</td>
<td>否</td>
</tr>
<tr>
<td>multipart/form-data</td>
<td>未测</td>
<td>未测</td>
</tr>
</tbody>
</table>
<p>最终得出结论，客户端发送http请求，最合适应该为application/x-www-form-urlencoded。</p>
<h3 id="最终建议解决问题方式" tabindex="-1"><a class="header-anchor" href="#最终建议解决问题方式"><span>最终建议解决问题方式：</span></a></h3>
<p>1、将客户端axios的content-type，手动改为application/x-www-form-urlencoded，由于该content-type为form-data，因此需要使用qs对body进行序列化改造。</p>
<p>2、服务端abs应将日志开启。此次查找问题服务端abs日志未开启，带来较大的排查难度。</p>
<p>3、服务端报文防重开关应打开。此次发现服务端报文防重未开启，会带来较大生产隐患。</p>
<h3 id="遗留问题" tabindex="-1"><a class="header-anchor" href="#遗留问题"><span>遗留问题</span></a></h3>
<p>底层是什么原因，导致浏览器重发，具体哪些会重发，哪些不会？</p>
<h3 id="参考材料" tabindex="-1"><a class="header-anchor" href="#参考材料"><span>参考材料：</span></a></h3>
<p>https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.17
https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Headers/Connection
https://dev.to/p0oker/why-is-my-browser-sending-an-options-http-request-instead-of-post-5621
https://dev.to/effingkay/cors-preflighted-requests--options-method-3024
https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/OPTIONS
https://segmentfault.com/a/1190000005894812
https://blog.csdn.net/edward30/article/details/8661105</p>
</div></template>


