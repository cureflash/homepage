# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の完成後独立再解答を実施し、`topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md` へ記録した。

固定5問・8小問は公式解答と `8 / 8` 一致したが、完成教材だけで完結できたのは `2 / 8`。R7下理論問15(a)(b)は並列RLCの相殺・有効電力、R5下理論問15(a)(b)は力率とインピーダンスの関係、H27機械問7はΔ-Y/Y-Δの30°位相差が現在の学習用教材にないため、合計6小問で教材外知識補完が必要だった。

`EXAM_ALIGNMENT_SPEC.md` は教材外知識で補って解いた場合をFAILとするため、判定は `NEEDS_REVISION`。Topic 07は `completed` にしていない。固定過去問を通すためだけのSPEC外追加も行っていない。

## 現在状態
- `current_status`: `topic_07_independent_reanswer_needs_revision`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- source: `topics/07_phase_conversion/07_phase_conversion.md`
- 解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
- 練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
- 練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
- 解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
- PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
- 独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`

## Topic 07 固定過去問と完成後判定
1. R7下 理論 問15(a)(b) — 独立解答 `(3),(3)` / 公式 `(3),(3)` / 教材のみ `FAIL, FAIL`
2. R5下 理論 問15(a)(b) — 独立解答 `(3),(4)` / 公式 `(3),(4)` / 教材のみ `FAIL, FAIL`
3. R4上 機械 問9 — 独立解答 `(3)` / 公式 `(3)` / 教材のみ `PASS`
4. H30 電力 問8 — 独立解答 `(3)` / 公式 `(3)` / 教材のみ `PASS`
5. H27 機械 問7 — 独立解答 `(3)` / 公式 `(3)` / 教材のみ `FAIL`

公式解答との一致: `8 / 8`
教材のみ完結: `2 / 8`
教材外知識補完が必要: `6 / 8`
SPEC固定範囲外追加: `0件`

## FAIL理由
- R7下 理論 問15(a)(b): 並列L/Cの無効電流相殺 `ωL=1/(ωC)` と並列RLCの有効電力処理がTopic 07の学習用教材にない。
- R5下 理論 問15(a)(b): `|Z|=V/I`、`cosφ=R/|Z|` からR/Xを求める中間知識がTopic 07の学習用教材にない。
- H27 機械 問7: Δ-Y/Y-Δの一次二次位相差30°がTopic 07の学習用教材にない。スコット結線部分だけでは誤り肢を一意に確定できない。

不足事項はいずれもTopic 07固定範囲そのものではないため、今回の品質ゲート通過だけを目的に教材へ追加していない。

## Topic 07 SPEC固定範囲
- 三相交流
- 単相交流
- 線間電圧
- 相電圧
- 三相電力
- き電用変圧器
- 相変換
- 三相側の負荷平衡
- スコット結線
- 変形ウッドブリッジ結線
- ルーフ・デルタ結線

理解目標は、三相から単相2回路を取り出す理由、各結線の目的、三相側不平衡の抑制、スコット結線の基本電圧関係、変形ウッドブリッジ・ルーフデルタが新幹線で使われる理由の概略まで。二種相当の厳密ベクトル導出は行わない。

境界:
- Topic 08以降の電圧降下・線路損失・き電回路詳細へ広げない
- Topic 10の力率改善へ広げない
- Topic 11の短絡・保護へ広げない
- 変形ウッドブリッジ結線・ルーフ・デルタ結線は概略に留める
- 未確認の個別新幹線変電所の結線・定格・配置を実値化しない

## 既存成果物QA
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦3ページ・全12問・全問五肢択一、数値問題独立再計算 `8 / 8 PASS`、表示QA・文字抽出QA・正答一意性PASS
- 解説画像PowerPoint: 16:9・4枚、全4枚表示QA、境界外はみ出し0件、PPTX ZIP整合性PASS
- SPEC固定範囲外追加: 0件

## 次の正確な開始点
Topic 07のEXAM_ALIGNMENTを再監査する。教材外補完を要したR7下理論問15、R5下理論問15、H27機械問7について、Topic 07のSPEC固定範囲内だけで完答できる公式過去問への差替え、または固定対象の見直しが可能かを直近年度から確認する。固定範囲は拡張しない。