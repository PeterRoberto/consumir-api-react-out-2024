import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import "./MovieCastDetails.css"
import noImage from "../assets/img/no-image.jpg";

const imageUrl = "https://image.tmdb.org/t/p/w500";
const urlMovie = "https://api.themoviedb.org/3/movie/";
const apiKey = "";



const MovieCastDetails = () => {
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
    <section className="single-movies-cast">
      
      <div className="bg-top-area">
        <div className="container">
          <div className="row">
            <div className="col-md-12 top-area-cast">
              <img className="img-movie-cast" src={`${imageUrl + movieDetail.poster_path}`} alt={movieDetail.original_title} title={movieDetail.original_title}></img>
              <h1 className="title-movie-cast-page text-white">
                {movieDetail.title}
                <span>({movieDetail.release_date})</span>
              </h1>
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
              </div>
            
              <div className="row">
                {creditsMovie.cast && creditsMovie.cast.map((actor) => (
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

export default MovieCastDetails