import { defineUserConfig } from "vuepress";
import { defaultTheme } from "@vuepress/theme-default";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { searchPlugin } from "@vuepress/plugin-search";
import { getSidebarItems } from "./utils/index";
import path from "path";

let { items: sidebarItems, navbarItems: navbarItems1 } = getSidebarItems(
  "AB产品知识库",
  "AB产品知识库"
);
let { items: sidebarItems2, navbarItems: navbarItems2 } = getSidebarItems(
  "ABX5",
  "ABX5"
);

export default defineUserConfig({
  base:"/vuepressRep/",
  lang: "en-US",
  title: "",
  description: "My first VuePress Site",
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
        text: "AB产品知识库",
        children: navbarItems1,
      },
      {
        text: "ABX5",
        children: navbarItems2,
      },
    ],
    sidebar: {
      "/AB产品知识库/": sidebarItems,

      "/ABX5/": sidebarItems2,
    },
    // sidebar: sidebarItems, // 使用生成的侧边栏配置
    search: true, // 启用搜索
    searchMaxSuggestions: 10, // 最大搜索建议数量
  }),

  bundler: webpackBundler(),
});
