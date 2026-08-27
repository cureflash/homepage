import SwiftUI

public struct PowerTOEICAppRoot: View {
    private let environment: PowerTOEICAppEnvironment
    private let onSelectMode: (WorkoutMode) -> Void

    @State private var snapshot: AppLaunchSnapshot

    public init(
        environment: PowerTOEICAppEnvironment,
        onSelectMode: @escaping (WorkoutMode) -> Void = { _ in }
    ) {
        self.environment = environment
        self.onSelectMode = onSelectMode
        _snapshot = State(initialValue: environment.launchSnapshot())
    }

    public init() {
        self.init(
            environment: PowerTOEICAppEnvironment(
                questionBank: EmptyQuestionBankRepository()
            )
        )
    }

    public var body: some View {
        NavigationStack {
            HomeView(
                progression: snapshot.persistedState.progression,
                reviewDueCount: snapshot.reviewDueCount,
                onSelect: onSelectMode
            )
            .navigationTitle("Power TOEIC")
        }
        .onAppear {
            snapshot = environment.launchSnapshot()
        }
    }
}
