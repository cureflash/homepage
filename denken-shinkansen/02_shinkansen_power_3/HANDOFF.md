# HANDOFF - 新幹線・電験三種「電力」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `02_shinkansen_power_3`。新品質基準の完成数は `11 / 16`。Topic 01〜11は完成済み。

## 今回進捗
Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？` の制作前EXAM_ALIGNMENTを完了した。SPEC固定範囲から追加せず、公式過去問5問・6答案要素を固定し、公式標準解答の照合前に独立導出、その後の照合で `6 / 6 PASS`。公式解答との不一致0件、SPEC固定範囲外の採用問題0件、Topic 13以降による補完0件、未確認新幹線実設備値への依存0件、件数合わせの仕様追加0件。

固定問題:
- R7上 電力 問12
- R6下 電力 問13
- R3 電力 問16 (a)(b)
- H29 電力 問8
- H24 電力 問13

source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics.md`

後工程の完成後ブラインド独立再解答を汚染しないため、制作前に導出した選択肢番号・最終数値解はsource・STATUS・HANDOFFへ転記していない。

## Topic 12 固定範囲
`SPEC.md` から追加しない。

- 電線の自重
- 弛度
- 支持点
- 径間
- 張力
- 温度
- 風圧荷重
- 着雪
- 電線伸縮
- 波動伝播の基本
- 高速集電

品質ゲートの中心は弛度・径間・水平張力・電線実長・温度伸縮。`D=wS^2/(8T)`、`L≈S+8D^2/(3S)`、`ΔL=αLΔθ` を本試験標準の逆算まで扱う。風圧荷重・着雪は単位長さ当たり荷重への影響、波動伝播は張力と線密度に依存する基本関係、高速集電はその物理的接続までとする。未確認の架線張力・波動速度・接触力・構成寸法、パンタグラフ制御・空力、Topic 13の材料論点、支持物・支線設計、法規上の風圧荷重区分は追加しない。

H25 電力 問9は架線張力に関連するが、支線・支柱の幾何と支持物設計が中心で固定範囲外の独立論点を要するため品質ゲートから除外。H24 電力 問13はR6下 電力 問13と同型だが、温度上昇と弛度の継続出題確認として採用した。

## 直前完了テーマ
Topic 11 `架線事故ではどうやって電気を止める？` は `PASS / completed`。前回最終QAで唯一FAILだった旧進捗記録4箇所は全て現在地へ同期済み。固定5問・7答案要素の完成後ブラインド独立再解答 `7 / 7 PASS`、公式解答一致 `7 / 7`、必須成果物、PDF/PPTX QA、SPEC境界、進捗記録整合を全件PASS確認した。技術本文・固定EXAM_ALIGNMENT・数式・問題・正答・PDF/PPTX・独立再解答結果は変更していない。

