<template><div><h3 id="_1-mvel执行方式" tabindex="-1"><a class="header-anchor" href="#_1-mvel执行方式"><span>1. MVEL执行方式</span></a></h3>
<p>MVEL执行方式主要分为解释执行、编译执行两种方式，编译执行又分为基于模板方式及预编译执行方式。</p>
<p>⑴解释执行：
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/1.png" alt="图片描述"></p>
<p>⑵基于模板：
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/2.png" alt="图片描述"></p>
<p>⑶预编译执行：
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/3.png" alt="图片描述"></p>
<p>模板执行方式一般用于根据模板动态生成内容，由于AB4.0中技术组件中的表达式主要用于进行一些简单计算及取某些属性数据，所以可采用解释执行或预编译执行方式。目前AB4.0中MVEL采用解释执行方式，效率不高，因此本次针对预编译执行方式进行了一些技术层面的学习及验证。</p>
<h3 id="_2-mvel编译执行优化器" tabindex="-1"><a class="header-anchor" href="#_2-mvel编译执行优化器"><span>2. MVEL编译执行优化器</span></a></h3>
<p>编译执行时，主要分为编译及执行两个步骤，编译时会将表达式先通过词法分析器、语义及语法分析器进行解析形成AST树。执行时可选择使用反射优化器或者ASM优化器进行执行，默认使用动态优化器执行，动态优化器即根据表达式的执行频度决定使用反射优化器或者ASM优化器。
反射优化器：即根据表达式内容通过ClassLoader获取相关类信息，使用反射方式调用Java类中的方法或属性。
ASM优化器：根据表达式内容，使用JVM字节码操作指令方式动态生成class，并进行调用。
编译执行51次后报错问题解决：之前碰到一个表达式预编译执行51次后就开始报错，经过分析发现是由于默认的动态优化器根据表达式执行频度决定使用不同优化器，在100毫秒内超过51次调用则使用ASM优化器。
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/4.png" alt="图片描述"></p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/5.png" alt="图片描述"></p>
<p>ASM优化器在访问属性时先判断相应PropertyHandler是否为ProducesByteCode的实现类，如果是则调用其produceBytecodeGet方法，如果不是则抛出异常，因此在注册对象的PropertyHandler时需要对应的PropertyHandler实现ProducesBytecode接口即可解决报错问题。
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/6.png" alt="图片描述"></p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/7.png" alt="图片描述"></p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/8.png" alt="图片描述"></p>
<h3 id="_3-mvel执行性能" tabindex="-1"><a class="header-anchor" href="#_3-mvel执行性能"><span>3. MVEL执行性能</span></a></h3>
<p>解释执行与编译执行性能对比</p>
<p>||执行次数||50||150||500||1000||10000||100000||1000000||10000000||
||解释执行(ms)||108||114||133||147||211||805||6264||61203||
||编译执行(ms)||34||34||32||33||39||89||563||5686||</p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/9.png" alt="图片描述"></p>
<p>编译执行时一次编译与多次编译性能对比</p>
<p>||执行次数||50||150||500||1000||10000||100000||1000000||10000000||
||每次编译||104||120||340||577||4443||42829||||||
||一次编译||65||64||67||71||76||126||594||5473||</p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/10.png" alt="图片描述"></p>
<h3 id="_4-不同优化器之间的性能差异" tabindex="-1"><a class="header-anchor" href="#_4-不同优化器之间的性能差异"><span>4. 不同优化器之间的性能差异</span></a></h3>
<p>||执行次数||50||150||500||1000||10000||100000||1000000||10000000||
||Reflective||42||43||45||48||54||106||581||5259||
||ASM||7||8||8||9||14||62||533||5226||</p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/11.png" alt="图片描述"></p>
<h3 id="_5-目前已解决及存在问题" tabindex="-1"><a class="header-anchor" href="#_5-目前已解决及存在问题"><span>5. 目前已解决及存在问题</span></a></h3>
<p>本次验证过程中在将解释执行改为编译执行方式后有一些表达式测试案例执行错误，目前3个错误一个失败案例，修改前后案例执行对比如下：
<img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/12.png" alt="图片描述"></p>
<p><img src="@source/AB产品知识库20240403/images/平台/AB4/运行时/MVEL编译执行技术验证/13.png" alt="图片描述"></p>
<p>已解决问题：
  a循环次数超过51次时异常；
  b反射优化器及ASM优化器执行时找不到方法问题；
  c编译执行时表达式list = new java.util.ArrayList()无法创建list变量问题；
  d表达式varMap().xx.equals(varMap().testKey)报错位置问题。
未解决问题：
  a表达式(varMap().xx).equals(varMap().testKey)当varMap().xx为空时报错位置问题；
  b java.lang.ArrayStoreException: java.lang.String异常；
  c Error: unbalanced braces异常。</p>
<h3 id="_6-验证结果" tabindex="-1"><a class="header-anchor" href="#_6-验证结果"><span>6. 验证结果</span></a></h3>
<p>预编译执行方式性能优于解释执行方式，在预编译执行时，每次编译时性能较差，如应用预编译，需要对编译结果对象进行全局缓存，要考虑内存问题。编译执行时使用反射与ASM优化器的性能区别并不大。</p>
<p>从代码设计场景看，理论上反射优化器比ASM优化器效率应该要高，但从目前验证结果看反射优化器与ASM优化器差异并不大，是否验证场景的问题？</p>
</div></template>


