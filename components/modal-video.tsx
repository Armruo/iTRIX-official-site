"use client"; // 标记为客户端组件

import React, { useState, useRef, useEffect } from "react";
import type { StaticImageData } from "next/image";
import { Dialog } from "@headlessui/react";
import Image from "next/image";
import SecondaryIllustration from "@/public/images/secondary-illustration.svg";

// 接口定义
interface ModalVideoProps {
  thumb: StaticImageData;
  thumbWidth: number;
  thumbHeight: number;
  thumbAlt: string;
  video: string;
  videoWidth: number;
  videoHeight: number;
}

/**
 * 一个带有缩略图预览和模态框播放功能的视频播放器组件。
 */
export default function ModalVideo({
  thumb,
  thumbWidth,
  thumbHeight,
  thumbAlt,
  video,
  videoWidth,
  videoHeight,
}: ModalVideoProps) {
  // 状态管理：useState：模态框的开关；useRef：引用视频元素
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  // 处理 Dialog 挂载和卸载
  useEffect(() => {
    // 当模态框打开时，防止页面滚动
    if (modalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      // 当模态框关闭时，暂停视频
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalOpen]);

  return (
    <div className="relative">
      {/* A.缩略图部分 */}
      {/* 背景装饰图 Secondary illustration */}
      <div
        className="pointer-events-none absolute bottom-8 left-1/2 -z-10 -ml-28 -translate-x-1/2 translate-y-1/2"
        aria-hidden="true"
      >
        <Image
          className="md:max-w-none"
          src={SecondaryIllustration}
          width={1165}
          height={1012}
          alt="Secondary illustration"
        />
      </div>

      {/* Video thumbnail */}
      <button
        className="group relative flex items-center justify-center rounded-2xl focus:outline-none focus-visible:ring focus-visible:ring-indigo-200"
        onClick={() => {
          setModalOpen(true);
        }}
        aria-label="Watch the video"
        data-aos="fade-up"
        data-aos-delay={200}
      >
        <figure className="relative overflow-hidden rounded-2xl before:absolute before:inset-0 before:-z-10 before:bg-gradient-to-br before:from-gray-900 before:via-indigo-500/20 before:to-gray-900">
          <Image
            // className="opacity-50 grayscale" 灰度效果
            className="opacity-50"
            src={thumb}
            width={thumbWidth}
            height={thumbHeight}
            priority
            alt={thumbAlt}
          />
        </figure>
        {/* Play icon */}
        <span className="pointer-events-none absolute p-2.5 before:absolute before:inset-0 before:rounded-full before:bg-gray-950 before:duration-300 group-hover:before:scale-110">
          <span className="relative flex items-center gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              fill="none"
            >
              <path
                fill="url(#pla)"
                fillRule="evenodd"
                d="M10 20c5.523 0 10-4.477 10-10S15.523 0 10 0 0 4.477 0 10s4.477 10 10 10Zm3.5-10-5-3.5v7l5-3.5Z"
                clipRule="evenodd"
              />
              <defs>
                <linearGradient
                  id="pla"
                  x1={10}
                  x2={10}
                  y1={0}
                  y2={20}
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#6366F1" />
                  <stop offset={1} stopColor="#6366F1" stopOpacity=".72" />
                </linearGradient>
              </defs>
            </svg>
            <span className="text-sm font-medium leading-tight text-gray-300">
              Watch Demo
              <span className="text-gray-600"> - </span>
              0:14
            </span>
          </span>
        </span>
      </button>
      {/* End: Video thumbnail */}

      {/* B.模态框部分 */}
      {modalOpen && (
        <Dialog
          static
          open={modalOpen}
          onClose={() => {
            setModalOpen(false);
          }}
          className="relative z-[99999]"
        >
          {/* 背景遮罩 */}
          <div className="fixed inset-0 bg-black/70" aria-hidden="true" />
          
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <Dialog.Panel className="mx-auto aspect-video max-h-full w-full max-w-6xl overflow-hidden rounded-2xl bg-black shadow-2xl">
              {/* 视频元素 */}
              <video
                ref={videoRef}
                width={videoWidth}
                height={videoHeight}
                loop
                controls
                autoPlay
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </Dialog.Panel>
          </div>
        </Dialog>
      )}
    </div>
  );
}
