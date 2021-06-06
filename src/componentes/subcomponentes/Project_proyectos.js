import React from "react";
import "../../css/proyectos.css";

const Project_proyectos = ({ title, abstract, link, foto, app, mas }) => {
  return (
    <>
      <>
        <a href={app} target="_blank">
          <h4 className="publicacion-encabezado-1-proyectos">{title}</h4>
        </a>
        <p className="publicacion-encabezado-2-proyectos">{abstract}</p>
        <p className="publicacion-encabezado-3-proyectos pb-3">
          {mas}
          <a href={link} target="_blank">
            {link}
          </a>
        </p>
        <div class="col-md-12 col-lg-12 text-center">
          <a href={app} target="_blank">
            <img src={foto} alt="" class="img-fluid" />
          </a>
        </div>
      </>
    </>
  );
};

export default Project_proyectos;
