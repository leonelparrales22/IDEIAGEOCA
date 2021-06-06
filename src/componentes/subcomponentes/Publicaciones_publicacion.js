import React from "react";
import "../../css/publicaciones.css";

const Publicaciones_publicacion = ({ enlace, encabezado1, encabezado2 }) => {
  return (
    <>
      <a href={enlace} target="_blank">
        <h4 className="publicacion-encabezado-1">{encabezado1}</h4>
      </a>
      <p className="publicacion-encabezado-2 pb-3">{encabezado2}</p>
      {/* <p className="publicacion-encabezado-3">{encabezado3}</p> */}
    </>
  );
};

export default Publicaciones_publicacion;
