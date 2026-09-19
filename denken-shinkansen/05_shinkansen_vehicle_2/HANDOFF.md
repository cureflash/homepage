# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_explanation_source_complete`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## reconcile

最新mainと同系列workerの直近成果を確認し、Topic 21制作前EXAM_ALIGNMENT commit `969c0175b7516b3886dae3bb361e5a38f26f7492` と既存解説sourceを正本として引き継いだ。固定5問・6答案要素は変更していない。

## 今回実施

解説PDF着手前に固定過去問対応ゲートを再監査した。

H26 一次「機械」問5 `(4),(5)` は選択肢判別に `V`, `f`, `I_M`, `f_s` の状態が必要だが、既存解説sourceは電圧/電流制限を説明する一方、滑り周波数 `f_s` の状態を明記していなかった。このため、既存sourceが許容している「V/f・すべりの必要最小限参照」の範囲だけを補足し、過去問対応品質ゲートを再成立させた。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_source.md`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md`

再監査結果:
- 定加速域: `V/f = 一定`, `I_M = 一定`, `f_s = 可変`
- 定出力域: `V = 一定`, `I_M = 一定`, `f_s = 可変`
- H26 一次 機械 問5 `(4),(5)`: `2 / 2` 判別根拠を補完
- 固定過去問: `一次2問＋二次3問 / 5問` のまま
- 固定答案要素: `一次3＋二次3 / 6要素` のまま
- SPEC固定8項目: 変更なし
- SPEC指定3可視化: 変更なし
- 3段階例題: 変更なし
- SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- 公式標準解答の個別正答記号を教材本文へ保存: `0件`

## Topic 21 固定範囲

- 定トルク
- 定出力
- 電圧制限
- 電流制限
- けん引力
- 主電動機出力
- 編成出力
- 走行抵抗

SPEC指定可視化:
- 速度―けん引力
- 速度―主電動機出力
- 速度―編成必要出力

境界:
- V/f・すべり・等価回路は既習事項として必要最小限だけ参照する。
- 加速抵抗・勾配抵抗・加速曲線、損失・熱、ベクトル制御、再粘着制御等を新規主題へ広げない。
- 列車の `P=Fv` と走行抵抗はSPEC必須だが、固定した第二種過去問で直接出題されたとは記載しない。
- N700系等の実車の基底速度、電圧・電流上限、出力、走行抵抗係数は一次資料で確認できない限り真値化しない。

## 次の安全な工程

Topic 21解説PDFを作成する。

要件:
- 固定5問・6答案要素を変更しない。
- `21_high_speed_tractive_force_output_control_explanation_source.md` と `21_high_speed_tractive_force_output_control_explanation_source_gate_addendum.md` を併用する。
- H26 一次「機械」問5用の `V/f`, `I_M`, `f_s` 条件をPDFから落とさない。
- 解説sourceの式・3段階例題・3可視化条件を版面化する。
- 学習用仮定値を実車値として表示しない。
