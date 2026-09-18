# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜18は最終QAまで `PASS / completed`。完成数は `18 / 39`。

現在地は `topic_19_exam_alignment_complete`。active topic は Topic 19 `ミニ新幹線 複電圧主回路`。制作前EXAM_ALIGNMENTは完了し、本文・PDF・PowerPointは未着手。

## Topic 19 制作前EXAM_ALIGNMENT

source:
- `topics/19_mini_shinkansen_dual_voltage_main_circuit/19_mini_shinkansen_dual_voltage_main_circuit.md`

判定: `PASS / exam_alignment_complete`

固定公式過去問:
- R5 一次 機械 問3 `(2)`: 1要素
- R5 一次 機械 問4 `(4)(5)`: 2要素
- R5 一次 電力 問6 `(3)`: 1要素
- H25 一次 電力 問2 `(1)(2)(3)`: 3要素
- R5 二次 機械・制御 問2 `(1)(2)`: 2要素
- 一次: `7答案要素`
- 二次: `2答案要素`
- 合計: `5問・9答案要素`

固定SPEC境界:
- 複電圧
- 主変圧器
- 巻数比
- タップ
- 一次電流
- 絶縁
- 主変換装置
- 補助電源
- 電源切替
- 指定計算・グラフ: `電源電圧―一次電流`、`タップ条件―二次電圧`、`同一出力時の電源条件比較`

境界:
- R5一次機械問3は `(2)` の定格電圧・変圧比だけ。
- R5一次機械問4は `(4)(5)` の出力電圧条件・通流率だけ。
- R5一次電力問6は `(3)` の絶縁協調だけ。
- H25一次電力問2は一般的なタップ切換原理用で、ミニ新幹線が負荷時タップ切換装置を採用する根拠にはしない。
- R5二次機械・制御問2は `(1)(2)` の電圧・電流換算だけ。
- 固定問題の個別正答記号・最終数値は保存していない。
- 未確認のミニ新幹線実車電圧、主変圧器巻数・タップ構成、絶縁定格、主変換装置・補助電源・電源切替方式は推測しない。
- SPEC外追加: `0件`

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

## 次工程

Topic 19の解説source本文を作る。固定5問・9答案要素から必要事項を逆算し、SPEC指定3計算・グラフまで固定範囲内で設計する。H25負荷時タップ切換装置は一般原理としてのみ扱い、ミニ新幹線実車への採用を推測しない。未確認実車値・実構成は一次資料確認前に真値化しない。
