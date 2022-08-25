export const bucleInterval = (object = [], cb = cbDefault, props, time) => {
  //Primera ejecucion rapida
  //Recorre cada posicion del objeto pasado como propiedad
  for (let i = 0; i < object.length; i++)
    (function (t) {
      setTimeout(function () {
        cb(t, props); //Ejecuta una funcion pasada como propiedad que se ejecutara cada ciclo
      }, t * time); //Indica el tiempo de espera entre cada paso del ciclo
    })(i);
  //Ejecutar este bucle cada segmento de tiempo indicado multiplicado por el numero de elementos
  setInterval(() => {
    //Recorre cada posicion del objeto pasado como propiedad
    for (let i = 0; i < object.length; i++)
      (function (t) {
        setTimeout(function () {
          cb(t, props); //Ejecuta una funcion pasada como propiedad que se ejecutara cada ciclo
        }, t * time); //Indica el tiempo de espera entre cada paso del ciclo
      })(i);
  }, time * object.length);
};

const cbDefault = (i, props) => {
  console.log(i, props);
};

//Recorrer el objeto con tiempo de espera
export const timeOut = (object = [], cb, props, time) => {
  for (let i = 0; i < object.length; i++)(
    function (t) {
      setTimeout(function () {
        cb(t, props)
      }, t * time)
    })(i)
}