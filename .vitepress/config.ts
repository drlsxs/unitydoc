import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "unity 开发示例",
  description: "文档",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '示例', link: '/markdown-examples' }
    ],
    outlineTitle: '',
    sidebar: [
      {
        text: '标注',
        link: '/markdown-examples.html#标注',
      },
      {
        text: '标注2',
        link: '/markdown-examples.html#标注2',
      },
      {
        text: 'api',
        link: '/api',
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
