import {NavLink } from "react-router-dom"
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="header">
      <div className="container">
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </div>

    </header>

  )
}

export default Navbar