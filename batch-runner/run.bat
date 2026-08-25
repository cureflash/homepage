@echo off
setlocal
chcp 65001 >nul
cd /d "%~dp0"

where node >nul 2>&1
if errorlevel 1 (
  echo Node.js が見つかりません。
  echo Node.js 18 以上をインストールしてから再実行してください。
  pause
  exit /b 1
)

where npm >nul 2>&1
if errorlevel 1 (
  echo npm が見つかりません。Node.js のインストールを確認してください。
  pause
  exit /b 1
)

where git >nul 2>&1
if errorlevel 1 (
  echo Git が見つかりません。
  pause
  exit /b 1
)

where codex >nul 2>&1
if errorlevel 1 (
  echo Codex CLI が見つかりません。
  echo PowerShell で npm install -g @openai/codex を実行し、codex でChatGPTログインを済ませてください。
  pause
  exit /b 1
)

if not exist "node_modules\@openai\codex-sdk" (
  echo Codex SDK を初期セットアップしています...
  call npm install --no-package-lock --no-audit --no-fund
  if errorlevel 1 (
    echo npm install に失敗しました。
    pause
    exit /b 1
  )
)

echo.
echo ========================================
echo Codex batch runner を開始します
echo ========================================
echo.

node runner.mjs
set "RUNNER_EXIT=%ERRORLEVEL%"

echo.
if "%RUNNER_EXIT%"=="0" (
  echo 正常終了しました。
) else (
  echo 異常停止しました。batch-runner\logs のログを確認してください。
)

pause
exit /b %RUNNER_EXIT%
