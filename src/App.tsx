import { BrowserRouter as Router } from 'react-router-dom'

/**
 * 应用根组件
 * 负责组织页面整体结构和路由配置
 */
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        {/* Header 组件 - 导航栏 */}
        {/* TODO: 添加 Header 组件 */}

        {/* Hero 组件 - 首页首屏 */}
        {/* TODO: 添加 Hero 组件 */}

        {/* About 组件 - 个人介绍 */}
        {/* TODO: 添加 About 组件 */}

        {/* Projects 组件 - 项目展示 */}
        {/* TODO: 添加 Projects 组件 */}

        {/* Contact 组件 - 联系方式 */}
        {/* TODO: 添加 Contact 组件 */}

        {/* Footer 组件 - 页脚 */}
        {/* TODO: 添加 Footer 组件 */}

        {/* 预留 Blog 路由位置 */}
        {/* TODO: 后续添加 /blog 路由 */}
      </div>
    </Router>
  )
}

export default App
