import { useEffect, useState } from 'react';
import './App.css';

const url = "https://api.themoviedb.org/3/movie/11?api_key=e100f6ad8b592337561a4a3264cafb07";


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
        {movie.map((item, i) => (
          <li key={i}>{item.original_title}</li>
        ))}
      </ul>

      <div className="add-product"></div>

    </div>
  );
}

export default App;