固定結果:
- 品質ゲート対象: 公式過去問5問・7答案要素
- R5下 電力 問16 (a)(b): `(2),(4)`
- R5上 電力 問16 (a)(b): `(4),(2)`
- R2 電力 問8: `(4)`
- R2 電力 問9: `(2)`
- H22 電力 問8: `(3)`
- 制作前独立検証: `7 / 7 PASS`
- 解説本文: §1〜§15 完成
- 3段階例題: 基礎・本試験標準・複合 各1問完成
- 固定5問・7答案要素の本文要求事項マッピング: `7 / 7`
- 解説PDF: `topics/11_fault_protection/11_fault_protection_explanation.pdf`
- 解説PDF QA: `topics/11_fault_protection/11_fault_protection_explanation_qa.md`
- 解説PDF: A4縦4ページ
- 解説PDF 200 dpi表示QA: `4 / 4 PASS`
- 解説PDF文字抽出QA: `PASS`
- 3段階例題数値・論理再検算: `PASS`
- 練習問題source: `topics/11_fault_protection/11_fault_protection_practice_source.md`
- 練習PDF: `topics/11_fault_protection/11_fault_protection_practice.pdf`
- 練習PDF QA: `topics/11_fault_protection/11_fault_protection_practice_qa.md`
- 練習問題数: `12`
- 練習形式: `12 / 12` 五肢択一
- 練習難易度: 基礎3 / 本試験標準7 / 複合2
- 練習PDF: A4縦4ページ
- 練習PDF 200 dpi表示QA: `4 / 4 PASS`
- 練習PDF文字抽出QA: `PASS`
- 練習PDF数値・論理再検算: `12 / 12 PASS`
- 練習PDF正答一意性: `12 / 12 PASS`
- 練習PDF固定5問・7答案要素への接続: `7 / 7`
- 解説画像PowerPoint: `topics/11_fault_protection/11_fault_protection_images.pptx`
- PowerPoint QA: `topics/11_fault_protection/11_fault_protection_powerpoint_qa.md`
- PowerPoint: 16:9・4枚
- PowerPoint固定5問・7答案要素の要求事項可視化: `7 / 7`
- PowerPoint 1601×900表示QA: `4 / 4 PASS`
- PowerPoint overflow: `0件`
- PowerPoint ZIP整合性: `PASS`
- PowerPoint SHA-256: `f0d467279ec3c282293f697f21ee5e62967648cfb28fead3fa087887ca560069`
- 完成後独立再解答: `topics/11_fault_protection/11_fault_protection_independent_reanswer.md`
- 完成後ブラインド独立再解答: `7 / 7 PASS`
- 公式解答一致: `7 / 7 PASS`
- 教材外知識補完: `0件`
- Topic 12以降の論点による補完: `0件`
- SPEC固定範囲外追加: `0件`
- 未確認新幹線実設備値の使用: `0件`
- main sourceへの完成後独立再解答結果同期: 完了
- 最終QA: `topics/11_fault_protection/11_fault_protection_final_qa.md`
- 最終QA判定: `PASS / completed`
- 最終QAの技術内容・成果物・過去問品質ゲート・SPEC境界・進捗記録整合: PASS

前回FAILだった旧進捗記録4箇所（解消済み）:
1. `11_fault_protection_explanation_qa.md` — 練習問題source以降の後工程完了を反映
2. `11_fault_protection_practice_source.md` — 練習PDF・PowerPoint・独立再解答・main source同期・最終QA実施済みを反映
3. `11_fault_protection_powerpoint_qa.md` — 完成後ブラインド独立再解答 `7 / 7 PASS`、main source同期・最終QA実施済みを反映
4. `11_fault_protection_independent_reanswer.md` — main source同期・最終QA実施済みを反映

## Topic 11 固定範囲
`SPEC.md` から追加しない。

- 短絡
- 地絡
- 短絡電流
- 過電流
- 遮断器
- 遮断容量
- 保護リレー
- 選択遮断
- 接地
- 避雷器

新幹線側は「25kVの架線が地絡したら、なぜ発電所まで全部止めなくてよいのか？」を入口として事故検出・遮断・保護協調へつなぐ。未確認の保護整定値、事故電流値、遮断器定格、鉄道固有アルゴリズムは真値として置かない。

R8上 電力 問7は自動再閉路がSPEC外、R8上 電力 問9は通信誘導等がSPEC外のため品質ゲートから除外済み。件数合わせの仕様追加はしていない。

## 現在状態
- `current_status`: `topic_12_exam_alignment_complete`
- 完成数: `11 / 16`
- last completed: Topic 11 `架線事故ではどうやって電気を止める？`
- active: Topic 12 `320km/hでもパンタグラフが離れないのはなぜ？`
- Topic 12 source: `topics/12_overhead_line_mechanics/12_overhead_line_mechanics.md`
- 固定問題: `5問・6答案要素`
- 制作前独立検証: `6 / 6 PASS`
- 公式解答との不一致: `0件`
- SPEC固定範囲外の採用問題: `0件`
- Topic 13以降の論点による補完: `0件`
- 未確認新幹線実設備値への依存: `0件`
- 件数合わせの仕様追加: `0件`

## 次の正確な開始点
Topic 12の解説本文＋3段階例題を作成し、固定5問・6答案要素の要求事項を本文へ `6 / 6` マッピングする。SPEC固定範囲外、Topic 13以降、未確認の新幹線実設備値を追加しない。
