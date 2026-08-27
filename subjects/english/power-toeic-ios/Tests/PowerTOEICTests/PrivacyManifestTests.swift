import Foundation
import XCTest
@testable import PowerTOEIC

final class PrivacyManifestTests: XCTestCase {
    func testPrivacyManifestDeclaresAppOnlyUserDefaultsReason() throws {
        let testFile = URL(fileURLWithPath: #filePath)
        let packageRoot = testFile
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
        let url = packageRoot
            .appendingPathComponent("Sources/PowerTOEIC/Resources/PrivacyInfo.xcprivacy")

        let data = try Data(contentsOf: url)
        let plist = try XCTUnwrap(
            PropertyListSerialization.propertyList(from: data, format: nil) as? [String: Any]
        )

        XCTAssertEqual(plist["NSPrivacyTracking"] as? Bool, false)
        XCTAssertTrue((plist["NSPrivacyCollectedDataTypes"] as? [Any])?.isEmpty == true)

        let apiTypes = try XCTUnwrap(plist["NSPrivacyAccessedAPITypes"] as? [[String: Any]])
        XCTAssertEqual(apiTypes.count, 1)
        XCTAssertEqual(
            apiTypes[0]["NSPrivacyAccessedAPIType"] as? String,
            "NSPrivacyAccessedAPICategoryUserDefaults"
        )
        XCTAssertEqual(
            apiTypes[0]["NSPrivacyAccessedAPITypeReasons"] as? [String],
            ["CA92.1"]
        )
    }
}
