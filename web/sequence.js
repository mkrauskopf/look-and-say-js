import { Actions } from '/web/shared.js'
import { lookAndSayGenerator } from 'lookAndSay'

const SEQUENCE_LENGTH = 10

let stopped = false

const getRunnerSwitchElement = () => document.getElementById('runner-switch')

function setRunnerSwitchText() {
  getRunnerSwitchElement().innerHTML = `${stopped ? 'Start' : 'Stop'} sequence generation`
}

function startSequenceWorker() {
  setRunnerSwitchText()
  const sequenceWorker = new Worker('web/sequenceWorker.js', { type: 'module' })
  sequenceWorker.onerror = (e) => console.error('Error in the sequence worker:', e)

  const numbersLengthsEl = document.getElementById('numbers-lengths')
  sequenceWorker.onmessage = (e) => {
    const numberEl = document.createElement('code')
    numberEl.textContent = `${e.data} `
    numbersLengthsEl.appendChild(numberEl)
  }

  function activateRunnerSwitch() {
    const runnerSwitchButton = getRunnerSwitchElement()
    runnerSwitchButton.addEventListener('click', (e) => {
      sequenceWorker.postMessage(stopped ? Actions.Start : Actions.Stop)
      stopped = !stopped
      setRunnerSwitchText()
    })
  }

  activateRunnerSwitch()
}

function fillSequenceElement() {
  const sequenceEl = document.getElementById('sequence')
  const generator = lookAndSayGenerator(1)

  for (let i = 0; i < SEQUENCE_LENGTH; i++) {
    const numberLi = document.createElement('li')
    const value = generator.next().value
    numberLi.textContent = `${value} (${value.length})`
    sequenceEl.appendChild(numberLi)
  }
}

startSequenceWorker()
fillSequenceElement()
