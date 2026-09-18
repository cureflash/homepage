# Topic 17 最終QA

テーマ: `17 GTO・IGBT・SiCはどうやって電流を操る？`

実施日: 2026-09-18

## 判定条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本の既存成果物を再照合した。固定EXAM_ALIGNMENT・技術本文・練習問題・正答・PDF/PPTXは変更しない。

`08 理論・二種` は一次理論中心であり、Topic 17は固定範囲だけで完答できる二次直接対応問題が確認できないため、固定一次5問・25答案要素を品質ゲート対象とする。二次数合わせは行わない。

## 確認結果

### 1. 必須成果物

GitHub正本上で以下の実在を再確認した。

- 解説source
- 解説PDF
- 解説PDF QA
- 練習source
- 練習PDF
- 練習PDF QA
- 解説画像PowerPoint
- PowerPoint QA
- 完成後独立再解答記録
- 本最終QA記録

判定: `PASS`

### 2. 過去問対応品質ゲート

固定EXAM_ALIGNMENTは一次5問・25答案要素。

- R7 一次「理論」問8: `5 / 5 PASS`
- R5 一次「理論」問7: `5 / 5 PASS`
- H30 一次「理論」問7: `5 / 5 PASS`
- H28 一次「理論」問7: `5 / 5 PASS`
- H27 一次「理論」問7: `5 / 5 PASS`
- 完成後独立再解答合計: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 教材だけでBJTのバイアス・動作点、エミッタ接地増幅、エミッタフォロワ、MOSFETの相互コンダクタンス、CMOS ON/OFF、容量性負荷 `Q=CV` を再構成: `PASS`
- 教材外知識補完: `0件`

判定: `PASS`

### 3. 二次試験

R8二次は2026-09-18時点で未実施。R7二次「機械・制御」問3のダイオードブリッジ、R6二次「機械・制御」問3のチョッパ、R5二次「機械・制御」問3の電力用能動フィルタは変換器回路が主題であり、Topic 17固定範囲だけでは完答できないため非採用を維持する。

- 二次採用: `0問`
- 二次数合わせ: `0件`

判定: `PASS`

### 4. SPEC境界

固定範囲はバイポーラトランジスタ、FET、MOSFET、IGBT、GTOの概念、SiCデバイスの概念、増幅、動作点、負荷線、スイッチング、電力損失。

変換器としての整流器・チョッパ・インバータ詳細計算、負帰還理論の主題化、Topic 18以降のオペアンプ論点、未確認の新幹線主変換装置仕様は追加していない。

判定: `PASS`

### 5. 表示QA・練習QA

既存QA記録を再照合した。

- 解説PDF: A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA `PASS`
- 練習PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA `PASS`
- 練習12問: 数値再計算・論理QA `12 / 12 PASS`、正答一意性 `12 / 12 PASS`
- 固定5問・25答案要素への練習接続: `25 / 25`
- PowerPoint: 16:9・5スライド、表示QA `5 / 5 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`、PDF変換 `5 / 5 PASS`、PDF文字抽出QA `PASS`
- 固定5問・25答案要素の可視化: `25 / 25`

判定: `PASS`

### 6. 初回blocker解消確認

初回最終QAで指摘した進捗記録4箇所を再照合した。

1. `17_transistor_fet_switching.md` 冒頭状態
   - stage: `PROGRESS_RECORDS_SYNCED`
   - completion: `in_progress`
   - 品質ゲート: 一次5問・25答案要素 `25 / 25 PASS`
   - 二次採用: `0問`
   - 二次数合わせ: `0件`
   - 次工程: `最終QA再実施`
2. `17_transistor_fet_switching.md` 末尾
   - 次工程: `最終QAを再実施する`
3. `17_transistor_fet_switching_practice.md` 冒頭状態
   - stage: `PROGRESS_RECORDS_SYNCED`
   - completion: `in_progress`
   - 次工程: `最終QA再実施`
4. `17_transistor_fet_switching_practice.md` 末尾
   - 次工程: `最終QA再実施`

初回blocker解消: `4 / 4 PASS`。

技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF/PPTXの変更は `0件`。

判定: `PASS`

### 7. 進捗記録整合

主source・練習source・STATUS・HANDOFF・実成果物の現在地は、最終QA再実施直前まで整合している。本QAのPASSをSTATUS・HANDOFFへ反映し、completed状態同期は次工程として分離する。

判定: `PASS`

## 最終判定

`PASS / FINAL_QA_COMPLETE`

固定一次5問・25答案要素の完成後独立再解答、二次採用判断、必須成果物、表示QA、練習QA、SPEC境界、初回blocker4件の解消を全件確認した。

Topic 17は最終QAを通過したが、completed状態同期はまだ行わない。完成数は `16 / 21` のまま。次工程は主source・練習source・STATUS・HANDOFFのcompleted状態同期。