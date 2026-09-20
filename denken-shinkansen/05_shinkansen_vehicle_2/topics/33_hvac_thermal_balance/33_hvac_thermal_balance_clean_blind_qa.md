# Topic 33 空調・電熱の熱収支 — clean blind QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## candidate lock

- candidate: `33_hvac_thermal_balance_clean_blind_candidate.md`
- candidate blob SHA: `7c205a00c70e1b5e339d55fd01cb74cefb249d54`
- lock commit: `7e32a02955fe3c7430abb7791314d8d109aee1db`
- lock後candidate変更: `0件`

candidate固定前は公式解答、`33_hvac_thermal_balance.md` の正答・独立検証部分、`33_hvac_thermal_balance_exam_alignment_qa.md`、Topic 33のanswer-bearing compareを開いていない。固定後に電気技術者試験センター公式解答とcanonical QAを照合した。

## 公式解答照合

### R8 一次「機械」問6

candidate / 公式:
- `(1) ロ` = `3600RI²`
- `(2) ニ` = `10 W`
- `(3) ト` = `79.5 ℃`
- `(4) リ` = `εσS₁F₁₂(T₁⁴-T₂⁴)`
- `(5) ヲ` = ステファン・ボルツマン定数

判定: `5 / 5 PASS`

### R3 一次「機械」問7

candidate / 公式:
- `(1) ヌ` = ジュール熱
- `(2) ヘ` = 熱平衡
- `(3) ワ` = 熱伝導
- `(4) ヲ` = 対流熱伝達
- `(5) ハ` = 放射伝熱

判定: `5 / 5 PASS`

### R1 一次「機械」問7 — ヒートポンプ行

candidate / 公式:
- B欄 `(ロ)` = 電動機による圧縮機の駆動
- C欄 `(f)` = 凝縮器からの熱の吸収

判定: `2 / 2 PASS`

### H30 一次「機械」問4

candidate / 公式:
- `(1) ワ` = 位相制御
- `(2) ニ` = 高調波
- `(3) カ` = 伝導
- `(4) ロ` = 赤外放射
- `(5) ヲ` = 温度差に比例

判定: `5 / 5 PASS`

### H27 一次「機械」問4

candidate / 公式:
- `(1) ニ` = 圧縮機
- `(2) チ` = 膨張弁
- `(3) ハ` = 逆カルノーサイクル
- `(4) ト` = `1+Q_L/W`
- `(5) カ` = HFC

判定: `5 / 5 PASS`

## canonical EXAM_ALIGNMENT QA照合

`33_hvac_thermal_balance_exam_alignment_qa.md` の固定5問・22答案要素と全件一致した。

- R8問6: `5 / 5 PASS`
- R3問7: `5 / 5 PASS`
- R1問7ヒートポンプ行: `2 / 2 PASS`
- H30問4: `5 / 5 PASS`
- H27問4: `5 / 5 PASS`
- 合計: `22 / 22 PASS`

## 品質ゲート

- 固定5問: `5 / 5 PASS`
- 一次: `22 / 22 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に電熱なし）`
- 教材外知識による補完: `0件`
- candidate固定後の修正: `0件`
- fixed EXAM_ALIGNMENT変更: `0件`
- SPEC固定7項目: `7 / 7 connected`
- H27 HFCを現行実車仕様へ一般化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- exact blocker: `0件`

## 最終判定

Topic 33「空調・電熱の熱収支」は、EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過したため `PASS / COMPLETED` とする。

次工程: Topic 34「コンプレッサ・ポンプ・ファンの負荷特性」の制作前EXAM_ALIGNMENT。
