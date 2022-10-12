import React from "react";
import style from "./Welcome.module.css";

const Welcome = () => {
  return (
    <section className={style.section} id='Home'>
      <div className={style.container}>
        <div className={style.rain}>
          <div className={style.raindrop}></div>
          <div className={style.titulo}>
            <h2>
              <div className={style.letras}>
                <span>
                  <i></i>C
                </span>
                <span>
                  <i></i>R
                </span>
                <span>
                  <i></i>I
                </span>
                <span>
                  <i></i>S
                </span>
                <span>
                  <i></i>T
                </span>
                <span>
                  <i></i>I
                </span>
                <span>
                  <i></i>N
                </span>
                <span>
                  <i></i>A
                </span>
              </div>
              <div className={style.letras2}>
                <span>
                  <i></i>G
                </span>
                <span>
                  <i></i>ó
                </span>
                <span>
                  <i></i>M
                </span>
                <span>
                  <i></i>E
                </span>
                <span>
                  <i></i>Z
                </span>
              </div>
            </h2>
          </div>
          <div className={style.mouseScroll}>
            <div className={style.arrowScroll}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
