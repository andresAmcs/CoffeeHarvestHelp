import Grafica from "../componets/Grafica"
import Card from "../componets/card"

function Home(){

    const lista = [{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

    return(
        <>
        
            <Card cards={lista}/>
            <Grafica/>
        </>
    )
}
export default Home