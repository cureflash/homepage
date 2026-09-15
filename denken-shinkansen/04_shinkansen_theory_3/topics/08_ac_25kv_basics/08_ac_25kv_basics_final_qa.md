# Topic 08 最終QA記録

対象: `08 新幹線の交流25kVとは何なのか`

実施日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで最終QAを実施した。新しい仕様・固定範囲外論点は追加していない。

過去問対応品質ゲート、必須成果物、既存表示QA、SPEC境界はPASSしている。未完了理由は主source・練習sourceの進捗記録が実在成果物より古いことだけである。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `b3ed61c3865a45b8eb34be3c1d09808978e1285e` | PASS |
| 解説PDF | `71884f1f9bff2c875f9f28faeaadb76bc397dd2a` | PASS |
| 練習source | `46a16a0da5e365fd47f2cb7e7d642fcd4a9b1491` | PASS |
| 練習PDF | `d960b49387bb70273848e3df2cbca0e9acd42e1e` | PASS |
| 解説画像PowerPoint | `3219339e558ebe17e7f46e7939c6c35b884e4932` | PASS |
| 完成後独立再解答 | `37fbfdd3dc9b4498918507bc367f1329608d6edf` | PASS |

## 過去問対応品質ゲート

固定EXAM_ALIGNMENTは、系列SPECのTopic 08固定範囲だけで完結すると確認できた公式理論過去問4問。

1. 令和7年度上期 理論 問8 — 正弦波電流の瞬時値から指定値へ最初に到達する時刻
2. 令和6年度下期 理論 問8 — 位相・最大値が異なる同一周波数正弦波電圧の合成
3. 令和3年度 理論 問8 — 波形から最大値・周波数・位相を読み、純抵抗電流の瞬時値式を選択
4. 平成21年度 理論 問9 — 正弦波電流の瞬時値から指定値へ最初に到達する時刻

5問未満例外はMASTER_SPEC / EXAM_ALIGNMENT_SPECに従ったもので、RLC・力率・三相・非正弦波等で件数を水増ししていない。

完成後独立再解答は `(5), (3), (5), (1)` で公式解答と `4 / 4 PASS`。

- 教材外知識補完: `0問`
- RLC・リアクタンス・力率・三相・高調波等の後続Topic知識への依存: `0問`
- 非正弦波論点への依存: `0問`
- 未確認新幹線実車値への依存: `0問`

判定: PASS。

## 教材・成果物QA

- 3段階例題: 基礎 / 本試験標準 / 複合を収録 — PASS
- 練習問題: 15問、全問五肢択一、基礎4 / 標準8 / 複合3、独立再計算・再判定 `15 / 15 PASS`、正答一意性 `15 / 15 PASS`
- 解説PDF: A4縦2ページ、200 dpi全2ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4枚、既存進捗記録で表示QA `4 / 4 PASS`、overflow検査PASS、ZIP整合性PASS

判定: PASS。

## SPEC境界

次を完成ゲートへ追加していない。

- Topic 09のRLC、誘導性/容量性リアクタンス、インピーダンス、共振
- Topic 10の有効・無効・皮相電力、力率
- Topic 11の三相交流、Y・Δ、線間/相電圧
- Topic 12以降の半導体、整流、PWM、高調波
- 非正弦波の波形率・波高率、三角波・方形波比較
- 新幹線の周波数切替・50/60Hz対応
- 未確認の新幹線実車値

判定: PASS。

## 進捗記録整合性

ここだけFAIL。

主source `08_ac_25kv_basics.md` は、実際には解説PDF、練習PDF、PowerPoint、完成後独立再解答まで存在するのに、冒頭statusが `EXPLANATION_SOURCE_COMPLETE` のままで、§23も「解説PDF・練習・PowerPoint: 未着手」「完成後独立再解答: 未実施」「次工程: 解説PDF作成」と記録している。

練習source `08_ac_25kv_basics_practice.md` も、実際にはPowerPoint・完成後独立再解答まで完了しているのに、stageが `PRACTICE_PDF_COMPLETE` のままである。

教材本文、固定EXAM_ALIGNMENT、問題、解答、PDF/PPTX成果物自体の技術内容に修正理由はない。次工程では進捗メタデータだけを実態へ同期する。

判定: FAIL。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問4問のEXAM_ALIGNMENT: PASS（5問未満例外）
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・難易度配分・本試験形式: PASS
- 解説PDF・練習PDF・PowerPoint既存QA: PASS
- SPEC境界: PASS
- 完成後独立再解答: `4 / 4 PASS`
- 教材外知識補完: `0件`
- 後続Topic知識への依存: `0件`
- 未確認新幹線実車値への依存: `0件`
- source進捗記録整合性: FAIL

結論: Topic 08は `NEEDS_REVISION / IN_PROGRESS`。完成数は `7 / 14` のまま。次は主source・練習sourceの進捗記録だけを実成果物へ同期し、その後に最終QAを再実施する。
