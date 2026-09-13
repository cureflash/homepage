# HANDOFF - 新幹線車両・電験三種

更新日: 2026-09-13

## 正本・active series
最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active seriesは `01_shinkansen_vehicle_3`。新品質基準の完成数は24/38。01〜24がPASS。次のactive topicは25 `L0系④ 誘導集電`。

## 今回進捗
Topic 24 `L0系③ 超電導磁気浮上` を1段階進め、完成後独立再解答を実施した。選定6過去問を完成教材の式・適用条件・解法手順から再構成し、公式解答との照合で6/6 PASS。Topic 24をcompletedとした。

更新:
- `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev.md`
- `STATUS.md`
- `HANDOFF.md`

## Topic 24 完成後独立再解答
1. R8上 理論 問4 — 点磁極 `H=m/(4πμ0r^2)`、向き・重ね合わせ — 再解答3 / 公式3 — PASS
2. R8上 機械 問2 — `v=πDn/60`、`e=Blv`、2有効導体 — 再解答4 / 公式4 — PASS
3. R7下 理論 問4 — 円弧 `H=Iθ/(4πr)`、直線部0、逆向き合成 — 再解答5 / 公式5 — PASS
4. R7上 理論 問4 — 直線導体 `I/(2πa)` と円形コイル `I/(2a)` — 再解答5 / 公式5 — PASS
5. R6下 理論 問3 — `|e|=N|ΔΦ|/Δt=300 V` — 再解答2 / 公式2 — PASS
6. R6下 理論 問4 — 同方向平行電流は引力、A=`+x`、B=`-x` — 再解答2 / 公式2 — PASS

公式正本: https://www.shiken.or.jp/chief/third/qa/
参照日: 2026-09-13

必要公式の選択、適用条件、途中計算または方向判定を完成教材内だけで再構成できた。公式解答と全件一致したため、過去問対応品質ゲートPASS。

## Topic 24 固定範囲・境界
系列SPECの既定範囲だけを扱った。

- 超電導磁石
- 磁界
- 電磁誘導
- 誘導電流
- 電磁力
- 浮上
- 案内

範囲外として採用しなかったもの:
- R8上 理論 問3 — 自己インダクタンス・磁気エネルギー
- R6下 理論 問12 — 荷電粒子のサイクロイド軌道

未確認のL0系コイル寸法、磁束密度、電流値、結線値も追加していない。

## Topic 24 完成成果物
- source Markdown: `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev.md` — EXAM_ALIGNMENT、解説本文、3段階例題、完成後独立再解答6/6 PASS
- 解説PDF: `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev_explanation.pdf` — A4縦2ページ、全ページQA PASS
- 練習PDF: `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev_practice.pdf` — A4縦4ページ、15問、解答・完全解説付き、全ページQA PASS
- 解説画像PowerPoint: `topics/24_l0_superconducting_maglev/24_l0_superconducting_maglev_images.pptx` — 3スライド、全スライド表示QA・overflow検査PASS

## L0系一次資料
JR東海「超電導リニアの原理」:
https://linear-chuo-shinkansen.jr-central.co.jp/about/

Topic 24では、車上超電導磁石、ニオブチタン合金と約-269℃冷却、浮上・案内コイル、誘導電流による浮上・案内力、浮上高10 cm、左右ずれ時の復元力、浮上用外部給電不要までを確認済み事実として使用した。

## 現在の状態
- `current_status`: `topic_24_completed`
- 完成数: 24/38
- 01〜24: PASS
- Topic 25: 未着手

## 次の正確な開始点
Topic 25 `L0系④ 誘導集電` の制作前EXAM_ALIGNMENTから開始する。系列SPEC固定範囲は、電磁誘導、非接触給電、誘導集電、交流、電力変換、効率。直近年度優先で関連公式過去問5問以上を調査し、各問の要求知識・式・設問型・教材内で必要な説明を確定する。固定範囲外や未確認実車値は追加しない。

## 直前完了テーマ
Topic 24 `L0系③ 超電導磁気浮上` は、制作前EXAM_ALIGNMENT、解説PDF、練習PDF、PowerPoint、完成後独立再解答6/6を含め全品質ゲートPASS済み。
