import Foundation
import XCTest
@testable import PowerTOEIC

final class SubmissionReadinessTests: XCTestCase {
    private var packageRoot: URL {
        URL(fileURLWithPath: #filePath)
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
    }

    func testMetadataMatchesCurrentAppStoreTextLimits() throws {
        let metadata = try dictionary(at: packageRoot.appendingPathComponent("Release/AppStoreMetadata.json"))
        let displayName = try XCTUnwrap(metadata["display_name"] as? String)
        let subtitle = try XCTUnwrap(metadata["subtitle_ja"] as? String)
        let constraints = try XCTUnwrap(metadata["validated_constraints"] as? [String: Any])

        XCTAssertLessThanOrEqual(displayName.count, try XCTUnwrap(constraints["app_name_max_characters"] as? Int))
        XCTAssertLessThanOrEqual(subtitle.count, try XCTUnwrap(constraints["subtitle_max_characters"] as? Int))
        XCTAssertEqual(constraints["ios_privacy_policy_url_required"] as? Bool, true)
    }

    func testCreditsSurfaceKeepsExactOtoLogicCredit() throws {
        let source = try String(
            contentsOf: packageRoot.appendingPathComponent("Sources/PowerTOEIC/Views/Home/CreditsView.swift"),
            encoding: .utf8
        )
        XCTAssertTrue(source.contains("OtoLogic (CC BY 4.0) / https://otologic.jp/"))

        let home = try String(
            contentsOf: packageRoot.appendingPathComponent("Sources/PowerTOEIC/Views/Home/HomeView.swift"),
            encoding: .utf8
        )
        XCTAssertTrue(home.contains("CreditsView()"))
        XCTAssertTrue(home.contains("home.credits"))
    }

    func testSubmissionReadinessReflectsActualUnbundledAssets() throws {
        let readiness = try dictionary(at: packageRoot.appendingPathComponent("Release/SubmissionReadiness.json"))
        XCTAssertEqual(readiness["submission_ready"] as? Bool, false)

        let requirements = try XCTUnwrap(readiness["repository_requirements"] as? [[String: Any]])
        let byID = Dictionary(uniqueKeysWithValues: requirements.compactMap { item -> (String, String)? in
            guard let id = item["id"] as? String, let status = item["status"] as? String else { return nil }
            return (id, status)
        })
        XCTAssertEqual(byID["credits_surface"], "complete")
        XCTAssertEqual(byID["temporary_character_assets"], "blocked")
        XCTAssertEqual(byID["otologic_audio_assets"], "blocked")
        XCTAssertEqual(byID["final_app_icon"], "blocked")

        let manifest = try dictionary(at: packageRoot.appendingPathComponent("Release/AssetManifest.json"))
        let character = try XCTUnwrap(manifest["character_art"] as? [String: Any])
        let audio = try XCTUnwrap(manifest["audio"] as? [String: Any])
        let characterAssets = try XCTUnwrap(character["assets"] as? [[String: Any]])
        let audioAssets = try XCTUnwrap(audio["assets"] as? [[String: Any]])
        XCTAssertTrue(characterAssets.allSatisfy { ($0["bundle_status"] as? String) == "not_yet_bundled" })
        XCTAssertTrue(audioAssets.allSatisfy { ($0["bundle_status"] as? String) == "not_yet_bundled" })
    }

    func testSubmissionReadyCanOnlyBeTrueWhenRepositoryRequirementsAreComplete() throws {
        let readiness = try dictionary(at: packageRoot.appendingPathComponent("Release/SubmissionReadiness.json"))
        let requirements = try XCTUnwrap(readiness["repository_requirements"] as? [[String: Any]])
        let hasRepositoryBlocker = requirements.contains { ($0["status"] as? String) != "complete" }

        if readiness["submission_ready"] as? Bool == true {
            XCTAssertFalse(hasRepositoryBlocker)
        } else {
            XCTAssertTrue(hasRepositoryBlocker)
        }
    }

    private func dictionary(at url: URL) throws -> [String: Any] {
        let object = try JSONSerialization.jsonObject(with: Data(contentsOf: url))
        return try XCTUnwrap(object as? [String: Any])
    }
}
