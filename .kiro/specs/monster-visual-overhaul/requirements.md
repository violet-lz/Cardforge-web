# Requirements Document

## Introduction

为 roguelike-card-game 项目中 180+ 只怪物（分布在 25 个地域）进行视觉系统全面升级。升级涵盖四个核心维度：外貌特征细化（每只怪物 7-9 处独特外貌特征）、体型缩放差异化（基于怪物名称语义）、骨骼关节动画系统（6 关节 + 6 种动作）、以及怪物图鉴预览页面。所有改动适配现有纯 SVG + React + TypeScript 技术栈，可直接用于项目仓库升级。

## Glossary

- **Visual_Engine**: spriteShapes.tsx 中的渲染引擎，包含 BodyGlyph 身体原型和 FeatureGlyph 特征形状调度器
- **Monster_Visual_Spec**: MonsterVisualSpec 接口定义的怪物视觉规格数据，包含 kind、hue、hue2、glow、size、eye、features 字段
- **Feature_Spec**: FeatureSpec 接口定义的单个外貌特征，包含 s（形状 id）、x/y（坐标）、c/c2（颜色）、r（旋转）、sc（缩放）
- **Body_Kind**: 身体原型类型，如 beast、wolf、humanoid、dragon 等（现有 26 种）
- **Sprite_Canvas**: 120×120 像素的 SVG viewBox 画布空间
- **Joint_System**: 骨骼关节动画系统，每个怪物由 6 个可动关节组成的骨骼树
- **Joint_Node**: 关节节点，包含锚点坐标、父子关系、可绑定的特征列表
- **Animation_Clip**: 动画片段定义，描述一组关节在时间轴上的关键帧序列
- **Compendium_Page**: 怪物图鉴页面，按地域分组展示所有怪物外观和信息
- **Ground_Line**: 所有怪物共享的水平地面线（Sprite_Canvas 底部参考线）
- **REGION_OF**: 怪物 ID 到地域 ID 的映射表
- **MONSTER_VISUALS**: 所有怪物的 Monster_Visual_Spec 汇总记录

---

## Requirements

### Requirement 1: 外貌特征数量保证

**User Story:** As a player, I want each monster to have rich and distinctive visual features, so that I can immediately distinguish monsters from one another.

#### Acceptance Criteria

1. THE Visual_Engine SHALL render each monster with a minimum of 7 and a maximum of 9 Feature_Spec entries in its Monster_Visual_Spec.
2. WHEN a monster's Monster_Visual_Spec contains fewer than 7 features, THE Visual_Engine SHALL treat this as a data validation error during development builds.
3. WHILE in a production build, THE Visual_Engine SHALL render the monster with whatever Feature_Spec entries are present, regardless of whether the count meets the minimum of 7.
4. THE Monster_Visual_Spec SHALL ensure that no two monsters within the same region share more than 2 identical Feature_Spec shape IDs (the `s` field), validated independently of the feature count requirement.

---

### Requirement 2: 外貌特征语义一致性

**User Story:** As a player, I want each monster's visual appearance to match its name and lore, so that the game world feels immersive and coherent.

#### Acceptance Criteria

1. THE Visual_Engine SHALL render features that are semantically consistent with the monster's name and identity (e.g., "mummified-priest" features bandage wrapping, hollow eye sockets with green fire, and a scarab scepter).
2. THE Feature_Spec entries SHALL each contain at least two visual elements of layered complexity (primary shape plus secondary detail via the `c2` color or nested sub-shapes) to ensure depth and recognizability.
3. WHEN a new Body_Kind is required to represent a monster's identity that no existing kind supports, THE Visual_Engine SHALL define a new Body_Kind entry with a unique silhouette.
4. THE Visual_Engine SHALL allow proactive definition of new Body_Kind entries to expand visual diversity, even when no immediate monster design requires them.

---

### Requirement 3: 特征形状库扩展

**User Story:** As a developer, I want the sprite shape library to contain enough distinct shape primitives, so that 180+ monsters can each have truly unique visual identities.

#### Acceptance Criteria

1. THE Visual_Engine SHALL provide a minimum of 150 distinct FeatureGlyph shape functions to support the diversity requirements of 180+ monsters; this minimum SHALL NOT be treated as a cap on total shape count.
2. WHEN a monster's design requires a shape that does not exist in the current library, THE Visual_Engine SHALL define a new shape function that follows the existing pattern (accepts FeatureSpec, returns SVG `<g>` element with transform), regardless of the current library size.
3. THE Visual_Engine SHALL organize shape functions into semantic categories (anatomy, weapons, armor, nature, magic, tech, structural) with consistent naming conventions.

