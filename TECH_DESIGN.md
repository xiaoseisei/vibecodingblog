
### 技术栈选型

* **核心框架：** React 18 + TypeScript (严格模式)。
* **构建工具：** Vite (追求极速的热更新体验)。
* **样式方案：** Tailwind CSS (原子化 CSS，便于快速构建 UI)。
* **动画库：** Framer Motion (处理复杂的物理特性动画)。
* **图标库：** Lucide React (简洁、一致的矢量图标)。

### 项目目录结构 (Architecture)

**Plaintext**

```
src/
├── assets/             # 图片、SVG 等静态资源
├── components/         # 可复用组件
│   ├── Header.tsx      # 导航栏（含模糊效果）
│   ├── Hero.tsx        # 首页首屏
│   ├── About.tsx       # 个人介绍及技能
│   ├── Projects.tsx    # 项目卡片列表
│   ├── Contact.tsx     # 联系信息
│   └── Footer.tsx      # 版权及底部链接
├── data/               # 静态数据管理
│   ├── projects.ts     # 项目数据数组
│   └── skills.ts       # 技能数据数组
├── hooks/              # 自定义 Hooks（如滚动监听）
├── App.tsx             # 页面根组件及结构组织
├── main.tsx            # 入口文件
└── index.css           # 全局 Tailwind 配置及基础样式
```

### 数据定义 (Data Types)

在 `src/data/` 中，通过 TypeScript 接口强制约束数据格式，确保 AI 生成代码时的类型安全：

**TypeScript**

```
// src/data/projects.ts
export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  // 初始占位项目数据
];
```
