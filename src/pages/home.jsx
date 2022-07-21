import Grafica from "../componets/Grafica"
import Card from "../componets/card"
import Navbar from "../componets/nav/navbar"
import estado from "../pages/navBar"
import { getRegistros,moneyToListActividad } from "../helpers/fetch"
import React, { useEffect,useState } from "react";

function Home(){

    const lista = [{text:"Empleados", icon:"people-carry-box", link:"/indexEmpleados"},{text:"Finca", icon:"people-roof", link:"/indexFincas"},{text:"Lote", icon:"kaaba", link:"/indexLotes"},{text:"Actividades", icon:"address-book", link:"/seleccionarActiRegis"}]

    const [cats, setCats] = useState([]);

    const loadCats = async () => {
        const json = await getRegistros();
        const data =await moneyToListActividad(json);
        
        let a =0
        let b =0
        let c =0
        let d =0

        data.map((dato)=>{
            
            if(dato.tipoLaborId==1){
                a+=dato.valorTotal
            }
            else if(dato.tipoLaborId==2){
                b+=dato.valorTotal
            }
            else if(dato.tipoLaborId==3){
                c+=dato.valorTotal
            }
            else if(dato.tipoLaborId==4){
                d+=dato.valorTotal
            }
            
        })

        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)

        setCats([a,b,c,d]);
      }
      
      useEffect(() => {
        (async () => {
          await loadCats()


        })();
      }, []);

    return(
        <>
                <Navbar buttons={estado}/>
                <Card cards={lista}/>
                
                <Grafica datos={cats}/>

        </>
    )
}
export default Home