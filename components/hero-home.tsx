"use client";

import VideoThumb from "@/public/images/hero-image-AIcover-1.png";
import ModalVideo from "@/components/modal-video";
import { getThemeColor, getThemeGradient, getButtonGradient, getButtonHoverEffect } from "@/utils/theme";
import { useTheme } from "@/context/theme-context";
import { useState, useEffect } from "react";

export default function HeroHome() {
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
  
  const gradientBg = getThemeGradient(theme);
  // 使用原始的按钮样式方法
  const buttonGradient = getButtonGradient(theme);
  const buttonHoverEffect = getButtonHoverEffect();
  
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            {/* 标题：6s渐变动画，自定义渐变背景，背景剪裁到文字，自定义字体，响应式字体大小*/}
            <h1
              className={`
              animate-[gradient_6s_linear_infinite]
              ${gradientBg}
              bg-clip-text pb-5 
              font-cabinet-grotesk text-5xl 
              font-semibold text-transparent md:text-6xl`}
              data-aos="fade-up"
            >
              AI-driven platform for creators and fans
            </h1>

            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-xl text-indigo-200/65 dark:text-indigo-200/65"
                data-aos="fade-up"
                data-aos-delay={200}
              >
                ITRIX is a platform built for creators and fans, driven by AI and blockchain technology. Use ITRIX to connect with fans, and to monetise your content safely, securely, and on your own terms. 
              </p>
              <div className="mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center">
                <div data-aos="fade-up" data-aos-delay={400}>
                  <a
                    className={`btn group mb-4 w-full ${buttonGradient} ${buttonHoverEffect} text-white shadow-[inset_0px_1px_0px_0px_theme(colors.white/.16)] sm:mb-0 sm:w-auto`}
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      Start Building
                      <span className="ml-1 tracking-normal text-white/50 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                </div>
                <div data-aos="fade-up" data-aos-delay={600}>
                  <a
                    className="btn relative w-full bg-gradient-to-b from-gray-800 to-gray-900 text-gray-400 hover:text-gray-300 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                      <svg
                        className="mr-3 h-4 w-4 shrink-0 fill-current text-gray-500"
                        viewBox="0 0 16 16"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M8 0C3.6 0 0 3.6 0 8s3.6 8 8 8 8-3.6 8-8-3.6-8-8-8zm0 14c-3.3 0-6-2.7-6-6s2.7-6 6-6 6 2.7 6 6-2.7 6-6 6zm0-9.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5-1.5-.7-1.5-1.5.7-1.5 1.5-1.5zm0 7.5c-1.4 0-2.5-.5-3.3-1.3.3-.7 1-1.2 1.8-1.2.2 0 .3 0 .5.1.3.1.7.1 1 .1s.7 0 1-.1c.2-.1.3-.1.5-.1.8 0 1.5.5 1.8 1.2-.8.8-1.9 1.3-3.3 1.3z" />
                      </svg>
                      <span>Documentation</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={1024}
            thumbHeight={576}
            thumbAlt="Modal video thumbnail"
            video="/videos/video.mp4"
            videoWidth={1920}
            videoHeight={1080}
          />
        </div>
      </div>
    </section>
  );
}
