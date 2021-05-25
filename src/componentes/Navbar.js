import React, { useState, useEffect } from "react";
import logo from "../img/logo/logo.png";
import { NavLink } from "react-router-dom";

const Navbar = ({ setLanguage, idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        home: "Home",
        research: "Research",
        members: "Members",
        news: "News",
        projects: "Projects",
        language: "Español",
        Publications: "Publications",
        Training: "Training",
        AboutUs: "About Us",
        contact: "Contact",
        lan: "es",
      });
    } else {
      setTexto({
        home: "Home",
        research: "Investigación",
        members: "Miembros",
        news: "Nuevo",
        projects: "Proyectos",
        language: "English",
        Publications: "Publicaciones",
        Training: "Entrenamiento",
        AboutUs: "Acerca de",
        contact: "Contacto",
        lan: "en",
      });
    }
  }, [idioma]);

  return (
    <>
      <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
        <div className="container">
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <img src={logo} alt="IDEIAGEOCA" width="240px" />
          {/* btn btn-b-n navbar-toggle-box-collapse d-none d-md-block */}
          <button type="button" className="btn btn-b-n nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false" onClick={setLanguage}>
            {/* <span className="fa fa-search" aria-hidden="true"></span> */}
            {texto.lan}
          </button>
          <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/">
                  {texto.home}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Research">
                  {texto.research}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Members">
                  {texto.members}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/News">
                  {texto.news}
                </NavLink>
              </li>

              {/* dropdown */}
              {/* <li className="nav-item dropdown">
                <NavLink className="nav-link dropdown-toggle letra-navbar" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" exact to="/News">
                  {texto.news}
                </NavLink>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <NavLink className="dropdown-item letra-navbar" exact to="/News">
                    Property Single
                  </NavLink>
                  <NavLink className="dropdown-item letra-navbar" exact to="/News">
                    Blog Single
                  </NavLink>
                  <NavLink className="dropdown-item letra-navbar" exact to="/News">
                    Agents Grid
                  </NavLink>
                  <NavLink className="dropdown-item letra-navbar" exact to="/News">
                    Agent Single
                  </NavLink>
                </div>
              </li> */}
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Projects">
                  {texto.projects}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Publications">
                  {texto.Publications}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Training">
                  {texto.Training}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/AboutUs">
                  {texto.AboutUs}
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link letra-navbar" exact to="/Contact">
                  {texto.contact}
                </NavLink>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false" onClick={setLanguage}>
            {texto.language}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
