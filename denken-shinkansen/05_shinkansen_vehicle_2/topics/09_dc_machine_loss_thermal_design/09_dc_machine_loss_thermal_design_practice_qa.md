# Topic 09 練習PDF QA

更新日: 2026-09-16

## 対象
- PDF: `09_dc_machine_loss_thermal_design_practice.pdf`
- source: `09_dc_machine_loss_thermal_design_practice_source.md`
- 形式: A4縦4ページ

## source同期
- 一次試験型: `8 / 8` 収録
- 二次試験型: `4 / 4` 収録
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・14対象項目を維持
- 固定14対象項目への接続: `14 / 14`
- EXAM_ALIGNMENT変更: `0件`

## Visual QA
- 180 dpi全4ページ表示: `4 / 4 PASS`
- 文字・図のクリップ: `0件`
- 重なり: `0件`
- ページ外overflow: `0件`
- 日本語グリフ欠落・黒四角: `0件`

## 文字抽出QA
- 文字抽出: `PASS`
- Unicode置換文字 `�`: `0件`
- `□`置換: `0件`
- `一次試験型`、`問8 簡略熱モデル`、`二次試験型`、`問4 定格・冷却・部分負荷効率・保守`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理・正答一意性確認済み: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・検算: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- 誘導電動機、PWM/VVVF、回生、IGBT/SiC、詳細絶縁寿命モデル、熱流体解析の追加: `0件`
- 未確認100系・200系実車損失・温度・冷却容量・保守周期の追加: `0件`
- 熱抵抗・熱容量は教材用仮定値のまま維持

## 整合性
- SHA-256: `1a3f6cbb92a6fb3333aa647236b271e50aeda30b1fb73b9132e74565e788047f`
- Git blob SHA-1: `549b9ba99b73d4cafe9a57bb2fdaadb2dbce7535`
- ローカル `git hash-object` とGitHub `create_blob` のSHA-1一致: `PASS`

## 判定
`PASS`
