# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-14

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は26/38。01〜26がPASS。active topicは27 `補助電源② 車内照明`。

## 今回進捗
Topic 27の解説画像PowerPointを完成した。16:9・4スライドで、固定EXAM_ALIGNMENT 5問・8小問の判断経路を`lm→cd→lx`、直下/斜入射の幾何、複数光源の照度合成、問題文提示LED配光、7段階解法・過去問マッピングとして可視化した。LibreOffice表示QA、境界overflow、PPTX ZIP整合性はすべてPASS。系列SPEC固定範囲`LED、光束、光度、照度、lm、cd、lx、照明計算`から広げていない。

更新:
- `topics/27_cabin_lighting/27_cabin_lighting_images.pptx` — 16:9、4スライド、表示QA・overflow・ZIP整合性PASS
- `STATUS.md` — `topic_27_powerpoint_complete`へ更新
- `HANDOFF.md`

## Topic 27 品質ゲート対象
1. R7上 機械 問12 — 4灯の均等光源、全光束→光度、斜入射水平面照度、照度合成 — `4` — PASS
2. R6下 機械 問17(a)(b) — 均等点光源の平均光度、斜入射水平面照度 — `2 / 3` — PASS
3. R6上 機械 問17(a) — 球形均等光源の全光束から直下水平面照度 — `2` — PASS
4. R5下 機械 問17(a)(b) — 2点光源の直下照度・中点照度 — `2 / 3` — PASS
5. H27 機械 問16(a)(b) — LEDの提示配光`I(θ)=I(0)cosθ`、方向光度・直下照度 — `4 / 3` — PASS

制作前独立解答: `8 / 8 PASS`。

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-14

## Topic 27 解説本文
- §1: 電験で問われる内容と問題判定
- §2〜§4: 光束`F [lm]`、光度`I [cd]`、照度`E [lx]`
- §5: 均等放射`I=F/(4π)`
- §6: 直下照度`E=I/h^2`
- §7〜§8: 斜入射`E_h=I(θ)cosθ/r^2`、`r=√(h^2+x^2)`、`cosθ=h/r`
- §9: 複数光源の照度加算
- §10: 問題文提示のLED配光式
- §11: `光源条件→単位→幾何→光度→照度→加算→検算`の解法手順
- §12: lm/cd/lx混同、逆二乗、cosθ、距離、加算の頻出ミス
- §13: 新幹線車内照明への接続。未確認実車値は使用しない
- §14: 選定5問・8小問との全件マッピング
- §15: 公式・解法まとめ

3段階例題:
- 基礎: 均等放射光源の`lm→cd→lx`と直下照度
- 本試験標準: 斜入射水平面照度
- 複合: 問題文提示のLED配光式＋左右対称2灯の照度合成

例題数値は照明計算理解用の仮定値で、実車仕様ではない。

## Topic 27 解説PDF
- `topics/27_cabin_lighting/27_cabin_lighting_explanation.pdf`
- A4縦4ページ
- 光束・光度・照度、均等放射、直下・斜入射、複数光源、問題文提示LED配光式、7段階解法、3段階例題、過去問対応表を収録
- 固定5問・8小問の要求事項を全件マッピング済み
- 180 dpiで全4ページ表示QA PASS。文字切れ・重なり・ページ外はみ出し・破損グリフなし
- 未確認の新幹線車内照明実値は真値化していない
- 輝度・光束発散度・LED半導体物性等の固定範囲外論点は追加していない

## Topic 27 練習PDF
- `topics/27_cabin_lighting/27_cabin_lighting_practice.md`
- `topics/27_cabin_lighting/27_cabin_lighting_practice.pdf`
- A4縦5ページ、全15問。基礎4／標準8／複合3。全問五肢択一・完全解説付き
- 過去問対応: R7上問12=Q2・Q7・Q9・Q14、R6下問17(a)(b)=Q2・Q6・Q7・Q12、R6上問17(a)=Q2・Q3・Q5、R5下問17(a)(b)=Q5・Q8・Q10・Q14、H27問16(a)(b)=Q11・Q12・Q13・Q15
- 固定5問・8小問の要求事項を演習へ全件マッピング済み
- 数値計算を独立再計算し、各数値問題の正答が選択肢内で一意。正答位置A/B/C/D/E各3問
- 180 dpiで全5ページ表示QA PASS。文字切れ・重なり・ページ外はみ出し・破損グリフなし
- 未確認実車値・固定範囲外論点の追加なし

## Topic 27 解説画像PowerPoint
- `topics/27_cabin_lighting/27_cabin_lighting_images.pptx`
- 16:9、4スライド
- Slide 1: 光束・光度・照度と`lm→cd→lx`の判断経路
- Slide 2: 直下/斜入射の幾何、`r=√(h^2+x^2)`、`cosθ=h/r`、照度式
- Slide 3: 複数光源の照度加算と問題文提示LED配光`I(θ)=I(0)cosθ`
- Slide 4: 7段階解法と固定5問・8小問のEXAM_ALIGNMENT
- LibreOfficeで全4スライド表示QA PASS。文字切れ・重なり・ページ外はみ出しなし
- スライド境界overflow検査0件、PPTX ZIP整合性検査PASS
- LED配光式は問題文提示条件として明記し、全LEDへ一般化していない
- 未確認実車値・固定範囲外論点の追加なし

## Topic 27 参考教材
- e-sysnet「照明工学の計算」
  - https://e-sysnet.com/%E7%85%A7%E6%98%8E%E8%A8%88%E7%AE%97/
  - 光束・光度・照度の定義と単位、点光源の逆二乗則・余弦則の説明粒度を確認
- 電験王3「科目別 機械問題一覧」
  - https://denken-ou.com/kikai/
  - 照明分野の年度別出題範囲を確認

文章・図・例題は複製していない。

## Topic 27 範囲境界
採用しない:
- R7下 機械 問17 — 光束発散度が主要求に含まれる
- R6上 機械 問17(b) — 輝度計算を要求するため、(a)のみ採用
- R5上 機械 問12 — 光束発散度・輝度を含む単位判断が必要

追加しない:
- 輝度、光束発散度
- 色温度、演色性、分光分布
- LEDのpn接合、再結合、蛍光体、半導体材料
- 白熱灯・蛍光灯・放電灯の構造や点灯回路
- JIS推奨照度値の暗記
- 未確認の新幹線車内照明の光束・照度・消費電力・器具数等の実車値

## 現在の状態
- `current_status`: `topic_27_powerpoint_complete`
- 完成数: 26/38
- 01〜26: PASS
- active topic: 27 `補助電源② 車内照明`

## 次の正確な開始点
Topic 27の完成後独立再解答を行う。固定EXAM_ALIGNMENT 5問・8小問を、保存済み正答を先に見ず、完成した解説本文・解説PDF・練習PDF・PowerPointの内容だけで再構成し、その後に公式解答と照合する。固定範囲外知識・未確認実車値で補完しない。

## 直前完了 Topic 26
Topic 26 `補助電源① 主回路の電気を車内設備へ` は制作前EXAM_ALIGNMENT、解説本文＋3段階例題、解説PDF、練習PDF、解説画像PowerPoint、完成後独立再解答まで完了。選定5問・8小問は完成後も`8 / 8 PASS`で`COMPLETED`。固定範囲外知識・未確認実車値による補完は0件。
