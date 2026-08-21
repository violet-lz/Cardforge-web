// Detailed multi-part SVG character sprites with per-character combat animations.
// Each character is rendered as distinct body-part groups for independent CSS animation.
import type { CombatAnimation } from '../CombatantFigure';

export interface CharacterSpriteProps {
  id: string;
  label: string;
  animation?: CombatAnimation;
}

export default function CharacterSprite({ id, label, animation = 'idle' }: CharacterSpriteProps) {
  const render = CHARACTER_RENDERERS[id] ?? CHARACTER_RENDERERS.wanderer;
  return (
    <svg viewBox="0 0 160 180" role="img" className={`char-sprite char-${id}`}>
      <title>{label}</title>
      {/* Ground shadow */}
      <ellipse className="char-shadow" cx="80" cy="168" rx="38" ry="7" />
      {/* Character body group — animated by CSS */}
      <g className="char-root">
        {render()}
      </g>
    </svg>
  );
}

// ─── Wanderer (远行者) — Hooded swordsman with curved blade ───────────────────

function WandererSprite() {
  return (
    <>
      {/* Legs */}
      <g className="char-legs">
        <path d="M68 145 L64 165 L72 165 Z" fill="#3d2a1e" stroke="#1a0f09" strokeWidth="1.2" />
        <path d="M88 145 L84 165 L92 165 Z" fill="#3d2a1e" stroke="#1a0f09" strokeWidth="1.2" />
        {/* Boots */}
        <path d="M62 162 L74 162 L74 167 L60 167 Z" fill="#2a1a12" stroke="#1a0f09" strokeWidth="1" />
        <path d="M82 162 L94 162 L96 167 L82 167 Z" fill="#2a1a12" stroke="#1a0f09" strokeWidth="1" />
      </g>
      {/* Torso / coat */}
      <g className="char-body">
        <path d="M60 85 Q65 75 80 72 Q95 75 100 85 L105 148 L55 148 Z" fill="#4a3024" stroke="#2a1810" strokeWidth="1.5" />
        {/* Belt */}
        <rect x="62" y="118" width="36" height="6" rx="2" fill="#6b4a30" stroke="#3d2a1e" strokeWidth="0.8" />
        {/* Belt pouches */}
        <rect x="65" y="120" width="7" height="8" rx="1" fill="#5a3a24" stroke="#3d2610" strokeWidth="0.6" />
        <rect x="88" y="120" width="7" height="8" rx="1" fill="#5a3a24" stroke="#3d2610" strokeWidth="0.6" />
        {/* Ember seal on chest */}
        <circle cx="80" cy="98" r="6" fill="none" stroke="#ef8a30" strokeWidth="1.5" opacity="0.9" />
        <circle cx="80" cy="98" r="3" fill="#ef8a30" opacity="0.6" />
        {/* Coat flaps */}
        <path d="M55 148 L60 130 L65 148 Z" fill="#3d2a1e" stroke="#1a0f09" strokeWidth="0.8" />
        <path d="M95 148 L100 130 L105 148 Z" fill="#3d2a1e" stroke="#1a0f09" strokeWidth="0.8" />
      </g>
      {/* Left arm */}
      <g className="char-arm-left">
        <path d="M58 87 L48 110 L52 130 L58 128 L56 110 L62 90 Z" fill="#4a3024" stroke="#2a1810" strokeWidth="1" />
      </g>
      {/* Right arm + sword (weapon arm) */}
      <g className="char-arm-weapon">
        <path d="M100 87 L110 108 L107 128 L101 126 L104 108 L98 90 Z" fill="#4a3024" stroke="#2a1810" strokeWidth="1" />
        {/* Curved sword */}
        <path d="M108 105 Q120 85 125 55 L127 54 Q121 86 110 107 Z" fill="#c8c0b0" stroke="#8a7a6a" strokeWidth="0.8" />
        {/* Sword handle */}
        <path d="M106 108 L112 103" stroke="#6b4a30" strokeWidth="2.5" strokeLinecap="round" />
        {/* Sword guard */}
        <path d="M104 106 L114 102" stroke="#d4a050" strokeWidth="1.8" strokeLinecap="round" />
      </g>
      {/* Head + hood */}
      <g className="char-head">
        {/* Hood */}
        <path d="M64 72 Q66 50 80 45 Q94 50 96 72 L92 78 L68 78 Z" fill="#3d2a1e" stroke="#2a1810" strokeWidth="1.2" />
        {/* Face shadow inside hood */}
        <path d="M70 62 Q80 58 90 62 L88 74 L72 74 Z" fill="#1a0f09" opacity="0.8" />
        {/* Eyes glow */}
        <circle cx="75" cy="67" r="1.5" fill="#ef8a30" opacity="0.9" />
        <circle cx="85" cy="67" r="1.5" fill="#ef8a30" opacity="0.9" />
      </g>
    </>
  );
}

