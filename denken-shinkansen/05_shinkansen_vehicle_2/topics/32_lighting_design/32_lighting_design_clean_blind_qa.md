# Topic 32 照明設計 — clean blind QA

更新日: 2026-09-20

判定: `PASS / COMPLETED`

## candidate lock

- candidate: `32_lighting_design_clean_blind_candidate.md`
- candidate blob SHA: `b153d374febdd737285e8a6db7722ce14bf019fb`
- lock commit: `30e30f320db482bf63c939ee2be3c6a00d8dbc42`
- lock後candidate変更: `0件`

candidate固定前は公式解答、EXAM_ALIGNMENT QA、過去のanswer-bearing compareを開いていない。固定後に公式解答とcanonical QAを照合した。

## 公式解答照合

### R8 一次「機械」問7

candidate:
- 光束 `ロ / g`
- 光度 `イ / c`
- 照度 `ホ / e`
- 光束発散度 `ハ / b`
- 輝度 `ニ / a`

公式: 完全一致。

判定: `10 / 10 PASS`

### R7 一次「機械」問7

candidate / 公式:
- `(1) ト` = `111 lm/W`
- `(2) チ` = `2π∫_0^π I(θ)sinθ dθ`
- `(3) イ` = 黒体
- `(4) リ` = `70 %`
- `(5) カ` = `16.6 lx`

判定: `5 / 5 PASS`

### R6 一次「機械」問6

candidate / 公式:
- `(1) ヨ` = 約555 nmで最大の標準比視感度
- `(2) ヌ` = 光度
- `(3) ル` = `Φ/(4π)`
- `(4) リ` = `I/l²`
- `(5) ロ` = `E_n cosθ`

判定: `5 / 5 PASS`

### R4 一次「機械」問5

candidate / 公式:
- `(1) ワ` = 光束法
- `(2) ヘ` = `ΦNUM/A`
- `(3) ヨ` = 保守率
- `(4) ニ` = 照明率
- `(5) チ` = `26台`

判定: `5 / 5 PASS`

### R3 一次「機械」問6

candidate式から一意に対応する公式選択肢:
- `(1) ヲ` = `τF_p/(1-ρ)`
- `(2) ホ` = `F_s/(4π)`
- `(3) チ` = `F_s/(4πr²)`
- `(4) ワ` = `HI/(H²+D²)^(3/2)`
- `(5) ヌ` = `M/π`

判定: `5 / 5 PASS`

## 品質ゲート

- 固定5問: `5 / 5 PASS`
- 一次: `30 / 30 PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- 教材外知識による補完: `0件`
- candidate固定後の修正: `0件`
- fixed EXAM_ALIGNMENT変更: `0件`
- SPEC固定9項目: `9 / 9 connected`
- 未確認実車値の真値化: `0件`
- Topic 21一般式 `P=Tω`, `ω=2πN/60` 変更: `0件`
- exact blocker: `0件`

## 最終判定

Topic 32「照明設計」は、EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、完成後clean blind独立再解答まで全工程を通過したため `PASS / COMPLETED` とする。

次工程: Topic 33「空調・電熱の熱収支」の制作前EXAM_ALIGNMENT。
