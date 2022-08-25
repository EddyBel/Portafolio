import React from "react";
import { Routes, Route } from "react-router-dom";
//componentes
import { Home } from "../views/Home/index";
import { Error404 } from "../views/404/index"

export function Pages() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  );
}
