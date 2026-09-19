# 21 高速域の速度・けん引力・出力制御 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / COMPLETED`

最新main `2b34d7171abb6f01b3f7d5bf1bd0e4bf396423ef`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、当該系列 `SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 21の必須成果物・各QA・完成後clean blind記録・H26二次 問1(4) の不一致診断と教材注記反映後再確認をreconcileした。

直近の車両二種commitは `3ddc7d91fa579b62c4496d51fa3b24189ba11dd3`。それ以降のmain更新は他系列であり、Topic 21車両二種の技術成果物との競合はない。

## 1. 上位仕様確認

- `MASTER_SPEC.md`: 教材だけで対応過去問を自力解答できることを完了条件とする。
- `EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせ原則5問以上、二次対象論点では記述問題を含め、完成後に保存済み正答を見ず独立再解答する。
- 当該系列 `SPEC.md` Topic 21: 定トルク、定出力、電圧制限、電流制限、けん引力、主電動機出力、編成出力、走行抵抗。指定3可視化は速度―けん引力、速度―主電動機出力、速度―編成必要出力。

上位仕様確認: `PASS`。

## 2. 固定EXAM_ALIGNMENT

- H26 一次 機械 問5 `(4),(5)`: 2答案要素
- H25 一次 機械 問3 `(1)`: 1答案要素
- R7 二次 機械・制御 問2 `(1)のT1のみ`: 1答案要素
- R1 二次 機械・制御 問1 `(4)`: 1答案要素
- H26 二次 機械・制御 問1 `(4)`: 1答案要素
- 一次: `3答案要素`
- 二次: `3答案要素`
- 合計: `5問・6答案要素`
- 二次記述問題: `3問`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 3. 完成後clean blind

初回公式照合は、候補固定後に公式解答・標準解答を確認し、H26二次 問1(4) だけ `48.0 N·m / 48.1 N·m` の差で `5 / 6 PASS` となった。候補答案は後付け変更していない。

差異診断:
- 高精度 `π` と問題文値からは `48.046775... N·m → 48.0 N·m`
- 公式標準解答は `I2'=22.430 A`、`48.067 → 48.1 N·m`
- 公式掲載 `I2'=22.430 A` と `π=3.14` を用いると `48.067347... N·m` となり、公式掲載中間値を再現
- 一般式 `P=Tω`、`ω=2πN/60` は変更しない
- 当該過去問固有の数値処理差として解説source / 解説PDFへ注記
- PowerPointは当該個別数値計算を掲載していないため `SYNC_NOT_REQUIRED`

教材注記反映後clean blind再確認:
- H26二次 問1(4): `1 / 1 PASS`
- 一次: `3 / 3 PASS`
- 二次: `3 / 3 PASS`
- 合計: `6 / 6 PASS`
- 固定5問: `5 / 5 PASS`
- 候補答案変更: `0件`
- 他5答案要素変更: `0件`
- 固定問題差替え: `0件`
- 教材外知識による補完: `0件`

完成後clean blind品質ゲート: `PASS`。

## 4. 必須成果物

GitHub正本で実在を確認した。

- 主source: `21_high_speed_tractive_force_output_control.md`
- 解説source: `21_high_speed_tractive_force_output_control_explanation_source.md`
- 過去問固有gate補足: `21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md`
- 解説PDF / QA
- 練習source
- 練習PDF / QA
- 解説画像PowerPoint / QA
- clean blind候補答案
- 初回公式照合記録
- H26二次 問1(4) 不一致診断
- 教材注記反映後clean blind再確認

必須成果物: `PASS`。

## 5. 成果物QA

### 解説PDF

- A4縦3ページ
- PDFium / pdftoppm: `3 / 3 PASS / 3 / 3 PASS`
- 文字抽出・PDF構造: `PASS`
- 固定6答案要素接続: `6 / 6 covered`
- SPEC指定8項目 / 3可視化: `8 / 8`, `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- H26二次 問1(4) 過去問固有注記同期: `PASS`

### 練習PDF

- A4縦4ページ
- PDFium / pdftoppm: `4 / 4 PASS / 4 / 4 PASS`
- 一次8問＋二次4問、完全解説: `12 / 12`
- 数値・式・論理独立再計算: `12 / 12 PASS`
- 一次正答一意性: `8 / 8 PASS`
- 固定6答案要素接続: `6 / 6 PASS`
- SPEC指定8項目 / 3可視化接続: `8 / 8`, `3 / 3 PASS`
- 現行Git blobは初回QA作成commit `ba02ba2e96d3b07a2a82cad784cb550973a6c2c8` で追加された `91653394c2f2ae9a96e3f66321478ebce910a752` のまま変更なし

### PowerPoint

- 16:9・4スライド
- python-pptx open / ZIP整合性: `PASS / PASS`
- LibreOffice PDF変換 / 表示QA: `4 / 4 PASS`
- スライド外周クリップ: `0件`
- 固定6答案要素接続: `6 / 6 PASS`
- SPEC指定8項目 / 3可視化: `8 / 8`, `3 / 3 PASS`
- H26二次 問1(4) 個別数値注記: `SYNC_NOT_REQUIRED`

成果物QA: `PASS`。

## 6. SPEC境界

- 固定8項目: `8 / 8 covered`
- 指定3可視化: `3 / 3 covered`
- V/f・すべり・誘導機等価回路の独立再展開: `0件`
- 加速抵抗・勾配抵抗・加速曲線の追加: `0件`
- 損失・発熱・冷却・温度上昇の追加: `0件`
- 詳細ベクトル制御、粘着・再粘着制御、空力設計、実車ギヤ比・駆動効率の追加: `0件`
- 未確認N700系実車値の真値化: `0件`
- `P=Fv`・走行抵抗を固定過去問で直接出題されたとする記載: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`

SPEC境界: `PASS`。

## 7. 進捗整合

最終QA直前の正本:
- `STATUS.md`: `topic_21_h26_clean_blind_recheck_passed`
- `HANDOFF.md`: 同状態、次工程は最終完了QA
- 主source: 技術内容・固定EXAM_ALIGNMENTは正本だが、進捗欄は解説source完了時点のまま

技術成果物・QA・clean blind品質ゲートには新たな不整合なし。最終QA PASS後、主source・`STATUS.md`・`HANDOFF.md` の進捗欄だけを `completed` / `21 / 39` / Topic 22開始へ同期する。技術本文、固定EXAM_ALIGNMENT、問題・正答、数式、PDF/PPTXは変更しない。

進捗記録同期条件: `PASS`。

## 8. 最終判定

- 技術内容: `PASS`
- 固定5問・6答案要素: `PASS`
- 完成後clean blind: `6 / 6 PASS`
- 必須成果物: `PASS`
- PDF/PPTX QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 仕様外追加: `0件`
- 新たなexact blocker: `0件`

Topic 21 は `completed`。完成数は `21 / 39`。次の未完了テーマは Topic 22「E5系 再粘着制御」。次工程は制作前EXAM_ALIGNMENT。
