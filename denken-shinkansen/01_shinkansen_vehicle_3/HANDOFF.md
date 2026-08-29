# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-29

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。

新品質基準の完成数は9/38。PASSは01〜09。次の未完了テーマは10。

## 今回完了
`09 300系① 誘導電動機` を制作前EXAM_ALIGNMENTから本文・成果物・完成後QAまで進め、新品質ゲートをPASSした。

## EXAM_ALIGNMENT
対象: 第三種電気主任技術者 / 機械（三相誘導電動機、回転磁界、同期速度、滑り、二次周波数、電動/発電領域、Y-Δ始動、V/f制御、二次抵抗制御・比例推移、電力分配）。

公式過去問:
1. R6上 機械 問3 — 回転磁界 / スリップリング / 電動・発電領域
2. R6上 機械 問4 — `ns=120f/p`, `n=ns(1-s)`、V/f制御
3. R6上 機械 問15 — 低滑り域 `T∝s`、比例推移 `r2/s=const.`
4. R5下 機械 問4 — Y-Δ始動、`T∝V²`
5. R5下 機械 問15 — `f2=sf` と周波数変更時の回転速度

正本は一般財団法人 電気技術者試験センター公式過去問題・公式解答。

## 参照した電験解説資料
- e-sysnet「三相誘導電動機の原理と構造」
- e-sysnet「三相誘導電動機の理論と等価回路」
- e-sysnet「三相誘導電動機の特性」
- e-sysnet「三相誘導電動機の運転」
- e-sysnet「電動機の速度制御の方法と特徴」
- 電験三種まとめました: R6上問15、R5下問4、R5下問15、H27問15（比較用）

参照日: 2026-08-29。外部本文・図・例題は複製していない。

## 新幹線一次資料
日本車輌製造「JR東海300系新幹線」と鉄道総研の車両ニュースレターを使用。300系の交流電動機・コンバータ／インバータ制御を、誘導機の周波数制御を具体化する例として使用した。公開されていない滑り・運転周波数・内部定数は実値化していない。

## 成果物
- `topics/09_300series_induction_motor/09_300series_induction_motor.md`
- `topics/09_300series_induction_motor/09_300series_induction_motor_explanation.pdf` — 4ページ
- `topics/09_300series_induction_motor/09_300series_induction_motor_practice.pdf` — 15問、4ページ
- `topics/09_300series_induction_motor/09_300series_induction_motor_images.pptx` — 4スライド

解説は、試験論点→回転磁界→同期速度/滑り/二次周波数→運転領域→解法→基礎/標準/複合例題→二次電力分配→Y-Δ始動→比例推移→V/f制御→300系実例→頻出ミス→過去問→まとめで構成。

## Visual QA
解説PDF・練習PDFを最終レンダリング。PowerPointは4スライドをPDF変換後レンダリングし、文字化け・クリップ・重なりなしを確認した。

## 練習問題独立QA
15/15 PASS。基礎4、本試験標準8、複合・応用3、五肢択一15/15。

## 公式過去問 独立再解答
生成時の保存済み正答を先に見ず、教材だけで再構成した。
- R6上問3 → `(3)` PASS
- R6上問4 → `1254 min^-1` → `(3)` PASS
- R6上問15 → `(a)2,(b)3` PASS
- R5下問4 → `75 N·m` → `(5)` PASS
- R5下問15 → `(a)2,(b)1` PASS

5/5で公式解答と一致。

## QA判定
09: `PASS`。完成数9/38。

## Web公開
09のsource / explanation / practice / slidesを `qualifications/denken-shinkansen/catalog.json` へ追加する。

## 判断不能事項
300系主電動機の公開確認できない滑り・個別運転周波数・内部回路定数・個別損失は真値として追加していない。教材の試験対応には影響しない。

## 次の正確な開始点
MASTER制作順を01から確認し、01〜09が新品質基準PASSであることを確認する。10 `300系② VVVF` をactive topicとし、本文作成前に公式過去問5問以上を優先調査してEXAM_ALIGNMENTを作成する。
