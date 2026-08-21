# Implementation Plan: Monster Visual Overhaul

## Overview

本实现计划将怪物视觉系统升级分解为 17 个有序步骤：从类型扩展 → 渲染引擎 → 数据填充 → 页面集成 → 验证测试。所有任务使用 TypeScript + React + 纯 CSS 动画技术栈，代码风格与现有项目一致。

## Tasks

- [x] 1. 扩展类型系统 (monsterVisualTypes.ts)
  - [x] 1.1 新增 JointDef、JointKeyframe、AnimationKeyframe、AnimationClip 接口定义
    - 在 `src/game/enemies/monsterVisualTypes.ts` 中新增四个接口
    - 扩展 `MonsterVisualSpec` 接口添加可选 `joints?: JointDef[]` 和 `animations?: AnimationClip[]` 字段
    - 确保原有字段不变，新字段为可选，保持向后兼容
    - 运行 `npm run typecheck` 确认无类型错误
    - _Requirements: 5.1, 5.4, 6.3, 11.2, 11.6_

- [x] 2. 扩展 spriteShapes 形状库
  - [x] 2.1 新增 FeatureGlyph 形状函数至 150+ 个
    - 在 `src/components/enemies/spriteShapes.tsx` 中新增至少 7 个形状函数：`tongue`, `ribcage`, `tendons`, `flail`, `pauldron`, `pentagram`, `antenna`
    - 每个函数遵循 `(f: FeatureSpec) => JSX.Element` 签名，返回 SVG `<g>` 元素
    - 更新 `FeatureGlyph` 调度器的 switch/map 添加新 shape ID 匹配
    - 确保总形状函数数量 ≥ 150
    - _Requirements: 3.1, 3.2, 3.3_

- [x] 3. 实现 AnimationGenerator 工具模块
  - [x] 3.1 创建 `src/components/enemies/animationGenerator.ts`
    - 实现 `generateKeyframes(clip, joints, instanceId)` 函数：为每个关节生成 `@keyframes` CSS 规则
    - 实现 `generateAnimationCSS(clip, joints, instanceId)` 函数：生成完整 `<style>` 内容（@keyframes + animation 属性）
    - 关键帧时间映射到百分比，easing 通过 `animation-timing-function` 设置
    - 每个关节的 `transform-origin` 使用其 `anchor` 坐标
    - 不使用任何 JS 动画库，仅生成纯 CSS 字符串
    - _Requirements: 6.2, 6.5, 7.4, 12.3_

  - [ ]* 3.2 编写 AnimationGenerator 单元测试
    - 创建 `tests/animationGenerator.test.ts`
    - 测试输出格式包含正确的 @keyframes 语法
    - 测试 easing 函数正确映射
    - 测试 instanceId 前缀确保命名唯一
    - 测试空 keyframes 数组时的边界处理
    - _Requirements: 10.3, 6.4_

- [x] 4. 实现 JointRenderer 组件
  - [x] 4.1 创建 `src/components/enemies/JointRenderer.tsx`
    - 实现 `JointRenderer` 组件，接收 `spec`、`animation`、`onEnd` props
    - 按骨骼树结构（root → head/armL/armR/legL/legR）递归嵌套 `<g>` 元素
    - 每个关节 `<g>` 使用 CSS class 名引用对应动画规则
    - 将 features 按 `boundFeatures` 分配到对应关节的 `<g>` 中渲染
    - 未绑定到任何关节的 features 在 root 层直接渲染
    - 监听最外层 `animationend` 事件触发 `onEnd` 回调
    - _Requirements: 5.2, 5.3, 7.1, 7.3_

  - [ ]* 4.2 编写 JointRenderer 单元测试
    - 创建 `tests/jointRenderer.test.ts`
    - 测试骨骼树嵌套结构正确性
    - 测试 features 正确分配到关节
    - 测试 onEnd 回调触发时机
    - _Requirements: 5.3, 7.3_

