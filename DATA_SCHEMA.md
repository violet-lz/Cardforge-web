# Data Schema

卡牌使用 `CardDefinition`，包含 id、名称、类型、稀有度、费用、目标、描述和 `CardEffect[]`；敌人使用 `EnemyDefinition`，包含生命、行为和 Intent 序列；角色、遗物、药水、地图节点、事件和商店均使用独立 TypeScript 接口。

内容数据放在 `src/data`，规则实现放在 `src/game`。添加新卡牌或敌人时优先增加数据定义和针对引擎的测试，不在 React 组件中添加名称判断。
