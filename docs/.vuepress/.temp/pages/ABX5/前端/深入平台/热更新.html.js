import comp from "/Users/wangaoqi/Desktop/docsify/vuepress-starter/docs/.vuepress/.temp/pages/ABX5/前端/深入平台/热更新.html.vue"
const data = JSON.parse("{\"path\":\"/ABX5/%E5%89%8D%E7%AB%AF/%E6%B7%B1%E5%85%A5%E5%B9%B3%E5%8F%B0/%E7%83%AD%E6%9B%B4%E6%96%B0.html\",\"title\":\"热更新 {#热更新}\",\"lang\":\"en-US\",\"frontmatter\":{\"outline\":\"deep\"},\"headers\":[],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"ABX5/前端/深入平台/热更新.md\"}")
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
