import React, { useEffect } from "react";
//componentes
import { ButtonDireccion } from "../../../components/common/index";
import { GitHub, IconDownload } from "../../../components/layouts/Svg";
//contexto
import { useRepos } from "../../../hooks/contexts";
//constantes
import { constans } from "../../../consts/consts";
const { fonts, color, size } = constans();

export function CardProyect() {
  const repo = useRepos();

  useEffect(() => {
    const card = document.getElementById("box-card-proyecto");
    card.addEventListener("click", () => {
      card.style.transform = "translateY(-150%)";
    });
  }, []);

  return (
    <div
      className="background-card-repo w-screen h-screen fixed flex flex-col justify-center items-center p-9"
      style={{ zIndex: "100", backgroundColor: "rgba(0,0,0,0.8)" }}
      id="box-card-proyecto"
    >
      <div className="card-proyect-download-repo w-full h-full bg-gray-100 rounded-xl shadow-2xl flex flex-row">
        <div className="container-img-repo w-4/6 h-full flex flex-col items-center p-4">
          <img
            src={repo.img}
            alt=""
            className="w-full h-full object-cover rounded-xl shadow-2xl"
          />
        </div>
        <div className="container-info-repo w-2/6 h-full flex flex-col justify-center p-5">
          <h2 style={{ fontFamily: fonts.relaway }}>{repo.name}</h2>
          <p style={{ fontFamily: fonts.relaway }}>{repo.description}</p>
          <div className="container-buttons-repo w-full flex flex-row justify-between gap-6">
            <ButtonDireccion
              id="button-download-repo"
              direccion={repo.download}
              key="button-download-direccion-repo"
            >
              <IconDownload
                color={color.white}
                width={size.superLittle}
                height={size.superLittle}
                key="icon-download-button-card-proyect"
              />
              Descarga
            </ButtonDireccion>
            <ButtonDireccion
              id="button-direccion-repository"
              direccion={repo.direccion}
              key="button-redireccion-direccion-repo"
            >
              <GitHub
                color={color.white}
                width={size.superLittle}
                height={size.superLittle}
                key="icon-github-button-card-proyect"
              />
              Ver repositorio
            </ButtonDireccion>
          </div>
        </div>
      </div>
    </div>
  );
}
