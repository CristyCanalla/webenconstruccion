import React, { useEffect } from "react";
import style from "./Projects.module.css";
import Slider from "../Proslider/Proslider";
import Aos from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";
const Projects = () => {
  const { t, i18n } = useTranslation("global");
  
  const mockImagenes = [
        {
            link: "https://calculatorvirtual.netlify.app/",
            url: "https://th.bing.com/th/id/R.d0168f61e4182ee66d413cd79cc0e6b6?rik=k%2fI6vzQ2mYSCgw&riu=http%3a%2f%2fis4.mzstatic.com%2fimage%2fthumb%2fPurple128%2fv4%2f56%2f24%2f88%2f562488f3-e95f-6d20-d49b-4ae045832e78%2fsource%2f576x768bb.jpg&ehk=vNkjYCU0x7X9Pn%2b6TlE6CHuo0OBBmnwV226i%2bL2XmXU%3d&risl=&pid=ImgRaw&r=0",
            name: t("CALCULATOR "),
            description: t("Only Html Css and javascript used"),
        },
        {
            link: "https://tictactoevirtual.netlify.app/",
            url: "https://images-eu.ssl-images-amazon.com/images/I/812sMTUm3AL.png",
            name: t("TIC-TAC-TOE"),
            description: t("Only Html Css and javascript used"),
        },
        {
            link: "https://namastespa.netlify.app",
            url: "https://img.freepik.com/vector-gratis/manos-namaste-dibujado-mano_23-2147702367.jpg?w=2000",
            name: t("Namaste Samkhya"),
            description: t("Only Html Css"),
        },
        {
            link: "https://portafolio-one-chi.vercel.app/",
            url: "https://www.lluviadigital.com/wp-content/uploads/2020/02/e-commerce-que-es-Lluvia-Digital.jpg",
            name: t("Web Site"),
            description: t("Only Html Css and javascript used"),
        },
    ];
    useEffect(() => {
        Aos.init({ duration: 1500, once: true });
      }, []);
    
      return (
        <section className={style.section} id='Projects'>
          <div className={style.container}>
            <div className={style.title}>
              <h1>{t("NavBar.Projects")}</h1>
            </div>
            <div data-aos='fade-right' className={style.carru}>
              <Slider imagenes={mockImagenes} />
            </div>
            <div className={style.mouseScroll}>
              <div className={style.arrowScroll}></div>
            </div>
          </div>
          ;
        </section>
      );
    };
    
    export default Projects;