"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[2430],{52495:(s,n,a)=>{a.r(n),a.d(n,{comp:()=>t,data:()=>l});var e=a(20641);const p={},t=(0,a(66262).A)(p,[["render",function(s,n){return(0,e.uX)(),(0,e.CE)("div",null,n[0]||(n[0]=[(0,e.Fv)('<h1 id="引入资源说明" tabindex="-1"><a class="header-anchor" href="#引入资源说明"><span>引入资源说明</span></a></h1><h2 id="交易、sdk-的引入" tabindex="-1"><a class="header-anchor" href="#交易、sdk-的引入"><span>交易、sdk 的引入</span></a></h2><ol><li>引入交易资源</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> utils <span class="token keyword">from</span> <span class="token string">&#39;./utils.js&#39;</span></span>\n<span class="line"><span class="token keyword">import</span> Trade <span class="token keyword">from</span> <span class="token string">&#39;BankModule/pages/主框架/trade.js&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这种引入是一个引入工程内的资源, 直接引入即可。(允许不带文件后缀)</p><p>动态引入:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;./trade.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">moduleA</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">,</span> moduleA<span class="token punctuation">.</span>default<span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>动态引入允许使用别名:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&#39;@FM/pages/主框架/trade.js&#39;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">moduleA</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">,</span> moduleA<span class="token punctuation">.</span>default<span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span> </span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;**/&quot; 路径:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token constant">T</span> <span class="token keyword">from</span> <span class="token string">&#39;**/证件/test.js&#39;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token constant">T2</span> <span class="token keyword">from</span> <span class="token string">&#39;**/test2.js&#39;</span></span>\n<span class="line"><span class="token keyword">import</span><span class="token punctuation">(</span><span class="token string">&quot;**/页面实现/存单/存单回收&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">moduleA</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>moduleA<span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>&quot;**/&quot; 路径是三层解析路径, 首先会从当前打开的 bpmn 交易的目录开始查找, 当找不到时, 会从当前交易工程的 pages 目录下开始查询, 如果还是找不到, 就从当前交易工程的依赖工程中的 pages 下查找, 找不到则返回 false。</p><p>调用函数引入 <code>window.abx.abxImport</code>:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">const</span> Trade <span class="token operator">=</span> <span class="token keyword">await</span> window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">abxImport</span><span class="token punctuation">(</span><span class="token string">&quot;BankModule/pages/主框架/trade.js&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>引入 sdk 包</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> Vue <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> PanelMixin <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@agree/ab-manager-trade&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>引入一个 sdk 包, 需要在工程下的 package.json 内指定对该包的依赖:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token comment">// package.json</span></span>\n<span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.6.14&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token property">&quot;agree-public-client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>有时候引入的 sdk 资源并没有在 package.json 中指定却能正常的编译, 原因是在 x5 编译的时候会对所有的依赖资源进行深度检索, 收集到所有的资源进行编译, 可能刚好就存在你引入却没有写入 package.json 中的 sdk 包, 所以对于一个 三方的 sdk 包, 最好是作为一个依赖写入到交易工程 package.json 文件中。如果依赖并不存在, 则编译报错。</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ol><li>对于 @agree 下的所有的包都不需要进行写入, 这类的包默认会进行依赖的.</li><li>交易工程下 package.json 中的依赖对于版本号并不作要求, 实际上它仅仅需要知道这个依赖的名称, 具体版本是 aarm 镜像中 node_modules 下的包的版本, 如果需要更换版本需要升级 aarm 镜像.</li><li>当依赖一个新的 sdk 的包时, 工程需要全量编译.</li></ol></div><ol start="3"><li>引入 sdk 内指定的文件</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> aufPanelTemp <span class="token keyword">from</span> <span class="token string">&#39;@agree/ab-manager-auf/dist/auf-panel/index.js&#39;</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>页面中新增一个对包内指定的文件的引入, 需要全量编译, x5 需要编译这个依赖并对这个文件做依赖收集, 否则找不到该依赖。</p><ol start="4"><li>引入样式文件</li></ol><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token string">&#39;./a.scss&#39;</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token string">&quot;@agree/ab-manager-trade/dist/panel.css&quot;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>动态引入静态资源 <code>window.abx.loadResource</code> :</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">e<span class="token punctuation">.</span>srcElement<span class="token punctuation">.</span>src <span class="token operator">=</span> window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">loadResource</span><span class="token punctuation">(</span><span class="token string">&quot;BankModule/scene/bpmn交易/测试交易2/静态资源/images/金卡.png&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>允许使用别名:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line">e<span class="token punctuation">.</span>srcElement<span class="token punctuation">.</span>src <span class="token operator">=</span> window<span class="token punctuation">.</span>abx<span class="token punctuation">.</span><span class="token function">loadResource</span><span class="token punctuation">(</span><span class="token string">&quot;@Bank/scene/bpmn交易/测试交易2/静态资源/images/金卡.png&quot;</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="别名" tabindex="-1"><a class="header-anchor" href="#别名"><span>别名</span></a></h2><p>在引入工程内的资源时, 因为路径过长会导致引入繁琐。x5 允许配置路径别名。</p><p>在工程下的 package.json 中配置:</p><div class="language-json line-numbers-mode" data-highlighter="prismjs" data-ext="json" data-title="json"><pre><code><span class="line"><span class="token comment">// package.json</span></span>\n<span class="line"><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BankModule&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">  <span class="token property">&quot;extensions&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token property">&quot;BankModule.package-name-alias&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>\n<span class="line">      <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BankModule&quot;</span></span>\n<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@FM&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BankModule&quot;</span></span>\n<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@pages&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BankModule/pages&quot;</span></span>\n<span class="line">      <span class="token punctuation">}</span><span class="token punctuation">,</span></span>\n<span class="line">      <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token string">&quot;@/TEClientTrade/modules&quot;</span><span class="token punctuation">,</span></span>\n<span class="line">        <span class="token property">&quot;to&quot;</span><span class="token operator">:</span> <span class="token string">&quot;BankModule/scene/modules&quot;</span></span>\n<span class="line">      <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">]</span></span>\n<span class="line">  <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>配置别名规则: <code>from -&gt; to</code> 路径的转换; 匹配是深度匹配, 就是说对 &quot;@&quot; 匹配成功, 但同时对 &quot;@/TEClientTrade/modules&quot; 也匹配成功, 那进行 <code>to</code> 转换时, 以后者的匹配为准.</p><div class="hint-container tip"><p class="hint-container-title">Tips</p><ol><li>上面在配置别名时, <code>[name].package-name-alias</code> , 字段中 <code>[name]</code> 取的是交易工程 package.json 中 name 的字段, 也就是交易工程的 name 。(实际上不配置这个&quot;域&quot;也可以, 但最好是带上)</li><li>新增别名配置时, 需要全量编译</li></ol></div><p>配置完别名后再进行引入交易工程内的资源时就可以使用别名了</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span><span class="token constant">B</span><span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@pages/主框架/B.js&#39;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="require-引入资源说明" tabindex="-1"><a class="header-anchor" href="#require-引入资源说明"><span>require 引入资源说明</span></a></h2><p>x5 对 require 的引入做了处理:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token function">require</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&#39;json!./test.json&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;json!./test1.json&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">a<span class="token punctuation">,</span> b</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">  console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>允许直接引用。</p>',41)]))}]]),l=JSON.parse('{"path":"/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E5%BC%95%E5%85%A5%E8%B5%84%E6%BA%90%E6%96%B9%E5%BC%8F%E8%AF%B4%E6%98%8E.html","title":"引入资源说明","lang":"en-US","frontmatter":{},"headers":[{"level":2,"title":"交易、sdk 的引入","slug":"交易、sdk-的引入","link":"#交易、sdk-的引入","children":[]},{"level":2,"title":"别名","slug":"别名","link":"#别名","children":[]},{"level":2,"title":"require 引入资源说明","slug":"require-引入资源说明","link":"#require-引入资源说明","children":[]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"ABX5/前端/深入平台/引入资源方式说明.md"}')}}]);