# Architecture

## 分层

- `src/game`: 与 React 无关的游戏规则、状态、随机数、地图、战斗、存档、Replay 和 Debug 逻辑。
- `src/data`: 卡牌、敌人、角色、遗物、药水和 Ascension 的数据定义。
- `src/stores`: Zustand 适配层，负责把用户意图转换为规则函数调用并持久化状态。
- `src/pages` / `src/components`: 只负责展示状态和发出用户操作，不直接修改 HP、Energy、牌堆或地图。

## 状态流

`User Action → Zustand Action → pure game engine → GameState → save/UI`。战斗引擎只产生状态和 Combat Log；动画/音效未来应订阅事件，不反向修改规则状态。

## 确定性

Run Seed 生成地图、战斗抽牌和奖励入口。所有洗牌通过 `SeededRng`，CombatState 保存 RNG state；Replay 记录 Seed 和动作序列，Debug Snapshot 暴露当前模式、Run、Combat Phase 与日志。

## 当前实现边界

Phase 1-7 已建立可玩的单幕闭环：开始 Run、选择路线、战斗、奖励、事件、商店、休息、宝箱、Boss 胜负、存档恢复。Phase 8 的视觉层采用原创暗色桌游风格和响应式 CSS；动画/音频仍是可扩展 TODO，不能影响规则层。
