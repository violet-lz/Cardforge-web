/**
 * Changelog entries. Each `message` uses the pattern:
 *   "中文说明-/-English description"
 * The separator `-/-` splits into [zh, en] for locale display.
 */
export interface ChangelogEntry { date: string; message: string; }
export const CHANGELOG: ChangelogEntry[] = [
  { date: '2026-08-19', message: '新增中英文 UI 切换按钮与主页更新日志面板-/-Added Chinese/English UI toggle button and homepage changelog panel' },
  { date: '2026-08-18', message: '完善全页面中英文翻译覆盖（战斗、地图、图鉴、自定义工坊）-/-Completed full page Chinese/English translation coverage (combat, map, compendium, custom workshop)' },
  { date: '2026-08-17', message: '卡牌双层升级系统、强化点递增成本、自定义一键复原-/-Card double-upgrade system, progressive upgrade costs, custom content one-click reset' },
  { date: '2026-08-16', message: '7 幕远征流程、22 地域内容、遗物/药水品质掉落-/-7-act expedition, 22 regions, quality-weighted relic/potion drops' },
  { date: '2026-08-15', message: '部署 GitHub Pages 在线版本-/-Deployed to GitHub Pages for online play' },
];
