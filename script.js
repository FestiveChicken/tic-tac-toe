const gameboard = (() => {
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
    gameboardSquare.style.border = 'solid'
    gameboardSquare.style.borderColor = 'black'
    gameboardSquare.style.width = '50px'
    gameboardSquare.style.height = '50px'
    return gameboardHolder().appendChild(gameboardSquare)
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

  return {
    createBoard
  }
})()



const player = () => {
  const squares = querySelectorAll('.square')

  const getID = () => {
    squares.forEach(square => {
      square.addEventListener('click', () => {
      console.log(square.id) })
    })
    console.log(getID)
    console.log('fuck me')
}
return {
  getID
}
}

const gameFlow = () => {
}

gameboard.createBoard()

const squares = document.querySelectorAll('.square')


const wtf = squares.forEach(square => {
    square.addEventListener('click', () => {
    return square.id
    })
  })

  console.log(wtf)
  