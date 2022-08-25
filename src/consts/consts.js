import React from "react";
//imagenes
//imagenes tecnologias iconos
import python from "../assets/icons/tecnologys/python.png";
import javaScript from "../assets/icons/tecnologys/javascript.png";
import html from "../assets/icons/tecnologys/html.png";
import css from "../assets/icons/tecnologys/css.png";
import vim from "../assets/icons/tecnologys/vim.png";
import cpp from "../assets/icons/tecnologys/cpp.png";
import kotlin from "../assets/icons/tecnologys/Kotlin.svg";
import java from "../assets/icons/tecnologys/java.png";
import php from "../assets/icons/tecnologys/php.png";
import swift from "../assets/icons/tecnologys/swift.svg";
import sass from "../assets/icons/tecnologys/sass.svg";
import ruby from "../assets/icons/tecnologys/ruby.png";
import shell from "../assets/icons/tecnologys/programming.png";
import cS from "../assets/icons/tecnologys/cs.png";
import c from "../assets/icons/tecnologys/c-program.png";
import document from "../assets/icons/tecnologys/document.png";
//svg
import { GitHub, Linkedin } from "../components/layouts/Svg";

export const constans = () => {
  return {
    color: {
      white: "#fefefe",
      white2: "#E5E7EB",
      black: "#000",
      blue: "#0070F0",
      gray: "#777777",
      darkSalmon: "#E9967A",
      lightSalmon: "#FFA07A",
      darkBlue: "#2C3E50",
      yellow: "#F4D03F",
    },
    backgrounds: {
      PMU: [
        'https://images.pexels.com/photos/574077/pexels-photo-574077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2653362/pexels-photo-2653362.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/574069/pexels-photo-574069.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/574073/pexels-photo-574073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/270373/pexels-photo-270373.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/89724/pexels-photo-89724.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/205505/pexels-photo-205505.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1181271/pexels-photo-1181271.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/5483077/pexels-photo-5483077.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ],
      P404U: [
        'https://images.pexels.com/photos/772803/pexels-photo-772803.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/633198/pexels-photo-633198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1022411/pexels-photo-1022411.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/572897/pexels-photo-572897.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/733995/pexels-photo-733995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/933054/pexels-photo-933054.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/15382/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/87499/pexels-photo-87499.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2835436/pexels-photo-2835436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/2695391/pexels-photo-2695391.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
      ]
    },
    icons: {
      javaScript: javaScript,
      python: python,
      vim: vim,
      html: html,
      css: css,
      swift: swift,
      cpp: cpp,
      java: java,
      kotlin: kotlin,
      php: php,
      c: c,
      cS: cS,
      shell: shell,
      ruby: ruby,
      sass: sass,
      document: document,
    },
    size: {
      full: "100%",
      superLittle: "20px",
      litle: "30px",
      medium: "60px",
      big: "80px",
      shadow: {
        shadownGen: 6,
        litle: 10,
        medium: 20,
        big: 30,
      },
    },
    gradient: {
      Main:
        "linear-gradient( 94.3deg, rgba(26, 33, 64, 0.650) 10.9%, rgba(81, 84, 115, 0.650) 87.1% )",
      blueRoseLight:
        "linear-gradient(62deg, rgba(142, 197, 252, 0.600) 0%, rgba(142, 197, 252, 0.600) 100%)",
      roseHard:
        "linear-gradient( 134.6deg,  rgba(201,37,107,0.600) 15.4%, rgba(116,16,124,0.600) 74.7% )",
      Secundary:
        "linear-gradient(94.3deg, rgba(26,33,64,0.800) 10.9%, rgba(81,84,115,0.750) 87.1% )",
      cardOne: "linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)",
      cardTwo:
        "linear-gradient( 109.6deg,  rgba(209,0,116,1) 11.2%, rgba(110,44,107,1) 91.1% )",
    },
    fonts: {
      montserrat: '"Montserrat", sans-serif',
      relaway: '"Raleway", sans-serif',
      roboto: '"Roboto", sans-serif',
      Arbutus: '"Arbutus Slab", seri',
      Koisei: '"Kaisei Opti", serif'
    },
    listSocialNetworks: [
      {
        svg: (
          <GitHub
            width={"25px"}
            height={"25px"}
            color={"#fff"}
            key="github-icon-options"
          />
        ),
        textOption: "GitHub",
        direccion: "https://github.com/Eduardo619123R",
      },
      {
        svg: (
          <Linkedin
            width={"25px"}
            height={"25px"}
            color={"#fff"}
            key="linkedin-icon-options"
          />
        ),
        textOption: "Linkedin",
        direccion:
          "https://mx.linkedin.com/in/eduardo-antonio-rangel-serrano-30a330226",
      },
    ],
    texts: {
      optionsNavBar: [
        {
          text: "Inicio",
          direccion: "#container-background-img",
        },
        {
          text: "Mas informacion",
          direccion: "#seccion-about-more-info",
        },
        {
          text: "Proyectos",
          direccion: "#proyects-seccion",
        },
        {
          text: "Contacto",
          direccion: "#contact-seccion",
        },
      ],
      title: [
        `EDUARDO ANTONIO 
         RANGEL SERRANO`,
        "PROGRAMADOR FULL-STACK",
      ],
      description: [
        "Desarrollador web full-stack Html, CSS, JS, React.",
        "Conocimientos en lenguajes como Python, Java, C++.",
        "Manejo de bases de datos SQL, MongoDB.",
      ],
      about: [
        "Inicie en la programación a los 18 años, de manera comprometida y profesional. El primer lenguaje que aprendí fue Python, con él me familiarice con la lógica para la programación y conceptos básicos.",
        "Luego mi curiosidad me dirigio a otro campo las tecnologías web, como funcionaba HTML, CSS y JavaScript, así creando mis primeras prácticas en el navegador.",
        "Después mi necesidad de almacenar y organizar mis proyectos me llevo a conocer Git como un control de versiones, aprendí a usarlo y subí mis prácticas básicas a la plataforma de GitHub. En estos momentos estoy en curso de terminar la carrera de ingeniería en inteligencia artificial y en proceso de completar nuevos y mejores trabajos.",
      ],
      hobbies: [
        'Calistenia',
        'Gym',
        'Gamer',
        'Reposteria',
      ]
    },
  };
};
