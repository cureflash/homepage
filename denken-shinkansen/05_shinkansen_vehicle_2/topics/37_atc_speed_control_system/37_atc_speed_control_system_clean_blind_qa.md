# Topic 37 clean blind QA

更新日: 2026-09-21

判定: `24 / 25 FAIL / FRESH_V2_REQUIRED`

## candidate固定

- candidate: `37_atc_speed_control_system_clean_blind_candidate.md`
- candidate lock commit: `4e03db0fcc000842dd0f776d773df866b52ea855`
- candidate固定後修正: `0件`
- 固定5問・25答案要素の差し替え: `0件`
- Topic 21一般式変更: `0件`

candidate固定前は `37_atc_speed_control_system_clean_blind_intake.md` と公式question-only問題面のみを用いた。R4一次「機械」問7の公式問題PDFは取得timeoutのため、intakeに固定済みのquestion-only fallbackを使用した。公式標準解答、固定EXAM_ALIGNMENTの正答、解説source/PDF、練習source/PDF、answer-bearing QAはcandidate固定後にのみ照合した。

## 25答案要素照合

### R4一次「機械」問7

1. シーケンス制御: `PASS`
2. candidate `リレーシーケンス回路（リレー回路）` / canonical・公式対応 `自己保持回路`: `FAIL`
3. PLC: `PASS`
4. ラダー図: `PASS`
5. フェイルセーフ: `PASS`

一次: `4 / 5 PASS`

失敗要素は、状態記憶を利用する旧来の順序制御回路について、candidateが上位概念のリレーシーケンス回路を答え、設問が要求する具体的回路名「自己保持回路」を特定できなかったもの。

### R7二次「機械・制御」問4

- 偏差伝達関数: `PASS`
- ステップ定常偏差 `0`: `PASS`
- ランプ定常偏差 `3b/4`: `PASS`
- インパルス応答 `(2/3)e^{-t}+(4/3)e^{-4t}`: `PASS`
- 単位ステップ `t=1 s` 出力 `≈0.749`: `PASS`

`5 / 5 PASS`

### R6二次「機械・制御」問4

- 直列結合: `PASS`
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

## 集計

- 一次: `4 / 5 PASS`
- 二次: `20 / 20 PASS`
- 合計: `24 / 25 FAIL`
- 二次問題の件数合わせ採用: `0件`
- candidate固定後修正: `0件`
- 固定EXAM_ALIGNMENT変更: `0件`
- 既存成果物再生成: `0件`
- exact blocker: `0件`

## 教材側診断

既存の解説source / source QAには `自己保持回路` が明示され、R4一次問7の5答案要素を `5 / 5` でカバー済み。二次20要素も教材内根拠から全件導出可能。したがって今回の1要素FAILは教材欠落・EXAM_ALIGNMENT不備ではなく、clean blind独立再解答側の特定ミスと診断する。

既存解説source/PDF、練習source/PDF、PowerPointは変更しない。

## 完成判定

Topic 37は最終clean blind品質ゲートを通過していないため `completed` にしない。完成数は `36 / 39` のまま。

次工程はfresh workerによる `clean_blind_v2_candidate` 固定→独立再解答QA。本runはcandidate固定後にanswer-bearing資料を参照済みのため、v2 candidateは作成しない。