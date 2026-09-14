# HANDOFF - 電験三種「電気数学」

更新日: 2026-09-14

## 現在地

Topic 01 `単位・指数・有効数字` は `completed`。

Topic 02 `三角比・三角関数` は `completed`。

Topic 03 `複素数` は `completed`。

Topic 04 `極形式・フェーザ` は `completed`。

Topic 05 `ベクトル` は、初回完成後独立再解答 `2 / 6 PASS` で不足した4点を解説source / PDF、練習source / PDF、PowerPointへ必要最小限補強済み。補強後の再独立解答は `6 / 6 PASS`。

最終QAで指摘された `05_vectors.md` の進捗記録不整合は修正済み。教材本文・成果物・固定EXAM_ALIGNMENTは変更していない。次は最終QAの再判定を行う。

完成数: `4 / 12`

current_status: `topic_05_progress_record_synced`

active_topic: `05 ベクトル`

## Topic 05 固定EXAM_ALIGNMENT

対象6問は変更しない。

- R8上 理論 問4: 一直線上のN極・S極が点Aに作る磁界を向き込みで合成
- R7下 理論 問2: 同一直線上の2つのクーロン力を差として合成し未知電荷量を求める
- R7上 理論 問11: ホール素子で電流・磁界・キャリア運動から電荷偏りの向きを判定
- R6下 理論 問4: xyz座標で平行導体A・Bに働く力の向きを判定
- R4下 理論 問4: 正三角形配置で60°をなす等大2力を合成
- R4上 理論 問4: 速度の垂直成分と `sinθ` を使って誘導起電力を求める

制作前独立計算・公式照合: `6 / 6 PASS`
補強後完成教材による再独立解答: `6 / 6 PASS`

再独立解答の選択肢は `(3), (3), (4), (2), (3), (3)` で試験センター公式解答と全件一致。

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
- `topics/05_vectors/05_vectors_final_qa.md`

## 補強内容

初回再解答FAIL 4問について、次だけを追加した。

- 点磁極: `H=|m|/(4πμ0r²)`、N極から外向き・S極へ内向き
- 点電荷: `F=|Q1Q2|/(4πε0r²)`、同符号は反発・異符号は引力
- ホール素子: p形/n形のキャリアと電流方向、`q(v×B)`、ホール電界反転、`|VH|∝I`
- 運動起電力: `e=Blv⊥=Blv sinθ`

固定EXAM_ALIGNMENT、既存3段階例題、初回PASS済み2問は変更していない。仕様外論点・未確認新幹線実値の追加は0件。

## 最終QAの前回結果

PASS:
- 必須成果物の実在
- 固定EXAM_ALIGNMENT 6問
- 制作前独立検証 6 / 6
- 補強後完成教材による再独立解答 6 / 6
- 教材外知識による補完0件
- 固定範囲外追加0件
- 未確認新幹線実値追加0件

前回FAILだった `05_vectors.md` の進捗記録不整合は今回解消済み。

## 次に行うこと

Topic 05の最終QAを再判定する。

教材本文、EXAM_ALIGNMENT、3段階例題、練習問題、PDF、PowerPointは変更しない。前回FAIL理由だった進捗記録不整合の解消を確認し、品質ゲート全件PASSなら `completed` へ進める。
