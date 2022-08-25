import React from "react";
//estilos
import "./index.css";
//componentes
import { BoxForm } from "./boxForm.contact";
import { Form } from "./form.contact";
import { BoxImg } from "./boxImg.contact";

export function Contacto() {
  return (
    <div
      className="container-contact-seccion w-screen min-h-screen flex justify-center items-center p-16"
      id="contact-seccion"
    >
      <div className="card-form-contact w-full h-auto rounded-xl bg-gray-100 shadow-2xl overflow-hidden">
        <BoxForm
          title="Contacto"
          description="Contactame para formar parte del equipo"
        >
          <Form />
        </BoxForm>
        <BoxImg />
      </div>
    </div>
  );
}

// // Escuchar el envio al formulario
// document
// .getElementById("form")
// .addEventListener("submit", function (event) {
//   event.preventDefault();
//   // Define los datos del servicio
//   const serviceID = "service_z12kb0j";
//   const templateID = "template_t8bwnic";
//   const publicKey = "qehvpauTfMQyXhlew";
//   // Ejecuta el servicio de correo
//   emailjs.init(publicKey);

//   emailjs.sendForm(serviceID, templateID, this).then(
//     () => {
//       console.log("enviado");
//     },
//     (err) => {
//       console.log(err);
//     }
//   );
// });
