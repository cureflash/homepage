# HANDOFF - 新幹線・電験三種「機械」

更新日: 2026-09-17

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `03_shinkansen_machine_3`。新品質基準の完成数は `12 / 16`。Topic 01〜12は品質ゲートPASSでcompleted。active topicは13「新幹線は主電動機以外もモーターだらけ？」。

## 今回進捗
Topic 13の練習PDFを完成し、GitHub正本へ反映した。A4縦3ページ、全12問・全問五肢択一（基礎3 / 本試験標準7 / 複合・応用2）、完全解説 `12 / 12`。200 dpi表示QA `3 / 3 PASS`、文字抽出QA `PASS`、固定5過去問への接続 `5 / 5 PASS`。固定EXAM_ALIGNMENT変更、件数合わせの仕様外追加、Topic 14〜16先取り、未確認補機仕様の追加はいずれも0件。完成数は `12 / 16` のまま。

source: `topics/13_auxiliary_motors/13_auxiliary_motors.md`
explanation PDF: `topics/13_auxiliary_motors/13_auxiliary_motors_explanation.pdf`
explanation PDF QA: `topics/13_auxiliary_motors/13_auxiliary_motors_explanation_pdf_qa.md`
practice source: `topics/13_auxiliary_motors/13_auxiliary_motors_practice.md`
practice PDF: `topics/13_auxiliary_motors/13_auxiliary_motors_practice.pdf`
practice PDF QA: `topics/13_auxiliary_motors/13_auxiliary_motors_practice_pdf_qa.md`

次工程: 固定EXAM_ALIGNMENTと問題・正答を変更せず、Topic 13の解説画像PowerPointを作成する。

## Topic 13 固定範囲
- 電動機出力
- 回転速度
- トルク
- 負荷特性
- ポンプ
- ファン
- コンプレッサ
- 所要動力
- 効率
- インバータ駆動
- 可変速運転

代表計算:
- `P = ωT`
- `ω = 2πN/60`
- ポンプ水動力 `P_h = ρgQH`
- ポンプ効率・電動機効率・余裕係数を含む所要動力
- ファン・ポンプ系の代表的負荷特性 `Q ∝ N`、`T ∝ N²`、`P ∝ N³`

## Topic 13 固定EXAM_ALIGNMENT
固定した品質ゲート対象:
- R5上 機械 問7 — 電動機・負荷のトルク－速度曲線、安定動作点、送風機負荷
- R4下 機械 問11 — ポンプ所要動力、流量換算、損失水頭、ポンプ効率、電動機効率
- H30 機械 問10 — ポンプ所要動力、効率、余裕係数、必要台数
- H29 機械 問12 — 送風機の負荷特性、`Q ∝ N`、`T ∝ N²`、`P ∝ N³`、可変速運転
- H27 機械 問12 — ポンプ用電動機出力、全揚程、効率、余裕係数

品質ゲート対象: `5問`
制作前独立検証・公式解答照合: `5 / 5 PASS`
教材外・固定範囲外知識による補完: `0件`
件数合わせの仕様外追加: `0件`
未確認補機仕様の追加: `0件`

## Topic 13 範囲境界
- エレベータ・巻上機は独立したTopic 13範囲へ追加しない。
- キャビテーション、NPSH、配管網解析等の高度な流体機械設計へ拡張しない。
- コンプレッサの圧縮仕事・熱力学サイクルへ拡張しない。
- Topic 15の照明・電熱・空調電力を先取りしない。
- ドア駆動装置からシーケンス制御・インタロックへ拡張しない。
- 車種固有の補機形式、定格、電圧、周波数、インバータ方式等は一次資料確認前に実値化しない。

## Topic 13 解説source・PDF
固定5問の要求事項を本文へ `5 / 5 PASS` で接続済み。

- R5上 問7 → §3、§4、§12、基礎例題
- R4下 問11 → §5、§6、§7、§12、本試験標準例題
- H30 問10 → §5〜§8、§12、本試験標準例題
- H29 問12 → §9、§10、§12、複合例題
- H27 問12 → §5〜§8、§12、本試験標準例題

3段階例題: `3 / 3 PASS`
解説source QA: `PASS`
解説PDF: A4縦4ページ
解説PDF表示QA: `4 / 4 PASS`（200 dpi）
解説PDF文字抽出QA: `PASS`
文字切れ・重なり・ページ外はみ出し・欠落・破損グリフ: `0件`
固定5過去問マッピング: `5 / 5`

## Topic 13 練習問題source・PDF
- 全12問、全問五肢択一。
- 構成: 基礎3 / 本試験標準7 / 複合・応用2。
- R5上 問7 → 問8。
- R4下 問11 → 問4、問12。
- H30 問10 → 問5、問12。
- H29 問12 → 問6、問7、問11。
- H27 問12 → 問3、問5、問10。
- 系列SPEC固定範囲補強 → 問1、問2、問9。
- 固定5過去問への接続: `5 / 5 PASS`。
- 独立計算・論理QA: `12 / 12 PASS`。
- 正答一意性QA: `12 / 12 PASS`。
- 練習PDF: A4縦3ページ。
- 完全解説: `12 / 12`。
- 練習PDF表示QA: `3 / 3 PASS`（200 dpi）。
- 練習PDF文字抽出QA: `PASS`。
- 文字切れ・重なり・ページ外はみ出し・欠落・破損グリフ: `0件`。
- 練習PDF固定過去問マッピング: `5 / 5`。
- SHA-256: `c545165e67f0a63988126bbe750eaee952bd14569d0445e782b99e4f44ce37e4`。
- 固定EXAM_ALIGNMENT変更: `0件`。
- 固定範囲外論点追加: `0件`。
- Topic 14〜16先取り: `0件`。
- 未確認補機仕様追加: `0件`。

## 公式・参考資料
公式:
- https://www.shiken.or.jp/chief/third/qa/
- R5上: `20230820_ch_third_q03.pdf` / `20230820_ch_third_a01.pdf`
- R4下: `20230326_ch_third_q03.pdf` / `20230326_ch_third_a01.pdf`
- H30: `20180902_ch_third_q03.pdf` / `20180902_ch_third_a01.pdf`
- H29: `20170903_ch_third_q03.pdf` / `20170903_ch_third_a01.pdf`
- H27: `20150906_ch_third_q03.pdf` / `20150906_ch_third_a01.pdf`

学習資料:
- e-sysnet「電動機の制動と所要出力」: https://e-sysnet.com/%E9%9B%BB%E5%8B%95%E6%A9%9F%E3%81%AE%E5%88%B6%E5%8B%95%E3%81%A8%E6%89%80%E8%A6%81%E5%87%BA%E5%8A%9B/
- e-sysnet「ポンプ用・送風機の運転と停止」: https://e-sysnet.com/%E3%83%9D%E3%83%B3%E3%83%97%E7%94%A8%E3%83%BB%E9%80%81%E9%A2%A8%E6%A9%9F%E3%81%AE%E9%81%8B%E8%BB%A2%E3%81%A8%E5%81%9C%E6%AD%A2/
- 電験王 R4下 機械 問11: https://denken-ou.com/kikair4-2-11/
- 電験三種まとめました R4下 機械 問11: https://yaku-tik.com/denken/r4s-k11/
- 電験三種まとめました H29 機械 問12: https://yaku-tik.com/denken/h29-k12/
- 電験三種まとめました H27 機械 問12: https://yaku-tik.com/denken/h27-k12/

参照日: 2026-09-17
