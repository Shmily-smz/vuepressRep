import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { getSidebarItems } from "./utils/index";
import path from "path";

let { items: sidebarItems, navbarItems: navbarItems1 } = getSidebarItems(
  "allmd",
  "allmd"
);
let { items: sidebarItems2, navbarItems: navbarItems2 } = getSidebarItems(
  "AB3",
  "AB3"
);
let { items: sidebarItems3, navbarItems: navbarItems3 } = getSidebarItems(
  "AB4",
  "AB4"
);
export default defineUserConfig({
  base:"/vuepressRep/",
  lang: "en-US",
  title: "",
  description: "My first VuePress Site",
  head: [["script", { type: "text/javascript", src: "/js/base.js" }]],
  clientAppEnhanceFiles: path.resolve(__dirname, "./client.js"),
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search",
        },
        "/zh/": {
          placeholder: "搜索",
        },
      },
    }),
  ],

  theme: defaultTheme({
    logo: "./images/agreeLogo.png",

    // 配置导航栏
    navbar: [
      {
        text: "指南",
        children: navbarItems1,
      },
      {
        text: "AB3",
        children: navbarItems2,
      },
      {
        text: "AB4",
        children: navbarItems3,
      },
    ],
    sidebar: {
      "/allmd/": sidebarItems,

      "/AB3/": sidebarItems2,

      "/AB4/": sidebarItems3,
    },
    // sidebar: sidebarItems, // 使用生成的侧边栏配置
    search: true, // 启用搜索
    searchMaxSuggestions: 10, // 最大搜索建议数量
  }),

  bundler: webpackBundler(),
});
