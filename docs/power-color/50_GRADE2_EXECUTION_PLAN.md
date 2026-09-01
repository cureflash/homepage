# Power Color — Grade 2 execution plan

Checked: 2026-09-01

## Authority and scope

Grade 2 is now allowed to proceed in parallel while Grade 3 remains blocked on source acquisition. This is an explicit project-priority override; it does not mark Grade 3 complete and does not relax any Grade 3 source/display gate.

Primary scope authority:
- Color Certification Association current Grade 2 level page and official Grade 2 sample questions.
- The Association states that examination questions are based on the official text and that Grade 2 includes Grade 3 content.
- Current official Grade 2 material explicitly covers advanced color schemes, lighting, visual/media design, landscape color, fashion/interior/exterior applications, and related color coordination.

## Source contract

1. Prefer current first-party Color Certification Association / JCRI / Japan Color Enterprise material.
2. A fact may enter Grade 2 authoring only when the answer can be re-derived from explicit source text/rules without sampling display pixels or inferring unlisted diagram geometry.
3. Monitor-facing PCCS/color-card questions retain the existing display-value restrictions. Do not substitute browser RGB/HEX for authoritative color values.
4. Grade 2 may reuse Grade 3 canonical structural facts only where those facts are already source-confirmed.
5. Use the existing shared Power TOEIC question-bank/workout/session engine. Do not create a Grade 2-specific engine.
6. Generate pending-first, independently recheck every answer, run schema/fingerprint/coverage gates, and promote verified records record-identically.

## Initial Grade 2 work order

- [x] Confirm current official Grade 2 scope and official sample-question route.
- [x] Confirm that Grade 2 includes Grade 3 content and that official-text content is the examination authority.
- [ ] Build a Grade 2 concept/source inventory from current official material before bulk question generation.
- [ ] First authoring slice: non-visual facts explicitly recoverable from current official Grade 2 sample questions, avoiding any answer that depends on reading monitor colors.
- [ ] Independently QA the first slice and add a Grade 2 authoring gate.
- [ ] Promote only after shared-engine regression and record-level equality gates pass.
- [ ] Continue through official-text topic order where the underlying rule is auditable; leave visual/color-card-only slices blocked until authoritative display data exists.

## Current first-party facts suitable for the initial non-visual inventory

The current official Grade 2 sample explicitly tests named PCCS/color-harmony techniques including tone-in-tone, split complementary, pentad, tonal, dyad, tetrad, hexad and tricolor; it also includes subtractive mixing / CMY. The first generated questions must use only facts whose correct answer is explicitly recoverable from the published sample text/answer, not from the sample images.

## Exact next start point

Create the Grade 2 concept/source inventory and isolate a first deterministic text-only micro-skill from the official Grade 2 sample. Do not generate image-dependent tone-in-tone/split-complementary/pentad/tonal identification questions until the required visual authority is available.