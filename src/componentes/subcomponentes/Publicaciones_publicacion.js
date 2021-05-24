import React from "react";
import "../../css/publicaciones.css";

const Publicaciones_publicacion = ({ encabezado1, encabezado2, encabezado3 }) => {
  return (
    <>
      <h4 className="publicacion-encabezado-1">{encabezado1}</h4>
      <p className="publicacion-encabezado-2">{encabezado2}</p>
      <p className="publicacion-encabezado-3">{encabezado3}</p>
    </>
  );
};

export default Publicaciones_publicacion;
