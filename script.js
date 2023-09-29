const gameboard = (() => {

  //selects gameboardholder div in html
  const gameboardHolder = () => {
    return document.getElementById('gameboardHolder')
  }
  const numberOfSquares = () => {
    return document.querySelectorAll('.square').length
  }

  //creates board
  const createSquare = () => {
    const gameboardSquare = document.createElement('div')
    gameboardSquare.classList.add('square');
    gameboardSquare.style.backgroundColor = 'black'
    gameboardSquare.style.padding = '50px'
    return gameboardHolder().appendChild(gameboardSquare)
  }

  const createBoard = () => {
      while (numberOfSquares < 9) {
        createSquare()
      return createSquare ()
      }
      }

  return {
    createSquare, createBoard
  }
})()

const createPlayer = () => {
    const playerOne = ''
    const playerTwo = ''
}

const gameFlow = () => {
}


