import { useState, useEffect } from "react"; 
  
import './MovieDiscover.css'


const imageUrl = "https://image.tmdb.org/t/p/w500/";

const urlMovie = "https://api.themoviedb.org/3/discover/";
const apiKey = "api_key=";


const MovieDiscover = () => {
  const [discoverMovies, setDiscoverMovies] = useState([]);

  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setDiscoverMovies(data.results);
  }

  console.log(discoverMovies)

  useEffect(() => {
    const topRatedUrl = `${urlMovie}tv?${apiKey}`;
    getTopRatedMovies(topRatedUrl);
  }, []);


  return (
    <div>
      <div className="container">
        <div className="row">
          <h1>TV</h1>
          {discoverMovies.map((movies) => (
            <div key={movies.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 all-content-tv">
              <figure>
                <img className="img-movie" src={`${imageUrl + movies.poster_path}`} alt={movies.original_title} title={movies.original_title} ></img>
              </figure>
              <div className="infos-movie">
                <h2 className="movie-title mt-2 fw-bold">{movies.original_name}</h2>
                <span className="vote-average">Vote Average: {movies.vote_average}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default MovieDiscover