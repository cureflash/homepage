# Topic 12 最終QA

更新日: 2026-09-16

対象: `12 N700Sの6極モーターを設計側から見る`

## 上位仕様確認

- `denken-shinkansen/MASTER_SPEC.md`: 確認
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`: 確認
- `denken-shinkansen/07_shinkansen_machine_2/SPEC.md`: 確認
- 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含める品質ゲート: 遵守

## 固定EXAM_ALIGNMENT

固定過去問は一次2問＋二次記述3問、計5問、16答案要素。

- R07 一次 機械 問2: (2),(5)
- H25 一次 機械 問3: (1),(2)
- R07 二次 機械・制御 問2: (1),(3)
- R02 二次 機械・制御 問1: (1)〜(4)
- R01 二次 機械・制御 問1: (1)〜(4)

完成後独立再解答: `16 / 16 PASS`

教材外知識補完: `0件`

## 必須成果物

- main source Markdown: 実在
- 解説PDF: 実在 / A4縦4ページ / Visual QA `4 / 4 PASS` / 文字抽出QA PASS
- 練習source: 実在 / 一次10問＋二次5問 / 独立計算・論理再検算 `15 / 15 PASS`
- 練習PDF: 実在 / A4縦4ページ / Visual QA `4 / 4 PASS` / 文字抽出QA PASS
- 解説画像PowerPoint: 実在 / 16:9・4枚 / Visual QA `4 / 4 PASS` / overflow `0件` / ZIP整合性 PASS
- 独立再解答記録: 実在

## 固定範囲境界

- Topic 05〜06の等価回路・最大トルク詳細追加: `0件`
- Topic 09のV/f・ベクトル制御追加: `0件`
- Topic 11の半導体損失・熱設計追加: `0件`
- Topic 13以降の同期機論点追加: `0件`
- 未確認N700S主電動機定格・インバータ電圧電流・歯車比・車輪径・質量等の実値化: `0件`

## 進捗記録整合

FAIL。教材内容や成果物ではなく、source末尾の進捗記録2件が実成果物より古い。

1. `12_n700s_six_pole_motor_design.md` の `# 次工程` が「解説PDFまで完成。次は練習問題source」となっているが、練習source・練習PDF・PowerPoint・独立再解答まで完了済み。
2. `12_n700s_six_pole_motor_design_practice.md` の `# 次工程` が「次は練習PDFへ反映」となっているが、練習PDF・PowerPoint・独立再解答まで完了済み。

## 判定

`NEEDS_REVISION / IN_PROGRESS`

固定過去問対応、独立再解答、必須成果物、PDF/PPTX QA、固定範囲境界はPASS。未完了理由は上記進捗記録2件のみ。Topic 12を `completed` にはしない。

次工程: main sourceと練習sourceの旧 `次工程` を実成果物へ同期し、その後最終QAを再実施する。
