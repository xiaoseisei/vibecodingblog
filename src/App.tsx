import { BrowserRouter as Router } from 'react-router-dom'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

/**
 * 应用根组件
 * 负责组织页面整体结构和路由配置
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-[#0a0a0a]">
        {/* Header 组件 - 导航栏 */}
        <Header />

        {/* Hero 组件 - 首页首屏 */}
        <Hero />

        {/* About 组件 - 个人介绍 */}
        <About />

        {/* Projects 组件 - 项目展示 */}
        <Projects />

        {/* Contact 组件 - 联系方式 */}
        <Contact />

        {/* Footer 组件 - 页脚 */}
        <Footer />

        {/* 预留 Blog 路由位置 */}
        {/* TODO: 后续添加 /blog 路由 */}
      </div>
    </Router>
  )
}

export default App
