# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_explanation_pdf_complete`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。Topic 15は制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、完成後blind、Webカタログ、最終QAまで完了済み。

最終記録:
- `topics/15_regenerative_power/15_regenerative_power_final_qa.md`
- 判定: `PASS / COMPLETED`

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF生成、解説PDF QAまで完了した。Topic 16自体は未完了のため完成数は `15 / 22` のまま。

記録:
- `topics/16_short_circuit/16_short_circuit.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_20260919.md`
- `topics/16_short_circuit/16_short_circuit_preproduction_blind_clean_rerun_20260919.md`
- `topics/16_short_circuit/16_short_circuit_explanation.md`
- `topics/16_short_circuit/16_short_circuit_explanation.pdf`
- `topics/16_short_circuit/16_short_circuit_explanation_pdf_qa.md`

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

平成21年度二次問6は、初回blindで第三者解説の解答表示を先に見たため2答案要素をblind-validへ算入せず、clean rerunを実施した。公式問題文・系統図・インピーダンス表だけから再計算し、CB3開放 `6.08 kA`、CB3投入 `10.3 kA`、`2 / 2 PASS` を確定済み。

### 解説source

- MASTER SPEC最低構成: `PASS`
- 3段階例題: `3 / 3 PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- 過去問逆算の固定10説明項目: `10 / 10`
- 三相短絡 / 一線地絡 / 線間短絡 / 二線地絡: 収録
- 故障位置―短絡電流の教材用仮定データ: 収録

### 解説PDF / QA

- A4縦: `6ページ`
- ファイルサイズ: `10463 bytes`
- Git blob SHA-1: `cc7fa719275a8b74fed7f370583eadd96f9977fb`
- SHA-256: `a7af60c8169ad998f38221bb026cfd00be95a9b94f809e5a229c9ba4bbbdc42d`
- PDFium 200 dpi: `6 / 6 PASS`
- Poppler表示: `6 / 6 PASS`
- ページ外逸脱 / 文字重なり / 本文切れ: `0件`
- 黒四角 / 欠損グリフ: `0件`
- 文字抽出: `PASS`
- 数式 / 表 / 単位 / 対称分回路: `PASS`
- 故障位置―短絡電流グラフ: `PASS`
- 3段階例題: `3 / 3 PASS`
- 固定10説明項目: `10 / 10 PASS`
- 固定5問・23答案要素: `23 / 23 covered`
- 数値独立再計算: `PASS`
- 判定: `PASS / topic_16_explanation_pdf_complete`

組込みCIDフォントはFontDescriptor非保持の警告が出るが、PDFium / Popplerの両方で全6ページの日本語表示を確認し、`pdftotext`でも抽出可能。表示・収録QA上の欠損はない。

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
- 解説source固定答案要素: `23 / 23 covered`
- 解説PDF固定答案要素: `23 / 23 covered`
- 固定10説明項目: `10 / 10 PASS`
- 周辺問題による件数水増し: `0件`
- Topic 17保護リレー・遮断器定格・保護協調先取り: `0件`
- Topic 18雷サージ先取り: `0件`
- Topic 20安定度先取り: `0件`
- Topic 21系統運用先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [x] Topic 11 completed
- [x] Topic 12 completed
- [x] Topic 13 completed
- [x] Topic 14 completed
- [x] Topic 15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source完了 / 解説PDF＋QA `PASS` / 次は練習source

## next_start

固定5問・23答案要素、固定10説明項目、仮定値/実値境界を変更せず、Topic 16の練習問題sourceを作成する。二種一次型に加え、固定範囲に対応する二次記述型を含め、途中式・前提・単位・理由説明まで採点可能な形にする。練習PDF、PowerPoint、完成後blind、Topic 17以降はまだ行わない。
