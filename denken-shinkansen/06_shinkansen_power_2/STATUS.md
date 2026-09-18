# STATUS

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `13`
theme: 単相の新幹線負荷は三相系統を乱さない？
current_status: `topic_13_progress_records_synced`
completed_topics: `12 / 22`

## Topic 12 final result

Topic 12「N700Sが何本も同時加速したら？」は最終QA再判定まで完了し、`PASS / completed`。

正式品質ゲート:
- 令和4年度 第二種二次「電力・管理」問6 — `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — `3 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — `3 / 3 PASS`
- 合計: 一次1問＋二次4問、`5 / 5問・25 / 25答案要素 PASS`

完成後blind独立再解答:
- 一次: `5 / 5答案要素 PASS`
- 二次: `20 / 20答案要素 PASS`
- 合計: `5 / 5問・25 / 25答案要素 PASS`
- 制作前不足2要素: `2 / 2 改善確認`

成果物・QA:
- 解説PDF: `3 / 3` ページ表示PASS、3段階例題 `3 / 3 PASS`
- 練習: 15問、一次10＋二次5、数値・論理 `15 / 15 PASS`
- 練習PDF: `7 / 7` ページ表示PASS
- 計算プログラム: CSV `5 / 5`、高電圧側解 `5 / 5`、SVG `2 / 2`、複素KVL再代入PASS
- PowerPoint: `4 / 4` スライド表示PASS、SPEC固定8項目 `8 / 8`、指定2量 `2 / 2`
- 進捗記録整合: PASS
- Webカタログ登録: PASS

