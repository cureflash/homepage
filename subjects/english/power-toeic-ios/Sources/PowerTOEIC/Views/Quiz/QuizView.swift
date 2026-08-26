#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct QuizView: View {
    public let session: QuizSession
    public let skillLabel: (String) -> String
    public let onComplete: (SessionResults) -> Void

    @State private var selectedIndex: Int?
    @State private var submittedAttempt: Attempt?
    @State private var renderToken = 0
    @State private var errorMessage: String?

    public init(session: QuizSession, skillLabel: @escaping (String) -> String = { $0 }, onComplete: @escaping (SessionResults) -> Void) {
        self.session = session
        self.skillLabel = skillLabel
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

            ProgressView(value: Double(progress.current - 1), total: Double(max(progress.total, 1)))

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
                    .accessibilityIdentifier("quiz.sentence")

                VStack(spacing: 10) {
                    ForEach(Array(question.choices.enumerated()), id: \.offset) { index, choice in
                        Button {
                            guard submittedAttempt == nil else { return }
                            selectedIndex = index
                        } label: {
                            HStack(spacing: 12) {
                                Text(String(UnicodeScalar(65 + index)!))
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
                }

                if let errorMessage { Text(errorMessage).font(.footnote).foregroundStyle(.secondary) }

                Button(submittedAttempt == nil ? "回答する" : (progress.current == progress.total ? "結果を見る" : "次の問題")) {
                    advance(question: question)
                }
                .buttonStyle(.borderedProminent)
                .controlSize(.large)
                .disabled(submittedAttempt == nil && selectedIndex == nil)
                .frame(maxWidth: .infinity)
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

    private func advance(question: Question) {
        do {
            if submittedAttempt == nil {
                guard let selectedIndex else { return }
                submittedAttempt = try session.submitAnswer(selectedIndex)
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
            renderToken += 1
        } catch {
            errorMessage = String(describing: error)
        }
    }
}
#endif
