# Topic 16 最終QA

テーマ: `16 300系の半導体はなぜ電流を一方向へ流せる？`

実施日: 2026-09-18

## 判定条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本の既存成果物を再照合した。固定EXAM_ALIGNMENT・技術本文・練習問題・正答・PDF/PPTXは変更しない。

`08 理論・二種` は一次理論中心であり、Topic 16は固定範囲だけで完答できる二次直接対応問題が確認できないため、固定一次5問・25答案要素を品質ゲート対象とする。二次数合わせは行わない。

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

- R8 一次「理論」問7: `5 / 5 PASS`
- H30 一次「理論」問4: `5 / 5 PASS`
- H26 一次「理論」問7: `5 / 5 PASS`
- H24 一次「理論」問4: `5 / 5 PASS`
- H22 一次「理論」問7: `5 / 5 PASS`
- 完成後独立再解答合計: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 教材だけで真性・n形・p形半導体、`pn=n_i^2`、pn接合、空乏層、電荷中性、ガウスの法則、電界・電位、順逆バイアス、指数的I-V特性を再構成: `PASS`
- 教材外知識補完: `0件`

判定: `PASS`

### 3. 二次試験

R8二次は2026-09-18時点で未実施（2026-11-15実施予定）。R7二次「機械・制御」問3の単相ダイオードブリッジ、R6二次「機械・制御」問3のチョッパはパワーエレクトロニクス回路が主題であり、Topic 16固定範囲だけでは完答できないため非採用を維持する。R5二次にも固定範囲だけで完答する直接対応問題は確認できない。

- 二次採用: `0問`
- 二次数合わせ: `0件`

判定: `PASS`

### 4. SPEC境界

固定範囲は導体・半導体、真性半導体、n形、p形、電子、正孔、キャリア、pn接合、空乏層、順方向/逆方向バイアス、ダイオード特性。

降伏機構の詳細、整流・チョッパ・インバータ回路、Topic 17のトランジスタ/FET/MOSFET/IGBT/GTO/SiC、未確認の300系主変換装置仕様は追加していない。

判定: `PASS`

### 5. 表示QA・練習QA

既存QA記録を再照合した。

- 解説PDF: A4縦2ページ、200 dpi表示QA `2 / 2 PASS`、文字抽出QA `PASS`
- 練習PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- 練習12問: 数値再計算・論理QA `12 / 12 PASS`、正答一意性 `12 / 12 PASS`
- 固定5問・25答案要素への練習接続: `25 / 25`
- PowerPoint: 16:9・5スライド、表示QA `5 / 5 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`、PDF変換 `5 / 5 PASS`、PDF文字抽出QA `PASS`
- 系列SPEC指定可視化（真性/n形/p形、pn接合・空乏層、電荷中性、電界・電位、順逆バイアス、指数的I-V特性）: `PASS`
- 固定5問・25答案要素の可視化: `25 / 25`

判定: `PASS`

### 6. 進捗記録整合

実成果物・HANDOFF・STATUSはPowerPoint完成、完成後独立再解答 `25 / 25 PASS`、次工程「最終QA」を示している。一方、以下の4記録箇所が実状態より古い。

1. `16_semiconductor_diode.md` 冒頭状態
   - stage: `PRACTICE_PDF_COMPLETE`
   - PowerPoint完成・完成後独立再解答の状態が未反映
   - 次工程: 解説画像PowerPoint＋表示QA
2. `16_semiconductor_diode.md` 末尾
   - 「次工程: 解説画像PowerPoint＋表示QA」のまま
3. `16_semiconductor_diode_practice.md` 冒頭状態
   - stage: `PRACTICE_PDF_COMPLETE`
   - 次工程: 解説画像PowerPoint＋表示QA
4. `16_semiconductor_diode_practice.md` 末尾
   - 「次工程: 解説画像PowerPoint＋表示QA」のまま

技術内容・固定EXAM_ALIGNMENT・問題・正答の不整合ではなく、進捗記録だけの不整合である。ただしGitHub正本の状態記録が実成果物と矛盾しているため、この状態では `completed` にしない。

判定: `NEEDS_REVISION`

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`

固定一次5問・25答案要素の独立再解答、二次採用判断、必須成果物、表示QA、練習QA、SPEC境界は全件PASS。blockerは主source・練習sourceの旧進捗記録4箇所のみ。

次工程は、上記4箇所を既存成果物の実状態へ同期すること。固定EXAM_ALIGNMENT・技術本文・練習問題・正答・PDF/PPTXは変更しない。同期後に最終QAを再実施し、PASS確認後にcompleted状態へ進める。完成数は `15 / 21` のまま。