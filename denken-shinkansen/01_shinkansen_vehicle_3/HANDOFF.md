# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-30

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は18/38。01〜18がPASS。次の未完了テーマは19 `N700S① SiC`。

## 今回完了
18 `E7・W7系 北陸新幹線の電源条件` を、制作済みEXAM_ALIGNMENTから本文・練習・PowerPoint・完成後独立再解答・表示QA・Web公開まで完了した。

## 18 EXAM_ALIGNMENT
公式過去問:
1. R6上 機械 問4 — `Ns=120f/p`, `n=(1-s)Ns`, V/f一定。
2. R5下 機械 問15 — `s=(Ns-n)/Ns`, `f2=sf`, 40Hzインバータ運転。
3. R5上 機械 問4 — `ω=2πn/60`, `T=P/ω`。
4. H28 機械 問4 — 同期ワット `P2=Tωs`。
5. R3 機械 問10 — `P=Fv/η`。

正答・問題内容の正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。参照日2026-08-30。

## 参考にした電験解説資料
- e-sysnet「三相誘導電動機の理論と等価回路」— 同期速度・すべりの説明粒度。
- e-sysnet「三相誘導電動機の特性」— `P=Tω` と特性のつなぎ方。
- 電験三種まとめました — R5上問4、H28問4、R3問10の解法展開を比較。
外部本文・図・例題は複製していない。

## 新幹線一次資料
- JR東日本 E7系公式: 北陸新幹線の30‰勾配・電源周波数変化、50/60Hz両対応、最高速度275km/h。
- JR西日本ニュースリリース: E7系/W7系はJR東日本・JR西日本共同開発。

## 教材の中核
- 架線50/60Hzとインバータ出力周波数を分離。
- `Ns=120f/p`, `s=(Ns-n)/Ns`, `n=(1-s)Ns`, `f2=sf`。
- V/f一定と磁束。
- `ω=2πn/60`, `P=Tω` と同期ワットの使い分け。
- `30‰=0.030`, 小勾配で `F_grade≈mgi`, `P_grade=F_grade v`, `Pin=Pmech/η`。
- 周波数対応と急勾配対応を別論点で解き、最後にE7/W7の線区条件へ接続。

## 成果物
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power.md`
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_explanation.pdf` — 4ページ
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_practice.pdf` — 15問、4ページ
- `topics/18_e7_w7_hokuriku_power/18_e7_w7_hokuriku_power_images.pptx` — 5スライド

## Visual QA
解説PDF・練習PDFを160dpiでレンダリング。PowerPointをLibreOfficeでPDF化し140dpiでレンダリング。文字化け、クリップ、重なり、図形破綻なし。

## 練習問題独立QA
15/15 PASS。基礎4 / 標準8 / 応用3、五肢択一15/15。代表値: `1254 min^-1`, `1.80Hz`, `1146 min^-1`, `397.9N·m`, `20.94kW`, `5.44kW`, `2.352MW`, `2.613MW`, `1344 min^-1`。

## 公式過去問 独立再解答
- R6上 問4 → `(3)` PASS
- R5下 問15 → `(a)(2)`, `(b)(1)` PASS
- R5上 問4 → `(2)` PASS
- H28 問4 → `(3)` PASS
- R3 問10 → `(4)` PASS

5/5 PASS。教材外知識を補わず、公式選択理由と適用条件まで説明できた。

## QA判定
18: `PASS`。完成数18/38。

## Web公開
18をcatalogへ追加する。確認時点のcatalogは1〜16までで、PASS済み17が欠落していたため、17も既存成果物を削除せずcatalogへ復元する。

## 判断不能事項
公開一次資料で確認していない主変圧器巻数、実磁束密度、主電動機の速度別実トルク、30‰区間での実入力電力・実走行抵抗、異周波切替シーケンスは真値として追加していない。学習計算は仮定値と明記した。

## 次の正確な開始点
MASTER制作順を01から確認し、01〜18が新品質基準PASSであることを確認する。19 `N700S① SiC` をactive topicとし、本文作成前に一般財団法人 電気技術者試験センター公式過去問を原則5問以上調査してEXAM_ALIGNMENTを作成する。
