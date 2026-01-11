#!/bin/bash

echo "正在启动 Next.js 开发服务器..."
cd /www/pro/Puhui

# 停止现有进程
pkill -f "next dev" 2>/dev/null

# 启动服务器
nohup npm run dev -- -H 0.0.0.0 > /www/pro/Puhui/dev-server.log 2>&1 &

echo "服务器已启动，PID: $!"
echo "日志文件: /www/pro/Puhui/dev-server.log"
echo ""
echo "访问地址:"
echo "- 本地: http://localhost:3000"
echo "- 公网: http://43.199.109.133:3000"
echo ""
echo "查看日志: tail -f /www/pro/Puhui/dev-server.log"
echo "停止服务: pkill -f 'next dev'"
