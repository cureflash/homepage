# Topic 12 完成後blind独立再解答

更新日: 2026-09-17

対象: Topic 12 固定EXAM_ALIGNMENT 6問・8答案要素

## 実施条件

完成教材だけを使用し、固定過去問の公式解答・保存済み選択肢番号を先に見ずに全8答案要素を再導出した。全答案を確定した後で電気技術者試験センターの公式解答と照合した。

使用教材:
- `12_information_processing.md`
- `12_information_processing_explanation.pdf`

固定範囲: 2進数 / 16進数 / bit / byte / AND / OR / NOT / NAND / NOR / XOR / 論理式 / 真理値表 / A/D変換 / D/A変換 / センサ / 情報伝送

## 再導出

| 固定過去問 | 完成教材だけでの再導出 | blind解答 | 公式解答 | 判定 |
|---|---|---:|---:|---|
| R8上 機械 問14 | 位取り記数法と16進1桁=2進4bitで各記述を比較。`3D_16=0011 1101_2=111101_2` であり、`111011_2` とする記述だけ誤り | (5) | (5) | PASS |
| R8上 機械 問18(a) | `XY¬Z+XYZ+¬XYZ+¬X¬YZ = XY+¬XZ` と相補・分配で簡単化 | (5) | (5) | PASS |
| R8上 機械 問18(b) | `(X+Y+Z)(X+¬Y+Z)(¬X+Y+Z)` を整理し `Z+XY=(X+Z)(Y+Z)` | (4) | (4) | PASS |
| R7上 機械 問14 | 回路を `X=A·C+B·¬C` と読取り、`C=0` で `X=B`、`C=1` で `X=A` として波形を区間評価 | (3) | (3) | PASS |
| R5下 機械 問14 | 真理値表で出力1となる条件を照合し、`¬A¬B+¬B¬C+¬C¬A` と一致 | (5) | (5) | PASS |
| R1 機械 問14 | `S=101010_2=42`、`D=1100_2=12`、`B=(S-D)/2=15=1111_2` | (2) | (2) | PASS |
| H28 機械 問18(a) | `S1=(A+B)¬(AB)`、`T1=AB` とし4入力を真理値表で評価 | (4) | (4) | PASS |
| H28 機械 問18(b) | 2段接続を `S2=(A xor B) xor C`、`T2=AB+C(A xor B)` として選択肢の入力を順に評価 | (3) | (3) | PASS |

## 公式解答照合

- R8上: 問14 `(5)`、問18(a) `(5)`、問18(b) `(4)`
- R7上: 問14 `(3)`
- R5下: 問14 `(5)`
- R1: 問14 `(2)`
- H28: 問18(a) `(4)`、問18(b) `(3)`

結果: `8 / 8 PASS`

公式資料:
- https://www.shiken.or.jp/chief/third/qa/
- https://www.shiken.or.jp/chief/upload/20260830_ch_third_a01.pdf
- https://www.shiken.or.jp/chief/upload/20250831_ch_third_a01.pdf
- https://www.shiken.or.jp/chief/upload/20240324_ch_third_a01.pdf
- https://www.shiken.or.jp/chief/upload/20190901_ch_third_a01.pdf
- https://www.shiken.or.jp/chief/upload/20160904_ch_third_a01.pdf

照合日: 2026-09-17

## 品質ゲート判定

- 完成教材だけで公式・関係式を選択: `8 / 8 PASS`
- 途中式・真理値表・回路評価を再構成: `8 / 8 PASS`
- 公式解答一致: `8 / 8 PASS`
- 公式解答・保存済み選択肢番号の事前参照: `0件`
- 教材外・固定範囲外知識による補完: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 固定範囲外追加: `0件`
- 車種固有通信仕様の推測: `0件`

判定: `PASS`

既存の固定EXAM_ALIGNMENT、教材本文、練習問題、PDF、PowerPointは変更しない。次工程はTopic 12の最終QAとする。
