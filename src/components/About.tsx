import { motion } from 'framer-motion'
import { skillCategories, type SkillCategory } from '../data/skills'
import * as Icons from 'lucide-react'

/**
 * 关于我组件
 * 展示个人介绍和技能列表
 * 使用卡片式布局展示不同类别的技能
 */
export function About() {
  // 动态获取图标组件
  const getIcon = (iconName: string) => {
    const IconComponent = (Icons as any)[iconName]
    return IconComponent ? <IconComponent size={24} /> : null
  }

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

  return (
    <section id="about" className="py-20 px-6">
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
            <span className="gradient-text">关于我</span>
          </h2>
          <p className="text-theme-text-secondary text-lg">了解更多关于我的背景和技能</p>
        </motion.div>

        {/* 个人介绍 */}
        <motion.div
          className="glass rounded-2xl p-8 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl font-bold text-theme-text mb-4">👋 你好！</h3>
          <p className="text-theme-text-secondary leading-relaxed mb-4">
            我是一名充满热情的全栈开发者，拥有多年的软件开发经验。
            我热爱探索新技术，并将其应用到实际项目中。
          </p>
          <p className="text-theme-text-secondary leading-relaxed mb-4">
            我的技术栈涵盖前端、后端以及 DevOps。
            我相信优秀的代码不仅要能运行，还要易于维护和扩展。
          </p>
          <p className="text-theme-text-secondary leading-relaxed">
            在工作之余，我喜欢参与开源项目，分享技术知识，
            并通过写博客来记录我的学习旅程。
          </p>
        </motion.div>

        {/* 技能分类 */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {skillCategories.map((category: SkillCategory) => (
            <motion.div
              key={category.id}
              className="glass rounded-xl p-6 hover:scale-[1.02] transition-transform"
              variants={itemVariants}
            >
              {/* 分类标题 */}
              <div className="flex items-center gap-3 mb-4">
                <div className="text-indigo-400">
                  {getIcon(category.icon)}
                </div>
                <h3 className="text-xl font-bold text-theme-text">{category.name}</h3>
              </div>

              {/* 技能标签 */}
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-indigo-300 rounded-full text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
