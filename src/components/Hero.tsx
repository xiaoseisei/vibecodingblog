import { motion } from 'framer-motion'
import { Github, Linkedin, Mail } from 'lucide-react'

/**
 * 首页首屏组件
 * 展示个人简介和主要 Slogan
 * 包含动画效果和社交链接
 */
export function Hero() {
  // 动画配置
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  // 社交链接配置
  const socialLinks = [
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Mail, href: 'mailto:hello@example.com', label: 'Email' },
  ]

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20">
      <motion.div
        className="max-w-4xl mx-auto px-6 text-center"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 头像/占位图 */}
        <motion.div variants={itemVariants} className="mb-8">
          <div className="w-32 h-32 mx-auto rounded-full gradient-bg p-1">
            <div className="w-full h-full rounded-full bg-[#0a0a0a] flex items-center justify-center">
              <span className="text-5xl">👨‍💻</span>
            </div>
          </div>
        </motion.div>

        {/* 主标题 */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">Hello, I'm</span>
          <br />
          <span className="text-white">Developer</span>
        </motion.h1>

        {/* 副标题/简介 */}
        <motion.p variants={itemVariants} className="text-xl md:text-2xl text-gray-400 mb-8">
          全栈开发者 | 开源爱好者 | 终身学习者
        </motion.p>

        {/* 描述 */}
        <motion.p variants={itemVariants} className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">
          热衷于构建优雅、高效的应用程序。专注于 React、TypeScript 和现代 Web 技术。
        </motion.p>

        {/* 社交链接 */}
        <motion.div variants={itemVariants} className="flex justify-center gap-4">
          {socialLinks.map((link) => {
            const Icon = link.icon
            return (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full glass flex items-center justify-center text-gray-400 hover:text-white hover:scale-110 transition-all"
                aria-label={link.label}
              >
                <Icon size={20} />
              </a>
            )
          })}
        </motion.div>

        {/* 向下滚动提示 */}
        <motion.div
          variants={itemVariants}
          className="mt-16 animate-bounce"
        >
          <a
            href="#about"
            className="text-gray-500 hover:text-white transition-colors"
          >
            <svg
              className="w-6 h-6 mx-auto"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
