import { WINNER_COMBOS } from '../constants'

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[b] === boardToCheck[c] &&
      boardToCheck[a] !== null
    ) {
      return boardToCheck[a]
    }
  }
  return
}

export const getRandomPosition = (board) => {
  let index = Math.floor(Math.random() * board.length)
  while (board[index] !== null && board.includes(null)) {
    index = Math.floor(Math.random() * board.length)
  }
  return index
}
