import React from "react";
//iconos svg
import { Alert } from "../layouts/Svg";
//Constantes
import { constans } from "../../consts/consts";
const { color, size } = constans();

export function Alerts({ text }) {
  return (
    <div className="w-full h-auto p-3 bg-gradient-to-bl to-yellow-500 from-yellow-200 flex flex-row items-center rounded-2xl gap-9 pl-12 shadow-xl mb-6 mt-6">
      <Alert height={size.litle} width={size.litle} color={color.black} />
      <h2 className="ml-5" style={{ fontWeight: "bold" }}>
        {text}
      </h2>
    </div>
  );
}
