import type { MapGenerationConfig } from '../../game/map/mapGenerator';
import type { MapLocationKind, MapNodeType } from '../../game/map/mapTypes';
import { clampDifficulty } from '../../game/ascension/ascensionTypes';

export type LegacyContentBiomeId = 'cinder-fields' | 'bonebind-hamlet' | 'obsidian-capital';
export type RegionId = 'ruined-village' | 'verdant-forest' | 'moss-marsh' | 'fetid-sewers' | 'radiant-capital' | 'capital-outskirts' | 'bloodlands' | 'desert' | 'bell-tower' | 'arcane-march' | 'techno-city' | 'neon-court' | 'sky-island' | 'noble-castle' | 'castle-catacombs' | 'underworld' | 'ghost-ferry' | 'ocean-depths' | 'atlantis' | 'demon-nest' | 'meteor-ruins' | 'world-rampart';
export type BiomeId = RegionId | LegacyContentBiomeId;

export interface BiomeDefinition {
  id: BiomeId;
  name: string;
  tagline: string;
  accentClass: string;
  unlockDifficulty: number;
  contentBiomeId: LegacyContentBiomeId;
  locations: string[];
  bossLocation: string;
  enemyTierMultiplier: number;
  mapConfig: Pick<MapGenerationConfig, 'nodeWeights' | 'guaranteedNodeTypes'>;
}

const BASE_WEIGHTS: NonNullable<MapGenerationConfig['nodeWeights']> = [['combat', 42], ['event', 18], ['rest', 12], ['shop', 12], ['treasure', 8], ['elite', 8]];
const region = (id: RegionId, name: string, tagline: string, unlockDifficulty: number, contentBiomeId: LegacyContentBiomeId, locations: string[], bossLocation: string, enemyTierMultiplier = 1): BiomeDefinition => ({ id, name, tagline, accentClass: `region-${id}`, unlockDifficulty, contentBiomeId, locations, bossLocation, enemyTierMultiplier, mapConfig: { nodeWeights: BASE_WEIGHTS, guaranteedNodeTypes: ['shop', 'event', 'elite'] } });

