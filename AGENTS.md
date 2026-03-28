
### 项目概述

本项目是基于 **React + TypeScript + Tailwind CSS** 的个人作品集网站，追求极简、高端的深色 UI 风格。

### 开发规范 (Strict Rules)

1. **组件编写：** 全部使用函数式组件 (Functional Components) 及 Hooks (useState, useEffect)。
2. **类型安全：** 所有组件 Props 必须显式定义 Interface，禁止使用 `any`。
3. **样式风格：** * 背景色统一使用 `#0a0a0a`。
   * 主色调渐变：`from-indigo-500 via-purple-500 to-pink-500`。
   * 利用 Tailwind 的 `dark` 模式或直接配置全局深色变量。
4. **动效：** * 页面加载时，Header 需有 0.5s 的延迟淡入。
   * Project Card 在鼠标悬停时需有 1.05 倍缩放效果。
5. **注释：** 关键逻辑及组件渲染块需添加中文注释。注释需符合开发标准。
6. **安全：**每一次更改都需要进行一次代码验证，并将代码上传到git。

### 详细执行指令

* **Step 1:** 初始化 Vite 项目并安装依赖：`npm install -D tailwindcss postcss autoprefixer framer-motion lucide-react`。
* **Step 2:** 配置 `tailwind.config.js`，扩展深色主题下的强调色渐变。
* **Step 3:** 优先构建 `src/data/` 下的数据文件，确保业务逻辑与 UI 彻底分离。
* **Step 4:** 实现响应式 Layout，确保在 iPhone 14 及 iPad Pro 上无布局溢出。
* **Step 5:** 图片采用原生懒加载 `loading="lazy"`，优化 LCP 指标。

### 迭代提醒

* **预留接口：** 在 `App.tsx` 中预留 `Blog` 路由位置，使用 `React Router` 进行扩展。
