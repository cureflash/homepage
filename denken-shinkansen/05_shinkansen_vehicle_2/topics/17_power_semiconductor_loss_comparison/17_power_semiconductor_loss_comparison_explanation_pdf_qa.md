# 17 パワー半導体の損失比較 — 解説PDF QA

更新日: 2026-09-19

## 対象
- PDF: `17_power_semiconductor_loss_comparison_explanation.pdf`
- source: `17_power_semiconductor_loss_comparison_explanation_source.md`
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・23答案要素

## PDF構造・表示QA
- A4縦: `4ページ`
- 180 dpiレンダリング: `4 / 4 PASS`
- PDF open: `PASS`
- preflight: `PASS / 非埋込CIDフォント警告あり。180 dpi全頁表示と文字抽出で実表示を確認`
- 文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 文字欠落・文字化け・重なり・クリップ: `0件`
- SHA-256: `8d5934da49b062049afb86c8b9ccd12b79e53ce4bdeda79936c54211148198a4`

## 内容QA
- 固定5過去問・23答案要素への接続: `23 / 23 PASS`
- clean blind公式照合: `23 / 23 PASS`
- H24一次「機械」問6のゲート対象: `(2)(3)のみ / PASS`
- 3段階例題: `3 / 3 PASS`
- 基礎例題: `P_cond=210 W` を再確認
- 本試験標準例題: `E_on=0.040 J`、`E_off=0.060 J`、`P_sw=500 W` を再確認
- 複合例題: `P_cond=400 W`、`P_sw=400 W`、`P_loss=800 W`、`η=99.60 %`、`T_j=109 °C` を再確認
- SPEC指定7項目: `7 / 7 covered`
- SPEC指定3可視化: `3 / 3 PASS`
  - 電流―導通損失: `PASS`
  - スイッチング周波数―損失: `PASS`
  - 出力―変換効率: `PASS`
- 可視化条件: `解説source固定の一般仮定値と一致`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問の正答記号・個別最終解の新規保存: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- PDF本体変更: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 現在地
旧26答案要素前提の記録を是正後の固定5問・23答案要素へ同期した。PDF本体・問題・正答・数式は変更していない。

次工程は Topic 17 の最終QA再実施。