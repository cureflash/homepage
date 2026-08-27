import Foundation
import XCTest
@testable import PowerTOEIC

final class ReleaseMetadataTests: XCTestCase {
    private var packageRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
    }

    func testAppStoreMetadataKeepsAccountSpecificValuesExplicit() throws {
        let object = try jsonObject(at: packageRoot.appendingPathComponent("Release/AppStoreMetadata.json"))
        let metadata = try XCTUnwrap(object as? [String: Any])

        XCTAssertEqual(metadata["display_name"] as? String, "Power TOEIC")
        XCTAssertEqual(metadata["minimum_ios"] as? String, "17.0")
        XCTAssertEqual(metadata["bundle_identifier"] as? String, "RELEASE_TIME_INPUT")
        XCTAssertEqual(metadata["apple_team_id"] as? String, "RELEASE_TIME_INPUT")
        XCTAssertEqual(metadata["privacy_policy_url"] as? String, "RELEASE_TIME_INPUT")
    }

    func testTemporaryAssetManifestStaysBelowIrasutoyaLimitAndKeepsOtoLogicCredit() throws {
        let object = try jsonObject(at: packageRoot.appendingPathComponent("Release/AssetManifest.json"))
        let root = try XCTUnwrap(object as? [String: Any])
        let character = try XCTUnwrap(root["character_art"] as? [String: Any])
        let audio = try XCTUnwrap(root["audio"] as? [String: Any])

        let planned = try XCTUnwrap(character["planned_unique_assets"] as? Int)
        let limit = try XCTUnwrap(character["commercial_unique_asset_limit_without_paid_handling"] as? Int)
        XCTAssertLessThan(planned, limit)
        XCTAssertEqual(audio["required_credit"] as? String, "OtoLogic (CC BY 4.0) / https://otologic.jp/")
    }

    func testPrivacyManifestDeclaresOnlyCurrentUserDefaultsRequiredReason() throws {
        let canonicalURL = packageRoot.appendingPathComponent("Release/PrivacyInfo.xcprivacy")
        let appTargetURL = packageRoot.appendingPathComponent("AppShell/PowerTOEICApp/PrivacyInfo.xcprivacy")

        let canonicalData = try Data(contentsOf: canonicalURL)
        let appTargetData = try Data(contentsOf: appTargetURL)
        XCTAssertEqual(appTargetData, canonicalData, "App target privacy manifest must stay byte-for-byte synchronized with the canonical release template")

        let plist = try PropertyListSerialization.propertyList(from: canonicalData, options: [], format: nil)
        let root = try XCTUnwrap(plist as? [String: Any])

        XCTAssertEqual(root["NSPrivacyTracking"] as? Bool, false)
        XCTAssertEqual((root["NSPrivacyCollectedDataTypes"] as? [Any])?.count, 0)

        let accessed = try XCTUnwrap(root["NSPrivacyAccessedAPITypes"] as? [[String: Any]])
        XCTAssertEqual(accessed.count, 1)
        XCTAssertEqual(accessed[0]["NSPrivacyAccessedAPIType"] as? String, "NSPrivacyAccessedAPICategoryUserDefaults")
        XCTAssertEqual(accessed[0]["NSPrivacyAccessedAPITypeReasons"] as? [String], ["CA92.1"])
    }

    func testAppShellKeepsAccountNeutralBuildPlaceholders() throws {
        let config = try String(
            contentsOf: packageRoot.appendingPathComponent("AppShell/Config/PowerTOEIC.xcconfig"),
            encoding: .utf8
        )
        XCTAssertTrue(config.contains("POWER_TOEIC_BUNDLE_ID = invalid.placeholder.PowerTOEIC"))
        XCTAssertTrue(config.contains("IPHONEOS_DEPLOYMENT_TARGET = 17.0"))
        XCTAssertFalse(config.contains("DEVELOPMENT_TEAM ="))
    }

    private func jsonObject(at url: URL) throws -> Any {
        try JSONSerialization.jsonObject(with: Data(contentsOf: url))
    }
}
