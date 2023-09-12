import { lookAndSayGenerator } from '/src/lookAndSay.js'

const SEQUENCE_LENGTH = 70

const generator = lookAndSayGenerator(1)

for (let i = 0; i < SEQUENCE_LENGTH; i++) {
  postMessage(generator.next().value.length)
}
