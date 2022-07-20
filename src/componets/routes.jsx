import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Protected from "./protected"

import Navbar from "./nav/navbar"

import Footer from "./footer"

import Home from "./../pages/home"

import Login from "./../pages/login"
import SingIn from "./../pages/form/singIn"

import NavBar from "./../pages/navBar"

import IndexEmpleados from "../pages/index2/indexEmpleados2"
import IndexFincas from "../pages/index2/finca/indexFinca2"
import IndexLotes from "./../pages/index/indexLote"

import IndexActividades from "./../pages/index/indexActividades"
import IndexRegistros from "./../pages/index/indexRegistros"

import VisualizarEmpleados from "../pages/form/visualizar2/visualizarEmpleado"
import VisualizarLotes from "./../pages/visualizar/visualizarLote"
import VisualizarFincas from "../pages/form/visualizar2/visualizarFinca"

import VisualizarActividades from "./../pages/visualizar/visualizarActividades"
import VisualizarRegistros from "./../pages/visualizar/visualizarRegistro"

import Nosotros from "./../pages/Nosotros"
import Servicios from "./../pages/Servicios"
import Errores from "./../pages/Error404"

import CompraInsumos from "./../pages/form/actividades/compraInsumos"
import AplicacionFertilizantes from "./../pages/form/actividades/aplicacionFertilizantes"
import CompraHerramientas from "./../pages/form/actividades/compraHerramientas"
import Desyerva from "./../pages/form/actividades/desyerva"
import Recoleccion from "./../pages/form/actividades/Recoleccion"
import Renovacion from "./../pages/form/actividades/renovacion"
import Ventas from "./../pages/form/ventas"

import RegistrarActividad from "./../pages/form/registrar/RegistrarActividad"
import RegistrarRegistro from "./../pages/form/registrar/RegistrarRegistro"
import RegistrarEmpleado from "./../pages/form/registrar/RegistrarEmpleado"
import RegistrarFinca from "./../pages/form/registrar/RegistroFinca"
import RegistrarLote from "./../pages/form/registrar/RegistroLote"

import ActualizarEmpleado from "./../pages/form/editar/editarEmpleado"
import ActualizarFinca from "../pages/form/editar/editarFinca"
import ActualizarLote from "./../pages/form/actualizar/ActualizarLote"

import ActualizarRegistro from "./../pages/form/actualizar/ActualizarActividad"
import ActualizarActividad from "./../pages/form/actualizar/ActualizarActividad"


import SeleccionarActiRegis from "./../pages/seleccionarActiRegis"
import SeleccionarActividad from "./../pages/tipoActividad"

import RegistrarUsuario from "../pages/form/registrar/RegistrarUsuario"


function Rutas(){
  var ingresado = true

    return(

    <Router>
        <Routes>
        {/* rutas privadadas */}
        <Route
        path="/indexEmpleados"
        element={<Protected isLogin={ingresado}>
            <IndexEmpleados/>
        </Protected>}
        />

        <Route
        path="/indexActividades"
        element={<Protected isLogin={ingresado}>
            <IndexActividades/>
        </Protected>}
        />

        <Route
        path="/indexFincas"
        element={<Protected isLogin={ingresado}>
            <IndexFincas/>
        </Protected>}
        />

        <Route
        path="/indexLotes"
        element={<Protected isLogin={ingresado}>
            <IndexLotes/>
        </Protected>}
        />

        <Route
        path="/indexRegistros"
        element={<Protected isLogin={ingresado}>
            <IndexRegistros/>
        </Protected>}
        />

        <Route
        path="/visualizarActividades"
        element={<Protected isLogin={ingresado}>
            <VisualizarActividades/>
        </Protected>}
        />
        
        <Route
        path="/empleado/:id"
        element={<Protected isLogin={ingresado}>
            <VisualizarEmpleados/>
        </Protected>}
        />

        <Route
        path="/fincas/:id"
        element={<Protected isLogin={ingresado}>
            <VisualizarFincas/>
        </Protected>}
        />

        <Route
        path="/visualizarLotes"
        element={<Protected isLogin={ingresado}>
            <VisualizarLotes/>
        </Protected>}
        />

        <Route
        path="/visualizarRegistros"
        element={<Protected isLogin={ingresado}>
            <VisualizarRegistros/>
        </Protected>}
        />

        <Route
        path="/compraInsumos"
        element={<Protected isLogin={ingresado}>
            <CompraInsumos/>
        </Protected>}
        />

        <Route
        path="/aplicacionFertilizantes"
        element={<Protected isLogin={ingresado}>
            <AplicacionFertilizantes/>
        </Protected>}
        />

        <Route
        path="/compraHerramientas"
        element={<Protected isLogin={ingresado}>
            <CompraHerramientas/>
        </Protected>}
        />

        <Route
        path="/desyerva"
        element={<Protected isLogin={ingresado}>
            <Desyerva/>
        </Protected>}
        />

        <Route
        path="/recoleccion"
        element={<Protected isLogin={ingresado}>
            <Recoleccion/>
        </Protected>}
        />

        <Route
        path="/renovacion"
        element={<Protected isLogin={ingresado}>
            <Renovacion/>
        </Protected>}
        />

        <Route
        path="/ventas"
        element={<Protected isLogin={ingresado}>
            <Ventas/>
        </Protected>}
        />

        <Route
        path="/registrarActividad"
        element={<Protected isLogin={ingresado}>
            <RegistrarActividad/>
        </Protected>}
        />

        <Route
        path="/registrarRegistro"
        element={<Protected isLogin={ingresado}>
            <RegistrarRegistro/>
        </Protected>}
        />

        <Route
        path="/registrarEmpleado"
        element={<Protected isLogin={ingresado}>
            <RegistrarEmpleado/>
        </Protected>}
        />
        
        <Route
        path="/registrarFinca"
        element={<Protected isLogin={ingresado}>
            <RegistrarFinca/>
        </Protected>}
        />

        <Route
        path="/registrarLote"
        element={<Protected isLogin={ingresado}>
            <RegistrarLote/>
        </Protected>}
        />

        <Route
        path="/empleado/editar/:id"
        element={<Protected isLogin={ingresado}>
            <ActualizarEmpleado/>
        </Protected>}
        />

        <Route
        path="/fincas/editar/:id"
        element={<Protected isLogin={ingresado}>
            <ActualizarFinca/>
        </Protected>}
        />

        <Route
        path="/actualizarLote"
        element={<Protected isLogin={ingresado}>
            <ActualizarLote/>
        </Protected>}
        />

        <Route
        path="/actualizarRegistro"
        element={<Protected isLogin={ingresado}>
            <ActualizarRegistro/>
        </Protected>}
        />

        <Route
        path="/actualizarActividad"
        element={<Protected isLogin={ingresado}>
            <ActualizarActividad/>
        </Protected>}
        />

        <Route
        path="/seleccionarActiRegis"
        element={<Protected isLogin={ingresado}>
            <SeleccionarActiRegis/>
        </Protected>}
        />

        <Route
        path="/seleccionarActividad"
        element={<Protected isLogin={ingresado}>
            <SeleccionarActividad/>
        </Protected>}
        />





        {/* rutas publicas */}
        <Route
        path="/"
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

        <Route
        path="/home"
        element={<Home/>}
        />

        <Route
        path="/registrarUsuario"
        element={<RegistrarUsuario/>}
        />

    {/* 
        <Route
        path="/prueba"
        element={<SingIn2/>}
        />       */}
        
        </Routes>    
    </Router>

    )
}

export default Rutas