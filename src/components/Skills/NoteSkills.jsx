import React from "react";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import styleNote from "./Noteskills.module.css";

const Skills = () => {
  const { t,  } = useTranslation("global");
  return (
    <section className={styleNote.section} id='Skills'>
      <div className={styleNote.container}>
        <div className={styleNote.title}>
          <h1>{t("NavBar.Skills")}</h1>
        </div>
        <div className={styleNote.filas}>
          <div className={styleNote.fila1}>
            <motion.div
              className={styleNote.box}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, 220, 220, 0],
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
              className={styleNote.box2}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 450, 450, 0],
                translateY: [0, 0, 220, 220, 0],
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
              className={styleNote.box3}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, -450, -450, 0],
                translateY: [0, 0, 220, 220, 0],
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
              className={styleNote.box4}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, 220, 220, 0],
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
          <div className={styleNote.fila2}>
            <motion.div
              className={styleNote.box5}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, -220, -220, 0],
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
              className={styleNote.box6}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 450, 450, 0],
                translateY: [0, 0, -220, -220, 0],
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
              className={styleNote.box7}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, -450, -450, 0],
                translateY: [0, 0, -220, -220, 0],
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
              className={styleNote.box8}
              animate={{
                scale: [1, 2, 2, 1, 1],
                rotate: [0, 0, 360, 360, 0],
                borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                translateX: [0, 0, 0, 0, 0],
                translateY: [0, 0, -220, -220, 0],
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
      </div>
    </section>
  );
};

export default Skills;
