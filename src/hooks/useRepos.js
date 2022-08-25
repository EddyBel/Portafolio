import { useState } from "react";
//Api scripts
import { getApi, getImgRepo } from "../services/gitHubRepos";

const response = getApi("repos");

export function useRepos() {
  const [repos, setRepos] = useState();

  response.then((response) => {
    setRepos(response);
  });

  return {
    repos,
    getImgRepo,
  };
}
