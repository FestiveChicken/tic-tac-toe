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
      gameboardSquare.style.backgroundColor = 'green'
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

  const changeArray = () => {
    while (numberOfSquares() != 0) {
      const square = document.querySelector('.square')
      gameboardHolder().removeChild(square)
      j = 0
    }
    return
  }

  const clearBoard = () => {
    while (numberOfSquares() != 0) {
      const square = document.querySelector('.square')
      gameboardHolder().removeChild(square)
      j = 0
      gameboardArray = new Array(9)
    }
    return
  }

  createBoard()

  return {
    createBoard, gameboardArray, changeArray, clearBoard
  }
})()



const player = (moveNumber) => {
  const move = () => moveNumber

return {
  move
  }
}

const winOrTie = (() => {
  const rowOne = gameboardArray[0] + gameboardArray[1] + gameboardArray[2]
  const winner = () => {
  if (rowOne == ['x','x','x']) {
    console.log('player one is winner')
    gameboard.clearBoard()
    gameboard.createBoard()
  }
  if (gameboardArray[0] == 'o' && gameboardArray[1] == 'o' && gameboardArray[2] == 'o') {
    console.log('player two is winner')
    gameboard.clearBoard()
    gameboard.createBoard()
  }
  else return
  }
  return {
    winner, rowOne
  }
})()


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

  document.addEventListener('click',getSquareID)



  const turn = () => {
    if (gameboardArray[squareID] == null) {
      if (playerOne.move() == playerTwo.move()) {
        gameboard.changeArray()
        gameboardArray[squareID] = 'x'
        gameboard.createBoard()
        playerOne = player(playerOne.move() + 1)
        winOrTie.winner()
        rows
      }
      else {
        gameboard.changeArray()
        gameboardArray[squareID] = 'o'
        gameboard.createBoard()
        playerTwo = player(playerTwo.move() + 1)
        winOrTie.winner()
      }
  }
  else {
    return  
  }

  }
  return
})()

const rows = (() => {
  let rowOne = gameboardArray[0] + gameboardArray[1] + gameboardArray[2]
  return rowOne
})


let playerOne = player(1)
let playerTwo = player(1)