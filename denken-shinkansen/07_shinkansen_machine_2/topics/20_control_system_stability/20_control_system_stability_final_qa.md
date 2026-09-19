# Topic 20 最終QA

更新日: 2026-09-20

判定: `PASS / topic_20_final_qa_pass / completed`

## 対象
- active topic: `20 制御系はなぜ発振する？`
- 固定EXAM_ALIGNMENT: 一次2問＋二次3問、計5問・14答案要素
- 再QA前完成数: `19 / 22`
- 再QA後完成数: `20 / 22`

## 1. 上位仕様・系列仕様
`denken-shinkansen/MASTER_SPEC.md`、`denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md` と現行mainを再照合した。

- 二種一次・二次を合わせて公式過去問5問: `PASS`
- 二次記述式を含む: `PASS`
- 固定14答案要素を教材へ割当: `14 / 14 COVERED`
- Topic 20の系列SPEC範囲内: `PASS`
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
- 解説PDF Git blob: `bbe9d9ff7ee149b9c625cdfd121a2dd0756efd1f`
- 解説PDF size: `17336 bytes`
- 練習source: 一次10問＋二次5問
- 一次正答一意性: `10 / 10 PASS`
- 全15問独立再計算・論理確認: `15 / 15 PASS`
- 練習PDF表示: `3 / 3 PASS`
- PowerPoint表示: `4 / 4 PASS`
- PowerPoint固定14答案要素: `14 / 14 COVERED`
- 独立再解答前判定: `BLIND_REANSWER_READY`

## 4. 完成後独立再解答
公式正答・標準解答を開く前に固定5問・14答案要素を完成教材だけで再解答し、commit `001dbd5f8ee1c0e8a1ea4cd4ca3cef47a2167f15` で固定した履歴を確認した。

- ロック時点公式一致: `12 / 14`
- H23一次 問7 (1): 概念「安定性」は正しいが解答群記号の転記誤り
- H30二次 問4 (2): 問題文 `Ti=0.1 s` を `0.01 s` と転記したことによる折点の転記誤り
- ロック履歴を保持した訂正後公式整合: `14 / 14 PASS`
- 独立再解答記録QA: `8 / 8 PASS`
- 教材の概念・解法不足: `0件`
- 教材外知識補完: `0件`

転記2件はロック履歴を保持して訂正済みで、教材本文・練習問題・固定EXAM_ALIGNMENT・PDF/PPTXの技術内容変更を必要としない。過去問対応品質ゲート: `PASS`。

## 5. 前回NEEDS_REVISION 3件の再確認
前回最終QAで指摘した進捗・メタデータ未同期3件を再確認した。

1. `20_control_system_stability.md` の状態・次工程: 現行成果物と独立再解答完了状態へ同期済み — `PASS`
2. `20_control_system_stability_practice.md` の次工程: Topic 20最終QA再実施へ同期済み — `PASS`
3. `20_control_system_stability_explanation_pdf_qa.md` のsize: `17336 bytes`、Git blob `bbe9d9ff7ee149b9c625cdfd121a2dd0756efd1f` と現行main一致 — `PASS`

進捗・メタデータ同期: `3 / 3 PASS`。

Topic 20ディレクトリの最終QA再実施前の最新変更は、上記同期の `0e5f550533a956eae25fd0616e29cd4c5d4e64bd` までであり、その後のmain上の別作業による変更でTopic 20成果物は改変されていないことも確認した。

## 6. 最終判定
MASTER SPEC、EXAM_ALIGNMENT SPEC、系列SPEC、固定EXAM_ALIGNMENT、成果物QA、独立再解答、前回指摘3件の整合をすべて満たす。

- 技術・試験対応品質ゲート: `PASS`
- 成果物ゲート: `PASS`
- 独立再解答ゲート: `PASS`
- 進捗・正本整合ゲート: `PASS`

判定: `PASS / topic_20_final_qa_pass / completed`

完成数: `20 / 22`

## 次工程
Topic 21「空転した車輪を再粘着させる」の制作前EXAM_ALIGNMENT。