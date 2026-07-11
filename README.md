# Termux 交流社区官网

## 项目简介

Termux 交流社区官网是一个纯静态网站，专为 Android Termux 用户打造。网站采用数据驱动架构，所有展示内容（下载资源、推荐文章、社区公告）均通过独立的 JavaScript 数据文件动态渲染。

**技术栈**：HTML5 + CSS3 + Vanilla JavaScript，零框架依赖，零构建步骤。

---

## 现有功能

### 1. 首页（index.html）

- 社区介绍与核心价值展示
- 哔哩哔哩宣传片嵌入播放
- 快速入口导航（下载中心、推荐文章、社区公告）
- Termux 官方资源外链聚合

### 2. 下载中心（downloads.html）

- **数据驱动渲染**：所有项目卡片从 `downloads-data.js` 自动读取并渲染
- **三大分类**：脚本工具、项目、更多资源
- **搜索功能**：顶部搜索框输入关键词，跳转至 `search.html` 按相关性排序展示结果
- **GitHub 跳转中间页**：点击下载按钮后进入过渡页，提示用户检查网络连通性，8 秒超时后显示失败提示

### 3. 搜索结果页（search.html）

- 仅搜索 `downloads-data.js` 中的数据（脚本工具 + 项目模板 + 更多资源）
- 相关性排序规则：标题完全匹配（20 分）> 标题包含（10 分）> 描述包含（5 分）> 版本号包含（3 分）
- 支持 URL 直接访问：`search.html?q=关键词`

### 4. 推荐文章（articles.html）

- 从 `articles-data.js` 动态渲染文章卡片
- 展示文章标题、作者、日期、标签和摘要
- 点击跳转至 QQ 频道或 CSDN 博客原文

### 5. 社区公告（announcement.html）

- 从 `announcement-data.js` 动态渲染公告列表
- 支持置顶标识（红色边框高亮）
- 支持外链按钮和标签分类

### 6. 关于我们（about.html）

- 社区初衷、发展历程时间线
- 社区数据统计（成员数、文章数、项目数、脚本数）
- 社区板块介绍与加入入口

### 7. 联系我们（contact.html）

- 多平台社区入口：哔哩哔哩、QQ 一群、QQ 二群（1034443023）、QQ 频道、CSDN 博客、微信公众号
- 常见问题 FAQ

### 8. 公共组件（common.js）

- 响应式导航菜单（桌面端顶部导航 + 移动端汉堡菜单）
- 滚动时导航栏阴影变化
- 平滑滚动锚点跳转
- 回到顶部按钮
- 滚动进入视口时的渐入动画（IntersectionObserver）

---

## 已知问题与待改进

### 🔍 搜索逻辑不足

当前搜索功能实现较为基础，存在以下局限：

| 问题 | 说明 |
|------|------|
| 仅支持关键词匹配 | 无模糊搜索、无拼音搜索、无同义词扩展 |
| 无搜索建议 | 输入时无自动补全或热门搜索推荐 |

**欢迎协助维护**：如果你熟悉前端搜索算法（如 Fuse.js、MiniSearch、倒排索引等），欢迎提交 PR 优化搜索体验。具体方向包括但不限于：

- 引入轻量级搜索库实现模糊匹配
- 添加搜索历史本地存储（localStorage）
- 实现输入框实时搜索建议（debounce）
- 扩展搜索范围至文章和公告数据

---

## 向下载中心提交你的项目

社区官网下载中心面向所有成员开放项目收录。无论你是写了脚本、搭了模板，还是发现了好用的工具，都可以提交展示。

### 提交方式

**方式一：Fork + Pull Request（推荐）**

1. Fork 本仓库
2. 在 `downloads-data.js` 对应分类数组中添加项目数据
3. Commit 信息注明项目名称、类型和说明
4. 发起 Pull Request 等待审核

**方式二：QQ 频道私信管理员**

1. 进入 Termux 交流社区 QQ 频道
2. 私信管理员发送项目信息（名称、类型、描述、链接、图标、按钮颜色）
3. 等待 1-3 个工作日审核

详细提交指南见 [CONTRIBUTING.md](CONTRIBUTING.md)。

**下载中心期待你的项目加入。**

---

## 文件结构

```
.
├── index.html              # 首页
├── about.html              # 关于我们
├── downloads.html          # 下载中心（JS 动态渲染）
├── search.html             # 搜索结果页（JS 动态渲染）
├── articles.html           # 推荐文章
├── announcement.html       # 社区公告
├── contact.html            # 联系我们
├── common.js               # 公共 JS（导航、动画、回到顶部）
├── downloads-data.js       # 下载中心数据源
├── articles-data.js        # 文章数据源
├── announcement-data.js    # 公告数据源
├── github-redirect.html    # GitHub 跳转中间页
├── README.md               # 本文件
└── CONTRIBUTING.md         # 项目提交指南
```

---

## 数据维护说明

所有 `*-data.js` 文件与 HTML 完全分离，日常更新只需修改数据文件：

| 数据文件 | 影响页面 | 维护场景 |
|----------|----------|----------|
| `downloads-data.js` | downloads.html、search.html | 新增/更新/删除项目 |
| `articles-data.js` | articles.html | 新增/更新文章推荐 |
| `announcement-data.js` | announcement.html | 发布/更新公告 |

修改数据文件后刷新页面即生效，无需重启服务器或重新构建。

---

## 浏览器兼容

- Chrome / Firefox / Safari / Edge 最新版
- 移动端 Safari / Chrome 适配
- IE 不支持

---

**维护注意**：所有数据文件（`*-data.js`）与 HTML 分离，日常更新只需改 JS 数据文件，无需触碰 HTML 结构。
