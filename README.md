# 番茄时钟 (Pomodoro Clock)

一个简洁美观的桌面番茄钟应用，使用 Electron 开发。

## 功能特点

- 🍅 专注时间管理
- ⏸️ 暂停/继续功能
- 🔄 重置功能
- 📊 进度环显示
- ⚙️ 自定义设置：
  - 专注时长（默认25分钟）
  - 休息时长（默认5分钟）
  - 长休息时长（默认15分钟）
  - 长休息前完成次数（默认4次）
- 📈 统计功能：
  - 今日完成数
  - 总完成数
- 🔔 时间到提醒
- 🎨 不同模式的视觉提示

## 安装和运行

1. 确保已安装 [Node.js](https://nodejs.org/) (v12 或更高版本)

2. 克隆项目：
   ```bash
   git clone <repository-url>
   cd pomodoro-clock
   ```

3. 安装依赖：
   ```bash
   npm install
   ```

4. 运行应用：
   ```bash
   npm start
   ```

## 构建和打包

要构建成可执行文件：

```bash
# 构建当前平台
npm run build

# 构建所有平台
npm run dist

# 单独构建特定平台
npm run build:mac  # macOS
npm run build:win  # Windows
npm run build:linux  # Linux
```

## 技术栈

- [Electron](https://www.electronjs/) - 跨平台桌面应用框架
- [Electron Store](https://github.com/sindresorhus/electron-store) - 简单的数据存储
- HTML5 / CSS3 / JavaScript - 前端技术

## 使用说明

1. 开始专注：点击"开始"按钮开始专注计时
2. 暂停/继续：计时过程中可以随时暂停和继续
3. 重置：点击"重置"按钮重新开始当前计时
4. 设置：在设置面板中调整各项时间参数
5. 统计：查看今日和总计完成的专注次数

## 项目结构

```
pomodoro-clock/
├── src/
│   └── main/
│       └── index.js          # 主进程代码
├── public/
│   ├── index.html           # 主页面
│   ├── style.css           # 样式文件
│   └── renderer.js         # 渲染进程代码
├── assets/
│   └── icon.png            # 应用图标
├── package.json            # 项目配置
└── README.md              # 说明文档
```

## 开发

要开发应用：

1. 启用开发者工具（在开发模式下自动打开）
2. 修改代码后需要重启应用才能看到更改

## 许可证

MIT