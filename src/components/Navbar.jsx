import React from 'react'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
         <nav className="navbar bg-light">
  <div className="container-fluid">
    <Link to="/">
    <a className="navbar-brand">BRO-Chill</a>
    </Link>
    <Link to="/add">
    <a className="navbar-brand">Add Image</a>
    </Link>
    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar
