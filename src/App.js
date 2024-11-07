import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';
import MovieCastDetails from './pages/MovieCastDetails';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MoviesDetails />} />
          <Route path="/movie-details/:id/cast" element={<MovieCastDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
