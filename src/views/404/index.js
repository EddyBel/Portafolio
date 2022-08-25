import React from 'react'
//estilos
import './index.css'
//utils
import { listRandom } from '../../utils/index'
//constantes
import { constans } from '../../consts/consts'
const { fonts, gradient, backgrounds } = constans()
//Obten una imagen random de la lista
const img = listRandom(backgrounds.P404U)

export function Error404() {

    return (
        <section className='overflow-hidden w-screen min-h-screen gap-9 flex flex-col justify-center items-center bg-cover bg-no-repeat' style={{
            backgroundImage: `${gradient.Secundary}, url('${img}')`
        }}>
            <div className='icon-logo p-10'>
                <h2 className='text-5xl text-gray-600' style={{
                    fontFamily: fonts.Arbutus
                }} >EB</h2>
            </div>
            <h1 className='text404 text-9xl' style={{
                fontFamily: fonts.Koisei
            }} >404</h1>
            <h2 className='text text-2xl text-center sm:text-4xl' style={{
                fontFamily: fonts.montserrat
            }}>Pagina no encontrada.</h2>
            <a className='button-direccion-home text-xl pl-4 pr-4 pt-2 pb-2 rounded-full text-gray-300' href='/'>Vuelve al Inicio</a>
        </section>
    )
}