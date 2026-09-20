# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜29は最終QAまで `PASS / completed`。完成数 `29 / 39`。

現在地は `topic_29_complete_topic_30_exam_alignment_required`。次はTopic 30 `L0系④ 誘導集電・非接触電力伝送` の制作前EXAM_ALIGNMENT。

## Topic 29 完了記録

- final QA: `PASS / COMPLETED`
- clean blind v2 candidate lock: `18b7ea1d8796a4802e63c78088bb1fae87e70601`
- compare QA: `PASS / 24_OF_24`
- candidate固定後修正: `0件`
- 一次 `20 / 20 PASS`
- 二次 `4 / 4 PASS`
- 合計 `24 / 24 PASS`
- SPEC必須8項目 `8 / 8 PASS`
- 指定3可視化 `3 / 3 PASS`
- exact blocker `0件`

canonical artifacts:
- 解説PDF `35ba843b81fd8fc08f76bd5de8aa9edee540d78f`
- 練習PDF `bebec9f9a6ed60178ca567e54060b37958ea2a27`
- PowerPoint `85394e303e8ff9bff19193a76b09d1db17406ec9`

H23二次問1(1)のcandidate `75.6 N・m` と公式 `75.7 N・m` は、一般式・途中量が一致し、公式表示から `π_eff≈3.14003` と逆算できるため `π=3.14` 相当の過去問固有丸め差として扱った。candidateは変更せず `PASS_WITH_ROUNDING_NOTE`。一般式は変更しない。

## Topic 30 固定範囲

系列SPEC:
- 主題: 非接触給電を相互インダクタンスと結合回路として解析する
- 相互インダクタンス
- 結合係数
- 誘導起電力
- 等価回路
- 交流電力
- 力率
- 変換効率
- 可視化: 結合係数―伝送電力 / 負荷条件―効率 / 周波数特性

## 次の安全な工程

1. 最新main、`STATUS.md` / `HANDOFF.md`、直近の車両二種worker成果をreconcileする。
2. Topic 30について公式過去問を広く調査し、二種一次・二次を含む固定候補を選ぶ。
3. 問題ごとに必要知識・式・設問型・答案要素を逆算する。
4. 固定前に候補問題を独立再計算し、固定後に公式標準解答と照合する。
5. `EXAM_ALIGNMENT_COMPLETE` になるまで教材制作へ進まない。
6. L0系の未確認実車値は真値化しない。仕様不整合・確定不能事項は推測せずexact blockerとして記録する。

## Topic 21 H26二次 問1(4)

`48.1 N・m / 48.0 N・m` 差は既診断どおり、公式標準解答が `π=3.14` 相当の数値処理を用いた過去問固有丸め差として維持する。一般式 `P=Tω`、`ω=2πN/60` は変更しない。
