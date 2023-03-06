import React from 'react';
import {Link} from 'react-router-dom'
import './Navbar.css'
import './Navbar'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light" id="navbar">
      <div className="container">
        {/* <a className="navbar-brand" href='./Home '></a> */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className=" collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto ">
            <li className="nav-item">
              <Link className="nav-link mx-2 active" aria-current="page" to="Home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="Accounts">Accounts</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="About">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link mx-2" to="UserDetalis">UserDetails</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link mx-2" href="./Login">Login </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;