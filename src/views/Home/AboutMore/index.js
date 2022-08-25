import React, { useEffect } from "react";
//estilos
import "./index.css";
// utils
import { timeOut, translateElement, scaleElement } from "../../../utils/index"
//constantes
import { constans } from "../../../consts/consts";
const { fonts, texts } = constans();

//contadores
let count = 0;

export function AboutMore() {

  useEffect(() => {
    animationTexts()
  }, [])

  return (
    <div
      className="container-info-about min-h-screen w-screen bg-cover bg-fixed bg-white pt-44 pb-44"
      id="seccion-about-more-info"
    >
      <div className="container-about-texts w-11/12 md:w-10/12 m-auto flex flex-col gap-10 p-10 pb-60 pt-60">
        <h2 className="about-title text-4xl duration-500" style={{ fontFamily: fonts.montserrat }}>
          Sobre mi
        </h2>
        <div className="flex flex-row flex-wrap w-full justify-center gap-7">
          {texts.about.map((texto) => {
            count = count + 1;
            return (
              <p
                className="text-paragraph-about text-sm text-justify w-full lg:w-80 duration-300"
                style={{ fontFamily: fonts.montserrat }}
                key={`parrafo-${count}`}
              >
                {texto}
              </p>
            );
          })}
        </div>
        <div className="flex flex-col gap-3 items-center justify-around md:flex-row">
          <p className="title-hobbies-seccion font-bold text-sm duration-500" style={{
            fontFamily: fonts.montserrat
          }}>
            hobbies
          </p>
          <div className="flex flex-row gap-5">
            {
              texts.hobbies.map((hobbie) => {
                count = count + 1
                return <p className="hobbies-paragraphs text-sm duration-500" style={{
                  fontFamily: fonts.montserrat
                }} key={`hobbie-${count}`} >{hobbie}</p>
              })
            }
          </div>
        </div>
      </div>
    </div>
  );
}

//animaciones de aproximacion
const animationTexts = () => {
  const aboutInfo = document.querySelector('.container-about-texts')
  const w = window

  //Traer elementos
  const title = document.querySelector('.about-title')
  const paragraphs = document.querySelectorAll('.text-paragraph-about')
  const hobbieTitle = document.querySelector('.title-hobbies-seccion')
  const paragraphsHobbies = document.querySelectorAll('.hobbies-paragraphs')

  w.addEventListener('scroll', () => {
    const positionAbout = aboutInfo.getBoundingClientRect().top

    if (positionAbout <= 200) {
      translateElement(title, true, 'X', '-')
      // Recorre cada parrafo y muestralo
      timeOut(paragraphs, (pos, e) => {
        translateElement(paragraphs[pos], true, 'X', '-')
      }, null, 500)
      // Espera el tiempo indicado y muestra los hobbies
      setTimeout(() => {
        // Muestra el titulo hobbie
        scaleElement(hobbieTitle, true)
        // Recorre todos los hobbies y muestralos
        timeOut(paragraphsHobbies, (pos, e) => {
          scaleElement(paragraphsHobbies[pos], true)
        }, null, 300)
      }, 1200)
    } else {
      // Esconde el titulo
      translateElement(title, false, 'X', '-')
      // Recorre cada parrafo y escondelo
      timeOut(paragraphs, (pos, e) => {
        translateElement(paragraphs[pos], false, 'X', '-')
      }, null, 500)
      // Esconde el titulo del hobbie
      scaleElement(hobbieTitle, false)
      // Recorre los hobbies y escondelos
      timeOut(paragraphsHobbies, (pos, e) => {
        scaleElement(paragraphsHobbies[pos], false)
      }, null, 10)
    }
  })
}