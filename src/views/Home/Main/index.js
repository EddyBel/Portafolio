import React, { useEffect } from "react";
//estilos
import "./index.css";
//scripts
import { bucleInterval, listRandom } from "../../../utils/index";
//constantes
import { constans } from "../../../consts/consts";
const { gradient, backgrounds, fonts, texts } = constans();
//obtener imagen random
const img = listRandom(backgrounds.PMU)
//contadores
let count = 0;

export function Main() {
  useEffect(() => {
    const background = document.getElementById("container-background-img");
    background.style.backgroundImage = `${gradient.Main}, url('${img}')`;
    description();
  }, []);
  return (
    <div
      className="w-screen min-h-screen bg-cover bg-no-repeat bg-center bg-fixed flex flex-col justify-center items-center gap-12"
      id="container-background-img"
    >
      <h2
        className="title-aplication text-8xl text-gray-400 text-center"
        style={{ fontFamily: `${fonts.montserrat}` }}
      >
        {texts.title[0]}
      </h2>
      <div className="box-texts-descriptions w-3/5 h-16 mb-5 mt-5 relative">
        {texts.description.map((text) => {
          count = count + 1;
          return (
            <p
              className="textDescription text-3xl text-gray-400 text-center absolute left-0 top-0 right-0 bottom-0 duration-150"
              style={{ fontFamily: `${fonts.relaway}` }}
              key={`text-description-main-${count}`}
            >
              {text}
            </p>
          );
        })}
      </div>
    </div>
  );
}

const description = () => {
  const texts = document.querySelectorAll(".textDescription");
  bucleInterval(
    texts,
    (i, props) => {
      //El primer elemento muestralo
      texts[i].style.opacity = "100";
      //Vuelve a recorrer el objeto
      for (let j = 0; j < texts.length; j++) {
        //SI el objeto actual es igual al objeto del nuevo recorrido saltalo, si no esconde el elemento
        if (texts[i] === texts[j]) {
          continue;
        } else {
          texts[j].style.opacity = "0";
        }
      }
    },
    null,
    5000
  );
};
