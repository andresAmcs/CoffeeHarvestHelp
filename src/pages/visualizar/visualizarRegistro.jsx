import React from "react"
import Index from "../../componets/visualizar/index"

function VisualizarRegistro(){
    var Registro={
        title:"Registro",
        values:[
            {
                keys:"Nombre",
                value:"17542"
            },
            {
                keys:"Meses",
                value:"Pancho"
            },
            {
                keys:"Descripcion",
                value:"Enrrique"
            }
        ]
    
    }
 
    return <Index datas={Registro}/>

}

export default VisualizarRegistro