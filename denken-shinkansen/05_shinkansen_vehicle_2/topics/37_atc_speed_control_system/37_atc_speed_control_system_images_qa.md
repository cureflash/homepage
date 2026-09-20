# Topic 37 PowerPoint QA — ATC③ 速度制御系

更新日: 2026-09-21

判定: `PASS / POWERPOINT_COMPLETE`

## reconcile

最新main `a36f4bfdf2b1366c891072561f0acf78cd507e2f`、`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、系列`SPEC.md`、`STATUS.md` / `HANDOFF.md`、Topic 37固定EXAM_ALIGNMENT、解説source/PDF、練習source/PDFと各QAをreconcileした。

直近の車両二種worker成果 `b27f2fdc... Add Topic 37 practice PDF` / `a36f4bfd... QA Topic 37 practice PDF` を既存成果として採用し、練習PDFを重複生成していない。本runで未完了だった解説画像PowerPointのみを作成した。

## canonical artifact

- path: `37_atc_speed_control_system_images.pptx`
- file size: `53973 bytes`
- SHA-256: `bab088b6ea5aa2ebb6833090c2fb5f4d7ce25c3af0fafa0caa9100392136f670`
- 16:9 / `6 slides`
- python-pptx open / geometry bounds: `6 / 6 PASS`
- PPTX text/content assertions: `PASS`
- source notes: `6 / 6 slides`
- LibreOffice PDF conversion: `6 / 6 pages PASS`
- Poppler `pdftotext -layout`: `PASS`
- extracted text chars: `7389`
- replacement character U+FFFD: `0件`
- Poppler PNG render: `6 / 6 PASS`
- visual inspection: `6 / 6 PASS`

## slide構成

1. ATC一般原理を負帰還系として整理。目標速度・速度検出・偏差・制御器・ブレーキ系・列車速度を対応付け、実車内部実装ではない境界を明示。
2. 伝達関数・直列/並列/負帰還の簡約と、教材用仮定モデル `Gp=1/(2s+1)`, `Gc=4` のステップ応答グラフ。系列SPEC計算・グラフ①。
3. 代表入力、最終値・定常偏差、周波数応答。R7二次問4 / R6二次問4の主要式・結果を接続。
4. 特性方程式・ラウス表。R4二次問4 / R3二次問4の安定範囲・応答を接続。
5. 教材用制動指令―速度応答グラフとR4一次問7のシーケンス制御・自己保持・PLC・ラダー図・フェイルセーフ。系列SPEC計算・グラフ②。
6. 固定5問・25答案要素、SPEC固定8項目、鉄道一次資料境界、Topic 21固有丸め差注記。

## 固定過去問接続

- R4一次「機械」問7: `5 / 5 connected` → slide 5
- R7二次「機械・制御」問4: `5 / 5 connected` → slide 3
- R6二次「機械・制御」問4: `5 / 5 connected` → slide 3
- R4二次「機械・制御」問4: `5 / 5 connected` → slide 4
- R3二次「機械・制御」問4: `5 / 5 connected` → slide 4
- 一次: `5 / 5 connected`
- 二次: `20 / 20 connected`
- 合計: `25 / 25 connected`

## SPEC gate

- 速度検出: `PASS` — slides 1 / 5 / 6
- 目標速度: `PASS` — slides 1 / 6
- 伝達関数: `PASS` — slides 1 / 2 / 3 / 4 / 6
- ブロック線図: `PASS` — slides 1 / 2 / 6
- 応答: `PASS` — slides 2 / 3 / 4 / 5 / 6
- 安定性: `PASS` — slides 2 / 4 / 6
- ブレーキ制御: `PASS` — slides 1 / 5 / 6
- フェイルセーフ: `PASS` — slides 1 / 5 / 6
- SPEC固定8項目: `8 / 8 PASS`

## 系列SPEC 計算・グラフ

- 簡略速度制御系のステップ応答: `PASS` — slide 2
  - `Gp(s)=1/(2s+1)`, `Gc(s)=4`, `T(s)=4/(2s+5)`
  - `y(t)=0.8(1-e^{-2.5t})`
  - 代表値 `0, 0.315, 0.571, 0.734, 0.795` を再現。
  - 教材用仮定モデルであり実車ATC応答ではないと明示。
- 制動指令―速度応答: `PASS` — slide 5
  - `A(s)/Ub(s)=a_max/(τ_b s+1)`
  - `ΔV(s)/Ub(s)=-a_max/[s(τ_b s+1)]`
  - 仮定値 `v0=80 m/s`, `a_max=0.8 m/s^2`, `τ_b=1.5 s` を明示。
  - 実車減速度・遅れ時間・制御則ではないと明示。
- 系列SPEC固定計算・グラフ: `2 / 2 PASS`

## 境界確認

- 固定EXAM_ALIGNMENT変更: `0件`
- 二次問題の件数合わせ採用: `0件`
- 教材用仮定値を実車値として使用: `0件`
- 実速度検出方式・制御周期・制御器構造/ゲイン・実機伝達関数・ブレーキ則・減速度・遅れ時間・フェイルセーフ実装の真値化: `0件`
- ATS-Dxを新幹線ATC実装として扱う記述: `0件`
- Topic 38先取り: `0件`
- exact blocker: `0件`

## Topic 21 過去問固有注記

H26二次「機械・制御」問1(4)の `48.1 N·m / 48.0 N·m` 差は、公式標準解答が `π=3.14` 相当の数値処理を用いた丸め差として扱う。一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## next safe step

Topic 37 のfresh clean blind candidate固定。candidate作成workerはanswer-bearing資料（固定EXAM_ALIGNMENTの正答、解説source/PDF、練習source/PDF、各QA、公式標準解答）を先に開かずに独立再解答する。本runはanswer-bearing資料を参照済みのためclean blind candidateは作成しない。
