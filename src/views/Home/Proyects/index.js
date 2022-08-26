import React, { useEffect } from "react";
//estilos
import "./index.css";
//componentes
import { ArrowLeft, ArrowRight } from "../../../components/layouts/Svg";
import { Spin } from "../../../components/common/index";
import { ItemProyect } from "./itemProyect";
// contextos
import { useRepositorios } from "../../../hooks/contexts"
// utils
import { translateElement, scaleElement, timeOut, lengString } from "../../../utils/index"
//constantes
import { constans } from "../../../consts/consts";
const { color, fonts, size } = constans();

let rotate = true;

export function Proyects() {
  //Repositorios
  const { repos, getIMG, getDownload } = useRepositorios()

  useEffect(() => {
    styleButtonsArrow();
    animationProyect()
  }, [repos]);

  return (
    <div
      className="w-screen min-h-screen bg-slate-200 flex flex-col justify-center pl-10 pr-10 pt-80 pb-80"
      id="proyects-seccion"
    >
      <div className="container-buttons-title-proyects flex flex-row justify-between">
        <h1
          className="text-5xl ml-5 mb-5 duration-500"
          style={{ fontFamily: fonts.montserrat, fontWeight: "bold" }}
          id="title-seccion-proyects"
        >
          Proyectos
        </h1>
        <div
          className="flex flex-row justify-center items-center gap-4 duration-500"
          id="box-arrow-buttons"
        >
          <div
            className="arrowDireccion rounded-full p-3 flex flex-row justify-center items-center cursor-pointer"
            id="box-arrow-left"
          >
            <ArrowLeft
              width={size.litle}
              height={size.litle}
              color={color.gray}
              classN="arrowLeft"
            />
          </div>
          <div
            className="arrowDireccion rounded-full p-3 flex flex-row justify-center items-center cursor-pointer"
            id="box-arrow-right"
          >
            <ArrowRight
              width={size.litle}
              height={size.litle}
              color={color.gray}
              classN="arrowRight"
            />
          </div>
        </div>
      </div>
      <ul
        className="w-full p-5 flex gap-5 overflow-x-auto overflow-y-hidden snap-x duration-700"
        id="box-list-proyects"
      >
        {!repos ? (
          <Spin />
        ) : (
          repos.map((repo) => {
            //Definir la direccion de la imagen de portada
            const img = getIMG(repo.name)
            //Direccion de descarga
            const download = getDownload(repo.name);
            //Filtrar el lenguaje
            const langauge = filterLanguage(repo.language);
            // Delimitar el titulo del repositorio
            const title = lengString(repo.name)
            //Cambiar el color de fondo
            if (rotate) {
              rotate = !rotate;
              return (
                <ItemProyect
                  color={color.blue}
                  title={title}
                  titleRepo={repo.name}
                  language={langauge}
                  key={repo.id}
                  img={img}
                  direccion={repo.html_url}
                  download={download}
                  description={repo.description}
                />
              );
            } else {
              rotate = !rotate;
              return (
                <ItemProyect
                  color={color.gray}
                  title={title}
                  titleRepo={repo.name}
                  language={langauge}
                  key={repo.id}
                  img={img}
                  direccion={repo.html_url}
                  download={download}
                  description={repo.description}
                />
              );
            }
          })
        )}
      </ul>
    </div>
  );
}

const filterLanguage = (language) => {
  if (language === undefined || language === null || language === "") {
    return "Documento";
  } else {
    return language;
  }
};

const scroll = (position) => {
  const boxProyects = document.getElementById("box-list-proyects");
  if (position === "left") {
    let positionXN = boxProyects.scrollLeft - 600;
    boxProyects.scrollTo({
      behavior: "smooth",
      left: positionXN,
    });
  } else {
    let positionXP = boxProyects.scrollLeft + 600;
    boxProyects.scrollTo({ behavior: "smooth", left: positionXP });
  }
};

const styleButtonsArrow = () => {
  const arrowLeft = document.querySelector(".arrowLeft");
  const arrowRight = document.querySelector(".arrowRight");
  const boxArrowLeft = document.getElementById("box-arrow-left");
  const boxArrowRight = document.getElementById("box-arrow-right");

  boxArrowLeft.addEventListener("click", () => {
    //Colorea el boton para señalar que fue seleccionado
    boxArrowLeft.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
    arrowLeft.style.fill = color.white;
    //Quita el color al segundo botton
    boxArrowRight.style.backgroundColor = "transparent";
    arrowRight.style.fill = color.gray;
    //Movimiento de Scroll
    scroll("left");
    //Regregsa los botones
    setTimeout(() => {
      boxArrowLeft.style.backgroundColor = "transparent";
      arrowLeft.style.fill = color.gray;
    }, 500);
  });
  //Evento del segundo boton
  boxArrowRight.addEventListener("click", () => {
    //Colorea el boton para señalar que fue seleccionado
    boxArrowRight.style.backgroundColor = "rgba(0, 0, 0, 0.534)";
    arrowRight.style.fill = color.white;
    //Quita el color al segundo botton
    boxArrowLeft.style.backgroundColor = "transparent";
    arrowLeft.style.fill = color.gray;
    //Movimiento de Scroll
    scroll("right");
    //Regregsa los botones
    setTimeout(() => {
      boxArrowRight.style.backgroundColor = "transparent";
      arrowRight.style.fill = color.gray;
    }, 500);
  });
};

// Animaciones de proyectos
const animationProyect = (repos) => {
  const d = document
  const w = window
  const title = d.getElementById('title-seccion-proyects')
  const boxButtons = d.getElementById('box-arrow-buttons')
  const boxProyects = d.getElementById('box-list-proyects')
  const proyects = d.querySelectorAll('.container-item-pro')

  w.addEventListener('scroll', () => {
    const positionProyects = boxProyects.getBoundingClientRect().top

    if (positionProyects <= 500) {
      translateElement(title, true, 'X', '-')
      translateElement(boxButtons, true, 'X', '+')
      translateElement(boxProyects, true, 'X', '-')
      setTimeout(() => {
        timeOut(proyects, (p, e) => {
          scaleElement(proyects[p], true)
        }, null, 300)
      }, 500)
    } else {
      translateElement(title, false, 'X', '-')
      translateElement(boxButtons, false, 'X', '+')
      translateElement(boxProyects, false, 'X', '-')
      timeOut(proyects, (p, e) => {
        scaleElement(proyects[p], false)
      }, null, 10)
    }

  })
}