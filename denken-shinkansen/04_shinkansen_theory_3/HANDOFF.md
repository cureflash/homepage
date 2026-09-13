# HANDOFF - 新幹線・電験三種「理論」

更新日: 2026-09-14

## 現在地

Topic 01 `新幹線1編成はどれだけ電気を食う？`、Topic 02 `なぜ新幹線は25,000Vなのか`、Topic 03 `架線はただの銅線ではない` は最終QAまでPASSし、`completed`。

- 完成数: `3 / 14`
- active topic: `04 25,000Vでなぜ車体へ電気が飛ばない？`
- current status: `topic_04_final_qa_needs_revision`

## 今回進捗

Topic 04の最終QAを実施し、GitHub正本へ記録した。

追加・更新:
- `topics/04_electric_field_capacitance/04_electric_field_capacitance_final_qa.md`
- `STATUS.md`
- `HANDOFF.md`

最終QAでは、必須成果物、EXAM_ALIGNMENT、独立再解答6/6、解説PDF・練習PDF・PowerPointの既存表示QA、SPEC境界はすべてPASSした。

ただし `04_electric_field_capacitance.md` 冒頭の進捗メタデータが旧状態のまま残っているため、判定は `NEEDS_REVISION` とした。

残存不整合:
- `status: EXPLANATION_SOURCE_COMPLETE`
- `完了判定: 未完了`
- 「解説PDF・練習PDF・解説画像PowerPoint・完成後独立再解答・最終QAは未実施」

実際には解説PDF、練習source/PDF、PowerPoint、完成後独立再解答まで完成済みで、独立再解答は6/6 PASS。教材本文・数式・EXAM_ALIGNMENT・固定範囲の修正は不要。

## Topic 04 固定範囲

- 電荷
- クーロンの法則
- 電界・電気力線
- 電位・電位差・電気的な仕事
- 静電容量・コンデンサ
- 誘電体・誘電率
- 電界エネルギー
- 直列・並列コンデンサ

使用関係式:

```text
F = |Q1Q2| / (4πεr²)
E = F / q
V = Q / (4πεr)
C = Q / V
C = εS / d
Cparallel = C1 + C2 + ...
1/Cseries = 1/C1 + 1/C2 + ...
U = 1/2 CV² = 1/2 QV = Q²/(2C)
```

## ゲート対象公式過去問

1. 令和8年度上期 理論 問1 → 独立解答 `(2)` / 公式 `(2)` / PASS
2. 令和8年度上期 理論 問2 → 独立解答 `(4)` / 公式 `(4)` / PASS
3. 令和8年度上期 理論 問6 → 独立解答 `(4)` / 公式 `(4)` / PASS
4. 令和7年度下期 理論 問1 → 独立解答 `(4)` / 公式 `(4)` / PASS
5. 令和7年度下期 理論 問2 → 独立解答 `(3)` / 公式 `(3)` / PASS
6. 令和7年度上期 理論 問1 → 独立解答 `(2)` / 公式 `(2)` / PASS

一致: `6 / 6 PASS`

練習問題での対応:
- R8上 問1: Q5, Q9, Q10
- R8上 問2: Q2, Q12
- R8上 問6: Q7, Q11, Q14
- R7下 問1: Q6
- R7下 問2: Q1, Q13
- R7上 問1: Q3, Q11, Q14

## 境界確認

追加しないもの:
- 電束密度・ガウスの法則
- 絶縁破壊電界の数値
- 必要離隔距離・沿面距離
- アーク現象・絶縁協調
- RC過渡現象
- 容量性リアクタンス
- RLC・交流位相
- 未確認の新幹線実車静電容量、電界強度、碍子寸法、絶縁耐力等

令和7年度上期 理論 問2は電束密度を含むため、Topic 04の完成ゲート対象から外したままとする。

## 次に行うこと

`04_electric_field_capacitance.md` 冒頭の進捗記録だけを現在地へ同期する。教材本文、EXAM_ALIGNMENT、数式、過去問選定、SPEC境界は変更しない。その後、最終QAを再実施する。

## 固定ルール

- 新幹線紹介ではなく、本試験問題を解けることを合否基準にする
- 各TopicはSPEC境界を守り、後続Topicの知識を完成ゲートへ混在させない
- 完成後独立再解答と最終QAを通過するまで `completed` としない