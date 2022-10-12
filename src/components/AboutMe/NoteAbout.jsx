import React from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
import styleNote from "./NoteAboutMe.module.css";
import Cv from "../AboutMe/CV.jpeg";
import { useEffect } from "react";
import { AiFillGithub } from "react-icons/ai";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import Curriculum from "../AboutMe/CVmcgdev.png";
const AboutMe = () => {
  useEffect(() => {
    Aos.init({ duration: 1500, once: false });
  }, []);

  const { t, } = useTranslation("global");

  return (
    <section className={styleNote.section} id='About'>
      <div className={styleNote.containerPrincipal}>
        <div className={styleNote.subcontainer}>
          <div className={styleNote.imagen} data-aos='fade-right'>
            <img
              id='perfil'
              className={styleNote.scroll}
              src={Cv}
              alt=''
              height={250}
              width={250}
            />
          </div>
          <div className={styleNote.buttons}>
            <button className={styleNote.slide}>
              <a
                href={Curriculum}
                target='_blank'
                download rel="noreferrer"
              >
                {t("AboutMe.cv")}
              </a>
            </button>
          </div>
        </div>
        <div className={styleNote.subcontainer2} data-aos='fade-up'>
          <div className={styleNote.transicion}>
            <div className={styleNote.infoText}>
              <p>{t("AboutMe.Flasher")}</p>
              <ul>
                <li>Front-End</li>
                <li className={styleNote.nombreBack}> Back-End</li>
                <li className={styleNote.nombrePersonal}>Full-Stack</li>
              </ul>
            </div>
            <div className={styleNote.botoncitos}>
              <a href='https://github.com/CristyCanalla' target='_blank' rel="noreferrer">
                <AiFillGithub />
              </a>
              <a href='https://www.instagram.com/cristy_canalla/' target='_blank' rel="noreferrer">
                <AiOutlineInstagram />
              </a>
              <a
                href='https://www.linkedin.com/in/mcgdeveloper'
                target='_blank' rel="noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
          <div className={styleNote.bot}>
            <p>
              {t("AboutMe.bio")}
              <br></br>
              {t("AboutMe.bio2")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
