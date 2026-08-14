# Plarail iOS CI bootstrap

This directory builds the original Swift sources from the iPad Swift Playgrounds project as an unsigned iOS IPA on a GitHub-hosted macOS runner.

The first bootstrap build intentionally excludes the large image/audio resources. Its purpose is to verify that the Swift app itself can compile and launch on iPadOS 27 outside the Swift Playgrounds runtime.

Build output: `PlarailController-unsigned.ipa` (GitHub Actions artifact). It is intentionally unsigned so that Sideloadly on Windows can sign it with the user's Apple ID before installation.
