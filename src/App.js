import './App.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';

// Pages
import Home from './pages/Home';
import Movies from './pages/Movies';
import MoviesDetails from './pages/MoviesDetails';


function App() {

  return (
    <div className="App">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movie-details/:id" element={<MoviesDetails />} />
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
