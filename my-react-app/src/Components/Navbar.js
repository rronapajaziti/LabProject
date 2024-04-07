import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/dist/dropdown";
import "bootstrap/js/dist/collapse";

import { Toggle } from "../App";

function Navbar({ Toggle }) {
  //   useEffect(() => {
  //     const dropdownToggle = document.querySelector('.dropdown-toggle');
  //     if (dropdownToggle) {
  //       dropdownToggle.addEventListener('click', function () {
  //         const dropdownMenu = this.nextElementSibling;
  //         dropdownMenu.classList.toggle('show');
  //       });
  //     }
  //   }, []);

  return (
    <nav className="navbar navbar-expand-sm px-3 fs-4 me-3">
      <i className="navbar-brand bi bi-justify-left fs-4" onClick={Toggle}></i>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <i className="bi bi-justify"></i>
      </button>
      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item dropdown ">
            <a
              className="nav-link dropdown-toggle"
              href="a"
              id="navbarDropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="false"
              aria-expanded="true"
            >
              Readtopia
            </a>
            <div
              className="dropdown-menu sidebarColor-bg me-2"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item " href="#">
                Profile
              </a>
              <a className="dropdown-item" href="#">
                Settings
              </a>
              <a className="dropdown-item" href="#">
                Log out
              </a>
              <hr className="dropdown-divider" />
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>
          </li> */}
        </ul>

        {/* <form className="d-flex my-2 my-lg-0">
          <input className="form-control me-sm-2" type="text" placeholder="Search" />
          <button className="btn-search btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form> */}
      </div>
    </nav>
  );
}

export default Navbar;
