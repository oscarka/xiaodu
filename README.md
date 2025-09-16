# 小度智能屏健康档案 H5 页面

一个专为小度智能屏设计的健康档案管理页面，模仿阿里巴巴 AQ 移动应用的设计风格，适配横屏显示。

## 功能特点

- 🏥 **就医资料夹** - 门诊病历、处方、住院记录等医疗文档管理
- 📋 **健康史** - 基本信息、既往病史、家族病史、过敏史等
- 💊 **用药计划** - 当前用药、用药提醒、药物相互作用检测
- 📦 **我的药箱** - 常备药品、库存管理、购买记录
- ⚙️ **更多功能** - 个人设置、数据管理、帮助中心等

## 技术特性

- 📱 **响应式设计** - 适配小度智能屏横屏显示（1024x600 / 1280x800）
- 🎨 **现代化UI** - 卡片式布局，大图标设计，适合触摸操作
- ⚡ **轻量级** - 纯HTML/CSS/JavaScript，无需复杂框架
- 🔄 **实时交互** - 标签页切换，卡片点击反馈
- 🎯 **触控优化** - 针对智能屏触摸操作优化

## 项目结构

```
xiaodu-smart-screen/
├── index.html          # 主页面
├── css/                # 样式文件
│   ├── main.css        # 主样式
│   ├── layout.css      # 布局样式
│   ├── components.css  # 组件样式
│   └── responsive.css  # 响应式样式
├── js/                 # JavaScript文件
│   └── main.js         # 主逻辑
├── package.json        # 项目配置
├── railway.json        # Railway部署配置
└── README.md          # 项目说明
```

## 本地开发

1. 克隆项目
```bash
git clone https://github.com/oscarka/xiaodu.git
cd xiaodu
```

2. 启动本地服务器
```bash
# 使用Python
python3 -m http.server 8000

# 或使用Node.js
npx serve .
```

3. 访问 http://localhost:8000

## 部署到 Railway

1. 连接GitHub仓库到Railway
2. Railway会自动检测到Python项目
3. 使用内置的Python HTTP服务器部署
4. 访问生成的Railway URL

## 浏览器支持

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

## 屏幕适配

- 小度智能屏：1024x600
- 大屏智能屏：1280x800
- 桌面浏览器：1920x1080+

## 开发计划

- [ ] 添加更多健康数据可视化
- [ ] 集成真实API接口
- [ ] 添加用户认证系统
- [ ] 支持多语言
- [ ] 添加离线功能

## 许可证

MIT License

## 作者

oscarka

## 贡献

欢迎提交 Issue 和 Pull Request！
