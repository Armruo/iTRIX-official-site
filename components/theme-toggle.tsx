"use client";

import React, { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-context";

export default function ThemeToggle() {
  // 添加本地状态作为备用
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
  
  // 尝试使用全局主题上下文，如果不可用则使用本地状态
  let theme: "light" | "dark" = "light";
  let toggleTheme: () => void = () => {
    const newTheme = localTheme === "light" ? "dark" : "light";
    setLocalTheme(newTheme);
    
    // 更新 HTML 元素的 class
    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add("bg-gray-950");
      document.body.classList.remove("bg-white");
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove("bg-gray-950");
      document.body.classList.add("bg-white");
    }
    
    // 保存到本地存储
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
  };
  
  // 尝试使用全局主题上下文
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (error) {
    // 如果 ThemeProvider 不可用，使用本地状态
    theme = localTheme;
  }
  
  // 初始化本地主题
  useEffect(() => {
    // 从本地存储或系统偏好获取主题
    const savedTheme = localStorage.getItem('theme') as "light" | "dark" | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setLocalTheme(initialTheme);
  }, []);

  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 p-1 text-gray-500 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700"
      aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
    >
      {theme === "light" ? (
        // 月亮图标 - 切换到深色模式
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path
            fillRule="evenodd"
            d="M7.455 2.004a.75.75 0 01.26.77 7 7 0 009.958 7.967.75.75 0 011.067.853A8.5 8.5 0 116.647 1.921a.75.75 0 01.808.083z"
            clipRule="evenodd"
          />
        </svg>
      ) : (
        // 太阳图标 - 切换到浅色模式
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="h-5 w-5"
        >
          <path d="M10 2a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 2zM10 15a.75.75 0 01.75.75v1.5a.75.75 0 01-1.5 0v-1.5A.75.75 0 0110 15zM10 7a3 3 0 100 6 3 3 0 000-6zM15.657 5.404a.75.75 0 10-1.06-1.06l-1.061 1.06a.75.75 0 001.06 1.06l1.06-1.06zM6.464 14.596a.75.75 0 10-1.06-1.06l-1.06 1.06a.75.75 0 001.06 1.06l1.06-1.06zM18 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 0118 10zM5 10a.75.75 0 01-.75.75h-1.5a.75.75 0 010-1.5h1.5A.75.75 0 015 10zM14.596 15.657a.75.75 0 001.06-1.06l-1.06-1.061a.75.75 0 10-1.06 1.06l1.06 1.06zM5.404 6.464a.75.75 0 001.06-1.06l-1.06-1.06a.75.75 0 10-1.061 1.06l1.06 1.06z" />
        </svg>
      )}
    </button>
  );
}
