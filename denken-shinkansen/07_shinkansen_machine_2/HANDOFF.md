# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地
Topic 01〜08は最終QAまで `PASS / completed`。

完成数: `8 / 22`

active topic: `09 誘導電動機を自由に操るには？`

current status: `topic_09_practice_pdf_complete`

## Topic 09 固定EXAM_ALIGNMENT
固定過去問:
- R02 一次 機械 問3: (1)〜(5)
- H26 一次 機械 問5: (3)〜(5)
- H25 一次 機械 問3: (3),(4)
- R04 二次 機械・制御 問3: (6)
- R02 二次 機械・制御 問1: (1)〜(7)

一次3問＋二次記述2問、計5問。ゲート対象18小問。制作前独立検証 `18 / 18 PASS`。

固定範囲:
- V/f制御
- 磁束
- 定トルク領域
- 弱め磁束領域
- 定出力領域
- 速度制御
- ベクトル制御の概念
- d軸・q軸の概念

境界:
- ベクトル制御は概念説明中心。厳密な座標変換は必須にしない。
- Topic 10の回生・四象限運転は持ち込まない。
- 厳密なPark/Clarke変換、電流制御器設計、センサレス推定器設計は追加しない。
- 未確認300系実車制御値を真値として追加しない。

## 完了済み工程
- 制作前EXAM_ALIGNMENT: `18 / 18 PASS`
- 解説本文: 完成
- 3段階例題: 基礎・標準・複合を完成
- 固定18小問の本文マッピング: `18 / 18`
- 解説PDF: `09_induction_motor_control_explanation.pdf`
- 解説PDF: A4縦4ページ、200 dpi表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習問題source: `09_induction_motor_control_practice.md`
- 一次試験型: 10問・全問五肢択一
- 二次試験型: 5問・途中式／前提／単位／理由説明付き
- 練習問題の数値・論理再検算: `15 / 15 PASS`
- 一次正答一意性: `10 / 10 PASS`
- 固定5問・18小問の練習問題マッピング: `18 / 18 PASS`
- 練習PDF: `09_induction_motor_control_practice.pdf`
- 練習PDF: A4縦6ページ、一次10問＋二次5問を全件収録
- 200 dpi全ページ表示QA: `6 / 6 PASS`
- 文字抽出QA: PASS
- 主要計算値再検算: PASS
- 固定5問・18小問の解法経路維持: PASS
- 固定範囲外追加: 0件
- 未確認300系実車制御値追加: 0件

解説source:
- `topics/09_induction_motor_control/09_induction_motor_control.md`

解説PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_explanation.pdf`

練習問題source:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.md`

練習PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.pdf`

## 練習問題・PDFで収録した要点
- `N_s=120f/p`、`N=(1-s)N_s`、`f_2=sf` と回転磁界の相対速度。
- 一次電圧制御の `T∝V^2` と、一定負荷で電圧低下時に滑りが増える関係。
- `E≈4.44fN_wΦ` から `Φ∝V/f` を導くV/f一定制御。
- 基底速度以下の定トルク、電圧上限後の弱め磁束・定出力と `P=Tω`。
- H26一次型の定加速域 `V/f` 一定、定出力域 `V一定・I_M一定・f_s可変`。
- ベクトル制御は磁束生成成分・トルク生成成分、d軸/q軸の概念まで。

## 次に行うこと
Topic 09の解説画像PowerPointを作成する。

1. 固定5問・18小問の解法経路を可視化する。
2. V/f一定、基底速度、弱め磁束・定出力、ベクトル制御概念を固定範囲内で整理する。
3. 表示QA・overflow検査・PPTX整合性確認を行う。
4. Topic 10以降、厳密Park/Clarke変換、制御器設計、センサレス推定器設計を追加しない。
5. 未確認300系実車値を追加しない。