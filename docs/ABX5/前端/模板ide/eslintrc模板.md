# eslint 相关模板

## eslint 配置模板

```javascript
module.exports = {
  root: true,
  extends: [
    // eslint 基本语法规则
    "eslint:recommended",
    "standard",
    "plugin:vue/essential"
  ],
  // vue 代码检查
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    sourceType: "module",
    requireConfigFile: false,
  },
  plugins: [
    "@babel"
  ],
  env: {
    browser: true,
    es6: true,
  },
  // 所有文件内的代码检查规则
  rules: {
    // 要求或禁止使用分号
    semi: [
      2,
      "never"
    ],
    // 强制使用一致的反勾号、双引号或单引号
    quotes: 0,
    // 强制在 function 的左括号之前使用一致的空格
    "space-before-function-paren": 0,
    // 强制在注释中 // 或 /* 使用一致的空格
    "spaced-comment": 0,
    // 要求使用 === 和 !==
    eqeqeq: 0,
    // 强制要求函数内的变量要么一起声明,要么分开声明
    "one-var": 0,
    'no-unused-vars': 1, // 不允许有未使用的变量
    // 要求或禁止文件末尾存在空行
    "eol-last": 0,
    // 禁止使用多个空格
    "no-multi-spaces": 0,
    // 禁止多余的 return 语句
    "no-useless-return": 0,
    // 禁止在 return、throw、continue 和 break 语句之后出现不可达代码
    "no-unreachable": 0,
    // 要求或禁止末尾逗号
    "comma-dangle": [
      "error",
      {
        arrays: "never",
        objects: "always",
        imports: "never",
        exports: "always",
        functions: "never",
      }
    ],
    // 强制使用一致的缩进
    indent: [
      "error",
      2,
      {
        ignoredNodes: [
          "TemplateLiteral"
        ],
        SwitchCase: 1,
      }
    ],
  },
  overrides: [
    // vue文件内检查规则
    {
      files: [
        "*.vue"
      ],
      plugins: [
        "html", // eslint-plugin-html
        "vue" // eslint-plugin-vue 插件
      ],
      rules: {
        // vue 内的 <script> 标签内使用一致的缩进
        indent: 0,
        "vue/script-indent": [
          "error",
          // 数字代表1缩进为几个空格符
          2,
          {
            baseIndent: 1,
            switchCase: 1,
          }
        ],
        // 组件名规则:多单词组成
        "vue/multi-word-component-names": 0,
        // 要求或禁止模板字符串中的嵌入表达式周围空格的使用
        "template-curly-spacing": 0,
      },
    },
    // ts文件内的检查规则
    {
      files: [
        "*.ts"
      ],
      parser: "@typescript-eslint/parser",
      plugins: [
        '@typescript-eslint'
      ],
      extends: [
        'plugin:@typescript-eslint/recommended'
      ],
      rules: {},
    }
  ],
  globals: {
    $: true,
    _pageData: true,
    _externalData: true,
    _prePageData: true,
    __DEV__: true,
    abx: true,
    define: true,
    window: true,
  },
}

```

## eslint 检查忽略文件

```
.settings
.studio
aft
data
lfc
lib
processes
rcdx
thirdLib
@types
.classpath
.comment
.ignore
.project
.eslintrc.js
config.properties
**/**/.comment
```