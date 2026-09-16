# Topic 13 最終QA記録

対象: `13 L0系のリニア同期モータを等価回路で考える`

実施日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で確認し、新しい仕様は追加していない。

技術内容、固定EXAM_ALIGNMENT、完成後独立再解答、練習問題QA、PDF/PPTX表示QA、固定範囲境界はPASS。未完了理由は進捗記録の不整合だけである。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`4446ae25945148d7e47aa05e563fb9c68bf99fff`)
- 解説PDF: PASS (`f036c42c29d1edb15d9df585efe0448a5004e0c9`)
- 練習source: PASS (`7116fb74c902879f5533b06a7bb8d36cf54b9d22`)
- 練習PDF: PASS (`1201194021156e6e2e00cb6584ea136f11d47d48`)
- 解説画像PowerPoint: PASS (`24c2622a731002fe2e9d73ada115dcb6665da767`)
- PowerPoint QA記録: PASS (`4b469cd56143155444e8ffedf2baf0d52653c5be`)
- 独立再解答前ゲート記録: PASS (`3f907e1d59530dae435d27ceccd325d65192f0a9`)
- 完成後独立再解答記録: PASS (`354dc5fe3e03f10ddf8d71e32c8908b2dbc029a1`)

## EXAM_ALIGNMENT

固定対象は一次4問＋二次記述1問、計5問・22答案要素。

- R07 一次 機械 問1: (1)〜(5)
- R06 一次 機械 問1: (1)〜(5)
- H29 一次 機械 問1: (1),(2),(5)
- H21 一次 機械 問5: (1)〜(5)
- R07 二次 機械・制御 問1: (1)の(a),(d),(e),(f)

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。最新R08一次機械問1は同期発電機の冷却方式でTopic 13固定範囲外のため不採用。件数合わせによる範囲拡張はしていない。

## 完成後独立再解答

- 固定5問・22答案要素: `22 / 22 PASS`
- R07 一次 機械 問1: `5 / 5 PASS`
- R06 一次 機械 問1: `5 / 5 PASS`
- H29 一次 機械 問1の固定3答案要素: `3 / 3 PASS`
- H21 一次 機械 問5: `5 / 5 PASS`
- R07 二次 機械・制御 問1の固定4答案要素: `4 / 4 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- Topic 14依存: `0件`
- 未確認L0実値依存: `0件`

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 独立計算・論理QA: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・22答案要素への接続: `22 / 22 PASS`
- 解説PDF: A4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `15 / 15 PASS`
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性PASS

## 仕様境界

追加していない範囲:

- Topic 14の負荷角・力率・電力角特性・最大出力
- 無負荷飽和曲線・短絡特性・短絡比・同期インピーダンス測定
- 後続Topicの蓄電池・伝達関数・過渡応答・PID・安定判別・再粘着制御
- リニア同期モータ直接対応の公式過去問の捏造
- 未確認L0推進コイル寸法・極ピッチ・電圧・電流・推力・等価回路定数の真値化

判定: `PASS`。

## 進捗記録整合

`FAIL`。実成果物とsource内の進捗記録が一致していない。

1. `13_l0_linear_synchronous_motor_equivalent_circuit.md`
   - `## 状態` が「解説PDF、練習問題sourceまで完成／次工程は練習PDF」のまま。
   - 末尾 `# 次工程` も「練習PDFを作成する」のまま。
   - 実際には練習PDF、PowerPoint、独立再解答まで完了済み。
2. `13_l0_linear_synchronous_motor_equivalent_circuit_practice.md`
   - 末尾 `# 次工程` が「解説画像PowerPointを作成する」のまま。
   - 実際にはPowerPoint、独立再解答まで完了済み。

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・独立再解答結果は修正不要。

## 最終判定

- 必須成果物: PASS
- 一次4問＋二次記述1問・22答案要素の過去問対応: PASS
- 完成後独立再解答: `22 / 22 PASS`
- 練習・PDF/PPTX QA: PASS
- 固定範囲境界: PASS
- 進捗記録整合: FAIL

判定: `NEEDS_REVISION / IN_PROGRESS`。

完成数は `12 / 22` のまま。次工程はmain sourceと練習sourceの進捗記録だけを実成果物へ同期し、その後Topic 13最終QAを再実施する。
