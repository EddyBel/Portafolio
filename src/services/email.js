//importar el servicio de email
import emailjs from "@emailjs/browser";

//llaves de servicio de email
const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TEMPLATE_ID;
const publicKey = process.env.REACT_APP_PUBLIC_KEY;

export async function EmailJs(functionState) {
  //traer el elemento formulario
  const form = document.getElementById("form");

  emailjs.init(publicKey);

  //Estado de carga
  functionState("loading");

  emailjs.sendForm(serviceID, templateID, form).then(
    () => {
      //Cambia el estado a correcto
      functionState("check");
      //Regresa al estado normal
      setTimeout(() => {
        functionState("normal");
      }, 1200);
    },
    (err) => {
      //Cambia el estado a correcto
      functionState("error");
      //Regresa al estado normal
      setTimeout(() => {
        functionState("normal");
      }, 1200);
    }
  );
}
