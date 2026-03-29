import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'
import { projects, type Project } from '../data/projects'

/**
 * 项目展示组件
 * 使用卡片式布局展示个人项目
 * 支持悬停放大效果和外部链接跳转
 */
export function Projects() {
  // 如果项目数据为空，使用示例数据
  const displayProjects: Project[] = projects.length > 0 ? projects : [
    {
      id: 1,
      title: '待办事项应用',
      description: '基于 React 和 TypeScript 开发的现代化待办事项管理应用，支持本地存储、优先级设置和任务分类。',
      image: '/placeholder-project-1.jpg',
      tags: ['React', 'TypeScript', 'Tailwind CSS'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com',
    },
    {
      id: 2,
      title: '博客系统',
      description: '使用 Next.js 和 Markdown 构建的静态博客生成器，支持代码高亮、暗色模式和 RSS 订阅。',
      image: '/placeholder-project-2.jpg',
      tags: ['Next.js', 'MDX', 'Vercel'],
      githubLink: 'https://github.com',
    },
    {
      id: 3,
      title: 'API 监控平台',
      description: '实时监控 API 性能指标的可视化仪表板，支持告警通知和数据导出功能。',
      image: '/placeholder-project-3.jpg',
      tags: ['Vue.js', 'ECharts', 'Node.js'],
      githubLink: 'https://github.com',
      demoLink: 'https://demo.com',
    },
  ]

  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="projects" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">项目展示</span>
          </h2>
          <p className="text-theme-text-secondary text-lg">我的一些个人项目和开源贡献</p>
        </motion.div>

        {/* 项目卡片网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {displayProjects.map((project: Project) => (
            <motion.div
              key={project.id}
              className="glass rounded-xl overflow-hidden group hover:scale-[1.05] transition-transform duration-300"
              variants={itemVariants}
            >
              {/* 项目截图 */}
              <div className="aspect-video bg-gradient-to-br from-indigo-500/20 to-purple-500/20 flex items-center justify-center">
                <span className="text-6xl">🚀</span>
              </div>

              {/* 项目信息 */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-theme-text mb-2 group-hover:text-indigo-400 transition-colors">
                  {project.title}
                </h3>

                {/* 项目描述 - 确保在白色背景下清晰可辨 */}
                <p className="text-theme-text-secondary text-sm mb-4 line-clamp-3">
                  {project.description}
                </p>

                {/* 技术标签 */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 bg-theme-bg-secondary text-theme-text-secondary rounded text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 链接按钮 */}
                <div className="flex gap-3">
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-theme-bg-secondary hover:bg-theme-border text-theme-text-secondary hover:text-theme-text transition-colors text-sm"
                    >
                      <Github size={16} />
                      源码
                    </a>
                  )}
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg gradient-bg hover:opacity-90 text-white transition-opacity text-sm"
                    >
                      <ExternalLink size={16} />
                      预览
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* 更多项目提示 */}
        {displayProjects.length === 0 && (
          <motion.div
            className="text-center text-theme-text-muted py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-lg">更多项目正在开发中...</p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