// ─── Archivist (档案师) — Robed scholar with floating pages ───────────────────

function ArchivistSprite() {
  return (
    <>
      {/* Legs (hidden under long robe) */}
      <g className="char-legs">
        <path d="M72 155 L70 166 L76 166 Z" fill="#1f1838" stroke="#0d0a1a" strokeWidth="1" />
        <path d="M84 155 L82 166 L88 166 Z" fill="#1f1838" stroke="#0d0a1a" strokeWidth="1" />
      </g>
      {/* Long robe / torso */}
      <g className="char-body">
        <path d="M58 80 Q65 70 80 67 Q95 70 102 80 L108 160 L52 160 Z" fill="#1f1838" stroke="#14102a" strokeWidth="1.5" />
        {/* Geometric patterns on robe */}
        <path d="M68 100 L80 94 L92 100 L80 106 Z" fill="none" stroke="#d4a050" strokeWidth="0.8" opacity="0.7" />
        <path d="M65 120 L80 114 L95 120 L80 126 Z" fill="none" stroke="#d4a050" strokeWidth="0.6" opacity="0.5" />
        <path d="M62 140 L80 134 L98 140 L80 146 Z" fill="none" stroke="#d4a050" strokeWidth="0.5" opacity="0.4" />
        {/* Golden script accents */}
        <path d="M70 108 Q75 105 80 108" fill="none" stroke="#d4a050" strokeWidth="0.6" opacity="0.6" />
        <path d="M80 108 Q85 105 90 108" fill="none" stroke="#d4a050" strokeWidth="0.6" opacity="0.6" />
      </g>
      {/* Left arm (with quill) */}
      <g className="char-arm-left">
        <path d="M56 82 L44 105 L48 120 L54 118 L50 105 L60 84 Z" fill="#1f1838" stroke="#14102a" strokeWidth="1" />
        {/* Quill */}
        <path d="M44 104 L38 85 L40 84 L46 103 Z" fill="#f0e8d0" stroke="#a09070" strokeWidth="0.5" />
        <path d="M38 85 L36 78" stroke="#d4a050" strokeWidth="0.8" strokeLinecap="round" />
      </g>
      {/* Right arm (weapon arm — casts pages) */}
      <g className="char-arm-weapon">
        <path d="M102 82 L112 100 L110 118 L104 116 L106 100 L100 84 Z" fill="#1f1838" stroke="#14102a" strokeWidth="1" />
        {/* Ink-stained fingers */}
        <circle cx="111" cy="118" r="2" fill="#2a1848" />
      </g>
      {/* Floating pages / book (accessory) */}
      <g className="char-accessory">
        <rect x="112" y="78" width="12" height="16" rx="1" fill="#f0e8d0" stroke="#a09070" strokeWidth="0.6" transform="rotate(-15, 118, 86)" />
        <rect x="36" y="88" width="10" height="14" rx="1" fill="#f0e8d0" stroke="#a09070" strokeWidth="0.6" transform="rotate(10, 41, 95)" />
        <rect x="118" y="98" width="9" height="12" rx="1" fill="#ede4cc" stroke="#a09070" strokeWidth="0.5" transform="rotate(-8, 122, 104)" />
      </g>
      {/* Head + pointed hat */}
      <g className="char-head">
        {/* Face */}
        <ellipse cx="80" cy="62" rx="12" ry="14" fill="#d4b896" stroke="#8a6a4a" strokeWidth="1" />
        {/* Pointed hat */}
        <path d="M64 58 L80 20 L96 58 Z" fill="#1f1838" stroke="#14102a" strokeWidth="1.2" />
        {/* Hat brim */}
        <path d="M62 60 Q80 55 98 60" fill="none" stroke="#d4a050" strokeWidth="1.5" />
        {/* Star ornament */}
        <path d="M80 28 L82 32 L86 32 L83 35 L84 39 L80 37 L76 39 L77 35 L74 32 L78 32 Z" fill="#d4a050" />
        {/* Eyes */}
        <circle cx="76" cy="60" r="1.2" fill="#1a0f09" />
        <circle cx="84" cy="60" r="1.2" fill="#1a0f09" />
        {/* Spectacles */}
        <circle cx="76" cy="60" r="3" fill="none" stroke="#d4a050" strokeWidth="0.6" />
        <circle cx="84" cy="60" r="3" fill="none" stroke="#d4a050" strokeWidth="0.6" />
        <path d="M79 60 L81 60" stroke="#d4a050" strokeWidth="0.5" />
      </g>
    </>
  );
}

