import Foundation

#if canImport(AVFoundation)
import AVFoundation

/// Native, non-blocking audio adapter for semantic quiz cues.
///
/// Missing/invalid resources are intentionally ignored: audio presentation must
/// never own quiz progression or correctness state.
public final class BundleAudioCuePlayer: AudioCuePlaying, @unchecked Sendable {
    private let catalog: AssetCatalog
    private let bundle: Bundle
    private let lock = NSLock()
    private var player: AVAudioPlayer?

    public init(
        catalog: AssetCatalog = AssetCatalog(),
        bundle: Bundle? = nil
    ) {
        self.catalog = catalog
        self.bundle = bundle ?? .module
    }

    public func play(_ id: SemanticAssetID) {
        guard let record = catalog.audio(id),
              let resourceName = record.resourceName,
              let url = resourceURL(named: resourceName)
        else {
            return
        }

        do {
            let nextPlayer = try AVAudioPlayer(contentsOf: url)
            nextPlayer.prepareToPlay()

            lock.lock()
            player?.stop()
            player = nextPlayer
            lock.unlock()

            _ = nextPlayer.play()
        } catch {
            // Presentation failure is deliberately fire-and-forget.
        }
    }

    public func resourceURL(for id: SemanticAssetID) -> URL? {
        guard let record = catalog.audio(id),
              let resourceName = record.resourceName
        else {
            return nil
        }
        return resourceURL(named: resourceName)
    }

    private func resourceURL(named resourceName: String) -> URL? {
        let nsName = resourceName as NSString
        let extensionName = nsName.pathExtension
        let baseName = nsName.deletingPathExtension

        if !extensionName.isEmpty,
           let url = bundle.url(forResource: baseName, withExtension: extensionName, subdirectory: "Audio") {
            return url
        }

        return bundle.url(forResource: resourceName, withExtension: nil, subdirectory: "Audio")
            ?? bundle.url(forResource: resourceName, withExtension: nil)
    }
}
#else
public struct BundleAudioCuePlayer: AudioCuePlaying {
    public init(catalog: AssetCatalog = AssetCatalog(), bundle: Bundle? = nil) {}
    public func play(_ id: SemanticAssetID) {}
    public func resourceURL(for id: SemanticAssetID) -> URL? { nil }
}
#endif
