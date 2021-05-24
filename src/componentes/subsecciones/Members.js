import React, { useState, useEffect } from "react";
import diego from "../../img/miembros/diego-card.png";
import tufinio from "../../img/miembros/tufinio-card.png";
import arevalo from "../../img/miembros/arevalo-card.png";
import holger from "../../img/miembros/holger-card.png";
import paulina from "../../img/miembros/paulina-card.png";
import mafer from "../../img/miembros/mafer-card.png";
import julio from "../../img/miembros/julio-card.png";
import navar from "../../img/miembros/navas-card.png";

import Miembros_card from "../subcomponentes/Miembros_card";

const Members = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        meet: "Meet Our Team",
      });
    } else {
      setTexto({
        meet: "Conoce nuestro equipo",
      });
    }
  }, [idioma]);
  return (
    <div className="animate__animated animate__fadeIn">
      <section class="section-agents section-t8">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="title-wrap d-flex justify-content-between">
                <div class="title-box">
                  <h2 class="title-a">{texto.meet}</h2>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <Miembros_card nombre={"Gustavo"} apellido={"Navas"} email={"dvallejo@ups.edu.ec"} foto={navar} />
            <Miembros_card nombre={"Diego"} apellido={"Vallejo"} email={"dvallejoh@ups.edu.ec"} foto={diego} />
            <Miembros_card nombre={"Holger"} apellido={"Ortega"} email={"hortega@ups.edu.ec"} foto={holger} />
          </div>
        </div>
        <br />
        <div class="container">
          <div class="row">
            <Miembros_card nombre={"Julio"} apellido={"Proaño"} email={"jproanoo@ups.edu.ec"} foto={julio} />
            <Miembros_card nombre={"Paulina"} apellido={"Morillo"} email={"pmorillo@ups.edu.ec"} foto={paulina} />
            <Miembros_card nombre={"Rodrigo"} apellido={"Tufiño"} email={"rtufino@ups.edu.ec"} foto={tufinio} />
          </div>
        </div>

        {/* SEGUNDA FILA */}
        <br />
        <div class="container">
          <div class="row">
            <Miembros_card nombre={"Alonso"} apellido={"Arevalo"} email={"aarevalo@ups.edu.ec"} foto={arevalo} />
            <Miembros_card nombre={"Maria"} apellido={"Cazares"} email={"mcazares@ups.edu.ec"} foto={mafer} />
            {/* <div class="col-md-4">
              <div class="card-box-d">
                <div class="card-img-d">
                  <img src={tufinio} alt="" class="img-d img-fluid" />
                </div>
                <div class="card-overlay card-overlay-hover">
                  <div class="card-header-d">
                    <div class="card-title-d align-self-center">
                      <h3 class="title-d">
                        <a href="agent-single.html" class="link-two">
                          Emma Toledo
                          <br /> Cascada
                        </a>
                      </h3>
                    </div>
                  </div>
                  <div class="card-body-d">
                    <p class="content-d color-text-a">Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.</p>
                    <div class="info-agents color-a">
                      <p>
                        <strong>Phone: </strong> +54 356 945234
                      </p>
                      <p>
                        <strong>Email: </strong> agents@example.com
                      </p>
                    </div>
                  </div>
                  <div class="card-footer-d">
                    <div class="socials-footer d-flex justify-content-center">
                      <ul class="list-inline">
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-facebook" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-twitter" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-instagram" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-pinterest-p" aria-hidden="true"></i>
                          </a>
                        </li>
                        <li class="list-inline-item">
                          <a href="#" class="link-one">
                            <i class="fa fa-dribbble" aria-hidden="true"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>
      <br />
      <br />
      <br />
    </div>
  );
};

export default Members;
