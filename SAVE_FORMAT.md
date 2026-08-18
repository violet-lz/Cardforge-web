# Save Format

存档键为 `starfall-card-game/save`，外层格式为 `{ version, savedAt, state }`。`state` 是可 JSON 序列化的 `GameState`，包含 Run、玩家、地图、战斗、奖励、商店、事件、Meta Progress 和 Replay。

当前 `version` 为 `6`。v6 在战斗中的玩家状态新增 `blockRetainTurns`：表示当前格挡还会在多少个后续玩家回合开始时保留。旧版 v1–v5 存档会迁移为 `0`，因此不会意外改变旧存档的格挡生命周期。该字段仅在战斗中存在；格挡被击破或战斗结束时会清零。

浏览器刷新由 `loadGame()` 恢复当前页面状态；损坏或版本不匹配的存档会被安全忽略。未来字段变更必须新增迁移函数，不得静默改变旧存档含义。
