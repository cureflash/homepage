# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-18

## 現在地

Topic 01〜17は `PASS / completed`。完成数は `17 / 21`。

current_status: `topic_18_reanswer_complete`

active_topic: `18 新幹線のセンサ信号をどう増幅する？`

Topic 18は制作前EXAM_ALIGNMENT、制作前blind独立再解答、解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF、解説画像PowerPoint＋表示QA、完成後独立再解答まで完了。固定一次5問・25答案要素は完成教材だけで再構成し `25 / 25 PASS`、公式標準解答とも `25 / 25` 一致。二次採用0問・二次数合わせ0件。次工程は最終QA。

## Topic 18 成果物

- source: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp.md`
- 制作前blind独立再解答: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_blind_reanswer.md`
- 解説PDF: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_explanation.pdf`
- 解説PDF QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_explanation_pdf_qa.md`
- 練習source: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.md`
- 練習PDF: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice.pdf`
- 練習PDF QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_practice_pdf_qa.md`
- PowerPoint: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_images.pptx`
- PowerPoint QA: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_powerpoint_qa.md`
- 完成後独立再解答: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_reanswer.md`
- completion: `in_progress`
- stage: `INDEPENDENT_REANSWER_COMPLETE`

## Topic 18 固定範囲

系列SPECどおり次だけを扱う。

- 理想オペアンプ
- 反転増幅
- 非反転増幅
- 加算回路
- 差動増幅
- 積分回路
- 微分回路
- コンパレータ

センサ信号処理は教育用モデルとして扱い、実車の特定センサ回路・回路定数・実装方式を確認なしに断定しない。Topic 19のCT・VT・電圧／電流／電力測定、Topic 20の誤差・ブリッジ・サンプリングは先取りしない。

## Topic 18 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R8 一次 理論 問8: 理想オペアンプ、重ね合わせ、反転／非反転側寄与、減算回路
- R1 一次 理論 問8: 理想オペアンプ、加算回路、KCL、負の重み付き和
- H29 一次 理論 問8: 仮想接地、反転増幅、KCL、帰還抵抗網、電圧利得
- H23 一次 理論 問8: 二入力、非反転側分圧、仮想短絡、反転側KCL、出力条件
- H21 一次 理論 問8: 仮想接地、入力電流0、T形帰還抵抗網、反転増幅

直近候補も確認し、R4一次理論問7は利得帯域幅積・周波数特性、R2一次理論問8は電圧安定化・トランジスタ・損失計算、H26一次理論問8は発振回路が固定範囲外体系として必要になるため品質ゲートへ採用しない。R8二次は2026-09-18時点で未実施。R7〜R1二次「機械・制御」「電力・管理」を確認したが、固定範囲だけで完答する直接対応記述問題は確認できなかった。

- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 19以降の先取り: `0件`
- 実車の特定センサ回路・定数の未確認追加: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## Topic 18 制作前blind独立再解答

記録: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_blind_reanswer.md`

- R8 一次 理論 問8: `ニ / ヨ / ヌ / ホ / リ` → `5 / 5 PASS`
- R1 一次 理論 問8: `ヨ / イ / ト / ロ / ヲ` → `5 / 5 PASS`
- H29 一次 理論 問8: `カ / ハ / ロ / ホ / ヘ` → `5 / 5 PASS`
- H23 一次 理論 問8: `ヌ / ト / ル / ニ / ヲ` → `5 / 5 PASS`
- H21 一次 理論 問8: `ル / ニ / ホ / ハ / チ` → `5 / 5 PASS`
- 固定一次合計: `25 / 25 PASS`
- 公式標準解答との一致: `25 / 25`
- 公式標準解答・保存済み正答の先見: `0件`
- 二次採用方針変更: `0件`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19以降の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `PASS / BLIND_REANSWER_COMPLETE`

## Topic 18 解説本文＋3段階例題

- SPEC固定範囲: `8 / 8収録`
- 過去問から逆算した必須説明: `15 / 15収録`
- 固定一次5問: `5 / 5接続`
- 固定一次25答案要素: `25 / 25接続`
- 3段階例題: `3 / 3`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19以降の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## Topic 18 解説PDF QA

- A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `4ce0b422f055cf5f02786cb28e1b87baa2a11f8966cc6bfbc7a711605a5614c3`
- 固定一次5問・25答案要素への教材内接続: `25 / 25`
- EXAM_ALIGNMENT必須説明15項目: `15 / 15 covered`
- 3段階例題: `3 / 3`
- 例題数値再計算: `3 / 3 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `PASS / EXPLANATION_PDF_COMPLETE`

## Topic 18 練習問題＋練習PDF QA

- 問題数: `12問`
- 形式: `全問五肢択一`
- 難易度: `基礎3 / 本試験標準6 / 複合・ひっかけ3`
- A4縦3ページ
- 200 dpi全ページ表示QA: `3 / 3 PASS`
- 文字抽出QA: `PASS`
- SHA-256: `14da420cc2667d859029fd61abbbc17feb78732f2b3db1d4464a959137e1d6c8`
- 数値再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定一次5問・25答案要素への接続: `25 / 25`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## Topic 18 解説画像PowerPoint QA

記録: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_powerpoint_qa.md`

- 16:9 / 5枚
- 200 dpi全スライド表示QA: `5 / 5 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `5ページ / PASS`
- PDF文字抽出QA: `PASS`
- SHA-256: `fdbbe6bb0f639b4fe422de0813a07e99ee1fd87ab5662cd88e7b73305a69dea2`
- SPEC固定範囲8項目の可視化: `8 / 8`
- 固定一次5問・25答案要素の可視化: `25 / 25`
- 最終スライドに公式過去問出典: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## Topic 18 完成後独立再解答

記録: `topics/18_sensor_signal_opamp/18_sensor_signal_opamp_reanswer.md`

- R8 一次 理論 問8: `ニ / ヨ / ヌ / ホ / リ` → `5 / 5 PASS`
- R1 一次 理論 問8: `ヨ / イ / ト / ロ / ヲ` → `5 / 5 PASS`
- H29 一次 理論 問8: `カ / ハ / ロ / ホ / ヘ` → `5 / 5 PASS`
- H23 一次 理論 問8: `ヌ / ト / ル / ニ / ヲ` → `5 / 5 PASS`
- H21 一次 理論 問8: `ル / ニ / ホ / ハ / チ` → `5 / 5 PASS`
- 固定一次合計: `25 / 25 PASS`
- 公式標準解答との一致: `25 / 25`
- 完成教材内の理想条件・節点電位・KCL・反転／非反転・加算・差動・帰還抵抗網だけで再構成: `PASS`
- 教材外知識補完: `0件`
- 二次採用方針変更: `0件`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- Topic 19・20の先取り: `0件`
- 実車の特定センサ回路・回路定数・実装方式の未確認追加: `0件`

判定: `25 / 25 PASS / INDEPENDENT_REANSWER_COMPLETE`

## 次工程

Topic 18の最終QAを実施し、必須成果物、固定一次5問・25答案要素、完成後独立再解答、PDF/PPTX QA、仕様境界、進捗記録整合を総合判定する。
