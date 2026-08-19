/**
 * Changelog entries. Each `message` uses the pattern:
 *   "中文说明-/-English description"
 * The separator `-/-` splits into [zh, en] for locale display.
 */
export interface ChangelogEntry { date: string; message: string; }
export const CHANGELOG: ChangelogEntry[] = [
  { date: '2026-08-19', message: '所有游戏实体（角色/卡牌/敌人/遗物/药水）名称与描述支持中英切换-/-All game entity names & descriptions (characters, cards, enemies, relics, potions) now switch with language' },
  { date: '2026-08-19', message: '完善自定义系统全部筛选标签翻译，放弃弹窗与日志弹窗改为暗黑风格模态框-/-Completed custom workshop filter translations, replaced abandon/changelog popups with dark-theme modal dialogs' },
  { date: '2026-08-19', message: '修复战斗中"离开战斗"按钮，现在可随时放弃本次冒险返回主页-/-Fixed "Leave combat" button: can now abandon run at any time and return to home' },
  { date: '2026-08-19', message: '新增中英文 UI 切换按钮与主页更新日志面板-/-Added Chinese/English UI toggle button and homepage changelog panel' },
  { date: '2026-08-18', message: '完善全页面中英文翻译覆盖（战斗、地图、图鉴、自定义工坊）-/-Completed full page Chinese/English translation coverage (combat, map, compendium, custom workshop)' },
  { date: '2026-08-17', message: '卡牌双层升级系统、强化点递增成本、自定义一键复原-/-Card double-upgrade system, progressive upgrade costs, custom content one-click reset' },
  { date: '2026-08-16', message: '7 幕远征流程、22 地域内容、遗物/药水品质掉落-/-7-act expedition, 22 regions, quality-weighted relic/potion drops' },
  { date: '2026-08-15', message: '部署 GitHub Pages 在线版本-/-Deployed to GitHub Pages for online play' },
];
