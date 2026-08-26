# Power TOEIC — temporary asset policy

This file defines the APP/UI track's temporary visual/audio assets. These assets are replaceable presentation dependencies and must never leak into quiz, mastery, workout, review, or persistence logic.

## Character illustrations — temporary source

Use **いらすとや** illustrations for the first Web UI implementation.

Current official terms allow commercial use within the published usage rules, including software, with up to 20 unique illustrations per commercial work at no charge; 21 or more requires paid handling. Therefore the temporary Power TOEIC build must stay **below 20 unique Irasutoya illustrations** unless the user explicitly authorizes a paid license or replacement assets.

Do not redistribute the illustrations as a standalone asset pack. They are used only as part of the Power TOEIC UI.

### Initial semantic mapping

Use semantic IDs in code. Do not hard-code source titles/URLs throughout UI modules.

- `sergeant.neutral` — temporary instructor/teacher-style Irasutoya illustration.
- `sergeant.correct` — may initially alias `sergeant.neutral`.
- `sergeant.wrong` — may initially alias `sergeant.neutral`.
- `sergeant.complete` — may initially alias `sergeant.neutral`.
- `trainee.stage_0.neutral` — skinny male illustration.
- `trainee.stage_1.neutral` — may temporarily reuse stage 0 or a normal male illustration.
- `trainee.stage_2.neutral` — intermediate/athletic placeholder.
- `trainee.stage_3.neutral` — muscular male illustration.
- `trainee.stage_4.neutral` — muscular/bodybuilder illustration.
- `trainee.stage_5.neutral` — bodybuilder/final exaggerated form.

Correct/wrong/complete trainee reaction IDs may initially alias the neutral image for that stage. This keeps the number of unique Irasutoya works low while preserving a stable replacement contract.

Useful official Irasutoya source candidates already identified:

- 痩せた男性のイラスト
- 華奢な男性のイラスト
- 筋肉質な人のイラスト（男性）
- ボディービルダーのイラスト
- 法務教官のイラスト（男性） as a temporary instructor/sergeant proxy

Before public release, actual downloaded source files used by the app must be recorded in an asset manifest with source page/title and current usage-rule reference. Do not hotlink Irasutoya images at runtime.

## Sound effects — Google Drive source

Use the existing Google Drive audio library rather than generating or sourcing new sounds for this track.

### Initial selected set

Drive folder: `se/otologic/`

- `otologic_correct.mp3` — correct answer
- `otologic_incorrect.mp3` — wrong answer
- `otologic_inspiration.mp3` — optional milestone/discovery cue

The Drive source record states these are OtoLogic sounds under **CC BY 4.0**. Commercial use, modification, and redistribution are permitted subject to attribution. Required publication credit is recorded as:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

Keep that attribution in the app/site credits when these files are bundled.

The Drive `README_SE.txt` also records a separate programmatically synthesized WAV set for generic UI cues (`click.wav`, `confirm.wav`, `success.wav`, `error.wav`, etc.). APP/UI work may use those when the concrete files are available to the build, but the initial correct/wrong mapping above is sufficient.

## Asset adapter contract

Both JavaScript Web and later SwiftUI implementations must use semantic asset IDs, not source-specific filenames inside domain/UI state machines.

Conceptual mapping:

```text
semantic event/state
  -> AssetCatalog
  -> platform path/resource
```

Examples:

```text
answer.correct -> audio.correct
answer.wrong   -> audio.wrong
milestone      -> audio.inspiration

sergeant.neutral -> character asset path
trainee.stage_3.neutral -> character asset path
```

### Web

Target module:

`subjects/english/power-toeic/js/ui/asset-catalog.js`

or equivalent presentation-only location.

### Swift

Target equivalent:

`AssetCatalog.swift`

using the same semantic IDs/enums where practical.

## Failure behavior

- missing image: show text/layout fallback; quiz remains fully playable;
- missing/blocked audio: continue silently;
- audio playback exceptions must not affect correctness or session progression;
- character image changes must not mutate mastery/progression values;
- source replacement must be possible by editing the asset catalog/manifest without touching domain logic.

## Replacement policy

Irasutoya is explicitly temporary. The final product may replace all character art later with original assets while preserving the same semantic IDs and UI contracts.

Google Drive SE may remain if licensing/credit requirements are satisfied, or may be replaced through the same audio asset mapping.
