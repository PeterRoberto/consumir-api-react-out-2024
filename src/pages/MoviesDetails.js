import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./MoviesDetails.css"


const imageUrl = "https://image.tmdb.org/t/p/w500/";
const urlMovie = "https://api.themoviedb.org/3/movie/";
const apiKey = "API_KEY";

const SingleMovies = () => {

  // Trazendo o ID do filme clicado anteriormente
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  console.log(movieDetail)
  
  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getDetailsMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieDetail(data);
  }

  useEffect(() => {
    const movieDetailsUrl = `${urlMovie}${id}popular?${apiKey}&append_to_response=videos,images,credits`;
    getDetailsMovies(movieDetailsUrl);

  }, [id]);

  return (
    <section className="single-movies">

      <div className="box-main-infos">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <figure className="box-post-movie">
                <img className="img-movie" src={`${imageUrl + movieDetail.poster_path}`} alt={movieDetail.original_title} title={movieDetail.original_title} ></img>
              </figure>
            </div>
            <div className="col-md-9">
              <h1 className="title-movie mb-5">
                {movieDetail.title}
                <span>({movieDetail.release_date})</span>
              </h1>
              <p className="overview-movie">{movieDetail.overview}</p>
            </div> 
          </div>
        </div>
      </div>

      <div className="box-cast-crew">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="title-section">Main cast</h2>

              <div className="row">
                {movieDetail.credits?.cast?.map((movieDetail) => (
                  <div className="col-md-2 card-box-cast" key={movieDetail.id}>
                    <figure>
                      <img className="img-movie" src={`${imageUrl + movieDetail.profile_path}`} alt={movieDetail.original_title} title={movieDetail.original_title} ></img>
                    </figure>
                    <h3 className="title-person">{movieDetail.name}</h3>
                    <span className="title-character ">{movieDetail.character}</span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SingleMovies