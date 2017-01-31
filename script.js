var adventureButton = document.getElementById('AB')

adventureButton.addEventListener('click', function () {
  var choice = window.prompt('Do you want to enter the cave? yes or no?')
  choice = choice || ''
  choice = choice.trim().toLowerCase()
  if (choice === 'yes') {
    choice = window.prompt('Adevnture!!!! You come to 3 tunnels. one, two, or three?')
    choice = choice || ''
    choice = choice.trim().toLowerCase()
    if (choice === 'two') {
      choice = window.prompt('You encounter a dragon! pick a number between 1 and 10!')
      choice = choice || ''
      if (isNaN(choice)) {
        window.alert('Fine don\'t enter a number the dragon eats you!')
      } else if ((choice > 10) || (choice < 0)) {
        window.alert('That number isn\'t between 10 and 0 the dragon eats you!')
      } else {
        var rando = Math.random()
        rando = rando * 10
        if (choice >= rando) {
          window.alert('You defeated the dragon and get all the treasure!')
        } else {
          window.alert('the dragon wins sorry.')
        }
      }
    } else if (choice === 'one') {
      window.alert('You found a magical sword!')
    } else {
      window.alert('You fell into a pit trap. Adventure OVER!!')
    }
  } else {
    window.alert('Fine no Adventure for you')
  }
})
