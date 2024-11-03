import { useEffect, useState } from 'react';
import './App.css';

// O erro anterior nesse arquivo, é por estarmos chamando um filme específico, pelo ID 15, por exemplo.
// Então por isso não tinha porque usar .map, já que não é um array.
const url = "https://api.themoviedb.org/3/movie/15?api_key=e100f6ad8b592337561a4a3264cafb07";
console.log(url);

function App() {
  const [movie, setMovie] = useState([]);
  
  // Primeiro passo - Chamada assíncrona com UseEffect
  useEffect(() => {
    async function fetchData() {
      const res = await fetch(url, { 
        method: "GET",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
      });
      const data = await res.json();
      setMovie(data);
    }
    fetchData();
  }, []);

  
  console.log(movie);

  return (
    <div className="App">
      <h1>Lista de Filmes</h1>
      
      
      <ul>
        <li>{movie.original_title}</li>
        <li>{movie.overview}</li>
        <li>{movie.homepage}</li>
        <li>{movie.imdb_id}</li>
        <li>{movie.vote_average}</li>
      </ul>

    </div>
  );
}
export default App;