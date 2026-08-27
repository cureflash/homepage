import Foundation
import XCTest
@testable import PowerTOEIC

final class ProgressionAssetTests: XCTestCase {
    private struct FixtureRoot: Decodable {
        let progression: ProgressionFixture
    }

    private struct ProgressionFixture: Decodable {
        let initialState: ProgressionState
        let events: [FixtureEvent]
        let expectedStates: [ExpectedState]
    }

    private struct FixtureEvent: Decodable {
        let type: String
        let correct: Bool?
        let firstCorrect: Bool?
        let context: AttemptContext?
        let newlyMastered: Bool?
        let questionCount: Int?

        func model() throws -> ProgressionEvent {
            switch type {
            case "attempt":
                guard let correct, let firstCorrect, let context else {
                    throw FixtureError.invalidEvent
                }
                return .attempt(correct: correct, firstCorrect: firstCorrect, context: context)
            case "mastery":
                guard let newlyMastered else { throw FixtureError.invalidEvent }
                return .mastery(newlyMastered: newlyMastered)
            case "session_complete":
                guard let questionCount else { throw FixtureError.invalidEvent }
                return .sessionComplete(questionCount: questionCount)
            default:
                throw FixtureError.invalidEvent
            }
        }
    }

    private struct ExpectedState: Decodable {
        let points: Int
        let stage: Int
        let earned: Int
    }

    private enum FixtureError: Error {
        case invalidEvent
    }

    private func loadSharedFixture() throws -> FixtureRoot {
        let testFile = URL(fileURLWithPath: #filePath)
        let packageRoot = testFile
            .deletingLastPathComponent()
            .deletingLastPathComponent()
            .deletingLastPathComponent()
        let fixtureURL = packageRoot
            .appendingPathComponent("../power-toeic/tests/fixtures/cross-platform-conformance-v1.json")
            .standardizedFileURL
        return try JSONDecoder().decode(FixtureRoot.self, from: Data(contentsOf: fixtureURL))
    }

    func testProgressionMatchesCanonicalWebFixture() throws {
        let fixture = try loadSharedFixture().progression
        var state = fixture.initialState

        for (index, eventFixture) in fixture.events.enumerated() {
            let update = try ProgressionEngine.apply(state: state, event: eventFixture.model())
            let expected = fixture.expectedStates[index]
            XCTAssertEqual(update.points, expected.points)
            XCTAssertEqual(update.stage, expected.stage)
            XCTAssertEqual(update.earned, expected.earned)
            state = ProgressionState(points: update.points, stage: update.stage)
        }
    }

    func testProgressionThresholdsMatchWebContract() throws {
        XCTAssertEqual(try ProgressionEngine.stage(for: 0), 0)
        XCTAssertEqual(try ProgressionEngine.stage(for: 19), 0)
        XCTAssertEqual(try ProgressionEngine.stage(for: 20), 1)
        XCTAssertEqual(try ProgressionEngine.stage(for: 500), 5)
        XCTAssertEqual(try ProgressionEngine.stage(for: 50_000), 5)
        XCTAssertThrowsError(try ProgressionEngine.stage(for: -1))
    }

    func testAssetCatalogUsesStableSemanticFallbacks() throws {
        let catalog = AssetCatalog()

        XCTAssertEqual(catalog.sergeant(.wrong)?.semanticID, AssetCatalog.sergeantNeutral)
        XCTAssertEqual(
            catalog.trainee(stage: 3, reaction: .wrong)?.resourceName,
            catalog.trainee(stage: 3, reaction: .neutral)?.resourceName
        )
        XCTAssertEqual(catalog.trainee(stage: 99)?.semanticID, AssetCatalog.traineeID(stage: 0))
        XCTAssertEqual(catalog.audio(AssetCatalog.audioCorrect)?.resourceName, "otologic_correct.mp3")
        XCTAssertEqual(catalog.audio(AssetCatalog.audioWrong)?.resourceName, "otologic_incorrect.mp3")
    }

    func testTemporaryCharacterCatalogTracksBundledAndPlannedIrasutoyaAssetsBelowLimit() {
        let catalog = AssetCatalog()
        let records = (0...5).compactMap { catalog.trainee(stage: $0) }
            + [catalog.sergeant()].compactMap { $0 }
        let bundledResourceNames = Set(records.compactMap(\.resourceName))
        let plannedSourceURLs = Set(records.compactMap(\.sourceURL))

        XCTAssertLessThan(bundledResourceNames.count, 20)
        XCTAssertEqual(bundledResourceNames.count, 3)
        XCTAssertLessThan(plannedSourceURLs.count, 20)
        XCTAssertEqual(plannedSourceURLs.count, 4)

        let finalStage = catalog.trainee(stage: 5)
        XCTAssertNil(finalStage?.resourceName)
        XCTAssertEqual(finalStage?.sourceURL, "https://www.irasutoya.com/2014/06/blog-post_14.html")
    }
}
