
import './style.css'
export default function Movie(props) {
  const {Title, Year, imdbID, Type, Poster} = props;
  return(
    <div key={imdbID} className="card">
      <div className="card-image">
        <img className="activator" src={Poster} />
      </div>
      <div className="card-content">
        <span className="card-title">{Title}</span>
        <p className='p'>{Year} <span className="right">{Type}</span></p>
      </div>
    </div>
  )
}