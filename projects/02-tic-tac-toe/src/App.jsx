import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS, WINNER } from './constants.js'
import { checkWinner, getRandomPosition } from './logic/board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { ButtonRestart } from './components/BurronRestartGame.jsx'
import {
  getInitialBoard,
  getInitialTurn,
  getInitialScore,
  removeGameToStorage,
  saveGameToStorage,
  saveGameScoreToStorage,
  removeGameScoreToStorage
} from './logic/storage/index.js'

function App() {
  const initalBoard = Array(9).fill(null)
  const initalScore = [0, 0]

  const [board, setBoard] = useState(getInitialBoard(initalBoard))
  const [turn, setTurn] = useState(getInitialTurn(TURNS.X))
  const [winner, setWinner] = useState(WINNER.EMPTY)
  const [score, setScore] = useState(getInitialScore(initalScore))
  const [modeOnePlayer, setModeOnePlayer] = useState(true)

  const resetGame = () => {
    setBoard(initalBoard)
    setTurn(TURNS.X)
    setWinner(WINNER.EMPTY)
    removeGameToStorage()
  }

  const resetScore = () => {
    setScore(initalScore)
    removeGameScoreToStorage()
  }

  const updateBoard = (index) => {
    if (board[index] || winner) return
    const newBoard = [...board]
    newBoard[index] = turn
    setBoard(newBoard)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X
    setTurn(newTurn)

    saveGameToStorage(newBoard, newTurn)

    const newWinner = checkWinner(newBoard)
    if (newWinner) {
      setWinner(newWinner)
      confetti()

      let newScore = [...score]
      if (newWinner === WINNER.X) {
        newScore[0] += 1
        setScore(newScore)
        saveGameScoreToStorage(newScore)
      } else if (newWinner === WINNER.O) {
        newScore[1] += 1
        setScore(newScore)
        saveGameScoreToStorage(newScore)
      }
      removeGameToStorage()
    } else if (!newBoard.includes(null)) setWinner(WINNER.TIE)
  }

  if (turn === TURNS.O && modeOnePlayer) {
    if (board.includes(null)) {
      const index = getRandomPosition(board)
      updateBoard(index)
    }
  }
  return (
    <main className='board'>
      <h1>Tic Tac Toe</h1>
      <section className='game'>
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          )
        })}
      </section>
      <section className='turn'>
        <Square className='X' isSelected={turn === TURNS.X}>
          {TURNS.X}
        </Square>
        <Square className='O' isSelected={turn === TURNS.O}>
          {TURNS.O}
        </Square>
      </section>
      <section>
        {score[0]} &nbsp;|&nbsp; {score[1]}
      </section>
      <WinnerModal winner={winner} winnerList={WINNER} />
      <section className='btn-container'>
        <ButtonRestart functionAction={resetGame}>Nueva Partida</ButtonRestart>
        <ButtonRestart functionAction={() => setModeOnePlayer((prev) => !prev)}>
          {modeOnePlayer ? 'Two players' : 'One player'}
        </ButtonRestart>
        <ButtonRestart functionAction={resetScore}>
          Reiniciar Marcador
        </ButtonRestart>
      </section>
    </main>
  )
}

export default App
