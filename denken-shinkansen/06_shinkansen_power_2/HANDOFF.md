# HANDOFF

updated: 2026-09-18
series: `06_shinkansen_power_2`
active_topic: `12`
current_status: `topic_12_powerpoint_complete`

## 今回完了

Topic 12「N700Sが何本も同時加速したら？」の解説画像PowerPoint＋QAを完成した。

成果物:
- `topics/12_multiple_train_load/12_multiple_train_load_images.pptx`
- `topics/12_multiple_train_load/12_multiple_train_load_powerpoint_qa.md`

PowerPointは16:9・4スライド。SPEC固定8項目を `8 / 8` 可視化し、指定グラフ「列車本数―電圧」「列車本数―損失」を `2 / 2` 収録した。

使用条件は解説source §11.3・計算プログラムと同一の教材上仮定値。
- `66 kV`
- 1列車 `2 MW`
- 遅れ力率 `0.90`
- 1相線路 `R=0.50 Ω`, `X=1.00 Ω`
- `n=0...4`

代表値:
- `n=4`: `Vr=65.880407 kV`
- `n=4`: `I=77.898765 A`
- `n=4`: 三相線路損失 `9.102326 kW`

QA:
- 表示 `4 / 4 PASS`
- レンダリング `1601 × 900` / slide
- 文字切れ `0件`
- 文字重なり `0件`
- 図形はみ出し `0件`
- `slides_test.py` PASS
- PPTX ZIP整合性 PASS
- LibreOffice PDF変換 `4ページ PASS`
- PDF文字抽出 PASS
- SHA-256 `f4f94504c5bd900f0e07d73203de0787c885ce021aa3818358e26aad22203995`

## 正式品質ゲート

固定済み品質ゲートは変更していない。
- 令和4年度 第二種二次「電力・管理」問6 — 制作前再解答 `8 / 8 PASS`
- 令和元年度 第二種二次「電力・管理」問2 — 制作前再解答 `6 / 6 PASS`
- 平成30年度 第二種一次「電力」問7 — 制作前再解答 `5 / 5 PASS`
- 平成29年度 第二種二次「電力・管理」問4 — 制作前再解答 `1 / 3 PASS`
- 平成23年度 第二種二次「電力・管理」問6 — 制作前再解答 `3 / 3 PASS`
- 制作前合計: 一次1問＋二次4問、`23 / 25答案要素 PASS`

解説・練習教材の `25 / 25` は教材内カバレッジであり、完成後blind独立再解答PASSではない。

## 品質境界

- 固定5問・25答案要素の変更: `0件`
- Topic 13以降の論点追加: `0件`
- 未確認N700S実設備値の真値使用: `0件`
- 公式過去問転載: `0件`
- 仕様追加: `0件`

## 現在地

Topic 11: `completed`。

Topic 12: 解説PDF＋QA、練習問題source＋source QA、練習PDF＋PDF QA、計算プログラム＋CSV＋SVG＋計算QA、PowerPoint＋PowerPoint QAまで完了。品質ゲートは完成後blind独立再解答まで未通過。

完成数: `11 / 22`。

## 次に行う

Topic 12の完成後blind独立再解答を行う。固定5問・25答案要素を、保存済み正答・公式解答を先に見ず、教材内容だけで解く。答案を先に固定した後で公式解答と照合し、教材外知識補完があればFAILとする。完答できるまでTopic 12をcompletedにしない。
