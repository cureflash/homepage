# STATUS

updated: 2026-09-19
series: `06_shinkansen_power_2`
active_topic: `16`
theme: 25kV架線が短絡したら何kA流れる？
current_status: `topic_16_practice_source_resynced_after_completion_blind`
completed_topics: `15 / 22`

## Completed through Topic 15

Topic 01〜15は `completed`。

## Topic 16 current stage

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source/PDF、練習source/PDF、PowerPoint、完成後blindまで実施済み。補正前完成後blindでは固定5問・23答案要素の候補解自体は公式解答と `23 / 23` 一致し、二次は `13 / 13 PASS` だったが、一次固定2問の選択肢判定に必要なlearner-facing説明不足があり総合 `NEEDS_REVISION` となった。

解説source/PDFは前工程で補正済み。今回、固定5問・23答案要素とTopic 16固定範囲を変更せず、同じ不足5項目だけを練習sourceへ同期し、source QAを `PASS` とした。

練習sourceへ同期済み:
- `電磁誘導障害` と電磁力・熱的ストレスの区別
- `遮断容量` と短絡容量の最小限の大小関係
- `BTB (Back to Back)` の直流リンクと交流短絡電流非直接通過
- `電圧階級上昇 + 系統分割` と短絡容量抑制
- 短絡容量式の電圧は短絡点の基準線間電圧・故障前電圧であり、ボルト短絡後の故障点電圧ではないこと

練習source QA:
- 問題数: `15`
- 一次型五肢択一: `10`
- 二次型記述: `5`
- 固定5問・23答案要素: `23 / 23 covered`
- 固定10説明項目: `10 / 10 covered`
- 補正5項目: `5 / 5 covered`
- 一次型正答一意性: `10 / 10 PASS`
- 全数値の独立再計算: `PASS`
- 公式過去問転載追加: `0件`
- Topic 17以降先取り: `0件`
- 仕様追加: `0件`

練習PDFは旧版のままで、今回のsource補正はまだ同期していない。PowerPointも補正未同期、補正後の完成後blind clean rerunも未実施。Topic 16全体は `NEEDS_REVISION / IN_PROGRESS`、完成数は `15 / 22` のまま。

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

候補解が正しくても、教材未収録知識を外部知識・文脈推測で補ったものはPASSとしない。補正後完成後blindは、learner-facing成果物をすべて同期してからclean rerunする。

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
- 練習source: 補正同期・source QA `PASS`
- 練習PDF: 補正未同期
- PowerPoint: 補正未同期
- 完成後blind: 補正前 `NEEDS_REVISION` / clean rerun待ち
- 周辺問題による件数水増し: `0件`
- Topic 17以降先取り: `0件`
- 未確認実設備値の真値化: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## Gate checklist

- [x] Topic 01〜15 completed
- [ ] Topic 16 — 制作前EXAM_ALIGNMENT完了 / 制作前blind `23 / 23 PASS` / 解説source/PDF補正済み / 練習source補正済み / 練習PDF・PowerPoint同期待ち / 完成後blind再実施待ち

## next_start

補正済み `16_short_circuit_practice.md` を正本として練習PDFを再生成し、PDF表示・文字抽出・内容・数値・固定5問23答案要素・補正5項目カバレッジをQAする。固定5問・23答案要素を変更しない。PowerPoint、完成後blind clean rerun、Webカタログ、最終QA、Topic 17以降はまだ行わない。
