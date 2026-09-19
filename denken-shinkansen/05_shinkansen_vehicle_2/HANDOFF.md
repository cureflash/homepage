# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_powerpoint_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

今回の追加枠では、開始時main `cb3c0e20d1c2bbfc6ccab986d34304543475381e`、系列 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、Topic 22成果物を再照合した。

直近の車両二種成果は `c7e807c200225d752fdf38f23f2c2d56f7f02c0e` のTopic 22練習PDF＋QA。それ以降のmain更新は他系列であり、Topic 22の次工程との競合はなかったため、未完了だった解説画像PowerPoint作成＋QAだけを進めた。

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

Topic 22解説画像PowerPointを作成し、ファイル構造・PDF変換・表示・数値・試験対応QAを実施した。

判定: `PASS / POWERPOINT_COMPLETE`

成果物:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_images.pptx`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_powerpoint_qa.md`

PowerPoint QA:
- 16:9: `5 slides`
- python-pptx open: `PASS / 5 slides`
- PPTX ZIP整合性: `PASS`
- shape geometry overflow: `0件`
- LibreOffice PDF変換: `PASS / 5 pages`
- pdftoppm `1601×900`: `5 / 5 PASS`
- PDF文字抽出: `PASS`
- Unicode replacement char / `(cid:)`: `0 / 0`
- 表示目視QA: `5 / 5 PASS`
- スライド外周クリップ・欠落・文字重なり: `0件`
- 固定5問: `5 / 5 unchanged`
- 一次答案要素: `3 / 3 covered`
- 二次答案要素: `8 / 8 covered`
- 合計答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式過去問本文の複製: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

PPTX SHA-256: `dd06f2a02d5327fdc9dc70be89f3f8949f75669619f740daf34f4d1fa47450f8`

## 追加枠F clean blind blocker

- latest main / `STATUS.md` / `HANDOFF.md` / Topic 22成果物を再reconcileし、PowerPoint＋QAは既存workerが先行完了済みだったため重複作業はしていない。
- 次工程clean blindのためH21二次「機械・制御」問4の問題図を回収した際、このworkerが候補解答固定前に個別解答を含む第三者ページへ露出した。
- このworkerはTopic 22 clean blindの独立判定者として使用不可。clean blind候補ファイル・照合結果は作成・コミットしていない。
- 固定EXAM_ALIGNMENT、一般式、教材本文、PowerPoint、練習問題は変更していない。
- 当該個別解答を未閲覧のfresh independent workerで、固定5問・11答案要素のclean blindを最初から実施すること。

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は橋渡し技能であり、再粘着制御の直接出題とは扱わない。
- 車輪側速度差と誘導電動機すべりを同一視しない。
- `T∝s` は小すべり域等の成立条件が問題で明示された場合だけ使用する。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。
- clean blind独立再解答では公式解答・標準解答を先に見ず、候補を先に固定する。

## 次の安全な工程

Topic 22 完成後clean blind独立再解答を、当該個別解答を未閲覧のfresh independent workerで実施する。

固定5問・11答案要素を教材だけで解き、一次3 / 3、二次8 / 8、総計11 / 11、固定5問5 / 5を確認してから公式解答・標準解答と照合する。固定EXAM_ALIGNMENTは変更しない。
