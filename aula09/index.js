function createLabel(text = 'text', htmlFor) {
  const label = document.createElement('label')
  label.innerText = text
  label.htmlFor = htmlFor
  return label
}

function createInput(id, name, value, type = "text", placeholder = '') {
  const input = document.createElement('input')
  input.id = id
  input.name = name
  input.placeholder = placeholder
  input.value = value
  input.type = type
  return input
}

const devForm = document.querySelector('#devForm')
const addTechBtn = document.querySelector('#addTechBtn')
const developers = []
let rowInput = 0

addTechBtn.addEventListener('click', function(ev) {
  ev.preventDefault()
  
  const devInput = document.querySelector('#devInput')
  const newRow = document.createElement('li')
  const rowIndex = rowInput
  rowInput++
  newRow.id = 'rowInput-' + rowIndex
  newRow.className = 'rowInput'

  const techNameLabel = createLabel('Name: ', 'techName-' + rowIndex)
  const techNameInput = createInput('techName-' + rowIndex, 'techName', null)

  const techExpLabel = createLabel('Experience: ')
  const id1 = 'techExp-' + rowIndex + '.1'
  const techExpInput1 = createInput(id1, 'techExp-' + rowIndex, '0-2 years', 'radio','')
  const techExpLabel1 = createLabel('0-2 years |', id1)
  const id2 = 'techExp-' + rowIndex + '.2'
  const techExpInput2 = createInput(id2, 'techExp-' + rowIndex, '3-4 years', 'radio','')
  const techExpLabel2 = createLabel('3-4 years |', id2)
  const id3 = 'techExp-' + rowIndex + '.3'
  const techExpInput3 = createInput(id3, 'techExp-' + rowIndex, '5+ years', 'radio','')
  const techExpLabel3 = createLabel('5+ years ', id3)

  const removeRowBtn = document.createElement('button')
  removeRowBtn.type = 'button'
  removeRowBtn.innerText = 'Remove'
  removeRowBtn.addEventListener('click', function () {
    devInput.removeChild(newRow)
  })
 
  newRow.append(techNameLabel, techNameInput, techExpLabel, techExpInput1, techExpLabel1, techExpInput2, techExpLabel2, techExpInput3, techExpLabel3, removeRowBtn)
  devInput.appendChild(newRow)
})

devForm.addEventListener('submit', function(ev) {
  ev.preventDefault()

  const fullnameInput = document.querySelector('#fullname')
  const techInputs = document.querySelectorAll('.rowInput')
  let technologies = []

  techInputs.forEach(function(row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techName"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({ name: techName, experience: techExp })
  })
  
  const devInfo = { devName: fullnameInput.value, technologies: technologies }
  developers.push(devInfo)
  alert('Register sucessed')

  fullnameInput.value = '';
  techInputs.forEach(function(row) {
    row.remove()
  })
  
  console.log(developers)
})
