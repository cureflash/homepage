# Topic 14 最終QA記録

対象: `14 L0系を500km/hで同期させる`

実施日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

固定一次1問＋二次記述4問・27答案要素、完成後独立再解答、必須成果物、練習問題QA、PDF/PPTX表示QA、固定範囲境界はPASS。未完了理由は進捗記録3箇所の不整合のみである。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`62be3055fafa0b95d4d8d81c24914f4939e6a175`)
- 解説PDF: PASS (`b5534b47769464b72e4c7814d6384815cff5950a`)
- 練習source: PASS (`1bf49d4a7d3834261325834ae9831a91027bd74c`)
- 練習PDF: PASS (`186077f0ad9897bbe47b748998ed09dcf44f5346`)
- 解説画像PowerPoint: PASS (`2edf2ec7c42d4939e37c6d912bcc0756052aca5a`)
- PowerPoint QA記録: PASS (`341158d7fe13ff3a037ce9cf2db4d682821f7d87`)
- 独立再解答前ゲート記録: PASS (`e7efda2899fa4fee7df4c613c5e7eaa8707d778a`)
- 完成後独立再解答記録: PASS (`eb7557ad42ed29ad151091ba9cae6a5105a0534b`)

## EXAM_ALIGNMENT

固定対象は一次1問＋二次記述4問、計5問・27答案要素。

- H29 一次 機械 問1 (3),(4): `2 / 2 PASS`
- R07 二次 機械・制御 問1 (1)(b),(c),(2)〜(5): `7 / 7 PASS`
- R06 二次 機械・制御 問1 (1)a〜c,(2)a〜c: `8 / 8 PASS`
- R05 二次 機械・制御 問1 (3),(4)a,b,(5)a,b: `8 / 8 PASS`
- H27 二次 機械・制御 問1 (1)a,b: `2 / 2 PASS`
- 合計: `27 / 27 PASS`

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。Topic 13で採用済み答案要素の重複採用は0件で、件数合わせによる固定範囲外追加も0件である。

## 完成後独立再解答

- 固定5問・27答案要素: `27 / 27 PASS`
- 教材外知識補完: `0件`
- 固定範囲外論点追加: `0件`
- Topic 15以降依存: `0件`
- 未確認L0実値依存: `0件`
- 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更: `0件`

判定: `PASS`。

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 独立計算・論理QA: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・27答案要素への接続: `27 / 27 PASS`
- 解説PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA PASS
- 練習PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS、数値・論理再検算 `15 / 15 PASS`
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow 0件、PPTX ZIP整合性PASS

判定: `PASS`。

## 仕様境界

追加していない範囲:

- Topic 13で完成済みの同期機構造・電機子反作用の再制作
- 突極機の二反作用法、過渡／初期過渡リアクタンス、突発短絡過渡、等面積法、AVR/PSS
- Topic 15以降の補機、蓄電池、伝達関数、過渡応答、PID、安定判別、再粘着制御
- リニア同期モータ直接対応の公式過去問の捏造
- 未確認L0推進コイル寸法・極ピッチ・電圧・電流・推力・500 km/h時電気周波数の真値化

判定: `PASS`。

## 進捗記録整合

実成果物・完成後独立再解答済み状態に対し、次の3件が未同期である。

1. main source `## 状態` が「解説PDFまで完成、次工程は練習問題source作成」のまま。
2. main source末尾 `# 次工程` が「練習問題sourceを作成」のまま。
3. 練習source末尾 `# 次工程` が「練習PDFを作成」のまま。

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX・完成後独立再解答の不整合ではなく、進捗記録だけの不整合である。

判定: `FAIL / exact blocker`。

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`。

完成数は `13 / 22` のまま。次工程は、技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXを変更せず、上記3箇所だけを実成果物へ同期し、その後に最終QAを再実施する。