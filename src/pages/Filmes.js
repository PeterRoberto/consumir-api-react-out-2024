
import { useState } from "react";
import { useEffect } from "react";

// CSS
import "./Filmes.css"

const imageUrl = "https://image.tmdb.org/t/p/w500/";

const urlMovie = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=e100f6ad8b592337561a4a3264cafb07";

const Filmes = () => {
  const [topMovies, setTopMovies] = useState([]);

  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setTopMovies(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${urlMovie}popular?${apiKey}`;
    getTopRatedMovies(topRatedUrl);

  }, []);

  return (
    <div>
      <h1 className="title-page">Popular movies</h1>
      
        <div className="container">

          <div className="row">
            {topMovies.map(topMovies => (
              <div className="col-md-2 all-content-movie">
                <figure>
                  <img src={`${imageUrl + topMovies.poster_path}`} alt={topMovies.original_title} title={topMovies.original_title} ></img>
                </figure>
                <div className="infos-movie">
                  <h2 className="movie-title mt-2 fw-bold">{topMovies.original_title}</h2>
                  <span className="vote-average">Vote Average: {topMovies.vote_average}</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      

    </div>
  )
}

export default Filmes