import Foundation
import XCTest
@testable import PowerTOEIC

final class PlatformModelsTests: XCTestCase {
    private struct FixtureRoot: Decodable {
        let questions: [Question]
        let skills: [Skill]
        let selection: SelectionFixture
        let session: SessionFixture
        let mastery: MasteryFixture
        let review: ReviewFixture
        let progression: ProgressionFixture
        let questionReport: QuestionReportFixture
    }

    private struct SelectionFixture: Decodable {
        let recipe: WorkoutRecipe
    }

    private struct SessionFixture: Decodable {
        let expectedAttempts: [Attempt]
    }

    private struct MasteryFixture: Decodable {
        let cases: [MasteryCase]
    }

    private struct MasteryCase: Decodable {
        let expected: MasterySnapshot
    }

    private struct ReviewFixture: Decodable {
        let expectedInitialEntry: ReviewEntry
        let expectedAdvancedEntry: ReviewEntry
    }

    private struct ProgressionFixture: Decodable {
        let initialState: ProgressionState
        let expectedStates: [ProgressionState]
    }

    private struct QuestionReportFixture: Decodable {
        let expected: QuestionReport
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

    func testCanonicalWebFixtureDecodesWithoutTranslation() throws {
        let fixture = try loadSharedFixture()

        XCTAssertEqual(fixture.questions.count, 6)
        XCTAssertEqual(fixture.skills.map(\.id), ["skill.alpha", "skill.beta"])
        XCTAssertEqual(fixture.selection.recipe.mode, .custom)
        XCTAssertEqual(fixture.selection.recipe.seed, 7)
        XCTAssertEqual(fixture.session.expectedAttempts.count, 2)
        XCTAssertEqual(fixture.mastery.cases.map(\.expected.state), [.mastered, .weak])
        XCTAssertEqual(fixture.review.expectedInitialEntry.intervalIndex, 0)
        XCTAssertEqual(fixture.review.expectedAdvancedEntry.intervalIndex, 1)
        XCTAssertEqual(fixture.progression.initialState, ProgressionState(points: 0, stage: 0))
        XCTAssertEqual(fixture.progression.expectedStates.last, ProgressionState(points: 26, stage: 1))
        XCTAssertEqual(fixture.questionReport.expected.reason, .ambiguous)
    }

    func testPlatformEnumRawValuesMatchFrozenContract() {
        XCTAssertEqual(WorkoutMode.test.rawValue, "TEST")
        XCTAssertEqual(SelectionPolicy.reviewDue.rawValue, "review_due")
        XCTAssertEqual(LabelPolicy.hideSkill.rawValue, "hide_skill")
        XCTAssertEqual(AttemptContext.mixed.rawValue, "mixed")
        XCTAssertEqual(MasteryState.mixedPass.rawValue, "mixed_pass")
        XCTAssertEqual(QuestionReportReason.wrongExplanation.rawValue, "wrong_explanation")
    }
}
