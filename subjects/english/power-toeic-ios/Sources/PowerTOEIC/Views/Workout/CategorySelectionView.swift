#if canImport(SwiftUI)
import SwiftUI

public struct CategorySelectionView: View {
    public let mode: WorkoutMode
    public let repository: any QuestionBankRepository
    public let onEdit: (WorkoutRecipe) -> Void
    private let categories: [QuestionCategory]
    private let skills: [Skill]
    @State private var selectedCategories: Set<String>
    @State private var activeCategory: String?
    @State private var message: String?

    public init(mode: WorkoutMode, repository: any QuestionBankRepository, onEdit: @escaping (WorkoutRecipe) -> Void) {
        self.mode = mode
        self.repository = repository
        self.onEdit = onEdit
        categories = (try? repository.categories()) ?? []
        skills = (try? repository.skills()) ?? []
        _selectedCategories = State(initialValue: Set(categories.map(\.id)))
    }

    public var body: some View {
        List {
            if mode == .test {
                Section("テストの大分類を選ぶ") {
                    ForEach(categories) { category in
                        Toggle(category.label, isOn: Binding(
                            get: { selectedCategories.contains(category.id) },
                            set: { if $0 { selectedCategories.insert(category.id) } else { selectedCategories.remove(category.id) } }
                        ))
                    }
                    Button("この範囲で内容を調整") { editCategories(selectedCategories, mode: .test) }
                        .disabled(selectedCategories.isEmpty)
                        .accessibilityIdentifier("categories.editTest")
                }
            } else if let activeCategory {
                Section(categories.first { $0.id == activeCategory }?.label ?? "分野") {
                    Button("この大分類をまとめて特訓") { editCategories([activeCategory], mode: mode) }
                    Button("この大分類でテスト") { editCategories([activeCategory], mode: .test) }
                    ForEach(skills.filter { $0.categoryId == activeCategory }, id: \.id) { skill in
                        Button(skill.label) {
                            do { onEdit(try WorkoutBuilder.presetRecipe(mode, skillId: skill.id)) }
                            catch { message = "この分野を選べません。" }
                        }
                    }
                    Button("大分類に戻る") { self.activeCategory = nil }
                }
            } else {
                Section("大分類を選ぶ") {
                    ForEach(categories) { category in
                        Button(category.label) { activeCategory = category.id }
                            .accessibilityIdentifier("categories.\(category.id)")
                    }
                }
            }
            if let message { Text(message).foregroundStyle(.secondary) }
            if categories.isEmpty { Text("出題できる分野がありません。") }
        }
        .navigationTitle(mode == .test ? "テスト範囲" : "分野を選ぶ")
    }

    private func editCategories(_ ids: Set<String>, mode: WorkoutMode) {
        do {
            onEdit(try WorkoutBuilder.categoryRecipe(repository: repository, categoryIDs: ids, mode: mode,
                                                    totalCount: mode == .power ? 100 : 30))
        } catch { message = "分野を1つ以上選んでください。" }
    }
}
#endif
