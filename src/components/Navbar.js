import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/filmes">Filmes</Link></li>
        </nav>
      </div>

    </header>

  )
}

export default Navbar