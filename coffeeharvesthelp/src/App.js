import Navbar from "./componets/nav/navbar"
import prueba from "./pages/prueba";
import login from "./pages/login"
import Cards from "./componets/index/card";
import indexEmpleado from "./pages/indexEmpleados"
import indexActividades from "./pages/indexActividades"
import indexFinca from "./pages/indexFinca"
import indexLote from "./pages/indexLote"

function App() {
  var logina = true
  var estado;
  var page = indexLote;
  if (logina == true ){    
    estado = prueba

    if (page == indexLote){
      page = indexLote
    }
  }else{
    estado = login
  }

  
  return (
    <>
    <Navbar buttons={estado}/>
    <Cards cards={page}/>
    </>
  )

}

export default App;
