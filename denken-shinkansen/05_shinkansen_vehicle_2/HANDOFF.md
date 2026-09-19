# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_practice_pdf_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

この追加枠では開始時mainからTopic 22解説PDF作成を準備したが、他の車両二種workerが先に `1877633ba6f7b781c41aa1b17f32e7092254137b` で解説PDF＋QAを、続いて `30fa3ade598b87b49eb90cbfadec8bd6e45eb9f8` で練習sourceを反映したことを検出した。重複成果は正本へ入れず、最新mainへreconcileして次の未完了工程である練習PDF作成＋PDF QAだけを進めた。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既に `π=3.14` 相当の過去問固有丸め差として解決済み。一般式・Topic 21成果物は変更していない。

## 固定品質ゲート

固定公式過去問:
- H28 一次 機械 問5 `(4),(5)` — `2答案要素 / 直接`
- R2 一次 機械 問3 `(1)` — `1答案要素 / 橋渡し`
- R7 二次 機械・制御 問2 `s1`,`N2` — `2答案要素 / 橋渡し`
- R2 二次 機械・制御 問1 `(2),(3),(4)` — `3答案要素 / 橋渡し`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)` — `3答案要素 / 橋渡し`

- 一次: `3答案要素`
- 二次: `8答案要素`
- 合計: `11答案要素`
- 完成後clean blind要求: `一次3 / 3、二次8 / 8、総計11 / 11、固定5問5 / 5`

## 今回実施

Topic 22練習sourceをA4 PDF化し、二系統rendererと文字抽出でQAした。

判定: `PASS / PRACTICE_PDF_COMPLETE`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice.pdf`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_practice_pdf_qa.md`

PDF QA:
- A4縦: `7 pages`
- PDFium 180 dpi: `7 / 7 PASS`
- pdftoppm 180 dpi: `7 / 7 PASS`
- 文字・表のクリップ/重なり/欠落: `0件`
- 文字抽出: `PASS`
- 一次五肢択一: `8 / 8`
- 二次記述式: `4 / 4`
- 全問題・完全解説: `12 / 12`
- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化への接続: `3 / 3 aligned`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

PDF SHA-256: `86f325b51ac1e0e9fa1e509fbcca56115c6858ee5a82d32cb7888d8589df0530`

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は橋渡し技能であり、再粘着制御の直接出題とは扱わない。
- 車輪側速度差と誘導電動機すべりを同一視しない。
- `T∝s` は小すべり域等の成立条件が問題で明示された場合だけ使用する。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。
- clean blind独立再解答はPowerPoint完成後に行う。

## 次の安全な工程

Topic 22 解説画像PowerPoint作成＋QA。

固定5問・11答案要素、SPEC固定8項目・指定3可視化を変更せず、PowerPoint成果物と表示QAを作成する。
