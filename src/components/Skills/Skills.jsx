import React from "react";
import style from "./Skills.module.css";
import { motion } from "framer-motion";
import { react } from "../Skills/react.png";
import { redux } from "./redux.png";
import { useTranslation } from "react-i18next";
import Noteskills from "./NoteSkills";
const Skills = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <section className={style.section} id='Skills'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{t("NavBar.Skills")}</h1>
        </div>
        <div className={style.filas}>
          <div className={style.fila1}>
            <motion.div
              className={style.box}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, 350, 350, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box2}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 450, 450, 0],
                translateY: [0, 0, 350, 350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box3}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, -450, -450, 0],
                translateY: [0, 0, 350, 350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box4}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, 350, 350, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </div>
          <div className={style.fila2}>
            <motion.div
              className={style.box5}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, -350, -350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box6}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 450, 450, 0],
                translateY: [0, 0, -350, -350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box7}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, -450, -450, 0],
                translateY: [0, 0, -350, -350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
            <motion.div
              className={style.box8}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, -350, -350, 0],
              }}
              transition={{
                duration: 2,
                ease: "easeInOut",
                times: [0, 0.4, 0.6, 0.8, 1],
                loop: Infinity,
                repeatDelay: 1.5,
              }}
            />
          </div>
        </div>
        <div className={style.mouseScroll}>
          <div className={style.arrowScroll}></div>
        </div>
      </div>
      <div className={style.notebook}>
        <Noteskills />
      </div>
    </section>
  );
};

export default Skills;