---

### Requirement 4: 体型缩放差异化

**User Story:** As a player, I want monsters to appear in sizes that match their names and roles, so that a rat looks small and a dragon looks massive.

#### Acceptance Criteria

1. THE Monster_Visual_Spec `size` field SHALL range from 0.5 (smallest creatures like rats and insects) to 1.8 (largest creatures like dragons and leviathans).
2. WHEN rendering a monster, THE EnemySprite component SHALL apply the `size` field as a uniform scale transform centered on the Sprite_Canvas.
3. IF the scale transform fails to apply, THEN THE EnemySprite component SHALL render the monster at a default size of 1.0 as a graceful fallback.
4. WHILE rendering monsters at different sizes, THE EnemySprite component SHALL align all monsters to a shared Ground_Line at the bottom of the Sprite_Canvas (y=103 ellipse shadow baseline).
5. THE Monster_Visual_Spec SHALL assign size values consistent with the monster's name semantics: tier-normal small creatures (0.5–0.8), tier-normal medium creatures (0.85–1.0), tier-elite medium-large creatures (1.0–1.2), tier-boss large creatures (1.2–1.8).

---

### Requirement 5: 骨骼关节系统定义

**User Story:** As a developer, I want a skeletal joint system for monsters, so that animations can be driven by joint transformations rather than frame-by-frame redrawing.

#### Acceptance Criteria

1. THE Joint_System SHALL define exactly 6 Joint_Node entries per monster, each with an anchor point (x, y) in Sprite_Canvas coordinates.
2. THE Joint_System SHALL arrange Joint_Nodes in a parent-child tree structure with a single root joint (typically the body/torso).
3. WHEN a Joint_Node rotates or translates (either independently or in combination), THE Joint_System SHALL propagate the transformation to all descendant joints and their bound Feature_Spec elements.
4. THE Joint_System SHALL store joint definitions as a new `joints` field within Monster_Visual_Spec, represented as an array of 6 JointDef objects containing `id`, `parentId`, `anchor` (x, y), and `boundFeatures` (indices into the features array).

---

### Requirement 6: 动画片段系统

**User Story:** As a player, I want monsters to perform distinct animations for different combat actions, so that battles feel dynamic and visually engaging.

#### Acceptance Criteria

1. THE Animation_Clip system SHALL support 6 distinct animation types per monster: 1 hit-reaction, 3 attack variants, and 2 skill-use variants.
2. WHEN an Animation_Clip plays, THE Joint_System SHALL interpolate joint transforms between keyframes using easing functions over a defined duration.
3. THE Animation_Clip SHALL be defined as a pure data structure containing: clip name, duration (ms), and an array of keyframes—each keyframe specifying time offset and per-joint rotation/translation deltas.
4. IF an Animation_Clip references a joint ID that does not exist in the monster's Joint_System, THEN THE Animation_Clip system SHALL skip that joint's keyframe without error.
5. THE Animation_Clip system SHALL implement animations using CSS custom properties and SVG transform attributes exclusively, without any JavaScript animation library; use of JavaScript-based animation is prohibited.

---

### Requirement 7: 动画渲染集成

**User Story:** As a developer, I want the animation system to integrate seamlessly with the existing EnemySprite rendering pipeline, so that animations can be triggered from game logic.

#### Acceptance Criteria

1. WHEN the EnemySprite component receives an `animation` prop (clip name), THE EnemySprite component SHALL apply the corresponding Animation_Clip transforms to the monster's Joint_Nodes; the component may remain in idle state while transforms are being applied without requiring a forced state transition.
2. WHILE no animation is active, THE EnemySprite component SHALL apply a default idle animation (existing "enemy-idle" CSS class behavior preserved).
3. THE EnemySprite component SHALL expose an `onAnimationEnd` callback prop that fires when a triggered Animation_Clip completes.
4. THE Animation_Clip system SHALL render all animations at 60fps using CSS `@keyframes` generated from the clip's keyframe data, applied via inline `<style>` within the SVG; IF keyframes cannot be generated, THEN THE Animation_Clip system SHALL fail with an error rather than fall back to an alternative rendering method.

---

### Requirement 8: 怪物图鉴页面

