#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct CharacterQuizView: View {
    public let session: QuizSession
    public let progression: ProgressionState
    public let catalog: AssetCatalog
    public let audioPlayer: any AudioCuePlaying
    public let skillLabel: (String) -> String
    public let onComplete: (SessionResults) -> Void

    @State private var reaction: CharacterReaction = .neutral

    public init(
        session: QuizSession,
        progression: ProgressionState,
        catalog: AssetCatalog = AssetCatalog(),
        audioPlayer: any AudioCuePlaying = SilentAudioCuePlayer(),
        skillLabel: @escaping (String) -> String = { $0 },
        onComplete: @escaping (SessionResults) -> Void
    ) {
        self.session = session
        self.progression = progression
        self.catalog = catalog
        self.audioPlayer = audioPlayer
        self.skillLabel = skillLabel
        self.onComplete = onComplete
    }

    public var body: some View {
        ScrollView {
            VStack(spacing: 12) {
                CharacterView(
                    role: .sergeant,
                    reaction: reaction,
                    catalog: catalog,
                    message: sergeantMessage
                )

                QuizView(
                    session: session,
                    skillLabel: skillLabel,
                    onAttemptSubmitted: handleAttempt,
                    onQuestionAdvanced: { reaction = .neutral },
                    onComplete: handleComplete
                )

                CharacterView(
                    role: .trainee(stage: progression.stage),
                    reaction: reaction,
                    catalog: catalog,
                    message: traineeMessage
                )
            }
        }
        .accessibilityIdentifier("characterQuiz")
    }

    private var sergeantMessage: String {
        switch reaction {
        case .neutral: return "1問ずつ確実に仕留めろ！"
        case .correct: return "正解！ その判断を定着させろ！"
        case .wrong: return "違う。解説で決め手を確認して次だ！"
        case .complete: return "訓練終了。結果を確認しろ！"
        }
    }

    private var traineeMessage: String {
        switch reaction {
        case .neutral: return "STAGE \(progression.stage)。次の問題に集中。"
        case .correct: return "よし、少し強くなった気がする。"
        case .wrong: return "ここを覚えて次は取る。"
        case .complete: return "今日の訓練、完了！"
        }
    }

    private func handleAttempt(_ attempt: Attempt) {
        reaction = attempt.correct ? .correct : .wrong
        let cue = attempt.correct ? AssetCatalog.audioCorrect : AssetCatalog.audioWrong
        Task { await audioPlayer.play(cue) }
    }

    private func handleComplete(_ results: SessionResults) {
        reaction = .complete
        Task { await audioPlayer.play(AssetCatalog.audioInspiration) }
        onComplete(results)
    }
}
#endif
