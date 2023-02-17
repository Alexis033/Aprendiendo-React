import { useState } from "react";
import confetti from "canvas-confetti"

const TURNS = {
  X: "X",
  O: "O",
};

const WINNER = {
  X: "X",
  O: "O",
  EMPTY: "",
  TIE: "Empate",
};

const WINNER_COMBOS = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const Square = ({ children, isSelected, updateBoard, index }) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;
  const handleClick = () => {
    updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

function App() {
  const initalBoard = Array(9).fill(null);

  const [board, setBoard] = useState(initalBoard);
  const [turn, setTurn] = useState(TURNS.X);
  const [winner, setWinner] = useState(WINNER.EMPTY);

  const resetGame = () => {
    setBoard(initalBoard);
    setTurn(TURNS.X);
    setWinner(WINNER.EMPTY);
  };

  const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS) {
      const [a, b, c] = combo;
      if (
        boardToCheck[a] &&
        boardToCheck[a] === boardToCheck[b] &&
        boardToCheck[b] === boardToCheck[c]
      ) {
        return boardToCheck[a];
      }
    }
    // if (!boardToCheck.includes(null)) return WINNER.TIE;
    return;
  };
  const updateBoard = (index) => {
    if (board[index] || winner) return;

    const newBoard = [...board];
    newBoard[index] = turn;
    setBoard(newBoard);
    const newWinner = checkWinner(newBoard);
    if (newWinner) {
      confetti()
      setWinner(newWinner);
    }else if(!newBoard.includes(null)) setWinner(WINNER.TIE)
    const newTurn = turn === TURNS.X ? TURNS.O : TURNS.X;
    setTurn(newTurn);
  };

  return (
    <main className="board">
      <h1>Tic Tac Toe</h1>
      <section className="game">
        {board.map((square, index) => {
          return (
            <Square key={index} index={index} updateBoard={updateBoard}>
              {square}
            </Square>
          );
        })}
      </section>
      <section className="turn">
        <Square isSelected={turn === TURNS.X}>{TURNS.X}</Square>
        <Square isSelected={turn === TURNS.O}>{TURNS.O}</Square>
      </section>
      {winner !== "" && (
        <section className="winner">
          <div className="text">
            <h2>{winner === WINNER.TIE ? "Is a tie!" : `Congratulations!`}</h2>

            {winner !== WINNER.TIE && (
              <header className="win">
                <Square>{winner}</Square>
              </header>
            )}
            {winner === WINNER.TIE && (
              <header className="win">
                <Square>{WINNER.X}{WINNER.O}</Square>
              </header>
            )}
          </div>
        </section>
      )}
      <button className=""
        onClick={resetGame}
      >
        Nueva Partida
      </button>
    </main>
  );
}

export default App;
