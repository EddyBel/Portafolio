import React from "react";
//contexto del repositorio marcado
import { useRepos } from "../../../hooks/contexts";
//utils
import { tecnologyImg } from "../../../utils/index";
// constantes
import { constans } from "../../../consts/consts";

const { fonts } = constans();

export function ItemProyect({
  color,
  title,
  titleRepo,
  language,
  img,
  direccion,
  download,
  description,
}) {
  const repo = useRepos();
  const imgTec = tecnologyImg(language);

  const data = {
    name: title,
    nameRepo: titleRepo,
    description: description,
    img: img,
    direccion: direccion,
    download: download,
  };

  const clickProyect = () => {
    repo.addDataRepo(data);
    const card = document.getElementById("box-card-proyecto");
    card.style.transform = "translateY(0%)";
  };

  return (
    <li
      className="container-item-pro box-item-proyect w-64 h-96 rounded-sm shrink-0 snap-center overflow-hidden hover:scale-105 duration-150"
      onClick={clickProyect}
    >
      <div
        className="proyect-item w-full h-5/6 cursor-pointer transition-all duration-200 rounded-bl-sm"
        style={{
          background: color,
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        id="container-img-list-proyects"
      >
        <div className="hover-card-proyect-item w-full absolute"></div>
      </div>
      <div className="w-full h-full pl-1 pt-1 gap-1">
        <h2
          className="text-xl"
          style={{ fontFamily: fonts.relaway, fontWeight: "bold" }}
        >
          {title}
        </h2>
        <div className="w-full h-8 flex flex-row justify-start items-center gap-3">
          <img src={imgTec} alt="" className="w-7 h-7" />
          <p
            className="text-sm"
            style={{ fontFamily: fonts.relaway, fontWeight: "bold" }}
          >
            {language}
          </p>
        </div>
      </div>
    </li>
  );
}