export const BIOMES: BiomeDefinition[] = [
  region('ruined-village', '落败村庄', '冷灰压住屋脊，失去钟声的家园仍等着归人。', 1, 'cinder-fields', ['倾倒钟楼', '焦木巷', '空谷仓'], '无火村门'),
  region('capital-outskirts', '皇都外环', '铜钥匙开启旧水道，城墙外的驿火指向猩红荒原。', 1, 'bonebind-hamlet', ['税吏关', '废弃驿站', '城墙水道'], '断印边门', 1.08),
  region('castle-catacombs', '城堡地下墓道', '王族星图刻在墓砖背面，潮湿阶梯一路通向冥界。', 1, 'obsidian-capital', ['王墓阶梯', '封蜡骨室', '失名回廊'], '地下王门', 1.16),
  region('verdant-forest', '生机森林', '村外仅存的绿意吞没道路，荧叶替远征者辨认方向。', 1, 'cinder-fields', ['鹿角林径', '荧叶溪', '古树庭'], '根冠守望者'),
  region('moss-marsh', '苔藓沼泽', '林水汇入泥沼，苔甲与鳄影守着下游的排水闸。', 1, 'cinder-fields', ['鳄影浅滩', '沉木埠', '苔灯泥径'], '巨鳄闸口', 1.04),
  region('fetid-sewers', '恶臭下水道', '锈蚀闸门后的水流，正从地下通往皇都。', 2, 'bonebind-hamlet', ['腐水渠', '菌灯泵房', '鼠王岔管'], '铜钥水门', 1.08),
  region('radiant-capital', '繁华皇都', '金白穹顶照亮盛宴，也照见圣殿刻意掩埋的名单。', 2, 'obsidian-capital', ['辉金长街', '白塔广场', '百灯市集'], '日冕宫门', 1.12),
  region('bloodlands', '血色之地', '守门者的血迹穿过边境，指向永不凝固的红色大地。', 3, 'bonebind-hamlet', ['赤骨丘', '血雨壕沟', '猩红风车'], '凝血祭坛', 1.13),
  region('desert', '荒漠', '血地干涸成炽热黄沙，半埋的石柱与商队指向失落古城。', 3, 'obsidian-capital', ['流沙丘', '风蚀石柱', '半埋商队'], '沙王遗冢', 1.2),
  region('bell-tower', '钟楼', '荒原尽头矗立着不停自鸣的黑铁钟楼，每一次钟响都标记一名猎物。', 1, 'bonebind-hamlet', ['回音阶梯', '悬钟回廊', '钟摆之室'], '不鸣之王', 1.14),
  region('neon-court', '霓虹院', '科技之城深处的地下法庭，霓虹管里流动着被审判者的记忆。', 4, 'obsidian-capital', ['数据回廊', '霓虹审庭', '记忆机房'], '霓虹裁决者', 1.24),
  region('demon-nest', '恶魔巢穴', '亚特兰蒂斯白石之下裂开的血色深渊，契约与利爪在此滋生。', 5, 'bonebind-hamlet', ['裂口甬道', '契约祭坛', '孵化血池'], '巢穴母体', 1.42),
  region('world-rampart', '世界地垒', '世界尽头的最后一道城垒，越过它便是坠星撕裂现实的终点。', 5, 'obsidian-capital', ['星界垛墙', '崩裂天梯', '终末哨台'], '世界地垒之心', 1.6),
  region('arcane-march', '魔法之地', '血地尽头的学院信标仍在闪烁，古咒保存着天空坐标。', 3, 'bonebind-hamlet', ['烛浮学院', '咒文拱廊', '星盘庭院'], '大法师钟塔', 1.16),
  region('techno-city', '科技之城', '难度四显露被魔法遮蔽的霓虹城，机械星图正在解算云上航路。', 4, 'obsidian-capital', ['霓虹机巷', '紫电枢纽', '齿轮天桥'], '零号升空井', 1.2),
  region('sky-island', '天空岛', '升空井穿过云海，白色浮岛托着通往贵族城堡的旧航桥。', 4, 'cinder-fields', ['云鲸航道', '白翼花园', '浮石港'], '天穹锁桥', 1.22),
  region('noble-castle', '贵族城堡', '航桥尽头的家徽属于失踪的家人，答案被锁在宴厅地下。', 1, 'obsidian-capital', ['纹章庭', '长宴厅', '银甲回廊'], '无主王座', 1.24),
  region('underworld', '冥界', '墓道熄灭最后一盏火，幽蓝亡魂为你指向忘川渡口。', 1, 'bonebind-hamlet', ['幽火荒径', '亡者集市', '哀歌石林'], '冥王断阶', 1.28),
  region('ghost-ferry', '幽冥渡口', '你用王族铜钥支付船资，黑舟沿地下潮汐驶向海洋。', 1, 'bonebind-hamlet', ['忘川码头', '纸灯黑舟', '潮声碑'], '摆渡者之门', 1.3),
  region('ocean-depths', '海洋', '黑舟冲出冥河，气泡与深蓝遗迹围绕失落的白色城市。', 1, 'cinder-fields', ['气泡峡谷', '鲸骨花园', '沉船灯塔'], '深潮漩门', 1.32),
  region('atlantis', '亚特兰蒂斯', '最终难度令潮水退去，破败白色大理石城终于重见星光。', 5, 'obsidian-capital', ['断柱大道', '白石浴场', '沉星议院'], '亚特兰蒂斯王庭', 1.4),
  region('meteor-ruins', '陨石遗迹', '天空被陨石撞裂，黑曜石原上悬浮着失控能量与宇宙裂缝。', 5, 'obsidian-capital', ['陨星裂谷', '黑曜石原', '悬浮碎石'], '终焉之庭', 1.55),
];

const byId = new Map(BIOMES.map((biome) => [biome.id, biome]));
const legacyFallback: Record<LegacyContentBiomeId, RegionId> = { 'cinder-fields': 'ruined-village', 'bonebind-hamlet': 'capital-outskirts', 'obsidian-capital': 'castle-catacombs' };
export function biomeById(id?: BiomeId): BiomeDefinition { const normalized = id && id in legacyFallback ? legacyFallback[id as LegacyContentBiomeId] : id; return byId.get(normalized as RegionId) ?? BIOMES[0]; }
export function biomeForAct(act: number): BiomeDefinition { return BIOMES[(Math.max(1, act) - 1) % BIOMES.length]; }
export function contentBiomeFor(id?: BiomeId): LegacyContentBiomeId { return biomeById(id).contentBiomeId; }
/** Every campaign region owns its encounter table, so each map fields its own bestiary. */
export function encounterBiomeFor(id?: BiomeId): BiomeId { return biomeById(id).id; }
/** Difficulty 1–3 run 5 acts, difficulty 4 runs 6, difficulty 5 runs the full 7-act campaign. */
export function maxActsForDifficulty(difficulty: number): number {
  const level = clampDifficulty(difficulty);
  return level >= 5 ? 7 : level >= 4 ? 6 : 5;
}

/**
 * Fixed 7-act campaign chain. Early acts introduce many new worlds; later acts are shorter and
 * more exotic. Difficulty only gates how far the expedition reaches (which acts exist), plus a
 * couple of act-3 side regions, so every run walks the same logical route.
 */
