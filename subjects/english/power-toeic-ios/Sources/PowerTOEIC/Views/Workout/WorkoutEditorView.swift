#if canImport(SwiftUI)
import SwiftUI

public struct WorkoutEditorView: View {
    public let repository: any QuestionBankRepository
    public let onStart: (WorkoutRecipe) -> Void
    private let skills: [Skill]
    private let categories: [QuestionCategory]
    @State private var draft: WorkoutDraft
    @State private var categoryID: String
    @State private var skillID = ""

    public init(recipe: WorkoutRecipe, repository: any QuestionBankRepository, onStart: @escaping (WorkoutRecipe) -> Void) {
        self.repository = repository
        self.onStart = onStart
        skills = (try? repository.skills()) ?? []
        categories = (try? repository.categories()) ?? []
        _draft = State(initialValue: WorkoutDraft(recipe: recipe))
        _categoryID = State(initialValue: categories.first?.id ?? "")
    }

    public var body: some View {
        Form {
            Section("問題数") {
                Stepper("合計 \(draft.totalCount)問", value: $draft.totalCount, in: 1...100)
                    .accessibilityIdentifier("workout.total")
                ScrollView(.horizontal) {
                    HStack {
                        ForEach(SessionPlanner.finiteSizes, id: \.self) { size in
                            Button("\(size)問") { try? draft.resize(to: size) }.buttonStyle(.bordered)
                        }
                    }
                }
                Toggle("無限反復", isOn: $draft.endless)
                    .accessibilityIdentifier("workout.endless")
                if draft.endless {
                    Text("選んだ範囲の問題を繰り返し出題します。")
                } else if let availableCount, availableCount < draft.totalCount {
                    Text("選んだ範囲では最大\(availableCount)問を出題します。")
                        .foregroundStyle(.secondary)
                }
            }
            Section("分野ごとの問題数") {
                ForEach($draft.allocations) { $allocation in
                    VStack(alignment: .leading, spacing: 8) {
                        Text(label(allocation.skillId))
                        HStack {
                            Stepper("\(allocation.count)問", value: $allocation.count, in: 1...100)
                            Button(role: .destructive) {
                                draft.allocations.removeAll { $0.skillId == allocation.skillId }
                            } label: { Image(systemName: "trash") }
                            .accessibilityLabel("\(label(allocation.skillId))を削除")
                        }
                    }
                }
            }
            if !addableSkills.isEmpty {
                Section("分野を追加") {
                    Picker("大分類", selection: Binding(get: { activeCategoryID }, set: { categoryID = $0; skillID = "" })) {
                        ForEach(addableCategories) { category in Text(category.label).tag(category.id) }
                    }
                    Picker("小分類", selection: Binding(get: { activeSkillID }, set: { skillID = $0 })) {
                        ForEach(addableSkills.filter { $0.categoryId == activeCategoryID }, id: \.id) { skill in
                            Text(skill.label).tag(skill.id)
                        }
                    }
                    Button("追加") {
                        draft.allocations.append(EditableSkillCount(skillId: activeSkillID, count: 1))
                        skillID = ""
                    }
                    .disabled(activeSkillID.isEmpty)
                }
            }
            Section {
                if let validationMessage { Text(validationMessage).foregroundStyle(.secondary) }
                Button("この内容で開始") { if let recipe = try? draft.recipe() { onStart(recipe) } }
                    .disabled(validationMessage != nil || availableCount == 0)
                    .accessibilityIdentifier("workout.start")
            }
        }
        .navigationTitle("トレーニングを調整")
    }

    private var addableSkills: [Skill] {
        skills.filter { skill in !draft.allocations.contains { $0.skillId == skill.id } }
    }
    private var addableCategories: [QuestionCategory] {
        categories.filter { category in addableSkills.contains { $0.categoryId == category.id } }
    }
    private var activeCategoryID: String {
        addableCategories.contains { $0.id == categoryID } ? categoryID : addableCategories.first?.id ?? ""
    }
    private var activeSkillID: String {
        let eligible = addableSkills.filter { $0.categoryId == activeCategoryID }
        return eligible.contains { $0.id == skillID } ? skillID : eligible.first?.id ?? ""
    }
    private func label(_ id: String) -> String { skills.first { $0.id == id }?.label ?? id }
    private var availableCount: Int? {
        guard let recipe = try? draft.recipe() else { return nil }
        return try? WorkoutBuilder.selectQuestionIDs(repository: repository, recipe: recipe).count
    }
    private var validationMessage: String? {
        do { _ = try draft.recipe(); return nil }
        catch WorkoutBuilderError.allocationCountsExceedTotal { return "分野ごとの問題数が合計を超えています。" }
        catch WorkoutBuilderError.weaknessRequiresSkills { return "分野を1つ以上追加してください。" }
        catch { return "問題数と分野を確認してください。" }
    }
}
#endif
