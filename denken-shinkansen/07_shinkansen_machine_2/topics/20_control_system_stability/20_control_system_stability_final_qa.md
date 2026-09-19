# Topic 20 最終QA

更新日: 2026-09-20

判定: `NEEDS_REVISION / topic_20_final_qa_progress_metadata_unsynced`

## 対象
- active topic: `20 制御系はなぜ発振する？`
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・14答案要素
- 完成数: `19 / 22` のまま

## 1. 上位仕様・系列仕様
`denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` と現行mainを照合した。

- 二種一次・二次を合わせて公式過去問5問: `PASS`
- 二次記述式を含む: `PASS`
- 固定14答案要素を教材へ割当: `14 / 14 COVERED`
- Topic 21先取り: `0件 / PASS`
- 未確認の新幹線実車ゲイン・安定余裕・制御周期・極配置等の実車値化: `0件 / PASS`
- 系列SPEC外の高度な制御理論追加: `0件 / PASS`

## 2. 必須成果物
現行mainで次を確認した。

- 解説source: `20_control_system_stability.md`
- 解説PDF: `20_control_system_stability_explanation.pdf`
- 解説PDF QA: `20_control_system_stability_explanation_pdf_qa.md`
- 練習source: `20_control_system_stability_practice.md`
- 練習PDF: `20_control_system_stability_practice.pdf`
- 練習PDF QA: `20_control_system_stability_practice_pdf_qa.md`
- 解説画像PowerPoint: `20_control_system_stability_images.pptx`
- PowerPoint QA: `20_control_system_stability_powerpoint_qa.md`
- 独立再解答前ゲート: `20_control_system_stability_blind_reanswer_gate.md`
- 完成後独立再解答: `20_control_system_stability_independent_reanswer.md`

成果物の存在: `10 / 10 PASS`。

## 3. 成果物QA
- 解説source固定5問・14答案要素: `14 / 14 COVERED`
- 解説PDF表示: `5 / 5 PASS`
- 解説PDF数値・論理QA: `8 / 8 PASS`
- 練習source: 一次10問＋二次5問
- 一次正答一意性: `10 / 10 PASS`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 練習PDF表示: `3 / 3 PASS`
- PowerPoint表示: `4 / 4 PASS`
- PowerPoint固定14答案要素: `14 / 14 COVERED`
- 独立再解答前判定: `BLIND_REANSWER_READY`

## 4. 完成後独立再解答
公式正答・標準解答を開く前に固定5問・14答案要素を完成教材だけで解答し、commit `001dbd5f8ee1c0e8a1ea4cd4ca3cef47a2167f15` で固定した履歴を確認した。

- ロック時点公式一致: `12 / 14`
- H23一次 問7 (1): 概念「安定性」は正しいが解答群記号の転記誤り
- H30二次 問4 (2): `Ti=0.1 s` を `0.01 s` と転記したことによる折点の転記誤り
- ロック履歴を保持した訂正後公式整合: `14 / 14 PASS`
- 独立再解答記録QA: `8 / 8 PASS`
- 教材の概念・解法不足: `0件`
- 教材外知識補完: `0件`

過去問対応品質ゲートの技術内容: `PASS`。

## 5. 最終整合QAで確認した未同期
技術内容ではなく進捗・メタデータ記録に3件の不整合がある。

1. `20_control_system_stability.md` 冒頭の状態が `topic_20_explanation_source_complete / IN_PROGRESS` のままで、PDF・練習・PowerPointを「未作成」、次工程を「解説PDF＋QA」と記録している。現行mainの実在成果物と不一致。
2. `20_control_system_stability_practice.md` 末尾の次工程が「練習PDF＋QA」のまま。現行mainでは練習PDF＋QA、PowerPoint、独立再解答まで完了済み。
3. `20_control_system_stability_explanation_pdf_qa.md` のGitHub正本同一性欄は PDF size `17333 bytes` と記録しているが、現行mainのContents API上の同一Git blob `bbe9d9ff7ee149b9c625cdfd121a2dd0756efd1f` は `17336 bytes`。blob自体は一致しており、QA記録のsize値だけが不整合。

`STATUS.md` と `HANDOFF.md` は現時点で `Topic 20 最終QA` を次工程として相互整合している。

## 6. 判定
技術・試験対応品質ゲートは通過しているが、最終QAは成果物・進捗記録・正本メタデータの整合も確認対象であるため、上記3件を残したまま `completed` にはしない。

判定: `NEEDS_REVISION / topic_20_final_qa_progress_metadata_unsynced`

完成数: `19 / 22`

## 次工程
Topic 20の進捗・メタデータ記録3件を現行mainへ同期する。技術本文、練習問題、固定EXAM_ALIGNMENT、PDF/PPTX、独立再解答内容は変更しない。
