# HANDOFF - 新幹線車両・電験三種

更新日: 2026-08-29

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `01_shinkansen_vehicle_3`。

新品質基準での完了数: **3 / 38**。

## 今回のcheckpoint
`04 0系② シリコン整流器` の**制作前EXAM_ALIGNMENT**を完了した。教材成果物と独立再解答は未完了のため、テーマ判定は `NEEDS_REVISION / IN_PROGRESS` とし、完了数には計上していない。

作成:
- `topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier.md`

## 調査した公式過去問
一般財団法人 電気技術者試験センターの公式過去問題・公式解答を正本とし、次の5問を教材設計対象にした。

1. 令和3年度 機械 問16 — 単相半波ダイオード整流、R-L負荷、`v_R=Ri`、`v_L=Ldi/dt`、波形読解
2. 平成26年度 機械 問10 — 単相半波ダイオード整流、誘導性負荷、環流ダイオード、通流期間
3. 平成25年度 機械 問9 — 単相ダイオードブリッジ、平滑コンデンサ、直流側電圧・交流側電流波形
4. 平成24年度 機械 問10 — 単相全波整流、平均直流電圧、制御遅れ角と出力特性
5. 令和元年度 機械 問10 — 単相サイリスタブリッジ、導通素子、転流、波形

ダイオード整流そのものに加え、同じ回路理解を前提とするサイリスタ問題を近接問題として含めた。詳細な位相制御は07テーマで本格的に扱う。

## EXAM_ALIGNMENTから確定した教材必須範囲
- pn接合と整流作用、順方向/逆方向
- 回路条件からのダイオード導通判定
- 単相半波整流 `Vd=Vm/π`
- 単相全波ブリッジ `Vd=2Vm/π`
- `Vm=√2 Vrms` と平均値/実効値の区別
- R-L負荷 `v=Ri+Ldi/dt` と電流継続
- 環流ダイオードの電流経路
- 平滑コンデンサの充放電とリプル
- 平滑コンデンサ入力での交流側電流非正弦波化
- ブリッジの対角素子導通
- サイリスタのゲート制御への接続

## 参照した電験解説資料
参照日: 2026-08-29

- e-sysnet https://e-sysnet.com/ — パワーエレクトロニクス・整流回路の説明粒度、素子→回路→波形の説明順を確認
- 電験三種まとめました 単相半波整流 https://yaku-tik.com/denken/k-rectifier-1/
- 同 三相整流 https://yaku-tik.com/denken/k-rectifier-3/
- 同 R3機械問16 https://yaku-tik.com/denken/r3-k16/
- 同 H26機械問10 https://yaku-tik.com/denken/h26-k10/
- 同 H25機械問9 https://yaku-tik.com/denken/h25-k09/
- 同 H24機械問10 https://yaku-tik.com/denken/h24-k10/
- 同 R1機械問10 https://yaku-tik.com/denken/r1-k10/

文章・図・例題は複製せず、論点分解と解法の見せ方のみ比較した。

## source Markdownの状態
EXAM_ALIGNMENTの後に、教材本文の骨格まで作成した。現在含む内容:
- 試験で問われる解法フロー
- ダイオード導通条件
- 半波/全波平均値の導出
- R-L負荷とKVL
- 環流ダイオード
- コンデンサ平滑とリプル
- 平均値/実効値
- サイリスタへの接続
- 10段階の解法アルゴリズム
- 0系への接続
- 頻出ミス
- 過去問出題パターン

## QA判定
`04 0系② シリコン整流器`: **NEEDS_REVISION / IN_PROGRESS**。

理由: EXAM_ALIGNMENTとsource本文はできたが、必須成果物である解説PDF、練習PDF、PowerPointが未作成で、練習問題独立再計算・公式過去問独立再解答も未実施。ファイルが存在するだけでPASSにはしない。

## 並行変更のreconcile
前runの03完了後のmainを基準に04を開始した。GitHub Contents APIでmainへ非force更新し、既存の他系列成果物は変更していない。STATUS/HANDOFFは04を未完了のまま明示した。

## 次の正確な開始点
`topics/04_0series_silicon_rectifier/04_0series_silicon_rectifier.md` のEXAM_ALIGNMENTを読み、まず解説PDFを新品質基準で生成する。続いて14問程度の練習PDF（基礎4 / 本試験標準7 / 複合3、半数以上五肢択一）、2スライド程度の自作解説PowerPointを作る。visual QAと全練習問題の独立再計算後、R3機械問16、H26機械問10、H25機械問9、H24機械問10、R1機械問10を保存済み正答を先に見ず教材だけで独立再解答する。5/5を根拠付きで再現できた場合のみPASSとして4/38へ進める。
