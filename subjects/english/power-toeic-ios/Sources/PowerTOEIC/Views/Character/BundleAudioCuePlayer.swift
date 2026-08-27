import AVFoundation
import Foundation

public final class BundleAudioCuePlayer: AudioCuePlaying, @unchecked Sendable {
    private let catalog: AssetCatalog
    private let bundle: Bundle
    private let lock = NSLock()
    private var player: AVAudioPlayer?

    public init(
        catalog: AssetCatalog = AssetCatalog(),
        bundle: Bundle = .main
    ) {
        self.catalog = catalog
        self.bundle = bundle
    }

    public func play(_ id: SemanticAssetID) {
        guard
            let resourceName = catalog.audio(id)?.resourceName,
            let url = resourceURL(named: resourceName)
        else {
            return
        }

        do {
            let next = try AVAudioPlayer(contentsOf: url)
            next.prepareToPlay()

            lock.lock()
            defer { lock.unlock() }
            player?.stop()
            player = next
            _ = next.play()
        } catch {
            // Audio is presentation-only. A missing/corrupt cue must never block quiz progression.
        }
    }

    private func resourceURL(named resourceName: String) -> URL? {
        let fileURL = URL(fileURLWithPath: resourceName)
        let ext = fileURL.pathExtension
        let stem = fileURL.deletingPathExtension().lastPathComponent

        if ext.isEmpty {
            return bundle.url(forResource: stem, withExtension: nil)
        }
        return bundle.url(forResource: stem, withExtension: ext)
    }
}
