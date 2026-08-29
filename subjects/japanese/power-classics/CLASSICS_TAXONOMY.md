# Power古典 Taxonomy 正本

機械可読の正本は `data/taxonomy/classics-v1.json`。本書は運用上の入口であり、micro-skillの `priority` / `targetQuestions` / `questionTypes` / `difficulty` / `prerequisites` はJSONを正とする。

## 古文 11大分類

用言 / 助動詞 / 助詞 / 識別 / 敬語 / 古文単語 / 文構造 / 読解 / 和歌 / 古典常識 / 文学史・ジャンル

## 漢文 19大分類

訓読基礎 / 返り点 / 書き下し文 / 再読文字 / 否定 / 疑問 / 反語 / 使役 / 受身 / 比較 / 選択・限定 / 仮定 / 抑揚・累加 / 願望・詠嘆 / 重要語 / 置き字 / 漢文読解 / 漢詩 / 思想・史伝

## 粒度

1 micro-skill は「1種類の能力だけを反復できる」粒度にする。Phase Aはtaxonomy記載順・priority・prerequisitesを尊重し、未充足skillを上から進める。有限の暗記技能は30〜100問、文脈判定・識別・読解技能は原則100問以上を第一目標とする。個別skillの `targetQuestions` がより大きい場合はその値を優先する。

## 現在の先頭未充足skill

`kobun.aux.tsu_nu.meaning` — 完了・強意の識別。targetQuestions: 300。2026-08-29 19:10 JST時点で0/300、次は `kobun_aux_tsu_nu_meaning_0001`。