// ─── Ash-Priest (灰烬祭司) — Tattered robes, burning hands, skull mask ────────

function AshPriestSprite() {
  return (
    <>
      {/* Legs */}
      <g className="char-legs">
        <path d="M70 148 L68 165 L76 165 Z" fill="#1a1518" stroke="#0d0a0d" strokeWidth="1" />
        <path d="M86 148 L84 165 L92 165 Z" fill="#1a1518" stroke="#0d0a0d" strokeWidth="1" />
      </g>
      {/* Tattered ceremonial robes */}
      <g className="char-body">
        <path d="M56 82 Q64 72 80 68 Q96 72 104 82 L110 155 L50 155 Z" fill="#2a2028" stroke="#1a1518" strokeWidth="1.5" />
        {/* Tattered edges */}
        <path d="M50 155 L54 148 L58 155 L62 147 L66 155" fill="none" stroke="#1a1518" strokeWidth="1" />
        <path d="M94 155 L98 147 L102 155 L106 148 L110 155" fill="none" stroke="#1a1518" strokeWidth="1" />
        {/* Chains and prayer beads */}
        <path d="M66 90 Q80 95 94 90" fill="none" stroke="#8a7060" strokeWidth="1" strokeDasharray="2 3" />
        <circle cx="72" cy="92" r="1.5" fill="#8a7060" />
        <circle cx="80" cy="94" r="1.5" fill="#8a7060" />
        <circle cx="88" cy="92" r="1.5" fill="#8a7060" />
        {/* Chest rune */}
        <path d="M76 102 L80 96 L84 102 L80 108 Z" fill="none" stroke="#ef6020" strokeWidth="1.2" opacity="0.8" />
      </g>
      {/* Left arm (burning) */}
      <g className="char-arm-left">
        <path d="M54 84 L42 108 L45 125 L52 123 L48 108 L58 86 Z" fill="#2a2028" stroke="#1a1518" strokeWidth="1" />
        {/* Burning hand glow */}
        <circle cx="43" cy="125" r="5" fill="#ef6020" opacity="0.4" />
        <circle cx="43" cy="125" r="3" fill="#ffaa30" opacity="0.6" />
        {/* Ember particles */}
        <circle cx="40" cy="118" r="1" fill="#ff6030" opacity="0.8" />
        <circle cx="46" cy="115" r="0.8" fill="#ffaa30" opacity="0.7" />
        <circle cx="38" cy="122" r="0.7" fill="#ff8020" opacity="0.6" />
      </g>
      {/* Right arm (burning — weapon arm) */}
      <g className="char-arm-weapon">
        <path d="M104 84 L116 105 L114 125 L107 123 L110 106 L100 86 Z" fill="#2a2028" stroke="#1a1518" strokeWidth="1" />
        {/* Burning hand glow */}
        <circle cx="115" cy="125" r="6" fill="#ef6020" opacity="0.4" />
        <circle cx="115" cy="125" r="3.5" fill="#ffaa30" opacity="0.6" />
        {/* Ember particles */}
        <circle cx="119" cy="118" r="1.2" fill="#ff6030" opacity="0.8" />
        <circle cx="112" cy="116" r="0.9" fill="#ffaa30" opacity="0.7" />
        <circle cx="120" cy="122" r="0.8" fill="#ff8020" opacity="0.6" />
      </g>
      {/* Head — skull mask */}
      <g className="char-head">
        {/* Skull shape */}
        <path d="M66 68 Q66 48 80 44 Q94 48 94 68 L92 76 L68 76 Z" fill="#d4ccc0" stroke="#8a7a6a" strokeWidth="1" />
        {/* Eye sockets */}
        <ellipse cx="74" cy="60" rx="4" ry="5" fill="#1a0f09" />
        <ellipse cx="86" cy="60" rx="4" ry="5" fill="#1a0f09" />
        {/* Glowing eyes */}
        <circle cx="74" cy="60" r="2" fill="#ef6020" opacity="0.9" />
        <circle cx="86" cy="60" r="2" fill="#ef6020" opacity="0.9" />
        {/* Nose hole */}
        <path d="M78 66 L80 64 L82 66" fill="none" stroke="#6a5a4a" strokeWidth="0.8" />
        {/* Teeth */}
        <path d="M73 72 L75 72 L77 72 L79 72 L81 72 L83 72 L85 72 L87 72" fill="none" stroke="#8a7a6a" strokeWidth="1" strokeDasharray="2 1" />
        {/* Hood over skull */}
        <path d="M62 70 Q64 42 80 38 Q96 42 98 70" fill="none" stroke="#2a2028" strokeWidth="3" />
      </g>
    </>
  );
}

