import React from "react";
//estilos
import "./styles/App.css";
//Rutas
import { Pages } from "./routes/routes";
//contextos
import { RepoState } from "./context/repo/repo.state";

function App() {
  return (
    <RepoState>
      <Pages />
    </RepoState>
  );
}

export default App;
