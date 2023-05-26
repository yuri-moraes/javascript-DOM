function register (ev) {
  const sectionElement = ev.currentTarget.parentNode
  const username = sectionElement.children.username.value
  const password = sectionElement.children.password.value
  const passwordConfirmation = sectionElement.children.passwordConfirmation.value

  if (password === passwordConfirmation) {
    alert(`Usuário ${username} registrado com sucesso!`)
  } else{
    alert('Senhas não conferem!')
  }
}

function removeEvent() {

  button.removeEventListener('click', register)
  alert('Evento removido')
}

const button = document.getElementById('register-button')

button.addEventListener('click', register)

button.addEventListener('mouseover', function(ev) {
  console.log(ev)
})