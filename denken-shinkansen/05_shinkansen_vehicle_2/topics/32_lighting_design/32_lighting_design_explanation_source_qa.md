# Topic 32 解説source QA

更新日: 2026-09-20

判定: `NEEDS_REVISION / PHOTOMETRIC_UNIT_SEMANTICS`

## reconcile

最新main、上位仕様、系列SPEC、STATUS/HANDOFF、固定EXAM_ALIGNMENT、既存workerが追加した `32_lighting_design_explanation_source.md` を確認した。解説source自体は既存worker成果を再利用し、重複生成していない。

## PASS項目

- 固定公式過去問5問: `30 / 30 connected`
- R8 一次「機械」問7: `10 / 10 connected`
- R7 一次「機械」問7: `5 / 5 connected`
- R6 一次「機械」問6: `5 / 5 connected`
- R4 一次「機械」問5: `5 / 5 connected`
- R3 一次「機械」問6: `5 / 5 connected`
- SPEC固定9項目: `9 / 9 connected`
- 3段階例題: `3 / 3 present`
- 例題1 数値: `I=800/(4π)=63.66 cd`, `E=63.66/2^2=15.92 lx` — `PASS`
- 例題2 数値: `N=500×40/(3200×0.60×0.80)=13.02...` → 14光源 → 7器具 — `PASS`
- 例題3 数値: `Φ=300π=942.48 lm`, `η=94.25 lm/W`, `E=300/3^2=33.33 lx` — `PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`

## exact blocker

例題1の検算にある次の文は、測光量の単位を誤同定させるため、このままでは品質ゲートを通せない。

`単位も cd/m² に相当して lx となる。`

`cd/m²` は輝度の単位であり、`lx = lm/m²` と同一視してはならない。点光源照度式 `E=I/r²` の数値計算自体は正しいが、この検算文は削除または次の意味へ修正する必要がある。

- 結果の測光量は照度なので単位は `lx`。
- `cd/m²` は輝度の単位であり、照度 `lx` と単位名・測光量を同一視しない。

この1点を修正し、source全体を再QAするまで解説PDF生成へ進めない。

## 次工程

`32_lighting_design_explanation_source.md` の上記1文を根本修正し、このQAを `PASS / EXPLANATION_SOURCE_COMPLETE` へ更新する。その後に解説PDF生成・PDF QAへ進む。
