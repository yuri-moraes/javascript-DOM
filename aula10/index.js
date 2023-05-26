function useDarkTheme () {
    document.body.style.color = '#f1f5f9'
    document.body.style.backgroundColor = '#212529'
    document.body.style.transition = 'all 0.5s ease'
}

function useLighTheme () {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor = '#f1f5f9'
  document.body.style.transition = 'all 0.5s ease'
}

function switchTheme () {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

document.getElementById('darkBtn').addEventListener('click', useDarkTheme)
document.getElementById('lightBtn').addEventListener('click', useLighTheme)
document.getElementById('switchBtn').addEventListener('click', switchTheme)