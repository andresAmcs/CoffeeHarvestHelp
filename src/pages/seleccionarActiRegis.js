import React from "react";
import Cards from "../componets/card";

function SeleccionarActiRegis(){
  var listSeleccionarActividad =[{text:"Actividad", icon:"file-circle-plus", link:"/indexActividades"},
  {text:"Registro",icon:"clipboard-check",link:"/indexRegistros"}]
    
    return(
        <>
        <h2 className="font-medium leading-tight text-5xl my-10  text-center">Seleccione una opción</h2>            
        <div className="pb-20 flex ">
            <Cards cards={listSeleccionarActividad}/>        
        </div>
        </>
        
    )
}
export default SeleccionarActiRegis