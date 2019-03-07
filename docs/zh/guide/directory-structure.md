# 目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

::: warning 注意
请留意目录大小写
:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的Vue组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`：用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关文件。

::: warning 注意
当你想要去自定义 `template/ssr.html`或者`templates/dev.html`时，最好基于[默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/app/index.dev.html)来修改，否则可能会导致构建出错。
:::
