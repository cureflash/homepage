import Foundation
import XCTest
@testable import PowerTOEIC

final class MasteryReviewTests: XCTestCase {
    private struct FixtureRoot: Decodable {
        let mastery: MasteryFixture
        let review: ReviewFixture
    }

    private struct MasteryFixture: Decodable {
        let cases: [MasteryCase]
    }

    private struct MasteryCase: Decodable {
        let name: String
        let skillId: String
        let attempts: [MasteryAttemptEvidence]
        let expected: MasterySnapshot
    }

    private struct ReviewFixture: Decodable {
        let initialAttempt: ReviewAttemptEvidence
        let expectedInitialEntry: ReviewEntry
        let successfulReviewAttempt: ReviewAttemptEvidence
        let expectedAdvancedEntry: ReviewEntry
        let dueAt: String
        let expectedDueQuestionIds: [String]
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

    func testMasteryCasesMatchCanonicalWebFixture() throws {
        let fixture = try loadSharedFixture()
        for testCase in fixture.mastery.cases {
            let actual = try MasteryEngine.snapshot(skillId: testCase.skillId, attempts: testCase.attempts)
            XCTAssertEqual(actual, testCase.expected, testCase.name)
        }
    }

    func testReviewScheduleMatchesCanonicalWebFixture() throws {
        let fixture = try loadSharedFixture()
        let initial = try ReviewScheduler.entry(from: fixture.review.initialAttempt)
        XCTAssertEqual(initial, fixture.review.expectedInitialEntry)

        let advanced = try ReviewScheduler.entry(
            from: fixture.review.successfulReviewAttempt,
            previousEntry: initial
        )
        XCTAssertEqual(advanced, fixture.review.expectedAdvancedEntry)
        XCTAssertEqual(
            try ReviewScheduler.dueQuestionIDs([advanced], now: fixture.review.dueAt),
            fixture.review.expectedDueQuestionIds
        )
    }

    func testWeaknessRankingUsesRecentAndOverallErrorWithWeakBonus() throws {
        let weak = try MasteryEngine.snapshot(
            skillId: "skill.weak",
            attempts: [
                .init(skillId: "skill.weak", correct: false, context: .training),
                .init(skillId: "skill.weak", correct: false, context: .training),
                .init(skillId: "skill.weak", correct: true, context: .training),
                .init(skillId: "skill.weak", correct: false, context: .training),
            ]
        )
        let training = try MasteryEngine.snapshot(
            skillId: "skill.training",
            attempts: [
                .init(skillId: "skill.training", correct: true, context: .training),
                .init(skillId: "skill.training", correct: true, context: .training),
                .init(skillId: "skill.training", correct: true, context: .training),
                .init(skillId: "skill.training", correct: true, context: .training),
            ]
        )

        let ranked = try WeaknessRanker.rank([training, weak])
        XCTAssertEqual(ranked.map(\.skillId), ["skill.weak", "skill.training"])
        XCTAssertEqual(ranked.first?.state, .weak)
        XCTAssertEqual(ranked.first?.weaknessScore ?? 0, 0.9, accuracy: 0.000_001)
    }
}
