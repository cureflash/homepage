# Topic 35 clean blind 公式照合QA

更新日: 2026-09-21

判定: `PASS / 25_OF_25`

## candidate lock

- candidate: `35_atc_track_circuit_analysis_clean_blind_candidate.md`
- candidate blob SHA: `132183604321049b5072c68476b93c06dd69d50a`
- lock commit: `2bcf5961818074ad647004af19ce8d74b3021d07`
- candidate固定後修正: `0件`
- candidate固定後にのみ固定EXAM_ALIGNMENT本文、既存解説source、電気技術者試験センター公式標準解答を照合した。

## 一次25答案要素

### R8一次「理論」問3

candidate / 公式:
- `(1) ヨ`
- `(2) ニ`
- `(3) リ`
- `(4) ロ`
- `(5) ホ`

判定: `5 / 5 PASS`

### R7一次「理論」問3

candidate / 公式:
- `(1) ヨ`
- `(2) ト`
- `(3) ハ`
- `(4) ヌ`
- `(5) リ`

判定: `5 / 5 PASS`

### R7一次「理論」問4

candidate / 公式:
- `(1) ル`
- `(2) チ`
- `(3) ヌ`
- `(4) ヲ`
- `(5) ヨ`

判定: `5 / 5 PASS`

### R6一次「理論」問6

candidate / 公式:
- `(1) ヘ`
- `(2) ハ`
- `(3) ワ`
- `(4) チ`
- `(5) ヲ`

判定: `5 / 5 PASS`

### R5一次「理論」問4

candidate / 公式:
- `(1) ト`
- `(2) ヌ`
- `(3) ロ`
- `(4) イ`
- `(5) ホ`

判定: `5 / 5 PASS`

一次集計: `25 / 25 PASS`。

## 二次適用判定

- 固定EXAM_ALIGNMENTの二次問題: `0問`
- R8二次: 2026-09-21時点で未実施
- R7〜R5の確認範囲で本Topicへ直接対応する二次問題: `0件`
- 二次問題の件数合わせ採用: `0件`

このため二次答案要素は `0` のままとし、主題外の問題を追加しない。

## 教材coverage再監査

candidate固定後に既存解説sourceと照合した。

- R8問3: 網目電流法、共有枝の `-Zc`、テブナン等価、相反性、平衡条件 → §5〜§7、§13、§16
- R7問3: `R+jX`、`jωL`、`1/(jωC)`、フェーザ、位相、最大条件 → §3、§9、§13、§16
- R7問4: インピーダンスブリッジ、平衡条件、未知インピーダンス → §3、§11、§13、§16
- R6問6: 浮遊容量・漏れ経路、交流ブリッジ、平衡誤差 → §10、§11、§13、§16
- R5問4: テブナン等価、複素インピーダンス、負荷電流、有効電力 → §3〜§5、§9、§13、§16

固定5問のcandidate根拠は既存教材内の説明・式・解法へ接続でき、教材に存在しない知識による補完は `0件`。

## 公式資料

- R8一次「理論」解答: `https://www.shiken.or.jp/chief/upload/20260830_ch_second_a01.pdf`
- R7一次「理論」解答: `https://www.shiken.or.jp/chief/upload/20250831_ch_second_a01.pdf`
- R6一次「理論」解答: `https://www.shiken.or.jp/chief/upload/20240818_ch_second_a01.pdf`
- R5一次「理論」解答: `https://www.shiken.or.jp/chief/upload/20230819_ch_second_a01.pdf`

## 過去問対応品質ゲート

- 固定公式過去問: `5 / 5 PASS`
- 一次答案要素: `25 / 25 PASS`
- 二次答案要素: `0`（直接対応問題未確認、件数合わせなし）
- 合計答案要素: `25 / 25 PASS`
- candidate固定後修正: `0件`
- 教材欠落による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存解説・練習・PowerPoint再生成: `0件`
- SPEC固定7項目: `7 / 7 connected`
- 未確認実車値の真値化: `0件`
- Topic 36・37先取り: `0件`
- exact blocker: `0件`

## Topic 21 固定境界

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## 最終判定

Topic 35「ATC① 軌道回路の回路解析」は、EXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind独立再解答まで全工程を通過したため `PASS / COMPLETED` とする。

次工程: Topic 36「ATC② 信号伝送と周波数」の制作前EXAM_ALIGNMENT。
