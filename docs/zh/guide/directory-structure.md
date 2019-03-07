# 目录结构

VuePress 遵循 **“约定优于配置”** 的原则，推荐的目录结构如下：

::: warning 注意
请留意目录大小写
:::

- `docs/.vuepress`: 用于存放全局的配置、组件、静态资源等。
- `docs/.vuepress/components`: 该目录中的Vue组件将会被自动注册为全局组件。
- `docs/.vuepress/theme`：用于存放本地主题。
- `docs/.vuepress/styles`: 用于存放样式相关文件。
- `docs/.vuepress/styles/index.styl`：将会被自动应用的全局样式文件，会生成在最终的css文件结尾，具有比默认样式更高的优先级。
- `docs/.vuepress/styles/palette.styl`: 用于重写默认颜色常量,或者设置新的stylus颜色常量。
- `docs/.vuepress/public`：静态资源目录。
- `docs/.vuepress/templates`: '存储HTML模板文件。
- `docs/.vuepress/templates/dev.html`：用于开发环境的HTML模板文件。
- `docs/.vuepress/templates/ssr.html`： 构建时基于Vue SSR 的HTML模板文件。
- `docs/.vuepress/config.js`: 配置文件的入口文件，也可以是`YML` 或 `toml`。
- `docs/.vuepress/enhanceApp.js`: 客户端应用的增强。

::: warning 注意
当你想要去自定义 `template/ssr.html`或者`templates/dev.html`时，最好基于[默认的模板文件](https://github.com/vuejs/vuepress/blob/master/packages/%40vuepress/core/lib/app/index.dev.html)来修改，否则可能会导致构建出错。
:::

**同时阅读**

- [配置]()
- [主题]()
- [默认主题配置]()

## 默认的页面路由

此外，对于上述的目录结构， 默认页面路由地址如下：

| 文件的相对路径 | 页面路由地址 |
|---|---|
| `/README.md` | `/` |
| `/guide/README.md` | `/guide/` |
| `/congig.md` | `/config.html` |

