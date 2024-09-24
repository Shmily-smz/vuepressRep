"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[2094],{76787:(t,d,e)=>{e.r(d),e.d(d,{comp:()=>s,data:()=>i});var n=e(20641);const a={},s=(0,e(66262).A)(a,[["render",function(t,d){return(0,n.uX)(),(0,n.CE)("div",null,d[0]||(d[0]=[(0,n.Fv)('<h1 id="编译命令" tabindex="-1"><a class="header-anchor" href="#编译命令"><span>编译命令</span></a></h1><table><thead><tr><th>Command</th><th>Usage</th><th>Description</th></tr></thead><tbody><tr><td>build</td><td>build [options]</td><td>生产环境, 输出压缩</td></tr><tr><td>dev</td><td>dev [options]</td><td>开发环境</td></tr><tr><td>clean</td><td>clean [options]</td><td>清除文件, <code>--log</code>: log, <code>--cache</code>: cache, <code>--dist</code>: dist</td></tr></tbody></table><p>说明: 使用 <code>yarn dev</code> 编译是浏览器环境使用的, 编译时会对 html 文件注入开发环境使用的一些 js 脚本.</p><table><thead><tr><th>编译参数</th><th>类型</th><th>描述</th></tr></thead><tbody><tr><td>--compileFile, -C</td><td>string</td><td>编译指定文件: -C BankModule/pages/主框架/App.vue 多个文件使用 “,” 间隔</td></tr><tr><td>--outDir</td><td>string</td><td>指定输出目录, 接受相对路径和绝对路径 (相对路径相对于脚本执行 pwd)</td></tr><tr><td>--log</td><td>string</td><td>指定本次编译结果文件名(会作为工程子级文件输出)</td></tr><tr><td>--old</td><td>boolean</td><td>语法降级</td></tr><tr><td>--nominimize</td><td>boolean</td><td>取消文件压缩</td></tr><tr><td>--nocache</td><td>boolean</td><td>本次编译不走缓存</td></tr><tr><td>--module</td><td>string</td><td>指定编译的工程: --module BankModule</td></tr><tr><td>--reload</td><td>boolean</td><td>刷新浏览器(开发模式下,当编译完成后,会主动刷新浏览器)</td></tr></tbody></table><p>举例:</p><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre><code><span class="line">1. 指定输出编译目录: yarn build|dev --outDir ./testDist</span>\n<span class="line">2. 编译指定文件: yarn build|dev -C BankModule/pages/主框架/App.vue (多个文件使用逗号隔开)</span>\n<span class="line">3. 编译指定的文件并不走缓存: yarn build -C BankModule/pages/主框架/App.vue --nocache</span>\n<span class="line">4. 全量编译, 不参与缓存: yarn build --nocache</span>\n<span class="line">5. 编译指定的工程: yarn build --moudle BankModule</span>\n<span class="line">6. 本次编译不压缩文件: yarn build --nominimize</span>\n<span class="line">7. 编译语法降级: yarn build --old</span>\n<span class="line">8. 清除log、cache、dist文件: yarn clean --log --cache --dist</span>\n<span class="line">9. 开发模式下,启动编译更新完成后主动刷新浏览器: yarn dev:web --reload</span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',6)]))}]]),i=JSON.parse('{"path":"/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%BC%96%E8%AF%91%E5%91%BD%E4%BB%A4%E4%BB%8B%E7%BB%8D.html","title":"编译命令","lang":"en-US","frontmatter":{},"headers":[],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"ABX5/前端/深入平台/编译命令介绍.md"}')}}]);