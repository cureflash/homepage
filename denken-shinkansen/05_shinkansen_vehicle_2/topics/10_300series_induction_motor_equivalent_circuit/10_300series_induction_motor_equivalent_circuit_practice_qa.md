# Topic 10 練習PDF QA

更新日: 2026-09-16

## 対象
- PDF: `10_300series_induction_motor_equivalent_circuit_practice.pdf`
- source: `10_300series_induction_motor_equivalent_circuit_practice_source.md`
- 形式: A4縦3ページ

## source同期
- 一次試験型: `8 / 8` 収録
- 二次試験型: `4 / 4` 収録
- 全12問: 完全解説付き
- 固定EXAM_ALIGNMENT: 一次3問＋二次2問、計5問・22答案要素を維持
- 固定22答案要素への接続: `22 / 22`
- EXAM_ALIGNMENT変更: `0件`

## Visual QA
- 180 dpi全3ページ表示: `3 / 3 PASS`
- 文字・図のクリップ: `0件`
- 重なり: `0件`
- ページ外overflow: `0件`
- 日本語グリフ欠落・黒四角: `0件`

## 文字抽出QA
- 文字抽出: `PASS`
- Unicode置換文字 `�`: `0件`
- `□`置換: `0件`
- `一次試験型`、`問8 等価回路とトルク特性の正誤`、`二次試験型`、`問4 T=P2/ωs と低滑り域 T∝s を導く`: 抽出確認 `PASS`

## 計算・論理QA
- sourceで独立再計算・論理・正答一意性確認済み: `12 / 12 PASS`
- PDF収録値を独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 二次の途中式・前提・単位・検算: `4 / 4 PASS`
- 教材外知識補完: `0件`

## SPEC境界
- PWMコンバータ、VVVF、V/f、回生・四象限運転、高調波、ベクトル制御の追加: `0件`
- 未確認300系実車抵抗・リアクタンス・電圧・電流・周波数・効率・制御定数の追加: `0件`
- 問題中の数値は教材用仮定値のまま維持

## 整合性
- SHA-256: `f5dfaf9d3964190bc377ae47e442f6eee630658a92da5d65e7f1140fed166b72`
- Git blob SHA-1: `4c6bdefa78383a57074e017e6ef6eea958b50bbb`
- ローカル `git hash-object` とGitHub `create_blob` のSHA-1一致: `PASS`

## 判定
`PASS`

## 現在地
- current_status: `topic_10_practice_pdf_complete`
- 完成数: `9 / 39`（Topic 10は最終QA未完了のため増やさない）
- 次工程: Topic 10の解説画像PowerPointを制作する。SPEC指定4グラフ（トルク―すべり、出力―すべり、効率―負荷率、二次抵抗変更時の特性）を収録し、表示QA・overflow・PowerPoint ZIP整合性を確認する。
