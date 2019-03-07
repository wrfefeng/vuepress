# 部署

下述指南基于以下条件：
- 文档放置在项目`docs`目录中；
- 使用的是默认的构建输出位置；
- VuePress 以本地依赖的形式被安装到你的项目中，并且配置了如下的npm scripts:

``` json
  {
    "scripts": {
      "docs:build": "vuepress build docs"
    }
  }
```