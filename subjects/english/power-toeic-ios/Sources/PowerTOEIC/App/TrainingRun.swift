import Foundation

public enum TrainingRunError: Error, Equatable {
    case noQuestions
    case invalidAttempt
    case incompleteChunk
}

// Application composition shared by every native mode; answer truth stays in QuizSession.
public final class TrainingRun {
    public let recipe: WorkoutRecipe
    public private(set) var session: QuizSession
    public private(set) var state: PersistenceEnvelope
    public private(set) var completedQuestions = 0
    public private(set) var chunkIndex = 0
    public private(set) var finished = false
    private let environment: PowerTOEICAppEnvironment
    private let clock: QuizSession.Clock
    private var recordedInChunk = 0
    private var answered = 0
    private var correct = 0
    private var bySkill: [String: SkillResult] = [:]

    public init(environment: PowerTOEICAppEnvironment, recipe: WorkoutRecipe, clock: @escaping QuizSession.Clock = { Int(Date().timeIntervalSince1970 * 1_000) }) throws {
        self.environment = environment
        self.recipe = recipe
        self.clock = clock
        let initial = environment.appStore.load()
        state = initial
        session = try Self.makeSession(environment: environment, recipe: recipe, state: initial, chunkIndex: 0, clock: clock)
    }

    @discardableResult
    public func record(_ attempt: Attempt) throws -> ProgressionUpdate {
        guard !finished, session.attempts.count == recordedInChunk + 1, session.attempts.last == attempt else {
            throw TrainingRunError.invalidAttempt
        }
        let previous = state.reviewEntries.first { $0.questionId == attempt.questionId }
        let review = try ReviewScheduler.entry(from: ReviewAttemptEvidence(attempt: attempt), previousEntry: previous)
        let progression = try ProgressionEngine.apply(state: state.progression, event: ProgressionEngine.event(from: attempt, priorAttempts: state.attempts))
        state = try environment.appStore.save(PersistenceEnvelope(
            version: state.version, attempts: state.attempts + [attempt],
            reviewEntries: ReviewScheduler.upsert(state.reviewEntries, nextEntry: review),
            progression: ProgressionState(points: progression.points, stage: progression.stage)
        ))
        recordedInChunk += 1
        answered += 1
        if attempt.correct { correct += 1 }
        let old = bySkill[attempt.skillId] ?? SkillResult(answered: 0, correct: 0)
        bySkill[attempt.skillId] = SkillResult(answered: old.answered + 1, correct: old.correct + (attempt.correct ? 1 : 0))
        return progression
    }

    public func continueChunk() throws {
        guard recipe.endless, !finished, recordedInChunk == session.questionIDs.count else {
            throw TrainingRunError.incompleteChunk
        }
        let nextSession = try Self.makeSession(environment: environment, recipe: recipe, state: state, chunkIndex: chunkIndex + 1, clock: clock)
        completedQuestions += session.questionIDs.count
        chunkIndex += 1
        recordedInChunk = 0
        session = nextSession
    }

    @discardableResult
    public func finish() throws -> SessionResults {
        if !finished {
            let update = try ProgressionEngine.apply(state: state.progression, event: .sessionComplete(questionCount: answered))
            state = try environment.appStore.save(PersistenceEnvelope(
                version: state.version, attempts: state.attempts, reviewEntries: state.reviewEntries,
                progression: ProgressionState(points: update.points, stage: update.stage)
            ))
            finished = true
        }
        return results()
    }

    public func results() -> SessionResults {
        SessionResults(answered: answered, correct: correct, accuracy: answered == 0 ? 0 : Double(correct) / Double(answered), bySkill: bySkill)
    }

    private static func makeSession(environment: PowerTOEICAppEnvironment, recipe: WorkoutRecipe, state: PersistenceEnvelope, chunkIndex: Int, clock: @escaping QuizSession.Clock) throws -> QuizSession {
        let selectionRecipe: WorkoutRecipe
        if recipe.endless {
            selectionRecipe = try SessionPlanner.resizedRecipe(recipe, totalCount: SessionPlanner.endlessChunkSize, seed: recipe.seed + chunkIndex, endless: true)
        } else { selectionRecipe = recipe }
        let ids = try WorkoutBuilder.selectQuestionIDs(
            repository: environment.questionBank, recipe: selectionRecipe,
            history: state.attempts.map { QuestionHistoryEntry(questionId: $0.questionId, answeredAt: $0.answeredAt) },
            reviewQuestionIDs: ReviewScheduler.dueQuestionIDs(state.reviewEntries, now: environment.clock.nowISOString())
        )
        guard !ids.isEmpty else { throw TrainingRunError.noQuestions }
        return try QuizSession(questionIDs: ids, repository: environment.questionBank, clock: clock,
                               context: recipe.mode == .test ? .mixed : recipe.mode == .review ? .review : .training)
    }
}
