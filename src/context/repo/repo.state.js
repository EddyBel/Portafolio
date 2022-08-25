import React, { useReducer } from "react";

import { RepoReducer } from "./repo.reducer";
import { RepoContext } from "./repo.context";

export const RepoState = (props) => {
  const initialState = {
    name: null,
    description: null,
    img: null,
    direccion: null,
    download: null,
  };

  const [state, dispatch] = useReducer(RepoReducer, initialState);

  const addDataRepo = (value) => {
    dispatch({ type: "ADD_DATA_REPO", payload: value });
  };

  const values = {
    name: state.name,
    img: state.img,
    direccion: state.direccion,
    download: state.download,
    description: state.description,
    addDataRepo,
  };

  return (
    <RepoContext.Provider value={values}>{props.children}</RepoContext.Provider>
  );
};
