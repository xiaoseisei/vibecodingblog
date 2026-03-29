import { motion } from 'framer-motion'
import { ExternalLink, Clock, Calendar } from 'lucide-react'
import { blogs, platformIcons, type Blog } from '../data/blogs'

/**
 * 博客列表组件
 * 支持外部链接和本地文章两种类型的混合展示
 * 使用网格布局，适配深浅色主题
 */
export function BlogList() {
  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
  }

  /**
   * 处理博客卡片点击
   * 根据类型执行不同的跳转逻辑
   */
  const handleBlogClick = (blog: Blog) => {
    if (blog.type === 'external' && blog.externalUrl) {
      // 外部链接：新窗口打开
      window.open(blog.externalUrl, '_blank', 'noopener,noreferrer')
    } else if (blog.type === 'local' && blog.slug) {
      // 本地文章：路由跳转（暂时用 console.log 占位）
      console.log(`导航到本地文章: /blog/${blog.slug}`)
      // TODO: 后续集成 React Router
      // navigate(`/blog/${blog.slug}`)
    }
  }

  /**
   * 获取平台图标
   */
  const getPlatformIcon = (platform?: string): string => {
    if (!platform) return platformIcons.default
    return platformIcons[platform] || platformIcons.default
  }

  /**
   * 格式化日期显示
   */
  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const year = date.getFullYear()
    const month = String(date.getMonth() + 1).padStart(2, '0')
    const day = String(date.getDate()).padStart(2, '0')
    return `${year}-${month}-${day}`
  }

  return (
    <section id="blog" className="py-20 px-6">
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
            <span className="gradient-text">博客文章</span>
          </h2>
          <p className="text-theme-text-secondary text-lg">
            记录学习历程，分享技术见解
          </p>
        </motion.div>

        {/* 博客卡片网格 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {blogs.map((blog) => (
            <motion.article
              key={blog.id}
              className="bg-theme-card border border-theme-border rounded-xl p-6 cursor-pointer hover:-translate-y-1 transition-transform duration-300 shadow-sm hover:shadow-lg"
              variants={itemVariants}
              onClick={() => handleBlogClick(blog)}
            >
              {/* 文章类型标识 */}
              <div className="flex items-center justify-between mb-4">
                {/* 类型标签 */}
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300">
                  {blog.type === 'external' ? '外部链接' : '本地文章'}
                </span>

                {/* 外部链接平台图标 */}
                {blog.type === 'external' && blog.platform && (
                  <span className="text-lg" title={`发布于: ${blog.platform}`}>
                    {getPlatformIcon(blog.platform)}
                  </span>
                )}

                {/* 本地文章图标 */}
                {blog.type === 'local' && (
                  <span className="text-lg">📄</span>
                )}
              </div>

              {/* 文章标题 */}
              <h3 className="text-xl font-bold text-theme-text mb-3 line-clamp-2 group-hover:text-indigo-400 transition-colors">
                {blog.title}
              </h3>

              {/* 文章描述 */}
              <p className="text-theme-text-secondary text-sm mb-4 line-clamp-3">
                {blog.description}
              </p>

              {/* 技术标签 */}
              <div className="flex flex-wrap gap-2 mb-4">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2 py-1 text-xs bg-theme-bg-secondary text-theme-text-secondary rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* 底部信息 */}
              <div className="flex items-center justify-between text-xs text-theme-text-muted pt-4 border-t border-theme-border">
                {/* 发布日期 */}
                <div className="flex items-center gap-1">
                  <Calendar size={12} />
                  <span>{formatDate(blog.date)}</span>
                </div>

                {/* 阅读时间 */}
                {blog.readTime && (
                  <div className="flex items-center gap-1">
                    <Clock size={12} />
                    <span>{blog.readTime}</span>
                  </div>
                )}

                {/* 外部链接指示器 */}
                {blog.type === 'external' && (
                  <ExternalLink size={12} className="text-theme-text-muted" />
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* 空状态 */}
        {blogs.length === 0 && (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-theme-text-muted text-lg">
              暂无文章，敬请期待...
            </p>
          </motion.div>
        )}
      </div>
    </section>
  )
}
