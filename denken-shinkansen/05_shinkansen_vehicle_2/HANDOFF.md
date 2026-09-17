# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-18

## 正本・現在地
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜14は最終QAまで `PASS / completed`。完成数は `14 / 39`。

Topic 15 `500系 高速域の出力・熱解析` は制作前EXAM_ALIGNMENTと解説本文＋3段階例題まで完了。固定一次4問＋二次1問、計5問・16答案要素は変更せず、本文マッピング `16 / 16 PASS`、SPEC指定9項目 `9 / 9`、4可視化の共通式系 `4 / 4 PASS`。未確認500系実車値の真値化・SPEC外追加は0件。

次工程は Topic 15 の解説PDF。固定EXAM_ALIGNMENTと解説sourceの共通仮定式系を変更せず、3段階例題・固定16答案要素・SPEC指定9項目/4可視化を欠落させない。

## Topic 15 固定EXAM_ALIGNMENT
source: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`

固定過去問:
- R8 一次 機械 問1 (1),(2)
- R7 二次 機械・制御 問2 (1)〜(3)
- R5 一次 機械 問1 (1),(3),(5)
- H26 一次 機械 問5 (3)〜(5)
- H25 一次 機械 問3 (1),(2)

品質ゲート:
- 一次: `4問・10答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・16答案要素`
- 制作前計算・論理検証: `16 / 16 PASS`
- 二次記述・計算問題: `1問`
- 公式解答・標準解答との不一致: `0件`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 問1 (1),(2)を固定`
- SPEC指定9項目: `9 / 9 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`
- 判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

Topic 15 SPEC固定範囲:
- `P = ωT`
- 高速域トルク
- 定出力領域
- 電流制限
- 電圧制限
- 損失
- 発熱
- 冷却
- 温度上昇

SPEC指定可視化:
- 回転速度―トルク
- 回転速度―出力
- 出力―損失
- 簡略熱モデル

範囲境界:
- Topic 12 の VVVF・V/f・すべり制御は定出力領域・電圧制限・電流制限との接続に必要な範囲だけ参照する
- Topic 16 の多レベル変換器・PWM・素子電圧・高調波へ進まない
- 詳細な熱流体解析、冷却風量設計、絶縁寿命モデル、軸受・歯車・車体空力設計を追加しない
- 未確認500系実車値を真値化しない
- 簡略熱モデルを第二種公式過去問で直接問われた論点とは扱わない

## Topic 15 解説source
- path: `topics/15_500series_high_speed_output_thermal/15_500series_high_speed_output_thermal.md`
- 判定: `PASS / EXPLANATION_SOURCE_COMPLETE`
- 3段階例題: `3 / 3 PASS`
- 固定5問・16答案要素の本文接続: `16 / 16 PASS`
- 例題数値再計算: `3 / 3 PASS`
- SPEC指定9項目: `9 / 9 covered`
- SPEC指定4可視化の共通式系・計算条件: `4 / 4 PASS`
- 教材用仮定モデル: `N_b=3000 min^-1`, `T_b=1200 N·m`, `P_b≈377 kW`
- 損失モデル: `P_loss=15+25(P_out/P_b)^2 [kW]`
- 簡略熱モデル: `R_th=0.80 K/kW`, `C_th=6000 kJ/K`、いずれも500系実車値ではない
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定過去問の正答記号・個別最終解の新規保存: `0件`
- SPEC外追加: `0件`
- 未確認500系実車値の真値化: `0件`

## Topic 14 固定EXAM_ALIGNMENT
source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md`

固定過去問:
- R7 二次 機械・制御 問2 (1),(3)
- R1 二次 機械・制御 問1 (4)
- H26 二次 機械・制御 問1 (4)
- H26 一次 機械 問5 (1)
- H25 一次 機械 問3 (1),(2)

品質ゲート:
- 一次: `2問・3答案要素`
- 二次: `3問・6答案要素`
- 合計: `5問・9答案要素`
- 制作前計算・論理検証: `9 / 9 PASS`
- 二次記述問題: `3問`
- 参考教材2系統以上: `PASS`
- R8一次「機械」直近年度確認: `PASS / 固定対象なし`
- SPEC指定8項目: `8 / 8 aligned`
- SPEC指定4可視化: `4 / 4 aligned`
- 固定EXAM_ALIGNMENT変更: `0件`

## 完成済み成果物
- 解説source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force.md` — `PASS / EXPLANATION_SOURCE_COMPLETE`
- 解説PDF: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation.pdf` — `PASS / EXPLANATION_PDF_COMPLETE`
- 解説PDF QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_explanation_pdf_qa.md`
- 練習問題source: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_source.md` — `PASS / PRACTICE_SOURCE_COMPLETE`
- 練習PDF: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice.pdf` — `PASS / PRACTICE_PDF_COMPLETE`
- 練習PDF QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_practice_qa.md`
- 解説画像PowerPoint: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_images.pptx` — `PASS / POWERPOINT_COMPLETE`
- PowerPoint QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_powerpoint_qa.md`
- blind再解答前ゲート: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_gate.md` — `PASS / BLIND_REANSWER_READY`
- blind答案: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer.md`
- blind再解答QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_blind_reanswer_qa.md` — `PASS / BLIND_REANSWER_COMPLETE`
- 最終QA: `topics/14_300series_running_resistance_tractive_force/14_300series_running_resistance_tractive_force_final_qa.md` — `PASS / completed`

