import React from "react";
//componentes
import { NavBar, Footer } from "../../components/layouts/index.js";
import { Main } from "./Main/index";
import { Proyects } from "./Proyects/index";
import { CardProyect } from "./Proyects/alert";
import { AboutMore } from "./AboutMore/index";
import { Contacto } from "./Contact/index";

export function Home() {
  return (
    <div className="w-screen h-auto">
      <CardProyect key="card-repo-home" />
      <NavBar key="nav-bar-home" />
      <Main />
      <AboutMore />
      <Proyects />
      <Contacto />
      <Footer />
    </div>
  );
}
