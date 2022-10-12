import React from "react";
import estilos from "./Slider.module.css";

function Slider({ imagenes }) {
  // Variables y Estados
  const [imagenActual, setImagenActual] = React.useState(0);
  const cantidad = imagenes?.length;

  // Return prematuro para evitar errores
  if (!Array.isArray(imagenes) || cantidad === 0) return;

  const siguienteImagen = () => {
    setImagenActual(imagenActual === cantidad - 1 ? 0 : imagenActual + 1);
    console.log(imagenActual);
  };

  const anteriorImagen = () => {
    setImagenActual(imagenActual === 0 ? cantidad - 1 : imagenActual - 1);
    console.log(imagenActual);
  };

  return (
    <div className={estilos.container}>
      <button onClick={anteriorImagen} className={estilos.btn}>
        ←
      </button>
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${estilos.slide} ${estilos.active}`
                : estilos.slide
            }
            key={index}
          >
            {imagenActual === index && (
              <div>
                <div className={estilos.text}>
                  <h2 className={estilos.name}>{imagen.name}</h2>
                  <p className={estilos.description}>{imagen.description}</p>
                </div>
                <div className={estilos.imgC}>
                  <a href={imagen.link} rel='noreferrer' target='_blank'>
                    <img
                      key={index}
                      src={imagen.url}
                      alt='imagen'
                      className={estilos.img}
                    />
                  </a>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <button onClick={siguienteImagen} className={estilos.btn}>
        →
      </button>
    </div>
  );
}

export default Slider;
