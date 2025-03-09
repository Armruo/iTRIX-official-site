"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "./logo";
import Dropdown from "@/components/dropdown";
import MobileMenu from "./mobile-menu";
import ConnectWallet from '@/components/connect-wallet';
import ThemeToggle from '@/components/theme-toggle';
import { useTheme } from "@/context/theme-context";

export default function Header() {
  // 添加本地状态作为备用
  const [localTheme, setLocalTheme] = useState<"light" | "dark">("light");
  
  // 默认使用浅色主题
  let theme: "light" | "dark" = "light";
  
  // 尝试使用全局主题上下文
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch (error) {
    // 如果 ThemeProvider 不可用，使用本地状态
    theme = localTheme;
  }
  
  // 初始化本地主题
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // 从本地存储或系统偏好获取主题
      const savedTheme = localStorage.getItem('theme') as "light" | "dark" | null;
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      
      const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');
      setLocalTheme(initialTheme);
    }
  }, []);

  // 根据主题设置不同的背景和边框颜色
  const headerBg = theme === 'dark' 
    ? 'bg-gray-900/90 before:[background:linear-gradient(to_right,theme(colors.gray.800),theme(colors.gray.700),theme(colors.gray.800))_border-box]'
    : 'bg-white/90 before:[background:linear-gradient(to_right,theme(colors.gray.200),theme(colors.gray.300),theme(colors.gray.200))_border-box]';
  
  // 根据主题设置不同的文本颜色
  const textColor = theme === 'dark' ? 'text-gray-200' : 'text-gray-700';
  const hoverColor = theme === 'dark' ? 'hover:text-indigo-500' : 'hover:text-indigo-600';
  const dropdownTextColor = theme === 'dark' ? 'text-white' : 'text-gray-800';

  return (
    <header className="z-30 mt-2 w-full md:mt-5">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className={`relative flex h-14 items-center justify-between gap-3 rounded-2xl ${headerBg} px-3 before:pointer-events-none before:absolute before:inset-0 before:rounded-[inherit] before:border before:border-transparent before:[mask-composite:exclude_!important] before:[mask:linear-gradient(white_0_0)_padding-box,_linear-gradient(white_0_0)] after:absolute after:inset-0 after:-z-10 after:backdrop-blur-sm`}>
          {/* Site branding */}
          <div className="flex flex-1 items-center">
            <Logo />
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop menu links */}
            <ul className="flex grow flex-wrap items-center justify-center gap-4 text-sm lg:gap-8">
              {/* <li>
                <Link
                  href="/pricing"
                  className={`flex items-center px-2 py-1 ${textColor} transition ${hoverColor} lg:px-3`}
                >
                  Pricing
                </Link>
              </li> */}
              <li>
                <Link
                  href="/about"
                  className={`flex items-center px-2 py-1 ${textColor} transition ${hoverColor} lg:px-3`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className={`flex items-center px-2 py-1 ${textColor} transition ${hoverColor} lg:px-3`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/help/frequently-asked-questions"
                  className={`flex items-center px-2 py-1 ${textColor} transition ${hoverColor} lg:px-3`}
                >
                  Help Centre
                </Link>
              </li>
              {/* 1st level: hover */}
              <Dropdown title="Resources" titleClassName={textColor}>
                {/* 2nd level: hover */}
                <li>
                  <Link
                    href="/newsletter"
                    className={`flex rounded-lg px-2 py-1.5 text-sm ${dropdownTextColor} ${hoverColor}`}
                  >
                    Newsletter
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className={`flex rounded-lg px-2 py-1.5 text-sm ${dropdownTextColor} ${hoverColor}`}
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/404"
                    className={`flex rounded-lg px-2 py-1.5 text-sm ${dropdownTextColor} ${hoverColor}`}
                  >
                    404
                  </Link>
                </li>
              </Dropdown>
            </ul>
          </nav>

          {/* Desktop sign in links */}
          <ul className="flex flex-1 items-center justify-end gap-3">
            <li>
              <ThemeToggle />
            </li>
            <li>
              <ConnectWallet size="small" />
            </li>
          </ul>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
