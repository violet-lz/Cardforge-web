# Save Format

存档键为 `starfall-card-game/save`，外层格式为 `{ version, savedAt, state }`。`state` 是可 JSON 序列化的 `GameState`，包含 Run、玩家、地图、战斗、奖励、商店、事件、Meta Progress 和 Replay。

当前 `version` 为 `1`。未来字段变更必须新增迁移函数，不得静默改变旧存档含义。浏览器刷新由 `loadGame()` 恢复当前页面状态；损坏或版本不匹配的存档会被安全忽略。
