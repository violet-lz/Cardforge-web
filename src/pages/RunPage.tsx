import { useEffect, useRef, useState, type CSSProperties, type PointerEvent as ReactPointerEvent } from 'react';
import { nodePresentation } from '../app/presentation'; import { CHARACTERS } from '../data/characters/characters'; import { biomeById } from '../data/biomes/biomes'; import { RegionScene } from '../components/scene/RegionScene'; import type { GameState } from '../game/engine/types'; import type { MapEdge, MapNode } from '../game/map/mapTypes';
interface RunPageProps { state: GameState; onBack: () => void; onEnterNode: (nodeId: string) => void; }
function point(position: Pick<MapNode, 'x' | 'y'>) { return { x: position.x * 88 + 6, y: 95 - position.y * 90 }; }

/** Derive SVG anchor offsets from the long-sheet CSS dimensions, so roads touch node edges at every responsive width. */
function mapCanvasHeight(depth: number, compact: boolean, narrow: boolean): number {
 if (narrow || compact) return Math.max(1720, depth * 176);
 return Math.max(1600, depth * 192);
}
function nodeHeight(node: MapNode, compact: boolean, narrow: boolean): number {
 if (narrow) return node.type === 'boss' ? 72 : node.type === 'start' ? 64 : 54;
 if (compact) return node.type === 'boss' ? 92 : node.type === 'start' ? 86 : 70;
 return node.type === 'boss' ? 108 : node.type === 'start' ? 86 : 66;
}
function nodeAnchor(node: MapNode, edge: 'top' | 'bottom', canvasHeight: number, compact: boolean, narrow: boolean) {
 const center = point(node); const halfHeight = nodeHeight(node, compact, narrow) / canvasHeight * 50;
 return { x: center.x, y: Math.max(0, Math.min(100, center.y + (edge === 'top' ? -halfHeight : halfHeight))) };
}

function routePath(from: MapNode, to: MapNode, canvasHeight: number, compact: boolean, narrow: boolean): string {
 const start = nodeAnchor(from, 'top', canvasHeight, compact, narrow);
 const end = nodeAnchor(to, 'bottom', canvasHeight, compact, narrow);
 return `M ${start.x} ${start.y} L ${end.x} ${end.y}`;
}

