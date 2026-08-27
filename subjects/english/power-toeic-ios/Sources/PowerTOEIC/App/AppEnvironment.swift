import Foundation

public protocol AppClock: Sendable {
    func nowISOString() -> String
}

public struct SystemAppClock: AppClock {
    public init() {}

    public func nowISOString() -> String {
        let formatter = ISO8601DateFormatter()
        formatter.formatOptions = [.withInternetDateTime, .withFractionalSeconds]
        formatter.timeZone = TimeZone(secondsFromGMT: 0)
        return formatter.string(from: Date())
    }
}

public struct AppLaunchSnapshot: Equatable, Sendable {
    public let persistedState: PersistenceEnvelope
    public let reviewDueCount: Int

    public init(persistedState: PersistenceEnvelope, reviewDueCount: Int) {
        self.persistedState = persistedState
        self.reviewDueCount = reviewDueCount
    }
}

public struct PowerTOEICAppEnvironment {
    public let questionBank: any QuestionBankRepository
    public let appStore: VersionedNativeAppStore
    public let assetCatalog: AssetCatalog
    public let audioPlayer: any AudioCuePlaying
    public let clock: any AppClock

    public init(
        questionBank: any QuestionBankRepository,
        appStore: VersionedNativeAppStore = VersionedNativeAppStore(),
        assetCatalog: AssetCatalog = AssetCatalog(),
        audioPlayer: any AudioCuePlaying = BundleAudioCuePlayer(),
        clock: any AppClock = SystemAppClock()
    ) {
        self.questionBank = questionBank
        self.appStore = appStore
        self.assetCatalog = assetCatalog
        self.audioPlayer = audioPlayer
        self.clock = clock
    }

    public func launchSnapshot() -> AppLaunchSnapshot {
        let state = appStore.load()
        let dueCount = (try? ReviewScheduler.dueEntries(
            state.reviewEntries,
            now: clock.nowISOString()
        ).count) ?? 0
        return AppLaunchSnapshot(persistedState: state, reviewDueCount: dueCount)
    }
}
