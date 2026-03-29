import { motion } from 'framer-motion'
import { Mail, Github, Linkedin, Twitter, MapPin } from 'lucide-react'

/**
 * 联系方式组件
 * 提供多种联系方式和社交链接
 * 使用卡片式布局展示不同的联系渠道
 */
export function Contact() {
  // 联系信息配置
  const contactInfo = [
    {
      icon: Mail,
      label: '邮箱',
      value: 'hello@example.com',
      href: 'mailto:hello@example.com',
      description: '发送邮件给我',
    },
    {
      icon: MapPin,
      label: '位置',
      value: '中国',
      href: null,
      description: '远程工作友好',
    },
  ]

  // 社交链接配置
  const socialLinks = [
    {
      icon: Github,
      name: 'GitHub',
      href: 'https://github.com',
      color: 'hover:bg-white/20',
    },
    {
      icon: Linkedin,
      name: 'LinkedIn',
      href: 'https://linkedin.com',
      color: 'hover:bg-[#0077b5]/20',
    },
    {
      icon: Twitter,
      name: 'Twitter',
      href: 'https://twitter.com',
      color: 'hover:bg-[#1da1f2]/20',
    },
  ]

  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* 标题 */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">联系我</span>
          </h2>
          <p className="text-theme-text-secondary text-lg">有项目合作？随时联系我！</p>
        </motion.div>

        {/* 联系卡片 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {contactInfo.map((info, index) => {
            const Icon = info.icon
            return (
              <motion.a
                key={info.label}
                href={info.href || undefined}
                className={`glass rounded-xl p-6 hover:scale-[1.02] transition-transform ${
                  info.href ? 'cursor-pointer' : 'cursor-default'
                }`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-sm text-theme-text-secondary mb-1">{info.label}</h3>
                    <p className="text-lg font-semibold text-theme-text">{info.value}</p>
                    <p className="text-sm text-theme-text-muted">{info.description}</p>
                  </div>
                </div>
              </motion.a>
            )
          })}
        </div>

        {/* 社交链接 */}
        <motion.div
          className="glass rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-xl font-bold text-theme-text mb-6 text-center">
            关注我的社交媒体
          </h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => {
              const Icon = social.icon
              return (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-14 h-14 rounded-full glass flex items-center justify-center text-theme-text-secondary hover:text-theme-text transition-all ${social.color} hover:scale-110`}
                  aria-label={social.name}
                >
                  <Icon size={24} />
                </a>
              )
            })}
          </div>
        </motion.div>

        {/* 呼吁行动 */}
        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-theme-text-secondary mb-6">
            我对新的项目和合作机会持开放态度
          </p>
          <a
            href="mailto:hello@example.com"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full gradient-bg hover:opacity-90 text-white font-semibold transition-opacity"
          >
            <Mail size={20} />
            发送邮件
          </a>
        </motion.div>
      </div>
    </section>
  )
}
