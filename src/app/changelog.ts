/**
 * Changelog entries. Each `message` uses the pattern:
 *   "中文说明-/-English description"
 * The separator `-/-` splits into [zh, en] for locale display.
 */
export interface ChangelogEntry { date: string; message: string; }
export const CHANGELOG: ChangelogEntry[] = [
  { date: '2026-09-02', message: 'feat:修复bug -/- fix bug' },
  { date: '2026-08-28', message: '霓虹院+恶魔巢穴+世界地垒+旧日余响36怪物外观重制·完成全部167只 -/- Overhaul final 36 monsters (Neon+Demon+Rampart+Legacy); all 167 monsters complete, 9 features each' },
  { date: '2026-08-28', message: '钟楼+荒漠+陨石20怪物外观重制+形状调度大小写不敏感根治(全1365 ID零dot fallback) -/- Overhaul 20 monsters (Steeple+Desert+Meteor); make shape dispatch case-insensitive, 0 dot fallback across all 1365 IDs' },
  { date: '2026-08-28', message: '冥界+渡口+海洋+亚特兰蒂斯24怪物外观重制·9独特特征·0 dot fallback -/- Overhaul 24 monsters (Nether + Ferry + Ocean + Atlantis) with 9 unique features, 0 dot fallback' },
  { date: '2026-08-28', message: '科技+天空+城堡+墓道24怪物外观重制·9独特特征·0 dot fallback -/- Overhaul 24 monsters (Tech + Sky + Castle + Crypt) with 9 unique features, 0 dot fallback' },
  { date: '2026-08-28', message: '修复本地开发npm start自动打开浏览器+正确路径 -/- Fix npm start to auto-open browser at correct local path (/ for dev, /Cardforge-web/ for production)' },
  { date: '2026-08-28', message: '皇都外环+血色之地+魔法之地18怪物外观重制·9独特特征·0 dot fallback -/- Overhaul 18 monsters (Outer Ring + Blood Lands + Arcane) with 9 unique features, 0 dot fallback' },
  { date: '2026-08-28', message: '沼泽+下水道+皇都20怪物外观重制·9独特特征·0 dot fallback -/- Overhaul 20 monsters (Mire + Sewer + Capital) with 9 unique features, 0 dot fallback' },
  { date: '2026-08-28', message: '落败村庄+生机森林14怪物外观重制·9独特特征·0 dot fallback -/- Overhaul 14 monsters (Fallen Village + Living Forest) with 9 unique features each, 0 dot fallback' },
  { date: '2026-08-28', message: 'fix+feat: 修复idle缩放bug·新增block/blockReact动画·补全形状调度·灰烬荒原11怪物外观重制 -/- Fix idle scale bug, add block/blockReact animations, patch shape dispatch (0 dot fallback), overhaul 11 Ashen Wastes monsters' },
  { date: '2026-08-21', message: '图鉴角色特性页面展示精细角色外观 -/- Show detailed character sprites in compendium character section' },
  { date: '2026-08-21', message: '6角色UI全面重做·精细多部件SVG外貌+独特战斗动画（挥剑/飞卡/喷火/射弩/盾冲/甩牌） -/- Overhaul 6 character sprites: detailed multi-part SVG with unique combat animations (sword slash, card launch, fire burst, crossbow, shield bash, card throw)' },
  { date: '2026-08-21', message: '新增8项怪物数据属性测试+集成渲染验证·1235测试全通过 -/- Add 8 monster visual property tests + render integration tests, 1235 tests all passing' },
  { date: '2026-08-21', message: '新增怪物视觉图鉴页面·25地域分组·动画预览·懒加载 -/- Add Monster Compendium page with 25-region grouping, animation preview, and lazy loading' },
  { date: '2026-08-21', message: '怪物骨骼动画集成到战斗场景·26种体型专属动画模板·每种5个动作 -/- Integrate skeletal monster animations into combat: 26 body-type animation templates with 5 clips each' },
  { date: '2026-08-21', message: '添加自动更新日志的 post-commit hook 脚本 -/- Add auto-changelog post-commit hook script' },
  { date: '2026-08-21', message: '怪物视觉系统全面升级：每只怪物7-9处独特外貌特征、骨骼关节动画系统、体型缩放差异化、数据按地域拆分-/-Monster visual overhaul: 7-9 unique features per monster, 6-joint skeletal animation, size scaling, region-based data split' },
  { date: '2026-08-19', message: '补全角色难度选择、图鉴遗物/药水效果及自定义工坊详情表单的中英文切换-/-Completed Chinese/English switching for character difficulty selection, compendium relic/potion effects, and the detailed custom-content editor' },
  { date: '2026-08-19', message: '所有游戏实体（角色/卡牌/敌人/遗物/药水）名称与描述支持中英切换-/-All game entity names & descriptions (characters, cards, enemies, relics, potions) now switch with language' },
  { date: '2026-08-19', message: '完善自定义系统全部筛选标签翻译，放弃弹窗与日志弹窗改为暗黑风格模态框-/-Completed custom workshop filter translations, replaced abandon/changelog popups with dark-theme modal dialogs' },
  { date: '2026-08-19', message: '修复战斗中"离开战斗"按钮，现在可随时放弃本次冒险返回主页-/-Fixed "Leave combat" button: can now abandon run at any time and return to home' },
  { date: '2026-08-19', message: '新增中英文 UI 切换按钮与主页更新日志面板-/-Added Chinese/English UI toggle button and homepage changelog panel' },
  { date: '2026-08-18', message: '完善全页面中英文翻译覆盖（战斗、地图、图鉴、自定义工坊）-/-Completed full page Chinese/English translation coverage (combat, map, compendium, custom workshop)' },
  { date: '2026-08-17', message: '卡牌双层升级系统、强化点递增成本、自定义一键复原-/-Card double-upgrade system, progressive upgrade costs, custom content one-click reset' },
  { date: '2026-08-16', message: '7 幕远征流程、22 地域内容、遗物/药水品质掉落-/-7-act expedition, 22 regions, quality-weighted relic/potion drops' },
  { date: '2026-08-15', message: '部署 GitHub Pages 在线版本-/-Deployed to GitHub Pages for online play' },
];
