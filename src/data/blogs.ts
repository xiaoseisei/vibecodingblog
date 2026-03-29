/**
 * 博客文章类型定义
 * 支持 'external' (外部链接) 和 'local' (本地文章) 两种类型
 */
export type BlogType = 'external' | 'local'

/**
 * 博客文章数据结构
 */
export interface Blog {
  id: string                    // 文章唯一标识
  title: string                 // 文章标题
  description: string           // 文章描述/摘要
  type: BlogType                // 文章类型：external | local
  date: string                  // 发布日期 (YYYY-MM-DD)
  tags: string[]                // 技术标签
  readTime?: string             // 阅读时间 (可选)

  // 外部链接专属字段
  externalUrl?: string          // 外部链接地址
  platform?: string             // 发布平台名称 (juejin, zhihu, etc.)

  // 本地文章专属字段
  slug?: string                 // 文章路径 (用于路由)
}

/**
 * 博客文章数据数组
 * 混合包含外部链接和本地文章
 */
export const blogs: Blog[] = [
  // 外部链接示例
  {
    id: '1',
    title: 'React 18 并发模式深度解析',
    description: '深入探讨 React 18 引入的并发模式、Suspense 和 useTransition 等新特性，以及如何在项目中正确使用它们。',
    type: 'external',
    externalUrl: 'https://juejin.cn/post/example1',
    platform: '掘金',
    date: '2026-03-25',
    tags: ['React', '前端', '并发'],
    readTime: '8 min',
  },
  {
    id: '2',
    title: 'TypeScript 高级类型体操实战',
    description: '通过实际案例学习 TypeScript 的高级类型系统，包括条件类型、映射类型、模板字面量类型等。',
    type: 'external',
    externalUrl: 'https://juejin.cn/post/example2',
    platform: '掘金',
    date: '2026-03-20',
    tags: ['TypeScript', '前端', '类型系统'],
    readTime: '12 min',
  },
  {
    id: '3',
    title: '深入理解 Node.js 事件循环',
    description: '从源码角度分析 Node.js 事件循环的运行机制，包括宏任务、微任务、process.nextTick 等概念。',
    type: 'external',
    externalUrl: 'https://zhihu.com/example3',
    platform: '知乎',
    date: '2026-03-15',
    tags: ['Node.js', '后端', '事件循环'],
    readTime: '10 min',
  },

  // 本地文章示例
  {
    id: '4',
    title: '如何用 React 搭建个人作品集网站',
    description: '从零开始，使用 React、TypeScript 和 Tailwind CSS 构建一个现代化的个人作品集网站，包含主题切换、响应式设计等功能。',
    type: 'local',
    slug: 'how-to-build-portfolio',
    date: '2026-03-28',
    tags: ['React', 'TypeScript', 'Tailwind CSS'],
    readTime: '15 min',
  },
  {
    id: '5',
    title: 'Vite vs Webpack：构建工具对比分析',
    description: '对比分析 Vite 和 Webpack 的优缺点，帮助你在新项目中选择合适的构建工具。',
    type: 'local',
    slug: 'vite-vs-webpack-comparison',
    date: '2026-03-10',
    tags: ['Vite', 'Webpack', '构建工具'],
    readTime: '6 min',
  },
  {
    id: '6',
    title: 'CSS 变量主题系统最佳实践',
    description: '介绍如何使用 CSS 变量构建可扩展的主题系统，支持浅色/深色模式切换，以及未来扩展更多主题。',
    type: 'local',
    slug: 'css-variable-theme-system',
    date: '2026-03-05',
    tags: ['CSS', '主题系统', '前端架构'],
    readTime: '9 min',
  },
]

/**
 * 平台图标映射
 * 用于显示外部链接的发布平台图标
 */
export const platformIcons: Record<string, string> = {
  juejin: '💎',      // 掘金
  zhihu: '📝',       // 知乎
  github: '🐙',      // GitHub
  devto: '👨‍💻',     // Dev.to
  medium: '📰',      // Medium
  default: '🔗',     // 默认外部链接
}
