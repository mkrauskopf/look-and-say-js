import { lookAndSayGenerator } from 'lookAndSay'

const SEQUENCE_LENGTH = 10

function startSequenceWorker() {
  const sequenceWorker = new Worker('src/sequenceWorker.js', { type: 'module' })
  sequenceWorker.onerror = (e) => console.error('Error in the sequence worker:', e)

  const numbersLengthsEl = document.getElementById('numbers-lengths')
  sequenceWorker.onmessage = (e) => {
    const numberEl = document.createElement('code')
    numberEl.textContent = `${e.data} `
    numbersLengthsEl.appendChild(numberEl)
  }
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