品質境界:
- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の先取り: `0件`
- 教材外知識補完: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/12_multiple_train_load/12_multiple_train_load.md`
- `topics/12_multiple_train_load/12_multiple_train_load_final_qa.md`
- `topics/12_multiple_train_load/12_multiple_train_load_blind_reanswer_20260918.md`
- `qualifications/denken-shinkansen/catalog.json`

## Topic 13 progress

制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説source、解説PDF＋PDF QA、練習問題・完全解説source、練習PDF＋PDF QA、解説画像PowerPoint＋PowerPoint QA、完成後blind独立再解答、初回最終QA、初回最終QAで指摘された進捗記録同期まで完了。

正式品質ゲート:
- 平成28年度 第二種一次「法規」問6 — `5答案要素`
- 平成23年度 第二種二次「電力・管理」問4 — `3答案要素`
- 合計: 一次1問＋二次1問、`2問 / 8答案要素`

制作前blind独立再解答:
- H28一次 法規 問6: `5 / 5 PASS`
- H23二次 電力・管理 問4: `1 / 3 PASS`
- 合計: `6 / 8 PASS`

解説source反映:
- 三相平衡・不平衡、正相・逆相・零相、`a` 演算子、対称座標変換、逆相電流、き電用変圧器による不平衡緩和を固定範囲内で説明。
- H28一次問6の5答案要素を本文へ `5 / 5` マッピング。
- H23二次問4の3答案要素を本文へ `3 / 3` マッピング。
- 正式2問8答案要素の説明箇所マッピング: `8 / 8`。
- 制作前不足2要素について、二つの単相負荷を同一とする最大条件、Ta/Tbの回路電流、フェーザ合成、`P1,max = Sb - Sa cos30°`、利用率までを説明し、教材上の改善箇所 `2 / 2` を反映。
- 3段階例題をsourceへ実装。数値は教材用仮定値とし、未確認実設備値を使用していない。

解説PDF＋QA:
- `13_three_phase_unbalance_explanation.pdf`: A4縦 `4ページ`。
- 200 dpi表示QA: `4 / 4 PASS`。
- 文字抽出QA: PASS、U+FFFD `0件`。
- 3段階例題独立再計算: `3 / 3 PASS`。
- 正式2問8答案要素のPDF説明マッピング: `8 / 8`。
- 制作前不足2要素の改善説明: `2 / 2`。

練習問題・完全解説source:
- `13_three_phase_unbalance_practice.md` を作成。
- 全15問: 基礎4、本試験標準8、複合・応用3。
- 二種一次型五肢択一10問＋二種二次型記述5問。
- 正式2問8答案要素の練習問題マッピング: `8 / 8`。
- 制作前不足2要素に対応する異容量V結線のフェーザ投影、単相負荷合計、利用率を問14で再訓練。
- 対称座標変換、逆変換、電圧不平衡率、逆相の同期機影響、強い系統、相振り分けを固定範囲内で演習化。
- 数値独立再計算: 問3、4、7、8、11、12、13、14、15の主要値すべて一致。

練習PDF＋QA:
- `13_three_phase_unbalance_practice.pdf`: A4縦 `10ページ`。
- 200 dpi全ページレンダリング: `10 / 10 PASS`。
- 文字抽出QA: PASS、U+FFFD `0件`。
- 全15問の数値・論理再確認: `15 / 15 PASS`。
- 一次型正答一意性: `10 / 10 PASS`。
- 正式2問8答案要素の教材内接続: `8 / 8`。
- 制作前不足2要素の再訓練維持: PASS。

解説画像PowerPoint＋QA:
- `13_three_phase_unbalance_images.pptx`: 16:9 `4スライド`。
- 全4スライド表示QA: `4 / 4 PASS`。
- `slides_test.py`: `PASS / No overflow detected`。
- PPTX ZIP整合性・LibreOffice PDF変換・文字抽出: PASS。
- SPEC固定8項目の可視化: `8 / 8 PASS`。
- 正式2問8答案要素のPowerPoint接続: `8 / 8`。
- 制作前不足2答案要素のフェーザ投影・`P1,max=Sb-Sa cos30°`・利用率の説明維持: `2 / 2 PASS`。

完成後blind独立再解答:
- H28一次 法規 問6: `(ヌ, ハ, チ, イ, リ)`、`5 / 5 PASS`。
- H23二次 電力・管理 問4: `52.0 kW / 24.0 kW / 95.0 %`、`3 / 3 PASS`。
- 合計: 一次1問＋二次1問、`2 / 2問・8 / 8答案要素 PASS`。
- 制作前不足2答案要素: `2 / 2 改善確認`。
- 公式解答・標準解答は候補解固定後に照合。

初回最終QA:
- 技術内容・固定EXAM_ALIGNMENT・必須教材成果物・PDF/PPTX QA・練習QA・完成後blind・SPEC境界: PASS。
- 判定: `NEEDS_REVISION / IN_PROGRESS`。
- blockerは技術内容ではなく進捗記録3箇所＋Webカタログ1件のみだった。

進捗記録同期:
- `13_three_phase_unbalance.md` の状態・次工程を実成果物状態へ同期: PASS。
- `13_three_phase_unbalance_practice.md` の状態・次工程を実成果物状態へ同期: PASS。
- `13_three_phase_unbalance_powerpoint_qa.md` の完成後blind状態を `8 / 8 PASS` へ同期: PASS。
- `qualifications/denken-shinkansen/catalog.json` にTopic 13を登録: PASS。
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・完成後blind結果の変更: `0件`。

4 blockerは解消したが、最終QA再判定をまだ実施していないためTopic 13は `IN_PROGRESS`、完成数は `12 / 22` のまま。

品質境界:
- 正式過去問追加: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 14以降の先取り: `0件`
- Topic 16故障計算先取り: `0件`
- 未確認実設備値の真値使用: `0件`
- 教材外知識補完: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

source:
- `topics/13_three_phase_unbalance/13_three_phase_unbalance.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_preproduction_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_explanation_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice.pdf`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_practice_pdf_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_images.pptx`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_powerpoint_qa.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_blind_reanswer_20260918.md`
- `topics/13_three_phase_unbalance/13_three_phase_unbalance_final_qa.md`
- `qualifications/denken-shinkansen/catalog.json`

## Gate checklist

- [x] Topic 01 completed
- [x] Topic 02 completed
- [x] Topic 03 completed
- [x] Topic 04 completed
- [x] Topic 05 completed
- [x] Topic 06 completed
- [x] Topic 07 completed
- [x] Topic 08 completed
- [x] Topic 09 completed
- [x] Topic 10 completed
- [x] Topic 11 completed
- [x] Topic 12 completed
- [ ] Topic 13 — progress records synced＋Web catalog registered; final QA rerun pending

## next_start

Topic 13の最終QAを再判定する。技術成果物・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・完成後blind独立再解答結果は変更しない。再判定PASS時のみ `completed` として完成数を `13 / 22` へ更新する。再判定完了まではTopic 14以降・Topic 16故障計算を先取りしない。
