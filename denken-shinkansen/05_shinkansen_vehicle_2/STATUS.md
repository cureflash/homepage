# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `30 / 39`
- current_status: `topic_31_practice_pdf_complete`
- last_completed_topic: `30 L0系④ 誘導集電・非接触電力伝送`
- active_topic: `31 補助電源変換器`
- next_start: Topic 31 PowerPointを作成し、固定5問・27答案要素とSPEC 8項目を維持してrender QAする

Topic 01〜30は `PASS / completed`。完成数 `30 / 39`。Topic 31は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QAまで完了。

## Topic 31 練習PDF

判定: `PASS / PRACTICE_PDF_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice.pdf`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_pdf_qa.md`

QA:
- PDF blob SHA: `405383decbd8db2e9af66d314699081ccf1ec0a8`
- source blob SHA: `ab834c6c1b640ad2f5e06d49370672a1d5bd14fd`
- A4縦: `9頁`
- PDFium: `9 / 9 PASS`
- Poppler: `9 / 9 PASS`
- 空白頁・ページ端・置換文字: `0件`
- 一次8問＋二次4問: `12 / 12 PASS`
- 固定5問・27答案要素: `27 / 27 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 31 練習source

判定: `PASS / PRACTICE_SOURCE_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_source.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_practice_source_qa.md`

QA:
- practice source blob SHA: `ab834c6c1b640ad2f5e06d49370672a1d5bd14fd`
- practice source QA blob SHA: `7d1303e904d727ec927d279d696f582cf882feb1`
- 一次試験型: `8問 / 8問五肢択一 / 8 / 8正答一意`
- 二次試験型: `4問 / 4 / 4途中式・前提・単位・理由あり`
- 合計: `12 / 12 PASS`
- 固定5問・27答案要素への教材接続: `27 / 27 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 数式・数値独立再計算: `PASS`
- R2二次問2の変圧器固有条件を変換器へ普遍化: `0件`
- H22一次問3のPV・MPPT固有事項追加: `0件`
- R5二次問3の能動フィルタを実車搭載事実化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

## Topic 31 解説PDF

判定: `PASS / EXPLANATION_PDF_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation.pdf`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_pdf_qa.md`

QA:
- PDF blob SHA: `f65e5669a279a522d26016ae1763346912b90b18`
- A4縦: `7頁`
- PDFium: `7 / 7 PASS`
- Poppler: `7 / 7 PASS`
- 空白頁・端切れ・重大な重なり・置換文字: `0件`
- 固定5問・27答案要素: `27 / 27 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- H22一次問3の三角搬送波・系統より進む位相: `確認済み`
- R5二次問3の高調波発生源・影響・基本波／高調波分離: `確認済み`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

初回ローカル生成でCIDフォントの `≈` 非収録を検出し、原因を字形不足と診断して意味を保つ丸め表記へ再生成。canonical PDFは再レンダリング・再QA後の版。

## Topic 31 解説source

判定: `PASS / EXPLANATION_SOURCE_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_source.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_explanation_source_qa.md`

QA:
- 固定5問・27答案要素への教材接続: `27 / 27 PASS`
- SPEC固定8項目: `8 / 8 PASS`
- 3段階例題: `3 / 3 PASS`
- 数式・数値独立確認: `PASS`
- R2二次問2の変圧器固有最大効率条件を変換器へ普遍化: `0件`
- H22一次問3の太陽光・MPPT固有事項追加: `0件`
- R5二次問3の能動フィルタを実車搭載事実化: `0件`
- 未確認実車値の真値化: `0件`
- Topic 32〜34先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

教材例題の電圧・電流・容量・損失等はすべて教材用仮定値と明示。実車接続はメーカー一次資料で確認できた鉄道車両用電源装置の一般事実に限定し、特定新幹線の未確認定格・トポロジー・素子・効率を真値化していない。

## Topic 31 EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

canonical artifacts:
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter.md`
- `topics/31_auxiliary_power_converter/31_auxiliary_power_converter_exam_alignment_qa.md`

固定過去問:
- R7 一次「機械」問4: `5 / 5 PASS`
- R5 二次「機械・制御」問3: `7 / 7 PASS`
- R4 一次「機械」問4: `5 / 5 PASS`
- R2 二次「機械・制御」問2: `5 / 5 PASS`
- H22 一次「機械」問3: `5 / 5 PASS`
- 一次: `15 / 15 PASS`
- 二次: `12 / 12 PASS`
- 合計: `27 / 27 PASS`
- SPEC固定8項目: `8 / 8 mapped`
- 二次記述・計算問題: `2問`
- 未確認実車値の真値化: `0件`
- 固定EXAM_ALIGNMENT仕様不整合: `0件`
- exact blocker: `0件`

R2二次問2は「固定損＋負荷依存損失→効率・負荷変動」の一般モデルへだけ接続し、変圧器固有の最大効率条件を補助電源変換器の普遍則へ一般化しない。H22一次問3の太陽光・MPPT固有事項、R5二次問3の能動フィルタ実装事実も実車補助電源へ持ち込まない。

## Topic 30 最終結果

判定: `PASS / COMPLETED`

clean blind:
- candidate: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_candidate.md`
- candidate blob SHA: `33b53e26f54b8619da9819e2ce48cb2250ad13b1`
- candidate lock commit: `a9295e2a018f4d75d3b99ac7c5c6c9044528c8e7`
- compare QA: `topics/30_l0_inductive_power_collection_contactless_power_transfer/30_l0_inductive_power_collection_contactless_power_transfer_clean_blind_compare_qa.md`
- candidate固定後修正: `0件`

完成後独立再解答:
- R8 一次「理論」問5: `5 / 5 PASS`
- R7 一次「理論」問2: `5 / 5 PASS`
- H30 一次「理論」問2: `5 / 5 PASS`
- H30 一次「機械」問5: `5 / 5 PASS`
- R2 二次「機械・制御」問2: `5 / 5 PASS`
- 一次: `20 / 20 PASS`
- 二次: `5 / 5 PASS`
- 合計: `25 / 25 PASS`
- 公式照合不一致: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`

成果物QA:
- 解説source＋source QA: `PASS`
- 解説PDF: blob `a3926909e5240e4d77042f12e903f299f81d6800` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- 練習source＋source QA: `PASS`
- 練習PDF: blob `f1e9650e39e236a6fb3629fd93a234dfbafe89c2` / A4縦7頁 / PDFium・Poppler `7 / 7 PASS`
- PowerPoint: blob `1b6841ad16eb59c9d9d80daf2cbdd51c45446641` / 16:9 6枚 / render `6 / 6 PASS`
- 固定5問・25答案要素への教材接続: `25 / 25 PASS`
- SPEC必須7項目: `7 / 7 PASS`
- 指定3可視化: `3 / 3 PASS`
- 未確認L0系実車値の真値化: `0件`
- Topic 31範囲先取り: `0件`
- exact blocker: `0件`

R2二次問2はcandidateと公式の未丸め途中値に最終表示へ影響しない微小差があるが、公式表示の5答案要素 `400 W / 624 W / 80.0 % / 99.0 % / 97.5 %` は全一致。candidateは変更していない。

## Topic 31 系列SPEC固定範囲

`31 補助電源変換器`

扱う内容:
- インバータ
- コンバータ
- 三相負荷
- 力率
- 高調波
- 変換損失
- 効率
- 負荷変動

実車・設備仕様は一次資料で確認できたものだけを実値として扱い、未確認値を推測で確定しない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
