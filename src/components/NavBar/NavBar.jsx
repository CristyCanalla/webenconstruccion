import React from "react";
import style from "./NavBar.module.css";
import { Link } from "react-scroll";
import es from "../NavBar/es.png";
import en from "./en.png";
import { useTranslation } from "react-i18next";
const NavBar = () => {
  const { t, i18n } = useTranslation("global");
  return (
    <div className={style.container}>
      <div className={style.lenguaje}>
        <button onClick={() => i18n.changeLanguage("en")}>
          <img src={en} alt="en" />
        </button>
        <button onClick={() => i18n.changeLanguage("es")}>
          <img src={es} alt="es" />
        </button>
      </div>
      <div className={style.botones}>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Home'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Home")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='About'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.About")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Skills'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Skills")}
        </Link>
        <Link
          activeClass={style.selectedLink}
          className={style.links}
          to='Projects'
          spy={true}
          smooth={true}
          duration={800}
        >
          {t("NavBar.Projects")}
        </Link>
        
        
      </div>
    </div>
  );
};

export default NavBar;
