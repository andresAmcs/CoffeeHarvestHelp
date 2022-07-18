import React from "react"
import Index from "./../../componets/visualizar/index"
import Grafica from "./../../componets/Grafica"

function VisualizarActividades(){
    var Actividades={
        title:"Actividad",
        values:[
            {
                keys:"Nombre",
                value:"Fumigar"
            },
            {
                keys:"Meses",
                value:"Enero-Abril-Marzo"
            },
            {
                keys:"Descripcion",
                value:"debe meterse al monte y volverse gerrillero"
            }        
        ]
    
    }
    return(
        <Index datas={Actividades}/>
    )
}


export default VisualizarActividades