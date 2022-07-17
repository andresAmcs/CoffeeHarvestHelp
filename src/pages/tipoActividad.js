import React from "react";
import Cards from "../componets/card";

function SeleccionarActividad(){
  var listSeleccionarActividad =[{text:"Aplicación de Fertilizante", icon:"file-circle-plus"},
  {text:"Desyerva",icon:"clipboard-check"},
  {text:"Recolección",icon:"clipboard-check"},
  {text:"Renovación",icon:"clipboard-check"},
  {text:"Compra de Herramientas",icon:"clipboard-check"},
  {text:"Compra de Insumos",icon:"clipboard-check"},
  {text:"Ventas",icon:"clipboard-check"},
]
    
    return(
        <>
        <div className="p-20">
            <Cards cards={listSeleccionarActividad}/>        
        </div>
        </>
        
    )
}
export default SeleccionarActividad