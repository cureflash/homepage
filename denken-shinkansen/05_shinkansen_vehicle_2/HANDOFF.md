# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜21は最終QAまで `PASS / completed`。完成数は `21 / 39`。

現在地は `topic_22_explanation_source_complete`。active topic は Topic 22 `E5系 再粘着制御`。

## reconcile

今回開始時のmainは `4220ab1c7751c5d309dfc4ad2174bbf92d992d94` だったが、調査中に既存の車両二種workerが `da9dc545028d526a6719845d0b2dbdaaa04e6a39` でTopic 22制作前EXAM_ALIGNMENTを反映したことを検出した。差分はTopic 22 main source、STATUS、HANDOFFであり、固定5問・11答案要素が新規確定済みだったため、制作前EXAM_ALIGNMENTを重複実施せず、その成果を正本としてreconcileした。

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、最新Topic 22 sourceを再照合し、次の安全な工程である解説source作成だけを1段階進めた。Topic 21のH26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は既に過去問固有の数値処理差として完了済みであり、一般式・Topic 21成果物には今回変更を加えていない。

## 固定品質ゲート

固定公式過去問:
- H28 一次 機械 問5 `(4),(5)` — `2答案要素 / 直接`
- R2 一次 機械 問3 `(1)` — `1答案要素 / 橋渡し`
- R7 二次 機械・制御 問2 `(1)のs1のみ`, `(3)のN2のみ` — `2答案要素 / 橋渡し`
- R2 二次 機械・制御 問1 `(2),(3),(4)` — `3答案要素 / 橋渡し`
- H21 二次 機械・制御 問4 `(4),(5a),(5b)` — `3答案要素 / 橋渡し`

品質ゲート:
- 一次: `2問・3答案要素`
- 二次: `3問・8答案要素`
- 合計: `5問・11答案要素`
- 二次記述問題: `3問`
- 完成後clean blind要求: `一次3 / 3、二次8 / 8、総計11 / 11、固定5問5 / 5`

## 今回実施

Topic 22解説sourceを作成した。

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

sourceで固定した内容:
- 回転磁界・同期速度 `N_s=120f/P`
- すべり `s=(N_s-N)/N_s`、`N=(1-s)N_s`、`ω_m=(1-s)ω_s`
- 相対速度と滑り周波数 `f_2=sf`
- 問題条件が小すべり域比例を明示した場合だけ使う `T∝s`
- 誘導機すべりと車輪周速度―車体基準速度差の区別
- 簡略粘着限界 `F_ad,max=μW`
- 同一単純化条件での粘着限界相当トルク `T_ad,max=F_ad,max r`
- 力行側の空転、制動側の滑走の判定
- 速度差・トルク情報による簡略検出
- 空転検出→トルク低減→速度差収束→再粘着判定→トルク復帰
- ゲイン変更時の定常偏差・速応性・減衰を分けて読む手順
- 3段階例題
- SPEC指定3可視化の再生成用学習モデル

source QA:
- 固定5問: `5 / 5` 維持
- 固定11答案要素: `11 / 11 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3` 再生成条件あり
- 3段階例題: `3 / 3`
- 固定問題差替え: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 公式解答・標準解答の個別正答保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認E5系実車値の真値化: `0件`
- 新たなexact blocker: `0件`

## 重要な境界

- H28一次 問5 `(4),(5)` だけを再粘着テーマへの直接問題として扱う。
- 他4問は速度差・滑り・トルク応答・フィードバック特性の橋渡し技能であり、「再粘着制御の直接出題」とは扱わない。
- 誘導機の詳細等価回路、詳細ベクトル制御、粘着推定器、軸重移動補償、実車台車・軸別ロジックを新規主題化しない。
- E5系実車の粘着係数、検出閾値、トルク低減率、復帰時定数、制御ゲインを真値化しない。source内の数値・波形・`μ(v)` は明示した学習用仮定値のみ。
- 公式解答・標準解答の個別正答記号・最終数値はまだ保存しない。

記録:
- `topics/22_e5_readhesion_control/22_e5_readhesion_control.md`
- `topics/22_e5_readhesion_control/22_e5_readhesion_control_explanation_source.md`
- `STATUS.md`
- `HANDOFF.md`

## 次の安全な工程

Topic 22解説PDF作成＋PDF QA。

解説sourceを正本としてPDF化し、表示・文字抽出・固定11答案要素・SPEC固定8項目・指定3可視化を確認する。固定EXAM_ALIGNMENTは変更しない。