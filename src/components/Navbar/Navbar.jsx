/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <>
      <nav
        class="navbar navbar-dark bg-dark"
        aria-label="Dark offcanvas navbar"
      >
        <div class="container-fluid">
          <Link to='/' class="navbar-brand" ><strong>DARK</strong></Link>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbarDark"
            aria-controls="offcanvasNavbarDark"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="offcanvas offcanvas-end text-bg-dark"
            tabindex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div class="offcanvas-header">
              <h5 class="offcanvas-title" id="offcanvasNavbarDarkLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                class="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div class="offcanvas-body">
              <ul class="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li class="nav-item">
                  <Link to='/' class="nav-link active">Home</Link>
                </li>
                <li class="nav-item">
                <Link to='/write' class="nav-link active">Write</Link>
                </li>
                <li class="nav-item">
                <Link to='/portfolio' class="nav-link active">Portfolio</Link>
                </li>
                <li class="nav-item">
                <Link to='/contact' class="nav-link active">Contact</Link>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle active"
                    href="#"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    More Info
                  </a>
                  <ul class="dropdown-menu">
                    <li>
                      <a class="dropdown-item" href="#">
                        Action
                      </a>
                    </li>
                    <li>
                      <a class="dropdown-item" href="#">
                        Another action
                      </a>
                    </li>
                    <li>
                      <hr class="dropdown-divider" />
                    </li>

                    <li>
                      <a class="dropdown-item" href="#"></a>
                    </li>
                  </ul>
                </li>
              </ul>
              <form class="d-flex mt-3" role="search">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
               <div class="text-center mt-3"> 
               <button class="btn btn-danger btn-lg px-4 rounded-pill fw-bold mt-5" type="button">
                <Link to='/register' class="nav-link active">SIGN UP</Link>
               </button>
               </div>
               
                
  
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
