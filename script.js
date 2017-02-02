var adventureButton = document.getElementById('AB')

adventureButton.addEventListener('click', function () {
  var enterCave = window.prompt('Do you want to enter the cave? yes or no?')
  enterCave = enterCave || ''
  enterCave = enterCave.trim().toLowerCase()
  var areYouSure = window.confirm('Are you sure?')
  if (areYouSure === true) {
    if (enterCave === 'yes') {
      var tunnelChoice = window.prompt('Adevnture!!!! You come to 3 tunnels. one, two, or three?')
      tunnelChoice = tunnelChoice || ''
      tunnelChoice = tunnelChoice.trim().toLowerCase()
      if (tunnelChoice === 'two') {
        var numberChoice = window.prompt('You encounter a dragon! pick a number between 1 and 10!')
        numberChoice = numberChoice || ''
        if (isNaN(numberChoice)) {
          window.alert('Fine don\'t enter a number the dragon eats you!')
        } else if (numberChoice > 10 || numberChoice < 1) {
          window.alert('That number isn\'t between 1 and 10 the dragon eats you!')
        } else {
          var rando = Math.floor(Math.random() * 10) + 1
          if (numberChoice >= rando) {
            window.alert('You defeated the dragon and get all the treasure!')
          } else {
            window.alert('the dragon wins sorry.')
          }
        }
      } else if (tunnelChoice === 'one') {
        window.alert('You found a magical sword!')
      } else {
        window.alert('You fell into a pit trap. Adventure OVER!!')
      }
    } else {
      window.alert('Fine no Adventure for you!')
    }
  } else {
    if (enterCave === 'yes') {
      window.alert('Fine no Adventure for you')
    } else {
      window.alert('To late no adventure for you')
    }
  }
})