主要QA:
- 解説本文3段階例題: `3 / 3 PASS`
- 固定5過去問・9答案要素の本文接続: `9 / 9 PASS`
- 練習問題: 一次8問＋二次4問、計12問、数値・論理 `12 / 12 PASS`
- 解説PDF表示QA: `3 / 3 PASS`
- 練習PDF表示QA: `2 / 2 PASS`
- PowerPoint: 16:9・4枚、SPEC指定4可視化 `4 / 4 PASS`、表示QA `4 / 4 PASS`
- 完成後blind再解答: `5 / 5問・9 / 9答案要素 PASS`
- 最終QA進捗記録整合: `4 / 4 PASS`
- 未確認300系実車値の真値化: `0件`
- SPEC外追加: `0件`

教材用仮定モデル:
- `m=m_eq=4.00×10^5 kg`
- `R_run(v)=25000+80v+6v^2 [N]`、`v [m/s]`
- 300系実車値ではないことを明示済み

## Topic 14 完成後blind再解答
実施条件:
- 公式解答・標準解答を開く前にblind答案をGitHubへ固定: `PASS`
- 完成教材と公式問題文で固定5問を再解答: `5 / 5 PASS`
- 固定9答案要素: `9 / 9 PASS`
- 教材外知識による補完: `0件`

内訳:
- R7 二次 機械・制御 問2 (1),(3): `4 / 4 PASS`
- R1 二次 機械・制御 問1 (4): `1 / 1 PASS`
- H26 二次 機械・制御 問1 (4): `1 / 1 PASS`
- H26 一次 機械 問5 (1): `1 / 1 PASS`
- H25 一次 機械 問3 (1),(2): `2 / 2 PASS`

### H26二次 問1 (4) の公式標準解答内部不整合
公式問題データと公式掲載式によるblind再計算:
- `I2'=22.430886... A`
- `TL=48.046775... N·m`
- 3桁では `48.0 N·m`

公式標準解答は `I2'=22.430 A` を表示した後、同じ式への代入結果を `48.067 -> 48.1 N·m` としている。しかし公式表示値をそのまま再代入すると `48.04298... N·m -> 48.0 N·m` であり、同一公式文書内で算術が整合しない。

再確認先:
- 公式問題: https://www.shiken.or.jp/chief/upload/20141123_ch_second_q02.pdf
- 公式標準解答: https://www.shiken.or.jp/chief/upload/20141123_ch_second_a01.pdf
- 電験王2: https://denken-ou.com/c2/kikaiseigyoh26-1/ — `48.047 -> 48.0 N·m`
- 再確認日: 2026-09-17

新しい許容差・一般例外は追加していない。公式問題条件と公式標準解答に掲載された式を正本として算術を再現し、最終印字値だけが式・中間値と不整合である個別事象として確定したため、blind答案 `48.0 N·m` をPASSとした。

## Topic 14 最終QA
- 技術内容: `PASS`
- 固定5問・9答案要素: `PASS`
- 完成後blind再解答: `9 / 9 PASS`
- 必須成果物: `PASS`
- PDF/PPTX表示・構造QA: `PASS`
- 練習問題QA: `12 / 12 PASS`
- SPEC境界: `PASS`
- 進捗記録整合: `4 / 4 PASS`
- 判定: `PASS / completed`
- 完成数: `14 / 39`

## Topic 14 進捗記録同期
- 主source冒頭 `## 状態`: `PASS`
- 主source末尾 `## 次工程`: `PASS`
- 練習source末尾 `## 次工程`: `PASS`
- 練習PDF QA末尾 `## 現在地`: `PASS`
- 進捗記録整合: `4 / 4 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 技術本文・問題/正答・PDF/PPTX・blind再解答結果変更: `0件`
- 判定: `PASS / PROGRESS_SYNC_COMPLETE`

## Topic 14 SPEC固定範囲
扱う内容:
- 走行抵抗
- 加速抵抗
- 勾配抵抗
- けん引力
- 車輪周力
- 速度
- 必要出力
- 加速度

指定計算・グラフ:
- 速度―走行抵抗
- 速度―必要けん引力
- 速度―必要出力
- 加速曲線

範囲境界:
- Topic 13の回生・制動・エネルギー返送は再展開しない
- Topic 12のPWM/VVVF/V/f、滑り制御等は固定過去問と `P=Tω` 接続に必要な範囲以上へ戻らない
- 粘着限界、曲線抵抗、トンネル抵抗、台車・歯車設計、列車運行計画は追加しない
- 走行抵抗の内訳・経験式・係数は根拠のある範囲を超えて追加しない
- 未確認の300系質量・走行抵抗係数・伝達効率を実車値として追加しない

## 次の正確な開始点
Topic 15 `500系 高速域の出力・熱解析` の解説PDFを作成する。固定EXAM_ALIGNMENTと解説sourceの共通仮定式系を変更せず、3段階例題・固定16答案要素・SPEC指定9項目/4可視化を欠落させない。
