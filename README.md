# 鹅鸭杀风格个人经历地图

这是一个带有“鹅鸭杀”游戏风格的个人经历展示网站。网站采用游戏化的两层交互结构来展示你的经历、兴趣与个性。

## 🌟 项目特色

1. **游戏化设定**：将枯燥的简历转化为游戏界面，提供“身份牌入口”作为第一层。
2. **沉浸式地图**：第二层为俯视角的可探索区域。无需繁琐的键盘操作，全程支持鼠标点击交互。
3. **角色移动系统**：内置平滑角色移动与状态锁定逻辑，增强浏览的趣味性与连贯性。
4. **毛玻璃 UI 设计**：深色模式基底结合现代 Glassmorphism（毛玻璃）特效，美观兼顾高级感。
5. **彩蛋系统**：留有可互动的环境装饰物，作为点缀。

## 🛠️ 技术栈

*   **HTML5 / 纯净 DOM**：构建语义化的页面结构。
*   **CSS3**：
    *   Flexbox & CSS Grid 响应式布局。
    *   `backdrop-filter` 毛玻璃效果。
    *   `transform` & `transition` 实现顺滑视图切换和角色移动。
*   **原生 JavaScript (Vanilla JS)**：处理地图坐标换算、角色移动引擎和弹窗控制。

## 📂 文件结构

```text
/
├── index.html     # 主页面结构及内容模板 (内含所有展示文案)
├── style.css      # 视觉设计、布局、颜色变量、动画关键帧
├── script.js      # 交互控制逻辑 (视图切换、坐标系计算、角色控制)
└── README.md      # 项目开发文档
```

## 🚀 本地运行与预览

本网站纯前端静态部署，不依赖后端中间件。由于引入了本地模板和部分 ES6 规范限制，某些浏览器可能会阻止在 `file:///` 协议下执行部分操作。

**推荐的本地运行方式：**

如果你安装了 Python 3，在当前根目录执行：
```bash
python3 -m http.server
```
然后在浏览器中打开 `http://localhost:8000` 即可预览效果。

## 🌐 部署至 GitHub Pages (github.io)

你的需求是将最终网站部署在 `github.io` 上，请按照以下步骤操作：

### 1. 准备仓库

登录你的 GitHub 账号，创建一个新的**公开 (Public) 仓库**。
*   *建议 1*：如果想通过 `https://[你的用户名].github.io` 直接访问，仓库名必须严格命名为 `[你的用户名].github.io`。
*   *建议 2*：如果只是作为子页面，可以随意命名（如 `personal-website`），访问路径将是 `https://[你的用户名].github.io/personal-website`。

### 2. 推送代码至 GitHub

在本地打开终端（Terminal），进入本项目的根目录，依次执行如下命令将代码推送到云端：

```bash
git init
git add .
git commit -m "Initial commit: Goose Goose Duck style personal website"
git branch -M main
# 将下面地址替换为你刚才创建的仓库地址
git remote add origin https://github.com/你的用户名/你的仓库名.git
git push -u origin main
```

### 3. 开启 GitHub Pages 服务

1.  在 GitHub 仓库主页，点击顶部的 **Settings** 选项卡。
2.  在左侧导航栏找到 **Pages**（或 GitHub Pages）。
3.  在 **Build and deployment** 下的 **Source** 选择 `Deploy from a branch`。
4.  在 **Branch** 下拉菜单中选择 `main` 分支，并将文件夹设为 `/ (root)`，点击 **Save**。

### 4. 等待发布
GitHub Actions 会自动打包发布。等待约 1~3 分钟后，你就可以访问你在 `github.io` 上的专属个人网站了！
