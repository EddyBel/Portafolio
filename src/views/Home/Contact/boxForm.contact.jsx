import React from "react";

export function BoxForm({ children, title, description }) {

  return (
    <div className="contact-seccion-left w-4/6 h-full p-7">
      <h1 className="title-form-contact text-5xl mb-3">{title}</h1>
      <h3 className="description-form-contact text-xl mb-5">{description}</h3>
      {children}
    </div>
  );
}
