# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 3 / 14
- current_status: `topic_03_completed`
- last_completed_topic: `03 架線はただの銅線ではない`
- active_topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- next_start: Topic 04の制作前EXAM_ALIGNMENTを実施し、系列SPECの固定範囲だけで公式理論過去問・参考教材・教材必須説明を確定する

## Topic 01 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 02 進捗

- [x] EXAM_ALIGNMENT確定
- [x] 解説本文・解説PDF
- [x] 練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## Topic 03 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 03固定範囲でゲート対象6問を確定
- [x] Topic 05以降へ送る境界論点を整理
- [x] e-sysnet、電験王、電験三種まとめましたの説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [x] 解説本文＋3段階例題
- [x] 解説PDF
- [x] 練習問題source・練習PDF
- [x] 解説画像PowerPoint
- [x] 完成後の公式過去問独立再解答
- [x] 最終QA PASS

## 今回進めた内容

Topic 03 `架線はただの銅線ではない` の最終QAを実施した。

追加成果物:
- `topics/03_catenary_resistance/03_catenary_resistance_final_qa.md`

最終QA結果:
- 必須成果物実在: PASS
- 公式過去問6問のEXAM_ALIGNMENT: PASS
- 解説PDF: A4縦3ページ、既実施200 dpi全ページ表示QA PASS、現行blob一致
- 練習PDF: A4縦6ページ、15問（基礎4 / 標準8 / 複合・応用3）、全問五肢択一・完全解説、既実施200 dpi全ページ表示QA PASS、現行blob一致
- PowerPoint: 16:9・7枚、全スライド表示QA・overflow検査 PASS、現行blob一致
- 未確認実車値の真値化: 0件
- SPEC範囲外の仕様追加: なし
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識補完: `0件`

## 判定

Topic 03は `COMPLETED`。完成数を `3 / 14` とし、active topicをTopic 04 `25,000Vでなぜ車体へ電気が飛ばない？` へ移す。