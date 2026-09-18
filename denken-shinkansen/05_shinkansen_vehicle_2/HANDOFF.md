# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜18は最終QAまで `PASS / completed`。完成数は `18 / 39`。

現在地は `topic_18_completed`。次の未完了テーマは Topic 19 `ミニ新幹線 複電圧主回路`。

## Topic 18 完了記録

最終QA:
- `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_final_qa.md`

判定: `PASS / completed`

固定EXAM_ALIGNMENT:
- R7 二次 機械・制御 問2 `(1)の滑り算出`: 1要素
- R2 二次 機械・制御 問1 `(1)〜(7)`: 7要素
- R2 一次 機械 問3 `(1)(4)(5)`: 3要素
- R2 一次 機械 問5 `(3)(4)(5)`: 3要素
- H25 一次 機械 問2 `(5)`: 1要素
- 一次: `7答案要素`
- 二次: `8答案要素`
- 合計: `5問・15答案要素`

完成後clean blind:
- 一次: `7 / 7 PASS`
- 二次: `8 / 8 PASS`
- 合計: `15 / 15 PASS`
- 候補答案変更: `0件`
- 教材外知識による補完: `0件`
- 固定問題差替え: `0件`

成果物:
- 解説source: `PASS`
- 解説PDF: `PASS / 6 pages / 180 dpi 6 / 6`
- 練習source: `PASS / 一次8＋二次4`
- 練習PDF: `PASS / 5 pages / pdfium・pdftoppm 180 dpi 5 / 5`
- PowerPoint: `PASS / 4 slides / 同一生成source 1600×900 4 / 4`
- 固定15答案要素接続: `15 / 15 PASS`
- SPEC指定7項目: `7 / 7 PASS`
- SPEC指定3可視化: `3 / 3 PASS`
- SPEC外追加: `0件`
- 未確認E2系実車値の真値化: `0件`

前回最終QAの唯一のblockerだった主source状態欄の不整合は解消済み。最終QA再実施工程では、技術本文・問題・正答・数式・PDF/PPTX本体・固定過去問・固定EXAM_ALIGNMENTを変更していない。

履歴:
- 主source: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux.md`
- clean blind候補: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_candidates_clean.md`
- 公式照合: `topics/18_e2series_50hz_60hz_flux/18_e2series_50hz_60hz_flux_blind_reanswer_official_check.md`

## Topic 19 固定SPEC境界

主題:
- 異なる架線電圧へ対応する主回路を、主変圧器・電流・絶縁・出力条件から解析する。

扱う内容:
- 複電圧
- 主変圧器
- 巻数比
- タップ
- 一次電流
- 絶縁
- 主変換装置
- 補助電源
- 電源切替

この範囲を勝手に追加・変更しない。

## 次工程

Topic 19の制作前EXAM_ALIGNMENTを行う。最新mainと他worker成果をreconcileし、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列`SPEC.md`に従い、二種一次・二次を含む公式過去問を直近年度から調査して固定する。本文・PDF・PowerPoint等はEXAM_ALIGNMENT確定前に作らない。不整合や確定不能事項があれば推測せずexact blockerを記録して停止する。