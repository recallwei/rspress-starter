import path from 'node:path'

import { defineConfig } from 'rspress/config'

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  globalStyles: path.join(__dirname, 'styles/index.css'),
  title: 'Rspress Starter Template',
  description: 'An opinionated Rspress starter template.',
  icon: '/bit-ocean.png',
  logo: '/bit-ocean.png',
  route: {
    cleanUrls: true
  },
  themeConfig: {
    footer: {
      message: 'Made with ❤️ by Bruce Song'
    },
    outlineTitle: '目录',
    lastUpdated: true,
    lastUpdatedText: '上次更新',
    prevPageText: '上一篇',
    nextPageText: '下一篇',
    editLink: {
      docRepoBaseUrl:
        'https://github.com/recallwei/rspress-starter-template/tree/main/docs',
      text: '📝 在 GitHub 上编辑此页'
    },
    hideNavbar: 'auto',
    enableContentAnimation: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/recallwei'
      },
      {
        icon: 'discord',
        mode: 'link',
        content: 'https://discord.gg/NfPAGuz7Em'
      },
      {
        icon: 'juejin',
        mode: 'link',
        content: 'https://juejin.cn/user/4117044626470823'
      },
      {
        icon: 'wechat',
        mode: 'text',
        content: '微信号: Recall4056'
      },
      {
        icon: 'qq',
        mode: 'text',
        content: 'QQ: 2379312637'
      }
    ]
  },
  markdown: {
    // checkDeadLinks: true,
    showLineNumbers: true
  }
})
