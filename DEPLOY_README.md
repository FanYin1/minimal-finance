# 至简金融 🚀

<div align="center">
  <h3>让资金流动回归简单</h3>
  <p>专业的企业融资与个人信贷咨询服务平台</p>
  
  [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/minimal-finance)
</div>

---

## ⚡ 快速开始

### 本地开发

```bash
# 1. 克隆项目
git clone https://github.com/YOUR_USERNAME/minimal-finance.git
cd minimal-finance

# 2. 安装依赖
npm install

# 3. 启动开发服务器
npm run dev
```

访问 http://localhost:3000

### 一键部署到 Vercel

点击下方按钮，一键部署到 Vercel：

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_USERNAME/minimal-finance)

---

## 📦 项目特性

- ✅ **Next.js 14** - App Router、Server Components
- ✅ **TypeScript** - 类型安全
- ✅ **Tailwind CSS** - 极简设计风格
- ✅ **响应式设计** - 完美适配移动端
- ✅ **SEO 优化** - 完整的元数据配置
- ✅ **自动部署** - GitHub → Vercel CI/CD

---

## 🚀 部署到生产环境

### 方式一: 通过 GitHub + Vercel（推荐）

1. **Fork 或推送代码到 GitHub**
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/minimal-finance.git
   git push -u origin main
   ```

2. **在 Vercel 导入项目**
   - 访问 [vercel.com](https://vercel.com)
   - 点击 "Add New" → "Project"
   - 选择您的 GitHub 仓库
   - 点击 "Deploy"

3. **完成！**
   - Vercel 会自动构建和部署
   - 您将获得一个 `https://your-project.vercel.app` 域名

### 方式二: 使用自动化脚本

```bash
# 运行部署脚本
./deploy.sh
```

脚本会自动：
- ✅ 检查 Git 状态
- ✅ 提交未保存的更改
- ✅ 推送到 GitHub
- ✅ 提供 Vercel 部署指引

---

## 📖 文档

- [部署指南](docs/DEPLOYMENT_GUIDE.md) - 完整的部署流程
- [架构文档](docs/ARCHITECTURE_AND_PLAN.md) - 技术架构和开发规范

---

## 🔧 常用命令

```bash
npm run dev          # 启动开发服务器
npm run build        # 构建生产版本
npm run start        # 启动生产服务器
npm run lint         # 代码检查
npm run type-check   # TypeScript 类型检查
```

---

## 🌐 环境变量

复制 `.env.example` 为 `.env.local`：

```bash
cp .env.example .env.local
```

编辑 `.env.local` 并填写必要的环境变量。

### 生产环境

在 Vercel Dashboard 添加环境变量：
- `NEXT_PUBLIC_SITE_URL` - 您的网站 URL

---

## 📂 项目结构

```
minimal-finance/
├── app/                    # Next.js App Router
│   ├── api/               # API 路由
│   ├── globals.css        # 全局样式
│   ├── layout.tsx         # 根布局
│   └── page.tsx           # 首页
├── components/            # React 组件
│   ├── layout/           # 布局组件
│   └── sections/         # 页面区块
├── hooks/                # 自定义 Hooks
├── lib/                  # 工具库
├── types/                # TypeScript 类型
├── docs/                 # 项目文档
└── public/               # 静态资源
```

---

## 🎨 设计系统

- **主色调**: `#111827` (近黑色)
- **背景色**: `#F9FAFB` (极浅灰)
- **字体**: Inter + Noto Sans SC
- **风格**: 极简主义、无障碍、高对比度

---

## 📞 技术支持

如有问题，请：
1. 查看 [部署指南](docs/DEPLOYMENT_GUIDE.md)
2. 提交 [Issue](https://github.com/YOUR_USERNAME/minimal-finance/issues)

---

## 📝 许可证

MIT License - 详见 [LICENSE](LICENSE)

---

<div align="center">
  <p>Made with ❤️ by 至简金融团队</p>
  <p>
    <a href="https://vercel.com">
      <img src="https://img.shields.io/badge/Deployed%20on-Vercel-black" alt="Deployed on Vercel"/>
    </a>
    <a href="https://nextjs.org">
      <img src="https://img.shields.io/badge/Built%20with-Next.js-black" alt="Built with Next.js"/>
    </a>
  </p>
</div>
