import Foundation
import XCTest
@testable import PowerTOEIC

final class TrainingRunTests: XCTestCase {
    private final class MemoryBackend: AppStatePersistenceBackend {
        var values: [String: Data] = [:]
        func readData(forKey key: String) throws -> Data? { values[key] }
        func writeData(_ data: Data, forKey key: String) throws { values[key] = data }
        func removeData(forKey key: String) throws { values.removeValue(forKey: key) }
    }
    private struct FixedClock: AppClock {
        let value: String
        func nowISOString() -> String { value }
    }
    private func environment(store: VersionedNativeAppStore? = nil, date: String = "2026-01-01T00:00:00Z") throws -> PowerTOEICAppEnvironment {
        PowerTOEICAppEnvironment(questionBank: try BundledQuestionBankRepository(),
                                 appStore: store ?? VersionedNativeAppStore(backend: MemoryBackend()),
                                 clock: FixedClock(value: date))
    }
    private func complete(_ run: TrainingRun) throws {
        for index in run.session.questionIDs.indices {
            let question = try XCTUnwrap(run.session.currentQuestion)
            try run.record(run.session.submitAnswer(question.correctIndex))
            if index < run.session.questionIDs.count - 1 { try run.session.next() }
        }
    }

    func testBundledPilotIsPlayableOfflineWithThirtyQuestionsAndJapaneseRules() throws {
        let bank = try BundledQuestionBankRepository()
        XCTAssertEqual(try bank.questions().count, 30)
        XCTAssertEqual(try bank.skills().count, 3)
        XCTAssertEqual(try bank.categories().first?.label, "前置詞・接続詞")
        XCTAssertTrue(try bank.questions().allSatisfy { $0.explanation.contains("を選べ！") })
    }

    func testSelectedSkillCannotSpillIntoOtherSkillsWhenThereAreTooFewQuestions() throws {
        let env = try environment()
        let skill = try XCTUnwrap(env.questionBank.skills().first)
        let recipe = try WorkoutBuilder.presetRecipe(.power, skillId: skill.id)
        let run = try TrainingRun(environment: env, recipe: recipe)
        XCTAssertEqual(run.session.questionIDs.count, 10)
        XCTAssertTrue(run.session.questionIDs.allSatisfy { (try? env.questionBank.question(id: $0)?.skillId) == skill.id })
    }

    func testAnswersDrivePersistenceGrowthAndCompletionExactlyOnce() throws {
        let env = try environment()
        let run = try TrainingRun(environment: env, recipe: WorkoutBuilder.presetRecipe(.quick))
        try complete(run)
        XCTAssertEqual(run.state.progression, ProgressionState(points: 20, stage: 1))
        XCTAssertEqual(try run.finish().answered, 10)
        XCTAssertEqual(run.state.progression.points, 25)
        try run.finish()
        XCTAssertEqual(run.state.progression.points, 25)
        let restored = env.launchSnapshot()
        XCTAssertEqual(restored.persistedState.attempts.count, 10)
        XCTAssertEqual(restored.persistedState.reviewEntries.count, 10)
        XCTAssertEqual(restored.persistedState.progression.stage, 1)
    }

    func testEndlessKeepsSelectedScopeAndAggregatesAcrossChunks() throws {
        let env = try environment()
        let skill = try XCTUnwrap(env.questionBank.skills().first)
        let recipe = try WorkoutBuilder.presetRecipe(.power, skillId: skill.id, endless: true)
        let run = try TrainingRun(environment: env, recipe: recipe)
        for _ in 0..<4 {
            try complete(run)
            try run.continueChunk()
            XCTAssertLessThanOrEqual(run.session.questionIDs.count, 30)
        }
        XCTAssertEqual(run.completedQuestions, 40)
        XCTAssertEqual(try run.finish().answered, 40)
        XCTAssertEqual(run.results().bySkill.keys.sorted(), [skill.id])
        XCTAssertEqual(env.appStore.load().attempts.count, 40)
    }

    func testSavedAnswerBecomesReviewAndExtendsItsInterval() throws {
        let env = try environment()
        let run = try TrainingRun(environment: env, recipe: WorkoutBuilder.presetRecipe(.quick, totalCount: 1),
                                  clock: { 1_767_225_600_000 })
        try complete(run)
        try run.finish()
        let reviewEnv = try environment(store: env.appStore, date: "2026-01-02T00:00:00Z")
        let review = try TrainingRun(environment: reviewEnv, recipe: WorkoutBuilder.presetRecipe(.review),
                                     clock: { 1_767_312_000_000 })
        try complete(review)
        try review.finish()
        XCTAssertEqual(review.state.attempts.last?.context, .review)
        XCTAssertEqual(review.state.reviewEntries.first?.intervalIndex, 1)
    }

    func testEditorPreservesTestSemanticsAndRemovedSkillsStayExcluded() throws {
        let env = try environment()
        let proposed = try WorkoutBuilder.categoryRecipe(repository: env.questionBank,
                                                         categoryIDs: ["connectors-prepositions"], mode: .test)
        var draft = WorkoutDraft(recipe: proposed)
        let removed = try XCTUnwrap(draft.allocations.first?.skillId)
        draft.allocations.removeAll { $0.skillId == removed }
        try draft.resize(to: 50)
        let edited = try draft.recipe()
        XCTAssertEqual(edited.labelPolicy, .hideSkill)
        let run = try TrainingRun(environment: env, recipe: edited)
        XCTAssertEqual(run.session.context, .mixed)
        XCTAssertFalse(run.session.questionIDs.contains { (try? env.questionBank.question(id: $0)?.skillId) == removed })
    }
}
