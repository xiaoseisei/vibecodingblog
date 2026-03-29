import { createContext, useContext, useEffect, useState, ReactNode } from 'react'

/**
 * 主题类型定义
 * 支持扩展：添加新主题时在此处添加新的主题标识
 */
export type Theme = 'light' | 'dark' | 'forest' | 'ocean'

/**
 * 可用主题列表
 * 用于主题选择器等 UI 组件
 */
export const AVAILABLE_THEMES: { value: Theme; label: string; icon: string }[] = [
  { value: 'light', label: '浅色', icon: '☀️' },
  { value: 'dark', label: '深色', icon: '🌙' },
  // { value: 'forest', label: '森林', icon: '🌲' },  // 预留：未来启用
  // { value: 'ocean', label: '海洋', icon: '🌊' },    // 预留：未来启用
]

/**
 * 主题上下文类型定义
 */
interface ThemeContextType {
  /** 当前主题 */
  theme: Theme
  /** 在 light/dark 之间切换 */
  toggleTheme: () => void
  /** 直接设置指定主题（支持多主题扩展） */
  setTheme: (theme: Theme) => void
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
 * 设计为可扩展架构，新增主题只需：
 * 1. 在 Theme 类型中添加新值
 * 2. 在 index.css 中定义对应的 CSS 变量
 * 3. 在 AVAILABLE_THEMES 中添加配置
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>(() => {
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
   * 支持多主题：移除所有主题类名，添加当前主题类名
   */
  useEffect(() => {
    const root = document.documentElement

    // 移除所有主题类名
    AVAILABLE_THEMES.forEach(({ value }) => {
      root.classList.remove(value)
      // 移除旧的 'light' 类名（向后兼容）
      if (value === 'light') {
        root.classList.remove('light')
      }
    })

    // 添加当前主题类名
    root.classList.add(theme)

    // 持久化到 localStorage
    localStorage.setItem('theme', theme)
  }, [theme])

  /**
   * 在 light/dark 之间切换
   */
  const toggleTheme = () => {
    setThemeState((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'))
  }

  /**
   * 直接设置指定主题
   * 支持未来扩展到多主题
   */
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
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
