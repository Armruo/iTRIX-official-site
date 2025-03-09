// 主题配置文件
// 定义不同主题的颜色变量

// 主题类型
export type ThemeType = 'light' | 'dark';

// 颜色配置接口
export interface ThemeColors {
  text: {
    primary: string;
    secondary: string;
    accent: string;
  }
}

// 按钮颜色配置
export interface ButtonColors {
  from: string; // 渐变起始颜色 (HEX)
  to: string;   // 渐变结束颜色 (HEX)
}

// 主题配置
export const themes: Record<ThemeType, ThemeColors> = {
  light: {
    text: {
      primary: 'text-light-text-primary',
      secondary: 'text-light-text-secondary',
      accent: 'text-light-text-accent',
    }
  },
  dark: {
    text: {
      primary: 'text-dark-text-primary',
      secondary: 'text-dark-text-secondary',
      accent: 'text-dark-text-accent',
    }
  }
};

// 按钮颜色配置
export const buttonThemes: Record<ThemeType, ButtonColors> = {
  light: {
    from: '#3B82F6', // blue-500
    to: '#4F46E5'    // indigo-600
  },
  dark: {
    from: '#4F46E5', // indigo-600
    to: '#6366F1'    // indigo-500
  }
};

// 获取主题颜色的函数
export const getThemeColor = (theme: ThemeType, colorPath: keyof ThemeColors | string) => {
  if (colorPath === 'text.primary') return themes[theme].text.primary;
  if (colorPath === 'text.secondary') return themes[theme].text.secondary;
  if (colorPath === 'text.accent') return themes[theme].text.accent;
  
  return '';
};

// 获取主题渐变背景
export const getThemeGradient = (theme: ThemeType) => {
  if (theme === 'light') {
    // 浅色主题下使用深色但有足够对比度的渐变
    return `bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] `;
  }
  
  // 深色主题下使用浅色渐变
  return `bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] `;
};

// 获取按钮渐变样式 (使用 Tailwind 类名)
export const getButtonGradient = (theme: ThemeType) => {
  if (theme === 'light') {
    // 修改浅色主题按钮样式，使用更深的颜色以增加对比度
    return 'bg-gradient-to-t from-blue-600 to-indigo-500 text-white';
  }
  return 'bg-gradient-to-t from-indigo-600 to-indigo-500';
};

// 获取按钮渐变样式 (使用 HEX 颜色)
export const getButtonGradientHex = (theme: ThemeType) => {
  const colors = buttonThemes[theme];
  // 修复语法，确保正确使用 Tailwind 的任意值语法
  return `bg-gradient-to-t from-[${colors.from}] to-[${colors.to}]`;
};

// 获取按钮悬停效果
export const getButtonHoverEffect = () => {
  return 'bg-[length:100%_100%] bg-[bottom] hover:bg-[length:100%_150%]';
};
