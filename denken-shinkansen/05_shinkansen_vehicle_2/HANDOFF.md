# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜20は最終QAまで `PASS / completed`。完成数は `20 / 39`。

現在地は `topic_21_explanation_pdf_complete`。active topic は Topic 21 `高速域の速度・けん引力・出力制御`。

## reconcile

最新mainのTopic 21固定EXAM_ALIGNMENT、解説source、source過去問対応ゲート補足を正本として引き継いだ。固定5問・6答案要素、SPEC固定8項目・3可視化を変更していない。

## 今回実施

Topic 21解説PDFを作成し、表示・数式・過去問接続QAを完了した。

成果物:
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation.pdf`
- `topics/21_high_speed_tractive_force_output_control/21_high_speed_tractive_force_output_control_explanation_pdf_qa.md`

固定公式過去問:
- H26 一次 機械 問5 `(4),(5)` — 2答案要素
- H25 一次 機械 問3 `(1)` — 1答案要素
- R7 二次 機械・制御 問2 `(1)のT1のみ` — 1答案要素
- R1 二次 機械・制御 問1 `(4)` — 1答案要素
- H26 二次 機械・制御 問1 `(4)` — 1答案要素

解説PDF品質ゲート:
- 一次2問＋二次3問、計5問: `変更なし`
- 一次3＋二次3、計6答案要素: `6 / 6 covered`
- H26一次 問5 `(4),(5)` の必要最小条件: `2 / 2 covered`
- SPEC固定8項目: `8 / 8 covered`
- SPEC指定3可視化: `3 / 3 PASS`
- 3段階例題: `3 / 3 PASS`
- 公式解答・標準解答の個別正答参照・保存: `0件`
- 固定SPEC外追加: `0件`
- 未確認実車値の真値化: `0件`

PDF QA:
- A4縦 `3 pages`
- PDFium 180 dpi: `3 / 3 PASS`
- Poppler 180 dpi: `3 / 3 PASS`
- 文字抽出: `PASS`
- 欠落グリフ・黒四角・重なり・クリップ: `0件`
- PDF構造・開封: `PASS`
- 数式・数値のsource再照合: `PASS`
- 例題1: `ω=314.159 rad/s`, `T=954.930 N·m`
- 例題2: `T(4500 min^-1)=636.620 N·m`, `P_train=7.2 MW`, `F(180 km/h)=144.0 kN`
- 例題3: `200 km/h`で`P_req=5.652 MW`; `240 km/h`で`P_req=8.593 MW`

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

Topic 21練習sourceを作成する。

要件:
- 固定5問・6答案要素を変更しない。
- 一次試験型と二次記述式を含め、途中式・単位・理由説明まで採点可能にする。
- 新幹線固有知識を知らなくても解ける一般問題にする。
- 学習用仮定値を実車値として表示しない。
- clean blind再解答は練習PDF・PowerPoint完成後に行う。
