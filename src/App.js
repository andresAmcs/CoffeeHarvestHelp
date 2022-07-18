import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Navbar from "./componets/nav/navbar"

import Footer from "./componets/footer"

import Login from "./pages/Login"
import SingIn from "./pages/form/singIn"

import Cards from "./componets/card"

import prueba from "./pages/prueba"
import Graphic from "./componets/Grafica"
import Forms from "./componets/forms/form"
import Table from "./componets/index/table"
import IndexVisualizar from "./componets/visualizar/index"

import indexEmpleados from "./pages/index/indexEmpleados"
import indexActividades from "./pages/index/indexActividades"
import indexFinca from "./pages/index/indexFinca"
import indexLote from "./pages/index/indexLote"

import visualizarEmpleado from "./pages/visualizar/visualizarEmpleado"
import visualizarActividad from "./pages/visualizar/visualizarActividades"
import visualizarLote from "./pages/visualizar/visualizarLote"
import visualizarFinca from "./pages/visualizar/visualizarFinca"
import visualizarRegistro from "./pages/visualizar/visualizarRegistro"

import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Errores from "./pages/Error404"

import CompraInsumos from "./pages/form/compraInsumos"
import AplicacionFertilizantes from "./pages/form/aplicacionFertilizantes"
import CompraHerramientas from "./pages/form/compraHerramientas"
import Desyerva from "./pages/form/desyerva"
import Recoleccion from "./pages/form/Recoleccion"
import Renovacion from "./pages/form/renovacion"
import Ventas from "./pages/form/ventas"

import RegistrarActividad from "./pages/form/RegistrarActividad"
import RegistrarRegistro from "./pages/form/RegistrarRegistro"
import RegistrarEmpleado from "./pages/form/RegistrarEmpleado"
import RegistrarFinca from "./pages/form/RegistroFinca"
import RegistrarLote from "./pages/form/RegistroLote"

import ActualizarEmpleado from "./pages/form/ActulizarEmpleado"
import ActualizarFinca from "./pages/form/ActualizarFinca"
import ActualizarLote from "./pages/form/ActualizarLote"
import ActualizarRegistro from "./pages/form/ActualizarActividad"
import ActualizarActividad from "./pages/form/ActualizarActividad"


import SeleccionarActiRegis from "./pages/seleccionarActiRegis"
import SeleccionarActividad from "./pages/tipoActividad"


function App() {
  var logina = true
  var estado;
  var page = visualizarRegistro;
  var list ;
  var listNav1 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]
  var listNav2 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Empleados", icon:"people-carry-box"}]
  var listNav3 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Empleados", icon:"people-carry-box"},{text:"Actividades", icon:"address-book"}]
  var listNav4 = [{text:"Home", icon:"house"},{text:"Empleados", icon:"people-carry-box"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]


  if (logina == true ){    
    estado = prueba

    if (page == indexLote){      
      list = listNav3
    }
    else if(page == indexFinca){      
      list = listNav4
    }
    else if(page == indexEmpleados){
      list = listNav1
    }
    else if(page == indexActividades){      
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
      path="/login"
      element={<Login/>}
      />
      
    </Routes>
    <Footer/>
    </Router>
  )

}

export default App;
