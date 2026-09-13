# STATUS - 新幹線・電験二種「電力」

更新日: 2026-09-13

## 状態
- active_series: `06_shinkansen_power_2`
- exam_aligned_completed_topics: `1 / 22`
- last_completed_topic: `01 新幹線を電力系統から見てみる`
- active_topic: `02 信濃川の水で新幹線を何本走らせられる？`
- current_status: `topic_02_final_qa_needs_revision`
- next_start: `02_hydropower.md` の進捗メタデータと完成後独立再解答結果だけを現状へ同期し、Topic 02 最終QAを再判定する

## Topic 02 品質ゲート
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 一次4問＋二次2問、計6問を正式選定
- [x] 二次論説記述1問＋二次記述計算1問を含む
- [x] 参考教材を複数系統確認
- [x] 制作前EXAM_ALIGNMENT
- [x] 制作前独立検証・公式解答照合 `6 / 6 PASS`
- [x] 解説本文9節＋3段階例題
- [x] 練習15問・完全解説
  - 一次型10問
  - 二次記述型5問
- [x] 練習問題独立再計算・一意解QA `15 / 15 PASS`
- [x] 解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後独立再解答 `6 / 6 PASS`
- [x] 教材外知識補完 `0件`
- [x] 最終QA実施
- [ ] 最終QA PASS

## Topic 02 最終QA
記録:
- `topics/02_hydropower/02_hydropower_final_qa.md`

判定:
- `NEEDS_REVISION`

PASS確認済み:
- 必須成果物はGitHub正本に存在
- 正式対象は R8/R7/R6/R5一次4問＋R5/R4二次2問
- 完成後独立再解答 `6 / 6 PASS`、教材外知識補完 `0件`
- 練習15問の独立QA `15 / 15 PASS`
- 解説PDF A4縦6ページ、既存全ページレンダリングQA済み
- 練習PDF A4縦6ページ、既存全ページレンダリングQA済み
- PowerPoint 16:9・4枚、既存レンダリング/overflow QA済み
- 固定範囲外の劣化診断、短絡計算、潮流計算等の追加なし
- 未確認の列車1本電力 `P_train` の数値化なし

未解消:
- 主source `topics/02_hydropower/02_hydropower.md` 冒頭が `explanation_complete` のまま
- 同sourceに「練習問題・PDF・PowerPoint・完成後独立再解答は未着手」と残っている
- 同source末尾の次段階が練習問題作成のまま

実在成果物・完成後QA記録と進捗メタデータが矛盾するため、成果物間同期の最終QAをPASSにしていない。教材本文や仕様範囲は変更不要。

## Topic 02 成果物
- `topics/02_hydropower/02_hydropower.md`
- `topics/02_hydropower/02_hydropower_practice.md`
- `topics/02_hydropower/02_hydropower_practice_qa.md`
- `topics/02_hydropower/02_hydropower_independent_reanswer.md`
- `topics/02_hydropower/02_hydropower_final_qa.md`
- `topics/02_hydropower/02_hydropower_explanation.pdf`
- `topics/02_hydropower/02_hydropower_practice.pdf`
- `topics/02_hydropower/02_hydropower_images.pptx`

## Topic 01
`completed`。最終QA PASS、完成後独立再解答 `5 / 5 PASS`、教材外知識補完 `0件`。
