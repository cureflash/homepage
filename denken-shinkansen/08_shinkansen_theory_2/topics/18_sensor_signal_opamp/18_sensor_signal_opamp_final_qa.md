# Topic 18 最終QA

テーマ: `18 新幹線のセンサ信号をどう増幅する？`

実施日: 2026-09-18

## 判定条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md`、GitHub正本の既存成果物を再照合した。固定EXAM_ALIGNMENT・技術本文・練習問題・正答・PDF/PPTXは変更しない。

`08 理論・二種` は一次理論中心であり、Topic 18は固定範囲だけで完答できる二次直接対応問題が確認できないため、固定一次5問・25答案要素を品質ゲート対象とする。二次数合わせは行わない。

## 確認結果

### 1. 必須成果物

GitHub正本上で以下の実在を再確認した。

- 解説source
- 制作前blind独立再解答記録
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

- R8 一次「理論」問8: `5 / 5 PASS`
- R1 一次「理論」問8: `5 / 5 PASS`
- H29 一次「理論」問8: `5 / 5 PASS`
- H23 一次「理論」問8: `5 / 5 PASS`
- H21 一次「理論」問8: `5 / 5 PASS`
- 完成後独立再解答合計: `25 / 25 PASS`
- 公式標準解答一致: `25 / 25`
- 完成教材内の理想条件・節点電位・KCL・反転／非反転・加算・差動・帰還抵抗網だけで再構成: `PASS`
- 教材外知識補完: `0件`

判定: `PASS`

### 3. 二次試験

R8二次は2026-09-18時点で未実施。R7〜R1二次「機械・制御」「電力・管理」を確認済みで、本Topicの固定範囲だけで完答できる直接対応記述問題は確認できないため、非採用を維持する。

- 二次採用: `0問`
- 二次数合わせ: `0件`

判定: `PASS`

### 4. SPEC境界

固定範囲は理想オペアンプ、反転増幅、非反転増幅、加算回路、差動増幅、積分回路、微分回路、コンパレータ。

利得帯域幅積・周波数補償、電圧安定化回路、発振回路、Topic 19のCT・VT・電圧／電流／電力測定、Topic 20の誤差・ブリッジ・サンプリング、未確認の実車センサ回路・回路定数・実装方式は追加していない。

判定: `PASS`

### 5. 表示QA・練習QA

既存QA記録を再照合した。

- 解説PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- 練習PDF: A4縦3ページ、200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`
- 練習12問: 数値再計算・論理QA `12 / 12 PASS`、正答一意性 `12 / 12 PASS`
- 固定5問・25答案要素への練習接続: `25 / 25`
- PowerPoint: 16:9・5スライド、表示QA `5 / 5 PASS`、overflow `0件`、PPTX ZIP整合性 `PASS`、PDF変換 `5 / 5 PASS`、PDF文字抽出QA `PASS`
- 固定5問・25答案要素の可視化: `25 / 25`

判定: `PASS`

### 6. 進捗記録整合

技術成果物・QA・完成後独立再解答は最終QA直前まで完了している一方、主sourceと練習sourceの進捗記録が旧工程のまま残っている。

1. `18_sensor_signal_opamp.md` 冒頭状態
   - 現在記録: stage `EXPLANATION_PDF_COMPLETE`
   - 現在記録: 次工程 `練習問題source＋練習PDF`
   - 実際: 練習PDF、PowerPoint、完成後独立再解答まで完了
2. `18_sensor_signal_opamp.md` 末尾
   - 現在記録: 次工程 `練習問題source＋練習PDF`
   - 実際: 完成後独立再解答まで完了
3. `18_sensor_signal_opamp_practice.md` 冒頭状態
   - 現在記録: stage `PRACTICE_PDF_COMPLETE`
   - 現在記録: 次工程 `解説画像PowerPoint＋表示QA`
   - 実際: PowerPoint、完成後独立再解答まで完了
4. `18_sensor_signal_opamp_practice.md` 末尾
   - 現在記録: 次工程 `解説画像PowerPoint＋表示QA`
   - 実際: 完成後独立再解答まで完了

進捗記録blocker: `4件`。

技術本文・固定EXAM_ALIGNMENT・練習問題・正答・PDF/PPTXに修正を要するblockerは `0件`。

判定: `NEEDS_REVISION / PROGRESS_RECORDS_OUT_OF_SYNC`

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`

固定一次5問・25答案要素の完成後独立再解答、二次採用判断、必須成果物、表示QA、練習QA、SPEC境界は全件PASSした。ただし主source・練習sourceの進捗記録4箇所がGitHub正本の実態と不整合のため、`FINAL_QA_COMPLETE` にはしない。

Topic 18の完成数は `17 / 21` のまま。次工程は主source・練習sourceの進捗記録同期。同期後に最終QAを再実施する。