**User Story:** As a player, I want a compendium page where I can browse all monsters grouped by region, so that I can appreciate the game's visual variety and learn about enemies I'll encounter.

#### Acceptance Criteria

1. THE Compendium_Page SHALL display all monsters organized by the 25 regions defined in the REGIONS array, with each region presented as a labeled section.
2. WHEN a region section is displayed, THE Compendium_Page SHALL show the region name (Chinese), English subtitle, and region hue color as a section header.
3. THE Compendium_Page SHALL render each monster using the EnemySprite component at a preview size of 120px, displaying the monster's ID/name and tier badge (普通/精英/BOSS) beneath it.
4. WHEN a monster card is clicked, THE Compendium_Page SHALL expand an inline detail panel showing the monster at 240px size with its animation controls (play each of the 6 animation clips).
5. THE Compendium_Page SHALL be accessible as a standalone route in the application's routing system at all times; the route SHALL remain unconditionally available without any conditional unavailability.

---

### Requirement 9: 完整怪物覆盖

**User Story:** As a developer, I want every monster in the REGION_OF mapping to have a complete visual specification, so that no monster renders with the fallback placeholder.

#### Acceptance Criteria

1. THE MONSTER_VISUALS record SHALL contain an entry for every monster ID present in the REGION_OF mapping (all 180+ monsters).
2. WHEN a monster entry exists in REGION_OF but not in MONSTER_VISUALS, THE build process SHALL report this as a validation warning; IF the warning reporting mechanism itself fails, THEN THE build process SHALL continue without interruption.
3. THE MONSTER_VISUALS data SHALL be organized across multiple TypeScript files (monsterVisualsA.ts through monsterVisualsE.ts or more) regardless of individual file line counts, to maintain consistent organizational structure.

---

### Requirement 10: 数据完整性验证

**User Story:** As a developer, I want automated checks to ensure all monster visual data is correct and complete, so that visual regressions are caught before they reach players.

#### Acceptance Criteria

1. THE test suite SHALL verify that every monster in MONSTER_VISUALS has between 7 and 9 features.
2. THE test suite SHALL verify that every monster in MONSTER_VISUALS has a valid `size` field within the range [0.5, 1.8].
3. THE test suite SHALL verify that every monster in MONSTER_VISUALS has a `joints` array of exactly 6 Joint_Node entries with valid parent-child relationships (no cycles, single root).
4. THE test suite SHALL verify that every monster in REGION_OF has a corresponding entry in MONSTER_VISUALS.
5. THE test suite SHALL verify that no two monsters in the same region share more than 2 identical feature shape IDs.

---

### Requirement 11: 现有架构兼容性

**User Story:** As a developer, I want all visual upgrades to maintain backward compatibility with the existing project architecture, so that the upgrade is non-breaking.

#### Acceptance Criteria

1. THE Visual_Engine SHALL maintain the existing 120×120 Sprite_Canvas viewBox for all monster rendering.
2. THE Visual_Engine SHALL preserve the existing MonsterVisualSpec interface fields (kind, hue, hue2, glow, size, eye, features) and extend it additively with new fields (joints, animations).
3. THE Visual_Engine SHALL continue to export all existing public APIs from monsterVisuals.ts (MONSTER_VISUALS, REGIONS, REGION_OF, enemyTier, tierLabel, F).
4. IF a monster's Monster_Visual_Spec does not include the new `joints` field, THEN THE EnemySprite component SHALL gracefully ignore any animation requests and render the monster statically without error.
5. WHEN an `animation` prop is set on a monster without joints data, THE EnemySprite component SHALL discard the animation request and maintain static rendering.
6. THE Visual_Engine SHALL produce zero TypeScript type errors when compiled with the project's existing tsconfig.

---

### Requirement 12: 性能约束

**User Story:** As a player, I want the game to remain smooth even with complex monster visuals and animations, so that the enhanced visuals don't degrade the gameplay experience.

#### Acceptance Criteria

1. THE EnemySprite component SHALL render a single monster (including all features and joint structure) within 16ms on a mid-range device (targeting 60fps).
2. THE Compendium_Page SHALL implement virtualized rendering or lazy loading for the full monster list, loading only visible region sections.
3. THE Animation_Clip system SHALL use CSS-based animations exclusively, offloading interpolation to the browser's compositor thread.
4. WHILE multiple monsters are visible simultaneously (up to 4 in combat), THE Visual_Engine SHALL maintain 60fps rendering without frame drops.
