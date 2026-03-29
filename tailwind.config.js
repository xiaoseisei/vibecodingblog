/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 使用 class 策略控制主题
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 主题颜色系统 - 使用 CSS 变量
        theme: {
          // 主要颜色
          bg: 'var(--bg-main)',
          text: 'var(--text-main)',
          card: 'var(--card-bg)',
          border: 'var(--border-color)',

          // 次要颜色
          'bg-secondary': 'var(--bg-secondary)',
          'text-secondary': 'var(--text-secondary)',
          'text-muted': 'var(--text-muted)',
        },

        // 保留原有颜色定义
        background: '#0a0a0a',
      },
      backgroundImage: {
        // 主色调渐变
        'gradient-primary': 'linear-gradient(to right, #6366f1, #a855f7, #ec4899)',
        'gradient-hover': 'linear-gradient(to right, #818cf8, #c084fc, #f472b6)',
      }
    },
  },
  plugins: [],
}
