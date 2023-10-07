const gameboard = (() => {
  j = 0
  gameboardArray = new Array(9)
  
  //selects gameboardholder div in html
  const gameboardHolder = () => {
    return document.getElementById('gameboardHolder')
  }

  //counts the number of squares
  const numberOfSquares = () => {
    return document.querySelectorAll('.square').length
  }

  //creates square
  const createSquare = () => {
    const gameboardSquare = document.createElement('div')
    gameboardSquare.setAttribute('class', 'square');
    if (gameboardArray[j] == 'x') {
      gameboardSquare.style.background = "url('images/cross.svg')"
      gameboardSquare.style.backgroundSize = 'contain'
      gameboardSquare.style.border = 'solid'
      gameboardSquare.style.borderWidth = '2px'
      gameboardSquare.style.borderColor = 'black'
      gameboardSquare.style.width = 'auto'
      gameboardSquare.style.height = 'auto'
      j++
      return gameboardHolder().appendChild(gameboardSquare)
    }
    else if (gameboardArray[j] == 'o') {
      gameboardSquare.style.background = "url('images/circle.svg')"
      gameboardSquare.style.backgroundSize = 'contain'
      gameboardSquare.style.backgroundColor = 'white'
      gameboardSquare.style.border = 'solid'
      gameboardSquare.style.borderWidth = '2px'
      gameboardSquare.style.borderColor = 'black'
      gameboardSquare.style.width = 'auto'
      gameboardSquare.style.height = 'auto'
      j++
      return gameboardHolder().appendChild(gameboardSquare)}
    else {
      gameboardSquare.style.backgroundColor = '#c56ceb'
      gameboardSquare.style.border = 'solid'
      gameboardSquare.style.borderWidth = '2px'
      gameboardSquare.style.borderColor = 'black'
      gameboardSquare.style.width = 'auto'
      gameboardSquare.style.height = 'auto'
      j++
      return gameboardHolder().appendChild(gameboardSquare)
    }
    }

  //creates board and assigns each square an id that will correlate to the array
  const createBoard = () => {
    i = 0
    while (numberOfSquares() < 9) {
      createSquare()
      const squares = document.querySelectorAll('.square')
      const lastSquare = squares[i]
      lastSquare.setAttribute('id', i)
      i++
      }
      return
    }

  //updates the board as the player clicks
  const updateBoard = () => {
    while (numberOfSquares() != 0) {
      const square = document.querySelector('.square')
      gameboardHolder().removeChild(square)
      j = 0
    }
    return
  }
  //clears the board
  const clearBoard = () => {
    while (numberOfSquares() != 0) {
      const square = document.querySelector('.square')
      gameboardHolder().removeChild(square)
      j = 0
      gameboardArray = new Array(9)
    }
    return
  }

  //creates initial board
  createBoard()

  return {
    createBoard,
    gameboardArray,
    updateBoard,
    clearBoard
  }
})()

//keeps track of players move numbers
const player = (moveNumber, name) => {
  const move = () => moveNumber

return {
  move, name
  }
}

const gameFlow = (() => {
  //initilizing variable
  let squareID = null
  
  //getting id of each square
  const getSquareID = (event) => {
    const gameboardHolder = document.getElementById('gameboardHolder')
    if(gameboardHolder.contains(event.target)) {
      const square = event.target
      squareID = square.id
      if (squareID == 'gameboardHolder') {
        return
      }
      turn()
    }
  }

  //listens for click on the board
  document.addEventListener('click',getSquareID)

  //determines who's turn it is
  const turn = () => {
    if (gameboardArray[squareID] == null) {
      if (playerOne.move() == playerTwo.move()) {
        gameboard.updateBoard()
        gameboardArray[squareID] = 'x'
        gameboard.createBoard()
        playerOne = player(playerOne.move() + 1)
        const {rows, columns, diagonals} = updateArrays()
        checkTie()
        if (checkTie() == false) {
          checkWin()
        }
        else if (checkTie() == true) {
          console.log('tie')
          gameboard.clearBoard()
          gameboard.createBoard()
        }
        return
      }
      else {
        gameboard.updateBoard()
        gameboardArray[squareID] = 'o'
        gameboard.createBoard()
        playerTwo = player(playerTwo.move() + 1)
        const {rows, columns, diagonals} = updateArrays()
        checkTie()
        if (checkTie() == false) {
          checkWin()
        }
        else if (checkTie() == true) {
          console.log('tie')
          gameboard.clearBoard()
          gameboard.createBoard()
        }
        return
      }
  }
  else {
    return  
  }

  }
  return
})()

const updateArrays = (() => {

  //updates rows, columns, and diagonals as the player plays
  rows = [
    [gameboardArray[0], gameboardArray[1], gameboardArray[2]],
    [gameboardArray[3], gameboardArray[4], gameboardArray[5]],
    [gameboardArray[6], gameboardArray[7], gameboardArray[8]]
  ]

  columns = [
    [gameboardArray[0], gameboardArray[3], gameboardArray[6]],
    [gameboardArray[1], gameboardArray[4], gameboardArray[7]],
    [gameboardArray[2], gameboardArray[5], gameboardArray[8]]
  ]

  diagonals = [
    [gameboardArray[0], gameboardArray[4], gameboardArray[8]],
    [gameboardArray[2], gameboardArray[4], gameboardArray[6]]
  ]
  return {
    rows,
    columns,
    diagonals
  }
})

//checks for wins or tie
const checkWin = (() => {
  //checks if player one won
  for (i = 0; i < 3; i++) {
    if (rows[i] == 'x,x,x' || columns[i] == 'x,x,x' || diagonals[i] == 'x,x,x') {
      console.log('p1 is winner')
      gameboard.clearBoard()
      gameboard.createBoard()
      return
    }
  }
  //checks if player two won
  for (i = 0; i < 3; i++) {
    if (rows[i] == 'o,o,o' || columns[i] == 'o,o,o' || diagonals[i] == 'o,o,o') {
      console.log('p2 is winner')
      gameboard.clearBoard()
      gameboard.createBoard()
      return
    }
  }

return {
}
})

//checks for tie
const checkTie = () => {
  for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
      if ( 'undefined' == typeof rows[i][j] || null === rows[i][j] ) {
        return false
      }
    }
    
  }
  return true
}

//init two players
const playerOneName = document.getElementById('p1Name').value
const playerTwoName = document.getElementById('p2Name').value
let playerOne = player(1, playerOneName)
let playerTwo = player(1, playerTwoName)

console.log(playerOneName)