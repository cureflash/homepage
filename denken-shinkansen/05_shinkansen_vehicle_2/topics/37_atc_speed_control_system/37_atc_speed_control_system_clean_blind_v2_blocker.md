# Topic 37 clean blind v2 freshness blocker

更新日: 2026-09-21

判定: `RESOLVED / CLEAN_BLIND_V2_READY`

## 発生していた競合

v2 candidateはanswer-bearing資料を見ていないfresh workerが先に固定する必要がある一方、当時の必須reconcile対象 `STATUS.md` / `HANDOFF.md` がv1の具体的な誤答・canonical正答を含んでいた。このため同一workerではfresh条件と必須reconcileを両立できなかった。

## 解除

- `STATUS.md` をanswer-safeなcurrent stateへ更新した。
- `HANDOFF.md` をanswer-safeなfresh handoffへ更新した。
- v1の具体的な答案内容はanswer-bearing QAへ隔離した。
- question-only intakeは `37_atc_speed_control_system_clean_blind_intake.md` を使用する。
- 固定5問・25答案要素、固定EXAM_ALIGNMENT、既存教材、Topic 21一般式は変更していない。

これにより、次のfresh workerは上位仕様、系列SPEC、answer-safeなSTATUS/HANDOFF、question-only intake、公式「問題」PDFだけを読んでv2 candidateを固定できる。

## 停止位置

- `clean_blind_v2_candidate`: 未作成
- v2 QA: 未実施
- 既存教材変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

本runはsanitize前のanswer-bearing情報を確認済みのため、v2 candidateは作成しない。次のfresh runからcandidate固定へ進む。
