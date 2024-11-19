import { Link, useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./MoviesDetails.css"
import noImage from "../assets/img/no-image.jpg";

const imageUrl = "https://image.tmdb.org/t/p/w500";
const urlMovie = "https://api.themoviedb.org/3/movie/";
const apiKey = "api_key=";



const SingleMovies = () => {

  // Trazendo o ID do filme clicado anteriormente
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const [creditsMovie, setCreditsMovie] = useState([]);
 
  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getDetailsMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    setMovieDetail(data);
    setCreditsMovie(data.credits);
  }


  useEffect(() => {
    const movieDetailsUrl = `${urlMovie}${id}popular?${apiKey}&append_to_response=videos,images,credits`;
    getDetailsMovies(movieDetailsUrl);
  }, [id]);


  return (
    <section className="single-movies">
      {/* <div className="box-main-infos" style={{ backgroundImage:`url(${imageUrl + movieDetail.backdrop_path})` }}> */}
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

              <span className="movie-sinopse text-white">Sinopse</span>
              <p className="overview-movie">{movieDetail.overview}</p>

              {creditsMovie.crew && creditsMovie.crew.map((team) => (
                team.job === 'Director' && (
                  <div className="box-director" key={team.id}>
                    <span className="text-white name-director">
                      {team.name}
                    </span>
                    <span className="text-white job-director">
                      {team.job}
                    </span>
                  </div>
                )
              ))}
            </div> 
          </div>
        </div>
      </div>

      <div className="box-cast-crew">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="infos-top-cast">
                <h2 className="title-section fw-bold">Main cast</h2>
                <Link to={`/movie-details/${movieDetail.id}/cast`} className="infos-top-cast">See more</Link>
              </div>
            
              <div className="row">
                {creditsMovie.cast && creditsMovie.cast.slice(0, 6).map((actor) => (
                  <div className="col-md-2" key={actor.id}>
                    <div className="card-box-cast">
                      <figure>
                        {(actor.profile_path) ?
                          <img className="img-movie" src={`${imageUrl + actor.profile_path}`} alt={actor.original_title} title={actor.original_title}></img>
                          :
                          <img src={noImage} alt={actor.original_title} title={actor.original_title} />
                        }                     
                      </figure>
                      <div className="personal-infos">
                        <h3 className="title-person">{actor.name}</h3>
                        <span className="title-character ">{actor.character}</span>
                      </div>
                    </div>
                  </div>
                ))}

                

                {/* {movieDetail.credits?.cast?.map((movieDetail) => (
                  <div className="col-md-2 card-box-cast" key={movieDetail.id}>
                    <figure>
                      <img className="img-movie" src={`${imageUrl + movieDetail.profile_path}`} alt={movieDetail.original_title} title={movieDetail.original_title} ></img>
                    </figure>
                    <h3 className="title-person">{movieDetail.name}</h3>
                    <span className="title-character ">{movieDetail.character}</span>
                  </div>
                ))} */}
              </div>

            </div>
          </div>
        </div>
      </div>

    </section>
  )
}

export default SingleMovies