# Topic 27 clean blind公式照合QA

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_OFFICIAL_MATCH_COMPLETE`

## 完全性

- candidate: `27_l0_linear_synchronous_motor_blind_candidates.md`
- lock commit: `fe677eb5c89613a8ed06e1c2343a5cf0525f5d21`
- lock時 blob SHA: `c9606b30811c630d8b1c90d56f4f552b9895abeb`
- 照合開始時 current blob SHA: `c9606b30811c630d8b1c90d56f4f552b9895abeb`
- candidate lock後の修正: `0件`
- 公式正本: 一般財団法人 電気技術者試験センター「第二種電気主任技術者試験の問題と解答」
- 公式解答・保存済み照合結果の参照: candidate lock後のみ
- 保存済み照合結果: `27_l0_linear_synchronous_motor.md`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- L0系未確認実車値の真値化: `0件`
- Topic 28範囲の先取り: `0件`

## 公式照合

| 過去問 | 固定答案要素 | 公式照合 | 判定 |
|---|---|---|---|
| R7 一次「機械」問1 | `ニ / ヲ / ハ / チ / ヨ` | 公式解答と一致 | `PASS 5/5` |
| R6 一次「機械」問1 | `ト / ロ / ハ / ヌ / ヨ` | 公式解答と一致 | `PASS 5/5` |
| H29 一次「機械」問1 | `(1)リ / (2)ヌ / (5)ト` | 公式解答と一致 | `PASS 3/3` |
| H21 一次「機械」問5 | `ヨ / ホ / ロ / ト / カ` | 公式解答と一致 | `PASS 5/5` |
| R6 二次「機械・制御」問1 | `(1)(a)` 三相短絡特性＋試験方法、`(1)(b)` 無負荷飽和曲線＋試験方法、`(1)(c)` 短絡比定義、`(2)(b)` `0.893 p.u.`、`(2)(c)` `0.714 Ω` | 公式標準解答と一致 | `PASS 5/5` |

## 集計

- 固定過去問: `5 / 5 PASS`
- 一次答案要素: `18 / 18 PASS`
- 二次答案要素: `5 / 5 PASS`
- 合計答案要素: `23 / 23 PASS`
- 不一致: `0件`
- candidate lock後の修正: `0件`
- exact blocker: `0件`

## Topic 21境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有の丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 次工程

locked candidateは変更しない。Topic 27の必須成果物・既存QA・本clean blind公式照合をreconcileし、最終QAを作成する。
