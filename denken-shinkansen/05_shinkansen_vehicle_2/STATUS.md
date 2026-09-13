# STATUS - 新幹線車両・電験二種

更新日: 2026-09-13

## 状態
- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: 2 / 39
- current_status: `topic_03_explanation_pdf_complete`
- last_completed_topic: `02 0系② 整流回路の波形解析`
- active_topic: `03 0系③ 直流主電動機の電圧方程式とトルク`
- next_start: Topic 03の練習問題・完全解説sourceを作成する。確定済みEXAM_ALIGNMENTと解説内容だけを使い、一次試験型に加え二次記述式を含める

## 品質ゲート進捗
- [x] 01 0系① 主変圧器の等価回路 — PASS
- [x] 02 0系② 整流回路の波形解析 — PASS
- [ ] 03 0系③ 直流主電動機の電圧方程式とトルク — 制作前EXAM_ALIGNMENT PASS、解説本文source・解説PDF完成、練習問題未着手

## Topic 03 解説PDF
解説本文sourceの確定内容だけを使って解説PDFを作成した。

解説PDF:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque_explanation.pdf`
- A4縦 3ページ
- 基礎・本試験標準・複合の3段階例題を収録
- 電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点の4指定グラフを収録
- 全3ページVisual QA PASS
- 4グラフは条件を明記した模式図であり、実車数値特性ではない
- 未確認の0系主電動機実値は追加していない
- 始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない

## Topic 03 解説本文source
解説本文を完成した。制作前EXAM_ALIGNMENTで固定した範囲だけを使い、MASTER_SPECの最低構成へ対応させた。

実装済み:
- `V=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `P_em=EI_a=Tω`
- `P_Cu=I_a^2R_a`
- 機械出力・損失・効率
- 磁束一定時の速度比・トルク比
- 飽和時は与えられた磁化特性・磁束条件を使う扱い
- 負荷変化時の動作点追跡
- 基礎・本試験標準・複合の3段階例題
- 電機子電流―トルク
- 回転速度―トルク
- 回転速度―出力
- 負荷変化時の動作点
- H28一次・H24二次への解法接続

4指定グラフは数値実車特性と誤認させない模式図としてsource内へ実装した。未確認の0系主電動機実値は追加していない。始動過渡、慣性、チョッパ、回生、電機子反作用、整流作用、速度制御方式は追加していない。

source:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque.md`

## Topic 03 EXAM_ALIGNMENT
制作前EXAM_ALIGNMENTを完了した。

直近年度優先でR8〜R4の公式一次「機械」5年度分を確認したが、直流機の直接出題はなかった。公式アーカイブを遡り、系列SPECの固定範囲に直接対応する問題として次を選定した。

- H28 一次 機械 問1 — 固定範囲対応部分(1)(2): 電磁トルク、誘導起電力、電圧方程式
- H24 二次 機械・制御 問1 — 固定範囲対応部分(1)(2)(4): 銅損、電機子抵抗、誘導起電力、速度比、トルク比、動作点

H28一次の慣性・回転運動エネルギー・始動過渡、H24二次の可逆チョッパ・通流率・回生制動は固定範囲外のため採用していない。H28一次・H24二次の固定範囲部分は制作前に独立計算・判定し、公式解答と一致した。

二種の原則5問以上については、直近5年度の公式一次機械を先に調査したうえで直接対応問題が存在しないことを確認した。件数合わせのために整流作用、電機子反作用、ブラシレスDC、チョッパ、回生、始動過渡を混入させず、一次・二次双方の直接対応問題だけを採用した。

確定した必須説明:
- `V=E+I_aR_a`
- `E=k_eΦω`
- `T=k_tΦI_a`
- `P_em=EI_a=Tω`
- `P_Cu=I_a^2R_a`
- 機械出力・損失・効率
- 磁束一定時の速度比・トルク比
- 飽和時は `Φ∝I_f` を無条件に使わず与条件に従う
- 電機子電流―トルク、回転速度―トルク、回転速度―出力、負荷変化時の動作点の4指定グラフ

source:
- `topics/03_0series_dc_motor_voltage_torque/03_0series_dc_motor_voltage_torque.md`

## Topic 02 最終結果
制作前EXAM_ALIGNMENTで一次1問＋二次記述4問の計5問を選定し、要求事項独立検証5/5 PASS。その範囲だけを使って解説本文・3段階例題、解説PDF、練習問題・完全解説source、練習PDF、解説画像PowerPointを完成した。

完成教材だけで選定公式過去問5問を再解答し、公式標準解答と5/5一致、教材外知識の補完0件で独立再解答ゲートPASS。最終QAでEXAM_ALIGNMENT、必須成果物、表示QA、独立再解答、範囲逸脱、未確認実車値の有無を総合確認し、PASSと判定した。

最終QA記録:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`

独立再解答記録:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`

解説PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_explanation.pdf`
- A4縦 3ページ
- 全3ページVisual QA PASS

