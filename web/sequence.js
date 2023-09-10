import { lookAndSayGenerator } from 'lookAndSay'

const SEQUENCE_LENGTH = 10

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

fillSequenceElement()
