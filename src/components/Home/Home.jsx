import React from "react";
import AboutMe from "../AboutMe/AboutMe";

import NavBar from "../NavBar/NavBar";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Welcome from "../Welcome/Welcome";
import style from "./Home.module.css";

const Home = () => {
  return (
    <div className={style.fullscren}>
      {" "}
      <NavBar />
      <div className={style.container}>
        <section className={style.sec1}>
          {" "}
          <Welcome />
        </section>
      </div>
      <div className={style.container}>
        <section className={style.sec2}>
          <AboutMe />
        </section>
      </div>
      <div className={style.container}>
        <section className={style.sec3}>
          {" "}
          <Skills />
        </section>
      </div>
      <div className={style.container}>
        <section className={style.sec4}>
          {" "}
          <Projects />
        </section>
      </div>
      
      
    </div>
  );
};

export default Home;
