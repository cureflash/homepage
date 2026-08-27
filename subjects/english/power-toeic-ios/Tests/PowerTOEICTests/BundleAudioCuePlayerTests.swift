import XCTest
@testable import PowerTOEIC

final class BundleAudioCuePlayerTests: XCTestCase {
    func testSemanticAudioRecordsResolveToExpectedShippingNames() {
        let catalog = AssetCatalog()

        XCTAssertEqual(catalog.audio(AssetCatalog.audioCorrect)?.resourceName, "otologic_correct.mp3")
        XCTAssertEqual(catalog.audio(AssetCatalog.audioWrong)?.resourceName, "otologic_incorrect.mp3")
        XCTAssertEqual(catalog.audio(AssetCatalog.audioInspiration)?.resourceName, "otologic_inspiration.mp3")
    }

    func testMissingShippingAudioRemainsNonBlockingUntilExactFilesAreBundled() {
        let player = BundleAudioCuePlayer()

        XCTAssertNil(player.resourceURL(for: AssetCatalog.audioCorrect))
        XCTAssertNil(player.resourceURL(for: AssetCatalog.audioWrong))
        XCTAssertNil(player.resourceURL(for: AssetCatalog.audioInspiration))

        // The presentation layer must never throw or own quiz progression.
        player.play(AssetCatalog.audioCorrect)
        player.play(AssetCatalog.audioWrong)
        player.play(AssetCatalog.audioInspiration)
        player.play(SemanticAssetID(rawValue: "audio.unknown"))
    }
}
