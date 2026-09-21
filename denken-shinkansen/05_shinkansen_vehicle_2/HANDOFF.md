# HANDOFF - 新幹線車両・電験二種

更新日: 2026-09-21

## 正本・現在地

最上位正本は `../MASTER_SPEC.md` と `../EXAM_ALIGNMENT_SPEC.md`。active series は `05_shinkansen_vehicle_2`。

Topic 01〜36は最終QAまで `PASS / completed`。完成数 `36 / 39`。

現在地は `topic_37_clean_blind_v2_ready`。last completed topicは `36 ATC② 信号伝送と周波数`、active topicは `37 ATC③ 速度制御系`。

Topic 37は制作前EXAM_ALIGNMENT＋QA、解説source＋source QA、解説PDF＋PDF QA、練習source＋source QA、練習PDF＋PDF QA、解説画像PowerPoint＋render/content QAまで完了。固定5問・25答案要素は一次5、二次20で、既存教材との接続は `25 / 25 PASS`。SPEC固定8項目 `8 / 8 PASS`、系列SPEC固定計算・グラフ `2 / 2 PASS`。

clean blind v1は `24 / 25 FAIL`。FAILは1答案要素のみで、教材欠落ではなく独立再解答側の特定ミスと診断済み。具体的な誤答・canonical正答はanswer-bearingな `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_qa.md` に隔離し、本HANDOFFには記載しない。

## 次工程

fresh workerで `clean_blind_v2_candidate` を先に固定し、その後に公式標準解答・既存教材との照合QAを行う。

candidate固定前に開いてよいもの:
- `../MASTER_SPEC.md`
- `../EXAM_ALIGNMENT_SPEC.md`
- `SPEC.md`
- `STATUS.md`
- 本`HANDOFF.md`
- `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake.md`
- 上記intakeが指す公式「問題」PDF

candidate固定前に開かないもの:
- `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_candidate.md`
- `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_qa.md`
- 公式標準解答
- 固定EXAM_ALIGNMENT内の正答情報
- 解説source/PDF
- 練習source/PDF
- 各answer-bearing QA
- v1結果を具体的な答案内容まで示すcommit diff

固定対象は変更しない。
- R4一次「機械」問7: 5答案要素
- R7二次「機械・制御」問4: 5答案要素
- R6二次「機械・制御」問4: 5答案要素
- R4二次「機械・制御」問4: 5答案要素
- R3二次「機械・制御」問4: 5答案要素

合計: 一次5＋二次20＝25答案要素。

## 境界条件

- 未確認の実車ATC速度検出方式、制御周期、制御器ゲイン、伝達関数、ブレーキ則、減速度、遅れ時間、フェイルセーフ内部実装を真値化しない。
- 鉄道総研ATS-Dxは速度照査の補助資料に限定し、新幹線ATC実装として扱わない。
- Topic 38を先取りしない。
- Topic 21 H26二次「機械・制御」問1(4)の既存丸め差診断と一般式は変更しない。
- 固定EXAM_ALIGNMENTを件数合わせ目的で変更しない。

## clean blind v2 準備状況

- question-only intake: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake.md`
- intake QA: `topics/37_atc_speed_control_system/37_atc_speed_control_system_clean_blind_intake_qa.md`
- R4一次「機械」問7 question-only fallback: intake内に正答情報なしで収録済み
- STATUS/HANDOFFのstartup領域: answer-bearing具体答案を除去済み
- v2 candidate: 未作成
- v2 QA: 未実施
- exact blocker: `0件`

本runはsanitize前のanswer-bearing情報を確認済みのため、freshness条件を守ってv2 candidateは作成していない。次のfresh runは検索せず、上記candidate固定前許可資料だけから開始する。
