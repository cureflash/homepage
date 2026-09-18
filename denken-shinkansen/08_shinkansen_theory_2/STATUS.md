# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-19

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 18 / 21
- current_status: `topic_19_powerpoint_restored`
- last_completed_topic: `18 新幹線のセンサ信号をどう増幅する？`
- active_topic: `19 25kV・大電流をどう安全に測る？`
- next_start: Topic 19 主source進捗記録同期

## 完成済み

Topic 01〜18は、各テーマのEXAM_ALIGNMENT、必要成果物、完成後独立再解答、最終QAを通過し `PASS / completed`。

## Topic 19 固定EXAM_ALIGNMENT
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC確認
- [x] 固定範囲: 電圧計、電流計、内部抵抗、倍率器、分流器、電力計、CT、VT、変成比、電力量測定
- [x] 一次・二次を含む関連候補を直近年度から調査
- [x] R5 一次 理論 問8を採用
- [x] R1 一次 理論 問4を採用
- [x] H29 一次 理論 問4を採用
- [x] H25 一次 理論 問8を採用
- [x] H21 一次 理論 問6を採用
- [x] 品質ゲート対象を一次5問・25答案要素に固定
- [x] R8/R7/R6/R4/R3/R2の校正・ブリッジ系は固定範囲外またはTopic 20側として非採用
- [x] H20一次理論問6は測定誤差が主題のためTopic 20側として非採用
- [x] R8二次は2026-09-18時点で未実施
- [x] R7〜R1二次に固定範囲だけで完答する直接対応問題なし
- [x] 二次採用0問・二次数合わせ0件
- [x] Topic 20先取り0件
- [x] 実設備CT・VTの未確認実値追加0件

## Topic 19 制作進捗
- [x] 制作前EXAM_ALIGNMENT: `PASS / 一次5問・25答案要素`
- [x] 制作前blind独立再解答: `25 / 25 PASS`
- [x] 公式標準解答照合: `25 / 25`
- [x] 解説本文＋3段階例題: `PASS / EXPLANATION_SOURCE_COMPLETE`
- [x] 解説PDF＋表示QA: `PASS / EXPLANATION_PDF_COMPLETE`
- [x] 練習問題source＋練習PDF: `PASS / PRACTICE_PDF_COMPLETE`
- [x] 解説画像PowerPoint＋表示QA: `PASS / POWERPOINT_RESTORED`
- [x] 完成後独立再解答: `25 / 25 PASS`
- [x] 最終QA実施: `NEEDS_REVISION / FINAL_QA_BLOCKED`
- [ ] 主source進捗記録同期
- [ ] 最終QA再実施
- [ ] completed状態同期

## 今回進めた内容

Topic 19最終QA blockerのうち、欠落していたPowerPoint本体を復元し、表示・内容QAを再実施してGitHub正本へ戻した。

- PowerPoint: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_images.pptx`
- PowerPoint QA: `topics/19_high_voltage_current_measurement/19_high_voltage_current_measurement_powerpoint_qa.md`
- 16:9 / 6枚
- SHA-256: `7245837d236fb59360e0409906783e978d86477fcd71699dc532674a0c1f7faa`
- 200 dpi全スライド表示QA: `6 / 6 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `6ページ / PASS`
- PDF文字抽出QA: `PASS`
- SPEC固定範囲: `10 / 10可視化`
- 練習12問要求論点: `12 / 12接続`
- 固定一次5問・25答案要素: `25 / 25可視化`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 20先取り: `0件`
- 未確認実設備CT・VT値追加: `0件`

## 残 blocker

`19_high_voltage_current_measurement.md` の状態欄が `EXPLANATION_SOURCE_COMPLETE` / 次工程「解説PDF＋表示QA」のままで、現状と不一致。今回の一段階ではPowerPoint欠落だけを解消し、最終QAは再実施していない。

## 判定

`PASS / topic_19_powerpoint_restored / IN_PROGRESS`。

完成数は `18 / 21` のまま。次工程は主source進捗記録同期。
