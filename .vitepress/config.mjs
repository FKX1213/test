import { defineConfig } from 'vitepress'
import {nav,sidebar} from "./menu.js";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "My Awesome Project",
  description: "A VitePress Site",
  srcDir:'docs',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    // 顶部导航栏和侧边导航栏，写一个函数返回对象
    nav: nav(),
    sidebar:sidebar(),
    // 右侧导航栏
    outlineTitle: "文档目录",
    outline: {
      level: [2, 6], // 标题级别2-6级
    },
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    socialLinks: [
      {icon: 'github', link: 'https://github.com'}
    ],
    docFooter: {
      //文档页脚
      prev: '上一篇',
      next: '下一篇'
    },
    lastUpdated: {
      text: "最后更新于", // 你必须使用git commit提交 markdown 文件才能看到最后更新时间。
      formatOptions: {
        dateStyle: "short", // full
        timeStyle: "short", // medium
      },
    },
    // 主页的底部配置，定义一个 footer
    footer: {
      copyright: "Copyright@ test test"
    },
    markdown: {
      lineNumbers: true
    },
  }
})