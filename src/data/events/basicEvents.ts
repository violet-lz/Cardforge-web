import type { BiomeId } from '../biomes/biomes';
import { eligibleForBiome } from '../../game/run/contentPools';
import { SeededRng } from '../../game/rng/SeededRng';
import type { EventState } from '../../game/run/eventTypes';

type BiomeEvent = EventState & { biomeIds?: readonly BiomeId[] };

const EVENTS: BiomeEvent[] = [
  { id: 'starlit-well', title: '星光井', description: '井底的光芒回应你的牌组。它像一枚尚未冷却的眼睛，等待有人先付出代价。', choices: [{ id: 'drink', label: '饮下微光', description: '恢复 10 点生命，并获得 10 金币与一张尘卷。', hpDelta: 10, goldDelta: 10, addCardId: 'dust-script' }, { id: 'coin', label: '投下金币', description: '投入 20 金币，换取 30 金币的回声。', hpDelta: 0, goldDelta: 10 }, { id: 'leave', label: '保持距离', description: '不触碰井水，安全离开并带走少量零钱。', hpDelta: 0, goldDelta: 5 }] },
  { id: 'silent-reliquary', title: '无声圣匣', description: '圣匣没有锁，里面只有一枚会呼吸的黑色种子。它认得饥饿，也认得贪婪。', choices: [{ id: 'plant', label: '吞下种子', description: '失去 10 点生命，获得 35 金币。', hpDelta: -10, goldDelta: 35 }, { id: 'warm', label: '用掌心温养', description: '恢复 8 点生命、获得一瓶余烬药剂。', hpDelta: 8, goldDelta: 0, potionId: 'ember-tonic' }, { id: 'seal', label: '重新封存', description: '拒绝未知的馈赠。', hpDelta: 0, goldDelta: 0 }] },
  { id: 'collapsed-observatory', title: '坍塌观象台', biomeIds: ['cinder-fields'], description: '碎裂的镜片仍在追踪天穹。你可以让它灼烧旧伤，也可以从残骸中搜出旅费。', choices: [{ id: 'align', label: '校准残镜', description: '镜光灼伤身体，获得一枚星币轨环遗物。', hpDelta: -8, goldDelta: 0, relicId: 'coin-orbit' }, { id: 'salvage', label: '翻找铜匣', description: '从尘土里找到 25 金币。', hpDelta: 0, goldDelta: 25 }, { id: 'cover', label: '替它覆上灰布', description: '安静离开，不改变资源。', hpDelta: 0, goldDelta: 0 }] },
  { id: 'ash-market', title: '灰烬集市', biomeIds: ['cinder-fields'], description: '摊主用一只没有指针的钟秤量价值。他愿意交换，但从不解释交换的是什么。', choices: [{ id: 'bargain', label: '接受暗价', description: '支付 25 金币，升级牌组中第一张尚未升级的卡。', hpDelta: 0, goldDelta: -25, upgradeFirstCard: true }, { id: 'offer', label: '献出血滴', description: '失去 5 点生命，获得 30 金币。', hpDelta: -5, goldDelta: 30 }, { id: 'refuse', label: '拒绝交易', description: '保留所有资源。', hpDelta: 0, goldDelta: 0 }] },
  { id: 'bellkeepers-ledger', title: '守钟人的账簿', biomeIds: ['bonebind-hamlet'], description: '账簿记录着每一位穿过圣殿的人。最后一页写着你的名字，旁边留有一枚血色指印。', choices: [{ id: 'sign', label: '签下名字', description: '以 12 点生命为抵押，换取 50 金币。', hpDelta: -12, goldDelta: 50 }, { id: 'erase', label: '抹去记录', description: '烧掉账簿，失去 15 金币并移除牌组中的第一张卡。', hpDelta: 0, goldDelta: -15, removeFirstCard: true }, { id: 'read', label: '读完最后一页', description: '获得一点旅费，并带着不安离开。', hpDelta: 0, goldDelta: 8 }] },
  { id: 'glass-moth-swarm', title: '玻璃蛾群', biomeIds: ['bonebind-hamlet'], description: '无数透明翅片撞击你的灯火。它们携带旧梦，也会啃食护甲。', choices: [{ id: 'follow', label: '跟随蛾群', description: '受伤 6 点，找到 40 金币的废弃车队。', hpDelta: -6, goldDelta: 40 }, { id: 'scatter', label: '挥散翅影', description: '付出 10 金币买火油，安全清出道路。', hpDelta: 0, goldDelta: -10 }, { id: 'wait', label: '熄灯等待', description: '什么也不做，蛾群会自行离开。', hpDelta: 0, goldDelta: 0 }] },
  { id: 'faceless-census', title: '无面名册', biomeIds: ['obsidian-capital'], description: '皇都的税吏把名字缝进黑纸。你可以交出鲜血，也可以替一位陌生人改写归宿。', choices: [{ id: 'pay', label: '缴纳月税', description: '失去 7 点生命，换取 45 金币。', hpDelta: -7, goldDelta: 45 }, { id: 'forge', label: '伪造行印', description: '获得一张空罗盘。', hpDelta: 0, goldDelta: 0, addCardId: 'hollow-compass' }, { id: 'leave', label: '绕过税台', description: '保持低调，得到 8 金币。', hpDelta: 0, goldDelta: 8 }] },
  { id: 'mirror-audience', title: '镜厅觐见', biomeIds: ['obsidian-capital'], description: '漆黑镜面中的王座空着，却传来耐心的叩击声。', choices: [{ id: 'answer', label: '应答叩击', description: '恢复 9 点生命，失去 10 金币。', hpDelta: 9, goldDelta: -10 }, { id: 'break', label: '砸碎镜面', description: '受伤 5 点，获得 30 金币。', hpDelta: -5, goldDelta: 30 }, { id: 'bow', label: '无声行礼', description: '安然离去。', hpDelta: 0, goldDelta: 0 }] },
];

function cloneEvent(event: BiomeEvent): EventState {
  return { ...event, choices: event.choices.map((choice) => ({ ...choice })) };
}

export function selectEvent(seed: number, row: number, biomeId: BiomeId = 'cinder-fields'): EventState {
  const pool = eligibleForBiome(EVENTS, biomeId);
  const event = pool[new SeededRng((seed + row * 173) >>> 0).nextInt(0, pool.length - 1)];
  return cloneEvent(event);
}

export function eventCatalog(): BiomeEvent[] { return EVENTS.map((event) => ({ ...cloneEvent(event), biomeIds: event.biomeIds ? [...event.biomeIds] : undefined })); }
