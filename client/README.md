# 小程序

## 安装 typescript

```sh
npm install -g typescript
npm install -g typescript@next//安装不稳定的测试版本
```

```sh
启用 typescript
# tsc --init
```

### watch ts 文件自动编译并生成 js 文件

```sh
# vim tsconfig.json
  "watch": true
# tsc
```

### ts 文件的提示

> 配置一下让 VSCode 提供代码提示

```sh
安装 d.ts 文件
# typings install github:Emeryao/typed-we-app -SG
```

生成了 **typings.json** 和 **typings** 文件夹

### 解决 wxss 的提示

> wxss 就是 css 的子集，只要在 VSCode 中把 wxss 的语言模式选成 css 就可以了

### 解决 wxml 的提示

插件: vscode wxml

注意，安装这个插件后，**千万不能为 wxml 选择语言模式**

### 解决自动编译

上面已经解决了 ts 文件自动编译成 js 文件。但是，每次开启 vscode 之后，需要在终端里面手动输入 tsc 命令，也是很烦的。推荐安装这个插件 `Blade Runner-Run Task When Open` 安装好这个插件之后，在 VScode 里面选择菜单-任务-**配置默认生成任务**- tsc 构建
生成一个 **.vscode 文件夹**，里面有一个**tasks.json** 上面插件会在 VSCode 每次启动的时候，自动根据 task.json 运行一些命令（当然是运行 tsc 命令喽），这样，编译 ts 的工作就变成完全自动的了。如果看不到 tsc 构建这个选项，可能需要打开一个 ts 文件后再进行上述操作。ts 文件编译成 js 文件后，微信开发者工具也会自动的编译 js 文件。

