# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は `completed`。

Topic 03 `25kV架線の周囲にはどんな電界ができる？` は、制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。最終QAのみ未実施。

完成数: `2 / 21`

current_status: `topic_03_independent_resolve_complete`

active_topic: `03 25kV架線の周囲にはどんな電界ができる？`

## Topic 03 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」6問・21小問。

- R8 問1 (1)〜(3): 球対称の体積電荷分布、ガウスの法則、`F=qE`
- R5 問1 (1): 同軸円筒間の電界
- R4 問1 (1)〜(5): 球・球殻の包有電荷、領域別電界、電位
- H30 問1 (1)〜(4): 点電荷の電界成分、重ね合わせ
- H23 問1 (1)〜(3): 円筒ガウス面、電位の積分、最大電界
- H21 問1 (1)〜(5): クーロン力、電界合成、電界0条件

二次試験も確認対象に含めたが、本Topic固定範囲だけで静電界解析を直接問う問題は採用していない。`08 理論・二種` は一次理論中心であり、数合わせで二次形式や絶縁設計、誘電体、静電容量、高電圧設備等を追加しない。

R7の電気影像法・静電容量、R6の誘電体入りコンデンサ、R2の影像電荷等もSPEC外またはTopic 04のため除外した。この判断は変更しない。

## 成果物

EXAM_ALIGNMENT・解説本文 source:
`topics/03_catenary_electric_field/03_catenary_electric_field.md`

解説PDF:
`topics/03_catenary_electric_field/03_catenary_electric_field_explanation.pdf`

練習 source:
`topics/03_catenary_electric_field/03_catenary_electric_field_practice.md`

練習PDF:
`topics/03_catenary_electric_field/03_catenary_electric_field_practice.pdf`

解説画像PowerPoint:
`topics/03_catenary_electric_field/03_catenary_electric_field_images.pptx`

完成後独立再解答記録:
`topics/03_catenary_electric_field/03_catenary_electric_field_independent_resolve.md`

既存PDF・PowerPointは作成時に全ページ／全スライド表示QA済み。PowerPointはoverflow検査もPASS済み。

## 完成後独立再解答

完成済み教材に収録された式・解法手順だけを使い、保存済み正答との照合は解答導出後に実施した。

- R8 問1 (1)〜(3): 3/3 PASS
- R5 問1 (1): 1/1 PASS
- R4 問1 (1)〜(5): 5/5 PASS
- H30 問1 (1)〜(4): 4/4 PASS
- H23 問1 (1)〜(3): 3/3 PASS
- H21 問1 (1)〜(5): 5/5 PASS
- 合計: 21/21 PASS

教材外知識による補完なし。固定範囲内の欠落なし。SPEC外論点の追加なし。

判定: `topic_03_independent_resolve_complete`

## 次に行うこと

Topic 03の最終QAを行う。

確認対象:
- 必須成果物がGitHub正本に存在すること
- source、解説PDF、練習PDF、PowerPoint、独立再解答記録の内容が相互に矛盾しないこと
- 一次6問・21小問のEXAM_ALIGNMENTと21/21 PASSが記録されていること
- 二次試験の確認判断が維持されていること
- 影像法、静電容量、誘電体、静電エネルギー、絶縁設計などSPEC外論点が混入していないこと
- 既存表示QA記録が揃っていること

全件PASSした場合のみTopic 03を `completed` にし、完成数を `3 / 21` に更新する。
