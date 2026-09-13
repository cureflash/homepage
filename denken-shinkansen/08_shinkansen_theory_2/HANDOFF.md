# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は `completed`。

Topic 03 `25kV架線の周囲にはどんな電界ができる？` は `completed`。制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答、最終QAまで完了した。前回最終QAで検出した練習source文字破損2箇所と解説sourceの進捗記録不整合は修正済みで、最終QA再実施は全件PASS。

完成数: `3 / 21`

current_status: `topic_03_completed`

active_topic: `04 架線と車体は巨大なコンデンサなのか？`

## Topic 03 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」6問・21小問。

- R8 問1 (1)〜(3): 球対称の体積電荷分布、ガウスの法則、`F=qE`
- R5 問1 (1): 同軸円筒間の電界
- R4 問1 (1)〜(5): 球・球殻の包有電荷、領域別電界、電位
- H30 問1 (1)〜(4): 点電荷の電界成分、重ね合わせ
- H23 問1 (1)〜(3): 円筒ガウス面、電位の積分、最大電界
- H21 問1 (1)〜(5): クーロン力、電界合成、電界0条件

二次試験も確認対象に含めたが、本Topic固定範囲だけで静電界解析を直接問う問題は採用していない。`08 理論・二種` は一次理論中心であり、数合わせで二次形式や絶縁設計、誘電体、静電容量、高電圧設備等を追加していない。

R7の電気影像法・静電容量、R6の誘電体入りコンデンサ、R2の影像電荷等もSPEC外またはTopic 04のため除外した。この判断は変更していない。

## Topic 03 成果物

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

最終QA記録:
`topics/03_catenary_electric_field/03_catenary_electric_field_final_qa.md`

## Topic 03 完成後独立再解答

- R8 問1 (1)〜(3): 3/3 PASS
- R5 問1 (1): 1/1 PASS
- R4 問1 (1)〜(5): 5/5 PASS
- H30 問1 (1)〜(4): 4/4 PASS
- H23 問1 (1)〜(3): 3/3 PASS
- H21 問1 (1)〜(5): 5/5 PASS
- 合計: 21/21 PASS

教材外知識による補完なし。固定範囲内の欠落なし。SPEC外論点の追加なし。

## 今回の更新

Topic 03の最終QAを再実施し、`PASS / completed` とした。

- 必須成果物をGitHub正本で再確認
- 過去問独立再解答21/21 PASSを再確認
- 二次試験の確認・非採用判断を維持
- 練習source文字破損修正済み、練習PDF再生成・全4ページ表示QA PASSを再確認
- 解説PDF表示QA、PowerPoint表示QA・overflow検査PASSを確認
- 解説sourceの状態欄・末尾品質判定を完成状態へ同期
- 完成数を `3 / 21` に更新

教材本文、過去問対応範囲、正答、例題、二次試験の非採用判断は変更していない。新規論点・仕様追加なし。

## 次に行うこと

Topic 04 `架線と車体は巨大なコンデンサなのか？` の制作前EXAM_ALIGNMENTから開始する。

1. `MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`を再確認する。
2. 二種一次・二次の公式過去問を直近年度から確認する。
3. Topic 04固定範囲の静電容量・平行板コンデンサ・円筒導体の基本・合成容量・誘電率・誘電体・分極・静電エネルギーだけで直接対応する問題を選定する。
4. 二次は直接対応問題が確認できる場合のみ採用し、数合わせで仕様外論点を追加しない。
5. 制作前独立検証を通過してから本文制作へ進む。
