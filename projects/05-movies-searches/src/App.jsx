import './App.css'
import resultAPI from './mocks/example-result.json'
import notResultAPI from './mocks/example-not-result.json'
import { ResultMovies } from './components/Movies'
// const ENDPOINT_MOVIES = `http://www.omdbapi.com/?apikey=72c99ce7&s=${word}`

function App() {
  return (
    <div className='page'>
      <header>
        <h1>Movie finder</h1>
        <form className='form'>
          <input type='text' placeholder='Avatar, Titanic...' />
          <button>Search</button>
        </form>
      </header>
      <main>
        <ResultMovies resultAPI={resultAPI} />
      </main>
    </div>
  )
}

export default App