// ─── Bell-Hunter (钟楼猎手) — Agile crossbow hunter with bell ornaments ───────

function BellHunterSprite() {
  return (
    <>
      {/* Legs — agile stance */}
      <g className="char-legs">
        <path d="M70 140 L66 162 L74 162 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="1" />
        <path d="M90 138 L94 160 L86 162 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="1" />
        {/* Boots with buckles */}
        <path d="M64 159 L76 159 L76 166 L62 166 Z" fill="#3d2a1e" stroke="#2a1810" strokeWidth="0.8" />
        <path d="M84 159 L96 159 L98 166 L82 166 Z" fill="#3d2a1e" stroke="#2a1810" strokeWidth="0.8" />
        <rect x="66" y="159" width="8" height="1.5" fill="#b08840" />
        <rect x="86" y="159" width="8" height="1.5" fill="#b08840" />
      </g>
      {/* Torso / hunter's cloak */}
      <g className="char-body">
        <path d="M62 82 Q68 74 80 70 Q92 74 98 82 L102 142 L58 144 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="1.5" />
        {/* Cloak asymmetric drape */}
        <path d="M58 144 L52 130 L56 144 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="0.8" />
        {/* Belt */}
        <rect x="64" y="115" width="32" height="5" rx="1" fill="#5a3a24" stroke="#3d2610" strokeWidth="0.6" />
        {/* Bell ornaments on belt */}
        <path d="M70 120 Q70 125 68 126 L72 126 Q70 125 70 120" fill="#b08840" stroke="#8a6a30" strokeWidth="0.4" />
        <path d="M80 120 Q80 125 78 126 L82 126 Q80 125 80 120" fill="#b08840" stroke="#8a6a30" strokeWidth="0.4" />
        <path d="M90 120 Q90 125 88 126 L92 126 Q90 125 90 120" fill="#b08840" stroke="#8a6a30" strokeWidth="0.4" />
        {/* Quiver on back */}
        <rect x="48" y="78" width="8" height="30" rx="2" fill="#5a3a24" stroke="#3d2610" strokeWidth="0.8" transform="rotate(-10, 52, 93)" />
        {/* Bolt tips */}
        <line x1="49" y1="76" x2="49" y2="72" stroke="#c8c0b0" strokeWidth="1" />
        <line x1="52" y1="75" x2="52" y2="71" stroke="#c8c0b0" strokeWidth="1" />
        <line x1="55" y1="76" x2="55" y2="72" stroke="#c8c0b0" strokeWidth="1" />
      </g>
      {/* Left arm */}
      <g className="char-arm-left">
        <path d="M60 84 L50 104 L54 118 L60 116 L56 104 L64 86 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="1" />
      </g>
      {/* Right arm + crossbow (weapon arm) */}
      <g className="char-arm-weapon">
        <path d="M98 84 L108 100 L106 115 L100 113 L104 100 L96 86 Z" fill="#2a3a28" stroke="#1a2818" strokeWidth="1" />
        {/* Crossbow stock */}
        <rect x="106" y="96" width="22" height="5" rx="1" fill="#5a3a24" stroke="#3d2610" strokeWidth="0.8" />
        {/* Crossbow limbs */}
        <path d="M108 94 Q104 88 100 86" fill="none" stroke="#6b4a30" strokeWidth="2" />
        <path d="M108 104 Q104 110 100 112" fill="none" stroke="#6b4a30" strokeWidth="2" />
        {/* Crossbow string */}
        <path d="M100 86 L106 98 L100 112" fill="none" stroke="#c8c0b0" strokeWidth="0.6" />
        {/* Bolt loaded */}
        <line x1="107" y1="98" x2="130" y2="98" stroke="#c8c0b0" strokeWidth="1.2" />
        <path d="M130 96 L134 98 L130 100 Z" fill="#c8c0b0" />
      </g>
      {/* Head */}
      <g className="char-head">
        {/* Face */}
        <ellipse cx="80" cy="60" rx="11" ry="13" fill="#c8a878" stroke="#8a6a4a" strokeWidth="1" />
        {/* Eye patch (left) */}
        <ellipse cx="75" cy="58" rx="4" ry="3.5" fill="#2a1a12" stroke="#1a0f09" strokeWidth="0.6" />
        <path d="M64 55 L75 58 L64 61" fill="none" stroke="#2a1a12" strokeWidth="1.2" />
        {/* Visible eye (right) */}
        <circle cx="86" cy="58" r="1.5" fill="#1a0f09" />
        {/* Hood / cloak hood */}
        <path d="M66 62 Q68 44 80 40 Q92 44 94 62" fill="#2a3a28" stroke="#1a2818" strokeWidth="1.5" />
        {/* Bell ornament on hood */}
        <path d="M80 38 Q80 34 78 33 L82 33 Q80 34 80 38" fill="#b08840" stroke="#8a6a30" strokeWidth="0.4" />
        <circle cx="80" cy="32" r="1.5" fill="#b08840" />
      </g>
    </>
  );
}

