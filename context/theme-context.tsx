"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

// 主题类型
export type ThemeType = 'light' | 'dark';

// 主题上下文接口
interface ThemeContextType {
  theme: ThemeType;
  toggleTheme: () => void;
}

// 创建主题上下文
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// 主题提供者组件属性
interface ThemeProviderProps {
  children: ReactNode;
}

// 主题提供者组件
export function ThemeProvider({ children }: ThemeProviderProps) {
  // 状态：当前主题
  const [theme, setTheme] = useState<ThemeType>('light');
  const [mounted, setMounted] = useState(false);

  // 切换主题函数
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    // 保存到本地存储
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', newTheme);
    }
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
  };

  // 在客户端初始化主题
  useEffect(() => {
    setMounted(true);
    
    // 从本地存储或系统偏好获取主题
    const savedTheme = localStorage.getItem('theme') as ThemeType | null;
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
    setTheme(initialTheme);
    
    // 设置初始 HTML class
    if (initialTheme === 'dark') {
      document.documentElement.classList.add('dark');
      document.body.classList.add("bg-gray-950");
      document.body.classList.remove("bg-white");
    } else {
      document.documentElement.classList.remove('dark');
      document.body.classList.remove("bg-gray-950");
      document.body.classList.add("bg-white");
    }
  }, []);

  // 提供上下文值
  const contextValue = {
    theme,
    toggleTheme,
  };

  // 在客户端挂载前返回一个加载占位符，避免水合错误
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
}

// 自定义 Hook，用于在组件中访问主题
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
}
