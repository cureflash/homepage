# Topic 16 完成後独立再解答前ゲート

更新日: 2026-09-18

判定: `PASS / BLIND_REANSWER_GATE_REBUILT`

## 対象
- active topic: `16 700系 多レベル変換器とPWM`
- 固定過去問: 一次4問＋二次1問、計5問
- 固定答案要素: 一次20＋二次6、計26
- 完成数: `15 / 39`

## 今回の再構築理由
旧ゲート作成後のblind再解答QAで、R7一次「機械」問4 (3) に必要な自己消弧形スイッチング素子の識別説明が1答案要素不足していることが判明した。その後、固定範囲を広げず、main source・解説PDF・練習source/PDF・PowerPointへ IGBT/MOSFET の識別と逆並列ダイオードとの役割差だけを最小同期した。

旧ゲート・旧候補答案は改訂前教材を対象とするため、今回の独立再解答には流用しない。

## 改訂済み必須成果物の再監査
`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、main source、練習source、解説PDF QA、練習PDF QA、PowerPoint QA、Topic 16成果物一覧を再監査した。

- 固定EXAM_ALIGNMENT: `一次4問＋二次1問 / 5問・26答案要素 / 変更なし`
- 解説source: `PASS / SOURCE_REVISION_COMPLETE`
- 解説PDF: `PASS / EXPLANATION_PDF_REVISION_SYNC_COMPLETE`
- 練習source: `PASS / SOURCE_REVISION_COMPLETE`
- 練習PDF: `PASS / PRACTICE_PDF_REVISION_SYNC_COMPLETE`
- PowerPoint: `PASS / POWERPOINT_REVISION_SYNC_COMPLETE`
- R7 一次「機械」問4 (3) の教材内根拠: `全成果物へ同期済み`
- SPEC指定8項目: `8 / 8 covered / 変更なし`
- SPEC指定3可視化: `3 / 3 PASS / 変更なし`
- 制作前検証: 一次 `20 / 20`、二次 `6 / 6`、合計 `26 / 26 PASS / 変更なし`
- 固定範囲外追加: `0件`
- 未確認700系実車値の真値化: `0件`
- 共通仮定モデル変更: `0件`

## blind再解答の独立性条件
次の再解答runでは、候補答案を固定する前に以下を開かない。

- 公式解答・標準解答
- `16_700series_multilevel_converter_pwm_blind_reanswer_candidates.md` の旧候補答案
- `16_700series_multilevel_converter_pwm_blind_reanswer_qa.md` の旧照合結果

使用してよいものは、固定5問の公式問題文と改訂済み教材成果物だけとする。main sourceに公式問題・公式解答のURLは記録されているが、候補答案固定前に解答側URLを開かない。

本runでは再構築ゲートまでを1段階とし、候補答案の再固定・公式照合は実施しない。

## 次工程
新しい独立runで、公式解答・標準解答・旧候補答案・旧blind QAを先に見ず、公式問題文＋改訂済み教材だけを使って固定5問・26答案要素を再解答し、新候補答案を固定する。その後の工程で公式解答・標準解答と照合する。
