# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `25kV架線を一つの等価回路にする` は `completed`。

Topic 02 `架線は長くなるとなぜ電圧が落ちる？` は `completed`。

Topic 03 `25kV架線の周囲にはどんな電界ができる？` は `completed`。

Topic 04 `架線と車体は巨大なコンデンサなのか？` は最終QA再実施まで完了し、`PASS / completed`。固定一次5問・22小問の独立再解答 `22 / 22 PASS`、二次R7〜R5は固定範囲への直接対応なしで数合わせなし。source進捗記録もcompletedへ同期し、Webカタログへ登録した。

完成数: `4 / 21`

current_status: `topic_04_completed`

active_topic: `05 0系主変圧器の鉄心には何が起きている？`

## Topic 04 固定EXAM_ALIGNMENT

品質ゲート対象は一次「理論」5問・22小問。

- R6 問1 (1)〜(5): 二層誘電体の平行板コンデンサ、`D=εE`、各層電界、最大印加電圧
- R5 問1 (1)〜(5): 同軸円筒の電界・静電容量、半径方向に変化する誘電率
- R3 問1 (1)〜(5): 二層誘電体の `D`・`E`・電圧、静電エネルギー
- H27 問1 (1)〜(2): 同軸円筒の `D(r)`、電位積分、単位長さ当たり静電容量
- H24 問5 (1)〜(5): 平行板、複数容量、電荷保存、静電エネルギー

完成後独立再解答は `22 / 22 PASS`。教材外知識補完 `0件`、固定範囲外論点追加 `0件`、二次数合わせ `0件`。

R7一次問1は中心解法が電気影像法でSPEC外のため非採用。H27問1(3)〜(5)の導電率・電流密度・コンダクタンスも固定範囲外のため非採用。

二次試験はR7〜R5の「電力・管理」「機械・制御」を確認したが、Topic 04固定範囲を直接問う問題は採用なし。R5電力・管理の力率改善用コンデンサは無効電力・配電電圧計算が主題で別論点。`08 理論・二種` は一次理論中心なので二次数合わせはしない。

## Topic 04 成果物

- source: `topics/04_catenary_capacitance/04_catenary_capacitance.md`
- 解説PDF: `topics/04_catenary_capacitance/04_catenary_capacitance_explanation.pdf`
- 練習source: `topics/04_catenary_capacitance/04_catenary_capacitance_practice.md`
- 練習PDF: `topics/04_catenary_capacitance/04_catenary_capacitance_practice.pdf`
- 解説画像PowerPoint: `topics/04_catenary_capacitance/04_catenary_capacitance_images.pptx`
- 完成後独立再解答: `topics/04_catenary_capacitance/04_catenary_capacitance_independent_reanswer.md`
- 最終QA: `topics/04_catenary_capacitance/04_catenary_capacitance_final_qa.md`

全必須成果物、表示QA、計算QA、過去問対応品質ゲート、source整合、Webカタログ登録まで完了。

## 今回の更新

Topic 04の最終QAを再実施した。

1. source 2ファイルの進捗記録同期を再確認。
2. 固定一次5問・22小問の独立再解答 `22 / 22 PASS` を再確認。
3. 解説PDF・練習PDF・PowerPointの既存表示QA、練習12問計算QA、SPEC境界を再確認。
4. 全件PASSのため `completed` とし、完成数を `4 / 21` へ更新。
5. 同じcheckpointでWebカタログへTopic 04を登録。

## 次に行うこと

Topic 05 `0系主変圧器の鉄心には何が起きている？` の制作前EXAM_ALIGNMENTを実施する。

系列SPECの固定範囲は、アンペアの周回積分、磁界、磁束密度、磁束、透磁率、起磁力、磁気抵抗、磁気回路、B-H曲線、ヒステリシス、磁気エネルギー。変圧器等価回路は機械編へ譲り、本Topicへ追加しない。

二種一次・二次の公式過去問を直近年度優先で確認し、固定範囲へ直接対応する問題だけを品質ゲート対象として固定する。