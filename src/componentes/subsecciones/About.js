import React, { useState, useEffect } from "react";
import about from "../../img/carrusel/foto1.jpg";
import img from "../../img/about/logo_ai_ingles.png";
import "../../css/about.css";

const About = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        breamcum: "About Us",
        research: "Research Group ",
        acerca: "About ",
        us: "us.",
        about:
          "The Research Group, Spatial Data Infrastructure; Artificial Intelligence; Geoportals and Applied Computing (IDEIAGEOCA) of the Salesian Polytechnic University, is a scientific and academic group, formed entirely by full-time teachers, where technologies related to spatial data infrastructure, Geographic Information Systems, Artificial Intelligence, Distributed Systems and Applied Computing converge, based on the principles of software engineering and web engineering. Through research and development of Information Systems, through the proper integration of hardware and software platforms, prioritizing the provision of services and data processing, considering inclusive technologies, with a strong link to society.",
      });
    } else {
      setTexto({
        breamcum: "Acerca de",
        research: "Grupo de investigación ",
        acerca: "Acerca de ",
        us: "nosotros.",
        about:
          "El Grupo de Investigación, Infraestructura de Datos Espaciales; Inteligencia Artificial; Geoportales y Computación aplicada (IDEIAGEOCA) de la Universidad Politécnica Salesiana, es un grupo científico y académico, conformado en su totalidad por docentes a tiempo completo, donde confluyen tecnologías referidas a las infraestructuras de datos espaciales, Sistemas de Información Geográfica, Inteligencia Artificial, Sistemas Distribuidos y Computación Aplicada, fundamentado sobre los principios de ingeniería de software e ingeniería web. A través de la investigación y desarrollo de Sistemas de Información, mediante la adecuada integración de plataformas de hardware y software, priorizando la provisión de servicios y procesamiento de datos. considerando tecnologías de inclusión, con una fuerte vinculación con la sociedad.",
      });
    }
  }, [idioma]);

  return (
    <div className="animate__animated animate__fadeIn">
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{texto.research}IDEIAGEOCA</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {texto.breamcum}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
      {/* 2da seccion */}

      <section class="section-about">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="about-img-box">
                <img src={about} alt="" class="img-fluid" />
              </div>
              <div class="sinse-box">
                <h3 class="sinse-title">
                  IDE IA GEO CA
                  <span></span>
                  <br /> {/*Sinse 2017*/}
                </h3>
                <p>
                  INFRAESTRUCTURA DE DATOS ESPACIALES <br /> INTELIGENCIA ARTIFICIAL GEOPORTALES <br /> Y COMPUTACIÓN APLICADA
                </p>
              </div>
            </div>
            <div class="col-md-12 section-t8">
              <div class="row">
                <div class="col-md-6 col-lg-5">
                  <img src={img} alt="" class="img-fluid about-about" />
                </div>
                <div class="col-lg-2  d-none d-lg-block">
                  <div class="title-vertical d-flex justify-content-start">
                    <span>IDEIAGEOCA</span>
                  </div>
                </div>
                <div class="col-md-6 col-lg-5 section-md-t3">
                  <div class="title-box-d">
                    <h3 class="title-d">
                      {texto.acerca}
                      <span class="color-d">{texto.us}</span> {/*lectus*/}
                      <br /> {/*nibh.*/}
                    </h3>
                  </div>
                  <p class="color-text-a texto-justificado ">{texto.about}</p>
                  <p class="color-text-a">
                    {/* Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Vivamus magna justo, lacinia eget consectetur sed, convallis at
                    tellus. */}
                    <br/>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
