/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // 使用 class 策略控制深色模式
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // 深色主题背景色
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
