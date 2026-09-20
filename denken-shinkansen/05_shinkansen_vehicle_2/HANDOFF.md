# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜31は最終QAまで `PASS / completed`。完成数 `31 / 39`。

現在地は `topic_32_explanation_pdf_complete`。Topic 32 `照明設計` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QAまで完了。固定公式過去問は一次5問・30答案要素、SPEC固定9項目は `9 / 9 connected`。二次は公式「機械・制御」試験範囲に照明が含まれないため対象外。次はTopic 32練習source。

## Topic 32 解説PDF完了記録

判定: `PASS / EXPLANATION_PDF_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_explanation.pdf`
- `topics/32_lighting_design/32_lighting_design_explanation_pdf_qa.md`

QA:
- PDF blob `93cbe2042655e8c96b1b9af1de216ac94acc9644`
- PDF QA blob `a80ae54a96920fb856f61e1337a16e689ae2c5fc`
- A4縦 `7頁`
- PDFium `7 / 7 PASS`
- Poppler `7 / 7 PASS`
- 固定5問・30答案要素 `30 / 30 PASS`
- 一次 `30 / 30 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目 `9 / 9 PASS`
- 3段階例題 `3 / 3 PASS`
- 未確認実車値の真値化 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

## Topic 32 解説source完了記録

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_explanation_source.md`
- `topics/32_lighting_design/32_lighting_design_explanation_source_qa.md`

QA:
- source blob `7a5f24e64595365231d15f8901a3c88effeca832`
- source QA blob `e792f573bdabe7d0adedd439c673d24223a587bd`
- 固定5問・30答案要素 `30 / 30 connected`
- SPEC固定9項目 `9 / 9 connected`
- 3段階例題 `3 / 3 PASS`
- 例題1 `63.66 cd / 15.92 lx` `PASS`
- 例題2 `13.02... → 14光源 → 7器具` `PASS`
- 例題3 `942.48 lm / 94.25 lm/W / 33.33 lx` `PASS`
- 初回QAで検出した `cd/m²` と `lx` の単位混同リスクは commit `e65d4349d705f983d645bf318fa6628795cad1e6` で根本修正済み
- 未確認実車値の真値化 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

## Topic 32 EXAM_ALIGNMENT完了記録

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design.md`
- `topics/32_lighting_design/32_lighting_design_exam_alignment_qa.md`

固定5問:
- R8 一次「機械」問7 `10 / 10 PASS`
- R7 一次「機械」問7 `5 / 5 PASS`
- R6 一次「機械」問6 `5 / 5 PASS`
- R4 一次「機械」問5 `5 / 5 PASS`
- R3 一次「機械」問6 `5 / 5 PASS`
- 一次 `30 / 30 PASS`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目 `9 / 9 mapped`
- 参考教材比較 `e-sysnet + 電験王2`
- 件数合わせ採用 `0件`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

固定境界:
- R7問7の色温度・ランプ寿命は固定過去問を解くための最小ブリッジとし、SPEC固定項目へ昇格させない。
- R8問7の光束発散度・輝度は測光量の混同防止に必要な中間知識とし、独立テーマへ拡張しない。
- R3問6の多重反射は全光束・光度・照度への複合接続に限定する。
- `lm/W`のエネルギー消費効率と照明率`U`を混同しない。
- 実車照明の方式・器具・灯数・定格・照度・消費電力・効率は一次資料確認なしに真値化しない。

## Topic 31 最終完了記録

判定: `PASS / COMPLETED`

clean blind:
- candidate: `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_clean_blind_candidate.md`
- candidate blob: `007efb48e5934ed4a18aee12ec7ba8a252bc78b0`
- candidate lock commit: `4a945dd9adf321cd7a4d1df97a9c4cec262b2b90`
- compare QA: `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_clean_blind_compare_qa.md`
- candidate固定後修正: `0件`

完成後独立再解答:
- R7 一次「機械」問4 `5 / 5 PASS`
- R5 二次「機械・制御」問3 `7 / 7 PASS`
- R4 一次「機械」問4 `5 / 5 PASS`
- R2 二次「機械・制御」問2 `5 / 5 PASS`
- H22 一次「機械」問3 `5 / 5 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- 合計 `27 / 27 PASS`
- 公式照合不一致 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

