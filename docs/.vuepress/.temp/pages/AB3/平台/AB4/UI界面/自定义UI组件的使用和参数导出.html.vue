<template><div><h3 id="_1、问题描述" tabindex="-1"><a class="header-anchor" href="#_1、问题描述"><span>1、问题描述</span></a></h3>
<p>平台的部分画面组件的实现用的是自定义UI组件。
Ø 对于交易开发人员来说，痛点在于，在ide中没有相关的参数说明和事件类型，导致自定义的UI组件使用方法不清晰，需要整理出相关的可设置参数和可绑定的事件类型。由平台开发人员告知交易开发人员的使用方法，并且交易开发人员只能通过文本方式进行编辑，无法可视化开发，影响开发效率。
Ø 对于平台开发人员来说，痛点在于，想了解目前平台有哪些UI组件，这些UI组件有哪些属性以及哪些事件，只能看源码。
基于以上两点，开发了自定义UI组件的导出功能。</p>
<h3 id="关于自定义ui组件的使用" tabindex="-1"><a class="header-anchor" href="#关于自定义ui组件的使用"><span>关于自定义UI组件的使用</span></a></h3>
<h3 id="一、在ide中使用" tabindex="-1"><a class="header-anchor" href="#一、在ide中使用"><span>一、在IDE中使用</span></a></h3>
<p>在ide的abf4a文件中只有基础组件的支持了拖拉拽，可以看到相应的组件参数配置和事件绑定类型，还提供了自定义组件这个口子让新增的画面组件能实现调用。如图所示，可以在拖拽出一个自定义组件后通过配置名称，注册上相应的feature，这样就可以调到gui.adore插件上对应的feature,从而实现画面组件的展示。
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/1.png" alt="图片描述">
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/2.png" alt="图片描述"></p>
<h3 id="二、注册feature扩展" tabindex="-1"><a class="header-anchor" href="#二、注册feature扩展"><span>二、注册feature扩展</span></a></h3>
<p>在gui.adore这个工程中有相应的扩展点注册，开发一个新的ui组件，需要注册相应的feature层，无论是普通组件还是自定义的组件都一样。
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/3.png" alt="图片描述"></p>
<h3 id="三、在ide中配置自定义组件的属性" tabindex="-1"><a class="header-anchor" href="#三、在ide中配置自定义组件的属性"><span>三、在IDE中配置自定义组件的属性</span></a></h3>
<p>自定义组件的属性配置一般是通过在abf4a文件中写entry实现配置。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;Entry key="triggerByHover" type="Boolean" value="false"/></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h3 id="四、在view类中处理相应属性" tabindex="-1"><a class="header-anchor" href="#四、在view类中处理相应属性"><span>四、在View类中处理相应属性</span></a></h3>
<p>在相应的view文件中可以从uimodel中取到值实现调用。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">public void refresh(String key) {</span>
<span class="line">super.refresh(key);</span>
<span class="line">if (key == null || "triggerByHover".equals(key)) {</span>
<span class="line">Boolean isHover = (Boolean) getModel().getValue("triggerByHover");</span>
<span class="line">drawer.triggrtByHover(isHover);</span>
<span class="line">}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="五、在ide中配置自定义组件的事件" tabindex="-1"><a class="header-anchor" href="#五、在ide中配置自定义组件的事件"><span>五、在IDE中配置自定义组件的事件</span></a></h3>
<p>abf4a文件自定义组件的事件配置:</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">&lt;Entrykey="OnClick"type="Flow"value="/AppFramework_AdoreDemo/trade/widget/DrawerMenu/DrawerMenu_OnClick.lfc"></span>
<span class="line">    &lt;Mappings path="/AppFramework_AdoreDemo/trade/widget/DrawerMenu/DrawerMenu.abf4a"/></span>
<span class="line">&lt;/Entry></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="六、事件处理" tabindex="-1"><a class="header-anchor" href="#六、事件处理"><span>六、事件处理</span></a></h3>
<p>在相应的Java层有相应的监听通过createMission实现事件的绑定并put相应的参数出去，可在绑定事件中通过inArgMap().xxx来获取相应的组件触发响应事件回参。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">IEventListener eventListener = new IEventListener() {</span>
<span class="line">@Override</span>
<span class="line">public void handleEvent(Event event) {</span>
<span class="line"> </span>
<span class="line">String item = (String) event.getValue("item");</span>
<span class="line">if (item != null) {</span>
<span class="line">getHost().getModel().setValue(TEXT, item);</span>
<span class="line">IMission mission = createDomainPanelMission(IUIEventConstants.ON_CLICK);</span>
<span class="line">mission.putArg("item", item);</span>
<span class="line">getHost().getDomainPanel().queueTaskPack(</span>
<span class="line">New MissionTaskPack(getHost().getDomainPanel(),mission), QueueType.MAJOR);</span>
<span class="line">}</span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意： 新增或修改UI组件属性或者事件或者事件参数，都要gui.adore的来扩展exportWidgetAttribute中做相应的修改和说明</strong></p>
<h3 id="七、组件方法调用" tabindex="-1"><a class="header-anchor" href="#七、组件方法调用"><span>七、组件方法调用</span></a></h3>
<p>关于ui组件的view层方法的调用是通过控件执行方法获得返回这个技术组件来实现反射调用的，新增view层的控件方法，需要拷贝abc\configuration\ControllerCallMethodConfig.xml到ide的configuration\skeleton\techConfigs目录下，这样下拉就会出现新增的相应方法。
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/4.png" alt="图片描述"></p>
<h3 id="自定义ui组件的参数导出" tabindex="-1"><a class="header-anchor" href="#自定义ui组件的参数导出"><span>自定义UI组件的参数导出</span></a></h3>
<p>通过上面关于自定义组件的使用说明，知道交易开发中不清楚的点在于有啥自定义组件，这个组件有啥功能怎么串起来，所以在仓库的代码托管中有master\ab\AppFramework_AdoreDemo\trade\widget目录下存放实现的自定义组件的测试交易（注意：新增ui组件最好放一下，方便其他人调试）。还需要一个关于可以配置内容的说明。
exportWidgetAttribute扩展点定义如下图：
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/5.png" alt="图片描述">
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/6.png" alt="图片描述"></p>
<h3 id="一、导出customwidget-xml" tabindex="-1"><a class="header-anchor" href="#一、导出customwidget-xml"><span>一、导出customWidget.xml</span></a></h3>
<p>导出自定义组件发现已经有小伙伴搞过了。在GuiView.java初始化加载Feature扩展点的时候启动一个线程去在abc的目录上写一个xml文件,在WidgetAttributeXMLExporter这个类中实现</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">protected void initFeatureRegistry() {</span>
<span class="line">  ......</span>
<span class="line">  new WidgetAttributeXMLExporter().export();  </span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/7.png" alt="图片描述">
但是导出的customWidget.xml文件是打算给ide开发用的，对于组件使用说明来说，缺少了事件的出参这个element，所以改一下exportWidgetAttribute.exsd这个文件，在event这个element上加上一个叫outArg的sequence。
导出的customWidget.xml文件是需要放到ide中使用的，这样才能方便交易开发人员开发交易。具体做法如下：</p>
<ol>
<li>ABC中生成的customWidget.xml在configuration目录下，将其拷贝到ABS的ideResources/skeleton/platform目录下。</li>
<li>启动ABS。并在ide中”同步ABS配置资源”，如下图
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/8.png" alt="图片描述">
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/9.png" alt="图片描述"></li>
<li>重新在ide中打开abf4a文件，在视图的左侧就会有”自定义组件”，如下图
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/10.png" alt="图片描述"></li>
<li>当你从左侧拖动自定义组件到右侧时，组件的相关属性和事件也都可以进行可视化编辑，如下图：
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/11.png" alt="图片描述">
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/12.png" alt="图片描述">
这样的话，解决了交易开发人员的痛点。平台新增或修改了一个UI组件后，就可以不用ABIDE开发人员支持了。</li>
</ol>
<h3 id="二、导出自定义组件整理-xls" tabindex="-1"><a class="header-anchor" href="#二、导出自定义组件整理-xls"><span>二、导出自定义组件整理.xls</span></a></h3>
<p>为了让平台开发人员能够快速了解UI组件的种类及其属性和事件，我们在WidgetAttributeXMLExporter中读扩展点并导出到abc的configuration目录下的一个excel文件(自定义组件整理.xls)中。</p>
<div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">private void createCustomWidgetxsl() {</span>
<span class="line">File file = new File(ABPlatform.getConfigurationLocation(), "自定义组件整理.xls");</span>
<span class="line">    ......</span>
<span class="line">    </span>
<span class="line">}</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/13.png" alt="图片描述">
<img src="@source/AB3/images/平台/AB4/UI界面/自定义UI组件的使用和参数导出/14.png" alt="图片描述">
这样的话，平台开发人员就能够通过这个excel文件来查看平台UI组件的种类及其属性和事件了，解决了平台开发人员的痛点。
<strong><strong>注意：新增UI组件也需要在gui.adore的来扩展exportWidgetAttribute中做相应的修改和说明</strong></strong></p>
<h3 id="_2、思考延伸" tabindex="-1"><a class="header-anchor" href="#_2、思考延伸"><span>2、思考延伸</span></a></h3>
<p>新增自定义组件，或者修改现有组件的属性或事件的情况下，为了同步修改内容到customWidget.xml和自定义组件整理.xls文件中，需要新增或者修改哪个扩展？</p>
</div></template>


