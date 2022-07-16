import Navbar from "./componets/nav/navbar"
import prueba from "./pages/prueba"
import login from "./pages/login"
import Cards from "./componets/card"
import indexEmpleados from "./pages/index/indexEmpleados"
import indexActividades from "./pages/index/indexActividades"
import indexFinca from "./pages/index/indexFinca"
import indexLote from "./pages/index/indexLote"
import Table from "./componets/index/table"
import IndexVisualizar from "./componets/visualizar/index"
import visualizarEmpleado from "./pages/visualizar/visualizarEmpleado"
import visualizarActividad from "./pages/visualizar/visualizarActividades"
import visualizarLote from "./pages/visualizar/visualizarLote"
import visualizarFinca from "./pages/visualizar/visualizarFinca"
import visualizarRegistro from "./pages/visualizar/visualizarRegistro"
import Graphic from "./componets/Grafica"
import Forms from "./componets/forms/form"
import Footer from "./componets/footer"
import Nosotros from "./pages/Nosotros"
import Servicios from "./pages/Servicios"
import Errores from "./pages/Error404"


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
    estado = login
  }

  
  return (
    <>
    <Navbar buttons={estado}/>
    {/* <Cards cards={list}/> */}
    {/* <Table datos={page}/> */}
    <IndexVisualizar datas={page}/>
    {/* <Graphic/> */}
    {/* <Forms /> */}
    {/* <Nosotros/> */}
    {/* <Servicios /> */}
    {/* <Errores/> */}
    <Footer/>
    </>
  )

}

export default App;