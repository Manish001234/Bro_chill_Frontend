import React, { useState } from 'react'
import { Link } from "react-router-dom";
import './styles/Home.css'
const Navbar = () => {
    const [search, setSearch] = useState("");
  return (
    <div>
         <nav className="navbar bg-light">
  <div className="container-fluid">
    <Link to="/">
    <a className="navbar-brand" id='a'>BRO-Chill</a>
    </Link>
    <Link to="/add">
    <a className="navbar-brand" id='a'>Add Image</a>
    </Link>

  </div>
</nav>
    </div>
  )
}

export default Navbar
