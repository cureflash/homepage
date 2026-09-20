# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜30は最終QAまで `PASS / completed`。完成数 `30 / 39`。

現在地は `topic_31_pending_exam_alignment`。次はTopic 31 `補助電源変換器` の制作前EXAM_ALIGNMENT。

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

## Topic 31 固定範囲

系列SPECの `31 補助電源変換器` で扱う内容:
- インバータ
- コンバータ
- 三相負荷
- 力率
- 高調波
- 変換損失
- 効率
- 負荷変動

現時点ではTopic 31のEXAM_ALIGNMENTは未固定。過去問・実車仕様を推測で先に決めない。

## 次の安全な工程

1. 最新main、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md`、`HANDOFF.md`、直近の車両二種worker成果をreconcileする。
2. 電気技術者試験センター公式過去問を直近年度から調査し、Topic 31に直接必要な一次・二次の論点を抽出する。
3. 二種は一次・二次を合わせ原則5問以上を固定する。二次対象論点で該当記述問題が確認できる場合は最低1問を含める。
4. 各問題の答案要素を独立再計算・公式照合し、教材で必要な説明へ1対1でmapする。
5. 公式過去問・公式解答・一次資料で確定できない事項はexact blockerとして記録し、推測で固定しない。
6. EXAM_ALIGNMENTがPASSしてから解説source制作へ進む。
7. 実車・設備値はJR各社、公的機関、メーカー、鉄道総研等の一次・技術資料で確認できたものだけを実値として扱う。

Topic 31完成後のclean blind candidate固定前には、その時点で固定したEXAM_ALIGNMENTのanswer-bearing資料・公式解答・比較QAを先に開かない。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
