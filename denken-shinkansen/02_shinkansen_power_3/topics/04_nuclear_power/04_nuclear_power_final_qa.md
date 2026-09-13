# Topic 04 最終QA記録

対象: `04 東京―佐世保「原子力新幹線」`

実施日: 2026-09-14

## 判定

`NEEDS_REVISION`。Topic 04はまだ `completed` にしない。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`02_shinkansen_power_3/SPEC.md` の既存仕様だけで確認し、新しい仕様は追加していない。

## 必須成果物の実在確認

GitHub正本上で次を確認した。

| 成果物 | blob SHA | 判定 |
|---|---|---|
| source Markdown | `349a4d8a5826677f5149a883499726194df37eee` | EXISTS / 要進捗同期 |
| 解説PDF | `b90e6c210a53c4fd69d57c5202498305cc77005b` | PASS |
| 練習PDF | `642d8b21d65fbd2779a926aba6eaff24503fa514` | PASS |
| 解説画像PowerPoint | `8ff26da7d97c5ec03fd7c4859fc363e0bb71222d` | PASS |
| PowerPoint QA記録 | `c8179583adbea6c9148838f6ab967d16932c985a` | PASS |
| 完成後独立再解答記録 | `ceb2c42fc45419fb06042cdf5f400733e06b2e0e` | PASS |

## EXAM_ALIGNMENT確認

品質ゲート対象は固定済みの公式過去問6問。

- R8上 電力 問4
- R6上 電力 問4
- R5上 電力 問4
- H30 電力 問4
- H27 電力 問4
- H21 電力 問4

三種の「関連する公式過去問を原則5問以上」の要件を満たす。source Markdownには各問題の要求知識・使用式・設問型、公式問題・公式解答、複数系統の参考教材、教材必須説明が記録されている。

## 成果物・品質ゲート確認

- 解説PDF: A4縦4ページ。STATUS上で全ページ表示QA PASS。
- 練習PDF: A4縦6ページ、12問。STATUS上で全ページ表示QA PASS。
- PowerPoint: 16:9・2枚。QA記録で全2枚レンダリング、文字欠け0、クリップ0、意図しない重なり0、境界外はみ出し0、ZIP整合性PASS。
- 完成後独立再解答: `(2),(4),(3),(2),(1),(2)` で6/6公式解答一致。
- 教材外知識の補完: 0件。
- 固定範囲外の新型炉、核燃料サイクル、放射線分類・遮蔽、安全法規、詳細燃料加工の追加: 0件。
- 「むつ」の実在値はJAEA一次資料で確認済み範囲に限定し、SPEC固定の架空列車設定と分離されている。未確認の列車発電端出力・走行性能は真値化していない。

## 不整合

source Markdown `04_nuclear_power.md` の進捗記録だけが現状と一致していない。

冒頭 `## 状態` が依然として `explanation_body_complete` のままで、次を「未着手」と記録している。

- 解説PDF
- 練習PDF
- PowerPoint
- 完成後独立再解答

さらに末尾の `### 独立再解答` も「現段階では未実施」と記録している。

しかしGitHub正本上では、上記成果物はすべて実在し、完成後独立再解答も6/6 PASS済みである。これは教材内容・試験対応の不合格ではなく、source Markdownの進捗記録不整合である。

## 最終判定

- 必須成果物の実在: PASS
- 公式過去問6問のEXAM_ALIGNMENT: PASS
- 複数系統の参考教材確認: PASS
- 解説PDF・練習PDF・PowerPoint: PASS
- PowerPoint表示・ファイルQA: PASS
- 範囲境界・実在値/架空設定の分離: PASS
- 完成後独立再解答: 6/6 PASS
- source Markdownの進捗整合性: FAIL

よって最終判定は `NEEDS_REVISION`。完成数は `3 / 16` のままとする。

次工程は `04_nuclear_power.md` の進捗記録だけを現行成果物へ同期する。教材本文・EXAM_ALIGNMENT・PDF・PowerPoint・問題内容・固定範囲は変更しない。同期後に最終QAを再判定し、全件PASSの場合のみTopic 04を `completed` とする。
