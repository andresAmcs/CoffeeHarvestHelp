import React from "react";
import {BrowserRouter as Router,Navigate,Route,Routes,} from "react-router-dom";

// import Nav from "./pages/navBar/NavBar";
import Login from "./pages/login/Login";
import Registrar from "./pages/registrar/Registrar";

import Home from "./pages/home/Home";

import IndexActividad from "./pages/index/Actividad";
import IndexEmpleado from "./pages/index/Empleado";
import IndexFinca from "./pages/index/Finca";
import IndexLote from "./pages/index/Lote";

import SeleccionarFinca from "./pages/seleccionar/seleccionarFinca";

import VisualizarActividad from "./pages/visualizar/Actividad";
import VisualizarEmpleado from "./pages/visualizar/Empleado";
import VisualizarFinca from "./pages/visualizar/Finca";
import VisualizarLote from "./pages/visualizar/Lote";

import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div className="App ">
      <Router>
        
        <Routes>

          <Route path="/login" element={<Login />}></Route>
          <Route path="/registrar" element={<Registrar />}></Route>

          <Route path="home" element={<Home/>}></Route>

          <Route path="/index/*">
            <Route path="actividad" element={<IndexActividad />}> </Route>
            <Route path="empleado" element={<IndexEmpleado/>}> </Route>
            <Route path="finca" element={<IndexFinca/>}> </Route>
            <Route path="lote" element={<IndexLote/>}> </Route>
            <Route path="*" element={<h1>Error 404</h1>}> </Route>
          </Route>

          

          <Route path="/visualizar/*">
            <Route path="actividad" element={<VisualizarActividad/>}></Route>
            <Route path="empleado" element={<VisualizarEmpleado/>}></Route>
            <Route path="finca" element={<VisualizarFinca/>}></Route>
            <Route path="lote" element={<VisualizarLote/>}></Route>
          </Route>

          <Route path="*" element={<h1>Error 404</h1>}></Route>
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}
export default App;
