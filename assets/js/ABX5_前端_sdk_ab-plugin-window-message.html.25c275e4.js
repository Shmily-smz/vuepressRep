"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[2677],{51070:(e,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>d});var n=a(20641);const t={},l=(0,a(66262).A)(t,[["render",function(e,s){const a=(0,n.g2)("font");return(0,n.uX)(),(0,n.CE)("div",null,[s[10]||(s[10]=(0,n.Fv)('<h1 id="ab-plugin-window-message-窗口定时消息" tabindex="-1"><a class="header-anchor" href="#ab-plugin-window-message-窗口定时消息"><span>ab-plugin-window-message 窗口定时消息</span></a></h1><h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> WindowMessenger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@agree/ab-plugin-window-message&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2><h3 id="_2-1-sendwindowmessagedelay-定时发送窗口消息" tabindex="-1"><a class="header-anchor" href="#_2-1-sendwindowmessagedelay-定时发送窗口消息"><span>2.1 sendWindowMessageDelay -- 定时发送窗口消息</span></a></h3>',5)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[0]||(s[0]=[(0,n.eW)("支持移动渠道")]))),_:1})]),s[11]||(s[11]=(0,n.Fv)('<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">let</span> timeout <span class="token operator">=</span> <span class="token number">1000</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">let</span> jtname <span class="token operator">=</span> <span class="token string">&quot;mySDK&quot;</span><span class="token punctuation">;</span></span>\n<span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">sendWindowMessageDelay</span><span class="token punctuation">(</span>timeout<span class="token punctuation">,</span> jtname<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>参数列表:</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>必填参数</th><th>说明</th></tr></thead><tbody><tr><td>timeout</td><td>number</td><td>√</td><td>定时时间,单位毫秒</td></tr><tr><td>jtname</td><td>string</td><td>√</td><td>消息体</td></tr></tbody></table><ul><li>返回值:</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>result</td><td>string</td><td>加入定时队列是否成功</td></tr></tbody></table>',5)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[1]||(s[1]=[(0,n.eW)("对应移动原SDK: AgreeSDK.windowmessage.sendWindowMessageDelay()")]))),_:1})]),s[12]||(s[12]=(0,n.Lk)("hr",null,null,-1)),s[13]||(s[13]=(0,n.Lk)("h3",{id:"_2-2-pausewindowmessagedelay-暂停定时",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#_2-2-pausewindowmessagedelay-暂停定时"},[(0,n.Lk)("span",null,"2.2 pauseWindowMessageDelay -- 暂停定时")])],-1)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[2]||(s[2]=[(0,n.eW)("支持移动渠道")]))),_:1})]),s[14]||(s[14]=(0,n.Fv)('<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">pauseWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>返回值:</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>result</td><td>string</td><td>是否暂停成功</td></tr></tbody></table>',3)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[3]||(s[3]=[(0,n.eW)("对应移动原SDK: AgreeSDK.windowmessage.pauseWindowMessageDelay()")]))),_:1})]),s[15]||(s[15]=(0,n.Lk)("hr",null,null,-1)),s[16]||(s[16]=(0,n.Lk)("h3",{id:"_2-3-startwindowmessagedelay-暂停后重新开始定时",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#_2-3-startwindowmessagedelay-暂停后重新开始定时"},[(0,n.Lk)("span",null,"2.3 startWindowMessageDelay -- 暂停后重新开始定时")])],-1)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[4]||(s[4]=[(0,n.eW)("支持移动渠道")]))),_:1})]),s[17]||(s[17]=(0,n.Fv)('<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">startWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>返回值:</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>result</td><td>string</td><td>是否重新计时成功</td></tr></tbody></table>',3)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[5]||(s[5]=[(0,n.eW)("对应移动原SDK: AgreeSDK.windowmessage.startWindowMessageDelay()")]))),_:1})]),s[18]||(s[18]=(0,n.Lk)("hr",null,null,-1)),s[19]||(s[19]=(0,n.Lk)("h3",{id:"_2-4-cancelwindowmessagedelay-取消定时",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#_2-4-cancelwindowmessagedelay-取消定时"},[(0,n.Lk)("span",null,"2.4 cancelWindowMessageDelay -- 取消定时")])],-1)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[6]||(s[6]=[(0,n.eW)("支持移动渠道")]))),_:1})]),s[20]||(s[20]=(0,n.Fv)('<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">cancelWindowMessageDelay</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>返回值:</li></ul><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>result</td><td>string</td><td>取消定时是否成功</td></tr></tbody></table>',3)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[7]||(s[7]=[(0,n.eW)("对应移动原SDK: AgreeSDK.windowmessage.cancelWindowMessageDelay()")]))),_:1})]),s[21]||(s[21]=(0,n.Lk)("hr",null,null,-1)),s[22]||(s[22]=(0,n.Lk)("h3",{id:"_2-5-getgeofenceinfo-获取地理位置",tabindex:"-1"},[(0,n.Lk)("a",{class:"header-anchor",href:"#_2-5-getgeofenceinfo-获取地理位置"},[(0,n.Lk)("span",null,"2.5 getGeoFenceInfo -- 获取地理位置")])],-1)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[8]||(s[8]=[(0,n.eW)("支持移动渠道")]))),_:1})]),s[23]||(s[23]=(0,n.Fv)('<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">    <span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> WindowMessenger<span class="token punctuation">.</span><span class="token function">getGeoFenceInfo</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>返回值: <code>Object</code></li></ul><table><thead><tr><th>参数</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>result.longitude</td><td>number</td><td>经度</td></tr><tr><td>result.latitude</td><td>number</td><td>纬度</td></tr><tr><td>result.isGeoFenceMatch</td><td>boolean</td><td>是否匹配地理围栏</td></tr></tbody></table>',3)),(0,n.Lk)("blockquote",null,[(0,n.bF)(a,{color:"green",style:{"font-weight":"bold"}},{default:(0,n.k6)((()=>s[9]||(s[9]=[(0,n.eW)("对应移动原SDK: AgreeSDK.windowmessage.getGeoFenceInfo()")]))),_:1})]),s[24]||(s[24]=(0,n.Lk)("hr",null,null,-1))])}]]),d=JSON.parse('{"path":"/ABX5/%E5%89%8D%E7%AB%AF/sdk/ab-plugin-window-message.html","title":"ab-plugin-window-message 窗口定时消息","lang":"en-US","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"1. 引入","slug":"_1-引入","link":"#_1-引入","children":[]},{"level":2,"title":"2. 使用","slug":"_2-使用","link":"#_2-使用","children":[{"level":3,"title":"2.1 sendWindowMessageDelay -- 定时发送窗口消息","slug":"_2-1-sendwindowmessagedelay-定时发送窗口消息","link":"#_2-1-sendwindowmessagedelay-定时发送窗口消息","children":[]},{"level":3,"title":"2.2 pauseWindowMessageDelay -- 暂停定时","slug":"_2-2-pausewindowmessagedelay-暂停定时","link":"#_2-2-pausewindowmessagedelay-暂停定时","children":[]},{"level":3,"title":"2.3 startWindowMessageDelay -- 暂停后重新开始定时","slug":"_2-3-startwindowmessagedelay-暂停后重新开始定时","link":"#_2-3-startwindowmessagedelay-暂停后重新开始定时","children":[]},{"level":3,"title":"2.4 cancelWindowMessageDelay -- 取消定时","slug":"_2-4-cancelwindowmessagedelay-取消定时","link":"#_2-4-cancelwindowmessagedelay-取消定时","children":[]},{"level":3,"title":"2.5 getGeoFenceInfo -- 获取地理位置","slug":"_2-5-getgeofenceinfo-获取地理位置","link":"#_2-5-getgeofenceinfo-获取地理位置","children":[]}]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"ABX5/前端/sdk/ab-plugin-window-message.md"}')}}]);