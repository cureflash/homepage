# STATUS - 新幹線車両・電験三種

更新日: 2026-08-30

## 状態
- active_series: `01_shinkansen_vehicle_3`
- exam_aligned_completed_topics: 18 / 38
- current_status: `topic_19_exam_alignment_complete`
- last_completed_topic: `18 E7・W7系 北陸新幹線の電源条件`
- active_topic: `19 N700S① SiC`
- next_start: topic 19の解説PDF本文制作から開始する

## 新品質ゲート進捗
- [x] 01〜18 — PASS
- [ ] 19 N700S① SiC — EXAM_ALIGNMENT完了、本文未着手

## 19 EXAM_ALIGNMENT
公式過去問5件を対象として固定した。
1. R6上 機械 問16 — IGBT電圧形インバータ、逆並列ダイオード、誘導性負荷、`τ=L/R`。
2. R5上 機械 問10 — IGBTとパワーMOSFET、SiC、高耐圧・高耐熱、逆方向電流、テイル電流。
3. R5上 機械 問16 — 単相インバータ、誘導性負荷、還流、波形、直流側電流。
4. R4下 機械 問16 — IGBTブリッジのQ/D電流経路、R-L時定数。
5. H29 機械 問10 — ダイオード、サイリスタ、MOSFET、IGBTの定常動作と逆方向電流経路。

要求範囲は、SiC材料の位置付け、MOSFET/IGBT/サイリスタ比較、自己消弧、ボディダイオードとIGBT逆並列ダイオードの区別、`v=Ldi/dt`、`τ=L/R`、電圧形インバータの電流経路、導通損失、スイッチング損失、変換効率まで固定した。

## 参照した電験解説資料
- `https://e-sysnet.com/パワーエレクトロニクスと半導体デバイス/`
- `https://e-sysnet.com/?p=12462`
- `https://yaku-tik.com/denken/r5f-k10/`
- `https://yaku-tik.com/denken/r6f-k16/`
- `https://yaku-tik.com/denken/h29-k10/`
参照日: 2026-08-30。

## 新幹線一次・技術資料
- JR東海ほか著者「N700S 駆動システムの開発」（日本機械学会、2018）: SiC適用変換装置、走行風冷却、6極誘導電動機の組合せで軽量化・小型化を追求しN700Sへ搭載。
- 三菱電機 2015-06-25: JR東海N700系試験車の3.3kV・1500A級all-SiC主変換装置実証。従来システム比の体積約55%減・質量約35%減はN700S量産車の実値ではなく、先行実証値として区別する。

N700Sの個別素子 `R_on`、`V_on`、`E_on/E_off`、実スイッチング周波数、素子温度、変換効率は未確認なので真値化しない。

## 作成・改訂成果物
- `topics/19_n700s_sic/19_n700s_sic.md` — EXAM_ALIGNMENT、教材必須範囲、解法アルゴリズム、実車資料、完成後ゲートを作成。

解説PDF、練習PDF、PowerPointはまだ未作成。

## 独立再解答
未実施。本文・練習・PowerPoint完成後に選定5問を保存済み正答を先に見ず教材だけで再解答する。

## QA判定
19: `NOT_YET_PASS`。完成数18/38のまま。

## Web公開
未公開。PASS後のみcatalogへ追加する。

## 次
19 `N700S① SiC` の解説PDF本文を、試験論点→用語・物理→公式と成立条件→解法アルゴリズム→基礎/標準/複合例題→N700S実例→頻出ミス→過去問→まとめの順で制作する。
