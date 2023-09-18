import { lookAndSayGenerator } from '/src/lookAndSay.js'
import { Actions } from '/web/shared.js'

const generator = lookAndSayGenerator(1)

const state = {
  stopped: false,
}

onmessage = (e) => {
  if (e.data === Actions.Stop) {
    state.stopped = true
  } else if (e.data === Actions.Start) {
    state.stopped = false
    setTimeout(generateNextNumber, 0)
  } else {
    console.warn('Unknown message', e)
  }
}

function generateNextNumber() {
  postMessage(generator.next().value.length)
  if (!state.stopped) {
    setTimeout(generateNextNumber, 0)
  }
}

setTimeout(generateNextNumber, 0)
