<template><div><p><a href="https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/" target="_blank" rel="noopener noreferrer">原文地址</a></p>
<p>这一节介绍如何通过 Chrome DevTools 的内存分析器来录制内存快照，并通过内存快照找到内存泄漏的原因。</p>
<p>Chrome DevTools 的内存分析器可以显示页面中 JavaScript 对象和相关 DOM 节点（参见：<a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#objects_retaining_tree" target="_blank" rel="noopener noreferrer">对象保留树</a>）所使用内存的情况。使用这个工具抓取的内存快照，然后通过分析内存使用情况以及不同时机内存快照的比较来找到内存泄漏的问题所在。</p>
<h2 id="抓取内存快照" tabindex="-1"><a class="header-anchor" href="#抓取内存快照"><span>抓取内存快照</span></a></h2>
<p>首先选中 DevTools 中 Profiles 面板的 <strong>Take Heap Snapshot</strong>，然后鼠标点击 <strong>Start</strong> 或者使用<code v-pre>Cmd + E</code>/<code v-pre>Ctrl + E</code>快捷键来抓取一个内存快照：</p>
<p><img src="https://wd.imgix.net/image/admin/eXy0IF7EI8oiqd7CM8KG.png?auto=format&amp;w=845" alt="Select profiling type"></p>
<p>快照抓取后，内容是先保存在渲染进程的内存中。当你要查看某个快照内容时，点击左侧快照列表中对应的图标，快照的内容会根据需要显示在 DevTools 中。</p>
<p>在快照加载到 DevTools 中被解析后，在快照标题的下面会出现一个数字，这个数字表示所有<a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#object-sizes" target="_blank" rel="noopener noreferrer">可访问的 JavaScript 对象</a>占用内存的大小。</p>
<p><img src="https://wd.imgix.net/image/admin/qTTxQm0RcYd1YJsPRJif.png?auto=format&amp;w=845" alt="Total size of reachable objects"></p>
<blockquote>
<p>注意：快照中只包含可访问的对象。所以抓取一个快照前总是要先进行一次垃圾回收。</p>
</blockquote>
<h2 id="清除快照" tabindex="-1"><a class="header-anchor" href="#清除快照"><span>清除快照</span></a></h2>
<p>可以通过点击<code v-pre>Clear all profiles</code>图标来移除所有的已抓取的快照（DevTools 和渲染进程的内存都会被释放）。</p>
<p><img src="https://wd.imgix.net/image/admin/vDLKOGnE1e17pfWZgBBQ.png?auto=format&amp;w=845" alt="Remove snapshots"></p>
<p>关闭 DevTools 的窗口是不会释放配置文件所占用的渲染进程内存。再次打开 DevTools 的时候，之前抓取的所有快照将会在再次出现在快照列表中。</p>
<p><strong>例如：</strong> 尝试用内存分析器去分析<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example3.html" target="_blank" rel="noopener noreferrer">scattered objects</a>这个例子。你可以看到这些对象的内存分配情况。</p>
<h2 id="查看快照" tabindex="-1"><a class="header-anchor" href="#查看快照"><span>查看快照</span></a></h2>
<p>快照可以通过很多角度来分析，根据不同的需求可以选择不同的视图。</p>
<p><strong>Summary view（总览视图）</strong> 按照创建对象的构造函数进行展示，由相同构造函数创建的对象放在以构造函数名命名的组里。可以在对应的组里找对具体的对象以及所占的内存大小。总览视图是在<a href="https://developer.chrome.com/docs/devtools/memory-problems/#overview" target="_blank" rel="noopener noreferrer">追踪由 DOM 引起的内存泄漏</a>问题的一把利器。</p>
<p><strong>Comparison view（比较视图）</strong> 可以展示两个不同快照之间的差异。可以在一个操作前后各抓取一个（或者更多）内存快照，比较操作前后内存的变化。然后通过检查释放内存和引用数量的增量来确认内存泄漏的原因。</p>
<p><strong>Containment view（容器视图）</strong> 允许直接查看内存中的内容。容器视图可以更好的查看对象的结构，也可以帮我们分析对象存在于内存中，到底是如何在全局作用域（window）下被引用的。使用容器视图分析闭包可以从更底层，深入的分析对象。</p>
<p><strong>Dominators view（支配者视图）</strong> 可以显示<a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#dominators" target="_blank" rel="noopener noreferrer">支配者树</a>，通过支配者树可以发现内存积累的点。支配者视图可以帮我们确认在垃圾回收的过程中，哪些对象由于预期外的引用导致没有被回收。</p>
<p>使用视图下面的下拉选择框来切换不同的视图：</p>
<p><img src="https://wd.imgix.net/image/admin/x7nyCuSlwz3gbRhwIvJZ.png?auto=format&amp;w=666" alt="Switch views selector"></p>
<blockquote>
<p><strong>注意：</strong> 对象的属性并不是都储存的 JavaScript 内存中。如果属性的<code v-pre>getter</code>是通过执行原生代码实现的，是不会被抓取到内存快照中的。另外，像数字这种非字符串的值也不会被抓取到。</p>
</blockquote>
<h3 id="总览视图" tabindex="-1"><a class="header-anchor" href="#总览视图"><span>总览视图</span></a></h3>
<p>快照被第一次打开的时候，默认显示的是总览视图，这里会显示全部的对象，可以通过点击构造函数名的分组来展开里面的实例。</p>
<p><img src="https://wd.imgix.net/image/admin/lpUo7q7jG2S2CVIw65ql.png?auto=format&amp;w=1252" alt="Summary view"></p>
<p>在总览视图中，我们可以看到每一行有很多列，每列的含义已经写在表头中了。下面分别对每列就行说明：</p>
<ul>
<li><strong>Constructor</strong> 表示由当前构造函数创建的所有对象。</li>
<li><strong>Number of object instance</strong> 表示由当前构造函数创建的对象的个数。</li>
<li><strong>Shallow size</strong> 表示由这个构造函数创建的所有对象浅尺寸的和。浅尺寸表示一个对象自己所占用内存的大小（通常数组和字符串有更大的浅尺寸）。参见<a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#object-sizes" target="_blank" rel="noopener noreferrer">对象尺寸</a>。</li>
<li><strong>Retained size</strong> 这一列的值表示由当前构造函数创建的对象中最大保留尺寸的大小。保留尺寸表示一个对象被删除（包括只被这个对象所引用的对象）后所释放的内存大小。参见<a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#object-sizes" target="_blank" rel="noopener noreferrer">对象尺寸</a>。</li>
<li><strong>Distance</strong> 表示从当前对象节点到根节点的最短路径。</li>
</ul>
<p>然后我们在上图的总览视图中选择一行展开，会列出所有由这个构造函数创建的实例。可以发现每个实例都有自己的浅尺寸和保留尺寸，也会显示在对应的列中。在每个对象实例后面都有一个<code v-pre>@</code>符号，后面跟着一个数字，这个数字就是这个对象的唯一 ID，在不同内存快照的对比中可以将使用这个 ID 匹配到每个对象。</p>
<p>需要关注的是，黄色的节点是被 JavaScript 引用的对象，红色节点表示已经被卸载的节点，但仍然被黄色节点所引用着。</p>
<p><strong>内存解析器中这些的构造函数都是代表什么呢？</strong></p>
<p><img src="https://wd.imgix.net/image/admin/nsY5dgLPRJJIOhADyHyR.jpg?auto=format&amp;w=1088" alt="Constructor groups"></p>
<ul>
<li><strong>(global property)</strong>-是一个全局对象（如：window）和被全局对象引用对象中间的对象。如果通过一个 Persion 的构造函数创建一个被全局对象引用的对象，那么内存中的保留路径看起来是这样的<code v-pre>[global] &gt; (global property) &gt; Person</code>。这种规范与对象直接互相引用是不同的。使用中间对象是处于一些性能的原因。全局对象会被定期的修改，所以对属性访问的优化对非全局对象更有利，应用在全局对象上并不合适。</li>
<li><strong>(roots)</strong>-表示被选中的对象所在保留树的根入口。根入口上也会存在一些由 V8 引擎创建对象的引用。引擎会缓存这些对象的引用，但是这些引用都是一种弱引用，所以不会阻止这些对象被垃圾回收。</li>
<li><strong>(closure)</strong>-一组中的对象被闭包引用的计数。</li>
<li><strong>(array, string, number, regexp)</strong>-引用数组、字符串、数字和正则表达式对应的对象类型列表。</li>
<li><strong>(compiled code)</strong>-简单来说就是与编译代码相关的代码。这些脚本实际是函数，就像写在<code v-pre>&lt;script&gt;</code>标签内的代码一样。<code v-pre>SharedFunctionInfos</code>(SFI)是介于函数和编译代码之间的对象。区别于函数，SFI 是没有上下文概念的，而函数通常存在上下文。</li>
<li><strong>HTMLDivElement, HTMLAnchorElement, DocumentFragment</strong>等-代码中引用的表示 DOM 元素和文档对象的特殊对象类型。</li>
</ul>
<p><strong>样例：</strong> 尝试使用这个<a href="https://developer.chrome.com/devtools/docs/heap-profiling-summary" target="_blank" rel="noopener noreferrer">演示页面</a>去理解<code v-pre>Summary</code>视图是如何使用的。</p>
<h3 id="比较视图" tabindex="-1"><a class="header-anchor" href="#比较视图"><span>比较视图</span></a></h3>
<p>通过多个内存快照互相对比可以找到造成内存泄漏的对象。执行一个不会造成内存泄漏的操作（通常是执行一组正向和反向的操作，如打开一个页面然后关闭它，应该没有任何多余的内存），容易对比发现问题，可以按照下面的操作：</p>
<ol>
<li>在操作前抓取一个内存快照。</li>
<li>进行指定操作（在页面中做可能会产生内存泄漏的操作）。</li>
<li>进行相反操作（执行上一步的相反操作，也可以重复几次第 2 和第 3 步）。</li>
<li>再次抓取内存快照，然后切换到比较视图，与第 1 步抓取的内存快照进行对比。</li>
</ol>
<p>在比较视图中会展示两个内存快照之间差异的部分。当我们展开一个构造函数的入口后，可以看到在每个实例的新增和移除情况。</p>
<p><img src="https://wd.imgix.net/image/admin/aUzueSBh2VdlZdySO05q.png?auto=format&amp;w=1600" alt="Comparison view"></p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://developer.chrome.com/devtools/docs/heap-profiling-comparison" target="_blank" rel="noopener noreferrer">演示页面</a>，从中发现如何通过比较内存快照查找内存泄漏的方法。</p>
<h3 id="容器视图" tabindex="-1"><a class="header-anchor" href="#容器视图"><span>容器视图</span></a></h3>
<p>容器视图主要是对整个应用对象结构的一个俯视图。通过容器视图可以一窥闭包函数内部，可以观察那些由虚拟机内部对象组成的 JavaScript 对象，还可以了解应用中更底层的对象占用的内存大小。</p>
<p>下面的容器视图中有以下几个入口点：</p>
<ul>
<li><strong>DOMWindow objects</strong>在 JavaScript 中被看作是一种“全局”对象。</li>
<li><strong>GC roots</strong>是实际用于垃圾回收的根节点。GC 根节点可以由，内置对象的映射、符号表格(symbol tables)、虚拟机线程栈、编译缓存、句柄作用域(handle scopes)和全局句柄(global handles)。</li>
<li><strong>Native objects</strong>是被自动注入到 JavaScript 虚拟机中的浏览器对象，如：DOM 节点对象和 CSS 规则对象。</li>
</ul>
<p><img src="https://wd.imgix.net/image/admin/TrXbxzCRkGkJv17Da4sd.png?auto=format&amp;w=1600" alt="Containment view"></p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://developer.chrome.com/devtools/docs/heap-profiling-containment" target="_blank" rel="noopener noreferrer">演示页面</a>，来学习如果使用此视图来找到闭包和事件处理函数。</p>
<p><strong>一个闭包的小建议</strong></p>
<p>具名的函数对于在内存快照中发现闭包是很有帮助的。例如，下面是没有使用具名函数的例子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createLargeClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> largeStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> <span class="token function-variable function">lC</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// this is NOT a named function</span></span>
<span class="line">    <span class="token keyword">return</span> largeStr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> lC<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>也可以将上面代码修改为下面的样子：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">function</span> <span class="token function">createLargeClosure</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> largeStr <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">var</span> <span class="token function-variable function">lC</span> <span class="token operator">=</span> <span class="token keyword">function</span> <span class="token function">lC</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// this IS a named function</span></span>
<span class="line">    <span class="token keyword">return</span> largeStr<span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">  <span class="token keyword">return</span> lC<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="https://wd.imgix.net/image/admin/gU3gSvHcKR2UyJzn5abo.png?auto=format&amp;w=741" alt="Name functions to distinguish between closures"></p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example7.html" target="_blank" rel="noopener noreferrer">为什么 eval 是有罪的</a>例子，来了解内存中影响分析闭包的原因。如果你对上面的例子很感兴趣，还可以继续了解如何通过记录<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example8.html" target="_blank" rel="noopener noreferrer">内存的分配</a>来分析内存。</p>
<h3 id="支配者视图-dominators-view" tabindex="-1"><a class="header-anchor" href="#支配者视图-dominators-view"><span>支配者视图(Dominators view)</span></a></h3>
<p><a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/#dominators" target="_blank" rel="noopener noreferrer">支配者</a>视图展示了内存分布图中的支配者树。看起来有点像容器视图，但缺少对象的属性名。这是因为一个对象的支配者可能没有直接引用这个对象；支配者树不是内存图的生成树。但对于帮助我们快速找到内存被分配的点是非常有帮助的。</p>
<p><strong>注意：</strong> 在 Chrome Canary（Chrome 的开发者版本）中，支配者视图可以通过修改设置<code v-pre>Settings &gt; Show advanced heap snapshot properties</code>然后重启浏览器来启用这个视图。</p>
<p><img src="https://wd.imgix.net/image/admin/AuEZxFtdT8P9QZQ5w48P.png?auto=format&amp;w=845" alt="Dominators view"></p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://developer.chrome.com/devtools/docs/heap-profiling-dominators" target="_blank" rel="noopener noreferrer">演示页面</a>来练习自己找到内存分配的点。这个例子会说明<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example10.html" target="_blank" rel="noopener noreferrer">保留路径和支配者</a>。</p>
<h2 id="观察不同颜色的代码" tabindex="-1"><a class="header-anchor" href="#观察不同颜色的代码"><span>观察不同颜色的代码</span></a></h2>
<p>对象的属性和属性值会根据不同类型被赋予了不同的颜色。属性有下面四种类型：</p>
<ul>
<li><strong>a: property</strong>——标准的属性名，通过点(.)操作符或者通过中括号([])来访问，如：<code v-pre>[foo bar]</code>。</li>
<li><strong>0: element</strong>——标准的数字下标属性，通过中括号([])来访问。</li>
<li><strong>a: context var</strong>——函数上下文中的变量，在闭包函数内部通过名字来访问。</li>
<li><strong>a: system prop</strong>——由 JavaScript 虚拟机添加的属性，无法通过 JavaScript 代码来访问。</li>
</ul>
<p>被定义为<code v-pre>System</code>的对象无法在 JavaScript 中找到对应的类型。这些对象是由 JavaScript 虚拟机对象系统实现的。V8 引擎将大部分内部对象像用户定义的 JavaScript 对象一样加入到内存中。所以这些<code v-pre>System</code>类型的对象仅仅是 V8 引擎内部引用的。</p>
<h2 id="查找一个具体的对象" tabindex="-1"><a class="header-anchor" href="#查找一个具体的对象"><span>查找一个具体的对象</span></a></h2>
<p>在内存快照中，通过<code v-pre>Ctrl + F</code>然后输入对象 ID(也就是内存快照中每个对象<code v-pre>@</code>后面的数字)，可以搜索到对应的对象。</p>
<h2 id="发现-dom-引起的内存泄漏" tabindex="-1"><a class="header-anchor" href="#发现-dom-引起的内存泄漏"><span>发现 DOM 引起的内存泄漏</span></a></h2>
<p>Chrome 的内存分析器可以反映出浏览器原生对象（DOM 节点和 CSS 规则）与 JavaScript 对象之间的相互依赖关系。这会帮助我们发现由于忘记清除浮动的 DOM 子树而出现隐式的内存泄漏。</p>
<p>由 DOM 引起的内存泄漏比你想象的还要严重。思考下面的例子 - 当<code v-pre>#tree</code>（id 为 tree 的元素）被垃圾回收时会发生什么？</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> select <span class="token operator">=</span> document<span class="token punctuation">.</span>querySelector<span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> treeRef <span class="token operator">=</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"#tree"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> leafRef <span class="token operator">=</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"#leaf"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">var</span> body <span class="token operator">=</span> <span class="token function">select</span><span class="token punctuation">(</span><span class="token string">"body"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">body<span class="token punctuation">.</span><span class="token function">removeChild</span><span class="token punctuation">(</span>treeRef<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//#tree can't be GC yet due to treeRef</span></span>
<span class="line">treeRef <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">//#tree can't be GC yet due to indirect</span></span>
<span class="line"><span class="token comment">//reference from leafRef</span></span>
<span class="line"></span>
<span class="line">leafRef <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">//#NOW can be #tree GC</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code v-pre>#leaf</code>元素维护这他父节点以及一直向上递归的所有 DOM 节点，其中就包括<code v-pre>#tree</code>，所有只有在<code v-pre>leafRef</code>置空时，整个从<code v-pre>#tree</code>起始的子 DOM 树才会被完全回收。</p>
<p><img src="https://wd.imgix.net/image/admin/kQoKHBKI6Xtvt1d0BPb4.png?auto=format&amp;w=385" alt="DOM subtrees"></p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example6.html" target="_blank" rel="noopener noreferrer">DOM 节点的内存泄漏</a>例子了解 DOM 节点在什么情况下会造成内存泄漏以及如何卸载这些造成泄漏的节点。可以通过<a href="https://github.com/GoogleChrome/devtools-docs/blob/master/docs/demos/memory/example9.html" target="_blank" rel="noopener noreferrer">超出预期的 DOM 泄漏</a>这个例子来继续了解有关 DOM 引起的内存泄漏。</p>
<p>更多有关 DOM 泄漏和内存分析的基础知识可以查看 Gonzalo Ruiz de Villa 的<a href="http://slid.es/gruizdevilla/memory" target="_blank" rel="noopener noreferrer">通过 Chrome DevTools 发现和调试内存泄漏</a>。</p>
<p><strong>样例：</strong> 尝试使用这个<a href="https://developer.chrome.com/devtools/docs/heap-profiling-dom-leaks" target="_blank" rel="noopener noreferrer">例子</a>进行由被卸贼 DOM 树引发问题的练习。</p>
</div></template>


