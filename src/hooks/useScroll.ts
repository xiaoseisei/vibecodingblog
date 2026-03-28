import { useState, useEffect } from 'react'

/**
 * 滚动位置监听 Hook
 * 用于实现滚动时的交互效果（如导航栏背景虚化）
 *
 * @returns {boolean} 是否已滚动
 */
export function useScroll(): boolean {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    // 监听滚动事件
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    // 添加事件监听
    window.addEventListener('scroll', handleScroll)

    // 初始检查
    handleScroll()

    // 清理事件监听
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return isScrolled
}
