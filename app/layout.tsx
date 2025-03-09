import "./css/style.css";

import { Inter } from "next/font/google";
import localFont from "next/font/local";

import Header from "@/components/ui/header";
import DebugProvider from "@/components/debug-provider";
import CommonWeb3Layout from "@/components/connect-provider";

// Inter字体配置：Google 的 Inter 字体，设置为变量字体，使用 swap 显示策略
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

// Nacelle 本地字体配置：常规字重、斜体、半粗体、半粗体斜体
const nacelle = localFont({
  src: [
    {
      path: "../public/fonts/nacelle-regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/nacelle-semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/nacelle-semibolditalic.woff2",
      weight: "600",
      style: "italic",
    },
  ],
  variable: "--font-nacelle",
  display: "swap",
});


export const metadata = {
  title: "ITRIX Official Site",
  description: "Generated by Itrix Labs",
};

/**
 * 根布局组件
 * 1.定义整个应用的页面结构、响应式布局、集成全局Header组件、使用children属性渲染子页面内容
 * 2.设置语言：英文
 * 3.管理全局字体和样式；字体平滑处理：antialiased
 * 4.深色主题（bg-gray-950）
 * 5.溢出处理 (overflow-hidden 和 overflow-clip)
 * 
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${nacelle.variable} bg-gray-900 font-inter text-base text-gray-200 antialiased`}
      >
        <DebugProvider>
          <CommonWeb3Layout>
            <div className="flex min-h-screen flex-col overflow-hidden supports-[overflow:clip]:overflow-clip">
              <Header />
              {children}
            </div>
          </CommonWeb3Layout>
        </DebugProvider>
      </body>
    </html>
  );
}
