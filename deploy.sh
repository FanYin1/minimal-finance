#!/bin/bash

# 至简金融 - GitHub 上传和 Vercel 部署脚本

echo "🚀 至简金融项目部署脚本"
echo "================================"
echo ""

# 检查是否在正确的目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录运行此脚本"
    exit 1
fi

# 步骤 1: 检查 Git 状态
echo "📦 步骤 1/4: 检查 Git 状态..."
if [ ! -d ".git" ]; then
    echo "❌ Git 仓库未初始化"
    echo "请先运行: git init"
    exit 1
fi

# 检查是否有未提交的更改
if ! git diff-index --quiet HEAD 2>/dev/null; then
    echo "⚠️  发现未提交的更改"
    read -p "是否提交这些更改? (y/n) " -n 1 -r
    echo
    if [[ $REPLY =~ ^[Yy]$ ]]; then
        git add .
        read -p "请输入提交信息: " commit_msg
        git commit -m "$commit_msg"
    fi
fi

echo "✅ Git 状态检查完成"
echo ""

# 步骤 2: 配置 GitHub 远程仓库
echo "📡 步骤 2/4: 配置 GitHub 远程仓库..."
if ! git remote | grep -q "origin"; then
    echo "请提供 GitHub 仓库信息:"
    read -p "GitHub 用户名: " github_username
    read -p "仓库名称 (例如: minimal-finance): " repo_name
    
    git_url="https://github.com/${github_username}/${repo_name}.git"
    git remote add origin "$git_url"
    echo "✅ 已添加远程仓库: $git_url"
else
    echo "✅ 远程仓库已配置"
    git remote -v
fi

echo ""

# 步骤 3: 推送到 GitHub
echo "⬆️  步骤 3/4: 推送代码到 GitHub..."
read -p "是否推送到 GitHub? (y/n) " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "正在推送到 GitHub..."
    if git push -u origin main 2>&1 | tee /tmp/git_push.log; then
        echo "✅ 代码已成功推送到 GitHub"
    else
        echo "⚠️  推送失败，请检查:"
        echo "  1. GitHub 仓库是否已创建"
        echo "  2. 是否有推送权限"
        echo "  3. 网络连接是否正常"
        cat /tmp/git_push.log
        exit 1
    fi
else
    echo "⏭️  跳过推送步骤"
fi

echo ""

# 步骤 4: Vercel 部署指引
echo "☁️  步骤 4/4: Vercel 部署指引"
echo "================================"
echo ""
echo "请按照以下步骤完成 Vercel 部署:"
echo ""
echo "方式一: 通过 Vercel 网站（推荐）"
echo "  1. 访问 https://vercel.com"
echo "  2. 使用 GitHub 账号登录"
echo "  3. 点击 'Add New' → 'Project'"
echo "  4. 选择您的仓库并导入"
echo "  5. 点击 'Deploy' 开始部署"
echo ""
echo "方式二: 通过 Vercel CLI"
echo "  1. 安装 CLI: npm i -g vercel"
echo "  2. 登录: vercel login"
echo "  3. 部署: vercel --prod"
echo ""
echo "📖 详细文档: docs/DEPLOYMENT_GUIDE.md"
echo ""

# 完成
echo "================================"
echo "✅ 准备工作已完成！"
echo ""
echo "下一步:"
echo "  • 在 GitHub 查看您的代码"
echo "  • 在 Vercel 部署您的项目"
echo "  • 访问您的网站"
echo ""
echo "🎉 祝部署顺利！"
