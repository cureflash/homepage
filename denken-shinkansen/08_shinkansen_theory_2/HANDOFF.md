# HANDOFF - 新幹線・電験二種「理論」

更新日: 2026-09-18

## 現在地

Topic 01〜16は `PASS / completed`。完成数は `16 / 21`。

current_status: `topic_16_completed`

active_topic: `17 GTO・IGBT・SiCはどうやって電流を操る？`

Topic 16はcompleted状態同期まで完了。固定一次5問・25答案要素の完成後独立再解答 `25 / 25 PASS`、二次採用0問・数合わせ0件、必須成果物、表示QA、練習QA、SPEC境界、初回blocker4件の解消を全件確認済み。判定は `PASS / completed`。次工程はTopic 17の制作前EXAM_ALIGNMENT。

## Topic 16 成果物

- source: `topics/16_semiconductor_diode/16_semiconductor_diode.md`
- 解説PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation.pdf`
- 解説PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_explanation_pdf_qa.md`
- 練習source: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.md`
- 練習PDF: `topics/16_semiconductor_diode/16_semiconductor_diode_practice.pdf`
- 練習PDF QA: `topics/16_semiconductor_diode/16_semiconductor_diode_practice_pdf_qa.md`
- 解説画像PowerPoint: `topics/16_semiconductor_diode/16_semiconductor_diode_images.pptx`
- PowerPoint QA: `topics/16_semiconductor_diode/16_semiconductor_diode_powerpoint_qa.md`
- 完成後独立再解答: `topics/16_semiconductor_diode/16_semiconductor_diode_reanswer.md`
- 最終QA: `topics/16_semiconductor_diode/16_semiconductor_diode_final_qa.md`
- completion: `completed`
- stage: `COMPLETED`

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

一次・二次合わせ関連候補12件を確認済み。R6一次問7、H28一次問4は移動度等が主題、R4一次問6は降伏機構の詳細、R5一次問7はMOSFETでTopic 17のため非採用。R7二次機械・制御問3、R6二次機械・制御問3はダイオードを含むがパワーエレクトロニクス回路そのものが主題なので非採用。R5二次に固定範囲だけで完答する直接対応問題は確認できなかった。R8二次は2026年11月15日実施予定で、2026年9月18日時点では未実施。

- 公式問題・公式標準解答照合: `25 / 25`
- 制作前独立導出: `25 / 25 PASS`
- 完成後独立再解答: `25 / 25 PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- Topic 17先取り: `0件`
- 未確認300系主変換装置仕様追加: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## 既完成QA

- 解説本文必須説明: `17 / 17 covered`
- 解説本文の固定一次5問・25答案要素接続: `25 / 25`
- 3段階例題: `3 / 3`
- 解説PDF: A4縦2ページ、200 dpi `2 / 2 PASS`、文字抽出 `PASS`
- 練習問題: 12問・全問五肢択一、基礎3 / 本試験標準6 / 複合・ひっかけ3
- 練習問題の数値再計算・論理QA: `12 / 12 PASS`
- 練習問題の正答一意性: `12 / 12 PASS`
- 練習PDF: A4縦3ページ、200 dpi `3 / 3 PASS`、文字抽出 `PASS`
- PowerPoint: 16:9・5枚、200 dpi `5 / 5 PASS`、shape geometry overflow `0件`、PPTX ZIP整合性 `PASS`、PDF変換5ページ `PASS`、PDF文字抽出 `PASS`

## Topic 16 完成後独立再解答

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_reanswer.md`

- R8 一次 理論 問7: `5 / 5 PASS`
- H30 一次 理論 問4: `5 / 5 PASS`
- H26 一次 理論 問7: `5 / 5 PASS`
- H24 一次 理論 問4: `5 / 5 PASS`
- H22 一次 理論 問7: `5 / 5 PASS`
- 固定一次合計: `25 / 25 PASS`
- 公式標準解答との一致: `25 / 25`
- 教材外知識補完: `0件`
- SPEC固定範囲外追加: `0件`
- 二次採用方針変更: `0件`
- 二次数合わせ: `0件`

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

## Topic 16 初回最終QA

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_final_qa.md`

- 必須成果物: `PASS`
- 固定一次5問・25答案要素の完成後独立再解答: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 二次採用判断: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC境界: `PASS`
- PDF/PPTX表示QA・練習QA: `PASS`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答の不整合: `0件`
- 進捗記録blocker: `4箇所`
  - 主source冒頭状態
  - 主source末尾「次工程」
  - 練習source冒頭状態
  - 練習source末尾「次工程」

初回判定: `NEEDS_REVISION / IN_PROGRESS`

## Topic 16 進捗記録同期

初回最終QAのblocker 4箇所を実成果物状態へ同期した。

- 主source冒頭: `PROGRESS_RECORDS_SYNCED / IN_PROGRESS`、次工程「最終QA再実施」へ更新
- 主source末尾: 次工程「最終QA再実施」へ更新
- 練習source冒頭: `PROGRESS_RECORDS_SYNCED / IN_PROGRESS`、次工程「最終QA再実施」へ更新
- 練習source末尾: 次工程「最終QA再実施」へ更新
- 技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF/PPTX変更: `0件`

判定: `PASS / PROGRESS_RECORDS_SYNCED`

## Topic 16 最終QA再実施

記録: `topics/16_semiconductor_diode/16_semiconductor_diode_final_qa.md`

- 必須成果物: `PASS`
- 固定一次5問・25答案要素の完成後独立再解答: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 二次採用判断: `PASS`
- 二次採用: `0問`
- 二次数合わせ: `0件`
- SPEC境界: `PASS`
- PDF/PPTX表示QA・練習QA: `PASS`
- 初回blocker解消: `4 / 4 PASS`
- 技術本文・固定EXAM_ALIGNMENT・問題・正答・PDF/PPTX変更: `0件`

判定: `PASS / FINAL_QA_COMPLETE`

## Topic 16 completed状態同期

主source・練習source・STATUS・HANDOFFを実成果物状態へ同期した。

- 主source: `completion: completed`、`stage: COMPLETED`
- 練習source: `completion: completed`、`stage: COMPLETED`
- STATUS: 完成数 `16 / 21`、Topic 17をactiveへ更新
- HANDOFF: Topic 01〜16 `PASS / completed` へ更新
- 技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF/PPTX変更: `0件`

判定: `PASS / completed`

## 次工程

Topic 17「GTO・IGBT・SiCはどうやって電流を操る？」の制作前EXAM_ALIGNMENTを行う。