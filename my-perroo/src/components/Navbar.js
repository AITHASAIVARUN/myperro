// component/NavBar.js

import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary navi">
    <div className="container-fluid">
       <NavLink className="navbar-brand" to="/HomePage">My Perro</NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
             <NavLink className="navbar-brand nav-link active" to="/HomePage">Home</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/AboutPage">About</NavLink>
          </li>
          <li className="nav-item">
             <NavLink className="nav-link" to="/ContactPage">Contact Us</NavLink>
          </li>
        </ul>
        <button className="btn btn-outline-primary m-1 d-flex">Login</button>
      </div>
    </div>
  </nav>

  );
};

export default NavBar;