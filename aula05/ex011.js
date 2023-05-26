function scalePlayer() {
  const playerPosition = document.getElementById('player-position').value
  const playerName = document.getElementById('player-name').value
  const playerNumber = document.getElementById('player-number').value

  const confirmation = confirm(`
  Do you want to scale ${playerPosition} - ${playerName} nº ${playerNumber} ?
  `)

  if (confirmation) {
    const playerList = document.getElementById('player-list')
    const playerItem = document.createElement('li')
    playerItem.id = 'player-' + playerNumber
    playerItem.innerText = `${playerPosition} - ${playerName} nº${playerNumber}`
    playerList.appendChild(playerItem)

    document.getElementById('player-position').value = ''
    document.getElementById('player-name').value = ''
    document.getElementById('player-number').value = ''
  }
}

function removePlayer() {
  const number = document.getElementById('number-to-remove').value
  const playerToRemove = document.getElementById('player-' + number)

  const confirmation = confirm(`
  Do you want to remove ${playerToRemove.innerText} ?
  `)

  if (confirmation) {
    document.getElementById('player-list').removeChild(playerToRemove)
    document.getElementById('number-to-remove').value = ''
  }
}