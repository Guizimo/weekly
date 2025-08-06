import { defineConfig } from 'vitepress'

import { RssPlugin } from 'vitepress-plugin-rss'

const RSS = {
  title: '归子莫的科技周刊',
  baseUrl: 'https://guizimo.github.io/weekly',
  description: '记录每周值得分享的输入以及个人的输出，每周五发布',
  language: 'zh-CN',
  copyright: 'Copyright © 2025 归子莫',
  filename: 'feed.xml'
}

export default defineConfig({
  title: '归子莫的科技周刊',
  description: '记录每周值得分享的输入以及个人的输出',
  base: '/weekly/',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/weekly/favicon.ico' }],
    ['meta', { name: 'author', content: '归子莫' }],
    ['meta', { name: 'keywords', content: '科技周刊,技术分享,前端,AI' }]
  ],

  vite: {
    plugins: [RssPlugin(RSS)]
  },

  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '周刊', link: '/2025/01/weekly-1' },
      { text: '关于', link: '/about' },
      { 
        text: '订阅', 
        items: [
          { text: 'Follow 订阅', link: 'https://app.follow.is/share/feeds/69573168071614464' },
          { text: '网站订阅', link: 'https://blog.guizimo.com/categories/ke-ji-zhou-kan' }
        ]
      }
    ],

    sidebar: [
      {
        text: '2025年',
        collapsed: false,
        items: [
          {
            text: '04月',
            collapsed: false,
            items: [
              { text: '第 16 期：花一笔钱给自己投资', link: '/2025/04/weekly-16' },
              { text: '第 15 期：如今低代码的发展进度', link: '/2025/04/weekly-15' },
              { text: '第 14 期：是在什么时候习惯用句号结尾', link: '/2025/04/weekly-14' }
            ]
          },
          {
            text: '03月',
            collapsed: false,
            items: [
              { text: '第 13 期：技术的价值在转变', link: '/2025/03/weekly-13' },
              { text: '第 12 期：当前端开始触及机器学习', link: '/2025/03/weekly-12' },
              { text: '第 11 期：AI 伴侣可补充但目前还不能替代现实社交关系', link: '/2025/03/weekly-11' },
              { text: '第 10 期：在 AI 的爆发期人需要更加冷静', link: '/2025/03/weekly-10' }
            ]
          },
          {
            text: '02月',
            collapsed: false,
            items: [
              { text: '第 9 期：少说无关的话', link: '/2025/02/weekly-9' },
              { text: '第 8 期：有些积雪会自己融化', link: '/2025/02/weekly-8' },
              { text: '第 7 期：但愿明天也会永远新鲜', link: '/2025/02/weekly-7' },
              { text: '第 6 期：过年是用360天圆的一个梦', link: '/2025/02/weekly-6' },
              { text: '第 5 期：关关难过关关过', link: '/2025/02/weekly-5' }
            ]
          },
          {
            text: '01月',
            collapsed: false,
            items: [
              { text: '第 4 期：不在沉默中爆发，就在沉默中灭亡', link: '/2025/01/weekly-4' },
              { text: '第 3 期：生活有轴心的感觉', link: '/2025/01/weekly-3' },
              { text: '第 2 期：白天搬砖，夜里读诗', link: '/2025/01/weekly-2' },
              { text: '第 1 期：一周是一年的2%', link: '/2025/01/weekly-1' }
            ]
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/guizimo/weekly' }
    ],

    footer: {
      message: '本周刊开源，欢迎投稿',
      copyright: 'Copyright © 2025 归子莫'
    },

    search: {
      provider: 'local'
    },

    editLink: {
      pattern: 'https://github.com/guizimo/weekly/edit/main/docs/:path',
      text: '在 GitHub 上编辑此页面'
    },

    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'short',
        timeStyle: 'medium'
      }
    }
  }
})