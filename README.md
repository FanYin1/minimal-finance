# Puhui - 企业官网前端开发框架

<div align="center">
  <h3>🚀 专业的企业级 Next.js 前端开发框架</h3>
  <p>基于 Next.js 14 App Router + TypeScript + Tailwind CSS</p>
</div>

---

## 📋 目录

- [项目简介](#项目简介)
- [技术栈](#技术栈)
- [快速开始](#快速开始)
- [项目结构](#项目结构)
- [开发指南](#开发指南)
- [部署说明](#部署说明)
- [贡献指南](#贡献指南)

---

## 📖 项目简介

Puhui 是一个专为企业官网设计的前端开发框架，采用现代化的技术栈和最佳实践，帮助开发团队快速构建高性能、易维护的企业网站。

### 核心特性

- ⚡ **高性能** - 基于 Next.js 14，支持 SSR/SSG/ISR
- 🎨 **现代 UI** - Tailwind CSS 原子化样式，响应式设计
- 📦 **模块化** - 组件化开发，代码复用性高
- 🔒 **类型安全** - 全面的 TypeScript 支持
- 🚀 **自动化** - GitHub Actions CI/CD 集成
- 📱 **响应式** - 完美适配各种设备

---

## 🛠 技术栈

| 技术 | 版本 | 说明 |
|------|------|------|
| Next.js | 14.x | React 元框架 |
| React | 18.x | UI 库 |
| TypeScript | 5.x | 类型系统 |
| Tailwind CSS | 3.x | 样式框架 |
| ESLint | 8.x | 代码检查 |
| Prettier | 3.x | 代码格式化 |
| Jest | 29.x | 测试框架 |
| GitHub Actions | - | CI/CD |

---

## 🚀 快速开始

### 环境要求

- Node.js >= 18.17.0
- npm >= 9.0.0 或 pnpm >= 8.0.0
- Git >= 2.0.0

### 安装步骤

```bash
# 1. 克隆项目
git clone https://github.com/your-org/puhui.git
cd puhui

# 2. 安装依赖（推荐使用 pnpm）
pnpm install
# 或者使用 npm
npm install

# 3. 复制环境变量
cp .env.example .env.local

# 4. 启动开发服务器
pnpm dev
# 或者
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看效果。

### 常用命令

```bash
pnpm dev          # 启动开发服务器
pnpm build        # 构建生产版本
pnpm start        # 启动生产服务器
pnpm lint         # 代码检查
pnpm lint:fix     # 自动修复代码问题
pnpm format       # 格式化代码
pnpm test         # 运行测试
pnpm type-check   # TypeScript 类型检查
```

---

## 📁 项目结构

```
Puhui/
├── .github/                    # GitHub 配置
│   └── workflows/              # CI/CD 工作流
├── app/                        # Next.js App Router 页面
│   ├── (marketing)/            # 营销页面分组
│   ├── api/                    # API 路由
│   ├── globals.css             # 全局样式
│   └── layout.tsx              # 根布局
├── components/                 # 可复用组件
│   ├── layout/                 # 布局组件
│   ├── ui/                     # UI 基础组件
│   ├── sections/               # 页面区块
│   └── common/                 # 通用组件
├── hooks/                      # 自定义 Hooks
├── lib/                        # 工具库
├── types/                      # TypeScript 类型
├── public/                     # 静态资源
└── docs/                       # 项目文档
```

---

## 📝 开发指南

### 创建新页面

在 `app/` 目录下创建对应的文件夹和 `page.tsx` 文件：

```tsx
// app/about/page.tsx
export default function AboutPage() {
  return (
    <div className="container-custom py-20">
      <h1>关于我们</h1>
    </div>
  );
}
```

### 创建新组件

在 `components/` 目录下创建组件文件：

```tsx
// components/ui/Button.tsx
import { cn } from '@/lib/utils';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  className?: string;
}

export function Button({ children, variant = 'primary', className }: ButtonProps) {
  return (
    <button className={cn('btn', `btn-${variant}`, className)}>
      {children}
    </button>
  );
}
```

### Git 提交规范

```
<type>(<scope>): <subject>

类型(type):
  feat     - 新功能
  fix      - 修复 Bug
  docs     - 文档更新
  style    - 代码格式
  refactor - 重构
  perf     - 性能优化
  test     - 测试
  chore    - 构建/工具

示例:
  feat(header): 添加响应式导航
  fix(contact): 修复表单提交问题
```

---

## 🚀 部署说明

### 使用 Vercel（推荐）

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 导入项目
3. 配置环境变量
4. 自动部署完成

### 使用 GitHub Actions

项目已配置自动化 CI/CD 工作流：

- **CI 流程**：代码检查、类型检查、单元测试、构建测试
- **CD 流程**：自动部署到生产/测试环境

#### 需要配置的 Secrets

在 GitHub 仓库设置中添加以下 Secrets：

```
# Vercel 部署（可选）
VERCEL_TOKEN
VERCEL_ORG_ID
VERCEL_PROJECT_ID

# 服务器部署（可选）
SSH_PRIVATE_KEY
SERVER_HOST
SERVER_USER
```

### 手动部署

```bash
# 构建
pnpm build

# 使用 PM2 启动
pm2 start npm --name "puhui" -- start
```

---

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'feat: Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

---

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

---

## 📞 联系我们

- 📧 Email: contact@puhui.com
- 🌐 Website: https://puhui.com

---

<div align="center">
  <p>Made with ❤️ by Puhui Team</p>
</div>
