import React, { useEffect } from "react";
import "xtendui";
import "xtendui/src/drop";

//contadores
let count = 0;

export function ButtonAbout({ children, label }) {
  return (
    <div className="flex flex-col w-full h-full gap-3 text-center ">
      <label className="text-xs text-gray-300">{label}</label>
      <button className="w-full h-full p-2 rounded-xl shadow-xl hover:-translate-y-1 duration-200 bg-indigo-600 hover:bg-indigo-700 flex flex-col justify-center items-center">
        <div className="w-full h-full animate-bounce -translate-y-1">
          {children}
        </div>
      </button>
    </div>
  );
}

export function ButtonDireccion({ children, id, direccion }) {
  useEffect(() => {
    const button = document.getElementById(id);
    button.addEventListener("click", (e) => {
      e.preventDefault();
      window.location.assign(direccion);
      console.log("redireccionado");
    });
  }, [id, direccion]);
  return (
    <button
      className="bg-blue-600 p-3 rounded-xl w-full flex flex-row justify-center items-center shadow-blue-500 shadow-xl text-gray-200 hover:bg-blue-800 duration-150 hover:-translate-y-1 gap-2"
      id={id}
    >
      {children}
    </button>
  );
}
//Boton de envio
export function ButtonSubmit({ children, id, onClick, type }) {
  return (
    <button
      type={type}
      className="bg-blue-600 p-3 rounded-xl w-full flex flex-row justify-center items-center shadow-blue-500 shadow-xl text-gray-200 hover:bg-blue-800 duration-150 hover:-translate-y-1 gap-2"
      id={id}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export function ButtonDrop({
  titleButton,
  listOptions = [{ svg: null, textOption: "", direccion: "" }],
}) {
  //estilos tailwind
  const button =
    "xt-button py-2.5 px-3.5 text-sm rounded-md font-medium leading-snug tracking-wider uppercase text-white bg-primary-500 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600";

  const a =
    "xt-button py-1.5 px-3 text-sm rounded-md flex-auto font-medium leading-snug justify-start text-left text-white bg-gray-800 transition hover:text-white hover:bg-primary-600 active:text-white active:bg-primary-700 on:text-white on:bg-primary-600 flex flex-row gap-2";

  const card =
    "xt-card w-60 rounded-md shadow-lg text-white xt-links-inverse bg-gray-800 transition opacity-0 scale-95 group-in:opacity-100 group-in:scale-100 group-out:scale-105";

  return (
    <div>
      <div className="xt-list xt-list-3 items-center">
        <div data-xt-drop="{ position: 'auto-end', duration: 500 }">
          <button type="button" className={button} data-xt-drop-element>
            {titleButton}
          </button>
          <div className="xt-drop p-3 group" data-xt-drop-target>
            <div className={card}>
              <nav aria-label="Drop" className="xt-list flex-col p-3">
                {listOptions.map((option) => {
                  count = count + 1;
                  return (
                    <a
                      href={option.direccion}
                      className={a}
                      key={`options-button-drop-menu-${count}`}
                    >
                      {option.svg}
                      {option.textOption}
                    </a>
                  );
                })}
              </nav>
            </div>
            <div className="xt-arrow z-below -inset-1 m-3 w-3 h-3 bg-gray-800 opacity-0 transition-opacity ease-out-quint group-in:duration-300 group-out:duration-100 group-in:opacity-100"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
