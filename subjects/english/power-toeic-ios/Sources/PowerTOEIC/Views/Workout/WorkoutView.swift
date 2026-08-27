#if canImport(SwiftUI)
import SwiftUI

@available(iOS 16.0, macOS 13.0, *)
public struct WorkoutSkillOption: Identifiable, Equatable, Sendable {
    public let id: String
    public let label: String

    public init(id: String, label: String) {
        self.id = id
        self.label = label
    }
}

@available(iOS 16.0, macOS 13.0, *)
public struct WorkoutView: View {
    public let mode: WorkoutMode
    public let skills: [WorkoutSkillOption]
    public let defaultCount: Int
    public let onStart: (String?, Int) -> Void

    @State private var selectedSkillID: String?
    @State private var count: Int

    public init(mode: WorkoutMode, skills: [WorkoutSkillOption], defaultCount: Int, onStart: @escaping (String?, Int) -> Void) {
        self.mode = mode
        self.skills = skills
        self.defaultCount = defaultCount
        self.onStart = onStart
        _count = State(initialValue: defaultCount)
    }

    public var body: some View {
        Form {
            Section("モード") {
                Text(mode.rawValue)
                    .accessibilityLabel("トレーニングモード、\(mode.rawValue)")
            }

            if mode == .training || mode == .power || mode == .custom {
                Section("分野") {
                    Picker("分野", selection: $selectedSkillID) {
                        Text("おすすめ").tag(String?.none)
                        ForEach(skills) { skill in Text(skill.label).tag(String?.some(skill.id)) }
                    }
                    .accessibilityHint("トレーニングする分野を選びます")
                }
            }

            if mode == .custom {
                Section("問題数") {
                    Stepper("\(count)問", value: $count, in: 1...100)
                        .accessibilityLabel("問題数")
                        .accessibilityValue("\(count)問")
                        .accessibilityHint("上下スワイプで問題数を変更します")
                }
            }

            Section {
                Button("トレーニング開始") { onStart(selectedSkillID, count) }
                    .frame(maxWidth: .infinity)
                    .buttonStyle(.borderedProminent)
                    .accessibilityHint("選択した条件でトレーニングを開始します")
            }
        }
        .navigationTitle("トレーニング")
    }
}
#endif
