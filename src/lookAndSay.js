function lookAndSay(n) {
  if (n < 1) {
    throw new Error('Sequence is valid only for numbers greater than zero.')
  }

  const s = String(n)
  let digit = s[0]
  let count = 1
  let result = ''

  for (let i = 1; i < s.length; i++) {
    if (digit === s[i]) {
      count++
    } else {
      result += `${count}${digit}`
      digit = s[i]
      count = 1
    }
  }

  return `${result}${count}${digit}`
}

function* lookAndSayGenerator(n) {
  let current = n
  while (true) {
    current = lookAndSay(current)
    yield current
  }
}

export { lookAndSay, lookAndSayGenerator }
