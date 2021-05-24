import React, { useState } from "react";

const Miembros_card = ({ nombre, apellido, email, foto }) => {
  const [loaded, setLoaded] = useState(false);

  const handleLoad = () => {
    console.log("Hiiii");
    setLoaded(true);
  };

  return (
    <>
      {loaded ? (
        <div class="col-md-4 animate__animated animate__fadeIn">
          <div class="card-box-d">
            <div class="card-img-d">
              <img src={foto} alt="" onLoad={handleLoad} class="img-d img-fluid" />
            </div>
            <div class="card-overlay card-overlay-hover">
              <div class="card-header-d">
                <div class="card-title-d align-self-center">
                  <h3 class="title-d">
                    <a href="#" class="link-two">
                      {nombre} {apellido}
                      <br />
                      <br />
                      {/* {apellido} */}
                    </a>
                  </h3>
                </div>
              </div>
              <div class="card-body-d">
                {/* <p class="content-d color-text-a">Sed porttitor lectus nibh, Cras ultricies ligula sed magna dictum porta two.</p> */}
                <div class="info-agents color-a">
                  {/* <p>
                  <strong>Phone: </strong> +54 356 945234
                </p> */}
                  <p>
                    <strong>Email: </strong> {email}
                  </p>
                </div>
              </div>
              <div class="card-footer-d">
                <div class="socials-footer d-flex justify-content-center">
                  Resarch Group IDEIAGEOCA
                  {/* <ul class="list-inline">
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
                </ul> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          Loading...
          <img src={foto} alt="" onLoad={handleLoad} class="img-d img-fluid" />
        </div>
      )}
    </>
  );
};

export default Miembros_card;
