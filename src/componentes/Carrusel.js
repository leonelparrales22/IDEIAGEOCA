import React, { useState, useEffect } from "react";
import "../css/carrucel.css";
import background3 from "../img/carrusel/foto1.jpg";
// style={{ backgroundImage: `url(${background3})` }}

const Carrusel = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        title: "Reasearch Group",
      });
    } else {
      setTexto({
        title: "Grupo de Investigación",
      });
    }
  }, [idioma]);

  return (
    <div class="intro intro-carousel animate__animated animate__fadeIn">
      <div id="carousel" class="owl-carousel owl-theme owl-loaded owl-drag">
        <div class="carousel-item-a intro-item bg-image" style={{ backgroundImage: `url(${background3})` }}>
          <div class="overlay overlay-a"></div>
          <div class="intro-content display-table">
            <div class="table-cell">
              <div class="container">
                <div class="row">
                  <div class="col-lg-8">
                    <div class="intro-body">
                      <h1 class="intro-title mb-4 animate__animated animate__pulse animate__slower">
                        <span class="color-b animate__animated animate__pulse">{texto.title}</span>
                        <br />
                        IDEIAGEOCA
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Carrusel;
