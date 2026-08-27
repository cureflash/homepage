import Foundation
import XCTest
@testable import PowerTOEIC

final class BundleAudioCuePlayerTests: XCTestCase {
    func testSemanticAudioRecordsResolveToExpectedShippingNames() {
        let catalog = AssetCatalog()

        XCTAssertEqual(catalog.audio(AssetCatalog.audioCorrect)?.resourceName, "otologic_correct.mp3")
        XCTAssertEqual(catalog.audio(AssetCatalog.audioWrong)?.resourceName, "otologic_incorrect.mp3")
        XCTAssertEqual(catalog.audio(AssetCatalog.audioInspiration)?.resourceName, "otologic_inspiration.mp3")
    }

    #if canImport(AVFoundation)
    func testVerifiedShippingAudioResolvesFromSwiftPMBundle() throws {
        let player = BundleAudioCuePlayer()
        let expectedSizes: [(SemanticAssetID, Int)] = [
            (AssetCatalog.audioCorrect, 24_471),
            (AssetCatalog.audioWrong, 15_357),
            (AssetCatalog.audioInspiration, 14_859)
        ]

        for (id, expectedSize) in expectedSizes {
            let url = try XCTUnwrap(player.resourceURL(for: id), "Missing bundled resource for \(id.rawValue)")
            let data = try Data(contentsOf: url)
            XCTAssertEqual(data.count, expectedSize, "Unexpected bytes for \(id.rawValue)")
        }

        // Presentation remains fire-and-forget even with real resources.
        player.play(AssetCatalog.audioCorrect)
        player.play(AssetCatalog.audioWrong)
        player.play(AssetCatalog.audioInspiration)
        player.play(SemanticAssetID(rawValue: "audio.unknown"))
    }
    #else
    func testAudioAdapterRemainsNonBlockingWithoutAVFoundation() {
        let player = BundleAudioCuePlayer()
        player.play(AssetCatalog.audioCorrect)
        player.play(AssetCatalog.audioWrong)
        player.play(AssetCatalog.audioInspiration)
        player.play(SemanticAssetID(rawValue: "audio.unknown"))
    }
    #endif
}
