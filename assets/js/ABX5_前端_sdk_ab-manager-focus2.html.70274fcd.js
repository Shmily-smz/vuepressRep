"use strict";(self.webpackChunkmy_vuepress_site=self.webpackChunkmy_vuepress_site||[]).push([[4165],{31526:(n,s,a)=>{a.r(s),a.d(s,{comp:()=>e,data:()=>l});var t=a(20641);const p={},e=(0,a(66262).A)(p,[["render",function(n,s){return(0,t.uX)(),(0,t.CE)("div",null,s[0]||(s[0]=[(0,t.Fv)('<h1 id="ab-manager-focus2-焦点管理" tabindex="-1"><a class="header-anchor" href="#ab-manager-focus2-焦点管理"><span>ab-manager-focus2@焦点管理</span></a></h1><p>交易页面焦点控制器，实现交易全键盘操作。</p><h2 id="_1-使用" tabindex="-1"><a class="header-anchor" href="#_1-使用"><span>1. 使用</span></a></h2><p>在当前需要焦点控制的<strong>根元素</strong>使用<code>@agree/ab-manager-focus2</code>，默认会控制<strong>包括嵌套的子组件</strong>里面的<a href="#91-%E5%8F%AF%E7%94%B1%E7%84%A6%E7%82%B9%E6%8E%A7%E5%88%B6%E7%BB%84%E4%BB%B6"><strong>可由焦点控制</strong></a>的元素。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 使用焦点控制的根组件</span></span>\n<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> FocusManager <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@agree/ab-manager-focus2&quot;</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>FocusManager<span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">init</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 需要在合适的时机激活焦点控制，例如在 mounted 里。</span></span>\n<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_activeFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-1-初始化参数" tabindex="-1"><a class="header-anchor" href="#_1-1-初始化参数"><span>1.1 初始化参数</span></a></h3><p>可传入<code>_activeFocus()</code>方法中，如：</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">_activeFocus</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">preventScroll</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th>参数名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>preventScroll</td><td>阻止元素获取焦点时自动滚动到可视区域(主要应用在不同产品嵌套场景中)</td><td>boolean</td><td>false</td></tr></tbody></table><h2 id="_2-子组件调用api" tabindex="-1"><a class="header-anchor" href="#_2-子组件调用api"><span>2. 子组件调用API</span></a></h2><p>子组件若需要使用<code>@agree/ab-manager-focus2</code>相关api能力，需要注入后即可使用。</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFocus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>调用api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountInput<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> inject <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&quot;@agree/ab-manager-focus2&quot;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">mixins</span><span class="token operator">:</span><span class="token punctuation">[</span>inject<span class="token punctuation">]</span><span class="token punctuation">,</span></span>\n<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token string">&#39;accountInput&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-手动设置获取焦点" tabindex="-1"><a class="header-anchor" href="#_3-手动设置获取焦点"><span>3. 手动设置获取焦点</span></a></h2><p>除了按键和鼠标点击可以让元素获取焦点外，也可以手动调用代码让元素获取焦点。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">setFocus</span><span class="token punctuation">(</span>refName<span class="token operator">|</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>例：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>setFocus<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>操作焦点元素设置焦点<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountInput<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountInput2<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountInput3<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>accountInput4<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>\n<span class="line">            <span class="token comment">// 点击&lt;aui-button&gt;设置到 accountInput4 获取焦点</span></span>\n<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">setFocus</span><span class="token punctuation">(</span><span class="token string">&quot;accountInput4&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-设置-移除焦点贪婪" tabindex="-1"><a class="header-anchor" href="#_4-设置-移除焦点贪婪"><span>4. 设置/移除焦点贪婪</span></a></h2><p><strong>焦点限制</strong>：在默认情况下，焦点控制会对页面可以获取焦点的元素进行统一控制，如果前面元素有必输的限制或校验规则未通过，焦点不能置到后面的元素上。</p><p><strong>焦点贪婪</strong>：焦点贪婪指的是，忽略前面的校验，强制获取焦点。当某个元素设置为焦点贪婪时，无论前面元素校验是否通过，该元素都可以获取到焦点并触发事件。<strong>该设置特权较大，请谨慎使用</strong>。</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token comment">// 设置贪婪</span></span>\n<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">setGreedy</span><span class="token punctuation">(</span>refName<span class="token operator">|</span>refNames<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span>\n<span class="line"><span class="token comment">//移除贪婪</span></span>\n<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">removeGreedy</span><span class="token punctuation">(</span>refName<span class="token operator">|</span>refNames<span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在需要设置/移除焦点贪婪的组件上声明ref属性</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">ref</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>input_1<span class="token punctuation">&quot;</span></span> <span class="token attr-name">v-model</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>inputValue<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line">    <span class="token comment">// ...</span></span>\n<span class="line">    <span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">        <span class="token function">mounted</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span></span>\n<span class="line">            <span class="token keyword">this</span><span class="token punctuation">.</span>focusManager<span class="token punctuation">.</span><span class="token function">setGreedy</span><span class="token punctuation">(</span><span class="token string">&#39;input_1&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-使用焦点逻辑时-是否向上触发blur事件" tabindex="-1"><a class="header-anchor" href="#_5-使用焦点逻辑时-是否向上触发blur事件"><span>5. 使用焦点逻辑时，是否向上触发blur事件</span></a></h2><p>通过焦点控制管理的元素是按照<strong>从左到右，从上往下</strong>的顺序依次获取焦点并触发对应的<code>focus</code>/<code>blur</code> 事件。当从右到左或从下向上切换焦点时不会触发元素的<code>blur</code>事件，如需向上切换焦点时也触发<code>blur</code>事件，要手动设置<code>back-trigger</code>属性为<code>true</code>。</p><p>例：</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-input</span> <span class="token attr-name">:back-trigger</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> <span class="token punctuation">&gt;</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-input</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-messagebox-弹窗类焦点" tabindex="-1"><a class="header-anchor" href="#_6-messagebox-弹窗类焦点"><span>6. MessageBox 弹窗类焦点</span></a></h2><ul><li>弹窗类组件通过api打开必须使用<code>async/await</code></li><li>需要传递当前触发弹窗元素所在的<code>FocusManager</code>实例，保证关闭后可使对应区域获取焦点</li></ul><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span> <span class="token attr-name">@click</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>showMsg<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>打开弹窗<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript"></span>\n<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span></span>\n<span class="line">    <span class="token comment">// ...</span></span>\n<span class="line">    <span class="token literal-property property">methods</span><span class="token operator">:</span><span class="token punctuation">{</span></span>\n<span class="line">        <span class="token keyword">async</span> <span class="token function">showMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span></span>\n<span class="line">            <span class="token keyword">await</span> <span class="token keyword">this</span><span class="token punctuation">.</span>$aui<span class="token punctuation">.</span>alert<span class="token punctuation">.</span><span class="token function">show</span><span class="token punctuation">(</span><span class="token string">&#39;标题&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;内容&#39;</span><span class="token punctuation">,</span> <span class="token punctuation">{</span></span>\n<span class="line">                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;info&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token literal-property property">message</span><span class="token operator">:</span> <span class="token string">&#39;消息提示&#39;</span><span class="token punctuation">,</span></span>\n<span class="line">                <span class="token literal-property property">inject</span><span class="token operator">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>focusManager</span>\n<span class="line">            <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span> </span>\n<span class="line">        <span class="token punctuation">}</span></span>\n<span class="line">    <span class="token punctuation">}</span></span>\n<span class="line"><span class="token punctuation">}</span></span>\n<span class="line"></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_7-dialog-弹窗类焦点" tabindex="-1"><a class="header-anchor" href="#_7-dialog-弹窗类焦点"><span>7. dialog 弹窗类焦点</span></a></h2><p><code>dialog</code>组件不需要引入<code>@agree/ab-manager-focus2</code>，只需要在标签上定义<code>is-focus</code>属性为<code>true</code>即可。</p><div class="language-vue line-numbers-mode" data-highlighter="prismjs" data-ext="vue" data-title="vue"><pre><code><span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-dialog</span> <span class="token attr-name">:is-focus</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>aui-button</span><span class="token punctuation">&gt;</span></span>dialog中的按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-button</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line">    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>aui-dialog</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-方法" tabindex="-1"><a class="header-anchor" href="#_8-方法"><span>8. 方法</span></a></h2><p>通过 <code>this.focusManager</code> 调用的方法，例如 <code>this.focusManager.setFocus(ref)</code></p><table><thead><tr><th>方法名</th><th>参数</th><th>参数类型</th><th>参数说明</th><th>方法说明</th></tr></thead><tbody><tr><td>setFocus</td><td>refName / index</td><td>string / number</td><td>声明在组件上的ref属性或组件的位置下标</td><td>操作焦点元素使某个组件获得焦点</td></tr><tr><td>setGreedy</td><td>refName / refNames</td><td>string / Array&lt;string&gt;</td><td>一个ref字符串或者多个ref字符串组成的数组</td><td>为组件设置焦点贪婪</td></tr><tr><td>removeGreedy</td><td>refName / refNames</td><td>string / Array&lt;string&gt;</td><td>一个ref字符串或者多个ref字符串组成的数组</td><td>移除组件的焦点贪婪</td></tr></tbody></table><ul><li>组件的<code>ref</code>属性指的是组件库提供的<code>aui-*</code>组件上的<code>ref</code>属性。</li><li>组件的位置下标指的是页面上<a href="#91-%E5%8F%AF%E7%94%B1%E7%84%A6%E7%82%B9%E6%8E%A7%E5%88%B6%E7%BB%84%E4%BB%B6"><strong>可由焦点控制</strong></a>元素显示的位置顺序，从左到右，从上到下，第一个元素下标为<code>0</code>，以此类推。</li></ul><p><strong>注：通过<code>index</code>来设置焦点，不一定总是符合你的预期，除了一些特殊情况，不要太依赖通过<code>index</code>设置焦点。</strong></p><h2 id="_9-补充说明" tabindex="-1"><a class="header-anchor" href="#_9-补充说明"><span>9. 补充说明</span></a></h2><h3 id="_9-1-可由焦点控制组件" tabindex="-1"><a class="header-anchor" href="#_9-1-可由焦点控制组件"><span>9.1 可由焦点控制组件</span></a></h3><p>指组件库提供的部分<code>aui-*</code>组件，包括：<code>aui-input</code>, <code>aui-select</code>, <code>aui-date</code>, <code>aui-cascader</code>, <code>aui-table</code>和<code>aui-button</code>。</p><h3 id="_9-2-非焦点控制组件" tabindex="-1"><a class="header-anchor" href="#_9-2-非焦点控制组件"><span>9.2 非焦点控制组件</span></a></h3><p>指除了<a href="#91-%E5%8F%AF%E7%94%B1%E7%84%A6%E7%82%B9%E6%8E%A7%E5%88%B6%E7%BB%84%E4%BB%B6"><strong>可由焦点控制</strong></a>组件之外的所有组件。</p><h3 id="_9-3-打印调试信息" tabindex="-1"><a class="header-anchor" href="#_9-3-打印调试信息"><span>9.3 打印调试信息</span></a></h3><p>focus 已废弃 debug 参数，请配置 ab-logger 的输出级别来查看 focus 的调试信息</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> logger <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@agree/ab-logger&#39;</span><span class="token punctuation">;</span></span>\n<span class="line">logger<span class="token punctuation">.</span><span class="token function">config</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>\n<span class="line">  <span class="token literal-property property">level</span><span class="token operator">:</span> <span class="token string">&#39;debug&#39;</span></span>\n<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>\n<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>',46)]))}]]),l=JSON.parse('{"path":"/ABX5/%E5%89%8D%E7%AB%AF/sdk/ab-manager-focus2.html","title":"ab-manager-focus2@焦点管理","lang":"en-US","frontmatter":{"outline":"deep"},"headers":[{"level":2,"title":"1. 使用","slug":"_1-使用","link":"#_1-使用","children":[{"level":3,"title":"1.1 初始化参数","slug":"_1-1-初始化参数","link":"#_1-1-初始化参数","children":[]}]},{"level":2,"title":"2. 子组件调用API","slug":"_2-子组件调用api","link":"#_2-子组件调用api","children":[]},{"level":2,"title":"3. 手动设置获取焦点","slug":"_3-手动设置获取焦点","link":"#_3-手动设置获取焦点","children":[]},{"level":2,"title":"4. 设置/移除焦点贪婪","slug":"_4-设置-移除焦点贪婪","link":"#_4-设置-移除焦点贪婪","children":[]},{"level":2,"title":"5. 使用焦点逻辑时，是否向上触发blur事件","slug":"_5-使用焦点逻辑时-是否向上触发blur事件","link":"#_5-使用焦点逻辑时-是否向上触发blur事件","children":[]},{"level":2,"title":"6. MessageBox 弹窗类焦点","slug":"_6-messagebox-弹窗类焦点","link":"#_6-messagebox-弹窗类焦点","children":[]},{"level":2,"title":"7. dialog 弹窗类焦点","slug":"_7-dialog-弹窗类焦点","link":"#_7-dialog-弹窗类焦点","children":[]},{"level":2,"title":"8. 方法","slug":"_8-方法","link":"#_8-方法","children":[]},{"level":2,"title":"9. 补充说明","slug":"_9-补充说明","link":"#_9-补充说明","children":[{"level":3,"title":"9.1 可由焦点控制组件","slug":"_9-1-可由焦点控制组件","link":"#_9-1-可由焦点控制组件","children":[]},{"level":3,"title":"9.2 非焦点控制组件","slug":"_9-2-非焦点控制组件","link":"#_9-2-非焦点控制组件","children":[]},{"level":3,"title":"9.3 打印调试信息","slug":"_9-3-打印调试信息","link":"#_9-3-打印调试信息","children":[]}]}],"git":{"updatedTime":1727145923000,"contributors":[{"name":"wangaoqi","email":"wangaoqi@agree.com.cn","commits":1}]},"filePathRelative":"ABX5/前端/sdk/ab-manager-focus2.md"}')}}]);