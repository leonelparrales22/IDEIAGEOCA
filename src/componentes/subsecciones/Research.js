import React, { useState, useEffect } from "react";
import research1 from "../../img/research/research_1.png";
import research2 from "../../img/research/research_2.jpg";
import research3 from "../../img/research/research_3.png";

const Research = ({ idioma }) => {
  const [texto, setTexto] = useState({});

  useEffect(() => {
    if (idioma) {
      setTexto({
        title: "Lines of Research",
        Coordinador: "Coordinator:",
        Contacto: "Contact:",
        disculpe: "Líneas de Investigación",
        linea1: {
          title: "Geographic Information Systems",
          list: ["Geoportals", "Spatial data infrastructure", "Spatial databases", "Spatial analysis"],
        },
        linea2: {
          title: "Artificial Intelligence",
          list: ["Computer vision", "Automatic learning", "Reasoning under uncertainty", "Data Fusion"],
        },
        linea3: {
          title: "Data Science and Simulation",
          list: ["Data Warehouses and Business Intelligence", "Applied Mathematics", "Statistics"],
        },
      });
    } else {
      setTexto({
        title: "Líneas de Investigación",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
        disculpe: "Lines of Research",
        linea1: {
          title: "Sistemas de Información Geográfica",
          list: ["Geoportales", "Infraestructura de datos espaciales", "Bases de datos espaciales", "Análisis espacial"],
        },
        linea2: {
          title: "Inteligencia Artificial",
          list: ["Visión por computadora", "Aprendizaje automático", "Razonamiento bajo incertidumbre", "Fusión de Datos"],
        },
        linea3: {
          title: "Ciencia de Datos y Simulación",
          list: ["Almacenes de Datos e Inteligencia de Negocios", "Matemáticas aplicadas", "Estadística"],
        },
      });
    }
  }, [idioma]);
  return (
    <>
      <section class="intro-single animate__animated animate__fadeIn">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{texto.title}</h1>

                <span class="color-text-a">
                  {/* <b>{texto.Coordinador}</b> <br /> */}

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

          <br />
          {/* PRIMER BANNER */}
          <div class="row">
            {/* primera columna */}
            <div class="col-md-8 col-lg-8">
              <div class="about-img-box">
                <img src={research1} class="img-fluid zoom-research" alt="Research_1" />
              </div>
            </div>

            {/* segunda columna */}
            <div class="col-md-4 col-lg-4 section-md-t3">
              <div class="title-box-d">
                <h3 class="title-d">
                  {texto.linea1?.title}
                  <span class="color-d">{/*ipsum*/}</span> {/*lectus*/}
                  <br /> {/*nibh.*/}
                </h3>
              </div>
              <p class="color-text-a">
                <ul>
                  <li>{texto.linea1?.list[0]}</li>
                  <li>{texto.linea1?.list[1]}</li>
                  <li>{texto.linea1?.list[2]}</li>
                  <li>{texto.linea1?.list[3]}</li>
                </ul>
              </p>
            </div>
          </div>

          <br />
          {/* SEGUNDO BANNER */}
          <div class="row">
            {/* primera columna */}
            <div class="col-md-8 col-lg-8">
              <div class="about-img-box">
                <img src={research2} class="img-fluid zoom-research" alt="Research_2" />
              </div>
            </div>

            {/* segunda columna */}
            <div class="col-md-4 col-lg-4 section-md-t3">
              <div class="title-box-d">
                <h3 class="title-d">
                  {texto.linea2?.title}
                  <span class="color-d">{/*ipsum*/}</span> {/*lectus*/}
                  <br /> {/*nibh.*/}
                </h3>
              </div>
              <p class="color-text-a">
                <ul>
                  <li>{texto.linea2?.list[0]}</li>
                  <li>{texto.linea2?.list[1]}</li>
                  <li>{texto.linea2?.list[2]}</li>
                  <li>{texto.linea2?.list[3]}</li>
                </ul>
              </p>
            </div>
          </div>

          <br />
          {/* TERCER BANNER */}
          <div class="row">
            {/* primera columna */}
            <div class="col-md-8 col-lg-8">
              <div class="about-img-box">
                <img src={research3} class="img-fluid zoom-research" alt="Research_3" />
              </div>
            </div>

            {/* segunda columna */}
            <div class="col-md-4 col-lg-4 section-md-t3">
              <div class="title-box-d">
                <h3 class="title-d">
                  {texto.linea3?.title}
                  <span class="color-d">{/*ipsum*/}</span> {/*lectus*/}
                  <br /> {/*nibh.*/}
                </h3>
              </div>
              <p class="color-text-a">
                <ul>
                  <li>{texto.linea3?.list[0]}</li>
                  <li>{texto.linea3?.list[1]}</li>
                  <li>{texto.linea3?.list[2]}</li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Research;
