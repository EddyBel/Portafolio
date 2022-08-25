//constantes
import { constans } from "../consts/consts";
const { icons } = constans();

export const tecnologyImg = (textLanguage) => {
  switch (textLanguage) {
    case "Python":
      return icons.python;
    case "Vim script":
      return icons.vim;
    case "HTML":
      return icons.html;
    case "CSS":
      return icons.css;
    case "JavaScript":
      return icons.javaScript;
    case "C++":
      return icons.cpp;
    case "C":
      return icons.c;
    case "C#":
      return icons.cS;
    case "Kotlin":
      return icons.kotlin;
    case "Java":
      return icons.java;
    case "Swift":
      return icons.swift;
    case "SCSS":
      return icons.sass;
    case "PHP":
      return icons.php;
    case "Ruby":
      return icons.ruby;
    case "Shell":
      return icons.shell;
    default:
      return icons.document;
  }
};
