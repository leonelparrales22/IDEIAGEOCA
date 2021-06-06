import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "../../css/news.css";

import FILX from "../../rss/rss_file.xml";
import RSS from "../../img/News/RSS.png";

const News = ({ idioma }) => {
  const [texto, setTexto] = useState({});
  useEffect(() => {
    if (idioma) {
      setTexto({
        title: "News",
        subtitle: "Download RSS feed",
      });
    } else {
      setTexto({
        title: "Nuevo",
        subtitle: "Descarga RSS feed",
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
                <h1 class="title-single">{texto.title}</h1>
              </div>
            </div>
            <div class="col-md-12 col-lg-4">
              <nav aria-label="breadcrumb" class="breadcrumb-box d-flex justify-content-lg-end">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">
                    <NavLink exact to="/News">
                      Home
                    </NavLink>
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

      <section class="contact">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <div class="contact-map box">
                <div id="map" class="contact-map texto-justificado">
                  <div class="col-md-12 col-lg-12 text-center">
                    <a href={FILX} target="_blank">
                      <h2 className="pb-4">{texto.subtitle}</h2>
                      <img src={RSS} class="img-fluid zoom-news" width="200" />
                    </a>
                  </div>
                  <br />

                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
    </div>
  );
};

export default News;
