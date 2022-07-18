import React from "react";
import Cards from "../componets/card";

function SeleccionarActividad(){
  var listSeleccionarActividad =[{text:"Aplicación de Fertilizante", icon:"file-circle-plus",link:"/aplicacionFertilizantes"},
  {text:"Desyerva",icon:"clipboard-check",link:"/desyerva"},
  {text:"Recolección",icon:"clipboard-check",link:"/recoleccion"},
  {text:"Renovación",icon:"clipboard-check",link:"/renovacion"},
  {text:"Compra de Herramientas",icon:"clipboard-check",link:"/compraHerramientas"},
  {text:"Compra de Insumos",icon:"clipboard-check",link:"/compraInsumos"},
  {text:"Ventas",icon:"clipboard-check",link:"/ventas"},
]
    
    return(
        <>
        <h2 className="font-medium leading-tight text-5xl my-10  text-center">Seleccione el tipo de actividad que desea agregar</h2>            
        <div className="pb-20">
            <Cards cards={listSeleccionarActividad}/>        
        </div>
        </>
        
    )
}
export default SeleccionarActividad