R5二次問3(2)のcandidate「機器の損失・発熱が増加する」は、公式標準解答例の「コンデンサやリアクトルの過熱や振動」と同じ過熱・発熱影響を述べており整合。R2二次問2は `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` で公式表示と全一致。

## Topic 31 PowerPoint完了記録

判定: `PASS / POWERPOINT_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images.pptx`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_images_qa.md`

QA:
- PowerPoint blob `e9967a2566c12d286521a7458ce83de19b91da83`
- 16:9 `6 slides`
- LibreOffice PDF変換 `6 / 6 pages PASS`
- PNG render `6 / 6 PASS`
- 空白render・置換文字 `0件`
- 固定5問・27答案要素 `27 / 27 connected`
- 一次 `15 / 15 connected`
- 二次 `12 / 12 connected`
- SPEC固定8項目 `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- Topic 32〜34先取り `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

## Topic 31 練習PDF完了記録

判定: `PASS / PRACTICE_PDF_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice.pdf`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_pdf_qa.md`

QA:
- PDF blob `405383decbd8db2e9af66d314699081ccf1ec0a8`
- source blob `ab834c6c1b640ad2f5e06d49370672a1d5bd14fd`
- A4縦 `9頁`
- PDFium `9 / 9 PASS`
- Poppler `9 / 9 PASS`
- 空白頁・ページ端・置換文字 `0件`
- 一次8問＋二次4問 `12 / 12 PASS`
- 固定5問・27答案要素 `27 / 27 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- SPEC固定8項目 `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- Topic 32〜34先取り `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

## Topic 31 練習source完了記録

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_source.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_source_qa.md`

QA:
- practice source blob `ab834c6c1b640ad2f5e06d49370672a1d5bd14fd`
- practice source QA blob `7d1303e904d727ec927d279d696f582cf882feb1`
- 一次試験型 `8問 / 8問五肢択一 / 8 / 8正答一意`
- 二次試験型 `4問 / 4 / 4途中式・前提・単位・理由あり`
- 合計 `12 / 12 PASS`
- 固定5問・27答案要素への接続 `27 / 27 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- SPEC固定8項目 `8 / 8 PASS`
- 数式・数値独立再計算 `PASS`
- 未確認実車値の真値化 `0件`
- Topic 32〜34先取り `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

固定境界:
- R2二次問2からは固定損＋負荷依存損失の一般モデルだけを使い、変圧器固有の `鉄損=銅損` を補助電源変換器の普遍則にしていない。
- H22一次問3のPV・MPPT固有事項は追加していない。
- R5二次問3の能動フィルタを実車補助電源の搭載事実として扱っていない。
- 特定新幹線の未確認定格、容量、周波数、トポロジー、素子、効率を真値化していない。

## Topic 31 解説PDF完了記録

判定: `PASS / EXPLANATION_PDF_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation.pdf`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_pdf_qa.md`

QA:
- PDF blob SHA `f65e5669a279a522d26016ae1763346912b90b18`
- A4縦 `7頁`
- PDFium `7 / 7 PASS`
- Poppler `7 / 7 PASS`
- 空白頁・端切れ・重大な重なり・置換文字 `0件`
- 固定5問・27答案要素 `27 / 27 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- SPEC固定8項目 `8 / 8 PASS`
- 3段階例題 `3 / 3 PASS`
- 未確認実車値の真値化 `0件`
- Topic 32〜34先取り `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

H22一次問3の三角搬送波・系統より進む位相、R5二次問3の高調波発生源・影響を最終PDFで明示確認。初回ローカル生成でCIDフォントの `≈` 字形不足を検出したため、意味を保つ丸め表記へ再生成してからcanonical化した。

## Topic 31 解説source完了記録

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_source.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_source_qa.md`

