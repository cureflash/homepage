# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-13

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？` とTopic 02 `なぜ新幹線は25,000Vなのか` は最終QAまでPASSし、`completed`。

完成数: `2 / 14`

active topic: `03 架線はただの銅線ではない`

current status: `topic_03_explanation_pdf_complete`

## 今回進捗

Topic 03を1段階進め、確定済みEXAM_ALIGNMENTと解説本文だけを基準に解説PDFを完成した。

更新成果物:
- `topics/03_catenary_resistance/03_catenary_resistance_explanation.pdf` — A4縦3ページの解説PDF
- `STATUS.md` — `topic_03_explanation_pdf_complete`、次工程を練習問題source・練習PDFへ更新
- `HANDOFF.md`

解説PDF QA:
- 200 dpiで全3ページを再レンダリング
- 文字切れ・重なり・黒塗り・欠落なし
- PDF preflightで3ページ、openable、非暗号化、非スキャンを確認
- 選定済み6過去問への接続、3段階例題、公式・解法まとめを維持
- 新幹線接続はsourceにある教材用仮定値だけを使用
- Topic 05以降の論点、未確認実車値、SPEC外内容の追加なし

判定: `EXPLANATION_PDF_COMPLETE / IN_PROGRESS`

## Topic 03 EXAM_ALIGNMENT

系列SPEC固定範囲:
- 抵抗率
- 導電率
- 長さ
- 断面積
- 電線抵抗
- 直列接続
- 並列接続
- 温度係数
- 温度と抵抗
- 電圧降下
- 発熱

選定済み公式過去問:
1. 令和8年度上期 理論 問7 — 2抵抗の並列接続と未知抵抗の式変形
2. 令和7年度下期 理論 問5 — 直列＋並列抵抗と消費電力比較
3. 令和6年度下期 理論 問7 — 合成抵抗から未知抵抗を逆算
4. 令和5年度上期 理論 問7 — 抵抗温度係数と一定電圧時の電流変化
5. 令和4年度下期 理論 問7 — 温度係数＋並列合成抵抗の変化率
6. 令和2年度 理論 問5 — `R=ρl/S` による複数電線の抵抗比較

source Markdown:
`topics/03_catenary_resistance/03_catenary_resistance.md`

解説PDF:
`topics/03_catenary_resistance/03_catenary_resistance_explanation.pdf`

source内で、6問の要求事項を以下へ接続済み。

- `ρ` と `σ=1/ρ`
- `R=ρl/S` と長さ・断面積の比例関係
- `mm²→m²`、円形断面 `S=πd²/4`
- 直列・並列抵抗の成立理由と合成式
- 全電圧・全電流または合成抵抗から未知抵抗を逆算する手順
- `Rt=R0{1+α(t-t0)}` と線形近似、抵抗比
- 一定電圧時の `I∝1/R`
- 異なる温度係数の抵抗は個別補正後に合成する手順
- `P=I²R` / `P=V²/R` の同一電流・同一電圧による使い分け
- `ΔV=IR` と `R=ρl/S` の接続
- 頻出誤答と検算条件

3段階例題:
1. 基礎 — 教材用仮定導体で `R=ρl/S`、電圧降下、消費電力
2. 本試験標準 — `2 Ω + (6 Ω || Rx)` から `Rx` を逆算し、並列各抵抗の電力を比較
3. 複合・ひっかけ — 異なる温度係数の2抵抗を個別補正し、並列合成と一定電圧時の電流減少率を計算

新幹線接続は、`ρ=3.0×10^-8 Ω·m`、`l=1000 m`、`S=150 mm²`、`I=400 A` の教材用仮定値による単一導体モデルだけを使用し、実車・実測値ではないことを明記した。

公式正答番号・数値解は完成前sourceへ保存していない。完成後、教材内容だけで6問を独立再解答してから公式解答と照合する。

## 境界確認

Topic 03へ追加しないもの:
- キルヒホッフ第1・第2法則
- 枝電流法
- 重ね合わせ
- テブナン・ノートン
- 最大電力供給
- 正弦波・実効値
- RLC・インピーダンス

近接問題の整理:
- 令和6年度下期 理論 問6は複数電源・枝電流を要求するためTopic 05へ送る
- 令和6年度上期 理論 問7は最大電力条件を要求するためTopic 05へ送る
- 令和7年度下期 理論 問6はTopic 02の完成ゲートで既処理のため重複採用しない

未確認の新幹線架線材質・断面積・抵抗値・温度を実車値として置いていない。架線の張力・摩耗・機械強度・高速集電性能は、材料選定に電気抵抗以外の条件もあることを示す範囲に留める。

## Topic 02 完成証跡

source Markdown:
`topics/02_why_25kv/02_why_25kv.md`

解説PDF:
`topics/02_why_25kv/02_why_25kv_explanation.pdf`

練習PDF:
`topics/02_why_25kv/02_why_25kv_practice.pdf`

解説画像PowerPoint:
`topics/02_why_25kv/02_why_25kv_images.pptx`

最終QA:
`topics/02_why_25kv/02_why_25kv_final_qa.md`

現在blob:
- source Markdown: `44cda46bff4cdf203b0ea2bd7c4f6023402f4a8d`
- 解説PDF: `3f8d9dd2b8cfbf9e3a2dc4f259f30d63e822fea0`
- 練習PDF: `6ea946c22814273b3ab127841046ef7ca5791380`
- PowerPoint: `98b0a91a3c5635b77b8a4eebe5e72980cd6f7027`

## Topic 02 EXAM_ALIGNMENT・QA結果

直近の公式理論問題6候補をTopic 02のSPEC境界で再判定済み。

- ゲート対象: 令和7年度下期 理論 問6
- ゲート対象外: 令和8年度上期 問5、令和7年度下期 問5、令和7年度上期 問5・問6・問7
- 対象外理由: 直並列回路、並列電源、回路網、RLC等の後続Topic知識が必要
- Topic 02単独で完答できる問題が1問のみ確認できたため、5問未満例外を適用

完成教材だけで令和7年度下期 理論 問6を独立再解答し、次を得た。

```text
V1 = 2.25 × 3 = 6.75 V
V2 = 3.45 × 2 = 6.90 V

