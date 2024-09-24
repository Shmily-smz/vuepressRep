---
outline: deep
---

# SDK package.json说明

## 属性说明
| 字段名                          | 类型      | 说明                   |
| ------------------------------- | --------- | ---------------------- |
| name | string | 包名 |
| author | string | 作者名 |
| version | string | 版本号 |
| description | string | 包描述 |
| company | string | 版权所属 |
| copyright | string | 版权所属 |
| main | string | 入口文件 |
| types | string | 声明文件 |
| license | string | 开源许可证 |
| files | Array | 指定的发布内容 |
| keywords | Array | 技术关键词 |
| style | Array | 内样式依赖文件 |
| dependencies | Object | 运行时所依赖的工具包 |
| devDependencies | Object | 开发时所依赖的工具包 |

## 示例
``` json
{
  // 包名 如: @agree/ab-manager-*
  "name": "",
  // 作者
  "author": "",
  // 版本号
  "version": "1.0.0",
  // 描述
  "description": "",
  // 版权所属
  "company": "赞同科技股份有限公司",
  "copyright": "Copyright © 赞同科技股份有限公司 2023",
  // 入口文件
  "main": "",
  // 声明文件
  "types": "",
  // 开源许可证
  "license": "",
  // 指定的发布内容
  "files": [],
  // 技术关键词
  "keywords": [],
  // 内的样式依赖
  "style": [],
  // 运行时所依赖的工具包
  "dependencies": {},
  // 开发时所依赖的工具包
  "devDependencies": {}
}
```