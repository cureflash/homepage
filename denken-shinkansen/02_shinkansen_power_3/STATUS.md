# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 6 / 16
- current_status: `topic_07_final_qa_needs_revision`
- last_completed_topic: `06 275,000Vをどうやって25,000Vにする？`
- active_topic: `07 なぜ三相交流をそのまま架線へ流さない？`
- next_start: PowerPoint Slide 4・PowerPoint QA・練習PDF QAの旧5問対応を改定3問へ同期し、PowerPoint表示QAを再実施する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — completed
- [x] 02 上越新幹線を水の力で走らせる — completed
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — completed
- [x] 04 東京―佐世保「原子力新幹線」 — completed
- [x] 05 新幹線を再エネだけで走らせられる？ — completed
- [x] 06 275,000Vをどうやって25,000Vにする？ — completed
- [ ] 07 なぜ三相交流をそのまま架線へ流さない？ — 改定EXAM_ALIGNMENT 3問の完成後独立再解答は `3 / 3 PASS`、教材外知識補完0件。最終QAでPowerPoint Slide 4・PowerPoint QA・練習PDF QAが旧5問対応のままと判明し `NEEDS_REVISION`
- [ ] 08 新幹線の変電所はなぜ数十kmおき？
- [ ] 09 変電所からパンタグラフまでどう送る？
- [ ] 10 新幹線が突然大電力を使ったら？
- [ ] 11 架線事故ではどうやって電気を止める？
- [ ] 12 320km/hでもパンタグラフが離れないのはなぜ？
- [ ] 13 新幹線の架線は何でできている？
- [ ] 14 駅やトンネルにはどう電気を配る？
- [ ] 15 回生した電気はどこへ行く？
- [ ] 16 発電所からN700Sまで全部つないでみる

## Topic 07 進捗記録
source: `topics/07_phase_conversion/07_phase_conversion.md`
EXAM_ALIGNMENT再監査: `topics/07_phase_conversion/07_phase_conversion_exam_alignment_reaudit.md`
解説PDF: `topics/07_phase_conversion/07_phase_conversion_explanation.pdf`
練習PDF: `topics/07_phase_conversion/07_phase_conversion_practice.pdf`
練習PDF QA: `topics/07_phase_conversion/07_phase_conversion_practice_qa.md`
解説画像PowerPoint: `topics/07_phase_conversion/07_phase_conversion_images.pptx`
PowerPoint QA: `topics/07_phase_conversion/07_phase_conversion_powerpoint_qa.md`
初回独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer.md`
改定独立再解答: `topics/07_phase_conversion/07_phase_conversion_independent_reanswer_revised.md`
最終QA: `topics/07_phase_conversion/07_phase_conversion_final_qa.md`

## 現行EXAM_ALIGNMENT
品質ゲートは現行SPEC固定範囲へ直接対応する次の3問。

- R4上 機械 問9 — スコット結線・二次90°
- H30 電力 問8 — 変圧比・三相電力
- H22 理論 問9 — Y結線・線間/相関係・三相電力・中性線電流

改定完成後独立再解答:
- R4上 機械 問9: `(3)` / 公式 `(3)` / PASS
- H30 電力 問8: `(3)` / 公式 `(3)` / PASS
- H22 理論 問9: `(4)` / 公式 `(4)` / PASS

集計:
- 公式解答一致: `3 / 3 PASS`
- 教材のみ完結: `3 / 3 PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`

## 最終QA結果
判定: `NEEDS_REVISION`。

PASS:
- 必須成果物の実在
- 改定EXAM_ALIGNMENT 3問
- 改定完成後独立再解答 `3 / 3 PASS`
- 解説PDF・練習PDF・PowerPointの既存表示QA
- SPEC境界

要修正:
1. `07_phase_conversion_powerpoint_qa.md` が旧固定5問・8小問を正本としており、Slide 4も旧5問対応表のまま。
2. `07_phase_conversion_practice_qa.md` の「固定過去問への接続」が旧5問のまま。
3. PowerPoint QA末尾の次工程が「固定5問・8小問の独立再解答」のままで現在地と不一致。

旧固定対象から除外済み:
- R7下 理論 問15(a)(b) — RLCの無効電流相殺等が必要
- R5下 理論 問15(a)(b) — 力率とインピーダンス分解が必要
- H27 機械 問7 — Δ-Y/Y-Δ位相差30°が必要

これらを通すための仕様追加はしない。

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

## 次
PowerPoint Slide 4の過去問対応表を改定3問へ同期し、PowerPoint QAを再実施する。同時に練習PDF QAの過去問対応記録を改定3問へ同期する。問題数や教材範囲は勝手に増やさない。その後、Topic 07最終QAを再判定する。
