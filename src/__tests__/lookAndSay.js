import { lookAndSay, lookAndSayGenerator } from '../lookAndSay.js'

describe('lookAndSay', () => {
  it('should compute proper next element', () => {
    expect(lookAndSay(1)).toBe('11')
    expect(lookAndSay(11)).toBe('21')
    expect(lookAndSay(21)).toBe('1211')
    expect(lookAndSay(1211)).toBe('111221')
  })

  it('should not accept number lesser than one', () => {
    expect(() => lookAndSay(0)).toThrow()
    expect(() => lookAndSay(-1)).toThrow()
  })
})

describe('lookAndSayGenerator', () => {
  it('should generate properly start of the sequence', () => {
    const sequenceStart = [
      '11',
      '21',
      '1211',
      '111221',
      '312211',
      '13112221',
      '1113213211',
      '31131211131221',
      '13211311123113112211',
      '11131221133112132113212221',
      '3113112221232112111312211312113211',
      '1321132132111213122112311311222113111221131221',
      '11131221131211131231121113112221121321132132211331222113112211',
      '311311222113111231131112132112311321322112111312211312111322212311322113212221',
    ]
    const generator = lookAndSayGenerator(1)

    for (const n of sequenceStart) {
      const res = generator.next().value
      expect(res).toBe(n)
    }
  })
})
