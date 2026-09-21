# Topic 37 clean blind v2 QA

更新日: 2026-09-21

判定: `25 / 25 PASS / COMPLETED`

## candidate固定

- candidate: `37_atc_speed_control_system_clean_blind_v2_candidate.md`
- candidate lock commit: `6fe8f6262431c25870e7b44560f79bed8e7022f5`
- candidate固定後修正: `0件`
- 固定5問・25答案要素の差し替え: `0件`
- Topic 21一般式変更: `0件`

candidate固定前は、最新mainの必須startup文書、`37_atc_speed_control_system_clean_blind_intake.md`、intakeが固定した公式「問題」PDFのみを用いた。公式標準解答、固定EXAM_ALIGNMENT内の正答、既存解説・練習教材、answer-bearing QAはcandidate commit後にのみ照合した。

## 25答案要素照合

### R4一次「機械」問7

1. シーケンス制御: `PASS`
2. 自己保持回路: `PASS`
3. プログラマブルロジックコントローラ: `PASS`
4. ラダー図: `PASS`
5. フェールセーフ: `PASS`

一次: `5 / 5 PASS`

v1で唯一失敗した(2)は、v2では設問が要求する具体的回路名 `自己保持回路` を独立に特定できた。candidate固定後の修正ではない。

### R7二次「機械・制御」問4

- 偏差伝達関数: `PASS`
- ステップ定常偏差 `0`: `PASS`
- ランプ定常偏差 `3b/4`: `PASS`
- インパルス応答 `(2/3)e^{-t}+(4/3)e^{-4t}`: `PASS`
- 単位ステップ `t=1 s` 出力 `≈0.749`: `PASS`

`5 / 5 PASS`

### R6二次「機械・制御」問4

- 直列結合伝達関数: `PASS`
- 単位ステップ定常値 `1.25`: `PASS`
- 並列結合インパルス応答: `PASS`
- `2e^{-t}` 入力応答: `PASS`
- 高周波位相 `-90°`: `PASS`

`5 / 5 PASS`

### R4二次「機械・制御」問4

- 特性方程式: `PASS`
- 安定条件 `0<K<16.4`: `PASS`
- 偏差伝達関数: `PASS`
- ランプ定常偏差 `0.4`: `PASS`
- 正弦波定常偏差振幅 `≈0.691`: `PASS`

`5 / 5 PASS`

### R3二次「機械・制御」問4

- 開ループ伝達関数: `PASS`
- 閉ループ伝達関数: `PASS`
- `T=0` の振動条件 `K>0.5`: `PASS`
- `T=0, K=1` の単位インパルス応答: `PASS`
- `T=2` の安定条件 `0<K<3`: `PASS`

`5 / 5 PASS`

## 教材接続QA

既存の制作前EXAM_ALIGNMENT、解説source / source QA、解説PDF / PDF QA、練習source / source QA、練習PDF / PDF QA、PowerPoint / render・content QAをcandidate固定後にreconcileした。

- 固定5問: `5 / 5`
- 一次答案要素: `5 / 5`
- 二次答案要素: `20 / 20`
- 合計答案要素: `25 / 25`
- SPEC固定8項目: `8 / 8`
- 系列SPEC固定計算・グラフ: `2 / 2`
- 二次問題の件数合わせ採用: `0件`
- 教材外知識による補完: `0件`
- 既存成果物再生成: `0件`
- 未確認実車ATC内部実装・数値の真値化: `0件`
- Topic 38先取り: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

v1の1要素FAILは教材欠落ではなく独立再解答側の特定ミスだった。v2では同じ固定対象をfresh条件で再解答し、公式標準解答と `25 / 25` 一致したため、教材修正は不要。

## 完成判定

Topic 37「ATC③ 速度制御系」は過去問対応品質ゲートを通過し `PASS / completed` とする。

次工程はTopic 38「COMTRAC 列車追跡・進路制御・高信頼化」の制作前EXAM_ALIGNMENT。公式過去問から一次・二次の実対応を先に確定し、件数合わせで二次を採用しない。未確認のCOMTRAC内部実装・数値を推測しない。
