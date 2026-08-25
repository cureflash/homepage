# Science Worksheet Factory — baseline

Observed: 2026-08-25.

## Repository context

Repository: `cureflash/homepage`.

The existing mathematics worksheet effort is already defining a scalable structured pipeline under `docs/worksheet-factory/`. Science must build on that work rather than creating an unrelated publication system.

At science-factory setup time, the math documentation defines the target flow as curriculum/topic registry → worksheet specification → seeded generator → independent answer validator → PDF renderer → catalog → generated site listing. The math implementation itself is still in early foundation work, so science should coordinate with the latest `main` and generalize shared components when they become available.

## Science scope

- junior-high and high-school only;
- production order: physics → chemistry → biology → earth science;
- calculations: basic formula-understanding/substitution level, mass-produced with validated variants;
- memorization: repeated retrieval from multiple directions, with mechanically checkable answers;
- no difficult entrance-exam style integrated problems as the main product;
- no elementary science worksheets in this factory.

## Curriculum handling

Middle-school grade placement follows the current MEXT junior-high science curriculum.

High-school science uses formal course names because the national curriculum does not fix every course to one grade. The corresponding advanced course follows its basic course in the production order.

Primary references:
- MEXT junior-high curriculum explanation, science: https://www.mext.go.jp/content/20230522-mxt_kyoikujinzai02-000033060_04.pdf
- MEXT high-school curriculum explanation, science/mathematics-science: https://www.mext.go.jp/content/20230626-mxt_kyoikujinzai02-000033064_06.pdf

## Main engineering risks

1. duplicating the math generator/catalog instead of sharing it;
2. accepting ambiguous free-text answers that cannot be validated reliably;
3. generating numerically different but educationally duplicate worksheets;
4. incorrect grade/course metadata;
5. attempting diagram-heavy worksheets before rendering and answer validation are reliable;
6. concurrent scheduled changes to the same repository.

Before every commit, reconcile latest `main` and keep each batch small enough to validate safely.
