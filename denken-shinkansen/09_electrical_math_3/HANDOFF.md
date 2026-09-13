# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `単位・指数・有効数字` は `completed`。

Topic 02 `三角比・三角関数` は `completed`。

Topic 03 `複素数` は `completed`。

Topic 04 `極形式・フェーザ` は `completed`。

Topic 05 `ベクトル` は完成後独立再解答まで実施し、`2 / 6 PASS` のため `NEEDS_REVISION`。

完成数: `4 / 12`

current_status: `topic_05_exam_reanswer_needs_revision`

active_topic: `05 ベクトル`

## Topic 05 source

`topics/05_vectors/05_vectors.md`

制作前EXAM_ALIGNMENTで固定した公式過去問6問:
- R8上 理論 問4: 一直線上のN極・S極が点Aに作る磁界を向き込みで合成する
- R7下 理論 問2: 同一直線上の2つのクーロン力を差として合成し未知電荷量を求める
- R7上 理論 問11: ホール素子で電流・磁界・キャリア運動から電荷偏りの向きを判定する
- R6下 理論 問4: xyz座標で平行導体A・Bに働く力の向きを判定する
- R4下 理論 問4: 正三角形配置で60°をなす等大2力を合成する
- R4上 理論 問4: 速度の垂直成分と `sinθ` を使って誘導起電力を求める

制作前独立計算・公式照合は `6 / 6 PASS`。

## Topic 05 固定範囲

系列 `SPEC.md` にある以下だけを扱う。

- ベクトルとスカラー
- 成分表示
- 和・差
- 大きさ
- 単位ベクトル
- 内積の基本
- 外積の基本
- 電界・磁界・力への基本適用
- フェーザと空間ベクトルの違い

ベクトル解析（grad / div / curl）、行列・固有値、テンソル、高度な場の理論、Topic 04で扱っていない交流回路論点は追加しない。

## 完成済み成果物

- `topics/05_vectors/05_vectors.md`
- `topics/05_vectors/05_vectors_explanation.pdf`
- `topics/05_vectors/05_vectors_practice.md`
- `topics/05_vectors/05_vectors_practice.pdf`
- `topics/05_vectors/05_vectors_images.pptx`
- `topics/05_vectors/05_vectors_exam_reanswer.md`

解説PDFはA4縦3ページ、練習PDFは全12問・全問五肢択一、PowerPointは16:9・4スライド。既存の表示QA・文字抽出QA・overflow検査はPASS済み。

## 完成後独立再解答

`topics/05_vectors/05_vectors_exam_reanswer.md`

判定: `NEEDS_REVISION`

結果: `2 / 6 PASS`

PASS:
- R6下 理論 問4: 教材の座標軸固定と「同方向電流の平行導体は互いに引き合う」で (2) まで到達
- R4下 理論 問4: 問題文に与えられた2導体間力の式と、教材の60°等大2ベクトル合成で `1.70×10^-4 N/m`、(3) まで到達

FAIL:
- R8上 理論 問4: 磁界の向きと同方向加算はできるが、点磁極が作る磁界の大きさを求める式が学習用教材にない
- R7下 理論 問2: 反対向きクーロン力の差は判断できるが、点電荷間の力の大きさを求める式が学習用教材にない
- R7上 理論 問11: `q(v×B)` と負電荷反転はあるが、p形/n形のキャリア移動方向と電流方向、ホール電界、ホール電圧と電流の比例関係が学習用教材に不足
- R4上 理論 問4: `v⊥=v sinθ` は求められるが、運動起電力を `B`・導体長・垂直速度へ結ぶ式が学習用教材にない

公式解答との照合結果は順に `(3), (3), (4), (2), (3), (3)`。

固定EXAM_ALIGNMENTは変更しない。仕様外論点・未確認実車値も追加しない。

## 次に行うこと

Topic 05 `ベクトル` の学習用教材を、独立再解答で露呈した不足だけ必要最小限補強する。

対象はR8上問4、R7下問2、R7上問11、R4上問4を最後まで解くための中間知識。固定EXAM_ALIGNMENTと系列SPECの範囲は変えない。補強後に成果物を同期し、再独立解答を行う。