- [x] 5. 升级 EnemySprite 组件
  - [x] 5.1 更新 `src/components/enemies/EnemySprite.tsx` 支持 size/ground-line 对齐
    - 添加 `animation?: string` 和 `onAnimationEnd?: () => void` props
    - 应用 `spec.size` 缩放：`transform = translate(${60*(1-size)}, ${103*(1-size)}) scale(${size})`
    - 影子椭圆 rx 同步缩放：`rx={27 * spec.size}`
    - 无 `joints` 字段或 `joints.length !== 6` 时忽略 animation prop，静态渲染
    - 有 `joints` 且传入 `animation` 时，渲染 `JointRenderer` + 内联 `<style>` (AnimationStyle)
    - 无 animation 时保留现有 `enemy-idle` class 行为
    - 添加开发环境校验：features < 7 输出 console.error，size 越界输出 console.warn
    - _Requirements: 4.1, 4.2, 4.4, 7.1, 7.2, 11.4, 11.5, 12.1_

  - [ ]* 5.2 编写 EnemySprite 渲染测试
    - 创建 `tests/spriteRendering.test.ts`
    - 测试 Ground_Line offset 计算公式正确性
    - 测试无 joints 时忽略 animation prop
    - 测试 size 缩放 transform 生成
    - _Requirements: 4.4, 11.4_

- [x] 6. Checkpoint - 渲染引擎验证
  - Ensure all tests pass, ask the user if questions arise.

- [x] 7. 填充怪物视觉数据 — 文件 A (灰烬荒原 + 落败村庄 + 生机森林)
  - [x] 7.1 更新 `src/game/enemies/monsterVisualsA.ts` — 灰烬/村庄/森林 地域怪物
    - 将灰烬荒原（11只）、落败村庄（7只）、生机森林（7只）的怪物 features 扩展到 7-9 个
    - 为每只怪物设置语义一致的 `size` 值（参照 tier-size 对照表）
    - 为每只怪物添加 `joints` 数组（6 个关节定义）
    - 确保同一地域内任意两只怪物不超过 2 个相同 shape ID
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1_

- [x] 8. 填充怪物视觉数据 — 文件 B (苔藓沼泽 + 恶臭下水道 + 繁华皇都)
  - [x] 8.1 更新 `src/game/enemies/monsterVisualsB.ts` — 沼泽/下水道/皇都 地域怪物
    - 将苔藓沼泽（7只）、恶臭下水道（6只）、繁华皇都（7只）的怪物 features 扩展到 7-9 个
    - 为每只怪物设置语义一致的 `size` 值
    - 为每只怪物添加 `joints` 数组
    - 确保同一地域内任意两只怪物不超过 2 个相同 shape ID
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1_

- [x] 9. 填充怪物视觉数据 — 文件 C (皇都外环 + 血色之地 + 魔法之地)
  - [x] 9.1 创建 `src/game/enemies/monsterVisualsC.ts` — 外环/血色/魔法 地域怪物
    - 从 monsterVisualsB.ts 中拆分或新建皇都外环（6只）、血色之地（6只）、魔法之地（6只）的怪物数据
    - 每只怪物 7-9 个 features + size + joints
    - 确保同一地域内 shape 唯一性约束
    - 导出为 `VISUALS_C`
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1, 9.3_

- [ ] 10. 填充怪物视觉数据 — 文件 D (科技之城 + 天空岛 + 贵族城堡 + 墓道)
  - [-] 10.1 创建 `src/game/enemies/monsterVisualsD.ts` — 科技/天空/城堡/墓道 地域怪物
    - 科技之城（6只）、天空岛（6只）、贵族城堡（6只）、城堡地下墓道（6只）
    - 每只怪物 7-9 个 features + size + joints
    - 确保同一地域内 shape 唯一性约束
    - 导出为 `VISUALS_D`
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1, 9.3_

