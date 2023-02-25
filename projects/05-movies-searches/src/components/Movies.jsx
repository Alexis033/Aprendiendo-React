export const ResultMovies = ({ moviesList }) => {
  return typeof moviesList !== 'undefined' ? (
    <Movies moviesList={moviesList} />
  ) : (
    <NotMovies />
  )
}
export const Movies = ({ moviesList }) => {
  return (
    <ul className="movies">
      {moviesList?.map((movie) => {
        return (
          <li key={movie.id} className="movie">
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
