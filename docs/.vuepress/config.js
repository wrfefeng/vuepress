module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'VuePress 1.x',
      description: 'Vue 驱动的静态网站生成器'
    }
  },
  head: [
    ['link', {rel: 'icon', href: `/hero.png`}]
  ],
  // theme: '@vuepress/vue',
  themeConfig: {
    editLinks: false,
    locales: {
      '/': {
        label: '简体中文',
        selectText: '选择语言',
        editLinkText: '在Github上编辑此页',
        lastUpdated: '上次更新',
        nav: [
          {
            text: '指南',
            link: '/zh/guide/'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/wrfefeng/vuepress.git'
          }
        ],
        sidebar: {
          '/zh/guide/': [
            {
              title: '基础信息',
              collapsable: false,
              children: [
                '',
                'getting-started',
                'directory-structure',
                'markdown'
              ]
            }
          ]
        }
      }
    }
  }
}
