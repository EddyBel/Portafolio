import { useContext } from "react";
import { RepoContext } from "../context/repo/repo.context";

export const useRepos = () => useContext(RepoContext);
