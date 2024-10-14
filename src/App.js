import { useEffect, useState } from 'react';
import './App.css';

// const url = "https://api.themoviedb.org/3/movie/11?api_key=e100f6ad8b592337561a4a3264cafb07";
const apiKey = "api_key=e100f6ad8b592337561a4a3264cafb07";
const urlMovie = "https://api.themoviedb.org/3/movie/";


// console.log(url);

function App() {
  const [topMovies, setTopMovies] = useState([]);

  // Função para pegar(GET) os filmes, imprimi-los via API.
  const getTopRatedMovies = async (url) => {
    const res = await fetch(url);
    const data = await res.json();

    // console.log(data);
    setTopMovies(data.results);
  }

  // Nesse ponto precisamos chamar a função getTopRatedMovies toda vez que a página]
  // ou componente for carregado, em react a gente não chama a função.
  // colocamos num hook chamado useEffect. Com ele temos a possibilidade de executar uma função
  // alguns estágios da nossa aplicação, baseado no array de dependência nos final de useEffect, nesse caso deixamos vazio.
  // Primeiro passo - Chamada assíncrona com UseEffect
  useEffect(() => {

    const topRatedUrl = `${urlMovie}top_rated?${apiKey}`;
    // console.log(topRatedUrl);

    getTopRatedMovies(topRatedUrl);

    // async function fetchData() {
    //   const res = await fetch(url, { 
    //     method: "GET",
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //   });
    //   const data = await res.json();


    //   setMovie(data);
    // }

    // fetchData();

  }, []);


  return (
    <div className="App">
      <h1>Lista de Filmes</h1>
      
      <ul>
        {topMovies.map(topMovies => (
          <li key={topMovies.id}>{topMovies.original_title}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
