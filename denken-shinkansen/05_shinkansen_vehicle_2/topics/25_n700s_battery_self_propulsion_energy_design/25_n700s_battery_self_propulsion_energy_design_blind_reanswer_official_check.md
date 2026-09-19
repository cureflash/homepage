# Topic 25 N700S バッテリー自走のエネルギー設計 — clean blind公式照合

更新日: 2026-09-20

判定: `PASS / CLEAN_BLIND_COMPLETE`

## reconcile

最新main、系列 `STATUS.md` / `HANDOFF.md`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列 `SPEC.md`、Topic 25既存成果物、直近コミット、既存車両二種worker成果をreconcileした。

固定候補は `25_n700s_battery_self_propulsion_energy_design_blind_reanswer_candidates_clean.md` の `CANDIDATES_FIXED / OFFICIAL_NOT_CHECKED` をそのまま使用した。公式照合後の候補編集は行わない。解説source/PDF、練習source/PDF、PowerPointの既存QAは再利用し、重複生成・重複QAは行っていない。

Topic 21 H26二次「機械・制御」問1(4)の `48.1 / 48.0 N·m` 差は既存診断どおり、公式標準解答が `π=3.14` 相当を用いた過去問固有丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 公式正本

- R8 一次公式解答: https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf
- R4 一次公式解答: https://www.shiken.or.jp/chief/upload/20220820_ch_second_a01.pdf
- R2 一次公式解答: https://www.shiken.or.jp/chief/upload/20200912_ch_second_a01.pdf
- R1 一次公式解答: https://www.shiken.or.jp/chief/upload/20190831_ch_second_a01.pdf
- H23 二次標準解答: https://www.shiken.or.jp/chief/upload/20111127_ch_second_a01.pdf

参照日: 2026-09-20

## 1. R8 一次「機械」問5

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | 正極活物質 `(ホ)` | ホ | PASS |
| (2) | `26.8 A·h/mol` `(カ)` | カ | PASS |
| (3) | `2.0 V` `(イ)` | イ | PASS |
| (4) | 自己放電 `(ワ)` | ワ | PASS |
| (5) | 比重 `(チ)` | チ | PASS |

結果: `5 / 5 PASS`。

## 2. R4 一次「機械」問6

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | 化学 `(イ)` | イ | PASS |
| (2) | 二次電池 `(ワ)` | ワ | PASS |
| (3) | 塩 `(ヌ)` | ヌ | PASS |
| (4) | 奪われて酸化 `(リ)` | リ | PASS |
| (5) | `LiC6 + CoO2` `(チ)` | チ | PASS |

結果: `5 / 5 PASS`。

## 3. R2 一次「機械」問4

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | `3.7 V` `(リ)` | リ | PASS |
| (2) | 遷移金属 `(ヌ)` | ヌ | PASS |
| (3) | 還元 `(ホ)` | ホ | PASS |
| (4) | より低い `(カ)` | カ | PASS |
| (5) | `100 g` `(ヨ)` | ヨ | PASS |

結果: `5 / 5 PASS`。

## 4. R1 一次「機械」問4

| 要素 | 固定候補 | 公式解答 | 判定 |
|---|---|---|---|
| (1) | `PbSO4` `(カ)` | カ | PASS |
| (2) | 低くなる `(ヌ)` | ヌ | PASS |
| (3) | `4` `(チ)` | チ | PASS |
| (4) | ファラデー `(ヨ)` | ヨ | PASS |
| (5) | `892.6 g` `(リ)` | リ | PASS |

結果: `5 / 5 PASS`。

## 5. H23 二次「機械・制御」問3

| 答案要素 | 固定候補 | 公式標準解答 | 判定 |
|---|---|---|---|
| (1)-a 充電時主素子 | `S1`, `D2` | `S1`, `D2` | PASS |
| (1)-b 電圧関係 | `E_b1=T_on/(T_on+T_off) E_p1` | 同式 | PASS |
| (2)-a 放電時主素子 | `S2`, `D1` | `S2`, `D1` | PASS |
| (2)-b 電圧関係 | `E_p2=(T_on+T_off)/T_off E_b2` | 同式 | PASS |
| (3)-a Cレート電流 | 1C `+10 A`, 2C `-20 A` | 同値 | PASS |
| (3)-b 端子電圧 | `3.65, 3.85, 3.70, 3.50 V` | 同値 | PASS |
| (3)-c 時間・波形 | `T_c=1 h`, `T_d=0.5 h`、切替段差を含む直線波形 | 同値 | PASS |
| (4) 充電方式 | 定電流充電。内部抵抗損失と端子電圧差から定電圧より効率がよい条件を説明 | 同趣旨 | PASS |

結果: `8 / 8 PASS`。

## 総合判定

- 固定過去問: 第二種一次4問＋二次1問 = `5 / 5 PASS`
- 一次答案要素: `20 / 20 PASS`
- 二次答案要素: `8 / 8 PASS`
- 合計答案要素: `28 / 28 PASS`
- 固定候補の公式照合後編集: `0件`
- 教材外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- Topic 21一般式変更: `0件`
- SPEC外主題追加: `0件`
- 未確認N700S電池値の真値化: `0件`
- 未指定走行抵抗モデル追加: `0件`
- 新たなexact blocker: `0件`

解説source/PDF、練習source/PDF、解説画像PowerPointは既存QAでPASS済みであり、完成後clean blindも `28 / 28 PASS`。したがってTopic 25は `MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列 `SPEC.md` の過去問対応品質ゲートを満たし、`PASS / COMPLETED` とする。

完成数: `25 / 39`。

## 次工程

Topic 26の制作前EXAM_ALIGNMENT。最新mainと既存worker成果をreconcileし、公式第二種一次・二次過去問を先に固定する。仕様不整合または確定不能事項が出た場合はexact blockerを記録して停止する。
