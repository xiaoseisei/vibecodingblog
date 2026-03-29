import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

/**
 * 主题类型定义
 */
export type Theme = 'light' | 'dark'

/**
 * 主题上下文类型定义
 */
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

/**
 * 主题上下文
 * 默认值为 undefined，需要在 Provider 中提供实际值
 */
const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

/**
 * 主题上下文 Provider 组件属性
 */
interface ThemeProviderProps {
  children: ReactNode
}

/**
 * 主题 Provider 组件
 * 管理全局主题状态，支持 localStorage 持久化和系统偏好检测
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => {
    // 初始化时从 localStorage 读取主题设置
    const storedTheme = localStorage.getItem('theme') as Theme | null
    if (storedTheme) {
      return storedTheme
    }

    // 若无存储，检测系统偏好
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark'
    }

    return 'light'
  })

  /**
   * 应用主题到 DOM
   * 在 document.documentElement 上添加/移除 'dark' 类名
   */
  useEffect(() => {
    const root = document.documentElement

    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }

    // 持久化到 localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  /**
   * 切换主题函数
   * 在 light 和 dark 之间切换
   */
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

/**
 * 使用主题上下文的 Hook
 * 抛出错误确保在 ThemeProvider 内部使用
 */
export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
