import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Usuario from './usuario/usuario.jsx';
import AddUsuario from './addusuario/addusuario.jsx';
import GetUsuario from './getusuario/getusuario.jsx';
import AltUsuario from './altusuario/altusuario.jsx';
import DelUsuario from './delusuario/delusuario.jsx';

import Canal from './canal/canal.jsx';
import AddCanal from './addcanal/addcanal.jsx';
import GetCanal from './getcanal/getcanal.jsx';
import AltCanal from './altcanal/altcanal.jsx';
import DelCanal from './delcanal/delcanal.jsx';

import Programa from './programa/programa.jsx';
import AddPrograma from './addprograma/addprograma.jsx';
import GetPrograma from './getprograma/getprograma.jsx';
import AltPrograma from './altprograma/altprograma.jsx';
import DelPrograma from './delprograma/delprograma.jsx';


import ProgramaFavorito from './programafavorito/programafavorito.jsx';
import AddProgramaFavorito from './addprogramafavorito/addprogramafavorito.jsx';
import GetProgramaFavorito from './getprogramafavorito/getprogramafavorito.jsx';
import AltProgramaFavorito from './altprogramafavorito/altprogramafavorito.jsx';
import DelProgramaFavorito from './delprogramafavorito/delprogramafavorito.jsx';

import Home from './home/home.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/addusuario' element={<AddUsuario />} />
        <Route path='/getusuario' element={<GetUsuario />} />
        <Route path='/altusuario' element={<AltUsuario />} />
        <Route path='/delusuario' element={<DelUsuario />} />

        <Route path='/canal' element={<Canal />} />
        <Route path='/addcanal' element={<AddCanal />} />
        <Route path='/getcanal' element={<GetCanal />} />
        <Route path='/altcanal' element={<AltCanal />} />
        <Route path='/delcanal' element={<DelCanal />} />

        <Route path='/programa' element={<Programa />} />
        <Route path='/addprograma' element={<AddPrograma />} />
        <Route path='/getprograma' element={<GetPrograma/>} />
        <Route path='/altprograma' element={<AltPrograma />} />
        <Route path='/delprograma' element={<DelPrograma />} />

        <Route path='/programafavorito' element={<ProgramaFavorito />} />
        <Route path='/addprogramafavorito' element={<AddProgramaFavorito />} />
        <Route path='/getprogramafavorito' element={<GetProgramaFavorito/>} />
        <Route path='/altprogramafavorito' element={<AltProgramaFavorito />} />
        <Route path='/delprogramafavorito' element={<DelProgramaFavorito />} />

        <Route path='/' element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);