# ⚡ 快速开始 - 3 步部署

## 第 1 步：在 GitHub 创建仓库

访问 https://github.com/new 创建新仓库：
- Repository name: `minimal-finance`
- Public/Private: Public
- ⚠️ 不要勾选任何初始化选项

## 第 2 步：推送代码

```bash
cd /www/pro/Puhui
git remote add origin https://github.com/YOUR_USERNAME/minimal-finance.git
git push -u origin main
```

## 第 3 步：部署到 Vercel

1. 访问 https://vercel.com
2. 使用 GitHub 登录
3. 点击 "Add New" → "Project"
4. 选择 `minimal-finance` 仓库
5. 点击 "Deploy"

## ✅ 完成！

您的网站将在 1-3 分钟内上线：
`https://minimal-finance-xxx.vercel.app`

---

## 📖 详细文档

- [完整部署指南](DEPLOYMENT_STEPS.md)
- [项目总结](PROJECT_SUMMARY.md)
- [架构文档](docs/ARCHITECTURE_AND_PLAN.md)

## 🚀 或使用自动化脚本

```bash
./deploy.sh
```
