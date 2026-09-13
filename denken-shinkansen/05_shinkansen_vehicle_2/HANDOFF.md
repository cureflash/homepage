# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-13

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `05_shinkansen_vehicle_2`。

Topic 01 `0系① 主変圧器の等価回路` とTopic 02 `0系② 整流回路の波形解析` は最終QAまでPASS。完成数は `2 / 39`。

現在地は `topic_03_independent_reanswer_complete`。Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` は制作前EXAM_ALIGNMENT、解説本文、3段階例題、4指定グラフ、解説PDF、練習問題・完全解説source、練習PDF、解説画像PowerPoint、完成教材だけによる公式過去問独立再解答5/5 PASSまで完了した。次は最終QA。

## Topic 03 完成後独立再解答
記録:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_exam_reanswer.md`

結果:
- H28 一次 機械 問1 (1): `ト`（トルク） — 公式解答一致
- H28 一次 機械 問1 (2): `リ`（誘導起電力） — 公式解答一致
- H24 二次 機械・制御 問1 (1): `R_a=0.500 Ω` — 公式標準解答一致
- H24 二次 機械・制御 問1 (2): `E=188 V` — 公式標準解答一致
- H24 二次 機械・制御 問1 (4): `V=133 V` — 公式標準解答一致

判定:
- 対象5小問: `5/5 PASS`
- 教材外知識の補完: 0件
- 固定範囲外論点への依存: 0件
- 未確認の0系主電動機実値・固有仕様の追加: 0件

## Topic 03 解説画像PowerPoint
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_images.pptx`
- 16:9、2枚
- 電機子電圧方程式、逆起電力、電磁トルク、電磁変換電力、電機子銅損を式の接続として図解
- `SPEC.md` 指定4グラフ（電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点）を模式図で収録
- H28一次の固定範囲にある式の意味識別と、H24二次の固定範囲にある損失→`R_a`→`E`→速度比・トルク比→新動作点の答案順を図解
- 飽和時は `Φ∝I_f` を無条件に使わず与えられた磁束条件を使う注意を明記
- 図は全て自作模式図、外部画像なし
- 全2枚Visual QA PASS
- `slides_test.py` overflow検査PASS
- 未確認の0系主電動機実値・固有仕様は追加していない
- 始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない

## Topic 03 練習PDF
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_practice.pdf`
- A4縦 9ページ
- 一次試験型8問（全問五肢択一）＋二次試験型4問（記述式）、計12問
- 確定済みsourceの問題文・選択肢・数値・解説を変更せず組版
- 全問に解答・完全解説を収録
- 二次問題は使用式、前提、途中式、単位、検算を収録
- 全9ページVisual QA PASS
- PDF最適化前後のレンダリング差分 0ページ
- 未確認の0系主電動機実値・固有仕様は追加していない
- 始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない

## Topic 03 練習問題・完全解説source
source:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_practice_source.md`

構成:
- 一次試験型8問（全問五肢択一）
- 二次試験型4問（記述式）
- 合計12問
- 全問に完全解説を付与
- H28一次 機械 問1の固定範囲とH24二次 機械・制御 問1の固定範囲へ接続
- 電機子抵抗、逆起電力、磁束、電機子電流、電磁トルク、回転速度、機械出力、銅損、効率、飽和を全件カバー
- 4指定グラフに対応する電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点を問題化
- 二次問題は使用式、前提、途中式、単位、検算まで記載
- 数値問題は電圧方程式、電力収支、速度比、トルク比で相互検算済み
- 未確認の0系主電動機実値・固有仕様は追加していない
- 始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない

## Topic 03 解説PDF
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_explanation.pdf`
- A4縦 3ページ
- 基礎・本試験標準・複合の3段階例題を収録
- 電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点の4指定グラフを収録
- 全3ページVisual QA PASS
- 4グラフは一定電圧・一定磁束等の条件を明記した模式図であり、実車数値特性ではない
- 未確認の0系主電動機実値は追加していない
- 始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない

