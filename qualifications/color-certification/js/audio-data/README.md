# Quiz sound data

The files in this directory are base64 chunks of the supplied correct/incorrect MP3 effect sounds. `../quiz-sounds.js` concatenates the chunks into browser-playable `data:audio/mpeg` URLs. The test suite verifies byte length and SHA-256 against the supplied files.
