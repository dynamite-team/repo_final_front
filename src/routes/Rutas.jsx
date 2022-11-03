import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from '../views/home/Home';
import Info from '../views/informacion/Info';
import Login from '../views/login/Login';
import Catalogo from '../views/catalogo/catalogo'

/* -------------View productor------------- */
import HomeProductor from '../views/vistaProductor/HomeProductor';
import MisProductosView from '../views/vistaProductor/MisProductos';
import EstadisticasView from '../views/vistaProductor/Estadisticas';
import IngresosMensualesView from '../views/vistaProductor/Ingresos';


export default function Rutas() {
  return (
    <Router>
      <Routes>
        <Route exact path="/Informacion" element={<Info />} />
        <Route exact path="/Iniciosesion" element={<Login />} />
        <Route exact path="/Catalogo" element={<Catalogo />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/HomeProductor" element={<HomeProductor />} />
        <Route exact path='/MisEstadisticas' element={<EstadisticasView />} />
        <Route exact path='/IngresosMensuales' element={<IngresosMensualesView />} />
        <Route exact path='/MisProductos' element={<MisProductosView />} />
      </Routes>
    </Router>
  )
}

