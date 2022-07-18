import React from "react"
import Index from "./../../componets/visualizar/index"

function VisualizarFinca(){
    var Finca={
        title:"Finca",
        values:[
            {
                keys:"Id",
                value:"17542"
            },
            {
                keys:"Nombre",
                value:"Pancho"
            },
            {
                keys:"Tipo Finca",
                value:"Cafetera"
            },
            {
                keys:"Ubicacion",
                value:"Palestina"
            }
        ]
    
    }
    
    return <Index datas={Finca}/>

}

export default VisualizarFinca