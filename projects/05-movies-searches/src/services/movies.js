export const searchMovies = async ({ search }) => {
  if (search === '') return null
  try {
    const response = await fetch(
      `http://www.omdbapi.com/?apikey=72c99ce7&s=${search}`
    )
    const json = await response.json()

    const movies = json.Search
    const mappedMovies = movies?.map((movie) => ({
      id: movie.imdbID,
      title: movie.Title,
      year: movie.Year,
      poster: movie.Poster
    }))

    return mappedMovies
  } catch (err) {
    throw new Error('Error searching movies')
  }
}
