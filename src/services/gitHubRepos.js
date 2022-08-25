import { getAPI } from "./getAPI";
//importa las constantes
import { constans } from "../consts/consts";
const { img } = constans();

const API = "https://api.github.com/users/Eduardo619123R";

//peticion a api de github
export const getApi = async (paramAPI, setRepos) => {
  const response = await fetch(`${API}/${paramAPI}`);
  const responseJson = await response.json();
  return responseJson;
};
//api de imagenes
export const API_IMG_REPO = (nameRepo, branch, path) => {
  // Obtener la imagen
  const API_IMG = `https://raw.githubusercontent.com/Eduardo619123R/${nameRepo}/${branch}/src/assets/${path}`;
  return API_IMG;
};
//verificar si la imagen esta donde deve de estar
export const getImgRepo = async (name, branch = "main", nameImg) => {
  const response = getAPI(API_IMG_REPO(name, branch, nameImg));
  //validacion de imagen
  if ((await response).status === 200) {
    return API_IMG_REPO(name, branch, nameImg);
  } else {
    return img.proDef;
  }
};
