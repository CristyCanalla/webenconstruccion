import React from "react";
import style from "./Certificate.module.css";
import Slider from "../Slider/Slider";
import { useTranslation } from "react-i18next";
const Certificate = () => {
  const { t, i18n } = useTranslation("global");
  const mockImagenes = [
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659732091/Titulos/titulo_henry_s3zgfj.png",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659942923/Titulos/react_basico_cdkv1l.png",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434565/Titulos/UC-504f862e-f374-482a-b52c-ce3f6a78d856_gidwqf.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434564/Titulos/UC-ca589ea1-2c2d-4db8-a62f-6e4ffa69ac5c_ho4o9a.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434562/Titulos/UC-0432c82d-3151-4f96-bf54-c430a2e9a023_pb4hg3.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434556/Titulos/Titulo_Teletrabajo_Damian_qaessu.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434554/Titulos/UC-1b3279bf-3621-4928-b756-6320827706c2_cvhwx5.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434554/Titulos/UC-19d29856-dcfd-4cd4-9736-5cc024c80557_lmvpv9.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434553/Titulos/UC-7b16cbe0-9296-4129-bbec-f3f6b4cad76d_txxzfk.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434551/Titulos/UC-88f850bf-d281-420e-bbde-6e6441c04df5_tlq1oi.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434551/Titulos/UC-6b10576e-d5df-420c-8d24-37489935bb91_m9d0xf.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659434549/Titulos/UC-2569ec81-e3b1-4e8d-8463-d28ee77130cb_alj1wd.jpg",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659942923/Titulos/html_basico_mjycqc.png",
    },
    {
      url: "https://res.cloudinary.com/cordoba/image/upload/v1659942923/Titulos/js_envfne.png",
    },
  ];
  return (
    <section className='section' id='Certificate'>
      <div className={style.container}>
        <div className={style.title}>
          <h1>{t("NavBar.Certificates")}</h1>
        </div>
        <Slider imagenes={mockImagenes} />
        <div className={style.mouseScroll}>
          <div className={style.arrowScroll}></div>
        </div>
      </div>
    </section>
  );
};

export default Certificate;
