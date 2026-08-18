# Save Format

存档键为 `starfall-card-game/save`，外层格式为 `{ version, savedAt, state }`。`state` 是可 JSON 序列化的 `GameState`，包含 Run、玩家、地图、战斗、奖励、商店、事件、Meta Progress 和 Replay。

当前 `version` 为 `7`。v7 增加五档难度进度：`metaProgress.maxUnlockedAscensionLevel` 默认开放到 3，`ascensionLevel` 表示当前选择；通关难度 3 解锁 4，通关难度 4 解锁 5。活动战斗也会保存难度，以保证刷新后敌人数值与污染概率不变。v6 的 `blockRetainTurns` 语义保持不变。

旧版 v1–v6 存档会依次迁移到 v7：旧的难度 0 归一为难度 1，最高开放难度默认为 3，旧地图节点可没有 `regionId` 并回退到地图主地域。浏览器刷新由 `loadGame()` 恢复当前页面状态；损坏、越界难度或版本不匹配的存档会被安全忽略。未来字段变更必须新增迁移函数，不得静默改变旧存档含义。