export function campaignRegionsForAct(act: number, difficulty: number): BiomeDefinition[] {
  const level = clampDifficulty(difficulty);
  const chains: Record<number, RegionId[]> = {
    1: ['ruined-village', 'verdant-forest', 'moss-marsh'],
    2: ['fetid-sewers', 'radiant-capital'],
    3: ['capital-outskirts', 'bloodlands', ...(level >= 3 ? ['desert'] as RegionId[] : []), 'bell-tower'],
    4: ['noble-castle', 'arcane-march', 'castle-catacombs', 'underworld'],
    5: ['ghost-ferry', 'ocean-depths'],
    6: ['techno-city', 'neon-court', 'sky-island'],
    7: ['atlantis', 'demon-nest', 'meteor-ruins', 'world-rampart'],
  };
  const ids = chains[Math.max(1, Math.min(maxActsForDifficulty(level), act))] ?? chains[1];
  return ids.map((id) => biomeById(id));
}
export function regionLocation(id: BiomeId, type: MapNodeType, index: number): [MapLocationKind, string] {
  const biome = biomeById(id); const kind: MapLocationKind = type === 'shop' ? 'waystation' : type === 'rest' ? 'sanctum' : type === 'treasure' || type === 'event' ? 'ruin' : type === 'elite' ? 'outpost' : type === 'start' ? 'trail' : type === 'boss' ? 'sanctum' : 'crossing';
  return [kind, type === 'boss' ? biome.bossLocation : biome.locations[index % biome.locations.length]];
}
const STORIES: Partial<Record<`${RegionId}>${RegionId}`, string>> = {
  'ruined-village>verdant-forest': '你在倒塌的家门下找到一枚仍有温度的叶形护符。它指向村外唯一仍然翠绿的森林。',
  'moss-marsh>fetid-sewers': '巨鳄腹中的铜钥匙刻着皇都水道图。你忍着恶臭，开启了沉在泥下的排水闸。',
  'fetid-sewers>radiant-capital': '污水尽头传来庆典钟声。你沿维修梯爬上地面，看见金白皇都在夜色中辉煌发亮。',
  'capital-outskirts>bloodlands': '守门者倒下时，血迹越过边境界碑。为了寻找失踪的家人，你踏入猩红荒原。',
  'bloodlands>desert': '血泊在烈日下干涸成裂纹黄沙。你循着半埋的商队车辙，走进无边荒漠。',
  'bloodlands>bell-tower': '血雨的尽头传来一声不属于风的钟鸣。你循着回音，走向自鸣不止的黑铁钟楼。',
  'desert>bell-tower': '沙王遗冢的钟形石门在身后合拢，远处黑铁钟楼的回音替你指路。',
  'radiant-capital>capital-outskirts': '你带着皇都水道图走出金白城门，边境的驿火在猩红天色下摇曳。',
  'bell-tower>noble-castle': '不鸣之王倒下的刹那，钟楼归于死寂。钟摆指向山巅那座失落家族的城堡。',
  'noble-castle>arcane-march': '宴厅地下的星图指向仍在闪烁的学院信标，你循着咒火继续深入。',
  'arcane-march>castle-catacombs': '学院钟塔的最后一道咒文崩解，露出通往王族墓道的螺旋阶梯。',
  'underworld>ghost-ferry': '幽蓝冥火在忘川边熄灭，一叶黑舟正等着收取你的旧名字作为船资。',
  'castle-catacombs>underworld': '最后一块墓砖在身后合拢，温度与钟声一同消失，幽蓝冥火照亮亡者之路。',
  'ghost-ferry>ocean-depths': '摆渡者收下你的旧名字，黑舟随地下潮汐冲出冥河，驶入无边深海。',
  'ocean-depths>techno-city': '深海遗迹的灯塔其实是一座沉没的机械城。霓虹在水压尽头逐盏复明。',
  'techno-city>neon-court': '紫电枢纽的闸门向下开启，霓虹院的地下法庭正等待新的被审判者。',
  'neon-court>sky-island': '霓虹裁决者判你「向上」。升空井喷出白雾，托着你穿过云海。',
  'sky-island>atlantis': '天穹锁桥的尽头没有陆地，只有退去的潮水与重见星光的白色大理石城。',
  'atlantis>demon-nest': '白石之下裂开一道血色深渊，契约的低语从孵化血池深处升起。',
  'demon-nest>meteor-ruins': '你踩着巢穴母体的残骸攀出裂口，被陨石撞裂的天空在头顶铺开。',
  'meteor-ruins>world-rampart': '穿过悬浮碎石，世界尽头最后一道地垒横亘眼前——越过它便是一切的终点。',
  'atlantis>meteor-ruins': '沉星议院的穹顶指向被撞裂的天空。你踏过裂开的黑曜石原，走向坠星留下的世界终局。',
};
export function transitionStory(from: BiomeId, to: BiomeId): string { const left = biomeById(from); const right = biomeById(to); const key = `${left.id}>${right.id}` as keyof typeof STORIES; return STORIES[key] ?? `你越过${left.name}最后的界碑，循着余烬与旧地图继续前行，终于看见${right.name}的轮廓。`; }
