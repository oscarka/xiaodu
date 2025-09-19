#!/bin/bash

# 快速部署脚本
echo "🚀 开始快速部署..."

# 检查git状态
if [ -n "$(git status --porcelain)" ]; then
    echo "📝 发现未提交的更改，正在提交..."
    git add .
    git commit -m "快速部署更新 - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 推送到远程仓库
echo "📤 推送到远程仓库..."
git push origin main

echo "✅ 部署完成！"
echo "🌐 访问地址: https://xiaodu.railway.app"
