import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './styles/Home.css'
import { FaBookMedical } from "react-icons/fa";
const Navbar = () => {
    const [search, setSearch] = useState("");
  return (
    <div>
         <nav className="navbar bg-light">
  <div className="container-fluid">
    <Link to="/" style={{textDecoration: 'none'}}>
    <a className="navbar-brand" id='a'>BRO-Chill</a>
    </Link>
    <Link to="/add" style={{textDecoration: 'none'}}>
    <a className="navbar-brand" id='a'>Add Recipe</a>
    <span><FaBookMedical className='black'/></span>
    </Link>

  </div>
</nav>
    </div>
  )
}

export default Navbar
