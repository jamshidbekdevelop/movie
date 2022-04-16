import Movie from "./Movie";
import './style.css'
export default function Movies(props) {
  const {movies = []} = props;

  return(
    <div className="movies">
      {movies.length ? movies.map(movie => (
        <Movie key={movie.imdbID} {...movie} />
      )) : <h4>Nothing found</h4>}
    </div>
  )
}