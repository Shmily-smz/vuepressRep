# package.json 模板

```json
{
  "name": "DemoModule",
  "version": "1.0.0",
  "description": "",
  "type": "Module",
  "style": [
    "pages/index"
  ],
  "moduleDependencies": {},
  "channels": {
    "te": {
      "include": [],
      "exclude": []
    },
    "mt": {
      "include": [],
      "exclude": []
    }
  },
  "extensions": {
    "launcher": {
      "appEntry": "path://DemoModule/pages/App.vue",
      "launcherEntry": "path://DemoModule/pages/app-loader.js"
    },
    "htmlConfig": {
      "title": "赞同科技智能柜台",
      "loading": {
        "backgroundUrl": ""
      },
      "scripts": [],
      "links": []
    },
    "pluginConfig": {
      "postcss-px-to-viewport": {
        "mt": {
          "viewportWidth": 2560,
          "viewportHeight": 1600
        }
      }
    },
    "DemoModule.package-name-alias": [
      {
        "from": "@",
        "to": "DemoModule"
      }
    ]
  },
  "dependencies": {
  },
  "devDependencies": {},
  "engines": {
    "node": ">=8.9"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```