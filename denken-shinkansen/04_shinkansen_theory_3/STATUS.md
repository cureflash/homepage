# STATUS - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 状態

- active_series: `04_shinkansen_theory_3`
- exam_aligned_completed_topics: 3 / 14
- current_status: `topic_04_explanation_source_complete`
- last_completed_topic: `03 架線はただの銅線ではない`
- active_topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- next_start: Topic 04の確定済みsourceを正本として解説PDFを作成し、全ページ表示QAを行う

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
- [x] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習問題source・練習PDF
- [ ] 解説画像PowerPoint
- [ ] 完成後の公式過去問独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 04 `25,000Vでなぜ車体へ電気が飛ばない？` の解説本文＋3段階例題を完成した。

更新成果物:
- `topics/04_electric_field_capacitance/04_electric_field_capacitance.md`

本文で確定済みEXAM_ALIGNMENTの要求を次へ対応付けた。
- クーロン力の向き・重ね合わせ・未知電荷逆算
- 点電荷の電位、2点間電位差、電気的仕事
- `C=Q/V`、`C=εS/d`、`ε=ε0εr`
- 誘電体の面積方向部分挿入を並列容量として処理
- コンデンサ直列・並列合成
- 電源接続中のV一定、切離し後のQ保存
- つなぎ替え時の極性・節点電荷保存
- `U=1/2CV²=1/2QV=Q²/(2C)` の条件別使い分け

3段階例題:
- 基礎: 点電荷が作る電位
- 本試験標準: 電源切離し後に極板間距離を変更
- 複合・ひっかけ: 直列充電後に同極性並列へつなぎ替え、共通電圧・静電エネルギーを計算

境界は維持:
- 電束密度・ガウスの法則は追加しない
- 絶縁破壊電界、必要離隔距離、沿面距離、アーク、絶縁協調は追加しない
- RC過渡、容量性リアクタンス、RLC・交流位相は後続Topicへ送る
- 未確認の実車静電容量・電界強度・碍子寸法等を真値化しない

## 判定

Topic 04は `EXPLANATION_SOURCE_COMPLETE`。完成数は `3 / 14` のまま。次工程は解説PDF＋全ページ表示QA。