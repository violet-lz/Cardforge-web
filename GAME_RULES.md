# Game Rules

玩家每回合获得 3 点 Energy 并抽牌；卡牌只能通过统一 Card/Deck Engine 从手牌打出。伤害依次经过力量、虚弱、易伤和多段修正，再由 Block 吸收，剩余部分扣除生命。回合结束弃掉手牌，敌人依据数据定义的 Intent Cycle 行动。

地图使用 Run Seed 生成，只有 `availableNodeIds` 中的节点可进入。战斗胜利产生金币和卡牌奖励；休息点治疗，宝箱获得金币，事件和商店改变玩家状态。Boss 节点胜利结束 Run。