- [ ] 11. 填充怪物视觉数据 — 文件 E (冥界 + 幽冥渡口 + 海洋 + 亚特兰蒂斯)
  - [~] 11.1 创建 `src/game/enemies/monsterVisualsE.ts` — 冥界/渡口/海洋/亚特兰蒂斯 地域怪物
    - 冥界（6只）、幽冥渡口（6只）、海洋（6只）、亚特兰蒂斯（6只）
    - 每只怪物 7-9 个 features + size + joints
    - 确保同一地域内 shape 唯一性约束
    - 导出为 `VISUALS_E`
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1, 9.3_

- [ ] 12. 填充怪物视觉数据 — 文件 F (钟楼 + 荒漠 + 陨石遗迹)
  - [~] 12.1 创建 `src/game/enemies/monsterVisualsF.ts` — 钟楼/荒漠/陨石 地域怪物
    - 钟楼（5只）、荒漠（8只）、陨石遗迹（7只）
    - 每只怪物 7-9 个 features + size + joints
    - 确保同一地域内 shape 唯一性约束
    - 导出为 `VISUALS_F`
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1, 9.3_

- [ ] 13. 填充怪物视觉数据 — 文件 G (霓虹院 + 恶魔巢穴 + 世界地垒 + 旧日余响)
  - [~] 13.1 创建 `src/game/enemies/monsterVisualsG.ts` — 霓虹/恶魔/地垒/余响 地域怪物
    - 霓虹院（5只）、恶魔巢穴（5只）、世界地垒（5只）、旧日余响（21只）
    - 每只怪物 7-9 个 features + size + joints
    - 确保同一地域内 shape 唯一性约束
    - 导出为 `VISUALS_G`
    - _Requirements: 1.1, 1.4, 2.1, 4.1, 4.5, 5.1, 9.1, 9.3_

- [ ] 14. 更新 monsterVisuals.ts 聚合文件
  - [~] 14.1 更新 `src/game/enemies/monsterVisuals.ts` 导入并合并所有视觉数据文件
    - 添加 `import { VISUALS_C } from './monsterVisualsC'` 至 `VISUALS_G`
    - 更新 `MONSTER_VISUALS` 合并所有 7 个数据源
    - 保留 `REGIONS`、`REGION_OF`、`enemyTier`、`tierLabel`、`F` 等现有导出不变
    - 运行 `npm run typecheck` 确认类型正确
    - _Requirements: 9.1, 11.3_

- [~] 15. Checkpoint - 数据完整性验证
  - Ensure all tests pass, ask the user if questions arise.

- [ ] 16. 填充怪物动画数据
  - [~] 16.1 创建 `src/game/enemies/monsterAnimations.ts`
    - 为所有 180+ 只怪物定义 6 个 AnimationClip（hit, attack1, attack2, attack3, skill1, skill2）
    - 根据怪物体型和身体原型(kind)复用动画模板，添加差异化参数
    - 导出 `applyAnimations(visuals: Record<string, MonsterVisualSpec>)` 函数，将 animations 注入到各怪物 spec 中
    - 在 monsterVisuals.ts 中调用 applyAnimations 完成注入
    - _Requirements: 6.1, 6.3_

- [ ] 17. 实现怪物图鉴页面
  - [~] 17.1 创建 `src/pages/MonsterCompendiumPage.tsx`
    - 按 25 个 REGIONS 分组展示所有怪物
    - 每个 region section 显示中文名、英文名、hue 色条
    - 每只怪物用 EnemySprite 120px 预览 + 名称 + tier 徽章
    - 点击怪物卡片展开 240px 详情面板含 6 个动画播放按钮
    - 使用 IntersectionObserver 实现 region section 懒加载
    - _Requirements: 8.1, 8.2, 8.3, 8.4, 12.2_

  - [~] 17.2 接入路由系统
    - 在 App.tsx 中新增 `'monster-compendium'` mode 分支
    - 在 useGameStore 中添加 `openMonsterCompendium` action
    - 确保图鉴页面路由无条件可用
    - _Requirements: 8.5_

