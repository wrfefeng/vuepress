# 快速上手

::: warning 注意
请确保你的Node.js版本 》= 8.
:::

## 全局安装

如果你只是想尝试一下VuePress, 你可以全局安装它

```
# 安装
yarn global add vuepress@next # 或者： npm install -g vuepress@next

# 新建一个markdown 文件
echo '# Hello VuePress!' > README.md

# 开始写作
vuepress dev.

# 构建静态文件

```

## 现有项目

如果你想在一个现有项目中使用VuePress，同时想要在该项目中管理文档，则应该将VuePress安装为本地依赖。作为本地依赖安装让你可以使用持续继承工具，或者一些其他服务（比如Netlify）来帮助你在每次提交代码时自动部署。

``` bash
# 将 VuePress 作为一个本地安装依赖
yarn add -D vuepress@next # 或者： npm install -D vuepress@next

# 新建一个docss文件夹
mkdir docs

# 新建一个markdown文件
echo '#Hello VuePress!' > docs/READ.md

#开始写作
npx vuepress dev docs

```

::: warning
如果你的项目依赖了webpack 3.x，推荐使用 [Yarn](https://yarnpkg.com/en/)而不是npm来安装VuePress。因为在这种情形下，npm会生成错误的依赖树。
:::

接着，在 `package.json`里加一些脚本:

```json
{
  "scripts": {
    "docs:dev": "vuepress dev docs",
    "docs:build": "vuepress build docs"
  }
}
```
然后就可以写作了：
```bash
yarn docs:dev # 或者：npm run docs:dev
```

默认情况下，文件将会被生成在`.vuepress/dist`，当然，你也可以通过`.vuepress/config.js`中的`dest`字段来修改，生成的文件可以部署到任意的静态文件服务器上,参考[部署](deploy.md)来了解更多。