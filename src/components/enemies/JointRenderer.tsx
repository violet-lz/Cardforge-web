// JointRenderer — 骨骼关节树渲染器。
// 将怪物的 6 关节定义按父子关系递归嵌套为 SVG <g> 元素，
// 每个关节节点绑定对应 features 并引用 CSS animation class。

import { useEffect, useRef } from 'react';
import type { MonsterVisualSpec, JointDef } from '../../game/enemies/monsterVisualTypes';
import { BodyGlyph, FeatureGlyph } from './spriteShapes';

interface JointRendererProps {
  spec: MonsterVisualSpec;
  animation: string;
  instanceId: string;
  onEnd?: () => void;
}

/**
 * 递归渲染单个关节及其子关节。
 * 每个关节输出一个 <g className={instanceId}-{jointId}>，内含绑定的 features 和子关节。
 */
function renderJoint(
  joint: JointDef,
  childrenMap: Map<string, JointDef[]>,
  spec: MonsterVisualSpec,
  instanceId: string,
): JSX.Element {
  const children = childrenMap.get(joint.id) ?? [];

  return (
    <g key={joint.id} className={`${instanceId}-${joint.id}`}>
      {/* 渲染绑定到当前关节的 features */}
      {joint.boundFeatures.map((featureIdx) => {
        const f = spec.features[featureIdx];
        if (!f) return null;
        return <FeatureGlyph key={featureIdx} id={f.s} f={f} />;
      })}
      {/* 递归渲染子关节 */}
      {children.map((child) => renderJoint(child, childrenMap, spec, instanceId))}
    </g>
  );
}

export function JointRenderer({ spec, animation, instanceId, onEnd }: JointRendererProps) {
  const rootRef = useRef<SVGGElement>(null);

  // 查找对应的 AnimationClip
  const clip = spec.animations?.find((c) => c.name === animation);

  // 监听 animationend 事件
  useEffect(() => {
    const el = rootRef.current;
    if (!el || !clip || !onEnd) return;

    const handler = (e: AnimationEvent) => {
      // 仅响应直接子元素/自身的 animationend，避免子关节事件重复触发
      if (e.target === el) {
        onEnd();
      }
    };

    el.addEventListener('animationend', handler);
    return () => el.removeEventListener('animationend', handler);
  }, [clip, onEnd]);

  // 如果没找到对应动画片段，静态渲染所有 features（降级路径）
  if (!clip) {
    return (
      <g>
        <BodyGlyph spec={spec} gid={instanceId} />
        {spec.features.map((f, i) => (
          <FeatureGlyph key={i} id={f.s} f={f} />
        ))}
      </g>
    );
  }

  // 构建关节树：确定 root 和 children map
  const joints = spec.joints ?? [];
  const childrenMap = new Map<string, JointDef[]>();
  let rootJoint: JointDef | null = null;

  for (const joint of joints) {
    if (joint.parentId === null) {
      rootJoint = joint;
    } else {
      const siblings = childrenMap.get(joint.parentId) ?? [];
      siblings.push(joint);
      childrenMap.set(joint.parentId, siblings);
    }
  }

  // 计算哪些 feature 索引被任何关节绑定了
  const boundIndices = new Set<number>();
  for (const joint of joints) {
    for (const idx of joint.boundFeatures) {
      boundIndices.add(idx);
    }
  }

  // 未绑定到任何关节的 features
  const unboundFeatures = spec.features
    .map((f, i) => ({ f, i }))
    .filter(({ i }) => !boundIndices.has(i));

  return (
    <g ref={rootRef}>
      {/* Body glyph 作为底层渲染 */}
      <BodyGlyph spec={spec} gid={instanceId} />
      {/* 未绑定的 features 在顶层渲染（不受关节动画驱动） */}
      {unboundFeatures.map(({ f, i }) => (
        <FeatureGlyph key={i} id={f.s} f={f} />
      ))}
      {/* 从 root 关节开始递归渲染骨骼树 */}
      {rootJoint && renderJoint(rootJoint, childrenMap, spec, instanceId)}
    </g>
  );
}