- [ ] 18. 数据完整性属性测试
  - [ ]* 18.1 编写 Property 1 测试 — Feature count invariant
    - 创建 `tests/monsterVisualProperties.test.ts`
    - 验证 MONSTER_VISUALS 中每只怪物有 7-9 个 features
    - **Property 1: Feature count invariant**
    - **Validates: Requirements 1.1, 10.1**

  - [ ]* 18.2 编写 Property 2 测试 — Size field range invariant
    - 验证 MONSTER_VISUALS 中每只怪物 size ∈ [0.5, 1.8]
    - **Property 2: Size field range invariant**
    - **Validates: Requirements 4.1, 10.2**

  - [ ]* 18.3 编写 Property 3 测试 — Joint tree structural validity
    - 验证有 joints 字段的怪物：length === 6、单根、无环、boundFeatures 索引合法
    - **Property 3: Joint tree structural validity**
    - **Validates: Requirements 5.1, 5.2, 10.3**

  - [ ]* 18.4 编写 Property 4 测试 — Complete coverage invariant
    - 验证 REGION_OF 中每个 ID 在 MONSTER_VISUALS 中都有对应条目
    - **Property 4: Complete coverage invariant**
    - **Validates: Requirements 9.1, 10.4**

  - [ ]* 18.5 编写 Property 5 测试 — Intra-region shape uniqueness
    - 验证同一地域内任意两只怪物不超过 2 个相同 shape ID
    - **Property 5: Intra-region shape uniqueness**
    - **Validates: Requirements 1.4, 10.5**

  - [ ]* 18.6 编写 Property 6 测试 — Animation clip references valid joints
    - 验证动画关键帧中引用的 jointId 在怪物 joints 数组中存在
    - **Property 6: Animation clip references valid joints**
    - **Validates: Requirements 6.4**

  - [ ]* 18.7 编写 Property 7 测试 — Size-tier consistency
    - 验证各 tier 怪物的 size 值落在预期范围
    - **Property 7: Size-tier consistency**
    - **Validates: Requirements 4.5**

  - [ ]* 18.8 编写 Property 8 测试 — Ground_Line alignment idempotence
    - 使用 fast-check 验证 offsetY 公式对任意合法 size 保持脚部在 y=103
    - **Property 8: Ground_Line alignment idempotence**
    - **Validates: Requirements 4.4**

- [ ] 19. 集成测试与构建验证
  - [~] 19.1 扩展现有 `tests/contentAppearance.test.ts`
    - 验证所有 180+ 怪物可通过 `renderToStaticMarkup(EnemySprite)` 无错误渲染
    - 验证带 animation prop 时无运行时异常
    - _Requirements: 11.4, 11.5, 12.1_

  - [~] 19.2 运行完整构建验证
    - 执行 `npm run typecheck` — 零 TypeScript 错误
    - 执行 `npm run build` — 无警告
    - 执行 `npm run test` — 所有测试通过
    - _Requirements: 11.6_

- [~] 20. Final checkpoint - 全面验证
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- 怪物视觉数据文件（7-13）是最大工作量任务，每个文件约 20-36 只怪物的完整数据
- 动画数据（任务16）可复用基于 `kind` 的模板，按体型差异化参数
- 所有代码使用 TypeScript，与项目现有技术栈一致

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1"] },
    { "id": 1, "tasks": ["2.1", "3.1"] },
    { "id": 2, "tasks": ["3.2", "4.1"] },
    { "id": 3, "tasks": ["4.2", "5.1"] },
    { "id": 4, "tasks": ["5.2", "7.1", "8.1"] },
    { "id": 5, "tasks": ["9.1", "10.1", "11.1"] },
    { "id": 6, "tasks": ["12.1", "13.1"] },
    { "id": 7, "tasks": ["14.1"] },
    { "id": 8, "tasks": ["16.1"] },
    { "id": 9, "tasks": ["17.1"] },
    { "id": 10, "tasks": ["17.2"] },
    { "id": 11, "tasks": ["18.1", "18.2", "18.3", "18.4", "18.5", "18.6", "18.7", "18.8"] },
    { "id": 12, "tasks": ["19.1", "19.2"] }
  ]
}
```
