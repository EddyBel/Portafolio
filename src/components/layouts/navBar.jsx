import React, { useEffect } from "react";
//Estilos
import "./navBar.css";
//componentes
import { ButtonDrop } from "../common/index";
//svg
import { BurguerNavBar } from "../layouts/Svg";
//constantes
import { constans as consts } from "../../consts/consts";
const { listSocialNetworks, texts, color, size } = consts();

//Menu abierto o cerrado
let dropMenuVer = false;
//Contadores
let count = 0;

// Baja desaparece
// Sube se muestra

export function NavBar() {
  useEffect(() => {
    colorNavBar();
    dropDownMenu();
    ScrollNavBar();
  }, []);

  return (
    <header
      className="navBar-Box flex flex-wrap sm:justify-start sm:flex-nowrap w-full bg-transparent text-sm py-4 fixed z-50 duration-200"
      id="nav-Bar-container"
    >
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a className="flex-none text-xl font-semibold text-gray-300" href="/">
            EB
          </a>
          <div className="sm:hidden cursor-pointer">
            {/*Aqui ira el boton tipo hamburguesa*/}
            <BurguerNavBar
              color={color.white2}
              width={size.litle}
              height={size.litle}
              classN="icon-burguer-navBar"
              key="burguer-icon-nav-bar"
            />
          </div>
        </div>
        <div
          id="navbar-dark"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
            {texts.optionsNavBar.map((text) => {
              count = count + 1;
              return (
                <a
                  className="font-medium text-gray-300 hover:text-gray-100"
                  href={text.direccion}
                  key={`options-Nav-Bar-main-${count}`}
                >
                  {text.text}
                </a>
              );
            })}
            <ButtonDrop
              titleButton="Redes"
              listOptions={listSocialNetworks}
              key="Button-Drop-Social-Networks"
            />
          </div>
        </div>
      </nav>
      <div
        className="flex flex-col overflow-hidden bg-gray-900 rounded-xl w-11/12 h-0 m-auto justify-center items-center p-3 gap-3 mt-4 shadow-lg duration-300 absolute left-0 right-0 bottom-0 top-14"
        id="nav-bar-box-drop-menu"
      >
        {texts.optionsNavBar.map((text) => {
          count = count + 1;
          return (
            <a
              className="font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-600 w-full p-5 rounded-xl flex flex-col justify-center items-center duration-200"
              href={text.direccion}
              key={`options-Nav-Bar-menu-${count}`}
            >
              {text.text}
            </a>
          );
        })}
        <div className="flex flex-row gap-5 w-full">
          {listSocialNetworks.map((SocialNetwork) => {
            count = count + 1;
            return (
              <a
                className="font-medium text-gray-300 hover:text-gray-100 hover:bg-gray-600 w-full p-5 rounded-xl flex flex-col justify-center items-center duration-200 gap-2"
                href={SocialNetwork.direccion}
                key={`option-social-network-${count}`}
              >
                {SocialNetwork.svg}
                {SocialNetwork.textOption}
              </a>
            );
          })}
        </div>
      </div>
    </header>
  );
}

//Cambia el color con el scroll del navBar
const colorNavBar = () => {
  const navBar = document.getElementById("nav-Bar-container");
  const w = window;
  //Evento del scroll
  w.addEventListener("scroll", () => {
    if (w.scrollY > 15) {
      navBar.style.backgroundColor = "rgba(31,41,55)";
    } else {
      navBar.style.backgroundColor = "transparent";
    }
  });
};

//Desplega el menu
const dropDownMenu = () => {
  const icon = document.querySelector(".icon-burguer-navBar");
  const dropMenu = document.getElementById("nav-bar-box-drop-menu");
  //evento de escucha del click en el icono
  icon.addEventListener("click", () => {
    if (!dropMenuVer) {
      dropMenu.style.height = "400px";
      dropMenu.style.transform = "translateX(0%)";
      dropMenu.style.opacity = "100";
      dropMenuVer = true;
    } else {
      dropMenu.style.height = "0px";
      dropMenu.style.transform = "translateX(-150%)";
      dropMenu.style.opacity = "0";
      dropMenuVer = false;
    }
  });
  //evento de escucha click de opciones
  dropMenu.addEventListener("click", () => {
    dropMenu.style.height = "0px";
    dropMenu.style.transform = "translateX(-150%)";
    dropMenu.style.opacity = "0";
    dropMenuVer = false;
  });
};

//Ocultar la barra de navegacion
const ScrollNavBar = () => {
  const navBar = document.getElementById("nav-Bar-container");
  const w = window;

  // Desplazamiento
  let scrollPos = 0;
  let delimiter;

  // Evento de scroll
  w.addEventListener("scroll", () => {
    delimiter = document.body.getBoundingClientRect().top;
    if (delimiter > scrollPos) {
      navBar.style.transform = "translateY(0%)";
    } else {
      navBar.style.transform = "translateY(-100%)";
    }
    scrollPos = delimiter;
  });
};
