const input = document.getElementById('input')

document.getElementById('value').addEventListener('click', function () {
  input.value = 'Olá mundo'

  console.log(input. value)
  console.log(input.getAttribute('value'))
})

document.querySelector('#type').addEventListener('click', () => {
  //input.type = input.type !== 'radio' ? 'radio' : 'text'
  input.setAttribute('type', 'radio')
})

document.querySelector('#placeholder').addEventListener('click', () => {
  input.placeholder = 'Type Something...'
})

document.querySelector('#disable').addEventListener('click', () => {
  input.setAttribute('disabled', !input.disabled)
})

document.querySelector('#data').addEventListener('click', () => {
  let data = input.dataset.somethingElse
  console.log(`The value of the variable 'data-something-else' is : ${data}`)
  data = 'Now it is other value'
  console.log(`Now the value is: ${input.getAttribute('data')}`)
})