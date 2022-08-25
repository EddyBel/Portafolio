import React, { useState } from "react";
//componentes
import {
  InputRoundedLabel,
  ButtonSubmit,
  TextArea,
  Alerts,
} from "../../../components/common/index";
//svg iconos
import {
  PaperPlaneSvg,
  Check,
  Error,
  Spinner,
} from "../../../components/layouts/Svg";
//scripts y servicios
import { checkInputValues, cleanInputs } from "../../../utils/index";
import { EmailJs } from "../../../services/email";
//constantes
import { constans } from "../../../consts/consts";
const { size, color } = constans();

//constantes y variables
//id de inputs
const ids = ["name", "lastName", "email", "telephone", "message"];

export function Form() {
  //Estado de los inputs
  const [data, setForm] = useState({
    name: null,
    lastName: null,
    email: null,
    number: null,
    description: null,
  });

  //Estado de del envio
  const [stateSubmit, setSubmitState] = useState("normal");

  //Estado de los avisos
  const [alert, setAlert] = useState();

  //Evento del nombre
  const handleChangeName = ({ target: { value } }) => {
    setForm({
      ...data,
      name: value,
    });
  };

  //Evento del apellido
  const handleChangeLastName = ({ target: { value } }) => {
    setForm({
      ...data,
      lastName: value,
    });
  };

  //Evento del correo
  const handleChangeEmail = ({ target: { value } }) => {
    setForm({
      ...data,
      email: value,
    });
  };

  //Evento de numero
  const handleChangeNumber = ({ target: { value } }) => {
    setForm({
      ...data,
      number: value,
    });
  };

  //Evento de la descripcion
  const handleChangeDescription = ({ target: { value } }) => {
    setForm({
      ...data,
      description: value,
    });
  };

  //Enviar estados
  const buttonSubmit = (props) => {
    setAlert(null);
    //Verifica que todos los campos esten llenos
    if (checkInputValues(ids)) {
      //Enviar info al correo de destino
      EmailJs(setSubmitState);
      //Limpiar los inputs
      cleanInputs(ids);
    } else {
      //Marca el error
      setAlert("Tienes que llenar todos los campos");
    }
  };

  //Coloca el svg dependiendo el estado
  const iconButton = (state) => {
    switch (state) {
      case "loading":
        return (
          <Spinner
            color={color.white2}
            height={size.litle}
            width={size.litle}
          />
        );
      case "check":
        return (
          <Check color={color.white2} height={size.litle} width={size.litle} />
        );
      case "error":
        return (
          <Error color={color.white2} height={size.litle} width={size.litle} />
        );
      case "normal":
        return (
          <PaperPlaneSvg
            height={size.litle}
            width={size.litle}
            color={color.white2}
          />
        );
      default:
        return "Fallo de estado";
    }
  };

  return (
    <form className="w-full h-auto" id="form">
      <div className="flex justify-between gap-11">
        <InputRoundedLabel
          label="Nombre"
          labelFor="name"
          name="name"
          id="name"
          type="text"
          placeholder="Nombre"
          requerided={true}
          onChange={handleChangeName}
        />
        <InputRoundedLabel
          label="Apellidos"
          labelFor="last-name"
          name="lastName"
          id="lastName"
          placeholder="Apellidos"
          type="texto"
          requerided={true}
          onChange={handleChangeLastName}
        />
      </div>
      <div className="flex justify-between gap-11">
        <InputRoundedLabel
          label="Correo"
          labelFor="email"
          name="email"
          id="email"
          type="email"
          placeholder="ejemplo@correo.com"
          requerided={true}
          onChange={handleChangeEmail}
        />
        <InputRoundedLabel
          label="Telefono"
          labelFor="telephone"
          name="telephone"
          id="telephone"
          placeholder="Telefono"
          type="number"
          requerided={true}
          onChange={handleChangeNumber}
        />
      </div>
      <div className="w-full h-44 mb-11">
        <TextArea
          label="Asunto"
          labelFor="input-text-area"
          name="message"
          id="message"
          placeholder="Asunto del correo"
          key="input-text-area"
          onChange={handleChangeDescription}
        />
      </div>
      {alert && <Alerts text={alert} />}
      <div className="w-4/6 m-auto">
        <ButtonSubmit
          id="button"
          type="submit"
          onClick={buttonSubmit}
          callBack={buttonSubmit}
        >
          {iconButton(stateSubmit)}
        </ButtonSubmit>
      </div>
    </form>
  );
}
