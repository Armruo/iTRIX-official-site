"use client";

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from "react";
import { useTheme } from "@/context/theme-context";
import { getThemeColor, getThemeGradient } from "@/utils/theme";
// import HeroImage from '@/public/images/hero-image-creative.png'
import SpaceImage from '@/public/images/space.png'
// import Spline from '@splinetool/react-spline/next';
import Spline from '@splinetool/react-spline';
import LogInGirl from "@/public/images/log-in-girl-resize.svg"

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

  // spline 设置
  const [isLoading, setIsLoading] = useState(true);
  const handleIframeLoad = () => {
    setIsLoading(false);
  };
  
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

  return (
    <section className="relative">
      {/* Bg */}
      <div 
        className={`
          absolute inset-0 rounded-bl-[100px] pointer-events-none -z-10
          ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}
          transition-colors duration-300
        `} 
        aria-hidden="true" 
      />
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Hero content */}
          <div className="relative max-w-xl mx-auto md:max-w-none text-center md:text-left flex flex-col md:flex-row">
            {/* Content */}
            <div className="md:w-[640px]">
              {/* Copy */}
              <h1 
                className={`
                  animate-[gradient_6s_linear_infinite]
                  ${gradientBg}
                  bg-clip-text pb-4
                  font-cabinet-grotesk !text-6xl 
                  font-semibold text-transparent md:!text-7xl
                `}
                data-aos="fade-right" 
                data-aos-delay="100"
              >
                AI-driven platform for{' '}
                <span className="relative inline-flex text-[#a86bb7]">
                  <svg
                    className="absolute left-0 top-full -mt-4 max-w-full -z-10"
                    width="220"
                    height="24"
                    viewBox="0 0 220 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M134.66 13.107c-10.334-.37-20.721-.5-31.12-.291l-2.6.06c-4.116.04-8.193.602-12.3.749-14.502.43-29.029 1.196-43.514 2.465-6.414.63-12.808 1.629-19.04 2.866-7.93 1.579-16.113 3.71-23.367 5.003-2.211.374-3.397-1.832-2.31-4.906.5-1.467 1.838-3.456 3.418-4.813a16.047 16.047 0 0 1 6.107-3.365c16.88-4.266 33.763-6.67 51.009-7.389C71.25 3.187 81.81 1.6 92.309.966c11.53-.65 23.097-.938 34.66-.96 7.117-.054 14.25.254 21.36.318l16.194.803 4.62.39c3.85.32 7.693.618 11.53.813 8.346.883 16.673.802 25.144 2.159 1.864.276 3.714.338 5.566.873l.717.225c6.162 1.977 7.92 3.64 7.9 7.197l-.003.203c-.017.875.05 1.772-.112 2.593-.581 2.762-4.066 4.12-8.637 3.63-13.696-1.06-27.935-3.332-42.97-4.168-11.055-.83-22.314-1.459-33.596-1.603l-.022-.332Z"
                      fill="#dbb5b7"
                      fillRule="evenodd"
                    />
                  </svg>
                  creators
                </span>
                .
              </h1>
              {/* <h1 className="h1 font-hkgrotesk text-slate-100 mb-6" data-aos="fade-right" data-aos-delay="100">
                Learn how to start a business the{' '}
                <span className="font-permanent-marker text-blue-500 font-normal whitespace-nowrap">
                  right{' '}
                  <span className="inline-flex relative">
                    <svg
                      className="absolute right-0 top-full mt-1 max-w-none -z-10"
                      width="135"
                      height="9"
                      viewBox="0 0 135 9"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        className="fill-white"
                        fillRule="nonzero"
                        d="M36.54 1.016C40.01.912 43.39.78 46.95.712 50.51.644 54.071.567 57.81.566c2.744.002 5.018-.162 7.897-.113 9.89.085 20.486.459 31.646 1.116 2.484.151 4.835.242 7.296.39 2.461.147 4.924.282 7.34.413 1.528.069 3.186.202 4.684.31a187 187 0 0 1 4.89.34c3.416.326 6.937.738 10.5 1.23 2.316.32 2.482.762 1.474 1.152-1.082.485-3.3.708-6.3.635-.705-.026-1.39-.039-2.117-.076l-2.202-.137-4.43-.268a899.607 899.607 0 0 1-8.75-.477c-2.953-.174-5.754-.262-8.71-.427-2.955-.165-5.803-.257-8.829-.424-1.786-.084-3.509-.137-5.156-.16-1.697-.039-3.396-.07-5.027-.081l-9.497.059c-6.873.071-13.98.132-20.388.403-4.089.123-7.886.344-11.683.565l-8.169.637c-2.596.256-5.236.496-7.537.828-1.768.261-3.332.576-4.873.895-1.541.319-2.877.683-4.575.95-.775.112-1.367.265-2.142.376-2.903.406-4.781.312-8.094-.282a79.95 79.95 0 0 1-2.301-.412C.465 7.541-.327 6.866.558 6.205c.714-.471 1.384-.971 2.398-1.395 1.013-.424 2.483-.741 3.838-1.08 1.355-.34 3.28-.546 5.025-.802 1.744-.256 3.69-.446 5.594-.66C23.24 1.688 29.49 1.233 36.13.904l.408.112Z"
                        opacity=".32"
                      />
                    </svg>
                    way
                  </span>
                  <span className="text-slate-100">.</span>
                </span>
              </h1> */}
              <p className="text-xl text-gray-500 mb-10" data-aos="fade-right" data-aos-delay="200">
                Our landing page template works on all devices, so you only have to set it up once, and get beautiful results forever.
              </p>
              {/* Buttons */}
              <div
                className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4 mb-12 md:mb-20"
                data-aos="fade-right"
                data-aos-delay="300"
              >
                <div>
                  <Link className="btn text-white bg-blue-500 hover:bg-blue-600 w-full shadow-sm" href="/signup">
                    Join The Community
                  </Link>
                </div>
                <div>
                  <Link className="btn text-gray-600 bg-white hover:bg-blue-100 hover:text-blue-600 w-full shadow-sm" href="/signin">
                    Sign In
                  </Link>
                </div>
              </div>
              {/* Stats */}
              <div className="inline-flex items-center space-x-4 md:space-x-6" data-aos="fade-right" data-aos-delay="400">
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">27M</div>
                  <div className="text-gray-500">Inspiration</div>
                </div>
                <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
                    fillRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">44K</div>
                  <div className="text-gray-500">Collections</div>
                </div>
                <svg className="fill-gray-300" width="14" height="10" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M2.039 0c.099.006 1.237.621 1.649.787.391.17.735.41 1.067.667.682.515 1.387.995 2.089 1.48.102.071.196.153.284.245l.497-.172 1.76-.342.13-.097a.402.402 0 0 1 .206-.09l.107-.012c.218-.035.677-.132 1.143-.122l1.11-.062c.16-.001 1.67.295 1.691.339a.639.639 0 0 1 .026.129c.018.125-.035.29.09.352.045.022.167.292.084.41l-.137.203a.726.726 0 0 1-.147.164 5.18 5.18 0 0 1-.658.404l-.182.089a.534.534 0 0 0-.257.327c-.046.133-.134.134-.204.189-.376.26-.736.581-1.102.868L11 5.965l.219.284.55.784c.093.129.187.255.286.375.052.073.137.1.147.242.022.324.182.399.314.529.184.179.363.368.528.581.081.107.123.285.179.437.049.138-.138.362-.186.37-.137.023-.128.197-.178.312a.618.618 0 0 1-.058.116c-.03.034-1.375-.105-1.67-.162l-.09-.028-1.004-.368c-.552-.157-1.05-.462-1.167-.498-.117-.043-.19-.173-.275-.278l-1.604-.847c-.138-.113-.294-.199-.433-.311l-.162.083-.174.068c-.8.26-1.602.514-2.39.808-.385.15-.778.278-1.198.327-.439.038-1.692.294-1.788.271a3.114 3.114 0 0 1-.505-.227c-.09-.049-.306-.58-.324-.78-.056-.628.013-1.007.285-.96.11.02.29-.51.395-.536.06-.016.165-.088.287-.182l.334-.266c.157-.126.297-.234.363-.252.697-.205 1.325-.62 2.004-.878l.063-.035.07-.057-.01-.013a.425.425 0 0 0-.094-.115c-.586-.448-1.082-1.031-1.7-1.434-.058-.036-.165-.181-.284-.349L1.55 2.72c-.12-.168-.233-.316-.3-.356-.095-.056-.131-.619-.24-.632C.734 1.696.765 1.31.982.725 1.05.537 1.396.09 1.495.07c.192-.037.38-.07.544-.07Z"
                    fillRule="evenodd"
                  />
                </svg>
                <div>
                  <div className="font-cabinet-grotesk text-2xl font-extrabold">2M+</div>
                  <div className="text-gray-500">Creatives</div>
                </div>
              </div>
            </div>
            {/* Image */}
            {/* <div
              className="max-w-sm mx-auto md:max-w-none md:absolute md:left-[40rem] md:ml-16 lg:ml-32 xl:ml-52 mt-12 md:-mt-12"
              data-aos="fade-left"
              data-aos-duration="1100"
            >
              <Image src={HeroImage} className="md:max-w-none" width="584" height="659" priority alt="Hero Illustration" />
              <Image src={SpaceImage} className="md:max-w-none" width="800" height="900" priority alt="Hero Illustration" />
            </div> */}
            <div className="relative w-full h-[600px]">
              {isLoading && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                  <div className="text-xl text-gray-600">Loading...</div>
                </div>
              )}
              <iframe 
                // src='https://my.spline.design/clonercubesimplecopy-3a8a1d0a76115a9c518ba5d5bd0d9f90/'
                src='https://my.spline.design/brain-74544328dc9622e185c2931f91fbf2d8/'
                // src='https://my.spline.design/space-fbf40702879dff5c0e58428fc629d9be/'
                frameBorder='0'
                width='100%'
                height='100%'
                onLoad={handleIframeLoad}
                className="absolute inset-0"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}