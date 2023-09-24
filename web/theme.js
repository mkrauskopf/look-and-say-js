const themeSwitcher = document.getElementById('theme-switcher')

const currentTheme = () => document.documentElement.getAttribute('data-theme')

function setThemeSwitcherText() {
  themeSwitcher.textContent = `${currentTheme() === 'light' ? 'Dark' : 'Light'} Mode`
}

const storedTheme =
  localStorage.getItem('theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')

if (storedTheme) {
  document.documentElement.setAttribute('data-theme', storedTheme)
}

themeSwitcher.addEventListener('click', () => {
  let targetTheme = 'light'

  if (currentTheme() === 'light') {
    targetTheme = 'dark'
  }

  document.documentElement.setAttribute('data-theme', targetTheme)
  localStorage.setItem('theme', targetTheme)
  setThemeSwitcherText()
})

setThemeSwitcherText()
