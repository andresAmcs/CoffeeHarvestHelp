import React from "react";
import Cards from "../componets/card";

function SeleccionarActiRegis(){
  var listSeleccionarActividad =[{text:"Actividad", icon:"file-circle-plus"},{text:"Registro",icon:"clipboard-check"}]
    
    return(
        <>
        <div className="py-20 flex ">
            <Cards cards={listSeleccionarActividad}/>        
        </div>
        </>
        
    )
}
export default SeleccionarActiRegis