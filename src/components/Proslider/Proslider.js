import React from "react";
import style from "./Proslider.module.css";

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
    <div className={style.container}>
      <button onClick={anteriorImagen} className={style.btn}>
        ←
      </button>
      {imagenes.map((imagen, index) => {
        return (
          <div
            className={
              imagenActual === index
                ? `${style.slide} ${style.active}`
                : style.slide
            }
            key={index}
          >
            {imagenActual === index && (
              <div className={style.contenedor}>
                <div className={style.mobile}>
                  <div className={style.text}>
                    <h2 className={style.name}>{imagen.name}</h2>
                    <p className={style.description}>{imagen.description}</p>
                  </div>
                  <div className={style.imgC}>
                    <a href={imagen.link} rel='noreferrer' target='_blank'>
                      <img
                        key={index}
                        src={imagen.url}
                        alt='imagen'
                        className={style.img}
                      />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}
      <button onClick={siguienteImagen} className={style.btn}>
        →
      </button>
    </div>
  );
}

export default Slider;
