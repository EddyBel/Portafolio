import { useContext } from "react";
import { RepoContext } from "../context/repo/repo.context";
import { reposContext } from '../context/repositorios/reposContext'

export const useRepos = () => useContext(RepoContext);

export const useRepositorios = () => useContext(reposContext)