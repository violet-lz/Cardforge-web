import EnemySprite, { resolveEnemyVisualSpec } from '../enemies/EnemySprite';
import { isBuiltInContentId, type CustomContentCategory } from '../../game/content/customContent';

type DefaultArtCategory = Exclude<CustomContentCategory, 'enemies'>;

interface DefaultContentArtProps {
  category: DefaultArtCategory;
  label: string;
  defaultLabel?: string;
}

interface EnemyAppearanceProps {
  id: string;
  label: string;
  defaultLabel: string;
}

interface ContentAppearanceProps {
  category: CustomContentCategory;
  id: string;
  label: string;
  defaultLabel: string;
}

function DefaultArtGlyph({ category }: { category: DefaultArtCategory }) {
  if (category === 'characters') {
    return (
      <>
        <circle cx="60" cy="28" r="13" />
        <path d="M35 92c1-24 10-36 25-36s24 12 25 36" />
        <path d="M32 93h56M43 92l-8 20M77 92l8 20" />
        <path d="M60 61v34M47 76h26" />
      </>
    );
  }

  if (category === 'cards') {
    return (
      <>
        <path d="M60 12 99 42 84 104H36L21 42Z" />
        <path d="m60 30 8 17 19 2-14 12 4 19-17-9-17 9 4-19-14-12 19-2Z" />
        <path d="M43 90h34" />
      </>
    );
  }

  if (category === 'relics') {
    return (
      <>
        <circle cx="60" cy="60" r="38" />
        <circle cx="60" cy="60" r="25" />
        <path d="M60 25v70M25 60h70M42 42l36 36M78 42 42 78" />
        <circle cx="60" cy="60" r="6" />
      </>
    );
  }

  return (
    <>
      <path d="M43 22h34v12l8 8v45c0 10-11 17-25 17s-25-7-25-17V42l8-8Z" />
      <path d="M43 22h34M49 14h22v8H49Z" />
      <path d="M37 68c14-8 32-8 46 0" />
      <circle cx="60" cy="78" r="8" />
    </>
  );
}

export function DefaultContentArt({ category, label, defaultLabel }: DefaultContentArtProps) {
  return (
    <div className={`content-default-art content-default-art-${category}`} role="img" aria-label={label} data-content-origin="custom">
      <svg viewBox="0 0 120 120" aria-hidden="true">
        <DefaultArtGlyph category={category} />
      </svg>
      {defaultLabel && <span>{defaultLabel}</span>}
    </div>
  );
}

export function EnemyAppearance({ id, label, defaultLabel }: EnemyAppearanceProps) {
  const spec = resolveEnemyVisualSpec(id);
  return (
    <div className="enemy-compendium-appearance" data-content-origin={spec ? 'builtin' : 'custom'}>
      <EnemySprite id={id} label={label} size={142} />
      <div className="enemy-appearance-details">
        {(!spec || !isBuiltInContentId('enemies', id)) && <span className="content-default-art-note">{defaultLabel}</span>}
      </div>
    </div>
  );
}

export function ContentAppearance({ category, id, label, defaultLabel }: ContentAppearanceProps) {
  if (category === 'enemies') {
    return <EnemyAppearance id={id} label={label} defaultLabel={defaultLabel} />;
  }
  if (isBuiltInContentId(category, id)) return null;
  return <DefaultContentArt category={category} label={label} defaultLabel={defaultLabel} />;
}
