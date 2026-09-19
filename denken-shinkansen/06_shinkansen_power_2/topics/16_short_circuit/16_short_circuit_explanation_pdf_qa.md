# Topic 16 解説PDF QA

updated: 2026-09-19
status: `PASS / topic_16_explanation_pdf_resynced_after_completion_blind`

対象: `16_short_circuit_explanation.pdf`
source: `16_short_circuit_explanation.md` (`EXPLANATION_SOURCE_CORRECTED / IN_PROGRESS`)

## 再同期理由

完成後blindで一次固定2問の候補解は公式解答と一致したが、learner-facing成果物に必要な説明が不足して `NEEDS_REVISION` となった。固定5問・23答案要素を変更せず、補正済み解説sourceから解説PDFだけを再生成した。

今回PDFへ同期した不足項目:
- `電磁誘導障害` と電磁力・熱的ストレスの区別
- `遮断容量` と短絡容量の最小限の大小関係
- `BTB (Back to Back)` が直流リンクを介し、交流短絡電流を直接通過させない意味
- `電圧階級上昇 + 系統分割` を短絡容量抑制策として読む説明
- `S_sc = √3 V I_sc` の `V` は短絡点の基準線間電圧・故障前電圧であり、ボルト短絡後の故障点電圧ではないこと

## 現行成果物

- ファイルサイズ: `12972 bytes`
- Git blob SHA-1: `a4c750968898c0035395c71ba1ce79b7f7a838dd`
- SHA-256: `9873e679fdc829158fdd77ee5eee3b5cc36086013f19f64c9399d67ca9fa1d12`
- 用紙: A4縦
- ページ数: `5`
- 正式品質ゲート: 一次2問＋二次3問、固定 `5問・23答案要素`（変更なし）

## 表示・文字抽出QA

- PDFium 200 dpi: `1654 x 2339`, `5 / 5 PASS`
- Poppler: `5 / 5 PASS`
- 2 rendererでページ数・表示整合: `PASS`
- ページ外逸脱 / 文字重なり / 本文切れ: `0件`
- 最小余白: 左 `34.8 pt` / 上 `35.1 pt` / 右 `37.2 pt` / 下 `43.8 pt`
- 黒四角 / 欠損グリフ: `0件`
- `pdftotext -layout`: `PASS`
- U+FFFD: `0件`
- 補正5項目の文字抽出: `5 / 5 PASS`

## 内容QA

固定10説明項目は維持:
1. 短絡現象・短絡容量
2. 三相短絡・短絡容量
3. 基準量・p.u.・％Z
4. 系統インピーダンス合成
5. 正相・逆相・零相
6. 一線地絡
7. 線間短絡
8. 二線地絡
9. 故障位置―短絡電流
10. 解法アルゴリズム

`10 / 10 covered`。

固定5問・23答案要素の教材マッピング:
- R2一次「電力」問3: `5 / 5 covered`
- H25一次「電力」問4: `5 / 5 covered`
- R7二次「電力・管理」問2: `5 / 5 covered`
- R3二次「電力・管理」問3: `6 / 6 covered`
- H21二次「電力・管理」問6: `2 / 2 covered`
- 一次: `10 / 10 covered`
- 二次: `13 / 13 covered`
- 合計: `23 / 23 covered`

3段階例題:
- 基礎: `S_sc=1000 MVA`, `V_LL=66 kV` → `I_sc=8.75 kA`
- 本試験標準: 共通100 MVA基準、`Z1th=0.40 p.u.` → `I_sc=2.19 kA`, `S_sc=250 MVA`
- 複合・ひっかけ: `Z1=0.20`, `Z2=0.20`, `Z0=0.10 p.u.` → 一線地絡 `5.25 kA`, 三相短絡 `4.37 kA`

独立再計算: `3 / 3 PASS`。教材用仮定モデル `x=0,5,10,20,30 km` の短絡電流 `16.67, 13.16, 10.87, 8.06, 6.41 kA` も再計算一致。

## 仕様境界

- 固定5問・23答案要素変更: `0件`
- 新規正式過去問追加: `0件`
- Topic 17の遮断器定格選定・保護協調先取り: `0件`
- Topic 18以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 判定

`PASS / topic_16_explanation_pdf_resynced_after_completion_blind`

このPASSは補正済み解説PDF単体のQA判定であり、Topic 16完成後blindのPASSではない。練習source/PDFとPowerPointは補正未同期のため、Topic 16全体は `NEEDS_REVISION / IN_PROGRESS` のまま。次工程は練習source/PDFへの必要最小限の補正同期とQA。
