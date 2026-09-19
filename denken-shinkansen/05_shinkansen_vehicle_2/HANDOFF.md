# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_powerpoint_complete`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## 今回実施

Topic 21の解説画像PowerPointを作成し、表示・数値・試験対応QAを完了した。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_images.pptx`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_powerpoint_qa.md`

構成:
- 16:9: 4枚
- Slide 1: `P=Tω`、`P=Fv`、`P_train=n_mP_m`、定トルク/定出力、電流制限/電圧制限
- Slide 2: SPEC指定「速度―けん引力」
- Slide 3: SPEC指定「速度―主電動機出力」
- Slide 4: SPEC指定「速度―編成必要出力」＋固定5問・6答案要素

PowerPoint品質ゲート:
- 固定過去問: `一次2問＋二次3問 / 計5問 / 変更なし`
- 固定答案要素: `一次3＋二次3 / 6 / 変更なし`
- 固定5問・6答案要素への可視化・接続: `6 / 6 PASS`
- H26一次 問5 `(4),(5)` の必要最小条件: `2 / 2 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 既存の一次8問＋二次4問、正答、数式、仮定値の変更: `0件`
- python-pptx open: `PASS / 4 slides`
- PPTX ZIP整合性: `PASS`
- LibreOffice PDF変換: `PASS / 4ページ`
- pdftoppm 1600×900: `4 / 4 PASS`
- PDF文字抽出: `PASS`
- Unicode置換文字 / `(cid:)`: `0件 / 0件`
- 表示目視QA: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`
- `P=Fv`・走行抵抗を固定過去問の直接出題とする記載: `0件`
- 公式解答・標準解答の個別正答参照・保存: `0件`

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
- H26一次 問5に必要な `f_s` は選択肢判別に必要な最小条件だけ扱い、滑り周波数制御則やベクトル制御へ広げない。
- 加速抵抗・勾配抵抗・加速曲線、損失・熱、再粘着制御等を新規主題へ広げない。
- 列車の `P=Fv` と走行抵抗はSPEC必須だが、固定した第二種過去問で直接出題されたとは記載しない。
- N700系等の実車の基底速度、電圧・電流上限、出力、走行抵抗係数は一次資料で確認できない限り真値化しない。

## 次の安全な工程

Topic 21のclean blind候補答案を固定する。

要件:
- 固定5問・6答案要素を教材だけで再解答する。
- 候補答案を固定するまで公式解答・標準解答の個別正答を参照しない。
- 固定EXAM_ALIGNMENT、SPEC範囲、既存PDF/PPTXを変更しない。
- 練習source/PDFの一次8問＋二次4問、正答、数式、仮定値を変更しない。
- 候補固定後に公式照合へ進む。