// ─── Legacy-Classic (旧世战士) — Heavy plate armor, tower shield, helmet ──────

function LegacyClassicSprite() {
  return (
    <>
      {/* Legs — armored */}
      <g className="char-legs">
        <path d="M68 142 L66 163 L76 163 Z" fill="#6a6a72" stroke="#3a3a42" strokeWidth="1.2" />
        <path d="M84 142 L86 163 L96 163 Z" fill="#6a6a72" stroke="#3a3a42" strokeWidth="1.2" />
        {/* Armored boots */}
        <path d="M64 160 L78 160 L78 167 L62 167 Z" fill="#5a5a62" stroke="#3a3a42" strokeWidth="1" />
        <path d="M84 160 L98 160 L100 167 L82 167 Z" fill="#5a5a62" stroke="#3a3a42" strokeWidth="1" />
        {/* Knee guards */}
        <ellipse cx="72" cy="142" rx="5" ry="4" fill="#7a7a82" stroke="#4a4a52" strokeWidth="0.8" />
        <ellipse cx="90" cy="142" rx="5" ry="4" fill="#7a7a82" stroke="#4a4a52" strokeWidth="0.8" />
      </g>
      {/* Heavy plate armor torso */}
      <g className="char-body">
        <path d="M56 82 Q64 72 80 68 Q96 72 104 82 L106 145 L54 145 Z" fill="#7a7a82" stroke="#4a4a52" strokeWidth="1.5" />
        {/* Chest plate */}
        <path d="M64 82 Q80 78 96 82 L94 110 Q80 115 66 110 Z" fill="#8a8a92" stroke="#5a5a62" strokeWidth="1" />
        {/* Center ridge */}
        <line x1="80" y1="80" x2="80" y2="112" stroke="#9a9aa2" strokeWidth="1.5" />
        {/* Red sash/crest */}
        <path d="M68 110 L80 106 L92 110 L88 120 L80 118 L72 120 Z" fill="#8a2020" stroke="#5a1010" strokeWidth="0.8" />
        {/* Waist armor */}
        <rect x="60" y="120" width="40" height="8" rx="1" fill="#6a6a72" stroke="#3a3a42" strokeWidth="0.8" />
      </g>
      {/* Left arm + tower shield */}
      <g className="char-arm-left">
        <path d="M54 84 L44 104 L46 125 L54 123 L50 104 L58 86 Z" fill="#6a6a72" stroke="#3a3a42" strokeWidth="1" />
        {/* Shoulder pauldron */}
        <ellipse cx="56" cy="84" rx="7" ry="5" fill="#8a8a92" stroke="#5a5a62" strokeWidth="0.8" />
        {/* Tower shield */}
        <path d="M26 80 L46 78 L48 135 L36 140 L24 135 Z" fill="#6a6a72" stroke="#4a4a52" strokeWidth="1.5" />
        {/* Shield boss */}
        <circle cx="36" cy="108" r="8" fill="#8a8a92" stroke="#5a5a62" strokeWidth="1" />
        <circle cx="36" cy="108" r="4" fill="#9a9aa2" stroke="#6a6a72" strokeWidth="0.8" />
        {/* Shield red cross */}
        <line x1="36" y1="88" x2="36" y2="128" stroke="#8a2020" strokeWidth="3" />
        <line x1="28" y1="108" x2="44" y2="108" stroke="#8a2020" strokeWidth="3" />
      </g>
      {/* Right arm + short sword (weapon arm) */}
      <g className="char-arm-weapon">
        <path d="M104 84 L114 102 L112 120 L106 118 L108 102 L100 86 Z" fill="#6a6a72" stroke="#3a3a42" strokeWidth="1" />
        {/* Shoulder pauldron */}
        <ellipse cx="104" cy="84" rx="7" ry="5" fill="#8a8a92" stroke="#5a5a62" strokeWidth="0.8" />
        {/* Short sword */}
        <rect x="112" y="80" width="3" height="35" rx="1" fill="#c8c0b0" stroke="#8a7a6a" strokeWidth="0.6" />
        {/* Pommel */}
        <circle cx="113.5" cy="118" r="3" fill="#6a6a72" stroke="#4a4a52" strokeWidth="0.6" />
        {/* Guard */}
        <rect x="108" y="79" width="11" height="3" rx="1" fill="#d4a050" stroke="#8a6a30" strokeWidth="0.5" />
      </g>
      {/* Helmet head */}
      <g className="char-head">
        {/* Helmet */}
        <path d="M66 68 Q66 46 80 42 Q94 46 94 68 L92 72 L68 72 Z" fill="#7a7a82" stroke="#4a4a52" strokeWidth="1.2" />
        {/* Visor slit */}
        <rect x="70" y="58" width="20" height="4" rx="1" fill="#1a1a20" />
        {/* Eye glow through visor */}
        <circle cx="76" cy="60" r="1" fill="#ef8a30" opacity="0.7" />
        <circle cx="84" cy="60" r="1" fill="#ef8a30" opacity="0.7" />
        {/* Helmet ridge */}
        <path d="M80 42 L80 68" stroke="#9a9aa2" strokeWidth="2" />
        {/* Red plume */}
        <path d="M80 42 Q85 30 90 28 Q86 35 84 42" fill="#8a2020" stroke="#5a1010" strokeWidth="0.6" />
        <path d="M80 42 Q82 32 86 30" fill="none" stroke="#aa3030" strokeWidth="1" />
      </g>
    </>
  );
}

