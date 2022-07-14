import Navbar from "./componets/nav/navbar"
import prueba from "./pages/prueba";
import login from "./pages/login"
import Cards from "./componets/index/card";
import indexEmpleado from "./pages/indexEmpleados"

function App() {
  var logina = true
  var estado;
  var page = indexEmpleado;
  if (logina == true ){    
    estado = prueba

    if (page == indexEmpleado){
      page = indexEmpleado
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
