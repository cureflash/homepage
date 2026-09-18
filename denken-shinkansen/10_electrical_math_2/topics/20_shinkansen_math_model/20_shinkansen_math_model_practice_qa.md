# Topic 20 練習PDF QA

実施日: 2026-09-19

対象:
- source: `20_shinkansen_math_model_practice.md` (blob `ef655bb598eb05c29cc939721fd7a711b6b1bda2`)
- PDF: `20_shinkansen_math_model_practice.pdf`
- PDF git blob: `eaf03c072f61140a8b6a0fb8c241c8a3219cd7e5`
- PDF SHA-256: `49ed003142152e83d1c80b7ce69c64c6d6f4c166fd39d1441550ea8e4e6c658c`

判定: `PASS / PRACTICE_PDF_COMPLETE`

## 1. 仕様・範囲

- MASTER_SPEC / EXAM_ALIGNMENT_SPEC / 系列SPECで固定したTopic 20範囲だけを収録: `PASS`
- 新規数学・算法の追加: `0件`
- 未確認実車値の追加: `0件`
- 教育用仮定値を実車値として扱った箇所: `0件`
- 接続確認5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題の追加: `0件`

## 2. PDF基本QA

- 用紙: A4縦
- ページ数: `4`
- 200 dpi再レンダリング: `4 / 4 PASS`
- 文字切れ・ページ外はみ出し: `0件`
- 表・本文・数式の重なり: `0件`
- 日本語欠落・豆腐文字: `0件`
- 問題番号・選択肢・数式・解答の可読性: `PASS`

## 3. 構造・文字抽出QA

`pdfinfo` と `pdftotext -layout` で全4ページを確認した。

- A4縦・4ページ: `PASS`
- 問1〜問12: `PASS`
- `解答・完全解説`: `PASS`
- 運動方程式・Euler更新・速度積分: `PASS`
- `P=Fv`, `E=∫Pdt`, `F dx`: `PASS`
- 一次簡略モデルと `G(s)=1/(Ms+D)`: `PASS`
- サンプリング条件・FFT周波数軸への接続: `PASS`
- 品質ゲート欄: `PASS`

## 4. 独立数値・論理QA

source確定後のPDFについて主要計算を独立に再確認した。

- 問1〜問8 一次型正答番号: `3, 3, 2, 3, 4, 1, 4, 5`
- 一次型正答一意性: `8 / 8 PASS`
- 問9: `a=3 m/s^2`, `v=(4,7,10) m/s`, `Δx=14 m`, `Wtraction=252 kJ`, `Wresistance=42 kJ`, `ΔK=210 kJ`, `∫Pdt=252 kJ` → `PASS`
- 問10: `G(s)=1/(6s+3)`, `τ=2 s`, `v_ss=4 m/s`, `v(2)=2.5285... m/s`, Euler `v2=3 m/s`, 差 `0.4715... m/s` → `PASS`
- 問11: `a=-2 m/s^2`, `v=(14,12,10,8) m/s`, `Δx=33 m`, `E_signed=ΔK=-264 kJ`, 正の機械回収量 `264 kJ` → `PASS`
- 問12: `f_max=45 Hz`, `f_s=80 Hz` は条件不成立、`f_s=120 Hz`, `N=24`, `Δf=5 Hz`, `k=3,9` → `PASS`
- 独立計算・論理QA: `12 / 12 PASS`

## 5. 過去問対応品質ゲート維持

- 接続確認した第二種公式過去問: `5問`
- 統合新幹線モデル自体を直接要求する確認済み第二種過去問: `0問`
- 接続確認5問の教材内マッピング: `5 / 5 PASS`
- 接続5問の直接対応品質ゲート件数への水増し: `0件`
- 第一種・第三種問題追加: `0件`
- 最適制御・KKT・追加数値ODE算法・FFT実装詳細・PWM制御一般の仕様外追加: `0件`
- 未確認実車値依存: `0件`

## 判定

`PASS / PRACTICE_PDF_COMPLETE`

次工程: 固定済みEXAM_ALIGNMENT、制作前独立検証、解説本文・解説PDF・練習問題source・練習PDFを変更せず、Topic 20の解説画像PowerPoint＋QAを作成する。