## Topic 03 解説本文source
source:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque.md`

実装済み:
- 電機子電圧方程式 `V=E+I_aR_a`
- 逆起電力 `E=k_eΦω`
- 電磁トルク `T=k_tΦI_a`
- 電磁変換電力 `P_em=EI_a=Tω`
- 電機子銅損 `P_Cu=I_a²R_a`
- 機械出力、損失、効率
- 磁束一定時の速度比・トルク比
- 飽和時の磁束条件の扱い
- 負荷変化時の動作点追跡
- 基礎・本試験標準・複合の3段階例題
- 電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点の4指定グラフ
- H28一次・H24二次への解法接続

4グラフは実車特性ではなく、一定電圧・一定磁束等の条件を明記した模式図として実装した。

未確認の0系主電動機実値は追加していない。始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない。

## Topic 03 制作前EXAM_ALIGNMENT
直近年度優先でR8〜R4の公式一次「機械」5年度分を確認したが、直流機の直接出題はなかった。公式アーカイブを遡り、系列SPECの固定範囲へ直接対応する問題として次を選定した。

- H28 一次 機械 問1 — 固定範囲対応部分(1)(2): 電磁トルク、誘導起電力、電圧方程式
- H24 二次 機械・制御 問1 — 固定範囲対応部分(1)(2)(4): 銅損、電機子抵抗、誘導起電力、速度比、トルク比、動作点

制作前の独立計算・判定を行い、H28一次・H24二次とも公式解答と一致した。

二種の原則5問以上については、直近5年度の公式一次機械を先に調査したうえで直接対応問題が存在しないことを確認した。件数を合わせるために固定範囲外の整流作用、電機子反作用、ブラシレスDC、始動過渡、チョッパ、回生を混入させていない。一次・二次双方は確保している。

確定した必須説明:
- `V=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `P_em=EI_a=Tω`
- `P_Cu=I_a^2R_a`
- 機械出力・損失・効率
- 磁束一定時の速度比・トルク比
- 飽和時は `Φ∝I_f` を無条件に使わず、与えられた磁化特性・磁束条件に従う
- 電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点の4指定グラフ

完成後独立再解答は5/5 PASS。最終QAは未実施。

## Topic 03 境界
系列SPECの固定範囲である電機子抵抗、逆起電力、磁束、電機子電流、電磁トルク、回転速度、機械出力、銅損、効率、飽和を考慮する場合の扱いだけを対象とする。

H28一次問1の慣性モーメント・回転運動エネルギー・始動過渡、H24二次問1の可逆チョッパ・通流率・回生制動は後続テーマへ送り、本テーマでは扱わない。未確認の0系実車値・固有仕様も推測で追加しない。

## Topic 02 最終QA
最終QA記録:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`

確認結果:
- 必須成果物存在: PASS
- 一次・二次過去問マッピング: PASS
- 二次記述式を含む: PASS
- 解説本文・3段階例題: PASS
- 練習問題の一次/二次接続: PASS
- 解説PDF全3ページVisual QA: PASS
- 練習PDF全8ページVisual QA: PASS
- PowerPoint全4枚Visual QA: PASS
- PowerPoint overflow検査: PASS
- 完成教材だけでの独立再解答: 5/5 PASS
- 教材外知識の補完: 0件
- 範囲逸脱: なし
- 未確認実車値の実値化: なし

Topic 02を `completed` とした。

## Topic 02 EXAM_ALIGNMENT
選定した公式過去問は一次1問＋二次記述4問の計5問。

- R7 二次 機械・制御 問3
- H30 二次 機械・制御 問3
- H29 二次 機械・制御 問3
- H27 一次 機械 問2
- H21 二次 機械・制御 問3

制作前要求事項の独立検証は5/5 PASS。一次・二次合計5問以上、二次記述式を含める品質ゲートを満たした。

## Topic 02 成果物
source:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice_source.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`

解説PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_explanation.pdf`
- A4縦 3ページ、全ページVisual QA PASS

練習PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice.pdf`
- A4縦 8ページ
- 一次試験型8問＋二次試験型4問、計12問
- 全問解答・完全解説付き
- 全ページVisual QA PASS

PowerPoint:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_images.pptx`
- 16:9、4枚
- 全4枚Visual QA PASS
- `slides_test.py` overflow検査PASS

## Topic 02 完成後独立再解答
- R7 二次 機械・制御 問3 — PASS
- H30 二次 機械・制御 問3 — PASS
- H29 二次 機械・制御 問3 — PASS
- H27 一次 機械 問2 — PASS
- H21 二次 機械・制御 問3 — PASS

5/5で公式標準解答と一致。教材外知識の補完0件。

## Topic 01 完了内容
- 制作前EXAM_ALIGNMENT
- 公式解答照合を伴う要求事項の独立検証
- 解説本文・3段階例題
- 解説PDF
- 練習PDF
- 解説画像PowerPoint
- 完成教材だけによる公式過去問独立再解答
- 最終QA

Topic 01の選定6問は完成教材だけで6/6再解答PASS、教材外知識の補完0件、最終QA PASS。

## 次の正確な開始点
Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` の最終QAを行う。EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、独立再解答記録、表示QA、範囲逸脱・未確認実車値の有無を横断確認し、全品質ゲートを満たす場合のみ `completed` にする。完成数は `2 / 39` のまま。