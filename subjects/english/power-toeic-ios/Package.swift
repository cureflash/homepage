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
            path: "Sources/PowerTOEIC",
            exclude: [
                "ARCHITECTURE.md",
                "Core/README.md",
                "Models/README.md",
                "Data/README.md",
                "Persistence/README.md",
                "Resources/README.md",
                "Views/Home/README.md",
                "Views/Quiz/README.md",
                "Views/Workout/README.md",
                "Views/Result/README.md",
                "Views/Weakness/README.md",
                "Views/Character/README.md"
            ],
            resources: [
                .process("Resources/Audio"),
                .process("Resources/Character")
            ]
        ),
        .testTarget(
            name: "PowerTOEICTests",
            dependencies: ["PowerTOEIC"],
            path: "Tests/PowerTOEICTests"
        )
    ]
)
