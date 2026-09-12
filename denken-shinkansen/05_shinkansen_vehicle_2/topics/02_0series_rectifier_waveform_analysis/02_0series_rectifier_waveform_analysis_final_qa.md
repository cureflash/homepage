# Topic 02 最終QA

実施日: 2026-09-13

対象: `02 0系② 整流回路の波形解析`

## 正本
- `denken-shinkansen/MASTER_SPEC.md`
- `denken-shinkansen/EXAM_ALIGNMENT_SPEC.md`
- `05_shinkansen_vehicle_2/SPEC.md`

## 成果物存在確認
GitHub正本上で次の6成果物を確認した。

- source Markdown: `02_0series_rectifier_waveform_analysis.md`
- 練習問題source: `02_0series_rectifier_waveform_analysis_practice_source.md`
- 解説PDF: `02_0series_rectifier_waveform_analysis_explanation.pdf`
- 練習PDF: `02_0series_rectifier_waveform_analysis_practice.pdf`
- 解説画像PowerPoint: `02_0series_rectifier_waveform_analysis_images.pptx`
- 完成後独立再解答記録: `02_0series_rectifier_waveform_analysis_exam_reanswer.md`

解説PDFはA4縦3ページ、練習PDFはA4縦8ページ、PowerPointは16:9・4枚。前工程の表示QA記録では、解説PDF全3ページ、練習PDF全8ページ、PowerPoint全4枚がVisual QA PASS、PowerPointはoverflow検査PASS。練習PDFは一次試験型8問＋二次記述型4問の計12問で、全問に解答・完全解説がある。

## EXAM_ALIGNMENT整合確認
制作前に選定した公式過去問は一次1問＋二次記述4問の計5問。

- R7 二次 機械・制御 問3
- H30 二次 機械・制御 問3
- H29 二次 機械・制御 問3
- H27 一次 機械 問2
- H21 二次 機械・制御 問3

source Markdown、練習問題source、完成後独立再解答記録を照合し、選定過去問が要求する次の論点が教材内に存在することを確認した。

- 単相半波・単相全波・三相6パルスブリッジの導通と波形
- 平均値・実効値・リプル
- リアクトル電圧・コンデンサ電流の周期平均0
- L平滑とC平滑の相違
- 素子電流・素子電圧
- 三相サイリスタの制御角と平均直流電圧
- 120°交流側電流、基本波、高調波
- 有効電力、基本波無効電力、総合力率
- 直流分と変圧器直流偏磁
- 直流側電圧・電流・負荷電力
- 二次試験で必要な積分区間、途中式、極性、単位、理想化条件

一次・二次合計5問以上、二次記述式を含める二種品質ゲートを満たす。

## 完成後独立再解答
完成教材だけを使った再解答記録を確認した。

- R7 二次 機械・制御 問3 — PASS
- H30 二次 機械・制御 問3 — PASS
- H29 二次 機械・制御 問3 — PASS
- H27 一次 機械 問2 — PASS
- H21 二次 機械・制御 問3 — PASS

5問すべて公式標準解答と一致し、教材外知識の補完は0件。平均値・実効値、L/C周期定常条件、三相ブリッジ平均直流電圧、制御角、基本波電流、P/Q/力率、電力方向、直流偏磁を完成教材から再構成できている。

## 範囲・実車値確認
系列SPECのTopic 02固定範囲は、整流回路、平均値、実効値、リプル、素子電流、素子電圧、高調波、力率、交流側電流、直流側電圧、および指定波形・グラフである。

完成成果物はこの範囲内にあり、インバータ、チョッパ、別テーマの速度制御へ拡張していない。新たな0系実車値・固有回路仕様を推測で追加していない。三相サイリスタ変換器は電験二種過去問の一般論点として扱い、0系固有仕様とはしていない。

## 品質ゲート判定
- 過去問マッピング: PASS
- 一次・二次の双方を含む: PASS
- 二次記述式を含む: PASS
- 公式の意味・成立条件・解法手順: PASS
- 本試験標準例題・複合例題: PASS
- 練習問題の一次/二次接続: PASS
- 必須波形・グラフ: PASS
- 完成教材だけでの独立再解答: 5/5 PASS
- 教材外知識の補完: 0件
- 範囲逸脱: なし
- 未確認実車値の実値化: なし
- 必須成果物の存在: PASS
- 表示QA記録: PASS

最終QA: `PASS`

Topic 02を `completed` とする。次はTopic 03 `0系③ 直流主電動機の電圧方程式とトルク` の制作前EXAM_ALIGNMENTから開始する。
