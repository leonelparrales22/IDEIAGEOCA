import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Footer = ({ idioma }) => {
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
      });
    }
  }, [idioma]);

  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <nav className="nav-footer">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      {texto.home}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Research">
                      {texto.research}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Members">
                      {texto.members}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/News">
                      {texto.news}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Projects">
                      {texto.projects}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Publications">
                      {texto.Publications}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Training">
                      {texto.Training}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/AboutUs">
                      {texto.AboutUs}
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/Contact">
                      {texto.contact}
                    </NavLink>
                  </li>
                </ul>
              </nav>
              <div className="socials-a">
                <ul className="list-inline">
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      <i className="fa fa-facebook" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      <i className="fa fa-twitter" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      <i className="fa fa-instagram" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      <i className="fa fa-pinterest-p" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                  <li className="list-inline-item">
                    <NavLink exact to="/">
                      <i className="fa fa-dribbble" aria-hidden="true"></i>
                    </NavLink>
                  </li>
                </ul>
              </div>
              <div className="copyright-footer">
                <p className="copyright color-text-a">
                  &copy; Copyright
                  <span className="color-a"> Research Group IDEIAGEOCA</span> All Rights Reserved.
                </p>
              </div>
              <div className="credits">
                Designed by{" "}
                <NavLink exact to="https://bootstrapmade.com/">
                  BootstrapMade
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
