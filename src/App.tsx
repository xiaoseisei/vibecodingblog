import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from './context/ThemeContext'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { BlogList } from './components/BlogList'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/**
 * 应用根组件
 * 负责组织页面整体结构和路由配置
 * 使用 ThemeProvider 包裹以支持全局主题切换
 * 使用 CSS 变量主题系统实现平滑过渡效果
 */
function App() {
  return (
    <Router>
      <ThemeProvider>
        {/* 使用主题 CSS 变量：bg-theme-bg 和 text-theme-text */}
        <div className="min-h-screen bg-theme-bg text-theme-text">
          {/* Header 组件 - 导航栏（含主题切换） */}
          <Header />

          {/* Hero 组件 - 首页首屏 */}
          <Hero />

          {/* About 组件 - 个人介绍 */}
          <About />

          {/* Projects 组件 - 项目展示 */}
          <Projects />

          {/* BlogList 组件 - 博客文章列表（混合外部链接和本地文章） */}
          <BlogList />

          {/* Contact 组件 - 联系方式 */}
          <Contact />

          {/* Footer 组件 - 页脚 */}
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  )
}

export default App
