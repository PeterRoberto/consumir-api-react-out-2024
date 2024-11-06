import { Link } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/movies">Movies</Link></li>
        </nav>
      </div>

    </header>

  )
}

export default Navbar