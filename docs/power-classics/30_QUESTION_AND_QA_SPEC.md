# Power古典 — question and QA specification

Power TOEIC の候補問題/独立QA契約を再利用する。古典固有なのはtaxonomyと出題内容だけで、runtime engineを分岐させない。

## Canonical candidate fields
`id, subject, skill_group, subcategory, micro_skill, secondary_skills[], confusion_type, difficulty_expected, difficulty_observed, stem, choices[4], proposed_answer_index, explanation, question_type, template_id, generator_version, qa_status, source_or_rule_notes, duplicate_cluster, usage_stats`

## Question types
`knowledge_choice, form_identification, meaning_choice, context_identification, translation_choice, error_detection, matching, reading_order, subject_detection, reasoning, passage_reading, option_matching, cross_passage`

## Rules
- 4択は表示上4つすべて相異、正答は1つだけ。
- primary `micro_skill` は必ず1つ。
- taxonomyに存在しないIDを保存しない。
- 解説は正答と判定規則を明示する。
- 暗記だけでなく、文脈を必要とするskillでは正答が本文だけで一意になるだけの情報をstemへ入れる。
- 生成直後は `pending_validation`。`verified` は独立再解答を通過したものだけ。

## 古文QA
活用、接続、助動詞の意味、助詞機能、敬語の種類と敬意方向、主語・会話者、省略、語義、現代語訳について、別解が成立しないか確認する。現代語の感覚だけで古語法を決めない。

## 漢文QA
返り点、読む順番、送り仮名、再読文字、否定・疑問・反語・使役・受身等の句法、書き下し、現代語訳について、訓読上または意味上の別解が成立しないか確認する。

## Independent QA
`proposed_answer_index` と `explanation` を先に見ない。stem + choices から自力で一意解を決め、その後にkeyと照合する。結果は `verified / needs_revision / rejected`。QA recordに verified IDs と修正理由を残す。

## Duplicate gate
局所的なexact duplicate検査は毎batchで行う。production bank化の前には全bankを対象とするsemantic near-duplicate gateを別途必須とする。`verified` 単独をproduction-approvedと同義にしない。
