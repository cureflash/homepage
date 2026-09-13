# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は24/38。01〜24がPASS。active topicは25 `L0系④ 誘導集電`。

## 今回進捗
Topic 25の解説本文＋3段階例題を完成した。制作前EXAM_ALIGNMENTで確定した5問・7小問の要求事項を全件本文へマッピングし、系列SPEC固定範囲（電磁誘導、非接触給電、誘導集電、交流、電力変換、効率）だけで構成した。

更新:
- `topics/25_l0_inductive_power_collection/25_l0_inductive_power_collection.md` — 解説本文＋3段階例題を追加
- `STATUS.md`
- `HANDOFF.md`

## Topic 25 品質ゲート対象
1. R7下 機械 問16(a)(b) — 三相ダイオード整流、交流リアクタンス、転流・順電圧降下、導通損失 — 5 / 4 — PASS
2. R7下 機械 問15(a)(b) — 変圧器効率、鉄損・銅損、負荷率 — 5 / 2 — PASS
3. R7上 機械 問9 — 全負荷効率と負荷力率 — 3 — PASS
4. R6下 理論 問3 — ファラデーの法則 — 2 — PASS
5. R4上 理論 問3 — 相互インダクタンス、結合係数、和動接続 — 2 — PASS

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-13

R8上理論問3（磁気エネルギー）、R8上機械問9（変圧器短絡試験・漏れリアクタンス）、R8上機械問10（半導体素子各論）は固定範囲を広げるため対象外。

## Topic 25 解説本文の収録範囲
- ファラデーの法則 `e=-N dΦ/dt` とレンツの法則
- 相互誘導 `e_2=-M di_1/dt`、`M=k√(L1L2)`、和動接続 `L_0=L_1+L_2+2M` と逆算手順
- 地上側交流→時間変化する磁界→車上側コイルの誘導起電力→車上電力という非接触給電の流れ
- `X_L=2πfL`、`mH→H` の換算、R7下機械問16の与式を読む手順
- 三相ダイオード整流の電圧低下、選定問題条件での1素子平均導通損失 `P_D=V_FI_d/3`
- `η=P_out/P_in`、鉄損・銅損、負荷率と `P_c=x^2P_cN`、力率を含む出力計算
- 電磁誘導・整流・効率の解法手順
- 基礎・本試験標準・複合の3段階例題
- プラレールからL0系までの駆動・給電方式比較
- 頻出ミス、選定5問・7小問との教材内対応表、公式まとめ

共振方式、Q値、補償・整合回路、高周波インバータ詳細、未確認実車値は追加していない。R7下機械問16の三相ダイオード整流回路をL0系実機構成とは断定していない。

## L0系一次資料
- JR東海「超電導リニアの原理」: https://linear-chuo-shinkansen.jr-central.co.jp/about/
- JR東海「発見！リニア未来シティ」: https://linear-chuo-shinkansen.jr-central.co.jp/linearfuturecity/
- JR東海「車両について」: https://linear-chuo-shinkansen.jr-central.co.jp/about/design/
- 国土交通省 第19回実用技術評価委員会開催結果: https://www.mlit.go.jp/report/press/tetsudo07_hh_000035.html

一次資料で、電磁誘導を応用した非接触の誘導集電、地上側コイルの磁界から車上側コイルへ電気を生じさせる基本、L0系改良型試験車での全面採用、2011年の実用技術評価を確認済み。実機コイル寸法、実運転周波数、定格電力、電圧・電流、伝送効率の具体値は確定していないため置かない。

## 参考教材
- e-sysnet 電磁誘導: https://e-sysnet.com/electromagnetic_induction/
- e-sysnet 相互インダクタンス: https://e-sysnet.com/mutual_inductance/
- e-sysnet 変圧器: https://e-sysnet.com/transformer/
- 電験王3 R4上理論問3: https://denken-ou.com/rironr4-1-3/
- 電験王3 R5上機械問9: https://denken-ou.com/kikair5-1-9/

## 現在の状態
- `current_status`: `topic_25_explanation_source_complete`
- 完成数: 24/38
- 01〜24: PASS
- Topic 25: EXAM_ALIGNMENT、解説本文＋3段階例題完了、制作中

## 次の正確な開始点
Topic 25の解説PDFを作成し、全ページ表示QAを実施する。sourceの§1〜§13、3段階例題、選定5問・7小問の教材内対応を落とさず反映する。練習PDF・PowerPoint・完成後独立再解答はその後の段階とする。
