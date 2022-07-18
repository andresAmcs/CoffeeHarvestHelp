import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Protected from "./componets/protected"

import Navbar from "./componets/nav/navbar"

import Footer from "./componets/footer"

import Login from "./pages/Login"
import SingIn from "./pages/form/singIn"

import prueba from "./pages/prueba"

import IndexEmpleados from "./pages/index/indexEmpleados"
import IndexActividades from "./pages/index/indexActividades"
import IndexFinca from "./pages/index/indexFinca"
import IndexLote from "./pages/index/indexLote"

import VisualizarEmpleado from "./pages/visualizar/visualizarEmpleado"
import VisualizarActividad from "./pages/visualizar/visualizarActividades"
import VisualizarLote from "./pages/visualizar/visualizarLote"
import VisualizarFinca from "./pages/visualizar/visualizarFinca"
import VisualizarRegistro from "./pages/visualizar/visualizarRegistro"

import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Errores from "./pages/Error404"

import CompraInsumos from "./pages/form/actividades/compraInsumos"
import AplicacionFertilizantes from "./pages/form/actividades/aplicacionFertilizantes"
import CompraHerramientas from "./pages/form/actividades/compraHerramientas"
import Desyerva from "./pages/form/actividades/desyerva"
import Recoleccion from "./pages/form/actividades/Recoleccion"
import Renovacion from "./pages/form/actividades/renovacion"
import Ventas from "./pages/form/ventas"

import RegistrarActividad from "./pages/form/registrar/RegistrarActividad"
import RegistrarRegistro from "./pages/form/registrar/RegistrarRegistro"
import RegistrarEmpleado from "./pages/form/registrar/RegistrarEmpleado"
import RegistrarFinca from "./pages/form/registrar/RegistroFinca"
import RegistrarLote from "./pages/form/registrar/RegistroLote"

import ActualizarEmpleado from "./pages/form/actualizar/ActulizarEmpleado"
import ActualizarFinca from "./pages/form/actualizar/ActualizarFinca"
import ActualizarLote from "./pages/form/actualizar/ActualizarLote"
import ActualizarRegistro from "./pages/form/actualizar/ActualizarActividad"
import ActualizarActividad from "./pages/form/actualizar/ActualizarActividad"


import SeleccionarActiRegis from "./pages/seleccionarActiRegis"
import SeleccionarActividad from "./pages/tipoActividad"
import VisualizarActividades from "./pages/visualizar/visualizarActividades"


function App() {
  var logina = true
  var estado;
  var page = VisualizarRegistro;
  var list ;
  var listNav1 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]
  var listNav2 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Empleados", icon:"people-carry-box"}]
  var listNav3 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Empleados", icon:"people-carry-box"},{text:"Actividades", icon:"address-book"}]
  var listNav4 = [{text:"Home", icon:"house"},{text:"Empleados", icon:"people-carry-box"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]


  if (logina == true ){    
    estado = prueba

    if (page == IndexLote){      
      list = listNav3
    }
    else if(page == IndexFinca){      
      list = listNav4
    }
    else if(page == IndexEmpleados){
      list = listNav1
    }
    else if(page == IndexActividades){      
      list = listNav2
    }
  }else{
    estado = Login
  }

  
  return (
    <Router>
    <Navbar buttons={estado}/>
    <Routes>
      <Route
      path="/indexEmpleado"
      element={<Protected isLogin={true}>
        <IndexEmpleados/>
      </Protected>}
      />
      <Route
      path="/login"
      element={<Login/>}
      />
      <Route
      path="/singin"
      element={<SingIn/>}
      />      

      <Route
      path="/*"
      element={<Errores/>}
      /> 

      <Route
      path="/nosotros"
      element={<Nosotros/>}
      />

      <Route
      path="/servicios"
      element={<SeleccionarActividad/>}
      />      
      
    </Routes>
    <Footer/>
    </Router>
  )

}

export default App;
