import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Protected from "./componets/protected"

import Navbar from "./componets/nav/navbar"

import Footer from "./componets/footer"

import Login from "./pages/Login"
import SingIn from "./pages/form/singIn"

import NavBar from "./pages/navBar"

import IndexEmpleados from "./pages/index/indexEmpleados"
import IndexActividades from "./pages/index/indexActividades"
import IndexFincas from "./pages/index/indexFinca"
import IndexLotes from "./pages/index/indexLote"

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


function App() {
  var logina = true
  var estado;
  var page = VisualizarRegistros;
  var list ;
  var listNav1 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]
  var listNav2 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Empleados", icon:"people-carry-box"}]
  var listNav3 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Empleados", icon:"people-carry-box"},{text:"Actividades", icon:"address-book"}]
  var listNav4 = [{text:"Home", icon:"house"},{text:"Empleados", icon:"people-carry-box"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]


  if (logina == true ){    
    estado = NavBar

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
  }else{
    estado = Login
  }

  
  return (
    <Router>
    <Navbar buttons={estado}/>
    <Routes>
      {/* rutas privadadas */}
      <Route
      path="/indexEmpleado"
      element={<Protected isLogin={true}>
        <IndexEmpleados/>
      </Protected>}
      />

      <Route
      path="/indexActividades"
      element={<Protected isLogin={true}>
        <IndexActividades/>
      </Protected>}
      />

      <Route
      path="/indexFincas"
      element={<Protected isLogin={true}>
        <IndexFincas/>
      </Protected>}
      />

      <Route
      path="/indexLotes"
      element={<Protected isLogin={true}>
        <IndexLotes/>
      </Protected>}
      />

      <Route
      path="/visualizarActividades"
      element={<Protected isLogin={true}>
        <VisualizarActividades/>
      </Protected>}
      />
      
      <Route
      path="/visualizarEmpleados"
      element={<Protected isLogin={true}>
        <VisualizarEmpleados/>
      </Protected>}
      />

      <Route
      path="/visualizarFincas"
      element={<Protected isLogin={true}>
        <VisualizarFincas/>
      </Protected>}
      />

      <Route
      path="/visualizarLotes"
      element={<Protected isLogin={true}>
        <VisualizarLotes/>
      </Protected>}
      />

      <Route
      path="/visualizarRegistros"
      element={<Protected isLogin={true}>
        <VisualizarRegistros/>
      </Protected>}
      />

      <Route
      path="/compraInsumos"
      element={<Protected isLogin={true}>
        <CompraInsumos/>
      </Protected>}
      />

      <Route
      path="/aplicacionFertilizantes"
      element={<Protected isLogin={true}>
        <AplicacionFertilizantes/>
      </Protected>}
      />

      <Route
      path="/compraHerramientas"
      element={<Protected isLogin={true}>
        <CompraHerramientas/>
      </Protected>}
      />

      <Route
      path="/desyerva"
      element={<Protected isLogin={true}>
        <Desyerva/>
      </Protected>}
      />

      <Route
      path="/recoleccion"
      element={<Protected isLogin={true}>
        <Recoleccion/>
      </Protected>}
      />

      <Route
      path="/renovacion"
      element={<Protected isLogin={true}>
        <Renovacion/>
      </Protected>}
      />

      <Route
      path="/ventas"
      element={<Protected isLogin={true}>
        <Ventas/>
      </Protected>}
      />

      <Route
      path="/registrarActividad"
      element={<Protected isLogin={true}>
        <RegistrarActividad/>
      </Protected>}
      />

      <Route
      path="/registrarRegistro"
      element={<Protected isLogin={true}>
        <RegistrarRegistro/>
      </Protected>}
      />

      <Route
      path="/registrarEmpleado"
      element={<Protected isLogin={true}>
        <RegistrarEmpleado/>
      </Protected>}
      />
      
      <Route
      path="/registrarFinca"
      element={<Protected isLogin={true}>
        <RegistrarFinca/>
      </Protected>}
      />

      <Route
      path="/registrarLote"
      element={<Protected isLogin={true}>
        <RegistrarLote/>
      </Protected>}
      />

      <Route
      path="/actualizarEmpleado"
      element={<Protected isLogin={true}>
        <ActualizarEmpleado/>
      </Protected>}
      />

      <Route
      path="/actualizarFinca"
      element={<Protected isLogin={true}>
        <ActualizarFinca/>
      </Protected>}
      />

      <Route
      path="/actualizarLote"
      element={<Protected isLogin={true}>
        <ActualizarLote/>
      </Protected>}
      />

      <Route
      path="/actualizarRegistro"
      element={<Protected isLogin={true}>
        <ActualizarRegistro/>
      </Protected>}
      />

      <Route
      path="/actualizarActividad"
      element={<Protected isLogin={true}>
        <ActualizarActividad/>
      </Protected>}
      />

      <Route
      path="/seleccionarActiRegis"
      element={<Protected isLogin={true}>
        <SeleccionarActiRegis/>
      </Protected>}
      />

      <Route
      path="/seleccionarActividad"
      element={<Protected isLogin={true}>
        <SeleccionarActividad/>
      </Protected>}
      />

      {/* rutas publicas */}
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
      element={<Servicios/>}
      />      
      
    </Routes>
    <Footer/>
    </Router>
  )

}

export default App;
