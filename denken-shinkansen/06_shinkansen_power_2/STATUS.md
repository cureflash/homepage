# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_completion_blind_needs_revision`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。Topic 15は制作前EXAM_ALIGNMENT、制作前blind、解説source/PDF、練習source/PDF、PowerPoint、完成後blind、Webカタログ、最終QAまで完了済み。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、解説画像PowerPoint＋QA、完成後blindまで実施した。完成後blindで一次過去問の教材未収録知識が判明したため `NEEDS_REVISION`。Topic 16自体は未完了で、完成数は `15 / 22` のまま。

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
- `topics/16_short_circuit/16_short_circuit_completion_blind_20260919.md`

### 正式品質ゲート

固定5問・23答案要素から変更なし。

制作前blind:
- 令和2年度一次「電力」問3: `5 / 5 PASS`
- 平成25年度一次「電力」問4: `5 / 5 PASS`
- 令和7年度二次「電力・管理」問2: `5 / 5 PASS`
- 令和3年度二次「電力・管理」問3: `6 / 6 PASS`
- 平成21年度二次「電力・管理」問6: `2 / 2 PASS`
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`

完成後blind:
- 候補解と公式解答の一致: `23 / 23`
- 二次: `13 / 13 PASS`
- 一次: `NEEDS_REVISION`
- 総合: `NEEDS_REVISION`

不足が確認された教材内説明:
- `電磁誘導障害` と電磁力・熱的ストレスの区別
- `遮断容量` と短絡容量の最小限の関係
- `BTB (Back to Back)` が交流短絡電流を直接通過させない意味
- `電圧階級` と系統分割を短絡容量抑制策として読むための最小限の説明

候補解が正しくても、教材未収録知識を文脈推測・外部知識で補ったものは上位仕様によりPASSとしない。

### PowerPoint / QA

- 16:9: `PASS`
- スライド数: `6 / 6`
- 200 dpi: `2667 x 1500`, `6 / 6 PASS`
- `slides_test.py`: `PASS / No overflow detected`
- 文字切れ / 重なり / 図形はみ出し: `0件`
- PDF文字抽出: `PASS / U+FFFD 0件`
- 固定10到達項目: `10 / 10 covered`
- 固定5問・23答案要素: 制作時マッピング上 `23 / 23 covered`、完成後blindで一次の実質不足を検出
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
- 解説source/PDF: 制作時マッピング `23 / 23 covered`
- 練習source/PDF: 制作時マッピング `23 / 23 covered`
- PowerPoint: 制作時マッピング `23 / 23 covered`
- 完成後blind: `NEEDS_REVISION`
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source/PDF `PASS` / 練習source/PDF `PASS` / PowerPoint `PASS` / 完成後blind `NEEDS_REVISION`

## next_start

固定5問・23答案要素を変更せず、完成後blindで検出した一次過去問対応の不足だけをlearner-facing成果物へ補う。Topic 17の遮断器定格選定・保護協調へは進めず、選択肢判定に必要な最小限の定義・関係だけを追加する。補正後にPDF/PPTの必要箇所を同期し、完成後blindを再実施する。Webカタログ登録・最終QA・Topic 17以降はまだ行わない。
