# 个人网站 - 进化型算法工程师

这是一个现代化的个人作品集网站，展示了我作为算法工程师的项目经历、技术栈和专业能力。网站采用深色主题设计，结合毛玻璃效果和流畅的动画，提供专业且美观的用户体验。

## 🌟 项目特色

- **现代设计**：深色主题搭配毛玻璃效果，营造专业科技感
- **响应式布局**：适配桌面端、平板和移动设备
- **双语支持**：中英文切换功能，满足国际用户需求
- **流畅动画**：悬停效果和过渡动画提升用户体验
- **项目展示**：详细的项目卡片和案例分析
- **技术栈可视化**：直观展示核心技能和工具

## 🛠️ 技术栈

- **前端框架**：纯HTML5 + CSS3 + JavaScript
- **CSS框架**：Tailwind CSS v3
- **字体**：Google Fonts (Plus Jakarta Sans, Be Vietnam Pro)
- **图标**：Material Symbols
- **响应式设计**：Flexbox + CSS Grid

## 📂 文件结构

```text
/
├── index.html           # 主页面（个人主页）
├── index_v1.html        # 旧版本页面
├── project1.html        # 端到端风控模型项目
├── project2.html        # 儿童睡眠检测项目
├── project3.html        # 时序生物标志物挖掘项目
├── project4.html        # Wordle建模项目
├── pic/
│   └── 个人照片.JPG     # 个人头像
└── README.md           # 项目说明文档
```

## 🚀 本地运行与预览

本网站为纯静态前端项目，无需后端服务。

### 方法一：直接打开

在浏览器中直接打开 `index.html` 文件即可查看。

### 方法二：本地服务器（推荐）

如果你安装了 Python 3，在项目根目录执行：

```bash
python3 -m http.server
```

然后在浏览器中打开 `http://localhost:8000/index.html` 即可预览效果。

## 🌐 部署至 GitHub Pages

### 1. 准备仓库

登录 GitHub 账号，创建一个新的**公开 (Public) 仓库**：
- **推荐**：如果想通过 `https://[你的用户名].github.io` 直接访问，仓库名必须严格命名为 `[你的用户名].github.io`
- **可选**：如果作为子页面，可任意命名（如 `personal-website`），访问路径将是 `https://[你的用户名].github.io/personal-website`

### 2. 推送代码

在本地终端进入项目根目录，执行以下命令：

```bash
# 初始化Git仓库
git init

# 添加所有文件
git add .

# 提交初始版本
git commit -m "Initial commit: Personal portfolio website"

# 重命名主分支（如果需要）
git branch -M main

# 添加远程仓库（替换为你的仓库地址）
git remote add origin https://github.com/你的用户名/你的仓库名.git

# 推送到GitHub
git push -u origin main
```

### 3. 开启 GitHub Pages

1. 在 GitHub 仓库主页，点击顶部的 **Settings** 选项卡
2. 在左侧导航栏找到 **Pages**
3. 在 **Build and deployment** 下的 **Source** 选择 `Deploy from a branch`
4. 在 **Branch** 下拉菜单中选择 `main` 分支，并将文件夹设为 `/ (root)`，点击 **Save**

### 4. 访问网站

等待约 1-3 分钟后，GitHub Pages 会自动部署完成。你可以通过以下地址访问：
- `https://[你的用户名].github.io`（如果使用用户名命名仓库）
- `https://[你的用户名].github.io/仓库名`（如果使用其他名称）

## 🎨 自定义指南

### 修改个人信息

1. 打开 `index.html` 文件
2. 修改以下部分：
   - 个人姓名、职位描述
   - 关于我部分的个人介绍
   - 联系方式和社交媒体链接
   - 技术栈标签

### 更新项目内容

1. 编辑对应的项目文件（`project1.html` 至 `project4.html`）
2. 修改项目描述、技术栈、成果等内容
3. 调整项目卡片中的图片链接

### 更改主题颜色

在 `v2.html` 文件中，找到 Tailwind 配置部分，修改颜色变量即可：

```javascript
tailwind.config = {
  theme: {
    extend: {
      "colors": {
        "primary": "#ffd16c",  // 主色调
        "secondary": "#06d6a0", // 次要色调
        "tertiary": "#ff7161",  // 第三色调
        // 其他颜色...
      }
    }
  }
}
```

## 📱 浏览器兼容性

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+


---

**作者**：xuetong
**邮箱**：xtongzhou@163.com