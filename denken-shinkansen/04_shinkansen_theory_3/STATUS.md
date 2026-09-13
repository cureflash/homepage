# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 3 / 14
- current_status: `topic_04_exam_alignment_complete`
- last_completed_topic: `03 架線はただの銅線ではない`
- active_topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- next_start: Topic 04の確定済みEXAM_ALIGNMENTだけを根拠に、解説本文＋3段階例題を作成する

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

## Topic 04 進捗

- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] GitHub上のSTATUS / HANDOFF / 既存成果物確認
- [x] 直近年度を優先して公式理論過去問を確認
- [x] Topic 04固定範囲でゲート対象6問を確定
- [x] 固定範囲外の近接論点を境界整理
- [x] e-sysnet・電験王の説明粒度を確認
- [x] source MarkdownへEXAM_ALIGNMENTと教材必須説明を固定
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` の制作前EXAM_ALIGNMENTを実施した。

追加成果物:
- `topics/04_electric_field_capacitance/04_electric_field_capacitance.md`

ゲート対象公式過去問:
- 令和8年度上期 理論 問1: 平行板コンデンサ、電源切離し後の電荷保存、静電エネルギー
- 令和8年度上期 理論 問2: 点電荷の電位、2点間電位差
- 令和8年度上期 理論 問6: コンデンサ直列→切離し→同極性並列、電荷保存
- 令和7年度下期 理論 問1: 誘電体部分挿入、面積方向の並列容量
- 令和7年度下期 理論 問2: クーロン力、複数点電荷、未知電荷逆算
- 令和7年度上期 理論 問1: 充電済みCと未充電2Cの並列接続、静電エネルギー

境界:
- 電束密度・ガウスの法則は完成ゲートへ追加しない
- 絶縁破壊電界、必要離隔距離、沿面距離、アーク、絶縁協調は追加しない
- RC過渡、容量性リアクタンス、RLC・交流位相は後続Topicへ送る
- 未確認の実車静電容量・電界強度・碍子寸法等を真値化しない

## 判定

Topic 04は `EXAM_ALIGNMENT_COMPLETE`。完成数は `3 / 14` のまま。次工程は解説本文＋3段階例題。