// ─── Legacy-One-Of-Each (旧世卡牌) — Mystical card-thrower, jester-like ──────

function LegacyOneOfEachSprite() {
  return (
    <>
      {/* Legs */}
      <g className="char-legs">
        <path d="M70 145 L68 164 L76 164 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="1" />
        <path d="M86 145 L84 164 L92 164 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="1" />
        {/* Pointed shoes */}
        <path d="M64 162 L76 162 L76 167 L58 167 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="0.8" />
        <path d="M82 162 L94 162 L100 167 L82 167 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="0.8" />
      </g>
      {/* Body — dark coat with card motifs */}
      <g className="char-body">
        <path d="M58 82 Q66 72 80 68 Q94 72 102 82 L106 150 L54 150 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="1.5" />
        {/* Card suit decorations */}
        <path d="M72 95 L74 90 L76 95 L74 96 Z" fill="#cc2020" /> {/* Diamond */}
        <path d="M82 92 Q84 88 86 92 Q84 96 82 92" fill="#1a1a20" stroke="#f0f0f0" strokeWidth="0.8" /> {/* Spade outline */}
        <path d="M72 110 Q74 106 76 110 Q74 114 72 110" fill="#cc2020" /> {/* Heart */}
        <path d="M84 108 L86 106 L88 108 L86 110 Z" fill="#f0f0f0" /> {/* Club simplified */}
        {/* Gold trim */}
        <path d="M60 130 L100 130" fill="none" stroke="#d4a050" strokeWidth="0.8" opacity="0.5" />
      </g>
      {/* Left arm */}
      <g className="char-arm-left">
        <path d="M56 84 L44 106 L48 122 L54 120 L50 106 L60 86 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="1" />
      </g>
      {/* Right arm — extended throwing pose (weapon arm) */}
      <g className="char-arm-weapon">
        <path d="M102 84 L118 96 L116 108 L108 106 L112 96 L100 86 Z" fill="#1a1a20" stroke="#0d0d12" strokeWidth="1" />
        {/* Card in hand */}
        <rect x="116" y="92" width="10" height="14" rx="1" fill="#f8f0e0" stroke="#8a7a6a" strokeWidth="0.6" transform="rotate(-20, 121, 99)" />
        <path d="M119 97 L121 94 L123 97" fill="#cc2020" transform="rotate(-20, 121, 99)" />
      </g>
      {/* Orbiting cards (accessory) */}
      <g className="char-accessory">
        <rect x="38" y="72" width="8" height="11" rx="0.5" fill="#f8f0e0" stroke="#6a5a4a" strokeWidth="0.4" transform="rotate(15, 42, 77)" />
        <rect x="114" y="68" width="8" height="11" rx="0.5" fill="#f8f0e0" stroke="#6a5a4a" strokeWidth="0.4" transform="rotate(-12, 118, 73)" />
        <rect x="42" y="110" width="7" height="10" rx="0.5" fill="#f8f0e0" stroke="#6a5a4a" strokeWidth="0.4" transform="rotate(22, 45, 115)" />
        <rect x="120" y="115" width="7" height="10" rx="0.5" fill="#f8f0e0" stroke="#6a5a4a" strokeWidth="0.4" transform="rotate(-18, 123, 120)" />
      </g>
      {/* Head — jester hat with card suits */}
      <g className="char-head">
        {/* Face */}
        <ellipse cx="80" cy="60" rx="11" ry="13" fill="#d4b896" stroke="#8a6a4a" strokeWidth="1" />
        {/* Eyes — mischievous */}
        <path d="M74 58 L78 56 L74 54" fill="none" stroke="#1a0f09" strokeWidth="1.2" strokeLinecap="round" />
        <path d="M82 58 L86 56 L82 54" fill="none" stroke="#1a0f09" strokeWidth="1.2" strokeLinecap="round" />
        {/* Smile */}
        <path d="M75 65 Q80 68 85 65" fill="none" stroke="#5a3a2a" strokeWidth="0.8" />
        {/* Jester hat — three-pointed */}
        <path d="M66 52 Q68 38 60 28" fill="#cc2020" stroke="#8a1010" strokeWidth="0.8" />
        <path d="M94 52 Q92 38 100 28" fill="#1a1a20" stroke="#0d0d12" strokeWidth="0.8" />
        <path d="M76 48 Q80 30 80 22" fill="#d4a050" stroke="#8a6a30" strokeWidth="0.8" />
        {/* Bell tips on hat */}
        <circle cx="60" cy="27" r="2.5" fill="#d4a050" />
        <circle cx="100" cy="27" r="2.5" fill="#d4a050" />
        <circle cx="80" cy="21" r="2.5" fill="#d4a050" />
        {/* Hat band */}
        <path d="M66 52 Q80 47 94 52" fill="none" stroke="#d4a050" strokeWidth="1.5" />
      </g>
    </>
  );
}

// ─── Character renderer map ──────────────────────────────────────────────────

const CHARACTER_RENDERERS: Record<string, () => JSX.Element> = {
  wanderer: WandererSprite,
  archivist: ArchivistSprite,
  'ash-priest': AshPriestSprite,
  'bell-hunter': BellHunterSprite,
  'legacy-classic': LegacyClassicSprite,
  'legacy-one-of-each': LegacyOneOfEachSprite,
};
