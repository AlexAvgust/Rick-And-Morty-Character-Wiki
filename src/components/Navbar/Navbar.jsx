import React from 'react'
import { NavLink, Link } from 'react-router-dom'



const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container">
    <Link to="/" className="navbar-brand fs-3 fw-bold">Rick & Morty</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav">
        <NavLink to="/" className="nav-link fs-4" >Character</NavLink>
        <NavLink to="/Episodes" className="nav-link fs-4" >Episodes</NavLink>
        <NavLink  to="/Location" className="nav-link fs-4" >Location</NavLink>
        
      </div>
    </div>
  </div>
</nav>
  )
}

export default Navbar