#!/bin/zsh
set -euo pipefail

PROJECT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
PORT=4173
URL="http://127.0.0.1:${PORT}"
RUNTIME_DIR="${TMPDIR:-/tmp}/starfall-deckbuilder"
PID_FILE="${RUNTIME_DIR}/preview.pid"
LOG_FILE="${RUNTIME_DIR}/preview.log"

mkdir -p "$RUNTIME_DIR"
cd "$PROJECT_DIR"

if [[ ! -x "node_modules/.bin/vite" ]]; then
  echo "[星陨牌局] 正在安装锁定版本的依赖…"
  npm ci
fi

echo "[星陨牌局] 正在构建游戏…"
npm run build

if [[ -f "$PID_FILE" ]]; then
  OLD_PID="$(<"$PID_FILE")"
  if kill -0 "$OLD_PID" 2>/dev/null; then
    echo "[星陨牌局] 正在重启旧的本地游戏服务器…"
    kill "$OLD_PID"
    for _ in {1..20}; do
      kill -0 "$OLD_PID" 2>/dev/null || break
      sleep 0.1
    done
  fi
  rm -f "$PID_FILE"
fi

echo "[星陨牌局] 正在启动 ${URL} …"
nohup ./node_modules/.bin/vite preview --host 127.0.0.1 --port "$PORT" --strictPort >"$LOG_FILE" 2>&1 &
SERVER_PID=$!
echo "$SERVER_PID" > "$PID_FILE"

for _ in {1..50}; do
  if curl --silent --fail "$URL" >/dev/null 2>&1; then
    open "$URL"
    echo "[星陨牌局] 构建成功，游戏已在浏览器打开。"
    echo "[星陨牌局] 运行日志：${LOG_FILE}"
    exit 0
  fi
  kill -0 "$SERVER_PID" 2>/dev/null || break
  sleep 0.2
done

echo "[星陨牌局] 启动失败，请检查日志：${LOG_FILE}" >&2
[[ -f "$LOG_FILE" ]] && tail -n 30 "$LOG_FILE" >&2
exit 1
