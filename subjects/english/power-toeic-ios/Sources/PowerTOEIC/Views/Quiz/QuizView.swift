#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct QuizView: View {
    public let session: QuizSession
    public let skillLabel: (String) -> String
    public let onAttemptSubmitted: (Attempt) -> Void
    public let onQuestionAdvanced: () -> Void
    public let onComplete: (SessionResults) -> Void

    @State private var selectedIndex: Int?
    @State private var submittedAttempt: Attempt?
    @State private var renderToken = 0
    @State private var errorMessage: String?

    public init(
        session: QuizSession,
        skillLabel: @escaping (String) -> String = { $0 },
        onAttemptSubmitted: @escaping (Attempt) -> Void = { _ in },
        onQuestionAdvanced: @escaping () -> Void = {},
        onComplete: @escaping (SessionResults) -> Void
    ) {
        self.session = session
        self.skillLabel = skillLabel
        self.onAttemptSubmitted = onAttemptSubmitted
        self.onQuestionAdvanced = onQuestionAdvanced
        self.onComplete = onComplete
    }

    public var body: some View {
        VStack(spacing: 20) {
            let progress = session.progress
            HStack {
                Text("POWER TOEIC").font(.headline)
                Spacer()
                Text("\(progress.current) / \(progress.total)").monospacedDigit()
            }
            .accessibilityElement(children: .ignore)
            .accessibilityLabel("問題 \(progress.current) / \(progress.total)")

            ProgressView(value: Double(progress.current - 1), total: Double(max(progress.total, 1)))
                .accessibilityLabel("セッション進捗")
                .accessibilityValue("\(progress.current)問目、全\(progress.total)問")

            if let question = session.currentQuestion {
                if session.context != .mixed {
                    Text(skillLabel(question.skillId))
                        .font(.caption.weight(.semibold))
                        .foregroundStyle(.secondary)
                        .frame(maxWidth: .infinity, alignment: .leading)
                }

                Text(question.sentence)
                    .font(.title3.weight(.semibold))
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .accessibilityLabel("問題文、\(question.sentence)")
                    .accessibilityIdentifier("quiz.sentence")

                VStack(spacing: 10) {
                    ForEach(Array(question.choices.enumerated()), id: \.offset) { index, choice in
                        let letter = String(UnicodeScalar(65 + index)!)
                        Button {
                            guard submittedAttempt == nil else { return }
                            selectedIndex = index
                        } label: {
                            HStack(spacing: 12) {
                                Text(letter)
                                    .font(.caption.bold())
                                    .frame(width: 28, height: 28)
                                    .background(Circle().fill(.quaternary))
                                Text(choice).frame(maxWidth: .infinity, alignment: .leading)
                                if selectedIndex == index { Image(systemName: "checkmark.circle.fill") }
                            }
                            .padding()
                            .contentShape(Rectangle())
                        }
                        .buttonStyle(.plain)
                        .background(RoundedRectangle(cornerRadius: 12).stroke(borderStyle(index: index), lineWidth: 2))
                        .accessibilityLabel("選択肢 \(letter)、\(choice)")
                        .accessibilityValue(choiceAccessibilityValue(index: index))
                        .accessibilityHint(submittedAttempt == nil ? "ダブルタップして選択" : "回答済み")
                        .accessibilityIdentifier("quiz.choice.\(index)")
                    }
                }

                if let attempt = submittedAttempt {
                    VStack(alignment: .leading, spacing: 8) {
                        Label(attempt.correct ? "正解" : "不正解", systemImage: attempt.correct ? "checkmark.circle.fill" : "xmark.circle.fill")
                            .font(.headline)
                        Text(question.explanation)
                    }
                    .frame(maxWidth: .infinity, alignment: .leading)
                    .padding()
                    .background(RoundedRectangle(cornerRadius: 12).fill(.thinMaterial))
                    .accessibilityElement(children: .ignore)
                    .accessibilityLabel("\(attempt.correct ? "正解" : "不正解")。\(question.explanation)")
                    .accessibilityIdentifier("quiz.feedback")
                }

                if let errorMessage {
                    Text(errorMessage)
                        .font(.footnote)
                        .foregroundStyle(.secondary)
                        .accessibilityLabel("エラー、\(errorMessage)")
                }

                Button(submittedAttempt == nil ? "回答する" : (progress.current == progress.total ? "結果を見る" : "次の問題")) {
                    advance(question: question)
                }
                .buttonStyle(.borderedProminent)
                .controlSize(.large)
                .disabled(submittedAttempt == nil && selectedIndex == nil)
                .frame(maxWidth: .infinity)
                .accessibilityHint(primaryActionHint(progress: progress))
                .accessibilityIdentifier("quiz.primaryAction")
            }
        }
        .padding()
        .id(renderToken)
    }

    private func borderStyle(index: Int) -> HierarchicalShapeStyle {
        if let attempt = submittedAttempt {
            if index == attempt.correctIndex { return .primary }
            if index == attempt.selectedIndex && !attempt.correct { return .secondary }
        }
        return selectedIndex == index ? .primary : .quaternary
    }

    private func choiceAccessibilityValue(index: Int) -> String {
        if let attempt = submittedAttempt {
            if index == attempt.correctIndex { return "正解" }
            if index == attempt.selectedIndex { return "選択した不正解" }
            return ""
        }
        return selectedIndex == index ? "選択中" : ""
    }

    private func primaryActionHint(progress: (current: Int, total: Int)) -> String {
        if submittedAttempt == nil { return "選択した答えを確定します" }
        return progress.current == progress.total ? "セッション結果を表示します" : "次の問題へ進みます"
    }

    private func advance(question: Question) {
        do {
            if submittedAttempt == nil {
                guard let selectedIndex else { return }
                let attempt = try session.submitAnswer(selectedIndex)
                submittedAttempt = attempt
                onAttemptSubmitted(attempt)
                renderToken += 1
                return
            }
            if session.progress.current == session.progress.total {
                onComplete(session.results())
                return
            }
            _ = try session.next()
            selectedIndex = nil
            submittedAttempt = nil
            errorMessage = nil
            onQuestionAdvanced()
            renderToken += 1
        } catch {
            errorMessage = String(describing: error)
        }
    }
}
#endif
