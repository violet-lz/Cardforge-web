// AnimationGenerator — 将 AnimationClip 数据转换为纯 CSS @keyframes 字符串。
// 不依赖任何 JS 动画库，仅输出可注入 <style> 的 CSS 文本。

import type { AnimationClip, JointDef } from '../../game/enemies/monsterVisualTypes';

/**
 * 为动画片段中每个被引用的关节生成 @keyframes 规则。
 *
 * @param clip - 动画片段定义
 * @param joints - 怪物的 6 关节定义数组
 * @param instanceId - 唯一实例 ID，作为 keyframes 命名前缀
 * @returns 拼接后的 @keyframes CSS 字符串
 */
export function generateKeyframes(
  clip: AnimationClip,
  joints: JointDef[],
  instanceId: string,
): string {
  // 收集片段中所有被引用的 jointId
  const referencedJointIds = new Set<string>();
  for (const kf of clip.keyframes) {
    for (const jk of kf.joints) {
      referencedJointIds.add(jk.jointId);
    }
  }

  // 仅为实际存在于 joints 数组中的关节生成规则
  const validJointIds = new Set(joints.map((j) => j.id));
  const targetJointIds = [...referencedJointIds].filter((id) => validJointIds.has(id));

  if (targetJointIds.length === 0) return '';

  const rules: string[] = [];

  for (const jointId of targetJointIds) {
    const steps: string[] = [];

    for (const kf of clip.keyframes) {
      const percent = Math.round(kf.time * 100);
      const jk = kf.joints.find((j) => j.jointId === jointId);

      const rotation = jk?.rotation ?? 0;
      const tx = jk?.translateX ?? 0;
      const ty = jk?.translateY ?? 0;

      const transform = `rotate(${rotation}deg) translate(${tx}px, ${ty}px)`;

      // 若当前关键帧有 easing，在步骤内指定 animation-timing-function
      const easingRule = kf.easing
        ? `animation-timing-function: ${kf.easing};`
        : '';

      steps.push(
        `  ${percent}% { transform: ${transform};${easingRule ? ` ${easingRule}` : ''} }`,
      );
    }

    rules.push(
      `@keyframes ${instanceId}-${jointId} {\n${steps.join('\n')}\n}`,
    );
  }

  return rules.join('\n');
}

/**
 * 生成完整的 CSS：@keyframes 规则 + 对应的动画属性类规则。
 *
 * @param clip - 动画片段定义
 * @param joints - 怪物的 6 关节定义数组
 * @param instanceId - 唯一实例 ID
 * @returns 可直接注入 <style> 标签的完整 CSS 字符串
 */
export function generateAnimationCSS(
  clip: AnimationClip,
  joints: JointDef[],
  instanceId: string,
): string {
  const keyframesCSS = generateKeyframes(clip, joints, instanceId);
  if (!keyframesCSS) return '';

  // 收集被引用且存在的 jointId
  const referencedJointIds = new Set<string>();
  for (const kf of clip.keyframes) {
    for (const jk of kf.joints) {
      referencedJointIds.add(jk.jointId);
    }
  }
  const jointMap = new Map(joints.map((j) => [j.id, j]));
  const targetJointIds = [...referencedJointIds].filter((id) => jointMap.has(id));

  // 全局 easing 取第一个关键帧的 easing 字段，若无则默认 'ease-in-out'
  const globalEasing = clip.keyframes[0]?.easing ?? 'ease-in-out';

  const animationRules: string[] = [];
  for (const jointId of targetJointIds) {
    const joint = jointMap.get(jointId)!;
    animationRules.push(
      `.${instanceId}-${jointId} { animation: ${instanceId}-${jointId} ${clip.duration}ms ${globalEasing} forwards; transform-origin: ${joint.anchor.x}px ${joint.anchor.y}px; }`,
    );
  }

  return `${keyframesCSS}\n${animationRules.join('\n')}`;
}
