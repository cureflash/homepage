# Topic 12 最終QA

更新日: 2026-09-17
判定: `NEEDS_REVISION / IN_PROGRESS`

## 確認対象

- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `04_shinkansen_theory_3/SPEC.md`
- `STATUS.md`
- `HANDOFF.md`
- `12_vvvf_semiconductor.md`
- `12_vvvf_semiconductor_explanation.pdf`
- `12_vvvf_semiconductor_explanation_qa.md`
- `12_vvvf_semiconductor_practice.md`
- `12_vvvf_semiconductor_practice.pdf`
- `12_vvvf_semiconductor_practice_qa.md`
- `12_vvvf_semiconductor_images.pptx`
- `12_vvvf_semiconductor_images_qa.md`
- `12_vvvf_semiconductor_exam_recheck.md`

## 品質ゲート

- 固定公式過去問: 7問
- 制作前独立検証: `7 / 7 PASS`
- 完成後独立再解答: `7 / 7 PASS`
- 公式解答一致: `7 / 7`
- 教材外知識補完: `0件`
- 固定過去問要求の本文マッピング: `7 / 7`
- 練習問題: 15問、正答一意性 `15 / 15 PASS`、数値・単位再計算 `3 / 3 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- 練習PDF: A4縦4ページ、200 dpi表示 `4 / 4 PASS`、文字抽出PASS
- PowerPoint: 16:9・4枚、表示 `4 / 4 PASS`、overflow 0件、ZIP/XML整合性PASS
- 必須成果物の実在: PASS
- SPEC固定範囲外追加: `0件`

## SPEC境界

次を完成ゲートへ追加していない。

- Topic 13のインバータ主回路、PWM、出力波形、高調波
- GTO・IGBT・SiCの詳細損失、駆動方式、スイッチング周波数比較
- BJT/FETのバイアス設計、小信号等価回路、hパラメータ
- ホール効果・ホール素子
- 光デバイスの詳細理論
- 300系主変換装置の内部回路・保護回路・未確認実車値
- 件数合わせのための系列SPEC外論点

固定範囲は系列SPECの半導体、真性/不純物半導体、p/n型、キャリア、pn接合、順逆バイアス、ダイオード、整流、BJT/FETの基本、スイッチング素子の入口に留まっている。

## 進捗記録整合性

実成果物は完成後独立再解答まで存在し、`12_vvvf_semiconductor_exam_recheck.md` も `INDEPENDENT_REANSWER_COMPLETE / PASS` である。一方、次の旧進捗記録が残っている。

1. `12_vvvf_semiconductor.md`
   - 冒頭 `status: EXPLANATION_SOURCE_COMPLETE`
   - 進捗チェックで「練習問題source・練習PDF」「解説画像PowerPoint」「完成後の公式過去問独立再解答」が未完了
   - `次工程` が「解説PDFを作成する」のまま
2. `12_vvvf_semiconductor_practice.md`
   - `stage: PRACTICE_PDF_COMPLETE`
   - `次工程` が「解説画像PowerPointを作成する」のまま

したがって、実成果物とsource内進捗記録が不整合である。

技術本文、固定EXAM_ALIGNMENT、練習15問、正答、PDF/PPTX、独立再解答結果には修正要求なし。

## 最終判定

- 必須成果物: PASS
- 過去問対応品質ゲート: PASS
- 3段階例題: PASS
- 練習問題・完全解説: PASS
- 解説PDF・練習PDF・PowerPoint QA: PASS
- 完成後独立再解答: `7 / 7 PASS`
- 教材外補完: `0件`
- 固定範囲外追加: `0件`
- 進捗記録整合性: FAIL

結論: Topic 12は `NEEDS_REVISION / IN_PROGRESS`。`completed` へ進めない。次工程は主source・練習sourceの旧進捗記録だけを実成果物へ同期する。固定EXAM_ALIGNMENT、技術本文、問題・正答、PDF/PPTX、独立再解答結果は変更しない。