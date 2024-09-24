<template><div><h1 id="ab-plugin-keyboard-虚拟键盘" tabindex="-1"><a class="header-anchor" href="#ab-plugin-keyboard-虚拟键盘"><span>ab-plugin-keyboard@虚拟键盘</span></a></h1>
<p>在App.vue文件中的input需要绑定v-keyboard=”‘englishOnly’”自定义指令（或者v-keyboard=”‘englishOnlyNumber’”更改为默认为数字键盘）</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token operator">&lt;</span>template<span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">'app'</span><span class="token operator">></span></span>
<span class="line">        <span class="token operator">&lt;</span>input type<span class="token operator">=</span><span class="token string">"text"</span> v<span class="token operator">-</span>keyboard<span class="token operator">=</span><span class="token string">"'englishOnlyNumber'"</span><span class="token operator">></span></span>
<span class="line">    <span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span></span>
<span class="line"><span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1-main-js中" tabindex="-1"><a class="header-anchor" href="#_1-main-js中"><span>1. main.js中</span></a></h2>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>ScreenKeyboard<span class="token punctuation">,</span> ScreenKeyboardManagerJS<span class="token punctuation">,</span>inkRecognitionHandler<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-keyboard"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@agree/ab-plugin-keyboard/keyboard.css'</span><span class="token punctuation">;</span></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ScreenKeyboard<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">write</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span> <span class="token comment">// 是否开启手写输入功能</span></span>
<span class="line">  <span class="token literal-property property">keyWidth</span><span class="token operator">:</span> <span class="token number">47</span><span class="token punctuation">,</span></span>
<span class="line">  <span class="token literal-property property">keyHeight</span><span class="token operator">:</span> <span class="token number">47</span>，</span>
<span class="line">  <span class="token literal-property property">offKeyboard</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span> <span class="token comment">//关闭虚拟键盘</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-keyboard" tabindex="-1"><a class="header-anchor" href="#_2-keyboard"><span>2. keyboard</span></a></h2>
<p>插件也支持国际化，需要在main.js中进行配置</p>
<div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre v-pre><code><span class="line"></span>
<span class="line"><span class="token keyword">import</span> VueI18n <span class="token keyword">from</span> <span class="token string">'vue-i18n'</span></span>
<span class="line"><span class="token keyword">import</span> zh <span class="token keyword">from</span> <span class="token string">'@agree/aui-web/lib/locale/lang/zh-CN.js'</span><span class="token punctuation">;</span> <span class="token comment">// 根据locale文件夹所在的位置引入语言包</span></span>
<span class="line"><span class="token keyword">import</span> en <span class="token keyword">from</span> <span class="token string">'@agree/aui-web/lib/locale/lang/en.js'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span>ScreenKeyboard<span class="token punctuation">,</span> ScreenKeyboardManagerJS<span class="token punctuation">,</span>inkRecognitionHandler<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@agree/ab-plugin-keyboard"</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token string">'@agree/ab-plugin-keyboard/keyboard.css'</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>VueI18n<span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"><span class="token comment">// 准备翻译的语言环境信息</span></span>
<span class="line"><span class="token keyword">const</span> messages <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token string-property property">'zh-CN'</span><span class="token operator">:</span> zh<span class="token punctuation">,</span></span>
<span class="line">  <span class="token string-property property">'en'</span><span class="token operator">:</span> en</span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 通过选项创建 VueI18n 实例</span></span>
<span class="line"><span class="token keyword">const</span> i18n <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">VueI18n</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">locale</span><span class="token operator">:</span> <span class="token string">'zh-CN'</span><span class="token punctuation">,</span> <span class="token comment">// 设置地区</span></span>
<span class="line">  messages</span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span>
<span class="line">Vue<span class="token punctuation">.</span><span class="token function">use</span><span class="token punctuation">(</span>ScreenKeyboard<span class="token punctuation">,</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token function-variable function">i18n</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter">key<span class="token punctuation">,</span> value</span><span class="token punctuation">)</span> <span class="token operator">=></span> i18n<span class="token punctuation">.</span><span class="token function">t</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span class="token comment">// 组件内部切换语言</span></span>
<span class="line"><span class="token comment">// this.$i18n.locale = 'zh-CN';</span></span>
<span class="line"><span class="token keyword">this</span><span class="token punctuation">.</span>$i18n<span class="token punctuation">.</span>locale <span class="token operator">=</span> <span class="token string">'en'</span><span class="token punctuation">;</span></span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-highlighter="prismjs" data-ext="text" data-title="text"><pre v-pre><code><span class="line">使用中文</span>
<span class="line"></span>
<span class="line">keyboard输入中文时，将v-keyboard的值修改为'chinese'，并将lib文件夹下的js文件放置到public(或者static)文件夹中，在index.html中引入ime-loader.js文件</span>
<span class="line"></span></code></pre>
<div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></div></template>


