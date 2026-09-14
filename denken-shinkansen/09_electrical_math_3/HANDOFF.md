# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `単位・指数・有効数字` は `completed`。

Topic 02 `三角比・三角関数` は `completed`。

Topic 03 `複素数` は `completed`。

Topic 04 `極形式・フェーザ` は `completed`。

Topic 05 `ベクトル` は完成後独立再解答で `2 / 6 PASS` となり、FAIL 4問の不足中間知識を補強中。解説source・解説PDFに続き、今回、練習source / PDFへ必要最小限同期した。PowerPointへの同期と再独立解答は未実施。

完成数: `4 / 12`

current_status: `topic_05_revision_practice_synced`

active_topic: `05 ベクトル`

## Topic 05 固定EXAM_ALIGNMENT

対象6問は変更しない。

- R8上 理論 問4: 一直線上のN極・S極が点Aに作る磁界を向き込みで合成
- R7下 理論 問2: 同一直線上の2つのクーロン力を差として合成し未知電荷量を求める
- R7上 理論 問11: ホール素子で電流・磁界・キャリア運動から電荷偏りの向きを判定
- R6下 理論 問4: xyz座標で平行導体A・Bに働く力の向きを判定
- R4下 理論 問4: 正三角形配置で60°をなす等大2力を合成
- R4上 理論 問4: 速度の垂直成分と `sinθ` を使って誘導起電力を求める

制作前独立計算・公式照合は `6 / 6 PASS`。

## 固定範囲

系列 `SPEC.md` の以下だけを扱う。

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

## 既存成果物

- `topics/05_vectors/05_vectors.md`
- `topics/05_vectors/05_vectors_explanation.pdf`
- `topics/05_vectors/05_vectors_practice.md`
- `topics/05_vectors/05_vectors_practice.pdf`
- `topics/05_vectors/05_vectors_images.pptx`
- `topics/05_vectors/05_vectors_exam_reanswer.md`
- `topics/05_vectors/05_vectors_revision_supplement.md`

## 完成後独立再解答

初回判定: `NEEDS_REVISION`

結果: `2 / 6 PASS`

PASS:
- R6下 理論 問4
- R4下 理論 問4

FAIL:
- R8上 理論 問4: 点磁極が作る磁界の大きさの式が不足
- R7下 理論 問2: 点電荷間のクーロン力の大きさの式が不足
- R7上 理論 問11: p形/n形のキャリアと電流方向、ホール電界、ホール電圧と電流の比例関係が不足
- R4上 理論 問4: 運動起電力を `B`・導体長・垂直速度へ結ぶ式が不足

公式解答との照合は `(3), (3), (4), (2), (3), (3)`。

## 補強内容と同期状況

固定した不足4点:

- 点磁極: `H=|m|/(4πμ0r²)`、N極から外向き・S極へ内向き
- 点電荷: `F=|Q1Q2|/(4πε0r²)`、同符号は反発・異符号は引力
- ホール素子: p形は正孔が慣用電流と同方向、n形は電子が反対方向。`q(v×B)` で偏りを判定し、p/nでホール電界の向きが反転。固定条件では `|VH|∝I`
- 運動起電力: `e=Blv⊥=Blv sinθ`

同期済み:
- `topics/05_vectors/05_vectors.md`
- `topics/05_vectors/05_vectors_explanation.pdf`
- `topics/05_vectors/05_vectors_practice.md`
- `topics/05_vectors/05_vectors_practice.pdf`

練習は12問構成を維持し、問3・7・9・10だけを補強4点へ置換した。更新後PDFはA4縦4ページで、200 dpi全ページ表示QAを実施し、クリップ・重なり・欠落は確認されていない。

未同期:
- `topics/05_vectors/05_vectors_images.pptx`

固定EXAM_ALIGNMENT変更0件、既存3段階例題変更0件、仕様外論点追加0件、未確認新幹線実値追加0件。

## 次に行うこと

補強4点をPowerPointへ必要最小限同期する。学習用成果物の同期完了後、保存済み正答を見ず固定6問を完成教材だけで再独立解答する。
