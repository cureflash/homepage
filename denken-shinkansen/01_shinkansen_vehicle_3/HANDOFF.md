# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-30

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。制作順01→10を先頭から再確認し、active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は15/38。01〜15がPASS。

## 今回完了
`15 400系・E3系・E6系・E8系 新在直通` をEXAM_ALIGNMENTから本文・練習・PowerPoint・Visual QA・独立過去問再解答まで進め、PASSした。

## 公式過去問
R5上機械問9、R4下機械問8、R4上機械問8、R3機械問9、R2機械問9。正本は電気技術者試験センター公式問題・解答。参照教材はe-sysnet、電験三種まとめました、電験王。参照日2026-08-30。

## 教材範囲
巻数比・電流比・容量、定格、鉄損/銅損、負荷率、最大効率、短絡試験、簡易等価回路、電圧変動率、多巻線負荷のP-Q合成まで収録。20/25 kVは新在直通の具体例として使い、一般の変圧器問題へ一般化した。

## 新幹線資料
JR東日本公式でE8系の営業開始日・運行区間・最高速度を確認。土木学会誌で山形新幹線在来線区間AC20 kV、新幹線AC25 kVを確認。実巻数、実タップ、実二次電圧、実切替シーケンスは確認できないため真値化していない。

## 成果物
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage.md`
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_explanation.pdf` — 2ページ
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_practice.pdf` — 15問、3ページ
- `topics/15_mini_shinkansen_dual_voltage/15_mini_shinkansen_dual_voltage_images.pptx` — 5スライド

## QA
練習15/15独立再計算PASS。解説/練習PDFは180 dpi、PPTXはLibreOffice PDF変換後160 dpiでVisual QAし、文字化け・クリップ・重なりなし。

## 公式過去問独立再解答
- R5上問9: `x=0.5`, `eta=98.04%` → `(4)` PASS
- R4下問8: `Pi=900 W` → `(4)` PASS
- R4上問8: `Z=2.00`, `R=0.625`, `X=1.90 ohm` → `(3)` PASS
- R3問9: `epsilon=1.2%` → `(3)` PASS
- R2問9: Q相殺後6.4 MVA、`I=55.99 A` → `(2)` PASS

5/5公式解答一致。教材外知識の補完なし。

## QA判定
15: `PASS`。完成数15/38。

## Web公開
15をカタログへ登録。

## 判断不能事項
E8系等の主変圧器実巻数、実タップ構成、実二次電圧、実切替シーケンスは一次資料で確認できていない。仮定値としても実車値扱いしない。試験対応には影響しない。

## 次の正確な開始点
MASTER制作順を01から確認し01〜15が新品質基準PASSであることを確認後、16 `N700系 車両システム制御` をactive topicとし、本文作成前に関連公式過去問5問以上を優先調査してEXAM_ALIGNMENTを作成する。
