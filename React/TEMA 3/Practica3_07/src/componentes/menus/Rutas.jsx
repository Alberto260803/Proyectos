import React from 'react'
import {Routes, Route} from "react-router-dom"
import Inicio from '../barra_navegacion/Inicio.jsx';
import Peliculas from '../barra_navegacion/Peliculas.jsx';
import Interpretes from '../barra_navegacion/Interpretes.jsx';
import Galeria from '../barra_navegacion/Galeria.jsx';
import AcercaDe from '../barra_navegacion/AcercaDe.jsx';
import Titulo from '../componentes_submenus/peliculas/Titulo.jsx';
import Interprete from '../componentes_submenus/peliculas/Interprete.jsx';
import Director from '../componentes_submenus/peliculas/Director.jsx';
import GaleriaTitulo from '../componentes_submenus/galeria/Titulo.jsx';
import GaleriaInterprete from '../componentes_submenus/galeria/Interprete.jsx';
import GaleriaDirector from '../componentes_submenus/galeria/Director.jsx';
import Error from '../barra_navegacion/Error.jsx';

const Rutas = () => {
  return (
    <>
        <Routes>
            <Route path='/' element={<Inicio/>}/>
            <Route path='/peliculas' element={<Peliculas/>}>
              <Route path='titulo' element={<Titulo/>}/>
              <Route path='interprete' element={<Interprete/>}/>
              <Route path='director' element={<Director/>}/>
            </Route>
            <Route path='/interpretes' element={<Interpretes/>}/>
            <Route path='/galeria' element={<Galeria/>}>
              <Route path='titulo' element={<GaleriaTitulo/>}/>
              <Route path='interprete' element={<GaleriaInterprete/>}/>
              <Route path='director' element={<GaleriaDirector/>}/>
            </Route>
            <Route path='/acerca-de' element={<AcercaDe/>}/>
            <Route path='*' element={<Error/>}/>
        </Routes>
    </>
  )
}

export default Rutas