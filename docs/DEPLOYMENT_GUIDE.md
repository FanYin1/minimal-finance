# 至简金融 - 部署指南

本指南将帮助您完成从开发到生产的完整部署流程。

## 📋 目录

- [本地开发](#本地开发)
- [GitHub 配置](#github-配置)
- [Vercel 部署](#vercel-部署)
- [自定义域名](#自定义域名)
- [环境变量](#环境变量)
- [故障排除](#故障排除)

---

## 🚀 本地开发

### 1. 安装依赖

```bash
cd /www/pro/Puhui
npm install
```

### 2. 配置环境变量

```bash
cp .env.example .env.local
```

编辑 `.env.local` 文件，填写必要的环境变量。

### 3. 启动开发服务器

```bash
npm run dev
```

访问 http://localhost:3000 查看效果。

### 4. 构建测试

```bash
npm run build
npm run start
```

---

## 📦 GitHub 配置

### 步骤 1: 初始化 Git 仓库

```bash
cd /www/pro/Puhui
git init
git add .
git commit -m "feat: 初始化至简金融项目"
```

### 步骤 2: 创建 GitHub 仓库

1. 访问 [GitHub](https://github.com/new)
2. 创建新仓库，例如：`minimal-finance`
3. 选择 Public 或 Private
4. **不要**初始化 README、.gitignore 或 license

### 步骤 3: 关联远程仓库

```bash
# 替换为您的 GitHub 用户名和仓库名
git remote add origin https://github.com/YOUR_USERNAME/minimal-finance.git
git branch -M main
git push -u origin main
```

### 步骤 4: 验证推送

访问您的 GitHub 仓库页面，确认代码已成功上传。

---

## ☁️ Vercel 部署

### 方式一：通过 Vercel 网站部署（推荐）

#### 1. 创建 Vercel 账号

访问 [Vercel](https://vercel.com) 并使用 GitHub 账号登录。

#### 2. 导入项目

1. 点击 **"Add New..."** → **"Project"**
2. 选择 **"Import Git Repository"**
3. 找到您的 `minimal-finance` 仓库
4. 点击 **"Import"**

#### 3. 配置项目

- **Framework Preset**: Next.js（自动检测）
- **Build Command**: `npm run build`
- **Output Directory**: `.next`（自动填写）
- **Install Command**: `npm install`

#### 4. 环境变量配置

在部署前，添加必要的环境变量：

```
NEXT_PUBLIC_SITE_URL=https://your-project.vercel.app
```

#### 5. 部署

点击 **"Deploy"** 按钮，Vercel 将自动：
- 克隆代码
- 安装依赖
- 运行构建
- 部署到全球 CDN

首次部署通常需要 1-3 分钟。

#### 6. 访问网站

部署成功后，Vercel 会提供一个 URL：
```
https://minimal-finance-xxx.vercel.app
```

---

### 方式二：通过 Vercel CLI 部署

#### 1. 安装 Vercel CLI

```bash
npm i -g vercel
```

#### 2. 登录 Vercel

```bash
vercel login
```

#### 3. 部署项目

```bash
cd /www/pro/Puhui
vercel
```

按照提示操作：
- Set up and deploy? **Y**
- Which scope? 选择您的账号
- Link to existing project? **N**
- Project name? **minimal-finance**
- Directory? **./（当前目录）**
- Override settings? **N**

#### 4. 部署到生产环境

```bash
vercel --prod
```

---

## 🌐 自定义域名

### 1. 在 Vercel 控制台配置

1. 进入项目 **Settings** → **Domains**
2. 点击 **"Add Domain"**
3. 输入您的域名，如：`minimalfinance.com`
4. 按照提示配置 DNS 记录

### 2. DNS 配置

在您的域名注册商处添加以下记录：

**A 记录**
```
Type: A
Name: @
Value: 76.76.21.21
```

**CNAME 记录**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

### 3. 验证

DNS 生效通常需要 5 分钟到 48 小时，您可以通过以下方式检查：

```bash
dig minimalfinance.com
dig www.minimalfinance.com
```

---

## 🔧 环境变量

### 开发环境（.env.local）

```bash
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 生产环境（Vercel Dashboard）

在 Vercel 项目设置中添加：

```
NEXT_PUBLIC_SITE_URL=https://minimalfinance.com
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX（可选，Google Analytics）
```

---

## 🔄 自动部署工作流

### Git 分支策略

```
main        → 自动部署到生产环境
develop     → 自动部署到预览环境
feature/*   → 为每个 PR 创建预览部署
```

### 部署流程

1. **开发阶段**
   ```bash
   git checkout -b feature/new-feature
   # 开发代码...
   git add .
   git commit -m "feat: 添加新功能"
   git push origin feature/new-feature
   ```

2. **创建 PR**
   - 在 GitHub 创建 Pull Request
   - Vercel 会自动为 PR 创建预览部署
   - 预览 URL：`https://minimal-finance-xxx-username.vercel.app`

3. **合并到 main**
   ```bash
   # PR 审核通过后合并
   git checkout main
   git pull origin main
   ```
   - Vercel 自动部署到生产环境
   - 生产 URL：`https://minimalfinance.com`

---

## 🐛 故障排除

### 问题 1: 构建失败

**错误**: `Error: Command "npm run build" exited with 1`

**解决方案**:
```bash
# 本地测试构建
npm run build

# 检查 TypeScript 错误
npm run type-check

# 检查 ESLint 错误
npm run lint
```

### 问题 2: 环境变量未生效

**解决方案**:
1. 确保环境变量以 `NEXT_PUBLIC_` 开头（客户端使用）
2. 在 Vercel Dashboard 重新部署项目
3. 清除浏览器缓存

### 问题 3: 404 错误

**解决方案**:
- 检查 `next.config.js` 是否正确配置
- 确保 `app/` 目录结构正确
- 查看 Vercel 部署日志

### 问题 4: 样式不生效

**解决方案**:
```bash
# 确保 Tailwind CSS 配置正确
npm run build

# 检查 globals.css 是否正确导入
```

---

## 📊 性能监控

### Vercel Analytics

Vercel 自动提供：
- 页面加载时间
- Core Web Vitals
- 地理位置分布
- 设备类型统计

访问：**Project → Analytics**

### 日志查看

```bash
# 实时查看部署日志
vercel logs

# 查看特定部署
vercel logs [deployment-url]
```

---

## 🔒 安全建议

1. **永远不要**将 `.env.local` 提交到 Git
2. 使用环境变量管理敏感信息
3. 定期更新依赖包：`npm audit fix`
4. 启用 Vercel 的密码保护（预览环境）

---

## 📞 需要帮助？

- [Vercel 文档](https://vercel.com/docs)
- [Next.js 文档](https://nextjs.org/docs)
- [GitHub Issues](https://github.com/YOUR_USERNAME/minimal-finance/issues)

---

## 🎉 部署完成！

恭喜！您的至简金融网站已成功部署到 Vercel。

**下一步**：
- ✅ 配置自定义域名
- ✅ 设置 Google Analytics
- ✅ 启用 CDN 缓存优化
- ✅ 添加 SEO 优化

---

<div align="center">
  <p>Made with ❤️ by 至简金融团队</p>
</div>
