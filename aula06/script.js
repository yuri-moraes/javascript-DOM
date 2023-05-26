function register(element) {
  const username = element.children.username.value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if (password !== passwordConfirmation) {
    alert('Senha de confirmação não conferem.')
  } else {
    alert(`Usuário ${username} registrado com sucesso.`)
    console.log(username, password, passwordConfirmation)
  }
}