/** Show every logical route once: distinct destinations stay visible, exact from/to duplicates collapse. */
function uniqueEdges(edges: MapEdge[]): MapEdge[] {
 const seen = new Set<string>();
 return edges.filter((edge) => {
  const key = `${edge.from}\u0000${edge.to}`;
  if (seen.has(key)) return false;
  seen.add(key);
  return true;
 });
}
const ICON_PATHS: Record<MapNode['type'], string> = { start: 'M12 5a7 7 0 1 0 0 14 7 7 0 0 0 0-14Z', combat: 'M5 19L19 5M7 5l12 12M5 17l2 2', elite: 'M12 3l3 6 6 3-6 3-3 6-3-6-6-3 6-3Z', rest: 'M12 3C10 8 14 9 11 13C15 12 17 8 18 6C21 13 19 21 12 21S3 15 6 10c0 5 3 7 5 4', shop: 'M4 8h16l-2 12H6ZM7 8l2-4h6l2 4M8 12h8', event: 'M12 18v.01M9 9a3 3 0 1 1 4 3c-1 1-1 2-1 3', treasure: 'M4 9h16v11H4ZM3 6h18v4H3Zm9 0v14M8 6c-3-2-1-5 1-3l3 3m4 0c3-2 1-5-1-3l-3 3', special: 'M12 3l2.5 6.5L21 12l-6.5 2.5L12 21l-2.5-6.5L3 12l6.5-2.5Z', boss: 'M4 19l2-12 4 4 2-7 3 7 4-4 1 12ZM4 19h16' };
function MapNodeIcon({ type }: { type: MapNode['type'] }) { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d={ICON_PATHS[type]} /></svg>; }
function CartographicTerrain() { return <div className="map-terrain" aria-hidden="true"><svg className="map-relief" viewBox="0 0 100 100" preserveAspectRatio="none"><path className="contour major" d="M-8 18C11 5 30 10 37 23S61 38 82 25 112 20 108 4" /><path className="contour" d="M-10 23C12 10 28 15 34 27S58 43 82 31 111 27 109 12" /><path className="contour" d="M-8 29C13 17 27 20 31 32S57 49 84 38 111 34 109 20" /><path className="contour major" d="M-9 66C12 51 32 54 42 67S67 85 109 62" /><path className="contour" d="M-8 72C13 58 31 60 39 72S67 91 108 70" /><path className="contour" d="M-7 79C15 65 30 68 37 79S67 97 110 77" /><path className="contour island" d="M63 44C71 37 84 38 89 46C94 54 88 63 78 65C68 67 57 61 58 54C59 50 61 47 63 44Z" /><path className="river" d="M17-5C24 12 12 21 25 35s2 24 14 37 8 22 13 34" /><path className="boundary" d="M0 48C18 41 31 45 47 39s33-9 53-4" /></svg><span className="terrain-wash wash-a" /><span className="terrain-wash wash-b" /></div>; }
export function RunPage({ state, onBack, onEnterNode }: RunPageProps) {
 const [viewportWidth, setViewportWidth] = useState(() => window.innerWidth);
 const compactMap = viewportWidth <= 640; const narrowMap = viewportWidth <= 460;
 useEffect(() => {
  const updateViewportWidth = () => setViewportWidth(window.innerWidth);
  window.addEventListener('resize', updateViewportWidth);
  return () => window.removeEventListener('resize', updateViewportWidth);
 }, []);
 const routeStripRef = useRef<HTMLElement | null>(null);
 const routeDrag = useRef({ active: false, moved: false, startX: 0, startScroll: 0, pointerId: -1 });
 const [routeDragging, setRouteDragging] = useState(false);
 const onRoutePointerDown = (event: ReactPointerEvent<HTMLElement>) => {
  const strip = routeStripRef.current;
  if (!strip || strip.scrollWidth <= strip.clientWidth) return; // nothing to reveal
  routeDrag.current = { active: true, moved: false, startX: event.clientX, startScroll: strip.scrollLeft, pointerId: event.pointerId };
  strip.setPointerCapture(event.pointerId);
  setRouteDragging(true);
 };
 const onRoutePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
  const strip = routeStripRef.current;
  if (!strip || !routeDrag.current.active) return;
  const delta = event.clientX - routeDrag.current.startX;
  if (Math.abs(delta) > 3) routeDrag.current.moved = true;
  strip.scrollLeft = routeDrag.current.startScroll - delta;
 };
 const endRoutePointer = (event: ReactPointerEvent<HTMLElement>) => {
  const strip = routeStripRef.current;
  if (!routeDrag.current.active) return;
  routeDrag.current.active = false;
  if (strip?.hasPointerCapture(event.pointerId)) strip.releasePointerCapture(event.pointerId);
  setRouteDragging(false);
 };
 const map = state.map; const [previewId, setPreviewId] = useState<string | null>(null); const character = CHARACTERS[state.player?.characterId ?? 'wanderer']; const previewNode = map?.nodes.find((node) => node.id === previewId); const currentNode = map?.nodes.find((node) => node.id === map.currentNodeId); const activeNode = previewNode ?? currentNode; const biome = biomeById(activeNode?.regionId ?? map?.biomeId); const regionChain = [...new Set(map?.nodes.slice().sort((a, b) => a.row - b.row).map((node) => node.regionId ?? map.biomeId) ?? [])].map((id) => biomeById(id)); const depth = Math.max(1, ...(map?.nodes.map((node) => node.row + 1) ?? [1])); const canvasHeight = mapCanvasHeight(depth, compactMap, narrowMap); const mapStyle = { '--map-depth': String(depth) } as CSSProperties; const visibleEdges = map ? uniqueEdges(map.edges) : [];
 return <main className={`run-shell ${biome.accentClass}`}><header className="run-header"><div><p className="eyebrow">第 {state.run?.currentAct ?? 1} 幕 · {biome.name} · 难度 {state.run?.ascensionLevel ?? 1} · SEED {state.seed}</p><h1>灰烬边境</h1><p className="subtitle">{biome.tagline}</p></div><button className="text-button" onClick={onBack}>返回主菜单</button></header><nav ref={routeStripRef} className={`region-route ${routeDragging ? 'dragging' : ''}`} aria-label="本幕固定地域顺序（可拖拽查看后续地域）" onPointerDown={onRoutePointerDown} onPointerMove={onRoutePointerMove} onPointerUp={endRoutePointer} onPointerCancel={endRoutePointer}>{regionChain.map((region, index) => <span key={region.id} className={`${region.accentClass} ${region.id === biome.id ? 'current' : ''}`}><b>{index + 1}</b>{region.name}</span>)}</nav><section className="region-vista" aria-label={`${biome.name} 地貌`}><RegionScene regionId={activeNode?.regionId ?? map?.biomeId} /><div className="region-vista-caption"><strong>{biome.name}</strong><span>{biome.tagline}</span></div></section><section className="run-grid"><article className="panel map-panel"><div className="section-heading"><div><p className="eyebrow">CINDERLAND SURVEY · 北向上</p><h2>远征地形图</h2><p className="map-helper">道路沿山脊、河谷与聚落展开。发亮路段是当前可通行路线；召回已走过道路后无法折返。</p></div><span className="route-count">{map?.visitedNodeIds.length ?? 0}/{map?.nodes.length ?? 0}</span></div>
  <div className="map-canvas topographic-map" style={mapStyle}><CartographicTerrain /><svg className="map-links" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">{map && visibleEdges.map((edge) => { const from = map.nodes.find((candidate) => candidate.id === edge.from); const to = map.nodes.find((candidate) => candidate.id === edge.to); if (!from || !to) return null; const active = map.visitedNodeIds.includes(from.id) && map.availableNodeIds.includes(to.id); const traveled = map.visitedNodeIds.includes(from.id) && map.visitedNodeIds.includes(to.id); const future = !active && !traveled; const classes = `${active ? 'active' : ''} ${traveled ? 'traveled' : ''} ${future ? 'future' : ''}`; const path = routePath(from, to, canvasHeight, compactMap, narrowMap); return <g key={`${edge.from}-${edge.to}`} data-route-from={edge.from} data-route-to={edge.to} className={classes}><path className="map-link" d={path} /></g>; })}</svg><div className="map-nodes-free">{map?.nodes.map((node) => { const available = map.availableNodeIds.includes(node.id); const visited = map.visitedNodeIds.includes(node.id); const current = map.currentNodeId === node.id; const presentation = nodePresentation(node, available, visited, current); const position = point(node); return <button key={node.id} data-node-id={node.id} data-connections={node.connections.join(' ')} data-map-row={node.row} data-map-column={node.column} className={`node-button node-${node.type} landmark-${node.locationKind} node-status-${presentation.state} ${biomeById(node.regionId ?? map.biomeId).accentClass}`} style={{ left: `${position.x}%`, top: `${position.y}%` }} aria-label={`${presentation.aria}，地点：${node.locationName}`} disabled={presentation.state !== 'available'} onFocus={() => setPreviewId(node.id)} onMouseEnter={() => setPreviewId(node.id)} onClick={() => onEnterNode(node.id)}><span className="node-sigil"><MapNodeIcon type={node.type} /></span><span className="node-location">{node.locationName}</span><strong>{presentation.label}</strong></button>; })}</div><div className="map-compass" aria-hidden="true"><b>N</b><svg viewBox="0 0 24 34"><path d="M12 2L20 28 12 23 4 28Z" /></svg></div><div className="map-scale" aria-hidden="true"><span /><b>5 灰里</b></div><span className="map-sheet-label">熄火圣殿测绘局 · 远征版</span></div>
  <div className="map-legend"><span><i className="legend-line active" /> 可通行古道</span><span><i className="legend-line future" /> 全部后续路线</span><span><i className="legend-line traveled" /> 已行经道路</span><span><i className="legend-river" /> 水系</span><span>等高线代表陡峭地势</span></div>{previewNode && <div className="node-preview panel" role="status"><p className="eyebrow">{biomeById(previewNode.regionId ?? map!.biomeId).name} · {previewNode.locationName} · {nodePresentation(previewNode, map!.availableNodeIds.includes(previewNode.id), map!.visitedNodeIds.includes(previewNode.id), map!.currentNodeId === previewNode.id).label} · 高程带 {previewNode.row + 1}</p><div className="node-preview-scores"><span>风险 {previewNode.risk}</span><span>回报 {previewNode.reward}</span><span>资源 {previewNode.resource}</span></div></div>}</article>
  <aside className="panel stat-panel"><p className="eyebrow">远征物资</p><h2>{character?.name ?? '远行者'}</h2><p className="character-signature">{character?.signature}</p><div className="stat-row"><span>难度</span><strong>{state.run?.ascensionLevel ?? 1}</strong></div><div className="stat-row"><span>生命</span><strong>{state.player?.hp}/{state.player?.maxHp}</strong></div><div className="stat-row"><span>金币</span><strong>{state.player?.gold}</strong></div><div className="stat-row"><span>牌组</span><strong>{state.player?.deck.length} 张</strong></div><div className="stat-row"><span>遗物</span><strong>{state.player?.relics.length} 件</strong></div></aside></section><p className="phase-note">地形、道路、地点和内容均由 Seeded RNG 推导；同一 Seed 保持相同测绘结果。</p></main>;
}
