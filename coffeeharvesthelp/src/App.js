import React from "react";
import {BrowserRouter as Router,Navigate,Route,Routes,} from "react-router-dom";

import Nav from "./pages/nav/Navbar"
import Login from "./pages/login/Login";
import Registrar from "./pages/registrar/Registrar";

import Home from "./pages/home/Home";

import IndexActividad from "./pages/index/Actividad";
import IndexEmpleado from "./pages/index/Empleado";
import IndexFinca from "./pages/index/Finca";
import IndexLote from "./pages/index/Lote";

import VisualizarActividad from "./pages/visualizar/Actividad";
import VisualizarEmpleado from "./pages/visualizar/Empleado";
import VisualizarFinca from "./pages/visualizar/Finca";
import VisualizarLote from "./pages/visualizar/Lote";

import AñadirActividad from "./pages/aniadir/AñadirActividad";

import Footer from "./pages/footer/Footer";

import Error404 from "./pages/404/Error404";


function App() {
  return (
    <div className="App ">
      <Router>
        <Nav/>
        <Routes>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<Registrar />}></Route>

          <Route path="home" element={<Home/>}></Route>

          <Route path="/index/*">
            <Route path="actividad" element={<IndexActividad />}> </Route>
            <Route path="empleado" element={<IndexEmpleado ID="481464" nombres="Juan" apellidos="Montollas"/>}> </Route>
            <Route path="finca" element={<IndexFinca/>}> </Route>
            <Route path="lote" element={<IndexLote/>}> </Route>
            <Route path="*" element={<Error404/>}> </Route>
          </Route>

          <Route path="/visualizar/*">
            <Route path="actividad" element={<VisualizarActividad/>}></Route>
            <Route path="empleado" element={<VisualizarEmpleado/>}></Route>
            <Route path="finca" element={<VisualizarFinca/>}></Route>
            <Route path="lote" element={<VisualizarLote/>}></Route>
            <Route path="*" element={<Error404 />}></Route>
          </Route>

          <Route path="/aniadir/*">
            <Route path="avtividad" element={<AñadirActividad/>}></Route>
          </Route>

          <Route path="*" element={<Error404/>}></Route>

          
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
