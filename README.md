# IA托者 · Information Archive to ZJUers

为浙大人整理的信息入口导航站。纯静态、零依赖、零构建，推上 GitHub 打开 Pages 就能用。

- 深色星空 / 浅色两套主题，可手动切换（记忆在 localStorage），默认深色
- 全站搜索：站名、描述、标签、域名都能命中，按 `/` 聚焦
- 卡片网格：三栏 / 两栏 / 单栏自适应，支持键盘与移动端
- 内容与页面分离：只改 `data/sites.js` 一个文件

## 本地预览

直接双击 `index.html` 即可（数据通过 `sites.js` 引入，不需要本地服务器）。

想预览浅色主题，在网址后加 `?theme=light`；想看深色加 `?theme=dark`。

## 部署到 GitHub Pages

1. 把本目录下**全部文件**（含隐藏文件 `.nojekyll`）提交到仓库默认分支 `main`。
2. 仓库 **Settings → Pages → Build and deployment**
   - Source 选 **Deploy from a branch**
   - Branch 选 **main**，目录选 **/(root)**
3. 保存，等 1 分钟左右，访问 `https://<用户名>.github.io/<仓库名>/`

仓库名如果就是 `<用户名>.github.io`，则直接是 `https://<用户名>.github.io/`。
换自定义域名时在 Pages 里填 Custom domain 即可 —— 页面里的路径全是相对路径，不用改代码。

## 目录结构

```
.
├─ index.html              页面骨架（顶栏 / 首屏 / 分类容器 / 关于 / 页脚）
├─ 404.html                GitHub Pages 的 404 页
├─ .nojekyll               关闭 Jekyll 处理
├─ data/
│  └─ sites.js             全站内容：站点信息 + 分类 + 入口列表
├─ assets/
│  ├─ css/style.css        全部样式（顶部是设计变量）
│  ├─ js/app.js            渲染、搜索、主题、星空、动效
│  └─ img/                 logo.svg / favicon.svg
└─ README.md
```

## 加一个入口

打开 `data/sites.js`，在对应分类的 `items` 数组里加一行：

```js
{ name: "校园服务", icon: "campus", items: [
  { name: "学在浙大", url: "https://course.zju.edu.cn", desc: "课程、作业与在线学习", tags: ["课程", "教务"] },
  { name: "ZJU Git", url: "https://git.zju.edu.cn", desc: "校内代码托管" }
]},
```

- `name` `url` 必填，`desc`、`tags`、`logo` 可选
- `logo` 写图片路径，会显示在卡片标题前（16×16）
- 新增分类：复制一整项，改 `id`、`name`、`icon`
- `icon` 可选值：`campus` `book` `forum` `ai` `zap` `model` `office` `design` `media` `link`

分类里一旦有条目，原本那排「待添加」虚位卡片会自动消失。

## 改外观

样式表最上面是变量，改这几个就够：

| 变量 | 作用 |
| --- | --- |
| `--accent` / `--accent-2` | 主色 / 渐变辅色 |
| `--maxw` | 内容最大宽度（默认 1280px） |
| `--radius` | 卡片圆角 |
| `--bg` `--text` `--card-bg` | 各主题底色与文字色 |

## 其他开关（`data/sites.js` 的 `site` 里）

| 字段 | 说明 |
| --- | --- |
| `repo: "用户名/仓库名"` | 顶栏与页脚出现 GitHub 入口 |
| `submitUrl` | 「提交入口」按钮地址，留空则自动指向仓库的 new issue 页 |
| `placeholderCount` | 分类为空时铺几张「待添加」虚位卡片（默认 3） |

## 常见问题

**打开是白屏 / 只有背景？** 检查 `data/sites.js` 与 `assets/js/app.js` 路径是否正确，以及浏览器控制台有没有报错。

**改了内容没生效？** Pages 构建有延迟；本地刷新用 `Ctrl + F5` 清缓存。

**想默认浅色？** 改 `index.html` 顶部脚本里的 `(saved || 'dark')` 为 `'light'`。

**中文标题不显示？** 这是层叠问题：`main` 必须压住固定的背景层（`main { position: relative; z-index: 1 }`）。改样式时别把这个规则删掉。

## 内容来源

前半部分是常用服务与资源（书签、校内系统、学习站点），后半部分是 CC98 帖子存档。

- 帖子按标题的**语气**分组：讨论 / 抒情 / 整活 / 脑洞 / 论坛生态 / 校园日常 / 其他 —— 因为标题多是玩梗，按内容主题反而容易分错；「其他」是兜底，话题对不上的一律丢这里
- 只存链接，不搬运帖子正文；原帖被删则链接失效
- 个人账号链接、带 token 的地址、私人收藏一律未收录
