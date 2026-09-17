# Topic 15 完成後独立再解答

実施日: 2026-09-17

## 条件

`MASTER_SPEC.md` / `EXAM_ALIGNMENT_SPEC.md` / 系列 `SPEC.md`、Topic 15完成教材、独立再解答前ゲートを先に確認した。固定5過去問の公式解答・標準解答を開く前に、完成教材だけを使って8答案要素を再解答し、答案確定後に電気技術者試験センターの公式解答・標準解答と照合した。

固定範囲は、ポンプ・ファン・コンプレッサ、負荷特性、所要動力、効率、インバータ駆動、可変速運転、相似則 `Q∝N`, `H∝N²`, `P∝N³`。Topic 05〜09の詳細再制作、Topic 16以降、未確認新幹線補機実値は補完に使用していない。

## 再解答結果

| 固定過去問 | ゲート対象 | 再解答要旨 | 照合 |
|---|---|---|---|
| R06 一次 機械 問2 | (5) | `V_1/f_1=一定` → `チ` | `1 / 1 PASS` |
| H25 一次 機械 問3 | (1),(2) | `P=T_Mω` より `(1)回転角速度=ヨ`。短時間の慣性加速分はインバータの `(2)過負荷耐量=イ` で扱う | `2 / 2 PASS` |
| H23 一次 機械 問1 | (1),(2) | `V/f`一定より `(1)一次周波数=ホ`、回転磁界を維持する `(2)励磁電流=ヌ` | `2 / 2 PASS` |
| R04 二次 機械・制御 問3 | (6) | `50→25 Hz` なので信号振幅 `0.9→0.45`、周期 `20→40 ms` | `2 / 2 PASS` |
| R07 二次 機械・制御 問2 | (1) 定格トルク | `T=P/ω=22000/(2π×1158/60)=181.42≈181 N·m` | `1 / 1 PASS` |

合計: `8 / 8 PASS`

## 公式照合先

- R06 一次 機械 問2: `https://www.shiken.or.jp/chief/upload/20240818_ch_second_q03.pdf` / `https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf`
- H25 一次 機械 問3: `https://www.shiken.or.jp/chief/upload/20130831_ch_second_q03.pdf` / `https://www.shiken.or.jp/chief/upload/20130831_ch_second_a01.pdf`
- H23 一次 機械 問1: `https://www.shiken.or.jp/chief/upload/20110903_ch_second_q03.pdf` / `https://www.shiken.or.jp/chief/upload/20110903_ch_second_a01.pdf`
- R04 二次 機械・制御 問3: `https://www.shiken.or.jp/chief/upload/20221113_ch_second_q02.pdf` / `https://www.shiken.or.jp/chief/upload/20221113_ch_second_a01.pdf`
- R07 二次 機械・制御 問2: `https://www.shiken.or.jp/chief/upload/20251116_ch_second_q02.pdf` / `https://www.shiken.or.jp/chief/upload/20251116_ch_second_a01_tk.pdf`

## 品質ゲート判定

- 完成教材だけで必要知識・式を選択: PASS
- 一次3問＋二次2問・8答案要素の公式照合: `8 / 8 PASS`
- `P=Tω` と `T_M=Jα+T_L` の用途分離: PASS
- `V/f`一定の電圧比と `T_e=1/f` の周期逆比例: PASS
- 連続負荷と短時間加速負荷の容量判断: PASS
- 教材外知識補完: `0件`
- コンプレッサへの三乗則無条件適用: `0件`
- Topic 05〜09詳細再制作: `0件`
- Topic 16以降依存: `0件`
- 未確認新幹線補機実値依存: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 教材本文・練習問題・PDF/PPTXの内容変更: `0件`

判定: `PASS / independent_reanswer_complete`

次工程: Topic 15 最終QA。
