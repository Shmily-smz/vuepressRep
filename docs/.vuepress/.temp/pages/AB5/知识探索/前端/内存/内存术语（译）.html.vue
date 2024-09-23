<template><div><p><a href="https://developer.chrome.com/docs/devtools/memory-problems/memory-101/" target="_blank" rel="noopener noreferrer">原文地址</a></p>
<p>这一节是对内存分析中公共的术语/名词进行解释，这些术语在其他编程语言的内存分析工具中也是相似的。</p>
<p>这些术语和概念都是在<a href="https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/" target="_blank" rel="noopener noreferrer">录制内存快照</a>一节中被使用的。如果你曾经从事过Java、.NET或者其他语言的内存分析工作，Chrome的内存分析与他们是类似的，在后面的阅读中可能会唤起曾经的记忆。</p>
<h2 id="object-sizes-对象尺寸" tabindex="-1"><a class="header-anchor" href="#object-sizes-对象尺寸"><span>Object sizes（对象尺寸）</span></a></h2>
<p>想象内存是一张图，这张图由原始类型（比如数字和字符串）和引用类型（比如对象和数组）的数据组成。如果用一个数字代表一个数据，用线表示数据间的引用，那么内存可以直观的表示为由线将各个数字进行连接的一张图，如下图：</p>
<p><img src="https://wd.imgix.net/image/admin/DJLnkpJzkDTH5Kq1ZL02.png?auto=format" alt="memory graph"></p>
<p>一个对象能存在内存中，有以下两种方式：</p>
<ul>
<li>直接引用这个对象本身。</li>
<li>间接的被其他对象所引用，由于其他对象还持有这个对象的引用，所以会阻止垃圾回收功能的自动清除。</li>
</ul>
<blockquote>
<p>译者注：浏览器会定期自动执行垃圾回收功能，垃圾回收的作用可以将没有被引用的对象从内存中清除，从而释放内存。垃圾回收英文叫做<code v-pre>garbage collector</code>，简称：<code v-pre>GC</code>。</p>
</blockquote>
<p>当使用Chrome的内存分析工具（一个用于研究内存问题的工具，在DevTools的Profiles选项卡中）时，你会发现每一列显示的信息是不同的。这里会发现两个特殊的列，一个是<strong>Shallow Size</strong>，另一个是<strong>Retained Size</strong>，那么这来两列的信息是什么含义呢？</p>
<p><img src="https://wd.imgix.net/image/admin/lh4dEARsXXwAEL30wA5p.png?auto=format&amp;w=1428" alt="devtools-profiles"></p>
<blockquote>
<p>译者注：新版本Chrome浏览器的DevTools中使用<code v-pre>Memory</code>替代了<code v-pre>Profiles</code>，使用<code v-pre>Performance</code>替代了<code v-pre>Timeline</code>。</p>
</blockquote>
<h3 id="shallow-size-浅尺寸" tabindex="-1"><a class="header-anchor" href="#shallow-size-浅尺寸"><span>Shallow size（浅尺寸）</span></a></h3>
<p><code v-pre>Shallow size</code>，浅尺寸，表示一个对象自身在内存中所占的大小。</p>
<p>JavaScript对象的一个特点就是会预留一些内存去存放这些对象的描述和立即值。通常只有数组和字符串类型会有一个很大的浅尺寸。然而，字符串和外部的数组主要被存储的渲染器内存中，在JavaScript的内存中，仅仅暴露出一个很小的包装对象。</p>
<p>渲染器内存表示当前进程的所有内存，当我们检查一个已经被渲染完成的页面时，渲染器内存表示：原生内存 + 当前页面的JS堆内存 + 在当前页面启动的所有工作线程的JS堆内存。然而，即使一个很小的对象也能间接的引用占用大量内存的对象，从而阻止垃圾回收将这些占用大量内存的对象清除掉。</p>
<blockquote>
<p>译者注：立即值（Immediate Value），An immediate value (or simply an immediate or imm) is a piece of data that is stored as part of the instruction itself instead of being in a memory location or a register. Immediate values are typically used in instructions that load a value or performs an arithmetic or a logical operation on a constant.</p>
</blockquote>
<h3 id="retained-size-保留尺寸" tabindex="-1"><a class="header-anchor" href="#retained-size-保留尺寸"><span>Retained size（保留尺寸）</span></a></h3>
<p><code v-pre>Retained size</code>，保留尺寸，一个对象自身被清除后，被这个对象直接或间接引用的其他对象，如果无法从GC根访问到，也会被清除，这些被清理的对象所释放的总内存大小，就是保留尺寸。</p>
<blockquote>
<p>译者注：也就是如果一个对象A被清除了，A所引用的对象B如果只被A引用，那么A清除后就没有其他对象引用这个B，所以B也会被清除，那么保留尺寸的大小就是：A + B；但如果B还被其他对象引用，那么保留尺寸就是：A。GC根为：GC roots，至于什么是GC roots下面会讲。</p>
</blockquote>
<p>GC根（GC roots）由很多句柄组成，这些句柄在V8引擎外的浏览器原生代码中引用了JavaScript对象后被创建（可以通过本地或者全局创建）。所有的句柄都能在内存快照中，通过<strong>GC roots &gt; Handle scope</strong>和<strong>GC roots &gt; Global handles</strong>被找到。在这里如果不深入了解浏览器的实现细节可能会对句柄的描述产生困惑。但实际上对于GC根和句柄来说即使不了解，也不需要担心。</p>
<p>对于许多浏览器内部的GC根，其实用户并不关心。从应用的角度出发有几种根节点：</p>
<ul>
<li>全局窗口对象（Window global object）。存在于每个iframe中。在内存堆快照中的<code v-pre>distance</code>字段是一个数字，用来表示对象到全局窗口对象所引用的最短路径。</li>
<li>文档DOM树（Document DOM tree）由遍历页面document能访问到的所有原生DOM节点组成。如果DOM节点被JS所包装，那么只要这个包装函数存在，这个document文档对象就一直存在。</li>
<li>有时候对象可能会被调试器的上下文（debugger context）和控制台（DevTools console）所引用。所以抓取内存堆快照需要先清空控制台，如果在debugger模式下，确保没有断点被激活。</li>
</ul>
<p>回忆下文章开头，我们说内存可以看作一个由数字和线连接的一个图。这个内存图从一个根节点开始，在浏览器中这个根节点可能是<code v-pre>Window</code>，在Node.js中这个根节点可能是<code v-pre>Global</code>。但根节点的垃圾回收是无法人为控制的。</p>
<p><img src="https://wd.imgix.net/image/admin/j931F7akeLF5NYMv5QYT.png?auto=format&amp;w=956" alt="memory-graph-from-root"></p>
<p>任何无法被根节点访问到的都会被垃圾回收。</p>
<blockquote>
<p>注意：Shallow size 和 Retained size列所显示的数据单位是字节。</p>
</blockquote>
<h2 id="objects-retaining-tree-对象保留树" tabindex="-1"><a class="header-anchor" href="#objects-retaining-tree-对象保留树"><span>Objects retaining tree（对象保留树）</span></a></h2>
<p>内存堆是一个将对象连接起来的大网。在数学概念来说，可以把这个结构叫做“图”或“内存图”。无数的节点通过两条线连接起来，就组成了我们所说的“图”，节点和线各自会有一个标签。</p>
<ul>
<li>节点（Nodes or objects）的标签是创建这个节点对象的构造函数名。</li>
<li>线（Edges）表示节点的属性名。</li>
</ul>
<p>其他章节会介绍<a href="https://developer.chrome.com/docs/devtools/memory-problems/heap-snapshots/" target="_blank" rel="noopener noreferrer">如何使用工具记录内存堆快照</a>。通过下面分析结果，我们可以看到一些引人注目的数据，比如：<code v-pre>distance</code>（表示对象到GC根的引用距离）。如果几乎所有相同类型的对象都有同样的距离，而极少数对象有更大的距离，那么这是一个值得研究的问题。</p>
<h2 id="domainators-支配者" tabindex="-1"><a class="header-anchor" href="#domainators-支配者"><span>Domainators（支配者）</span></a></h2>
<p>因为每个对象都有有一个确切的支配者，所以这些对象支配者会组成一个树状的结构。一个对象的支配者可能不直接引用这个对象，由于引用关系非常多，所以一个支配者的树形结构图是没有范围和边界的。</p>
<p>在下面的图中：</p>
<ul>
<li>节点1支配节点2</li>
<li>节点2支配节点3、节点4和节点6</li>
<li>节点3支配节点5</li>
<li>节点5支配节点8</li>
<li>节点6支配节点7</li>
</ul>
<p><img src="https://wd.imgix.net/image/admin/5IkAzbiOC1UqGJHqHBxe.png?auto=format&amp;w=550" alt="Domainator-tree-structure"></p>
<p>在下面的例子中，节点<code v-pre>#3</code>是<code v-pre>#10</code>的支配者，但是从GC到<code v-pre>#10</code>的简单路径中也存在<code v-pre>#7</code>，那么<code v-pre>#7</code>也是<code v-pre>#10</code>的支配者。所以，如果一个对象B存在于GC到对象A的简单路径中，那么B就是A的支配者。</p>
<p><img src="https://wd.imgix.net/image/admin/zh4nucauCn5WkDElv9MZ.gif?auto=format&amp;w=1428" alt="animated-domainator-illustration"></p>
<h2 id="v8-specifics-v8细节" tabindex="-1"><a class="header-anchor" href="#v8-specifics-v8细节"><span>V8 specifics（V8细节）</span></a></h2>
<p>一个正确的查看内存堆快照的的方式，在我们分析内存的时候是非常有用的。这一部分会详细的介绍在<strong>JavaScroipt的V8虚拟机</strong>中一些内存相关的部分。</p>
<h3 id="javascript-object-representation-javascript对象描述" tabindex="-1"><a class="header-anchor" href="#javascript-object-representation-javascript对象描述"><span>JavaScript object representation（JavaScript对象描述）</span></a></h3>
<p>在JavaScript中有3个原始类型的对象：</p>
<ul>
<li>数字（如：3.14159..）</li>
<li>布尔值（true和false）</li>
<li>字符串（如：'Werner Heisenberg'）</li>
</ul>
<p>这3种类型的数据不能引用其他的值，他们只能作为树状结构最外层的叶子或者叫做末尾的节点。</p>
<p><strong>数字</strong>的存储方式有两种：</p>
<ul>
<li>一种是作为31位整数的立即值，叫做<strong>小整型</strong>（small integers，简称：SMIs）。</li>
<li>另一种是被<strong>堆数字</strong>引用的堆对象。堆数字用来存储不能转为小整型的值，比如：双精度数据和需要修改原型的对象。</li>
</ul>
<p><strong>字符串</strong>也有两种存储方式：</p>
<ul>
<li>一种是保存在<strong>虚拟机内存</strong>中。</li>
<li>另一个中保存在外部的渲染器内存中。一个包装对象的创建和使用都是在虚拟机外部存储的，比如：脚本源代码内容和通过网络请求的内容，这种是不回被复制到虚拟机内存中的。</li>
</ul>
<p>新的JavaScript对象在被创建时所需要的内存空间是从专门的JavaScript内存（或者是虚拟机内存）中分配的。因此这些对象都被V8引擎的垃圾回收管理着，如果一个对象至少被一个无法清除的对象所引用，那么这个对象将永远存活在内存中而不会被释放。</p>
<p><strong>原生对象</strong></p>
<p>所有的原生对象都不占用JavaScript内存。原生对象与我们说的JavaScript内存对象是不同的，原生对象贯穿整个浏览器的生命周期而不被V8引擎的垃圾回收系统管理。这些原生对象我们无法直接读取和调用，只能通过他们的JavaScript包装对象间接的使用。</p>
<p><strong>组合字符串</strong></p>
<p>组合字符串是由一组字符串拼接而成的一个对象。这种拼接只在一些需要的情况下才会触发。比如需要将一个子字符串与另一个字符串结合起来的时候。</p>
<p>下面来看一个更具体例子，如果你需要把字符串<strong>a</strong>和<strong>b</strong>连接起来，我们将他们组合后结果，用string(a, b)表示。接下来，你要把字符串<strong>d</strong>跟上面的结果连接到一起，那么最终得到的连接字符串就是string((a, b), d)。</p>
<p><strong>数组</strong></p>
<p>数组也是Object，可以理解为数组中的key都是数字（比如：0、1、2...），而数组中的值是value，只不过key默认被省略了。在V8虚拟机中存储大数据的时候通常都是采用的数组。像字典一样通过键-值对去使用，然后通过数组来备份这些数据。</p>
<p>一个典型的JavaScript对象可以通过两种数组类型被存储：</p>
<ul>
<li>具名的属性</li>
<li>通过数字按照顺序的排列</li>
</ul>
<p>在一些情况下，存在属性上的小数字，会直接存储在JavaScript对象的内部。</p>
<p><strong>Map</strong></p>
<p>Map是一个存放各种对象，并且可以排列他们的对象。比如：map被用来表示<a href="https://chromium.googlesource.com/external/github.com/v8/v8.wiki/+/60dc23b22b18adc6a8902bd9693e386a3748040a/Design-Elements.md" target="_blank" rel="noopener noreferrer">快速属性访问</a>内部对象的体系。</p>
<h3 id="object-groups-对象组" tabindex="-1"><a class="header-anchor" href="#object-groups-对象组"><span>Object groups（对象组）</span></a></h3>
<p>每个原生对象组由互相引用的对象组成。思考下面的例子：每个子的DOM树都有一个连接指向父DOM节点，还有其他连接指向子节点和下一个兄弟节点，这样无数的DOM节点就组成了一个图。注意原生对象不占据JavaScript内存空间，这也是为什么原生对象在JavaScript内存中占用空间大小是0的原因。但是基于原生对象创建的包装对象是占用JavaScript内存的。</p>
<p>每个包装对象都持有一个与之对应的原生对象的引用，这样JavaScript就可以通过包装对象间接的操作原生对象。说回到对象组，一个对象组就引用着包装对象。但是这并不能产生无法被回收的循环，GC是非常聪明的，他能精准的找到不被引用的包装器并进行清除。但是，如果我们忘记清除了一个包装器，那么持有这个包装器引用的整个对象组以及与其相关的包装器，他们的内存空间都不会被释放。</p>
</div></template>


