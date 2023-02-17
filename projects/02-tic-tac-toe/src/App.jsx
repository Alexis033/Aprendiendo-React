import { useState } from 'react'
import confetti from 'canvas-confetti'
import { Square } from './components/Square.jsx'
import { TURNS, WINNER } from './constants.js'
import { checkWinner } from './logic/board'
import { WinnerModal } from './components/WinnerModal.jsx'
import { ButtonRestart } from './components/BurronRestartGame.jsx'
import {
  getInitialBoard,
  getInitialTurn,
  removeGameToStorage,
  saveGameToStorage
} from './logic/storage/index.js'

function App() {
  const initalBoard = Array(9).fill(null)

  const [board, setBoard] = useState(getInitialBoard(initalBoard))
  const [turn, setTurn] = useState(getInitialTurn(TURNS.X))
  const [winner, setWinner] = useState(WINNER.EMPTY)

  const resetGame = () => {
    setBoard(initalBoard)
    setTurn(TURNS.X)
    setWinner(WINNER.EMPTY)
    removeGameToStorage()
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
      confetti()
      setWinner(newWinner)
      removeGameToStorage()
    } else if (!newBoard.includes(null)) setWinner(WINNER.TIE)
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
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      <WinnerModal winner={winner} winnerList={WINNER} />
      <ButtonRestart functionAction={resetGame}>Nueva Partida</ButtonRestart>
    </main>
  )
}

export default App