6.75 = E - 3r
6.90 = E - 2r

r = 0.15 Ω
E = 7.20 V
```

- 独立解答: 選択肢 `(2)`
- 公式正答: `(2)`
- 判定: `1 / 1 PASS`
- 教材外知識補完: 0件
- Topic 03以降の知識使用: 0件

成果物QA:
- 解説PDF: A4縦2ページ。現行blobは200 dpi全ページ表示QA PASS版と一致
- 練習PDF: A4縦5ページ、12問、全問五肢択一・完全解説。現行blobは200 dpi全ページ表示QA PASS版と一致
- PowerPoint: 16:9、7枚。現行blobは全スライド表示QA・overflow検査 PASS版と一致

## Topic 01 完成証跡

source Markdown:
`topics/01_train_power_basics/01_train_power_basics.md`

解説PDF:
`topics/01_train_power_basics/01_train_power_basics_explanation.pdf`

練習PDF:
`topics/01_train_power_basics/01_train_power_basics_practice.pdf`

解説画像PowerPoint:
`topics/01_train_power_basics/01_train_power_basics_images.pptx`

最終QA:
`topics/01_train_power_basics/01_train_power_basics_final_qa.md`

## 次に行うこと

Topic 03の確定済みEXAM_ALIGNMENT、source Markdown、解説PDFを基準に練習問題source・練習PDFを作成する。

- 三種の練習問題は原則12問以上
- 少なくとも半数を五肢択一形式にする
- 基礎20〜30%、本試験標準50〜60%、複合・応用約20%を目安にする
- 選定済み6過去問が要求する抵抗率・直並列・温度係数・電力・電圧降下を練習できるようにする
- Topic 05以降の論点を先取りしない
- 未確認の新幹線実車・架線値を真値化しない

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない
