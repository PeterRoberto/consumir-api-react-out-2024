import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import SearchForm from './components/SearchForm';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';
import MovieCastDetails from './pages/MovieCastDetails';
import NotFound from './pages/NotFound';
import Search from './pages/Search';

function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <SearchForm />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MoviesDetails />} />
          <Route path="/movie-details/:id/cast" element={<MovieCastDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="*" element={<NotFound /> } />
        </Routes>
        
      </BrowserRouter>
      
    </div>
  );
}

export default App;
