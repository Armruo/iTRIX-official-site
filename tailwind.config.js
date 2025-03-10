/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // 使用 class 策略进行深色模式切换
  theme: {
    extend: {
      colors: {
        // 添加自定义颜色主题，保留原有的颜色定义
        'gray': {
          50: '#F9FAFB',
          200: '#E5E7EB',
          // 确保其他灰色也被保留
          900: '#111827',
        },
        'indigo': {
          200: '#A5B4FC',
          300: '#818CF8',
          500: '#6366F1',
        },
        // 自定义颜色主题 dark-浅字；light-深字
        'dark': {
          text: {
            primary: '#E5E7EB',    // 对应 gray-200，主要文本颜色
            secondary: '#A5B4FC',  // 对应 indigo-200，次要文本颜色
            accent: '#818CF8',     // 对应 indigo-300，强调文本颜色
          },
        },
        'light': {
          text: {
            primary: '#a9a9a9',    
            secondary: '#00008b',  
            accent: '#000080',    
          },
        },
        'dark-text-primary': '#FFFFFF',
        'dark-text-secondary': '#A0AEC0',
        'dark-text-accent': '#6366F1',
        'light-text-primary': '#1A202C',
        'light-text-secondary': '#4A5568',
        'light-text-accent': '#4F46E5',
      },
      fontFamily: {
        inter: ["var(--font-inter)", "sans-serif"],
        nacelle: ["var(--font-cabinet-grotesk)", "sans-serif"],
        'hkgrotesk': ['var(--font-hkgrotesk)', 'sans-serif'],
        'cabinet-grotesk': ['var(--font-cabinet-grotesk)', 'sans-serif'],
      },
      fontSize: {
        xs: ["0.8125rem", { lineHeight: "1.5384" }],
        sm: ["0.875rem", { lineHeight: "1.5715" }],
        base: [
          "0.9375rem",
          { lineHeight: "1.5333", letterSpacing: "-0.0125em" },
        ],
        lg: ["1.125rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        xl: ["1.25rem", { lineHeight: "1.5", letterSpacing: "-0.0125em" }],
        "2xl": ["1.5rem", { lineHeight: "1.415", letterSpacing: "-0.0268em" }],
        "3xl": [
          "1.75rem",
          { lineHeight: "1.3571", letterSpacing: "-0.0268em" },
        ],
        "4xl": ["2.5rem", { lineHeight: "1.1", letterSpacing: "-0.0268em" }],
        "5xl": ["3.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "6xl": ["4rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
        "7xl": ["4.5rem", { lineHeight: "1", letterSpacing: "-0.0268em" }],
      },
      letterSpacing: {
        tighter: '-0.02em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.02em',
        widest: '0.4em',
      },
      animation: {
        shine: "shine 5s ease-in-out 500ms infinite",
        'endless': 'endless 20s linear infinite',
        'float': 'float 2s ease-in-out infinite',
        'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'gradient': 'gradient 6s linear infinite',
      },
      keyframes: {
        shine: {
          "0%": { top: "0", transform: "scaleY(5)", opacity: "0" },
          "10%": { opacity: ".8" },
          "20%": { top: "100%", transform: "scaleY(10)", opacity: "0" },
          "100%": { top: "100%", transform: "scaleY(1)", opacity: "0" },
        },
        endless: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-245px)' }
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        gradient: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' }
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@headlessui/tailwindcss"),
  ],
};
