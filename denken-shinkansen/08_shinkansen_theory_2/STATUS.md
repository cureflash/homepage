# STATUS - 新幹線・電験二種「理論」

更新日: 2026-09-12

## 状態
- active_series: `08_shinkansen_theory_2`
- exam_aligned_completed_topics: 0 / 21
- current_status: `topic_01_exam_alignment_research_complete`
- last_completed_topic: `none`
- active_topic: `01 25kV架線を一つの等価回路にする`
- next_start: Topic 01で選定した公式過去問6問の公式解答を確認し、保存済み正答に依存せず要求式・中間知識・解法を独立検証して本文節へマッピングする。その後に本文を作成する

## Topic 01 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 公式過去問を一次理論から6問選定
- [x] `08 理論・二種` は一次理論中心であり二次問題を無理に付けない上位仕様を確認
- [x] 参考教材を複数系統確認
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [ ] 公式解答との照合を伴う要求事項の独立検証
- [ ] 解説本文
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの独立再解答
- [ ] 最終QA PASS

## 今回進めた内容
Topic 01 `25kV架線を一つの等価回路にする` の制作前EXAM_ALIGNMENTを作成した。

選定した公式過去問は、R7一次理論問5、R6一次理論問3、R5一次理論問3・問4、R4一次理論問3、R3一次理論問3の6問。

要求論点は、KCL/KVL、節点法・閉路法、重ね合わせ、電源変換、テブナン／ノートン等価回路、複素インピーダンスでの等価化、二端子回路、最大電力伝送に整理した。

試験センター公式PDFで6問の問題内容を確認した。R5問4は端子a-bから見た交流等価回路を直接扱い、R3問3は重ね合わせの理、R7問5は電源変換と可変負荷最大電力を扱うため、Topic 01の中核問題として採用した。

新幹線側は、変電所・き電系統を `Vth-Zth-列車負荷` へ簡略化する教育用モデルとしてのみ使う。実際のATき電回路等と同一視せず、未確認の実設備値を推測して真値化しない。

## 判定
Topic 01 は `EXAM_ALIGNMENT` 制作前リサーチ段階まで進んだが、まだ `completed` ではない。MASTER_SPEC.md / EXAM_ALIGNMENT_SPEC.md の完成後品質ゲートを通過するまで完成数へ加算しない。
