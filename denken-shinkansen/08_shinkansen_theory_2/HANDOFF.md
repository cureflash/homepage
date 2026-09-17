# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜15は `PASS / completed`。完成数は `15 / 21`。

current_status: `topic_16_powerpoint_complete`

active_topic: `16 300系の半導体はなぜ電流を一方向へ流せる？`

Topic 16は解説画像PowerPoint＋表示QAまで完了。固定一次5問・25答案要素を `25 / 25` 可視化。PowerPointは16:9・5枚、200 dpi全スライド表示QA `5 / 5 PASS`、shape geometry overflow `0件`、PPTX ZIP整合性 `PASS`、PDF変換5ページ `PASS`、PDF文字抽出 `PASS`。二次採用0問・数合わせ0件、降伏機構の詳細、整流・チョッパ・インバータ回路、Topic 17、未確認300系主変換装置仕様の追加0件。次工程は完成後独立再解答。

## Topic 16 成果物

- source: `topics/16_semiconductor_diode/16_semiconductor_diode.md`
- 解説PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation.pdf`
- 解説PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation_pdf_qa.md`
- 練習source: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.md`
- 練習PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.pdf`
- 練習PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_practice_pdf_qa.md`
- 解説画像PowerPoint: `topics/16_semiconductor_diode/16_semiconductor_diode_images.pptx`
- PowerPoint QA: `topics/16_semiconductor_diode/16_semiconductor_diode_powerpoint_qa.md`
- completion: `in_progress`
- stage: `POWERPOINT_COMPLETE`

## Topic 16 固定範囲

系列SPECどおり次だけを扱う。

- 導体・半導体
- 真性半導体
- n形半導体
- p形半導体
- 電子
- 正孔
- キャリア
- pn接合
- 空乏層
- 順方向バイアス
- 逆方向バイアス
- ダイオード特性

300系主変換装置は導入に限定する。整流器・チョッパ・インバータ等のパワーエレクトロニクス回路そのものは機械編へ譲る。Topic 17のトランジスタ、FET、MOSFET、IGBT、GTO、SiC、増幅、動作点、負荷線、スイッチング、電力損失は先取りしない。

## Topic 16 固定EXAM_ALIGNMENT

品質ゲート対象は一次5問・25答案要素。

- R8 一次 理論 問7: pn接合、空乏層、ガウスの法則、電界・電位、順方向電流
- H30 一次 理論 問4: 真性キャリア濃度、`pn=n_i^2`、n形半導体、多数・少数キャリア
- H26 一次 理論 問7: p形・n形、正孔、空乏層、順方向/逆方向バイアス、整流作用
- H24 一次 理論 問4: pn接合、空乏層電荷、電界、電位差、逆方向側の特性
- H22 一次 理論 問7: pn接合、空乏層、電界・電位、電位障壁、順方向バイアス、指数特性

一次・二次合わせ関連候補12件を確認済み。R6一次問7、H28一次問4は移動度等が主題、R4一次問6は降伏機構の詳細、R5一次問7はMOSFETでTopic 17のため非採用。R7二次機械・制御問3、R6二次機械・制御問3はダイオードを含むがパワーエレクトロニクス回路そのものが主題なので非採用。R5二次に固定範囲だけで完答する直接対応問題は確認できなかった。R8二次は2026-09-17時点で未実施。

- 公式問題・公式標準解答照合: `25 / 25`
- 制作前独立導出: `25 / 25 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

## 既完成QA

- 解説本文必須説明: `17 / 17 covered`
- 解説本文の固定一次5問・25答案要素接続: `25 / 25`
- 3段階例題: `3 / 3`
- 解説PDF: A4縦2ページ、200 dpi `2 / 2 PASS`、文字抽出 `PASS`
- 練習問題: 12問・全問五肢択一、基礎3 / 本試験標準6 / 複合・ひっかけ3
- 練習問題の数値再計算・論理QA: `12 / 12 PASS`
- 練習問題の正答一意性: `12 / 12 PASS`
- 練習PDF: A4縦3ページ、200 dpi `3 / 3 PASS`、文字抽出 `PASS`

## Topic 16 PowerPoint QA

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_powerpoint_qa.md`

- 16:9 / 5枚
- SHA-256: `4b10275c7486b446273954fe9810e9ade7197db97ad77a7ab0f32f4b529e8194`
- 200 dpi全スライド表示QA: `5 / 5 PASS`
- shape geometry overflow: `0件`
- PPTX ZIP整合性: `PASS`
- PDF変換: `5ページ / PASS`
- PDF文字抽出QA: `PASS`
- 固定一次5問・25答案要素の可視化: `25 / 25`
- 最終スライドの公式過去問出典: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC固定範囲外追加: `0件`
- 降伏機構の詳細追加: `0件`
- 整流・チョッパ・インバータ回路追加: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / POWERPOINT_COMPLETE`

## 次工程

Topic 16 完成後独立再解答。固定一次5問・25答案要素を教材成果物だけで独立に解き直し、公式標準解答一致と途中導出を再確認する。二次は採用0問の判断を維持し、数合わせしない。
