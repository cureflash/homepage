# 16 700系 多レベル変換器とPWM — 解説PDF QA

更新日: 2026-09-18

## 対象
- PDF: `16_700series_multilevel_converter_pwm_explanation.pdf`
- source: `16_700series_multilevel_converter_pwm.md`
- 固定EXAM_ALIGNMENT: 一次4問＋二次1問、計5問・26答案要素

## PDF構造・表示QA
- A4縦: `4ページ`
- 180 dpiレンダリング: `4 / 4 PASS`
- PDF open/preflight: `PASS`
- 文字抽出: `PASS`
- 文字欠落・文字化け: `0件`
- 重なり・クリップ: `0件`
- SHA-256: `f80880da951131efa119ad1a08067fde0dc55b2083fc1e3bc571f42b3d2b5ede`

## 内容QA
- 固定5過去問・26答案要素への接続: `26 / 26 PASS`
- 3段階例題: `3 / 3 PASS`
- 基礎例題: `200 V/μs`, `100 V/μs` を再確認
- 本試験標準例題: `A1=1.96157`, `A5=1.11114`, `A7=0.390181` を再確認
- 複合例題: `|Vv|=186.387 V`, `K=0.878635`, `|I|=26.8328 A`, `Psw=8.0 W`, `η=98.0 %` を再確認
- SPEC指定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
  - 2レベル・多レベル出力波形比較: `PASS`
  - 高調波比較: `PASS`
  - 素子電圧比較: `PASS`
- source固定の共通仮定モデルとの整合: `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 正答記号・固定過去問の個別最終解保存: `0件`
- SPEC外追加: `0件`
- 未確認700系実車値の真値化: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## 次工程
固定一次4問＋二次1問・26答案要素、解説source、SPEC指定8項目・3可視化、範囲境界を変更せず、Topic 16の練習問題sourceを制作する。
