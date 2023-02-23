export const Movies = ({ movies }) => {
  return (
    <ul>
      {movies.map((movie) => {
        return (
          <li key={movie.id}>
            <h3>{movie.title}</h3>
            <p>Year: {movie.year}</p>
            <img src={movie.poster} alt={`Poster movie ${movie.Title}`} />
          </li>
        )
      })}
    </ul>
  )
}

export const NotMovies = () => {
  return <p>Not found Movies for this search</p>
}

export const ResultMovies = ({ resultAPI }) => {
  const movies = resultAPI.Search
  const hasMovies = resultAPI.Response
  const mappedMovies = movies?.map((movie) => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster
  }))

  return hasMovies === 'True' ? <Movies movies={mappedMovies} /> : <NotMovies />
}
