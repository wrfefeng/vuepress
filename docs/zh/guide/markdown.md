# markdown 拓展

## Header Anchors

所有的标题将会自动地应用anchor链接，anchor的渲染可以通过[markdown.anchor](../config/README.md#markdown-anchor)来配置。

## 链接

### 内部链接

内部的，并以`.md` or `.html` 结尾的链接，将会被转换成`<router-link>`用于SPA导航。

站内的每一个子文件夹都应当有一个`README.md`文件，它会被自动编译为`index.html`。

::: tip 重要提示
在链接到一个文件夹的`index.html`时，确保你的链接以`/`结尾，否则该链接将导致404。比如,用 `/config/`而不是`/config`。
:::

如果你想链接到另一个markdown文件：

1.确保链接以`.html`或`.md`结尾；
2.确保路径大小写正确，因为路径的匹配是大小写敏感的。

#### 示例
以如下的文件结构为例：

```
|--- README.md
|--- foo
|      |--- README.md
```