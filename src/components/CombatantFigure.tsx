import type { IntentType } from '../game/combat/enemyTypes';
import EnemySprite from './enemies/EnemySprite';
import CharacterSprite from './characters/CharacterSprite';

export type CombatAnimation = 'idle' | 'attack' | 'defend' | 'skill' | 'summon' | 'hurt' | 'defeated';

// Map CombatAnimation to skeletal animation clip names
const combatAnimToClip = (anim: CombatAnimation): string | undefined => {
  switch (anim) {
    case 'attack': return 'attack1';
    case 'defend': return 'defend';
    case 'skill': return 'skill1';
    case 'summon': return 'skill2';
    case 'hurt': case 'defeated': return 'hit';
    default: return undefined;
  }
};

type Shape = { body: string; accent: string; mark: string };
const SHAPES: Record<string, Shape> = {
  wanderer: { body: 'M43 145Q39 101 55 69L69 52 91 52 108 72Q121 106 114 145Z', accent: 'M57 70Q80 86 104 70L96 45Q80 31 64 45ZM48 104L24 121 42 135 65 113Z', mark: 'M24 108a22 22 0 1 0 1 0M19 108h10M24 103v10' },
  archivist: { body: 'M51 146L46 85 60 54 82 42 104 60 115 146Z', accent: 'M59 60L80 73 103 60 94 42 72 39ZM43 100L79 111 79 142 42 130Z', mark: 'M80 111L117 99 118 130 80 142ZM80 111V142' },
  'ash-priest': { body: 'M38 146Q44 92 58 58L80 37 103 59Q116 96 122 146Z', accent: 'M56 59Q80 78 104 59L97 35 80 22 63 35ZM109 72L126 35', mark: 'M126 24C112 39 119 48 128 47 140 45 140 32 126 24ZM122 51V139' },
  'bell-hunter': { body: 'M48 146L43 85 61 55 87 49 110 72 117 146Z', accent: 'M58 56L87 69 104 51 91 35 68 38ZM40 101L119 82', mark: 'M31 90L126 107M31 90L45 81M31 90L43 102M119 82L126 107' },
  ashling: { body: 'M26 132Q31 98 58 93L86 77 125 91 139 119 123 134 82 127 55 142Z', accent: 'M93 81L103 55 112 82M119 91L136 75 132 103', mark: 'M43 127L31 151M113 128L124 151M57 98L43 79' },
  'cinder-sprite': { body: 'M80 148C45 130 50 102 68 86 47 68 66 42 83 26 86 52 114 62 103 88 127 110 113 140 80 148Z', accent: 'M80 130C64 115 76 101 84 90 89 104 103 113 80 130Z', mark: 'M71 73h5M92 73h5' },
  'rust-hound': { body: 'M21 125L35 86 70 80 98 91 129 83 143 105 128 127 91 125 57 138Z', accent: 'M35 87L25 58 52 81M112 88L135 58 130 94', mark: 'M42 125L33 151M112 125L123 151M131 105h8' },
  'glass-moth': { body: 'M73 145L66 78 79 52 94 79 87 145Z', accent: 'M68 88C32 49 15 75 51 119ZM92 88C128 49 145 75 109 119Z', mark: 'M79 52L61 25M80 52L99 25M76 93h8' },
  'veil-monger': { body: 'M36 146Q42 81 59 53L80 35 102 54Q121 96 126 146Z', accent: 'M55 55Q80 73 105 55L98 32 80 18 62 32Z', mark: 'M54 92Q80 111 108 91M48 117Q80 135 116 116' },
  'bell-tender': { body: 'M43 146L48 78 65 52 96 52 113 78 119 146Z', accent: 'M61 51Q80 26 100 51L94 69 67 69ZM45 101L119 101', mark: 'M51 97Q80 70 112 97L106 124H57ZM72 124Q80 139 89 124' },
  'kiln-brute': { body: 'M19 145L28 68 54 43 106 43 134 69 142 145Z', accent: 'M48 46L56 19H104L113 46ZM28 84L7 107 29 125M133 84L153 108 136 126', mark: 'M64 71H97V112H64ZM71 79H90V104H71' },
  'ink-leech': { body: 'M18 119C31 67 79 46 130 70 157 83 142 122 112 126 78 132 51 112 18 119Z', accent: 'M31 104C62 82 91 92 127 80M43 119C75 103 101 113 126 101', mark: 'M117 75a7 7 0 1 0 1 0M18 119L7 139' },
  'bone-scrivener': { body: 'M55 146L48 79 62 48 98 48 112 80 105 146Z', accent: 'M63 48L59 25 78 14 101 27 98 49ZM43 88L19 111 47 119', mark: 'M80 91L125 77 126 126 80 140ZM80 91V140M90 101L116 92' },
  'ashen-warden': { body: 'M28 147L31 67 57 34 104 34 132 68 135 147Z', accent: 'M51 36L56 12H105L111 37ZM31 76L10 98 31 124M131 76L151 98 133 124', mark: 'M60 66H101V112H60ZM68 74H93V103H68M69 147V117M94 147V117' },
  'crownless-furnace': { body: 'M16 148L20 58 45 24 116 24 141 59 145 148Z', accent: 'M42 27L50 7 65 19 81 5 97 19 113 7 120 28ZM24 75L5 99 22 126M138 75L156 99 140 126', mark: 'M52 55H109V121H52ZM63 67H98V109H63M72 78H89V99H72' },
};
const INTENT_PATHS: Record<IntentType, string> = { attack: 'M5 19L19 5M8 5l11 11M5 16l3 3', defend: 'M12 3L20 7v5c0 5-3 8-8 10-5-2-8-5-8-10V7Z', buff: 'M12 20V5M6 11l6-6 6 6', status: 'M3 12s4-6 9-6 9 6 9 6-4 6-9 6-9-6-9-6Zm9-3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z', pollute: 'M7 4c0 5-4 6-4 11a4 4 0 0 0 8 0C11 10 7 9 7 4Zm10 5c0 4-3 5-3 8a3 3 0 0 0 6 0c0-3-3-4-3-8Z', summon: 'M12 3v18M3 12h18M6 6l12 12M18 6L6 18', energy: 'M13 2 4 14h7l-1 8 9-12h-7z', idle: 'M5 12h14' };
export function IntentIcon({ type }: { type: IntentType }) { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={INTENT_PATHS[type]} /></svg>; }
export function CombatantFigure({ id, label, side, animation = 'idle' }: { id: string; label: string; side: 'player' | 'enemy'; animation?: CombatAnimation }) {
  // For enemies, use skeletal animation system via EnemySprite
  if (side === 'enemy') {
    return (
      <figure className={`combatant-figure figure-enemy action-${animation}`} aria-label={label}>
        <EnemySprite id={id} label={label} size={160} animation={combatAnimToClip(animation)} />
      </figure>
    );
  }
  // For player characters, use detailed multi-part CharacterSprite
  return (
    <figure className={`combatant-figure figure-player char-${id} action-${animation}`} aria-label={label}>
      <CharacterSprite id={id} label={label} animation={animation} />
    </figure>
  );
}
