# Topic 07 最終QA記録

対象: `07 モーターはなぜ回る？`

実施日: 2026-09-15

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`04_shinkansen_theory_3/SPEC.md` の既定範囲だけで最終QAを実施し、新しい仕様は追加していない。

技術内容、必須成果物、固定EXAM_ALIGNMENT 5問、完成後独立再解答 `5 / 5 PASS`、既存のPDF / PowerPoint QA、SPEC境界はPASSした。一方、主sourceと練習sourceの進捗記録がGitHub正本上の実成果物より古いため、進捗記録整合性をFAILとする。Topic 07はまだ `completed` にしない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `3fc9f310220cef1300099c2b0e8d31d6391e9eda` | PASS |
| 解説PDF | `deb268be3332cd66b2c153472dbf68686cd59954` | PASS |
| 練習source | `7438c03593f8970d7fa191630403a72eeed292ae` | PASS |
| 練習PDF | `83bcca508a46980bb50b5407f21de2b676337dfe` | PASS |
| 解説画像PowerPoint | `6d955a2f729a5ea37c5a87f8f68a8fcfa98e4056` | PASS |
| 完成後独立再解答 | `4385b743d303773de141f3e9819ce0312b8abfca` | PASS |

## EXAM_ALIGNMENT確認

Topic 07固定範囲で選定した公式理論過去問5問を再確認した。

1. 令和6年度下期 理論 問4 — 平行導体間の電磁力と向き
2. 令和5年度下期 理論 問4 — 直線導体の磁界中でループ導体に働く合成電磁力
3. 令和4年度上期 理論 問4 — 運動導体の誘導起電力
4. 令和2年度 理論 問3 — 一様磁界中の電流ループに働く偶力
5. 平成28年度 理論 問12 — ローレンツ力の導出・向き・電子の運動

source Markdownには `F=BIl sinθ`、フレミング左手則、平行導体間の力、コイルの偶力・トルク、`F=qvB sinθ`、運動導体の `e=Blv sinθ`、フレミング右手則、逆起電力の基本、3段階例題を収録し、固定5問の要求事項を全件マッピングしている。

判定: PASS。

## 練習問題・既存表示QA

制作時のQA記録を再確認した。

- 解説PDF: A4縦4ページ。200 dpi全4ページ表示QA・文字抽出QA PASS。
- 練習PDF: A4縦5ページ、15問すべて五肢択一。基礎4 / 標準8 / 複合・応用3。200 dpi全5ページ表示QA・文字抽出QA PASS。
- 練習15問: 独立再計算・再判定 `15 / 15 PASS`、正答位置 `(1)〜(5)` 各3問。
- PowerPoint: 16:9・4枚。固定5過去問を全件対応し、表示QA `4 / 4 PASS`、はみ出し0件、PPTX整合性PASS。

判定: PASS。

## 完成後独立再解答

`07_motor_force_induction_exam_recheck.md` を確認した。

- 独立解答列: `(2), (2), (3), (3), (2)`
- 公式解答列: `(2), (2), (3), (3), (2)`
- 一致: `5 / 5 PASS`
- 教材外知識の補完: `0問`
- 直流機詳細・後続Topic知識への依存: `0問`
- 未確認0系実車値への依存: `0問`

判定: PASS。

## SPEC境界確認

次を完成ゲートへ追加していない。

- 直流機の電圧方程式、界磁方式、速度制御
- Topic 08以降の正弦波、実効値、RLC、力率、三相交流、半導体、PWM
- 0系直流主電動機の未確認実車値、内部巻線、結線、制御方式の推測

Topic 06の磁界・磁束密度・直線電流の磁界は固定過去問を解くための必要最小限の前提としてのみ再利用している。

判定: PASS。

## 進捗記録整合性

`FAIL`。技術内容ではなく進捗メタデータの不整合のみ。

### 主source `07_motor_force_induction.md`

GitHub正本上では解説PDF・練習source/PDF・PowerPoint・完成後独立再解答まで実在するが、sourceには次の旧状態が残っている。

- `status: explanation_pdf_complete`
- `練習問題source・練習PDF: 未着手`
- `解説画像PowerPoint: 未着手`
- `完成後独立再解答: 未実施`
- `次工程: ...練習問題source・練習PDFを作成する`

### 練習source `07_motor_force_induction_practice.md`

PowerPointと完成後独立再解答が既に完了しているが、次の旧状態が残っている。

- `完成後の公式過去問独立再解答はこの段階では未実施`
- `次工程: 解説画像PowerPointを作成する。完成後独立再解答はPowerPoint完成後に実施する`

このため `MASTER_SPEC.md` の「完了判定は会話履歴ではなくGitHub正本と実在成果物で行う」方針に照らし、source進捗記録を実態へ同期するまで `completed` としない。

## 最終判定

- 必須成果物: PASS
- 三種公式過去問5問のEXAM_ALIGNMENT: PASS
- 教材で必要な中間知識: PASS
- 3段階例題: PASS
- 練習問題数・難易度配分・本試験形式: PASS
- 解説PDF・練習PDF・PowerPoint既存QA: PASS
- SPEC境界: PASS
- 完成後独立再解答: `5 / 5 PASS`
- 教材外知識補完: `0件`
- 後続Topic知識への依存: `0件`
- 未確認0系実車値への依存: `0件`
- source進捗記録整合性: FAIL

結論: `NEEDS_REVISION / IN_PROGRESS`。次工程は、教材本文・固定EXAM_ALIGNMENT・数式・例題・問題・成果物を変更せず、主sourceと練習sourceの進捗記録だけを実成果物へ同期する。