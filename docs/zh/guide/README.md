# 介绍
Vuepres 由两部分组成：第一部分是一个[极简静态网站生成器](https://github.com/veujs/vuepress/tree/master/packages/%40vuepress/core),它包含由Vue驱动的[主题系统](../theme/README.md)和[插件API](../plugin/README.md),另一个部分是为书写技术文档而优化的[默认主题](../theme/default-theme-config.md),它的诞生初衷是为了支持Vue及其子项目的文档需求。

每一个由VuePress生成的页面都带有预渲染好的HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue将接管这些静态内容，并将其转换成一个完整的单页应用（SPA）,其他的页面则会只在用户浏览到的时候才按需加载。

## 它是如何工作的？

事实上，一个VuePress网站是一个由[Vue](http://vuejs.org/)、[Vue Router](https://github.com/vuejs/vue-router)和[webpack](http://webpack.js.org/)驱动的单页应用。如果你以前使用过Vue的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用Vue Devtools去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染(SSR)的版本，然后通过虚拟访问每一条路径来渲染对应的HTML.这种做法的灵感来源于[Nuxt](https://nuxtjs.org/)的 `nuxt generate`命令，以及其他的一些项目，比如[Gatsbv](https://www.gatsbyjs.org/)。

## Features

**内置的 Markdown 扩展**

* [目录](../guide/markdowm.md#目录)
* [自定义容器](../guide/markdown,md#自定义容器)
* [代码块中的行高亮](../guide/markdown.md#代码块中的行高亮)
* [行号](../guide/markdown.md#行号)
* [导入代码段](../guide/markdowm.md#导入代码段)


**在 Markdown 中使用Vue**

* [模板语法](../guide/using-vue.md#模板语法)

**Vue驱动的自定义主题系统**

* [网站和页面的元数据](../theme/writing-a-theme.md#网站和页面的元数据)

**默认主题**

* [首页](../theme/defaut-theme-config.md#首页)

**Plugin**

* [强大的Plugin API](../plugin/README.md)

## 为什么不是……？

### Nuxt

### Docsify / Docute

### Hexo

### GitBook

