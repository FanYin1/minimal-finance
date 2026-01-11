/**
 * 网站常量配置
 */

// 网站基本信息
export const SITE_CONFIG = {
  name: 'Puhui',
  title: 'Puhui - 专业企业解决方案',
  description: 'Puhui 提供专业的企业级解决方案，助力企业数字化转型',
  url: process.env.NEXT_PUBLIC_SITE_URL || 'https://puhui.com',
  locale: 'zh-CN',
};

// 联系信息
export const CONTACT_INFO = {
  phone: '400-888-8888',
  email: 'contact@puhui.com',
  address: '北京市朝阳区xxx大厦',
  workingHours: '周一至周五 9:00-18:00',
};

// 社交媒体链接
export const SOCIAL_LINKS = {
  weibo: 'https://weibo.com/puhui',
  wechat: 'puhui_official',
  linkedin: 'https://linkedin.com/company/puhui',
  github: 'https://github.com/puhui',
};

// 导航菜单
export const NAV_ITEMS = [
  { name: '首页', href: '/' },
  { name: '关于我们', href: '/about' },
  { name: '产品服务', href: '/products' },
  { name: '案例展示', href: '/cases' },
  { name: '新闻动态', href: '/news' },
  { name: '联系我们', href: '/contact' },
] as const;

// 页面路由
export const ROUTES = {
  home: '/',
  about: '/about',
  products: '/products',
  cases: '/cases',
  news: '/news',
  contact: '/contact',
  privacy: '/privacy',
  terms: '/terms',
} as const;

// 分页配置
export const PAGINATION = {
  defaultPageSize: 10,
  maxPageSize: 50,
};

// 表单配置
export const FORM_CONFIG = {
  maxNameLength: 50,
  maxEmailLength: 100,
  maxPhoneLength: 20,
  maxMessageLength: 1000,
};

// 动画配置
export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500,
  },
  easing: {
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
  },
};

// 响应式断点
export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  '2xl': 1536,
} as const;

// API 配置
export const API_CONFIG = {
  baseUrl: process.env.NEXT_PUBLIC_API_URL || '/api',
  timeout: 10000,
};
