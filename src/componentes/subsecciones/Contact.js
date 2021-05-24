import React, { useState, useEffect } from "react";

const Contact = ({ idioma }) => {
  const [texto, setTexto] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (idioma) {
      setTexto({
        contact: "Contact US",
        Coordinador: "Coordinator:",
        Contacto: "Contact:",
      });
    } else {
      setTexto({
        contact: "Contacto",
        Coordinador: "Coordinador:",
        Contacto: "Contacto:",
      });
    }
  }, [idioma]);

  useEffect(() => console.log("mounted"), []);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div className="animate__animated animate__fadeIn">
      <section class="intro-single">
        <div class="container">
          <div class="row">
            <div class="col-md-12 col-lg-8">
              <div class="title-single-box">
                <h1 class="title-single">{texto.contact}</h1>
                <span class="color-text-a">
                  <br />
                  <b>{texto.Coordinador}</b> <br />
                  Ing. Gustavo Ernesto Navas Ruilova, MSc. <br />
                  <br />
                  <b>{texto.Contacto}</b> <br />
                  gnavas@ups.edu.ec
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
                    {texto.contact}
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
                <div id="map" class="contact-map">
                  {loading ? <div className="animate__animated animate__flash animate__slower">Loading Map...</div> : null}

                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15959.076717437165!2d-78.55472765139231!3d-0.28436977838125005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d598bb780cdf8f%3A0x71cbab6b6dcb5b6a!2sUniversidad%20Polit%C3%A9cnica%20Salesiana%20(Sur)!5e0!3m2!1ses-419!2sec!4v1621615181975!5m2!1ses-419!2sec"
                    width="100%"
                    height="450"
                    frameborder="0"
                    allowfullscreen
                    onLoad={handleLoad}
                    className="animate__animated animate__fadeIn"
                  ></iframe>
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

export default Contact;
