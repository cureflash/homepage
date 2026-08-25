# Worksheet Factory — baseline

Observed: 2026-08-25, latest `main` at factory setup time.

## Site

Repository: `cureflash/homepage`

The root `index.html` is the public `ひかり教材室` page. It currently contains worksheet cards directly in HTML.

Current visible worksheet examples include:

- junior-high positive/negative-number 100-square arithmetic variants;
- algebraic-expression 100-square variants;
- older/sample English/math materials.

The repository also contains unrelated tools/pages. The worksheet factory must not treat the entire repository as disposable site-generator output.

## Materials

`materials/` already contains multiple PDF worksheets, including positive/negative-number and algebraic-expression 100-square sheets.

Current pattern is primarily static PDF files linked from manually written `article.material-card` blocks in `index.html`.

This does not scale cleanly to elementary-through-high-school coverage, so the migration target is structured catalog + generator + generated listing while preserving existing public links.

## Initial structural problems to solve

1. worksheet metadata is duplicated in HTML;
2. publication requires manual card editing;
3. no single machine-readable curriculum/topic catalog controls coverage;
4. no repository-wide deterministic worksheet generator/validator is yet the authoritative path for new worksheets;
5. large-scale publication needs duplicate detection and answer validation before registration;
6. navigation must be redesigned before hundreds/thousands of worksheet entries are added.

Do not edit this baseline later merely to match the new architecture. Current code must always be re-read from latest `main`.
