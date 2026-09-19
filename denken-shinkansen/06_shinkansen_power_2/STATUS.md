# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_practice_pdf_complete`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。Topic 15は制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、完成後blind、Webカタログ、最終QAまで完了済み。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF生成・QA、練習問題source、練習PDF生成・QAまで完了した。Topic 16自体は未完了のため完成数は `15 / 22` のまま。

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

### 練習PDF / QA

- A4縦: `5ページ`
- ファイルサイズ: `17182 bytes`
- Git blob SHA-1: `575ed662bc4093d17116bfdbcd973f96b712231c`
- SHA-256: `ba274bce2d4e281b66859a72a9dec21d6983223b1bb7d3711db557a1483cd587`
- 収録問題: `15 / 15`
- 一次型五肢択一: `10 / 10`
- 二次型記述: `5 / 5`
- PDFium 200 dpi: `5 / 5 PASS`
- Poppler 150 dpi: `5 / 5 PASS`
- ページ外逸脱 / 文字重なり / 本文切れ: `0件`
- 黒四角 / 欠損グリフ: `0件`
- 文字抽出: `PASS`
- 数値独立再計算: `PASS`
- 一次型正答一意性: `10 / 10 PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- 固定10説明項目: `10 / 10 covered`
- 判定: `PASS / topic_16_practice_pdf_complete`

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
- 固定10説明項目: `10 / 10 covered`
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source/PDF `PASS` / 練習source/PDF `PASS` / 次はPowerPoint

## next_start

固定5問・23答案要素、固定10説明項目、仮定値/実値境界を変更せず、Topic 16の解説画像PowerPointを制作し、表示・内容・固定23答案要素カバレッジをQAする。完成後blind、Webカタログ、最終QA、Topic 17以降はまだ行わない。
