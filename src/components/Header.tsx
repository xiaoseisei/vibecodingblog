import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

/**
 * 导航栏组件
 * 包含导航链接和移动端菜单
 * 滚动时显示玻璃态背景效果
 */
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

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
              className="text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>

        {/* 移动端菜单按钮 */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <nav className="md:hidden glass mt-4 mx-6 rounded-lg p-4">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.href)}
              className="block w-full text-left py-2 text-gray-300 hover:text-white transition-colors"
            >
              {link.name}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
