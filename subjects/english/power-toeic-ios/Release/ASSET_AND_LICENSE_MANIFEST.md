# Power TOEIC iOS — asset and license manifest

## Store-facing art

The App Store icon is not yet final. The release icon must be original/cleared artwork and supplied as a 1024×1024 source through the app target asset catalog. Do not use temporary Irasutoya character art as the App Store icon unless licensing and branding suitability are separately cleared.

## Temporary in-app character art

Power TOEIC currently uses semantic asset IDs so temporary artwork can be replaced without changing learning logic. Planned temporary mappings remain below 20 unique Irasutoya works:

- `sergeant.*` -> 法務教官のイラスト（男性） placeholder;
- `trainee.stage_0.*`, `stage_1.*` -> 痩せた男性のイラスト;
- `trainee.stage_2.*` through `stage_4.*` -> 筋肉質な人のイラスト（男性）;
- `trainee.stage_5.*` -> ボディービルダーのイラスト.

Actual files bundled into the eventual Xcode app target must be recorded here before TestFlight with exact filenames, source page URLs, retrieval date and current Irasutoya usage-policy reference. Runtime hotlinking is prohibited.

## Sound effects

Current semantic mappings:

- `audio.correct` -> `otologic_correct.mp3` — OtoLogic Quiz Ding Dong 05-1 (Fast-Short);
- `audio.wrong` -> `otologic_incorrect.mp3` — OtoLogic Quiz Buzzer 05-1 (Mid);
- `audio.inspiration` -> `otologic_inspiration.mp3` — OtoLogic Inspiration 11-1 (Low).

License: Creative Commons Attribution 4.0 International (CC BY 4.0).

Required product credit:

`OtoLogic (CC BY 4.0) / https://otologic.jp/`

The eventual app target must expose this credit in an acknowledgements/credits surface if these files are bundled. Missing audio must remain non-blocking.

## Release gate

Before TestFlight:

- record each actually bundled temporary character file;
- verify unique Irasutoya work count remains below the temporary commercial free threshold specified in `docs/power-toeic/50_ASSET_POLICY.md`;
- verify OtoLogic files and attribution are bundled together;
- supply original/cleared App Store icon art;
- do not package source libraries as standalone redistributable asset collections.
