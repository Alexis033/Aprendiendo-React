import { Square } from './Square'

export const WinnerModal = ({ winner, winnerList }) => {
  if (winner === '') return null
  const winnerText =
    winner === winnerList.TIE ? 'Is a tie!' : `Congratulations!`

  return (
    <section className='winner'>
      <div className='text'>
        <h2>{winnerText}</h2>
        {winner !== winnerList.TIE && (
          <header className='win'>
            <Square>{winner}</Square>
          </header>
        )}
        {winner === winnerList.TIE && (
          <header className='win'>
            <Square>{winnerList.X}</Square>
            <Square>{winnerList.O}</Square>
          </header>
        )}
      </div>
    </section>
  )
}
