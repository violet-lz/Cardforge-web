# 星陨牌局 · Starfall Deckbuilder

**星陨牌局（Starfall Deckbuilder）** 是一款原创的 **浏览器卡牌 Roguelike / Deckbuilder**：以同一 Seed 推导可复现的地图与遭遇，围绕构筑、路线抉择和高难度 Boss 展开。它拥有类似《杀戮尖塔》（Slay the Spire）的卡牌构筑循环，但与该作品不存在官方关联；本作更强调可在浏览器内直接编辑、导入和分享内容的灵活自定义系统。

🎮 **在线即玩 / Play instantly:** <https://violet-lz.github.io/Cardforge-web/>

无需安装、无需注册、无需后端：打开 GitHub Pages 网页即可开始一局，并且支持中英文切换。本地开发同样只需 Node.js 与 npm。

**Search keywords:** card roguelike, deckbuilder, Slay the Spire-like, browser game, web game, click-to-play, no-install, custom content editor, GitHub Pages, React TypeScript game, Kill the Spire.

---

## 快速开始（三步运行）

> 前置条件：已安装 [Node.js](https://nodejs.org/) 18+ 与 npm。

```bash
# 1. 克隆项目
git clone https://github.com/violet-lz/Cardforge-web.git
cd Cardforge-web

# 2. 安装依赖
npm install

# 3. 启动游戏（自动打开浏览器）
npm start      #npm run dev
```

打开终端输出的地址（通常是 `http://localhost:5173`）即可游玩。

### 其他运行方式

| 命令 | 用途 |
|------|------|
| `npm start` / `npm run dev` | 开发模式（热更新，适合修改代码后实时查看） |
| `npm run preview` | 构建优化版并自动打开浏览器（体验最流畅） |
| `npm run build` | 仅构建，产物在 `dist/` 目录 |

macOS 用户也可以直接双击 `scripts/build-and-play.command`，它会自动安装依赖、构建并打开游戏。

---

## 游戏简介

- **6 位角色**，各有独立资源与构筑轴心
- **22 个地域**，每个都有专属怪物、Boss、事件、商店和视觉主题
- **7 幕远征**（难度 1–3 为 5 幕，难度 4 为 6 幕，难度 5 为 7 幕）
- **5 档难度**，通关后逐步解锁更高难度与更多内容
- **固定 Seed**，同一 Seed 地图、遭遇和随机流程完全可复现
- **自定义内容系统**，可在浏览器中直接编辑卡牌/角色/敌人/遗物/药水并导出分享
- **本地存档**，刷新即恢复；不需要联网或注册

---

## 技术栈

React 18 · TypeScript · Vite · Zustand · Vitest · Playwright

---

## 测试

```bash
npm run test          # 单元测试（Vitest）
npm run test:e2e      # 端到端测试（Playwright，首次需 npx playwright install chromium）
```

---

## 项目结构

```
src/
├── game/       纯规则层（不依赖 React）
├── data/       卡牌、角色、敌人、遗物、药水数据
├── pages/      页面组件
├── components/ 通用 UI 组件
└── stores/     状态管理与存档
tests/          单元测试
e2e/            端到端测试
```

---

## 自定义内容

从主页进入「余烬创作工坊」，无需编程即可修改游戏内容。支持导入/导出 JSON 内容包，也可以一键复原为系统原版。导入过程不执行任何代码，安全可靠。

---

## 求助：数值平衡

本游戏数值尚未经过大规模测试，可能存在不平衡之处。欢迎通过自定义系统直接调整并分享平衡方案，或在 Issues 中反馈。一起让六个角色、22 个地域和数百张卡牌达到可玩平衡！

Balance has NOT been extensively playtested. Use the built-in Custom Content Editor to fix outliers and share your rebalance pack. Issues are also welcome!

---

## 许可

暂未指定开源许可证。使用/借鉴本项目请标明出处链接。觉得好玩记得点个 ⭐ Star，谢谢！

## git注意事项
//所有修改不用上传github，每次修改完记得本地commit就行了，commit时需注意提交标签的写法（例如：怪物骨骼动画集成到战斗场景 -/- Integrate skeletal monster animations into combat），git push由开发者自己来。【git注意事项】这部分内容只存于本地不需要commit！