# STATUS - 電験三種「電気数学」

更新日: 2026-09-13

## 状態
- active_series: `09_electrical_math_3`
- exam_aligned_completed_topics: 3 / 12
- current_status: `topic_04_exam_alignment_complete`
- last_completed_topic: `03 複素数`
- active_topic: `04 極形式・フェーザ`
- next_start: Topic 04の固定済みEXAM_ALIGNMENTを使い、解説本文＋3段階例題を作成する。Topic 04では `a+jb` と `r∠θ` の相互変換、極形式の乗除算、フェーザに限定し、空間ベクトルはTopic 05へ送る

## Topic 04 品質ゲート進捗
- [x] 系列SPEC確認
- [x] MASTER_SPEC / EXAM_ALIGNMENT_SPEC確認
- [x] 関連する公式過去問を5問選定
- [x] 参考教材を複数系統確認（e-sysnet含む）
- [x] source Markdownへ制作前EXAM_ALIGNMENTを記録
- [x] 公式解答との照合を伴う制作前独立検証（5問・6小問）
- [ ] 解説本文＋3段階例題
- [ ] 解説PDF
- [ ] 練習PDF（解答・完全解説付き）
- [ ] 解説画像PowerPoint
- [ ] 公式過去問の教材のみでの完成後独立再解答
- [ ] 最終QA PASS

## 今回進めた内容

Topic 04 `極形式・フェーザ` の制作前EXAM_ALIGNMENTを `topics/04_polar_form_phasor/04_polar_form_phasor.md` に作成した。

選定公式過去問:
- R6上 理論 問9
- R6上 理論 問15
- R5下 機械 問5
- R5上 理論 問9
- R3 理論 問8

制作前独立検証は5問・6小問すべて公式解答と一致した。

固定した数学範囲:
- 直交形式 `a+jb` と極形式 `r∠θ` の相互変換
- 大きさ `r` と偏角 `θ`、象限確認
- 極形式の掛け算・割り算
- `j=1∠90°`, `-j=1∠-90°`
- 正弦波交流のフェーザ表示
- 基準位相、進み・遅れ、位相差
- 最大値と実効値の区別
- `V=ZI`, `Z=V/I` の極形式計算
- フェーザ図の読み方
- 同一角周波数というフェーザ法の成立条件

空間ベクトルはTopic 05へ送る。RLC共振・三相結線・力率改善・複素電力等の回路理論を新規追加せず、同期機・高調波は選定過去問で必要なフェーザ数学の適用先としてのみ扱う。新幹線の未確認実設備値も追加していない。

## 判定

Topic 04を `topic_04_exam_alignment_complete` とする。完成数は `3 / 12` のまま。次工程は解説本文＋3段階例題。
