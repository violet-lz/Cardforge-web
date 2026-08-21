#!/bin/zsh
# post-commit hook: 自动将 commit message 写入 changelog.ts
# 仅处理包含 "-/-" 分隔符的 commit（项目约定的双语格式）
# 跳过 merge commit 和 amend 重入

CHANGELOG_FILE="src/app/changelog.ts"

# 防止 amend 重入（检查环境变量标记）
if [ -n "$GIT_CHANGELOG_AMENDING" ]; then
  exit 0
fi

# 跳过 merge commit
PARENT_COUNT=$(git cat-file -p HEAD | grep -c '^parent')
if [ "$PARENT_COUNT" -gt 1 ]; then
  exit 0
fi

# 读取 commit message 第一行
MSG=$(git log -1 --pretty=%s)

# 仅处理含 "-/-" 的 commit
if ! echo "$MSG" | grep -q -- '-/-'; then
  exit 0
fi

# 提取 type 前缀后的描述部分（去掉 "feat: " / "fix: " / "chore: " 等）
DESCRIPTION=$(echo "$MSG" | sed 's/^[a-z]*: //')

# 检查 changelog 中是否已包含此条（避免重复）
if grep -qF "$DESCRIPTION" "$CHANGELOG_FILE" 2>/dev/null; then
  exit 0
fi

# 获取今天的日期
TODAY=$(date +%Y-%m-%d)

# 将新条目插入到 CHANGELOG 数组的第一项位置
# 匹配 "export const CHANGELOG: ChangelogEntry[] = [" 后面插入
sed -i '' "/^export const CHANGELOG: ChangelogEntry\[\] = \[$/a\\
\  { date: '${TODAY}', message: '${DESCRIPTION}' },
" "$CHANGELOG_FILE"

# 将 changelog 变更追加到当前 commit
git add "$CHANGELOG_FILE"
GIT_CHANGELOG_AMENDING=1 git commit --amend --no-edit --no-verify
