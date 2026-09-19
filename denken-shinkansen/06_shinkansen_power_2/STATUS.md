# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_powerpoint_complete`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。Topic 15は制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、完成後blind、Webカタログ、最終QAまで完了済み。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、解説画像PowerPoint＋QAまで完了した。Topic 16自体は未完了のため完成数は `15 / 22` のまま。

記録:
- `topics/16_short_circuit/16_short_circuit.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_20260919.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_clean_rerun_20260919.md`
- `topics/16_short_circuit/16_short_circuit_explanation.md`
- `topics/16_short_circuit/16_short_circuit_explanation.pdf`
- `topics/16_short_circuit/16_short_circuit_explanation_pdf_qa.md`
- `topics/16_short_circuit/16_short_circuit_practice.md`
- `topics/16_short_circuit/16_short_circuit_practice.pdf`
- `topics/16_short_circuit/16_short_circuit_practice_pdf_qa.md`
- `topics/16_short_circuit/16_short_circuit_images.pptx`
- `topics/16_short_circuit/16_short_circuit_powerpoint_qa.md`

### 正式品質ゲート

固定5問・23答案要素から変更なし。

- 令和2年度一次「電力」問3: `5 / 5 PASS`
- 平成25年度一次「電力」問4: `5 / 5 PASS`
- 令和7年度二次「電力・管理」問2: `5 / 5 PASS`
- 令和3年度二次「電力・管理」問3: `6 / 6 PASS`
- 平成21年度二次「電力・管理」問6: `2 / 2 PASS`
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`
- 公式標準解答との照合: `23 / 23一致`

平成21年度二次問6は初回blind汚染後にclean rerunを実施し、公式問題だけからCB3開放 `6.08 kA`、CB3投入 `10.3 kA` を再計算して `2 / 2 PASS` を確定済み。

### PowerPoint / QA

- 16:9: `PASS`
- スライド数: `6 / 6`
- 200 dpi: `2667 x 1500`, `6 / 6 PASS`
- `slides_test.py`: `PASS / No overflow detected`
- 文字切れ / 重なり / 図形はみ出し: `0件`
- PDF文字抽出: `PASS / U+FFFD 0件`
- 固定10到達項目: `10 / 10 covered`
- 固定5問・23答案要素: `23 / 23 covered`
- 判定: `PASS / topic_16_powerpoint_complete`

## 固定範囲

- 短絡容量
- ％インピーダンス
- 単位法
- 正相・逆相・零相インピーダンス
- 三相短絡
- 一線地絡
- 線間短絡
- 二線地絡
- 対称座標法
- 故障種別―短絡電流
- 故障位置を変えた短絡電流の可視化

## 品質境界

- 固定EXAM_ALIGNMENT: `5問`（一次2・二次3）
- 固定答案要素: `23`（一次10・二次13）
- 制作前blind: `23 / 23 PASS`
- 公式標準解答照合: `23 / 23一致`
- 解説source/PDF: `23 / 23 covered`
- 練習source/PDF: `23 / 23 covered`
- PowerPoint: `23 / 23 covered`
- 固定10到達項目: `10 / 10 covered`
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source/PDF `PASS` / 練習source/PDF `PASS` / PowerPoint `PASS` / 次は完成後blind

## next_start

固定5問・23答案要素を変更せず、完成済みlearner-facing成果物だけを使ってTopic 16の完成後blind独立再解答を行う。Webカタログ登録・最終QA・Topic 17以降はまだ行わない。
