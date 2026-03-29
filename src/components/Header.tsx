import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

/**
 * 导航栏组件
 * 包含导航链接、移动端菜单和主题切换按钮
 * 滚动时显示玻璃态背景效果
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  // 监听滚动事件
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // 导航链接配置
  const navLinks = [
    { name: '首页', href: '#home' },
    { name: '关于', href: '#about' },
    { name: '项目', href: '#projects' },
    { name: '联系', href: '#contact' },
  ]

  // 平滑滚动到指定区域
  const scrollToSection = (href: string) => {
    setIsMobileMenuOpen(false)
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'glass py-4' : 'py-6'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold gradient-text">
          VibeBlog
        </a>

        {/* 桌面端导航 */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              {link.name}
            </button>
          ))}

          {/* 主题切换按钮 */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center hover:scale-110 transition-transform"
            aria-label="切换主题"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-indigo-600" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>
        </nav>

        {/* 移动端菜单按钮和主题切换 */}
        <div className="md:hidden flex items-center gap-3">
          {/* 移动端主题切换按钮 */}
          <motion.button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full glass flex items-center justify-center"
            aria-label="切换主题"
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={theme}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
              >
                {theme === 'dark' ? (
                  <Sun size={18} className="text-yellow-400" />
                ) : (
                  <Moon size={18} className="text-indigo-600" />
                )}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* 移动端菜单按钮 */}
          <button
            className="text-theme-text"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass mt-4 mx-6 rounded-lg p-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left py-2 text-theme-text-secondary hover:text-theme-text transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
