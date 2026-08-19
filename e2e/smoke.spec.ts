import { expect, test } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.addInitScript(() => localStorage.removeItem('starfall-card-game/locale'));
});

test('keeps the terrain map clear and supports click and drag combat play', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 812 });
  await page.goto('/');
  await expect(page).toHaveTitle('星陨牌局');
  await page.getByRole('button', { name: '开始新的 Run' }).click();
  await expect(page.getByText('选择角色')).toBeVisible();
  await page.getByRole('button', { name: '以 远行者 开始 Run' }).click();
  await expect(page.getByText('灰烬边境')).toBeVisible();
  await expect(page.getByText('远征地形图')).toBeVisible();

  const futureRoads = page.locator('.map-links g.future');
  await expect(futureRoads).not.toHaveCount(0);
  const routeCoverage = () => page.evaluate(() => {
    const nodes = [...document.querySelectorAll<HTMLElement>('[data-node-id][data-connections]')];
    const roads = [...document.querySelectorAll<SVGGElement>('.map-links g')];
    const expected = nodes.flatMap((node) => (node.dataset.connections ?? '').split(' ').filter(Boolean).map((target) => `${node.dataset.nodeId}→${target}`));
    const actual = roads.map((road) => `${road.dataset.routeFrom}→${road.dataset.routeTo}`);
    return {
      allEdgesShown: JSON.stringify([...new Set(actual)].sort()) === JSON.stringify([...new Set(expected)].sort()),
      uniqueRoutePairs: new Set(actual).size === actual.length,
      hasVisibleBranch: nodes.some((node) => (node.dataset.connections ?? '').split(' ').filter(Boolean).length > 1),
      onePathPerRoute: roads.every((road) => road.querySelectorAll('path').length === 1),
      allRoutesStraight: roads.every((road) => { const d = road.querySelector('path')?.getAttribute('d') ?? ''; return d.includes(' L ') && !d.includes(' C '); }),
    };
  });
  await expect.poll(routeCoverage).toEqual({ allEdgesShown: true, uniqueRoutePairs: true, hasVisibleBranch: true, onePathPerRoute: true, allRoutesStraight: true });
  const futureRoad = futureRoads.locator('.map-link').first();
  await expect.poll(() => futureRoad.evaluate((element) => {
    const style = getComputedStyle(element);
    return { stroke: style.stroke, dash: style.strokeDasharray, width: style.strokeWidth };
  })).toEqual({ stroke: 'rgb(71, 181, 255)', dash: '4.5px, 2.5px', width: '1.75px' });

  const routeAnchorViolations = () => page.locator('.map-links g').evaluateAll((roads) => {
    const svg = document.querySelector<SVGSVGElement>('.map-links');
    if (!svg) return ['missing map SVG'];
    const svgBox = svg.getBoundingClientRect();
    return roads.flatMap((road) => {
      const path = road.querySelector<SVGPathElement>('.map-link');
      const from = document.querySelector<HTMLElement>(`[data-node-id="${road.getAttribute('data-route-from')}"]`);
      const to = document.querySelector<HTMLElement>(`[data-node-id="${road.getAttribute('data-route-to')}"]`);
      const values = path?.getAttribute('d')?.match(/M\s*([\d.]+)\s+([\d.]+).*?([\d.]+)\s+([\d.]+)$/);
      if (!path || !from || !to || !values) return [`${road.getAttribute('data-route-from')}→${road.getAttribute('data-route-to')}: missing geometry`];
      const [, startX, startY, endX, endY] = values.map(Number);
      const sourceBox = from.getBoundingClientRect(); const targetBox = to.getBoundingClientRect();
      const px = (value: number) => svgBox.left + value / 100 * svgBox.width;
      const py = (value: number) => svgBox.top + value / 100 * svgBox.height;
      const deltas = [
        Math.abs(px(startX) - (sourceBox.left + sourceBox.width / 2)),
        Math.abs(py(startY) - sourceBox.top),
        Math.abs(px(endX) - (targetBox.left + targetBox.width / 2)),
        Math.abs(py(endY) - targetBox.bottom),
      ];
      return deltas.some((delta) => delta > 6) ? [`${road.getAttribute('data-route-from')}→${road.getAttribute('data-route-to')}: ${deltas.map((delta) => delta.toFixed(1)).join(', ')}`] : [];
    });
  });
  await expect.poll(routeAnchorViolations).toEqual([]);

  for (const viewport of [{ width: 375, height: 812 }, { width: 768, height: 900 }, { width: 1024, height: 900 }, { width: 1440, height: 1000 }]) {
    await page.setViewportSize(viewport);
    await expect.poll(routeAnchorViolations).toEqual([]);
    await expect.poll(() => page.locator('.map-panel').evaluate((panel) => panel.scrollWidth <= panel.clientWidth)).toBe(true);
    const nodeBoxes = await page.locator('.node-button').evaluateAll((nodes) => nodes.map((node) => { const box = node.getBoundingClientRect(); return { label: node.getAttribute('aria-label'), row: node.getAttribute('data-map-row'), left: box.left, right: box.right, top: box.top, bottom: box.bottom }; }));
    for (let index = 0; index < nodeBoxes.length; index += 1) for (let other = index + 1; other < nodeBoxes.length; other += 1) {
      const a = nodeBoxes[index]; const b = nodeBoxes[other];
      expect(a.right <= b.left || b.right <= a.left || a.bottom <= b.top || b.bottom <= a.top, `${viewport.width}px: ${a.label} (row ${a.row}) overlaps ${b.label} (row ${b.row})`).toBe(true);
    }
  }
  await page.setViewportSize({ width: 375, height: 812 });
  await page.keyboard.press('Tab');
  await expect(page.locator(':focus')).toHaveCount(1);
  await page.locator('button.node-button.node-status-available').first().click();
  await expect(page.getByText('黑曜回廊')).toBeVisible();
  await expect(page.locator('.combatant-figure.figure-player')).toBeVisible();
  await expect(page.locator('.enemy-unit.frontline .combatant-figure.figure-enemy')).toBeVisible();
  const card = page.locator('.card-attack:not([disabled])').first(); const target = page.locator('.enemy-unit.frontline');
  const cardBox = await card.boundingBox(); const targetBox = await target.boundingBox(); expect(cardBox).not.toBeNull(); expect(targetBox).not.toBeNull();
  await page.mouse.move(cardBox!.x + cardBox!.width / 2, cardBox!.y + cardBox!.height / 2); await page.mouse.down(); await page.mouse.move(targetBox!.x + targetBox!.width / 2, targetBox!.y + targetBox!.height / 2, { steps: 8 }); await page.mouse.up();
  await expect(page.locator('.combat-log')).toBeVisible();
  await expect.poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
