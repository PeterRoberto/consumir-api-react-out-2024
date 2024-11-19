import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Search = () => {
  const [useSearch, setUseParams] = useState([]);
  const [searchParams] = useSearchParams();  
  console.log(useSearch);
  
  const urlMovie = "https://api.themoviedb.org/3/search/multi";
  const apiKey = "api_key=";
  const imageUrl = "https://image.tmdb.org/t/p/w500/";
  console.log(urlMovie)

  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setUseParams(data.results);
  }

  useEffect(() => {
    const topRatedUrl = `${urlMovie}?${searchParams}&${apiKey}`;
    getTopRatedMovies(topRatedUrl);
    console.log(topRatedUrl)
  }, [searchParams]);

  return (
    <div>
      <h1>Resultados disponíveis:</h1>

      <div className="container">
        <div className="row">
          {useSearch ? (
            useSearch.map((item) => (
              <div key={item.id} className="col-12 col-sm-6 col-md-4 col-lg-4 col-xl-2 all-content-movie">
                <figure>
                  <img src={`${imageUrl + item.poster_path}`} alt={item.original_name} title={item.original_name} ></img>
                </figure>
                <div className="infos-movie">
                  <h2 className="movie-title mt-2 fw-bold">{item.original_name}</h2>
                  <span className="vote-average">Vote Average: {item.vote_average}</span>
                </div>
                <Link to={`/movie-details/${item.id}`}>Details</Link>
              </div>
            ))
          ) : (
            <p>The content is hidden</p>
          )}
        </div>
      </div>

    </div>
  )
}

export default Search