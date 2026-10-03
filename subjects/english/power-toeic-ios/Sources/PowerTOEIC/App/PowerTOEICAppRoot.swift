import SwiftUI

public struct PowerTOEICAppRoot: View {
    private enum Screen: Hashable { case categories, editor, quiz, result, weakness }
    private let environment: PowerTOEICAppEnvironment
    private let onSelectMode: (WorkoutMode) -> Void
    @State private var snapshot: AppLaunchSnapshot
    @State private var path: [Screen] = []
    @State private var selectedMode: WorkoutMode = .training
    @State private var editingRecipe: WorkoutRecipe?
    @State private var run: TrainingRun?
    @State private var quizID = UUID()
    @State private var results: SessionResults?
    @State private var message: String?

    public init(environment: PowerTOEICAppEnvironment, onSelectMode: @escaping (WorkoutMode) -> Void = { _ in }) {
        self.environment = environment
        self.onSelectMode = onSelectMode
        _snapshot = State(initialValue: environment.launchSnapshot())
    }

    public init() {
        let bank: any QuestionBankRepository
        do { bank = try BundledQuestionBankRepository() }
        catch { bank = EmptyQuestionBankRepository() }
        self.init(environment: PowerTOEICAppEnvironment(questionBank: bank))
    }

    public var body: some View {
        NavigationStack(path: $path) {
            HomeView(
                progression: snapshot.persistedState.progression,
                reviewDueCount: snapshot.reviewDueCount,
                onSelect: selectMode,
                onShowWeakness: { path = [.weakness] }
            )
            .navigationTitle("Power TOEIC")
            .navigationDestination(for: Screen.self) { screen in
                destination(screen)
            }
        }
        .alert("Power TOEIC", isPresented: Binding(get: { message != nil }, set: { if !$0 { message = nil } })) {
            Button("閉じる", role: .cancel) { message = nil }
        } message: {
            Text(message ?? "")
        }
    }

    @ViewBuilder
    private func destination(_ screen: Screen) -> some View {
        switch screen {
        case .categories:
            CategorySelectionView(
                mode: selectedMode, repository: environment.questionBank,
                onEdit: { showEditor($0) }
            )
        case .editor:
            if let editingRecipe {
                WorkoutEditorView(recipe: editingRecipe, repository: environment.questionBank, onStart: begin)
                    .id(editingRecipe.seed.description + editingRecipe.mode.rawValue)
            }
        case .quiz:
            if let run {
                CharacterQuizView(
                    session: run.session, progression: run.state.progression,
                    catalog: environment.assetCatalog, audioPlayer: environment.audioPlayer,
                    skillLabel: skillLabel, endless: run.recipe.endless,
                    progressOffset: run.completedQuestions, onAttemptSubmitted: record,
                    onComplete: { _ in completeChunk() }
                )
                .id(quizID)
                .navigationTitle(run.recipe.endless ? "無限反復" : "トレーニング")
                .toolbar {
                    if run.recipe.endless {
                        ToolbarItem(placement: .primaryAction) {
                            Button("終了して結果を見る") { finish() }
                        }
                    }
                }
            }
        case .result:
            if let results {
                ResultView(results: results, skillLabel: skillLabel, onHome: showHome,
                           onRestart: { if let recipe = run?.recipe { begin(recipe) } },
                           onEdit: { if let recipe = run?.recipe { showEditor(recipe) } })
            }
        case .weakness:
            WeaknessView(items: weaknessItems(), onTrain: { id in
                do { showEditor(try WorkoutBuilder.presetRecipe(.training, skillId: id)) }
                catch { message = "この分野の訓練を開始できません。" }
            })
        }
    }

    private func selectMode(_ mode: WorkoutMode) {
        onSelectMode(mode)
        selectedMode = mode
        do {
            switch mode {
            case .quick, .review:
                begin(try WorkoutBuilder.presetRecipe(mode))
            case .training, .power, .test:
                path = [.categories]
            case .custom:
                showEditor(try defaultRecipe())
            case .weakness:
                let ranked = try rankedWeaknesses()
                let recipe: WorkoutRecipe
                if ranked.isEmpty { recipe = try defaultRecipe() }
                else { recipe = try WorkoutBuilder.weaknessRecipe(rankedWeaknesses: ranked.map { ($0.skillId, $0.weaknessScore) }) }
                showEditor(recipe)
            }
        } catch { message = "問題集を読み込めません。"; }
    }

    private func defaultRecipe() throws -> WorkoutRecipe {
        try WorkoutBuilder.categoryRecipe(
            repository: environment.questionBank,
            categoryIDs: Set(try environment.questionBank.categories().map(\.id)), mode: .custom
        )
    }

    private func showEditor(_ recipe: WorkoutRecipe) {
        editingRecipe = recipe
        path = [.editor]
    }

    private func begin(_ recipe: WorkoutRecipe) {
        do {
            run = try TrainingRun(environment: environment, recipe: recipe)
            quizID = UUID()
            path = [.quiz]
        } catch {
            message = recipe.mode == .review ? "今は復習する問題がありません。" : "選んだ範囲に出題できる問題がありません。"
        }
    }

    private func record(_ attempt: Attempt) {
        do {
            if let run {
                _ = try run.record(attempt)
                refresh(run.state)
            }
        } catch { message = "学習結果を反映できません。"; }
    }

    private func completeChunk() {
        guard let run else { return }
        if run.recipe.endless {
            do { try run.continueChunk(); quizID = UUID() }
            catch { finish() }
        } else { finish() }
    }

    private func finish() {
        do {
            if let run {
                results = try run.finish()
                refresh(run.state)
                path = [.result]
            }
        } catch { message = "結果を表示できません。"; }
    }

    private func showHome() {
        snapshot = environment.launchSnapshot()
        path = []
    }

    private func refresh(_ state: PersistenceEnvelope) {
        let due = (try? ReviewScheduler.dueEntries(state.reviewEntries, now: environment.clock.nowISOString()).count) ?? 0
        snapshot = AppLaunchSnapshot(persistedState: state, reviewDueCount: due)
    }

    private func skillLabel(_ id: String) -> String {
        (try? environment.questionBank.skills().first { $0.id == id }?.label) ?? id
    }

    private func rankedWeaknesses() throws -> [WeaknessRank] {
        let skills = try environment.questionBank.skills()
        let ids = Set(skills.map(\.id))
        let mastery = try MasteryEngine.snapshots(
            attempts: snapshot.persistedState.attempts.map { MasteryAttemptEvidence(attempt: $0) },
            skillIds: skills.map(\.id)
        )
        return try WeaknessRanker.rank(mastery).filter { ids.contains($0.skillId) }
    }

    private func weaknessItems() -> [WeaknessItem] {
        ((try? rankedWeaknesses()) ?? []).map {
            WeaknessItem(id: $0.skillId, label: skillLabel($0.skillId), accuracy: $0.accuracy, attempts: $0.attempts)
        }
    }
}
