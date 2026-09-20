# Topic 32 解説source QA

更新日: 2026-09-20

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

## reconcile

最新main、上位仕様、系列SPEC、STATUS/HANDOFF、固定EXAM_ALIGNMENT、既存workerが追加した `32_lighting_design_explanation_source.md` を確認した。解説source自体は既存worker成果を再利用し、重複生成していない。

初回QAで例題1の検算文が `cd/m²` を照度 `lx` と同一視しかねないことを検出したが、commit `e65d4349d705f983d645bf318fa6628795cad1e6` で根本修正済み。修正後sourceでは「照度は受光面の単位面積当たりに入射する光束」「最終単位は `lx = lm/m²`」とし、輝度 `cd/m²` との混同を除去した。

## 品質ゲート

- 固定公式過去問5問: `30 / 30 connected`
- R8 一次「機械」問7: `10 / 10 connected`
- R7 一次「機械」問7: `5 / 5 connected`
- R6 一次「機械」問6: `5 / 5 connected`
- R4 一次「機械」問5: `5 / 5 connected`
- R3 一次「機械」問6: `5 / 5 connected`
- SPEC固定9項目: `9 / 9 connected`
- 3段階例題: `3 / 3 PASS`
- 例題1 数値: `I=800/(4π)=63.66 cd`, `E=63.66/2^2=15.92 lx` — `PASS`
- 例題2 数値: `N=500×40/(3200×0.60×0.80)=13.02...` → 14光源 → 7器具 — `PASS`
- 例題3 数値: `Φ=300π=942.48 lm`, `η=94.25 lm/W`, `E=300/3^2=33.33 lx` — `PASS`
- 光束・光度・照度の単位区別: `PASS`
- 逆二乗則・余弦則: `PASS`
- 軸対称配光積分: `PASS`
- 光束法・照明率・保守率・所要灯数: `PASS`
- `lm/W` と照明率の区別: `PASS`
- R7問7の色温度・70%寿命基準を最小ブリッジに限定: `PASS`
- R8問7の光束発散度・輝度を中間知識に限定: `PASS`
- R3問6の多重反射を固定過去問条件へ限定: `PASS`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## 次工程

修正後sourceを基に解説PDFを生成し、固定5問・30答案要素、SPEC固定9項目、3段階例題、数式・数値、ページ端・置換文字をPDF QAする。
