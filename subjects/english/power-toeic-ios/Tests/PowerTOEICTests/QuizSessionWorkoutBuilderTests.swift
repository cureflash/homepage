import Foundation
import XCTest
@testable import PowerTOEIC

final class QuizSessionWorkoutBuilderTests: XCTestCase {
    private struct FixtureRoot: Decodable {
        let questions: [Question]
        let skills: [Skill]
        let selection: SelectionFixture
        let session: SessionFixture
    }

    private struct SelectionFixture: Decodable {
        let recipe: WorkoutRecipe
        let attempts: [QuestionHistoryEntry]
        let expectedQuestionIds: [String]
    }

    private struct SessionFixture: Decodable {
        let questionIds: [String]
        let context: AttemptContext
        let clockMs: [Int]
        let selectedIndexes: [Int]
        let expectedAttempts: [Attempt]
        let expectedResults: ExpectedResults
    }

    private struct ExpectedResults: Decodable {
        let answered: Int
        let correct: Int
        let accuracy: Double
        let bySkill: [String: ExpectedSkillResult]
    }

    private struct ExpectedSkillResult: Decodable {
        let answered: Int
        let correct: Int
    }

    private struct MemoryRepository: QuestionBankRepository {
        let questionValues: [Question]
        let skillValues: [Skill]

        func question(id: String) throws -> Question? {
            questionValues.first { $0.id == id }
        }

        func questions(skillId: String?, categoryId: String?) throws -> [Question] {
            questionValues.filter { question in
                (skillId == nil || question.skillId == skillId) &&
                (categoryId == nil || question.categoryId == categoryId)
            }
        }

        func skills() throws -> [Skill] {
            skillValues
        }
    }

    private final class FixtureClock {
        private var values: [Int]
        private var index = 0

        init(_ values: [Int]) {
            self.values = values
        }

        func now() -> Int {
            defer { index += 1 }
            return values[index]
        }
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

    func testWorkoutSelectionMatchesCanonicalWebFixture() throws {
        let fixture = try loadSharedFixture()
        let repository = MemoryRepository(questionValues: fixture.questions, skillValues: fixture.skills)

        let selected = try WorkoutBuilder.selectQuestionIDs(
            repository: repository,
            recipe: fixture.selection.recipe,
            history: fixture.selection.attempts
        )

        XCTAssertEqual(selected, fixture.selection.expectedQuestionIds)
    }

    func testQuizSessionMatchesCanonicalWebFixture() throws {
        let fixture = try loadSharedFixture()
        let repository = MemoryRepository(questionValues: fixture.questions, skillValues: fixture.skills)
        let clock = FixtureClock(fixture.session.clockMs)
        let session = try QuizSession(
            questionIDs: fixture.session.questionIds,
            repository: repository,
            clock: clock.now,
            context: fixture.session.context
        )

        for (index, selectedIndex) in fixture.session.selectedIndexes.enumerated() {
            let attempt = try session.submitAnswer(selectedIndex)
            XCTAssertEqual(attempt, fixture.session.expectedAttempts[index])
            if index < fixture.session.selectedIndexes.count - 1 {
                _ = try session.next()
            }
        }

        let results = session.results()
        XCTAssertEqual(results.answered, fixture.session.expectedResults.answered)
        XCTAssertEqual(results.correct, fixture.session.expectedResults.correct)
        XCTAssertEqual(results.accuracy, fixture.session.expectedResults.accuracy, accuracy: 0.000_001)
        XCTAssertEqual(
            results.bySkill,
            fixture.session.expectedResults.bySkill.mapValues {
                SkillResult(answered: $0.answered, correct: $0.correct)
            }
        )
    }

    func testQuizSessionRejectsInvalidTransitions() throws {
        let fixture = try loadSharedFixture()
        let repository = MemoryRepository(questionValues: fixture.questions, skillValues: fixture.skills)
        let clock = FixtureClock([1_000, 1_500, 2_000])
        let session = try QuizSession(questionIDs: ["syn-q1"], repository: repository, clock: clock.now)

        XCTAssertThrowsError(try session.next()) { error in
            XCTAssertEqual(error as? QuizSessionError, .answerRequiredBeforeAdvancing)
        }
        _ = try session.submitAnswer(0)
        XCTAssertThrowsError(try session.submitAnswer(0)) { error in
            XCTAssertEqual(error as? QuizSessionError, .currentQuestionAlreadyAnswered)
        }
        _ = try session.next()
        XCTAssertTrue(session.isComplete)
    }

    func testWorkoutRecipeValidationPreservesModeRules() throws {
        let invalidTest = WorkoutRecipe(
            mode: .test,
            totalCount: 10,
            skillAllocations: [],
            selectionPolicy: .standard,
            labelPolicy: .showSkill,
            seed: 1,
            endless: false
        )
        XCTAssertThrowsError(try WorkoutBuilder.validate(invalidTest)) { error in
            XCTAssertEqual(error as? WorkoutBuilderError, .testMustHideSkill)
        }

        let review = try WorkoutBuilder.presetRecipe(.review, totalCount: 30, seed: 9)
        XCTAssertEqual(review.selectionPolicy, .reviewDue)
        XCTAssertEqual(review.labelPolicy, .showSkill)
    }
}
