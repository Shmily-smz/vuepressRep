<template><div><h1 id="ab-plugin-aft-前端-aft-类组件" tabindex="-1"><a class="header-anchor" href="#ab-plugin-aft-前端-aft-类组件"><span>ab-plugin-aft @前端 AFT 类组件</span></a></h1>
<h2 id="_1-引入" tabindex="-1"><a class="header-anchor" href="#_1-引入"><span>1. 引入</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> Aft <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">'@agree/ab-plugin-aft'</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div></div></div><h2 id="_2-使用" tabindex="-1"><a class="header-anchor" href="#_2-使用"><span>2. 使用</span></a></h2>
<h3 id="_2-1-printpreviewxmlstring-xml-打印预览" tabindex="-1"><a class="header-anchor" href="#_2-1-printpreviewxmlstring-xml-打印预览"><span>2.1 printPreviewXmlString --xml 打印预览</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> xmlString <span class="token operator">=</span> <span class="token template-string"><span class="token template-punctuation string">`</span><span class="token string">&lt;xml?XXXXXX></span><span class="token template-punctuation string">`</span></span> <span class="token comment">//打印xml入参</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printPreviewXmlString</span><span class="token punctuation">(</span>xmlString<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>xmlString</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>打印 xml 字符串入参</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>预览页面的 url</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printPreviewXmlString(xmlString)</font></blockquote>
<hr>
<h3 id="_2-2-printwordpreview-word-打印预览" tabindex="-1"><a class="header-anchor" href="#_2-2-printwordpreview-word-打印预览"><span>2.2 printWordPreview --word 打印预览</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'d://test.docx'</span> <span class="token comment">//word文件路径</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printWordPreview</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>word 文件路径</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printWordPreview(path)</font></blockquote>
<hr>
<h3 id="_2-3-printexcelpreview-excel-打印预览" tabindex="-1"><a class="header-anchor" href="#_2-3-printexcelpreview-excel-打印预览"><span>2.3 printExcelPreview --excel 打印预览</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'d://test.xlsx'</span> <span class="token comment">//excel文件路径</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printExcelPreview</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>excel 文件路径</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>&quot;true&quot;</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printExcelPreview(path)</font></blockquote>
<hr>
<h3 id="_2-4-parseaft-解析-aft-文件" tabindex="-1"><a class="header-anchor" href="#_2-4-parseaft-解析-aft-文件"><span>2.4 parseAft --解析 aft 文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'www/test.aft'</span> <span class="token comment">//aft资源文件路径</span></span>
<span class="line"><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">account</span><span class="token operator">:</span> <span class="token string">'1,230.00'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">'test'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">namelist</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'hg'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sexual</span><span class="token operator">:</span> <span class="token string">'male'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'29'</span></span>
<span class="line">    <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token punctuation">{</span></span>
<span class="line">      <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">'ly'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">sexual</span><span class="token operator">:</span> <span class="token string">'famle'</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token literal-property property">age</span><span class="token operator">:</span> <span class="token string">'18'</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">huangguan</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'123'</span><span class="token punctuation">,</span> <span class="token string">'456'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">male</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'nan'</span><span class="token punctuation">,</span> <span class="token string">'nv'</span><span class="token punctuation">,</span> <span class="token string">'other'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//映射mapping</span></span>
<span class="line"><span class="token keyword">let</span> controlParam <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">notRepeatPrintHeaderFooter</span><span class="token operator">:</span> <span class="token string">'6,10'</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">parseAft</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> map<span class="token punctuation">,</span> controlParam<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>aft 资源文件路径</td>
</tr>
<tr>
<td>map</td>
<td>obj</td>
<td>√</td>
<td>x</td>
<td>映射 mapping</td>
</tr>
<tr>
<td>controlParam</td>
<td>obj</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.transferContent</td>
<td>string</td>
<td>解析后的 xml 字符串</td>
</tr>
<tr>
<td>res.totalHeight</td>
<td>string</td>
<td>解析后 xml 的高度</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.parseAft(path, map, controlParam)</font></blockquote>
<hr>
<h3 id="_2-5-parsemultipageaft-解析循环打印文件" tabindex="-1"><a class="header-anchor" href="#_2-5-parsemultipageaft-解析循环打印文件"><span>2.5 parseMultiPageAft --解析循环打印文件</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'/www/FCClient/print/1/T00401017.aft'</span> <span class="token comment">//aft资源文件路径</span></span>
<span class="line"><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//[序号，扣款日期，待报解账户，批次号，证件号码，姓名，扣款账号，扣款金额，扣款结果]</span></span>
<span class="line">    <span class="token literal-property property">tablePrintSerach_Id</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'20200518'</span><span class="token punctuation">,</span> <span class="token string">'371342289'</span><span class="token punctuation">,</span> <span class="token string">'23023'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'20200519'</span><span class="token punctuation">,</span> <span class="token string">'222222223'</span><span class="token punctuation">,</span> <span class="token string">'234023'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'20200511'</span><span class="token punctuation">,</span> <span class="token string">'2122222313'</span><span class="token punctuation">,</span> <span class="token string">'23423'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'20200512'</span><span class="token punctuation">,</span> <span class="token string">'2132222122'</span><span class="token punctuation">,</span> <span class="token string">'23423'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'5'</span><span class="token punctuation">,</span> <span class="token string">'20200513'</span><span class="token punctuation">,</span> <span class="token string">'213222222'</span><span class="token punctuation">,</span> <span class="token string">'23'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'6'</span><span class="token punctuation">,</span> <span class="token string">'20200514'</span><span class="token punctuation">,</span> <span class="token string">'213222214'</span><span class="token punctuation">,</span> <span class="token string">'2023'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'7'</span><span class="token punctuation">,</span> <span class="token string">'20200515'</span><span class="token punctuation">,</span> <span class="token string">'2132222412'</span><span class="token punctuation">,</span> <span class="token string">'234223'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'8'</span><span class="token punctuation">,</span> <span class="token string">'20200516'</span><span class="token punctuation">,</span> <span class="token string">'212222342'</span><span class="token punctuation">,</span> <span class="token string">'2343'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'9'</span><span class="token punctuation">,</span> <span class="token string">'20200516'</span><span class="token punctuation">,</span> <span class="token string">'212222342'</span><span class="token punctuation">,</span> <span class="token string">'2343'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'0'</span><span class="token punctuation">,</span> <span class="token string">'20200516'</span><span class="token punctuation">,</span> <span class="token string">'212222342'</span><span class="token punctuation">,</span> <span class="token string">'2343'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//映射mapping</span></span>
<span class="line"><span class="token keyword">let</span> para <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> prtRes <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">parseMultiPageAft</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> map<span class="token punctuation">,</span> para<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>aft 资源文件路径</td>
</tr>
<tr>
<td>map</td>
<td>obj</td>
<td>√</td>
<td>x</td>
<td>映射 mapping</td>
</tr>
<tr>
<td>para</td>
<td>obj</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>array</td>
<td>解析后的 xml 字符串数组</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.parseMultiPageAft(path, map, para)</font></blockquote>
<hr>
<h3 id="_2-6-combineandclipaft-拼接并分割已解析好的-aft-字符串-合并多个利用-parseaftcommandhandler-解析出的-xml-字符串-根据参数切割并返回可供打印的-xml-字符串-list" tabindex="-1"><a class="header-anchor" href="#_2-6-combineandclipaft-拼接并分割已解析好的-aft-字符串-合并多个利用-parseaftcommandhandler-解析出的-xml-字符串-根据参数切割并返回可供打印的-xml-字符串-list"><span>2.6 combineAndClipAft --拼接并分割已解析好的 aft 字符串，合并多个利用 ParseAftCommandHandler 解析出的 Xml 字符串.根据参数切割并返回可供打印的 xml 字符串 List</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftXmls <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prtlist <span class="token comment">//解析好的aft字符串List 必输</span></span>
<span class="line"><span class="token keyword">let</span> gaps <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'2'</span><span class="token punctuation">]</span> <span class="token comment">//合并时每页面之间域的间距List 必输</span></span>
<span class="line"><span class="token keyword">let</span> insertElemMarginTop <span class="token operator">=</span> <span class="token string">'15'</span> <span class="token comment">//insertXml插入新页时距离顶部的偏移量 undefined时视作0</span></span>
<span class="line"><span class="token keyword">let</span> insertElemMarginBottom <span class="token operator">=</span> <span class="token string">'5'</span> <span class="token comment">//insertXml插入新页时底部距离下一field的偏移量,insertXml为空时可视作页面顶部偏移量 必输</span></span>
<span class="line"><span class="token keyword">let</span> insertXml <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token comment">//每次换页时在头部插入的aft Xml String,可以为null</span></span>
<span class="line"><span class="token keyword">let</span> clipThreshold <span class="token operator">=</span> <span class="token string">'250'</span> <span class="token comment">//切割切割限制,合并时位置超出此高度的域会被加入下页的大小</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">combineAndClipAft</span><span class="token punctuation">(</span>aftXmls<span class="token punctuation">,</span> gaps<span class="token punctuation">,</span> insertElemMarginTop<span class="token punctuation">,</span> insertElemMarginBottom<span class="token punctuation">,</span> insertXml<span class="token punctuation">,</span> clipThreshold<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftXmls</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>解析好的 aft 字符串 List</td>
</tr>
<tr>
<td>gaps</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>合并时每页面之间域的间距 List</td>
</tr>
<tr>
<td>insertElemMarginTop</td>
<td>string</td>
<td>x</td>
<td>x</td>
<td>insertXml 插入新页时距离顶部的偏移量</td>
</tr>
<tr>
<td>insertElemMarginBottom</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>insertXml 插入新页时底部距离下一 field 的偏移量</td>
</tr>
<tr>
<td>insertXml</td>
<td>string</td>
<td>x</td>
<td>x</td>
<td>每次换页时在头部插入的 aft</td>
</tr>
<tr>
<td>clipThreshold</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>切割切割限制,合并时位置超出此高度的域会被加入下页的大小</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>array</td>
<td>解析后的 xml 字符串数组</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAndClipAft(aftXmls, gaps, insertElemMarginTop, insertElemMarginBottom, insertXml, clipThreshold)</font></blockquote>
<hr>
<h3 id="_2-7-combineaftwithheadandtail-拼接-aft-包含头和尾" tabindex="-1"><a class="header-anchor" href="#_2-7-combineaftwithheadandtail-拼接-aft-包含头和尾"><span>2.7 combineAftWithHeadAndTail --拼接 Aft 包含头和尾</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> head <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>head <span class="token comment">//解析后的xml字符串</span></span>
<span class="line"><span class="token keyword">let</span> tail <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>tail <span class="token comment">//解析后的xml字符串</span></span>
<span class="line"><span class="token keyword">let</span> aftXmls <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>prtlist <span class="token comment">//解析后的xml字符串数组</span></span>
<span class="line"><span class="token keyword">let</span> offsets <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'10'</span><span class="token punctuation">,</span> <span class="token string">'0'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span></span>
<span class="line"><span class="token keyword">let</span> pageTop <span class="token operator">=</span> <span class="token string">'10.0'</span></span>
<span class="line"><span class="token keyword">let</span> pageBottom <span class="token operator">=</span> <span class="token string">'250.0'</span></span>
<span class="line"><span class="token keyword">let</span> gap <span class="token operator">=</span> <span class="token string">'10.0'</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">combineAftWithHeadAndTail</span><span class="token punctuation">(</span>aftXmls<span class="token punctuation">,</span> head<span class="token punctuation">,</span> tail<span class="token punctuation">,</span> offsets<span class="token punctuation">,</span> pageTop<span class="token punctuation">,</span> pageBottom<span class="token punctuation">,</span> gap<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftXmls</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>解析后的 xml 字符串数组</td>
</tr>
<tr>
<td>head</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>解析后的 xml 字符串</td>
</tr>
<tr>
<td>tail</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>解析后的 xml 字符串</td>
</tr>
<tr>
<td>offsets</td>
<td>array</td>
<td>√</td>
<td>x</td>
<td>insertXml 插入新页时底部距离下一 field 的偏移量</td>
</tr>
<tr>
<td>pageTop</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>距离头部的距离</td>
</tr>
<tr>
<td>pageBottom</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>距离底部的距离</td>
</tr>
<tr>
<td>gap</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>array</td>
<td>解析后的 xml 字符串数组</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAftWithHeadAndTail(aftXmls,head,tail,offsets,pageTop,pageBottom,gap)</font></blockquote>
<hr>
<h3 id="_2-8-combineaft-拼接-aft-字符串" tabindex="-1"><a class="header-anchor" href="#_2-8-combineaft-拼接-aft-字符串"><span>2.8 combineAft --拼接 Aft 字符串</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftPaths <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/www/FCClient/print/1/T00401017.aft'</span><span class="token punctuation">,</span> <span class="token string">'/www/FCClient/print/1/T00401018.aft'</span><span class="token punctuation">]</span> <span class="token comment">//aft资源文件路径数组</span></span>
<span class="line"><span class="token keyword">let</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//映射mapping</span></span>
<span class="line"><span class="token keyword">let</span> controlParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> bodyOffsetTop <span class="token operator">=</span> <span class="token string">'10'</span></span>
<span class="line"><span class="token keyword">let</span> tailOffsetTop <span class="token operator">=</span> <span class="token string">'10'</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">combineAft</span><span class="token punctuation">(</span>aftPaths<span class="token punctuation">,</span> mapping<span class="token punctuation">,</span> controlParams<span class="token punctuation">,</span> bodyOffsetTop<span class="token punctuation">,</span> tailOffsetTop<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul>
<li>参数列表:</li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftPaths</td>
<td>array</td>
<td>√</td>
<td>x</td>
<td>aft 资源文件路径数组</td>
</tr>
<tr>
<td>mapping</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>映射 mapping</td>
</tr>
<tr>
<td>controlParams</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
<tr>
<td>bodyOffsetTop</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>body 距离头部的距离</td>
</tr>
<tr>
<td>tailOffsetTop</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>底部到头部的距离</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>解析后的 xml 字符串</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.combineAft(aftPaths,mapping,controlParams,bodyOffsetTop,tailOffsetTop)</font></blockquote>
<hr>
<h3 id="_2-9-afttopdf-aft-转换为-pdf-壳子无相应支持-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-9-afttopdf-aft-转换为-pdf-壳子无相应支持-勿调用"><span>2.9 aftToPdf --aft 转换为 pdf （壳子无相应支持，勿调用！）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftPath <span class="token operator">=</span> <span class="token string">'D://test.aft'</span> <span class="token comment">//aft文件路径 相对路径</span></span>
<span class="line"><span class="token keyword">let</span> pdfPath <span class="token operator">=</span> <span class="token string">'D://test.pdf'</span> <span class="token comment">//pdf文件路径 绝对路径</span></span>
<span class="line"><span class="token keyword">let</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span> <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span> <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span> <span class="token punctuation">}</span> <span class="token comment">//所有文本框的赋值</span></span>
<span class="line"><span class="token keyword">let</span> controlParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> waterMarkName <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印值</span></span>
<span class="line"><span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印字体大小</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">aftToPdf</span><span class="token punctuation">(</span>aftPath<span class="token punctuation">,</span> pdfPath<span class="token punctuation">,</span> mapping<span class="token punctuation">,</span> controlParams<span class="token punctuation">,</span> waterMarkName<span class="token punctuation">,</span> font<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftPath</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>aft 文件路径</td>
</tr>
<tr>
<td>pdfPath</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>pdf 文件路径</td>
</tr>
<tr>
<td>mapping</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>所有文本框的赋值</td>
</tr>
<tr>
<td>controlParams</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
<tr>
<td>waterMarkName</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>水印值</td>
</tr>
<tr>
<td>font</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>水印字体大小</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.aftToPdf(aftPath,pdfPath,mapping,controlParams,waterMarkName,font)</font></blockquote>
<hr>
<h3 id="_2-10-looperafttopdf-循环打印-pdf-壳子无相应支持-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-10-looperafttopdf-循环打印-pdf-壳子无相应支持-勿调用"><span>2.10 looperAftToPdf --循环打印 PDF（壳子无相应支持，勿调用！）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftPath <span class="token operator">=</span> <span class="token string">'D://test.aft'</span> <span class="token comment">//aft文件路径 相对路径</span></span>
<span class="line"><span class="token keyword">let</span> pdfPath <span class="token operator">=</span> <span class="token string">'D://test.pdf'</span> <span class="token comment">//pdf文件路径 绝对路径</span></span>
<span class="line"><span class="token keyword">let</span> jointString <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//一页中aft的数量，false确认一页一个</span></span>
<span class="line"><span class="token keyword">let</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span> <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span> <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span> <span class="token punctuation">}</span> <span class="token comment">//所有文本框的赋值</span></span>
<span class="line"><span class="token keyword">let</span> controlParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> waterMarkName <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印值</span></span>
<span class="line"><span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印字体大小</span></span>
<span class="line"><span class="token keyword">let</span> res <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">looperAftToPdf</span><span class="token punctuation">(</span>aftPath<span class="token punctuation">,</span> pdfPath<span class="token punctuation">,</span> jointString<span class="token punctuation">,</span> mapping<span class="token punctuation">,</span> controlParams<span class="token punctuation">,</span> waterMarkName<span class="token punctuation">,</span> font<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftPath</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>aft 文件路径</td>
</tr>
<tr>
<td>pdfPath</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>pdf 文件路径</td>
</tr>
<tr>
<td>jointString</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>一页中 aft 的数量，false 确认一页一个</td>
</tr>
<tr>
<td>mapping</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>所有文本框的赋值</td>
</tr>
<tr>
<td>controlParams</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
<tr>
<td>waterMarkName</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>水印值</td>
</tr>
<tr>
<td>font</td>
<td>any</td>
<td>√</td>
<td>x</td>
<td>水印字体大小</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.looperAftToPdf(aftPath,pdfPath,jointString,mapping,controlParams,waterMarkName,font)</font></blockquote>
<hr>
<h3 id="_2-11-selectdirector-选择文件夹目录-壳子无相应支持-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-11-selectdirector-选择文件夹目录-壳子无相应支持-勿调用"><span>2.11 selectDirector --选择文件夹目录（壳子无相应支持，勿调用！）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> mkdirOrGet <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//文件夹目录判断变量 mkdir 打开弹窗 get 返回路径</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">selectDirector</span><span class="token punctuation">(</span>mkdirOrGet<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>mkdirOrGet</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>文件夹目录判断变量</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.selectDirector(mkdirOrGet)</font></blockquote>
<hr>
<h3 id="_2-12-concataft-合并-aft-壳子无相应支持-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-12-concataft-合并-aft-壳子无相应支持-勿调用"><span>2.12 concatAft --合并 aft（壳子无相应支持，勿调用！）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">'/www/FCClient/print/1/T00401017.aft'</span><span class="token punctuation">,</span> <span class="token string">'/www/FCClient/print/1/T00401018.aft'</span><span class="token punctuation">]</span> <span class="token comment">//所有aft文件路径 相对路径</span></span>
<span class="line"><span class="token keyword">let</span> pdfString <span class="token operator">=</span> <span class="token string">'D://test.pdf'</span> <span class="token comment">//pdf文件路径 绝对路径</span></span>
<span class="line"><span class="token keyword">let</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span> <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span> <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span> <span class="token punctuation">}</span> <span class="token comment">//所以文本框的赋值 list&lt;map></span></span>
<span class="line"><span class="token keyword">let</span> controlParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> waterMarkName <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印值</span></span>
<span class="line"><span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印字体大小</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">concatAft</span><span class="token punctuation">(</span>aftList<span class="token punctuation">,</span> pdfString<span class="token punctuation">,</span> mapping<span class="token punctuation">,</span> controlParams<span class="token punctuation">,</span> waterMarkName<span class="token punctuation">,</span> font<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftList</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>所有 aft 文件路径</td>
</tr>
<tr>
<td>pdfString</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>pdf 文件路径</td>
</tr>
<tr>
<td>mapping</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>所有文本框的赋值</td>
</tr>
<tr>
<td>controlParams</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
<tr>
<td>waterMarkName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>水印值</td>
</tr>
<tr>
<td>font</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>水印字体大小</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.concatAft(aftList,pdfString,mapping,controlParams,waterMarkName,font)</font></blockquote>
<hr>
<h3 id="_2-13-looperaddpicture-aft-中按需求添加图片-壳子无相应支持-勿调用" tabindex="-1"><a class="header-anchor" href="#_2-13-looperaddpicture-aft-中按需求添加图片-壳子无相应支持-勿调用"><span>2.13 looperAddPicture --Aft 中按需求添加图片（壳子无相应支持，勿调用！）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道（壳子无相应支持，勿调用！）</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> aftPath <span class="token operator">=</span> <span class="token string">'D://test.aft'</span> <span class="token comment">//本体表单的aft路径，图片的aft路径</span></span>
<span class="line"><span class="token keyword">let</span> pdfPath <span class="token operator">=</span> <span class="token string">'D://test.pdf'</span> <span class="token comment">//pdf文件路径 绝对路径</span></span>
<span class="line"><span class="token keyword">let</span> mapping <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token constant">ORG_NUM</span><span class="token operator">:</span> <span class="token string">'12'</span><span class="token punctuation">,</span> <span class="token constant">ORG_NO</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span> <span class="token constant">PRT_DT</span><span class="token operator">:</span> <span class="token string">'2019-09'</span> <span class="token punctuation">}</span> <span class="token comment">//所有文本框的赋值 list&lt;map></span></span>
<span class="line"><span class="token keyword">let</span> ImgSrcKey <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//图片src的值</span></span>
<span class="line"><span class="token keyword">let</span> controlParams <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//控制分页有两种参数</span></span>
<span class="line">  <span class="token comment">// notRepeatPrintHeaderFooter: "6,10",</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token string">'34'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">TableColWidth</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">,</span> <span class="token string">'30'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//Map&lt;String, Object></span></span>
<span class="line"><span class="token keyword">let</span> waterMarkName <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印值</span></span>
<span class="line"><span class="token keyword">let</span> font <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//水印字体大小</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">looperAddPicture</span><span class="token punctuation">(</span>aftPath<span class="token punctuation">,</span> pdfPath<span class="token punctuation">,</span> mapping<span class="token punctuation">,</span> ImgSrcKey<span class="token punctuation">,</span> controlParams<span class="token punctuation">,</span> waterMarkName<span class="token punctuation">,</span> font<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>aftPath</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>本体表单的 aft 路径，图片的 aft 路径</td>
</tr>
<tr>
<td>pdfPath</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>pdf 文件路径</td>
</tr>
<tr>
<td>mapping</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>所有文本框的赋值</td>
</tr>
<tr>
<td>ImgSrcKey</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>图片 src 的值</td>
</tr>
<tr>
<td>controlParams</td>
<td>map</td>
<td>√</td>
<td>x</td>
<td>打印配置，详细请参考打印文件 aft 说明</td>
</tr>
<tr>
<td>waterMarkName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>水印值</td>
</tr>
<tr>
<td>font</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>水印字体大小</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>暂时未知</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.looperAddPicture(aftPath,pdfPath,mapping,ImgSrcKey,controlParams,waterMarkName,font)</font></blockquote>
<hr>
<h3 id="_2-14-printtable-通用表格打印-不带线" tabindex="-1"><a class="header-anchor" href="#_2-14-printtable-通用表格打印-不带线"><span>2.14 printTable --通用表格打印（不带线）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'柜员号'</span><span class="token punctuation">,</span> <span class="token string">'身份证号码'</span><span class="token punctuation">,</span> <span class="token string">'柜员类型'</span><span class="token punctuation">,</span> <span class="token string">'库管员标志'</span><span class="token punctuation">,</span> <span class="token string">'现金业务类型'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'002001'</span><span class="token punctuation">,</span> <span class="token string">'371481198303070032'</span><span class="token punctuation">,</span> <span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token string">'N-否'</span><span class="token punctuation">,</span> <span class="token string">'Y-是'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token punctuation">[</span><span class="token string">'002002'</span><span class="token punctuation">,</span> <span class="token string">'371481198303070032'</span><span class="token punctuation">,</span> <span class="token string">'1-一般柜员'</span><span class="token punctuation">,</span> <span class="token string">'Y-是'</span><span class="token punctuation">,</span> <span class="token string">'Y-是'</span><span class="token punctuation">]</span></span>
<span class="line"><span class="token punctuation">]</span> <span class="token comment">//表格数据</span></span>
<span class="line"><span class="token keyword">let</span> encoding <span class="token operator">=</span> <span class="token string">'GBK'</span> <span class="token comment">//字符编码</span></span>
<span class="line"><span class="token keyword">let</span> separator <span class="token operator">=</span> <span class="token string">'  '</span> <span class="token comment">//单元要素分隔符</span></span>
<span class="line"><span class="token keyword">let</span> columnLenList <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//单元格宽度List</span></span>
<span class="line"><span class="token keyword">let</span> endWithSeparator <span class="token operator">=</span> <span class="token string">'*'</span> <span class="token comment">//结束符</span></span>
<span class="line"><span class="token keyword">let</span> flushRight <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//是否右对齐 是true 否false</span></span>
<span class="line"><span class="token keyword">let</span> maxLength <span class="token operator">=</span> <span class="token number">100</span> <span class="token comment">//单行最大长度</span></span>
<span class="line"><span class="token keyword">let</span> data <span class="token operator">=</span> <span class="token string">'hello world'</span> <span class="token comment">//额外要素内容</span></span>
<span class="line"><span class="token keyword">let</span> result <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printTable</span><span class="token punctuation">(</span>dataList<span class="token punctuation">,</span> encoding<span class="token punctuation">,</span> separator<span class="token punctuation">,</span> columnLenList<span class="token punctuation">,</span> endWithSeparator<span class="token punctuation">,</span> flushRight<span class="token punctuation">,</span> maxLength<span class="token punctuation">,</span> data<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>dataList</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>表格数据</td>
</tr>
<tr>
<td>encoding</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>字符编码</td>
</tr>
<tr>
<td>separator</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>单元要素分隔符</td>
</tr>
<tr>
<td>columnLenList</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>单元格宽度 List</td>
</tr>
<tr>
<td>endWithSeparator</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>结束符</td>
</tr>
<tr>
<td>flushRight</td>
<td>bollean</td>
<td>√</td>
<td>x</td>
<td>是否右对齐</td>
</tr>
<tr>
<td>maxLength</td>
<td>number</td>
<td>√</td>
<td>x</td>
<td>单行最大长度</td>
</tr>
<tr>
<td>data</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>额外要素内容</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>解析后的 xml 字符串</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printTable(dataList, encoding, separator, columnLenList, endWithSeparator, flushRight, maxLength, data)</font></blockquote>
<hr>
<h3 id="_2-15-printtablewithline-通用表格打印-带线" tabindex="-1"><a class="header-anchor" href="#_2-15-printtablewithline-通用表格打印-带线"><span>2.15 printTableWithLine --通用表格打印（带线）</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> path <span class="token operator">=</span> <span class="token string">'/www/FCClient/print/1/T00501003.aft'</span> <span class="token comment">//aft资源文件路径</span></span>
<span class="line"><span class="token keyword">let</span> map <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token comment">//变量数据</span></span>
<span class="line">  <span class="token constant">USER_NAME</span><span class="token operator">:</span> <span class="token string">'用户名称'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">TOTL_STKCNT</span><span class="token operator">:</span> <span class="token string">'总笔数'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">TOTL_AMT</span><span class="token operator">:</span> <span class="token string">'总金额'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">SUCC_STKCNT</span><span class="token operator">:</span> <span class="token string">'成功笔数'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">FAIL_STKCNT</span><span class="token operator">:</span> <span class="token string">'失败笔数'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">SUCC_TOTL_AMT</span><span class="token operator">:</span> <span class="token string">'成功金额'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token constant">FAIL_TOTL_AMT</span><span class="token operator">:</span> <span class="token string">'失败金额'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">SerialNum1</span><span class="token operator">:</span> <span class="token string">'0'</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token comment">//表格数据</span></span>
<span class="line">  <span class="token literal-property property">data</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">//表格ID</span></span>
<span class="line">    <span class="token literal-property property">WaterTable</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token comment">//[序号，缴费日期，欠费金额，违约金，实缴金额，渠道，状态]</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'1'</span><span class="token punctuation">,</span> <span class="token string">'20200518'</span><span class="token punctuation">,</span> <span class="token string">'371342289'</span><span class="token punctuation">,</span> <span class="token string">'2302'</span><span class="token punctuation">,</span> <span class="token string">'32243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'2'</span><span class="token punctuation">,</span> <span class="token string">'20200519'</span><span class="token punctuation">,</span> <span class="token string">'222222223'</span><span class="token punctuation">,</span> <span class="token string">'2340'</span><span class="token punctuation">,</span> <span class="token string">'43243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'3'</span><span class="token punctuation">,</span> <span class="token string">'20200511'</span><span class="token punctuation">,</span> <span class="token string">'212222231'</span><span class="token punctuation">,</span> <span class="token string">'2342'</span><span class="token punctuation">,</span> <span class="token string">'43243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'4'</span><span class="token punctuation">,</span> <span class="token string">'20200512'</span><span class="token punctuation">,</span> <span class="token string">'213222212'</span><span class="token punctuation">,</span> <span class="token string">'2342'</span><span class="token punctuation">,</span> <span class="token string">'43243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'5'</span><span class="token punctuation">,</span> <span class="token string">'20200513'</span><span class="token punctuation">,</span> <span class="token string">'213222222'</span><span class="token punctuation">,</span> <span class="token string">'2389'</span><span class="token punctuation">,</span> <span class="token string">'43243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token punctuation">[</span><span class="token string">'6'</span><span class="token punctuation">,</span> <span class="token string">'20200514'</span><span class="token punctuation">,</span> <span class="token string">'213222214'</span><span class="token punctuation">,</span> <span class="token string">'2023'</span><span class="token punctuation">,</span> <span class="token string">'43243'</span><span class="token punctuation">,</span> <span class="token string">'线上'</span><span class="token punctuation">,</span> <span class="token string">'1'</span><span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//映射mapping</span></span>
<span class="line"><span class="token keyword">let</span> controlParam <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">TableRowNumOfPage</span><span class="token operator">:</span> <span class="token number">24</span></span>
<span class="line">  <span class="token comment">// TableColWidth:[24,24,24,24,24,24,24]</span></span>
<span class="line"><span class="token punctuation">}</span> <span class="token comment">//打印配置，详细请参考打印文件aft说明</span></span>
<span class="line"><span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printTableWithLine</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> map<span class="token punctuation">,</span> controlParam<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>path</td>
<td>list</td>
<td>√</td>
<td>x</td>
<td>通用 aft 路径</td>
</tr>
<tr>
<td>map</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>数据映射关系</td>
</tr>
<tr>
<td>controlParam</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>配置参数</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>array</td>
<td>解析后的 xml 字符串数组</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold">对应柜面原 SDK: Printer.printTableWithLine(path,map,data,colWidth,controlParam)</font></blockquote>
<hr>
<h3 id="_2-16-printaftwindows-打印-aftwindows-方式" tabindex="-1"><a class="header-anchor" href="#_2-16-printaftwindows-打印-aftwindows-方式"><span>2.16 printAftWindows --打印 AFTwindows 方式</span></a></h3>
<blockquote>
<font color ='red' style="font-weight:bold">支持柜面渠道</font></blockquote>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">let</span> AftContentList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">''</span><span class="token punctuation">,</span> <span class="token string">''</span><span class="token punctuation">]</span> <span class="token comment">//需要打印的AFT解析后的xml数组</span></span>
<span class="line"><span class="token keyword">let</span> ImagesList <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token keyword">null</span><span class="token punctuation">]</span> <span class="token comment">//需要打印的解析后的xml数组带图片的</span></span>
<span class="line"><span class="token keyword">let</span> PrinterName <span class="token operator">=</span> <span class="token string">''</span> <span class="token comment">//打印机名称，不传默认打印机</span></span>
<span class="line"><span class="token keyword">let</span> PaperSize <span class="token operator">=</span> <span class="token string">'210,297'</span> <span class="token comment">//纸张大小</span></span>
<span class="line"><span class="token keyword">let</span> ShowConfigWindow <span class="token operator">=</span> <span class="token boolean">true</span> <span class="token comment">//是否显示打印提示框</span></span>
<span class="line"><span class="token keyword">let</span> HorizontalOffset <span class="token operator">=</span> <span class="token string">'0'</span> <span class="token comment">//水平偏移数值</span></span>
<span class="line"><span class="token keyword">let</span> VerticalOffset <span class="token operator">=</span> <span class="token string">'0'</span> <span class="token comment">//纵向偏移数值</span></span>
<span class="line"><span class="token keyword">let</span> ret <span class="token operator">=</span> <span class="token keyword">await</span> Aft<span class="token punctuation">.</span><span class="token function">printAftWindows</span><span class="token punctuation">(</span>AftContentList<span class="token punctuation">,</span> ImagesList<span class="token punctuation">,</span> PrinterName<span class="token punctuation">,</span> PaperSize<span class="token punctuation">,</span> ShowConfigWindow<span class="token punctuation">,</span> HorizontalOffset<span class="token punctuation">,</span> VerticalOffset<span class="token punctuation">)</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>必填参数</th>
<th>默认值</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>AftContentList</td>
<td>Array[string]</td>
<td>√</td>
<td>x</td>
<td>需要打印的 AFT 解析后的 xml 数组</td>
</tr>
<tr>
<td>ImagesList</td>
<td>Array[obj]</td>
<td>√</td>
<td>x</td>
<td>需要打印的解析后的 xml 数组带图片的</td>
</tr>
<tr>
<td>PrinterName</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>打印机名称，不传默认打印机</td>
</tr>
<tr>
<td>PaperSize</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>纸张大小</td>
</tr>
<tr>
<td>ShowConfigWindow</td>
<td>boolean</td>
<td>√</td>
<td>x</td>
<td>是否显示打印提示框</td>
</tr>
<tr>
<td>HorizontalOffset</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>水平偏移数值</td>
</tr>
<tr>
<td>VerticalOffset</td>
<td>string</td>
<td>√</td>
<td>x</td>
<td>纵向偏移数值</td>
</tr>
</tbody>
</table>
<ul>
<li>返回值: <code v-pre>Object</code></li>
</ul>
<table>
<thead>
<tr>
<th>参数</th>
<th>类型</th>
<th>说明</th>
</tr>
</thead>
<tbody>
<tr>
<td>res.result</td>
<td>string</td>
<td>success 成功标识</td>
</tr>
</tbody>
</table>
<blockquote>
<font color ='red' style="font-weight:bold"></font></blockquote>
<hr>
</div></template>


