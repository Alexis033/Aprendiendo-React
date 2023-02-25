import { useCallback, useState } from 'react'
import { ResultMovies } from './components/Movies'
import { useFetchMovies } from './hooks/useFetchMovies'
import debounce from 'just-debounce-it'
import './App.css'

function App() {
  const [sort, setSort] = useState(false)
  const { movies, getMovies, loading } = useFetchMovies({ sort })
  const [error, setError] = useState('')
  const [search, setSearch] = useState(null)

  const debounceGetMovies = useCallback(
    debounce((search) => {
      getMovies(search)
    }, 500),
    []
  )
  const handleSubmit = (e) => {
    e.preventDefault()
    const { query } = Object.fromEntries(new window.FormData(e.target))
    const inputElement = e.target.elements.query
    inputElement.value = ''
    if (query.length < 4) {
      setError('The search must have at least 4 characters')
    } else {
      setError('')
      getMovies(query)
    }
  }
  const handleSort = () => {
    setSort(!sort)
  }
  const handleChange = (e) => {
    const newSearch = e.target.value
    setSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  return (
    <div className='page'>
      <header>
        <h1>Movie finder</h1>
        <form className='form' onSubmit={(e) => handleSubmit(e)}>
          <input
            name='query'
            type='text'
            placeholder='Avatar, Titanic...'
            onChange={(e) => handleChange(e)}
          />
          <button>Search</button>
        </form>
        <input
          name='sort'
          type='checkbox'
          onChange={handleSort}
          checked={sort}
        />
        <label htmlFor='sort'>Sort by title</label>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </header>
      <main>
        {loading ? (
          <p> Loading movies ...</p>
        ) : (
          <ResultMovies moviesList={movies} />
        )}
      </main>
    </div>
  )
}

export default App
