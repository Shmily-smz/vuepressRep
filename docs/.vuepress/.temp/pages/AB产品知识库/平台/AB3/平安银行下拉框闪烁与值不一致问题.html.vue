<template><div><h3 id="问题描述" tabindex="-1"><a class="header-anchor" href="#问题描述"><span>问题描述</span></a></h3>
<p>平安银行反馈下拉框存在闪烁问题，偶发下拉框界面显示值与取到的值不一致问题现象如下</p>
<h5 id="闪烁问题" tabindex="-1"><a class="header-anchor" href="#闪烁问题"><span>闪烁问题：</span></a></h5>
<p>下拉框组件绑定 onfocus 事件后，鼠标点击下拉框时，下拉列表会先展开，然后收起，给操作员一种闪烁的感觉。</p>
<h5 id="偶发下拉框界面显示值与取到的值不一致问题" tabindex="-1"><a class="header-anchor" href="#偶发下拉框界面显示值与取到的值不一致问题"><span>偶发下拉框界面显示值与取到的值不一致问题：</span></a></h5>
<p>下拉框组件绑定 OnSelectionChanged 事件后，先对下拉框进行一次选择，再快速进行第二次选择时，偶发会出现还未选择完成，下拉列表自动收起，并显示在下拉框中，执行事件获取到的值为第一次的值，测试效果如下图。
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/1.png" alt="undefined"></p>
<h3 id="问题分析" tabindex="-1"><a class="header-anchor" href="#问题分析"><span>问题分析</span></a></h3>
<p>下面对这两个问题进行深入的分析</p>
<h5 id="闪烁问题-1" tabindex="-1"><a class="header-anchor" href="#闪烁问题-1"><span>闪烁问题：</span></a></h5>
<p>平台在调度界面事件时，为防止误操作，会把当前交易的所有组件都设置为不可用。事件执行完成后，平台会把当前交易的所有组件都还原为原状态。下拉框组件绑定 onfocus 事件后，当光标点击下拉时会先触发下拉列表下拉动作展开列表，然后再触发下拉框组件的 onfocus 事件，事件执行过程中，会设置下拉框组件为不可用，同时会把下拉列表收起。展现给柜员的表象为出现闪烁，即点击有 onfocus 事件的下拉框，下拉列表会先展开，然后收起。</p>
<h5 id="偶发下拉框界面显示值与取到的值不一致问题-1" tabindex="-1"><a class="header-anchor" href="#偶发下拉框界面显示值与取到的值不一致问题-1"><span>偶发下拉框界面显示值与取到的值不一致问题：</span></a></h5>
<p>平台在设计时，为保证 change 类事件的连续性，设计了一套 QUEUE_UPDATABLE 的事件模式，此模式适用于频繁改变的文本框改变事件与下拉框改变事件，触发之后会等待一个鼠标双击间隔（一般为 500 毫秒）再执行，如果用户连续操作，change 类事件持续发生，则在等待时间内只会执行最后一次的 change 事件。
下拉框组件选择的值会在下拉列表收起时，通过 SWT.Modify 事件同步到平台的 Model 中，QUEUE_UPDATABLE 事件模式允许先对下拉框进行一次选择，再快速进行第二次选择时，第二次选择恰巧与第一次的事件执行中时间一致，平台全局会拦截 SWT.Modify 的发送，出现值未同步问题。
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/2.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/3.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/4.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/5.png" alt="undefined">
通过以下简单交易可以重现该问题
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/6.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/7.png" alt="undefined"></p>
<h5 id="闪烁问题的修改导致值不一致概率增大问题" tabindex="-1"><a class="header-anchor" href="#闪烁问题的修改导致值不一致概率增大问题"><span>闪烁问题的修改导致值不一致概率增大问题：</span></a></h5>
<p>在本次问题处理过程中，由于前期修改只针对于闪烁问题的现象进行修复：
在平台事件执行过程中，防止下拉框设置为不可用导致下拉列表收起，保持下拉框组件为可用状态。
导致事件执行过程中还可以操作下拉框组件，操作后平台全局对 SWT.Modify 事件的拦截，出现交易界面中下拉框显示发生变化，但实际平台 Model 中存储的值未更新，进而增大了下拉框界面显示值与取到的值不一致问题出现的概率。
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/8.png" alt="undefined"></p>
<h3 id="修改方案" tabindex="-1"><a class="header-anchor" href="#修改方案"><span>修改方案</span></a></h3>
<p>经过深入的分析，平台原有事件执行机制、SWT.Modify 事件拦截机制、交易界面执行事件时设置不可用机制不可进行修改，需要从下拉框本身做好相应控制，修改方案如下：</p>
<h5 id="闪烁问题-2" tabindex="-1"><a class="header-anchor" href="#闪烁问题-2"><span>闪烁问题：</span></a></h5>
<p>还原上次对交易界面设置不可用时修改，在下拉框组件中修改为设置不可用时，不收起下拉列表，而设置下拉列表为不可用，经过简单测试，事件执行过程中，下拉列表未收回，但无法做选择操作
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/9.png" alt="undefined"></p>
<h5 id="偶发下拉框界面显示值与取到的值不一致问题-2" tabindex="-1"><a class="header-anchor" href="#偶发下拉框界面显示值与取到的值不一致问题-2"><span>偶发下拉框界面显示值与取到的值不一致问题：</span></a></h5>
<p>在下拉框弹出下拉列表时，每次对下拉列表的选择均同步到 Model 中，不仅仅依赖下拉列表收起时 SWT.Modify 事件的同步。同时在下拉列表的展开间隔上做限制，不允许在 QUEUE_UPDATABLE 事件模式的间隔内再次展开下拉列表。
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/10.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/11.png" alt="undefined"></p>
<h3 id="修改方案影响范围" tabindex="-1"><a class="header-anchor" href="#修改方案影响范围"><span>修改方案影响范围</span></a></h3>
<p>本次修改内容主要有下拉框的可用状态以及短时间内不能重复操作，会影响以下几个方面
若下拉框组件绑定的 onfocus 事件，有弹框等操作，下拉框会在失焦时收回下拉列表，需要评估是否影响用户体验
下拉框组件的下拉列表选择后，无法在一次鼠标间隔内再次选择，需要评估是否影响用户体验
另外，需要充分测试，验证已经解决上述问题。
附处理过程日志截图
存在全局的 busyfilter 时，可以看到交易繁忙时下拉列表收起，但值未同步到 model 中
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/12.png" alt="undefined">
下拉列表正常收回时，可以看到有 modify 事件触发
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/13.png" alt="undefined">
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/14.png" alt="undefined">
下拉列表在交易繁忙时收回，可以看到未触发 modify 事件，未同步值到 model
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/15.png" alt="undefined">
去除全局的 busyfilter 后
会出现值的修改在 onselectionchange 后触发，onselectionchange 事件当次取值是旧值，下一次再取值是新值的情况
<img src="@source/AB产品知识库/images/平台/AB3/平安银行下拉框闪烁与值不一致问题/16.png" alt="undefined">
日志中可以清晰的看到，先执行了事件，再同步了下拉框数据</p>
</div></template>