練習PDF:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice.pdf`
- A4縦 8ページ
- 一次試験型8問（全問五肢択一）＋二次試験型4問（記述式）、計12問
- 全問に解答・完全解説を収録
- 二次問題は途中式・前提・単位・理由説明を要求
- 全8ページVisual QA PASS
- 新規の0系実車値・固有回路仕様・Topic 02外論点は追加していない

PowerPoint:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_images.pptx`
- 16:9、4枚
- 単相半波・全波整流、平均値・実効値・リプル、L/C平滑、三相6パルス、制御角α、120°交流側電流、基本波・高調波、P/Q/力率、直流偏磁、二次試験答案手順を図解
- 図は全て自作模式図、外部画像なし
- 全4枚Visual QA PASS
- `slides_test.py` overflow検査PASS
- 未確認の0系実車値、インバータ・チョッパ・速度制御等のTopic 02外論点は追加していない

## Topic 02 EXAM_ALIGNMENT
公式過去問は一次1問＋二次記述4問の計5問。

- R7 二次 機械・制御 問3 — 単相ダイオードブリッジ、L/C平滑、平均値、負荷電力
- H30 二次 機械・制御 問3 — 三相サイリスタ変換器、平均直流電圧、交流側基本波、有効・無効電力
- H29 二次 機械・制御 問3 — 単相ダイオード整流、平均値・実効値、C/L平滑
- H27 一次 機械 問2 — 単相半波整流、変圧器一次電流、交流条件、直流偏磁
- H21 二次 機械・制御 問3 — 三相サイリスタ変換器、制御角、平均直流電圧、電力方向

一次・二次合計5問以上、二次記述式を含める品質ゲートを満たす。

## Topic 02 完成後独立再解答
- R7 二次 機械・制御 問3 — PASS
- H30 二次 機械・制御 問3 — PASS
- H29 二次 機械・制御 問3 — PASS
- H27 一次 機械 問2 — PASS
- H21 二次 機械・制御 問3 — PASS

5/5で公式標準解答と一致。途中式・積分条件・極性・単位・理想化条件を完成教材から再構成でき、教材外知識の補完は0件。

## Topic 02 練習問題対応
一次8問:
1. 単相全波整流の平均値・実効値・抵抗負荷電力
2. 単相半波整流の平均値・実効値
3. L/Cの周期定常条件
4. 三相6パルスブリッジの平均直流電圧
5. 三相サイリスタの制御角と平均直流電圧
6. 120°方形波電流の全実効値・基本波・高調波
7. 基本波変位力率と総合力率
8. 直流分と変圧器直流偏磁

二次4問:
1. 無平滑・大C・大Lの負荷電力比較
2. 三相サイリスタ変換器の `Vdc`, `I1`, `P`, `Q1`, `I`, `λ`
3. 制御角・直流電圧極性・電力方向
4. 半波電流の1周期平均と変圧器直流偏磁の判定手順

source:
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_practice_source.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_exam_reanswer.md`
- `topics/02_0series_rectifier_waveform_analysis/02_0series_rectifier_waveform_analysis_final_qa.md`

## Topic 02 境界
系列SPECにある「整流回路、平均値、実効値、リプル、素子電流、素子電圧、高調波、力率、交流側電流、直流側電圧」と指定グラフだけを扱った。

インバータ、チョッパ、別テーマの速度制御等は追加していない。未確認の0系回路仕様・実車値を推測で実値化していない。三相サイリスタ変換器は二種過去問の一般論点であり、0系固有仕様とは扱っていない。

## Topic 01 最終結果
制作前EXAM_ALIGNMENTで選定した公式過去問は一次1問＋二次記述5問の計6問。

- R7 一次 機械 問3
- R6 二次 機械・制御 問2
- R3 二次 機械・制御 問2
- R2 二次 機械・制御 問2
- H28 二次 機械・制御 問2
- H27 二次 機械・制御 問2

完成教材だけによる完成後独立再解答は6/6 PASS。公式標準解答と全問一致し、教材外知識の補完は0件。

## QA判定
Topic 01: `PASS`。

Topic 02: `PASS`。制作前EXAM_ALIGNMENT、一次・二次対応、解説PDF・練習PDF・PowerPointの表示QA、完成後独立再解答5/5、範囲・実車値確認をすべて通過。Topic 02を`completed`とし、完成数を `2 / 39` へ更新した。

Topic 03: 制作前EXAM_ALIGNMENT `PASS`。解説本文source、3段階例題、4指定グラフ、解説PDFまで完成。解説PDF全3ページVisual QA PASS。テーマ自体は未完了で、完成数は `2 / 39` のまま。

## 次
Topic 03 `0系③ 直流主電動機の電圧方程式とトルク` の練習問題・完全解説sourceを作成する。確定済みEXAM_ALIGNMENTと解説内容の範囲だけを使い、一次試験型に加え二次記述式を含める。