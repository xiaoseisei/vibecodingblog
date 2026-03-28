import { Heart } from 'lucide-react'

/**
 * 页脚组件
 * 显示版权信息和底部链接
 */
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-6 border-t border-white/10">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* 版权信息 */}
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>© {currentYear} VibeBlog</span>
            <span>·</span>
            <span>用</span>
            <Heart size={14} className="text-red-500 fill-red-500" />
            <span>构建</span>
          </div>

          {/* 底部链接 */}
          <div className="flex items-center gap-6 text-sm">
            <a
              href="#home"
              className="text-gray-400 hover:text-white transition-colors"
            >
              首页
            </a>
            <a
              href="#about"
              className="text-gray-400 hover:text-white transition-colors"
            >
              关于
            </a>
            <a
              href="#projects"
              className="text-gray-400 hover:text-white transition-colors"
            >
              项目
            </a>
            <a
              href="#contact"
              className="text-gray-400 hover:text-white transition-colors"
            >
              联系
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
