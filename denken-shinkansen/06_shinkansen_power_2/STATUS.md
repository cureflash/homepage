# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_explanation_pdf_resynced_after_completion_blind`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、完成後blindまで実施済み。完成後blindで一次固定2問の候補解自体は公式解答と一致したが、learner-facing成果物に一次選択肢判定用の説明不足があり `NEEDS_REVISION` となった。

固定5問・23答案要素を変更せず、解説sourceへ不足だけを補正済み。今回、その補正済みsourceから解説PDFを再生成し、表示・文字抽出・内容QAまで再実施して `PASS` とした。

解説PDFへ同期済み:
- `電磁誘導障害` と電磁力・熱的ストレスの区別
- `遮断容量` と短絡容量の最小限の関係
- `BTB (Back to Back)` の直流リンクと交流短絡電流非直接通過
- `電圧階級上昇 + 系統分割` と短絡容量抑制
- 短絡容量式の電圧は短絡点の基準線間電圧・故障前電圧であり、ボルト短絡後の故障点電圧ではないこと

解説PDF再QA:
- A4縦 `5ページ`
- PDFium 200 dpi: `5 / 5 PASS`
- Poppler: `5 / 5 PASS`
- ページ外逸脱 / 文字重なり / 本文切れ: `0件`
- `pdftotext -layout`: `PASS`
- U+FFFD: `0件`
- 固定10説明項目: `10 / 10 covered`
- 固定5問・23答案要素: `23 / 23 covered`

ただし、練習source/PDFとPowerPointは補正未同期であり、補正後の完成後blindも未実施。Topic 16全体はまだ `NEEDS_REVISION / IN_PROGRESS`、完成数は `15 / 22` のまま。

## 正式品質ゲート

固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・23答案要素。変更なし。

制作前blind:
- 一次: `10 / 10 PASS`
- 二次: `13 / 13 PASS`
- 合計: `23 / 23 PASS`

補正前完成後blind:
- 公式解答との候補一致: `23 / 23`
- 二次: `13 / 13 PASS`
- 一次: `NEEDS_REVISION`
- 総合: `NEEDS_REVISION`

候補解が正しくても、教材未収録知識を外部知識・文脈推測で補ったものはPASSとしない。補正後完成後blindは、残るlearner-facing成果物同期後にclean rerunする。

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

- 解説source: 補正済み
- 解説PDF: 補正同期・再QA `PASS`
- 練習source/PDF: 補正未同期
- PowerPoint: 補正未同期
- 完成後blind: 補正前 `NEEDS_REVISION` / clean rerun待ち
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source補正済み / 解説PDF再同期・QA PASS / 練習source/PDF・PowerPoint同期待ち / 完成後blind再実施待ち

## next_start

補正済み `16_short_circuit_explanation.md` と今回再同期した解説PDFを正本として、練習source/PDFへ一次選択肢判定に必要な最小限の補正を同期し、QAする。固定5問・23答案要素を変更しない。PowerPoint、完成後blind、Webカタログ、最終QA、Topic 17以降はまだ行わない。
