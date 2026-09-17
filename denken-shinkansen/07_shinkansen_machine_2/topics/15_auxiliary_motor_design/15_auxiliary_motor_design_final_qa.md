# Topic 15 最終QA記録

対象: `15 新幹線の補機モーターを設計する`

実施日: 2026-09-17

## 判定

`NEEDS_REVISION / IN_PROGRESS`。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、`07_shinkansen_machine_2/SPEC.md` の範囲内で再確認し、新しい仕様は追加していない。

固定一次3問＋二次記述2問・8答案要素、完成後独立再解答、必須成果物、練習問題QA、PDF/PPTX表示QA、固定範囲境界はPASS。最終完了を阻むのは進捗記録3箇所の不整合だけである。

## 必須成果物

GitHub正本上で実在を確認した。

- source Markdown: PASS (`529c78e7c8b7584612e45e4eb1ce502e6827a9c3`)
- 解説PDF: PASS (`55e407027bf137d1881668bcc2256481158a6d7d`)
- 練習source: PASS (`2f98620b8f13082e497e4402b95c1feb7fca5c60`)
- 練習PDF: PASS (`2b825132455f5714adb1a501ece5d3c41c9b7817`)
- 解説画像PowerPoint: PASS (`af72dc7052484b5e368a1ab16389e4571caa7d3b`)
- PowerPoint QA記録: PASS (`80d1c29aeb151fed07b9a7fb2d4cfa7431363db0`)
- 独立再解答前ゲート記録: PASS (`e728b0cb429824fabbc5b6d9dc1e4bd98d1abcbe`)
- 完成後独立再解答記録: PASS (`5326404cc512a4c52a77092fce3992f2fa1fcfae`)

## EXAM_ALIGNMENT

固定対象は一次3問＋二次記述2問、計5問・8答案要素。

- R06 一次 機械 問2 (5): `1 / 1 PASS`
- H25 一次 機械 問3 (1),(2): `2 / 2 PASS`
- H23 一次 機械 問1 (1),(2): `2 / 2 PASS`
- R04 二次 機械・制御 問3 (6): `2 / 2 PASS`
- R07 二次 機械・制御 問2 (1) 定格トルク: `1 / 1 PASS`
- 合計: `8 / 8 PASS`

二種の一次・二次を合わせて原則5問以上、二次対象論点では記述式を含める品質ゲートを満たす。固定範囲外の件数合わせは0件。

## 完成後独立再解答

- 固定5問・8答案要素: `8 / 8 PASS`
- 教材外知識補完: `0件`
- コンプレッサへの三乗則無条件適用: `0件`
- Topic 05〜09詳細再制作: `0件`
- Topic 16以降依存: `0件`
- 未確認新幹線補機実値依存: `0件`
- 固定EXAM_ALIGNMENT・教材本文・練習問題・PDF/PPTXの内容変更: `0件`

判定: `PASS`。

## 練習・表示QA

- 練習問題: 一次10問＋二次記述5問、計15問
- 独立計算・論理QA: `15 / 15 PASS`
- 一次問題の正答一意性: `10 / 10 PASS`
- 固定5問・8答案要素への接続: `8 / 8 PASS`
- 解説PDF: A4縦5ページ、200 dpi表示QA `5 / 5 PASS`、文字抽出QA PASS
- 練習PDF: A4縦7ページ、200 dpi表示QA `7 / 7 PASS`、文字抽出QA PASS、数値・論理再検算 `15 / 15 PASS`
- PowerPoint: 16:9・4スライド、表示QA `4 / 4 PASS`、overflow 0件、PPTX ZIP整合性PASS

判定: `PASS`。

## 仕様境界

追加していない範囲:

- Topic 05〜09で完成済みの誘導機等価回路、最大トルク、PWM回路詳細、ベクトル制御内部理論の再制作
- Topic 16以降の蓄電池・DCリンク・伝達関数・過渡応答・PID・安定判別・再粘着制御
- コンプレッサへのポンプ・ファン三乗則の無条件適用
- 未確認新幹線補機定格値の真値化

判定: `PASS`。

## 進捗記録整合

次の3箇所がGitHub正本の実成果物状態と不整合。

1. main source `## 状態`
   - `解説画像PowerPoint・完成後独立再解答は未着手`
   - `topic_15_practice_pdf_complete / IN_PROGRESS`
   - `次工程は解説画像PowerPoint`
   と記録されているが、PowerPoint、PowerPoint QA、独立再解答前ゲート、完成後独立再解答は実在しPASS済み。
2. main source末尾 `# 次工程`
   - `Topic 15の解説画像PowerPointを作成` のままで、実成果物状態より古い。
3. 練習source末尾 `# 次工程`
   - `Topic 15の解説画像PowerPointを作成` のままで、実成果物状態より古い。

技術本文、固定EXAM_ALIGNMENT、問題、正答、PDF/PPTXの修正は不要。上記3箇所の進捗文だけを実成果物へ同期した後、最終QAを再実施する。

判定: `NEEDS_REVISION`。

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`。

完成数は `14 / 22` のまま。次工程は進捗記録3箇所の同期。