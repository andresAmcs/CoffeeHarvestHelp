import React from "react"
import Index from "../../componets/visualizar/index"

function VisualizarEmpleado(){

    


    var empleado={
        title:"Empleado",
        values:[
            {
                keys:"Documento",
                value:"17542"
            },
            {
                keys:"Nombre",
                value:"Pancho"
            },
            {
                keys:"Apellidos",
                value:"Enrrique"
            },
            {
                keys:"Pago",
                value:"250000"
            },
            {
                keys:"Genero",
                value:"M"
            },
            {
                keys:"Correo",
                value:"Enrrique@gmail.com"
            },
            {
                keys:"Tipo Contrato",
                value:"Por Kilos"
            }
        ]
    
    }
    return <Index datas={empleado}/>

}

export default VisualizarEmpleado