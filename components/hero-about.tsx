"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { getThemeColor, getThemeGradient } from "@/utils/theme";
import { useTheme } from "@/context/theme-context";

import TeamImg01 from "@/public/images/team-mosaic-01.jpg";
import TeamImg02 from "@/public/images/team-mosaic-02.jpg";
import TeamImg03 from "@/public/images/team-mosaic-03.jpg";
import TeamImg04 from "@/public/images/team-mosaic-04.jpg";

export default function HeroAbout() {
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

  const textSecondary = getThemeColor(theme, 'text.secondary');
  const gradientBg = getThemeGradient(theme);
  
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-20">
            <h1 className={`animate-[gradient_6s_linear_infinite] ${gradientBg} bg-[length:200%_auto] bg-clip-text pb-5 font-cabinet-grotesk text-4xl font-semibold text-transparent md:text-5xl`}>
              The story behind the project
            </h1>
            <div className="mx-auto max-w-3xl">
              <p className={`text-xl ${textSecondary}/65`}>
                Developers are trusted to create an engaging experience for
                their companies, so we build tools to help them.
              </p>
            </div>
          </div>
          <div className="mx-auto max-w-3xl">
            <div className="relative aspect-[4/3] w-full">
              <figure
                className="absolute h-auto"
                style={{ top: "45%", width: "41.67%", maxWidth: 320 }}
                data-aos="fade-right"
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-80 grayscale"
                    src={TeamImg02}
                    width={320}
                    height={240}
                    alt="Team mosaic 02"
                  />
                </div>
              </figure>
              <figure
                className="relative mx-auto"
                style={{ width: "78.13%", maxWidth: 600 }}
                data-aos="fade-down"
                data-aos-delay={100}
              >
                <div className="relative -rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-90 grayscale"
                    src={TeamImg01}
                    width={600}
                    height={338}
                    alt="Team mosaic 01"
                  />
                </div>
              </figure>
              <figure
                className="absolute h-auto"
                style={{
                  top: "8.5%",
                  right: 0,
                  width: "32.56%",
                  maxWidth: 250,
                }}
                data-aos="fade-left"
                data-aos-delay={200}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900">
                  <Image
                    className="opacity-90 grayscale"
                    src={TeamImg03}
                    width={250}
                    height={188}
                    alt="Team mosaic 03"
                  />
                </div>
              </figure>
              <figure
                className="absolute h-auto"
                style={{
                  bottom: 0,
                  right: "20%",
                  width: "25.53%",
                  maxWidth: 196,
                }}
                data-aos="fade-up"
                data-aos-delay={300}
              >
                <div className="relative rotate-2 overflow-hidden rounded-2xl before:absolute before:inset-0 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500 before:to-gray-900 before:opacity-10">
                  <Image
                    className="opacity-20 grayscale"
                    src={TeamImg04}
                    width={196}
                    height={196}
                    alt="Team mosaic 04"
                  />
                </div>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
