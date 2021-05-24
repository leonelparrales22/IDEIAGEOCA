import React, { useState, useEffect } from "react";

const Training = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        title: "Training",
        contact: "Under construction...",
        Coordinador: "Coordinator:",
        Contacto: "Contact:",
        disculpe: "Sorry for the inconvenience.",
      });
    } else {
      setTexto({
        title: "Entrenamiento",
        contact: "En construcción...",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
        disculpe: "Disculpe las molestias.",
      });
    }
  }, [idioma]);

  return (
    <>
      <section class="intro-single animate__animated animate__pulse">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{texto.title}</h1>
                <h3 class="title-single">{texto.contact}</h3>

                <span class="color-text-a">
                  <br />
                  {/* <b>{texto.Coordinador}</b> <br /> */}
                  {texto.disculpe} <br />
                  <br />
                  {/* <b>{texto.Contacto}</b> <br /> */}
                  {/* gnavas@ups.edu.ec */}
                </span>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li class="breadcrumb-item active" aria-current="page">
                    {texto.title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Training;
