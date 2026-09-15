# Topic 09 最終QA記録

対象: `09 北陸新幹線は50Hzと60Hzをどう走る？`

実施日: 2026-09-16

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで最終QAを実施した。新しい仕様・固定範囲外論点は追加していない。

技術内容・過去問対応・必須成果物・既存表示QAはPASS。未完了理由は進捗記録1箇所のみで、練習sourceの状態・次工程が実在成果物より古い。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `07a0c3de44f0f8403c2a646691cddaef408890d2` | PASS |
| 解説PDF | `6cf3c47b1f50c64a50cc96931b714ea4201b36a0` | PASS |
| 練習source | `b74a8561287a1fbdc51656ee857efb73741ecf93` | PASS（内容） / FAIL（進捗記録） |
| 練習PDF | `2bd3628c28e1229506c3c9e5bfcf0002a7cfe231` | PASS |
| 解説画像PowerPoint | `c7716a2d6c31d4c03237d64b540805cf2a45540a` | PASS |
| 完成後独立再解答 | `2bebcc46fd877ba8f02e57bf518be86a1614de22` | PASS |

## 過去問対応品質ゲート

固定EXAM_ALIGNMENTは公式理論過去問6問。

1. 令和8年度上期 理論 問8 — RC回路、容量リアクタンス、合成インピーダンス、抵抗損失
2. 令和7年度下期 理論 問8 — 周波数変化、L/Cリアクタンス、並列LCの打消し、合成インピーダンス
3. 令和6年度下期 理論 問9 — RC直列回路、50Hz→60Hzでの容量リアクタンスと電流変化
4. 令和6年度上期 理論 問8 — LC直列共振、L/C合成、共振周波数比較
5. 令和5年度下期 理論 問8 — RLC直列共振、共振時電流、コイル端子電圧、共振周波数
6. 令和5年度上期 理論 問8 — RLC直列共振、共振前後の容量性/誘導性、位相関係

完成後独立再解答は `(1), (5), (3), (3), (2), (3)` で公式解答と `6 / 6 PASS`。

- 教材外知識補完: `0問`
- Topic 10以降の力率・三相・半導体等への依存: `0問`
- 未確認新幹線実車値・周波数切替方式への依存: `0問`

判定: PASS。

## 教材・成果物QA

- 3段階例題: 基礎 / 本試験標準 / 複合・ひっかけを収録 — PASS
- 練習問題: 15問、全問五肢択一、基礎4 / 標準8 / 複合3、独立再計算・論理確認 `15 / 15 PASS`、正答一意性 `15 / 15 PASS`
- 解説PDF: A4縦4ページ、200 dpi全4ページ表示QA・文字抽出QA PASS
- 練習PDF: A4縦2ページ、200 dpi全2ページ表示QA・文字抽出QA PASS
- PowerPoint: 16:9・4枚、表示QA `4 / 4 PASS`、overflow 0件、ZIP/XML整合性PASS

判定: PASS。

## SPEC境界

次を完成ゲートへ追加していない。

- Topic 10の有効・無効・皮相電力、力率、力率改善
- Topic 11の三相交流、Y・Δ、線間/相電圧
- Topic 12以降の半導体、整流、インバータ、PWM、高調波
- 過渡現象・ラプラス変換等
- 北陸新幹線の周波数切替設備、切替地点、車上回路等の未確認実車情報

固定R8上問8の `P=I²R` は既習の抵抗損失としてのみ使用している。

判定: PASS。

## 進捗記録整合性

主sourceは `INDEPENDENT_REANSWER_COMPLETE` で、最終QAを次工程としており、最終QA開始時点の実態と一致していた。

練習sourceには次の旧進捗が残る。

- `stage: PRACTICE_PDF_COMPLETE`
- `次工程`: 「解説画像PowerPointを作成する。完成後独立再解答が済むまで completed にしない」

しかしGitHub正本には解説画像PowerPointが既に存在し、PowerPoint QAはPASS、完成後独立再解答も `6 / 6 PASS` である。このため練習sourceの進捗記録が実態と不一致。

判定: FAIL。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問6問のEXAM_ALIGNMENT: PASS
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・難易度配分・本試験形式: PASS
- 解説PDF・練習PDF・PowerPoint既存QA: PASS
- SPEC境界: PASS
- 完成後独立再解答: `6 / 6 PASS`
- 教材外知識補完: `0件`
- 後続Topic知識への依存: `0件`
- 未確認新幹線実車情報への依存: `0件`
- source進捗記録整合性: FAIL（練習source 1箇所）

結論: Topic 09は `NEEDS_REVISION / IN_PROGRESS`。技術成果物は変更せず、次は練習sourceの旧進捗記録だけを実成果物へ同期し、その後に最終QAを再実施する。完成数は `8 / 14` のままとする。
