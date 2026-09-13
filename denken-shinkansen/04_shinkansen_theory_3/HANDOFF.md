# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない` は最終QAまでPASSし、`completed`。

- 完成数: `3 / 14`
- active topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- current status: `topic_03_completed`

## 今回進捗

Topic 03の最終QAを実施し、全品質ゲートを満たしたため `completed` とした。

追加成果物:
- `topics/03_catenary_resistance/03_catenary_resistance_final_qa.md`
- `STATUS.md`
- `HANDOFF.md`

最終QA結果:
- 必須成果物実在: PASS
- 公式過去問6問のEXAM_ALIGNMENT: PASS
- 解説PDF: A4縦3ページ、既実施200 dpi全ページ表示QA PASS、現行blob一致
- 練習PDF: A4縦6ページ、15問（基礎4 / 標準8 / 複合・応用3）、全問五肢択一・完全解説、既実施200 dpi全ページ表示QA PASS、現行blob一致
- PowerPoint: 16:9・7枚、全スライド表示QA・overflow検査 PASS、現行blob一致
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識の補完: `0件`
- 未確認実車値の真値化: `0件`
- SPEC範囲外の仕様追加: なし

判定: `COMPLETED`

## Topic 03 完成証跡

- source Markdown: `topics/03_catenary_resistance/03_catenary_resistance.md`
- 解説PDF: `topics/03_catenary_resistance/03_catenary_resistance_explanation.pdf`
- 練習source: `topics/03_catenary_resistance/03_catenary_resistance_practice.md`
- 練習PDF: `topics/03_catenary_resistance/03_catenary_resistance_practice.pdf`
- 解説画像PowerPoint: `topics/03_catenary_resistance/03_catenary_resistance_images.pptx`
- 独立再解答記録: `topics/03_catenary_resistance/03_catenary_resistance_exam_recheck.md`
- 最終QA: `topics/03_catenary_resistance/03_catenary_resistance_final_qa.md`

独立再解答:
1. 令和8年度上期 理論 問7 → `(4)` / 公式 `(4)`
2. 令和7年度下期 理論 問5 → `(1)` / 公式 `(1)`
3. 令和6年度下期 理論 問7 → `(4)` / 公式 `(4)`
4. 令和5年度上期 理論 問7 → `(3)` / 公式 `(3)`
5. 令和4年度下期 理論 問7 → `(2)` / 公式 `(2)`
6. 令和2年度 理論 問5 → `(4)` / 公式 `(4)`

## Topic 03 境界確認

追加していないもの:
- キルヒホッフ第1・第2法則
- 枝電流法
- 重ね合わせ
- テブナン・ノートン
- 最大電力供給
- 正弦波・実効値
- RLC・インピーダンス

未確認の新幹線架線材質・断面積・抵抗値・温度を実車値として置いていない。架線の張力・摩耗・機械強度・高速集電性能は、材料選定に電気抵抗以外の条件もあることを示す範囲に留めている。

## 次に行うこと

Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` の制作前EXAM_ALIGNMENTを行う。

系列SPECの固定範囲:
- 電荷
- クーロンの法則
- 電界・電気力線
- 電位・電位差・電気的な仕事
- 静電容量・コンデンサ
- 誘電体・誘電率
- 電界エネルギー
- 直列・並列コンデンサ

公式過去問を直近年度から確認し、要求知識・式・設問型・教材必須説明を固定する。後続Topicの論点や未確認実車値を追加しない。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
