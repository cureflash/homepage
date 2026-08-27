import Foundation

public struct PowerTOEICAppEnvironment {
    public let questionBank: any QuestionBankRepository
    public let appStore: VersionedNativeAppStore
    public let assetCatalog: AssetCatalog
    public let audioPlayer: any AudioCuePlaying

    public init(
        questionBank: any QuestionBankRepository,
        appStore: VersionedNativeAppStore = VersionedNativeAppStore(),
        assetCatalog: AssetCatalog = AssetCatalog(),
        audioPlayer: any AudioCuePlaying = SilentAudioCuePlayer()
    ) {
        self.questionBank = questionBank
        self.appStore = appStore
        self.assetCatalog = assetCatalog
        self.audioPlayer = audioPlayer
    }

    public func launchState() -> PersistenceEnvelope {
        appStore.load()
    }
}
