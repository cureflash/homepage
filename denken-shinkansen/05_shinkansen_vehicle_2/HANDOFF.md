# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_independent_reanswer_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

PowerPoint作成時の追加枠では、開始時main `cb3c0e20d1c2bbfc6ccab986d34304543475381e`、系列 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、Topic 22成果物を再照合した。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既に `π=3.14` 相当の過去問固有丸め差として解決済み。一般式・Topic 21成果物は変更していない。

今回の追加枠Cでは、開始時latest main `dc39e2f191beee5856804341db335c60ea0421d5`、最新 `STATUS.md` / `HANDOFF.md`、直近車両二種commit、Topic 22全成果物を再照合した。先行workerのclean blindは独立性を失って停止済みだったため重複しなかった。

その後、別fresh workerが公式照合前に候補を固定したcommit `f8aa715525de8747459c27cb02254575eaeca868` を確認した。この候補はTopic 22が明示的に前提参照を許可するTopic 20フィードバック制御教材を使い、固定5問・11答案要素を全て候補固定済みだったため、これを有効clean blind候補正本として公式照合した。

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

## 解説画像PowerPoint完了記録

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

## clean blind履歴

### 先行worker blocker

- H21二次「機械・制御」問4の問題図回収時に候補固定前の第三者解答へ露出したため、そのworkerのclean blindは無効。
- 候補ファイル・照合結果は作成していない。

### 追加枠C 10/11診断

`22_e5_readhesion_control_independent_reanswer.md` ではTopic 22単体だけを教材範囲として扱い、H21問4 `(5a)` を誤判定して `10 / 11` となった。

ただしTopic 22 sourceはTopic 20フィードバック制御の既習一般論を前提参照として明示的に許可している。したがってこの10/11診断は参照範囲が狭過ぎ、教材欠落の確定証拠とはしない。

### 有効clean blind候補と公式照合

候補固定正本:
- commit `f8aa715525de8747459c27cb02254575eaeca868`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_candidates_clean.md`

候補固定後に公式解答・標準解答へ照合した。

判定: `PASS / INDEPENDENT_REANSWER_COMPLETE`

- H28 一次 機械 問5 `(4),(5)`: `2 / 2 PASS`
- R2 一次 機械 問3 `(1)`: `1 / 1 PASS`
- R7 二次 機械・制御 問2 `s1`,`N2`: `2 / 2 PASS`
- R2 二次 機械・制御 問1 `(2),(3),(4)`: `3 / 3 PASS`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)`: `3 / 3 PASS`
- 一次: `3 / 3 PASS`
- 二次: `8 / 8 PASS`
- 合計: `11 / 11 PASS`
- 固定5問: `5 / 5 PASS`
- 候補固定後の答案変更: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 一般式変更: `0件`
- SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`

公式照合記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_blind_reanswer_official_comparison.md`

このreconcileにより、H21問4 `(5a)` のためのTopic 22本文・一般式・PDF/PPTXへの追加修正は不要と判定した。

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は橋渡し技能であり、再粘着制御の直接出題とは扱わない。
- 車輪側速度差と誘導電動機すべりを同一視しない。
- `T∝s` は小すべり域等の成立条件が問題で明示された場合だけ使用する。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。
- clean blind独立再解答では公式解答・標準解答を先に見ず、候補を先に固定する。

## 次の安全な工程

Topic 22 最終QA。

固定5問・11答案要素、必須成果物、SPEC固定8項目・指定3可視化、実車値境界、各既存QA、有効clean blind `11 / 11 PASS` を統合確認する。固定EXAM_ALIGNMENTは変更しない。
