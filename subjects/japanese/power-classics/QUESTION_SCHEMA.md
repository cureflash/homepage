# Power古典 Question Schema

Power古典はPower TOEICの共通バックエンド／Drill Engineを利用し、古典専用エンジンを実装・forkしない。contentは既存Power古典candidate形式を維持する。

## Batch

- `format`: `power-classics-candidate-v1`
- `subject`: `kobun` または `kanbun`
- `skill_group`, `subcategory`, `skill`, `taxonomy_path`, `tags`
- `generator_version`
- `validation_status`: 生成時は `pending_validation`
- `qa_status`: `pending_validation` / `verified` / `needs_revision` / `rejected`
- `item_fields`: compact item配列のフィールド順
- `generated_at`, `batch`, `items`

## Item

`[id, stem, choices, proposed_answer_index, explanation, difficulty, template_id]`

4択では `choices` は4件・同一選択肢なし、`proposed_answer_index` は0〜3。IDはskill内で安定かつ連番とし再利用しない。

## QA契約

QA担当は `proposed_answer_index` と `explanation` を先に見ず、stemとchoicesのみから独立再解答する。その後に生成時正答と照合し、`verified` / `needs_revision` / `rejected` を判定する。25問ごとに安全checkpointを作る。

古文は活用、助動詞接続、古語法、敬語方向、主語、文脈の一意性を確認する。漢文は返り点、訓読、書き下し、句法、送り仮名、解釈の一意性を確認する。4択は選択肢重複、複数正解、index、正解位置偏り、stem完全重複、高類似も検査する。疑義が残る問題はverifiedにしない。
