export const getInitialBoard = (initalBoard) => {
  const boardFromStorage = window.localStorage.getItem('board')
  return boardFromStorage ? JSON.parse(boardFromStorage) : initalBoard
}
export const getInitialTurn = (turn) => {
  const turnFromStorage = window.localStorage.getItem('turn')
  return turnFromStorage ?? turn
}

export const getInitialScore = (score) => {
  const scoreFromStorage = window.localStorage.getItem('score')
  return scoreFromStorage ? JSON.parse(scoreFromStorage) : score
}

export const saveGameToStorage = (newBoard, newTurn) => {
  window.localStorage.setItem('board', JSON.stringify(newBoard))
  window.localStorage.setItem('turn', newTurn)
}

export const removeGameToStorage = () => {
  window.localStorage.removeItem('board')
  window.localStorage.removeItem('turn')
}

export const saveGameScoreToStorage = (score) => {
  window.localStorage.setItem('score', JSON.stringify(score))
}

export const removeGameScoreToStorage = () => {
  window.localStorage.removeItem('score')
}
