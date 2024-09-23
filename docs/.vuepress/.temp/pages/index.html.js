import comp from "/Users/wangaoqi/Desktop/vuepressRep/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"我的首页\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"我的首页\",\"heroImage\":\"/images/1.png\",\"heroText\":\"赞同前端文档详设库\",\"tagline\":\"包含赞同目前所有的文档\",\"actions\":[{\"text\":\"快速上手 →\",\"link\":\"/allmd/\",\"type\":\"primary\"}],\"features\":[{\"title\":\"简单易用\",\"details\":\"可快速更新与查阅文档。\"},{\"title\":\"高度可定制\",\"details\":\"定制侧边栏展示顺序，添加文档等。\"},{\"title\":\"文档覆盖广\",\"details\":\"后续添加更多文档。\"}],\"footer\":\"ABX5团队 | 版权所有\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
