# 22 E5系 再粘着制御 — 最終QA

更新日: 2026-09-19

## 判定

`PASS / COMPLETED`

latest main `3c51568fa7a02877d581baae8dfe584979eb28bb`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、最新 `STATUS.md` / `HANDOFF.md`、Topic 22の必須成果物・各QA・clean blind候補固定と公式照合をreconcileした。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として既に解決済みであり、一般式は変更していない。Topic 22への影響はない。

## 1. 上位仕様

- `MASTER_SPEC.md`: 対応過去問を教材だけで自力解答できることを完了条件とする。
- `EXAM_ALIGNMENT_SPEC.md`: 二種は一次・二次を合わせて原則5問以上を固定し、完成後に保存済み正答を見ず独立再解答する。
- 系列 `SPEC.md` Topic 22: 粘着係数、粘着限界、空転、滑走、速度差検出、トルク指令、再粘着、フィードバックの8項目。指定3可視化は粘着限界―速度、指令トルク―粘着限界、簡略再粘着応答。

上位仕様: `PASS`。

## 2. 固定EXAM_ALIGNMENT

- H28 一次「機械」問5 `(4),(5)`: 2答案要素 / 直接
- R2 一次「機械」問3 `(1)`: 1答案要素 / 橋渡し
- R7 二次「機械・制御」問2 `s1`,`N2`: 2答案要素 / 橋渡し
- R2 二次「機械・制御」問1 `(2),(3),(4)`: 3答案要素 / 橋渡し
- H21 二次「機械・制御」問4 `(4),(5a),(5b)`: 3答案要素 / 橋渡し
- 一次: `3答案要素`
- 二次: `8答案要素`
- 合計: `5問・11答案要素`
- 固定EXAM_ALIGNMENT変更: `0件`

固定EXAM_ALIGNMENT: `PASS`。

## 3. clean blind独立再解答

有効候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定済み。その後の公式照合で次を確認した。

- 一次: `3 / 3 PASS`
- 二次: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

先行 `10 / 11` 記録は、Topic 22が前提参照を許可しているTopic 20フィードバック制御教材を参照範囲から外したworkerの診断だった。有効候補は許可されたTopic 20既習内容を用い、H21問4 `(5a)` を公式照合前に正しく導出しているため、教材欠落の確定証拠とは扱わない。Topic 22本文・一般式・PDF/PPTXへの過去問固有式追加は不要。

clean blind品質ゲート: `PASS`。

## 4. 必須成果物

GitHub正本で実在を確認した。

- 主source: `22_e5_readhesion_control.md`
- 解説source: `22_e5_readhesion_control_explanation_source.md`
- 解説PDF / QA
- 練習source
- 練習PDF / QA
- 解説画像PowerPoint / QA
- clean blind候補固定記録
- clean blind公式照合記録

必須成果物: `PASS`。

## 5. 成果物QA

### 解説source / PDF

- 固定5問・11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3`
- 3段階例題: `3 / 3`
- 解説PDF: A4縦 `5 pages`
- PDFium / Poppler: `5 / 5 PASS`

### 練習source / PDF

- 一次試験型: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- 練習PDF: A4縦 `7 pages`
- PDFium / pdftoppm 180 dpi: `7 / 7 PASS / 7 / 7 PASS`
- 固定11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`

### PowerPoint

- 16:9: `5 slides`
- python-pptx open / PPTX ZIP: `PASS / PASS`
- LibreOffice PDF変換: `5 / 5 PASS`
- pdftoppm `1601×900`: `5 / 5 PASS`
- 表示目視QA: `5 / 5 PASS`
- shape geometry overflow: `0件`
- 固定11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`

成果物QA: `PASS`。

## 6. SPEC・実車値境界

- H28一次 問5 `(4),(5)` のみ再粘着テーマへの直接問題として扱う。
- 他4問は橋渡し技能として扱い、再粘着制御の直接出題とは扱わない。
- 車輪側速度差と誘導電動機すべりを同一視しない。
- `T∝s` は問題で小すべり域等の成立条件が明示された場合だけ使用する。
- 詳細ベクトル制御、粘着推定器、軸重移動補償、実車台車・軸単位制御構成の新規主題化: `0件`
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインの真値化: `0件`
- 固定SPEC外追加: `0件`

SPEC・実車値境界: `PASS`。

## 7. 最終判定

- 技術内容: `PASS`
- 固定5問・11答案要素: `PASS`
- clean blind: `11 / 11 PASS`
- 必須成果物: `PASS`
- PDF/PPTX QA: `PASS`
- SPEC境界: `PASS`
- 仕様外追加: `0件`
- 新たなexact blocker: `0件`

Topic 22 は `completed`。完成数は `22 / 39`。次の未完了テーマは Topic 23「N700S SiC主変換装置」。次工程は制作前EXAM_ALIGNMENT。
