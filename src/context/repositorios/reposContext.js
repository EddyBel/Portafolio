import { createContext, useState, useEffect } from 'react'
import { getRepos, getIMG, getDownload } from '../../services/github.API'

// Crea el contexto
export const reposContext = createContext()

// Provedor del contexto
export const ReposProvider = ({ children }) => {

    const [repos, setRepos] = useState()

    useEffect(() => {
        getRepos().then(response => setRepos(response))
    }, [])


    // useEffect(() => {
    //     console.log(repos)
    // }, [repos])

    const value = {
        repos,
        getIMG,
        getDownload
    }

    return (
        <reposContext.Provider value={value}>
            {children}
        </reposContext.Provider>
    )

}