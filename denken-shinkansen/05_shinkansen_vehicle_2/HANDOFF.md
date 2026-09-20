# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-20

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜31は最終QAまで `PASS / completed`。完成数 `31 / 39`。

現在地は `topic_32_powerpoint_complete`。Topic 32 `照明設計` は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、PowerPoint＋render QAまで完了。教材成果物一式は揃ったが、完成後clean blind独立試験が未実施なので未completed。固定公式過去問は一次5問・30答案要素、SPEC固定9項目は `9 / 9 connected`。二次は公式「機械・制御」試験範囲に照明が含まれないため対象外。

## Topic 32 PowerPoint完了記録

判定: `PASS / POWERPOINT_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_images.pptx`
- `topics/32_lighting_design/32_lighting_design_images_qa.md`

QA:
- 16:9 `6 slides`
- python-pptx open / geometry bounds `6 / 6 PASS`
- LibreOffice PDF変換 `6 / 6 pages PASS`
- PNG render `6 / 6 PASS`
- 空白render・ページ端・置換文字 `0件`
- 固定5問・30答案要素 `30 / 30 connected`
- 一次 `30 / 30 connected`
- 二次 `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目 `9 / 9 PASS`
- 固定EXAM_ALIGNMENT変更 `0件`
- 未確認実車値の真値化 `0件`
- Topic 21一般式変更 `0件`
- exact blocker `0件`

固定境界:
- 色温度・LED寿命はR7固定過去問を解くための最小ブリッジに限定する。
- 光束発散度・輝度は測光量識別とR8/R3固定過去問対応に限定する。
- 多重反射式は簡略球形グローブ条件に限定する。
- 実車照明の方式・器具・灯数・定格・照度・消費電力・効率は一次資料なしに真値化しない。
- `lm/W` と照明率 `U` を混同しない。
- 光束法の保守率 `M` と光束発散度 `M` は別量として扱う。
- Topic 21 H26二次「機械・制御」問1(4)の丸め差を理由に一般式 `P=Tω`、`ω=2πN/60` を変更しない。

## 次工程 — clean blind

次runはfresh workerで開始する。最新main、上位仕様、系列SPEC、`STATUS.md` / `HANDOFF.md` をreconcileした後、candidate固定前はanswer-bearing資料を開かない。

candidate固定前に開いてよいもの:
- Topic 32の解説PDF / 練習PDF / PowerPointなど教材成果物
- 公式「問題」PDF

candidate固定前に開かないもの:
- `32_lighting_design.md` の独立検証結果・正答情報部分
- `32_lighting_design_exam_alignment_qa.md`
- 電気技術者試験センター公式「解答」PDF
- 過去のanswer-bearing compare資料

固定5問を教材だけで独立再解答し、`32_lighting_design_clean_blind_candidate.md` を作成してcommitし、candidate blob SHAとlock commitを確定する。固定後に初めて公式解答等と照合する。本runはanswer-bearing資料を既に確認済みのためcandidate作成へ進まない。

## Topic 32 既完了canonical

- EXAM_ALIGNMENT: `topics/32_lighting_design/32_lighting_design.md`
- EXAM_ALIGNMENT QA: `topics/32_lighting_design/32_lighting_design_exam_alignment_qa.md`
- 解説source: `topics/32_lighting_design/32_lighting_design_explanation_source.md`
- 解説source QA: `topics/32_lighting_design/32_lighting_design_explanation_source_qa.md`
- 解説PDF: `topics/32_lighting_design/32_lighting_design_explanation.pdf`
- 解説PDF QA: `topics/32_lighting_design/32_lighting_design_explanation_pdf_qa.md`
- 練習source: `topics/32_lighting_design/32_lighting_design_practice_source.md`
- 練習source QA: `topics/32_lighting_design/32_lighting_design_practice_source_qa.md`
- 練習PDF: `topics/32_lighting_design/32_lighting_design_practice.pdf`
- 練習PDF QA: `topics/32_lighting_design/32_lighting_design_practice_pdf_qa.md`
- PowerPoint: `topics/32_lighting_design/32_lighting_design_images.pptx`
- PowerPoint QA: `topics/32_lighting_design/32_lighting_design_images_qa.md`

## Topic 31

判定: `PASS / COMPLETED`。一次 `15 / 15`、二次 `12 / 12`、合計 `27 / 27 PASS`。詳細は `topics/31_auxiliary_power_converter/` 配下のcanonical QAを正本とする。