QA:
- 固定5問・27答案要素への教材接続 `27 / 27 PASS`
- SPEC固定8項目 `8 / 8 PASS`
- 3段階例題 `3 / 3 PASS`
- 数式・数値独立確認 `PASS`
- 未確認実車値の真値化 `0件`
- Topic 32〜34先取り `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

固定境界:
- R2二次問2は固定損＋負荷依存損失の一般モデルへ接続するだけで、変圧器固有の `鉄損=銅損` を補助電源変換器の普遍則にしない。
- H22一次問3の太陽光・MPPT固有事項は教材範囲へ追加していない。
- R5二次問3の能動フィルタを実車補助電源の搭載事実として扱っていない。
- 例題数値はすべて教材用仮定値。特定新幹線の出力電圧、周波数、容量、トポロジー、素子、効率は一次資料確認なしに真値化していない。

## Topic 31 EXAM_ALIGNMENT完了記録

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_exam_alignment_qa.md`

固定5問:
- R7 一次「機械」問4 `5 / 5 PASS`
- R5 二次「機械・制御」問3 `7 / 7 PASS`
- R4 一次「機械」問4 `5 / 5 PASS`
- R2 二次「機械・制御」問2 `5 / 5 PASS`
- H22 一次「機械」問3 `5 / 5 PASS`
- 一次 `15 / 15 PASS`
- 二次 `12 / 12 PASS`
- 合計 `27 / 27 PASS`
- SPEC固定8項目 `8 / 8 mapped`
- 二次記述・計算問題 `2問`
- 未確認実車値の真値化 `0件`
- exact blocker `0件`

## Topic 30 完了記録

判定: `PASS / COMPLETED`

clean blind:
- candidate: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_candidate.md`
- candidate blob: `33b53e26f54b8619da9819e2ce48cb2250ad13b1`
- candidate lock commit: `a9295e2a018f4d75d3b99ac7c5c6c9044528c8e7`
- compare QA: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_compare_qa.md`
- candidate固定後修正: `0件`

完成後独立再解答:
- R8 一次「理論」問5 `5 / 5 PASS`
- R7 一次「理論」問2 `5 / 5 PASS`
- H30 一次「理論」問2 `5 / 5 PASS`
- H30 一次「機械」問5 `5 / 5 PASS`
- R2 二次「機械・制御」問2 `5 / 5 PASS`
- 一次 `20 / 20 PASS`
- 二次 `5 / 5 PASS`
- 合計 `25 / 25 PASS`
- 公式照合不一致 `0件`
- 固定EXAM_ALIGNMENT変更 `0件`
- exact blocker `0件`

canonical artifacts:
- 解説PDF: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_explanation.pdf` / blob `a3926909e5240e4d77042f12e903f299f81d6800` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- 練習PDF: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_practice.pdf` / blob `f1e9650e39e236a6fb3629fd93a234dfbafe89c2` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- PowerPoint: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_images.pptx` / blob `1b6841ad16eb59c9d9d80daf2cbdd51c45446641` / 16:9 6枚 / render `6 / 6 PASS`
- source/各QA: 同Topic 30ディレクトリのcanonical source・QAを使用
- 固定5問・25答案要素への教材接続 `25 / 25 PASS`
- SPEC必須7項目 `7 / 7 PASS`
- 指定3可視化 `3 / 3 PASS`
- 未確認L0系実車値の真値化 `0件`

R2二次問2はcandidateと公式の未丸め途中値に最終表示へ影響しない微小差があるが、5答案要素 `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` は公式表示と全一致。candidateは変更していない。

## Topic 32 固定範囲

系列SPECの `32 照明設計` で扱う内容:
- 光束
- 光度
- 照度
- 配光
- 照明率
- 保守率
- 所要灯数
- 消費電力
- 効率

## 次の安全な工程

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、既存の車両二種worker成果をreconcileする。
2. 修正済み `32_lighting_design_explanation_source.md` から解説PDFを生成する。
3. PDFは固定5問・30答案要素、SPEC固定9項目、3段階例題、数式・数値、A4縦、ページ端、置換文字をQAする。
4. 実車照明の方式・灯数・光束・照度・消費電力・効率等は一次資料で確認できた値だけを実値として扱い、未確認値は真値化しない。
5. Topic 21のH26二次問1(4) `48.1 N・m / 48.0 N・m` は過去問固有丸め差として維持し、一般式 `P=Tω`、`ω=2πN/60` は変更しない。
6. 仕様不整合または確定不能事項が生じた場合は推測せずexact blockerを記録して停止する。