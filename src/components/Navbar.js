import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mb-5'>
<nav className="navbar navbar-expand-lg navbar-expand-md  navbar-dark  fixed-top" style={{backgroundColor:'Teal'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" aria-current="page" to="/"> HOME</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/corona">CORONA</Link>
        </li>
        <li className="nav-item dropdown">

        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/world" tabindex="-1" aria-disabled="true">WORLD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/gujarat" tabindex="-1" aria-disabled="true">GUJARAT</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/ahmedabad" tabindex="-1" aria-disabled="true">AHMEDABAD</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/business" tabindex="-1" aria-disabled="true">BUSINESS</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/technology" tabindex="-1" aria-disabled="true">TECHNOLOGY</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            OTHER
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/beauty">Beauty</Link></li>
            <li><Link className="dropdown-item" to="/business/tech">Business Tech</Link></li>
            <li><Link className="dropdown-item" to="/food">Food</Link></li>
            <li><Link className="dropdown-item" to="/entertainment">Entertainment</Link></li>
            <li><Link className="dropdown-item" to="/games">Games</Link></li>
          </ul>
        </li>
    
      
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar