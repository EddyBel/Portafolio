import { ADD_DATA_REPO } from "../types";

export function RepoReducer(state, action) {
  switch (action.type) {
    case ADD_DATA_REPO:
      return {
        ...state,
        name: action.payload.nameRepo,
        description: action.payload.description,
        img: action.payload.img,
        direccion: action.payload.direccion,
        download: action.payload.download,
      };
    default:
      return { ...state };
  }
}
