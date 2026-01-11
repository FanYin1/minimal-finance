/**
 * 通用类型定义
 */

// API 响应基础类型
export interface IApiResponse<T = unknown> {
  code: number;
  message: string;
  data: T;
}

// 分页请求参数
export interface IPaginationParams {
  page: number;
  pageSize: number;
}

// 分页响应数据
export interface IPaginatedData<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

// 导航项
export interface INavItem {
  name: string;
  href: string;
  children?: INavItem[];
}

// 联系表单
export interface IContactForm {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
}

// 新闻文章
export interface INewsArticle {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: IAuthor;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
}

// 作者
export interface IAuthor {
  id: string;
  name: string;
  avatar: string;
  bio?: string;
}

// 案例
export interface ICaseStudy {
  id: string;
  title: string;
  slug: string;
  client: string;
  industry: string;
  description: string;
  coverImage: string;
  images: string[];
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
  testimonial?: ITestimonial;
  publishedAt: string;
}

// 客户评价
export interface ITestimonial {
  id: string;
  name: string;
  title: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
}

// 服务/产品
export interface IService {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
}

// 团队成员
export interface ITeamMember {
  id: string;
  name: string;
  title: string;
  avatar: string;
  bio: string;
  social?: {
    linkedin?: string;
    twitter?: string;
    email?: string;
  };
}

// SEO 元数据
export interface ISeoMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

// 图片
export interface IImage {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

// 链接
export interface ILink {
  label: string;
  href: string;
  external?: boolean;
}

// 常见问题
export interface IFAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

// 表单状态
export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

// 主题模式
export type ThemeMode = 'light' | 'dark' | 'system';
