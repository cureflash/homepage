# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-19

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜22は最終QAまで `PASS / completed`。完成数は `22 / 39`。

現在地は `topic_23_exam_alignment_complete`。active topic は Topic 23 `N700S SiC主変換装置`。

## 今回のreconcile

latest main、最新 `STATUS.md` / `HANDOFF.md`、Topic 22全成果物、直近車両二種worker成果をreconcileした。

Topic 22は最終QA `PASS / COMPLETED`。先行 `10 / 11` 診断はTopic 20の許可済み前提参照を外したworkerの結果で、有効clean blind候補は公式照合前に commit `f8aa715525de8747459c27cb02254575eaeca868` で固定、その後の公式照合で `11 / 11 PASS`。重複公式照合ファイルは整理し、`22_e5_readhesion_control_blind_reanswer_official_check.md` を残した。

Topic 21 H26二次「機械・制御」問1(4)の `48.0 / 48.1 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として解決済み。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## Topic 23 制作前EXAM_ALIGNMENT

判定: `PASS / EXAM_ALIGNMENT_COMPLETE`

Topic 17「パワー半導体の損失比較」で既に公式問題・SPEC境界・clean blindまで検証済みの5問・23答案要素を、Topic 23の基礎理論ゲートとしてそのまま再利用する。同じ過去問の再調査・再解答は重複実施しない。

固定過去問:
- R7 一次「機械」問4 `(1)〜(5)` — `5答案要素 / 橋渡し`
- R4 一次「機械」問4 `(1)〜(5)` — `5答案要素 / 直接`
- R2 一次「機械」問2 `(1)〜(5)` — `5答案要素 / 直接`
- H24 一次「機械」問6 `(2),(3)` — `2答案要素 / 直接`
- H24 二次「機械・制御」問1 `(1)〜(6)` — `6答案要素 / 橋渡し`

品質ゲート:
- 一次: `4問・17答案要素`
- 二次: `1問・6答案要素`
- 合計: `5問・23答案要素`
- 二次記述・計算問題: `1問`
- Topic 17既存clean blind: `23 / 23 PASS`
- Topic 23完成後: Topic 23教材だけでclean blindを再実施する
- 固定EXAM_ALIGNMENT変更: `0件`
- SPEC外追加: `0件`
- 未確認N700S実車値の真値化: `0件`
- 新たなexact blocker: `0件`

Topic 23追加責務:
- SiCを導通損失・スイッチング損失へ接続する。
- 損失低減→発熱低減→冷却簡素化→小型軽量化の因果を説明する。
- N700Sの実値はJR東海・メーカー一次資料で確認できる範囲だけを用いる。
- N700Sの消費電力量低減値をSiC単独効果へ読み替えない。

記録:
- `topics/23_n700s_sic_main_converter/23_n700s_sic_main_converter.md`

## 次の安全な工程

固定5問・23答案要素を変えず、Topic 23解説sourceを作成する。Topic 17の一般損失理論は必要最小限だけ前提参照し、SiC・N700S固有の説明へ接続する。
