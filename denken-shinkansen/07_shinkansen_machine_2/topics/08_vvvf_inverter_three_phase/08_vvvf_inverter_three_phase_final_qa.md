# Topic 08 最終QA記録

対象: `08 VVVFインバータで三相交流を作る`

実施日: 2026-09-15

## 判定

`PASS / completed`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

前回 `NEEDS_REVISION` の唯一の理由だった source Markdown の進捗記録3箇所は同期済み。今回の再QAでは、必須成果物、固定EXAM_ALIGNMENT、完成後独立再解答、練習・PDF/PPTX表示QA、SPEC指定計算/波形QA、source進捗整合、仕様境界をすべてPASSした。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`c7085943ecb3e747639cdfab8c0e01ab12c1febf`)
- 解説PDF: PASS (`92a878920edea377e2b5b92ff5b2103736746f1f`)
- 練習source: PASS (`70e74328fec507e3322ec75f0678c8bbfbe01829`)
- 練習PDF: PASS (`57382e277b5aa4f724d239c64a98372ea351bef4`)
- 解説画像PowerPoint: PASS (`7c1e7d3d51c089fa97deea4492c8b99041a0f676`)
- 計算プログラム: PASS (`5e5525ca4d3e14fccf9a287f714f98ffa6bf858c`)
- 計算/波形QA記録: PASS (`1585867b8e50d9b64b37a2432613bb5c798c4008`)
- 指定SVG 5件: PASS
- 完成後独立再解答記録: PASS (`72e270f9cf90d07297f46b7c9218673bf105ba30`)

## EXAM_ALIGNMENT

固定対象は一次3問＋二次記述2問、計5問・13小問。

- R07 一次 機械 問4: (4),(5)
- H22 一次 機械 問3: (1)〜(3)
- H19 一次 機械 問4: (1),(2)
- R04 二次 機械・制御 問3: (4),(5)
- H28 二次 機械・制御 問3: (1)〜(4)

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。混合問題はTopic 08固定範囲へ直接対応する小問だけをゲート対象としている。

## 完成後独立再解答

- 固定5問・13小問: `13 / 13 PASS`
- 教材外知識による補完: 0件
- 固定範囲外論点の追加: 0件
- 未確認300系実車値の追加: 0件

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 数値再計算: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・13小問への接続: `13 / 13 PASS`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF: A4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS、数値正答整合 `15 / 15 PASS`
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、視覚的クリップ確認PASS、ZIP/OOXML整合性PASS

## SPEC指定計算・波形QA

- スイッチング波形: PASS
- 相電圧: PASS
- 線間電圧: PASS
- 基本波: PASS
- FFT・高調波成分: PASS
- 内蔵assert: PASS
- 独立NumPy FFT比較: PASS
- SVG XML parse: `5 / 5 PASS`
- SVG表示QA: `5 / 5 PASS`
- 固定範囲外論点追加: 0件
- 未確認300系実車値追加: 0件

## source進捗整合

前回FAILだった3箇所は解消済み。

- `08_vvvf_inverter_three_phase.md` 冒頭状態欄: 最終QA `PASS / completed` まで同期
- 同source末尾 `## 次工程`: Topic 09制作前EXAM_ALIGNMENTへ更新
- `08_vvvf_inverter_three_phase_practice.md` 末尾 `## 次工程`: Topic 09制作前EXAM_ALIGNMENTへ更新

## 仕様境界

追加していない範囲:

- V/f制御
- ベクトル制御
- デッドタイム設計
- 素子選定
- 整流器設計
- 負荷電流経路の詳細
- H28二次問3(5)の直流入力電流
- 未確認の300系実車インバータ電圧・キャリア周波数・スイッチング周波数

## 最終判定

- 必須成果物: PASS
- 一次3問＋二次記述2問・13小問の過去問対応: PASS
- 完成後独立再解答: `13 / 13 PASS`
- 練習・PDF/PPTX表示QA: PASS
- SPEC指定計算/波形QA: PASS
- source Markdown進捗記録の整合: PASS
- 仕様外論点の追加なし: PASS
- 未確認実車値の真値化なし: PASS

判定: `PASS / completed`。

次は Topic 09「誘導電動機を自由に操るには？」の制作前EXAM_ALIGNMENT。