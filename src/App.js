
import Rutas from "./componets/routes"

import Navbar from "./componets/nav/navbar"

import Footer from "./componets/footer"

import Home from "./pages/home"

import Login from "./pages/Login"
import SingIn from "./pages/form/singIn"

import NavBar from "./pages/navBar"

import IndexEmpleados from "./pages/index/indexEmpleados"
import IndexActividades from "./pages/index/indexActividades"
import IndexFincas from "./pages/index/indexFinca"
import IndexLotes from "./pages/index/indexLote"
import IndexRegistros from "./pages/index/indexRegistros"

import VisualizarEmpleados from "./pages/visualizar/visualizarEmpleado"
import VisualizarActividades from "./pages/visualizar/visualizarActividades"
import VisualizarLotes from "./pages/visualizar/visualizarLote"
import VisualizarFincas from "./pages/visualizar/visualizarFinca"
import VisualizarRegistros from "./pages/visualizar/visualizarRegistro"

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

import Cards from "./componets/card"

function App() {
  var logina = true
  var estado = NavBar;
  var page = IndexLotes;
  var list ;
  var listNav1 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]
  var listNav2 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"}]
  var listNav3 = [{text:"Home", icon:"house", link:"/home"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]
  var listNav4 = [{text:"Home", icon:"house", link:"/home"},{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]
    

    if (page == IndexLotes){      
      list = listNav3
    }
    else if(page == IndexFincas){      
      list = listNav4
    }
    else if(page == IndexEmpleados){
      list = listNav1
    }
    else if(page == IndexActividades){      
      list = listNav2
    }
  

  
  return (
    <>
    <Navbar buttons={estado}/>

    {
      logina?<Cards cards={list}/>:null
    } 
    <Rutas/>
    <Footer/>
    </>
  )

}

export default App;
