import React from 'react';
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='mb-5'>
<nav class="navbar navbar-expand-lg navbar-expand-sm navbar-expand-md navbar-expand-xs navbar-dark bg-dark fixed-top">
  <div class="container-fluid">
    <Link class="navbar-brand" to="/"></Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link class="nav-link" aria-current="page" to="/"> HOME</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/corona">CORONA</Link>
        </li>
        <li class="nav-item dropdown">

        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/world" tabindex="-1" aria-disabled="true">WORLD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/gujarat" tabindex="-1" aria-disabled="true">GUJARAT</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/ahmedabad" tabindex="-1" aria-disabled="true">AHMEDABAD</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/business" tabindex="-1" aria-disabled="true">BUSINESS</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/technology" tabindex="-1" aria-disabled="true">TECHNOLOGY</Link>
        </li>
        <li class="nav-item">
          <Link class="nav-link" to="/other" tabindex="-1" aria-disabled="true">OTHER</Link>
        </li>
      </ul>

    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar