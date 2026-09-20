# STATUS - 新幹線車両・電験二種

更新日: 2026-09-20

## 状態

- active_series: `05_shinkansen_vehicle_2`
- exam_aligned_completed_topics: `31 / 39`
- current_status: `topic_32_powerpoint_complete`
- last_completed_topic: `31 補助電源変換器`
- active_topic: `32 照明設計`
- next_start: fresh workerで最新mainと仕様・状態をreconcile後、answer-bearing資料を開く前にTopic 32固定5問を教材だけでclean blind独立再解答しcandidateを固定する

Topic 01〜31は `PASS / completed`。完成数 `31 / 39`。Topic 32は制作前EXAM_ALIGNMENT、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、PowerPoint＋render QAまで `PASS`。教材成果物一式は揃ったが、完成後clean blind独立試験が未実施のためTopic 32は未completed。固定公式過去問は一次5問・30答案要素、SPEC固定9項目は `9 / 9 connected`。二次は公式「機械・制御」試験範囲に照明が含まれないため対象外。

## Topic 32 PowerPoint

判定: `PASS / POWERPOINT_COMPLETE`

canonical artifacts:
- `topics/32_lighting_design/32_lighting_design_images.pptx`
- `topics/32_lighting_design/32_lighting_design_images_qa.md`

QA:
- 16:9: `6 slides`
- python-pptx geometry bounds: `6 / 6 PASS`
- LibreOffice PDF変換: `6 / 6 pages PASS`
- PNG render: `6 / 6 PASS`
- 空白render・ページ端・置換文字: `0件`
- 固定5問・30答案要素: `30 / 30 connected`
- 一次: `30 / 30 connected`
- 二次: `対象外（公式「機械・制御」試験範囲に照明なし）`
- SPEC固定9項目: `9 / 9 PASS`
- 固定EXAM_ALIGNMENT変更: `0件`
- 未確認実車値の真値化: `0件`
- Topic 21一般式変更: `0件`
- exact blocker: `0件`

次工程はfresh workerによるclean blind candidate固定。candidate固定前は、固定EXAM_ALIGNMENT、exam alignment QA、公式解答、過去のanswer-bearing compare資料を開かない。

## Topic 32 既完了工程

- EXAM_ALIGNMENT: `PASS` — `topics/32_lighting_design/32_lighting_design.md`
- EXAM_ALIGNMENT QA: `PASS` — `topics/32_lighting_design/32_lighting_design_exam_alignment_qa.md`
- 解説source＋source QA: `PASS`
- 解説PDF＋PDF QA: `PASS`（A4縦7頁、PDFium/Poppler `7 / 7 PASS`）
- 練習source＋source QA: `PASS`（一次10問、正答一意性 `10 / 10`、数値問題 `7 / 7 PASS`）
- 練習PDF＋PDF QA: `PASS`（A4縦7頁、PDFium/Poppler `7 / 7 PASS`）
- PowerPoint＋render QA: `PASS`（16:9、6 slides）

固定境界:
- 色温度・LED寿命はR7固定過去問を解くための最小ブリッジに限定する。
- 光束発散度・輝度は測光量識別とR8/R3固定過去問対応に限定する。
- 多重反射式は固定過去問の簡略球形グローブ条件に限定する。
- 実車照明値を一次資料なしに真値化しない。
- `lm/W` と照明率 `U` を混同しない。
- 光束法の保守率 `M` と光束発散度 `M` は別量として扱う。
- Topic 21の一般式 `P=Tω`、`ω=2πN/60` は変更しない。

## Topic 31

判定: `PASS / COMPLETED`

Topic 31のEXAM_ALIGNMENT、解説source/PDF、練習source/PDF、PowerPoint、clean blind最終照合は各topic配下のcanonical QAを正本とする。完成後独立再解答は一次 `15 / 15`、二次 `12 / 12`、合計 `27 / 27 PASS`。
