<template><div><p><a href="https://developer.chrome.com/docs/devtools/memory-problems/" target="_blank" rel="noopener noreferrer">原文地址</a></p>
<p>本节将学习如何使用 Chrome 的 DevTools 去找到影响页面性能的内存问题，包括内存泄漏、内存膨胀和频繁的垃圾回收。</p>
<h2 id="概要" tabindex="-1"><a class="header-anchor" href="#概要"><span>概要</span></a></h2>
<ul>
<li>通过 Chrome Task Manager 发现当前页面正在使用多少内存。</li>
<li>使用 Timeline 录制内存随着时间变化的可视化图像。</li>
<li>从内存快照中识别出已经被卸载的 DOM 树（一个造成内存泄漏常见的原因）。</li>
<li>使用 Allocation Timeline 录制结果发现什么时间分配了新的 JS 内存。</li>
</ul>
<h2 id="概述" tabindex="-1"><a class="header-anchor" href="#概述"><span>概述</span></a></h2>
<p>基于 <a href="https://web.dev/rail" target="_blank" rel="noopener noreferrer">RAIL</a> 的性能模型，聚焦于性能对用户的影响。</p>
<p>内存问题是非常重要的，因为这些问题经常被用户察觉到。用户发现内存问题主要通过一下几种方式：</p>
<ul>
<li><strong>页面的性能随着时间越来越差。</strong> 这可能就是内存泄漏造成的。内存泄漏是由于页面中的问题导致随着时间的推移，使用的内存越来越多。</li>
<li><strong>页面的性能一直很差。</strong> 这可能是内存膨胀引起的。内存膨胀是指在是页面保持最优的的运行速度所必须的内存外，使用更多的内存。</li>
<li><strong>页面的性能频繁出现延迟和卡顿。</strong> 这可能是频繁的垃圾回收导致的。在浏览器需要进行内存回收的时候会触发垃圾回收。这种垃圾回收的行为是由浏览器决定的。在执行回收动作时，所有的脚本会被强制暂停执行。所以如果浏览器有大量的垃圾回收行为，那么这时候脚本的执行也会被暂停，从而影响页面的性能。</li>
</ul>
<h3 id="内存膨胀-多少才算膨胀" tabindex="-1"><a class="header-anchor" href="#内存膨胀-多少才算膨胀"><span>内存膨胀：多少才算膨胀？</span></a></h3>
<p>内存泄漏是很容易理解的。如果一个网站使用的内存越来越多，我们就知道这是发生了内存泄漏。但是给内存膨胀强行下一个定义有点困难，因为这里面有很多事情我们没法下一个绝对的定义或者一个明确边界，比如：什么是“使用太多内存”？</p>
<p>没法用一个具体的数字表示，因为不同的设备和浏览器性能是不同的。而且，同一个相同页面可能在高端的智能机上可以流畅运行，但在低端的智能机上就会找成崩溃。</p>
<p>这个问题的关键还是使用聚焦用户的 RAIL 性能模型。找到用户使用占比较多设备，然后在这些设备上测试你的页面。如果测试的结果一直很差，那么说明这些设备的内存性能不足以支持流畅的运行这个页面。</p>
<h2 id="使用-chrome-task-manager-实时的显示内存用量" tabindex="-1"><a class="header-anchor" href="#使用-chrome-task-manager-实时的显示内存用量"><span>使用 Chrome Task Manager 实时的显示内存用量</span></a></h2>
<p>使用 Chrome Task Manager 来作为查找内存问题的出发点。这个任务管理器（Task Manager）会实时的显示一个页面当前正在使用的内存是多少。</p>
<p><strong>STEP 1：<strong>通过按快捷键 <code v-pre>Shift+Esc</code> 或者在 Chrome 的主页面点击右上角菜单，选择</strong>More tools &gt; Task manager</strong>来打开任务管理器。</p>
<p><img src="https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/N79qVbngo3RGfyJqVAXs.png?auto=format&amp;w=845" alt="Opening-the-Task-Manager"></p>
<p><strong>STEP 2：<strong>在任务管理器面板的头部，按鼠标右键菜单启用</strong>JavaScript memory</strong>。</p>
<p><img src="https://wd.imgix.net/image/BrQidfK9jaQyIHwdw91aVpkPiib2/HgelJFumP0cFX1lYZc1V.png?auto=format&amp;w=845" alt="Enabling-JS-memory"></p>
<p>在任务管理器中，<strong>Memory</strong>和<strong>JavaSript Memory</strong>这两列所表示的内存使用情况是不同的：</p>
<ul>
<li><strong>Memory</strong>这一列表示的是原生内存。DOM 节点就是被存储在原生内存中的。如果这一列的值在增加，说明 DOM 节点正在被创建。</li>
<li><strong>JavaScript Memory</strong>这一列表示 JS 的堆内存。这一列的数据主要有两个值组成。一个是我们比较感兴趣的正在存活的内存大小。这个存活的内存指的是当前页面正在使用的可访问对象所占的内存大小。如果这个值在增加，可能是新对象被创建，也可能是已有的对象需要更大的内存。</li>
</ul>
<h2 id="通过-timeline-录制更直观的看到内存泄漏" tabindex="-1"><a class="header-anchor" href="#通过-timeline-录制更直观的看到内存泄漏"><span>通过 Timeline 录制更直观的看到内存泄漏</span></a></h2>
<p>除了使用上面的任务管理器，我们还可以使用 Timeline 面板作为另一个查找内存问题的出发点。通过 Timeline 面板可以更直观的看到页面所使用的内存随着时间变化的情况。</p>
<ol>
<li>在 DevTools 中打开 Timeline 面板。</li>
<li>选中面板上的 Memory 复选框，表示在录制过程中录制内存的使用情况。</li>
<li><a href="https://developer.chrome.com/docs/devtools/evaluate-performance/reference/#record-runtime" target="_blank" rel="noopener noreferrer">进行录制</a></li>
</ol>
<p>Tip: 在录制的开始和结束前先进行一次强制垃圾回收是一个好的习惯。在录制过程中，点击<strong>垃圾回收</strong>按钮(<img src="https://wd.imgix.net/image/admin/Qkf1EfUFRSoRsCEMVHdY.png?auto=format&amp;w=36" alt="force garbage collection button">)会马上进行一次强制垃圾回收。</p>
<p>下面演示一个使用 Timeline 的录制方式，思考下面代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10000</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"div"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"grow"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> grow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面代码可以发现，每次点击按钮都会触发<code v-pre>click</code>事件绑定的<code v-pre>grow</code>函数，每调用一次<code v-pre>grow</code>函数就会在 body 中添加 10000 个<code v-pre>div</code>节点，以及会在全局的<code v-pre>x</code>数组中添加 100 万个<code v-pre>x</code>字符串。接着使用 Timeline 录制上面代码的运行情况，得到的录制结果如下图：</p>
<p><img src="https://wd.imgix.net/image/admin/pPcZQbQ6EleigzceZoct.png?auto=format&amp;w=845" alt="simple-growth-example"></p>
<p>首先，对这个界面进行一些说明。在<strong>Overview</strong>面板中<strong>HEAP</strong>的图形（在上图右侧的<strong>NET</strong>下面）表示 JS 内存的变化。在<strong>Overview</strong>面板的下面是<strong>Counter</strong>面板。在 Counter 面板中可以分别查看 JS 内存（与<strong>HEAP</strong>的图形相同）以及文档对象、DOM 节点、事件监听和 GPU 的内存使用情况。通过点击复选框可以在图中显示或隐藏对应的内存使用情况。</p>
<p>现在我们通过截图对代码进行分析。我们先看节点计数器（图中绿色的图形），你会发现图形的变化跟代码是完全匹配的。节点的是一次一次逐步增加的。你可以推测每次节点数量的增加是因为调用了<code v-pre>grow()</code>。但是 JS 内存图形（图中蓝色的图形）就不是那么容易推测的了。这里实际上已经使用了之前提到的强制垃圾回收最佳实践。在录制过程中会发现 JS 内存会突然升高。这其实是符合我们预期的：在每次触发按钮的 click 事件时，JavaScript 正在创建很多 DOM 节点以及创建一百万个字符串的大量工作。内存使用增加是可以理解的，但关键是在代码执行结束后内存占用仍然比初始要高（“初始”指的是在录制前的强制垃圾回收后）。在我们实际工作中，如果你看到 JS 内存和 node 节点增加的图形，可能就会内存泄漏的风险。</p>
<h2 id="通过内存快照查找由被卸载的-dom-树引起的内存泄漏" tabindex="-1"><a class="header-anchor" href="#通过内存快照查找由被卸载的-dom-树引起的内存泄漏"><span>通过内存快照查找由被卸载的 DOM 树引起的内存泄漏</span></a></h2>
<p>一个 DOM 节点只有在没有被页面中其他 DOM 树和 JavaScript 代码引用的时候才会被垃圾回收。如果一个节点已经在 DOM 树中被移除了，但是仍然被 JavaScript 代码所引用，就会被标记为“已卸载”（detached）。已卸载的 DOM 节点是造成内存泄漏的一个常见原因。这一节会告诉你如何使用 DevTools 中的内存分析器来找到已卸载的 DOM 节点。</p>
<p>下面是一个存在已卸载节点的简单示例。</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> detachedTree<span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token keyword">var</span> ul <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"ul"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token keyword">var</span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">;</span> i<span class="token operator">++</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token keyword">var</span> li <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">"li"</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">    ul<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>li<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line">  detachedTree <span class="token operator">=</span> ul<span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"create"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> create<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>按钮绑定的 click 事件中，会创建 1 个 <code v-pre>ul</code> 节点和 10 个<code v-pre>li</code>的子节点。这些节点被 JavaScript 引用，但并不存在 DOM 树中，所以这些节点就属于被卸载的。</p>
<p>内存快照是查找被卸载节点的一种方式。就像它的名字一样，内存快照会展示在抓取内存快照的时间点，页面的 JS 对象和 DOM 节点占用的内存情况。</p>
<p>下面我们来生成一个内存快照，打开 DevTools 然后切换到 <strong>Profiles</strong> 面板，选择单选按钮中的 <strong>Take Heap Snapshot</strong>，接着点击 <strong>Take Snapshot</strong> 按钮就可以了。</p>
<blockquote>
<p>译者注：新版本已使用 <strong>Memory</strong> 来代替 <strong>Profiles</strong> 抓去内存快照。</p>
</blockquote>
<p><img src="https://wd.imgix.net/image/admin/cZnWVusrPfoLR9R9edO1.png?auto=format&amp;w=845" alt="take-heap-snapshot"></p>
<p>快照可能需要一些时间去加载。如果已经加载完成了，就可以在左侧的面板（下图中的<strong>HEAP SNAPSHOTS</strong>部分）中选中这个快照进行查看。</p>
<p>通过在 <strong>Class filter</strong> 输入<code v-pre>Detached</code>搜索被卸载的 DOM 树。</p>
<p><img src="https://wd.imgix.net/image/admin/WXv2Bv8LfZKGQBmgcPbl.png?auto=format&amp;w=845" alt="filtering for detached nodes"></p>
<p>点击三角箭头展开并检查一个被卸载的 DOM 树。</p>
<p><img src="https://wd.imgix.net/image/admin/j2sPLeVjZ5tgbmVhs9Ri.png?auto=format&amp;w=845" alt="investigating detached tree"></p>
<p>黄色的高亮节点是直接被 JavaScript 代码引用的节点。红色的高亮节点没有直接被 JavaScript 代码引用，这些红色节点存在是因为他们属于黄色节点树的一部分。通常看说，你应该先关注黄色节点。通过修复你的代码使黄色节点在不需要的时候不保留的内存中，或者你也可以让红色节点从黄色节点的节点树中脱离出来。</p>
<p>点击黄色节点看到更多引用的信息。点击黄的节点后会看到 <strong>Object</strong> 面板，在这里可以看到更多引用黄色节点的代码信息。比如在下面的截图中可以看到，<code v-pre>detachedTree</code>变量正在被一个节点引用。修复这种情况的内存泄漏，你应该了解使用<code v-pre>detachedTree</code>的代码逻辑，确保在不需要使用<code v-pre>detachedTree</code>的时候将它移除掉。</p>
<p><img src="https://wd.imgix.net/image/admin/j2sPLeVjZ5tgbmVhs9Ri.png?auto=format&amp;w=845" alt="investigating a yellow node"></p>
<h2 id="使用-allocation-timelines-来识别-js-内存泄漏" tabindex="-1"><a class="header-anchor" href="#使用-allocation-timelines-来识别-js-内存泄漏"><span>使用 Allocation Timelines 来识别 JS 内存泄漏</span></a></h2>
<p>Allocation Timelines 是可以帮助我们跟踪 JS 内存泄漏的工具。</p>
<p>下面演示一下 Allocation Timeline 的用法，先思考下面代码：</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">var</span> x <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">function</span> <span class="token function">grow</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>
<span class="line">  x<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Array</span><span class="token punctuation">(</span><span class="token number">1000000</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">join</span><span class="token punctuation">(</span><span class="token string">"x"</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line">document<span class="token punctuation">.</span><span class="token function">getElementById</span><span class="token punctuation">(</span><span class="token string">"grow"</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"click"</span><span class="token punctuation">,</span> grow<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>每次触发按钮事件都会将一百万个字符添加到全局的<code v-pre>x</code>变量中。</p>
<p>接着我们来录制一个 Allocation Timeline，首先打开 DevTools，切换到 <strong>Profiles</strong> 面板，然后选择单选按钮中的 <strong>Record Allocation Timeline</strong>，按 <strong>Start</strong> 按钮就可以开始录制了，开始后可以执行你认为可能出现内存泄漏的行为，执行完成后可以按 <strong>stop recording</strong>(⏺️) 结束录制。</p>
<p>在录制的过程中，需要注意在 Allocation Timeline 中增长的蓝条，就像下图中的样子。</p>
<p><img src="https://wd.imgix.net/image/admin/2OEngx5L3tELetdn1JDy.png?auto=format&amp;w=1600" alt="new allocations"></p>
<p>这些蓝条就表示被新分配的内存。这些新分配的内存都可能是存在内存泄漏的点。你可以在蓝条上进行缩放可以查看一段时间内新分配的内存情况，会展示对应时间段内对象的 <strong>Constructor</strong> 面板。</p>
<p><img src="https://wd.imgix.net/image/admin/j1EwNIGrsYdMX23HkF7I.png?auto=format&amp;w=1600" alt="zoomed allocation timeline"></p>
<p>在 <strong>Object</strong> 面板中，可以点击展开一个对象查看更多的细节。如下面图中，可以查看使用新分配内存的对象细节，可以看到内存被使用在<code v-pre>Window</code>作用域的<code v-pre>x</code>变量上。</p>
<p><img src="https://wd.imgix.net/image/admin/y8Yq6Ma0MVawDaG7dz8b.png?auto=format&amp;w=1600" alt="object details"></p>
<h2 id="通过函数来检查内存分配" tabindex="-1"><a class="header-anchor" href="#通过函数来检查内存分配"><span>通过函数来检查内存分配</span></a></h2>
<p>同样是在 <strong>Profiles</strong> 面板中，选择 <strong>Record Allocation Profiler</strong>，通过它来展示 JavaScript 方法的内存分配情况。</p>
<p><img src="https://wd.imgix.net/image/admin/EiRjVwtHv1eh7idYWz37.png?auto=format&amp;w=1600" alt="Record Allocation Profiler"></p>
<ol>
<li>选中 <strong>Record Allocation Profiler</strong> 单选按钮。如果在页面中存在其他工作线程，可以在下拉选项中选择不同的线程。</li>
<li>点击 <strong>Start</strong> 开始录制。</li>
<li>接着在页面执行需要检查的操作。</li>
<li>在操作全部执行完成后，按 <strong>Stop</strong> 按钮结束录制。</li>
</ol>
<p>上面录制的结果，在 DevTools 可以展示在出现问题时 JavaScript 方法的内存分配情况。默认展示的是 <strong>Heavy(Bottom Up)</strong> 视图，从上到下依次展示占用内存最多的方法。</p>
<p><img src="https://wd.imgix.net/image/admin/bR7LtElQ59hH4L3DTpE4.png?auto=format&amp;w=1600" alt="Allocation profile"></p>
<h2 id="发现频繁的垃圾回收" tabindex="-1"><a class="header-anchor" href="#发现频繁的垃圾回收"><span>发现频繁的垃圾回收</span></a></h2>
<p>如果你的页面出现频繁的卡顿，可能就是垃圾回收的问题。</p>
<p>可以通过 Chrome Task Manager 或者 Timeline 的内存录制去发现哪里出现了频繁的垃圾回收。在 Task Manager 中，如果<strong>Memory</strong> 和 <strong>JavaScript Memory</strong> 值频繁的增加和减少，这就说明在频繁的进行垃圾回收。在 Timeline 录制中，JS 堆内存和节点数量的指示图如果在频繁的上升和下降，也说明在频繁的垃圾回收。</p>
<p>如果出现了问题，你可以通过 Allocation Timeline 录制来找到，在什么位置和哪个方法被分配了新内存。</p>
</div></template>


