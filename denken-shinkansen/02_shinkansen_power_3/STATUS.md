# STATUS - 新幹線・電験三種「電力」

更新日: 2026-09-15

## 状態
- active_series: `02_shinkansen_power_3`
- exam_aligned_completed_topics: 6 / 16
- current_status: `topic_07_independent_reanswer_complete`
- last_completed_topic: `06 275,000Vをどうやって25,000Vにする？`
- active_topic: `07 なぜ三相交流をそのまま架線へ流さない？`
- next_start: Topic 07最終QAを行い、必須成果物・改定EXAM_ALIGNMENT・独立再解答・表示QA・SPEC境界・進捗整合をまとめて判定する

## 新品質ゲート進捗
- [x] 01 新幹線の電気はどこから来る？ — completed
- [x] 02 上越新幹線を水の力で走らせる — completed
- [x] 03 JR東日本はなぜ火力発電所まで持っている？ — completed
- [x] 04 東京―佐世保「原子力新幹線」 — completed
- [x] 05 新幹線を再エネだけで走らせられる？ — completed
- [x] 06 275,000Vをどうやって25,000Vにする？ — completed
- [ ] 07 なぜ三相交流をそのまま架線へ流さない？ — 必須成果物完成。初回完成後独立再解答は公式解答 `8 / 8` 一致だが教材のみ完結 `2 / 8` で `NEEDS_REVISION`。EXAM_ALIGNMENT再監査で固定対象を3問へ見直し、改定3問の完成後独立再解答は `(3),(3),(4)` で公式解答と `3 / 3 PASS`、教材のみ完結 `3 / 3 PASS`、教材外知識補完0件。主sourceへ同期済み
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

### 初回EXAM_ALIGNMENTとFAIL理由
初回固定5問・8小問:
- R7下 理論 問15(a)(b)
- R5下 理論 問15(a)(b)
- R4上 機械 問9
- H30 電力 問8
- H27 機械 問7

初回完成後独立再解答は公式解答と `8 / 8` 一致したが、教材のみ完結は `2 / 8`。

教材外補完を要した内容:
- R7下 理論 問15(a)(b): 並列RLCの無効電流相殺と有効電力処理
- R5下 理論 問15(a)(b): 力率とインピーダンス分解
- H27 機械 問7: Δ-Y/Y-Δの一次・二次30°位相差

これらはTopic 07固定範囲外であり、問題を通すためだけの仕様追加は行わない。

### EXAM_ALIGNMENT再監査
R8上〜H18の第三種三相交流問題、スコット結線、三相変圧器候補を再確認した。RLC、力率改善、Δ-Y等価変換、二電力計、複素量・厳密ベクトル等、Topic 07固定範囲外の中間知識を必要とする問題は固定対象にしない。

現行SPEC固定範囲へ直接対応し、完成教材だけで完答できる公式過去問として確認できた3問を改定品質ゲートとする。

- R4上 機械 問9 — スコット結線・二次90°
- H30 電力 問8 — 変圧比・三相電力
- H22 理論 問9 — Y結線・線間/相関係・三相電力・中性線電流

`MASTER_SPEC.md` の「該当問題が5問未満しか確認できない場合は確認できた全件を対象」とする例外を適用する。

- 改定品質ゲート: `3問 / 3解答項目`
- SPEC固定範囲変更: `0件`
- 固定範囲外教材追加: `0件`

### 改定完成後独立再解答
保存済み正答・再監査記録・初回独立再解答記録・公式解答を先に見ず、公式問題文と完成教材だけで解法・解答を確定した後、公式解答と照合した。

- R4上 機械 問9: `(3)` / 公式 `(3)` / PASS
- H30 電力 問8: `(3)` / 公式 `(3)` / PASS
- H22 理論 問9: `(4)` / 公式 `(4)` / PASS

集計:
- 公式解答一致: `3 / 3 PASS`
- 教材のみ完結: `3 / 3 PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`

H30電力問8の変圧比は完成済みTopic 06の `V1/V2=N1/N2` を使用し、Topic 07の `P=√3 V_L I_L cosφ` と接続した。H22理論問9は `P=3V_phaseI_phase` と比較して選択肢(4)を誤りと判定した。

改定再解答結果は主sourceのEXAM_ALIGNMENT・状態欄・成果物QA・次工程へ同期済み。

Topic 07固定範囲は三相交流、単相交流、線間/相電圧、三相電力、き電用変圧器、相変換、三相側負荷平衡、スコット結線、変形ウッドブリッジ結線、ルーフ・デルタ結線。二種相当の厳密ベクトル導出、Topic 08以降の電圧降下・線路損失・き電回路詳細、Topic 10の力率改善、Topic 11の短絡・保護へは拡張していない。未確認の個別設備定格・配置も実値化していない。

## 次
Topic 07最終QAを実施し、必須成果物、改定EXAM_ALIGNMENT、独立再解答 `3 / 3 PASS`、既存表示QA、SPEC境界、source・STATUS・HANDOFFの進捗整合を確認する。
