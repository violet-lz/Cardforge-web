# 星陨牌局 · Starfall Deckbuilder

> **中文名：星陨牌局** · **English name: Starfall Deckbuilder**

一个原创的浏览器 Roguelike 卡牌构筑游戏。玩家在熄火圣殿的灰烬远征中，以固定 Seed 驱动路线、战斗与抽牌命运，逐步构筑自己的牌组。

An original browser-based roguelike deckbuilder. Explore the Ashen Expedition through the extinguished sanctuary, with routes, combat, and draws driven by deterministic Seeds.

## 项目特色 / Highlights

- **固定 Seed / Deterministic Seeds**：地图、遭遇和随机流程可复现。
- **卡牌构筑战斗 / Deckbuilding Combat**：能量、格挡、状态、敌人 Intent、多目标与多段伤害。
- **多幕远征 / Multi-act Runs**：分支地图、精英、Boss、奖励、事件、商店和休整节点。
- **局外成长 / Meta Progression**：图鉴发现、角色起始属性强化与 Ascension 进度。
- **可自定义内容 / Custom Content**：在浏览器中安全编辑、导入和导出卡牌、角色、敌人、遗物和药水 JSON；不执行导入文本。
- **本地存档 / Local Saves**：版本化 `localStorage` 存档与回放记录。
- **无外部游戏资源 / No External Game Assets**：UI 视觉、地图与角色展示均不依赖外部资源包。

## 技术栈 / Tech Stack

React 18 · TypeScript · Vite · Zustand · Vitest · Playwright

## 开始运行 / Getting Started

```bash
npm install
npm run dev
```

打开终端显示的本地地址即可开始。Open the local URL printed by Vite.

## 验证与构建 / Validate and Build

```bash
npm run test
npm run test:e2e
npm run build
```

首次运行 E2E 时，如本机没有 Chromium：

```bash
npx playwright install chromium
```

## 项目结构 / Project Structure

- `src/game`：纯规则层 / framework-independent game rules
- `src/data`：卡牌、角色、敌人、遗物和药水定义 / content definitions
- `src/pages`、`src/components`：React 页面与可访问 UI / React UI
- `src/stores`：运行状态和存档协调 / run-state orchestration
- `tests`、`e2e`：单元与端到端测试 / unit and end-to-end tests

## 自定义内容 / Custom Content

从主页进入“自定义内容 / Custom Content”，可使用中文字段编辑安全 JSON。导入只接受纯 JSON 或文档中定义的受限 JSON 包装，不会使用 `eval`、动态导入或执行用户文本。

## 仓库命名与介绍 / Repository Name and Description

- **推荐仓库名 / Recommended repository name:** `starfall-deckbuilder`
- **展示名 / Display name:** `星陨牌局 · Starfall Deckbuilder`
- **GitHub 简介 / GitHub description:** `原创浏览器 Roguelike 卡牌构筑游戏 · An original deterministic browser roguelike deckbuilder.`

## 许可 / License

暂未指定开源许可证。如果要使用/借鉴本项目还请表明出处链接。
要是觉得这个项目好玩记得点个start，谢谢。

## 求助：数值平衡 / Help Wanted: Balance

本游戏的卡牌、怪物、遗物、药水和角色数值尚未经过大规模真人测试，可能存在较多不平衡之处。如果你在游玩中发现某些内容明显过强或过弱，欢迎通过游戏内自带的**自定义内容系统**（无需编程能力）直接调整并导出分享你的平衡方案。也欢迎在 Issues 中反馈数值问题。一起让这个游戏的六个角色、22 个地域和数百张卡牌达到真正的可玩平衡！

The card, enemy, relic, potion, and character numbers have NOT been extensively playtested and are likely unbalanced. If you discover outliers, you can fix them yourself using the built-in **Custom Content Editor** (no coding required) and export/share your rebalance pack. Issues reporting balance problems are also welcome. Let's make all six heroes, 22 regions, and hundreds of cards truly playable together!
