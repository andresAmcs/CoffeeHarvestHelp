import Navbar from "./componets/nav/navbar"
import prueba from "./pages/prueba"
import login from "./pages/login"
import Cards from "./componets/card"
import indexEmpleados from "./pages/index/indexEmpleados"
import indexActividades from "./pages/index/indexActividades"
import indexFinca from "./pages/index/indexFinca"
import indexLote from "./pages/index/indexLote"
import Table from "./componets/index/table"
import Index from "./componets/visualizar/index"
import visualizarEmpleado from "./pages/visualizar/visualizarEmpleado"
import Graphic from "./componets/Grafica"
import Forms from "./componets/forms/form"


function App() {
  var logina = true
  var estado;
  var page = indexLote;
  var list ;
  var list1 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]
  var list2 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Lote", icon:"kaaba"},{text:"Empleados", icon:"people-carry-box"}]
  var list3 = [{text:"Home", icon:"house"},{text:"Finca", icon:"people-roof"},{text:"Empleados", icon:"people-carry-box"},{text:"Actividades", icon:"address-book"}]
  var list4 = [{text:"Home", icon:"house"},{text:"Empleados", icon:"people-carry-box"},{text:"Lote", icon:"kaaba"},{text:"Actividades", icon:"address-book"}]

  

  if (logina == true ){    
    estado = prueba

    if (page == indexLote){      
      list = list3
    }
    else if(page == indexFinca){      
      list = list4
    }
    else if(page == indexEmpleados){
      list = list1
    }
    else if(page == indexActividades){      
      list = list2
    }
  }else{
    estado = login
  }

  
  return (
    <>
    <Navbar buttons={estado}/>
    <Cards cards={list}/>
    {/* <Table datos={indexActividades}/>
    <Index datas={visualizarEmpleado}/>
    <Graphic/> */}
    <Forms />
    </>
  )

}

export default App;
