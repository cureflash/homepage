// swift-tools-version: 5.10
import PackageDescription

let package = Package(
    name: "PowerTOEIC",
    defaultLocalization: "ja",
    platforms: [
        .iOS(.v17),
        .macOS(.v14)
    ],
    products: [
        .library(name: "PowerTOEIC", targets: ["PowerTOEIC"])
    ],
    targets: [
        .target(
            name: "PowerTOEIC",
            path: "Sources/PowerTOEIC"
        ),
        .testTarget(
            name: "PowerTOEICTests",
            dependencies: ["PowerTOEIC"],
            path: "Tests/PowerTOEICTests"
        )
    ]
)
