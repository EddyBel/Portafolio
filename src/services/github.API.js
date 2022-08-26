import { user, pathFileImg } from '../config.app'

const API = (userName) => (`https://api.github.com/users/${userName}`)
const API_File = (userName, repoName, path) => `https://raw.githubusercontent.com/${userName}/${repoName}/${path}`
const API_Download_File = (userName, repoName) => `https://github.com/${userName}/${repoName}/archive/refs/heads/main.zip`

// Obtener los repositorios
export const getRepos = () => fetch(API(user) + '/repos').then(response => response.json())

//Obtener la imagen de preview
export const getIMG = (repoName) => API_File(user, repoName, pathFileImg)

// Obtener el enlace de descarga
export const getDownload = (repoName) => API_Download_File(user, repoName)