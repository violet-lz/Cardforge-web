# Testing

- `npm run typecheck`：TypeScript 项目引用检查。
- `npm run test`：Vitest 单元测试。
- `npm run build`：生产构建检查。

测试覆盖 Seeded RNG、存档往返、牌堆洗牌、Energy、Damage/Block、战斗闭环、地图可达性、遗物/药水、Ascension/Meta 和 Replay/Debug。固定 Seed 与固定操作序列应产生相同的地图、抽牌顺序和战斗日志。
