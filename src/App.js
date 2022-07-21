
import Rutas from "./componets/routes"

import Navbar from "./componets/nav/navbar"

import Footer from "./componets/footer"


import NavBar from "./pages/navBar"



function App() {

  var listNav1 = [{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]
  var estado = NavBar;
  
  return (
    <>
    <Navbar buttons={estado}/>

  
  
    <Rutas/>
    <Footer/>
    </>
  )

}

export default App;
