# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-17

## 現在地

Topic 01〜12は `PASS / completed`。完成数は `12 / 21`。

current_status: `topic_13_final_qa_needs_revision`

active_topic: `13 新幹線の交流電力を複素数で扱う`

Topic 13は解説本文＋3段階例題、解説PDF＋表示QA、練習問題source＋練習PDF＋表示QA、解説画像PowerPoint＋表示QA、完成後独立再解答まで完了。初回最終QAを実施し、技術内容・過去問対応・成果物QAはPASSしたが、source内の旧進捗記録3箇所が実成果物と不整合のため `NEEDS_REVISION / IN_PROGRESS`。

次工程は技術内容を変更せず、主source2箇所＋練習source1箇所の旧進捗記録を実成果物へ同期する。完成数は `12 / 21` のまま。

## Topic 13 成果物

- source: `topics/13_complex_power/13_complex_power.md`
- 解説PDF: `topics/13_complex_power/13_complex_power_explanation.pdf`
- 解説PDF QA: `topics/13_complex_power/13_complex_power_explanation_pdf_qa.md`
- 練習source: `topics/13_complex_power/13_complex_power_practice.md`
- 練習PDF: `topics/13_complex_power/13_complex_power_practice.pdf`
- 練習PDF QA: `topics/13_complex_power/13_complex_power_practice_pdf_qa.md`
- PowerPoint: `topics/13_complex_power/13_complex_power_images.pptx`
- PowerPoint QA: `topics/13_complex_power/13_complex_power_powerpoint_qa.md`
- 完成後独立再解答: `topics/13_complex_power/13_complex_power_reanswer.md`
- 最終QA: `topics/13_complex_power/13_complex_power_final_qa.md`
- completion: `in_progress`

## Topic 13 固定範囲

系列SPECどおり次だけを扱う。

- 複素電力
- 有効電力
- 無効電力
- 皮相電力
- 力率
- `S = VI*`
- 電力三角形
- 電力円線図の概念

新幹線側は大容量交流負荷の例としてのみ使用する。

境界:

- 送電線の単位法・百分率インピーダンス・潮流計算を追加しない
- 送電線の電圧降下設計・電圧安定限界の導出へ広げない
- 調相設備・変圧器・同期機等の設備固有設計へ広げない
- 電力円線図は概念までとし、送電系統の詳細設計計算を追加しない
- Topic 14の高調波・非正弦波解析、Topic 15の過渡現象を先取りしない
- 未確認の新幹線主回路・変電設備の内部仕様や実設備値を推測しない

## Topic 13 固定EXAM_ALIGNMENT

品質ゲート対象は一次3問・15小問＋二次1問・4答案要素、合計 `4問・19答案要素`。

- R7 一次 理論 問3 (1)〜(5): 位相、`P=EIcosφ`、コンデンサによる電力条件変化
- H22 一次 理論 問2 (1)〜(5): RC回路の実効値・位相・消費有効電力
- H21 一次 理論 問3 (1)〜(5): 複素アドミタンス、フェーザ、平均電力
- R2 二次 電力・管理 問6 (1)〜(3): P/Q/S、総合力率、P-Qベクトル、力率改善

関連候補は一次・二次合わせ8件を確認した。H30二次「電力・管理」問3、H25二次「電力・管理」問4は電力円線図に直接関連するが、送電線モデル・単位法・電圧安定度等を要するため非採用。R7二次「電力・管理」問3も％インピーダンス・単位法・短絡容量を要するため非採用。R8二次は2026-09-17時点で未実施。

二次採用 `1問・4答案要素`、二次数合わせ `0件`。

## Topic 13 品質ゲート結果

### 制作前・本文

- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPEC: `PASS`
- 制作前独立再解答: `19 / 19 PASS`
- 固定4問・19答案要素の本文・例題接続: `19 / 19`
- 3段階例題: `3 / 3`
- SPEC固定範囲外追加: `0件`
- Topic 14以降の先取り: `0件`
- 未確認新幹線実設備値追加: `0件`

### 解説PDF

- A4縦4ページ
- 200 dpi表示QA: `4 / 4 PASS`
- 文字抽出QA: `PASS`
- 固定4問・19答案要素への接続: `19 / 19`

### 練習問題・PDF

- 12問・全問五肢択一
- 基礎3 / 本試験標準6 / 複合・ひっかけ3
- 独立再計算・論理QA: `12 / 12 PASS`
- 正答一意性: `12 / 12 PASS`
- 固定4問・19答案要素への接続: `19 / 19`
- PDF A4縦5ページ、200 dpi表示QA `5 / 5 PASS`
- 文字抽出QA: `PASS`

### PowerPoint

- 16:9 / 5枚
- 全スライド表示QA: `5 / 5 PASS`
- overflow: `0件`
- PPTX ZIP整合性: `PASS`
- 固定4問・19答案要素の可視化: `19 / 19`

### 完成後独立再解答

- 一次3問・15小問: `15 / 15 PASS`
- 二次R2「電力・管理」問6・4答案要素: `4 / 4 PASS`
- 合計: `19 / 19 PASS`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次数合わせ: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 13 初回最終QA

記録: `topics/13_complex_power/13_complex_power_final_qa.md`

- 必須成果物実在: `PASS`
- 固定一次3問・15小問＋二次1問・4答案要素の完成後独立再解答: `19 / 19 PASS`
- 二次採用1問・4答案要素、二次数合わせ0件: `PASS`
- 解説PDF・練習PDF・PowerPoint QA: `PASS`
- SPEC固定範囲境界: `PASS`
- 進捗記録整合: `FAIL`

残存する旧進捗記録:

1. 主source冒頭が `EXPLANATION_PDF_COMPLETE`、次工程「練習問題source＋練習PDF」のまま。
2. 主source末尾が練習問題・PowerPoint・完成後独立再解答を未完了扱いし、現在地も `EXPLANATION_PDF_COMPLETE`、次工程「練習問題source＋練習PDF」のまま。
3. 練習source冒頭が `PRACTICE_PDF_COMPLETE`、次工程「解説画像PowerPoint＋表示QA」のまま。

技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTXの修正は不要。

判定: `NEEDS_REVISION / IN_PROGRESS`

## 直前完了Topic

Topic 12「三相交流を新幹線へ渡す」は `PASS / completed`。

- 固定H23一次「理論」問6・5小問
- 完成後独立再解答 `5 / 5 PASS`
- 二次採用0問・二次数合わせ0件
- 解説source/PDF、練習source/PDF、PowerPoint、表示QA、最終QAまで完了
- 固定範囲外追加0件、未確認新幹線変電設備値追加0件

## 次に行うこと

Topic 13の主source冒頭・主source末尾・練習source冒頭の旧進捗記録だけを実成果物へ同期する。技術本文、固定EXAM_ALIGNMENT、問題・正答、PDF/PPTXは変更しない。同期後に最終QAを再実施する。