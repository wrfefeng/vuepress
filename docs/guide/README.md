# Introduction


VuePress is composed of two parts: a [minimalistic static site generator](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core) with a Vue-powered[theming svstem](../theme/README.md) and [Plugin API](../plugin/README.md), and a [default theme](../theme/default-theme-config.md) optimized for writing technical documentation. It was created to support the documentation nedds of Vue's own sub projects.

Each page generated by VuePress has its own pre-renderd static HTML, providing great loading performance and is SEO-friendly. Once the page is loaded, however, Vue takes over the static content and turns it into a full Single-Page Application (SPA). Additional pages are fetched on demand as the user navigates around the site.

## How It Works

A VuePrss site is in fact a SPA powered by [Vue](http://vuejs.org/), [Vue Router] (https://github.com/vuejs/vue-router) and [webpack](http://webpack.js.org/). If you've used Vue before, you will notice the familiar development experence when you are writing or developing custom themes (you can even use Vue DevTools to debug your custom theme!)
