# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は6/16。Topic 01〜06は完成済み。active topicは07 `なぜ三相交流をそのまま架線へ流さない？`。

## 今回進捗
Topic 07の最終QAを実施した。必須成果物、改定EXAM_ALIGNMENT、改定完成後独立再解答 `3 / 3 PASS`、既存表示QA、SPEC境界を確認したが、試験対応表示とQA記録に旧EXAM_ALIGNMENTが残っているため `NEEDS_REVISION` とした。

最終QA記録:
`topics/07_phase_conversion/07_phase_conversion_final_qa.md`

## 最終QAで確認できたPASS項目
- 必須成果物はGitHub正本上に実在
- 改定品質ゲートはR4上機械問9・H30電力問8・H22理論問9の3問
- 改定完成後独立再解答 `(3),(3),(4)` は公式解答と `3 / 3 PASS`
- 教材のみ完結 `3 / 3 PASS`
- 教材外知識補完0件
- SPEC固定範囲外追加0件
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦3ページ・全12問五肢択一、200 dpi表示QA・文字抽出QA・正答一意性PASS、数値問題独立再計算 `8 / 8 PASS`
- PowerPoint: 16:9・4枚、既存表示QA・はみ出し・ZIP整合性PASS

## 最終QAで検出した残件
1. `07_phase_conversion_powerpoint_qa.md` が旧固定5問・8小問を正本としている。
2. PowerPoint Slide 4が旧5過去問への対応表のままで、再監査で除外したR7下理論問15、R5下理論問15、H27機械問7が残っている。
3. `07_phase_conversion_practice_qa.md` の「固定過去問への接続」も旧5問のまま。
4. PowerPoint QA末尾の次工程が「固定5問・8小問の独立再解答」のままで、改定再解答完了済みの現在地と不一致。

旧固定対象から除外した問題を通すために、RLC、力率とインピーダンス分解、Δ-Y/Y-Δ位相差30°を教材へ追加してはならない。

## 現在状態
- `current_status`: `topic_07_final_qa_needs_revision`
- 完成数: `6/16`
- last completed: Topic 06 `275,000Vをどうやって25,000Vにする？`
- active: Topic 07 `なぜ三相交流をそのまま架線へ流さない？`
- source: `topics/07_phase_conversion/07_phase_conversion.md`
- EXAM_ALIGNMENT再監査: `topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md`
- 解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
- 練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
- 練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
- 解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
- PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
- 初回独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`
- 改定独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer_revised.md`
- 最終QA: `topics/07_phase_conversion/07_phase_conversion_final_qa.md`

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

境界:
- 二種相当の厳密ベクトル導出を追加しない
- Topic 08以降の電圧降下・線路損失・き電回路詳細へ広げない
- Topic 10の力率改善へ広げない
- Topic 11の短絡・保護へ広げない
- 変形ウッドブリッジ結線・ルーフ・デルタ結線は概略に留める
- 未確認の個別新幹線変電所の結線・定格・配置を実値化しない

## 次の正確な開始点
PowerPoint Slide 4の過去問対応表を改定3問へ同期し、PowerPoint QAを再実施する。同時に練習PDF QAの過去問対応記録を改定3問へ同期する。問題数・教材範囲を追加しない。同期後、Topic 07最終QAを再判定する。
