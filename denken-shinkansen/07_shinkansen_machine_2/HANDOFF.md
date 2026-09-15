# HANDOFF - 新幹線・電験二種「機械・制御」

更新日: 2026-09-15

## 現在地
Topic 01〜08は最終QAまで `PASS / completed`。

完成数: `8 / 22`

active topic: `09 誘導電動機を自由に操るには？`

current status: `topic_09_final_qa_needs_revision`

## Topic 09 固定EXAM_ALIGNMENT
固定過去問:
- R02 一次 機械 問3: (1)〜(5)
- H26 一次 機械 問5: (3)〜(5)
- H25 一次 機械 問3: (3),(4)
- R04 二次 機械・制御 問3: (6)
- R02 二次 機械・制御 問1: (1)〜(7)

一次3問＋二次記述2問、計5問。ゲート対象18小問。制作前独立検証 `18 / 18 PASS`、完成後独立再解答 `18 / 18 PASS`。

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
- 解説画像PowerPoint: `09_induction_motor_control_images.pptx`
- 解説画像PowerPoint: 16:9・4スライド
- 固定5問・18小問の解法経路可視化: PASS
- 200 dpi全スライド表示QA: `4 / 4 PASS`
- overflow検査: 0件
- PPTX ZIP整合性: PASS
- 完成後独立再解答: `18 / 18 PASS`
- 教材外知識補完: 0件
- 固定EXAM_ALIGNMENT・固定範囲・問題・正答の変更: 0件
- 固定範囲外追加: 0件
- 未確認300系実車制御値追加: 0件

## 完成後独立再解答結果
- R02 一次 機械 問3 (1)〜(5): `(ワ, ハ, ル, ロ, ト)`、`5 / 5 PASS`
- H26 一次 機械 問5 (3)〜(5): `(カ, ヲ, ニ)`、`3 / 3 PASS`
- H25 一次 機械 問3 (3),(4): `(ニ, ル)`、`2 / 2 PASS`
- R04 二次 機械・制御 問3 (6): 50 Hz→25 Hzで信号波振幅 `0.9→0.45`、周期2倍、`1 / 1 PASS`
- R02 二次 機械・制御 問1 (1)〜(7): `1800, 1710, 90 min^-1, 3 Hz, 90, 1800, 0 min^-1`、`7 / 7 PASS`

解説source:
- `topics/09_induction_motor_control/09_induction_motor_control.md`

解説PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_explanation.pdf`

練習問題source:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.md`

練習PDF:
- `topics/09_induction_motor_control/09_induction_motor_control_practice.pdf`

解説画像PowerPoint:
- `topics/09_induction_motor_control/09_induction_motor_control_images.pptx`

## 練習問題・PDF・PowerPointで収録した要点
- `N_s=120f/p`、`N=(1-s)N_s`、`f_2=sf` と回転磁界の相対速度。
- 一次電圧制御の `T∝V^2` と、一定負荷で電圧低下時に滑りが増える関係。
- `E≈4.44fN_wΦ` から `Φ∝V/f` を導くV/f一定制御。
- 基底速度以下の定トルク、電圧上限後の弱め磁束・定出力と `P=Tω`。
- H26一次型の定加速域 `V/f` 一定、定出力域 `V一定・I_M一定・f_s可変`。
- ベクトル制御は磁束生成成分・トルク生成成分、d軸/q軸の概念まで。

## 最終QA結果
判定: `NEEDS_REVISION / IN_PROGRESS`

PASS:
- 必須成果物5件の存在
- 固定一次3問＋二次2問・18小問のEXAM_ALIGNMENT
- 完成後独立再解答 `18 / 18 PASS`
- 教材外知識補完 0件
- 解説PDF表示QA `4 / 4 PASS`、文字抽出QA PASS
- 練習PDF表示QA `6 / 6 PASS`、文字抽出QA・主要計算再検算 PASS
- PowerPoint表示QA `4 / 4 PASS`、overflow 0件、ZIP整合性 PASS
- Topic 10以降・厳密Park/Clarke変換・制御器設計・センサレス推定器設計・未確認300系実車値の混入なし

未完了理由:
- `09_induction_motor_control_practice.md` 末尾の `## 次工程` が「この練習問題sourceから練習PDFを作成」の旧記録のまま。
- 練習PDF、PowerPoint、完成後独立再解答は既に完了しており、進捗記録がGitHub上の実成果物と不整合。

## 次に行うこと
`09_induction_motor_control_practice.md` の旧進捗記録だけを実成果物へ同期する。

- 末尾 `## 次工程` を現在地へ更新する。
- 技術本文、15問、解答・解説、固定EXAM_ALIGNMENT、問題・正答は変更しない。
- PDF/PPTX成果物は変更しない。
- 同期後、Topic 09最終QAを再判定する。
