# Topic 04 最終QA

テーマ: `04 架線と車体は巨大なコンデンサなのか？`

実施日: 2026-09-14

## 判定条件

`MASTER_SPEC.md`、`EXAM_ALIGNMENT_SPEC.md`、本系列 `SPEC.md`、`STATUS.md`、`HANDOFF.md` とGitHub正本の既存成果物を再照合した。

Topic 04の固定範囲は変更しない。

- 静電容量
- 平行板コンデンサ
- 円筒導体の基本
- 合成容量
- 誘電率
- 誘電体
- 分極
- 静電エネルギー

二次試験は確認対象に含めるが、本Topic固定範囲へ直接対応する問題がないため、数合わせで力率改善・配電電圧計算等を追加しない。

## 確認結果

### 1. 必須成果物の存在

GitHub正本で次を確認した。

- `04_catenary_capacitance.md`
- `04_catenary_capacitance_explanation.pdf`
- `04_catenary_capacitance_practice.md`
- `04_catenary_capacitance_practice.pdf`
- `04_catenary_capacitance_images.pptx`
- `04_catenary_capacitance_independent_reanswer.md`
- `04_catenary_capacitance_final_qa.md`

判定: PASS

### 2. 過去問対応品質ゲート

固定済みEXAM_ALIGNMENTは一次「理論」5問・22小問。

- R6 問1 (1)〜(5): `5 / 5 PASS`
- R5 問1 (1)〜(5): `5 / 5 PASS`
- R3 問1 (1)〜(5): `5 / 5 PASS`
- H27 問1 (1)〜(2): `2 / 2 PASS`
- H24 問5 (1)〜(5): `5 / 5 PASS`

完成後独立再解答は `22 / 22 PASS`。教材外の電気理論による補完 `0件`、固定範囲外論点の追加 `0件`。

判定: PASS

### 3. 二次試験の採否

R7〜R5の二次「電力・管理」「機械・制御」を確認済み。本Topicの固定範囲を直接問う問題は採用していない。R5電力・管理の力率改善用コンデンサは無効電力・配電電圧計算が主題で別論点のため非採用とする既存判断を維持する。

`08 理論・二種` は一次理論中心であるため、二次数合わせはしない。

判定: PASS

### 4. 範囲逸脱

電気影像法、導電率・電流密度・コンダクタンス、力率改善をTopic 04の学習内容として追加していない。架線・車体は教育用簡略モデルに限定し、未確認の実車静電容量・電界等を真値扱いしていない。

判定: PASS

### 5. 表示QA・計算QA

既存記録を再確認した。

- 解説PDF: A4縦6ページ、全ページ表示QA PASS
- 練習PDF: A4縦4ページ、全ページ表示QA PASS
- 練習12問: 計算QA `12 / 12 PASS`
- PowerPoint: 16:9・5スライド、全スライド表示QA PASS、overflow検査PASS

判定: PASS

### 6. 成果物相互整合・進捗記録

技術内容、固定EXAM_ALIGNMENT、二次非採用判断、独立再解答結果には矛盾がない。

ただし、GitHub正本に進捗記録の不整合が2件残っている。

1. `04_catenary_capacitance.md` 冒頭 `## 状態`
   - 「最終QAは未着手」と記載されている。
   - 本記録で最終QAを実施したため、現在地と不一致になる。
2. `04_catenary_capacitance_practice.md` 末尾 `## 品質ゲート上の位置付け`
   - 「この段階では完成後独立再解答を実施しない。PowerPoint完成後に…再解答する」と記載されている。
   - 実際にはPowerPoint完成済み、完成後独立再解答 `22 / 22 PASS` 済みであり、現状と不一致。

過去問対応・問題本文・解説計算・PDF/PPTX表示品質そのものの欠陥ではないが、正本間の状態記録が一致していないため `completed` にはしない。

判定: NEEDS_REVISION

### 7. Webカタログ

`MASTER_SPEC.md` に従い、Webカタログ登録は最終品質ゲートPASSと同じcheckpointで行う。本QAは `NEEDS_REVISION` のため、Topic 04を `catalog.json` へ追加しない。

判定: 保留

## 最終判定

`NEEDS_REVISION / IN_PROGRESS`

Topic 04の技術・試験対応品質ゲートはPASSしているが、source 2ファイルの進捗記録が現在地と一致していない。

完成数は `3 / 21` のまま維持する。

次工程は、上記2箇所の状態記録だけを現在地へ同期する。固定範囲、問題本文、解説、正答、PDF、PowerPoint、EXAM_ALIGNMENTは変更しない。同期後に最終QAを再実施し、全件PASS時のみ `completed` としてWebカタログへ登録する。